'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { LatestOfficialUpdate, StatusBoard } from '@/lib/game-facts';

const STORAGE_KEY = 'dear-passengers-preflight-revision';

type VisitState = 'first' | 'current' | 'changed';
type AnalyticsWindow = Window & {
  gtag?: (command: 'event', eventName: string, parameters?: Record<string, string>) => void;
};

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

interface PreFlightControlCenterProps {
  latestOfficialUpdate: LatestOfficialUpdate;
  statusBoard: StatusBoard;
  steamUrl: string;
}

export default function PreFlightControlCenter({ latestOfficialUpdate, statusBoard, steamUrl }: PreFlightControlCenterProps) {
  const [visitState, setVisitState] = useState<VisitState>('first');
  const statusRevision = statusBoard.revision;

  useEffect(() => {
    try {
      const previousRevision = window.localStorage.getItem(STORAGE_KEY);
      const nextState: VisitState = previousRevision
        ? previousRevision === statusRevision
          ? 'current'
          : 'changed'
        : 'first';

      setVisitState(nextState);
      window.localStorage.setItem(STORAGE_KEY, statusRevision);
      track('preflight_return_state', { state: nextState, revision: statusRevision });
    } catch {
      setVisitState('first');
    }
  }, [statusRevision]);

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
                One fast, source-checked view of the release, demo, platform, and
                multiplayer status. Each route below owns the full answer; this board shows only what changed and what
                remains unknown.
              </p>
              <VisitSignal state={visitState} />
            </div>
          </div>

          <div className="preflight-grid">
            {statusBoard.cards.map((card) => (
              <article className={`preflight-card is-${card.tone}`} key={card.code}>
                <div className="preflight-card-header">
                  <span>{card.code}</span>
                  <b><i aria-hidden="true" />{card.statusLabel}</b>
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
              <time dateTime={latestOfficialUpdate.publishedAt}>
                {latestOfficialUpdate.dateLabel}<br />{latestOfficialUpdate.yearLabel}
              </time>
            </div>
            <div className="preflight-latest-copy">
              <p className="kicker">FROM THE OFFICIAL UPDATE LOG</p>
              <h3>{latestOfficialUpdate.headline}</h3>
              <p>{latestOfficialUpdate.summary}</p>
            </div>
            <div className="preflight-actions">
              <Link
                className="button"
                href={latestOfficialUpdate.ownerRoute}
                onClick={() => track('status_card_click', { destination: latestOfficialUpdate.ownerRoute, status_topic: 'Latest news' })}
              >
                Open verified news <span aria-hidden="true">→</span>
              </Link>
              <a
                href={steamUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('steam_cta_click', { placement: 'preflight_control_center' })}
              >
                Official Steam listing <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <p className="preflight-source-note">
            Last verified {statusBoard.lastVerifiedLabel} · Confirmed facts use Steam or FLEXUS-controlled sources · “Unknown” means no
            first-party answer was found, not that a feature has been ruled out.
          </p>
        </div>
      </div>
    </section>
  );
}
