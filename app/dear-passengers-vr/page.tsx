import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/dear-passengers-vr/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const OFFICIAL_SITE_URL = 'https://dearpassengers.game/';
const QUEST_ARCHIVE_URL = 'https://queststoredb.com/game/dear-passengers-vr-1251691901365016/';
const META_URL = 'https://www.meta.com/experiences/1251691901365016/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers VR: Support & Meta Quest Identity Check' },
  description:
    'Is Dear Passengers VR supported? Check the FLEXUS Steam game, Meta Quest name collision, headset status, community requests and safe verification steps.',
  alternates: {
    canonical: '/dear-passengers-vr/',
    languages: {
      en: '/dear-passengers-vr/',
      de: '/de/dear-passengers-vr/',
      es: '/es/dear-passengers-vr/',
      ru: '/ru/dear-passengers-vr/',
      'x-default': '/dear-passengers-vr/',
    },
  },
  openGraph: {
    title: 'Dear Passengers VR: Support and Quest Listing Check',
    description: 'Separate the FLEXUS Windows game from a same-name Meta Quest record and verify the current VR status.',
    url: PAGE_URL,
    type: 'article',
    images: [{
      url: '/images/dear-passengers-unity-flight.webp',
      width: 1920,
      height: 1024,
      alt: 'Official FLEXUS flight image used for the Dear Passengers VR status guide',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers VR: Current Support and Quest Identity',
    description: 'VR remains unannounced for the FLEXUS game; verify the separate Quest record before relying on it.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Is Dear Passengers VR supported?',
    answer:
      'Dear Passengers VR support is not announced for the FLEXUS game. Steam app 4534960 lists Windows PC, single-player and online co-op, but it does not list a SteamVR feature, VR-only requirement or supported headset.',
  },
  {
    question: 'Is Dear Passengers a VR game?',
    answer:
      'The FLEXUS Dear Passengers game is currently a Windows PC title, not a confirmed VR game. First-person cockpit footage can explain Dear Passengers VR interest, but camera perspective does not confirm headset rendering, motion controls or comfort settings.',
  },
  {
    question: 'Can I play Dear Passengers VR on Meta Quest?',
    answer:
      'No verified FLEXUS source currently provides a Dear Passengers VR Quest build. An archived Quest record with Meta app ID 1251691901365016 names Fun Land Games, not FLEXUS, and its linked Meta page is unavailable. Treat it as a separate product record unless either publisher documents a connection.',
  },
  {
    question: 'Does Dear Passengers VR work with Quest Link or Air Link?',
    answer:
      'There is no official Dear Passengers VR PC mode to stream through Quest Link, Air Link or another PC-to-headset method. Those connection tools do not convert an ordinary Windows game into a supported VR build.',
  },
  {
    question: 'Will Dear Passengers VR support motion controllers?',
    answer:
      'Motion-controller support, hand tracking, room-scale play, seated VR controls and headset-specific accessibility options are unknown. A trailer showing hands or cockpit interaction is not a Dear Passengers VR control specification.',
  },
  {
    question: 'Is there a Dear Passengers VR release date?',
    answer:
      'FLEXUS has not announced a Dear Passengers VR release date. Steam gives the flat-screen Windows game a broad 2026 window. Dates attached to the separate Fun Land Games Quest record do not apply to Steam app 4534960.',
  },
  {
    question: 'How can I verify a future Dear Passengers VR announcement?',
    answer:
      'Check Steam app 4534960, the official Dear Passengers website and FLEXUS announcements. Dear Passengers VR would need an explicit store feature, supported-headset field, platform page or direct developer statement before this guide marks it confirmed.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers VR: Support Status and Meta Quest Identity Check',
  description: 'A source-led VR status and same-name Quest listing identity check for the Dear Passengers game by FLEXUS.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-08-21',
  dateModified: '2026-08-21',
  inLanguage: 'en',
  author: { '@type': 'Organization', name: 'DearPassengers.net Editorial Team', url: 'https://dearpassengers.net/about/' },
  publisher: {
    '@type': 'Organization',
    name: 'DearPassengers.net',
    url: 'https://dearpassengers.net/',
    logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' },
  },
  image: 'https://dearpassengers.net/images/dear-passengers-unity-flight.webp',
  citation: [STEAM_URL, OFFICIAL_SITE_URL, QUEST_ARCHIVE_URL, META_URL],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers', item: 'https://dearpassengers.net/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://dearpassengers.net/dear-passengers-platforms/' },
    { '@type': 'ListItem', position: 3, name: 'Dear Passengers VR', item: PAGE_URL },
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

export default function DearPassengersVrPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <main id="main-content" className="steam-guide-page">
        <article>
          <header className="article-hero steam-article-hero">
            <Image
              src="/images/dear-passengers-unity-flight.webp"
              alt="Official FLEXUS flight image illustrating the Dear Passengers VR status check"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content steam-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers</Link><span>/</span>
                <Link href="/dear-passengers-platforms/">Platforms</Link><span>/</span><span>VR</span>
              </nav>

              <div className="steam-hero-grid">
                <div className="steam-hero-copy">
                  <div className="eyebrow"><span>●</span> VR STATUS · IDENTITY CHECK</div>
                  <h1>Dear Passengers VR:<br /><em>Support and Quest Listing Explained</em></h1>
                  <p>
                    <strong>Dear Passengers VR is not announced for the FLEXUS game.</strong> The official Steam record
                    confirms Windows PC, but no SteamVR mode or supported headset. A separate Meta Quest record uses the
                    Dear Passengers VR name and identifies Fun Land Games, not FLEXUS. This guide keeps those two
                    products separate and shows exactly what would count as an official VR announcement.
                  </p>
                  <div className="hero-actions">
                    <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Verify the FLEXUS Steam game ↗</a>
                    <Link className="button button-ghost" href="/dear-passengers-platforms/">All platform status →</Link>
                  </div>
                  <div className="article-meta">
                    <span>Published August 21, 2026</span><span>Primary product: Steam 4534960</span><span>VR: not announced</span>
                  </div>
                </div>

                <dl className="steam-identity-board" aria-label="Dear Passengers VR verification summary">
                  <div><dt>FLEXUS product</dt><dd>Windows PC</dd><small>Steam app 4534960</small></div>
                  <div><dt>SteamVR field</dt><dd>Not listed</dd><small>No official Dear Passengers VR mode</small></div>
                  <div><dt>Quest record</dt><dd>Separate</dd><small>Fun Land Games · Meta 1251691901365016</small></div>
                  <div><dt>Safe action</dt><dd>Verify IDs</dd><small>Match developer and publisher</small></div>
                </dl>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc" aria-label="Dear Passengers VR guide sections">
              <p>VR CHECKLIST</p>
              <a href="#answer">Direct answer</a>
              <a href="#evidence">Official evidence</a>
              <a href="#identity">Quest identity</a>
              <a href="#hardware">Headsets and controls</a>
              <a href="#confirmation">Confirmation standard</a>
              <a href="#vr-faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Check Steam ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote
                checked="August 21, 2026"
                note="This page distinguishes the FLEXUS Windows game from a same-name Quest record. It does not accuse either publisher of affiliation, copying or misconduct."
              />

              <section id="answer">
                <span className="kicker">DIRECT ANSWER</span>
                <h2>Is Dear Passengers VR Official?</h2>
                <p className="snippet-answer">
                  <strong>No official Dear Passengers VR version has been announced by FLEXUS.</strong> Steam app
                  4534960 lists the Dear Passengers game for Windows PC with single-player and online co-op. It does not
                  show SteamVR, VR Supported or VR Only. A different Dear Passengers VR record exists for Meta Quest,
                  but that record names Fun Land Games as developer and publisher. No verified source connects it to
                  FLEXUS, so it is not evidence that the Steam game received a VR port.
                </p>
                <p>
                  That Dear Passengers VR distinction answers two searches that now share one phrase. Some people asking about Dear
                  Passengers VR want to know whether the cockpit game can run in a headset. Others have found a store
                  result literally titled Dear Passengers VR. The first question is about support for the FLEXUS game;
                  the second is an identity check. Treating them as one product would import the Quest record&apos;s price,
                  date, screenshots and hardware claims into the wrong game.
                </p>
                <p>
                  Dear Passengers VR interest is understandable. The official trailer uses a first-person perspective,
                  shows a controllable aircraft and places players in a physical cabin. Those qualities can feel suited
                  to VR, but they do not establish stereo rendering, tracked hands, headset performance, locomotion,
                  comfort options or a VR interface. Dear Passengers VR remains an open request for the FLEXUS product,
                  not a confirmed feature.
                </p>
              </section>

              <section id="evidence">
                <span className="kicker">FIRST-PARTY RECORD</span>
                <h2>What Steam Confirms About Dear Passengers VR</h2>
                <p>
                  The official source for Dear Passengers VR verification is the <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Dear
                  Passengers Steam page ↗</a>. It identifies FLEXUS in both the developer and publisher fields, gives a
                  broad 2026 release window, lists Windows 10 minimum requirements and offers a wishlist action. Its
                  feature panel confirms single-player and online co-op. That panel does not contain a Dear Passengers
                  VR feature, a headset requirement or a VR-only label.
                </p>
                <p>
                  For Dear Passengers VR verification, the <a href={OFFICIAL_SITE_URL} target="_blank" rel="noopener noreferrer">official Dear Passengers website ↗</a>
                  sends its “Get the game” action to that same Steam listing. It does not send players to Meta Quest or
                  describe Dear Passengers VR hardware. The two first-party paths therefore converge on one Windows
                  product identity: FLEXUS, Steam app 4534960 and a still-unreleased 2026 game.
                </p>
                <p>
                  Steam user tags are not enough to change the Dear Passengers VR answer. Tags can be added by the
                  community, while store feature fields and publisher copy come from a different evidence layer. Even
                  if a user applies a VR-related tag or shares an injector experiment after launch, that would not be
                  the same as supported Dear Passengers VR. A mod can be useful without becoming an official platform.
                </p>
                <div className="platform-table" role="table" aria-label="Dear Passengers VR evidence status">
                  <div className="platform-head" role="row"><span role="columnheader">Question</span><span role="columnheader">Status</span><span role="columnheader">Evidence</span></div>
                  <div role="row"><strong role="cell">Dear Passengers VR mode</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No SteamVR feature or FLEXUS statement</span></div>
                  <div role="row"><strong role="cell">Dear Passengers VR headsets</strong><span className="status-open" role="cell">Unknown</span><span role="cell">No supported-HMD list</span></div>
                  <div role="row"><strong role="cell">Dear Passengers VR controls</strong><span className="status-open" role="cell">Unknown</span><span role="cell">No motion-control specification</span></div>
                  <div role="row"><strong role="cell">FLEXUS PC version</strong><span className="status-confirmed" role="cell">Windows · 2026</span><span role="cell">Steam app 4534960</span></div>
                </div>
              </section>

              <section id="identity">
                <span className="kicker">SAME-NAME PRODUCT CHECK</span>
                <h2>Dear Passengers VR on Meta Quest Is a Separate Record</h2>
                <p>
                  Quest Store DB archives a Dear Passengers VR listing under Meta app ID
                  <code> 1251691901365016</code>. The Dear Passengers VR record names Fun Land Games as both developer and publisher,
                  describes Quest 2/Pro and Quest 3/3S compatibility, and records a $6.99 base price. It also records an
                  August 13 delisting and labels the product as coming soon for August 21, 2026. Quest Store DB identifies
                  itself as a hobby database rather than Meta, so these are archived third-party observations, not
                  announcements by FLEXUS.
                </p>
                <p>
                  The archive&apos;s <a href={META_URL} target="_blank" rel="noopener noreferrer">Meta product URL ↗</a> currently
                  returns “This page isn&apos;t available.” An unavailable store page cannot verify a current purchase,
                  preorder, supported region or release. More importantly, neither the Meta URL nor the Dear Passengers
                  VR archive identifies FLEXUS or Steam app 4534960. Matching words in a title are weaker identity
                  evidence than developer, publisher, app ID and official cross-links.
                </p>
                <div className="platform-table" role="table" aria-label="FLEXUS game and Dear Passengers VR Quest record comparison">
                  <div className="platform-head" role="row"><span role="columnheader">Record</span><span role="columnheader">Named publisher</span><span role="columnheader">What it proves</span></div>
                  <div role="row"><strong role="cell">Dear Passengers · Steam 4534960</strong><span className="status-confirmed" role="cell">FLEXUS</span><span role="cell">Official Windows PC product</span></div>
                  <div role="row"><strong role="cell">Dear Passengers VR · Meta 1251691901365016</strong><span className="status-open" role="cell">Fun Land Games</span><span role="cell">Separate archived Quest product record</span></div>
                </div>
                <p>
                  This comparison does not claim that the Dear Passengers VR Quest product is fraudulent, copied or
                  malicious. It makes the narrower, verifiable statement that no source reviewed on August 21 connects
                  the two products. Players should evaluate each listing on its own developer, privacy, price and store
                  record instead of moving facts between them.
                </p>
              </section>

              <section id="hardware">
                <span className="kicker">HEADSET REALITY CHECK</span>
                <h2>Can Dear Passengers VR Run on Quest, SteamVR or PS VR2?</h2>
                <p>
                  There is no official Dear Passengers VR support matrix. FLEXUS has not named Meta Quest, SteamVR,
                  Valve Index, HTC Vive, Pico, Windows Mixed Reality or PlayStation VR2. The only published operating
                  system is Windows, but Windows support alone does not create a PC VR mode. A compatible headset and a
                  connection such as Quest Link cannot supply the camera, input and interface work that a game build
                  does not expose.
                </p>
                <p>
                  Dear Passengers VR would also need control details. The flat-screen footage shows characters touching
                  cockpit and cabin objects, yet it does not tell us whether tracked controllers could grab those
                  objects, whether flight controls would use motion input, whether gamepads would remain available or
                  whether menus could be operated in a headset. Room scale, seated mode, snap turning, smooth turning,
                  teleport movement and left-handed options are all unknown.
                </p>
                <p>
                  Dear Passengers VR comfort and performance matter as much as basic launch support. Turbulence, moving aircraft interiors
                  and loose physics objects could require careful camera and comfort design, but no Dear Passengers VR
                  comfort rating exists for the FLEXUS game. The published GTX 1060 or RX 6600 XT minimum belongs to the
                  Windows build; it is not a Dear Passengers VR GPU recommendation and should not be doubled, converted
                  or treated as headset guidance.
                </p>
                <h3>What About Unofficial VR Mods?</h3>
                <p>
                  A creator may eventually test Dear Passengers VR with an injector or mod, especially because Dear Passengers uses a
                  first-person presentation. That would be an observed, unofficial setup with its own risks and version
                  limits. It would not confirm native Dear Passengers VR, motion-controller support or developer help.
                  This site will not offer a download button or setup promise before a reproducible public build exists.
                </p>
              </section>

              <section id="confirmation">
                <span className="kicker">UPDATE STANDARD</span>
                <h2>What Would Confirm Dear Passengers VR?</h2>
                <p>
                  The Dear Passengers VR status changes only when a source tied to the FLEXUS product publishes a
                  concrete field. The strongest signal would be a Steam feature update on app 4534960, followed by an
                  official FLEXUS announcement or a platform-holder page linked by FLEXUS. A supported-headset list,
                  input specification or dated VR trailer would also be meaningful. Search suggestions, requests,
                  same-name apps and camera angles do not meet that standard.
                </p>
                <ol className="numbered-list">
                  <li><span>01</span><p><strong>Match the product.</strong> Dear Passengers VR evidence must identify FLEXUS or Steam app 4534960.</p></li>
                  <li><span>02</span><p><strong>Match the feature.</strong> Look for explicit VR Supported, SteamVR, headset or motion-control wording.</p></li>
                  <li><span>03</span><p><strong>Match the source.</strong> Prefer Steam, FLEXUS and a live platform-holder record over copied databases.</p></li>
                  <li><span>04</span><p><strong>Keep dates separate.</strong> A separate Dear Passengers VR product date cannot become the PC game&apos;s date.</p></li>
                </ol>
                <p>
                  For now, the practical action is to wishlist the official Windows game and follow first-party news.
                  The <Link href="/dear-passengers-steam/">Dear Passengers Steam identity guide</Link> verifies the
                  official app, while the <Link href="/dear-passengers-platforms/">Dear Passengers platform board</Link>
                  tracks console, mobile, controller and Steam Deck questions. Dear Passengers VR owns only the headset
                  support and same-name Quest identity task.
                </p>
              </section>

              <section id="vr-faq">
                <span className="kicker">VR QUESTIONS</span>
                <h2>Dear Passengers VR FAQ</h2>
                <p>
                  These Dear Passengers VR answers were checked against the live FLEXUS Steam listing, official product
                  site, archived Quest record and unavailable Meta URL on August 21, 2026. Unknown means the feature has
                  not been announced; it does not mean that Dear Passengers VR can never be developed.
                </p>
                <FAQ items={faqs} />
              </section>

              <section id="sources" className="related-guide related-links-panel">
                <span className="kicker">SOURCE LEDGER</span>
                <h2>Verify the Dear Passengers VR Status</h2>
                <p>
                  The <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">official Steam record ↗</a> and
                  <a href={OFFICIAL_SITE_URL} target="_blank" rel="noopener noreferrer"> official product website ↗</a>
                  confirm the FLEXUS Windows identity. The <a href={QUEST_ARCHIVE_URL} target="_blank" rel="noopener noreferrer">Dear
                  Passengers VR Quest archive ↗</a> records Fun Land Games and Meta ID 1251691901365016; the linked
                  <a href={META_URL} target="_blank" rel="noopener noreferrer"> Meta page ↗</a> is unavailable. No
                  reviewed Dear Passengers VR source links that Quest record to FLEXUS.
                </p>
                <p>
                  Continue to the <Link href="/dear-passengers-platforms/">complete platform status</Link>, the
                  <Link href="/dear-passengers-steam/"> official Steam verification</Link> or the
                  <Link href="/dear-passengers-confirmed-features/"> confirmed-features ledger</Link>. Each page has a
                  different task, while this Dear Passengers VR guide remains the owner of headset and Quest identity.
                </p>
                <div className="related-actions">
                  <Link className="button" href="/dear-passengers-platforms/">All platforms →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-mobile/">Mobile identity →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-steam/">Steam identity →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-confirmed-features/">Feature facts →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-release-date/">Release status →</Link>
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
