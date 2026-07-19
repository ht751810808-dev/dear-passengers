import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import OfficialTrailer from '@/components/OfficialTrailer';
import SandboxedNativeAd from '@/components/SandboxedNativeAd';
import SourceLedger from '@/components/SourceLedger';
import VideoShowcase from '@/components/VideoShowcase';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';

const faqs: FaqItem[] = [
  {
    question: 'What is the Dear Passengers game?',
    answer:
      'Dear Passengers is a physics-based action-adventure game from FLEXUS about operating a catastrophically unreliable airline. One player can pilot while other crew members manage the cabin, passengers, cargo, food service, weather, and emergencies. Steam currently lists single-player and online co-op support.',
  },
  {
    question: 'When will Dear Passengers be released?',
    answer:
      'The official Dear Passengers Steam listing gives a 2026 release window but does not provide an exact day or month. Our dedicated release-date guide separates confirmed details from speculation and will be updated when FLEXUS changes the official listing.',
  },
  {
    question: 'How many players can play Dear Passengers?',
    answer:
      'The Dear Passengers Steam page confirms online co-op but does not currently state a maximum group size in the feature list. Reveal footage shows multiple crew members working together. Until FLEXUS publishes a formal player-count specification, a precise maximum should be treated as unconfirmed.',
  },
  {
    question: 'Can you play Dear Passengers alone?',
    answer:
      'Yes. The Dear Passengers Steam feature panel includes Single-player as well as Online Co-op. FLEXUS has not yet explained how solo role switching, automated crew, or difficulty scaling will work, so the exact solo experience remains unknown.',
  },
  {
    question: 'Is Dear Passengers coming to PS5, Xbox, or Switch?',
    answer:
      'Dear Passengers is currently confirmed only for Windows PC through Steam. No PlayStation 5, Xbox Series, or Nintendo Switch version has been announced. Console availability should remain marked as not announced unless an official store page or FLEXUS statement appears.',
  },
  {
    question: 'Does Dear Passengers support local co-op or split screen?',
    answer:
      'The current Dear Passengers store listing confirms online co-op but does not list shared-screen or split-screen play. Local co-op, crossplay, Remote Play Together, controller support, and Steam Deck status are therefore unconfirmed at this stage.',
  },
  {
    question: 'Is there a Dear Passengers demo or beta?',
    answer:
      'FLEXUS is preparing a Dear Passengers demo for Gamescom and says a public demo will follow later. The public build is not downloadable yet, and no demo date, beta signup, or Steam Playtest has been announced. Our dedicated demo guide tracks the verified access status.',
  },
  {
    question: 'What are the Dear Passengers system requirements?',
    answer:
      'The current Dear Passengers minimum specifications list Windows 10 64-bit, an Intel Core i5 at 2.5 GHz or equivalent, 8 GB RAM, a GTX 1060 or RX 6600 XT, DirectX 12, and 4 GB of storage. Recommended specifications have not been posted.',
  },
];

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'DearPassengers.net',
  url: 'https://dearpassengers.net/',
  description: 'An independent guide to the Dear Passengers game, gameplay, release timing, and platform status.',
};

const gameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Dear Passengers',
  url: 'https://dearpassengers.net/',
  sameAs: [STEAM_URL, 'https://www.youtube.com/watch?v=XRvd_HZesys'],
  gamePlatform: 'Windows PC',
  applicationCategory: 'Game',
  genre: ['Action', 'Adventure', 'Indie', 'Online Co-op'],
  author: { '@type': 'Organization', name: 'FLEXUS' },
  publisher: { '@type': 'Organization', name: 'FLEXUS' },
  inLanguage: 'en',
  description:
    'A physics-based co-op airline game in which players pilot an aircraft, manage a chaotic cabin, and transport passengers and risky cargo.',
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers Game: The Complete Co-op Airline Guide',
  description: 'A sourced guide to Dear Passengers gameplay, multiplayer, release timing, requirements, and open questions.',
  mainEntityOfPage: 'https://dearpassengers.net/',
  datePublished: '2026-07-15',
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

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Dear Passengers Official Announcement Trailer',
  description: 'The official FLEXUS announcement trailer for the Dear Passengers co-op airline game.',
  thumbnailUrl: 'https://i.ytimg.com/vi/XRvd_HZesys/maxresdefault.jpg',
  uploadDate: '2026-07-14',
  contentUrl: 'https://www.youtube.com/watch?v=XRvd_HZesys',
  embedUrl: 'https://www.youtube-nocookie.com/embed/XRvd_HZesys',
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

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <main id="main-content">
        <section className="hero home-hero">
          <Image
            className="hero-image"
            src="/images/hero-bg.webp"
            alt="Dear Passengers game crew trying to control a chaotic airline cabin"
            fill
            sizes="100vw"
            priority
          />
          <div className="hero-shade" />
          <div className="container hero-content">
            <div className="eyebrow"><span>●</span> INDEPENDENT PASSENGER BRIEFING · UPDATED JULY 19, 2026</div>
            <h1>Dear Passengers Game:<br /><em>The Complete Co-op Airline Guide</em></h1>
            <p className="hero-lede">
              The <strong>Dear Passengers game</strong> turns a routine flight into a cooperative comedy of broken
              equipment, demanding travelers, risky cargo, and spectacularly bad decisions. This independent guide
              gathers every confirmed detail about gameplay, multiplayer, the 2026 Steam launch, PC requirements,
              language support, and the questions FLEXUS has not answered yet.
            </p>
            <div className="hero-actions">
              <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">
                Wishlist on Steam <span aria-hidden="true">↗</span>
              </a>
              <Link className="button button-ghost" href="/dear-passengers-release-date">
                Check the release date <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="status-strip" aria-label="Confirmed Dear Passengers facts">
              <div><small>RELEASE WINDOW</small><strong>2026</strong></div>
              <div><small>CONFIRMED PLATFORM</small><strong>PC · STEAM</strong></div>
              <div><small>PLAY MODES</small><strong>SOLO · ONLINE CO-OP</strong></div>
              <div><small>DEVELOPER</small><strong>FLEXUS</strong></div>
            </div>
          </div>
        </section>

        <div className="container home-editorial-note">
          <EditorialNote />
        </div>

        <section className="section intro-section" id="overview">
          <div className="container two-column editorial-grid">
            <aside className="section-index">
              <span>01</span>
              <p>THE FLIGHT PLAN</p>
            </aside>
            <div className="prose lead-prose">
              <p className="kicker">A BAD AIRLINE. A VERY GOOD CO-OP PREMISE.</p>
              <h2>What Is the Dear Passengers Game?</h2>
              <p>
                The <strong>Dear Passengers game</strong> is an action-adventure and online co-op title in which you
                and your friends become the world&apos;s worst airline crew. The plane is unreliable, the cargo may be
                illegal, and passenger safety competes with profit. Dear Passengers uses unpredictable physics and
                divided roles to create entertaining disasters instead of an orderly flight simulation.
              </p>
              <p>
                Before takeoff in Dear Passengers, the crew chooses which passengers and cargo to accept. Higher-paying jobs can introduce
                harder problems. One crew member may fly while others serve food, calm the cabin, protect cargo, and
                contain emergencies. Turbulence can throw unsecured objects through the aircraft, giving the
                <strong> Dear Passengers game</strong> a clear identity beyond a conventional flight simulator.
              </p>

              <h3>Who Is Developing Dear Passengers?</h3>
              <p>
                FLEXUS is listed as both developer and publisher. The official Dear Passengers Steam page is the primary source for the
                current feature list, language, release window, and PC specifications. DearPassengers.net is independent
                and never treats trailer interpretation or community discussion as an official promise.
              </p>
              <p>
                FLEXUS describes itself as a Kyiv-based studio founded in 2020 with more than 70 team members and more
                than 300 million downloads across 150 countries. Our{' '}
                <Link href="/dear-passengers-developer-flexus">Dear Passengers developer profile</Link> explains who
                made the game, the studio&apos;s mobile catalogue, its move into PC co-op, and what founder Semen
                Kozyura has said about the demo and release.
              </p>

              <h3>Is Dear Passengers an Official Steam Game?</h3>
              <p>
                Yes. The <strong>Dear Passengers game</strong> has an official Steam store page and can be added to a
                wishlist now. The listing names Windows as the operating system and 2026 as the planned release year.
                Its interface table currently includes English, Arabic, Simplified Chinese, Turkish, Ukrainian, and
                Japanese. It has no user reviews because it is unreleased.
              </p>
            </div>
          </div>
        </section>

        <section className="section video-section" id="gameplay">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="kicker">LIVE CABIN FEEDS</span>
                <h2>Dear Passengers Gameplay: How the Airline Co-op Works</h2>
              </div>
              <p>
                Four short Dear Passengers gameplay clips show the tone more clearly than a feature checklist: service tasks collide
                with loose luggage, strange cargo, impatient passengers, and crew improvisation. Together, the clips
                show why the <strong>Dear Passengers game</strong> is built for shared reactions rather than silent,
                perfectly optimized play.
              </p>
            </div>
            <VideoShowcase />
            <OfficialTrailer />
          </div>
        </section>

        <section className="section mechanics-section">
          <div className="container mechanics-grid">
            <article className="feature-card feature-card-wide">
              <span className="card-number">A</span>
              <div>
                <h3>Pilot and Cabin Crew Roles</h3>
                <p>
                  The central idea behind <strong>Dear Passengers game</strong> sessions is role pressure. A pilot must
                  keep the aircraft moving toward its destination while the cabin crew handles everything happening
                  behind the cockpit door. The separation creates useful communication problems: a smooth turn for the
                  pilot may send a service cart across the aisle, while a cabin emergency may demand a maneuver the
                  pilot cannot safely perform.
                </p>
              </div>
            </article>
            <article className="feature-card">
              <span className="card-number">B</span>
              <h3>Passengers, Cargo and Dynamic Weather</h3>
              <p>
                In Dear Passengers, passenger and cargo selection appears to be part of the risk-reward loop. Bigger payouts can bring more
                troublesome loads, while weather adds a second source of instability. The official description names
                turbulence and air pockets, both of which can move passengers, baggage, and anything left unsecured.
              </p>
            </article>
            <article className="feature-card dark-card">
              <span className="card-number">C</span>
              <h3>Physics-Based Chaos and Emergencies</h3>
              <p>
                The <strong>Dear Passengers game</strong> is designed around escalating mishaps rather than perfect
                procedure. A loose object or upset traveler can create a chain reaction, and the crew must invent a
                practical response before the situation becomes worse. That makes communication and quick adaptation
                more important than memorizing a single optimal route.
              </p>
            </article>
          </div>
        </section>

        <section className="section manifest-section" id="multiplayer">
          <div className="container two-column">
            <div className="prose">
              <span className="kicker">CREW MANIFEST</span>
              <h2>Dear Passengers Multiplayer and Player Count</h2>
              <p>
                Steam confirms that the <strong>Dear Passengers game</strong> supports online co-op and single-player.
                Reveal footage clearly shows several people sharing crew duties, but the current store feature panel
                does not publish an official maximum player count. Some coverage interprets the trailer as showing four
                players; until FLEXUS writes that number in an official specification, this guide keeps the maximum
                marked as unconfirmed.
              </p>
              <p>
                The Dear Passengers cockpit-versus-cabin structure gives each participant a responsibility. Matchmaking,
                public lobbies, join-in-progress, and an in-game voice system remain unannounced.
              </p>

              <h3>Can You Play Dear Passengers Solo?</h3>
              <p>
                Steam includes Dear Passengers single-player support. FLEXUS has not explained whether solo players
                switch roles, receive AI assistance, or face simplified problems, so the exact experience remains open.
              </p>

              <h3>Local Co-op, Split Screen and Crossplay Status</h3>
              <p>
                Dear Passengers online co-op is confirmed; local co-op and split screen are not. Steam also does not currently list
                Remote Play Together. With no console edition announced, crossplay is unconfirmed. Controller, Steam
                Deck, VR, and cross-progression details are also open.
              </p>
              <p>
                Our <Link href="/dear-passengers-player-count">Dear Passengers player count guide</Link> tracks the
                official maximum, solo behavior, split screen, crossplay, voice chat, controllers, Steam Deck, VR, and
                lobby questions in one dedicated briefing.
              </p>
              <p>
                To compare cockpit, cabin, cargo, and emergency duties before launch, use the{' '}
                <Link href="/dear-passengers-roles">Dear Passengers roles guide</Link>. Its table separates confirmed
                responsibilities from suggested team assignments and shows why solo suitability remains unresolved.
              </p>
            </div>

            <div className="status-board">
              <div className="board-header"><span>STATUS BOARD</span><b>CONFIRMED VS OPEN</b></div>
              <div className="board-row confirmed"><span>Single-player</span><b>CONFIRMED</b></div>
              <div className="board-row confirmed"><span>Online co-op</span><b>CONFIRMED</b></div>
              <div className="board-row open"><span>Maximum player count</span><b>NOT STATED</b></div>
              <div className="board-row open"><span>Local co-op / split screen</span><b>NOT ANNOUNCED</b></div>
              <div className="board-row open"><span>Crossplay</span><b>NOT ANNOUNCED</b></div>
              <div className="board-row open"><span>Controller / Steam Deck</span><b>NOT ANNOUNCED</b></div>
              <p>Source: current Dear Passengers Steam store feature panel. Checked July 19, 2026.</p>
            </div>
          </div>
        </section>

        <section className="section release-preview">
          <div className="container release-card">
            <div className="release-stamp"><small>PLANNED ARRIVAL</small><strong>2026</strong><span>EXACT DATE PENDING</span></div>
            <div className="prose">
              <span className="kicker">ARRIVALS BOARD</span>
              <h2>Dear Passengers Release Date and Platforms</h2>
              <p>
                The <strong>Dear Passengers game</strong> is scheduled for 2026, but FLEXUS has not announced a month
                or day. The Dear Passengers Windows PC edition through Steam is the only confirmed platform. There is no announced PlayStation 5,
                Xbox Series, Nintendo Switch, Mac, or Linux version, and no public price or preorder option is listed.
              </p>
              <p>
                In a July 17 interview, Kozyura said the team still intends to release Dear Passengers in 2026 but will
                not rush an unpolished build. That statement supports the year shown on Steam without creating a more
                precise launch date.
              </p>
              <p>
                Our <Link href="/dear-passengers-release-date">complete Dear Passengers release date guide</Link>
                separates official facts from open questions, tracks platform status, and explains how to follow demo,
                beta, playtest, language, and Dear Passengers launch updates without relying on rumor pages.
              </p>
              <p>
                FLEXUS has now confirmed that it is preparing a Dear Passengers demo for Gamescom and plans to release
                a public demo later. There is no public download or date yet. Read the{' '}
                <Link href="/dear-passengers-demo">Dear Passengers demo guide</Link> for the complete source-backed status.
              </p>
              <Link className="text-link" href="/dear-passengers-release-date">Open the full release briefing →</Link>
            </div>
          </div>
        </section>

        <section className="section requirements-section" id="requirements">
          <div className="container two-column requirements-grid">
            <div className="prose">
              <span className="kicker">AIRCRAFT REQUIREMENTS</span>
              <h2>Dear Passengers System Requirements and Languages</h2>
              <p>
                The current minimum requirements for the <strong>Dear Passengers game</strong> are modest in storage
                size but call for a dedicated graphics card and DirectX 12. Steam lists Windows 10 64-bit, an Intel Core
                i5 running at 2.5 GHz or an equivalent processor, 8 GB of memory, and either an NVIDIA GTX 1060 or AMD
                RX 6600 XT. The Dear Passengers installation requires 4 GB of available storage.
              </p>
              <p>
                These minimum specifications do not promise a resolution or frame rate. Dear Passengers recommended
                specifications are unannounced, so players with integrated graphics or older hardware should wait for
                testing before judging performance.
              </p>

              <h3>Does Dear Passengers Support Chinese?</h3>
              <p>
                Yes at the interface level. Steam currently lists English, Arabic, Simplified Chinese, Turkish,
                Ukrainian, and Japanese interface support for Dear Passengers. The table does not currently mark full
                audio or subtitles for these languages, so interface availability should not be expanded into a claim
                about voice acting. The Steam language table remains the reliable reference while development continues.
              </p>
              <p>
                For hardware explanations, laptop guidance, and every status that remains open, read the complete{' '}
                <Link href="/dear-passengers-system-requirements">Dear Passengers system requirements guide</Link>.
              </p>
            </div>

            <div className="spec-sheet">
              <div><span>Operating system</span><strong>Windows 10 · 64-bit</strong></div>
              <div><span>Processor</span><strong>Intel Core i5 · 2.5 GHz or equivalent</strong></div>
              <div><span>Memory</span><strong>8 GB RAM</strong></div>
              <div><span>Graphics</span><strong>GTX 1060 / RX 6600 XT</strong></div>
              <div><span>DirectX</span><strong>Version 12</strong></div>
              <div><span>Storage</span><strong>4 GB available space</strong></div>
              <div><span>Interface languages</span><strong>English + 5 more, including Simplified Chinese</strong></div>
            </div>
          </div>
        </section>

        <section className="section wishlist-section">
          <div className="container narrow prose centered-prose">
            <span className="kicker">SAVE YOUR SEAT</span>
            <h2>How to Wishlist the Dear Passengers Game on Steam</h2>
            <p>
              Open the official Steam listing, sign in, and select <em>Add to your wishlist</em>. Steam can then notify
              you when the Dear Passengers release status changes or the game becomes available. Following the Dear Passengers store page is also more
              reliable than copying an unverified countdown because the developer controls the official listing.
            </p>
            <ol className="steps">
              <li><span>01</span><p>Visit the official <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Dear Passengers Steam page</a>.</p></li>
              <li><span>02</span><p>Sign in to the Steam account where you want the launch notification.</p></li>
              <li><span>03</span><p>Select <strong>Add to your wishlist</strong> beneath the game media panel.</p></li>
              <li><span>04</span><p>Recheck the store page for demo, playtest, language, and release updates.</p></li>
            </ol>
          </div>
        </section>

        <SandboxedNativeAd />

        <section className="section release-preview">
          <div className="container release-card">
            <div className="release-stamp"><small>LATEST MILESTONE</small><strong>1M</strong><span>WISHLISTS · 2 DAYS</span></div>
            <div className="prose">
              <span className="kicker">VERIFIED UPDATE DESK</span>
              <h2>Latest Dear Passengers News and Demo Updates</h2>
              <p>
                FLEXUS reports that <strong>Dear Passengers</strong> reached one million Steam wishlists in two days and
                entered Steam&apos;s Top 25 most-wishlisted games. Founder Semen Kozyura told GameDev DOU that the total
                had reached roughly 1.2 million by the time of their July 17 interview. The official one-million
                milestone and attributed interview figure are kept separate because they were recorded at different times.
              </p>
              <p>
                Follow the <Link href="/dear-passengers-news">Dear Passengers news timeline</Link> for dated sources, or
                open the <Link href="/dear-passengers-demo">Dear Passengers demo status page</Link> for Gamescom,
                Playtest, beta, safe-download, and access questions.
              </p>
              <div className="related-actions">
                <Link className="button" href="/dear-passengers-news">Read verified news →</Link>
                <Link className="button button-ghost" href="/dear-passengers-demo">Check demo status →</Link>
                <Link className="button button-ghost" href="/dear-passengers-confirmed-features">Confirmed features →</Link>
                <Link className="button button-ghost" href="/dear-passengers-developer-flexus">Meet FLEXUS →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section similar-section">
          <div className="container">
            <div className="section-heading">
              <span className="kicker">CONNECTING FLIGHTS</span>
              <h2>Games Like Dear Passengers</h2>
              <p>
                The <strong>Dear Passengers game</strong> belongs beside social co-op experiences where communication,
                physical comedy, and failure create the best stories. It remains distinctive by putting that chaos in
                one moving aircraft with separate cockpit and cabin roles.
              </p>
            </div>
            <div className="comparison-grid">
              <article><span>CO-OP PRESSURE</span><h3>Overcooked</h3><p>Clear roles and teamwork under escalating pressure.</p></article>
              <article><span>PHYSICS CHAOS</span><h3>PEAK</h3><p>Movement and mistakes create memorable group moments.</p></article>
              <article><span>CREW MANAGEMENT</span><h3>Spacelines from the Far Out</h3><p>A comedic airline built around needy passengers.</p></article>
              <article><span>VIRAL CO-OP</span><h3>R.E.P.O.</h3><p>Communication and unstable objects drive shared chaos.</p></article>
            </div>
          </div>
        </section>

        <SourceLedger />

        <section className="section faq-section" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro">
              <span className="kicker">PASSENGER QUESTIONS</span>
              <h2>Dear Passengers Game FAQ</h2>
              <p>
                These answers summarize confirmed Dear Passengers information and clearly label details that remain unannounced. For
                launch-specific changes, visit the <Link href="/dear-passengers-release-date">latest Dear Passengers release date updates</Link>.
              </p>
            </div>
            <FAQ items={faqs} />
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <span className="kicker">FINAL BOARDING CALL</span>
            <h2>Follow the Dear Passengers Game Before Takeoff</h2>
            <p>
              Wishlist the <strong>Dear Passengers game</strong> on Steam for official availability updates, then keep
              this independent briefing bookmarked for plain-language coverage of gameplay, multiplayer, platforms,
              system requirements, and launch details.
            </p>
            <div className="hero-actions">
              <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Wishlist on Steam ↗</a>
              <Link className="button button-ghost" href="/dear-passengers-trailer">Watch and inspect the trailer →</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
