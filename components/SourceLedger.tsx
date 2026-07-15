import Link from 'next/link';

const sources = [
  {
    label: 'PRIMARY GAME LISTING',
    title: 'Dear Passengers on Steam',
    description: 'Release, play modes, languages, and PC requirements.',
    href: 'https://store.steampowered.com/app/4534960/Dear_Passengers/',
  },
  {
    label: 'OFFICIAL MEDIA',
    title: 'FLEXUS announcement trailer',
    description: 'Official footage of roles, hazards, cargo, and repairs.',
    href: 'https://www.youtube.com/watch?v=XRvd_HZesys',
  },
  {
    label: 'DEVELOPER',
    title: 'FLEXUS studio website',
    description: 'First-party background on the game studio.',
    href: 'https://flexus.games/',
  },
  {
    label: 'PLAYER QUESTIONS',
    title: 'Steam Community discussions',
    description: 'Identifies questions but never confirms features.',
    href: 'https://steamcommunity.com/app/4534960/discussions/',
  },
];

export default function SourceLedger() {
  return (
    <section className="section source-section" id="sources">
      <div className="container">
        <div className="section-heading source-heading">
          <div>
            <span className="kicker">SOURCE MANIFEST</span>
            <h2>How This Dear Passengers Guide Is Verified</h2>
          </div>
          <p>
            Official sources establish facts. Community posts identify questions but never confirm features.
          </p>
        </div>
        <div className="source-grid">
          {sources.map((source) => (
            <a href={source.href} target="_blank" rel="noopener noreferrer" key={source.href}>
              <span>{source.label}</span>
              <strong>{source.title}</strong>
              <p>{source.description}</p>
              <b>Open source ↗</b>
            </a>
          ))}
        </div>
        <div className="verification-log" aria-label="Dear Passengers verification update log">
          <div><time dateTime="2026-07-14">JUL 14 · 2026</time><p><strong>Public reveal.</strong> Steam listing and official trailer published.</p></div>
          <div><time dateTime="2026-07-15">JUL 15 · 2026</time><p><strong>First verification.</strong> Core facts checked against Steam.</p></div>
          <div><span>NEXT CHECK</span><p><strong>Material change.</strong> Date, demo, player limit, language, input, or platform.</p></div>
        </div>
        <p className="source-policy-link">
          Read our <Link href="/editorial-policy">editorial and corrections policy</Link> or{' '}
          <Link href="/contact">report a factual issue</Link>.
        </p>
      </div>
    </section>
  );
}
