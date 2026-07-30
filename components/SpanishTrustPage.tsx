import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export type SpanishTrustSection = { heading: string; paragraphs: string[] };

export default function SpanishTrustPage({ title, lede, sections, englishPath }: { title: string; lede: string; sections: SpanishTrustSection[]; englishPath: string }) {
  return <><Header locale="es" languageHref={englishPath} /><main className="legal-page spanish-content" lang="es"><div className="container"><article className="legal-card trust-card"><p className="kicker">DEARPASSENGERS.NET · ESPAÑOL</p><h1>{title}</h1><p className="legal-lede">{lede}</p>{sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<Link className="button" href="/es/">Volver a la guía en español →</Link></article></div></main><Footer locale="es" /></>;
}
