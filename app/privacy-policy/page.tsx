import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PrivacySettingsButton from '@/components/PrivacySettingsButton';

const PAGE_URL = 'https://dearpassengers.net/privacy-policy/';
const CONTACT_EMAIL = 'editor@dearpassengers.net';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the DearPassengers.net privacy policy covering analytics, AdSense advertising, third-party cookies, consent, local storage, external links, data controls, and contact information.',
  alternates: { canonical: '/privacy-policy', languages: { en: '/privacy-policy/', ar: '/ar/privacy-policy/', de: '/de/datenschutz/', tr: '/tr/gizlilik/', 'pt-BR': '/pt-br/privacidade/', es: '/es/privacidad/', 'my-MM': '/my/privacy-policy/', 'x-default': '/privacy-policy/' } },
  robots: { index: true, follow: true },
};

const privacySchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'DearPassengers.net Privacy Policy',
  url: PAGE_URL,
  datePublished: '2026-07-17',
  dateModified: '2026-08-10',
  isPartOf: {
    '@type': 'WebSite',
    name: 'DearPassengers.net',
    url: 'https://dearpassengers.net/',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }} />
      <Header />
      <main className="legal-page">
        <article className="container narrow legal-card">
          <p className="kicker">SITE POLICY · UPDATED AUGUST 10, 2026</p>
          <h1>Privacy Policy</h1>
          <p className="legal-lede">
            DearPassengers.net is an independent game information site. This policy explains what information may be
            processed when you visit, which first- and third-party technologies are used, why Google and its
            advertising partners may use cookies or similar identifiers, and the controls available to you. The site
            does not sell the game, provide user accounts, or ask for Steam credentials. Privacy questions can be sent
            to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>Scope and site operator</h2>
          <p>
            This policy applies to pages served from dearpassengers.net. DearPassengers.net publishes independent,
            unofficial editorial coverage of the Dear Passengers game and is not affiliated with FLEXUS, Valve, Steam,
            Google, or the advertising vendors described below. Third-party websites reached through our links have
            their own controllers, terms, and privacy practices. This page describes the site&apos;s current public
            implementation; a material service change will be reflected here before the revision date is advanced.
          </p>

          <h2>Information processed when you browse</h2>
          <p>
            A normal web request exposes limited technical information needed to deliver and protect a page. Hosting,
            content-delivery, security, analytics, and advertising providers may process the requested URL, date and
            time, referrer, IP address, browser and device type, operating system, language, approximate region derived
            from an IP address, and diagnostic information. DearPassengers.net does not request precise GPS location;
            its response headers disable browser geolocation, camera, and microphone access. We do not intentionally
            place names, email addresses, telephone numbers, Steam IDs, or other directly identifying information in
            analytics events, advertising requests, or page URLs.
          </p>

          <h2>Cookies, local storage and similar technologies</h2>
          <p>
            Cookies are small values a service can ask a browser to retain. Similar technologies include local storage,
            pixels, web beacons, and device or browser identifiers. They can remember a consent choice, keep services
            secure, measure whether a page worked, limit repeated ads, attribute a visit, or support advertising.
            DearPassengers.net also uses first-party browser local storage for a non-personal pre-flight checklist so a
            visitor can see whether the published checklist version changed. That value contains only a content
            revision identifier; it is not an account, advertising profile, or cross-site tracker. You can delete it
            through your browser&apos;s site-data controls.
          </p>

          <h2>Google Analytics 4</h2>
          <p>
            We use Google Analytics 4 to understand aggregate traffic, page usage, device categories, and referral
            sources. Depending on location and consent, Google Analytics may use cookies or similar identifiers and
            process page URLs, browser and device information, approximate location derived from an IP address,
            referral information, and interactions with the site. The site configures IP anonymization and does not
            intentionally send Google Analytics names, email addresses, phone numbers, account identifiers, or form
            contents. Analytics reports help us find broken pages, understand which guides answer reader questions, and
            decide which information needs clearer navigation; they are not used to make decisions about an identified
            individual.
          </p>

          <h2>Google AdSense, third-party advertising and identifiers</h2>
          <p>
            This site contains Google AdSense code. When advertising is requested or served, Google and participating
            third-party vendors may place or read cookies, use local storage or web beacons, and process IP addresses,
            consent signals, device information, browser identifiers, page context, ad interactions, and fraud or
            security signals. Google uses advertising cookies to help serve and measure ads, limit repeated ads,
            prevent invalid activity, and—only where permitted by applicable law, consent, and account settings—select
            personalized ads based on previous visits to this or other websites. Non-personalized ads may still use
            cookies or similar technology for frequency capping, aggregated reporting, security, and fraud prevention.
          </p>
          <p>
            Google and the vendors it works with process information under their own terms. Review Google&apos;s page on
            how it <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">uses information from sites or apps that use its services</a>,
            the <a href="https://support.google.com/adsense/answer/9012903" target="_blank" rel="noopener noreferrer">advertising technology provider list</a>,
            and <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.
            DearPassengers.net does not sell personal information directly to advertisers and does not provide an
            advertiser with a reader&apos;s email address or Steam identity.
          </p>

          <h2>Consent in the EEA, United Kingdom and Switzerland</h2>
          <p>
            For visitors in the European Economic Area, the United Kingdom, and Switzerland, advertising storage,
            analytics storage, advertising user data, and ad personalization are configured to default to denied while
            a consent choice is pending. Google Consent Mode communicates the applicable choice to Google tags. Where
            the site&apos;s Google-certified consent message is available, it offers choices to consent, refuse, or manage
            purposes and vendors. The footer then provides a “Privacy and cookie settings” control for reopening that
            message. Because the certified message is supplied through the site&apos;s Google advertising configuration,
            its publication and regional targeting must also be verified in AdSense Privacy &amp; messaging; the
            presence of a script alone is not proof that the account-side message is live.
          </p>
          <p>
            When consent is denied, Google tags may send limited cookieless technical signals for consent status,
            security, fraud prevention, aggregate modeling, or limited advertising where Google supports this. Such
            signals do not grant permission for personalized advertising. If no certified consent message is available
            in a region where one is required, personalized advertising should remain disabled until the site owner
            publishes and verifies an appropriate message.
          </p>

          <h2>External links and embedded media</h2>
          <p>
            Guides link to external services such as Steam, FLEXUS, YouTube, and cited publications. Following a link
            sends a request to that provider, which can receive your IP address, browser details, the destination URL,
            and sometimes the referring page. Privacy-enhanced YouTube embeds use the youtube-nocookie.com domain, but
            playing an embedded video can still connect to Google services. DearPassengers.net does not control the
            cookies, accounts, purchases, or support systems operated by those third parties.
          </p>

          <h2>Contact messages, retention and sharing</h2>
          <p>
            The public site has no registration, comments, upload tool, checkout, or first-party contact form. If you
            email the editorial address, the message is handled by the applicable email provider and contains the
            address and information you choose to send. It may be retained only as reasonably needed to answer,
            document a correction, resolve a rights request, protect the site, or satisfy legal obligations. Do not
            send passwords, payment information, identity documents, or confidential Steam account records. Technical
            logs and Google service data are retained under the settings and policies of the relevant provider. We may
            share information with service providers when necessary to host, secure, measure, or monetize the site, or
            when legally required; we do not publish a private email merely because it was sent to us.
          </p>

          <h2>Your privacy choices</h2>
          <ul className="policy-list">
            <li>Use the control below, when available, to revisit the Google-certified consent message.</li>
            <li>Manage Google ad personalization in <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</li>
            <li>Use Google&apos;s <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer">My Ad Center</a> to review advertising choices associated with your Google account.</li>
            <li>Install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out browser add-on</a> where supported.</li>
            <li>Use browser controls to block or delete cookies and local storage. Blocking storage may prevent a consent or checklist choice from being remembered.</li>
            <li>Email us to ask about personal information contained in a message you previously sent. Applicable rights may include access, correction, deletion, restriction, objection, or withdrawal of consent, depending on your location.</li>
          </ul>

          <h2>Children and sensitive information</h2>
          <p>
            DearPassengers.net is a general-audience game information resource, not a service directed to children and
            not an application that creates child profiles. We do not knowingly ask children to provide personal
            information. The site does not build advertising audiences from health, financial status, religion,
            political views, sexual orientation, precise location, or other sensitive characteristics. If you believe
            a child sent personal information to the editorial email, contact us with the minimum detail necessary to
            locate and review the message.
          </p>

          <h2>Security, questions and policy updates</h2>
          <p>
            Reasonable technical controls reduce risk but no internet transmission or storage system can be guaranteed
            completely secure. This policy may change when the site adds or removes a service, changes how it uses
            information, or must respond to a legal or policy requirement. The “updated” date changes only for a
            meaningful revision. Questions or privacy requests can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;
            factual site corrections can also follow the process on our <Link href="/contact">Contact and Corrections page</Link>.
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
