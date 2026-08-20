import Image from 'next/image';
import Link from 'next/link';
import type { GamePageContent } from '@/app/game-dear-passengers/game-content';
import EditorialNote from '@/components/EditorialNote';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const FLEXUS_INTERVIEW = 'https://gamedev.dou.ua/articles/dear-passengers-interview/';

export default function GameDearPassengersPage({ content }: { content: GamePageContent }) {
  const pageUrl = `https://dearpassengers.net${content.canonicalPath}`;
  const steamUrl = `https://store.steampowered.com/app/4534960/Dear_Passengers/${content.steamLanguage ? `?l=${content.steamLanguage}` : ''}`;
  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article', headline: content.title, description: content.description,
    mainEntityOfPage: pageUrl, datePublished: '2026-07-30', dateModified: content.dateModified || '2026-07-30', inLanguage: content.locale,
    author: { '@type': 'Organization', name: content.authorName, url: `https://dearpassengers.net${content.aboutPath}` },
    publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/', logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' } },
    image: 'https://dearpassengers.net/images/og-image.png',
  };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: content.homeLabel, item: `https://dearpassengers.net${content.homePath}` },
    { '@type': 'ListItem', position: 2, name: content.primaryKeyword, item: pageUrl },
  ] };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: content.faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <Header locale={content.locale} languageHref="/game-dear-passengers/" />
    <main id="main-content" lang={content.locale} dir={content.locale === 'ar' ? 'rtl' : 'ltr'}>
      <article>
        <header className="article-hero">
          <Image src="/images/hero-bg.webp" alt={content.imageAlt} fill sizes="100vw" priority />
          <div className="hero-shade" />
          <div className="container article-hero-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href={content.homePath}>{content.homeLabel}</Link><span>/</span><span>{content.primaryKeyword}</span></nav>
            <div className="eyebrow"><span>●</span> {content.eyebrow}</div>
            <h1>{content.h1}</h1>
            <p>{content.intro}</p>
            <div className="hero-actions"><a className="button" href={steamUrl} target="_blank" rel="noopener noreferrer">{content.steamCta}</a><Link className="button button-ghost" href={content.homePath}>{content.homeLabel} →</Link></div>
            <div className="article-meta"><span>{content.checked}</span><span>{content.sourceMeta}</span><span>{content.languageMeta}</span></div>
          </div>
        </header>
        <div className="container article-layout">
          <aside className="article-toc" aria-label={content.tocLabel}>
            <p>{content.tocLabel}</p><a href="#answer">{content.answerToc}</a>
            {content.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.heading}</a>)}
            <a href="#keyword-context">{content.keywordToc}</a><a href="#faq">{content.faqToc}</a>
            <a className="toc-cta" href={steamUrl} target="_blank" rel="noopener noreferrer">{content.steamCta}</a>
          </aside>
          <div className="article-prose prose">
            <EditorialNote checked={content.checked} locale={content.locale} note={content.editorialNote} />
            <section id="answer"><span className="kicker">{content.answerToc}</span><h2>{content.answerHeading}</h2><p className="snippet-answer"><strong>{content.answer}</strong></p>
              <div className="status-grid"><div className="fact-callout"><span>{content.confirmedLabel}</span><strong>{content.confirmedHeading}</strong><ul>{content.confirmed.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="fact-callout unknown-callout"><span>{content.unknownLabel}</span><strong>{content.unknownHeading}</strong><ul>{content.unknown.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
            </section>
            {content.sections.map((section) => <section id={section.id} key={section.id}><span className="kicker">{section.kicker}</span><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}
            <section id="keyword-context"><span className="kicker">{content.keywordToc}</span><h2>{content.keywordHeading}</h2>{content.keywordContext.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
            <section id="method"><span className="kicker">{content.methodKicker}</span><h2>{content.methodHeading}</h2>{content.methodParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
            <section id="faq"><span className="kicker">{content.faqKicker}</span><h2>{content.faqHeading}</h2><p>{content.faqIntro}</p><FAQ items={content.faqs} /></section>
            <section id="sources"><span className="kicker">{content.sourcesKicker}</span><h2>{content.sourcesHeading}</h2><p>{content.sourcesIntro}</p><ul><li><a href={steamUrl} target="_blank" rel="noopener noreferrer">{content.steamSourceLabel} ↗</a></li><li><a href={FLEXUS_INTERVIEW} target="_blank" rel="noopener noreferrer">{content.interviewSourceLabel} ↗</a></li></ul></section>
            <section className="related-guide"><span className="kicker">{content.relatedKicker}</span><h2>{content.relatedHeading}</h2><p>{content.relatedIntro}</p><div className="related-actions">{content.related.map((item, index) => <Link className={index === 0 ? 'button' : 'button button-ghost'} href={item.href} key={item.href}>{item.label} →</Link>)}</div></section>
          </div>
        </div>
      </article>
    </main>
    <Footer locale={content.locale} />
  </>;
}
