import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const TOP_WISHLISTS_URL =
  'https://store.steampowered.com/search/?filter=popularwishlist&ignore_preferences=1';
const COMMUNITY_URL = 'https://steamcommunity.com/app/4534960';
const FLEXUS_URL = 'https://www.linkedin.com/company/flexusgames/';
const INTERVIEW_URL = 'https://dev.ua/en/news/dear-passengers-1784100084';
const DOU_INTERVIEW_URL = 'https://gamedev.dou.ua/articles/dear-passengers-interview/?from=community_widget_post';
const AI_DISCUSSION_URL = 'https://steamcommunity.com/app/4534960/discussions/0/579425059539575636/';
const TRAILER_DISCUSSION_URL = 'https://steamcommunity.com/app/4534960/discussions/0/579425059539564294/';
const LATEST_STEAM_UPDATE_URL =
  'https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1838407329264623';
const PAGE_URL = 'https://dearpassengers.net/dear-passengers-news/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers News: Demo, Release & Wishlist Updates' },
  description:
    'Follow verified Dear Passengers news, including its current No. 5 Steam wishlist rank, 1.5-million milestone, demo plans, release status, and updates.',
  alternates: { canonical: '/dear-passengers-news/', languages: { en: '/dear-passengers-news/', ar: '/ar/dear-passengers-news/', de: '/de/dear-passengers-news/', tr: '/tr/dear-passengers-haberleri/', 'pt-BR': '/pt-br/dear-passengers-noticias/', es: '/es/dear-passengers-noticias/', 'my-MM': '/my/dear-passengers-news/', 'x-default': '/dear-passengers-news/' } },
  openGraph: {
    title: 'Dear Passengers News and Verified Update Timeline',
    description: 'A dated, source-led log of Dear Passengers demo, release, wishlist, platform, and gameplay updates.',
    url: PAGE_URL,
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Dear Passengers news and update timeline' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers News: Demo, Release & Wishlist Updates',
    description: 'The latest confirmed Dear Passengers announcements in one dated source log.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'What is the latest Dear Passengers news?',
    answer:
      'Dear Passengers is currently No. 5 on Steam’s public Top Wishlists list when preference filtering is disabled. The latest FLEXUS update separately reports 1.5 million wishlists. The rank is a changing public store position; the total is a developer-reported figure. Steam still lists a broad 2026 Windows release window.',
  },
  {
    question: 'Did Dear Passengers reach 1.5 million wishlists?',
    answer:
      'FLEXUS announced 1.5 million wishlists in its latest official Steam update after earlier reporting 700,000 and one million milestones. These are developer-reported figures rather than publicly auditable Steam statistics, and they do not represent sales or active players.',
  },
  {
    question: 'Is Dear Passengers one of Steam’s most-wishlisted games?',
    answer:
      'Yes. Dear Passengers appeared at No. 5 on Steam’s public Top Wishlists page during the August 1 check with preference filtering disabled. This is a dated ranking snapshot, not a permanent position, sales count, review score, or active-player statistic.',
  },
  {
    question: 'When is the next Dear Passengers update?',
    answer:
      'FLEXUS has not published a fixed update schedule. The known next playable milestone is a Gamescom demo, followed later by a public demo, but exact dates and access details remain unannounced.',
  },
  {
    question: 'Has the Dear Passengers release date changed?',
    answer:
      'No exact date has been announced. Steam continues to list Dear Passengers for 2026 on Windows PC. Claims about a specific month, day, console launch, or Early Access date are unconfirmed.',
  },
  {
    question: 'Where should I check official Dear Passengers news?',
    answer:
      'Check the Dear Passengers Steam page and Community Hub plus FLEXUS-controlled channels. This independent timeline links those sources and labels interviews, developer-reported milestones, current store facts, and unanswered questions separately.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: 'Dear Passengers News: Demo, Release and Wishlist Updates',
  description: 'A dated source log for confirmed Dear Passengers announcements and store-page changes.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-07-17',
  dateModified: '2026-08-01',
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
    { '@type': 'ListItem', position: 2, name: 'Dear Passengers News', item: PAGE_URL },
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

export default function DearPassengersNewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <main id="main-content">
        <article>
          <header className="article-hero">
            <Image src="/images/release-date.webp" alt="Dear Passengers news desk and 2026 flight update board" fill sizes="100vw" priority />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers Game</Link><span>/</span><span>News</span>
              </nav>
              <div className="eyebrow"><span>●</span> VERIFIED UPDATE LOG · AUGUST 1, 2026</div>
              <h1>Dear Passengers News:<br /><em>Demo, Release & Wishlist Updates</em></h1>
              <p>
                This <strong>Dear Passengers news</strong> desk records dated announcements without turning community
                questions into facts. Dear Passengers now appears at No. 5 on Steam&apos;s public Top Wishlists page,
                while FLEXUS reports 1.5 million wishlists. Demo plans and the broad 2026
                release goal remain in the dated record below.
              </p>
              <div className="hero-actions">
                <Link className="button" href="/dear-passengers-demo">Check demo status →</Link>
                <a className="button button-ghost" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Official Steam page ↗</a>
              </div>
              <div className="article-meta">
                <span>Last checked August 1, 2026</span><span>Steam rank: No. 5</span><span>Official milestone: 1.5M wishlists</span>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>UPDATE BOARD</p>
              <a href="#latest">Latest headlines</a>
              <a href="#timeline">Update timeline</a>
              <a href="#demo-news">Demo news</a>
              <a href="#wishlists">Wishlist milestone</a>
              <a href="#community-updates">Community updates</a>
              <a href="#unchanged">Still unconfirmed</a>
              <a href="#follow">Follow updates</a>
              <a href="#news-faq">FAQ</a>
              <a className="toc-cta" href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer">Steam hub ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote
                checked="August 1, 2026"
                note="We prioritize the official Steam listing and FLEXUS-controlled channels. The wishlist rank is a dated public-store snapshot; totals are labeled as developer-reported, and unresolved features remain unconfirmed."
              />

              <section id="latest">
                <span className="kicker">LATEST VERIFIED BRIEFING</span>
                <h2>Latest Dear Passengers News</h2>
                <p className="snippet-answer">
                  The latest verified <strong>Dear Passengers news</strong> is its No. 5 position on Steam&apos;s public
                  Top Wishlists page during the August 1 check with preference filtering disabled. FLEXUS&apos;s latest
                  official post separately reports 1.5 million wishlists. Neither update changes the 2026 Windows
                  release window currently shown on Steam.
                </p>
                <p>
                  These updates arrived immediately after the reveal and explain why Dear Passengers searches expanded
                  beyond the trailer. Players now want a demo date, maximum crew size, solo details, controller support,
                  console plans, localization, price, and an exact release date. Most of those questions still do not
                  have official answers, so this page separates new facts from the growing request list.
                </p>

                <div className="fact-callout">
                  <span>CURRENT HEADLINE</span>
                  <strong>No. 5 on Steam Top Wishlists</strong>
                  <p>Public Steam rank checked August 1 · 1.5M total reported by FLEXUS · neither is a sales or player count.</p>
                </div>

                <figure className="article-source-figure">
                  <Image
                    src="/images/dear-passengers-1-5-million-wishlists.webp"
                    alt="Official Dear Passengers artwork celebrating 1.5 million Steam wishlists with the game characters holding a sign"
                    width={800}
                    height={450}
                    sizes="(max-width: 900px) calc(100vw - 32px), 790px"
                  />
                  <figcaption>
                    Official milestone artwork published by FLEXUS via{' '}
                    <a href={LATEST_STEAM_UPDATE_URL} target="_blank" rel="noopener noreferrer">Steam ↗</a>.
                    {' '}© FLEXUS. Shown as source material, not an independent player-count audit.
                  </figcaption>
                </figure>

                <h3>Why This Dear Passengers News Page Exists</h3>
                <p>
                  A rolling Dear Passengers news hub is more useful than many thin posts. It provides one current answer, preserves earlier
                  milestones, and links every important claim to the page that explains it in depth. Demo searches go to
                  the <Link href="/dear-passengers-demo">Dear Passengers demo guide</Link>; launch searches go to the{' '}
                  <Link href="/dear-passengers-release-date">Dear Passengers release date guide</Link>; co-op questions
                  go to the <Link href="/dear-passengers-player-count">player count and multiplayer guide</Link>.
                </p>
                <p>
                  Each update is also classified by evidence. A Dear Passengers Steam field is a current first-party product fact. A
                  FLEXUS post is a developer statement, with audience numbers labeled as developer-reported. A named
                  Dear Passengers founder comment is attributed to the interview where it appeared. Trailer scenes can illustrate the
                  premise but cannot prove a lobby limit or final control scheme. Community discussions show demand,
                  not implementation. This evidence ladder keeps Dear Passengers news useful when viral reposts strip
                  away dates, qualifiers, and links to the original announcement.
                </p>
              </section>

              <section id="timeline">
                <span className="kicker">DATED SOURCE LOG</span>
                <h2>Dear Passengers Announcement Timeline</h2>
                <div className="timeline">
                  <div><time>JUL 14<br />2026</time><p><strong>Dear Passengers is publicly revealed.</strong> The Steam page identifies FLEXUS as developer and publisher, sets a 2026 Windows release window, and lists single-player plus online co-op.</p></div>
                  <div><time>JUL 15<br />2026</time><p><strong>The developer reports more than 500,000 wishlists.</strong> In a founder comment published by dev.ua, FLEXUS also confirms a Gamescom demo and says a public demo will come later.</p></div>
                  <div><time>JUL 16<br />2026</time><p><strong>FLEXUS reports 700,000 wishlists in 36 hours.</strong> The official company post describes rapid sharing, memes, discussion, and wishlist growth after the reveal.</p></div>
                  <div><time>JUL 17<br />2026</time><p><strong>Dear Passengers reaches one million wishlists in two days.</strong> FLEXUS says the game entered Steam&apos;s Top 25 most-wishlisted titles without paid advertising or creator promotion.</p></div>
                  <div><time>JUL 17<br />2026</time><p><strong>Founder interview adds context.</strong> Kozyura reports about 1.2 million wishlists at interview time, roughly 45 million X trailer views, a demo-to-streamer-to-launch sequence, and a 2026 goal without rushing an unpolished build.</p></div>
                  <div><time>JUL 17<br />2026</time><p><strong>A developer answers an AI-use question on Steam.</strong> The direct reply says no AI was used in the creation of Dear Passengers and distinguishes the game from a separate mobile-project job listing.</p></div>
                  <div><time>JUL 17–18<br />2026</time><p><strong>Trailer user-name criticism spreads through community and media posts.</strong> This is tracked as discussion around promotional footage, not as a confirmed change to gameplay, release timing, or availability.</p></div>
                  <div><time>JUL 19<br />2026</time><p><strong>FLEXUS reports 1.5 million wishlists.</strong> The official Steam update also describes ongoing work on more mechanics, events, suspicious luggage, and passengers without naming a finished feature, date, or release-scope change.</p></div>
                  <div><time>JUL 22<br />2026</time><p><strong>Dear Passengers appears at No. 12 on Steam&apos;s public Top Wishlists page.</strong> This first-party store rank was checked with preference filtering disabled. It can change as wishlists and other unreleased games change.</p></div>
                  <div><time>JUL 24<br />2026</time><p><strong>Dear Passengers reaches No. 9 on Steam&apos;s public Top Wishlists page.</strong> That first-party ordering placed the game inside the top ten; the underlying wishlist total remains private, and the rank can change.</p></div>
                  <div><time>JUL 28<br />2026</time><p><strong>Dear Passengers moves to No. 8 on Steam&apos;s public Top Wishlists page.</strong> The check again disabled preference filtering. The movement is a dated store-ordering change, not a new public wishlist total, sales count, or player count.</p></div>
                  <div><time>AUG 1<br />2026</time><p><strong>Dear Passengers enters Steam&apos;s top five at No. 5.</strong> Dated preference-neutral snapshot; no public total.</p></div>
                  <div className="future"><time>NEXT<br />UPDATE</time><p><strong>Dear Passengers dates and access details remain open.</strong> Watch for Gamescom booth information, public demo distribution, a precise launch date, price, lobby size, recommended specs, or expanded platform support.</p></div>
                </div>
                <p>
                  The log uses the publication or announcement date available from each source. It does not manufacture
                  daily entries when nothing changed. When new Dear Passengers news arrives, the next entry should say
                  what changed, link the original evidence, and update the relevant evergreen guide.
                </p>
              </section>

              <section id="demo-news">
                <span className="kicker">TEST FLIGHT UPDATE</span>
                <h2>Dear Passengers Demo News</h2>
                <p>
                  The strongest post-reveal Dear Passengers product update is the direct statement about playable access. Semen Kozyura
                  told dev.ua that FLEXUS was preparing a Dear Passengers demo for Gamescom and would release a public
                  demo later. This moves the Dear Passengers demo from “not announced” to “confirmed plan,” but it does not create a
                  public download or date.
                </p>
                <p>
                  The Dear Passengers Steam page currently has no demo button or Playtest request panel. FLEXUS has not said whether the public
                  build will use Steam, how long it will remain available, whether it will support online co-op, or what
                  content it includes. Our <Link href="/dear-passengers-demo">complete Dear Passengers demo status</Link>
                  explains safe download checks, beta terminology, Gamescom questions, hardware preparation, and the
                  evidence required before any unofficial claim should be trusted.
                </p>

                <h3>Ukrainian Localization Was Also Confirmed</h3>
                <p>
                  The same founder comment says Ukrainian localization will be included. Steam already lists Ukrainian
                  among six interface languages together with English, Arabic, Simplified Chinese, Turkish, and Japanese.
                  The store table does not mark full audio or subtitles. Our{' '}
                  <Link href="/dear-passengers-system-requirements">system requirements and language guide</Link> keeps
                  those interface and compatibility details together.
                </p>
              </section>

              <section id="wishlists">
                <span className="kicker">AUDIENCE MILESTONE</span>
                <h2>Dear Passengers Reaches 1.5 Million Wishlists</h2>
                <p>
                  FLEXUS now says Dear Passengers reached 1.5 million wishlists after earlier reporting 500,000, 700,000,
                  and one million milestones. Dear Passengers moved from No. 12 on July 22 to No. 9 on July 24, No. 8 on July 28,
                  and No. 5 on August 1
                  on Steam&apos;s public{' '}
                  <a href={TOP_WISHLISTS_URL} target="_blank" rel="noopener noreferrer">Top Wishlists list ↗</a> with
                  preference filtering disabled. Steam does not expose the underlying total publicly, so 1.5 million
                  remains a developer-reported figure.
                </p>
                <p>
                  In the July 17 GameDev DOU interview, Kozyura said the count was about 1.2 million. That attributed
                  interview snapshot now sits between the official one-million and 1.5-million posts instead of being
                  silently replaced. The same interview puts the trailer at roughly 45 million views on X.
                </p>
                <p>
                  The result signals unusually strong early interest, but it does not reveal sales, concurrent players,
                  review sentiment, or final launch quality. Wishlists can help a developer measure attention and notify
                  interested accounts at release. They do not guarantee a particular price, feature, platform, demo
                  schedule, or 2026 launch day.
                </p>

                <h3>What the Wishlist Surge Does and Does Not Prove</h3>
                <p>
                  The evidence supports two different claims: FLEXUS publicly reported rapid wishlist growth, and Steam&apos;s
                  public ordering placed the game at No. 5 during the August 1 check. It does not expose store traffic, conversion,
                  sales, or active players, and it does not confirm a particular mechanic, passenger type, event, or luggage
                  item. Interested players should use the official listing instead of paying for access promises.
                </p>
              </section>

              <section id="community-updates">
                <span className="kicker">SOURCE-LABELED DISCUSSION</span>
                <h2>Dear Passengers AI Response and Trailer Discussion</h2>
                <p>
                  A Dear Passengers Steam Community thread questioned whether generative AI had been used in Dear Passengers after
                  readers connected a FLEXUS job listing to the game. A developer account replied that the listing
                  concerned a separate mobile project and stated, “No AI was used in the creation of Dear Passengers.”
                  This page records that sentence as a direct developer response, not as an independent technical audit.
                </p>
                <p>
                  A separate discussion developed around a controversial user name visible in the official Dear
                  Passengers trailer. Community and media posts treated the reference as intentional or inappropriate.
                  The reliable fact is that the text was visible in promotional footage and prompted criticism. The
                  discussion does not establish a new game feature, rating, launch delay, content policy, or final-build
                  asset, and it should not be expanded with motives that FLEXUS has not documented.
                </p>
                <p>
                  Both items belong in the rolling news hub instead of separate SEO pages. They are time-sensitive,
                  reputational topics with limited primary evidence. Keeping them here allows a neutral source link,
                  update date, and correction path without turning short-lived controversy into several thin articles.
                  If FLEXUS publishes a formal statement or updates the trailer, the timeline can record the change.
                </p>

                <div className="platform-table" role="table" aria-label="Dear Passengers community update evidence">
                  <div className="platform-head" role="row"><span role="columnheader">Topic</span><span role="columnheader">Evidence status</span><span role="columnheader">Current conclusion</span></div>
                  <div role="row"><strong role="cell">Dear Passengers AI use question</strong><span className="status-confirmed" role="cell">Direct developer reply</span><span role="cell">Developer says no AI was used for Dear Passengers</span></div>
                  <div role="row"><strong role="cell">Dear Passengers trailer user name</strong><span className="status-confirmed" role="cell">Visible footage + discussion</span><span role="cell">Promotional-material criticism; no product-status change</span></div>
                  <div role="row"><strong role="cell">Dear Passengers release and Demo</strong><span className="status-open" role="cell">Unchanged</span><span role="cell">2026 Steam window; public Demo still planned without a date</span></div>
                </div>

                <p>
                  Read the <a href={AI_DISCUSSION_URL} target="_blank" rel="noopener noreferrer">developer AI response
                  on Steam ↗</a> and the <a href={TRAILER_DISCUSSION_URL} target="_blank" rel="noopener noreferrer">
                  trailer-related Steam discussion ↗</a>. The{' '}
                  <Link href="/dear-passengers-trailer">Dear Passengers trailer breakdown</Link> separately explains
                  what promotional footage can and cannot confirm.
                </p>
              </section>

              <section id="unchanged">
                <span className="kicker">OPEN QUESTIONS</span>
                <h2>What the Latest Dear Passengers News Has Not Confirmed</h2>
                <p>
                  The exact Dear Passengers release date remains 2026 with no month or day. Windows PC via Steam remains the only confirmed
                  platform. FLEXUS has not announced PlayStation, Xbox, Nintendo Switch, Mac, Linux, another PC storefront,
                  price, preorder, Early Access, or preload. The public demo has no date, and the maximum Dear Passengers
                  player count is still not published.
                </p>
                <p>
                  Controller support, split screen, crossplay, Steam Deck status, VR, proximity voice chat, dedicated
                  servers, server browser, cloud saves, achievements, and recommended PC specifications are also open.
                  Steam lists in-game chat and online interactivity, but that does not by itself define a proximity voice
                  system. Community requests are useful signals for future coverage, not evidence of implementation.
                </p>

                <div className="platform-table" role="table" aria-label="Current Dear Passengers status summary">
                  <div className="platform-head" role="row"><span role="columnheader">Topic</span><span role="columnheader">Status</span><span role="columnheader">Verified answer</span></div>
                  <div role="row"><strong role="cell">Dear Passengers release</strong><span className="status-confirmed" role="cell">Confirmed</span><span role="cell">2026, Windows PC on Steam</span></div>
                  <div role="row"><strong role="cell">Dear Passengers play modes</strong><span className="status-confirmed" role="cell">Confirmed</span><span role="cell">Single-player and online co-op</span></div>
                  <div role="row"><strong role="cell">Dear Passengers public demo</strong><span className="status-confirmed" role="cell">Planned</span><span role="cell">Coming later; no date or download</span></div>
                  <div role="row"><strong role="cell">Dear Passengers maximum players</strong><span className="status-open" role="cell">Open</span><span role="cell">No official number</span></div>
                  <div role="row"><strong role="cell">Dear Passengers console versions</strong><span className="status-open" role="cell">Open</span><span role="cell">No official listing</span></div>
                </div>
              </section>

              <section id="follow">
                <span className="kicker">SOURCE CHECKLIST</span>
                <h2>How to Follow Reliable Dear Passengers Updates</h2>
                <ol className="steps article-steps">
                  <li><span>01</span><p>Use the official Dear Passengers Steam listing for release, platform, feature, language, and hardware fields.</p></li>
                  <li><span>02</span><p>Follow the Dear Passengers Steam Community Hub for updates connected to the official app.</p></li>
                  <li><span>03</span><p>Check FLEXUS-controlled channels for Dear Passengers studio statements and developer-reported milestones.</p></li>
                  <li><span>04</span><p>For Dear Passengers interviews, distinguish the speaker&apos;s statement from the publication&apos;s interpretation.</p></li>
                  <li><span>05</span><p>Ignore Dear Passengers exact dates, downloads, or platform promises without a first-party source.</p></li>
                </ol>
                <p>
                  This Dear Passengers workflow protects readers from copied errors and makes corrections straightforward: when
                  Steam or FLEXUS changes a fact, we update the timeline, the specialist page, the modification date,
                  and the sitemap entry together.
                </p>
              </section>

              <section id="news-faq">
                <span className="kicker">NEWS QUESTIONS</span>
                <h2>Dear Passengers News FAQ</h2>
                <FAQ items={faqs} />
              </section>

              <section className="related-guide related-links-panel">
                <span className="kicker">PRIMARY SOURCES</span>
                <h2>Verify the Dear Passengers News</h2>
                <p>
                  Read the <a href={LATEST_STEAM_UPDATE_URL} target="_blank" rel="noopener noreferrer">official 1.5-million update ↗</a>,
                  the <a href={TOP_WISHLISTS_URL} target="_blank" rel="noopener noreferrer">Steam Top Wishlists list ↗</a>,
                  the <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">official Steam listing ↗</a>,
                  the <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer">Steam Community Hub ↗</a>, the{' '}
                  <a href={FLEXUS_URL} target="_blank" rel="noopener noreferrer">FLEXUS company updates ↗</a>, and the{' '}
                  <a href={INTERVIEW_URL} target="_blank" rel="noopener noreferrer">dev.ua founder comment ↗</a>. Then
                  return to the <Link href="/">Dear Passengers game guide</Link> for the complete sourced overview.
                </p>
                <div className="related-actions">
                  <Link className="button" href="/dear-passengers-demo">Dear Passengers demo →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-release-date">Dear Passengers release date guide →</Link>
                  <Link className="button button-ghost" href="/de/dear-passengers-release/" hrefLang="de">Deutscher Release-Guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-confirmed-features">Dear Passengers confirmed features →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-developer-flexus">Meet the developer →</Link>
                </div>
                <p>
                  For the studio background and founder statements, read our{' '}
                  <Link href="/dear-passengers-developer-flexus">Dear Passengers developer profile</Link> or open the{' '}
                  <a href={DOU_INTERVIEW_URL} target="_blank" rel="noopener noreferrer">GameDev DOU interview ↗</a>.
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
