import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const DOU_INTERVIEW_URL = 'https://gamedev.dou.ua/articles/dear-passengers-interview/?from=community_widget_post';
const PAGE_URL = 'https://dearpassengers.net/dear-passengers-release-date/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Release Date: 2026 Steam Launch Guide' },
  description:
    'Find the latest Dear Passengers release date information, confirmed 2026 launch window, Steam availability, platform status, demo news, and official updates.',
  alternates: {
    canonical: '/dear-passengers-release-date/',
    languages: {
      en: '/dear-passengers-release-date/',
      ar: '/ar/dear-passengers-release/',
      de: '/de/dear-passengers-release/',
      tr: '/tr/dear-passengers-cikis-tarihi/',
      'pt-BR': '/pt-br/dear-passengers-data-de-lancamento/',
      'zh-CN': '/zh-cn/dear-passengers-release-date/',
      'x-default': '/dear-passengers-release-date/',
    },
  },
  openGraph: {
    title: 'Dear Passengers Release Date: Everything Confirmed for 2026',
    description:
      'The confirmed Steam release window, platform status, demo news, and open launch questions in one independent briefing.',
    url: PAGE_URL,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dear Passengers release date and 2026 Steam launch guide',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers Release Date: 2026 Steam Launch Guide',
    description: 'Track the confirmed 2026 window, Steam status, platforms, demo, and official updates.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'What is the Dear Passengers release date?',
    answer:
      'The Dear Passengers release date is currently listed only as 2026. In a July 17 interview, FLEXUS founder Semen Kozyura said the studio still plans to release the game this year but will not rush an unfinished build. No exact month or day has been announced.',
  },
  {
    question: 'When does Dear Passengers come out on Steam?',
    answer:
      'Dear Passengers is planned to come out on Steam for Windows PC in 2026. The store page is live for wishlisting, but purchase, preload, and final launch timing are not available yet.',
  },
  {
    question: 'Is Dear Passengers coming to PS5 or Xbox?',
    answer:
      'No Dear Passengers PS5 or Xbox version has been announced. Steam on Windows PC is the only confirmed platform. A console version remains possible, but it should not be described as planned until FLEXUS or a platform holder confirms it.',
  },
  {
    question: 'Will Dear Passengers be released on Nintendo Switch?',
    answer:
      'There is currently no announced Dear Passengers Nintendo Switch or Switch 2 edition. The official materials available at this update focus on the Windows PC release through Steam.',
  },
  {
    question: 'Is there a Dear Passengers demo, beta, or playtest?',
    answer:
      'FLEXUS founder Semen Kozyura says the studio is preparing a Dear Passengers demo for Gamescom and will release a public demo later. The public build is not downloadable yet, and no date, beta registration, or Steam Playtest has been announced.',
  },
  {
    question: 'How much will Dear Passengers cost?',
    answer:
      'FLEXUS has not announced a Dear Passengers price. Steam does not show a preorder price or purchase option. Currency conversions, launch discounts, bundles, and regional pricing therefore remain unknown.',
  },
  {
    question: 'Will the release include Chinese language support?',
    answer:
      'Yes at the interface level. The Dear Passengers Steam page currently lists English, Arabic, Simplified Chinese, Turkish, Ukrainian, and Japanese interfaces. Full audio and subtitle support are not marked in the current table, and Traditional Chinese is not listed.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers Release Date: Everything Confirmed for 2026',
  description:
    'An independent guide to the confirmed Dear Passengers release window, Steam status, platforms, and demo news.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-07-15',
  dateModified: '2026-07-24',
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
    { '@type': 'ListItem', position: 2, name: 'Dear Passengers Release Date', item: PAGE_URL },
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

export default function ReleaseDatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header languageHref="/de/dear-passengers-release/" />

      <main id="main-content">
        <article>
          <header className="article-hero">
            <Image
              src="/images/release-date.webp"
              alt="Dear Passengers release date guide with an airliner approaching a 2026 arrivals board"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers Game</Link><span>/</span><span>Release Date</span>
              </nav>
              <div className="eyebrow"><span>●</span> RELEASE DESK · VERIFIED AGAINST STEAM</div>
              <h1>Dear Passengers Release Date:<br /><em>Everything Confirmed for 2026</em></h1>
              <p>
                The <strong>Dear Passengers release date</strong> is currently scheduled for 2026 on Windows PC through
                Steam. FLEXUS has not announced an exact month or day. This briefing explains what is official, what is
                still unknown, which platforms are confirmed, and how to follow demo, beta, playtest, price, language,
                and launch updates without confusing speculation for a release announcement.
              </p>
              <div className="hero-actions">
                <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Wishlist on Steam ↗</a>
                <Link className="button button-ghost" href="/">Explore the game guide →</Link>
              </div>
              <div className="article-meta">
                <span>Published July 15, 2026</span><span>Last checked July 24, 2026</span><span>Official window: 2026</span>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>IN THIS BRIEFING</p>
              <a href="#confirmed">Confirmed date</a>
              <a href="#platforms">Platforms</a>
              <a href="#demo">Demo & beta</a>
              <a href="#timeline">Timeline</a>
              <a href="#before-launch">Before launch</a>
              <a href="#release-faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam page ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote note="Dear Passengers release claims are checked against Steam; community questions and editorial expectations are labeled separately." />
              <section id="confirmed">
                <span className="kicker">CURRENT ANSWER</span>
                <h2>What Is the Dear Passengers Release Date?</h2>
                <p className="snippet-answer">
                  The <strong>Dear Passengers release date</strong> is planned for 2026 on Windows PC via Steam. FLEXUS
                  has not confirmed an exact day or month, and the store page does not list a price, preorder, demo, or
                  preload. Steam wishlisting is available now for official availability notifications.
                </p>
                <p>
                  That is the complete official answer at the time of this update. A broad year window is common for a
                  game that has opened its store page before final scheduling. It allows the developer to collect
                  wishlists and show the concept without publishing a date that may later need to move. The correct way
                  to report the <strong>Dear Passengers release date</strong> is therefore “2026, exact date not
                  announced,” not a guessed quarter or countdown.
                </p>
                <p>
                  A July 17 GameDev DOU interview provides the clearest recent context. Founder Semen Kozyura said
                  FLEXUS still aims to release Dear Passengers in 2026, but the team will not hurry and ship a poor or
                  insufficiently polished build. That supports the current year while leaving the exact{' '}
                  <strong>Dear Passengers release date</strong> open.
                </p>
                <p>
                  The Dear Passengers Steam page uses the planned release label and does not offer a purchase button. There is no public
                  launch price, launch discount, preorder package, edition comparison, or preload time. Search pages
                  that provide those details without an official source are filling gaps rather than reporting confirmed
                  information. This page will update its answer and modification date when the store listing changes.
                </p>

                <div className="fact-callout">
                  <span>CONFIRMED</span>
                  <strong>2026 · Windows PC · Steam</strong>
                  <p>Dear Passengers exact date, price, demo, preorder, and console versions remain unannounced.</p>
                </div>

                <h3>What FLEXUS and Steam Have Confirmed</h3>
                <p>
                  FLEXUS is named as developer and publisher, while Steam is the confirmed storefront. The official
                  listing identifies Dear Passengers as action, adventure, and indie, with single-player and online co-op
                  features. It also provides the current Windows minimum requirements and six interface languages.
                  These details establish the first launch target but do not guarantee that every feature is final.
                </p>

                <h3>What Has Not Been Announced Yet</h3>
                <p>
                  The missing details include the exact <strong>Dear Passengers release date</strong>, price, public
                  demo, beta or playtest schedule, preorder options, launch discount, recommended PC requirements,
                  controller support, Steam Deck rating, achievements, cloud saves, and a detailed maximum player count.
                  Traditional Chinese, Korean, and many other localizations are absent from the current table. Missing does not mean
                  cancelled; it means there is no reliable public answer yet.
                </p>
                <p>
                  Multiplayer-specific changes are tracked separately in the{' '}
                  <Link href="/dear-passengers-player-count">Dear Passengers player count and co-op guide</Link>, which
                  distinguishes Steam feature fields from trailer interpretation and community requests.
                </p>
              </section>

              <section id="platforms">
                <span className="kicker">DESTINATION BOARD</span>
                <h2>Dear Passengers Release Date by Platform</h2>
                <p>
                  A platform-specific <strong>Dear Passengers release date</strong> exists only in broad form for PC:
                  Steam lists the Windows version for 2026. No console storefront, platform trailer, certification
                  announcement, or holder-issued news post has been published for PlayStation, Xbox, or Nintendo.
                  Because platform plans can change, this table distinguishes confirmed availability from possibility.
                </p>

                <div className="platform-table" role="table" aria-label="Dear Passengers platform release status">
                  <div className="platform-head" role="row"><span role="columnheader">Platform</span><span role="columnheader">Status</span><span role="columnheader">Current source</span></div>
                  <div role="row"><strong role="cell">Windows PC</strong><span className="status-confirmed" role="cell">2026 confirmed</span><span role="cell">Steam store page</span></div>
                  <div role="row"><strong role="cell">PlayStation 5</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No official listing</span></div>
                  <div role="row"><strong role="cell">Xbox Series X|S</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No official listing</span></div>
                  <div role="row"><strong role="cell">Nintendo Switch / Switch 2</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No official listing</span></div>
                  <div role="row"><strong role="cell">Mac / Linux</strong><span className="status-open" role="cell">Not announced</span><span role="cell">Windows requirements only</span></div>
                </div>

                <h3>Dear Passengers PC and Steam Release</h3>
                <p>
                  Windows players can already add Dear Passengers to their Steam wishlist. The listing does not currently show
                  Early Access wording, so it should not be described as a Dear Passengers Early Access launch unless the developer
                  changes the page. It also does not confirm Epic Games Store, GOG, Microsoft Store, or another PC
                  storefront. Steam is the one verified destination for the 2026 release window.
                </p>

                <h3>PS5, Xbox and Nintendo Switch Status</h3>
                <p>
                  There is no announced console <strong>Dear Passengers release date</strong>. A game&apos;s controller-
                  friendly appearance or broad co-op appeal does not prove certification, port development, crossplay,
                  or a simultaneous console launch. If a console edition is announced later, the safest confirmation
                  will be an official platform store page supported by FLEXUS communication.
                </p>
              </section>

              <section id="demo">
                <span className="kicker">TEST FLIGHT STATUS</span>
                <h2>Will Dear Passengers Have a Demo, Beta or Playtest?</h2>
                <p>
                  Yes, a Dear Passengers demo is now a confirmed plan. FLEXUS founder Semen Kozyura told dev.ua that the
                  studio is preparing a demo for Gamescom and will release a public demo later. No public Dear Passengers
                  test is available from Steam at this update, and there is still no demo date, Steam Playtest panel,
                  beta registration, or official download.
                </p>
                <p>
                  The planned Dear Passengers demo may help answer questions that a short trailer cannot settle: solo
                  balance, network performance, lobby size, controller mapping, accessibility, graphics settings, and
                  mission length. Those details have not been published. Our dedicated{' '}
                  <Link href="/dear-passengers-demo">Dear Passengers demo guide</Link> tracks the Gamescom build, later
                  public release, and testing formats without inventing a date. The{' '}
                  <Link href="/dear-passengers-download">Dear Passengers download guide</Link> separately verifies the
                  official Steam app, full-game access status, APK confusion, and installer warning signs.
                </p>

                <h3>How to Follow Official Release Updates</h3>
                <ol className="steps article-steps">
                  <li><span>01</span><p>Open the official Dear Passengers Steam listing and verify that the developer and publisher both read FLEXUS.</p></li>
                  <li><span>02</span><p>Add Dear Passengers to your wishlist so Steam can send an availability notification.</p></li>
                  <li><span>03</span><p>Follow the Dear Passengers Steam hub for developer announcements and store-page changes.</p></li>
                  <li><span>04</span><p>Check whether a Dear Passengers demo or Playtest button appears before downloading anything elsewhere.</p></li>
                  <li><span>05</span><p>Use the <Link href="/dear-passengers-news">Dear Passengers news log</Link> for dated announcements and source changes.</p></li>
                </ol>
              </section>

              <section id="timeline">
                <span className="kicker">ANNOUNCEMENT LOG</span>
                <h2>Dear Passengers Announcement Timeline</h2>
                <div className="timeline">
                  <div><time>JUL 14<br />2026</time><p><strong>Steam page and public reveal coverage appear.</strong> Dear Passengers is introduced as a physics-based airline crew experience planned for 2026.</p></div>
                  <div><time>JUL 15<br />2026</time><p><strong>FLEXUS confirms playable demo plans.</strong> Founder Semen Kozyura says a Gamescom build is in preparation and a public Dear Passengers demo will follow later.</p></div>
                  <div><time>JUL 16<br />2026</time><p><strong>FLEXUS reports 700,000 wishlists in 36 hours.</strong> The milestone is developer-reported and does not change the broad 2026 release window.</p></div>
                  <div><time>JUL 17<br />2026</time><p><strong>Dear Passengers reaches one million wishlists in two days.</strong> A founder interview later records about 1.2 million and confirms that FLEXUS still targets 2026 without rushing an unpolished release.</p></div>
                  <div className="future"><time>NEXT<br />UPDATE</time><p><strong>Exact scheduling remains open.</strong> Watch for demo access details, a launch date, price, player limit, recommended specs, or expanded platform support.</p></div>
                </div>
                <p>
                  This is deliberately a short timeline because the game has only just entered public discovery. Adding
                  invented milestones would create false history. Future entries should include a date, a direct source,
                  and a concise explanation of how the update changes the <strong>Dear Passengers release date</strong>
                  or launch expectations.
                </p>
                <p>
                  Read the <a href={DOU_INTERVIEW_URL} target="_blank" rel="noopener noreferrer">founder interview on
                  GameDev DOU ↗</a> or our <Link href="/dear-passengers-developer-flexus">Dear Passengers developer
                  profile</Link> for the studio context behind that decision.
                </p>
              </section>

              <section id="before-launch">
                <span className="kicker">PRE-FLIGHT CHECK</span>
                <h2>What to Expect Before the Dear Passengers Launch</h2>
                <p>
                  Before Dear Passengers releases, players still need practical information about progression, mission variety, lobby
                  creation, solo assistance, accessibility, saving, input devices, and content depth. The reveal already
                  communicates the tone: the crew divides work, passenger and cargo choices create risk, and weather can
                  destabilize the aircraft. What it does not establish is how these systems develop across many hours.
                </p>
                <p>
                  A longer Dear Passengers gameplay presentation could explain whether flights are individual missions, part of a
                  roguelike run, or connected by persistent airline upgrades. It could also show how pilots and cabin
                  crew exchange roles, how failure is scored, and how much variation comes from passengers, cargo,
                  routes, and weather. These details matter more to purchase decisions than an unsupported date guess.
                </p>

                <h3>Date, Price, Languages and Controller Details</h3>
                <p>
                  The most likely official store updates before launch are an exact date, price, possible language
                  additions, recommended requirements, and input support. That statement is an editorial expectation based
                  on typical store completion, not a FLEXUS promise. When an exact <strong>Dear Passengers release date</strong>
                  appears, this page should also verify timezone, launch format, regional pricing, and whether a demo or
                  preload accompanies it.
                </p>
                <p>
                  Dear Passengers currently lists English, Arabic, Simplified Chinese, Turkish, Ukrainian, and Japanese
                  interfaces, while Windows remains its only operating system. Players who require Traditional Chinese,
                  controller-only play, Steam Deck support, or a console version should wait for those items to be
                  explicitly added. A wishlist records interest, but it does not turn an unannounced feature into a commitment.
                </p>
              </section>

              <section id="release-faq">
                <span className="kicker">RELEASE QUESTIONS</span>
                <h2>Dear Passengers Release Date FAQ</h2>
                <p>
                  The following answers cover the most common Dear Passengers launch searches. They use the official Steam listing as
                  the baseline and avoid converting social posts, trailer interpretation, or community requests into
                  confirmed plans.
                </p>
                <FAQ items={faqs} />
              </section>

              <section className="related-guide">
                <span className="kicker">CONTINUE YOUR BRIEFING</span>
                <h2>Learn More About the Dear Passengers Game</h2>
                <p>
                  Release timing is only one part of the story. Our <Link href="/">complete Dear Passengers game guide</Link>
                  explains the confirmed gameplay loop, pilot and cabin roles, multiplayer status, system requirements,
                  supported language, short gameplay clips, and similar cooperative games. The homepage also links back
                  to this briefing from its navigation, release section, FAQ, and footer so neither page is isolated.
                </p>
                <div className="related-actions">
                  <Link className="button" href="/">Return to the full game guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-demo">Demo status →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-download">Download status →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-news">Latest news →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-developer-flexus">Meet FLEXUS →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-player-count">Player count guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-system-requirements">PC requirements →</Link>
                  <Link className="button button-ghost" href="/de/dear-passengers-release/" hrefLang="de">Deutscher Release-Guide →</Link>
                  <Link className="button button-ghost" href="/zh-cn/dear-passengers-release-date" hrefLang="zh-CN">中文发售指南 →</Link>
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
