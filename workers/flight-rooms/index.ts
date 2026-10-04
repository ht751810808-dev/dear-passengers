import { DurableObject } from 'cloudflare:workers';

const PROTOCOL = 1;
const MAX_BYTES = 65_536;
const RECONNECT_MS = 20_000;
const ROOM_LIFETIME_MS = 2 * 60 * 60 * 1_000;
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
type Role = 'host' | 'guest';
type Pose = { x: number; y: number; z: number; yaw: number; pitch: number; held?: string | null; piloting?: boolean };
type Player = { id: string; name: string; role: Role; connected: boolean; resumeHash: string; connectionId: string; disconnectedAt: number; lastAction: number };
type Room = { code: string; hostHash: string; hostId: string; created: number; expires: number; hostAwayUntil: number; started: boolean; ended: string | null; endedAt: number; players: Player[] };
type Attachment = { connectionId: string; created: number; lastSeen: number; playerId?: string; role?: Role; tokens: number; refillAt: number; lastWorld: number; lastAction: number; rateStart: number; worlds: number; poses: number; actions: number };
type Envelope = { [key: string]: unknown; type?: string };
type FlightEnv = { FLIGHT_ROOMS: DurableObjectNamespace<FlightRoom>; ALLOWED_ORIGINS?: string };

function randomToken(bytes = 24): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(bytes)), byte => byte.toString(16).padStart(2, '0')).join('');
}
function randomCode(): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(8)), byte => CODE_ALPHABET[byte % CODE_ALPHABET.length]).join('');
}
async function hash(value: string): Promise<string> {
  return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value))), byte => byte.toString(16).padStart(2, '0')).join('');
}
function record(value: unknown): value is Record<string, unknown> { return value !== null && typeof value === 'object' && !Array.isArray(value); }
function cleanName(value: unknown, fallback: string): string {
  return typeof value === 'string' ? value.replace(/[\u0000-\u001f\u007f-\u009f]/g, '').trim().slice(0, 24) || fallback : fallback;
}
function publicPlayer(player: Player) { return { id: player.id, name: player.name, role: player.role, connected: player.connected }; }
function send(socket: WebSocket, value: unknown): void { try { socket.send(JSON.stringify(value)); } catch { /* close/error callback performs cleanup */ } }
function error(socket: WebSocket, code: string, fatal = true): void {
  send(socket, { type: 'error', code, message: code, fatal });
  if (fatal) try { socket.close(4400, code); } catch { /* already closed */ }
}

// The isolate limit supplements per-room limits; it is intentionally not represented as a global rate limit.
const httpRates = new Map<string, { start: number; count: number }>();
function allowHttp(request: Request, category: string, max: number): boolean {
  const now = Date.now();
  if (httpRates.size > 5_000) for (const [key, value] of httpRates) if (now - value.start > 60_000) httpRates.delete(key);
  const key = `${category}:${request.headers.get('CF-Connecting-IP') || 'local'}`;
  const current = httpRates.get(key);
  if (!current || now - current.start > 60_000) { httpRates.set(key, { start: now, count: 1 }); return true; }
  return ++current.count <= max;
}
function permittedOrigin(request: Request, env: FlightEnv): string | null {
  const origin = request.headers.get('Origin');
  if (!origin) return '';
  const allowed = (env.ALLOWED_ORIGINS || 'https://dearpassengers.net,https://www.dearpassengers.net').split(',').map(item => item.trim());
  if (allowed.includes(origin)) return origin;
  try {
    const server = new URL(request.url), client = new URL(origin);
    if (['localhost', '127.0.0.1', '[::1]'].includes(server.hostname) && ['localhost', '127.0.0.1', '[::1]'].includes(client.hostname)) return origin;
  } catch { /* reject malformed origin */ }
  return null;
}
function json(value: unknown, status = 200, origin = ''): Response {
  const headers: Record<string, string> = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', 'Vary': 'Origin' };
  if (origin) headers['Access-Control-Allow-Origin'] = origin;
  return new Response(JSON.stringify(value), { status, headers });
}
async function smallBody(request: Request): Promise<boolean> {
  if (!request.body) return true;
  const reader = request.body.getReader();
  let bytes = 0;
  while (true) {
    const next = await reader.read();
    if (next.done) return true;
    bytes += next.value.byteLength;
    if (bytes > 1_024) { await reader.cancel(); return false; }
  }
}

export default {
  async fetch(request: Request, env: FlightEnv): Promise<Response> {
    const origin = permittedOrigin(request, env);
    if (origin === null) return json({ error: 'ORIGIN_NOT_ALLOWED' }, 403);
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: { 'Access-Control-Allow-Origin': origin || 'null', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '600', 'Vary': 'Origin' } });
    }
    if (url.pathname === '/health' && request.method === 'GET') return json({ service: 'flight-rooms', protocol: PROTOCOL }, 200, origin);
    if (url.pathname === '/rooms' && request.method === 'POST') {
      if (!allowHttp(request, 'create', 8)) return json({ error: 'CREATE_RATE_LIMIT' }, 429, origin);
      if (!(await smallBody(request))) return json({ error: 'BODY_TOO_LARGE' }, 413, origin);
      for (let attempt = 0; attempt < 3; attempt++) {
        const code = randomCode(), hostSecret = randomToken(32);
        const stub = env.FLIGHT_ROOMS.getByName(code);
        const initialized = await stub.fetch('https://room.internal/initialize', { method: 'POST', body: JSON.stringify({ code, hostHash: await hash(hostSecret) }) });
        if (initialized.ok) return json({ code, hostSecret, protocol: PROTOCOL }, 201, origin);
      }
      return json({ error: 'ROOM_CREATE_FAILED' }, 503, origin);
    }
    const path = /^\/rooms\/([A-HJ-NP-Z2-9]{8})\/socket$/.exec(url.pathname);
    if (path && request.method === 'GET') {
      if (request.headers.get('Upgrade')?.toLowerCase() !== 'websocket') return json({ error: 'WEBSOCKET_REQUIRED' }, 426, origin);
      if (!allowHttp(request, 'socket', 40)) return json({ error: 'CONNECT_RATE_LIMIT' }, 429, origin);
      return env.FLIGHT_ROOMS.getByName(path[1]).fetch(new Request('https://room.internal/socket', request));
    }
    return json({ error: 'NOT_FOUND' }, 404, origin);
  },
} satisfies ExportedHandler<FlightEnv>;

export class FlightRoom extends DurableObject<FlightEnv> {
  private room: Room | null = null;
  private lastWorld: { type: 'world'; sequence: number; snapshot: unknown } | null = null;

  constructor(ctx: DurableObjectState, env: FlightEnv) {
    super(ctx, env);
    ctx.blockConcurrencyWhile(async () => { this.room = await ctx.storage.get<Room>('room') || null; });
  }

  async fetch(request: Request): Promise<Response> {
    const path = new URL(request.url).pathname;
    if (path === '/initialize' && request.method === 'POST') {
      const value = await request.json() as { code: string; hostHash: string };
      return this.ctx.blockConcurrencyWhile(async () => {
        if (this.room) return json({ error: 'EXISTS' }, 409);
        const now = Date.now();
        this.room = { code: value.code, hostHash: value.hostHash, hostId: randomToken(8), created: now, expires: now + ROOM_LIFETIME_MS, hostAwayUntil: now + 60_000, started: false, ended: null, endedAt: 0, players: [] };
        await this.persist();
        await this.ctx.storage.setAlarm(now + 10_000);
        return json({ created: true }, 201);
      });
    }
    if (path !== '/socket' || request.headers.get('Upgrade')?.toLowerCase() !== 'websocket') return json({ error: 'NOT_FOUND' }, 404);
    if (!this.room) return json({ error: 'ROOM_NOT_FOUND' }, 404);
    if (this.room.ended || Date.now() > this.room.expires) return json({ error: this.room.ended || 'ROOM_EXPIRED' }, 410);
    if (this.ctx.getWebSockets().length >= 8) return json({ error: 'ROOM_BUSY' }, 429);
    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    this.ctx.acceptWebSocket(server);
    const now = Date.now();
    server.serializeAttachment({ connectionId: randomToken(8), created: now, lastSeen: now, tokens: 60, refillAt: now, lastWorld: 0, lastAction: 0, rateStart: now, worlds: 0, poses: 0, actions: 0 } satisfies Attachment);
    return new Response(null, { status: 101, webSocket: client });
  }

  async webSocketMessage(socket: WebSocket, message: string | ArrayBuffer): Promise<void> {
    if (!this.room || this.room.ended) { error(socket, 'ROOM_ENDED'); return; }
    if (typeof message !== 'string' || new TextEncoder().encode(message).byteLength > MAX_BYTES) { error(socket, 'MESSAGE_TOO_LARGE'); return; }
    let data: Envelope;
    try { const parsed: unknown = JSON.parse(message); if (!record(parsed)) throw new Error(); data = parsed; } catch { error(socket, 'BAD_JSON'); return; }
    const attachment = socket.deserializeAttachment() as Attachment;
    if (!attachment) { error(socket, 'AUTH_REQUIRED'); return; }
    const now = Date.now();
    attachment.tokens = Math.min(60, attachment.tokens + (now - attachment.refillAt) * .04);
    attachment.refillAt = now;
    if (--attachment.tokens < 0) { error(socket, 'MESSAGE_RATE_LIMIT'); return; }
    attachment.lastSeen = now;
    if (now - attachment.rateStart >= 1_000) { attachment.rateStart = now; attachment.worlds = attachment.poses = attachment.actions = 0; }
    socket.serializeAttachment(attachment);
    if (!attachment.playerId) {
      if (data.type !== 'hello') { error(socket, 'AUTH_REQUIRED'); return; }
      await this.ctx.blockConcurrencyWhile(() => this.hello(socket, data, attachment));
      return;
    }
    const player = this.room.players.find(item => item.id === attachment.playerId && item.connectionId === attachment.connectionId && item.connected);
    if (!player) { error(socket, 'SESSION_REPLACED'); return; }
    if (data.type === 'ping') { send(socket, { type: 'pong', at: data.at, serverTime: now }); return; }
    if (data.type === 'leave') { await this.disconnect(socket, true); try { socket.close(1000, 'left room'); } catch {} return; }
    if (data.type === 'world') {
      if (player.role !== 'host') { error(socket, 'HOST_ONLY'); return; }
      if (++attachment.worlds > 15) { error(socket, 'WORLD_RATE_LIMIT', false); socket.serializeAttachment(attachment); return; }
      if (!Number.isSafeInteger(data.sequence) || Number(data.sequence) <= attachment.lastWorld || !record(data.snapshot)) { error(socket, 'INVALID_WORLD', false); return; }
      attachment.lastWorld = Number(data.sequence);
      this.lastWorld = { type: 'world', sequence: attachment.lastWorld, snapshot: data.snapshot };
      socket.serializeAttachment(attachment);
      this.broadcast(this.lastWorld, player.id);
      return;
    }
    if (data.type === 'position') {
      if (++attachment.poses > 20) { error(socket, 'POSE_RATE_LIMIT', false); socket.serializeAttachment(attachment); return; }
      const pose = this.pose(data.pose);
      if (!pose) { error(socket, 'INVALID_POSE', false); return; }
      socket.serializeAttachment(attachment);
      // Pose reports go only to the host; guests render positions from the host's world snapshot.
      if (player.role === 'guest') this.toHost({ type: 'position', playerId: player.id, pose });
      return;
    }
    if (data.type === 'action') {
      if (player.role !== 'guest') { error(socket, 'GUEST_ACTION_ONLY', false); return; }
      if (this.room.hostAwayUntil) { error(socket, 'HOST_RECONNECTING', false); return; }
      if (++attachment.actions > 15) { error(socket, 'ACTION_RATE_LIMIT', false); socket.serializeAttachment(attachment); return; }
      if (!record(data.action) || typeof data.action.kind !== 'string' || !/^[a-zA-Z][a-zA-Z0-9_-]{0,31}$/.test(data.action.kind) || new TextEncoder().encode(JSON.stringify(data.action)).byteLength > 2_048 || typeof data.id !== 'string') { error(socket, 'INVALID_ACTION', false); return; }
      const prefix = `${player.id}:`;
      const sequence = data.id.startsWith(prefix) ? Number(data.id.slice(prefix.length)) : NaN;
      if (!Number.isSafeInteger(sequence) || sequence <= Math.max(attachment.lastAction, player.lastAction)) { error(socket, 'DUPLICATE_ACTION', false); return; }
      attachment.lastAction = sequence;
      player.lastAction = sequence;
      socket.serializeAttachment(attachment);
      this.toHost({ type: 'action', playerId: player.id, id: `${prefix}${sequence}`, action: data.action });
      return;
    }
    error(socket, 'UNKNOWN_MESSAGE', false);
  }

  private async hello(socket: WebSocket, data: Envelope, attachment: Attachment): Promise<void> {
    const room = this.room!;
    if (data.protocol !== PROTOCOL || !['host', 'guest'].includes(String(data.role))) { error(socket, 'PROTOCOL_MISMATCH'); return; }
    let player: Player | undefined;
    let resumeToken: string | undefined;
    if (data.role === 'host') {
      if (typeof data.hostSecret !== 'string' || data.hostSecret.length !== 64 || await hash(data.hostSecret) !== room.hostHash) { error(socket, 'HOST_AUTH_FAILED'); return; }
      if (room.started && room.hostAwayUntil && room.hostAwayUntil < Date.now()) { await this.end('HOST_DISCONNECTED'); return; }
      player = room.players.find(item => item.id === room.hostId);
      if (!player) { player = { id: room.hostId, role: 'host', name: cleanName(data.name, 'Captain'), connected: false, resumeHash: '', connectionId: '', disconnectedAt: 0, lastAction: 0 }; room.players.push(player); }
      room.started = true;
      room.hostAwayUntil = 0;
    } else {
      if (!room.started) { error(socket, 'HOST_NOT_READY'); return; }
      if (typeof data.resumeToken === 'string' && typeof data.playerId === 'string') {
        player = room.players.find(item => item.id === data.playerId && item.role === 'guest');
        if (!player || data.resumeToken.length !== 48 || await hash(data.resumeToken) !== player.resumeHash || (!player.connected && Date.now() - player.disconnectedAt > RECONNECT_MS)) { error(socket, 'RESUME_EXPIRED'); return; }
      } else {
        if (room.hostAwayUntil) { error(socket, 'HOST_RECONNECTING'); return; }
        room.players = room.players.filter(item => item.role === 'host' || item.connected || Date.now() - item.disconnectedAt < RECONNECT_MS);
        if (room.players.length >= 4) { error(socket, 'ROOM_FULL'); return; }
        resumeToken = randomToken();
        player = { id: randomToken(8), name: cleanName(data.name, 'Crew'), role: 'guest', connected: false, resumeHash: await hash(resumeToken), connectionId: '', disconnectedAt: 0, lastAction: 0 };
        room.players.push(player);
      }
    }
    for (const existing of this.ctx.getWebSockets()) {
      const old = existing.deserializeAttachment() as Attachment;
      if (existing !== socket && old?.playerId === player.id) try { existing.close(4409, 'SESSION_REPLACED'); } catch {}
    }
    player.connectionId = attachment.connectionId;
    player.connected = true;
    player.disconnectedAt = 0;
    attachment.playerId = player.id;
    attachment.role = player.role;
    attachment.lastAction = player.lastAction;
    socket.serializeAttachment(attachment);
    await this.persist();
    send(socket, { type: 'welcome', protocol: PROTOCOL, code: room.code, playerId: player.id, role: player.role, resumeToken, players: room.players.map(publicPlayer) });
    this.roster();
    if (player.role === 'host') this.broadcast({ type: 'host-back' });
    else if (room.hostAwayUntil) send(socket, { type: 'host-away', until: room.hostAwayUntil });
    if (player.role === 'guest' && this.lastWorld) send(socket, this.lastWorld);
    this.toHost({ type: 'sync-request', playerId: player.id });
  }

  private pose(value: unknown): Pose | null {
    if (!record(value)) return null;
    if (!['x', 'y', 'z', 'yaw', 'pitch'].every(key => typeof value[key] === 'number' && Number.isFinite(value[key]) && Math.abs(value[key] as number) <= 100_000)) return null;
    return { x: value.x as number, y: value.y as number, z: value.z as number, yaw: value.yaw as number, pitch: value.pitch as number, ...(typeof value.held === 'string' && value.held.length <= 32 || value.held === null ? { held: value.held as string | null } : {}), ...(typeof value.piloting === 'boolean' ? { piloting: value.piloting } : {}) };
  }

  async webSocketClose(socket: WebSocket, code: number, reason: string): Promise<void> {
    await this.disconnect(socket, false);
    // Explicit acknowledgement also works with older local workerd runtimes that predate auto-reply.
    try { socket.close(code === 1005 || code === 1006 ? 1000 : code, reason); } catch {}
  }
  async webSocketError(socket: WebSocket): Promise<void> { await this.disconnect(socket, false); try { socket.close(1011, 'connection error'); } catch {} }

  private async disconnect(socket: WebSocket, explicit: boolean): Promise<void> {
    const room = this.room, attachment = socket.deserializeAttachment() as Attachment | null;
    if (!room || room.ended || !attachment?.playerId) return;
    const player = room.players.find(item => item.id === attachment.playerId && item.connectionId === attachment.connectionId);
    if (!player || !player.connected) return;
    player.connected = false;
    player.disconnectedAt = Date.now();
    player.lastAction = Math.max(player.lastAction, attachment.lastAction);
    if (player.role === 'host') {
      if (explicit) { await this.end('HOST_LEFT'); return; }
      room.hostAwayUntil = Date.now() + RECONNECT_MS;
      this.broadcast({ type: 'host-away', until: room.hostAwayUntil });
    } else if (explicit) room.players = room.players.filter(item => item.id !== player.id);
    await this.persist();
    this.roster();
  }

  async alarm(): Promise<void> {
    const room = this.room;
    if (!room) return;
    const now = Date.now();
    if (room.ended) {
      if (now - room.endedAt >= 60_000) { await this.ctx.storage.deleteAll(); this.room = null; this.lastWorld = null; return; }
      await this.ctx.storage.setAlarm(room.endedAt + 60_000); return;
    }
    if (now > room.expires) { await this.end('ROOM_EXPIRED'); return; }
    if (room.hostAwayUntil && now >= room.hostAwayUntil) { await this.end(room.started ? 'HOST_DISCONNECTED' : 'HOST_NOT_READY'); return; }
    for (const socket of this.ctx.getWebSockets()) {
      const attachment = socket.deserializeAttachment() as Attachment;
      if (!attachment) continue;
      if ((!attachment.playerId && now - attachment.created > 8_000) || now - attachment.lastSeen > 30_000) {
        await this.disconnect(socket, false);
        try { socket.close(4000, 'connection timeout'); } catch {}
      }
    }
    const remaining = room.players.filter(player => player.role === 'host' || player.connected || now - player.disconnectedAt < RECONNECT_MS);
    if (remaining.length !== room.players.length) { room.players = remaining; await this.persist(); this.roster(); }
    await this.ctx.storage.setAlarm(Math.min(now + 10_000, room.hostAwayUntil || room.expires));
  }

  private async end(reason: string): Promise<void> {
    if (!this.room || this.room.ended) return;
    this.room.ended = reason;
    this.room.endedAt = Date.now();
    this.broadcast({ type: 'ended', reason });
    await this.persist();
    for (const socket of this.ctx.getWebSockets()) try { socket.close(4410, reason); } catch {}
    await this.ctx.storage.setAlarm(Date.now() + 60_000);
  }
  private async persist(): Promise<void> { if (this.room) await this.ctx.storage.put('room', this.room); }
  private roster(): void { if (this.room) this.broadcast({ type: 'roster', players: this.room.players.map(publicPlayer) }); }
  private toHost(value: unknown): void { this.broadcast(value, undefined, 'host'); }
  private broadcast(value: unknown, exclude?: string, role?: Role): void {
    for (const socket of this.ctx.getWebSockets()) {
      const attachment = socket.deserializeAttachment() as Attachment;
      if (!attachment?.playerId || attachment.playerId === exclude || role && attachment.role !== role) continue;
      const player = this.room?.players.find(item => item.id === attachment.playerId);
      if (player?.connected && player.connectionId === attachment.connectionId) send(socket, value);
    }
  }
}
