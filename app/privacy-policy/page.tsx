import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PrivacySettingsButton from '@/components/PrivacySettingsButton';

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
          <p className="kicker">Site policy · Updated July 17, 2026</p>
          <h1>Privacy Policy</h1>
          <p>
            DearPassengers.net is an independent information site. This policy explains what data is collected
            when you browse the site, why Google and its advertising partners may process that data, and the
            choices available to you. Questions can be sent to{' '}
            <a href="mailto:editor@dearpassengers.net">editor@dearpassengers.net</a>.
          </p>

          <h2>Google Analytics</h2>
          <p>
            We use Google Analytics 4 to understand aggregate traffic, page usage, device categories, and
            referral sources. Depending on your location and consent choice, Google Analytics may use cookies
            or similar identifiers and process page URLs, browser and device information, approximate location
            derived from an IP address, referral information, and interactions with the site. We do not
            intentionally send names, email addresses, or other directly identifying information to Google
            Analytics.
          </p>

          <h2>Google AdSense, third-party advertising and cookies</h2>
          <p>
            This site contains Google AdSense code. When advertising is served, Google and third-party vendors
            may place or read cookies on your browser, use local storage, or use web beacons, IP addresses, and
            other device identifiers. Google uses advertising cookies to help serve ads based on a visitor&apos;s
            previous visits to this site or other websites. Google and its partners may use this information to
            deliver ads, limit repeated ads, measure performance, prevent fraud and abuse, and, where permitted
            by your consent and settings, personalize advertising.
          </p>
          <p>
            You can review the parties that may receive advertising data in Google&apos;s{' '}
            <a href="https://support.google.com/adsense/answer/9012903" target="_blank" rel="noopener noreferrer">
              advertising technology provider information
            </a>. Each provider processes data under its own privacy terms.
          </p>
          <h2>European regulations and consent</h2>
          <p>
            For visitors in the European Economic Area, the United Kingdom, and Switzerland, the site uses
            Google&apos;s certified consent management platform and IAB Transparency and Consent Framework message.
            Advertising and analytics storage, advertising user data, and ad personalization default to denied
            in those regions until a consent choice is available. The message provides options to consent, not
            consent, or manage individual purposes and vendors. Google Consent Mode communicates the applicable
            choice to Google tags.
          </p>
          <p>
            When consent is denied, Google tags may still send limited, cookieless technical signals for
            consent status, security, fraud prevention, basic measurement, or limited advertising where Google
            supports it. These signals do not grant permission for personalized advertising.
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
            Aggregate analytics retention is controlled in the associated Google Analytics property. Google
            and participating advertising vendors retain information according to their own policies and the
            consent signals they receive.
          </p>
          <ul className="policy-list">
            <li>
              Manage Google ad personalization in{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
            </li>
            <li>
              Install the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                Google Analytics opt-out browser add-on
              </a> where supported.
            </li>
            <li>Use your browser controls to block or delete cookies and site storage.</li>
            <li>Use the privacy and cookie settings control to revisit an applicable European consent choice.</li>
          </ul>

          <h2>Children and sensitive information</h2>
          <p>
            The site is a general-audience game information resource and is not directed to children. We do not
            ask visitors to submit sensitive personal information and do not create advertising audiences from
            health, financial, political, religious, sexual, or other sensitive personal characteristics.
          </p>

          <h2>Policy updates</h2>
          <p>
            This policy may change when the site adds or removes services. The date at the top of this page
            identifies the latest revision. Questions about this policy can be raised through the site owner&apos;s
            published domain contact channel.
          </p>

          <div className="trust-actions">
            <PrivacySettingsButton className="button trust-secondary privacy-settings-button" />
            <Link className="button" href="/">Return to the Dear Passengers guide →</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
