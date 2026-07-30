import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SourceLedger from '@/components/SourceLedger';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const TRAILER_URL = 'https://www.youtube.com/watch?v=XRvd_HZesys';
const PAGE_URL = 'https://dearpassengers.net/dear-passengers-gameplay/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Gameplay: How Flying and Cabin Work' },
  description:
    'Explore confirmed Dear Passengers gameplay, including piloting, cabin service, passengers, cargo, weather, physics, solo play, and online co-op.',
  alternates: { canonical: '/dear-passengers-gameplay/', languages: { en: '/dear-passengers-gameplay/', ar: '/ar/dear-passengers-gameplay/', de: '/de/dear-passengers-gameplay/', tr: '/tr/dear-passengers-oynanis/', 'pt-BR': '/pt-br/dear-passengers-como-jogar/', es: '/es/dear-passengers-como-jugar/', 'x-default': '/dear-passengers-gameplay/' } },
  openGraph: {
    title: 'Dear Passengers Gameplay: Pilot, Cabin, Cargo and Chaos',
    description:
      'A source-backed guide to the confirmed Dear Passengers gameplay loop and the mechanics FLEXUS has not explained yet.',
    url: PAGE_URL,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dear Passengers gameplay guide with pilot and cabin crew',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers Gameplay Explained',
    description: 'Piloting, cabin work, passengers, cargo, weather, physics, solo play and online co-op.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'What is the Dear Passengers gameplay loop?',
    answer:
      'Official material establishes a broad loop: choose passengers and cargo before takeoff, divide cockpit and cabin work, deliver passenger service, protect the load, react to weather and physics problems, and try to reach the destination. FLEXUS has not yet published scoring, progression, route length, or failure rules.',
  },
  {
    question: 'Can you fly the plane in Dear Passengers?',
    answer:
      'Yes. Piloting is a confirmed part of Dear Passengers gameplay. The current Steam description says one crew member pilots while the others work inside the cabin, but it does not document instruments, takeoff steps, landing controls, autopilot, or flight-model realism.',
  },
  {
    question: 'What does the cabin crew do?',
    answer:
      'Cabin players serve food and drinks, manage passengers, protect cargo, keep problems from escalating, and react when turbulence or air pockets move people and loose objects. A formal class roster, inventory system, and complete tool list have not been announced.',
  },
  {
    question: 'Can Dear Passengers be played solo?',
    answer:
      'Yes. Steam lists single-player as a supported mode. FLEXUS has not explained how solo Dear Passengers gameplay handles cockpit and cabin duties, so AI crew, role switching, automation, pausing, and difficulty adjustments remain unconfirmed.',
  },
  {
    question: 'Is Dear Passengers a realistic flight simulator?',
    answer:
      'FLEXUS and Steam classify Dear Passengers as an action, adventure, and indie game. Flying is real gameplay, but the public pitch emphasizes social cooperation, physical comedy, difficult passengers, risky cargo, and cascading emergencies rather than verified simulator-level procedures.',
  },
  {
    question: 'Are Dear Passengers controls confirmed?',
    answer:
      'No complete control list is public. Pages that assign specific keyboard, controller, throttle, landing-gear, or emergency inputs are speculating unless they cite a playable build or a new FLEXUS control guide.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers Gameplay: Flying, Cabin Work, Cargo and Weather',
  description: 'A source-backed explanation of the confirmed Dear Passengers gameplay loop.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-07-20',
  dateModified: '2026-07-20',
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
    { '@type': 'ListItem', position: 2, name: 'Dear Passengers Gameplay', item: PAGE_URL },
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

export default function GameplayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <main id="main-content">
        <article>
          <header className="article-hero gameplay-hero">
            <Image
              src="/images/hero-bg.webp"
              alt="Dear Passengers gameplay showing a chaotic aircraft crew"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers Game</Link><span>/</span><span>Gameplay</span>
              </nav>
              <div className="eyebrow"><span>●</span> FLIGHT OPERATIONS · CONFIRMED SYSTEMS ONLY</div>
              <h1>Dear Passengers Gameplay:<br /><em>Fly, Serve and Survive</em></h1>
              <p>
                <strong>Dear Passengers gameplay</strong> connects cockpit decisions with cabin consequences. This
                independent guide explains the confirmed flight loop, passenger service, risky cargo, weather, physics,
                solo mode, and online co-op without inventing controls or progression systems before release.
              </p>
              <div className="hero-actions">
                <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Check official gameplay ↗</a>
                <Link className="button button-ghost" href="/dear-passengers-trailer">Inspect the trailer →</Link>
              </div>
              <div className="status-strip" aria-label="Dear Passengers gameplay status">
                <div><small>PILOTING</small><strong>CONFIRMED</strong></div>
                <div><small>CABIN WORK</small><strong>CONFIRMED</strong></div>
                <div><small>SOLO + ONLINE</small><strong>CONFIRMED</strong></div>
                <div><small>FULL CONTROLS</small><strong>NOT PUBLISHED</strong></div>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>FLIGHT MANUAL</p>
              <a href="#answer">Direct answer</a>
              <a href="#loop">Core gameplay loop</a>
              <a href="#cockpit">Pilot gameplay</a>
              <a href="#cabin">Cabin gameplay</a>
              <a href="#manifest">Passengers and cargo</a>
              <a href="#weather">Weather and physics</a>
              <a href="#modes">Solo and co-op</a>
              <a href="#unknown">Confirmed vs unknown</a>
              <a href="#gameplay-faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam page ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote note="This guide treats Steam and direct FLEXUS publications as confirmation. Trailer scenes support visual observations, but they do not prove a control scheme, final user interface, progression system, mission count, or launch feature unless the developer states it." />

              <section id="answer">
                <span className="kicker">THE SHORT VERSION</span>
                <h2>What Is Dear Passengers Gameplay?</h2>
                <p className="snippet-answer">
                  <strong>Dear Passengers gameplay</strong> is a first-person action-adventure loop about operating an
                  unreliable airline. One crew member flies the aircraft while others serve passengers, protect cargo,
                  and contain emergencies. Before takeoff, the group chooses passengers and cargo with different risks
                  and payouts. In flight, weather, turbulence, air pockets, and physics can turn ordinary work into a
                  shared disaster.
                </p>
                <p>
                  The important idea is connection. Dear Passengers does not present piloting, service, cargo, and
                  weather as isolated minigames. A cockpit correction can move the people and objects behind the pilot.
                  An unresolved cabin problem can force the crew to change priorities while the aircraft is already in
                  trouble. That relationship gives <strong>Dear Passengers gameplay</strong> its cooperative identity.
                </p>
                <p>
                  Steam currently confirms Windows PC, single-player, and online co-op. It also names dynamic weather,
                  turbulence, air pockets, physics-based passengers and cargo, passenger service, and risk-versus-reward
                  manifest choices. Dear Passengers has not launched, so exact controls, route structure, aircraft
                  selection, scoring, upgrades, matchmaking, and maximum crew size remain outside the confirmed record.
                </p>
                <div className="fact-callout">
                  <span>FLIGHT PLAN</span>
                  <strong>Choose trouble, divide work, contain the cascade</strong>
                  <p>The destination is simple. Everything that happens between the terminal and landing is the game.</p>
                </div>
              </section>

              <section id="loop">
                <span className="kicker">FROM GATE TO DESTINATION</span>
                <h2>The Dear Passengers Gameplay Loop</h2>
                <p>
                  The public <strong>Dear Passengers gameplay</strong> description provides a readable sequence even
                  though FLEXUS has not shown every menu. The sequence below is an evidence-based organization of
                  official features, not a claim about final mission screens or mandatory tutorial steps.
                </p>
                <ol className="steps article-steps">
                  <li><span>01</span><p><strong>Build the manifest.</strong> Choose passengers and cargo before takeoff. Higher payouts are associated with people and loads that may be harder to manage.</p></li>
                  <li><span>02</span><p><strong>Divide the crew.</strong> Put one person in the cockpit while the remaining crew prepares to work inside the cabin.</p></li>
                  <li><span>03</span><p><strong>Provide service.</strong> Passengers expect food, drinks, and something resembling a smooth flight.</p></li>
                  <li><span>04</span><p><strong>Protect people and cargo.</strong> Keep difficult travelers and unstable objects from turning a small incident into a larger emergency.</p></li>
                  <li><span>05</span><p><strong>React to the aircraft.</strong> Weather, turbulence, and air pockets alter what the pilot and cabin workers can safely do.</p></li>
                  <li><span>06</span><p><strong>Reach the destination.</strong> Deliver the selected passengers and cargo, preferably in one piece, while preserving as much control as the flight allows.</p></li>
                </ol>
                <p>
                  Risk begins before the plane moves. The manifest appears to function as an informal difficulty choice:
                  safer passengers and cargo may reduce trouble, while more profitable selections create a greater
                  chance of failure. Dear Passengers gameplay therefore starts with judgment rather than reaction.
                </p>
                <p>
                  The official wording does not reveal how earnings are spent, whether contracts unlock routes, how
                  success is graded, or what happens after a failed flight. Those details matter for a complete strategy
                  guide, but publishing them now would turn a reliable <strong>Dear Passengers gameplay guide</strong>
                  into speculation.
                </p>
              </section>

              <section id="cockpit">
                <span className="kicker">COCKPIT STATION</span>
                <h2>Dear Passengers Pilot Gameplay</h2>
                <p>
                  Piloting is one of the clearest confirmed parts of <strong>Dear Passengers gameplay</strong>. Steam
                  says one member of the group flies while the others work inside the cabin. Official footage shows a
                  first-person cockpit perspective and external hazards, but it does not provide a finished control
                  manual or an uninterrupted flight from takeoff to landing.
                </p>
                <p>
                  The pilot matters because aircraft movement affects the rest of the crew. Turbulence and air pockets
                  can move passengers, luggage, cargo, and unsecured cabin equipment. Even when the cockpit avoids a
                  larger hazard, a sharp reaction may create immediate cleanup behind the door. Dear Passengers gameplay
                  turns movement into a team decision rather than a private steering task.
                </p>
                <h3>Is Dear Passengers a Flight Simulator?</h3>
                <p>
                  Calling Dear Passengers a realistic flight simulator would overstate the evidence. Steam categorizes
                  the project as action, adventure, and indie, while the public description emphasizes comedy,
                  cooperation, passenger behavior, dangerous cargo, and physical emergencies. Flying is central, but
                  simulator-level navigation, fuel systems, radio procedure, aerodynamic settings, and cockpit
                  authenticity have not been documented.
                </p>
                <h3>What Pilot Controls Are Confirmed?</h3>
                <p>
                  No complete keyboard, mouse, controller, or flight-stick layout is public. FLEXUS has not explained
                  throttle behavior, pitch and roll inputs, landing gear, autopilot, instrumentation, or accessibility
                  assists. A responsible Dear Passengers gameplay page can confirm that the plane is flyable while
                  leaving individual buttons open until a demo or official manual supplies evidence.
                </p>
              </section>

              <section id="cabin">
                <span className="kicker">BEHIND THE COCKPIT</span>
                <h2>Dear Passengers Cabin Crew Gameplay</h2>
                <p>
                  Cabin work gives <strong>Dear Passengers gameplay</strong> its broadest set of responsibilities.
                  Official text says the crew serves passengers, keeps the cabin together, protects cargo, and handles
                  problems before they become worse. Food and drinks matter, but service operates inside a moving
                  physics environment where the aisle may stop behaving like a safe workspace.
                </p>
                <p>
                  Passengers are not simply background decoration. They are part of the load selected before departure,
                  and some are described as difficult to please. Cargo also has behavior and handling risk. When the
                  aircraft moves, unsecured travelers, luggage, service equipment, and profitable freight may become
                  hazards that compete for the crew&apos;s attention.
                </p>
                <h3>Service, Containment and Emergency Priorities</h3>
                <p>
                  A practical crew may separate routine service from emergency response, but FLEXUS has not confirmed
                  locked classes named flight attendant, cargo specialist, medic, or engineer. Those labels can help
                  friends organize a session; they should not be presented as a formal Dear Passengers gameplay roster.
                  The dedicated <Link href="/dear-passengers-roles">Dear Passengers roles guide</Link> compares that
                  distinction in detail.
                </p>
                <p>
                  The cabin is likely to reward communication because several problems can occur at once. A passenger
                  request may be harmless until turbulence moves a cart, cargo shifts, or another traveler creates a
                  distraction. The published premise is about stopping one problem from becoming a full disaster, so
                  prioritization is more reliable advice than an invented list of optimal items.
                </p>
              </section>

              <section id="manifest">
                <span className="kicker">RISK BEFORE TAKEOFF</span>
                <h2>Passengers, Cargo and Payouts</h2>
                <p>
                  The manifest is a defining Dear Passengers gameplay system. Before departure, the crew chooses who and
                  what comes aboard. FLEXUS directly links larger payouts with more trouble: some cargo is difficult to
                  handle, some passengers are difficult to satisfy, and some flights begin going wrong before leaving
                  the ground.
                </p>
                <p>
                  That wording confirms risk and reward, but it does not publish a passenger catalog, cargo rarity list,
                  economy formula, contract table, or best manifest. Screenshots and trailer scenes may show memorable
                  objects, yet a visible prop is not automatically a permanent item category with known statistics.
                  Dear Passengers gameplay analysis should preserve that difference.
                </p>
                <p>
                  Until a playable build arrives, the safest strategy principle is balance. A new crew could avoid
                  loading every high-risk option at once, assign someone to watch unstable cargo, and warn the pilot
                  when the cabin cannot tolerate another sharp maneuver. These are coordination suggestions based on
                  confirmed systems, not secret Dear Passengers gameplay rules.
                </p>
              </section>

              <section id="weather">
                <span className="kicker">ROUGH AIR AHEAD</span>
                <h2>Weather, Turbulence and Physics</h2>
                <p>
                  Dynamic weather is confirmed. Steam specifically names turbulence and air pockets that can send
                  passengers, luggage, and unsecured objects around the cabin. This means the Dear Passengers gameplay
                  relationship between pilot and cabin is physical: the state of the aircraft changes movement,
                  positioning, and the time available to solve ordinary tasks.
                </p>
                <p>
                  Physics also supports the comedy. A routine object can become the start of a chain reaction, and an
                  improvised response may solve one problem while creating another. Dear Passengers gameplay appears
                  designed to produce stories from those overlapping consequences rather than reward perfect scripted
                  procedure every time.
                </p>
                <p>
                  The current record does not reveal a complete weather list, random-event probability, damage model,
                  difficulty setting, or whether routes have fixed conditions. The{' '}
                  <Link href="/dear-passengers-trailer">Dear Passengers trailer breakdown</Link> labels what can
                  actually be seen and keeps scene interpretation separate from official feature confirmation.
                </p>
              </section>

              <section id="modes">
                <span className="kicker">ONE CREW OR ONE EMPLOYEE</span>
                <h2>Solo and Online Co-op Gameplay</h2>
                <p>
                  Steam lists both single-player and online co-op, so solo Dear Passengers gameplay is officially
                  supported. What solo mode does with a two-location workload is not explained. FLEXUS has not announced
                  AI coworkers, automatic piloting, simplified cabin events, instant role switching, task pausing, or
                  separate solo difficulty rules.
                </p>
                <p>
                  Online Dear Passengers gameplay is the clearer public fantasy. One person can focus on flying while
                  others cover cabin work. The maximum lobby size, matchmaking, invite system, join-in-progress,
                  dedicated servers, server browser, local co-op, split screen, crossplay, and proximity voice chat
                  remain unconfirmed. Steam&apos;s general chat notice does not define a spatial voice system.
                </p>
                <p>
                  Readers looking for mode-by-mode evidence should use the{' '}
                  <Link href="/dear-passengers-player-count">Dear Passengers player count and multiplayer guide</Link>.
                  It tracks each open lobby question without turning trailer headcounts into a promised player limit.
                </p>
              </section>

              <section id="unknown">
                <span className="kicker">EVIDENCE BOARD</span>
                <h2>Confirmed and Unconfirmed Dear Passengers Gameplay</h2>
                <div className="platform-table" role="table" aria-label="Dear Passengers gameplay evidence status">
                  <div className="platform-head" role="row"><span role="columnheader">System</span><span role="columnheader">Status</span><span role="columnheader">Evidence</span></div>
                  <div role="row"><strong role="cell">Dear Passengers piloting and cabin work</strong><span className="status-confirmed" role="cell">Confirmed</span><span role="cell">Steam description</span></div>
                  <div role="row"><strong role="cell">Dear Passengers service and cargo protection</strong><span className="status-confirmed" role="cell">Confirmed</span><span role="cell">Steam features</span></div>
                  <div role="row"><strong role="cell">Dear Passengers weather and turbulence</strong><span className="status-confirmed" role="cell">Confirmed</span><span role="cell">Steam features</span></div>
                  <div role="row"><strong role="cell">Dear Passengers solo and online co-op</strong><span className="status-confirmed" role="cell">Confirmed</span><span role="cell">Steam feature panel</span></div>
                  <div role="row"><strong role="cell">Dear Passengers controls and flight depth</strong><span className="status-open" role="cell">Not published</span><span role="cell">Needs demo or manual</span></div>
                  <div role="row"><strong role="cell">Dear Passengers routes, aircraft and economy</strong><span className="status-open" role="cell">Not published</span><span role="cell">Needs product details</span></div>
                  <div role="row"><strong role="cell">Dear Passengers lobby, voice and crossplay</strong><span className="status-open" role="cell">Not announced</span><span role="cell">Needs FLEXUS confirmation</span></div>
                </div>
                <h3>Dear Passengers Gameplay Questions Still Waiting for Evidence</h3>
                <div className="platform-table" role="table" aria-label="Open Dear Passengers gameplay questions">
                  <div className="platform-head" role="row"><span role="columnheader">Open topic</span><span role="columnheader">Status</span><span role="columnheader">Required update</span></div>
                  <div role="row"><strong role="cell">Dear Passengers campaign</strong><span className="status-open" role="cell">Unknown</span><span role="cell">Campaign description</span></div>
                  <div role="row"><strong role="cell">Dear Passengers mission length</strong><span className="status-open" role="cell">Unknown</span><span role="cell">Playable route details</span></div>
                  <div role="row"><strong role="cell">Dear Passengers aircraft roster</strong><span className="status-open" role="cell">Unknown</span><span role="cell">Vehicle list</span></div>
                  <div role="row"><strong role="cell">Dear Passengers route map</strong><span className="status-open" role="cell">Unknown</span><span role="cell">Destination list</span></div>
                  <div role="row"><strong role="cell">Dear Passengers progression</strong><span className="status-open" role="cell">Unknown</span><span role="cell">Unlock explanation</span></div>
                  <div role="row"><strong role="cell">Dear Passengers payout economy</strong><span className="status-open" role="cell">Unknown</span><span role="cell">Reward breakdown</span></div>
                  <div role="row"><strong role="cell">Dear Passengers difficulty modes</strong><span className="status-open" role="cell">Unknown</span><span role="cell">Settings screen</span></div>
                  <div role="row"><strong role="cell">Dear Passengers accessibility</strong><span className="status-open" role="cell">Unknown</span><span role="cell">Accessibility menu</span></div>
                  <div role="row"><strong role="cell">Dear Passengers mod support</strong><span className="status-open" role="cell">Unknown</span><span role="cell">Developer statement</span></div>
                  <div role="row"><strong role="cell">Dear Passengers Steam Workshop</strong><span className="status-open" role="cell">Unknown</span><span role="cell">Store feature</span></div>
                  <div role="row"><strong role="cell">Dear Passengers achievements</strong><span className="status-open" role="cell">Unknown</span><span role="cell">Steam feature update</span></div>
                  <div role="row"><strong role="cell">Dear Passengers cloud saves</strong><span className="status-open" role="cell">Unknown</span><span role="cell">Steam feature update</span></div>
                  <div role="row"><strong role="cell">Dear Passengers matchmaking</strong><span className="status-open" role="cell">Unknown</span><span role="cell">Lobby demonstration</span></div>
                  <div role="row"><strong role="cell">Dear Passengers join-in-progress</strong><span className="status-open" role="cell">Unknown</span><span role="cell">Multiplayer FAQ</span></div>
                  <div role="row"><strong role="cell">Dear Passengers post-launch roadmap</strong><span className="status-open" role="cell">Unknown</span><span role="cell">FLEXUS roadmap</span></div>
                </div>
                <p>
                  This board is the practical boundary for current Dear Passengers gameplay coverage. The{' '}
                  <Link href="/dear-passengers-confirmed-features">confirmed features guide</Link> maintains the wider
                  release, platform, language, input, demo, and hardware record.
                </p>
              </section>

              <section id="gameplay-faq">
                <span className="kicker">PASSENGER QUESTIONS</span>
                <h2>Dear Passengers Gameplay FAQ</h2>
                <p>
                  These answers reflect official material available on July 20, 2026. Dear Passengers gameplay may
                  become more specific when FLEXUS publishes a public demo, longer uncut footage, or a launch manual.
                </p>
                <FAQ items={faqs} />
              </section>

              <section className="related-guide related-links-panel">
                <span className="kicker">CONTINUE THE FLIGHT</span>
                <h2>Explore the Complete Dear Passengers Briefing</h2>
                <p>
                  Return to the main Dear Passengers game guide, compare crew responsibilities, verify the current player
                  count, or find other cooperative games built around communication and physical failure.
                </p>
                <div className="related-actions">
                  <Link className="button" href="/">Complete game guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-roles">Crew roles →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-player-count">Player count →</Link>
                  <Link className="button button-ghost" href="/games-like-dear-passengers">Similar games →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-demo">Demo status →</Link>
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
