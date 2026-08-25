import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/dear-passengers-playstation/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const OFFICIAL_SITE_URL = 'https://dearpassengers.game/';
const FLEXUS_URL = 'https://flexus.games/';
const PLAYSTATION_SEARCH_URL = 'https://store.playstation.com/en-us/search/dear%20passengers';
const COMMUNITY_URL = 'https://steamcommunity.com/app/4534960/discussions/0/579425059539548043/';
const INSIDER_URL = 'https://insider-gaming.com/dear-passengers-playstation-xbox-pc-switch-console-status/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers PlayStation: PS5 & PS4 Status' },
  description:
    'Is Dear Passengers on PlayStation? Check PS5, PS4, PlayStation Store, release date, PS Plus, DualSense, co-op and crossplay evidence.',
  alternates: {
    canonical: '/dear-passengers-playstation/',
    languages: { en: '/dear-passengers-playstation/', 'x-default': '/dear-passengers-playstation/' },
  },
  openGraph: {
    title: 'Dear Passengers PlayStation: PS5 and PS4 Status',
    description:
      'A source-led PlayStation status desk covering store identity, hardware generations, release timing, controls and online features.',
    url: PAGE_URL,
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Dear Passengers PlayStation PS5 and PS4 status guide',
    }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers PlayStation: PS5 & PS4 Status',
    description: 'Windows PC is confirmed; PlayStation hardware and store access are not announced.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Is Dear Passengers on PlayStation?',
    answer:
      'No Dear Passengers PlayStation edition is announced. The current first-party product record identifies Windows PC through Steam, FLEXUS and a 2026 window, while no matching PlayStation Store product page is available.',
  },
  {
    question: 'Is Dear Passengers coming to PS5?',
    answer:
      'Dear Passengers PlayStation support for PS5 is not confirmed. A Steam Community moderator said PS5 support could not be promised at release, which keeps the possibility open without establishing a port, date or store listing.',
  },
  {
    question: 'Will Dear Passengers release on PS4?',
    answer:
      'No Dear Passengers PlayStation version is announced for PS4. PS5 interest does not establish a previous-generation edition, and FLEXUS has not published hardware, performance or certification targets for either console.',
  },
  {
    question: 'Does Dear Passengers have a PlayStation Store page?',
    answer:
      'No verified Dear Passengers PlayStation product page was found in the official store check. A real listing should identify the title, publisher, supported hardware, region, release state and access action consistently.',
  },
  {
    question: 'What is the Dear Passengers PlayStation release date?',
    answer:
      'There is no Dear Passengers PlayStation release date. Steam lists the Windows edition for 2026, but that PC window cannot be copied to an unannounced PS5 or PS4 version.',
  },
  {
    question: 'Will Dear Passengers be on PS Plus?',
    answer:
      'Dear Passengers PlayStation access through PS Plus is unknown. No store product, subscription announcement, trial, monthly-game placement or cloud-streaming plan has been published.',
  },
  {
    question: 'Will Dear Passengers use DualSense features?',
    answer:
      'Dear Passengers PlayStation controller features are unannounced. Adaptive triggers, haptics, motion input, speaker use, remapping and accessibility cannot be inferred from the PC trailer.',
  },
  {
    question: 'Will Dear Passengers have PlayStation crossplay or local co-op?',
    answer:
      'Dear Passengers PlayStation crossplay, local co-op and split screen are unknown. Steam confirms online co-op for Windows, but no second platform or local-player specification exists to establish those features.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers PlayStation: PS5 and PS4 Status',
  description: 'A source-led check of PlayStation Store, PS5, PS4, release and platform-feature evidence.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-08-25',
  dateModified: '2026-08-25',
  author: { '@type': 'Organization', name: 'DearPassengers.net Editorial Team', url: 'https://dearpassengers.net/about/' },
  publisher: {
    '@type': 'Organization',
    name: 'DearPassengers.net',
    url: 'https://dearpassengers.net/',
    logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' },
  },
  image: 'https://dearpassengers.net/images/og-image.png',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers Game', item: 'https://dearpassengers.net/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://dearpassengers.net/dear-passengers-platforms/' },
    { '@type': 'ListItem', position: 3, name: 'Console Status', item: 'https://dearpassengers.net/dear-passengers-console/' },
    { '@type': 'ListItem', position: 4, name: 'PlayStation Status', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function PlayStationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <main id="main-content" className="console-guide-page">
        <article>
          <header className="article-hero">
            <Image
              src="/images/release-date.webp"
              alt="Airliner approaching a platform board for the PlayStation status guide"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers Game</Link><span>/</span>
                <Link href="/dear-passengers-platforms/">Platforms</Link><span>/</span>
                <Link href="/dear-passengers-console/">Console</Link><span>/</span><span>PlayStation</span>
              </nav>
              <div className="eyebrow"><span>●</span> PLAYSTATION DESK · STORE STATUS</div>
              <h1>Dear Passengers PlayStation:<br /><em>PS5 & PS4 Status</em></h1>
              <p>
                <strong>No Dear Passengers PlayStation edition is announced.</strong> FLEXUS currently identifies a
                Windows PC game on Steam with a broad 2026 window. Dear Passengers PlayStation searches show clear
                interest, but there is no verified PlayStation Store page, PS5 or PS4 date, price, preorder, PS Plus
                plan, DualSense specification, local co-op promise or crossplay announcement.
              </p>
              <div className="hero-actions">
                <a className="button" href={PLAYSTATION_SEARCH_URL} target="_blank" rel="noopener noreferrer">Check PlayStation Store ↗</a>
                <Link className="button button-ghost" href="/dear-passengers-console/">Console parent →</Link>
              </div>
              <div className="article-meta">
                <span>Published August 25, 2026</span><span>Confirmed: Windows PC</span><span>PlayStation: not announced</span>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>PLAYSTATION STATUS</p>
              <a href="#answer">Direct answer</a>
              <a href="#board">Status board</a>
              <a href="#store">Store identity</a>
              <a href="#generations">PS5 & PS4</a>
              <a href="#release">Date, price & PS Plus</a>
              <a href="#controls">DualSense & trophies</a>
              <a href="#multiplayer">Co-op & crossplay</a>
              <a href="#confirmation">Confirmation test</a>
              <a href="#playstation-faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Official Steam page ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote note="Confirmed means a matching FLEXUS or PlayStation record. Not announced does not mean cancelled, impossible or secretly scheduled." />

              <section id="answer">
                <span className="kicker">DIRECT ANSWER</span>
                <h2>Is Dear Passengers on PlayStation?</h2>
                <p className="snippet-answer">
                  <strong>Dear Passengers PlayStation support is not confirmed.</strong> Steam app 4534960 names
                  FLEXUS, Windows PC and 2026, while the current first-party Dear Passengers PlayStation record does
                  not name PS5 or PS4. There is no official Dear Passengers PlayStation store page, release date,
                  price, preorder or playable download.
                </p>
                <p>
                  The accurate answer is “not announced,” rather than “never.” FLEXUS has published one destination
                  but has not issued a permanent PC-exclusivity statement. A Dear Passengers PlayStation version could
                  be considered later, yet possibility is not evidence of development. Until the studio or Sony
                  publishes a matching record, Dear Passengers PlayStation remains an audience request rather than a
                  product commitment.
                </p>
                <p>
                  This page owns one source keyword and one task: verifying Dear Passengers PlayStation availability.
                  The <Link href="/dear-passengers-console/">console parent</Link> compares the three home-console
                  ecosystems, and the <Link href="/dear-passengers-platforms/">platform hub</Link> covers PC, VR,
                  mobile, Mac, Linux and Steam Deck. Dear Passengers PlayStation keeps the Sony-specific store,
                  generation, subscription, controller and certification questions together.
                </p>
              </section>

              <section id="board">
                <span className="kicker">STATUS BOARD</span>
                <h2>Dear Passengers PlayStation Evidence</h2>
                <p>
                  Every Dear Passengers PlayStation product field remains open because no platform-holder listing
                  exists. Steam confirms the real game identity and current PC scope, but a Windows requirement cannot
                  confirm console compatibility. The board separates the published product from requested Sony
                  editions.
                </p>
                <div className="platform-table" role="table" aria-label="Dear Passengers PlayStation status on August 25, 2026">
                  <div className="platform-head" role="row"><span role="columnheader">Product</span><span role="columnheader">Status</span><span role="columnheader">Evidence</span></div>
                  <div role="row"><strong role="cell">Windows PC / Steam</strong><span className="status-confirmed" role="cell">Planned for 2026</span><span role="cell">Official app 4534960</span></div>
                  <div role="row"><strong role="cell">PlayStation 5</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No Dear Passengers PlayStation listing</span></div>
                  <div role="row"><strong role="cell">PlayStation 4</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No generation-specific record</span></div>
                  <div role="row"><strong role="cell">PlayStation Store access</strong><span className="status-open" role="cell">Unavailable</span><span role="cell">No verified product page</span></div>
                </div>
                <div className="status-grid" aria-label="Confirmed and unknown PlayStation facts">
                  <div className="fact-callout">
                    <span>CONFIRMED PRODUCT</span><strong>Windows through Steam</strong>
                    <ul><li>FLEXUS developer and publisher</li><li>Broad 2026 release field</li><li>Single-player and online co-op</li><li>Published Windows minimums</li></ul>
                  </div>
                  <div className="fact-callout unknown-callout">
                    <span>PLAYSTATION UNKNOWNS</span><strong>No Sony product record</strong>
                    <ul><li>Dear Passengers PlayStation generation</li><li>Store regions, date and price</li><li>Certification and performance</li><li>PS Plus, controls and network rules</li></ul>
                  </div>
                </div>
                <p>
                  A Steam Community moderator wrote that PS5 support could not be promised at release. That Dear
                  Passengers PlayStation signal is more useful than fan speculation because it comes from the game
                  forum, but it is still not a formal announcement. It supplies no build status, date, region,
                  performance target or guarantee. Dear Passengers PlayStation therefore stays unannounced.
                </p>
              </section>

              <section id="store">
                <span className="kicker">STORE IDENTITY</span>
                <h2>How to Verify a Dear Passengers PlayStation Store Page</h2>
                <p>
                  A real Dear Passengers PlayStation listing should be visible on an official PlayStation domain and
                  identify the product without relying on a search snippet. It should name the supported hardware,
                  publisher, region, release state and available action. The present Dear Passengers PlayStation Store
                  check does not return a matching product page.
                </p>
                <p>
                  Retailer placeholders are weaker evidence. A shop can copy the PC artwork, invent a date or combine
                  platforms before Sony exposes a product ID. A video titled “Dear Passengers PlayStation gameplay”
                  is weaker still when it reuses PC footage. A verified Dear Passengers PlayStation record needs a
                  holder-issued page connected to FLEXUS, not merely familiar artwork or keywords.
                </p>
                <p>
                  The same test protects players from fake access offers. No official Dear Passengers PlayStation key,
                  beta code, preorder, disc, package file or download exists. A third-party archive cannot establish a
                  console version. Use the <Link href="/dear-passengers-download/">download safety guide</Link> for
                  installer claims and return to this Dear Passengers PlayStation desk for Sony store status.
                </p>
              </section>

              <section id="generations">
                <span className="kicker">HARDWARE GENERATIONS</span>
                <h2>Dear Passengers PlayStation on PS5 and PS4</h2>
                <p>
                  PS5 and PS4 require separate Dear Passengers PlayStation evidence. Interest in the newer console does
                  not automatically create a previous-generation build, and a future PS5 announcement would not prove
                  PS4 support. FLEXUS could choose one generation, both generations, a later port or no Sony edition.
                  None of those paths is confirmed.
                </p>
                <p>
                  Performance also cannot be projected from the PC minimum list. Steam names Windows 10, an Intel Core
                  i5-class processor, 8 GB RAM, a GTX 1060 or RX 6600 XT-class GPU, DirectX 12 and 4 GB storage. Those
                  fields describe the Windows target. They do not reveal Dear Passengers PlayStation resolution,
                  frame rate, loading, graphics modes or certification progress.
                </p>
                <p>
                  A Dear Passengers PlayStation product would also need region and age-rating fields. Store availability
                  can differ between the United States, Europe, Japan and other territories, while PS4 and PS5 may use
                  separate packages or upgrade rules. No regional listing, entitlement or upgrade path is published,
                  so this page does not promise cross-buy or backward compatibility.
                </p>
              </section>

              <section id="release">
                <span className="kicker">ACCESS & TIMING</span>
                <h2>Dear Passengers PlayStation Release Date, Price and PS Plus</h2>
                <p>
                  There is no Dear Passengers PlayStation release date. The visible 2026 field belongs to Steam on
                  Windows and must not be copied into an unannounced console product. Simultaneous launch, a later port,
                  Early Access and preorder timing are all unknown. A holder page or direct FLEXUS statement must name
                  the Sony version before a date can be tracked.
                </p>
                <p>
                  Dear Passengers PlayStation pricing is equally open. Steam does not yet publish the PC price, so
                  there is no reliable base amount from which to infer dollars, euros, yen or regional console pricing.
                  Standard, deluxe and physical editions have not been announced. A retailer number is not an official
                  Dear Passengers PlayStation price.
                </p>
                <p>
                  Dear Passengers PlayStation on PS Plus is not confirmed. No monthly-game placement, catalog inclusion,
                  trial, cloud-streaming option
                  or subscription requirement exists for Dear Passengers PlayStation. Online co-op on PC does not tell
                  players which PlayStation subscription tier a hypothetical edition would require. Purchase model and
                  network access remain separate unknowns.
                </p>
              </section>

              <section id="controls">
                <span className="kicker">INPUT & PLATFORM FEATURES</span>
                <h2>Dear Passengers PlayStation DualSense, Trophies and Accessibility</h2>
                <p>
                  For Dear Passengers PlayStation, the cockpit and cabin look controller-friendly, but appearance does
                  not confirm a Dear Passengers
                  PlayStation control scheme. FLEXUS has not documented adaptive triggers, haptic feedback, motion
                  aiming, touchpad use, controller speaker output or light-bar behavior. Even ordinary button mapping
                  and full menu navigation remain unpublished for the PC edition.
                </p>
                <p>
                  Dear Passengers PlayStation trophy support is also unknown. A Dear Passengers PlayStation product
                  would normally expose a trophy
                  list only after its platform package and release process reach the appropriate stage. Steam
                  achievements, if added later, would not automatically define Sony trophies. No platinum, trophy
                  count or progress behavior should be invented.
                </p>
                <p>
                  Accessibility needs first-party details too. Text scaling, remapping, subtitles, color options,
                  motion reduction, hold-versus-toggle settings and assist modes have not been specified for Dear
                  Passengers PlayStation. The current trailer cannot establish these settings. A future store page,
                  demo or accessibility statement should be checked field by field.
                </p>
              </section>

              <section id="multiplayer">
                <span className="kicker">PLAY MODES</span>
                <h2>Dear Passengers PlayStation Co-op, Local Play and Crossplay</h2>
                <p>
                  Steam confirms single-player and online co-op for Windows, but the maximum crew size remains
                  unpublished. Those labels do not establish Dear Passengers PlayStation matchmaking, invites, voice
                  chat, private lobbies or account requirements. Sony network behavior needs a platform-specific
                  statement.
                </p>
                <p>
                  Dear Passengers PlayStation local co-op and split screen are not announced. The social premise and shared cabin
                  do not prove couch play. Dear Passengers PlayStation would need an explicit local-player count,
                  controller requirement and screen-layout description before the feature could be promised. Remote
                  play is a separate platform capability, not evidence of local multiplayer.
                </p>
                <p>
                  Dear Passengers PlayStation crossplay requires at least two confirmed ecosystems and a statement naming supported combinations.
                  Windows Steam is currently the only destination, so Dear Passengers PlayStation crossplay cannot be
                  verified. A future PS5 listing would still not automatically confirm shared lobbies, cross-save or
                  cross-progression. The <Link href="/dear-passengers-player-count/">multiplayer guide</Link> tracks
                  those network questions in detail.
                </p>
              </section>

              <section id="confirmation">
                <span className="kicker">CHANGE CONTROL</span>
                <h2>What Would Confirm Dear Passengers PlayStation?</h2>
                <p>
                  A Dear Passengers PlayStation update should pass a simple evidence chain. First, FLEXUS or an official
                  Dear Passengers channel names PS5 or PS4. Second, PlayStation exposes a matching product, news item or
                  publisher record. Third, the hardware, publisher, region, date and access state agree. A copied
                  trailer, retailer placeholder or search suggestion fails that test.
                </p>
                <ol className="numbered-list">
                  <li><span>01</span><p><strong>Check FLEXUS.</strong> Look for a direct Dear Passengers PlayStation statement naming the generation.</p></li>
                  <li><span>02</span><p><strong>Check PlayStation.</strong> Record the official product URL, publisher, regions and release state.</p></li>
                  <li><span>03</span><p><strong>Separate the dates.</strong> Do not inherit the Windows 2026 window without console wording.</p></li>
                  <li><span>04</span><p><strong>Audit each feature.</strong> Price, PS Plus, controls, local co-op and crossplay require their own evidence.</p></li>
                </ol>
                <p>
                  This Dear Passengers PlayStation page will change when those records change. Until then, “not
                  announced” is the useful answer: it tells PS5 and PS4 owners what they can verify without turning
                  demand into a roadmap. Dear Passengers PlayStation reporting stays specific, dated and reversible.
                </p>
              </section>

              <section id="playstation-faq">
                <span className="kicker">PLAYSTATION QUESTIONS</span>
                <h2>Dear Passengers PlayStation FAQ</h2>
                <p>
                  These Dear Passengers PlayStation answers reflect Steam, FLEXUS, the official product site,
                  PlayStation Store search and the dated community response checked on August 25, 2026. Missing fields
                  remain unknown until a direct source changes.
                </p>
                <FAQ items={faqs} />
              </section>

              <section>
                <span className="kicker">SOURCE LEDGER</span>
                <h2>Verify Dear Passengers PlayStation News at the Source</h2>
                <p>
                  The <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">official Steam listing ↗</a>
                  identifies Windows, FLEXUS, 2026, single-player, online co-op and the current PC requirements. The{' '}
                  <a href={OFFICIAL_SITE_URL} target="_blank" rel="noopener noreferrer">official product site ↗</a>
                  and <a href={FLEXUS_URL} target="_blank" rel="noopener noreferrer">FLEXUS studio site ↗</a> lead
                  players to Steam rather than a Dear Passengers PlayStation product.
                </p>
                <p>
                  Check the <a href={PLAYSTATION_SEARCH_URL} target="_blank" rel="noopener noreferrer">official
                  PlayStation Store search ↗</a> for a future holder record. The{' '}
                  <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer">Steam Community response ↗</a>
                  keeps PS5 support open without promising it, while the{' '}
                  <a href={INSIDER_URL} target="_blank" rel="noopener noreferrer">secondary console report ↗</a>
                  documents the same uncertainty. Neither source creates a Dear Passengers PlayStation release.
                </p>
                <p>
                  Continue to the <Link href="/dear-passengers-console/">console comparison</Link>, the{' '}
                  <Link href="/dear-passengers-steam/">official Steam identity guide</Link> or the{' '}
                  <Link href="/dear-passengers-release-date/">release-date tracker</Link>. Each is a real next step,
                  while Dear Passengers PlayStation remains the owner for Sony availability and store verification.
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
