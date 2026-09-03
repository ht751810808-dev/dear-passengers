import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/dear-passengers-xbox/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const OFFICIAL_SITE_URL = 'https://dearpassengers.game/';
const FLEXUS_URL = 'https://flexus.games/';
const XBOX_SEARCH_URL = 'https://www.xbox.com/en-US/Search/Results?q=Dear%20Passengers';
const INSIDER_URL = 'https://insider-gaming.com/dear-passengers-playstation-xbox-pc-switch-console-status/';
const DAYONE_URL = 'https://playday.one/2026/07/15/is-dear-passengers-coming-to-xbox/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Xbox: Release & Game Pass Status' },
  description:
    'Is Dear Passengers on Xbox? Check Series X|S, Xbox One, Microsoft Store, Game Pass, release date, price, controls, co-op and crossplay status.',
  alternates: {
    canonical: '/dear-passengers-xbox/',
    languages: { en: '/dear-passengers-xbox/', 'x-default': '/dear-passengers-xbox/' },
  },
  openGraph: {
    title: 'Dear Passengers Xbox: Release and Game Pass Status',
    description: 'An Xbox-specific evidence desk for the store listing, date, Game Pass, controls and online features.',
    url: PAGE_URL,
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Dear Passengers Xbox release and Game Pass status guide' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers Xbox: Release & Game Pass Status',
    description: 'Windows PC is confirmed; an Xbox edition, store listing, Game Pass plan and date are not announced.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Is Dear Passengers on Xbox?',
    answer: 'No Dear Passengers Xbox edition is announced. The current official product record identifies Windows PC through Steam, FLEXUS and a 2026 window, while no matching Xbox console product page is available.',
  },
  {
    question: 'Will Dear Passengers come to Xbox Series X|S?',
    answer: 'Dear Passengers Xbox remains possible but unconfirmed. Secondary reporting says the studio was still deciding platforms; that does not confirm a port, development schedule or release plan.',
  },
  {
    question: 'What is the Dear Passengers Xbox release date?',
    answer: 'There is no Dear Passengers Xbox release date. Steam lists the Windows PC edition for 2026, and that PC window cannot be assigned to an unannounced console edition.',
  },
  {
    question: 'Does Dear Passengers have an Xbox or Microsoft Store page?',
    answer: 'No verified Dear Passengers Xbox product page was found in the official Xbox store check. A real listing should identify the publisher, hardware, region, release state and access action consistently.',
  },
  {
    question: 'Will Dear Passengers be on Xbox Game Pass?',
    answer: 'Dear Passengers Xbox Game Pass access is unknown. No console, PC Game Pass, day-one subscription, cloud-streaming or trial placement has been announced by FLEXUS or Microsoft.',
  },
  {
    question: 'How much will Dear Passengers cost on Xbox?',
    answer: 'A Dear Passengers Xbox price is unknown because no console product or preorder exists. Steam also does not publish the Windows price, so conversions and retailer placeholders are not evidence.',
  },
  {
    question: 'Will Dear Passengers support Xbox controllers?',
    answer: 'Dear Passengers Xbox controller behavior is unannounced. Steam does not currently publish a controller-support category, and footage cannot confirm mappings, vibration, remapping or accessibility options.',
  },
  {
    question: 'Will Dear Passengers Xbox have crossplay or local co-op?',
    answer: 'Dear Passengers Xbox crossplay, local co-op and split screen are unknown. Steam confirms online co-op for Windows, but no second platform, shared-network promise or local-player specification exists.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers Xbox: Release and Game Pass Status',
  description: 'An Xbox-specific source check covering the Microsoft Store, release, Game Pass, price, controls and online features.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-09-03',
  dateModified: '2026-09-03',
  author: { '@type': 'Organization', name: 'DearPassengers.net Editorial Team', url: 'https://dearpassengers.net/about/' },
  publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/', logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' } },
  image: 'https://dearpassengers.net/images/og-image.png',
  citation: [STEAM_URL, OFFICIAL_SITE_URL, FLEXUS_URL, XBOX_SEARCH_URL, INSIDER_URL, DAYONE_URL],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers Game', item: 'https://dearpassengers.net/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://dearpassengers.net/dear-passengers-platforms/' },
    { '@type': 'ListItem', position: 3, name: 'Console Status', item: 'https://dearpassengers.net/dear-passengers-console/' },
    { '@type': 'ListItem', position: 4, name: 'Xbox Status', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

export default function DearPassengersXboxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main id="main-content" className="console-guide-page">
        <article>
          <header className="article-hero">
            <Image src="/images/release-date.webp" alt="Airliner approaching an Xbox status board" fill sizes="100vw" priority />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers Game</Link><span>/</span>
                <Link href="/dear-passengers-platforms/">Platforms</Link><span>/</span>
                <Link href="/dear-passengers-console/">Console</Link><span>/</span><span>Xbox</span>
              </nav>
              <div className="eyebrow"><span>●</span> XBOX STATUS DESK · STORE CHECK</div>
              <h1>Dear Passengers Xbox:<br /><em>Release & Game Pass Status</em></h1>
              <p>
                <strong>No Dear Passengers Xbox edition is announced.</strong> FLEXUS currently identifies a Windows PC
                game on Steam with a 2026 release window. Dear Passengers Xbox interest is measurable, but there is no
                verified Xbox product, console date, price, preorder, Game Pass plan, cloud version, controller profile,
                performance target, local co-op promise or crossplay announcement.
              </p>
              <div className="hero-actions">
                <a className="button" href={XBOX_SEARCH_URL} target="_blank" rel="noopener noreferrer">Check Xbox Store ↗</a>
                <Link className="button button-ghost" href="/dear-passengers-console/">Console parent →</Link>
              </div>
              <div className="article-meta"><span>Published September 3, 2026</span><span>PC: confirmed</span><span>Xbox: not announced</span></div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>XBOX STATUS</p>
              <a href="#answer">Direct answer</a><a href="#board">Evidence board</a><a href="#store">Store identity</a>
              <a href="#date">Date, price & access</a><a href="#game-pass">Game Pass & cloud</a>
              <a href="#hardware">Console features</a><a href="#online">Co-op & crossplay</a>
              <a href="#verify">Confirmation test</a><a href="#xbox-faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Official Steam page ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote checked="September 3, 2026" note="Confirmed means a matching FLEXUS or platform-holder record. Not announced means neither cancelled nor secretly scheduled." />

              <section id="answer">
                <span className="kicker">DIRECT ANSWER</span>
                <h2>Is Dear Passengers on Xbox?</h2>
                <p className="snippet-answer">
                  <strong>Dear Passengers Xbox support is not confirmed.</strong> Steam app 4534960 names FLEXUS,
                  Windows PC and 2026. The official Dear Passengers Xbox record does not name Xbox Series X|S or Xbox
                  One, and there is no product page, purchase, download, release date or playable console build.
                </p>
                <p>
                  The accurate status is “not announced,” not “never.” FLEXUS has published one platform but has not
                  issued a permanent PC-exclusivity statement. A Dear Passengers Xbox port could be evaluated later,
                  yet possibility is not evidence of development. Until the studio or Microsoft publishes a matching
                  record, Dear Passengers Xbox remains a player request rather than a product commitment.
                </p>
                <p>
                  This guide owns a narrower task than the <Link href="/dear-passengers-console/">console status page</Link>.
                  That parent compares Sony, Microsoft and Nintendo, while Dear Passengers Xbox answers Microsoft-specific
                  questions: Series X|S and Xbox One identity, Microsoft Store availability, Game Pass, cloud gaming,
                  controller features, performance and network support. The <Link href="/dear-passengers-platforms/">platform map</Link>{' '}
                  retains PC, mobile, VR, Mac and Linux coverage.
                </p>
              </section>

              <section id="board">
                <span className="kicker">EVIDENCE BOARD</span>
                <h2>Dear Passengers Xbox Status by Product Field</h2>
                <p>
                  Dear Passengers Xbox has no platform-holder product fields today. Steam confirms the real game identity,
                  current Windows scope, 2026 window, single-player and online co-op. Those facts identify the PC edition;
                  they do not establish console code, certification, store approval or a Dear Passengers Xbox release.
                </p>
                <div className="platform-table" role="table" aria-label="Dear Passengers Xbox status on September 3, 2026">
                  <div className="platform-head" role="row"><span role="columnheader">Product field</span><span role="columnheader">Status</span><span role="columnheader">Evidence</span></div>
                  <div role="row"><strong role="cell">Windows PC / Steam</strong><span className="status-confirmed" role="cell">2026 planned</span><span role="cell">Official app 4534960</span></div>
                  <div role="row"><strong role="cell">Xbox Series X|S / One</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No Xbox product record</span></div>
                  <div role="row"><strong role="cell">Microsoft Store access</strong><span className="status-open" role="cell">Unavailable</span><span role="cell">No verified listing</span></div>
                  <div role="row"><strong role="cell">Game Pass / cloud</strong><span className="status-open" role="cell">Unknown</span><span role="cell">No subscription fields</span></div>
                </div>
                <div className="status-grid">
                  <div className="fact-callout"><span>CONFIRMED PRODUCT</span><strong>Windows through Steam</strong><ul><li>FLEXUS developer and publisher</li><li>Broad 2026 release field</li><li>Single-player and online co-op</li><li>Published Windows minimums</li></ul></div>
                  <div className="fact-callout unknown-callout"><span>XBOX UNKNOWNS</span><strong>No Microsoft product record</strong><ul><li>Console port, certification and regions</li><li>Date, price, preorder and editions</li><li>Performance, controls and achievements</li><li>Game Pass, local play and crossplay</li></ul></div>
                </div>
                <p>
                  Secondary reporting attributed an official Discord FAQ answer to the studio saying platforms were
                  still being decided. That is a useful boundary for Dear Passengers Xbox: no final console commitment
                  was reported. It does not reveal an Xbox build, target date, launch parity or post-PC roadmap, so Dear
                  Passengers Xbox stays in the unannounced column.
                </p>
              </section>

              <section id="store">
                <span className="kicker">STORE IDENTITY</span>
                <h2>How to Check a Dear Passengers Xbox Store Listing</h2>
                <p>
                  A real Dear Passengers Xbox listing must live on an official Xbox or Microsoft domain and identify the
                  title without relying on a search snippet. It should show the publisher, supported hardware, region,
                  release state and available action. The current Dear Passengers Xbox store check does not return such
                  a product page.
                </p>
                <p>
                  Steam on Windows is not the Microsoft Store. A PC release through Valve does not confirm an Xbox app,
                  Xbox Play Anywhere entitlement or console executable. A result can also reuse PC artwork, add a
                  speculative date or attach Xbox to a popular search. Familiar art and a platform keyword do not create
                  a Dear Passengers Xbox build.
                </p>
                <p>
                  This test protects players from fake access. No official Dear Passengers Xbox key, beta code, preorder,
                  disc, package file or download exists. Do not install archives that claim to unlock the game on console
                  or PC. The <Link href="/dear-passengers-download/">download safety guide</Link> handles installer claims;
                  this Dear Passengers Xbox page tracks the Microsoft product record.
                </p>
              </section>

              <section id="date">
                <span className="kicker">RELEASE & ACCESS</span>
                <h2>Dear Passengers Xbox Release Date, Price and Preorder</h2>
                <p>
                  There is no Dear Passengers Xbox release date. Steam displays 2026 for Windows, and that field belongs
                  to the listed PC product. Copying it to Dear Passengers Xbox would imply a simultaneous console launch
                  that neither FLEXUS nor Microsoft has announced. Month, day, preload time and regional unlock remain unknown.
                </p>
                <p>
                  A Dear Passengers Xbox price is also unavailable. There is no console SKU, currency field, edition,
                  preorder or retailer allocation. The PC page does not publish a price either. Comparisons with other
                  co-op games cannot determine the Dear Passengers Xbox business model, regional pricing or upgrade path.
                </p>
                <p>
                  Retailer placeholders and database dates do not change that status. A valid Dear Passengers Xbox sale
                  would connect a Microsoft product ID to FLEXUS and state what can be purchased. Until those fields exist,
                  countdowns, key offers and “coming soon” cards should not be treated as a Dear Passengers Xbox announcement.
                </p>
              </section>

              <section id="game-pass">
                <span className="kicker">SUBSCRIPTION CHECK</span>
                <h2>Dear Passengers Xbox Game Pass and Cloud Status</h2>
                <p>
                  Dear Passengers Xbox Game Pass access is not announced. There is no day-one promise, catalog entry,
                  PC Game Pass listing, trial or subscription date. A future Dear Passengers Xbox console announcement
                  would still not prove Game Pass; platform availability and subscription licensing are separate decisions.
                </p>
                <p>
                  Xbox Cloud Gaming is another independent field. A Dear Passengers Xbox product could exist without
                  cloud streaming, and a Windows game can be sold outside Microsoft&apos;s ecosystem. No official source
                  currently names cloud availability, supported devices, touch controls or streaming regions for Dear
                  Passengers Xbox.
                </p>
                <p>
                  Xbox Play Anywhere, cross-buy and shared saves also require explicit store labels. Dear Passengers Xbox
                  cannot be described as an entitlement for both console and PC merely because Windows is confirmed. The
                  present Steam license and any hypothetical Microsoft license are distinct until a holder page says otherwise.
                </p>
              </section>

              <section id="hardware">
                <span className="kicker">XBOX-SPECIFIC FEATURES</span>
                <h2>Dear Passengers Xbox Controls, Performance and Achievements</h2>
                <p>
                  Dear Passengers Xbox controller behavior is unknown. The PC trailer shows first-person piloting and
                  cabin work, but it cannot confirm a complete gamepad path, button layout, vibration, trigger behavior,
                  sensitivity settings, remapping or accessibility options. Those require a Dear Passengers Xbox
                  specification or a documented hands-on console build.
                </p>
                <p>
                  Achievements are equally unannounced. A future Dear Passengers Xbox product might expose a Gamerscore
                  list after platform integration, but no names, points, count or save-sync rules can be inferred today.
                  Quick Resume, Smart Delivery and Looking for Group integration are separate features, not defaults.
                </p>
                <p>
                  Performance targets also need direct evidence. Dear Passengers Xbox has no published resolution,
                  frame-rate mode, Series S profile, loading benchmark or storage size. PC minimum requirements do not
                  translate into console presets. Claims of 4K, 60 fps or Series X enhancement remain unsupported.
                </p>
              </section>

              <section id="online">
                <span className="kicker">CREW CONNECTIONS</span>
                <h2>Dear Passengers Xbox Co-op, Crossplay and Local Play</h2>
                <p>
                  Steam confirms single-player and online co-op for Windows. It does not publish the maximum crew size.
                  Dear Passengers Xbox online co-op would need its own network specification, subscription requirement,
                  lobby rules, invitations, voice features, moderation and region behavior. None is available today.
                </p>
                <p>
                  Crossplay cannot be confirmed until a second platform exists and FLEXUS states that the networks connect.
                  A Dear Passengers Xbox edition could launch without PC crossplay, add it later or never support it.
                  Cross-save and shared progression are separate choices and remain unknown.
                </p>
                <p>
                  Local co-op and split screen are not listed for the Windows product. Even if Dear Passengers Xbox were
                  announced, controller support would not prove two or more players on one console. A product page or
                  developer specification must state local-player count and shared-screen behavior directly. The{' '}
                  <Link href="/dear-passengers-player-count/">player-count guide</Link> tracks the broader multiplayer limits.
                </p>
              </section>

              <section id="verify">
                <span className="kicker">CONFIRMATION TEST</span>
                <h2>What Would Confirm Dear Passengers Xbox?</h2>
                <p>
                  A reliable Dear Passengers Xbox confirmation should connect two first-party records: a dated FLEXUS
                  statement and an Xbox product page. The names, publisher and hardware must match. A platform logo in an
                  official trailer end card or an attributable Xbox Wire announcement can strengthen the record.
                </p>
                <ol className="steps article-steps">
                  <li><span>01</span><p><strong>Match the holder page.</strong> Find Dear Passengers Xbox on an official Microsoft domain, not a retailer or fan database.</p></li>
                  <li><span>02</span><p><strong>Match the publisher.</strong> Confirm FLEXUS and the exact product identity rather than copied PC art.</p></li>
                  <li><span>03</span><p><strong>Read each field.</strong> Hardware, date, regions, access and features must be explicit; one field cannot prove the rest.</p></li>
                </ol>
                <p>
                  Until that test passes, wishlisting the verified Windows page is the only official tracking action.
                  Dear Passengers Xbox rumor pages should not be used for payment, account login or downloads. This guide
                  will change only when the Dear Passengers Xbox evidence changes.
                </p>
              </section>

              <section id="updates">
                <span className="kicker">UPDATE POLICY</span>
                <h2>How This Dear Passengers Xbox Status Changes</h2>
                <p>
                  Dear Passengers Xbox is checked against product fields, not rumor volume. A new fan video, copied
                  retailer card or search suggestion will not move the status. Dear Passengers Xbox changes only when
                  FLEXUS or Microsoft publishes a record that names the hardware and product directly.
                </p>
                <p>
                  A partial Dear Passengers Xbox update may answer only one field. A store page could confirm the port
                  while leaving date and price blank; a trailer could name Xbox without explaining performance. Dear
                  Passengers Xbox reporting will keep every unfilled field unknown instead of filling gaps with estimates.
                </p>
                <p>
                  Each Dear Passengers Xbox revision records the source and verification date. Superseded information
                  stays distinguishable from the current answer, and Dear Passengers Xbox links are checked for a holder
                  domain before publication. This makes future changes auditable without pretending the page is a live feed.
                </p>
              </section>

              <section id="xbox-faq"><span className="kicker">PLAYER QUESTIONS</span><h2>Dear Passengers Xbox FAQ</h2><FAQ items={faqs} /></section>

              <section className="related-guide related-links-panel">
                <span className="kicker">PRIMARY SOURCES</span><h2>Verify Dear Passengers Xbox at the Source</h2>
                <p>
                  The <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">official Steam listing ↗</a>{' '}
                  identifies the current Windows product. The <a href={OFFICIAL_SITE_URL} target="_blank" rel="noopener noreferrer">official game site ↗</a>{' '}
                  and <a href={FLEXUS_URL} target="_blank" rel="noopener noreferrer">FLEXUS site ↗</a> route players to Steam.
                  The <a href={XBOX_SEARCH_URL} target="_blank" rel="noopener noreferrer">Xbox Store search ↗</a> is the
                  platform-holder check; no Dear Passengers Xbox product is verified there.
                </p>
                <p>
                  Secondary reports from <a href={INSIDER_URL} target="_blank" rel="noopener noreferrer">Insider Gaming ↗</a>{' '}
                  and <a href={DAYONE_URL} target="_blank" rel="noopener noreferrer">DayOne ↗</a> document the public
                  Xbox question but do not replace a first-party announcement. Next, compare the{' '}
                  <Link href="/dear-passengers-console/">console ecosystem board</Link>, the{' '}
                  <Link href="/dear-passengers-platforms/">complete platform map</Link>, the{' '}
                  <Link href="/dear-passengers-release-date/">release timeline</Link> and the{' '}
                  <Link href="/dear-passengers-steam/">confirmed Steam identity</Link>.
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
