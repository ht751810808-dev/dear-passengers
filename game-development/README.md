# Dear Passengers 3D flight career

A playable single-player browser game replaces the old five-round Cabin Crisis Drill at `/play/cabin-crisis/`. The existing demo guide and multilingual links lead directly into the new game.

## Implemented

- First-person 3D cabin with eight animated passengers, blue gloved hands, cockpit, galley, working emergency door, tool stations and moving scenery.
- Seatbelts and coffee service; loose luggage, turbulence, fire suppression, cabin pressure and electrical repairs; controllable final approach with success/failure results.
- Three unlockable flights: daylight coast, mountain storm and night city. Escalating service requirements and damage, optional risky cargo, income and three upgrade categories with three levels each.
- Local career saves, defensive save recovery and idempotent flight rewards. Save key: `dear-passengers-flight-career-v1`.
- English/Chinese controls and instructions, desktop keyboard/mouse, touch joystick/look controls, pause, map, manual, sound, quality and fullscreen settings.
- Procedural geometry and textures, synthesized audio, static Next.js export; no remote game server or account required.

The released implementation is a single-player fan game. Network co-op, proximity voice, unrestricted flight simulation, the official mission campaign and undisclosed original systems are not implemented. Exact official physics, balance and progression are not publicly available; timings, economy and campaign here are independently implemented.

## Source

- `lib/cabin-scene.ts`: scene geometry, passengers, items, scenery and static mesh batching.
- `lib/cabin-engine.ts`: render loop, input, movement, interactions, hazards, flight outcome and sound.
- `lib/flight-career.ts`: routes, upgrade economy and versioned career persistence.
- `components/PassengerFlightGame.tsx` and its CSS module: game UI and touch controls.

## Verification on 2026-10-04

- `pnpm typecheck`, `pnpm build`, targeted ESLint, internal-link and reciprocal-language audits pass.
- Playwright desktop/mobile checks cover English/Chinese menus, real WebGL rendering, keyboard movement, pause/resume, restart, touch movement and orientation changes. See `scripts/qa-passenger-flight.mjs`; its browser dependencies can use the existing bundled Codex runtime.
- An isolated temporary WebGL harness exercised every cabin objective through a successful landing, steering input, restart state, item dropping, upgraded service capacity, night route and pause/resume. Scenario placement/time were controlled in the harness; no debug API or test entry point is included in production.
- Career checks cover duplicate rewards, purchases with insufficient credits, route unlocks, loss rewards, save round-trip, corrupted data and numeric bounds.
- Static batching reduced scene mesh count from 1,614 to 356 while retaining dynamic object references.

Source research and browser QA guidance are kept beside this document. The public game route remains noindex and excluded from ads; the existing demo guide stays indexable.
