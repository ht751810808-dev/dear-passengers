import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SourceLedger from '@/components/SourceLedger';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const PEAK_URL = 'https://store.steampowered.com/app/3527290/PEAK/';
const REPO_URL = 'https://store.steampowered.com/app/3241660/REPO/';
const LETHAL_URL = 'https://store.steampowered.com/app/1966720/Lethal_Company/';
const CONTENT_WARNING_URL = 'https://store.steampowered.com/app/2881650/Content_Warning/';
const SPACELINES_URL = 'https://store.steampowered.com/app/1412850/Spacelines_from_the_Far_Out/';
const OVERCOOKED_URL = 'https://store.steampowered.com/app/728880/Overcooked_2/';
const CHAINED_URL = 'https://store.steampowered.com/app/2567870/Chained_Together/';
const HUMAN_URL = 'https://store.steampowered.com/app/477160/Human_Fall_Flat/';
const PAGE_URL = 'https://dearpassengers.net/games-like-dear-passengers/';

export const metadata: Metadata = {
  title: { absolute: 'Games Like Dear Passengers: 8 Co-op Games Compared' },
  description:
    'Compare eight games like Dear Passengers across teamwork, physics, service pressure, horror, flying, and social chaos while waiting for the 2026 release.',
  alternates: { canonical: '/games-like-dear-passengers/' },
  openGraph: {
    title: 'Games Like Dear Passengers: Co-op Physics and Crew Games',
    description:
      'A practical comparison of PEAK, R.E.P.O., Lethal Company, Content Warning, Spacelines, Overcooked 2, Chained Together, and Human Fall Flat.',
    url: PAGE_URL,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Games like Dear Passengers cooperative game comparison',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '8 Games Like Dear Passengers',
    description: 'Co-op games for teamwork, physics, crew pressure and memorable group failure.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'What is the closest game to Dear Passengers?',
    answer:
      'Spacelines from the Far Out is the closest thematic match because it also turns airline service into cooperative pressure. PEAK, R.E.P.O., and Human Fall Flat are closer to the physics-driven social chaos visible in Dear Passengers. No released game duplicates its exact cockpit, cabin, passenger, cargo, and weather combination.',
  },
  {
    question: 'What are the best physics games like Dear Passengers?',
    answer:
      'PEAK, R.E.P.O., Chained Together, and Human Fall Flat are useful choices when the main attraction is physical movement and group mistakes. Their objectives differ from Dear Passengers, but each makes coordination harder and funnier through movement or object physics.',
  },
  {
    question: 'What co-op service game feels like Dear Passengers?',
    answer:
      'Spacelines from the Far Out and Overcooked 2 are the strongest service-pressure comparisons. They ask teams to divide work, respond to customer or task needs, and prevent a small delay from spreading across the whole operation.',
  },
  {
    question: 'Is Dear Passengers a horror game like R.E.P.O. or Lethal Company?',
    answer:
      'Dear Passengers is listed as action, adventure, and indie rather than horror. It shares unpredictable co-op pressure and physical comedy with R.E.P.O. and Lethal Company, but its announced setting is a disastrous airline, not a horror extraction job.',
  },
  {
    question: 'Does Dear Passengers have proximity voice chat like other friendslop games?',
    answer:
      'Proximity voice chat is not officially confirmed for Dear Passengers. Some coverage assumes it from the style of the reveal, but Steam and FLEXUS have not documented spatial voice range, channels, push-to-talk, or moderation.',
  },
  {
    question: 'Can I play these alternatives alone?',
    answer:
      'Mode support differs by game and can change, so check each official Steam page before buying. Dear Passengers itself lists single-player and online co-op, although FLEXUS has not explained how solo players cover the cockpit and cabin at the same time.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Games Like Dear Passengers: Eight Co-op Physics and Crew Games',
  description: 'A source-led comparison of eight cooperative games to play while waiting for Dear Passengers.',
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

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Games like Dear Passengers',
  numberOfItems: 8,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'PEAK', url: PEAK_URL },
    { '@type': 'ListItem', position: 2, name: 'R.E.P.O.', url: REPO_URL },
    { '@type': 'ListItem', position: 3, name: 'Lethal Company', url: LETHAL_URL },
    { '@type': 'ListItem', position: 4, name: 'Content Warning', url: CONTENT_WARNING_URL },
    { '@type': 'ListItem', position: 5, name: 'Spacelines from the Far Out', url: SPACELINES_URL },
    { '@type': 'ListItem', position: 6, name: 'Overcooked 2', url: OVERCOOKED_URL },
    { '@type': 'ListItem', position: 7, name: 'Chained Together', url: CHAINED_URL },
    { '@type': 'ListItem', position: 8, name: 'Human Fall Flat', url: HUMAN_URL },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers Game', item: 'https://dearpassengers.net/' },
    { '@type': 'ListItem', position: 2, name: 'Games Like Dear Passengers', item: PAGE_URL },
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

export default function GamesLikePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <main id="main-content">
        <article>
          <header className="article-hero similar-games-hero">
            <Image
              src="/images/hero-bg.webp"
              alt="Games like Dear Passengers for cooperative crew chaos"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers Game</Link><span>/</span><span>Similar Games</span>
              </nav>
              <div className="eyebrow"><span>●</span> CONNECTING FLIGHTS · EIGHT CO-OP ALTERNATIVES</div>
              <h1>Games Like Dear Passengers:<br /><em>Co-op Chaos Compared</em></h1>
              <p>
                The best <strong>games like Dear Passengers</strong> recreate one part of its appeal: physical mistakes,
                divided crew duties, customer pressure, risky objectives, or stories that only work with friends. This
                comparison shows what each game shares and where the airline experience remains different.
              </p>
              <div className="hero-actions">
                <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Wishlist Dear Passengers ↗</a>
                <Link className="button button-ghost" href="/dear-passengers-gameplay">Understand the gameplay →</Link>
              </div>
              <div className="status-strip" aria-label="Games like Dear Passengers comparison summary">
                <div><small>GAMES COMPARED</small><strong>8</strong></div>
                <div><small>CLOSEST THEME</small><strong>SPACELINES</strong></div>
                <div><small>PHYSICS PICKS</small><strong>4</strong></div>
                <div><small>DEAR PASSENGERS</small><strong>COMING 2026</strong></div>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>CONNECTION BOARD</p>
              <a href="#answer">Quick picks</a>
              <a href="#method">How we compare</a>
              <a href="#table">Comparison table</a>
              <a href="#intent-map">Similarity map</a>
              <a href="#physics">Physics chaos</a>
              <a href="#crew">Crew pressure</a>
              <a href="#horror">Horror and risk</a>
              <a href="#choose">Choose your next game</a>
              <a href="#similar-faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Official game ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote note="This is an editorial comparison, not a claim that another developer copied Dear Passengers or that every listed game has identical features. Prices, discounts, platforms, player limits, and store features can change; use each linked Steam page for current purchasing information." />

              <section id="answer">
                <span className="kicker">THE SHORTLIST</span>
                <h2>What Are the Best Games Like Dear Passengers?</h2>
                <p className="snippet-answer">
                  Start with <strong>Spacelines from the Far Out</strong> for cooperative airline service,{' '}
                  <strong>PEAK</strong> or <strong>Human Fall Flat</strong> for physics-driven group mistakes,{' '}
                  <strong>R.E.P.O.</strong> for carrying unstable objects under pressure, and{' '}
                  <strong>Overcooked 2</strong> for strict task division. These games like Dear Passengers share pieces
                  of the experience, but none combines a flyable aircraft, cabin service, risky passengers, cargo,
                  weather, and online crew work in exactly the same way.
                </p>
                <p>
                  Dear Passengers is still unreleased, so this list compares its official premise rather than a final
                  review build. Steam confirms single-player and online co-op, a pilot working alongside cabin crew,
                  passenger and cargo choices, service work, dynamic weather, turbulence, air pockets, and physical
                  emergencies. Features such as proximity voice chat, maximum player count, progression, exact controls,
                  and route structure remain unannounced.
                </p>
                <p>
                  That makes “similar” a question of priority. Some players want more games like Dear Passengers because
                  the trailer looks funny with friends. Others want airline management, first-person physics, dangerous
                  cargo, or a job that falls apart under pressure. The recommendations below identify the shared reason
                  instead of pretending every cooperative game belongs in one genre.
                </p>
              </section>

              <section id="method">
                <span className="kicker">HOW THE LIST WAS BUILT</span>
                <h2>How We Compare Games Like Dear Passengers</h2>
                <p>
                  We use five practical signals. First is <strong>role separation</strong>: can different people own
                  different tasks? Second is <strong>physical consequence</strong>: do movement or objects make teamwork
                  harder? Third is <strong>service pressure</strong>: does the group manage customers, needs, or a
                  shared operation? Fourth is <strong>social failure</strong>: are mistakes enjoyable stories rather
                  than only lost progress? Fifth is <strong>setting overlap</strong>: does the game place the group in
                  a vehicle, workplace, or hazardous trip?
                </p>
                <p>
                  Dear Passengers scores strongly across all five based on its public pitch. A pilot controls the moving
                  environment; cabin workers serve and contain problems; passengers and cargo increase risk; weather
                  moves objects; and the whole premise is designed for cooperative comedy. The closest alternatives
                  usually match two or three signals, not the full combination.
                </p>
                <p>
                  We do not use an assumed price as a filter because Dear Passengers does not have an announced price
                  and other Steam prices can change by country or promotion. We also do not require proximity chat.
                  Several friendslop comparisons rely on that phrase, but Dear Passengers voice features are not
                  confirmed by FLEXUS.
                </p>
              </section>

              <section id="table">
                <span className="kicker">AT-A-GLANCE ROUTES</span>
                <h2>Games Like Dear Passengers Comparison Table</h2>
                <div className="role-table-wrap">
                  <table className="role-comparison-table">
                    <caption>Eight games like Dear Passengers, compared by their strongest shared appeal</caption>
                    <thead>
                      <tr>
                        <th scope="col">Game</th>
                        <th scope="col">Core group pressure</th>
                        <th scope="col">Closest Dear Passengers link</th>
                        <th scope="col">Major difference</th>
                        <th scope="col">Best for</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"><a href={SPACELINES_URL} target="_blank" rel="noopener noreferrer">Spacelines from the Far Out ↗</a></th>
                        <td>Run a commercial space flight and handle service problems together.</td>
                        <td><span className="role-status role-strong">Airline service</span></td>
                        <td>Top-down roguelite presentation rather than first-person cabin physics.</td>
                        <td>Players who want the closest workplace theme.</td>
                      </tr>
                      <tr>
                        <th scope="row"><a href={PEAK_URL} target="_blank" rel="noopener noreferrer">PEAK ↗</a></th>
                        <td>Coordinate movement and recovery while a group climbs dangerous terrain.</td>
                        <td><span className="role-status role-strong">Physical teamwork</span></td>
                        <td>Expedition climbing instead of airline operations.</td>
                        <td>Friends who enjoy visible, funny movement failure.</td>
                      </tr>
                      <tr>
                        <th scope="row"><a href={REPO_URL} target="_blank" rel="noopener noreferrer">R.E.P.O. ↗</a></th>
                        <td>Transport valuable objects while threats and physics disrupt the job.</td>
                        <td><span className="role-status role-strong">Cargo physics</span></td>
                        <td>Horror extraction structure rather than passenger service.</td>
                        <td>Groups that want unstable objects and risk.</td>
                      </tr>
                      <tr>
                        <th scope="row"><a href={LETHAL_URL} target="_blank" rel="noopener noreferrer">Lethal Company ↗</a></th>
                        <td>Collect quota items while the crew shares information and survives hazards.</td>
                        <td><span className="role-status role-suggested">Crew stories</span></td>
                        <td>Darker scavenging horror with separate expeditions.</td>
                        <td>Players who value communication and emergent stories.</td>
                      </tr>
                      <tr>
                        <th scope="row"><a href={CONTENT_WARNING_URL} target="_blank" rel="noopener noreferrer">Content Warning ↗</a></th>
                        <td>Film dangerous encounters and bring the footage home as a team.</td>
                        <td><span className="role-status role-suggested">Clip-friendly chaos</span></td>
                        <td>Camera-and-creature objective instead of crew operations.</td>
                        <td>Groups that want short social comedy sessions.</td>
                      </tr>
                      <tr>
                        <th scope="row"><a href={OVERCOOKED_URL} target="_blank" rel="noopener noreferrer">Overcooked 2 ↗</a></th>
                        <td>Divide service tasks while layouts and deadlines break the plan.</td>
                        <td><span className="role-status role-strong">Service pressure</span></td>
                        <td>Arcade kitchens with fixed recipes rather than a moving aircraft.</td>
                        <td>Teams that enjoy clear roles and frantic priorities.</td>
                      </tr>
                      <tr>
                        <th scope="row"><a href={CHAINED_URL} target="_blank" rel="noopener noreferrer">Chained Together ↗</a></th>
                        <td>Move as a connected group where one mistake affects everyone.</td>
                        <td><span className="role-status role-suggested">Shared consequence</span></td>
                        <td>Traversal challenge without passengers, service, or cargo.</td>
                        <td>Friends who laugh when coordination collapses.</td>
                      </tr>
                      <tr>
                        <th scope="row"><a href={HUMAN_URL} target="_blank" rel="noopener noreferrer">Human Fall Flat ↗</a></th>
                        <td>Solve environmental problems through deliberately loose physical interaction.</td>
                        <td><span className="role-status role-strong">Physics comedy</span></td>
                        <td>Open puzzle spaces rather than a persistent crew job.</td>
                        <td>Players who want low-stakes physical experimentation.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  This comparison avoids calling any entry a replacement. Dear Passengers combines an unusual moving
                  workplace with both cockpit and cabin responsibilities. The useful question is which part of that
                  promise your group wants to practice while waiting for the 2026 release.
                </p>
              </section>

              <section id="intent-map">
                <span className="kicker">MATCH THE REASON, NOT JUST THE TAG</span>
                <h2>Dear Passengers Similarity Map</h2>
                <p>
                  A useful comparison begins with the part of <strong>Dear Passengers</strong> that caught your
                  attention. Dear Passengers is not available to review yet, so the map below connects one confirmed
                  idea at a time with a released game. It also marks searches that no alternative can answer because
                  FLEXUS has not published the underlying Dear Passengers feature.
                </p>
                <div className="platform-table" role="table" aria-label="Dear Passengers similarity intent map">
                  <div className="platform-head" role="row"><span role="columnheader">Search need</span><span role="columnheader">Best connection</span><span role="columnheader">Why</span></div>
                  <div role="row"><strong role="cell">Dear Passengers airline service</strong><span role="cell">Spacelines</span><span role="cell">Shared crew and passenger work</span></div>
                  <div role="row"><strong role="cell">Dear Passengers pilot and cabin split</strong><span role="cell">No exact match</span><span role="cell">Its defining combination</span></div>
                  <div role="row"><strong role="cell">Dear Passengers physics comedy</strong><span role="cell">Human Fall Flat</span><span role="cell">Loose physical interaction</span></div>
                  <div role="row"><strong role="cell">Dear Passengers movement pressure</strong><span role="cell">PEAK</span><span role="cell">Group recovery and mistakes</span></div>
                  <div role="row"><strong role="cell">Dear Passengers dangerous cargo</strong><span role="cell">R.E.P.O.</span><span role="cell">Valuables affected by physics</span></div>
                  <div role="row"><strong role="cell">Dear Passengers service tasks</strong><span role="cell">Overcooked 2</span><span role="cell">Roles and escalating priorities</span></div>
                  <div role="row"><strong role="cell">Dear Passengers crew stories</strong><span role="cell">Lethal Company</span><span role="cell">Emergent group decisions</span></div>
                  <div role="row"><strong role="cell">Dear Passengers funny clips</strong><span role="cell">Content Warning</span><span role="cell">Social, shareable failure</span></div>
                  <div role="row"><strong role="cell">Dear Passengers shared consequence</strong><span role="cell">Chained Together</span><span role="cell">One mistake affects everyone</span></div>
                  <div role="row"><strong role="cell">Dear Passengers horror alternative</strong><span role="cell">R.E.P.O.</span><span role="cell">More fear and extraction</span></div>
                  <div role="row"><strong role="cell">Dear Passengers solo comparison</strong><span role="cell">Wait for demo</span><span role="cell">Solo workflow is unexplained</span></div>
                  <div role="row"><strong role="cell">Dear Passengers voice comparison</strong><span role="cell">Do not assume</span><span role="cell">Proximity chat is unconfirmed</span></div>
                  <div role="row"><strong role="cell">Dear Passengers local co-op</strong><span role="cell">Overcooked 2</span><span role="cell">Alternative need, not feature match</span></div>
                  <div role="row"><strong role="cell">Dear Passengers public demo</strong><span role="cell">Wait for FLEXUS</span><span role="cell">No public download yet</span></div>
                </div>
                <p>
                  The map prevents a common mistake: treating “friendslop” as a complete specification. Dear Passengers
                  may share social energy with popular co-op games, but Dear Passengers still needs its own evidence for
                  controls, player count, voice, routes, progression, and solo automation. Similar games can fill the
                  waiting period; they cannot confirm those product details.
                </p>
              </section>

              <section id="physics">
                <span className="kicker">WHEN OBJECTS REFUSE TO COOPERATE</span>
                <h2>Physics Games Like Dear Passengers</h2>
                <h3>PEAK</h3>
                <p>
                  PEAK is a strong recommendation when the attraction is visible teamwork under physical pressure.
                  Its climbing objective differs completely from Dear Passengers, yet both make a group react to the
                  environment and to one another&apos;s mistakes. A bad movement can create a rescue problem, just as an
                  aircraft maneuver may create a cabin problem in Dear Passengers.
                </p>
                <h3>R.E.P.O.</h3>
                <p>
                  R.E.P.O. is the clearest cargo-handling comparison. Valuable objects must survive movement and danger,
                  so carrying something is a shared responsibility rather than a passive inventory action. Dear
                  Passengers applies that tension to profitable cargo inside an aircraft, although FLEXUS has not
                  published cargo statistics, handling tools, or a complete economy.
                </p>
                <h3>Human Fall Flat and Chained Together</h3>
                <p>
                  Human Fall Flat turns loose interaction into collaborative puzzle comedy. Chained Together makes
                  shared movement itself the problem. These games like Dear Passengers are useful for groups that enjoy
                  consequences everyone can see immediately. They do not offer passenger needs, pilot duties, or a
                  manifest, but they test the patience and communication that physical co-op demands.
                </p>
              </section>

              <section id="crew">
                <span className="kicker">WORKPLACE DISASTER SHIFT</span>
                <h2>Crew and Service Games Like Dear Passengers</h2>
                <h3>Spacelines from the Far Out</h3>
                <p>
                  Spacelines from the Far Out is the most direct airline comparison. A cooperative crew operates a
                  commercial trip, handles service needs, and responds when the journey stops being routine. Its visual
                  perspective and structure differ from the first-person Dear Passengers premise, but players who want
                  needy travelers and a shared airline workload should begin here.
                </p>
                <h3>Overcooked 2</h3>
                <p>
                  Overcooked 2 has no aircraft, but its task design explains why Dear Passengers can work as a social
                  game. Each person owns a small responsibility, the environment interrupts the plan, and a missed task
                  spreads pressure across the team. Cabin service in Dear Passengers adds passengers, cargo, and vehicle
                  motion to that broader pattern.
                </p>
                <p>
                  These alternatives are especially useful for players interested in the{' '}
                  <Link href="/dear-passengers-roles">Dear Passengers roles comparison</Link>. FLEXUS confirms pilot and
                  cabin duties but not a fixed class roster, so current team labels remain practical assignments rather
                  than guaranteed in-game classes.
                </p>
              </section>

              <section id="horror">
                <span className="kicker">SOCIAL RISK WITHOUT THE SAME GENRE</span>
                <h2>R.E.P.O., Lethal Company and Content Warning</h2>
                <p>
                  R.E.P.O., Lethal Company, and Content Warning often appear beside “friendslop” searches because they
                  turn communication and failure into the memorable part of a session. Dear Passengers shares the
                  potential for clip-friendly group mistakes, but it is not currently labeled a horror game. Its
                  announced tension comes from an unreliable airline, difficult people, dangerous freight, weather, and
                  physical emergencies.
                </p>
                <p>
                  Lethal Company is the stronger choice for longer crew stories built around a quota and incomplete
                  information. Content Warning is stronger for groups that want a camera-driven reason to approach
                  danger. R.E.P.O. is stronger for object physics. Dear Passengers places those social pressures inside
                  a trip that also needs to be flown and serviced.
                </p>
                <p>
                  Voice is another difference to treat carefully. Other cooperative games may make voice distance part
                  of their identity, but Dear Passengers proximity voice chat is unconfirmed. Friends can plan to use an
                  external channel until FLEXUS publishes an in-game voice specification.
                </p>
              </section>

              <section id="choose">
                <span className="kicker">PICK YOUR CONNECTION</span>
                <h2>Which Dear Passengers Alternative Should You Play?</h2>
                <div className="comparison-grid">
                  <article><span>AIRLINE THEME</span><h3>Spacelines</h3><p>Choose it for passengers, service, and a crew trying to keep a commercial flight functioning.</p></article>
                  <article><span>PHYSICS</span><h3>PEAK</h3><p>Choose it when physical teamwork and visible mistakes matter more than the workplace setting.</p></article>
                  <article><span>CARGO RISK</span><h3>R.E.P.O.</h3><p>Choose it when transporting unstable valuables under pressure is the main attraction.</p></article>
                  <article><span>TASK DIVISION</span><h3>Overcooked 2</h3><p>Choose it for clear roles, service deadlines, and a plan that can collapse in seconds.</p></article>
                </div>
                <p>
                  For the complete official baseline before choosing, read the{' '}
                  <Link href="/dear-passengers-gameplay">Dear Passengers gameplay guide</Link>. It explains which parts
                  of the comparison come from Steam and which details still need a demo.
                </p>
              </section>

              <section id="similar-faq">
                <span className="kicker">CONNECTION QUESTIONS</span>
                <h2>Games Like Dear Passengers FAQ</h2>
                <p>
                  Recommendations reflect the games and official Dear Passengers information available on July 20,
                  2026. Always recheck store pages for current mode, platform, accessibility, and purchasing details.
                </p>
                <FAQ items={faqs} />
              </section>

              <section className="related-guide related-links-panel">
                <span className="kicker">RETURN TO GATE 4534960</span>
                <h2>Follow Dear Passengers Before Takeoff</h2>
                <p>
                  Review the confirmed gameplay loop, compare pilot and cabin duties, check multiplayer status, and
                  follow the public demo that will eventually allow direct comparisons with these released games.
                </p>
                <div className="related-actions">
                  <Link className="button" href="/dear-passengers-gameplay">Gameplay guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-roles">Crew roles →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-player-count">Player count →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-demo">Demo status →</Link>
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
