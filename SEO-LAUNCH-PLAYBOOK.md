# Dear Passengers Traffic Capture and Launch Playbook

**Status:** Active internal operating plan

**Version:** 1.0

**Last reviewed:** 2026-08-10

**Site:** https://dearpassengers.net

**Product position:** Independent, evidence-led Dear Passengers companion platform

## 1. Mission

The objective is not to maximize article count. The objective is to capture and retain qualified Dear Passengers traffic across search, social, referral, direct-return, image, video, and AI-answer surfaces.

Static guides are the acquisition layer. Long-term growth should come from five connected asset classes:

1. Verified official status and change tracking.
2. Interactive player utilities.
3. Versioned first-hand game data.
4. Shareable fan experiences.
5. Carefully moderated community functionality, only when the operational requirements exist.

The target product is a fast player companion, not a speculative wiki or a collection of near-duplicate SEO pages.

## 2. Current operating state

As of 2026-08-10:

- Steam confirms a 2026 Windows PC release, single-player, and online co-op.
- The exact release date, public price, public-demo date, maximum player count, and most device-support details remain unannounced.
- The live sitemap contains 150 URLs.
- The site already covers the principal pre-release intents, including release, demo, download identity, platforms, player count, gameplay, roles, requirements, trailer, news, and multiple languages.
- The Pre-Flight Control Center launched on 2026-08-08; its analytics implementation was repaired on 2026-08-09.
- The homepage remains in a monitoring freeze through 2026-08-14 unless there is a production fault, factual error, or major first-party announcement.
- The earliest trustworthy seven-complete-day control-center review is 2026-08-17.
- The earliest trustworthy Roles quiz review is 2026-08-24.

This baseline is a planning snapshot, not a permanent game-fact source. Reverify all product facts before every publication.

## 3. Activation rules

Do not activate the full-launch plan because of a rumor, placeholder date, third-party article, leaked screenshot, or search snippet.

### 3.1 Full-launch trigger

Activate the full-launch workflow only when both conditions are true:

1. A first-party source shows that the full game is released: the official Steam product state, a FLEXUS announcement, or another verified official storefront.
2. The production build can actually be purchased or installed by the public in at least one confirmed market.

Record the release timestamp, source URL, storefront region, price, visible build identifier, and the person or automation that verified it.

### 3.2 Demo, Playtest, or Early Access trigger

Treat public demo, Playtest, and Early Access availability as separate events. Activate only the relevant access workflow and preserve the distinction in titles, body copy, schema, CTAs, and screenshots.

Never describe a demo or Playtest as the full release. Never describe a private creator build as publicly available.

### 3.3 Major-announcement trigger

A new official gameplay video, exact date, price, platform, language, player limit, or public build qualifies for a targeted update. It does not automatically justify a new route. Upgrade the existing intent owner first.

## 4. Evidence standard

Every time-sensitive statement must be classified internally as one of the following:

- **Confirmed:** supported by a first-party source or a reproducible hands-on test.
- **Observed:** visible in a named public build and recorded with version, date, platform, and evidence.
- **Inference:** a clearly labelled interpretation that is not presented as a game fact.
- **Unknown:** not announced or not reproducible.

### Source order

1. Official Steam store, Steam announcements, FLEXUS website, official trailer/video, verified developer or publisher channels.
2. Reproducible hands-on testing with original screenshots or video.
3. Platform documentation and official API output.
4. Community posts for demand discovery and issue reproduction leads only.
5. Third-party editorial pages for competitor and SERP research only.

Community claims must not become game facts without independent confirmation.

## 5. Traffic architecture

### 5.1 Flight Status

Purpose: capture breaking informational demand and create a reason to return.

Products:

- Official fact and change tracker.
- Release, demo, price, platform, language, and player-limit status.
- “What changed since your last visit” state.
- Patch and known-issue timeline after launch.

Primary traffic: Search, Google Discover/News eligibility, direct return, AI citations.

### 5.2 Crew Lab

Purpose: turn passive readers into participants and sharers.

Products:

- “Which Crew Seat Fits You?” role test.
- Crew Composer for combining several players' preferences.
- Missing-duty or team-balance summary based only on confirmed duties.
- Downloadable and shareable crew manifest.

Every result must say that it is a fan-made playstyle archetype, not an official class, skill, or matchmaking recommendation.

Primary traffic: Social, referral, return visits, role and multiplayer search.

### 5.3 Flight Tools

Purpose: solve repeatable player tasks more quickly than a conventional article.

Candidate products:

- PC readiness checklist based on official requirements.
- Controls and keybind finder based on a named tested build.
- First-flight checklist.
- Controller and accessibility reference.
- Multiplayer invite and lobby troubleshooting flow.
- Settings/performance comparison based on recorded hardware tests.

Primary traffic: Task search, bookmarks, direct return, citations and backlinks.

### 5.4 Flight Database

Purpose: capture durable entity and combination long-tail searches after the game exposes stable data.

Candidate entities:

- Passengers.
- Cargo.
- Items and tools.
- Hazards and incidents.
- Aircraft.
- Routes or locations.
- Achievements.
- Patches and build changes.

No entity template may be indexed until each page contains unique verified facts, actual player use or context, version information, original evidence, and meaningful internal relationships. Empty fields and boilerplate are not publishable content.

### 5.5 Community and share layer

Potential later products:

- Fan-created incident reports.
- Weekly flight challenges.
- Screenshot or clip showcases with permission.
- Crew recruitment/LFG.
- Comments or discussion.

Public submissions, comments, and LFG require authentication, moderation, abuse reporting, privacy controls, retention rules, and an operating owner. Until those exist, keep all generation local to the browser and upload nothing.

## 6. Existing search-intent ownership

Prefer an existing owner over a new route. Add a new route only when an independent search intent and enough unique evidence both exist.

| Intent | Current owner | Launch action |
|---|---|---|
| Brand/game overview | `/` | Update release status only on a verified major event |
| Release date and price status | `/dear-passengers-release-date/` | Replace pre-release answer with exact official availability facts |
| Safe download/store identity | `/dear-passengers-download/` | Add the verified purchase/install path, size, build and warnings |
| Demo/Playtest | `/dear-passengers-demo/` | Preserve demo versus full-game distinction |
| Players, solo and co-op | `/dear-passengers-player-count/` | Add observed lobby limits and live-player data only when verifiable |
| Platforms, controller and VR | `/dear-passengers-platforms/` | Update only officially listed or hands-on-tested support |
| Gameplay | `/dear-passengers-gameplay/` | Add first-hand flight-loop observations and original evidence |
| Roles | `/dear-passengers-roles/` | Candidate owner for Role Test and Crew Composer |
| Requirements | `/dear-passengers-system-requirements/` | Add recommended specs and measured settings only when available |
| Trailer/video evidence | `/dear-passengers-trailer/` | Candidate owner for a timestamped Trailer Evidence Lab |
| Official updates | `/dear-passengers-news/` | Maintain a sourced change log; do not rewrite rumors as news |

Candidate future routes, created only after their gates pass:

- `/dear-passengers-controls/`
- `/dear-passengers-beginners-guide/`
- `/dear-passengers-known-issues/`
- Database entity routes under one coherent hierarchy chosen after the released data model is known.

Do not reserve these routes with empty or “coming soon” indexable pages.

## 7. What can be done before launch

### P0 — Operational readiness

- [x] Store this launch playbook in the tracked project repository.
- [x] Create a single machine-readable game-fact registry with source URL, verification time, status, value, and affected routes.
- [ ] Create a launch observation template for build number, platform, controls, lobby flow, screenshots, performance hardware, and reproduction steps.
- [ ] Create reusable analytics helpers and a documented event registry before new tools are released.
- [ ] Define who can verify Steam, capture the game, publish, deploy, and submit search-engine URLs on launch day.
- [ ] Test the clean-worktree build and deployment path without changing production content.
- [ ] Maintain an official-source watchlist for Steam store state, Steam news, FLEXUS channels, and official video uploads.

### P1 — Evidence-safe product preparation

- [ ] Design the Roles quiz question and scoring model around confirmed duties only.
- [ ] Design the multi-person Crew Composer and share-card output.
- [ ] Prepare a PC readiness checklist using only currently published minimum requirements; do not promise FPS.
- [ ] Prepare a Trailer Evidence Lab data structure using timestamps and confirmed/observed/unknown labels.
- [ ] Prepare controls, known-issues, and database templates outside public App Router paths.
- [ ] Prepare desktop and 390 px mobile capture frames for original launch screenshots.
- [ ] Define image filenames, alt-text rules, attribution fields, dimensions, compression and OG crops.

### P2 — Demand and measurement preparation

- [ ] Maintain query watchlists for release, download, controls, keybinds, controller, co-op invites, solo, errors, performance, settings, achievements, passengers and cargo.
- [ ] Review Steam discussions, official video comments, Google PAA, related searches and GSC queries for independent intent.
- [ ] Record baseline landing-page CTR, engaged sessions, average engagement time, pages per session, returning users and Steam CTA clicks.
- [ ] Define country-level thresholds before translating a tool; do not translate every unstable launch page at once.
- [ ] Build an outreach list of factual gaming databases, co-op communities and creators that may cite original tests after launch.

### Current calendar gates

- Through 2026-08-14: monitor the homepage control-center experiment; no homepage copy/layout changes except faults, factual errors or major official news.
- On or after 2026-08-17: evaluate seven complete repaired-event days before any localized-homepage rollout.
- On or after 2026-08-24: evaluate fourteen complete repaired-event days before upgrading Roles with the quiz and Crew Composer.

Preparation can happen before these dates, but publication must respect the gate.

## 8. Launch execution timeline

### T0 to T+2 hours — Verify and correct

1. Confirm the activation rule and archive first-party evidence.
2. Record store region, price, launch discount, platform, languages, feature labels and official system requirements.
3. Install the public build and record download size, installed size, build identifier and first-launch requirements.
4. Correct any now-false status across existing owner pages. Treat the verified launch as a major official-event exception to the homepage freeze.
5. Make one existing owner the substantive SEO upgrade for the release wave; keep other edits to necessary factual consistency.
6. Update `dateModified`, visible fact-check time, source links, canonical/schema values when affected, and sitemap `lastmod`.
7. Publish only after validation and exact-production readback.

### T+2 to T+8 hours — Test and publish one useful task owner

1. Test keyboard/mouse controls and every accessible control menu.
2. Test controller support only with named hardware.
3. Test solo flow and online co-op with consent from all participants.
4. Capture original screenshots of settings, controls, lobby/invite flow and reproducible problems.
5. Choose the largest evidenced independent intent: normally controls/keybinds, first-flight setup, or multiplayer joining.
6. Publish at most one new high-quality route or one substantive owner-page upgrade in the run.
7. Add bidirectional links from the homepage or a relevant hub and at least two related content pages.

### T+8 to T+24 hours — Observe demand

1. Monitor GSC when data becomes available, Steam questions, official comments, video queries and referral traffic.
2. Log repeated problems with build and reproduction evidence.
3. Correct inaccurate content rapidly and show the correction/update time.
4. Submit the changed URL and sitemap to available search engines, keeping proof of the actual response.
5. Do not confuse a submission receipt with indexing.

### Days 2–7 — Build the first evidence cluster

- Upgrade one owner per qualified intent, prioritizing controls, co-op joining, performance, known issues and beginner setup.
- Start versioned player-count trends only when a reliable Steam source exists.
- Publish known-issue entries only for reproduced issues or clearly sourced official acknowledgements.
- Identify the first database entities, but keep them unpublished until the data quality gate passes.
- Localize only stable pages or tools in countries with demonstrated demand.

### Weeks 2–4 — Convert traffic into a durable product

- Launch the first useful database slice if the released game supplies enough stable entity data.
- Add a manifest or crew optimizer only when its inputs and outputs are grounded in real mechanics.
- Add update subscriptions only after consent, privacy, storage, unsubscribe and sending infrastructure exist.
- Use original datasets and test results for outreach, citations and AI-answer visibility.

## 9. Interactive product contract

Every interactive product must include:

- One clear user task and one primary search intent.
- A server-rendered direct answer before the interactive UI.
- A canonical URL and correct language metadata.
- Fast client-side interaction with no account requirement unless genuinely needed.
- Accessible labels, keyboard operation, reduced-motion behavior and a useful non-JavaScript answer.
- Mobile validation at 390 px.
- A saved-state and privacy statement when local storage is used.
- A visible unofficial/fan-made label when output is not an official game system.
- A version or verification timestamp.
- Related links to the correct intent owners.
- Event instrumentation defined before release.

Recommended events:

| Event | Required fields |
|---|---|
| `role_quiz_start` | `placement`, `language` |
| `role_quiz_complete` | `result_id`, `question_count`, `language` |
| `role_quiz_share` | `result_id`, `share_method`, `language` |
| `crew_compose_complete` | `crew_size`, `result_type`, `language` |
| `pc_check_complete` | `result_type`, `language` |
| `copy_control_click` | `control_action`, `input_type`, `build_id` |
| `guide_nav_click` | `source_page`, `destination`, `placement` |
| `official_purchase_click` | `storefront`, `placement`, `language` |
| `faq_expand` | `question_id`, `page_type`, `language` |
| `outbound_source_click` | `source_type`, `destination_domain`, `page_type` |

Do not send free-form personal text, crew names, hardware serials, IP addresses or other unnecessary identifiers to analytics.

## 10. SEO publication gate

A page or substantive upgrade may ship only when all relevant checks pass.

### Demand and uniqueness

- Independent search or player intent exists.
- The intent is not already owned adequately by another route.
- The page provides unique evidence, utility or data rather than rewritten competitor content.
- New English editorial pages normally contain about 1,600–2,000 useful words under the existing project standard; utility and database pages may be shorter only when the tool/data is the primary unique value and the direct answer is complete.
- Existing project phrase-density requirements are audited without making the writing unnatural.

### Trust and on-page SEO

- Confirmed, observed, inference and unknown states are distinguishable.
- Sources and a visible verification time are present.
- Title, meta description, one H1, canonical, article/webpage schema and breadcrumbs match the intent.
- FAQ content may support users and AI citation, but FAQ schema must not be added merely to expect Google commercial-site rich results.
- Images have accurate alt text, explicit dimensions, responsive loading, compression and source/rights records.
- Generated artwork is never presented as official gameplay footage.

### Architecture

- The new route has a clear owner keyword and does not cannibalize an existing route.
- It receives semantic links from the homepage or a relevant hub and at least two related pages.
- It links back to the relevant owners.
- Sitemap, canonical and reciprocal hreflang are updated where applicable.
- No public orphan, placeholder or thin programmatic route is introduced.

### Verification

Run at minimum:

```bash
pnpm typecheck
pnpm build
node scripts/audit-internal-links.mjs
node scripts/audit-i18n.mjs
```

Also run the relevant word/phrase audit, validate structured data, and inspect desktop plus 390 px mobile rendering. After deployment, verify the exact changed URL and sitemap return HTTP 200 and that production HTML contains the intended canonical, language and content.

## 11. Localization rules

- Choose locales from country/query demand, not population or translation convenience.
- Research native gaming vocabulary and question patterns before implementation.
- Localize the complete UI and interactive output; never mix English controls into a localized tool.
- Distinguish guide language from official in-game language support.
- Translate stable facts and tools after the source version is validated.
- Maintain reciprocal hreflang and semantic cross-links.
- Roll out one locale or one localized owner per qualified run.

## 12. Visual evidence and media

On launch or a major official update:

1. Review official Steam media, FLEXUS announcements and official videos for new licensed assets.
2. Capture original screenshots only from a legally accessed public build.
3. Record the build, capture date, platform and scene purpose.
4. Avoid spoilers in Hero or OG images unless the page intent requires them and users are warned.
5. Preserve existing Logo/OG dimensions and aspect ratios when replacing fixed assets.
6. Validate crop, clarity, text readability and loading on desktop and 390 px mobile.

Keep an existing image when a replacement adds no explanatory or search-intent value.

## 13. Measurement and decision thresholds

Track performance by acquisition layer:

### Search acquisition

- Non-brand clicks and impressions.
- Query-to-owner alignment.
- CTR by page, query, country and device.
- Indexing latency and canonical selection.
- AI citation and referral visibility when verifiable.

### Product engagement

- Tool starts, completion rate and useful-result rate.
- Average engagement time and pages per session.
- Return users and saved-state returns.
- Share/export rate and referral visits.
- Official Steam purchase/wishlist CTA clicks.

### Quality and authority

- Original screenshots/data cited by other sites.
- Earned referring domains.
- Correction rate and time to correct.
- Percentage of indexed pages with current version evidence.
- Ad performance evaluated with engagement and content quality, not pageview volume alone.

Do not declare growth when authentication, attribution, event validity or comparison windows are incomplete. Mark the metric as `unverifiable`.

## 14. Explicitly deferred or prohibited

Do not launch the following merely to create URLs or inflate page count:

- A countdown without an exact official date.
- Fabricated controls, fixes, passenger stats, cargo values, routes, items or mechanics.
- Empty database/entity pages.
- Fake server-status or player-count data.
- Crack, torrent, APK or misleading download funnels.
- Unmoderated comments, forums or LFG.
- Public user uploads without rights, moderation and privacy handling.
- Email subscriptions without consent, storage, unsubscribe and a reliable sending process.
- Bulk machine-translated launch pages.
- Repeated controversy pages without new first-party evidence and independent search intent.

## 15. Immediate next implementation candidates

These are ordered by current value and safety, not automatic authorization to publish:

1. **Game Fact Registry:** centralize time-sensitive facts, sources, statuses, verification times and affected routes so launch corrections are fast and consistent.
2. **Launch Observation Kit:** add a tracked template for build, controls, lobby, hardware, issues and original-media capture.
3. **Analytics Event Registry:** centralize typed event names and required fields before adding more interactive components.
4. **Roles product specification:** finish the question model, scoring, Crew Composer, share result and accessibility plan, then evaluate the 2026-08-24 publication gate.
5. **Trailer Evidence Lab specification:** map official-video timestamps to confirmed, visible-but-unexplained and unknown observations without creating a new route.

The default next engineering task should be the Game Fact Registry because it reduces factual drift across 150 URLs and shortens launch-day response time without publishing speculative content.

## 16. Release record template

Complete this block when an activation trigger fires:

```text
Event type: full release | early access | demo | playtest | major announcement
Detected at (UTC):
Verified at (UTC):
Verifier:
Primary source URL:
Secondary first-party source URL:
Store region:
Publicly purchasable/installable: yes | no
Price and currency:
Discount and end time:
Build/version identifier:
Download size:
Installed size:
Confirmed platforms:
Confirmed languages:
Confirmed player/lobby limit:
Observed controls/input support:
Changed intent owners:
Chosen substantive page for this run:
Original screenshot/video paths:
Validation results:
Git commit:
Deployment URL:
Production URL readback:
Sitemap count:
Google submission receipt:
Bing submission receipt:
IndexNow response:
Unknowns and follow-up date:
```

This document is an internal execution contract. Update it when new evidence changes the gates, route ownership, product sequence or measurement validity.
