import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/about/';

export const metadata: Metadata = {
  title: { absolute: 'About DearPassengers.net: Independent Game Guide' },
  description:
    'Learn who maintains DearPassengers.net, how this independent Dear Passengers game guide verifies facts, labels unknowns, and corrects published information.',
  alternates: { canonical: '/about', languages: { en: '/about/', de: '/de/ueber-uns/', 'x-default': '/about/' } },
  openGraph: {
    title: 'About DearPassengers.net',
    description: 'The purpose, independence, sourcing standards, and update process behind this game guide.',
    url: PAGE_URL,
    images: ['/images/og-image.png'],
    type: 'website',
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About DearPassengers.net',
  url: PAGE_URL,
  description: 'About the independent editorial guide covering the Dear Passengers game.',
  isPartOf: { '@type': 'WebSite', name: 'DearPassengers.net', url: 'https://dearpassengers.net/' },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <Header />
      <main className="legal-page">
        <article className="container legal-card trust-card">
          <span className="kicker">EDITORIAL CABIN</span>
          <h1>About DearPassengers.net</h1>
          <p className="legal-lede">
            DearPassengers.net is an independent, unofficial editorial guide for people following the Dear Passengers
            game. The site is not operated by FLEXUS, Valve, or Steam. Its purpose is to turn scattered official
            information into a clear briefing without presenting trailer interpretation, community requests, or rumors
            as confirmed features.
          </p>

          <h2>What We Cover</h2>
          <p>
            Coverage focuses on the questions a prospective player needs answered: what the game is, how its pilot and
            cabin roles work, when it may release, which platforms are confirmed, how many players it supports, whether
            solo play is listed, and what remains unknown about demos, controls, languages, crossplay, and hardware.
            The <Link href="/">complete Dear Passengers game guide</Link> provides the broad overview, while the{' '}
            <Link href="/dear-passengers-release-date">release-date briefing</Link> and{' '}
            <Link href="/dear-passengers-player-count">player-count guide</Link> answer narrower searches in depth.
          </p>

          <h2>How We Work</h2>
          <p>
            First-party sources come first. The official Steam listing establishes release, platform, language,
            developer, publisher, feature, and system-requirement facts. FLEXUS channels provide official studio and
            video material. Community pages are used to discover questions players are asking, but a forum request is
            never treated as a product announcement. Every time-sensitive guide displays a checked or modified date.
          </p>

          <h2>Independence and Attribution</h2>
          <p>
            DearPassengers.net does not claim ownership of the game, its characters, Steam listing, or official video.
            Names and referenced material belong to their respective owners. Links to Steam and FLEXUS are provided so
            readers can inspect the primary evidence and decide whether to wishlist the game directly on its official
            storefront.
          </p>

          <h2>Corrections</h2>
          <p>
            Games change during development. If an official page adds a date, player limit, language, demo, controller
            feature, or platform, our affected pages should be updated and their visible verification date advanced.
            Readers can review the full <Link href="/editorial-policy">editorial and corrections policy</Link> or{' '}
            <Link href="/contact">send a correction request</Link> with a direct source.
          </p>

          <div className="trust-actions">
            <Link className="button" href="/">Explore the game guide →</Link>
            <Link className="button trust-secondary" href="/editorial-policy">Read the editorial policy →</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
