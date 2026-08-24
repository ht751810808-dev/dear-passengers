import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/dear-passengers-switch/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const OFFICIAL_SITE_URL = 'https://dearpassengers.game/';
const FLEXUS_URL = 'https://flexus.games/';
const NINTENDO_URL = 'https://www.nintendo.com/us/search/#q=Dear%20Passengers&p=1&cat=all&sort=df';
const COMMUNITY_URL = 'https://steamcommunity.com/app/4534960/discussions/0/582804662258809531/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Switch: Nintendo & Switch 2 Status' },
  description:
    'Is Dear Passengers on Switch? Check Nintendo Switch, Switch 2, eShop, release date, handheld play, co-op and controller evidence from official sources.',
  alternates: {
    canonical: '/dear-passengers-switch/',
    languages: {
      en: '/dear-passengers-switch/',
      de: '/de/dear-passengers-switch/',
      'x-default': '/dear-passengers-switch/',
    },
  },
  openGraph: {
    title: 'Dear Passengers Switch: Nintendo and Switch 2 Status',
    description:
      'A source-led Nintendo status board covering eShop identity, release timing, handheld play, controls and online features.',
    url: PAGE_URL,
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Dear Passengers Nintendo Switch and Switch 2 status guide',
    }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers Switch: Nintendo & Switch 2 Status',
    description: 'Windows PC is confirmed; Nintendo hardware and eShop access are not announced.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Is Dear Passengers on Nintendo Switch?',
    answer:
      'No Dear Passengers Switch edition is announced. The official Steam record currently lists Windows PC, FLEXUS and a 2026 window, while no matching Nintendo eShop product page is available.',
  },
  {
    question: 'Is Dear Passengers coming to Switch 2?',
    answer:
      'Dear Passengers Switch 2 support is not announced. Newer hardware does not inherit an unannounced Switch edition, and neither FLEXUS nor Nintendo has published a Switch 2 product record.',
  },
  {
    question: 'Does Dear Passengers have a Nintendo eShop page?',
    answer:
      'No verified Dear Passengers Switch eShop page was found in the official-source checks. A future listing should name the game, FLEXUS, supported hardware, region and release state consistently.',
  },
  {
    question: 'Will Dear Passengers Switch launch in 2026?',
    answer:
      'There is no Nintendo release window. The 2026 field belongs to the Windows Steam edition and cannot be copied to a Dear Passengers Switch port that has not been announced.',
  },
  {
    question: 'Would Dear Passengers support handheld play?',
    answer:
      'Handheld play is unknown because there is no Dear Passengers Switch build to test. Battery use, text size, performance, suspend behavior and offline support cannot be inferred from the PC trailer.',
  },
  {
    question: 'Would Dear Passengers need Nintendo Switch Online?',
    answer:
      'Dear Passengers Switch Online requirements are unknown. Steam confirms online co-op for PC, but that does not define the network, subscription or account rules of an unannounced Nintendo edition.',
  },
  {
    question: 'Will Dear Passengers Switch have local co-op?',
    answer:
      'Local co-op and split screen are unannounced on every platform. A Dear Passengers Switch page or trailer would need to state local-player support before couch play could be promised.',
  },
  {
    question: 'How can I verify a real Nintendo announcement?',
    answer:
      'Match a FLEXUS announcement with an official Dear Passengers Switch product or Nintendo news page. Verify the publisher, hardware generation, region and access state; do not rely on a retailer placeholder, ROM page or copied trailer.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers Switch: Nintendo and Switch 2 Status',
  description: 'A source-led check of Nintendo Switch, Switch 2, eShop and platform-feature evidence.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-08-24',
  dateModified: '2026-08-24',
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
    { '@type': 'ListItem', position: 4, name: 'Nintendo Switch Status', item: PAGE_URL },
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

export default function SwitchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <main id="main-content" className="switch-guide-page">
        <article>
          <header className="article-hero">
            <Image
              src="/images/release-date.webp"
              alt="Airliner approaching a destination board for the Nintendo platform status guide"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers Game</Link><span>/</span>
                <Link href="/dear-passengers-platforms/">Platforms</Link><span>/</span>
                <Link href="/dear-passengers-console/">Console</Link><span>/</span><span>Nintendo</span>
              </nav>
              <div className="eyebrow"><span>●</span> NINTENDO DESK · STORE STATUS</div>
              <h1>Dear Passengers Switch:<br /><em>Nintendo & Switch 2 Status</em></h1>
              <p>
                <strong>No Dear Passengers Switch edition is announced.</strong> FLEXUS currently identifies a Windows
                PC game on Steam with a broad 2026 release window. Dear Passengers Switch searches show that players
                want a Nintendo version, but there is no verified eShop page, platform date, handheld specification,
                local co-op promise or Switch 2 announcement.
              </p>
              <div className="hero-actions">
                <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Verify the PC record ↗</a>
                <Link className="button button-ghost" href="/dear-passengers-console/">Console parent →</Link>
              </div>
              <div className="article-meta">
                <span>Published August 24, 2026</span><span>Confirmed: Windows PC</span><span>Nintendo: not announced</span>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>SWITCH STATUS</p>
              <a href="#answer">Direct answer</a>
              <a href="#board">Nintendo board</a>
              <a href="#eshop">eShop identity</a>
              <a href="#switch2">Switch 2</a>
              <a href="#portable">Handheld fit</a>
              <a href="#coop">Co-op & controls</a>
              <a href="#confirmation">Confirmation test</a>
              <a href="#switch-faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Official Steam page ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote note="Confirmed means a matching FLEXUS or Nintendo record. Not announced does not mean cancelled, impossible or secretly scheduled." />

              <section id="answer">
                <span className="kicker">DIRECT ANSWER</span>
                <h2>Is Dear Passengers on Nintendo Switch?</h2>
                <p className="snippet-answer">
                  <strong>Dear Passengers Switch support is not confirmed.</strong> Steam app 4534960 names FLEXUS,
                  Windows PC and 2026, but the reviewed first-party Dear Passengers Switch material does not name Nintendo Switch or Switch 2.
                  There is no official Dear Passengers Switch store page, date, price, preorder or playable download.
                </p>
                <p>
                  The answer needs more care than a simple “no.” FLEXUS has not said that Dear Passengers Switch will
                  never happen. It has published one platform destination and left other hardware undecided in the
                  primary records. The accurate current label is “not announced.” That keeps a future port possible
                  without presenting audience interest as a product commitment. That is the current Dear Passengers Switch label.
                </p>
                <p>
                  Dear Passengers Switch search questions separate into three tasks: whether a Nintendo product exists, whether Switch 2 has
                  a different status, and whether the game&apos;s co-op design would work in handheld or local play. This
                  Dear Passengers Switch guide owns those Nintendo-specific checks. The broader{' '}
                  <Link href="/dear-passengers-console/">console status page</Link> compares PlayStation, Xbox and
                  Nintendo, while the <Link href="/dear-passengers-platforms/">platform hub</Link> covers PC, VR,
                  mobile, Mac, Linux and Steam Deck.
                </p>
              </section>

              <section id="board">
                <span className="kicker">PLATFORM BOARD</span>
                <h2>Dear Passengers Switch and Switch 2 Evidence</h2>
                <p>
                  Every Dear Passengers Switch product field is open because no holder-issued Dear Passengers Switch listing exists. The
                  Steam page is useful evidence for the real game identity, but a Windows requirement is not a
                  Nintendo compatibility test. The board records what can be checked now and what requires a separate
                  announcement.
                </p>
                <div className="platform-table" role="table" aria-label="Dear Passengers Nintendo platform status on August 24, 2026">
                  <div className="platform-head" role="row"><span role="columnheader">Product</span><span role="columnheader">Status</span><span role="columnheader">Evidence</span></div>
                  <div role="row"><strong role="cell">Windows PC / Steam</strong><span className="status-confirmed" role="cell">Planned for 2026</span><span role="cell">Official app 4534960</span></div>
                  <div role="row"><strong role="cell">Nintendo Switch</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No Dear Passengers Switch listing</span></div>
                  <div role="row"><strong role="cell">Nintendo Switch 2</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No hardware-specific record</span></div>
                  <div role="row"><strong role="cell">Nintendo eShop access</strong><span className="status-open" role="cell">Unavailable</span><span role="cell">No verified product page</span></div>
                </div>
                <div className="status-grid" aria-label="Confirmed and unknown Nintendo facts">
                  <div className="fact-callout">
                    <span>CONFIRMED PRODUCT</span><strong>Windows through Steam</strong>
                    <ul><li>FLEXUS developer and publisher</li><li>Broad 2026 release field</li><li>Single-player and online co-op labels</li><li>Published Windows minimums</li></ul>
                  </div>
                  <div className="fact-callout unknown-callout">
                    <span>NINTENDO UNKNOWNS</span><strong>No port record yet</strong>
                    <ul><li>Dear Passengers Switch hardware target</li><li>eShop regions, date and price</li><li>Performance, battery and file size</li><li>Local play, controls and online rules</li></ul>
                  </div>
                </div>
                <p>
                  A Dear Passengers Switch community discussion contains a moderator answer saying other console ports may be considered
                  after release. That is a useful sign that player requests are visible, but it is not a FLEXUS
                  announcement naming Nintendo hardware. Dear Passengers Switch therefore remains unannounced, and the
                  comment cannot provide a date, priority, technical target or guarantee.
                </p>
              </section>

              <section id="eshop">
                <span className="kicker">STORE IDENTITY</span>
                <h2>How to Check a Dear Passengers Switch eShop Page</h2>
                <p>
                  A real Dear Passengers Switch listing should be verifiable without relying on a search snippet. The
                  page should sit on an official Nintendo domain, name the supported console, identify a publisher
                  connected to FLEXUS and describe whether the item is announced, wish-listable, preorderable or
                  released. No page meeting those conditions appeared in the current check.
                </p>
                <p>
                  A Dear Passengers Switch title in a retailer database is weaker evidence. Retailers can create placeholders, combine
                  platforms or copy an estimated date before a holder publishes a product. A video title saying “Dear
                  Passengers Switch gameplay” is weaker still: footage from the PC trailer does not become Nintendo
                  capture when a channel adds a platform name. A valid Dear Passengers Switch record needs traceable
                  product identity.
                </p>
                <p>
                  The same rule protects players from fake downloads. There is no official Dear Passengers Switch ROM,
                  emulator package, activation key, beta code or eShop download. An archive offered through a file
                  host cannot establish that a port exists. Use the <Link href="/dear-passengers-download/">safe
                  download guide</Link> for installer checks, and return here for Nintendo store status.
                </p>
              </section>

              <section id="switch2">
                <span className="kicker">HARDWARE GENERATION</span>
                <h2>Does Switch 2 Change Dear Passengers Switch Status?</h2>
                <p>
                  No. Dear Passengers Switch 2 support needs its own announcement. A newer console may change the
                  technical options available to developers, but hardware capability does not create a contract,
                  certification submission or store page. The absence of a first-generation edition also means there
                  is no Dear Passengers Switch copy whose backward compatibility can be assumed.
                </p>
                <p>
                  Dear Passengers Switch searchers may use “Switch” as a family term, so this page checks both generations. It does not merge
                  their future product fields. FLEXUS could announce one version, both versions, an upgrade path or no
                  Nintendo edition. Until that happens, Dear Passengers Switch and Switch 2 share only the same “not
                  announced” outcome, not a promised release plan.
                </p>
                <p>
                  Technical speculation is especially unreliable for a physics-heavy game. The PC listing names a GTX
                  1060 or RX 6600 XT-class minimum GPU, DirectX 12, 8 GB RAM and 4 GB storage. Those numbers describe
                  the current Windows target. They do not predict resolution, frame rate, loading, visual reductions
                  or feasibility for a Dear Passengers Switch build.
                </p>
              </section>

              <section id="portable">
                <span className="kicker">HANDHELD QUESTIONS</span>
                <h2>Dear Passengers Switch Handheld Performance Is Unknown</h2>
                <p>
                  Portable play is one reason people want Dear Passengers Switch, but none of its practical fields can
                  be tested. There is no battery profile, portable-interface capture, text-size report, offline mode,
                  suspend-and-resume behavior or performance measurement. The official trailer shows the game concept,
                  not a Dear Passengers Switch device test.
                </p>
                <p>
                  The Dear Passengers Switch small-screen question is distinct from raw performance. Cabin warnings, passenger states,
                  cockpit information and interaction prompts would need to remain legible away from a television.
                  FLEXUS has not published a Nintendo interface, touch support or accessibility specification. Dear
                  Passengers Switch comfort should therefore stay unknown rather than being inferred from colorful
                  art or a first-person camera.
                </p>
                <p>
                  Steam Deck is not substitute evidence. Valve&apos;s handheld uses the PC ecosystem and has its own
                  compatibility process; Nintendo hardware uses a separate operating environment, store, certification
                  and network. Even a future Deck rating would not confirm Dear Passengers Switch development. The
                  platform hub keeps those two portable questions separate.
                </p>
              </section>

              <section id="coop">
                <span className="kicker">PLAY MODES</span>
                <h2>Dear Passengers Switch Co-op, Controls and Online</h2>
                <p>
                  Steam confirms single-player and online co-op for Windows. Those labels do not confirm local
                  multiplayer, split screen, shared Joy-Con play or a maximum lobby size. A Dear Passengers Switch
                  edition could use different play-mode fields, and no current source defines them. Couch co-op must
                  not be promised from the game&apos;s social premise.
                </p>
                <p>
                  Dear Passengers Switch controller support is also still open. A moderator in a separate Steam discussion expected gamepad
                  support but said launch availability could not be guaranteed. That comment concerns an input hope,
                  not a tested Nintendo build. Dear Passengers Switch controls would require end-to-end menus,
                  interaction, cockpit mapping, sensitivity, remapping and accessibility details from a real version.
                </p>
                <p>
                  Nintendo Switch Online and crossplay cannot be derived from Steam&apos;s online label. A holder listing
                  would need to state the subscription requirement, supported player count and local or online modes;
                  FLEXUS would need to identify any shared network. Until two ecosystems exist, Dear Passengers Switch
                  crossplay is not a testable product feature. The{' '}
                  <Link href="/dear-passengers-player-count/">multiplayer guide</Link> tracks the wider lobby questions.
                </p>
              </section>

              <section id="confirmation">
                <span className="kicker">CHANGE CONTROL</span>
                <h2>What Would Confirm Dear Passengers Switch?</h2>
                <p>
                  Dear Passengers Switch status should change only after an identity match. One Dear Passengers Switch direct announcement
                  may establish intent, but a live store record is needed for product fields such as regions, price,
                  download size and play modes. Dates should be copied only from the version that publishes them.
                </p>
                <ol className="numbered-list">
                  <li><span>01</span><p><strong>Check FLEXUS.</strong> Require wording that names Nintendo Switch or Switch 2, not “consoles” in general.</p></li>
                  <li><span>02</span><p><strong>Check Nintendo.</strong> Record the official Dear Passengers Switch URL, publisher, hardware and region.</p></li>
                  <li><span>03</span><p><strong>Check access.</strong> Separate announced, wishlist, preorder, demo and released states.</p></li>
                  <li><span>04</span><p><strong>Check each feature.</strong> Treat controls, handheld performance, local co-op and crossplay independently.</p></li>
                </ol>
                <p>
                  Dear Passengers Switch search demand is valuable because it identifies what the page must monitor. It does not lower the
                  evidence standard. Dear Passengers Switch will move from unknown only when the studio or platform
                  holder publishes a record that can be checked by players.
                </p>
              </section>

              <section id="switch-faq">
                <span className="kicker">NINTENDO QUESTIONS</span>
                <h2>Dear Passengers Switch FAQ</h2>
                <p>
                  These Dear Passengers Switch answers reflect Steam, FLEXUS, the official product site and Nintendo-domain checks completed
                  on August 24, 2026. Dear Passengers Switch can change status later, but no current source establishes
                  a Nintendo edition.
                </p>
                <FAQ items={faqs} />
              </section>

              <section id="sources" className="related-guide related-links-panel">
                <span className="kicker">SOURCE LEDGER</span>
                <h2>Verify Dear Passengers Switch News at the Source</h2>
                <p>
                  The <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">official Steam record ↗</a>{' '}
                  confirms FLEXUS, Windows and 2026. The <a href={OFFICIAL_SITE_URL} target="_blank" rel="noopener noreferrer">official
                  product site ↗</a> and <a href={FLEXUS_URL} target="_blank" rel="noopener noreferrer">FLEXUS site ↗</a>{' '}
                  currently lead players to Steam. The <a href={NINTENDO_URL} target="_blank" rel="noopener noreferrer">Nintendo
                  search ↗</a> provides the holder check. A <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer">Steam
                  community answer ↗</a> is attributed discussion evidence, not a Dear Passengers Switch announcement.
                </p>
                <p>
                  Next, compare the <Link href="/dear-passengers-console/">console families</Link>, review the{' '}
                  <Link href="/dear-passengers-platforms/">complete platform map</Link>, or verify the{' '}
                  <Link href="/dear-passengers-steam/">official PC listing</Link>. This route remains limited to
                  Nintendo hardware, eShop identity and platform-specific features.
                </p>
                <div className="related-actions">
                  <Link className="button" href="/dear-passengers-console/">Console parent →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-platforms/">All platforms →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-steam/">Steam status →</Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
