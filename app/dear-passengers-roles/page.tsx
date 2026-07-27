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
const PAGE_URL = 'https://dearpassengers.net/dear-passengers-roles/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Roles: Pilot and Cabin Crew Guide' },
  description:
    'Compare Dear Passengers roles, including pilot, cabin crew, cargo and support duties, with clear solo and online co-op suitability notes before release.',
  alternates: { canonical: '/dear-passengers-roles/', languages: { en: '/dear-passengers-roles/', ar: '/ar/dear-passengers-roles/', de: '/de/dear-passengers-rollen/', tr: '/tr/dear-passengers-rolleri/', 'x-default': '/dear-passengers-roles/' } },
  openGraph: {
    title: 'Dear Passengers Roles: Pilot and Cabin Crew Compared',
    description:
      'A source-labeled comparison of cockpit, cabin, cargo and emergency duties, including what may suit solo play or online co-op.',
    url: PAGE_URL,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dear Passengers roles and crew comparison guide',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers Roles: Pilot and Cabin Crew Guide',
    description: 'Compare confirmed crew duties and provisional solo or co-op fit before Dear Passengers launches.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'What roles are confirmed in Dear Passengers?',
    answer:
      'The official Steam description confirms that one crew member pilots the plane while other players work inside the cabin, serve passengers, manage problems, protect cargo, and respond to chaos. FLEXUS has not published a fixed class list or formal role-selection screen.',
  },
  {
    question: 'Is there a co-pilot role in Dear Passengers?',
    answer:
      'A separate co-pilot class has not been officially confirmed. A second player may be able to help in the cockpit, but the current Steam listing does not describe two-seat cockpit controls, shared instruments, or a dedicated co-pilot assignment.',
  },
  {
    question: 'Which Dear Passengers role is best for solo play?',
    answer:
      'No role can be ranked as the definitive best solo choice yet. Steam confirms single-player, but FLEXUS has not explained AI crew, task automation, role switching, or how one player covers both cockpit and cabin work.',
  },
  {
    question: 'Which role is best for Dear Passengers online co-op?',
    answer:
      'The official premise makes both pilot and cabin work important. A calm player may prefer the cockpit, while players who enjoy movement, service, cargo, and rapid emergency response may prefer cabin duties. The best crew will divide responsibilities and communicate before hazards overlap.',
  },
  {
    question: 'Are cargo handler and emergency responder official classes?',
    answer:
      'No formal classes with those names have been announced. Cargo protection and emergency response are confirmed activities, so this guide uses those labels as practical team assignments rather than selectable character classes.',
  },
  {
    question: 'Can players switch roles during a flight?',
    answer:
      'Role switching has not been explained. Official material establishes cockpit and cabin responsibilities but does not confirm locked assignments, mid-flight seat changes, respawning, or whether any crew member can operate every interaction.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers Roles: Pilot, Cabin Crew and Co-op Guide',
  description:
    'A source-labeled comparison of Dear Passengers cockpit, cabin, cargo and emergency responsibilities.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-07-17',
  dateModified: '2026-07-17',
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
    { '@type': 'ListItem', position: 2, name: 'Dear Passengers Roles', item: PAGE_URL },
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

export default function RolesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <main id="main-content">
        <article>
          <header className="article-hero roles-hero">
            <Image
              src="/images/hero-bg.webp"
              alt="Dear Passengers crew roles inside a chaotic passenger aircraft"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers Game</Link><span>/</span><span>Roles Guide</span>
              </nav>
              <div className="eyebrow"><span>●</span> CREW ASSIGNMENT · CONFIRMED DUTIES VS OPEN QUESTIONS</div>
              <h1>Dear Passengers Roles:<br /><em>Pilot and Cabin Crew Guide</em></h1>
              <p>
                This <strong>Dear Passengers roles</strong> guide compares the pilot, possible co-pilot, cabin service,
                cargo, and emergency-response responsibilities visible in official material. It also shows which duties
                appear naturally suited to online co-op and why no role can yet be called the best solo choice.
              </p>
              <div className="hero-actions">
                <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Check official roles ↗</a>
                <Link className="button button-ghost" href="/dear-passengers-player-count">Multiplayer status →</Link>
              </div>
              <div className="status-strip" aria-label="Dear Passengers roles summary">
                <div><small>PILOT DUTY</small><strong>CONFIRMED</strong></div>
                <div><small>CABIN DUTIES</small><strong>CONFIRMED</strong></div>
                <div><small>CO-PILOT CLASS</small><strong>NOT CONFIRMED</strong></div>
                <div><small>SOLO ROLE SYSTEM</small><strong>NOT EXPLAINED</strong></div>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>CREW BRIEFING</p>
              <a href="#comparison">Role comparison</a>
              <a href="#confirmed">What is confirmed</a>
              <a href="#pilot">Pilot</a>
              <a href="#copilot">Co-pilot status</a>
              <a href="#cabin">Cabin crew</a>
              <a href="#solo-coop">Solo vs co-op</a>
              <a href="#coordination">Crew coordination</a>
              <a href="#roles-faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam page ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote note="Official material confirms broad cockpit and cabin duties, not a fixed class roster. Co-pilot, cargo specialist, cabin lead, and emergency responder are labeled as possible team assignments unless FLEXUS confirms them as selectable roles." />

              <section id="comparison">
                <span className="kicker">AT-A-GLANCE COMPARISON</span>
                <h2>Dear Passengers Roles Comparison Table</h2>
                <p className="snippet-answer">
                  The confirmed <strong>Dear Passengers roles</strong> structure has one player piloting while the
                  remaining crew works inside the cabin. Pilot and cabin work are official responsibilities. Co-pilot,
                  cabin lead, cargo specialist, and emergency responder are useful planning labels, but FLEXUS has not
                  confirmed them as locked classes or separate character selections.
                </p>
                <p>
                  The table below separates evidence from recommendation. “Confirmed duty” means the activity appears
                  in the official Steam description or key-features list. “Suggested assignment” means the activity is
                  real, but the role name is our practical way to help a group divide work. A solo rating stays
                  “unclear” because single-player is listed without an explanation of AI, automation, or role switching.
                </p>

                <div className="role-table-wrap">
                  <table className="role-comparison-table">
                    <caption>Dear Passengers roles, responsibilities, evidence, and provisional mode fit</caption>
                    <thead>
                      <tr>
                        <th scope="col">Role or assignment</th>
                        <th scope="col">Main responsibilities</th>
                        <th scope="col">Official status</th>
                        <th scope="col">Solo fit</th>
                        <th scope="col">Online co-op fit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Pilot</th>
                        <td>Fly the aircraft and react to weather, turbulence, and air pockets.</td>
                        <td><span className="role-status role-confirmed">Confirmed duty</span></td>
                        <td><span className="role-status role-unknown">Unclear</span></td>
                        <td><span className="role-status role-strong">Core</span></td>
                      </tr>
                      <tr>
                        <th scope="row">Co-pilot / cockpit support</th>
                        <td>Potentially share instruments, warnings, or cockpit workload.</td>
                        <td><span className="role-status role-unknown">Not confirmed</span></td>
                        <td><span className="role-status role-unknown">Unclear</span></td>
                        <td><span className="role-status role-unknown">Possible</span></td>
                      </tr>
                      <tr>
                        <th scope="row">Cabin service crew</th>
                        <td>Serve food and drinks, monitor passengers, and keep the aisle workable.</td>
                        <td><span className="role-status role-confirmed">Confirmed duty</span></td>
                        <td><span className="role-status role-unknown">Unclear</span></td>
                        <td><span className="role-status role-strong">Core</span></td>
                      </tr>
                      <tr>
                        <th scope="row">Cargo specialist</th>
                        <td>Protect risky cargo, control loose objects, and report containment problems.</td>
                        <td><span className="role-status role-suggested">Suggested assignment</span></td>
                        <td><span className="role-status role-unknown">Unclear</span></td>
                        <td><span className="role-status role-strong">Strong</span></td>
                      </tr>
                      <tr>
                        <th scope="row">Emergency responder</th>
                        <td>Leave routine work to handle the most urgent cabin problem.</td>
                        <td><span className="role-status role-suggested">Suggested assignment</span></td>
                        <td><span className="role-status role-unknown">Unclear</span></td>
                        <td><span className="role-status role-strong">Strong</span></td>
                      </tr>
                      <tr>
                        <th scope="row">Flexible support</th>
                        <td>Move between service, cargo, and emergency tasks as priorities change.</td>
                        <td><span className="role-status role-suggested">Suggested assignment</span></td>
                        <td><span className="role-status role-unknown">Unclear</span></td>
                        <td><span className="role-status role-strong">Strong</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="fact-callout">
                  <span>THE SAFE PRE-LAUNCH CONCLUSION</span>
                  <strong>Choose a work style, not a promised class</strong>
                  <p>Expect cockpit and cabin duties; wait for FLEXUS to confirm formal classes and solo automation.</p>
                </div>
              </section>

              <section id="confirmed">
                <span className="kicker">OFFICIAL BASELINE</span>
                <h2>Which Dear Passengers Roles Are Officially Confirmed?</h2>
                <p>
                  FLEXUS currently describes two broad places to work: pilot the plane or work inside the cabin. The
                  Steam page says one member of the group pilots while the others keep the cabin together, serve
                  passengers, and deal with problems. Its feature list also names physics-based passengers and cargo,
                  dynamic weather, turbulence, air pockets, risky passengers, and high-paying cargo.
                </p>
                <p>
                  Those statements confirm responsibilities, not a class system. The current Dear Passengers roles
                  evidence does not reveal a character-select screen, skill tree, loadout, progression bonus, exclusive
                  tool set, or rule that permanently locks a player to one station. It is therefore accurate to discuss
                  a pilot and cabin workers, but premature to publish a long roster of official jobs.
                </p>
                <p>
                  This distinction is useful before launch. If FLEXUS later introduces formal titles, this guide can
                  replace the planning labels with the exact in-game names. Until then, readers can use the table to
                  understand likely teamwork without confusing an editorial recommendation with a product feature.
                </p>
              </section>

              <section id="pilot">
                <span className="kicker">COCKPIT STATION</span>
                <h2>What Does the Pilot Do in Dear Passengers?</h2>
                <p>
                  The pilot is the clearest of the Dear Passengers roles because the official description explicitly
                  states that one player pilots the aircraft. Dynamic weather, turbulence, and air pockets mean the
                  cockpit player’s decisions can affect everyone behind them. A sudden movement may keep the aircraft
                  away from danger while simultaneously turning unsecured luggage and service items into cabin hazards.
                </p>
                <p>
                  Official material does not yet document the control depth. There is no verified list of instruments,
                  navigation systems, takeoff steps, landing procedures, autopilot settings, or failure modes. Players
                  should not assume a realistic flight simulator or a simple arcade steering model until FLEXUS
                  demonstrates a longer uninterrupted session.
                </p>
                <h3>Who May Enjoy the Pilot Responsibility?</h3>
                <p>
                  Based on the confirmed co-op premise, the cockpit may appeal to someone who stays calm, communicates
                  early, and prefers a more stationary responsibility. That is a play-style recommendation, not a
                  difficulty rating. We do not yet know whether piloting demands constant attention, how forgiving the
                  controls are, or whether another player can temporarily take over.
                </p>
                <p>
                  In online co-op, the pilot should be treated as a communication hub. Calling out rough weather before
                  a sharp correction gives cabin players time to secure themselves, passengers, and loose cargo. The
                  exact voice and ping tools remain unconfirmed, so groups may need an external voice channel.
                </p>
              </section>

              <section id="copilot">
                <span className="kicker">OPEN COCKPIT QUESTION</span>
                <h2>Does Dear Passengers Have a Co-pilot Role?</h2>
                <p>
                  A dedicated co-pilot role is not confirmed. The official wording uses the singular idea that one
                  person pilots while the others work in the cabin. That does not prove a second cockpit seat is
                  unusable, but it also does not establish shared controls, separate instrument duties, or a formal
                  first-officer class.
                </p>
                <p>
                  For now, “co-pilot” belongs in the open-question column of any Dear Passengers roles comparison. If
                  future footage shows a second player operating cockpit equipment, the role could become useful for
                  navigation, warnings, system checks, or relief. None of those mechanics should be presented as
                  confirmed today.
                </p>
                <h3>How Should a Group Plan Around This Unknown?</h3>
                <p>
                  Do not reserve a permanent co-pilot slot before launch. Build the group around one known cockpit
                  operator and flexible cabin coverage. If a demo reveals shared cockpit work, a flexible support player
                  can move forward and test it without leaving the cabin plan dependent on an unverified feature.
                </p>
              </section>

              <section id="cabin">
                <span className="kicker">CABIN WORK</span>
                <h2>Cabin Crew, Cargo and Emergency Responsibilities</h2>
                <p>
                  Cabin work is the broadest confirmed side of Dear Passengers roles. The crew serves passengers, keeps
                  the cabin together, protects cargo, and responds when problems escalate. Because passengers and loads
                  are selected before takeoff, the cabin workload may change with the risks a group accepts for a
                  higher payout.
                </p>
                <h3>Cabin Service Crew</h3>
                <p>
                  Food, drinks, and passenger expectations are named in the official description. A service-focused
                  player may spend more time moving through the aisle, noticing requests, and restoring order after
                  turbulence. FLEXUS has not confirmed satisfaction meters, service timers, individual abilities, or
                  whether every passenger request is mandatory.
                </p>
                <h3>Cargo Specialist</h3>
                <p>
                  Cargo protection is confirmed work, but “cargo specialist” is our suggested assignment rather than an
                  official class. Giving one player first responsibility for dangerous loads may help a team notice
                  movement or containment problems sooner. The game has not yet explained inventory limits, cargo tools,
                  weight distribution, or whether a dedicated hold is always accessible.
                </p>
                <h3>Emergency Responder and Flexible Support</h3>
                <p>
                  The official premise repeatedly emphasizes trouble becoming worse. A flexible responder can stop
                  routine service and help wherever the most urgent failure appears. Larger groups may split service
                  and cargo work; smaller groups may need every cabin player to rotate between them. These are practical
                  coordination patterns, not confirmed restrictions on what each character can do.
                </p>
              </section>

              <section id="solo-coop">
                <span className="kicker">MODE SUITABILITY</span>
                <h2>Which Dear Passengers Role Is Best for Solo or Co-op?</h2>
                <p>
                  Online co-op is the only mode for which role suitability can be discussed with confidence. The
                  official pitch is built around friends dividing cockpit and cabin work, so both sides are core to a
                  cooperative flight. Pilot suits a player who wants responsibility for aircraft movement; cabin work
                  suits players who prefer mobility, multitasking, service, cargo, and rapid response.
                </p>
                <p>
                  Steam also confirms single-player, but not how the Dear Passengers roles are combined for one person.
                  FLEXUS has not explained AI crew, automation, pause-and-command systems, role switching, difficulty
                  scaling, or simplified objectives. That makes every specific “best solo role” claim speculative.
                </p>

                <div className="platform-table role-mode-table" role="table" aria-label="Dear Passengers solo and online co-op role suitability">
                  <div className="platform-head" role="row"><span role="columnheader">Player preference</span><span role="columnheader">Provisional match</span><span role="columnheader">Confidence</span></div>
                  <div role="row"><strong role="cell">Steady, cockpit-focused play</strong><span role="cell">Pilot</span><span className="status-confirmed" role="cell">Official duty</span></div>
                  <div role="row"><strong role="cell">Movement and passenger service</strong><span role="cell">Cabin crew</span><span className="status-confirmed" role="cell">Official duty</span></div>
                  <div role="row"><strong role="cell">Risk monitoring and object control</strong><span role="cell">Cargo assignment</span><span className="status-open" role="cell">Suggested split</span></div>
                  <div role="row"><strong role="cell">Adapting to several problems</strong><span role="cell">Flexible support</span><span className="status-open" role="cell">Suggested split</span></div>
                  <div role="row"><strong role="cell">Playing entirely alone</strong><span role="cell">No verified best role</span><span className="status-open" role="cell">System unexplained</span></div>
                </div>

                <p>
                  Solo-focused players should follow the <Link href="/dear-passengers-demo">Dear Passengers demo
                  status</Link>. A public build or detailed developer walkthrough would be the first reliable way to
                  see how a single person moves between responsibilities. The{' '}
                  <Link href="/dear-passengers-player-count">Dear Passengers multiplayer guide</Link> tracks the
                  confirmed modes, maximum-player question, matchmaking, local co-op, crossplay, and voice status.
                </p>
              </section>

              <section id="coordination">
                <span className="kicker">PRE-FLIGHT PLAN</span>
                <h2>How Can Dear Passengers Roles Coordinate in Co-op?</h2>
                <p>
                  A useful plan should remain simple because the unreleased game may change. Crews can begin with one
                  cockpit owner, one cabin-service priority, and one flexible priority for cargo or emergencies. If
                  fewer people are available, cabin jobs can be combined. If more players are supported, the group can
                  separate service, cargo, and response after seeing what the actual mission requires.
                </p>
                <ol className="steps article-steps">
                  <li><span>01</span><p><strong>Choose the cockpit owner.</strong> Assign the confirmed pilot duty to the player most comfortable announcing aircraft movement and weather risk.</p></li>
                  <li><span>02</span><p><strong>Name one cabin priority.</strong> Decide who first watches passenger service and keeps the central aisle usable.</p></li>
                  <li><span>03</span><p><strong>Identify risky cargo.</strong> Give one available cabin player first responsibility for noticing loose or dangerous loads.</p></li>
                  <li><span>04</span><p><strong>Define an emergency call.</strong> Agree on a short phrase that means routine tasks stop and the nearest crew member assists.</p></li>
                  <li><span>05</span><p><strong>Reassign after evidence changes.</strong> Treat the plan as provisional until a demo confirms player count, controls, and formal role rules.</p></li>
                </ol>
                <p>
                  The most important relationship is cockpit-to-cabin communication. Aircraft movement can create cabin
                  chaos, while an unresolved passenger or cargo problem can demand attention during difficult weather.
                  The Dear Passengers game is interesting precisely because those responsibilities affect one another.
                </p>
                <p>
                  For the full gameplay loop, return to the{' '}
                  <Link href="/dear-passengers-gameplay">complete Dear Passengers gameplay guide</Link>. You can also watch the{' '}
                  <a href={TRAILER_URL} target="_blank" rel="noopener noreferrer">official FLEXUS trailer ↗</a> and
                  compare what is shown with the wording on Steam.
                </p>
              </section>

              <section id="roles-faq">
                <span className="kicker">CREW QUESTIONS</span>
                <h2>Dear Passengers Roles FAQ</h2>
                <p>
                  These answers reflect the current pre-release evidence. Formal classes, abilities, role switching,
                  solo helpers, cockpit sharing, and maximum crew size may change when FLEXUS publishes new material.
                </p>
                <FAQ items={faqs} />
              </section>

              <section className="related-guide related-links-panel">
                <span className="kicker">CONTINUE THE BRIEFING</span>
                <h2>Build the Rest of Your Dear Passengers Flight Plan</h2>
                <p>
                  Return to the complete guide for the overall gameplay loop, review the multiplayer page for player
                  limits and lobby questions, or follow the demo page for the first opportunity to verify how solo and
                  co-op responsibilities work in practice.
                </p>
                <div className="related-actions">
                  <Link className="button" href="/">Complete game guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-gameplay">Gameplay guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-player-count">Player count →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-demo">Demo status →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-news">Latest news →</Link>
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
