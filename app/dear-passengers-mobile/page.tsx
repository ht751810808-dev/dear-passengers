import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/dear-passengers-mobile/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const OFFICIAL_SITE_URL = 'https://dearpassengers.game/';
const GOOGLE_PLAY_COPY_URL = 'https://play.google.com/store/apps/details?id=com.jf.ragdoll.lab.sandbox.lite&hl=en';
const ROUGH_AIR_URL = 'https://play.google.com/store/apps/details?id=com.dearpassenger';
const APP_STORE_URL = 'https://apps.apple.com/at/app/dear-passengers-original-game/id6795292816';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Mobile: Android & iOS Status Check' },
  description: 'Is Dear Passengers mobile official? Check Android and iOS status, FLEXUS identity, same-name app listings, fake APK claims and mobile release evidence.',
  alternates: { canonical: '/dear-passengers-mobile/', languages: { en: '/dear-passengers-mobile/', 'x-default': '/dear-passengers-mobile/' } },
  openGraph: {
    title: 'Dear Passengers Mobile: Android and iOS Identity Check',
    description: 'Separate the FLEXUS Windows game from same-name phone apps and verify what would confirm a real mobile release.',
    url: PAGE_URL,
    type: 'article',
    images: [{ url: '/images/dear-passengers-download-og.webp', width: 1200, height: 630, alt: 'Editorial Dear Passengers mobile identity and store verification guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers Mobile: Current Android and iOS Status',
    description: 'No FLEXUS mobile edition is announced; compare developer names, app IDs and official links before installing.',
    images: ['/images/dear-passengers-download-og.webp'],
  },
};

const faqs: FaqItem[] = [
  { question: 'Is Dear Passengers mobile official?', answer: 'No Dear Passengers mobile edition has been announced by FLEXUS. The official product is Steam app 4534960 for Windows PC. A phone app using the title, artwork or description is not a verified Dear Passengers mobile port unless FLEXUS and the platform store connect it to the same product.' },
  { question: 'Is Dear Passengers available on Android?', answer: 'FLEXUS has not announced a Dear Passengers mobile Android build, Google Play app or official APK. Google Play results can use similar names, but their developer and package fields do not match FLEXUS or Steam app 4534960. A real Dear Passengers mobile listing must match those identities. Check them before treating any Android result as the same game.' },
  { question: 'Can I play Dear Passengers on iPhone or iPad?', answer: 'No verified Dear Passengers mobile iPhone or iPad version is linked by FLEXUS. An App Store product titled Dear Passengers: Original Game names Abdul Rehman as provider, so it is a separate listing rather than evidence of a FLEXUS iOS port. Dear Passengers mobile compatibility still needs a matching provider. Apple compatibility alone does not establish product identity.' },
  { question: 'Is there a Dear Passengers mobile release date?', answer: 'There is no Dear Passengers mobile release date. Steam gives the FLEXUS Windows game a broad 2026 window, but that timing cannot be transferred to Android or iOS. Any Dear Passengers mobile date needs a direct FLEXUS announcement and matching official store record; neither source exists today.' },
  { question: 'Is a Dear Passengers APK safe to install?', answer: 'No APK is verified as a Dear Passengers mobile build from FLEXUS. This guide does not execute third-party files or label every similarly named app malicious. Dear Passengers mobile verification starts with the package and developer. Wait for a FLEXUS-linked Google Play record before trusting an Android release claim.' },
  { question: 'Can remote play make Dear Passengers a mobile game?', answer: 'Streaming a Windows build to a phone would not create a native Dear Passengers mobile edition. The Windows game is not publicly downloadable yet, and FLEXUS has not announced a supported remote-play setup. Dear Passengers mobile support cannot be inferred from streaming. A third-party guide should not be presented as Android or iOS platform support.' },
  { question: 'Does FLEXUS making other phone games confirm a mobile port?', answer: 'No. FLEXUS has a mobile-game catalogue, but company history is not a platform announcement for this product. Dear Passengers mobile remains unannounced because the current Steam listing names Windows and the official product website links to Steam, not Google Play or the App Store.' },
  { question: 'How will this page confirm a future mobile version?', answer: 'A real Dear Passengers mobile announcement should align three records: a FLEXUS statement, a platform-holder listing, and a reciprocal link from an official channel. The developer, publisher, app ID, screenshots and release status must agree. Until then, this page keeps Android and iOS marked unannounced rather than permanently ruled out.' },
];

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article', headline: 'Dear Passengers Mobile: Android and iOS Status Check',
  description: 'A source-led mobile platform and same-name app identity check for the Dear Passengers game by FLEXUS.',
  mainEntityOfPage: PAGE_URL, datePublished: '2026-08-22', dateModified: '2026-08-22', inLanguage: 'en',
  author: { '@type': 'Organization', name: 'DearPassengers.net Editorial Team', url: 'https://dearpassengers.net/about/' },
  publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/', logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' } },
  image: 'https://dearpassengers.net/images/dear-passengers-download-og.webp',
  citation: [STEAM_URL, OFFICIAL_SITE_URL, GOOGLE_PLAY_COPY_URL, ROUGH_AIR_URL, APP_STORE_URL],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers', item: 'https://dearpassengers.net/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://dearpassengers.net/dear-passengers-platforms/' },
    { '@type': 'ListItem', position: 3, name: 'Dear Passengers Mobile', item: PAGE_URL },
  ],
};
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };

export default function DearPassengersMobilePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main id="main-content" className="steam-guide-page">
        <article>
          <header className="article-hero download-hero steam-article-hero">
            <Image src="/images/dear-passengers-download-safety.webp" alt="Editorial illustration for the Dear Passengers mobile store identity check" fill sizes="100vw" priority />
            <div className="hero-shade" />
            <div className="container article-hero-content steam-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Dear Passengers</Link><span>/</span><Link href="/dear-passengers-platforms/">Platforms</Link><span>/</span><span>Mobile</span></nav>
              <div className="steam-hero-grid">
                <div className="steam-hero-copy">
                  <div className="eyebrow"><span>●</span> MOBILE STATUS · STORE IDENTITY CHECK</div>
                  <h1>Dear Passengers Mobile:<br /><em>Android and iOS Status Explained</em></h1>
                  <p><strong>Dear Passengers mobile is not announced by FLEXUS.</strong> The verified game is a Windows PC title on Steam, while current phone-store results show other developers and app identifiers. This Dear Passengers mobile guide separates those products, checks Android and iOS claims, and defines the evidence needed before a future phone version can be called official. Dear Passengers mobile needs a matching FLEXUS store record.</p>
                  <div className="hero-actions"><a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Verify the FLEXUS game ↗</a><Link className="button button-ghost" href="/dear-passengers-download/">Check APK and download safety →</Link></div>
                  <div className="article-meta"><span>Published August 22, 2026</span><span>Primary product: Steam 4534960</span><span>Mobile: not announced</span></div>
                </div>
                <dl className="steam-identity-board" aria-label="Dear Passengers mobile verification summary">
                  <div><dt>FLEXUS game</dt><dd>Windows PC</dd><small>Steam app 4534960</small></div><div><dt>Android port</dt><dd>Not announced</dd><small>No FLEXUS Google Play link</small></div><div><dt>iOS port</dt><dd>Not announced</dd><small>No FLEXUS App Store link</small></div><div><dt>Safe check</dt><dd>Match IDs</dd><small>Developer · package · official links</small></div>
                </dl>
              </div>
            </div>
          </header>
          <div className="container article-layout">
            <aside className="article-toc" aria-label="Dear Passengers mobile guide sections"><p>MOBILE CHECKLIST</p><a href="#answer">Direct answer</a><a href="#evidence">Official evidence</a><a href="#listings">App identity matrix</a><a href="#claims">APK and remote play</a><a href="#confirmation">Confirmation standard</a><a href="#mobile-faq">FAQ</a><a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Check Steam ↗</a></aside>
            <div className="article-prose prose">
              <EditorialNote checked="August 22, 2026" note="This page compares public product identities. It does not call every similarly named app malicious or claim affiliation, copying, endorsement, or misconduct without evidence." />

              <section id="answer">
                <span className="kicker">DIRECT ANSWER</span><h2>Is Dear Passengers Mobile Available?</h2>
                <p className="snippet-answer"><strong>No official Dear Passengers mobile version is available or announced.</strong> FLEXUS lists Dear Passengers for Windows PC through Steam app 4534960. The store has no Android, iPhone or iPad field, and the official game website links back to Steam. Google Play and App Store products with similar names identify different developers, providers or packages, so they are not verified ports. Dear Passengers mobile has no verified phone-store home.</p>
                <p>The Dear Passengers mobile search has a real user task: determine whether the viral airline co-op can run natively on a phone. It also has an identity problem because several mobile listings borrow the title or closely resemble the Steam description. This page answers platform status first, then uses store identifiers to prevent a title match from becoming a false product match. Dear Passengers mobile requires more than a title match.</p>
                <p>Dear Passengers mobile interest does not prove a port, but it is not an invented query. Search Console recorded direct questions such as “is Dear Passengers on mobile,” “Dear Passengers Android,” “Dear Passengers iPhone,” and “Dear Passengers mobile release date.” Current Google results also foreground Android apps and phone-game videos before or beside Steam, making a dedicated answer more useful than one sentence inside a general platform table.</p>
                <p>Dear Passengers mobile is therefore an open platform status, not a permanent rejection. FLEXUS could announce Android or iOS later. Until a first-party announcement and matching store identity exist, the accurate answer is “not announced,” rather than “impossible,” “cancelled,” or “coming in 2026.” Dear Passengers mobile remains open, not confirmed.</p>
              </section>

              <section id="evidence">
                <span className="kicker">FIRST-PARTY RECORD</span><h2>What Official Sources Say About Dear Passengers Mobile</h2>
                <p>The <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">official Dear Passengers Steam page ↗</a> identifies FLEXUS as developer and publisher. It confirms Windows 10 minimum requirements, a broad 2026 release window, single-player and online co-op. It does not provide a Dear Passengers mobile operating system, touch-control field, Google Play link, App Store link or cross-platform promise. Dear Passengers mobile is absent from its platform fields.</p>
                <p>The <a href={OFFICIAL_SITE_URL} target="_blank" rel="noopener noreferrer">official product website ↗</a> provides a second Dear Passengers mobile identity check. Its game action routes visitors to the same Steam app, not to a phone storefront. FLEXUS studio experience with earlier mobile titles is company history, but it does not convert a Windows product page into a Dear Passengers mobile announcement. Dear Passengers mobile needs product-specific evidence.</p>
                <p>The current Dear Passengers mobile evidence supports one confirmed fact and several unknowns. Windows PC is confirmed. Android, iOS, phone release timing, touch controls, controller pairing, cloud saves, crossplay, account transfer, price and device requirements are unknown. Unknown means no first-party answer was found; it does not mean the feature failed a test or was rejected internally. Dear Passengers mobile has not reached confirmation.</p>
                <div className="platform-table" role="table" aria-label="Dear Passengers mobile evidence status"><div className="platform-head" role="row"><span role="columnheader">Question</span><span role="columnheader">Status</span><span role="columnheader">Evidence</span></div><div role="row"><strong role="cell">Dear Passengers mobile edition</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No FLEXUS phone-store link</span></div><div role="row"><strong role="cell">Dear Passengers mobile Android APK</strong><span className="status-open" role="cell">Not verified</span><span role="cell">No matching FLEXUS package</span></div><div role="row"><strong role="cell">Dear Passengers mobile iOS build</strong><span className="status-open" role="cell">Not announced</span><span role="cell">No matching FLEXUS provider</span></div><div role="row"><strong role="cell">FLEXUS Windows game</strong><span className="status-confirmed" role="cell">Confirmed</span><span role="cell">Steam app 4534960</span></div></div>
              </section>

              <section id="listings">
                <span className="kicker">SAME-NAME STORE RESULTS</span><h2>Dear Passengers Mobile App Identity Matrix</h2>
                <p>A Dear Passengers mobile result should be checked as a product record, not as a headline. Store title, developer or provider, package or app ID, official cross-links and access state must agree. Artwork, copied feature text, a version number, ratings or an install button cannot replace those identifiers. Dear Passengers mobile identity depends on all of them.</p>
                <p>Google Play currently lists a product titled <a href={GOOGLE_PLAY_COPY_URL} target="_blank" rel="noopener noreferrer">Dear Passengers under JOY FAST FOOD. LLC ↗</a>, package <code>com.jf.ragdoll.lab.sandbox.lite</code>. Its public page shows Android availability and text resembling the Steam premise, but it does not identify FLEXUS or Steam app 4534960. That makes it a separate Dear Passengers mobile store record for this audit. Dear Passengers mobile from FLEXUS needs matching ownership.</p>
                <p>Package <code>com.dearpassenger</code> now appears as <a href={ROUGH_AIR_URL} target="_blank" rel="noopener noreferrer">Devoted Passengers: Rough Air by Kusya Games ↗</a>. Earlier search results used a closer Dear Passengers title, which illustrates why a page title is unstable identity evidence. The developer and package still do not match FLEXUS, so the record does not confirm Dear Passengers mobile support for the Steam game. Dear Passengers mobile cannot inherit another package&apos;s facts.</p>
                <p>Apple also lists <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">Dear Passengers: Original Game ↗</a> for iPhone and iPad under provider Abdul Rehman, app ID <code>6795292816</code>. Its mobile compatibility confirms only that separate App Store product. It does not supply a Dear Passengers mobile iOS build from FLEXUS, and its listed date must not be reused as the Windows game or a mobile-port release date. Dear Passengers mobile has no matching iOS provider.</p>
                <div className="platform-table" role="table" aria-label="Dear Passengers mobile store identity comparison"><div className="platform-head" role="row"><span role="columnheader">Store record</span><span role="columnheader">Developer shown</span><span role="columnheader">Identity conclusion</span></div><div role="row"><strong role="cell">Steam 4534960</strong><span className="status-confirmed" role="cell">FLEXUS</span><span role="cell">Official Windows game</span></div><div role="row"><strong role="cell">Google Play · com.jf.ragdoll.lab.sandbox.lite</strong><span className="status-open" role="cell">JOY FAST FOOD. LLC</span><span role="cell">Separate mobile record</span></div><div role="row"><strong role="cell">Google Play · com.dearpassenger</strong><span className="status-open" role="cell">Kusya Games</span><span role="cell">Separate mobile record</span></div><div role="row"><strong role="cell">App Store · 6795292816</strong><span className="status-open" role="cell">Abdul Rehman</span><span role="cell">Separate iOS record</span></div></div>
                <p>This Dear Passengers mobile comparison does not review the quality or safety of those apps and does not accuse their publishers of wrongdoing. It answers a narrower question: none of the reviewed store identities matches the developer, publisher, platform and official links of the FLEXUS Steam product. Dear Passengers mobile remains a separate verification task.</p>
              </section>

              <section id="claims">
                <span className="kicker">ACCESS CLAIMS</span><h2>Dear Passengers Mobile APK, Videos and Remote Play</h2>
                <p>Search results for Dear Passengers mobile include APK directories that assign an Android version, file size or system requirement to the unreleased game. Those fields are not present in a FLEXUS source. A Dear Passengers mobile APK cannot be authenticated by a polished download page, checksum badge, copied screenshot or “latest version” label when no official Android package exists. Dear Passengers mobile needs a publisher-linked package.</p>
                <p>Dear Passengers mobile videos also require an identity check. A clip titled “mobile gameplay” may show a similarly named phone app, an imitation, unrelated footage or an interface added around a video. It does not establish a FLEXUS build unless the creator can trace the app to a verified store record and that record connects back to FLEXUS. View count and upload recency are not platform evidence.</p>
                <p>Some pages describe Dear Passengers mobile as PC streaming to Android or iOS. Remote desktop and game streaming can display a Windows application on a phone, but they do not make it a native mobile port. More importantly, the Windows game is not publicly installable yet, and FLEXUS has not published a supported Dear Passengers mobile streaming workflow, input profile or compatibility statement. Dear Passengers mobile is not confirmed by mirroring.</p>
                <p>For file and account safety, use the <Link href="/dear-passengers-download/">Dear Passengers download verification guide</Link>. That page owns installer, APK, crack, torrent and credential risks. This Dear Passengers mobile page owns the platform question and app-store identity, so the two routes help different users without pretending there is a current download.</p>
              </section>

              <section id="confirmation">
                <span className="kicker">CHANGE CONTROL</span><h2>What Would Confirm Dear Passengers Mobile?</h2>
                <p>A Dear Passengers mobile status change needs aligned evidence. FLEXUS should announce the platform; Google Play or Apple should host a record with a matching developer or publisher; and an official FLEXUS or Dear Passengers channel should link to that record. The package or app ID, release state, screenshots and product description should describe the same game rather than only share a title. Dear Passengers mobile must pass every identity check.</p>
                <ol className="numbered-list"><li><span>01</span><p><strong>Start with FLEXUS.</strong> Find a direct Dear Passengers mobile, Android or iOS statement.</p></li><li><span>02</span><p><strong>Open the platform holder.</strong> Record the developer, publisher, package or app ID and access state.</p></li><li><span>03</span><p><strong>Verify reciprocal links.</strong> The studio channel and store record should identify the same Dear Passengers mobile product.</p></li><li><span>04</span><p><strong>Keep dates separate.</strong> A Windows 2026 window does not become a phone release date.</p></li></ol>
                <p>If Dear Passengers mobile is later announced, this guide will report Android and iOS separately. Launch date, price, supported devices, touch controls, controller support, multiplayer, crossplay, language support and saves will remain unknown until each field has its own source. One announcement should not be expanded into a complete specification that FLEXUS did not publish.</p>
              </section>

              <section id="mobile-faq">
                <span className="kicker">MOBILE QUESTIONS</span><h2>Dear Passengers Mobile FAQ</h2>
                <p>These Dear Passengers mobile answers reflect the Steam, official product website, Google Play and App Store records checked on August 22, 2026. The status can change, but only verifiable first-party and platform-holder evidence will move Android or iOS from unannounced to confirmed.</p>
                <FAQ items={faqs} />
              </section>

              <section id="sources" className="related-guide related-links-panel">
                <span className="kicker">SOURCE LEDGER</span><h2>Verify Dear Passengers Mobile at the Source</h2>
                <p>The official Steam record and product website confirm FLEXUS, Windows PC and the 2026 window. The cited Google Play and App Store records expose different developer or provider identities and unique app IDs. No reviewed Dear Passengers mobile record creates a verified connection between those phone products and FLEXUS. The conclusion is therefore “not announced,” not a prediction about future plans.</p>
                <p>Continue to the <Link href="/dear-passengers-platforms/">complete platform board</Link>, the <Link href="/dear-passengers-download/"> download and APK safety guide</Link>, or the <Link href="/dear-passengers-steam/"> official Steam identity guide</Link>. Each page owns a distinct next step, while this Dear Passengers mobile owner remains focused on Android, iOS and store identity.</p>
                <div className="related-actions"><Link className="button" href="/dear-passengers-platforms/">All platforms →</Link><Link className="button button-ghost" href="/dear-passengers-download/">Download safety →</Link><Link className="button button-ghost" href="/dear-passengers-steam/">Steam identity →</Link><Link className="button button-ghost" href="/dear-passengers-release-date/">Release status →</Link></div>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
