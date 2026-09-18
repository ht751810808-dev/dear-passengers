import type { Metadata } from 'next';
import Link from 'next/link';
import CabinCrisisMiniGame from '@/components/CabinCrisisMiniGame';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/play/cabin-crisis/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';

export const metadata: Metadata = {
  title: { absolute: 'Cabin Crisis Drill — Unofficial Fan Browser Game' },
  description:
    'Play an original fan-made airline cabin challenge in your browser. Cabin Crisis Drill is unofficial, not the Dear Passengers demo, and not affiliated with FLEXUS.',
  alternates: { canonical: PAGE_URL },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Cabin Crisis Drill — Unofficial Fan Browser Game',
    description:
      'An original, fan-made cabin challenge that runs in your browser. It is not the official Dear Passengers demo and is not affiliated with FLEXUS.',
    url: PAGE_URL,
    type: 'website',
  },
};

export default function CabinCrisisPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        <header
          className="article-hero"
          style={{
            background:
              'radial-gradient(circle at 82% 20%, rgba(239,143,60,.28), transparent 28%), radial-gradient(circle at 62% 78%, rgba(74,167,181,.17), transparent 34%), linear-gradient(140deg, #07111f 0%, #122942 58%, #0b1729 100%)',
          }}
        >
          <div className="hero-shade" aria-hidden="true" />
          <div className="container article-hero-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Dear Passengers Game Guide</Link>
              <span aria-hidden="true">/</span>
              <Link href="/dear-passengers-demo/">Demo Status</Link>
              <span aria-hidden="true">/</span>
              <span>Fan Challenge</span>
            </nav>

            <div className="eyebrow">
              <span>●</span> ORIGINAL BROWSER CHALLENGE · NO DOWNLOAD
            </div>
            <h1>
              Cabin Crisis Drill —<br />
              <em>Unofficial Fan Browser Game</em>
            </h1>
            <p>
              Keep a fictional cabin under control through five quick rounds of service requests, loose luggage,
              turbulence and unexpected trouble. This independently created game is free to play here and is not the
              official <em>Dear Passengers</em> demo.
            </p>

            <div className="hero-actions">
              <a className="button" href="#play-cabin-crisis">
                Start the cabin drill ↓
              </a>
              <a className="button button-ghost" href={STEAM_URL} target="_blank" rel="noopener noreferrer">
                Visit the official Steam page ↗
              </a>
            </div>
            <p className="storefront-disclosure">
              No account, installer or unofficial game file is required. The Steam link opens the official third-party
              storefront listing.
            </p>

            <div className="status-strip" aria-label="Important facts about this browser game">
              <div>
                <small>OFFICIAL DEMO · CHECKED SEP 6, 2026</small>
                <strong>NOT PUBLICLY AVAILABLE</strong>
              </div>
              <div>
                <small>THIS EXPERIENCE</small>
                <strong>FAN-MADE &amp; ORIGINAL</strong>
              </div>
              <div>
                <small>AFFILIATION</small>
                <strong>NOT ENDORSED BY FLEXUS</strong>
              </div>
            </div>
          </div>
        </header>

        <section id="play-cabin-crisis" className="section preflight-section" aria-labelledby="play-heading">
          <div className="container preflight-shell">
            <div className="preflight-topline" aria-hidden="true">
              <span>TRAINING FLIGHT CC-01</span>
              <i />
              <span>FIVE ROUNDS · SESSION SCORE ONLY</span>
            </div>
            <div className="preflight-heading">
              <div>
                <span className="kicker">READY WHEN YOU ARE</span>
                <h2 id="play-heading">Begin the Cabin Drill</h2>
              </div>
              <div className="preflight-heading-copy">
                <p>
                  Respond to the highlighted cabin problem before the round timer expires. The challenge keeps your
                  score only for the current play session and does not ask for personal information.
                </p>
                <div className="preflight-return-message">
                  <span aria-hidden="true">!</span>
                  <p>
                    <strong>Fan-made safety notice:</strong> this original mini-game is not a leaked build, official
                    playtest, beta or downloadable Dear Passengers demo.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '48px' }}>
              <CabinCrisisMiniGame locale="en" steamUrl={STEAM_URL} />
            </div>
          </div>
        </section>

        <section className="section manifest-section" aria-labelledby="about-drill-heading">
          <div className="container two-column">
            <div className="prose lead-prose">
              <span className="kicker">ORIGINAL FAN PROJECT</span>
              <h2 id="about-drill-heading">What This Cabin Drill Is</h2>
              <p>
                Cabin Crisis Drill is a small browser game created by DearPassengers.net. Its rules, interface,
                scoring, artwork and fictional situations are original. It is designed as a playful companion to our
                independent reporting—not as a recreation, preview or substitute for a FLEXUS build.
              </p>
              <p>
                The broad inspiration is limited to themes that the developer publicly describes for the full game:
                cabin work, passenger needs, cargo, turbulence and problems that can create cascading chaos. This
                exercise does not predict the official demo&apos;s missions, controls, scoring, roster, difficulty or
                release content.
              </p>
              <p>
                For the verified availability answer, read our{' '}
                <Link href="/dear-passengers-demo/">current Dear Passengers public demo and playtest status</Link>.
                That guide separates developer-confirmed plans from details that remain unknown.
              </p>
            </div>

            <aside className="status-board" aria-label="Cabin Crisis Drill identity card">
              <div className="board-header">
                <span>EXPERIENCE MANIFEST</span>
                <b>CABIN CRISIS DRILL</b>
              </div>
              <div className="board-row">
                <span>Format</span>
                <b>Browser mini-game</b>
              </div>
              <div className="board-row confirmed">
                <span>Access</span>
                <b>Free on this page</b>
              </div>
              <div className="board-row">
                <span>Creator</span>
                <b>DearPassengers.net</b>
              </div>
              <div className="board-row open">
                <span>Official status</span>
                <b>Unofficial</b>
              </div>
              <div className="board-row">
                <span>FLEXUS affiliation</span>
                <b>None</b>
              </div>
              <p>
                Dear Passengers and FLEXUS are referenced only to explain the editorial context and distinguish this
                fan project from the official game.
              </p>
            </aside>
          </div>
        </section>

        <section className="section source-section" aria-labelledby="continue-heading">
          <div className="container">
            <div className="source-heading">
              <div>
                <span className="kicker">KEEP EXPLORING</span>
                <h2 id="continue-heading">Official Facts &amp; Independent Guides</h2>
              </div>
              <p>
                The mini-game is entertainment. Use the official store listing and our source-backed guides for real
                information about access, mechanics and development news.
              </p>
            </div>

            <div className="source-grid">
              <Link href="/dear-passengers-demo/">
                <span>ACCESS STATUS</span>
                <strong>Public Demo Tracker</strong>
                <p>Check whether an official demo, Steam Playtest or verified download has become available.</p>
                <b>Read the verified demo status →</b>
              </Link>
              <Link href="/dear-passengers-gameplay/">
                <span>CONFIRMED MECHANICS</span>
                <strong>Gameplay Guide</strong>
                <p>See what FLEXUS and the official store page actually confirm about roles, passengers and cargo.</p>
                <b>Explore confirmed gameplay →</b>
              </Link>
              <Link href="/dear-passengers-news/">
                <span>DEVELOPER UPDATES</span>
                <strong>News Tracker</strong>
                <p>Follow dated announcements and source checks without treating speculation as confirmed news.</p>
                <b>Review the latest verified news →</b>
              </Link>
              <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">
                <span>PRIMARY SOURCE</span>
                <strong>Official Steam Listing</strong>
                <p>Use the official store page for the real game&apos;s wishlist, release and access information.</p>
                <b>Open Steam ↗</b>
              </a>
            </div>

            <p className="source-policy-link">
              Cabin Crisis Drill is not developed, published, sponsored or endorsed by FLEXUS, Valve or Steam.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
