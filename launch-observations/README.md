# Launch Observation Kit

This directory stores private editorial evidence records for a verified Dear Passengers full release, Early Access launch, public demo, Steam Playtest, or major first-party announcement. Nothing in this directory creates a public route or proves a game fact by itself.

## Create a record

```bash
pnpm create:observation -- --event full-release
pnpm create:observation -- --event demo --id 2026-08-10-demo-check
```

Allowed event types:

- `full-release`
- `early-access`
- `demo`
- `playtest`
- `major-announcement`

The command copies `template.json` into `launch-observations/records/`, fills the event type and detection time, and refuses to overwrite an existing record. Use anonymous verifier initials or an operational role; never store participant names, emails, Discord handles, Steam IDs, IP addresses, or other unnecessary identifiers.

## Evidence workflow

1. Confirm the first-party signal and save its HTTPS URL.
2. For a playable event, confirm that a public purchase or install control actually works in the recorded storefront region.
3. Record the public build/version identifier before testing.
4. Record the hardware environment once and reference it from each performance run.
5. Capture keyboard/mouse controls, named controller hardware, lobby/invite flow, and accessibility options exactly as observed.
6. Give every issue a reproducible sequence, expected result, actual result, build ID, and evidence path.
7. Give every image or video a rights/source classification, accurate alt text, dimensions, build ID, and capture time.
8. Keep unverified fields `null` or `unknown`; never fill a gap from memory or a competitor page.
9. Select one intent owner or one candidate route for the publishing run.
10. Change `recordStatus` to `verified` only after the activation and evidence gates pass. Change it to `published` only after all required production checks and readbacks are recorded.

## Recommended record shapes

Add keyboard/mouse observations to `controls.keyboardMouse`:

```json
{
  "action": "Example observed action",
  "binding": "Example observed input",
  "context": "cockpit | cabin | menu | global",
  "rebindable": null,
  "buildId": "replace-with-public-build-id",
  "evidencePaths": ["replace-with-repository-relative-path"]
}
```

Add controller observations to `controls.controllers`:

```json
{
  "model": "Exact tested controller model",
  "connection": "wired | bluetooth | wireless-adapter",
  "status": "confirmed | partial | unsupported | unknown",
  "prompts": "xbox | playstation | generic | none | unknown",
  "notes": null,
  "buildId": "replace-with-public-build-id",
  "evidencePaths": []
}
```

Add performance runs to `performance.runs`:

```json
{
  "environmentId": "reference-testEnvironment-environmentId",
  "buildId": "replace-with-public-build-id",
  "resolution": "1920x1080",
  "preset": "Exact in-game preset name",
  "upscaling": "Exact setting or Off",
  "frameLimit": null,
  "durationSeconds": 300,
  "scene": "Describe the reproducible route or scene",
  "averageFps": null,
  "onePercentLowFps": null,
  "notes": null,
  "evidencePaths": []
}
```

Add issues to `issues`:

```json
{
  "issueId": "DP-ISSUE-001",
  "title": "Short reproducible problem title",
  "status": "observed | reproduced | official-acknowledged | fixed | not-reproduced",
  "severity": "low | medium | high | blocking",
  "buildId": "replace-with-public-build-id",
  "environmentId": "reference-testEnvironment-environmentId",
  "reproductionCount": 0,
  "attemptCount": 0,
  "steps": [],
  "expected": null,
  "actual": null,
  "workaround": null,
  "officialSourceUrls": [],
  "evidencePaths": []
}
```

Add captured media to `media`:

```json
{
  "path": "public/images/observations/example.webp",
  "type": "screenshot | video | official-media | generated-editorial",
  "official": false,
  "rights": "original-capture | official-editorial-use | generated-editorial",
  "sourceUrl": null,
  "buildId": "replace-with-public-build-id",
  "capturedAt": "replace-with-ISO-timestamp",
  "width": 1920,
  "height": 1080,
  "alt": "Describe only what the image actually shows",
  "spoiler": false,
  "notes": null
}
```

Add search or community demand observations to `demandEvidence`:

```json
{
  "channel": "gsc | steam | google-paa | youtube | forum",
  "queryOrQuestion": "Exact query or clearly paraphrased player question",
  "observedAt": "replace-with-ISO-timestamp",
  "sourceUrl": null,
  "impressions": null,
  "clicks": null,
  "notes": null
}
```

## Validate

```bash
pnpm audit:observations
```

The audit runs automatically before every production build. Draft records may contain nulls, but verified and published records must meet stronger activation, source, evidence, consent, route, and production-readback requirements.
