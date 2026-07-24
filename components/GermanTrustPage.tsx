import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export type TrustSection = { heading: string; paragraphs: string[] };

export default function GermanTrustPage({
  title,
  lede,
  sections,
  englishPath,
}: {
  title: string;
  lede: string;
  sections: TrustSection[];
  englishPath: string;
}) {
  return (
    <>
      <Header locale="de" languageHref={englishPath} />
      <main className="legal-page" lang="de">
        <div className="container">
          <article className="legal-card trust-card">
            <p className="kicker">DEARPASSENGERS.NET · DEUTSCHE AUSGABE</p>
            <h1>{title}</h1>
            <p className="legal-lede">{lede}</p>
            {sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
            <Link className="button" href="/de/">Zur deutschen Startseite →</Link>
          </article>
        </div>
      </main>
      <Footer locale="de" />
    </>
  );
}

