import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/dear-passengers-console/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const OFFICIAL_SITE_URL = 'https://dearpassengers.game/';
const FLEXUS_URL = 'https://flexus.games/';
const INSIDER_GAMING_URL = 'https://insider-gaming.com/dear-passengers-playstation-xbox-pc-switch-console-status/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Console: PS5, Xbox & Switch Status' },
  description:
    'Is Dear Passengers console support confirmed? Check PS5, Xbox, Nintendo Switch, Game Pass, crossplay and console release evidence from official sources.',
  alternates: {
    canonical: '/dear-passengers-console/',
    languages: { en: '/dear-passengers-console/', 'x-default': '/dear-passengers-console/' },
  },
  openGraph: {
    title: 'Dear Passengers Console: PS5, Xbox and Switch Status',
    description:
      'A source-led console status board for PlayStation, Xbox, Nintendo, store listings, release timing, controls and crossplay.',
    url: PAGE_URL,
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Dear Passengers console status guide for PlayStation, Xbox and Nintendo',
    }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers Console: PS5, Xbox & Switch Status',
    description: 'Windows PC is confirmed; the PlayStation, Xbox and Nintendo evidence remains open.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Is Dear Passengers console support confirmed?',
    answer:
      'No. Dear Passengers console support has not been announced for PlayStation, Xbox, Nintendo Switch or Switch 2. The official Steam record currently lists Windows PC and a 2026 release window.',
  },
  {
    question: 'Will Dear Passengers console versions launch in 2026?',
    answer:
      'There is no Dear Passengers console release window. The 2026 field belongs to the Windows Steam edition and should not be copied to an unannounced console port.',
  },
  {
    question: 'Is Dear Passengers coming to PS5?',
    answer:
      'A Dear Passengers console version for PS5 has not been announced. There is no verified PlayStation Store page, platform trailer or FLEXUS release statement for PlayStation 5.',
  },
  {
    question: 'Is Dear Passengers coming to Xbox or Game Pass?',
    answer:
      'A Dear Passengers console version for Xbox is unannounced. Xbox Series X|S, Xbox One, Microsoft Store and Game Pass support have no verified product record.',
  },
  {
    question: 'Is Dear Passengers coming to Nintendo Switch or Switch 2?',
    answer:
      'A Dear Passengers console edition for Nintendo Switch or Switch 2 has not been announced. The PC requirements and trailer do not prove that a port is planned or ready.',
  },
  {
    question: 'Will Dear Passengers console editions have local co-op?',
    answer:
      'Dear Passengers console local co-op and split screen are unknown. Steam confirms single-player and online co-op, but those fields do not establish couch play for a hypothetical port.',
  },
  {
    question: 'Will Dear Passengers console players have crossplay?',
    answer:
      'Crossplay is unannounced. Dear Passengers console crossplay cannot be tested or promised until a second platform is confirmed and FLEXUS publishes the supported combinations.',
  },
  {
    question: 'How can I verify a real Dear Passengers console announcement?',
    answer:
      'Look for a matching FLEXUS statement, an official PlayStation, Xbox or Nintendo store page, and consistent publisher and release fields. Search interest, retailer placeholders and videos are not sufficient.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers Console: PS5, Xbox and Nintendo Switch Status',
  description: 'A source-led check of announced and unannounced Dear Passengers console platforms and features.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-08-23',
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
    { '@type': 'ListItem', position: 3, name: 'Console Status', item: PAGE_URL },
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

export default function ConsolePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <main id="main-content">
        <article>
          <header className="article-hero">
            <Image
              src="/images/release-date.webp"
              alt="Airliner approaching a destination board for the Dear Passengers console status guide"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers Game</Link><span>/</span>
                <Link href="/dear-passengers-platforms/">Platforms</Link><span>/</span><span>Console</span>
              </nav>
              <div className="eyebrow"><span>●</span> CONSOLE DESK · FIRST-PARTY STATUS</div>
              <h1>Dear Passengers Console:<br /><em>PS5, Xbox & Switch Status</em></h1>
              <p>
                <strong>No Dear Passengers console edition is announced.</strong> FLEXUS currently lists the game for
                Windows PC through Steam with a broad 2026 window. Dear Passengers console searches for PS5, Xbox,
                Nintendo Switch and Switch 2 show real player demand, but demand does not create a port, store page,
                release date, price, controller plan or crossplay promise.
              </p>
              <div className="hero-actions">
                <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Verify the PC listing ↗</a>
                <Link className="button button-ghost" href="/dear-passengers-platforms/">All platforms →</Link>
              </div>
              <div className="article-meta">
                <span>Published August 23, 2026</span><span>Confirmed: Windows PC</span><span>Console: not announced</span>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>CONSOLE STATUS</p>
              <a href="#answer">Direct answer</a>
              <a href="#board">Platform board</a>
              <a href="#playstation">PlayStation</a>
              <a href="#xbox">Xbox</a>
              <a href="#nintendo">Nintendo</a>
              <a href="#features">Controls & crossplay</a>
              <a href="#confirmation">Confirmation test</a>
              <a href="#console-faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Official Steam page ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote note="Confirmed means a matching FLEXUS statement or platform-holder record. Missing evidence is reported as not announced, never as cancelled or impossible." />

              <section id="answer">
                <span className="kicker">DIRECT ANSWER</span>
                <h2>Is Dear Passengers Coming to Console?</h2>
                <p className="snippet-answer">
                  <strong>Dear Passengers console support is not confirmed.</strong> The current first-party record
                  identifies Windows PC, Steam, FLEXUS and a 2026 release window. It does not identify PlayStation 5,
                  Xbox Series X|S, Nintendo Switch or Switch 2. A Dear Passengers console release remains possible,
                  but there is no official platform, date or access promise to report today.
                </p>
                <p>
                  That distinction matters because several different questions sit behind Dear Passengers console
                  searches. Some players want to know whether they can already wishlist the game on a console store.
                  Others ask whether a port will arrive with the PC launch, whether Game Pass is involved, or whether
                  the co-op design means couch play. Dear Passengers console evidence answers none of those questions
                  yet. The only safe Dear Passengers console action is to separate the confirmed PC product from
                  requested console editions.
                </p>
                <p>
                  Google currently groups this intent around questions such as what platforms the game is on, whether
                  it is coming to Xbox, and where it can be played. Those are availability questions, not gameplay
                  questions. This Dear Passengers console guide therefore owns the three home-console ecosystems and
                  the evidence needed to move them from “not announced” to “confirmed.” The wider{' '}
                  <Link href="/dear-passengers-platforms/">Dear Passengers platform board</Link> remains the owner for
                  PC, Mac, Linux, VR, mobile, controller and Steam Deck status.
                </p>
              </section>

              <section id="board">
                <span className="kicker">EVIDENCE BOARD</span>
                <h2>Dear Passengers Console Platform Status</h2>
                <p>
                  Every Dear Passengers console row is open because the official Steam listing names only Windows and
                  the FLEXUS sites point players back to Steam. No matching product page surfaced in checks limited to
                  the official PlayStation, Xbox and Nintendo domains. Absence from those checks is not proof that a
                  port will never exist; players simply cannot verify a Dear Passengers console product now.
                </p>

                <div className="platform-table" role="table" aria-label="Dear Passengers console status on August 23, 2026">
                  <div className="platform-head" role="row"><span role="columnheader">Console family</span><span role="columnheader">Status</span><span role="columnheader">Missing confirmation</span></div>
                  <div role="row"><strong role="cell">PlayStation 5 / PS4</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No store page or FLEXUS statement</span></div>
                  <div role="row"><strong role="cell">Xbox Series / Xbox One</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No Xbox listing or release statement</span></div>
                  <div role="row"><strong role="cell">Nintendo Switch / Switch 2</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No Nintendo listing or platform trailer</span></div>
                  <div role="row"><strong role="cell">Windows PC / Steam</strong><span className="status-confirmed" role="cell">Planned for 2026</span><span role="cell">Official Steam app 4534960</span></div>
                </div>

                <div className="status-grid" aria-label="Dear Passengers console confirmed and unknown facts">
                  <div className="fact-callout">
                    <span>CONFIRMED</span><strong>One PC destination</strong>
                    <ul><li>Windows PC requirements</li><li>Steam wishlist access</li><li>Single-player and online co-op</li><li>Broad 2026 window</li></ul>
                  </div>
                  <div className="fact-callout unknown-callout">
                    <span>UNKNOWN</span><strong>Every console field</strong>
                    <ul><li>Dear Passengers console families and timing</li><li>Price, editions and subscriptions</li><li>Controller, split-screen and accessibility</li><li>Crossplay and cross-progression</li></ul>
                  </div>
                </div>

                <p>
                  Dear Passengers console reporting should also keep “not announced” separate from “PC exclusive.”
                  FLEXUS has published one destination, but it has not published a permanent exclusivity statement.
                  Calling the game a console cancellation would be as unsupported as promising a port. Dear Passengers
                  console status can change only when a direct source changes, and every Dear Passengers console claim
                  must keep that evidence boundary visible.
                </p>
              </section>

              <section id="playstation">
                <span className="kicker">PLAYSTATION CHECK</span>
                <h2>Dear Passengers Console Status on PS5</h2>
                <p>
                  There is no announced Dear Passengers console version for PlayStation 5 or PlayStation 4. A search
                  for the game can surface guides, videos and AI summaries, but those results do not provide a
                  PlayStation Store product ID, publisher field, age rating or download state. Dear Passengers console
                  interest on PS5 is measurable search demand rather than a Sony or FLEXUS commitment.
                </p>
                <p>
                  The game&apos;s first-person cockpit and cooperative cabin may look suitable for a DualSense controller
                  and living-room play. That is an inference about audience fit, not evidence of button mapping,
                  adaptive triggers, vibration, certification, performance targets or local multiplayer. A Dear
                  Passengers console page must not turn a visual impression into a feature list. The Steam page does
                  not currently publish controller support for the Windows edition either, so Dear Passengers console
                  controls remain a separate unknown.
                </p>
                <p>
                  A real PlayStation confirmation would normally identify the exact hardware generation, publisher,
                  regions, release state and store URL. A Dear Passengers console date cannot automatically inherit the
                  PC 2026 window. Each Dear Passengers console platform needs a dated record. See the{' '}
                  <Link href="/dear-passengers-playstation/">Dear Passengers PlayStation guide</Link> for PS5 and PS4
                  evidence.
                </p>
              </section>

              <section id="xbox">
                <span className="kicker">XBOX CHECK</span>
                <h2>Dear Passengers Console Status on Xbox</h2>
                <p>
                  Dear Passengers console support is not announced for Xbox Series X|S or Xbox One. There is no
                  official Xbox product page, console release statement or named Microsoft distribution channel in the
                  reviewed first-party materials. Steam on Windows is a separate storefront and does not mean the game
                  will appear in the Xbox app, Microsoft Store or Xbox console catalog.
                </p>
                <p>
                  Game Pass is also unknown. A Dear Passengers console search that mentions Xbox frequently expands
                  into subscription, day-one access and crossplay questions, yet none of those fields can be derived
                  from online co-op. Steam&apos;s category confirms that PC players can cooperate online; it does not name
                  Xbox accounts, shared lobbies, cloud streaming or a Dear Passengers console subscription agreement.
                </p>
                <p>
                  A secondary media report reproduced a statement attributed to the official Discord FAQ saying the
                  studio was still deciding platforms and demo access. That report supports an open decision rather
                  than a confirmed Dear Passengers console roadmap, but it cannot replace a platform-holder page. Until
                  FLEXUS publishes an Xbox announcement, the status remains “not announced.” Dear Passengers console
                  reporting must preserve that wording.
                </p>
              </section>

              <section id="nintendo">
                <span className="kicker">NINTENDO CHECK</span>
                <h2>Dear Passengers Console Status on Switch</h2>
                <p>
                  No Dear Passengers console edition is announced for Nintendo Switch or Switch 2. The official PC
                  minimum requirements list Windows 10, an Intel Core i5-class processor, 8 GB RAM, a GTX 1060 or RX
                  6600 XT-class GPU, DirectX 12 and 4 GB storage. Those specifications describe one PC target. They do
                  not prove that a Dear Passengers console build exists, fails, or can reach any particular frame rate.
                </p>
                <p>
                  Trailer popularity also cannot confirm portability. A short clip may show physics, passengers and
                  cabin chaos, while a Dear Passengers console port would still require platform-specific development,
                  optimization, certification, controls and online-service decisions. None appears in current FLEXUS
                  communication. Another indie game&apos;s history would not answer Dear Passengers console status.
                </p>
                <p>
                  Nintendo demand deserves a separate route later because Switch and Switch 2 users ask about
                  performance, handheld play, local co-op, eShop regions and online subscriptions. For now, this Dear
                  Passengers console parent keeps the answer short: there is no first-party Nintendo announcement. The{' '}
                  <Link href="/dear-passengers-switch/">Dear Passengers Switch evidence guide</Link> now owns eShop
                  identity, Switch 2, handheld performance and Nintendo-specific co-op questions after passing its
                  independent research and content-quality gate.
                </p>
              </section>

              <section id="features">
                <span className="kicker">FEATURE BOUNDARIES</span>
                <h2>Dear Passengers Console Controls, Co-op and Crossplay</h2>
                <p>
                  Dear Passengers console availability and console features are separate claims. Steam confirms
                  single-player and online co-op, but does not publish a maximum lobby size, local split screen, Remote
                  Play Together, crossplay, cross-progression or voice-chat specification. Those unknowns remain open
                  even for PC, so they cannot be promised for an unannounced Dear Passengers console port.
                </p>
                <p>
                  Controller support follows the same rule. Visible cockpit controls do not reveal whether the final
                  interface supports a gamepad from start to finish, remapping, aim sensitivity, vibration, flight
                  sticks, accessibility presets or text entry. Dear Passengers console players need platform-specific
                  confirmation, not an assumption that every first-person co-op game ships with the same input model.
                  A Dear Passengers console controller profile does not exist in the reviewed records.
                </p>
                <p>
                  Crossplay would require at least two confirmed ecosystems and a statement naming the supported
                  combinations. A future Dear Passengers console announcement could still launch without crossplay,
                  add it later, or keep networks separate. Likewise, online co-op does not imply couch co-op. The{' '}
                  <Link href="/dear-passengers-player-count/">player-count and multiplayer guide</Link> owns lobby,
                  solo, local-play and voice questions; this Dear Passengers console page owns whether a console
                  product exists.
                </p>
              </section>

              <section id="confirmation">
                <span className="kicker">CHANGE CONTROL</span>
                <h2>What Would Confirm Dear Passengers Console Support?</h2>
                <p>
                  A Dear Passengers console update should pass three checks. First, FLEXUS or an official Dear
                  Passengers channel should name the platform. Second, PlayStation, Xbox or Nintendo should expose a
                  matching product record, announcement or verified publisher page. Third, the platform, publisher,
                  access state and date should agree across those sources. A retailer placeholder alone fails this
                  test.
                </p>
                <ol className="numbered-list">
                  <li><span>01</span><p><strong>Check FLEXUS.</strong> Look for a direct Dear Passengers console statement that names the hardware.</p></li>
                  <li><span>02</span><p><strong>Check the holder.</strong> Record the official store URL, product identity, publisher and release state.</p></li>
                  <li><span>03</span><p><strong>Separate the dates.</strong> Do not copy the Windows 2026 window into a Dear Passengers console listing.</p></li>
                  <li><span>04</span><p><strong>Audit each feature.</strong> Treat price, controller support, local co-op and crossplay as independent fields.</p></li>
                </ol>
                <p>
                  Search engines can reveal demand and errors before official records change. One current result even
                  confuses the game with a different title, while other competitors estimate Steam Deck performance,
                  player counts and console outcomes without source support. This Dear Passengers console guide uses
                  those pages to identify questions, never to import invented Dear Passengers console specifications.
                </p>
              </section>

              <section id="console-faq">
                <span className="kicker">CONSOLE QUESTIONS</span>
                <h2>Dear Passengers Console FAQ</h2>
                <p>
                  These Dear Passengers console answers reflect official Steam, FLEXUS and product-site records checked
                  on August 23, 2026. The status can change, but only a direct studio or platform-holder source will
                  move a console family from not announced to confirmed.
                </p>
                <FAQ items={faqs} />
              </section>

              <section id="sources" className="related-guide related-links-panel">
                <span className="kicker">SOURCE LEDGER</span>
                <h2>Verify Dear Passengers Console News at the Source</h2>
                <p>
                  The <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">official Steam record ↗</a>{' '}
                  identifies Windows, FLEXUS, 2026, single-player, online co-op and the current PC requirements. The{' '}
                  <a href={OFFICIAL_SITE_URL} target="_blank" rel="noopener noreferrer">official product site ↗</a>{' '}
                  and <a href={FLEXUS_URL} target="_blank" rel="noopener noreferrer">FLEXUS studio site ↗</a> both
                  lead back to Steam rather than a Dear Passengers console store. The{' '}
                  <a href={INSIDER_GAMING_URL} target="_blank" rel="noopener noreferrer">Insider Gaming report ↗</a>{' '}
                  is secondary evidence for the reported Discord wording, not proof of a platform commitment.
                </p>
                <p>
                  Continue to the <Link href="/dear-passengers-platforms/">complete platform map</Link>, the{' '}
                  <Link href="/dear-passengers-steam/">official Steam identity guide</Link>, or the{' '}
                  <Link href="/dear-passengers-release-date/">release-date tracker</Link>. Each route owns a different
                  next step, while Dear Passengers console reporting stays focused on PlayStation, Xbox and Nintendo.
                </p>
                <div className="related-actions">
                  <Link className="button" href="/dear-passengers-platforms/">All platforms →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-steam/">Steam status →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-release-date/">Release timing →</Link>
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
