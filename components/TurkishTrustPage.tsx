import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export type TurkishTrustSection = { heading: string; paragraphs: string[] };

export default function TurkishTrustPage({ title, lede, sections, englishPath }: { title: string; lede: string; sections: TurkishTrustSection[]; englishPath: string }) {
  return <><Header locale="tr" languageHref={englishPath} /><main className="legal-page turkish-content" lang="tr"><div className="container"><article className="legal-card trust-card"><p className="kicker">DEARPASSENGERS.NET · TÜRKÇE</p><h1>{title}</h1><p className="legal-lede">{lede}</p>{sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<Link className="button" href="/tr/">Türkçe rehbere dön →</Link></article></div></main><Footer locale="tr" /></>;
}
