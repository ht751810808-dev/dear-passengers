import Image from 'next/image';
import Link from 'next/link';
import type { CzechGuide } from '@/app/cs/czech-content';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=czech';
const FLEXUS_INTERVIEW = 'https://gamedev.dou.ua/articles/dear-passengers-interview/';

const labels: Record<string, string> = {
  'hra-dear-passengers': 'Co je to za hru',
  'dear-passengers-jak-hrat': 'Jak hrát',
  'dear-passengers-pocet-hracu': 'Počet hráčů',
  'dear-passengers-datum-vydani': 'Datum vydání',
  'dear-passengers-demo': 'Stav dema',
  'dear-passengers-stahnout': 'Bezpečné stažení',
  'dear-passengers-systemove-pozadavky': 'Požadavky na PC',
  'dear-passengers-cestina': 'Čeština',
};

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return <>{parts.map((part, index) => {
    const match = part.match(/^\[\[([^|]+)\|([^\]]+)\]\]$/);
    return match ? <Link href={match[1]} key={`${match[1]}-${index}`}>{match[2]}</Link> : part;
  })}</>;
}

export default function CzechGuidePage({ guide, canonicalPath }: { guide: CzechGuide; canonicalPath: string }) {
  const pageUrl = `https://dearpassengers.net${canonicalPath}`;
  const articleSchema = {
    '@context': 'https://schema.org', '@type': guide.slug ? 'Article' : 'WebPage',
    headline: guide.title, description: guide.description, mainEntityOfPage: pageUrl,
    datePublished: '2026-08-08', dateModified: '2026-08-08', inLanguage: 'cs',
    author: { '@type': 'Organization', name: 'Česká redakce DearPassengers.net', url: 'https://dearpassengers.net/about/' },
    publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/', logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' } },
    image: `https://dearpassengers.net${guide.heroImage}`,
    isPartOf: { '@type': 'WebSite', name: 'DearPassengers.net', url: 'https://dearpassengers.net/cs/' },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Dear Passengers česky', item: 'https://dearpassengers.net/cs/' },
      ...(guide.slug ? [{ '@type': 'ListItem', position: 2, name: guide.title, item: pageUrl }] : []),
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: guide.faqs.map((item) => ({
      '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <Header locale="cs" languageHref={guide.englishPath || '/'} />
    <main id="main-content" lang="cs" className="czech-content">
      <article>
        <header className="article-hero">
          <Image src={guide.heroImage} alt={guide.heroAlt} fill sizes="100vw" priority />
          <div className="hero-shade" />
          <div className="container article-hero-content">
            <nav className="breadcrumbs" aria-label="Drobečková navigace"><Link href="/cs/">Český průvodce</Link><span>/</span><span>{guide.keyword}</span></nav>
            <div className="eyebrow"><span>●</span> {guide.eyebrow}</div>
            <h1><RichText text={guide.h1} /></h1>
            <p><RichText text={guide.intro} /></p>
            <div className="article-meta"><span>Ověřeno 8. 8. 2026</span><span>Primární zdroje: Steam a FLEXUS</span><span>Jazyk sekce: čeština</span></div>
          </div>
        </header>
        <div className="container article-layout">
          <aside className="article-toc" aria-label="Obsah průvodce">
            <p>NA TÉTO STRÁNCE</p><a href="#answer">Stručná odpověď</a>
            {guide.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.heading}</a>)}
            <a href="#czech-search">Česká vyhledávací sémantika</a><a href="#faq">Časté otázky</a>
            <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Přidat do seznamu přání ↗</a>
          </aside>
          <div className="article-prose prose">
            <aside className="editorial-note" aria-label="Redakční kontrola">
              <div><span>REDAKČNÍ KONTROLA</span><strong>Česká redakce DearPassengers.net</strong></div>
              <p>{guide.note}</p>
              <div className="editorial-note-links"><small>Poslední kontrola: 8. 8. 2026</small><Link href="/editorial-policy" hrefLang="en">Jak ověřujeme zdroje →</Link></div>
            </aside>
            <section id="answer">
              <span className="kicker">STRUČNÁ ODPOVĚĎ</span><h2>{guide.keyword}: aktuální stav</h2>
              <p className="snippet-answer"><strong><RichText text={guide.answer} /></strong></p>
              <div className="status-grid" aria-label="Stav informací">
                <div className="fact-callout"><span>POTVRZENO</span><strong>Co uvádějí primární zdroje</strong><ul>{guide.confirmed.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div className="fact-callout unknown-callout"><span>NEZVEŘEJNĚNO</span><strong>Co zatím nevíme</strong><ul>{guide.unknown.map((item) => <li key={item}>{item}</li>)}</ul></div>
              </div>
            </section>
            {guide.sections.map((section) => <section id={section.id} key={section.id}>
              <span className="kicker">{section.kicker}</span><h2><RichText text={section.heading} /></h2>
              {section.paragraphs.map((paragraph, index) => <p key={index}><RichText text={paragraph} /></p>)}
              {section.bullets && <ul>{section.bullets.map((item) => <li key={item}><RichText text={item} /></li>)}</ul>}
            </section>)}
            <section id="czech-search">
              <span className="kicker">SÉMANTIKA PRO ČESKO</span><h2>Proč používáme formulaci „{guide.keyword}“?</h2>
              {guide.localContext.map((paragraph) => <p key={paragraph}><RichText text={paragraph} /></p>)}
            </section>
            <section id="verification">
              <span className="kicker">METODA OVĚŘENÍ</span><h2>Jak ověřujeme informace o Dear Passengers?</h2>
              <p>Nejdříve kontrolujeme českou kartu Steam: platformu, okno vydání, režimy, jazyky a požadavky na PC. Přímá vyjádření a rozhovory FLEXUS doplňují plány, ale plán nepovažujeme za hotovou funkci. Diskuse a sociální sítě používáme k hledání otázek publika, nikoli jako náhradu odpovědi vývojáře.</p>
              <p>„Potvrzeno“ znamená přímý údaj primárního zdroje. „Pozorování“ popisuje pouze to, co je vidět v oficiálním videu nebo obrázku. „Plán“ se může změnit. „Nezveřejněno“ je přesná odpověď pro cenu, den vydání, počet hráčů, češtinu a další chybějící údaje.</p>
              <p>DearPassengers.net je nezávislý neoficiální průvodce bez spojení s FLEXUS, Valve nebo Steamem. Oficiální obrázky citujeme v redakčním kontextu a patří jejich vlastníkům. Opravu doloženou zdrojem lze poslat přes <Link href="/contact" hrefLang="en">kontaktní stránku</Link>.</p>
            </section>
            <section id="faq"><span className="kicker">ČASTÉ OTÁZKY</span><h2>Otázky k tématu {guide.keyword}</h2><p>Odpovědi používají přirozenou češtinu a nevyplňují neznámé údaje dohady.</p><FAQ items={guide.faqs} /></section>
            <section id="sources"><span className="kicker">PRIMÁRNÍ ZDROJE</span><h2>Kde si údaje ověřit?</h2><p><a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Oficiální česká karta Dear Passengers ve službě Steam ↗</a> uvádí platformu, režimy, jazyky a minimální požadavky. <a href={FLEXUS_INTERVIEW} target="_blank" rel="noopener noreferrer">Přímý rozhovor s FLEXUS ↗</a> vysvětluje vydání a plán dema. Neoficiální instalátory nepoužíváme jako zdroje.</p></section>
            <section className="related-guide"><span className="kicker">ČESKÝ PRŮVODCE</span><h2>Další témata k Dear Passengers</h2><p>Každá stránka odpovídá na samostatnou vyhledávací otázku. Kontextové odkazy pomáhají pokračovat bez opakování stejného článku.</p><div className="related-actions"><Link className="button" href="/cs/">Česká hlavní stránka →</Link>{guide.related.map((slug) => <Link className="button button-ghost" href={`/cs/${slug}/`} key={slug}>{labels[slug] || slug} →</Link>)}</div></section>
          </div>
        </div>
      </article>
    </main>
    <Footer locale="cs" />
  </>;
}
