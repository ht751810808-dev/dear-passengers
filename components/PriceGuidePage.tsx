import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

type Locale = 'en' | 'es' | 'cs' | 'it';
type Section = { id: string; kicker: string; heading: string; paragraphs: ReactNode[]; bullets?: string[] };
type StatusRow = { label: string; status: string; evidence: string; confirmed?: boolean };
type RelatedLink = { href: string; label: string; hrefLang?: string };

export type PriceGuideProps = {
  locale: Locale;
  languageHref: string;
  eyebrow: string;
  h1: string;
  intro: ReactNode;
  checked: string;
  note: string;
  breadcrumbHome: string;
  homeHref?: string;
  homeHrefLang?: string;
  breadcrumbParent: string;
  parentHref: string;
  parentHrefLang?: string;
  pageLabel: string;
  meta: string[];
  tocLabel: string;
  statusHeading: string;
  statusHeaders: [string, string, string];
  statusRows: StatusRow[];
  confirmedLabel: string;
  confirmedTitle: string;
  confirmed: string[];
  unknownLabel: string;
  unknownTitle: string;
  unknown: string[];
  sections: Section[];
  faqsHeading: string;
  faqs: FaqItem[];
  sourcesHeading: string;
  sourcesIntro: ReactNode;
  relatedHeading: string;
  related: RelatedLink[];
  steamLabel: string;
  parentLabel: string;
  heroAlt: string;
};

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';

export default function PriceGuidePage(props: PriceGuideProps) {
  const wrapperClass = props.locale === 'en' ? '' : `localized-site-${props.locale}`;
  return (
    <div className={wrapperClass || undefined} lang={props.locale}>
      <Header locale={props.locale} languageHref={props.languageHref} />
      <main id="main-content" className="price-guide-page">
        <article>
          <header className="article-hero price-hero">
            <Image src="/images/release-date.webp" alt={props.heroAlt} fill sizes="100vw" priority />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href={props.homeHref || (props.locale === 'en' ? '/' : `/${props.locale}/`)} hrefLang={props.homeHrefLang || props.locale}>{props.breadcrumbHome}</Link><span>/</span>
                <Link href={props.parentHref} hrefLang={props.parentHrefLang}>{props.breadcrumbParent}</Link><span>/</span><span>{props.pageLabel}</span>
              </nav>
              <div className="eyebrow"><span>●</span> {props.eyebrow}</div>
              <h1>{props.h1}</h1>
              <p>{props.intro}</p>
              <div className="hero-actions">
                <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">{props.steamLabel} ↗</a>
                <Link className="button button-ghost" href={props.parentHref} hrefLang={props.parentHrefLang}>{props.parentLabel} →</Link>
              </div>
              <div className="article-meta">{props.meta.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>{props.tocLabel}</p>
              <a href="#status">{props.statusHeading}</a>
              {props.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.heading}</a>)}
              <a href="#price-faq">{props.faqsHeading}</a><a href="#price-sources">{props.sourcesHeading}</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">{props.steamLabel} ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote locale={props.locale} checked={props.checked} note={props.note} />
              <section id="status">
                <span className="kicker">{props.eyebrow}</span>
                <h2>{props.statusHeading}</h2>
                <div className="price-ledger platform-table" role="table" aria-label={props.statusHeading}>
                  <div className="platform-head" role="row">{props.statusHeaders.map((header) => <span role="columnheader" key={header}>{header}</span>)}</div>
                  {props.statusRows.map((row) => <div role="row" key={row.label}><strong role="cell">{row.label}</strong><span className={row.confirmed ? 'status-confirmed' : 'status-open'} role="cell">{row.status}</span><span role="cell">{row.evidence}</span></div>)}
                </div>
                <div className="status-grid">
                  <div className="fact-callout"><span>{props.confirmedLabel}</span><strong>{props.confirmedTitle}</strong><ul>{props.confirmed.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  <div className="fact-callout unknown-callout"><span>{props.unknownLabel}</span><strong>{props.unknownTitle}</strong><ul>{props.unknown.map((item) => <li key={item}>{item}</li>)}</ul></div>
                </div>
              </section>

              {props.sections.map((section) => (
                <section id={section.id} key={section.id}>
                  <span className="kicker">{section.kicker}</span><h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph, index) => <p className={index === 0 ? 'snippet-answer' : undefined} key={index}>{paragraph}</p>)}
                  {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
                </section>
              ))}

              <section id="price-faq"><span className="kicker">FAQ</span><h2>{props.faqsHeading}</h2><FAQ items={props.faqs} /></section>
              <section id="price-sources"><span className="kicker">SOURCES</span><h2>{props.sourcesHeading}</h2><p>{props.sourcesIntro}</p></section>
              <section><span className="kicker">RELATED</span><h2>{props.relatedHeading}</h2><div className="hero-actions related-price-links">{props.related.map((item) => <Link className="button button-ghost" href={item.href} hrefLang={item.hrefLang} key={item.href}>{item.label} →</Link>)}</div></section>
            </div>
          </div>
        </article>
      </main>
      <Footer locale={props.locale} />
    </div>
  );
}
