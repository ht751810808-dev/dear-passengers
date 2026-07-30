import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SourceLedger from '@/components/SourceLedger';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const COMMUNITY_URL = 'https://steamcommunity.com/app/4534960/discussions/';
const PAGE_URL = 'https://dearpassengers.net/dear-passengers-confirmed-features/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Confirmed Features: Fact & Rumor Check' },
  description:
    'Check every confirmed Dear Passengers feature and open question, including co-op, solo, player count, voice chat, controllers, Steam Deck, consoles, languages, and demo.',
  alternates: { canonical: '/dear-passengers-confirmed-features/', languages: { en: '/dear-passengers-confirmed-features/', ar: '/ar/dear-passengers-confirmed-features/', de: '/de/dear-passengers-bestaetigte-features/', tr: '/tr/dear-passengers-ozellikleri/', 'pt-BR': '/pt-br/dear-passengers-recursos-confirmados/', es: '/es/dear-passengers-caracteristicas-confirmadas/', 'my-MM': '/my/dear-passengers-confirmed-features/', 'x-default': '/dear-passengers-confirmed-features/' } },
  openGraph: {
    title: 'Dear Passengers Confirmed Features and Rumor Check',
    description:
      'A source-led status board separating confirmed features, trailer observations, developer plans, and unannounced claims.',
    url: PAGE_URL,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dear Passengers confirmed features and rumor check',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers Confirmed Features: Fact & Rumor Check',
    description: 'What is confirmed, planned, observed, and still unannounced before release.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'What Dear Passengers features are officially confirmed?',
    answer:
      'Steam confirms Dear Passengers for a 2026 Windows release with single-player, online co-op, cockpit and cabin duties, physics-based passengers and cargo, dynamic weather, turbulence, air pockets, risky passengers, and high-paying cargo. Six interface languages and minimum PC requirements are also published.',
  },
  {
    question: 'How many players can play Dear Passengers?',
    answer:
      'A maximum Dear Passengers player count has not been announced. Steam confirms multiplayer, co-op, and online co-op, while the trailer shows multiple crew members. Neither source currently provides an official lobby limit.',
  },
  {
    question: 'Does Dear Passengers have proximity voice chat?',
    answer:
      'Dear Passengers proximity voice chat is not confirmed. Steam may display general chat or online-interaction notices, but those fields do not define an in-game spatial voice system, range, channels, moderation, or push-to-talk support.',
  },
  {
    question: 'Will Dear Passengers support controllers or Steam Deck?',
    answer:
      'Dear Passengers controller support has not been listed, and Dear Passengers does not yet have a published Valve Steam Deck compatibility result. Minimum Windows specifications cannot predict input support or Proton compatibility.',
  },
  {
    question: 'Is Dear Passengers coming to PS5, Xbox, or Nintendo Switch?',
    answer:
      'No Dear Passengers console edition is currently announced. Windows PC through Steam is the only confirmed platform. A controller-friendly appearance or broad co-op audience does not prove that a port is planned.',
  },
  {
    question: 'Is the Dear Passengers demo confirmed?',
    answer:
      'A demo plan is confirmed through a named founder interview: FLEXUS is preparing a Gamescom build and intends to publish a public demo later. The public demo does not yet have a date, download, distribution method, content list, or confirmed player limit.',
  },
  {
    question: 'How does this page decide whether a feature is confirmed?',
    answer:
      'Confirmed product facts require a current first-party Steam field or direct FLEXUS statement. Trailer observations describe only what is visible. Interview plans are attributed. Community questions and third-party claims remain unannounced until first-party evidence appears.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers Confirmed Features: Fact and Rumor Check',
  description:
    'A comprehensive status board for official Dear Passengers features, announced plans, trailer observations, and unconfirmed claims.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-07-18',
  dateModified: '2026-07-19',
  author: {
    '@type': 'Organization',
    name: 'DearPassengers.net Editorial Team',
    url: 'https://dearpassengers.net/about/',
  },
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
    { '@type': 'ListItem', position: 2, name: 'Confirmed Features', item: PAGE_URL },
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

export default function DearPassengersConfirmedFeaturesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <main id="main-content">
        <article>
          <header className="article-hero facts-hero">
            <Image
              src="/images/release-date.webp"
              alt="Dear Passengers confirmed features status board and aircraft"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers Game</Link><span>/</span><span>Confirmed Features</span>
              </nav>
              <div className="eyebrow"><span>●</span> FACT CHECK · FIRST-PARTY EVIDENCE ONLY</div>
              <h1>Dear Passengers Confirmed Features:<br /><em>Fact & Rumor Check</em></h1>
              <p>
                This <strong>Dear Passengers confirmed features</strong> board separates current Steam facts, direct
                developer plans, visible trailer observations, and claims that remain unannounced. Use it to check
                co-op, solo play, player count, voice chat, controller support, Steam Deck, consoles, languages, PC
                requirements, Demo access, and release information without turning repetition into evidence.
              </p>
              <div className="hero-actions">
                <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Open official Steam page ↗</a>
                <Link className="button button-ghost" href="/dear-passengers-trailer">Compare the trailer →</Link>
              </div>
              <div className="status-strip" aria-label="Dear Passengers confirmed features summary">
                <div><small>PLATFORM</small><strong>WINDOWS · STEAM</strong></div>
                <div><small>PLAY MODES</small><strong>SOLO · ONLINE CO-OP</strong></div>
                <div><small>PUBLIC DEMO</small><strong>PLANNED · NOT LIVE</strong></div>
                <div><small>PLAYER LIMIT</small><strong>NOT ANNOUNCED</strong></div>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>FACT-CHECK BOARD</p>
              <a href="#status-board">Complete status table</a>
              <a href="#evidence">Evidence levels</a>
              <a href="#gameplay">Gameplay systems</a>
              <a href="#multiplayer">Multiplayer</a>
              <a href="#platforms">Platforms & input</a>
              <a href="#release-access">Release & Demo</a>
              <a href="#languages-specs">Languages & specs</a>
              <a href="#fact-faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Verify on Steam ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote
                checked="July 19, 2026"
                note="Confirmed means a current first-party store field or direct FLEXUS statement. Planned means a named developer intention without public access. Observed means visible in official footage but not fully specified. Unannounced means no reliable first-party answer."
              />

              <section id="status-board">
                <span className="kicker">COMPLETE STATUS BOARD</span>
                <h2>Which Dear Passengers Features Are Confirmed?</h2>
                <p className="snippet-answer">
                  Official <strong>Dear Passengers features</strong> include a 2026 Windows PC release through Steam,
                  single-player, online co-op, piloting or working in the cabin, physics-based passengers and cargo,
                  dynamic weather, turbulence, air pockets, difficult passengers, and higher-paying risky cargo. The
                  exact date, price, maximum player count, consoles, controllers, Steam Deck, crossplay, local co-op,
                  VR, and proximity voice chat remain unannounced.
                </p>
                <div className="role-table-wrap">
                  <table className="role-comparison-table">
                    <caption>Dear Passengers confirmed features, plans, observations, and open questions</caption>
                    <thead>
                      <tr>
                        <th scope="col">Feature or question</th>
                        <th scope="col">Current answer</th>
                        <th scope="col">Status</th>
                        <th scope="col">Best evidence</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Dear Passengers release window</th>
                        <td>Planned for 2026; no exact date.</td>
                        <td><span className="role-status role-confirmed">Confirmed</span></td>
                        <td>Steam store page</td>
                      </tr>
                      <tr>
                        <th scope="row">Platform</th>
                        <td>Windows PC through Steam.</td>
                        <td><span className="role-status role-confirmed">Confirmed</span></td>
                        <td>Steam requirements and listing</td>
                      </tr>
                      <tr>
                        <th scope="row">Dear Passengers single-player</th>
                        <td>Listed, but solo crew management is unexplained.</td>
                        <td><span className="role-status role-confirmed">Confirmed mode</span></td>
                        <td>Steam feature field</td>
                      </tr>
                      <tr>
                        <th scope="row">Dear Passengers online co-op</th>
                        <td>Friends can operate the airline together.</td>
                        <td><span className="role-status role-confirmed">Confirmed</span></td>
                        <td>Steam feature list</td>
                      </tr>
                      <tr>
                        <th scope="row">Dear Passengers maximum players</th>
                        <td>No official lobby-size number.</td>
                        <td><span className="role-status role-unknown">Unannounced</span></td>
                        <td>Requires FLEXUS or Steam update</td>
                      </tr>
                      <tr>
                        <th scope="row">Pilot and cabin work</th>
                        <td>One member pilots while others work inside.</td>
                        <td><span className="role-status role-confirmed">Confirmed duties</span></td>
                        <td>Steam description and trailer</td>
                      </tr>
                      <tr>
                        <th scope="row">Passengers and cargo</th>
                        <td>Riskier selections can bring higher payouts and trouble.</td>
                        <td><span className="role-status role-confirmed">Confirmed system</span></td>
                        <td>Steam description</td>
                      </tr>
                      <tr>
                        <th scope="row">Weather and physics</th>
                        <td>Turbulence and air pockets move loose people and objects.</td>
                        <td><span className="role-status role-confirmed">Confirmed system</span></td>
                        <td>Steam key features</td>
                      </tr>
                      <tr>
                        <th scope="row">Dear Passengers public Demo</th>
                        <td>Planned after a Gamescom build; no date or download.</td>
                        <td><span className="role-status role-suggested">Developer plan</span></td>
                        <td>Named founder interview</td>
                      </tr>
                      <tr>
                        <th scope="row">Dear Passengers price / Early Access</th>
                        <td>No price, purchase option, or Early Access label.</td>
                        <td><span className="role-status role-unknown">Unannounced</span></td>
                        <td>Requires Steam update</td>
                      </tr>
                      <tr>
                        <th scope="row">Dear Passengers controllers / Steam Deck</th>
                        <td>No controller field or Valve compatibility result.</td>
                        <td><span className="role-status role-unknown">Unannounced</span></td>
                        <td>Requires input and compatibility fields</td>
                      </tr>
                      <tr>
                        <th scope="row">PS5 / Xbox / Switch</th>
                        <td>No official console store listing.</td>
                        <td><span className="role-status role-unknown">Unannounced</span></td>
                        <td>Requires platform announcement</td>
                      </tr>
                      <tr>
                        <th scope="row">Dear Passengers voice chat / crossplay</th>
                        <td>No specific system or supported network matrix.</td>
                        <td><span className="role-status role-unknown">Unannounced</span></td>
                        <td>Requires feature documentation</td>
                      </tr>
                      <tr>
                        <th scope="row">Interface languages</th>
                        <td>English, Arabic, Simplified Chinese, Turkish, Ukrainian, Japanese.</td>
                        <td><span className="role-status role-confirmed">Six confirmed</span></td>
                        <td>Steam language table</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </section>

              <section id="evidence">
                <span className="kicker">EVIDENCE LADDER</span>
                <h2>How Dear Passengers Claims Are Classified</h2>
                <ol className="steps article-steps">
                  <li><span>01</span><p><strong>Confirmed.</strong> A current Steam field or direct FLEXUS publication clearly states the feature, date window, language, or requirement.</p></li>
                  <li><span>02</span><p><strong>Planned.</strong> A named developer says the team intends to do something, but users cannot access or verify the finished implementation yet.</p></li>
                  <li><span>03</span><p><strong>Observed.</strong> An official trailer visibly shows a scene, object, or interaction without explaining its final rules, frequency, balance, or availability.</p></li>
                  <li><span>04</span><p><strong>Unannounced.</strong> The official sources do not answer the question. Community demand, genre expectations, and technical guesses stay in this category.</p></li>
                </ol>
                <p>
                  Community discussions identify Dear Passengers questions but cannot verify implementation. That is why
                  the <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer">Steam Community Hub ↗</a> is
                  treated as a question source rather than a product specification.
                </p>
              </section>

              <section id="gameplay">
                <span className="kicker">CONFIRMED GAMEPLAY CORE</span>
                <h2>Dear Passengers Gameplay Features</h2>
                <p>
                  The confirmed Dear Passengers gameplay core begins before takeoff. Players choose passengers and cargo,
                  and the official description links greater payouts to greater trouble. Some loads are hard to handle,
                  some travelers are difficult to please, and a flight can begin going wrong before the aircraft leaves
                  the ground. That establishes a risk-and-reward decision without revealing the final menus or economy.
                </p>
                <p>
                  Once airborne, Dear Passengers divides attention between the flight deck and interior. One player can
                  pilot, while cabin members serve food and drinks, protect cargo, keep passengers under control, and
                  respond before a small problem becomes a disaster. Steam names physics-based passengers, cargo, and
                  cabin chaos as key features, so moving objects and people are part of the official design.
                </p>
                <p>
                  Dynamic weather, turbulence, and air pockets are also confirmed. These events connect the cockpit and
                  cabin: an aircraft movement can help the pilot while disrupting service or containment behind them.
                  The official material does not yet specify navigation depth, aircraft systems, repair mechanics,
                  progression, route variety, mission length, scoring, failure conditions, customization, or a campaign.
                </p>
                <p>
                  Compare visible situations in the <Link href="/dear-passengers-trailer">Dear Passengers trailer
                  breakdown</Link>, then use the <Link href="/dear-passengers-roles">Dear Passengers roles guide</Link>
                  for confirmed duties and provisional team assignments.
                </p>
              </section>

              <section id="multiplayer">
                <span className="kicker">CO-OP STATUS</span>
                <h2>Dear Passengers Multiplayer, Solo and Voice Features</h2>
                <p>
                  Steam confirms single-player, multiplayer, co-op, and online co-op. The store description is written
                  around friends operating the airline together. That confirms the broad mode but not the maximum Dear
                  Passengers player count, minimum group size, public matchmaking, private lobbies, invitations,
                  join-in-progress, host migration, dedicated servers, region selection, or server browsing.
                </p>
                <p>
                  Voice chat is a common source of confusion. A general store notice about chat or online interaction
                  does not confirm proximity voice chat. It does not reveal distance falloff, radio channels, text chat,
                  push-to-talk, mute tools, moderation, or accessibility options. The safe answer is that Dear Passengers
                  communication tools are unannounced; players may eventually use external voice services if necessary.
                </p>
                <p>
                  Local co-op, split screen, Remote Play Together, and crossplay are unannounced. The{' '}
                  <Link href="/dear-passengers-player-count">Dear Passengers player count guide</Link> tracks those
                  multiplayer fields.
                </p>
              </section>

              <section id="platforms">
                <span className="kicker">PLATFORM AND INPUT CHECK</span>
                <h2>Dear Passengers Platforms, Controllers and Steam Deck</h2>
                <p>
                  Windows PC is the only confirmed Dear Passengers platform. Steam publishes Windows 10 64-bit minimum
                  requirements and does not list native macOS or Linux specifications. PlayStation 5, Xbox Series X|S,
                  Nintendo Switch, Switch 2, Epic Games Store, GOG, Microsoft Store, and subscription services have not
                  been announced.
                </p>
                <p>
                  The Steam page does not display a Dear Passengers controller-support classification. Full or partial
                  controller support, remapping, vibration, flight-stick support, and accessibility inputs are
                  unannounced.
                </p>
                <p>
                  The <Link href="/dear-passengers-platforms">Dear Passengers platforms guide</Link> keeps the full PC,
                  PS5, Xbox, Nintendo, Mac, Linux, mobile, VR, controller, and Steam Deck status in one place so these
                  searches do not compete across several partial answers.
                </p>
              </section>

              <section id="release-access">
                <span className="kicker">AVAILABILITY CHECK</span>
                <h2>Dear Passengers Release, Price and Demo Status</h2>
                <p>
                  Dear Passengers has a confirmed 2026 release window but no exact month or day. Steam allows
                  wishlisting and does not yet show a purchase price, preorder, launch discount, preload, edition list,
                  or Early Access label. An exact countdown or regional price published without an updated first-party
                  source is speculation.
                </p>
                <p>
                  The Demo requires a more precise label. FLEXUS founder Semen Kozyura said the studio was preparing a
                  Dear Passengers build for Gamescom and intended to publish a public Demo later. That is a direct,
                  attributed plan. It does not provide a public date, Steam distribution promise, duration, supported
                  modes, mission list, player count, save behavior, or hardware performance.
                </p>
                <p>
                  No public Dear Passengers Demo button or Steam Playtest request panel is currently available. Players
                  should avoid third-party installers, unofficial keys, surveys promising access, and pages that claim
                  the game is already free. The dedicated <Link href="/dear-passengers-demo">Dear Passengers Demo
                  guide</Link> records the Gamescom plan, safe-download checks, and the evidence required before its
                  status changes to live.
                </p>
                <p>
                  Track volatile dates, platforms, and price in the{' '}
                  <Link href="/dear-passengers-release-date">Dear Passengers release date guide</Link>.
                </p>
              </section>

              <section id="languages-specs">
                <span className="kicker">LOCALIZATION AND HARDWARE</span>
                <h2>Dear Passengers Languages and PC Requirements</h2>
                <p>
                  Steam currently lists six Dear Passengers interface languages: English, Arabic, Simplified Chinese,
                  Turkish, Ukrainian, and Japanese. The current table does not mark full audio or subtitles for those
                  languages. Traditional Chinese, Korean, French, German, Spanish, Portuguese, Polish, and other
                  languages should remain unannounced unless the official table changes.
                </p>
                <p>
                  The confirmed minimum requirements are Windows 10 64-bit, an Intel Core i5 at 2.5 GHz or equivalent,
                  8 GB RAM, an NVIDIA GeForce GTX 1060 or AMD Radeon RX 6600 XT, DirectX 12, and 4 GB of available
                  storage. Recommended specifications are not published. Steam does not attach a target resolution,
                  graphics preset, or frame rate to the minimum list.
                </p>
                <p>
                  The <Link href="/dear-passengers-system-requirements">Dear Passengers system requirements guide</Link>
                  explains each published field without inventing recommended hardware or performance targets.
                </p>
              </section>

              <section id="fact-faq">
                <span className="kicker">FACT-CHECK QUESTIONS</span>
                <h2>Dear Passengers Confirmed Features FAQ</h2>
                <FAQ items={faqs} />
              </section>

              <section className="related-guide related-links-panel">
                <span className="kicker">FOLLOW THE PRIMARY SOURCES</span>
                <h2>Verify Dear Passengers Before Sharing a Claim</h2>
                <p>
                  Open the official store page for current product fields, use the trailer page for visible reveal
                  scenes, and follow the news log for dated developer statements. Return to the homepage for the complete
                  Dear Passengers overview and internal route to every specialist guide.
                </p>
                <div className="related-actions">
                  <Link className="button button-ghost" href="/game-dear-passengers">Game identity →</Link>
                  <Link className="button" href="/">Complete game guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-gameplay">Gameplay guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-trailer">Trailer breakdown →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-news">Verified news →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-platforms">Platform status →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-developer-flexus">Developer profile →</Link>
                  <a className="button button-ghost" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Official Steam ↗</a>
                </div>
              </section>
            </div>
          </div>
        </article>

        <SourceLedger />
      </main>

      <Footer />
    </>
  );
}
