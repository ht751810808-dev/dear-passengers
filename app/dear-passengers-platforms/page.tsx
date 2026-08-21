import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const FLEXUS_URL = 'https://flexus.games/';
const QUEST_STORE_DB_URL = 'https://queststoredb.com/game/dear-passengers-vr-1251691901365016/';
const META_QUEST_URL = 'https://www.meta.com/experiences/1251691901365016/';
const PAGE_URL = 'https://dearpassengers.net/dear-passengers-platforms/';

export const metadata: Metadata = {
  title: { absolute: 'Where Can You Play Dear Passengers? PC & Console Status' },
  description:
    'Dear Passengers is confirmed only for Windows PC on Steam. Check PS5, Xbox, Switch, VR, mobile, Mac, Linux, controller, Deck and crossplay status.',
  alternates: {
    canonical: '/dear-passengers-platforms/',
    languages: { en: '/dear-passengers-platforms/', 'x-default': '/dear-passengers-platforms/' },
  },
  openGraph: {
    title: 'Where Can You Play Dear Passengers? Current Platform Status',
    description:
      'A source-led platform board for PC, Steam, PS5, Xbox, Nintendo, VR, mobile, Mac, Linux, controllers, and Steam Deck.',
    url: PAGE_URL,
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Dear Passengers platforms guide for PC, consoles, VR, and mobile',
    }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Where Can You Play Dear Passengers? PC & Console Status',
    description: 'Windows PC is confirmed. Check every announced and unannounced Dear Passengers platform.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Where can I play Dear Passengers?',
    answer:
      'Dear Passengers is not playable yet. Windows PC through Steam is the only confirmed Dear Passengers platform, and the store lists a 2026 release window. FLEXUS has not announced a PS5, Xbox, Nintendo, Mac, Linux, mobile, or VR edition.',
  },
  {
    question: 'Is Dear Passengers coming to PS5?',
    answer:
      'A Dear Passengers PS5 version has not been announced. There is no first-party PlayStation release statement in the current Steam or FLEXUS materials. Interest and autocomplete searches do not confirm that a port is planned.',
  },
  {
    question: 'Is Dear Passengers on Xbox?',
    answer:
      'Dear Passengers is not currently announced for Xbox Series X|S, Xbox One, or PC Game Pass. Windows PC through Steam remains the only confirmed destination, and no cross-platform release promise has been published.',
  },
  {
    question: 'Is Dear Passengers a VR game?',
    answer:
      'Dear Passengers VR support has not been announced. The first-person camera and cockpit setting do not prove a VR mode. Steam does not currently show a VR-only or VR-supported feature for the game.',
  },
  {
    question: 'Is the Dear Passengers VR listing on Meta Quest official?',
    answer:
      'No verified source connects the Meta Quest listing with app ID 1251691901365016 to FLEXUS or Steam app 4534960. Quest Store DB attributes the separate listing to Fun Land Games and records it as delisted on August 13, 2026; the linked Meta page is currently unavailable. That does not establish malicious intent, but it does mean the listing is not evidence of an official FLEXUS VR edition.',
  },
  {
    question: 'Can I play Dear Passengers on mobile?',
    answer:
      'No FLEXUS Dear Passengers mobile version is confirmed for Android or iOS. A similarly named app or game should not be treated as the same product unless FLEXUS links to it or an official store identifies FLEXUS as the publisher.',
  },
  {
    question: 'Does Dear Passengers support controllers or Steam Deck?',
    answer:
      'The Dear Passengers Steam listing does not currently publish controller-support fields or a Valve Steam Deck compatibility result. Keyboard and mouse support should not be assumed to exclude controllers, but controller support remains unknown until a first-party field appears.',
  },
  {
    question: 'Will Dear Passengers have crossplay?',
    answer:
      'Dear Passengers crossplay is unannounced. With only one confirmed platform and storefront, there is not yet a second official platform across which crossplay could be verified. Online co-op is confirmed, but crossplay is a separate feature.',
  },
  {
    question: 'Where can I wishlist Dear Passengers?',
    answer:
      'Use the official Dear Passengers Steam page linked from this guide. The game is not released yet, so wishlisting is available but purchase, preload, public demo download, price, and exact launch timing remain unavailable.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Where Can You Play Dear Passengers? PC, PS5, Xbox, VR and Mobile Status',
  description:
    'A source-led guide to confirmed and unannounced Dear Passengers platforms, storefronts, input support, and crossplay.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-07-29',
  dateModified: '2026-08-21',
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
    { '@type': 'ListItem', position: 2, name: 'Dear Passengers Platforms', item: PAGE_URL },
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

export default function PlatformsPage() {
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
              src="/images/release-date.webp"
              alt="Airliner approaching a destination board for the Dear Passengers platforms guide"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers Game</Link><span>/</span><span>Platforms</span>
              </nav>
              <div className="eyebrow"><span>●</span> PLATFORM DESK · FIRST-PARTY STATUS</div>
              <h1>Where Can You Play Dear Passengers?<br /><em>PC, PS5, Xbox, VR & Mobile Status</em></h1>
              <p>
                <strong>Dear Passengers is not playable yet.</strong> The only confirmed Dear Passengers platform is
                Windows PC through Steam, where the unreleased game can be wishlisted for its planned 2026 launch. No
                Dear Passengers PS5, Xbox, Nintendo, Mac, Linux, mobile, or VR release has been announced. This guide
                gives each platform a clear status and separates online co-op from unconfirmed crossplay, controller,
                and Steam Deck support.
              </p>
              <div className="hero-actions">
                <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Official Steam page ↗</a>
                <Link className="button button-ghost" href="/dear-passengers-release-date">Release-date briefing →</Link>
              </div>
              <div className="article-meta">
                <span>Published July 29, 2026</span><span>Fact-checked August 17, 2026</span><span>Confirmed: Windows PC</span>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>PLATFORM BOARD</p>
              <a href="#answer">Direct answer</a>
              <a href="#pc">PC & Steam</a>
              <a href="#consoles">PS5, Xbox & Nintendo</a>
              <a href="#vr-mobile">VR, mobile & Roblox</a>
              <a href="#input">Controllers & Steam Deck</a>
              <a href="#crossplay">Co-op & crossplay</a>
              <a href="#platform-faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Verify on Steam ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote note="Confirmed means a current first-party Steam field or direct FLEXUS statement. Search demand, similar titles, screenshots, and community requests do not confirm a platform." />

              <section id="answer">
                <span className="kicker">DIRECT ANSWER</span>
                <h2>Where Can You Play Dear Passengers?</h2>
                <p className="snippet-answer">
                  <strong>You cannot play Dear Passengers yet.</strong> You can wishlist the game on Steam for Windows
                  PC, its only confirmed platform, ahead of the planned 2026 release. FLEXUS has not announced versions
                  for PlayStation 5, Xbox Series X|S, Nintendo Switch or Switch 2, Mac, Linux, Android, iPhone, or VR.
                  The exact release date, price, public demo date, controller support, Steam Deck status, and crossplay
                  also remain unannounced.
                </p>
                <p>
                  That answer is intentionally narrower than the list of searches surrounding Dear Passengers. A title
                  can attract PS5, Xbox, mobile, and VR questions long before its developer chooses additional
                  platforms. It has a first-person cockpit, broad co-op appeal, and a highly shared
                  trailer, but those qualities are not port announcements. The current Steam page is
                  the product record: it names Windows requirements, a 2026 window, single-player, and online co-op.
                </p>
                <p>
                  The board below separates an actual Dear Passengers listing from a requested or technically possible
                  edition. “Not announced” is not the same as “never.” It means there is no first-party
                  source that lets this site describe the platform as planned today. If FLEXUS or a platform holder
                  publishes a store page, trailer, certification announcement, or release statement, the relevant row
                  can move from unknown to confirmed.
                </p>

                <div className="platform-table" role="table" aria-label="Dear Passengers platform status on August 17, 2026">
                  <div className="platform-head" role="row"><span role="columnheader">Platform</span><span role="columnheader">Status</span><span role="columnheader">Evidence</span></div>
                  <div role="row"><strong role="cell">Windows PC / Steam</strong><span className="status-confirmed" role="cell">Confirmed · 2026</span><span role="cell">Steam listing and requirements</span></div>
                  <div role="row"><strong role="cell">PlayStation 5</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No first-party statement</span></div>
                  <div role="row"><strong role="cell">Xbox Series X|S</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No first-party statement</span></div>
                  <div role="row"><strong role="cell">Switch / Switch 2</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No first-party statement</span></div>
                  <div role="row"><strong role="cell">Mac / Linux</strong><span className="status-open" role="cell">Not announced</span><span role="cell">Steam publishes Windows only</span></div>
                  <div role="row"><strong role="cell">Android / iOS</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No FLEXUS mobile link</span></div>
                  <div role="row"><strong role="cell">VR</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No Steam VR feature</span></div>
                </div>
              </section>

              <section id="pc">
                <span className="kicker">CONFIRMED DESTINATION</span>
                <h2>Dear Passengers on Windows PC and Steam</h2>
                <p>
                  Windows PC is the only confirmed Dear Passengers destination. The official Steam page identifies
                  FLEXUS as both developer and publisher, offers wishlisting, and says the game is not
                  yet available. Steam currently shows 2026 rather than an exact day. There is no Dear Passengers
                  purchase button, preorder, preload, Early Access label, or public Playtest panel.
                  The <Link href="/dear-passengers-steam">Dear Passengers Steam storefront status</Link> verifies the
                  official App ID, wishlist action, languages, and live access controls without duplicating this
                  platform comparison.
                </p>
                <p>
                  The published Dear Passengers minimum requirements are Windows 10 64-bit, an Intel Core i5 at 2.5 GHz
                  or equivalent processor, 8 GB RAM, an NVIDIA GTX 1060 or AMD RX 6600 XT, DirectX 12, and 4 GB of
                  storage. These fields confirm a Windows build; they do not confirm performance, recommended hardware,
                  cloud gaming, Mac compatibility, Linux compatibility, or a Steam Deck rating. The
                  <Link href="/dear-passengers-system-requirements"> Dear Passengers system requirements guide</Link>
                  explains those limits in detail.
                </p>
                <h3>Is Dear Passengers on Mac or Linux?</h3>
                <p>
                  Dear Passengers is not currently listed with macOS or Linux requirements. Steam shows only Windows,
                  and FLEXUS has not announced native Dear Passengers builds for either operating system. Proton may
                  eventually matter to Linux or Steam Deck players, but compatibility cannot be inferred from the
                  Windows minimum list. A working community test after launch would still be different from official
                  Linux support.
                </p>
                <p>
                  The safe action is to wishlist Dear Passengers on its official Steam page and wait for the product
                  fields to change. Third-party key listings, placeholder dates, and unofficial “download” buttons do
                  not create a release. Our <Link href="/dear-passengers-download">safe Dear Passengers
                  download guide</Link> tracks the difference between a live store page and an available game build.
                </p>
              </section>

              <section id="consoles">
                <span className="kicker">CONSOLE STATUS</span>
                <h2>Is Dear Passengers Coming to PS5, Xbox or Nintendo?</h2>
                <p>
                  No Dear Passengers console version is confirmed. PS5 interest is visible in search,
                  but search volume is a demand signal rather than a FLEXUS roadmap. The current first-party Dear Passengers
                  materials do not name PlayStation 5, PlayStation 4, Xbox Series X|S, Xbox One, Nintendo
                  Switch, or Switch 2. Windows PC through Steam remains the only published platform.
                </p>
                <h3>Dear Passengers PS5 and PlayStation Status</h3>
                <p>
                  There is no announced Dear Passengers PS5 release date or PlayStation Store page. The Dear Passengers game may
                  look suitable for a living-room co-op audience, yet appearance and audience fit do not prove porting,
                  certification, controller design, or a launch agreement. Until FLEXUS or PlayStation publishes a
                  listing, headlines promising a PS5 edition go beyond the evidence.
                </p>
                <h3>Dear Passengers Xbox and Game Pass Status</h3>
                <p>
                  A Dear Passengers Xbox release is also unannounced. No Xbox Series date, Xbox store listing, console
                  crossplay plan, or Game Pass commitment appears in the current Dear Passengers sources. “PC game” does
                  not mean Microsoft Store or PC Game Pass: Steam is the only named storefront. If that
                  changes, the source should identify both the platform and its release timing.
                </p>
                <h3>Dear Passengers Nintendo Switch or Switch 2 Status</h3>
                <p>
                  FLEXUS has not announced Dear Passengers for either Nintendo system. Trailer visuals cannot establish
                  whether it would meet a console performance target, and the minimum PC requirements do
                  not answer that question. A platform-holder page or direct FLEXUS announcement is needed before a
                  Nintendo edition can move beyond unknown.
                </p>
                <p>
                  Launch timing and platform timing are related but separate. The{' '}
                  <Link href="/dear-passengers-release-date">Dear Passengers release date tracker</Link> owns the 2026
                  window, price, demo, and launch schedule. This platforms page owns where the game is
                  confirmed to run, preventing several partial pages from competing for the same console question.
                </p>
              </section>

              <section id="vr-mobile">
                <span className="kicker">OTHER PLATFORM QUESTIONS</span>
                <h2>Dear Passengers VR, Mobile and Roblox Status</h2>
                <p>
                  Dear Passengers VR support is not announced. A first-person camera and visible cockpit interaction can
                  make the game look VR-friendly in short clips, but neither proves motion-controller support,
                  headset performance, comfort settings, seated play, or a VR interface. Steam does not currently mark
                  it as VR supported or VR only. Community requests remain requests.
                </p>
                <h3>Why the Quest identity needs its own check</h3>
                <p>
                  A separate Quest record uses the same name but identifies Fun Land Games rather than FLEXUS. The{' '}
                  <Link href="/dear-passengers-vr/">Dear Passengers VR support and identity guide</Link> compares the
                  product IDs, archived status, headset claims and unavailable Meta page without importing those facts
                  into Steam app <code>4534960</code>. That focused page owns the VR question; this hub keeps the wider
                  platform map concise.
                </p>
                <p>
                  Dear Passengers mobile searches create a different risk: name confusion. FLEXUS does not link an
                  Android or iOS Dear Passengers version from its current game page, and Steam identifies the announced
                  project as a Windows PC title. A similarly named mobile listing should be checked for developer name,
                  publisher, official links, screenshots, and privacy details. Without a direct FLEXUS connection, it
                  should not be presented as the mobile edition of this game.
                </p>
                <p>
                  Dear Passengers Roblox searches are also not evidence of an official experience. No Roblox edition or
                  partnership is announced in the current first-party sources. Fan-made games, recreations, clips,
                  or names that happen to match may exist independently. Players should not enter credentials, install
                  files, or pay for access because a result uses its artwork or keywords.
                </p>
                <div className="fact-callout">
                  <span>IDENTITY CHECK</span>
                  <strong>Match the developer, not only the title.</strong>
                  <p>FLEXUS is the confirmed Dear Passengers developer and publisher. A shared name alone does not prove affiliation.</p>
                </div>
              </section>

              <section id="input">
                <span className="kicker">INPUT & HARDWARE</span>
                <h2>Dear Passengers Controller and Steam Deck Support</h2>
                <p>
                  Dear Passengers controller support remains unknown. Steam does not currently display full or partial
                  controller support for the game. The official footage shows interaction with cockpit and cabin
                  objects, but a visible interface cannot confirm gamepad mapping, vibration, remapping, flight-stick
                  support, accessibility options, or controller-only navigation.
                </p>
                <p>
                  Dear Passengers also has no published Valve Steam Deck compatibility result. A Windows game can later
                  run well, poorly, or not at all through Proton; minimum hardware comparisons cannot replace testing.
                  Until Valve posts a rating or FLEXUS shares a supported configuration, its Steam Deck
                  status should remain unverified rather than “playable” or “unsupported.”
                </p>
                <p>
                  Input questions belong on this platform board because they determine where and how players can use
                  the game. Multiplayer room size and voice chat are tracked in the{' '}
                  <Link href="/dear-passengers-player-count">Dear Passengers player-count guide</Link>, while the{' '}
                  <Link href="/dear-passengers-confirmed-features">Dear Passengers confirmed-features board</Link>
                  preserves the broader fact, observation, plan, and unknown categories.
                </p>
              </section>

              <section id="crossplay">
                <span className="kicker">NETWORK STATUS</span>
                <h2>Dear Passengers Online Co-op and Crossplay</h2>
                <p>
                  Steam confirms Dear Passengers single-player and online co-op. It does not publish the maximum
                  lobby size, local split screen, Remote Play Together, cross-progression, or crossplay. Those
                  features are distinct: online co-op says the game can connect players online, while crossplay
                  would say players on different platforms can share a session.
                </p>
                <p>
                  Because Windows Steam is the only confirmed Dear Passengers platform, there is not yet a second
                  official platform with which to verify crossplay. Even a future console announcement would not
                  automatically confirm shared lobbies. FLEXUS would need to name the supported combinations, accounts,
                  matchmaking rules, and possibly progression behavior.
                </p>
                <h3>What Would Change This Dear Passengers Platform Board?</h3>
                <p>
                  A new Steam operating-system field, a first-party console store page, a FLEXUS platform trailer, a
                  mobile listing linked by FLEXUS, a Steam controller field, a Valve Deck result, or an explicit
                  Dear Passengers crossplay statement would justify an update. A repost, autocomplete suggestion,
                  wishlist milestone, or creator prediction would not. This rule lets the answer change
                  quickly without turning every rumor into a new page.
                </p>
                <ol className="numbered-list">
                  <li><span>01</span><p><strong>Check Steam.</strong> Confirm the Dear Passengers operating system, feature fields, release status, and requirements.</p></li>
                  <li><span>02</span><p><strong>Check FLEXUS.</strong> Look for a direct Dear Passengers platform announcement or official linked storefront.</p></li>
                  <li><span>03</span><p><strong>Check the platform holder.</strong> A console or mobile store page should identify the publisher.</p></li>
                  <li><span>04</span><p><strong>Keep unknowns open.</strong> Missing support is not a promise and not a permanent rejection.</p></li>
                </ol>
              </section>

              <section id="platform-faq">
                <span className="kicker">PLATFORM QUESTIONS</span>
                <h2>Dear Passengers Platforms FAQ</h2>
                <p>
                  These Dear Passengers answers reflect the current Steam, FLEXUS, Meta, and archived Quest listing
                  records on August 21, 2026. The FAQ
                  is designed for quick verification; it does not turn platform demand into a release commitment.
                </p>
                <FAQ items={faqs} />
              </section>

              <section id="sources" className="related-guide related-links-panel">
                <span className="kicker">SOURCE LEDGER</span>
                <h2>Verify the Dear Passengers Platform Status</h2>
                <p>
                  The <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">official Dear Passengers Steam
                  listing ↗</a> confirms Windows, 2026, single-player, online co-op, six interface languages, and the
                  minimum PC requirements. The <a href={FLEXUS_URL} target="_blank" rel="noopener noreferrer">official
                  FLEXUS website ↗</a> identifies Dear Passengers as a studio project and links back to Steam. Neither
                  source currently announces the other platforms covered above. The separate{' '}
                  <a href={QUEST_STORE_DB_URL} target="_blank" rel="noopener noreferrer">Dear Passengers VR archive ↗</a>
                  names Fun Land Games and records a delisting, while its{' '}
                  <a href={META_QUEST_URL} target="_blank" rel="noopener noreferrer">Meta app URL ↗</a> is currently
                  unavailable. This status was rechecked on August 21, including the Steam operating-system, category,
                  release, input-support, and publisher fields.
                </p>
                <p>
                  Continue with the <Link href="/">complete Dear Passengers game guide</Link>, the{' '}
                  <Link href="/dear-passengers-release-date">Dear Passengers release briefing</Link>, or the{' '}
                  <Link href="/dear-passengers-confirmed-features">Dear Passengers fact-check board</Link>. Each route
                  has a separate job: overview, timing, platform availability, or feature verification.
                </p>
                <div className="related-actions">
                  <Link className="button" href="/">Complete game guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-release-date">Release date →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-confirmed-features">Confirmed features →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-download">Download status →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-player-count">Multiplayer status →</Link>
                  <a className="button button-ghost" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Official Steam ↗</a>
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
