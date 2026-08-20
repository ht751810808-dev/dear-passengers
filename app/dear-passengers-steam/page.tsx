import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { gameFactRegistry, getGameFact, officialUrls } from '@/lib/game-facts';

const PAGE_URL = 'https://dearpassengers.net/dear-passengers-steam/';
const STEAM_URL = officialUrls.steamStore;
const STEAM_NEWS_URL = officialUrls.steamNews;
const STEAM_COMMUNITY_URL = 'https://steamcommunity.com/app/4534960/';
const STEAM_DISCUSSIONS_URL = 'https://steamcommunity.com/app/4534960/discussions/';

const releaseWindow = getGameFact('release.window');
const fullGameAvailability = getGameFact('release.fullGameAvailability');
const windowsPlatform = getGameFact('platform.windows');
const singlePlayer = getGameFact('playMode.singlePlayer');
const onlineCoop = getGameFact('playMode.onlineCoop');
const interfaceLanguages = getGameFact('languages.interface');
const { game } = gameFactRegistry;

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Steam: Official App ID & Store Status' },
  description:
    'Find the official Dear Passengers Steam page, App ID 4534960, wishlist status, 2026 release window, demo, price, languages, and store checks.',
  alternates: {
    canonical: '/dear-passengers-steam/',
    languages: { en: '/dear-passengers-steam/', 'x-default': '/dear-passengers-steam/' },
  },
  openGraph: {
    title: 'Dear Passengers Steam: Official App, Wishlist and Store Status',
    description:
      'Verify Steam App ID 4534960, see what the official store confirms, and check what is not available yet.',
    url: PAGE_URL,
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Dear Passengers Steam store verification briefing',
    }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers Steam: Official App ID and Store Status',
    description: 'Verify the official store page, wishlist action, release state, languages, demo, and price status.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Is Dear Passengers on Steam?',
    answer:
      'Yes. The official Dear Passengers Steam page is app 4534960 and lists FLEXUS as both developer and publisher. The game can be added to a Steam wishlist, but it has not been released.',
  },
  {
    question: 'What is the Dear Passengers Steam App ID?',
    answer:
      'The Dear Passengers Steam App ID is 4534960. You can confirm it in the store URL and then verify that the product name, developer, publisher, Windows platform, and 2026 release window match.',
  },
  {
    question: 'Can I buy or install Dear Passengers on Steam?',
    answer:
      'Not yet. Dear Passengers Steam does not yet offer a purchase, install, preorder, or preload action; the official page currently provides wishlist access.',
  },
  {
    question: 'How do I wishlist Dear Passengers on Steam?',
    answer:
      'Open the official Dear Passengers Steam app 4534960 page, sign in to Steam, and use the wishlist control. Wishlisting is reversible and does not buy, reserve, or download the game.',
  },
  {
    question: 'Does Dear Passengers have a Steam demo or Playtest?',
    answer:
      'No public Dear Passengers Steam demo or Playtest control is visible at this check. FLEXUS has discussed a later public demo plan, but no date or confirmed distribution method has been announced.',
  },
  {
    question: 'What is the Dear Passengers Steam release date?',
    answer:
      'The Dear Passengers Steam release window is 2026. FLEXUS has not announced a month, day, preload date, preorder date, or Early Access schedule.',
  },
  {
    question: 'How much is Dear Passengers on Steam?',
    answer:
      'The Dear Passengers Steam price is not published. No official numeric price, edition, launch discount, or preorder exists, and a user tag does not confirm the business model.',
  },
  {
    question: 'Is Dear Passengers Steam Deck or controller compatible?',
    answer:
      'The Dear Passengers Steam listing does not publish a Valve Steam Deck compatibility result or controller-support field. Windows support alone does not confirm either feature.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers Steam: Official App ID, Wishlist and Store Status',
  description: 'A source-backed verification guide to the official Dear Passengers Steam record and current access state.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-08-20',
  dateModified: '2026-08-20',
  inLanguage: 'en',
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
  citation: [STEAM_URL, STEAM_NEWS_URL],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers', item: 'https://dearpassengers.net/' },
    { '@type': 'ListItem', position: 2, name: 'Dear Passengers Game', item: 'https://dearpassengers.net/game-dear-passengers/' },
    { '@type': 'ListItem', position: 3, name: 'Dear Passengers Steam', item: PAGE_URL },
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

export default function DearPassengersSteamPage() {
  const languages = Array.isArray(interfaceLanguages.value) ? interfaceLanguages.value.join(', ') : interfaceLanguages.shortValue;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <main id="main-content">
        <article>
          <header className="article-hero steam-article-hero">
            <Image
              src="/images/dear-passengers-unity-flight.webp"
              alt="Official Dear Passengers Unity flight image used for the Steam store status briefing"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content steam-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers</Link><span>/</span>
                <Link href="/game-dear-passengers">Game</Link><span>/</span><span>Steam</span>
              </nav>

              <div className="steam-hero-grid">
                <div className="steam-hero-copy">
                  <div className="eyebrow"><span>●</span> STORE VERIFICATION DESK · APP 4534960</div>
                  <h1>Dear Passengers Steam:<br /><em>Official App, Access & Store Status</em></h1>
                  <p>
                    The official Dear Passengers Steam listing is app <strong>{game.steamAppId}</strong>, published by
                    FLEXUS for Windows PC. The game can be added to a Steam wishlist now, but there is no purchase, install, public
                    demo, Playtest, price, or exact launch date. This independent desk explains every current store
                    action without turning user tags or third-party downloads into official facts.
                  </p>
                  <div className="hero-actions">
                    <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">
                      Open the official Steam page ↗
                    </a>
                  </div>
                  <p className="storefront-disclosure">Direct official-store link · no affiliate tracking or commission</p>
                  <div className="article-meta">
                    <span>Published August 20, 2026</span><span>Primary source: Steam</span><span>Current action: Wishlist</span>
                  </div>
                </div>

                <dl className="steam-identity-board" aria-label="Official Dear Passengers Steam identity">
                  <div><dt>Dear Passengers Steam App ID</dt><dd>{game.steamAppId}</dd><small>Official product record</small></div>
                  <div><dt>Developer / Publisher</dt><dd>{game.developer}</dd><small>Both official fields match</small></div>
                  <div><dt>Dear Passengers Steam platform</dt><dd>Windows PC</dd><small>Only confirmed platform</small></div>
                  <div><dt>Dear Passengers Steam access</dt><dd>Wishlist</dd><small>Not released</small></div>
                </dl>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc" aria-label="Steam verification desk">
              <p>STORE CHECK</p>
              <a href="#answer">Direct answer</a>
              <a href="#identity">Official App ID</a>
              <a href="#actions">Wishlist & access</a>
              <a href="#fields">Store fields</a>
              <a href="#labels">Official vs user labels</a>
              <a href="#verify">Safety check</a>
              <a href="#updates">Update signals</a>
              <a href="#steam-faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Verify on Steam ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote
                checked="August 20, 2026"
                note="This Dear Passengers Steam page owns the official store identity and access task. Release timing, platforms, downloads, demos, PC requirements, and gameplay remain on their specialist pages so the answers can be updated without duplication."
              />

              <section id="answer">
                <span className="kicker">DIRECT ANSWER</span>
                <h2>Is Dear Passengers on Steam?</h2>
                <p className="snippet-answer">
                  <strong>Yes. The official Dear Passengers Steam page is app 4534960.</strong> It names FLEXUS as
                  developer and publisher, confirms Windows PC, lists a 2026 release window, and supports wishlisting.
                  The full game is not released, so there is no official purchase, install, preload, public demo,
                  Playtest, price, or user-review state yet.
                </p>
                <p>
                  A live Dear Passengers Steam page is not a released game. Steam can show wishlists, news, hardware,
                  languages, and features before customers can own the product. That is why Dear Passengers Steam can
                  be official while a nearby “download now” claim is false.
                </p>

                <div className="status-grid">
                  <div className="fact-callout">
                    <span>CONFIRMED ON THE STORE</span>
                    <strong>Official record</strong>
                    <ul>
                      <li>Dear Passengers Steam App ID: {game.steamAppId}</li>
                      <li>Dear Passengers Steam platform: {windowsPlatform.value as string}</li>
                      <li>Release window: {releaseWindow.value as string}</li>
                      <li>Store modes: {singlePlayer.label} and {onlineCoop.label}</li>
                      <li>Dear Passengers Steam languages: {interfaceLanguages.shortValue.toLowerCase()}</li>
                    </ul>
                  </div>
                  <div className="fact-callout unknown-callout">
                    <span>NOT PUBLISHED</span>
                    <strong>Open store fields</strong>
                    <ul>
                      <li>Dear Passengers Steam price or edition</li>
                      <li>Exact launch day, preload, or Early Access</li>
                      <li>Dear Passengers Steam demo or Playtest</li>
                      <li>Dear Passengers Steam controller or Deck status</li>
                      <li>Maximum online crew size</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="identity">
                <span className="kicker">OFFICIAL PRODUCT RECORD</span>
                <h2>How to Verify the Dear Passengers Steam Page</h2>
                <p>
                  Start with the URL. The correct Dear Passengers Steam App ID is <code>4534960</code>, so the official
                  address contains <code>/app/4534960/</code>. Next, check the identity block: FLEXUS should appear as
                  both developer and publisher. Then match the current fields—2026 and Windows PC. These identifiers
                  are more dependable than a copied logo, trailer frame, or look-alike domain.
                </p>
                <p>
                  The Dear Passengers Steam record links to its Community Hub, news, and discussions. A fan guide
                  cannot create an official edition, key, beta, or launcher. Steam currently says the game is not yet
                  available; that live notice outranks a generic widget, database placeholder, user tag, or cached result.
                </p>

                <dl className="steam-store-grid" aria-label="Dear Passengers official Steam record">
                  <div><dt>Dear Passengers Steam URL</dt><dd>store.steampowered.com/app/4534960</dd><small>Valve-controlled domain and matching App ID</small></div>
                  <div><dt>Developer / publisher</dt><dd>FLEXUS</dd><small>Both store fields match</small></div>
                  <div><dt>Dear Passengers Steam release state</dt><dd>{fullGameAvailability.shortValue}</dd><small>{fullGameAvailability.summary}</small></div>
                  <div><dt>Dear Passengers Steam platform</dt><dd>Windows PC</dd><small>No Mac, Linux, or console listing</small></div>
                </dl>
              </section>

              <section id="actions">
                <span className="kicker">AVAILABLE NOW</span>
                <h2>What Can You Do on the Dear Passengers Steam Page?</h2>
                <p>
                  The main available action is to add the game to a Steam wishlist. You can also follow the product,
                  read official announcements, or enter the Community Hub. The Dear Passengers Steam wishlist can
                  surface store notifications, but it does not charge money, reserve an edition, guarantee a key, or
                  install files. A Dear Passengers Steam follow can notify signed-in users about later store updates.
                </p>
                <p>
                  FLEXUS reported a Dear Passengers Steam wishlist milestone of two million on July 31 and described
                  the game as Steam Top 6 at that dated moment. This is a developer report, not a public live counter;
                  wishlists are not sales, downloads, owners, active players, or reviews.
                </p>
                <p>
                  The Dear Passengers Steam status has no purchase, install, preorder, Early Access, Playtest, or
                  Download Demo control. Installation becomes official only when the store exposes that action. Our{' '}
                  <Link href="/dear-passengers-demo">demo tracker</Link> separates a stated plan from live access, while the{' '}
                  <Link href="/dear-passengers-download">download safety guide</Link> explains why an unofficial file
                  cannot fill that gap.
                </p>

                <ol className="steps article-steps">
                  <li><span>01</span><p><strong>Open Steam app 4534960.</strong> Use the official link on this page or type the App ID into Steam.</p></li>
                  <li><span>02</span><p><strong>Match the developer and publisher.</strong> Confirm FLEXUS appears in both fields.</p></li>
                  <li><span>03</span><p><strong>Use the Dear Passengers Steam wishlist.</strong> Sign in only on Steam, then add or remove the game from your list.</p></li>
                  <li><span>04</span><p><strong>Follow official store changes.</strong> Check the Community Hub and product page for a real demo, price, or release control.</p></li>
                </ol>
              </section>

              <section id="fields">
                <span className="kicker">STORE FIELD AUDIT</span>
                <h2>What the Dear Passengers Steam Listing Confirms</h2>
                <p>
                  The Dear Passengers Steam listing confirms single-player and online co-op. Family Sharing is an
                  account-library feature, not a player limit. Steam does not publish local co-op, split-screen,
                  controller support, crossplay, or a crew cap. The <Link href="/dear-passengers-player-count">player-count
                  briefing</Link> tracks those boundaries.
                </p>
                <p>
                  The Dear Passengers Steam language table lists six interface languages: {languages}. Full Audio and
                  Subtitles are not separately checked, so this is not evidence of dubbed dialogue or complete
                  captions. The live language table remains the source if it changes before launch.
                </p>
                <p>
                  Dear Passengers Steam minimum specifications are Windows 10 64-bit, an Intel Core i5 at 2.5 GHz or
                  equivalent, 8 GB RAM, a GTX 1060 or RX 6600 XT, DirectX 12, and 4 GB storage. Recommended specifications
                  are missing. See the{' '}
                  <Link href="/dear-passengers-system-requirements">PC requirements guide</Link> for component-level
                  interpretation.
                </p>
                <p>
                  Dear Passengers Steam currently confirms Windows only. That requirement does not establish Steam
                  Deck, Linux, macOS, or controller support. Our <Link href="/dear-passengers-platforms">platform
                  board</Link> keeps “not announced” distinct from “never.”
                </p>
              </section>

              <section id="labels">
                <span className="kicker">READ THE LABEL SOURCE</span>
                <h2>Official Steam Fields Are Not the Same as User Tags</h2>
                <p>
                  Dear Passengers Steam combines publisher-controlled fields with popular user-defined tags. Tags can
                  help discovery, but cannot confirm price, platform support, release timing, or a finished feature.
                  The store shows a Free to Play user tag; FLEXUS has not confirmed that business model or a price.
                </p>
                <p>
                  For Dear Passengers Steam, the accurate wording is “price and business model not announced.” The Dear
                  Passengers Steam price remains unknown until a purchase field or official announcement appears. The{' '}
                  <Link href="/dear-passengers-release-date">release and price briefing</Link> tracks that commercial
                  field.
                </p>
                <p>
                  The Dear Passengers Steam feature panel confirms online co-op, while the developer description
                  confirms piloting, cabin work, passengers, cargo, weather, and physics. Matching user tags support
                  discovery but are not the primary evidence.
                </p>
              </section>

              <section id="verify">
                <span className="kicker">SAFE STORE ROUTE</span>
                <h2>Dear Passengers Steam Safety: Verify App 4534960</h2>
                <p>
                  A correct Dear Passengers Steam link should resolve to Valve&apos;s store domain, contain app 4534960,
                  and name FLEXUS. A page offering an executable, crack, torrent, “Steam unlocked” package, key
                  generator, or paid beta is not official because it copies those facts. The game is unreleased and
                  the official listing provides no full-game download.
                </p>
                <p>
                  For Dear Passengers Steam, never enter a password into a third-party form. Sign-in should remain on a
                  Valve-controlled domain. No seller should require remote access, a browser extension, wallet seed
                  phrase, or separate “verification” executable.
                </p>
                <p>
                  No Dear Passengers Steam retail key program, preorder key, or public beta key is announced. A future
                  promotion needs a traceable FLEXUS or platform notice. Until then, wishlist or follow the product;
                  a same-name APK is not evidence of the Windows game.
                </p>
              </section>

              <section id="updates">
                <span className="kicker">WHAT CHANGES THE ANSWER</span>
                <h2>Signals That Would Update the Dear Passengers Steam Status</h2>
                <p>
                  A Dear Passengers Steam update matters when it changes what a player can verify or do: an exact date,
                  price, edition, preorder, demo, Playtest, purchase, preload, controller field, or Steam Deck result.
                  A screenshot, wishlist milestone, or community request does not change those fields.
                </p>
                <p>
                  The Dear Passengers Steam news hub is the best dated FLEXUS record. The July 31 post reported two
                  million wishlists, said an actual-flight gameplay video was in
                  production, and said players fully control the plane. It did not give a video date, launch day,
                  price, demo method, or player cap. Our <Link href="/dear-passengers-news">news timeline</Link> keeps
                  dated announcements separate from live store fields.
                </p>
                <p>
                  This desk checks the live store and developer-controlled news. When a field changes, its specialist
                  page is updated first, followed by this summary and affected links. That avoids duplicating the full
                  release, demo, platform, hardware, or download guides. This Dear Passengers Steam verification desk
                  therefore stays focused on storefront evidence.
                </p>

                <div className="timeline" aria-label="Dear Passengers Steam status sequence">
                  <div><time>JUL 14<br />2026</time><p><strong>Dear Passengers Steam record opens.</strong> App 4534960 identifies FLEXUS, Windows PC, 2026, single-player, and online co-op.</p></div>
                  <div><time>JUL 31<br />2026</time><p><strong>FLEXUS reports two million wishlists.</strong> The announcement adds audience context, not sales or a launch date.</p></div>
                  <div className="future"><time>AUG 20<br />2026</time><p><strong>Store rechecked.</strong> Wishlist access remains live; purchase, install, public demo, price, and exact date remain unavailable.</p></div>
                </div>
              </section>

              <section id="steam-faq">
                <span className="kicker">PASSENGER QUESTIONS</span>
                <h2>Dear Passengers Steam FAQ</h2>
                <p>
                  These answers reflect the live store and official news checked August 20, 2026. They describe the
                  FLEXUS Windows product, not a similarly named mobile app, VR listing, fan page, or unofficial file.
                </p>
                <FAQ items={faqs} />
              </section>

              <section id="sources">
                <span className="kicker">PRIMARY SOURCES</span>
                <h2>Check the Official Steam Record Directly</h2>
                <p>
                  The Dear Passengers Steam store is the primary product record. Official news provides dated FLEXUS
                  statements; community comments reveal questions but do not confirm product answers. Any Dear
                  Passengers Steam claim should trace back to one of these records.
                </p>
                <ul>
                  <li><a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Official Dear Passengers Steam app 4534960 ↗</a></li>
                  <li><a href={STEAM_NEWS_URL} target="_blank" rel="noopener noreferrer">Official FLEXUS news on Steam ↗</a></li>
                  <li><a href={STEAM_COMMUNITY_URL} target="_blank" rel="noopener noreferrer">Dear Passengers Steam Community Hub ↗</a></li>
                  <li><a href={STEAM_DISCUSSIONS_URL} target="_blank" rel="noopener noreferrer">Steam discussions for app 4534960 ↗</a></li>
                </ul>
                <figure className="article-source-figure">
                  <Image
                    src="/images/dear-passengers-unity-flight.webp"
                    alt="Official Unity flight screenshot shared by FLEXUS in a Dear Passengers Steam announcement"
                    width={1920}
                    height={897}
                    sizes="(max-width: 900px) 100vw, 790px"
                  />
                  <figcaption>
                    Official Unity development image shared by FLEXUS with its July 31 Dear Passengers Steam
                    announcement. It supports the dated news record; it is not evidence of a released build, price,
                    demo, or platform change.{' '}
                    <a href={STEAM_NEWS_URL} target="_blank" rel="noopener noreferrer">Source ↗</a>
                  </figcaption>
                </figure>
              </section>

              <section className="related-guide">
                <span className="kicker">CONTINUE THE CHECK</span>
                <h2>Continue After the Dear Passengers Steam Check</h2>
                <p>
                  Choose a related guide to review identity, 2026 timing, access, or the confirmed Windows destination.
                  Each page answers a different Dear Passengers Steam follow-up and links back when the store is the evidence.
                </p>
                <div className="related-actions">
                  <Link className="button" href="/game-dear-passengers">Official game identity →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-release-date">Release and price →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-demo">Demo status →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-download">Download safety →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-platforms">Platform status →</Link>
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
