import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import OfficialTrailer from '@/components/OfficialTrailer';
import SourceLedger from '@/components/SourceLedger';
import VideoShowcase from '@/components/VideoShowcase';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const TRAILER_URL = 'https://www.youtube.com/watch?v=XRvd_HZesys';
const DOU_INTERVIEW_URL = 'https://gamedev.dou.ua/articles/dear-passengers-interview/?from=community_widget_post';
const PAGE_URL = 'https://dearpassengers.net/dear-passengers-trailer/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Trailer: Official Gameplay Breakdown' },
  description:
    'Watch the official Dear Passengers trailer and explore a source-labeled breakdown of cockpit work, cabin service, cargo, passengers, weather, and open questions.',
  alternates: { canonical: '/dear-passengers-trailer/' },
  openGraph: {
    title: 'Dear Passengers Trailer: Scene and Gameplay Breakdown',
    description:
      'A careful breakdown of what the official trailer shows, what Steam confirms, and what remains unannounced.',
    url: PAGE_URL,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dear Passengers official trailer and gameplay breakdown',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers Trailer: Official Gameplay Breakdown',
    description: 'Watch the official reveal and separate visible scenes from confirmed game features.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Is the Dear Passengers trailer official?',
    answer:
      'Yes. The Dear Passengers trailer embedded on this page was published by FLEXUS, the developer and publisher named on Steam. This page is an independent analysis and is not operated by FLEXUS, Valve, or Steam.',
  },
  {
    question: 'Does the Dear Passengers trailer show real gameplay?',
    answer:
      'The Dear Passengers trailer presents first-person in-engine scenes involving the cockpit, cabin, passengers, cargo, weather, and emergencies. FLEXUS has not labeled every shot as an uninterrupted live gameplay capture, so edited footage should not be treated as proof of final controls, balance, or mission flow.',
  },
  {
    question: 'Does the Dear Passengers trailer confirm the player count?',
    answer:
      'No. Multiple crew members are visible, and Steam confirms single-player plus online co-op, but neither the Dear Passengers trailer nor the current store feature list publishes a maximum lobby size.',
  },
  {
    question: 'Does the Dear Passengers trailer confirm proximity voice chat?',
    answer:
      'No. Communication would fit the co-op premise, but the current official material does not define a proximity voice system. Steam community requests and third-party descriptions are not a substitute for a FLEXUS feature announcement.',
  },
  {
    question: 'Are every passenger, cargo item, and emergency in the Dear Passengers trailer guaranteed at launch?',
    answer:
      'Not necessarily. A reveal trailer communicates tone and systems, but individual scenes, objects, user names, interfaces, and balancing can change during development. Steam is the safer source for the current confirmed feature set.',
  },
  {
    question: 'Where can I watch the Dear Passengers trailer safely?',
    answer:
      'Use the official FLEXUS YouTube upload or the media panel on the Dear Passengers Steam store page. The privacy-enhanced embed on this page points to that official YouTube video.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers Trailer: Official Gameplay and Scene Breakdown',
  description:
    'A source-labeled analysis of the official Dear Passengers trailer, visible gameplay situations, confirmed features, and open questions.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-07-18',
  dateModified: '2026-07-19',
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

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Dear Passengers Official Announcement Trailer',
  description:
    'The official FLEXUS reveal trailer for Dear Passengers, embedded with an independent scene and feature breakdown.',
  thumbnailUrl: 'https://i.ytimg.com/vi/XRvd_HZesys/maxresdefault.jpg',
  uploadDate: '2026-07-14',
  contentUrl: TRAILER_URL,
  embedUrl: 'https://www.youtube-nocookie.com/embed/XRvd_HZesys',
  publisher: { '@type': 'Organization', name: 'FLEXUS' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers Game', item: 'https://dearpassengers.net/' },
    { '@type': 'ListItem', position: 2, name: 'Dear Passengers Trailer', item: PAGE_URL },
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

export default function DearPassengersTrailerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <main id="main-content">
        <article>
          <header className="article-hero trailer-hero">
            <Image
              src="/images/hero-bg.webp"
              alt="Dear Passengers trailer showing a chaotic passenger cabin and airline crew"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers Game</Link><span>/</span><span>Official Trailer</span>
              </nav>
              <div className="eyebrow"><span>●</span> OFFICIAL FOOTAGE · CONFIRMED FEATURES VS OBSERVATIONS</div>
              <h1>Dear Passengers Trailer:<br /><em>Official Gameplay Breakdown</em></h1>
              <p>
                The <strong>Dear Passengers trailer</strong> introduces a failing airline, divided crew duties, difficult
                passengers, risky cargo, unstable weather, and physics-driven emergencies. This independent breakdown
                explains what the official footage visibly demonstrates, what the Steam listing separately confirms,
                and which popular conclusions remain unannounced.
              </p>
              <div className="hero-actions">
                <a className="button" href={TRAILER_URL} target="_blank" rel="noopener noreferrer">Watch Dear Passengers trailer ↗</a>
                <Link className="button button-ghost" href="/dear-passengers-confirmed-features">Check confirmed features →</Link>
              </div>
              <div className="status-strip" aria-label="Dear Passengers trailer evidence summary">
                <div><small>OFFICIAL VIDEO</small><strong>FLEXUS</strong></div>
                <div><small>REVEALED</small><strong>JUL 14 · 2026</strong></div>
                <div><small>CONFIRMED MODES</small><strong>SOLO · ONLINE CO-OP</strong></div>
                <div><small>EXACT LAUNCH</small><strong>NOT ANNOUNCED</strong></div>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>TRAILER BRIEFING</p>
              <a href="#watch">Watch Dear Passengers</a>
              <a href="#scene-map">Scene map</a>
              <a href="#flight-loop">Flight loop</a>
              <a href="#roles">Crew roles</a>
              <a href="#passengers-cargo">Passengers & cargo</a>
              <a href="#hazards">Weather & hazards</a>
              <a href="#not-confirmed">Not confirmed</a>
              <a href="#trailer-faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam page ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote
                checked="July 19, 2026"
                note="This page treats the official video as evidence of visible situations, not a guarantee of final controls, balance, progression, player limits, or every object shown. Steam fields establish the current confirmed product facts."
              />

              <section id="watch">
                <span className="kicker">PRIMARY RECORDING</span>
                <h2>Watch the Official Dear Passengers Trailer</h2>
                <p className="snippet-answer">
                  The official <strong>Dear Passengers trailer</strong> presents a first-person co-op airline game in
                  which one crew member pilots while others work inside the cabin. The Dear Passengers trailer shows passenger service,
                  cargo decisions, turbulence, loose objects, damaged aircraft situations, and improvised responses.
                  Steam separately confirms a 2026 Windows release, single-player, and online co-op.
                </p>
                <p>
                  FLEXUS published the reveal to establish the Dear Passengers premise rather than document every rule. The
                  Dear Passengers trailer moves quickly between pre-flight choices, cockpit work, cabin routines, and
                  escalating disasters. That editing communicates the intended comedy: a normal duty becomes difficult,
                  a second problem arrives before the first is solved, and the crew must decide whether safety, service,
                  cargo, or simply reaching the destination deserves attention.
                </p>
                <p>
                  Founder Semen Kozyura told GameDev DOU that the team made every small trailer detail by hand and that
                  the video had reached roughly 45 million views on X by the July 17 interview. That is a
                  developer-reported social-view figure, not the YouTube view count. Read the{' '}
                  <a href={DOU_INTERVIEW_URL} target="_blank" rel="noopener noreferrer">founder interview ↗</a> or our{' '}
                  <Link href="/dear-passengers-developer-flexus">Dear Passengers developer profile</Link> for context.
                </p>
                <OfficialTrailer />
              </section>

              <section id="scene-map">
                <span className="kicker">VISUAL EVIDENCE MAP</span>
                <h2>Dear Passengers Trailer Scene Breakdown</h2>
                <p>
                  The safest way to read the Dear Passengers trailer is by system rather than by inventing a complete
                  mission chronology. The Dear Passengers trailer is edited, so a shot that appears after another does not prove the final
                  order of menus, boarding, takeoff, service, emergencies, landing, or rewards. The following map records
                  what each group of scenes contributes to the official premise.
                </p>

                <div className="role-table-wrap">
                  <table className="role-comparison-table">
                    <caption>Dear Passengers trailer scenes, evidence status, and practical meaning</caption>
                    <thead>
                      <tr>
                        <th scope="col">Scene group</th>
                        <th scope="col">What Dear Passengers shows</th>
                        <th scope="col">Evidence status</th>
                        <th scope="col">What it supports</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Pre-flight selection</th>
                        <td>Passengers and unusual cargo are presented as choices before departure.</td>
                        <td><span className="role-status role-confirmed">Steam confirmed</span></td>
                        <td>Risk and payout begin with the manifest.</td>
                      </tr>
                      <tr>
                        <th scope="row">Cockpit work</th>
                        <td>A crew member occupies the flight deck while hazards appear outside.</td>
                        <td><span className="role-status role-confirmed">Steam confirmed</span></td>
                        <td>At least one player can pilot the aircraft.</td>
                      </tr>
                      <tr>
                        <th scope="row">Cabin service</th>
                        <td>Crew members move through the aisle and serve passengers.</td>
                        <td><span className="role-status role-confirmed">Steam confirmed</span></td>
                        <td>Food, drinks, and passenger care are active duties.</td>
                      </tr>
                      <tr>
                        <th scope="row">Cargo trouble</th>
                        <td>Loads and loose objects create physical problems inside the aircraft.</td>
                        <td><span className="role-status role-confirmed">System confirmed</span></td>
                        <td>Higher-paying cargo can increase flight risk.</td>
                      </tr>
                      <tr>
                        <th scope="row">Rough air</th>
                        <td>Aircraft movement throws people and unsecured items around the cabin.</td>
                        <td><span className="role-status role-confirmed">Steam confirmed</span></td>
                        <td>Weather, turbulence, and air pockets affect cabin work.</td>
                      </tr>
                      <tr>
                        <th scope="row">Emergency response</th>
                        <td>The crew improvises as several problems overlap.</td>
                        <td><span className="role-status role-suggested">Visible examples</span></td>
                        <td>The tone favors cooperative problem-solving and physical comedy.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <VideoShowcase />
              </section>

              <section id="flight-loop">
                <span className="kicker">OBSERVED STRUCTURE</span>
                <h2>What the Dear Passengers Trailer Suggests About the Flight Loop</h2>
                <p>
                  The Dear Passengers trailer supports a broad loop without proving every step. Before takeoff, the crew
                  appears to make risk decisions about people and cargo. During the flight, the cockpit manages the
                  aircraft while cabin players perform service and containment work. Weather and physics disrupt those
                  routines, forcing the group to prioritize problems. The stated goal on Steam is to deliver passengers
                  and cargo to their destination, preferably in one piece.
                </p>
                <p>
                  A useful pre-release interpretation of Dear Passengers is “choose risk, divide work, contain chaos, and try to
                  arrive.” It is not yet safe to publish a step-by-step walkthrough. A walkthrough requires a playable
                  build with repeatable objectives, menus, controls, failure states, and results. The planned Dear
                  Passengers demo should provide stronger evidence than the short announcement edit.
                </p>

                <div className="fact-callout">
                  <span>TRAILER-SAFE SUMMARY</span>
                  <strong>Choose · Fly · Serve · Contain · Arrive</strong>
                  <p>The exact scoring, progression, mission order, and failure conditions remain unannounced.</p>
                </div>
              </section>

              <section id="roles">
                <span className="kicker">CREW POSITIONS</span>
                <h2>Pilot and Cabin Roles in the Dear Passengers Trailer</h2>
                <p>
                  The clearest division in the Dear Passengers trailer is physical: one crew member works in the cockpit
                  while others move through the cabin. Steam repeats that structure in writing. It is reasonable to call
                  those broad responsibilities pilot and cabin crew, but the current evidence does not establish a
                  formal class selection screen, locked abilities, separate skill trees, or permanent job assignments.
                </p>
                <p>
                  A dedicated Dear Passengers co-pilot is not confirmed. Neither are official cargo-specialist, security, medic, or
                  engineer classes. Groups can use those names as practical assignments, but they should not be marketed
                  as selectable jobs. Our <Link href="/dear-passengers-roles">Dear Passengers roles comparison</Link>
                  separates confirmed duties from suggested team organization and explains why the solo role system
                  remains unclear.
                </p>
              </section>

              <section id="passengers-cargo">
                <span className="kicker">RISK MANIFEST</span>
                <h2>Passengers and Cargo Shown in the Dear Passengers Trailer</h2>
                <p>
                  Passengers are not passive scenery in the Dear Passengers trailer. They expect food, drinks, and a
                  smooth flight while their behavior and movement can add pressure to the cabin. Steam says some
                  passengers are hard to please and that the crew must keep them under control. The Dear Passengers trailer reinforces the
                  idea that customer service continues even when the aircraft is becoming unsafe.
                </p>
                <p>
                  For now, the Dear Passengers trailer supports one strategic conclusion: the pre-flight manifest may act as a crew&apos;s
                  difficulty choice. A cautious group could accept manageable risks, while a confident group might chase
                  profit and create more simultaneous problems. That is an interpretation of confirmed systems, not a
                  published tutorial or balance recommendation.
                </p>
              </section>

              <section id="hazards">
                <span className="kicker">ROUGH AIR AHEAD</span>
                <h2>Weather, Physics and Emergencies in the Trailer</h2>
                <p>
                  Dynamic weather, turbulence, and air pockets are explicitly listed on Steam and visibly shape the Dear
                  Passengers trailer. Their importance comes from the moving interior. A weather event is not only a
                  piloting challenge; it can turn unsecured passengers, luggage, food, service equipment, and cargo into
                  new cabin hazards. One external problem can create several internal ones.
                </p>
                <p>
                  The Dear Passengers trailer also communicates improvisation. Crew members respond with whatever action seems available
                  as the situation escalates. That supports the game&apos;s comedy and physics identity, but it does not
                  prove a specific crafting system, repair tree, weapon roster, health model, decompression simulation,
                  or permanent aircraft damage. Individual emergency shots should remain labeled as trailer observations
                  until FLEXUS explains the mechanics.
                </p>
              </section>

              <section id="not-confirmed">
                <span className="kicker">DO NOT INFER FROM EDITING</span>
                <h2>What the Dear Passengers Trailer Does Not Confirm</h2>
                <p>
                  The Dear Passengers trailer does not publish a maximum player count, exact release date, price, local
                  co-op, split screen, crossplay, public matchmaking, server browser, controller support, Steam Deck
                  rating, VR mode, console port, or proximity voice-chat specification. Steam confirms online co-op and
                  single-player, but those broad fields do not answer the detailed questions.
                </p>
                <div className="platform-table" role="table" aria-label="Claims not confirmed by the Dear Passengers trailer">
                  <div className="platform-head" role="row"><span role="columnheader">Question</span><span role="columnheader">Current status</span><span role="columnheader">Evidence needed</span></div>
                  <div role="row"><strong role="cell">Maximum crew size</strong><span className="status-open" role="cell">Unannounced</span><span role="cell">Steam field or FLEXUS statement</span></div>
                  <div role="row"><strong role="cell">Proximity voice chat</strong><span className="status-open" role="cell">Unannounced</span><span role="cell">Feature description or playable test</span></div>
                  <div role="row"><strong role="cell">Controller / Steam Deck</strong><span className="status-open" role="cell">Unannounced</span><span role="cell">Input field and Valve compatibility result</span></div>
                  <div role="row"><strong role="cell">Console versions</strong><span className="status-open" role="cell">Unannounced</span><span role="cell">Official platform store listing</span></div>
                  <div role="row"><strong role="cell">Exact date and price</strong><span className="status-open" role="cell">Unannounced</span><span role="cell">Updated Steam purchase information</span></div>
                </div>

                <p>
                  For a single current table covering those questions, use the{' '}
                  <Link href="/dear-passengers-confirmed-features">Dear Passengers confirmed features and rumor
                  check</Link>. Release timing belongs in the{' '}
                  <Link href="/dear-passengers-release-date">Dear Passengers release date guide</Link>, while access
                  changes belong in the <Link href="/dear-passengers-demo">Dear Passengers demo tracker</Link>.
                </p>
              </section>

              <section id="trailer-faq">
                <span className="kicker">TRAILER QUESTIONS</span>
                <h2>Dear Passengers Trailer FAQ</h2>
                <p>
                  These answers distinguish official Dear Passengers footage from final product specifications. The Dear Passengers page will retain the
                  reveal context while linking to newer evidence when FLEXUS publishes a demo, extended gameplay, or an
                  updated trailer.
                </p>
                <FAQ items={faqs} />
              </section>

              <section className="related-guide related-links-panel">
                <span className="kicker">CONTINUE THE EVIDENCE CHECK</span>
                <h2>From the Dear Passengers Trailer to Verified Game Facts</h2>
                <p>
                  Return to the complete Dear Passengers game guide for the broad overview, compare every current feature
                  status, review pilot and cabin responsibilities, or follow the demo that can eventually verify the
                  trailer&apos;s unanswered mechanics.
                </p>
                <div className="related-actions">
                  <Link className="button" href="/">Complete game guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-gameplay">Gameplay guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-confirmed-features">Confirmed features →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-roles">Crew roles →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-demo">Demo status →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-developer-flexus">Meet FLEXUS →</Link>
                  <Link className="button button-ghost" href="/games-like-dear-passengers">Similar games →</Link>
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
