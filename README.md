# DearPassengers.net

Independent multilingual guide and player-companion project for the co-op airline game **Dear Passengers**.

**Live website:** [Dear Passengers Game Guide — DearPassengers.net](https://dearpassengers.net/)

The site covers confirmed gameplay, multiplayer status, the 2026 Steam release window, platforms, PC requirements, language support, and official update tracking. It is not affiliated with FLEXUS, Valve, or Steam.

## Internal growth operations

The tracked [SEO launch and traffic-capture playbook](./SEO-LAUNCH-PLAYBOOK.md) defines the evidence gates, launch-day workflow, future interactive tools, database rules, analytics events, localization sequence, and production verification checklist. Do not create public placeholder routes for launch content before their evidence and demand gates pass.

## Stack

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind/PostCSS build pipeline
- CSS-first responsive interface

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
pnpm typecheck
pnpm audit:facts
pnpm build
```

`pnpm build` creates a static Cloudflare Pages export in `out/`.

## Game Fact Registry

Time-sensitive product facts live in [`data/game-facts.json`](./data/game-facts.json). Each record carries an evidence status, source IDs, verification date, intent-owner routes, and affected routes. The typed helpers in [`lib/game-facts.ts`](./lib/game-facts.ts) feed the homepage and Pre-Flight Control Center, while `pnpm audit:facts` rejects missing sources, invalid dates, unknown facts with asserted values, broken fact references, and invalid route ownership.

Update the registry before changing a connected fact in public copy. A new verification date alone must not change the control-center revision unless a displayed fact actually changed.

## Google services

Copy `.env.example` to `.env.local` when changing the Google service IDs. The current GA4 property uses
`G-YR5WE8P3Q4`, and AdSense uses publisher `ca-pub-4159784234426326`:

- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — Search Console meta verification token
- `NEXT_PUBLIC_GOOGLE_ADSENSE_ID` — AdSense publisher ID in `ca-pub-...` format

When an AdSense ID is present, the build adds the account meta tag, Auto Ads loader, and the matching `/ads.txt`
seller record.

## Cloudflare Pages

```bash
pnpm build
pnpm preview:cf
pnpm deploy:cf
```

Cloudflare configuration lives in `wrangler.jsonc`; production output is uploaded from `out/`.

## Routes

- `/` — Dear Passengers game, gameplay, multiplayer, requirements, videos, and FAQ
- `/dear-passengers-player-count/` — player count, online co-op, solo play, crossplay, and lobby status
- `/dear-passengers-release-date/` — release window, platforms, demo/playtest, and update timeline

## Production

Canonical domain: [https://dearpassengers.net](https://dearpassengers.net)

Time-sensitive game information should be checked against the [official Steam page](https://store.steampowered.com/app/4534960/Dear_Passengers/) before publishing an update.

## Media

Project videos live under `public/video/` and are encoded as browser-compatible H.264 MP4 files. Project artwork lives under `public/images/`.
