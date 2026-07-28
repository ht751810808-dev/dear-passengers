import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export type PortugueseTrustSection = { heading: string; paragraphs: string[] };

export default function PortugueseTrustPage({ title, lede, sections, englishPath }: { title: string; lede: string; sections: PortugueseTrustSection[]; englishPath: string }) {
  return <><Header locale="pt-BR" languageHref={englishPath} /><main className="legal-page portuguese-content" lang="pt-BR"><div className="container"><article className="legal-card trust-card"><p className="kicker">DEARPASSENGERS.NET · PORTUGUÊS DO BRASIL</p><h1>{title}</h1><p className="legal-lede">{lede}</p>{sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<Link className="button" href="/pt-br/">Voltar ao guia brasileiro →</Link></article></div></main><Footer locale="pt-BR" /></>;
}
