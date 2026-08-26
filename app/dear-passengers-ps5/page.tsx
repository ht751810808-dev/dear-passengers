import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/dear-passengers-ps5/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const OFFICIAL_SITE_URL = 'https://dearpassengers.game/';
const FLEXUS_URL = 'https://flexus.games/';
const PLAYSTATION_SEARCH_URL = 'https://store.playstation.com/en-us/search/dear%20passengers';
const INSIDER_URL = 'https://insider-gaming.com/dear-passengers-playstation-xbox-pc-switch-console-status/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers PS5: Release & Store Status' },
  description:
    'Is Dear Passengers on PS5? Check the PlayStation Store, release date, price, PS Plus, DualSense, trophies, performance, co-op and crossplay status.',
  alternates: {
    canonical: '/dear-passengers-ps5/',
    languages: {
      en: '/dear-passengers-ps5/',
      de: '/de/dear-passengers-ps5/',
      tr: '/tr/dear-passengers-ps5/',
      'x-default': '/dear-passengers-ps5/',
    },
  },
  openGraph: {
    title: 'Dear Passengers PS5: Release and Store Status',
    description: 'A PS5-specific evidence desk for the store listing, date, access, controls and online features.',
    url: PAGE_URL,
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Dear Passengers PS5 release and PlayStation Store status guide' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers PS5: Release & Store Status',
    description: 'Windows PC is confirmed; a PS5 edition, store listing and date are not announced.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Is Dear Passengers on PS5?',
    answer: 'No Dear Passengers PS5 edition is announced. The official product record identifies Windows PC through Steam, FLEXUS and a 2026 window, while no matching PlayStation 5 product page is available.',
  },
  {
    question: 'Will Dear Passengers come to PS5?',
    answer: 'Dear Passengers PS5 remains possible but unconfirmed. A report quoting the official Discord FAQ says platforms are still being decided; that is not a port announcement, release plan or guarantee.',
  },
  {
    question: 'What is the Dear Passengers PS5 release date?',
    answer: 'There is no Dear Passengers PS5 release date. Steam lists the Windows PC edition for 2026, and that PC window cannot be copied to an unannounced console edition.',
  },
  {
    question: 'Does Dear Passengers have a PS5 PlayStation Store page?',
    answer: 'No verified Dear Passengers PS5 product page was found in the official PlayStation Store check. A real page should identify the publisher, hardware, region, release state and access action consistently.',
  },
  {
    question: 'How much will Dear Passengers cost on PS5?',
    answer: 'A Dear Passengers PS5 price is unknown because no console product or preorder exists. Steam also does not yet publish the Windows price, so currency conversions and retailer placeholders are not evidence.',
  },
  {
    question: 'Will Dear Passengers be on PS Plus?',
    answer: 'Dear Passengers PS5 access through PS Plus is unknown. No subscription placement, trial, monthly-game offer or cloud-streaming plan has been announced.',
  },
  {
    question: 'Will Dear Passengers use DualSense and have trophies?',
    answer: 'Dear Passengers PS5 controller and trophy features are unannounced. Adaptive triggers, haptics, motion controls, activity cards, trophies and accessibility cannot be inferred from PC footage.',
  },
  {
    question: 'Will Dear Passengers PS5 have crossplay or local co-op?',
    answer: 'Dear Passengers PS5 crossplay, local co-op and split screen are unknown. Steam confirms online co-op for Windows, but no second platform or local-player specification currently exists.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers PS5: Release and Store Status',
  description: 'A PS5-specific source check covering the PlayStation Store, release, price, controls and online features.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-08-26',
  dateModified: '2026-08-26',
  author: { '@type': 'Organization', name: 'DearPassengers.net Editorial Team', url: 'https://dearpassengers.net/about/' },
  publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/', logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' } },
  image: 'https://dearpassengers.net/images/og-image.png',
  citation: [STEAM_URL, OFFICIAL_SITE_URL, FLEXUS_URL, PLAYSTATION_SEARCH_URL, INSIDER_URL],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers Game', item: 'https://dearpassengers.net/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://dearpassengers.net/dear-passengers-platforms/' },
    { '@type': 'ListItem', position: 3, name: 'Console Status', item: 'https://dearpassengers.net/dear-passengers-console/' },
    { '@type': 'ListItem', position: 4, name: 'PlayStation Status', item: 'https://dearpassengers.net/dear-passengers-playstation/' },
    { '@type': 'ListItem', position: 5, name: 'PS5 Status', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

export default function DearPassengersPS5Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main id="main-content" className="console-guide-page">
        <article>
          <header className="article-hero">
            <Image src="/images/release-date.webp" alt="Airliner approaching a status board for the PS5 guide" fill sizes="100vw" priority />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers Game</Link><span>/</span>
                <Link href="/dear-passengers-platforms/">Platforms</Link><span>/</span>
                <Link href="/dear-passengers-console/">Console</Link><span>/</span>
                <Link href="/dear-passengers-playstation/">PlayStation</Link><span>/</span><span>PS5</span>
              </nav>
              <div className="eyebrow"><span>●</span> PS5 STATUS DESK · STORE CHECK</div>
              <h1>Dear Passengers PS5:<br /><em>Release & Store Status</em></h1>
              <p>
                <strong>No Dear Passengers PS5 edition is announced.</strong> FLEXUS currently identifies a Windows PC
                game on Steam with a 2026 release window. Dear Passengers PS5 interest is substantial, but there is no
                verified PlayStation Store product, console date, price, preorder, PS Plus plan, DualSense feature list,
                trophy set, performance target, local co-op promise or crossplay announcement.
              </p>
              <div className="hero-actions">
                <a className="button" href={PLAYSTATION_SEARCH_URL} target="_blank" rel="noopener noreferrer">Check PlayStation Store ↗</a>
                <Link className="button button-ghost" href="/dear-passengers-playstation/">PlayStation parent →</Link>
              </div>
              <div className="article-meta"><span>Published August 26, 2026</span><span>PC: confirmed</span><span>PS5: not announced</span></div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>PS5 STATUS</p>
              <a href="#answer">Direct answer</a><a href="#board">Evidence board</a><a href="#store">Store identity</a>
              <a href="#date">Date, price & access</a><a href="#hardware">DualSense & performance</a>
              <a href="#online">Co-op & crossplay</a><a href="#verify">Confirmation test</a><a href="#ps5-faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Official Steam page ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote checked="August 26, 2026" note="Confirmed means a matching FLEXUS or platform-holder record. Not announced means neither cancelled nor secretly scheduled." />

              <section id="answer">
                <span className="kicker">DIRECT ANSWER</span>
                <h2>Is Dear Passengers on PS5?</h2>
                <p className="snippet-answer">
                  <strong>Dear Passengers PS5 support is not confirmed.</strong> Steam app 4534960 names FLEXUS,
                  Windows PC and 2026. The official Dear Passengers PS5 record does not name PlayStation 5, and there is
                  no product page, purchase, download, release date or playable PS5 build.
                </p>
                <p>
                  The accurate status is “not announced,” not “never.” FLEXUS has published one platform but has not
                  issued a permanent PC-exclusivity statement. A Dear Passengers PS5 port could be evaluated later,
                  yet possibility is not evidence of development. Until the studio or Sony publishes a matching record,
                  Dear Passengers PS5 remains a player request rather than a product commitment.
                </p>
                <p>
                  This guide owns a narrower task than the <Link href="/dear-passengers-playstation/">PlayStation status page</Link>.
                  That parent compares PS5 and PS4, while Dear Passengers PS5 answers current-generation questions:
                  store identity, launch timing, pricing, subscription access, DualSense, trophies, performance and
                  network features. The <Link href="/dear-passengers-console/">console guide</Link> compares Sony,
                  Xbox and Nintendo without treating any requested port as confirmed.
                </p>
              </section>

              <section id="board">
                <span className="kicker">EVIDENCE BOARD</span>
                <h2>Dear Passengers PS5 Status by Product Field</h2>
                <p>
                  Dear Passengers PS5 has no platform-holder product fields today. Steam confirms the real game identity,
                  current Windows scope, 2026 window, single-player and online co-op. Those facts identify the PC edition;
                  they do not establish console code, certification, store approval or a Dear Passengers PS5 release.
                </p>
                <div className="platform-table" role="table" aria-label="Dear Passengers PS5 status on August 26, 2026">
                  <div className="platform-head" role="row"><span role="columnheader">Product field</span><span role="columnheader">Status</span><span role="columnheader">Evidence</span></div>
                  <div role="row"><strong role="cell">Windows PC / Steam</strong><span className="status-confirmed" role="cell">2026 planned</span><span role="cell">Official app 4534960</span></div>
                  <div role="row"><strong role="cell">PlayStation 5 edition</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No Dear Passengers PS5 product</span></div>
                  <div role="row"><strong role="cell">PlayStation Store access</strong><span className="status-open" role="cell">Unavailable</span><span role="cell">No verified listing</span></div>
                  <div role="row"><strong role="cell">Release, price and preorder</strong><span className="status-open" role="cell">Unknown</span><span role="cell">No console fields</span></div>
                </div>
                <div className="status-grid">
                  <div className="fact-callout"><span>CONFIRMED PRODUCT</span><strong>Windows through Steam</strong><ul><li>FLEXUS developer and publisher</li><li>Broad 2026 release field</li><li>Single-player and online co-op</li><li>Published Windows minimums</li></ul></div>
                  <div className="fact-callout unknown-callout"><span>PS5 UNKNOWNS</span><strong>No Sony product record</strong><ul><li>Port, certification and regions</li><li>Date, price, preorder and editions</li><li>Performance, controls and trophies</li><li>PS Plus, local play and crossplay</li></ul></div>
                </div>
                <p>
                  A July report quoting the official Discord FAQ says the team is still deciding platforms. That is a
                  useful boundary for Dear Passengers PS5: no final console commitment had been made. The statement does
                  not reveal a PS5 build, target date, launch parity or post-PC roadmap, so Dear Passengers PS5 stays in
                  the unannounced column.
                </p>
              </section>

              <section id="store">
                <span className="kicker">STORE IDENTITY</span>
                <h2>How to Check a Dear Passengers PS5 Store Listing</h2>
                <p>
                  A real Dear Passengers PS5 listing must live on an official PlayStation domain and identify the title
                  without relying on a search snippet. It should show the publisher, supported hardware, region, release
                  state and available action. The current Dear Passengers PS5 store check does not return such a page.
                </p>
                <p>
                  Retailer placeholders are weaker evidence. A shop can copy PC artwork, add a speculative date or attach
                  PS5 to a popular search before Sony assigns a product ID. Videos labelled Dear Passengers PS5 gameplay
                  are also unreliable when they reuse Windows footage. Familiar art and a console keyword do not create
                  a Dear Passengers PS5 build.
                </p>
                <p>
                  This test also protects players from fake access. No official Dear Passengers PS5 key, beta code,
                  preorder, disc, package file or download exists. Do not install archives that claim to unlock the game
                  on a console or PC. The <Link href="/dear-passengers-download/">download safety guide</Link> handles
                  installer claims; this Dear Passengers PS5 page tracks the Sony store record.
                </p>
              </section>

              <section id="date">
                <span className="kicker">RELEASE & ACCESS</span>
                <h2>Dear Passengers PS5 Release Date, Price and PS Plus</h2>
                <p>
                  There is no Dear Passengers PS5 release date. Steam displays 2026 for Windows, and that field belongs
                  to the listed PC product. Copying it to Dear Passengers PS5 would imply a simultaneous console launch
                  that neither FLEXUS nor Sony has announced. Month, day, preload time and regional unlock remain unknown.
                </p>
                <p>
                  A Dear Passengers PS5 price is also unavailable. There is no console SKU, currency field, edition,
                  preorder or retailer allocation. The PC page does not publish a price either. Comparisons with other
                  co-op games cannot determine the Dear Passengers PS5 business model, regional pricing or upgrade path.
                </p>
                <p>
                  PS Plus is a separate unknown. A Dear Passengers PS5 announcement would not automatically confirm a
                  monthly-game placement, Game Catalog access, Premium trial or cloud stream. Each program needs its own
                  Sony record. Until then, PS Plus claims add access details to a product that has not been announced.
                </p>
              </section>

              <section id="hardware">
                <span className="kicker">PS5-SPECIFIC FEATURES</span>
                <h2>Dear Passengers PS5 DualSense, Trophies and Performance</h2>
                <p>
                  Dear Passengers PS5 controller behavior is unknown. The PC trailer shows first-person piloting and
                  cabin work, but it cannot confirm adaptive-trigger resistance, haptic patterns, motion input, touchpad
                  actions, speaker use, light-bar cues, remapping or accessibility settings. Those require a Dear Passengers
                  PS5 specification or hands-on build.
                </p>
                <p>
                  Trophy support is equally unannounced. A future Dear Passengers PS5 product would normally expose a
                  trophy set only after platform integration, but no names, grades, count or Platinum status can be
                  inferred. Activity cards, Game Help, Share Play and save transfer are separate features, not defaults.
                </p>
                <p>
                  Performance targets also need direct evidence. Dear Passengers PS5 has no published resolution,
                  frame-rate mode, ray-tracing option, loading benchmark or storage size. PC minimum requirements do not
                  translate into console presets. Claims of 4K, 60 fps or PS5 Pro enhancement remain unsupported.
                </p>
              </section>

              <section id="online">
                <span className="kicker">CREW CONNECTIONS</span>
                <h2>Dear Passengers PS5 Co-op, Crossplay and Local Play</h2>
                <p>
                  Steam confirms single-player and online co-op for Windows. It does not publish the maximum crew size.
                  Dear Passengers PS5 online co-op would need its own network specification, PS Plus requirement, lobby
                  rules, invitations, voice features, moderation and region behavior. None is available today.
                </p>
                <p>
                  Crossplay cannot exist as a confirmed feature until a second platform is confirmed and FLEXUS states
                  that the networks connect. A Dear Passengers PS5 edition could launch without PC crossplay, add it
                  later or never support it. Cross-save and shared progression are separate choices and remain unknown.
                </p>
                <p>
                  Local co-op and split screen are not listed for the Windows product. Even if Dear Passengers PS5 were
                  announced, controller support would not prove two or more players on one console. A product page or
                  developer specification must state local-player count and screen-sharing behavior directly.
                </p>
              </section>

              <section id="verify">
                <span className="kicker">CONFIRMATION TEST</span>
                <h2>What Would Confirm Dear Passengers PS5?</h2>
                <p>
                  A reliable Dear Passengers PS5 confirmation should connect two first-party records: a dated FLEXUS
                  statement and a PlayStation Store page. The names, publisher and hardware must match. A platform logo
                  in official trailer end cards or an attributable PlayStation announcement can strengthen the record.
                </p>
                <ol className="steps article-steps">
                  <li><span>01</span><p><strong>Match the holder page.</strong> Find Dear Passengers PS5 on an official PlayStation domain, not a retailer or fan database.</p></li>
                  <li><span>02</span><p><strong>Match the publisher.</strong> Confirm FLEXUS and the exact product identity rather than copied PC art.</p></li>
                  <li><span>03</span><p><strong>Read each field.</strong> Hardware, date, regions, access and features must be explicit; one field cannot prove the rest.</p></li>
                </ol>
                <p>
                  Until that test passes, wishlisting the verified Windows page is the only official tracking action.
                  Dear Passengers PS5 rumor pages should not be used for payment, account login or downloads. This guide
                  will change only when the Dear Passengers PS5 evidence changes.
                </p>
              </section>

              <section id="updates">
                <span className="kicker">UPDATE POLICY</span>
                <h2>How This Dear Passengers PS5 Status Changes</h2>
                <p>
                  Dear Passengers PS5 is checked against product fields, not rumor volume. A new fan video, copied
                  retailer card or search suggestion will not move the status. Dear Passengers PS5 changes only when
                  FLEXUS or PlayStation publishes a record that names the hardware and product directly.
                </p>
                <p>
                  A partial Dear Passengers PS5 update may answer only one field. A store page could confirm the port
                  while leaving date and price blank; a trailer could name PS5 without explaining performance. Dear
                  Passengers PS5 reporting will keep every unfilled field unknown instead of filling gaps with estimates.
                </p>
                <p>
                  Each Dear Passengers PS5 revision records the source and verification date. Superseded information
                  stays distinguishable from the current answer, and Dear Passengers PS5 links are checked for a holder
                  domain before publication. This makes future changes auditable without pretending the page is a live feed.
                </p>
              </section>

              <section id="ps5-faq"><span className="kicker">PLAYER QUESTIONS</span><h2>Dear Passengers PS5 FAQ</h2><FAQ items={faqs} /></section>

              <section className="related-guide related-links-panel">
                <span className="kicker">PRIMARY SOURCES</span><h2>Verify Dear Passengers PS5 at the Source</h2>
                <p>
                  The <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">official Steam listing ↗</a>
                  identifies the current Windows product. The <a href={OFFICIAL_SITE_URL} target="_blank" rel="noopener noreferrer">official game site ↗</a>
                  and <a href={FLEXUS_URL} target="_blank" rel="noopener noreferrer">FLEXUS site ↗</a> route players to Steam.
                  The <a href={PLAYSTATION_SEARCH_URL} target="_blank" rel="noopener noreferrer">PlayStation Store search ↗</a>
                  is the platform-holder check; no Dear Passengers PS5 product is verified there.
                </p>
                <p>
                  Next, compare the <Link href="/dear-passengers-playstation/">PlayStation generations</Link>, the
                  <Link href="/dear-passengers-console/"> console ecosystem board</Link>, the
                  <Link href="/dear-passengers-release-date/"> release timeline</Link> and the
                  <Link href="/dear-passengers-steam/"> confirmed Steam identity</Link>.
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
