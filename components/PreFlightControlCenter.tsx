'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const STATUS_REVISION = '2026-08-08';
const STORAGE_KEY = 'dear-passengers-preflight-revision';

type VisitState = 'first' | 'current' | 'changed';
type AnalyticsWindow = Window & {
  gtag?: (command: 'event', eventName: string, parameters?: Record<string, string>) => void;
};

const statusCards = [
  {
    code: 'DP-01',
    eyebrow: 'Release window',
    status: 'Confirmed',
    tone: 'confirmed',
    value: '2026',
    detail: 'Steam still gives the Dear Passengers game a broad 2026 window. No month, day, price, or preorder has been announced.',
    href: '/dear-passengers-release-date',
    linkLabel: 'Review release evidence',
  },
  {
    code: 'DP-02',
    eyebrow: 'Public demo',
    status: 'Planned',
    tone: 'planned',
    value: 'Not live',
    detail: 'FLEXUS plans a public Dear Passengers game demo after its Gamescom build, but there is no public date or download.',
    href: '/dear-passengers-demo',
    linkLabel: 'Check demo access status',
  },
  {
    code: 'DP-03',
    eyebrow: 'Confirmed platform',
    status: 'Confirmed',
    tone: 'confirmed',
    value: 'PC · Steam',
    detail: 'Windows PC is the only announced platform. Console, Mac, Linux, VR, and Steam Deck plans remain open.',
    href: '/dear-passengers-platforms',
    linkLabel: 'Compare platform status',
  },
  {
    code: 'DP-04',
    eyebrow: 'Crew modes',
    status: 'Mixed status',
    tone: 'open',
    value: 'Solo + online',
    detail: 'Single-player and online co-op are confirmed. Maximum crew size, split screen, and crossplay are not stated.',
    href: '/dear-passengers-player-count',
    linkLabel: 'See the multiplayer briefing',
  },
] as const;

function track(event: string, details: Record<string, string> = {}) {
  if (typeof window === 'undefined') return;
  const analyticsWindow = window as AnalyticsWindow;
  analyticsWindow.gtag?.('event', event, details);
}

function VisitSignal({ state }: { state: VisitState }) {
  if (state === 'changed') {
    return (
      <p className="preflight-return-message is-changed" role="status">
        <span aria-hidden="true">!</span>
        This verified briefing changed since your previous visit on this device.
      </p>
    );
  }

  if (state === 'current') {
    return (
      <p className="preflight-return-message is-current" role="status">
        <span aria-hidden="true">✓</span>
        You are current: no newer verified change since your previous visit on this device.
      </p>
    );
  }

  return (
    <p className="preflight-return-message" role="status">
      <span aria-hidden="true">+</span>
      Return tracking is active on this device. Come back after the next official update to see what changed.
    </p>
  );
}

export default function PreFlightControlCenter() {
  const [visitState, setVisitState] = useState<VisitState>('first');

  useEffect(() => {
    try {
      const previousRevision = window.localStorage.getItem(STORAGE_KEY);
      const nextState: VisitState = previousRevision
        ? previousRevision === STATUS_REVISION
          ? 'current'
          : 'changed'
        : 'first';

      setVisitState(nextState);
      window.localStorage.setItem(STORAGE_KEY, STATUS_REVISION);
      track('preflight_return_state', { state: nextState, revision: STATUS_REVISION });
    } catch {
      setVisitState('first');
    }
  }, []);

  return (
    <section className="section preflight-section" aria-labelledby="preflight-title">
      <div className="container">
        <div className="preflight-shell">
          <div className="preflight-topline" aria-hidden="true">
            <span>DEAR PASSENGERS OPERATIONS</span>
            <i />
            <span>PRE-LAUNCH DESK</span>
          </div>

          <div className="preflight-heading">
            <div>
              <span className="kicker">LIVE PRE-FLIGHT STATUS</span>
              <h2 id="preflight-title">Dear Passengers Pre-Flight Control Center</h2>
            </div>
            <div className="preflight-heading-copy">
              <p>
                One fast, source-checked view of the <strong>Dear Passengers game</strong> release, demo, platform, and
                multiplayer status. Each route below owns the full answer; this board shows only what changed and what
                remains unknown.
              </p>
              <VisitSignal state={visitState} />
            </div>
          </div>

          <div className="preflight-grid">
            {statusCards.map((card) => (
              <article className={`preflight-card is-${card.tone}`} key={card.code}>
                <div className="preflight-card-header">
                  <span>{card.code}</span>
                  <b><i aria-hidden="true" />{card.status}</b>
                </div>
                <p className="preflight-card-label">{card.eyebrow}</p>
                <h3>{card.value}</h3>
                <p>{card.detail}</p>
                <Link
                  href={card.href}
                  onClick={() => track('status_card_click', { destination: card.href, status_topic: card.eyebrow })}
                >
                  {card.linkLabel} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="preflight-latest">
            <div className="preflight-date">
              <span>LATEST VERIFIED CHANGE</span>
              <time dateTime="2026-07-31">JUL 31<br />2026</time>
            </div>
            <div className="preflight-latest-copy">
              <p className="kicker">FROM THE OFFICIAL UPDATE LOG</p>
              <h3>Full plane control confirmed; actual-flight video in production</h3>
              <p>
                FLEXUS reported two million wishlists and said it was producing a video showing an actual flight. The
                wishlist figure is developer-reported—not a sales or active-player count—and no video date was given.
              </p>
            </div>
            <div className="preflight-actions">
              <Link
                className="button"
                href="/dear-passengers-news"
                onClick={() => track('status_card_click', { destination: '/dear-passengers-news', status_topic: 'Latest news' })}
              >
                Open verified news <span aria-hidden="true">→</span>
              </Link>
              <a
                href="https://store.steampowered.com/app/4534960/Dear_Passengers/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('steam_cta_click', { placement: 'preflight_control_center' })}
              >
                Official Steam listing <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <p className="preflight-source-note">
            Last verified August 8, 2026 · Confirmed facts use Steam or FLEXUS-controlled sources · “Unknown” means no
            first-party answer was found, not that a feature has been ruled out.
          </p>
        </div>
      </div>
    </section>
  );
}
