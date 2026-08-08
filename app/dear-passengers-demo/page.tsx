import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const INTERVIEW_URL = 'https://dev.ua/en/news/dear-passengers-1784100084';
const DOU_INTERVIEW_URL = 'https://gamedev.dou.ua/articles/dear-passengers-interview/?from=community_widget_post';
const GAMESCOM_URL = 'https://www.gamescom.global/en/info/press-and-creator/content-creator-streamer';
const PAGE_URL = 'https://dearpassengers.net/dear-passengers-demo/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Demo: Public Demo & Playtest Status' },
  description:
    'Check the Dear Passengers demo status, confirmed Gamescom build, future public demo, Steam Playtest and beta details, safe download guidance, and updates.',
  alternates: { canonical: '/dear-passengers-demo', languages: { en: '/dear-passengers-demo/', ar: '/ar/dear-passengers-demo/', de: '/de/dear-passengers-demo/', tr: '/tr/dear-passengers-demo/', 'pt-BR': '/pt-br/dear-passengers-demo/', es: '/es/dear-passengers-demo/', 'my-MM': '/my/dear-passengers-demo/', ru: '/ru/dear-passengers-demo/', cs: '/cs/dear-passengers-demo/', 'x-default': '/dear-passengers-demo/' } },
  openGraph: {
    title: 'Dear Passengers Demo: What FLEXUS Has Confirmed',
    description: 'A sourced guide to the Gamescom build, planned public demo, access status, and safe download checks.',
    url: PAGE_URL,
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Dear Passengers demo and playtest status guide' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers Demo: Public Demo & Playtest Status',
    description: 'Track the confirmed Gamescom build and future public demo without relying on fake download pages.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Is there a Dear Passengers demo?',
    answer:
      'FLEXUS founder Semen Kozyura told dev.ua that the team is preparing a Dear Passengers demo for Gamescom and will release a public demo later. The public Dear Passengers demo is not downloadable from Steam yet, and no public date has been announced.',
  },
  {
    question: 'When will the Dear Passengers public demo be released?',
    answer:
      'No date has been announced for the Dear Passengers public demo. The developer statement confirms the intention to release it after the Gamescom build, but it does not provide a month, access window, or duration.',
  },
  {
    question: 'Can I download the Dear Passengers demo now?',
    answer:
      'No official public Dear Passengers demo download is available at this update. The Steam page has a wishlist button but no Download Demo or Steam Playtest panel. Avoid third-party installers, unofficial keys, and pages that claim to unlock early access.',
  },
  {
    question: 'Will the Dear Passengers demo be on Steam?',
    answer:
      'FLEXUS has not yet named the public demo distribution method. Steam is the game’s only confirmed storefront, so it is the first place to check, but the interview did not explicitly promise that the public Dear Passengers demo will use Steam.',
  },
  {
    question: 'Is there a Dear Passengers beta or Steam Playtest?',
    answer:
      'No Dear Passengers beta registration or Steam Playtest is currently listed. A demo, beta, and Playtest are different access formats; only a Gamescom demo and later public demo have been confirmed.',
  },
  {
    question: 'What will be included in the Dear Passengers demo?',
    answer:
      'FLEXUS has not published the Dear Passengers demo content, mission count, player limit, save rules, or hardware-specific performance targets. The official game page confirms flying, cabin work, physics, passengers, cargo, weather, single-player, and online co-op for the full game, but that does not guarantee every feature will appear in the demo.',
  },
  {
    question: 'How can I get notified about the Dear Passengers demo?',
    answer:
      'Wishlist and follow Dear Passengers on its official Steam page, then check developer announcements before installing anything. This page and the Dear Passengers news hub also track source-backed access changes.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers Demo: Public Demo, Gamescom and Playtest Status',
  description: 'A sourced guide to the confirmed Dear Passengers Gamescom demo, planned public demo, and access questions.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-07-17',
  dateModified: '2026-07-19',
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
    { '@type': 'ListItem', position: 2, name: 'Dear Passengers Demo', item: PAGE_URL },
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

export default function DearPassengersDemoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <main id="main-content">
        <article>
          <header className="article-hero">
            <Image src="/images/hero-bg.webp" alt="Dear Passengers demo guide over the chaotic aircraft cabin" fill sizes="100vw" priority />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers Game</Link><span>/</span><span>Demo</span>
              </nav>
              <div className="eyebrow"><span>●</span> TEST FLIGHT DESK · CHECKED JULY 19, 2026</div>
              <h1>Dear Passengers Demo:<br /><em>Public Demo & Playtest Status</em></h1>
              <p>
                A <strong>Dear Passengers demo</strong> is officially in development for Gamescom, and FLEXUS says a
                public Dear Passengers demo will follow later. It is not available to download today. This guide keeps
                the confirmed statement separate from guesses about dates, Steam access, beta registration, content,
                player limits, and hardware performance.
              </p>
              <div className="hero-actions">
                <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Check official Steam page ↗</a>
                <Link className="button button-ghost" href="/dear-passengers-news">Read verified news →</Link>
              </div>
              <div className="article-meta">
                <span>Updated July 19, 2026</span><span>Public download: not live</span><span>Gamescom: Aug 26–30</span>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>IN THIS GUIDE</p>
              <a href="#status">Current status</a>
              <a href="#gamescom">Gamescom build</a>
              <a href="#download">Safe download</a>
              <a href="#formats">Demo vs beta</a>
              <a href="#expect">What to expect</a>
              <a href="#prepare">How to prepare</a>
              <a href="#demo-faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam page ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote note="We treat the founder's Gamescom and public-demo statement as confirmed. Dates, access methods, content, player limits, and performance remain unconfirmed until FLEXUS publishes them." />

              <section id="status">
                <span className="kicker">CURRENT ANSWER</span>
                <h2>Is There a Dear Passengers Demo?</h2>
                <p className="snippet-answer">
                  FLEXUS is preparing a <strong>Dear Passengers demo</strong> for Gamescom and plans to release a public
                  demo later, according to founder Semen Kozyura&apos;s July 15 comment to dev.ua. The public Dear Passengers
                  demo is not live on Steam, and no public release date, registration form, or access window has been announced.
                </p>
                <p>
                  That distinction matters. A confirmed plan is meaningful news, but it is not the same as an available
                  build. The current Dear Passengers Steam listing offers wishlisting and following. It does not display
                  a Download Demo button, Steam Playtest request panel, beta branch instructions, price, or purchase option.
                  Anyone searching for a Dear Passengers demo today should therefore expect an update page, not an installer.
                </p>
                <p>
                  The source behind this status is a direct founder comment published by dev.ua, not a rumor copied
                  between game databases. Kozyura said the team was preparing a build for Gamescom and would make a public
                  demo available later. The wording confirms direction without confirming timing. Our{' '}
                  <Link href="/dear-passengers-news">Dear Passengers news tracker</Link> records the statement alongside
                  official Steam facts and developer milestones.
                </p>

                <div className="fact-callout">
                  <span>DEMO STATUS</span>
                  <strong>Confirmed, not yet public</strong>
                  <p>Gamescom build in preparation · public demo planned later · date and platform not announced.</p>
                </div>

                <h3>What Is Confirmed About the Dear Passengers Demo?</h3>
                <p>
                  Two facts are confirmed: a Gamescom Dear Passengers demo is being prepared, and the studio intends to
                  release a public Dear Passengers demo afterward. The interview also says Ukrainian localization will
                  be included in the game. It does not say whether Gamescom visitors will play a single mission, whether
                  the build supports online co-op, or whether the later public release will be identical.
                </p>

                <h3>What Is Still Unknown?</h3>
                <p>
                  The Dear Passengers demo date, download platform, regional availability, session length, mission count,
                  maximum players, solo implementation, controller mapping, accessibility settings, save behavior,
                  recommended specifications, and end date all remain open. No signup queue or invitation wave has been
                  announced. Treat precise claims about those fields as speculation unless they link to FLEXUS or the
                  official Dear Passengers store ecosystem.
                </p>
              </section>

              <section id="gamescom">
                <span className="kicker">EVENT BUILD</span>
                <h2>Dear Passengers Gamescom Demo Explained</h2>
                <p>
                  The Gamescom Dear Passengers demo is the first publicly discussed playable build. FLEXUS has also posted
                  that Gamescom Cologne 2026 is its next event destination. Together, those statements support the idea
                  of an event demonstration, but they do not yet identify a hall, booth number, appointment system, age
                  restriction, queue policy, or exact show-day availability.
                </p>
                <p>
                  Gamescom&apos;s official schedule places Opening Night Live on August 25 and the Cologne show on
                  August 26–30, 2026. Those dates define the event window, not the Dear Passengers booth schedule.
                  FLEXUS has not published a hall, stand number, playable-day timetable, or reservation link. Check the{' '}
                  <a href={GAMESCOM_URL} target="_blank" rel="noopener noreferrer">official Gamescom information ↗</a>
                  before planning a visit.
                </p>
                <h3>Will the Gamescom Demo Be the Public Demo?</h3>
                <p>
                  FLEXUS has not said. The phrase “public demo a little later” suggests a separate public availability
                  step after the event build, but it does not prove that both builds will contain the same mission or
                  systems. The studio may use Gamescom observations to adjust onboarding, stability, balance, controller
                  prompts, matchmaking, or performance before making the Dear Passengers demo widely accessible.
                </p>
                <p>
                  In a July 17 GameDev DOU interview, Kozyura described the planned sequence as a demo release, streamer
                  play, and then the full release. That confirms the demo&apos;s role in the pre-launch campaign but
                  still does not publish a public date or guarantee that the Gamescom and home builds will be identical.
                </p>

                <h3>What the Event Build Could Clarify</h3>
                <p>
                  Hands-on impressions could answer several unresolved questions: how roles are assigned, how quickly
                  players can switch jobs, whether solo play uses automation, how turbulence affects loose objects, and
                  how failure is scored. It could also reveal a practical player limit. Until such evidence is published,
                  our <Link href="/dear-passengers-player-count">Dear Passengers player count guide</Link> keeps the
                  maximum lobby size marked unannounced.
                </p>
              </section>

              <section id="download">
                <span className="kicker">DOWNLOAD SAFETY</span>
                <h2>Where to Download the Dear Passengers Demo Safely</h2>
                <p>
                  There is no official Dear Passengers demo download today. Steam is the full game&apos;s only confirmed
                  storefront, so its official app page is the safest first check. A legitimate release should also be
                  announced through a FLEXUS-controlled channel or linked from the Dear Passengers store page. Do not
                  install executables from “early unlock,” “demo crack,” APK, torrent, key generator, or unofficial
                  launcher pages that cannot show a first-party announcement.
                </p>

                <ol className="steps article-steps">
                  <li><span>01</span><p>Verify the Steam app is Dear Passengers and lists FLEXUS as both developer and publisher.</p></li>
                  <li><span>02</span><p>Look for an actual Download Demo or Steam Playtest panel on that official page.</p></li>
                  <li><span>03</span><p>Cross-check any date or external download link against a FLEXUS-controlled announcement.</p></li>
                  <li><span>04</span><p>Do not enter Steam credentials into a third-party page promising a Dear Passengers demo key.</p></li>
                  <li><span>05</span><p>Scan files and stop if an installer requests unrelated permissions, payment, or browser extensions.</p></li>
                </ol>

                <h3>How to Spot a Fake Demo Page</h3>
                <p>
                  Warning signs include an unsourced countdown, a download published before official access, fabricated
                  console editions, guaranteed beta keys, or an unrelated installer. A credible page should link its
                  source, show an update date, and admit when no Dear Passengers demo download exists.
                </p>
                <p>
                  For full-game installers, similarly named Android listings, platform identity, and APK checks, use the{' '}
                  <Link href="/dear-passengers-download">Dear Passengers download safety guide</Link>. This demo page
                  remains focused on the Gamescom build, public demo, beta, and Playtest formats.
                </p>
              </section>

              <section id="formats">
                <span className="kicker">ACCESS TYPES</span>
                <h2>Dear Passengers Demo vs Beta, Playtest and Early Access</h2>
                <p>
                  These labels are not interchangeable. A Dear Passengers demo would normally be a limited sample meant
                  to introduce the game. A beta would usually test a pre-release build. Steam Playtest is Valve&apos;s access
                  mechanism for testing without granting ownership of the main game. Early Access is a purchasable
                  development release. FLEXUS has confirmed only the Gamescom and later public demo.
                </p>

                <div className="platform-table" role="table" aria-label="Dear Passengers access format status">
                  <div className="platform-head" role="row"><span role="columnheader">Access format</span><span role="columnheader">Status</span><span role="columnheader">What it means today</span></div>
                  <div role="row"><strong role="cell">Gamescom demo</strong><span className="status-confirmed" role="cell">Confirmed</span><span role="cell">In preparation; event details pending</span></div>
                  <div role="row"><strong role="cell">Public demo</strong><span className="status-confirmed" role="cell">Planned</span><span role="cell">No public date or download yet</span></div>
                  <div role="row"><strong role="cell">Steam Playtest</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No request-access panel</span></div>
                  <div role="row"><strong role="cell">Closed beta</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No signup or invitation process</span></div>
                  <div role="row"><strong role="cell">Early Access</strong><span className="status-open" role="cell">Not announced</span><span role="cell">Steam lists a 2026 release, not Early Access</span></div>
                </div>

                <h3>Should You Sign Up for a Dear Passengers Beta?</h3>
                <p>
                  There is no official signup to complete. If FLEXUS opens one, verify the form&apos;s domain and the account
                  requesting information. A real testing application may ask about hardware, location, language, or
                  availability, but it should not require payment, wallet credentials, Steam password disclosure, or
                  remote access to your computer.
                </p>
              </section>

              <section id="expect">
                <span className="kicker">PLAYABLE QUESTIONS</span>
                <h2>What to Expect From the Dear Passengers Demo</h2>
                <p>
                  The full Dear Passengers game is officially described as an online co-op and single-player experience
                  about the crew of a dangerously unreliable airline. Players fly the aircraft, manage the cabin, serve
                  passengers, choose risky cargo, and handle physics-driven emergencies intensified by weather. Those
                  systems define the demo&apos;s likely subject, but the demo scope has not been published.
                </p>

                <h3>Co-op, Solo and Player Count</h3>
                <p>
                  Steam confirms both online co-op and single-player for Dear Passengers. It does not publish a maximum
                  crew size or explain solo helpers. The Dear Passengers demo could be the first reliable way to observe
                  lobby setup and role distribution, but it may also limit features for event throughput. Demo evidence
                  should never be expanded into a final-launch promise without supporting documentation.
                </p>

                <h3>Performance and System Requirements</h3>
                <p>
                  The official minimum baseline is Windows 10 64-bit, an Intel Core i5 at 2.5 GHz or equivalent, 8 GB
                  RAM, a GTX 1060 or RX 6600 XT, DirectX 12, and 4 GB of available storage. Recommended settings are not
                  listed. See our <Link href="/dear-passengers-system-requirements">Dear Passengers system requirements</Link>
                  page for laptop, Steam Deck, storage, and language context. A demo may help with personal testing, but
                  an early build is not necessarily representative of final optimization.
                </p>

                <h3>Controller, Steam Deck and Accessibility</h3>
                <p>
                  Controller support, Steam Deck verification, VR support, and a complete accessibility menu are not
                  confirmed on the current store page. Players who depend on remapping, subtitles, color alternatives,
                  motion settings, or one-handed play should wait for documented options. The Dear Passengers demo can
                  provide useful evidence only after its settings and input behavior are visible.
                </p>
              </section>

              <section id="prepare">
                <span className="kicker">PRE-FLIGHT PLAN</span>
                <h2>How to Prepare for the Dear Passengers Public Demo</h2>
                <p>
                  Start by wishlisting and following the official app. Keep enough storage available beyond the current
                  4 GB minimum because a demo can have a different download footprint and require temporary installation
                  space. Update Windows and graphics drivers, and confirm that your account security uses Steam Guard.
                  None of these steps guarantees entry; they simply remove common setup problems when access arrives.
                </p>
                <h3>Where We Will Record the Next Update</h3>
                <p>
                  This guide owns detailed demo, beta, Playtest, and download questions. The{' '}
                  <Link href="/dear-passengers-release-date">Dear Passengers release date page</Link> keeps only a concise
                  access summary, while the <Link href="/dear-passengers-news">Dear Passengers news page</Link> logs each
                  dated announcement. That structure prevents conflicting answers and gives every status change one clear home.
                </p>
                <p>
                  The <Link href="/dear-passengers-developer-flexus">Dear Passengers developer profile</Link> explains
                  who FLEXUS is and connects the demo sequence to the studio&apos;s release comments. The{' '}
                  <a href={DOU_INTERVIEW_URL} target="_blank" rel="noopener noreferrer">GameDev DOU interview ↗</a>
                  remains the source for the demo-to-streamer-to-release sequence.
                </p>
              </section>

              <section id="demo-faq">
                <span className="kicker">TEST FLIGHT QUESTIONS</span>
                <h2>Dear Passengers Demo FAQ</h2>
                <p>
                  These answers reflect the latest source-backed Dear Passengers demo status. A planned public release
                  should not be confused with a live download, and an event build should not be treated as proof of every
                  final feature.
                </p>
                <FAQ items={faqs} />
              </section>

              <section className="related-guide related-links-panel">
                <span className="kicker">CONTINUE YOUR BRIEFING</span>
                <h2>Track Every Dear Passengers Update</h2>
                <p>
                  Return to the <Link href="/">complete Dear Passengers game guide</Link>, review the{' '}
                  <Link href="/dear-passengers-release-date">2026 release window</Link>, check the{' '}
                  <Link href="/dear-passengers-player-count">co-op and player count status</Link>, or follow our dated{' '}
                  <Link href="/dear-passengers-news">Dear Passengers news log</Link>. For the original demo statement,
                  read the <a href={INTERVIEW_URL} target="_blank" rel="noopener noreferrer">dev.ua founder interview ↗</a>.
                </p>
                <div className="related-actions">
                  <Link className="button" href="/dear-passengers-news">Latest verified news →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-download">Download safety →</Link>
                  <a className="button button-ghost" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Official Steam page ↗</a>
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
