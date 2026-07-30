import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/editorial-policy/';

export const metadata: Metadata = {
  title: { absolute: 'Editorial Policy: Sources, Updates and Corrections' },
  description:
    'Read the DearPassengers.net editorial policy covering primary sources, confirmed and unconfirmed claims, update dates, corrections, independence, and AI use.',
  alternates: { canonical: '/editorial-policy', languages: { en: '/editorial-policy/', ar: '/ar/editorial-policy/', de: '/de/redaktionsrichtlinien/', tr: '/tr/editorial-policy/', 'pt-BR': '/pt-br/politica-editorial/', es: '/es/politica-editorial/', 'my-MM': '/my/editorial-policy/', 'x-default': '/editorial-policy/' } },
  openGraph: {
    title: 'DearPassengers.net Editorial Policy',
    description: 'How this independent game guide sources, labels, updates, and corrects information.',
    url: PAGE_URL,
    images: ['/images/og-image.png'],
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'DearPassengers.net Editorial Policy',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-07-15',
  dateModified: '2026-07-15',
  author: { '@type': 'Organization', name: 'DearPassengers.net Editorial Team' },
  publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/' },
};

export default function EditorialPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main className="legal-page">
        <article className="container legal-card trust-card">
          <span className="kicker">VERIFICATION STANDARD · EFFECTIVE JULY 15, 2026</span>
          <h1>Editorial Policy</h1>
          <p className="legal-lede">
            This policy explains how DearPassengers.net researches, writes, updates, and corrects its independent Dear
            Passengers coverage. The central rule is simple: a visible trailer moment can describe what appears on
            screen, but only a direct statement from FLEXUS or an official storefront can confirm a product feature.
          </p>

          <h2>Source Priority</h2>
          <ol className="policy-list">
            <li><strong>Official storefronts.</strong> Steam is the primary source for release window, platform, play modes, languages, requirements, and store features.</li>
            <li><strong>Developer channels.</strong> FLEXUS websites and official accounts establish studio statements, trailers, and announcements.</li>
            <li><strong>Platform holders.</strong> PlayStation, Xbox, Nintendo, and other official stores are required before a platform is described as confirmed.</li>
            <li><strong>Reputable reporting.</strong> News coverage can provide context and trailer observations, but it does not overrule a first-party listing.</li>
            <li><strong>Community discussion.</strong> Forums help identify demand and questions only; requests and speculation are not evidence of a feature.</li>
          </ol>

          <h2>Confirmed, Observed and Unannounced</h2>
          <p>
            A fact is labeled <strong>confirmed</strong> when a first-party source states it directly. A trailer detail
            may be described as <strong>observed in reveal footage</strong> when the wording stays limited to what is
            visible. If the official material does not answer a question, the site uses language such as “not stated,”
            “not announced,” or “unconfirmed.” Absence is not described as cancellation.
          </p>

          <h2>Updates and Dates</h2>
          <p>
            Time-sensitive pages include a published date, modified date, or visible “last verified” label. A date is
            advanced only after meaningful verification or a material content change. Cosmetic edits do not justify a
            false freshness signal. Important changes should be summarized in the relevant announcement timeline.
          </p>

          <h2>Corrections</h2>
          <p>
            Clear factual errors are corrected promptly when a verifiable source is supplied. A correction may update
            the affected sentence, table, FAQ, structured data, modification date, and internal links. Substantial
            changes should also be reflected in the visible timeline. To report an issue, use the{' '}
            <Link href="/contact">contact and corrections page</Link> and include the URL, disputed statement, proposed
            correction, and direct source.
          </p>

          <h2>Independence, Advertising and Affiliate Links</h2>
          <p>
            DearPassengers.net is independent from FLEXUS, Valve, and Steam. Advertising technology may appear on the
            site, but advertisers do not approve editorial conclusions. If an affiliate relationship is introduced in
            the future, it should be disclosed near the relevant link. The current Steam wishlist links are direct
            storefront links and do not change the site’s verification standard.
          </p>

          <h2>Automation and AI Assistance</h2>
          <p>
            Automation may assist with formatting, consistency checks, keyword measurement, or technical validation.
            It must not invent sources, player quotes, reviews, test results, or developer statements. Published factual
            claims remain subject to the same source hierarchy regardless of which tools assisted the workflow.
          </p>

          <h2>Editorial Ownership</h2>
          <p>
            Pages are maintained under the byline “DearPassengers.net Editorial Team.” This shared byline identifies
            the site responsible for verification and corrections; it does not imply affiliation with the game studio.
            More context is available on the <Link href="/about">About DearPassengers.net page</Link>.
          </p>

          <Link className="button" href="/">Return to the Dear Passengers guide →</Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
