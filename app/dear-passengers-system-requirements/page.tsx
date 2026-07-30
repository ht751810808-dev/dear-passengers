import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const PAGE_URL = 'https://dearpassengers.net/dear-passengers-system-requirements/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers System Requirements: Official PC Specs' },
  description:
    'Check the official Dear Passengers system requirements, minimum PC specs, GPU, RAM, storage, laptop guidance, Steam Deck status, and supported languages.',
  alternates: {
    canonical: '/dear-passengers-system-requirements/',
    languages: {
      en: '/dear-passengers-system-requirements/',
      ar: '/ar/dear-passengers-system-requirements/',
      de: '/de/dear-passengers-systemanforderungen/',
      tr: '/tr/dear-passengers-sistem-gereksinimleri/',
      'pt-BR': '/pt-br/dear-passengers-requisitos/',
      es: '/es/dear-passengers-requisitos/',
      'zh-CN': '/zh-cn/dear-passengers-system-requirements/',
      'x-default': '/dear-passengers-system-requirements/',
    },
  },
  openGraph: {
    title: 'Dear Passengers System Requirements and Minimum PC Specs',
    description: 'Official minimum hardware, honest compatibility guidance, and every PC specification that remains unannounced.',
    url: PAGE_URL,
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Dear Passengers system requirements and PC specs guide' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers System Requirements: Official PC Specs',
    description: 'Minimum GPU, CPU, RAM, storage, laptop, Steam Deck, and operating-system status.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'What are the Dear Passengers system requirements?',
    answer:
      'The official Dear Passengers system requirements list Windows 10 64-bit, an Intel Core i5 at 2.5 GHz or equivalent, 8 GB RAM, a GTX 1060 or RX 6600 XT, DirectX 12, and 4 GB of available storage. FLEXUS has not published recommended specifications.',
  },
  {
    question: 'Can my PC run Dear Passengers?',
    answer:
      'Compare your PC with every official minimum rather than checking only one component. A machine that meets the listed operating system, processor, memory, graphics, DirectX, and storage fields reaches the published minimum, but Steam does not attach a target resolution or frame rate to that minimum.',
  },
  {
    question: 'How much RAM does Dear Passengers need?',
    answer:
      'The Dear Passengers minimum requirement is 8 GB RAM. No recommended memory amount has been published, so 16 GB should not be presented as an official requirement even if it is common in modern gaming PCs.',
  },
  {
    question: 'How much storage does Dear Passengers need?',
    answer:
      'Steam currently lists 4 GB of available space for Dear Passengers. That number may change before release and does not necessarily include temporary download, update, save, or shader-cache space.',
  },
  {
    question: 'Will Dear Passengers run on a laptop?',
    answer:
      'A gaming laptop may qualify if its actual CPU, GPU, memory, operating system, and DirectX support meet the official minimum. The product name alone is not enough: laptop graphics can perform differently from desktop cards, and integrated graphics are not listed as supported minimum hardware.',
  },
  {
    question: 'Does Dear Passengers work on Steam Deck?',
    answer:
      'Dear Passengers does not currently have a published Steam Deck compatibility rating. The Windows PC requirements do not prove Verified, Playable, or unsupported status, so Deck compatibility remains unconfirmed until Valve or FLEXUS provides evidence.',
  },
  {
    question: 'Does Dear Passengers support Mac or Linux?',
    answer:
      'No native Mac or Linux version is currently listed. The official Dear Passengers system requirements name Windows 10 64-bit, and Steam shows Windows as the available operating system. Compatibility layers should not be treated as official platform support.',
  },
  {
    question: 'Does Dear Passengers support Simplified Chinese?',
    answer:
      'Yes at the interface level. Steam lists English, Arabic, Simplified Chinese, Turkish, Ukrainian, and Japanese interfaces. The current table does not mark full audio or subtitles, and Traditional Chinese is not listed.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers System Requirements: Official Minimum PC Specs',
  description: 'A sourced explanation of the official Dear Passengers minimum requirements and every compatibility detail that remains open.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-07-16',
  dateModified: '2026-07-17',
  author: { '@type': 'Organization', name: 'DearPassengers.net Editorial Team', url: 'https://dearpassengers.net/about/' },
  publisher: {
    '@type': 'Organization',
    name: 'DearPassengers.net',
    url: 'https://dearpassengers.net/',
    logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' },
  },
  image: 'https://dearpassengers.net/images/og-image.png',
  inLanguage: 'en',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers Game', item: 'https://dearpassengers.net/' },
    { '@type': 'ListItem', position: 2, name: 'Dear Passengers System Requirements', item: PAGE_URL },
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

export default function SystemRequirementsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header languageHref="/zh-cn/dear-passengers-system-requirements" />

      <main id="main-content">
        <article>
          <header className="article-hero requirements-hero">
            <Image src="/images/hero-bg.webp" alt="Dear Passengers system requirements guide over the game aircraft cabin" fill sizes="100vw" priority />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Dear Passengers Game</Link><span>/</span><span>System Requirements</span>
              </nav>
              <div className="eyebrow"><span>●</span> PC HARDWARE DESK · VERIFIED AGAINST STEAM</div>
              <h1>Dear Passengers System Requirements:<br /><em>Official Minimum PC Specs</em></h1>
              <p>
                The official <strong>Dear Passengers system requirements</strong> describe a Windows 10 PC with 8 GB of
                RAM, a dedicated graphics card, DirectX 12, and 4 GB of available storage. This independent guide turns
                each store field into practical questions while keeping unannounced performance targets clearly labeled.
              </p>
              <div className="hero-actions">
                <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">View official Steam specs ↗</a>
                <Link className="button button-ghost" href="/zh-cn/dear-passengers-system-requirements" hrefLang="zh-CN">阅读中文版 →</Link>
              </div>
              <div className="article-meta">
                <span>Published July 16, 2026</span><span>Last checked July 17, 2026</span><span>Official minimum available</span>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>IN THIS BRIEFING</p>
              <a href="#official">Official specs</a>
              <a href="#can-i-run-it">Can I run it?</a>
              <a href="#graphics">Graphics cards</a>
              <a href="#recommended">Recommended specs</a>
              <a href="#laptops">Gaming laptops</a>
              <a href="#deck-os">Deck, Mac & Linux</a>
              <a href="#storage">Storage & setup</a>
              <a href="#languages">Languages</a>
              <a href="#requirements-faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam page ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote note="Every official specification below comes from the Steam store page. Hardware interpretation is separated from requirements that FLEXUS has not announced." />

              <section id="official">
                <span className="kicker">OFFICIAL SPEC SHEET</span>
                <h2>Official Dear Passengers System Requirements</h2>
                <p className="snippet-answer">
                  The minimum <strong>Dear Passengers system requirements</strong> are Windows 10 64-bit, an Intel Core
                  i5 at 2.5 GHz or equivalent processor, 8 GB RAM, an NVIDIA GTX 1060 or AMD RX 6600 XT, DirectX 12,
                  and 4 GB of available storage. Recommended specifications have not been announced.
                </p>
                <div className="platform-table" role="table" aria-label="Official Dear Passengers minimum system requirements">
                  <div className="platform-head" role="row"><span role="columnheader">Component</span><span role="columnheader">Official minimum</span><span role="columnheader">Status</span></div>
                  <div role="row"><strong role="cell">Operating system</strong><span role="cell">Windows 10 64-bit</span><span className="status-confirmed" role="cell">Confirmed</span></div>
                  <div role="row"><strong role="cell">Processor</strong><span role="cell">Intel Core i5 at 2.5 GHz or equivalent</span><span className="status-confirmed" role="cell">Confirmed</span></div>
                  <div role="row"><strong role="cell">Memory</strong><span role="cell">8 GB RAM</span><span className="status-confirmed" role="cell">Confirmed</span></div>
                  <div role="row"><strong role="cell">Graphics</strong><span role="cell">GTX 1060 or RX 6600 XT</span><span className="status-confirmed" role="cell">Confirmed</span></div>
                  <div role="row"><strong role="cell">DirectX</strong><span role="cell">Version 12</span><span className="status-confirmed" role="cell">Confirmed</span></div>
                  <div role="row"><strong role="cell">Storage</strong><span role="cell">4 GB available space</span><span className="status-confirmed" role="cell">Confirmed</span></div>
                </div>
                <p>
                  These <strong>Dear Passengers system requirements</strong> are a threshold, not a performance promise.
                  Steam does not pair the minimum with a resolution, graphics preset, frame rate, mission size, or
                  multiplayer load. Meeting every line means a PC reaches the developer&apos;s published baseline; it does
                  not prove how the final build will behave in a busy cabin filled with physics objects and players.
                </p>
                <h3>Windows 10 and DirectX 12</h3>
                <p>
                  The operating-system line requires a 64-bit edition of Windows 10, while the graphics API line requires
                  DirectX 12. The <strong>Dear Passengers system requirements</strong> do not list a 32-bit version,
                  Windows 7, or Windows 8. They also do not separately list Windows 11. A newer operating system may be
                  reasonable to test, but only Windows 10 64-bit is written in the current minimum table.
                </p>

                <h3>Processor and Memory</h3>
                <p>
                  Steam uses a broad Intel Core i5 description with a 2.5 GHz clock and allows an equivalent processor.
                  It does not identify a generation, model number, core count, or AMD example. That makes the CPU portion
                  of the <strong>Dear Passengers system requirements</strong> less precise than a modern model-level
                  comparison. The memory answer is clearer: Dear Passengers officially asks for at least 8 GB RAM.
                </p>
              </section>

              <section id="can-i-run-it">
                <span className="kicker">COMPATIBILITY CHECK</span>
                <h2>Can My PC Run Dear Passengers?</h2>
                <p>
                  To answer “can I run Dear Passengers,” compare all six published fields. Start with a 64-bit Windows
                  installation, confirm at least 8 GB of system memory, identify the exact graphics adapter, check
                  DirectX support, review the processor, and leave sufficient storage. Passing one line does not cancel
                  a shortfall elsewhere in the <strong>Dear Passengers system requirements</strong>.
                </p>
                <div className="fact-callout">
                  <span>IMPORTANT LIMIT</span>
                  <strong>No official FPS target</strong>
                  <p>Dear Passengers minimum specs do not currently promise 30 FPS, 60 FPS, 1080p, or a particular graphics preset.</p>
                </div>

                <h3>What Meeting the Minimum Actually Means</h3>
                <p>
                  A minimum specification usually describes the lowest supported class of hardware, but its exact meaning
                  depends on developer testing. For Dear Passengers, the store provides no benchmark notes. A PC matching
                  the <strong>Dear Passengers system requirements</strong> should therefore be described as meeting the
                  listed minimum, not as guaranteed to run at high settings or a competitive frame rate.
                </p>
              </section>

              <section id="graphics">
                <span className="kicker">GRAPHICS DESK</span>
                <h2>Dear Passengers GPU Requirements Explained</h2>
                <p>
                  The graphics line in the <strong>Dear Passengers system requirements</strong> names an NVIDIA GeForce
                  GTX 1060 or AMD Radeon RX 6600 XT. These two products should not be treated as identical performance
                  matches merely because Steam places them on the same line. The official table provides alternatives,
                  not a benchmark comparison or an explanation of target settings.
                </p>
                <h3>Integrated Graphics Status</h3>
                <p>
                  No Intel, AMD, or other integrated graphics solution is listed in the official minimum. That omission
                  does not automatically prove the game will refuse to start, but it means integrated graphics are not a
                  published baseline. Players relying on an iGPU should wait for a demo, developer clarification, or
                  measured release testing before claiming they meet the <strong>Dear Passengers system requirements</strong>.
                </p>

              </section>

              <section id="recommended">
                <span className="kicker">NOT YET FILED</span>
                <h2>Dear Passengers Recommended Specs Are Unannounced</h2>
                <p>
                  FLEXUS has not published recommended <strong>Dear Passengers system requirements</strong>. Steam&apos;s
                  recommended column contains no CPU, GPU, memory, storage, or operating-system target. Consequently,
                  any page presenting an RTX card, 16 GB RAM, a particular modern processor, or an SSD as an official
                  Dear Passengers recommendation is going beyond the current source.
                </p>
              </section>

              <section id="laptops">
                <span className="kicker">PORTABLE HARDWARE</span>
                <h2>Can a Gaming Laptop Run Dear Passengers?</h2>
                <p>
                  A gaming laptop can be compared with the same <strong>Dear Passengers system requirements</strong>, but
                  laptop model names need care. Mobile graphics chips may use different power limits from desktop cards,
                  and cooling can change sustained performance. Confirm the exact GPU rather than assuming that every
                  laptop advertised with a familiar family name matches its desktop counterpart.
                </p>
                <p>
                  Also check whether the laptop has 8 GB of installed RAM available to the system, a 64-bit Windows
                  installation, DirectX 12 support, and free storage. Background applications can consume memory, while
                  integrated and dedicated graphics may coexist. Make sure the game uses the dedicated adapter when
                  comparing a machine with the <strong>Dear Passengers minimum requirements</strong>.
                </p>

              </section>

              <section id="deck-os">
                <span className="kicker">PLATFORM COMPATIBILITY</span>
                <h2>Steam Deck, Mac and Linux Status</h2>
                <p>
                  Dear Passengers has no published Steam Deck rating. Valve has not marked it Verified or Playable on
                  the current listing, and FLEXUS has not explained controller layouts, text size, launcher behavior, or
                  Linux compatibility. The Windows-based <strong>Dear Passengers system requirements</strong> cannot be
                  used as proof of Steam Deck support.
                </p>
                <p>
                  Native Mac and Linux versions are also unannounced. Steam displays Windows as the operating system for
                  Dear Passengers, with Windows 10 64-bit in the minimum table. Community experiments with compatibility
                  layers may become useful after release, but they are separate from official support. This guide will
                  not label those platforms compatible until there is direct evidence.
                </p>

              </section>

              <section id="storage">
                <span className="kicker">PRE-FLIGHT SETUP</span>
                <h2>Dear Passengers Storage and Setup Checklist</h2>
                <p>
                  The official <strong>Dear Passengers system requirements</strong> list 4 GB of available storage. That
                  is the installed-space figure shown today, not a guaranteed download size. Compression, temporary
                  installation files, patches, save data, logs, and shader caches can create additional short-term or
                  long-term use. Leaving headroom is sensible without changing the official number.
                </p>
                <ol className="steps article-steps">
                  <li><span>01</span><p>Confirm that Windows is 64-bit and fully updated before comparing the Dear Passengers operating-system requirement.</p></li>
                  <li><span>02</span><p>Record the exact CPU, GPU, and installed RAM instead of relying on a broad laptop or desktop product name.</p></li>
                  <li><span>03</span><p>Verify DirectX 12 support and install current stable graphics drivers from the hardware vendor.</p></li>
                  <li><span>04</span><p>Keep more than the listed 4 GB free so installation and later Dear Passengers updates have working space.</p></li>
                  <li><span>05</span><p>Recheck the official Dear Passengers system requirements near release because the game remains in development.</p></li>
                </ol>
                <p>
                  Steam does not specify whether Dear Passengers requires an SSD. Do not convert a general preference for
                  faster loading into an official SSD requirement. The only published storage field is capacity. An SSD
                  may be a sensible modern default, but the <strong>Dear Passengers system requirements</strong> do not
                  currently distinguish SSD and hard-drive installations.
                </p>
              </section>

              <section id="languages">
                <span className="kicker">INTERFACE STATUS</span>
                <h2>Dear Passengers Languages and Chinese Support</h2>
                <p>
                  Steam currently lists six Dear Passengers interface languages: English, Arabic, Simplified Chinese,
                  Turkish, Ukrainian, and Japanese. This is a change from the first public listing. The table does not
                  mark full audio or subtitles for these entries, so the accurate claim is interface support rather than
                  complete localization across every content type.
                </p>
                <p>
                  Traditional Chinese, Korean, French, German, Spanish, Portuguese, and other languages are not listed at
                  this check. Language support can change independently from the <strong>Dear Passengers system requirements</strong>.
                  Readers who want a Chinese overview can visit the <Link href="/zh-cn/" hrefLang="zh-CN">Dear Passengers 中文指南</Link>,
                  while the official Steam table remains the final reference for store-language status.
                </p>
              </section>

              <section id="requirements-faq">
                <span className="kicker">HARDWARE QUESTIONS</span>
                <h2>Dear Passengers System Requirements FAQ</h2>
                <p>
                  These answers summarize the current <strong>Dear Passengers system requirements</strong> without
                  inventing benchmarks. When the recommended column, Steam Deck result, demo, or release build becomes
                  available, the answer and visible verification date will be updated together.
                </p>
                <FAQ items={faqs} />
              </section>

              <section className="related-guide related-links-panel">
                <span className="kicker">CONTINUE YOUR BRIEFING</span>
                <h2>Explore More Dear Passengers Guides</h2>
                <p>
                  Return to the <Link href="/">complete Dear Passengers game guide</Link> for gameplay and language
                  context. Check the <Link href="/dear-passengers-release-date">Dear Passengers release date</Link> for
                  platform status, use the <Link href="/dear-passengers-demo">Dear Passengers demo guide</Link> to follow
                  the first public performance test, or open the <Link href="/dear-passengers-player-count">Dear Passengers
                  player count guide</Link> for multiplayer, solo, controller, crossplay, and lobby questions.
                </p>
                <div className="related-actions">
                  <Link className="button" href="/">Complete game guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-release-date">Release date →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-player-count">Player count →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-demo">Demo status →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-news">Latest news →</Link>
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
