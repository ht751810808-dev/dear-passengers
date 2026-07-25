import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export type ArabicTrustSection = { heading: string; paragraphs: string[] };

export default function ArabicTrustPage({ title, lede, sections, englishPath }: { title: string; lede: string; sections: ArabicTrustSection[]; englishPath: string }) {
  return <><Header locale="ar" languageHref={englishPath} /><main className="legal-page arabic-content" lang="ar" dir="rtl"><div className="container"><article className="legal-card trust-card"><p className="kicker">DEARPASSENGERS.NET · النسخة العربية</p><h1>{title}</h1><p className="legal-lede">{lede}</p>{sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<Link className="button" href="/ar/">العودة إلى الدليل العربي →</Link></article></div></main><Footer locale="ar" /></>;
}
