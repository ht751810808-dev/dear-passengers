/** Native WebSocket transport for a host-authoritative flight. No game simulation lives here. */
export type CrewRole = 'host' | 'guest';
export type FlightRoomStatus = 'connecting' | 'connected' | 'reconnecting' | 'closed';
export type CrewPlayer = { id: string; name: string; role: CrewRole; connected: boolean };
export type FlightPose = { x: number; y: number; z: number; yaw: number; pitch: number; held?: string | null; piloting?: boolean };
export type FlightAction = { kind: string; [key: string]: unknown };
export type FlightRoomEvent =
  | { type: 'state'; status: FlightRoomStatus }
  | { type: 'roster'; players: CrewPlayer[] }
  | { type: 'world'; snapshot: unknown; sequence: number }
  | { type: 'action'; playerId: string; action: FlightAction; id: string }
  | { type: 'position'; playerId: string; pose: FlightPose }
  | { type: 'sync-request'; playerId: string }
  | { type: 'host-away'; until: number }
  | { type: 'host-back' }
  | { type: 'ended'; reason: string }
  | { type: 'error'; code: string; message: string };

export const DEFAULT_FLIGHT_ROOM_URL = 'https://dear-passengers-flight-rooms.ht751810808.workers.dev';
export const FLIGHT_ROOM_PROTOCOL = 1;
export const FLIGHT_ROOM_MAX_BYTES = 65_536;
export const FLIGHT_ROOM_RECONNECT_MS = 20_000;

type Credentials = { hostSecret?: string; resumeToken?: string };
type Listener = (event: FlightRoomEvent) => void;

/** Accepts http(s) and ws(s); secrets only travel inside the first WebSocket frame. */
function roomEndpoint(value: string): URL {
  const url = new URL(value);
  if (!['http:', 'https:', 'ws:', 'wss:'].includes(url.protocol)) throw new Error('ROOM_ENDPOINT_INVALID');
  if (url.username || url.password || url.search || url.hash) throw new Error('ROOM_ENDPOINT_INVALID');
  url.protocol = url.protocol === 'wss:' ? 'https:' : url.protocol === 'ws:' ? 'http:' : url.protocol;
  url.pathname = url.pathname.replace(/\/+$/, '');
  return url;
}

export class FlightRoomSession {
  readonly role: CrewRole;
  readonly code: string;
  playerId = '';
  players: CrewPlayer[] = [];
  status: FlightRoomStatus = 'connecting';
  private readonly endpoint: string;
  private readonly name: string;
  private readonly credentials: Credentials;
  private socket: WebSocket | null = null;
  private readonly listeners = new Set<Listener>();
  private retryTimer: ReturnType<typeof setTimeout> | null = null;
  private heartbeat: ReturnType<typeof setInterval> | null = null;
  private handshakeTimer: ReturnType<typeof setTimeout> | null = null;
  private readyResolve: ((session: FlightRoomSession) => void) | null = null;
  private readyReject: ((reason: Error) => void) | null = null;
  private everReady = false;
  private intentionalClose = false;
  private disconnectedAt = 0;
  private retryCount = 0;
  private lastReceived = 0;
  private worldSequence = 0;
  private actionSequence = 0;
  private latestWorld: Extract<FlightRoomEvent, { type: 'world' }> | null = null;
  private hostAwayUntil = 0;

  private constructor(endpoint: string, code: string, name: string, role: CrewRole, credentials: Credentials) {
    this.endpoint = roomEndpoint(endpoint).toString().replace(/\/$/, '');
    this.code = code;
    this.name = name.trim().slice(0, 24) || (role === 'host' ? 'Captain' : 'Crew');
    this.role = role;
    this.credentials = credentials;
  }

  static connect(endpoint: string, code: string, name: string, role: CrewRole, credentials: Credentials = {}): Promise<FlightRoomSession> {
    const cleanCode = code.toUpperCase().replace(/[\s-]/g, '');
    if (!/^[A-HJ-NP-Z2-9]{8}$/.test(cleanCode)) return Promise.reject(new Error('ROOM_CODE_INVALID'));
    const session = new FlightRoomSession(endpoint, cleanCode, name, role, credentials);
    return new Promise((resolve, reject) => {
      session.readyResolve = resolve;
      session.readyReject = reject;
      session.open();
    });
  }

  /** Subscription replays current connection/roster/world so joining never misses initial sync. */
  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    listener({ type: 'state', status: this.status });
    listener({ type: 'roster', players: this.players.slice() });
    if (this.latestWorld) listener(this.latestWorld);
    if (this.hostAwayUntil) listener({ type: 'host-away', until: this.hostAwayUntil });
    return () => { this.listeners.delete(listener); };
  }

  /** Host only. Call with the full authoritative state around 10 Hz, and after significant actions. */
  publishWorld(snapshot: unknown): boolean {
    if (this.role !== 'host') return false;
    return this.send({ type: 'world', sequence: ++this.worldSequence, snapshot });
  }

  /** Position reports are untrusted input: the host must clamp movement and validate interaction distance. */
  sendPosition(pose: FlightPose): boolean { return this.send({ type: 'position', pose }); }

  /** Guest only. No queued actions are replayed after a reconnect. Host executes its own actions locally. */
  sendAction(action: FlightAction): boolean {
    if (this.role !== 'guest' || this.hostAwayUntil) return false;
    return this.send({ type: 'action', id: `${this.playerId}:${++this.actionSequence}`, action });
  }

  close(): void {
    if (this.intentionalClose) return;
    this.send({ type: 'leave' });
    this.intentionalClose = true;
    this.clearTimers();
    this.socket?.close(1000, 'left room');
    this.socket = null;
    this.setStatus('closed');
    this.readyReject?.(new Error('ROOM_CLOSED'));
    this.readyReject = null;
    this.readyResolve = null;
  }

  private emit(event: FlightRoomEvent): void {
    this.listeners.forEach(listener => {
      try { listener(event); } catch (error) { console.error('Flight room listener failed', error); }
    });
  }

  private setStatus(status: FlightRoomStatus): void {
    this.status = status;
    this.emit({ type: 'state', status });
  }

  private send(value: unknown): boolean {
    if (this.status !== 'connected' || !this.socket || this.socket.readyState !== WebSocket.OPEN || this.socket.bufferedAmount > 131_072) return false;
    let json: string;
    try { json = JSON.stringify(value); } catch { return false; }
    if (new TextEncoder().encode(json).byteLength > FLIGHT_ROOM_MAX_BYTES) return false;
    this.socket.send(json);
    return true;
  }

  private open(): void {
    if (this.intentionalClose) return;
    const url = new URL(`${this.endpoint}/rooms/${this.code}/socket`);
    url.protocol = url.protocol === 'https:' ? 'wss:' : 'ws:';
    const socket = new WebSocket(url.toString());
    this.socket = socket;
    this.lastReceived = Date.now();
    this.handshakeTimer = setTimeout(() => socket.close(4000, 'handshake timeout'), 8_000);
    socket.onopen = () => {
      if (socket !== this.socket || this.intentionalClose) return;
      socket.send(JSON.stringify({ type: 'hello', protocol: FLIGHT_ROOM_PROTOCOL, role: this.role, name: this.name, playerId: this.playerId || undefined, ...this.credentials }));
    };
    socket.onmessage = event => {
      if (socket !== this.socket || typeof event.data !== 'string') return;
      this.lastReceived = Date.now();
      let message: Record<string, unknown>;
      try { message = JSON.parse(event.data); } catch { return; }
      if (message.type === 'welcome') {
        if (this.handshakeTimer) clearTimeout(this.handshakeTimer);
        this.handshakeTimer = null;
        this.playerId = String(message.playerId);
        this.players = message.players as CrewPlayer[];
        if (typeof message.resumeToken === 'string') this.credentials.resumeToken = message.resumeToken;
        this.retryCount = 0;
        this.disconnectedAt = 0;
        this.everReady = true;
        this.setStatus('connected');
        this.emit({ type: 'roster', players: this.players.slice() });
        this.readyResolve?.(this);
        this.readyResolve = null;
        this.readyReject = null;
        if (this.heartbeat) clearInterval(this.heartbeat);
        this.heartbeat = setInterval(() => {
          if (Date.now() - this.lastReceived > 25_000) socket.close(4000, 'heartbeat timeout');
          else this.send({ type: 'ping', at: Date.now() });
        }, 8_000);
        return;
      }
      if (message.type === 'pong') return;
      if (message.type === 'ended') { this.end(String(message.reason || 'ROOM_ENDED')); return; }
      if (message.type === 'error') {
        const error = { type: 'error', code: String(message.code || 'ROOM_ERROR'), message: String(message.message || 'Room request failed') } as const;
        this.emit(error);
        if (!this.everReady || message.fatal === true) this.end(error.code);
        return;
      }
      if (message.type === 'roster') this.players = message.players as CrewPlayer[];
      if (message.type === 'world') {
        const world = message as unknown as Extract<FlightRoomEvent, { type: 'world' }>;
        if (this.latestWorld && world.sequence <= this.latestWorld.sequence) return;
        this.latestWorld = world;
      }
      if (message.type === 'host-away') this.hostAwayUntil = Number(message.until);
      if (message.type === 'host-back') this.hostAwayUntil = 0;
      if (['roster', 'world', 'action', 'position', 'sync-request', 'host-away', 'host-back'].includes(String(message.type))) this.emit(message as unknown as FlightRoomEvent);
    };
    socket.onerror = () => { /* Browser exposes details through close; retry there once. */ };
    socket.onclose = event => {
      if (socket !== this.socket || this.intentionalClose) return;
      if (this.handshakeTimer) clearTimeout(this.handshakeTimer);
      if (this.heartbeat) clearInterval(this.heartbeat);
      this.handshakeTimer = null;
      this.heartbeat = null;
      if (!this.everReady) { this.end(event.reason || 'ROOM_CONNECTION_FAILED'); return; }
      if (event.code >= 4400 || event.code === 1008) { this.end(event.reason || 'ROOM_ENDED'); return; }
      this.disconnectedAt ||= Date.now();
      if (Date.now() - this.disconnectedAt >= FLIGHT_ROOM_RECONNECT_MS) { this.end('RECONNECT_TIMEOUT'); return; }
      this.setStatus('reconnecting');
      this.retryTimer = setTimeout(() => this.open(), Math.min(4_000, 700 * 2 ** this.retryCount++));
    };
  }

  private end(reason: string): void {
    if (this.intentionalClose) return;
    this.intentionalClose = true;
    this.clearTimers();
    this.socket?.close(1000, 'session ended');
    this.socket = null;
    this.readyReject?.(new Error(reason));
    this.readyResolve = null;
    this.readyReject = null;
    this.setStatus('closed');
    this.emit({ type: 'ended', reason });
  }

  private clearTimers(): void {
    if (this.retryTimer) clearTimeout(this.retryTimer);
    if (this.heartbeat) clearInterval(this.heartbeat);
    if (this.handshakeTimer) clearTimeout(this.handshakeTimer);
    this.retryTimer = this.heartbeat = this.handshakeTimer = null;
  }
}

export async function createFlightRoom(endpoint: string, name: string): Promise<FlightRoomSession> {
  const url = roomEndpoint(endpoint).toString().replace(/\/$/, '');
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  try {
    const response = await fetch(`${url}/rooms`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}', signal: controller.signal });
    const result = await response.json() as { code?: string; hostSecret?: string; error?: string };
    if (!response.ok || !result.code || !result.hostSecret) throw new Error(result.error || 'ROOM_CREATE_FAILED');
    return await FlightRoomSession.connect(endpoint, result.code, name, 'host', { hostSecret: result.hostSecret });
  } finally { clearTimeout(timeout); }
}

export function joinFlightRoom(endpoint: string, code: string, name: string): Promise<FlightRoomSession> {
  return FlightRoomSession.connect(endpoint, code, name, 'guest');
}
