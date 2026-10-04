# Shared flight rooms

A separate Cloudflare Worker and SQLite Durable Object relay for one authoritative browser host and up to three guests. Native `WebSocket`, `fetch`, and React only; no new npm dependency. This service transports the actual game world and guest actions. It does not invent local peers or simulate a fake online connection.

## Run locally

From the repository root:

```sh
pnpm exec wrangler types workers/flight-rooms/worker-configuration.d.ts --config workers/flight-rooms/wrangler.jsonc
pnpm exec tsc -p workers/flight-rooms/tsconfig.json
pnpm exec wrangler dev --config workers/flight-rooms/wrangler.jsonc --ip 127.0.0.1 --port 8789 --inspector-port 9238
```

Set `NEXT_PUBLIC_FLIGHT_ROOM_URL=http://127.0.0.1:8789` before starting the Next dev server/build, or pass the component an `endpoint`. The library accepts either HTTP(S) or WS(S) endpoints, converting each request appropriately. The base endpoint must not contain query parameters, credentials, or a fragment. `/health` returns the service and protocol version.

The root Next `tsconfig.json` excludes `workers`; the Worker has its own generated runtime types and TypeScript project. This avoids mixing browser DOM and Worker runtime globals.

## Deployment handoff

This subtask has not deployed anything or created cloud resources. The main task owner must confirm the current work is included in the project's actual deployment branch and complete checks before deployment. Deploy this Worker separately from the static Pages site, then put its HTTPS URL in `NEXT_PUBLIC_FLIGHT_ROOM_URL` for the site build. A static export cannot host Durable Objects by itself.

```sh
pnpm exec wrangler deploy --dry-run --config workers/flight-rooms/wrangler.jsonc
pnpm exec wrangler deploy --config workers/flight-rooms/wrangler.jsonc
```

`ALLOWED_ORIGINS` is a comma-separated exact list. Production defaults to the two dearpassengers.net origins. Localhost origins are accepted only when the Worker itself is being accessed through localhost. If a preview site needs access, explicitly add that exact preview origin. No credential is embedded in a URL. The SQLite migration creates only this game's room namespace; no KV, paid plan switch, payment action, or unrelated resource is configured.

## Stable browser API

```ts
import {
  createFlightRoom, joinFlightRoom,
  type FlightRoomSession, type FlightRoomEvent,
} from '@/lib/flight-network';

const host = await createFlightRoom(endpoint, 'Captain');
const guest = await joinFlightRoom(endpoint, code, 'Crew');
const stop = host.subscribe(event => { /* see below */ });

host.publishWorld(fullAuthoritativeWorld); // about 10 Hz
guest.sendPosition({ x, y, z, yaw, pitch }); // about 10 Hz
guest.sendAction({ kind: 'interact', target: 'passenger-0' });
stop();
guest.close();
```

`FlightRoomSession` exposes `role`, `code`, `playerId`, `players`, `status`; methods `publishWorld`, `sendPosition`, `sendAction`, `subscribe`, `close`. Send methods return `false` when unavailable, unauthorized by role, too large, or backpressured. They never queue stale actions for replay. `publishWorld` only works on a host; `sendAction` only works on a guest. Host local actions remain local engine calls.

Player records always use `id`, not `playerId`:

```ts
{ id: string, name: string, role: 'host' | 'guest', connected: boolean }
```

Events:

| type | Fields | Engine integration |
|---|---|---|
| `state` | `status: connecting / connected / reconnecting / closed` | Freeze local guest input during disconnection; display accurate status |
| `roster` | `players` | Host creates/removes remote inventories and avatars by `id`; disconnected members retain identity during grace |
| `world` | `snapshot: unknown, sequence: number` | Guest validates expected schema, initializes from host config, then applies shared world; never runs independent hazards/economy |
| `position` | `playerId, pose` | Host only. Treat pose as untrusted; clamp movement and check cabin bounds |
| `action` | `playerId, action, id` | Host only. Validate target distance, item ownership, ongoing interaction, pilot ownership, and current game phase before applying |
| `sync-request` | `playerId` | Host should immediately publish a full world, including config, inventories, physics bodies, and authoritative time |
| `host-away` | `until` (Unix milliseconds) | Guests pause shared simulation and wait; do not independently finish or settle a flight |
| `host-back` | — | Resume only after receiving fresh authoritative world |
| `ended` | `reason` | End the shared flight, display reason; never grant a fabricated successful settlement |
| `error` | `code, message` | Protocol or rate error; fatal errors are followed by `ended` |

`subscribe` immediately replays current status/roster, latest received world, and any host-away state. This prevents missing a first world between connection success and engine subscription. Keep the host's initial config in every world so late joins do not depend on an already-missed start event. Guest inventories, health, hazards, doors, belts, items, and flight controls must all come from this authoritative world. The relay does not know their game-specific structure.

## Room component

`components/FlightCrewRoom.tsx` with its own CSS module accepts:

```ts
{
  locale: 'en' | 'zh',
  endpoint?: string, // default process.env.NEXT_PUBLIC_FLIGHT_ROOM_URL
  onHostReady(session): void,
  onJoinReady(session): void,
  onLeave(): void,
}
```

The component establishes a session and hands it to the parent; it never starts a new flight. A guest waits for host world/config. Missing endpoint produces a clear unavailable state and no mock success. Only the explicit leave action closes a handed-off session. Keep the component mounted (hide its container while in flight), and have the parent close its session when the entire game is disposed. A separate in-flight Leave button may call the same session's `close()`; the component observes the closed state. The creator must share only the eight-character room code. The UI never displays the host secret.

## Wire protocol and lifecycle

- `POST /rooms` creates a random eight-character room code and independent 256-bit `hostSecret`. It returns them only to the creator with `Cache-Control: no-store`. The DO stores a SHA-256 digest.
- `GET /rooms/CODE/socket` upgrades. The first text frame must be `hello` with protocol `1`, name and role; a host provides `hostSecret`, a guest reconnect provides its own `playerId` and `resumeToken`. Secrets are not query parameters and never appear in roster or world messages.
- `welcome` contains only the caller's identity, a public roster and, for a new guest, its own random resume token. An existing connection with the same authenticated identity is replaced explicitly.
- One DO owns membership for each code. Max four member slots, including recently disconnected reserved slots; max eight sockets including pending authentication. Pending sockets time out. The authenticated socket determines sender identity; supplied `playerId` fields cannot impersonate another member.
- The host sends `{type:'world',sequence,snapshot}`; the server accepts only increasing sequence numbers and broadcasts to guests. World content is an opaque JSON object, not an engine execution hook. Guests' positions and actions route only to the host. Guests render other players from the host's world.
- Actions carry a monotonic `playerId:counter` ID. Duplicates are discarded per authenticated identity. The host must still decide whether the request is valid in the game.
- Brief network loss reconnects automatically with the same identity. Guest slots and a lost host are retained for 20 seconds; host-away pauses the shared flight. Host recovery broadcasts host-back and requests full synchronization. Explicit host leave ends immediately; missed host recovery ends with `HOST_DISCONNECTED`. There is no host migration.
- Browser refresh/tab closure is not a durable game save. Credentials stay in memory; a host who loses its entire page cannot recover its engine's live simulation from this relay. The parent should end/leave cleanly on deliberate navigation.
- Rooms expire after two hours. An unconnected creator expires after one minute. Ended metadata is deleted after one minute. The relay retains no long-term player account or career data.

## Input limits and trust boundary

All frames are text JSON, at most 65,536 UTF-8 bytes including envelope. Actions are additionally limited to 2,048 UTF-8 bytes. Pose fields must be finite and within a broad numeric envelope; cabin-specific bounds belong to the host. Each socket gets a 60-message burst with 40/second refill; per-second ceilings are 15 world, 20 pose, and 15 action messages. Expected engine rates are 10 Hz world/pose. HTTP create/connect have additional best-effort isolate-local limits; those are not a global abuse-prevention guarantee. Public rooms are accessible to anyone who knows the code, so do not put private user data in a game world.

The hibernation API preserves socket attachment identity/rate counters. Membership and token digests use DO storage. High-frequency worlds are not written to durable storage: after hibernation the host receives `sync-request` and the next 10 Hz state restores the cache. This saves storage writes and avoids treating a transient relay as a permanent save file. The host remains authoritative and trusted; this is not a server-simulated anti-cheat architecture.

## Reference basis

Checked 2026-10-04 against [Cloudflare WebSocket best practices](https://developers.cloudflare.com/durable-objects/best-practices/websockets/), [Durable Objects getting started](https://developers.cloudflare.com/durable-objects/get-started/), and the installed Wrangler config schema. Uses WebSocket Hibernation, `serializeAttachment`, `blockConcurrencyWhile`, SQLite migrations, and alarms. Runtime types are generated from the installed Wrangler, not copied from a stale browser type definition.

## Verified 2026-10-04

The requested current compatibility date `2026-10-04` was tried. Installed workerd refused to start and explicitly reported its maximum supported date as `2026-07-21`. The config therefore uses that verified maximum; no dependency upgrade was performed. Revisit the date when upgrading the runtime. `webSocketClose` explicitly acknowledges close frames so reconnection also works on local runtimes without automatic close replies.

Both the root Next TypeScript check and the separate Worker TypeScript check pass. Native WebSocket integration tests used the actual compiled `lib/flight-network.ts` against the local Wrangler service, creating real host/guest sockets. **12/12 checks passed:**

1. Four distinct identities and correct roster.
2. A fifth member rejected with `ROOM_FULL`.
3. Full host world/config/inventory/body state reaches all guests.
4. Guest pose routes to the host only.
5. Guest action uses server-bound identity despite a spoofed sender field.
6. Duplicate action ID is rejected and never forwarded twice.
7. Guest disconnect/reconnect restores the same identity and world.
8. Guest attempts to publish authoritative world are rejected.
9. Host disconnect/reconnect notifies guests and restores authority.
10. Invalid pose and oversized frame rejection.
11. Explicit host leave ends the room for guests.
12. Unrecoverable host disconnect expires through the real 20-second alarm path.

Test evidence on the task host: `/private/tmp/flight-room-relay-report.json` and `/private/tmp/test-flight-room-relay.mjs`. Tests use internal socket access only in the temporary test harness to inject invalid frames and connection loss; there is no production testing hook. Full engine co-op verification belongs to the engine integration task: successful relay tests alone do not establish that every game action is synchronized.
