import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SourceLedger from '@/components/SourceLedger';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const FLEXUS_URL = 'https://flexus.games/';
const DOU_INTERVIEW_URL = 'https://gamedev.dou.ua/articles/dear-passengers-interview/?from=community_widget_post';
const DEV_UA_URL = 'https://dev.ua/news/1-billion-dear-passengers-1784294360';
const PAGE_URL = 'https://dearpassengers.net/dear-passengers-developer-flexus/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Developer: Who Is FLEXUS Games?' },
  description:
    'Meet the Dear Passengers developer FLEXUS Games: studio background, previous games, development timeline, wishlist milestone, demo plan, and release comments.',
  keywords: [
    'Dear Passengers developer',
    'FLEXUS Games',
    'who made Dear Passengers',
    'Dear Passengers studio',
    'Dear Passengers publisher',
  ],
  alternates: { canonical: '/dear-passengers-developer-flexus/', languages: { en: '/dear-passengers-developer-flexus/', ar: '/ar/dear-passengers-developer/', de: '/de/dear-passengers-entwickler-flexus/', 'x-default': '/dear-passengers-developer-flexus/' } },
  openGraph: {
    title: 'Dear Passengers Developer: FLEXUS Games Profile',
    description:
      'A sourced profile of FLEXUS Games, the Kyiv studio developing and publishing Dear Passengers.',
    url: PAGE_URL,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dear Passengers developer FLEXUS Games studio profile',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers Developer: Who Is FLEXUS Games?',
    description: 'Studio history, previous games, viral reveal, demo plan, and 2026 release comments.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Who is the Dear Passengers developer?',
    answer:
      'FLEXUS Games is the developer and publisher of Dear Passengers. Steam lists FLEXUS in both roles, and the studio’s official website identifies Dear Passengers as one of its games.',
  },
  {
    question: 'Where is the Dear Passengers developer based?',
    answer:
      'FLEXUS describes itself as a Kyiv-based game studio founded in 2020, with team members in Ukraine and worldwide. The official studio site reports more than 70 people and more than 300 million downloads across over 150 countries.',
  },
  {
    question: 'What other games has FLEXUS made?',
    answer:
      'The FLEXUS website highlights mobile titles including Tower Craft, Dye Hard, Mow My Lawn, and Train Miner. The studio reports more than 80 million installs for Tower Craft, more than 60 million for Dye Hard, and more than 25 million for Train Miner.',
  },
  {
    question: 'When did FLEXUS start developing Dear Passengers?',
    answer:
      'Founder Semen Kozyura told GameDev DOU that the team had been making Dear Passengers since November. The interview was published in July 2026, but it did not provide a specific November date or a complete production schedule.',
  },
  {
    question: 'How many wishlists did Dear Passengers receive?',
    answer:
      'FLEXUS announced one million Steam wishlists in two days and a Top 25 most-wishlisted position. Kozyura said the count was about 1.2 million at the time of a July 17 interview. These are attributed developer figures, not publicly auditable Steam statistics.',
  },
  {
    question: 'What has the developer said about the Dear Passengers release?',
    answer:
      'Kozyura said FLEXUS still planned to release Dear Passengers in 2026 but would not rush a poor or insufficiently polished build. Steam continues to show only the year 2026, so no exact date is confirmed.',
  },
  {
    question: 'Is a Dear Passengers demo planned?',
    answer:
      'Yes. FLEXUS has discussed a Gamescom demo and a later public demo. Kozyura described the broader sequence as demo release, streamer play, and then the full release, but no public demo date or download method is currently announced.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers Developer: Who Is FLEXUS Games?',
  description:
    'A sourced studio profile covering the Dear Passengers developer, previous FLEXUS games, development comments, demo plans, and release status.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-07-19',
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
  about: {
    '@type': 'Organization',
    name: 'FLEXUS',
    url: FLEXUS_URL,
    location: { '@type': 'Place', name: 'Kyiv, Ukraine' },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers Game', item: 'https://dearpassengers.net/' },
    { '@type': 'ListItem', position: 2, name: 'Dear Passengers Developer', item: PAGE_URL },
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

export default function DearPassengersDeveloperPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <main id="main-content">
        <article>
          <header className="article-hero">
            <Image
              src="/images/hero-bg.webp"
              alt="Dear Passengers developer FLEXUS and the chaotic airline game cabin"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers Game</Link><span>/</span><span>Developer</span>
              </nav>
              <div className="eyebrow"><span>●</span> STUDIO MANIFEST · VERIFIED JULY 19, 2026</div>
              <h1>Dear Passengers Developer:<br /><em>Who Is FLEXUS Games?</em></h1>
              <p>
                The <strong>Dear Passengers developer</strong> is FLEXUS Games, a Kyiv-based studio that Steam lists as
                both developer and publisher. This independent Dear Passengers profile explains the studio&apos;s
                background, previous mobile games, production comments, viral reveal, demo plan, and 2026 release goal
                using official studio material and named founder interviews.
              </p>
              <div className="hero-actions">
                <a className="button" href={FLEXUS_URL} target="_blank" rel="noopener noreferrer">Visit FLEXUS ↗</a>
                <a className="button button-ghost" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Wishlist on Steam ↗</a>
              </div>
              <div className="article-meta">
                <span>Studio: FLEXUS</span><span>Kyiv · Founded 2020</span><span>70+ people · 300M+ downloads</span>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>STUDIO BRIEFING</p>
              <a href="#answer">Quick answer</a>
              <a href="#studio">FLEXUS profile</a>
              <a href="#games">Previous games</a>
              <a href="#development">Development</a>
              <a href="#viral">Viral reveal</a>
              <a href="#demo-release">Demo & release</a>
              <a href="#confirmed">Confirmed vs open</a>
              <a href="#developer-faq">FAQ</a>
              <a className="toc-cta" href={FLEXUS_URL} target="_blank" rel="noopener noreferrer">Official studio ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote note="Studio facts come from FLEXUS and Steam. Production, wishlist, trailer-view, demo, and release comments are attributed to named interviews rather than presented as independently audited statistics." />

              <section id="answer">
                <span className="kicker">QUICK ANSWER</span>
                <h2>Who Is the Dear Passengers Developer?</h2>
                <p className="snippet-answer">
                  <strong>FLEXUS Games develops and publishes Dear Passengers.</strong> The Dear Passengers Steam page
                  lists FLEXUS in both roles. FLEXUS describes itself as a Kyiv-based studio founded in 2020 with more
                  than 70 people and more than 300 million downloads across more than 150 countries.
                </p>
                <p>
                  That makes Dear Passengers a new kind of project for an audience that may know FLEXUS through mobile
                  games rather than PC co-op. The official Dear Passengers listing presents a first-person action and
                  adventure game where friends run an unreliable airline. One person can pilot while the remaining crew
                  manages passengers, cargo, food service, weather, and escalating emergencies.
                </p>
                <p>
                  DearPassengers.net is not the Dear Passengers developer and has no affiliation with FLEXUS, Valve, or
                  Steam. The distinction matters because a fan guide can summarize evidence, but only the Dear
                  Passengers developer can confirm a build, date, price, platform, player limit, or feature. This page
                  therefore separates official company facts, attributed interview comments, and unanswered questions.
                </p>

                <div className="fact-callout">
                  <span>DEVELOPER RECORD</span>
                  <strong>FLEXUS · Developer and Publisher</strong>
                  <p>Kyiv-based · founded in 2020 · 70+ people · 300M+ reported downloads · 150+ countries.</p>
                </div>
              </section>

              <section id="studio">
                <span className="kicker">COMPANY PROFILE</span>
                <h2>FLEXUS Games and the Dear Passengers Studio</h2>
                <p>
                  FLEXUS says it was founded in Kyiv in 2020 and grew through the pandemic and the full-scale war in
                  Ukraine. The studio describes its location as “Kyiv, Ukraine & Worldwide,” reflecting a team whose
                  work is rooted in Kyiv while extending beyond one office. Its official site currently reports more
                  than 70 people, more than 300 million game downloads, and players in more than 150 countries.
                </p>
                <p>
                  The official FLEXUS site now places Dear Passengers alongside its established titles and links
                  directly to the Dear Passengers Steam listing. That connection is stronger evidence than a game
                  database copying a developer name. Steam independently shows FLEXUS as both Dear Passengers developer
                  and publisher, creating a consistent first-party identity across the studio and storefront.
                </p>

              </section>

              <section id="games">
                <span className="kicker">PREVIOUS FLIGHTS</span>
                <h2>What Games Did FLEXUS Make Before Dear Passengers?</h2>
                <div className="role-table-wrap">
                  <table className="role-comparison-table">
                    <caption>FLEXUS games and official studio figures</caption>
                    <thead>
                      <tr>
                        <th scope="col">Game</th>
                        <th scope="col">Official description</th>
                        <th scope="col">Studio figure</th>
                        <th scope="col">Connection to Dear Passengers</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Tower Craft</th>
                        <td>Endless tower-building idle hybrid</td>
                        <td>80M+ installs</td>
                        <td>Part of the developer&apos;s mobile catalogue</td>
                      </tr>
                      <tr>
                        <th scope="row">Dye Hard</th>
                        <td>Colorful battleground painting game</td>
                        <td>60M+ installs</td>
                        <td>Shows experience with readable multiplayer action</td>
                      </tr>
                      <tr>
                        <th scope="row">Train Miner</th>
                        <td>Idle and action genre hybrid</td>
                        <td>25M+ installs</td>
                        <td>Shows the studio combining familiar systems</td>
                      </tr>
                      <tr>
                        <th scope="row">Dear Passengers</th>
                        <td>Physics-based airline crew action-adventure</td>
                        <td>Unreleased · 2026 window</td>
                        <td>Current PC and online co-op project</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </section>

              <section id="development">
                <span className="kicker">PRODUCTION RECORD</span>
                <h2>How Long Has FLEXUS Been Developing Dear Passengers?</h2>
                <p>
                  Founder Semen Kozyura told GameDev DOU that the team had been making Dear Passengers since November.
                  The July 2026 interview did not identify a precise starting day or publish a full production calendar,
                  so this guide does not invent one. The comment is useful because it confirms that Dear Passengers was
                  in development before the July reveal and provides context for later arguments about similar games.
                </p>
                <p>
                  The Dear Passengers developer also addressed how the trailer was made. Kozyura said every small detail
                  viewers were dissecting had been made by the team and described the jokes as absurd humor created
                  because the developers found it funny. That statement is relevant to the creative process; it does
                  not mean every object, label, or scene in the edited Dear Passengers trailer is guaranteed to appear
                  unchanged at launch.
                </p>

              </section>

              <section id="viral">
                <span className="kicker">VIRAL REVEAL</span>
                <h2>How the Dear Passengers Reveal Reached One Million Wishlists</h2>
                <p>
                  FLEXUS announced that Dear Passengers reached one million Steam wishlists in two days and entered the
                  Top 25 most-wishlisted games. The studio said this happened without paid advertising, paid creator
                  promotion, or an established PC audience. GameDev DOU&apos;s July 17 interview records a later
                  snapshot of about 1.2 million wishlists.
                </p>
                <p>
                  Kozyura said he published the Dear Passengers Steam page and went to sleep, then woke to messages about
                  the trailer spreading on X. He put the social video at roughly 45 million views by interview time.
                  These figures describe developer-reported reach at specific moments. Steam does not provide the public
                  with a live Dear Passengers wishlist counter, and an X view is not a sale, download, or active player.
                </p>
                <p>
                  The safest summary is therefore precise: Dear Passengers has an official one-million-in-two-days
                  announcement, a Top 25 developer-reported position, and an attributed 1.2-million interview figure.
                  Our <Link href="/dear-passengers-news">Dear Passengers news timeline</Link> preserves the 500,000 and
                  700,000 earlier milestones instead of rewriting the story around only the largest number.
                </p>

              </section>

              <section id="demo-release">
                <span className="kicker">NEXT DEPARTURE</span>
                <h2>What FLEXUS Says About the Dear Passengers Demo and Release</h2>
                <p>
                  The Dear Passengers developer has described a clear high-level sequence: release a demo, let streamers
                  play, and then move toward the full release. A Gamescom build and a later public demo have been
                  discussed, but FLEXUS has not published the public download date, store mechanism, duration, content,
                  maximum crew size, or whether the event and home builds are identical.
                </p>
                <p>
                  Our <Link href="/dear-passengers-demo">Dear Passengers demo guide</Link> tracks those access details.
                  Gamescom 2026 runs August 26–30 in Cologne after Opening Night Live on August 25, but the Dear
                  Passengers developer has not announced a hall, stand number, queue system, or playable timetable.
                  Event dates should not be misreported as a public demo release date.
                </p>
                <p>
                  For the full game, Steam lists Dear Passengers for 2026. Kozyura said FLEXUS still planned to release
                  the game this year but did not want to rush. He explained that releasing a bad, low-quality, or
                  insufficiently polished version would hurt the studio more than taking additional time. The correct
                  <Link href="/dear-passengers-release-date"> Dear Passengers release-date</Link> answer remains “2026,
                  exact date unannounced.”
                </p>
                <p>
                  This distinction protects readers from false precision. The Dear Passengers developer has expressed a
                  target and a quality principle, not promised a particular month. If Steam changes from “2026” to a
                  calendar date, the release guide and Dear Passengers news log will update together.
                </p>
              </section>

              <section id="confirmed">
                <span className="kicker">EVIDENCE BOARD</span>
                <h2>Dear Passengers Developer Facts vs Open Questions</h2>
                <div className="platform-table" role="table" aria-label="Dear Passengers developer evidence status">
                  <div className="platform-head" role="row"><span role="columnheader">Claim</span><span role="columnheader">Status</span><span role="columnheader">Evidence</span></div>
                  <div role="row"><strong role="cell">Developer and publisher</strong><span className="status-confirmed" role="cell">Confirmed</span><span role="cell">Steam lists FLEXUS in both roles</span></div>
                  <div role="row"><strong role="cell">Kyiv studio founded in 2020</strong><span className="status-confirmed" role="cell">First-party</span><span role="cell">Official FLEXUS company profile</span></div>
                  <div role="row"><strong role="cell">70+ people and 300M+ downloads</strong><span className="status-confirmed" role="cell">Studio-reported</span><span role="cell">Official FLEXUS company figures</span></div>
                  <div role="row"><strong role="cell">One million wishlists in two days</strong><span className="status-confirmed" role="cell">Developer-reported</span><span role="cell">FLEXUS announcement</span></div>
                  <div role="row"><strong role="cell">About 1.2 million wishlists</strong><span className="status-confirmed" role="cell">Attributed snapshot</span><span role="cell">July 17 founder interview</span></div>
                  <div role="row"><strong role="cell">Exact launch date</strong><span className="status-open" role="cell">Unannounced</span><span role="cell">Steam shows only 2026</span></div>
                  <div role="row"><strong role="cell">Public demo date</strong><span className="status-open" role="cell">Unannounced</span><span role="cell">Plan confirmed; timing open</span></div>
                </div>
                <p>
                  A compact status board prevents two common errors: treating every FLEXUS target as a finished Dear
                  Passengers feature, or dismissing a named developer statement because it is not yet visible in a Steam
                  field. Read our <Link href="/dear-passengers-confirmed-features">confirmed features and rumor
                  check</Link> for product details and the{' '}
                  <Link href="/dear-passengers-trailer">official trailer breakdown</Link> for scene-level evidence.
                </p>
              </section>

              <section id="developer-faq">
                <span className="kicker">STUDIO QUESTIONS</span>
                <h2>Dear Passengers Developer FAQ</h2>
                <p>
                  These answers summarize the most reliable Dear Passengers developer information available on July 19,
                  2026. Studio totals remain labeled as FLEXUS figures, interview numbers remain attributed, and missing
                  product details are not filled with assumptions.
                </p>
                <FAQ items={faqs} />
              </section>

              <section className="related-guide related-links-panel">
                <span className="kicker">CONTINUE THE BRIEFING</span>
                <h2>Follow Dear Passengers From the Studio to Release</h2>
                <p>
                  Return to the <Link href="/">complete Dear Passengers game guide</Link>, follow dated{' '}
                  <Link href="/dear-passengers-news">Dear Passengers news</Link>, check the{' '}
                  <Link href="/dear-passengers-demo">Dear Passengers demo status</Link>, or review the{' '}
                  <Link href="/dear-passengers-release-date">Dear Passengers 2026 release window</Link>. Each page links
                  back here when a claim depends on the Dear Passengers developer rather than a Steam product field.
                </p>
                <div className="related-actions">
                  <a className="button" href={FLEXUS_URL} target="_blank" rel="noopener noreferrer">Official FLEXUS site ↗</a>
                  <a className="button button-ghost" href={DOU_INTERVIEW_URL} target="_blank" rel="noopener noreferrer">Founder interview ↗</a>
                  <a className="button button-ghost" href={DEV_UA_URL} target="_blank" rel="noopener noreferrer">Wishlist report ↗</a>
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
