import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/contact/';
const CONTACT_EMAIL = 'editor@dearpassengers.net';

export const metadata: Metadata = {
  title: { absolute: 'Contact DearPassengers.net and Report Corrections' },
  description:
    'Contact the DearPassengers.net editorial team to report a factual error, submit a first-party source, raise a privacy question, or request attribution review.',
  alternates: { canonical: '/contact', languages: { en: '/contact/', ar: '/ar/contact/', de: '/de/kontakt/', tr: '/tr/iletisim/', 'pt-BR': '/pt-br/contato/', es: '/es/contacto/', 'my-MM': '/my/contact/', 'x-default': '/contact/' } },
  openGraph: {
    title: 'Contact DearPassengers.net',
    description: 'Report corrections, sources, privacy questions, or attribution issues to the editorial team.',
    url: PAGE_URL,
    images: ['/images/og-image.png'],
    type: 'website',
  },
};

export default function ContactPage() {
  const correctionSubject = encodeURIComponent('Correction request for DearPassengers.net');

  return (
    <>
      <Header />
      <main className="legal-page">
        <article className="container legal-card trust-card">
          <span className="kicker">CONTACT THE EDITORIAL DESK</span>
          <h1>Contact and Corrections</h1>
          <p className="legal-lede">
            Use this channel for factual corrections, first-party source updates, privacy questions, copyright or
            attribution concerns, and technical accessibility reports. DearPassengers.net is an independent guide and
            cannot provide game keys, beta access, customer support, or statements on behalf of FLEXUS or Steam.
          </p>

          <div className="contact-card">
            <span>EDITORIAL EMAIL</span>
            <a href={`mailto:${CONTACT_EMAIL}?subject=${correctionSubject}`}>{CONTACT_EMAIL}</a>
            <p>Please include the page URL and a direct source whenever the request concerns a factual claim.</p>
          </div>

          <h2>What to Include in a Correction</h2>
          <ol className="policy-list">
            <li>The exact DearPassengers.net page URL.</li>
            <li>The sentence, table row, date, image, or attribution you believe is incorrect.</li>
            <li>The corrected information in plain language.</li>
            <li>A first-party link from Steam, FLEXUS, or the relevant platform holder when available.</li>
          </ol>

          <h2>What Happens Next</h2>
          <p>
            The editorial team compares the request with the site’s source hierarchy. Verified errors should be fixed
            in the visible page, relevant structured data, and any related guide that repeats the claim. Material
            corrections may also update the page’s modification date or timeline.
          </p>

          <h2>Game Support Requests</h2>
          <p>
            For release notifications, wishlists, store access, or Steam account questions, use the official Steam
            listing and Steam support. For developer communication, use FLEXUS official channels. Community requests
            sent to this site cannot confirm multiplayer limits, localization, controllers, VR, demos, or console ports.
          </p>

          <p>
            Before writing, you may want to review the <Link href="/editorial-policy">editorial policy</Link>, the{' '}
            <Link href="/dear-passengers-release-date">release-date guide</Link>, or the{' '}
            <Link href="/dear-passengers-player-count">multiplayer and player-count guide</Link>.
          </p>

          <div className="trust-actions">
            <a className="button" href={`mailto:${CONTACT_EMAIL}?subject=${correctionSubject}`}>Email the editorial desk →</a>
            <Link className="button trust-secondary" href="/">Return to the game guide →</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
