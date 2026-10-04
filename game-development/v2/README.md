# Cabin Crisis V2 — 2026-10-04

A playable browser campaign with a complete boarding → takeoff → cruise → approach → landing loop, and shared 2–4 player flights. This is an independently implemented fan game. Official research and the boundaries of what could be verified are in [research.md](research.md).

## Delivered systems

- Six mission contracts in three environments; distinct weather, passenger counts, meal orders, cargo and incident manifests. Incident timings vary by up to seven seconds per flight. Three difficulty settings, practice, contract records, XP/ranks, upgrades, itemized settlement and migration of previous local career saves.
- Cockpit access throughout a flight; pitch, bank, throttle, airspeed, altitude, heading, runway offset and vertical speed. Autopilot supports solo cabin work. Manual flight can stall, hit terrain or trigger a go-around after a bad approach. Landing requires a safe bank, speed, descent rate and runway offset.
- Coffee and meal deliveries, seatbelts, timed firefighting/repair/latching/strapping. Walking away interrupts work. Fire, electrical damage, pressure loss, fuel and passenger satisfaction have real state and consequences.
- Spring-held loose objects and passengers, gravity, bounce, wall/seat/object collision, bank/turbulence forces, persistent thrown tools and bounded object counts. Returning a passenger to a seat releases all previous grab references.
- Real WebSocket rooms through Cloudflare Durable Objects: shared authoritative flight, separate inventories, shared service and incidents, one pilot at a time, visible crew, object ownership and transform synchronization, code-based joining, reconnect grace and host-end handling. A paused/disconnected remote pilot cannot leave a stale steering input behind.
- Updated passenger faces, blinking and panic expressions; rounded upholstered seats, material variation, windows, galley food rack, blue hands, gauges, runway, rain, lightning, smoke/fire, animated animal carrier and synthesized engine/wind/interaction sound.
- English/Chinese menus, keyboard/mouse and touch controls, graphics quality, mute, fullscreen, pause, map, manual and responsive cockpit instrumentation.

## Verification

- `pnpm test:flight`: 25 simulation checks including every contract/difficulty landing, plus 10 career/save/reward checks.
- `pnpm typecheck`; separate Worker typecheck; targeted ESLint; Worker dry-run; full `pnpm build` including existing website audits.
- Real browser engine checks: cabin/render, timed belt interaction, coffee, food, early cockpit access, interruptible repair, grab/throw and physics pause.
- Real two-client engine integration: 11 checks, including independent inventories and shared progress, remote flying, pilot exclusion, paused pilot protection, thrown-object type/count/deletion reconciliation and departure cleanup.
- Real relay tests: 12 checks, including four-player limit, role/identity enforcement, duplicate actions, invalid input, reconnect and actual 20-second host timeout.
- Visible UI checks at desktop, portrait and landscape sizes, plus two-client room creation/join/start/pause/exit. No horizontal overflow or uncaught browser exceptions were observed.
- Scene performance was measured in headless Chrome using Mac Metal at DPR 1: stable samples around 60 FPS; 209 cockpit / 325 storm / 378 night / 432 with three remote crew draw calls including shadow passes. This is a desktop rendering test, not a guarantee for all devices. Real phone hardware has not been benchmarked.

The local tests deliberately use a separately bundled fixture. No test controls or simulation-debug API is exposed on the public game page.

To reproduce engine checks with an existing Playwright runtime and Chromium installation:

```sh
node scripts/prepare-flight-fixture.mjs
python3 -m http.server 8898 --bind 127.0.0.1 --directory /tmp/flight-v2-engine-qa
# Another shell; start room service on 8789 for co-op tests, as documented in workers/flight-rooms/README.md.
node scripts/qa-v2-engine.mjs
node scripts/qa-v2-coop.mjs
```

`FLIGHT_QA_NODE_MODULES`, `FLIGHT_QA_BROWSER` and `FLIGHT_QA_OUTPUT` override runtime discovery and evidence location. The tests do not install browsers.

## Remaining differences from the original trailer

The public official game build was not available for comparison. These browser mission rules, economy and autopilot are our design; they are not claimed to reproduce unreleased official specifications. Characters and scenery are procedural meshes with simple physics, not the original assets or fully articulated ragdolls. Exterior wing work, destructive fuselage geometry, proximity voice, customizable aircraft, matchmaking and host migration are not implemented. Rooms are ephemeral; only the career is saved locally. A host page must remain open for its shared flight.

## Release

Source deployment branch: `codex/github-publish`. Pages artifact branch: `main` for project `dear-passengers`; these are different concepts. Worker project: `dear-passengers-flight-rooms`. The main release record will include the verified production URLs and commit after deployment.
