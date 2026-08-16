import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SourceLedger from '@/components/SourceLedger';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const STEAM_NEWS_URL = 'https://steamcommunity.com/app/4534960/allnews/';
const ROUGH_AIR_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.dearpassenger';
const HAPPY_PASSENGERS_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.devtemple.escape.arrows.game';
const PAGE_URL = 'https://dearpassengers.net/dear-passengers-download/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Download: Official Steam & APK Safety' },
  description:
    'Check the Dear Passengers download status, Steam app, demo access, APK safety, and how same-name Google Play listings differ from the FLEXUS game.',
  alternates: { canonical: '/dear-passengers-download/', languages: { en: '/dear-passengers-download/', ar: '/ar/dear-passengers-download/', de: '/de/dear-passengers-download/', tr: '/tr/dear-passengers-indir/', 'pt-BR': '/pt-br/dear-passengers-baixar/', es: '/es/dear-passengers-descargar/', 'my-MM': '/my/dear-passengers-download/', ru: '/ru/dear-passengers-skachat/', cs: '/cs/dear-passengers-stahnout/', 'x-default': '/dear-passengers-download/' } },
  openGraph: {
    title: 'Dear Passengers Download: Official Access and APK Safety',
    description:
      'A verified guide to the real Dear Passengers Steam listing, current download status, demo access, and misleading third-party APK results.',
    url: PAGE_URL,
    images: [
      {
        url: '/images/dear-passengers-download-og.webp',
        width: 1200,
        height: 630,
        alt: 'Editorial illustration comparing a verified Dear Passengers download route with an unverified mobile package',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers Download and APK Safety Guide',
    description: 'Verify the official Steam game before downloading any file that uses the Dear Passengers name.',
    images: ['/images/dear-passengers-download-og.webp'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Can I download Dear Passengers now?',
    answer:
      'No official Dear Passengers download is available for the full FLEXUS game yet. The official Steam app is live for wishlisting, but it has no purchase, install, preload, or full-game download button. Steam currently gives the Dear Passengers game a broad 2026 Windows release window.',
  },
  {
    question: 'Where will the official Dear Passengers download be available?',
    answer:
      'Steam on Windows PC is the only confirmed storefront and platform for the FLEXUS game. An official Dear Passengers download should appear on Steam app 4534960 or be linked from a FLEXUS-controlled announcement. No other PC store or console storefront has been confirmed.',
  },
  {
    question: 'Is there an official Dear Passengers APK for Android?',
    answer:
      'No official Dear Passengers Android edition or APK has been announced by FLEXUS. Search results can contain similarly named Android listings, but the confirmed Dear Passengers game identifies FLEXUS as developer and publisher and currently lists Windows through Steam.',
  },
  {
    question: 'Is Dear Passengers: Rough Air the FLEXUS mobile game?',
    answer:
      'No official source connects Dear Passengers: Rough Air to the FLEXUS game. Google Play lists that pre-registration app under Kusya Games with package com.dearpassenger, while the confirmed Dear Passengers product is Steam app 4534960 by FLEXUS for Windows. The separate identity does not establish that the Android app is malicious; it means it is not verified as an official mobile port.',
  },
  {
    question: 'Is Happy Passengers Sim the Dear Passengers mobile game?',
    answer:
      'No official source connects Happy Passengers Sim to the Dear Passengers game by FLEXUS. Google Play lists Happy Passengers Sim under DEV TEMPLE (SMC-PRIVATE) LIMITED, while Steam app 4534960 lists FLEXUS as both developer and publisher. This identity difference does not label the Android app malicious; it means it should not be presented as an official Dear Passengers mobile port.',
  },
  {
    question: 'Can I download the Dear Passengers demo?',
    answer:
      'Not yet. FLEXUS founder Semen Kozyura has said that a Gamescom demo is being prepared and that a public Dear Passengers demo will follow later. The public build has no announced date or official download method, and Steam does not currently show a Download Demo button.',
  },
  {
    question: 'Is Dear Passengers free to play?',
    answer:
      'FLEXUS has not announced the Dear Passengers price or business model. There is no evidence that the full game will be free to play, paid, subscription-based, or sold through Early Access. The wishlist button is free to use, but wishlisting is not ownership or a Dear Passengers download.',
  },
  {
    question: 'How do I verify a real Dear Passengers installer?',
    answer:
      'Start with the official Steam app, confirm that FLEXUS is shown as both developer and publisher, and look for a real purchase, install, demo, or Playtest control. Cross-check any external announcement with FLEXUS. Never enter a Steam password into a third-party key or download page.',
  },
  {
    question: 'Is a Dear Passengers torrent or cracked download official?',
    answer:
      'No. FLEXUS has not released the game, so pages offering a Dear Passengers crack, torrent, key generator, or early unlock cannot be an official launch distribution. This guide does not test those files; it recommends waiting for a first-party Steam or FLEXUS announcement.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers Download: Official Steam Access and APK Safety',
  description: 'A source-backed guide to the official Dear Passengers download status and safe access checks.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-07-21',
  dateModified: '2026-08-16',
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
  image: 'https://dearpassengers.net/images/dear-passengers-download-og.webp',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers Game', item: 'https://dearpassengers.net/' },
    { '@type': 'ListItem', position: 2, name: 'Dear Passengers Download', item: PAGE_URL },
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

export default function DearPassengersDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <main id="main-content">
        <article>
          <header className="article-hero download-hero">
            <Image
              src="/images/dear-passengers-download-safety.webp"
              alt="Independent Dear Passengers download safety illustration with verified and unverified access routes"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers Game</Link><span>/</span><span>Download</span>
              </nav>
              <div className="eyebrow"><span>●</span> ACCESS CONTROL · CHECKED AUGUST 16, 2026</div>
              <h1>Dear Passengers Download:<br /><em>Official Steam & APK Safety</em></h1>
              <p>
                The official <strong>Dear Passengers download</strong> is not live yet. This independent checkpoint shows
                how to identify the real FLEXUS Steam game, distinguish it from similarly named Android listings, follow
                the planned demo, and avoid installers that promise access before an official release.
              </p>
              <div className="hero-actions">
                <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Open verified Steam app ↗</a>
                <Link className="button button-ghost" href="/dear-passengers-demo">Check public demo status →</Link>
              </div>
              <div className="status-strip" aria-label="Dear Passengers download status">
                <div><small>OFFICIAL APP</small><strong>STEAM 4534960</strong></div>
                <div><small>FULL DOWNLOAD</small><strong>NOT LIVE</strong></div>
                <div><small>PUBLIC DEMO</small><strong>PLANNED</strong></div>
                <div><small>ANDROID APK</small><strong>NOT ANNOUNCED</strong></div>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>ACCESS CHECKLIST</p>
              <a href="#answer">Direct answer</a>
              <a href="#official">Official download</a>
              <a href="#verify">Verification steps</a>
              <a href="#apk">APK and Android</a>
              <a href="#demo">Demo and Playtest</a>
              <a href="#platforms">Platform status</a>
              <a href="#warnings">Warning signs</a>
              <a href="#download-faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam page ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote
                checked="August 16, 2026"
                note="The hero is an original editorial illustration, not an official screenshot. Access claims are checked against the Steam app that names FLEXUS as developer and publisher and against the developer identities shown on cited Google Play records. We do not download, execute, or endorse third-party installers."
              />

              <section id="answer">
                <span className="kicker">CURRENT ANSWER</span>
                <h2>Can You Download Dear Passengers Now?</h2>
                <p className="snippet-answer">
                  No official <strong>Dear Passengers download</strong> is available today. The authentic Dear Passengers
                  Steam page is open for wishlisting and following, but it does not offer a purchase, install, preload,
                  Download Demo, or Steam Playtest button. Steam lists Windows PC and a broad 2026 release window.
                </p>
                <p>
                  That status applies to the FLEXUS action-adventure game about operating a chaotic airline. A search
                  result, APK directory, file host, key page, or launcher can use the same title without distributing the
                  same product. The reliable identity check is not the words “Dear Passengers” alone; it is the official
                  store record that connects the Dear Passengers game to FLEXUS and Steam app 4534960.
                </p>
                <p>
                  FLEXUS has confirmed plans for a Gamescom build and a later public demo, but neither statement creates
                  a public Dear Passengers download today. The <Link href="/dear-passengers-demo">Dear Passengers demo
                  tracker</Link> owns event, beta, Playtest, and demo timing, while this page owns full-game access,
                  installer verification, APK confusion, and the safest route to the official product.
                </p>
                <div className="fact-callout">
                  <span>OFFICIAL ACCESS STATUS</span>
                  <strong>Wishlist now; download only after a first-party button appears</strong>
                  <p>Windows PC · Steam app 4534960 · FLEXUS · 2026 window · no current install button.</p>
                </div>
              </section>

              <section id="official">
                <span className="kicker">VERIFIED ROUTE</span>
                <h2>Where the Official Dear Passengers Download Will Appear</h2>
                <p>
                  Steam is the only confirmed storefront for the FLEXUS game. When the official Dear Passengers download
                  becomes available, the Steam app should change from a pre-release wishlist page to an access page with
                  the relevant purchase, install, demo, or testing control. FLEXUS may publish supporting announcements,
                  but an article that merely links to a file host is not equivalent to the store changing state.
                </p>
                <p>
                  The Steam page currently identifies Dear Passengers as an action, adventure, and indie release, names
                  FLEXUS as developer and publisher, lists Windows requirements, and confirms single-player plus online
                  co-op. Those fields make the official page distinguishable before a Dear Passengers download exists.
                  The <Link href="/dear-passengers-confirmed-features">confirmed features record</Link> explains which
                  store fields are present and which launch details remain open.
                </p>

                <div className="platform-table" role="table" aria-label="Official Dear Passengers download status">
                  <div className="platform-head" role="row"><span role="columnheader">Dear Passengers access</span><span role="columnheader">Status</span><span role="columnheader">Verification</span></div>
                  <div role="row"><strong role="cell">Dear Passengers Steam app</strong><span className="status-confirmed" role="cell">Official</span><span role="cell">App 4534960; FLEXUS listed twice</span></div>
                  <div role="row"><strong role="cell">Dear Passengers wishlist</strong><span className="status-confirmed" role="cell">Available</span><span role="cell">No file is downloaded</span></div>
                  <div role="row"><strong role="cell">Dear Passengers full game</strong><span className="status-open" role="cell">Not downloadable</span><span role="cell">2026 window; no purchase button</span></div>
                  <div role="row"><strong role="cell">Dear Passengers preload</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No preload date or package</span></div>
                  <div role="row"><strong role="cell">Dear Passengers preorder</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No price or edition</span></div>
                  <div role="row"><strong role="cell">Dear Passengers public demo</strong><span className="status-confirmed" role="cell">Planned</span><span role="cell">No date or public button</span></div>
                </div>

                <h3>Wishlisting Is Not a Dear Passengers Download</h3>
                <p>
                  Adding Dear Passengers to a Steam wishlist records interest and can produce store notifications. It
                  does not install a build, reserve a key, confirm a price, grant beta access, or prove ownership. The
                  studio has reported major wishlist milestones, but those figures should not be confused with Dear
                  Passengers downloads, sales, active players, or completed purchases.
                </p>
              </section>

              <section id="verify">
                <span className="kicker">FIVE-POINT IDENTITY CHECK</span>
                <h2>How to Verify a Real Dear Passengers Download</h2>
                <p>
                  Use an identity chain before installing anything. The chain begins with the official Dear Passengers
                  product record and ends with the store-controlled install action. A social post, video description,
                  QR code, or search advertisement can be an entry point, but it should ultimately resolve to evidence
                  controlled by Steam or FLEXUS.
                </p>
                <ol className="steps article-steps">
                  <li><span>01</span><p><strong>Match the product.</strong> The page should identify the Dear Passengers game by FLEXUS, not only repeat the title.</p></li>
                  <li><span>02</span><p><strong>Match the store record.</strong> Verify Steam app 4534960 and check that FLEXUS appears as developer and publisher.</p></li>
                  <li><span>03</span><p><strong>Match the platform.</strong> The confirmed Dear Passengers target is Windows PC; Android, iOS, Mac, Linux, and consoles are not announced.</p></li>
                  <li><span>04</span><p><strong>Match the access state.</strong> Wait for a visible purchase, install, Download Demo, or Playtest control on the official ecosystem.</p></li>
                  <li><span>05</span><p><strong>Match the announcement.</strong> Confirm any unusual external step through <a href={STEAM_NEWS_URL} target="_blank" rel="noopener noreferrer">official Steam news ↗</a> or another FLEXUS-controlled channel.</p></li>
                </ol>
                <p>
                  Do not type a Steam password into a page that claims to generate a Dear Passengers key. Steam sign-in
                  should remain on an authentic Steam domain. Do not approve browser extensions, remote-control tools,
                  crypto payments, unrelated surveys, or notification permissions just to unlock a supposed Dear
                  Passengers download. A real release does not need to disguise its identity.
                </p>
              </section>

              <section id="apk">
                <span className="kicker">TITLE COLLISION</span>
                <h2>Is There a Dear Passengers APK or Android Download?</h2>
                <p>
                  FLEXUS has not announced a Dear Passengers Android version, Google Play listing, mobile beta, or APK.
                  Current search results can show third-party mobile pages that use the same or a similar title. That is
                  not proof that the listing contains a mobile port of the FLEXUS Dear Passengers game. Names are not
                  unique identifiers; developer, publisher, platform, store app, and official links provide the identity.
                </p>
                <p>
                  The closest title collision is <a href={ROUGH_AIR_PLAY_URL} target="_blank" rel="noopener noreferrer">
                  Dear Passengers: Rough Air on Google Play ↗</a>. Google Play shows Kusya Games as its developer,
                  package <code>com.dearpassenger</code>, a Pre-register button, and a July 24, 2026 update date. Those
                  fields do not match the <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">official Dear
                  Passengers Steam page ↗</a>, which identifies FLEXUS as developer and publisher under app 4534960 and
                  currently confirms Windows PC. No FLEXUS-controlled source links to the Rough Air listing.
                </p>
                <p>
                  Search results can also surface <a href={HAPPY_PASSENGERS_PLAY_URL} target="_blank" rel="noopener noreferrer">
                  Happy Passengers Sim on Google Play ↗</a>. Google Play identifies its developer as DEV TEMPLE
                  (SMC-PRIVATE) LIMITED and says the listing was updated August 6, 2026. Its name, developer, package,
                  and store record are also different from the FLEXUS Dear Passengers product.
                </p>
                <div className="platform-table" role="table" aria-label="Dear Passengers Steam and Google Play identity comparison">
                  <div className="platform-head" role="row"><span role="columnheader">Listing</span><span role="columnheader">Developer shown</span><span role="columnheader">Identity conclusion</span></div>
                  <div role="row"><strong role="cell">Dear Passengers · Steam 4534960</strong><span className="status-confirmed" role="cell">FLEXUS</span><span role="cell">Confirmed official PC game</span></div>
                  <div role="row"><strong role="cell">Dear Passengers: Rough Air · Google Play</strong><span className="status-open" role="cell">Kusya Games</span><span role="cell">Separate pre-registration listing; no FLEXUS link found</span></div>
                  <div role="row"><strong role="cell">Happy Passengers Sim · Google Play</strong><span className="status-open" role="cell">DEV TEMPLE</span><span role="cell">Different listing; no FLEXUS link found</span></div>
                </div>
                <p>
                  This comparison does not call either Google Play title malicious or evaluate its software quality. It
                  answers the narrower player question: their developer identities, packages, store records, and access
                  states do not match the FLEXUS Dear Passengers product. Players searching for the airline co-op game
                  should not treat a same-name Pre-register or Install button as an official Dear Passengers APK or mobile release.
                </p>
                <h3>What Would Confirm a Dear Passengers Mobile Version?</h3>
                <p>
                  Confirmation would require a FLEXUS announcement and a platform listing that identifies the same
                  studio and product. A Dear Passengers icon, copied description, screenshot montage, preregistration
                  page, or emulator catalog is not sufficient by itself. Until that evidence exists, Android and iOS
                  remain unannounced in the <Link href="/dear-passengers-release-date#platforms">Dear Passengers platform
                  tracker</Link>.
                </p>
              </section>

              <section id="demo">
                <span className="kicker">TEST FLIGHT ACCESS</span>
                <h2>Dear Passengers Demo Download and Steam Playtest Status</h2>
                <p>
                  A public Dear Passengers demo is planned, but no public Dear Passengers download method is live.
                  Founder Semen Kozyura has said that FLEXUS is preparing a Gamescom demo and will release a public demo
                  later. The statement does not name Steam as the distribution method, publish a date, or promise that
                  the event and public builds will be identical.
                </p>
                <p>
                  Steam currently has no Dear Passengers Download Demo button and no request-access panel for Steam
                  Playtest. A demo, Playtest, closed beta, and Early Access release are different formats. FLEXUS has only
                  confirmed the Gamescom build and later public demo. Our <Link href="/dear-passengers-demo">full Dear
                  Passengers demo guide</Link> tracks that narrower intent without turning the plan into an installer.
                </p>
                <h3>Prepare Without Downloading an Unofficial Build</h3>
                <p>
                  Wishlist and follow Dear Passengers on Steam, review the official minimum requirements, and keep enough
                  storage headroom for an eventual package. Steam currently lists 4 GB of available space as a minimum
                  requirement, but that is not a confirmed Dear Passengers download size. Compression, temporary files,
                  updates, shader caches, and demo scope can change the amount transferred or installed. See the{' '}
                  <Link href="/dear-passengers-system-requirements">system requirements guide</Link> before treating any
                  advertised file size as official.
                </p>
              </section>

              <section id="platforms">
                <span className="kicker">DESTINATION BOARD</span>
                <h2>Dear Passengers Download Platforms</h2>
                <p>
                  Windows PC through Steam is the only confirmed Dear Passengers platform. That does not prove other
                  versions will never exist; it means no platform holder or FLEXUS announcement currently supports them.
                  A page offering a console, Mac, Linux, Android, or iOS Dear Passengers download is ahead of the official
                  record unless new first-party evidence has appeared.
                </p>
                <div className="platform-table" role="table" aria-label="Dear Passengers download platform status">
                  <div className="platform-head" role="row"><span role="columnheader">Dear Passengers platform</span><span role="columnheader">Status</span><span role="columnheader">Download conclusion</span></div>
                  <div role="row"><strong role="cell">Dear Passengers Windows PC</strong><span className="status-confirmed" role="cell">Confirmed</span><span role="cell">Steam; not released yet</span></div>
                  <div role="row"><strong role="cell">Dear Passengers Steam Deck</strong><span className="status-open" role="cell">Unrated</span><span role="cell">No compatibility result</span></div>
                  <div role="row"><strong role="cell">Dear Passengers PlayStation</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No store listing</span></div>
                  <div role="row"><strong role="cell">Dear Passengers Xbox</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No store listing</span></div>
                  <div role="row"><strong role="cell">Dear Passengers Nintendo Switch</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No store listing</span></div>
                  <div role="row"><strong role="cell">Dear Passengers Android or iOS</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No FLEXUS mobile listing</span></div>
                </div>
              </section>

              <section id="warnings">
                <span className="kicker">STOP BEFORE INSTALL</span>
                <h2>Dear Passengers Download Warning Signs</h2>
                <p>
                  Be cautious when a Dear Passengers download page provides certainty that official sources do not. The
                  full game has no public price, exact date, preload, public installer, console edition, Android port, or
                  active beta registration. A page claiming all of those at once is not made credible by repeating the
                  correct trailer description or copying official artwork.
                </p>
                <ul>
                  <li>A Dear Passengers crack, torrent, key generator, or “early unlock” offered before launch.</li>
                  <li>A Dear Passengers APK presented as the FLEXUS PC game without a matching developer identity.</li>
                  <li>A Dear Passengers beta form that asks for payment, passwords, wallet details, or remote access.</li>
                  <li>A Dear Passengers installer that requires an unrelated browser extension or notification opt-in.</li>
                  <li>A Dear Passengers console download without an official platform-store listing.</li>
                  <li>A Dear Passengers page that hides its source, publication date, file owner, or update history.</li>
                </ul>
                <p>
                  This guide does not claim to scan or certify every file on the web. Its safer conclusion is simpler:
                  there is no need to evaluate an unofficial Dear Passengers download when the first-party game is not
                  publicly downloadable. Wait for the official store state to change, then verify the product again.
                </p>
              </section>

              <section id="download-faq">
                <span className="kicker">PASSENGER QUESTIONS</span>
                <h2>Dear Passengers Download FAQ</h2>
                <p>
                  These answers cover the FLEXUS game and reflect the official record checked August 16, 2026. The Dear
                  Passengers download status will be updated when Steam adds an access button or FLEXUS publishes a new
                  platform, demo, Playtest, price, preorder, or launch announcement.
                </p>
                <FAQ items={faqs} />
              </section>

              <section className="related-guide related-links-panel">
                <span className="kicker">CONTINUE THE CHECK</span>
                <h2>Verify the Rest of the Dear Passengers Briefing</h2>
                <p>
                  Return to the main Dear Passengers guide, follow the public demo, review the release window, or check
                  the minimum Windows requirements before the first official Dear Passengers download becomes available.
                </p>
                <div className="related-actions">
                  <Link className="button" href="/">Complete game guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-demo">Demo status →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-release-date">Release date →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-news">Official updates →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-system-requirements">PC requirements →</Link>
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
