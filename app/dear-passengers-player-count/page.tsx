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
const PAGE_URL = 'https://dearpassengers.net/dear-passengers-player-count/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Player Count: Multiplayer & Solo Guide' },
  description:
    'Check the Dear Passengers player count, online co-op and solo support, plus split screen, crossplay, controllers, voice chat, VR, and lobby status today.',
  alternates: { canonical: '/dear-passengers-player-count' },
  openGraph: {
    title: 'Dear Passengers Player Count and Multiplayer Status',
    description:
      'What Steam confirms about solo and online co-op, what the trailer shows, and which multiplayer features remain unannounced.',
    url: PAGE_URL,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dear Passengers player count and multiplayer guide',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers Player Count: Co-op and Solo Guide',
    description: 'The confirmed play modes and every open multiplayer question in one sourced guide.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'What is the Dear Passengers player count?',
    answer:
      'FLEXUS has not published an official maximum Dear Passengers player count. Steam confirms online co-op and single-player, while the announcement footage shows several crew members. Any precise lobby limit should remain labeled unconfirmed until it appears in a first-party specification.',
  },
  {
    question: 'Is Dear Passengers multiplayer?',
    answer:
      'Yes. The official Steam feature panel lists Dear Passengers online co-op. Players divide work between flying the plane and managing the cabin, passengers, cargo, service, weather, and emergencies.',
  },
  {
    question: 'Can you play Dear Passengers solo?',
    answer:
      'Yes at the store-feature level. Steam lists Single-player, but FLEXUS has not explained whether solo sessions use AI crew, role switching, simplified objectives, or another system for managing the aircraft and cabin.',
  },
  {
    question: 'Does Dear Passengers have local co-op or split screen?',
    answer:
      'Local co-op and split screen are not currently listed. Steam confirms online co-op but does not display Shared/Split Screen Co-op or Remote Play Together for Dear Passengers.',
  },
  {
    question: 'Will Dear Passengers support crossplay?',
    answer:
      'Crossplay has not been announced. Windows PC through Steam is the only confirmed platform, so there is no second confirmed platform with which to establish cross-platform multiplayer.',
  },
  {
    question: 'Does Dear Passengers have proximity voice chat?',
    answer:
      'Some editorial coverage describes proximity voice chat, but the official Steam page does not currently list or explain an in-game voice system. This guide therefore keeps Dear Passengers voice chat marked as unconfirmed.',
  },
  {
    question: 'Does Dear Passengers support controllers, Steam Deck, or VR?',
    answer:
      'Controller support, Steam Deck compatibility, and VR support have not been confirmed in the current Steam feature panel. Community requests show interest, but requests are not product announcements.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers Player Count: Co-op, Solo and Multiplayer Guide',
  description:
    'A sourced guide to the confirmed Dear Passengers play modes and unannounced multiplayer features.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-07-15',
  dateModified: '2026-07-17',
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
    { '@type': 'ListItem', position: 2, name: 'Dear Passengers Player Count', item: PAGE_URL },
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

export default function PlayerCountPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <main id="main-content">
        <article>
          <header className="article-hero multiplayer-hero">
            <Image
              src="/images/hero-bg.webp"
              alt="Dear Passengers crew working together for the multiplayer player count guide"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers Game</Link><span>/</span><span>Player Count</span>
              </nav>
              <div className="eyebrow"><span>●</span> CREW MANIFEST · VERIFIED AGAINST STEAM</div>
              <h1>Dear Passengers Player Count:<br /><em>Co-op and Solo Guide</em></h1>
              <p>
                The official <strong>Dear Passengers player count</strong> does not yet include a published maximum.
                Steam confirms that Dear Passengers supports online co-op and single-player, while FLEXUS has not
                specified the lobby limit, split screen, crossplay, controller support, Steam Deck status, VR, or an
                in-game voice system. This guide keeps those answers separate from trailer guesses.
              </p>
              <div className="hero-actions">
                <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Check Steam ↗</a>
                <Link className="button button-ghost" href="/dear-passengers-release-date">Check the release date →</Link>
              </div>
              <div className="status-strip" aria-label="Dear Passengers multiplayer summary">
                <div><small>ONLINE CO-OP</small><strong>CONFIRMED</strong></div>
                <div><small>SINGLE-PLAYER</small><strong>CONFIRMED</strong></div>
                <div><small>MAXIMUM PLAYERS</small><strong>NOT STATED</strong></div>
                <div><small>SPLIT SCREEN</small><strong>NOT LISTED</strong></div>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>IN THIS BRIEFING</p>
              <a href="#answer">Direct answer</a>
              <a href="#confirmed">Confirmed modes</a>
              <a href="#roles">Crew roles</a>
              <a href="#local">Local and crossplay</a>
              <a href="#voice">Voice, lobbies and VR</a>
              <a href="#questions">Player questions</a>
              <a href="#player-faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam page ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote note="Player-count claims use Steam as the baseline; trailer footage and community requests are labeled separately." />

              <section id="answer">
                <span className="kicker">DIRECT ANSWER</span>
                <h2>How Many Players Can Play Dear Passengers?</h2>
                <p className="snippet-answer">
                  The maximum <strong>Dear Passengers player count</strong> is not officially stated. Steam lists
                  single-player and online co-op, and the Dear Passengers trailer shows multiple crew members sharing
                  duties. Until FLEXUS publishes a lobby limit in an official store field, announcement, or FAQ, a
                  precise number should be treated as an observation rather than a confirmed specification.
                </p>
                <p>
                  That distinction matters because reveal footage is edited to communicate a concept, not to document
                  every networking rule. A scene may show several Dear Passengers characters without proving the minimum
                  crew size, maximum lobby capacity, or whether every visible character is controlled by a different
                  player. Media coverage sometimes describes the footage as a four-person session, but FLEXUS has not
                  placed that number in the official Dear Passengers feature list.
                </p>
                <p>
                  The safest current answer is therefore simple: Dear Passengers is a multiplayer co-op game that also
                  lists solo support, but the final Dear Passengers player count remains open. This page will replace
                  “not stated” with a number only when a first-party source provides one.
                </p>

                <div className="fact-callout">
                  <span>CURRENT STATUS</span>
                  <strong>Online co-op confirmed · maximum open</strong>
                  <p>Steam is authoritative for the current play-mode fields; trailer interpretation is secondary.</p>
                </div>
              </section>

              <section id="confirmed">
                <span className="kicker">OFFICIAL FEATURE PANEL</span>
                <h2>Is Dear Passengers Multiplayer or Single-Player?</h2>
                <p>
                  Dear Passengers is both. The current Steam page lists <strong>Online Co-op</strong> and
                  <strong> Single-player</strong>, giving the Dear Passengers game two confirmed ways to enter a flight.
                  Family Sharing also appears in the feature panel, but Family Sharing is not a multiplayer mode and
                  does not mean two people can play simultaneously from one shared copy.
                </p>
                <p>
                  Online co-op is central to the premise. One Dear Passengers crew member can focus on the cockpit while
                  other players work in the cabin, serve passengers, manage cargo, and respond to emergencies. The
                  official description emphasizes playing with friends, but it does not state whether Dear Passengers
                  includes public matchmaking, invite-only rooms, a server browser, quick play, or join-in-progress.
                </p>

                <div className="platform-table player-table" role="table" aria-label="Dear Passengers player mode status">
                  <div className="platform-head" role="row"><span role="columnheader">Feature</span><span role="columnheader">Status</span><span role="columnheader">Evidence</span></div>
                  <div role="row"><strong role="cell">Single-player</strong><span className="status-confirmed" role="cell">Confirmed</span><span role="cell">Steam feature panel</span></div>
                  <div role="row"><strong role="cell">Online co-op</strong><span className="status-confirmed" role="cell">Confirmed</span><span role="cell">Steam feature panel</span></div>
                  <div role="row"><strong role="cell">Maximum players</strong><span className="status-open" role="cell">Not stated</span><span role="cell">No official number</span></div>
                  <div role="row"><strong role="cell">Public matchmaking</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No official lobby details</span></div>
                  <div role="row"><strong role="cell">Server browser</strong><span className="status-open" role="cell">Not announced</span><span role="cell">Community request only</span></div>
                </div>

                <h3>Can You Play Dear Passengers Alone?</h3>
                <p>
                  Yes at the listing level. Steam’s Single-player label confirms that Dear Passengers is not officially
                  co-op-only. The unresolved question is how one player handles work that the multiplayer design divides
                  between cockpit and cabin. FLEXUS has not shown whether Dear Passengers solo play uses AI teammates,
                  role switching, paused commands, automated flight controls, or reduced task pressure.
                </p>
                <p>
                  Players interested mainly in solo Dear Passengers sessions should wait for a longer demonstration or
                  public test before assuming the experience mirrors online co-op. A store tag confirms availability,
                  but it does not explain balance, difficulty scaling, mission pacing, or how absent crew positions are
                  replaced.
                </p>
              </section>

              <section id="roles">
                <span className="kicker">DIVIDED CREW DUTIES</span>
                <h2>How Does Dear Passengers Co-op Work?</h2>
                <p>
                  The Dear Passengers co-op structure separates responsibility across one moving aircraft. The official
                  description says one person pilots while the others keep the cabin together, serve passengers, and
                  handle problems before they become worse. This division gives Dear Passengers its multiplayer tension:
                  an action that helps the pilot may create chaos for everyone working behind the cockpit.
                </p>
                <p>
                  Before takeoff, Dear Passengers players choose passengers and cargo. Higher-paying choices can bring
                  harder complications. Once airborne, weather, turbulence, and air pockets can move loose people and
                  objects through the cabin. The Dear Passengers crew must protect cargo, maintain service, manage
                  disruptive passengers, and stop one failure from triggering another.
                </p>

                <h3>Pilot Responsibilities</h3>
                <p>
                  The pilot keeps the Dear Passengers aircraft moving toward its destination while reacting to weather
                  and emergencies. The store description does not yet document flight controls, navigation complexity,
                  takeoff procedure, landing difficulty, or whether more than one player can work in the cockpit. Those
                  questions should remain separate from the confirmed fact that a pilot role exists.
                </p>

                <h3>Cabin Crew Responsibilities</h3>
                <p>
                  The cabin side of Dear Passengers includes passenger service, cargo protection, loose-object control,
                  and emergency response. Official footage also shows exaggerated situations such as exterior repairs
                  and dangerous cargo. These scenes explain why additional Dear Passengers crew members are useful, but
                  they still do not establish the maximum supported player count.
                </p>
                <p>
                  For a broader explanation of hazards, requirements, and the overall loop, visit the{' '}
                  <Link href="/#gameplay">Dear Passengers gameplay guide</Link>. For timing, pricing, and platform
                  availability, use the <Link href="/dear-passengers-release-date">Dear Passengers release-date guide</Link>.
                </p>
                <p>
                  Our dedicated <Link href="/dear-passengers-roles">Dear Passengers roles comparison</Link> places the
                  pilot, possible co-pilot, cabin service, cargo, and emergency duties in one table, including the
                  current evidence for solo and online co-op suitability.
                </p>
              </section>

              <section id="local">
                <span className="kicker">SHARED CABIN STATUS</span>
                <h2>Does Dear Passengers Have Local Co-op or Split Screen?</h2>
                <p>
                  Dear Passengers local co-op is not currently confirmed. The Steam page lists Online Co-op but does not
                  show Shared/Split Screen Co-op, Shared/Split Screen PvP, or Remote Play Together. That means the current
                  Dear Passengers evidence supports online sessions, not several people playing from one screen.
                </p>
                <p>
                  A missing Steam field is not proof that split screen can never arrive. Features can be added during
                  development. Until that happens, however, guides should not convert the game’s social tone into an
                  assumption about couch play. Players planning one-device Dear Passengers sessions should keep the
                  feature marked unannounced.
                </p>

                <h3>Will Dear Passengers Support Crossplay?</h3>
                <p>
                  Dear Passengers crossplay is also unconfirmed. Windows PC through Steam is the only announced platform,
                  so there is no second confirmed ecosystem with which to establish cross-platform play. PlayStation,
                  Xbox, Nintendo, Mac, and Linux versions do not currently have official store pages.
                </p>
                <p>
                  If FLEXUS later announces another Dear Passengers platform, crossplay will still require its own
                  confirmation. A console port and cross-platform networking are separate decisions. The release guide
                  tracks each <Link href="/dear-passengers-release-date#platforms">Dear Passengers platform status</Link>
                  without treating controller-friendly footage as evidence of a console edition.
                </p>
              </section>

              <section id="voice">
                <span className="kicker">OPEN COMMUNICATION QUESTIONS</span>
                <h2>Voice Chat, Controllers, Steam Deck and VR</h2>
                <p>
                  Some news coverage describes Dear Passengers as having proximity voice chat. The current Steam page,
                  however, does not list or explain an integrated voice system. Until FLEXUS confirms the feature, this
                  site treats Dear Passengers proximity chat as a reported interpretation rather than an official
                  specification. Players can still use external voice tools, but that is different from built-in audio.
                </p>

                <h3>Controller and Steam Deck Status</h3>
                <p>
                  Dear Passengers controller support has not been added to the visible Steam feature panel. The page also
                  has no Steam Deck compatibility rating. Keyboard-and-mouse PC requirements do not prove controller
                  exclusion, just as controller-looking gameplay does not prove complete support. Dear Passengers input
                  details should remain open until Steam lists them or FLEXUS demonstrates the controls directly.
                </p>

                <h3>VR Support and Server Browser</h3>
                <p>
                  Dear Passengers VR support is not announced, and the store page does not list a VR-only or VR-supported
                  mode. A Dear Passengers server browser is also unconfirmed. Both subjects appear in community requests,
                  which demonstrates player interest but not implementation. The same standard applies to dedicated
                  servers, private rooms, region selection, host migration, and join-in-progress.
                </p>
              </section>

              <section id="questions">
                <span className="kicker">LIVE DEMAND SIGNALS</span>
                <h2>What Dear Passengers Players Are Asking For</h2>
                <p>
                  Early Steam Community topics repeatedly ask about the Dear Passengers player count, solo access, beta
                  testing, split screen, controller support, VR, localization, Discord, release timing, and a server
                  browser. These questions show what information is missing from the current Dear Passengers listing.
                  They do not establish that any requested feature is planned.
                </p>
                <p>
                  This distinction lets the site respond quickly without publishing rumor as fact. A new Dear Passengers
                  store field, official FAQ, developer reply, or playtest description can change the relevant status.
                  Anonymous comments, reposts, and repeated requests cannot. Readers can inspect the{' '}
                  <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer">Dear Passengers Steam discussions</a>
                  {' '}and compare them with the official store page.
                </p>

                <h3>How This Page Will Be Updated</h3>
                <ol className="steps article-steps">
                  <li><span>01</span><p>Check the official Dear Passengers Steam feature panel and About section.</p></li>
                  <li><span>02</span><p>Review new FLEXUS announcements for a stated maximum Dear Passengers player count.</p></li>
                  <li><span>03</span><p>Separate confirmed features from footage observations and community requests.</p></li>
                  <li><span>04</span><p>Update the visible verification date, table, FAQ, and structured data together.</p></li>
                  <li><span>05</span><p>Link the change to the release guide when it affects launch or platform expectations.</p></li>
                </ol>
              </section>

              <section id="player-faq">
                <span className="kicker">CREW QUESTIONS</span>
                <h2>Dear Passengers Player Count FAQ</h2>
                <p>
                  These answers use the official Steam listing as the baseline. Dear Passengers community discussion
                  helps prioritize the questions, while unannounced details remain clearly marked until FLEXUS provides
                  a direct answer.
                </p>
                <FAQ items={faqs} />
              </section>

              <section className="related-guide related-links-panel">
                <span className="kicker">CONTINUE YOUR BRIEFING</span>
                <h2>Explore More Dear Passengers Guides</h2>
                <p>
                  Return to the <Link href="/">complete Dear Passengers game guide</Link> for gameplay clips, system
                  requirements, language status, and the verified feature overview. Use the{' '}
                  <Link href="/dear-passengers-release-date">Dear Passengers release-date guide</Link> for timing,
                  price and platforms. The <Link href="/dear-passengers-demo">Dear Passengers demo guide</Link> tracks
                  the confirmed Gamescom build and later public demo, which may provide the first direct crew-size evidence.
                </p>
                <div className="related-actions">
                  <Link className="button" href="/">Full game guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-gameplay">Gameplay guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-roles">Roles guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-release-date">Release guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-demo">Demo guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-news">Latest news →</Link>
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
