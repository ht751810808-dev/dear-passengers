import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export type MyanmarTrustSection = { heading: string; paragraphs: string[] };

export default function MyanmarTrustPage({
  title,
  lede,
  sections,
  englishPath,
}: {
  title: string;
  lede: string;
  sections: MyanmarTrustSection[];
  englishPath: string;
}) {
  return (
    <>
      <Header locale="my-MM" languageHref={englishPath} />
      <main
        className="legal-page myanmar-content"
        lang="my-MM"
        style={{ fontFamily: '"Noto Sans Myanmar", "Myanmar Text", "Myanmar Sangam MN", sans-serif' }}
      >
        <div className="container">
          <article className="legal-card trust-card">
            <p className="kicker">DEARPASSENGERS.NET · မြန်မာဘာသာ</p>
            <h1>{title}</h1>
            <p className="legal-lede">{lede}</p>
            {sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
            <Link className="button" href="/my/">မြန်မာဘာသာလမ်းညွှန်သို့ ပြန်ရန် →</Link>
          </article>
        </div>
      </main>
      <Footer locale="my-MM" />
    </>
  );
}
