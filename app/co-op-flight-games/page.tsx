import type { Metadata } from 'next';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/co-op-flight-games/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const SPACELINES_URL = 'https://store.steampowered.com/app/1412850/Spacelines_from_the_Far_Out/';
const VTOL_URL = 'https://store.steampowered.com/app/667970/VTOL_VR/';
const DCS_URL = 'https://store.steampowered.com/app/223750/DCS_World/';
const STORMWORKS_URL = 'https://store.steampowered.com/app/573090/Stormworks_Build_and_Rescue/';
const VOID_CREW_URL = 'https://store.steampowered.com/app/1063420/Void_Crew/';
const PULSAR_URL = 'https://store.steampowered.com/app/252870/PULSAR_Lost_Colony/';

export const metadata: Metadata = {
  title: { absolute: 'Co-op Flight Games: 7 Air and Crew Games Compared' },
  description:
    'Compare seven co-op flight games for airline service, shared cockpits, rescue vehicles, VR combat, and spaceship crew roles on PC.',
  keywords: [
    'co-op flight games',
    'coop flight games',
    'airplane co-op games',
    'multiplayer flight games',
    'airline co-op game',
    'flight attendant co-op game',
  ],
  alternates: { canonical: '/co-op-flight-games/', languages: { en: '/co-op-flight-games/', 'x-default': '/co-op-flight-games/' } },
  openGraph: {
    title: 'Co-op Flight Games: Airline, Cockpit and Crew Picks',
    description: 'Seven distinct ways to fly or work as a crew, compared by role depth, vehicle control, co-op mode, and setting.',
    url: PAGE_URL,
    images: [{
      url: '/images/hero-bg.webp',
      width: 1200,
      height: 630,
      alt: 'Co-op flight games route board for airline, cockpit, rescue, and spaceship crew games',
    }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '7 Co-op Flight Games Compared',
    description: 'Airline teamwork, shared cockpits, rescue craft, VR combat, and spaceship crews—without mixing unlike games.',
    images: ['/images/hero-bg.webp'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'What is the best co-op flight game for airline teamwork?',
    answer:
      'Spacelines from the Far Out is the strongest released airline-management choice because it combines passenger needs, ship systems, and online or shared-screen co-op. Dear Passengers is the closer upcoming choice for first-person pilot and cabin roles, but it is not released yet.',
  },
  {
    question: 'Which co-op flight games let two people use the same aircraft?',
    answer:
      'DCS World supports multicrew in compatible aircraft and multiplayer missions. Stormworks also lets friends operate multi-crew vehicles, including aircraft that players build. Check the required DCS module or vehicle setup before expecting every aircraft to support shared stations.',
  },
  {
    question: 'Are there casual airplane co-op games?',
    answer:
      'Spacelines from the Far Out is the most approachable released pick in this comparison. Dear Passengers is positioned as a comedic airline crew game, although its final difficulty and control options cannot be judged until FLEXUS releases a demo or full build.',
  },
  {
    question: 'Which multiplayer flight game is best for VR?',
    answer:
      'VTOL VR is built specifically for virtual reality and supports online cooperative missions as well as PvP. DCS World also supports VR, but its realistic systems and large optional module catalog create a different learning curve.',
  },
  {
    question: 'Can I play Dear Passengers online now?',
    answer:
      'No. Its official Steam page confirms online co-op and a 2026 release window, but the game is not currently available to install. Wishlisting is available; a public demo date and download method have not been announced.',
  },
];

const games = [
  { name: 'Dear Passengers', url: STEAM_URL },
  { name: 'Spacelines from the Far Out', url: SPACELINES_URL },
  { name: 'VTOL VR', url: VTOL_URL },
  { name: 'DCS World Steam Edition', url: DCS_URL },
  { name: 'Stormworks: Build and Rescue', url: STORMWORKS_URL },
  { name: 'Void Crew', url: VOID_CREW_URL },
  { name: 'PULSAR: Lost Colony', url: PULSAR_URL },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Co-op Flight Games: Seven Air, Airline and Crew Games Compared',
  description: 'A source-checked comparison of co-op flight and crew games by setting, shared roles, vehicle control, and current availability.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-09-08',
  dateModified: '2026-09-08',
  inLanguage: 'en',
  author: { '@type': 'Organization', name: 'DearPassengers.net Editorial Team', url: 'https://dearpassengers.net/about/' },
  publisher: {
    '@type': 'Organization',
    name: 'DearPassengers.net',
    url: 'https://dearpassengers.net/',
    logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' },
  },
  image: 'https://dearpassengers.net/images/hero-bg.webp',
  citation: games.map((game) => game.url),
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Co-op flight games',
  numberOfItems: games.length,
  itemListElement: games.map((game, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: game.name,
    url: game.url,
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers Game', item: 'https://dearpassengers.net/' },
    { '@type': 'ListItem', position: 2, name: 'Co-op Flight Games', item: PAGE_URL },
  ],
};

export default function CoopFlightGamesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />

      <main id="main-content" className="flight-category-page">
        <article>
          <header className="article-hero flight-category-hero">
            <div className="flight-radar" aria-hidden="true"><i /><i /><i /></div>
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers Game</Link><span>/</span><span>Co-op Flight Games</span>
              </nav>
              <div className="eyebrow"><span>●</span> FLIGHT OPS DIRECTORY · VERIFIED SEPTEMBER 8, 2026</div>
              <h1>Co-op Flight Games:<br /><em>Find Your Crew Station</em></h1>
              <p>
                The best <strong>co-op flight games</strong> do not all solve the same fantasy. Some split pilot and
                cabin work, some put two operators in one aircraft, and others build a whole crew around a moving
                vehicle. This guide separates those experiences before recommending seven PC games.
              </p>
              <div className="hero-actions">
                <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Wishlist Dear Passengers ↗</a>
                <a className="button button-ghost" href="#comparison">Compare all seven ↓</a>
              </div>
              <div className="flight-index-board" aria-label="Co-op flight games guide summary">
                <div><span>01</span><small>AIRLINE CREW</small><strong>2 PICKS</strong></div>
                <div><span>02</span><small>COCKPIT / AIRCRAFT</small><strong>3 PICKS</strong></div>
                <div><span>03</span><small>SPACE CREW</small><strong>2 PICKS</strong></div>
                <div><span>↗</span><small>PRIMARY SOURCES</small><strong>STEAM CHECKED</strong></div>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>ROUTE SELECTOR</p>
              <a href="#quick-answer">Best quick picks</a>
              <a href="#types">Choose the right type</a>
              <a href="#comparison">Comparison table</a>
              <a href="#airline">Airline crew games</a>
              <a href="#cockpit">Cockpit and aircraft</a>
              <a href="#space">Spaceship crews</a>
              <a href="#method">How we ranked</a>
              <a href="#flight-faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Official game ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote
                checked="September 8, 2026"
                note="Every mode and availability claim below was rechecked against the linked official Steam listing. Store features, platform support, player counts, prices, and release states can change. Dear Passengers remains unreleased, so it is compared from confirmed product information rather than a review build."
              />

              <section id="quick-answer">
                <span className="kicker">THE 30-SECOND CONNECTION</span>
                <h2>Which Co-op Flight Game Should You Play?</h2>
                <p className="snippet-answer">
                  Choose <strong>Spacelines from the Far Out</strong> for a released cooperative airline,{' '}
                  <strong>DCS World</strong> for realistic multicrew aircraft, <strong>VTOL VR</strong> for hands-on VR
                  combat flying, <strong>Stormworks</strong> for buildable multi-crew rescue craft, and{' '}
                  <strong>Void Crew</strong> or <strong>PULSAR</strong> for spaceship stations. Track{' '}
                  <strong>Dear Passengers</strong> if you want a first-person pilot-and-cabin comedy, but it is not
                  playable yet.
                </p>
                <p>
                  That distinction matters because “multiplayer flight game” covers several incompatible expectations.
                  Flying alongside another aircraft is not the same as sharing a cockpit. Sharing a cockpit is not the
                  same as serving passengers while a friend pilots. A spaceship crew can offer excellent role
                  separation without simulating an airplane at all.
                </p>
                <p>
                  This page owns the broader <strong>co-op flight games</strong> category. If your real search is for
                  physics-heavy workplace chaos rather than flying, use our separate{' '}
                  <Link href="/games-like-dear-passengers">games like Dear Passengers comparison</Link>. Keeping those
                  intents separate makes both lists more useful and prevents duplicate recommendations from becoming
                  two versions of the same page.
                </p>
              </section>

              <section id="types">
                <span className="kicker">CHOOSE THE JOB BEFORE THE GAME</span>
                <h2>Three Types of Co-op Flight Games</h2>
                <div className="flight-lane-grid">
                  <article>
                    <span>LANE 01</span><h3>Airline operations</h3>
                    <p>Passengers, service tasks, manifests, emergencies, and a trip that must stay functional.</p>
                    <strong>Dear Passengers · Spacelines</strong>
                  </article>
                  <article>
                    <span>LANE 02</span><h3>Aircraft operations</h3>
                    <p>Hands-on flying, shared stations, coordinated missions, and vehicles that demand practice.</p>
                    <strong>DCS · VTOL VR · Stormworks</strong>
                  </article>
                  <article>
                    <span>LANE 03</span><h3>Ship crew operations</h3>
                    <p>Piloting plus engineering, weapons, navigation, repairs, and fast role communication.</p>
                    <strong>Void Crew · PULSAR</strong>
                  </article>
                </div>
                <p>
                  Airline games are the closest match for players searching for a flight attendant co-op game.
                  Aircraft-operation games are better when the machine itself is the attraction. Space-crew games
                  belong here as adjacent choices because they deliver the strongest station-based teamwork, but the
                  comparison labels them clearly instead of calling them airplane games.
                </p>
              </section>

              <section id="comparison">
                <span className="kicker">DISPATCH BOARD</span>
                <h2>Co-op Flight Games Comparison</h2>
                <div className="role-table-wrap">
                  <table className="role-comparison-table">
                    <caption>Seven flight and crew games compared by co-op structure and current state</caption>
                    <thead><tr><th scope="col">Game</th><th scope="col">Crew model</th><th scope="col">Flight style</th><th scope="col">Official co-op field</th><th scope="col">Best fit</th></tr></thead>
                    <tbody>
                      <tr><th scope="row"><a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Dear Passengers ↗</a></th><td>Pilot plus cabin crew</td><td>First-person comedy airline</td><td><span className="role-status role-suggested">Unreleased · online</span></td><td>Passenger and cabin chaos</td></tr>
                      <tr><th scope="row"><a href={SPACELINES_URL} target="_blank" rel="noopener noreferrer">Spacelines ↗</a></th><td>Shared airline tasks</td><td>Space-airline management</td><td><span className="role-status role-strong">Online + shared screen</span></td><td>Released airline co-op</td></tr>
                      <tr><th scope="row"><a href={DCS_URL} target="_blank" rel="noopener noreferrer">DCS World ↗</a></th><td>Multicrew in supported aircraft</td><td>Realistic military simulation</td><td><span className="role-status role-strong">Online + LAN co-op</span></td><td>Deep shared cockpit</td></tr>
                      <tr><th scope="row"><a href={VTOL_URL} target="_blank" rel="noopener noreferrer">VTOL VR ↗</a></th><td>Pilots in cooperative missions</td><td>Interactive VR combat</td><td><span className="role-status role-strong">Online co-op · VR only</span></td><td>Accessible VR cockpit</td></tr>
                      <tr><th scope="row"><a href={STORMWORKS_URL} target="_blank" rel="noopener noreferrer">Stormworks ↗</a></th><td>Build and operate vehicles</td><td>Air-sea rescue sandbox</td><td><span className="role-status role-strong">Online co-op</span></td><td>Creative multi-crew rescue</td></tr>
                      <tr><th scope="row"><a href={VOID_CREW_URL} target="_blank" rel="noopener noreferrer">Void Crew ↗</a></th><td>Flexible spaceship stations</td><td>First-person space roguelite</td><td><span className="role-status role-strong">1–6 online co-op</span></td><td>Chaotic space missions</td></tr>
                      <tr><th scope="row"><a href={PULSAR_URL} target="_blank" rel="noopener noreferrer">PULSAR ↗</a></th><td>Five named ship roles</td><td>Open-world space simulation</td><td><span className="role-status role-strong">Online co-op</span></td><td>Persistent specialist roles</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  “Official co-op field” records the store feature, not a promise that every vehicle, mission, or
                  module supports every arrangement. DCS multicrew depends on compatible aircraft. Stormworks depends
                  on what the group builds or downloads. VTOL VR requires a VR headset and tracked controllers. Check
                  those practical gates before buying for a specific crew night.
                </p>
              </section>

              <section id="airline">
                <span className="kicker">CABIN SERVICE LANE</span>
                <h2>Airline Co-op Games With Passenger Work</h2>
                <div className="flight-pick-grid">
                  <article>
                    <div className="flight-pick-code">DP<br /><span>2026</span></div>
                    <div><h3>Dear Passengers</h3><p>
                      Dear Passengers is the only entry here built around a first-person split between someone flying
                      the aircraft and friends working inside its cabin. FLEXUS confirms passenger and cargo selection,
                      food and drink service, physical emergencies, dynamic weather, turbulence, single-player, and
                      online co-op. The official Steam page names Windows PC and a broad 2026 window.
                    </p><p>
                      It is an upcoming recommendation, not something to buy or install today. The maximum player count,
                      local co-op, exact controls, price, public demo date, and final progression remain open. Use our{' '}
                      <Link href="/dear-passengers-steam">Steam identity guide</Link> before trusting any download page.
                    </p></div>
                  </article>
                  <article>
                    <div className="flight-pick-code">SF<br /><span>LIVE</span></div>
                    <div><h3>Spacelines from the Far Out</h3><p>
                      Spacelines is the closest released airline co-op game in this group. Its crew manages a
                      retro-futuristic spaceline, responds to ship emergencies, handles independent passenger needs,
                      and upgrades systems across procedurally generated trips. Steam lists online co-op, shared or
                      split-screen co-op, and Remote Play Together.
                    </p><p>
                      The tradeoff is perspective and control. This is a colorful management roguelite rather than a
                      first-person physical cabin attached to a directly controlled conventional airplane. Choose it
                      for service pressure and airline teamwork, not for cockpit realism.
                    </p></div>
                  </article>
                </div>
              </section>

              <section id="cockpit">
                <span className="kicker">COCKPIT AND RESCUE LANE</span>
                <h2>Multiplayer Flight Games for Aircraft Operations</h2>
                <h3>DCS World: Deep Multicrew Simulation</h3>
                <p>
                  DCS World is the strongest choice when “co-op flight” means learning systems and sharing an aircraft.
                  Its official feature list includes online and LAN co-op, VR support, and multicrew network play in the
                  same aircraft. It also offers cooperative PvE servers and a large mission ecosystem.
                </p>
                <p>
                  Depth brings friction. The free core includes a limited starting set, while many aircraft, maps, and
                  campaigns are separate products. Multicrew support is aircraft-specific, so a group should verify the
                  exact module before planning pilot and operator seats. It is a simulation commitment, not a casual
                  passenger-service game.
                </p>
                <h3>VTOL VR: Hands-On Cooperative VR Missions</h3>
                <p>
                  VTOL VR uses tracked controllers to make cockpit switches, buttons, stick, and throttle directly
                  interactive. Steam confirms online co-op and describes both PvP and PvE multiplayer missions. It is
                  a strong middle ground for players who want physical cockpit interaction without assembling a full
                  desk of specialist flight hardware.
                </p>
                <p>
                  It is VR-only and focused on near-future combat aircraft rather than passenger service. Steam
                  confirms cooperative missions but does not use a general shared-cockpit field for the base game, so
                  check the relevant aircraft and mission before assuming that two players occupy the same vehicle.
                </p>
                <h3>Stormworks: Build the Multi-Crew Aircraft</h3>
                <p>
                  Stormworks approaches flight through engineering. Players build programmable vehicles, then use them
                  in a large rescue sandbox across sea, land, and sky. Its official page explicitly supports
                  cooperative multiplayer, multi-crew vehicle operation, and missions that require planning and
                  coordination.
                </p>
                <p>
                  Choose it if designing the aircraft is part of the fun. Helicopters and airplanes share the sandbox
                  with boats, submersibles, trains, and other machines, so it is less focused than a dedicated flight
                  simulator. Workshop content expands the possibilities but also means quality and complexity vary.
                </p>
              </section>

              <section id="space">
                <span className="kicker">ADJACENT CREW LANE</span>
                <h2>Space Crew Games With Pilot and Specialist Roles</h2>
                <p>
                  Space games are included as an honest adjacent category, not disguised as airplane games. They are
                  useful because a spacecraft makes role division explicit: one player steers while others manage
                  weapons, power, repairs, science, or navigation. That structure often produces the communication
                  people actually mean when they search for a co-op crew game.
                </p>
                <h3>Void Crew</h3>
                <p>
                  Void Crew is a first-person cooperative space roguelite for one to six players. Its roles are flexible:
                  a crew powers and outfits a ship, moves between systems, and responds to combat and environmental
                  trouble. Pick it for short, chaotic missions where people can change jobs as the ship&apos;s priorities
                  shift. It is much closer to action-adventure than realistic aviation.
                </p>
                <h3>PULSAR: Lost Colony</h3>
                <p>
                  PULSAR offers the clearest named station model in this comparison: Captain, Pilot, Scientist, Weapons
                  Specialist, and Engineer. The crew explores a randomized galaxy and keeps one ship functioning across
                  a longer open-world structure. Choose it when persistent specialist responsibility matters more than
                  modern presentation or an aircraft setting.
                </p>
              </section>

              <section id="method">
                <span className="kicker">EDITORIAL FLIGHT CHECK</span>
                <h2>How These Co-op Flight Games Were Selected</h2>
                <p>
                  A game qualified by matching at least one of three clear intents: operating an airline together,
                  flying aircraft in cooperative missions, or dividing responsibilities across one moving crewed
                  vehicle. We then checked the current official Steam feature panel and product description for co-op
                  support, platform, role claims, and release state.
                </p>
                <p>
                  We did not rank by current review score, sale price, or raw popularity because those values change and
                  do not answer the user&apos;s intended role. We also excluded games that merely show aircraft while the
                  actual cooperative work happens elsewhere. The ordering moves from the closest airline match to
                  increasingly adjacent crew structures rather than claiming one universal winner.
                </p>
                <p>
                  For Dear Passengers specifically, our <Link href="/dear-passengers-gameplay">gameplay guide</Link>,{' '}
                  <Link href="/dear-passengers-roles">crew roles briefing</Link>, and{' '}
                  <Link href="/dear-passengers-player-count">multiplayer status page</Link> maintain the underlying
                  evidence. This category page links to those specialist owners instead of duplicating uncertain details.
                </p>
              </section>

              <section id="flight-faq">
                <span className="kicker">DISPATCH QUESTIONS</span>
                <h2>Co-op Flight Games FAQ</h2>
                <p>
                  The answers below distinguish airline service, shared-aircraft simulation, VR missions, and
                  spaceship crews. Recheck the linked first-party store before purchasing a module or organizing a
                  group around a specific feature.
                </p>
                <FAQ items={faqs} />
              </section>

              <section className="related-guide related-links-panel flight-related-guide">
                <span className="kicker">BUILD YOUR CREW MANIFEST</span>
                <h2>Continue From Category to Game Details</h2>
                <p>
                  Compare broader co-op alternatives, understand Dear Passengers&apos; confirmed flight loop, verify the
                  official Steam record, or check which crew jobs FLEXUS has actually described.
                </p>
                <div className="related-actions">
                  <Link className="button" href="/games-like-dear-passengers">More similar games →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-gameplay">Gameplay guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-roles">Crew roles →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-platforms">Platform status →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-steam">Steam verification →</Link>
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
