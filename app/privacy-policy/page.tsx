import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the DearPassengers.net privacy policy covering analytics, advertising, cookies, external links, data controls, and contact information.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <article className="container narrow legal-card">
          <p className="kicker">Site policy · Updated July 15, 2026</p>
          <h1>Privacy Policy</h1>
          <p>
            DearPassengers.net is an independent information site. This policy explains what data may be
            collected when you browse the site and how third-party services may use that information.
          </p>

          <h2>Google Analytics</h2>
          <p>
            We use Google Analytics 4 to understand aggregate traffic, page usage, device categories, and
            referral sources. Google may set cookies or process technical information such as an approximate
            location, browser type, and interactions with the site. We do not use Analytics to collect names,
            email addresses, or other information that directly identifies visitors.
          </p>

          <h2>Advertising and cookies</h2>
          <p>
            If advertising is enabled, Google AdSense and its partners may use cookies, local storage, or
            similar technologies to deliver, measure, and personalize ads. Advertising only becomes eligible
            after the site is connected to an approved AdSense publisher account. Visitors can manage Google
            advertising preferences through Google&apos;s Ads Settings and can block or delete cookies in their
            browser.
          </p>

          <h2>External services</h2>
          <p>
            The site links to third-party services including Steam. Those services operate under their own
            privacy policies. Following an external link may allow that provider to receive standard request
            information such as your IP address and referring page.
          </p>

          <h2>Data retention and choices</h2>
          <p>
            DearPassengers.net does not currently provide accounts, forms, or a first-party user database.
            Aggregate analytics retention is controlled in the associated Google Analytics property. You may
            use browser privacy controls, content blockers, or Google&apos;s opt-out tools to restrict tracking.
          </p>

          <h2>Policy updates</h2>
          <p>
            This policy may change when the site adds or removes services. The date at the top of this page
            identifies the latest revision. Questions about this policy can be raised through the site owner&apos;s
            published domain contact channel.
          </p>

          <Link className="button" href="/">Return to the Dear Passengers guide →</Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
