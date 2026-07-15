import Image from 'next/image';
import Link from 'next/link';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/">
            <Image src="/images/logo.png" alt="Dear Passengers" width={36} height={36} />
            <span><b>DEAR PASSENGERS</b><small>INDEPENDENT FLIGHT GUIDE</small></span>
          </Link>
          <p>
            DearPassengers.net is an independent, unofficial guide created for players following the
            Dear Passengers game. We are not affiliated with FLEXUS, Valve, or Steam.
          </p>
        </div>

        <div>
          <h2>Flight guide</h2>
          <Link href="/#gameplay">Dear Passengers gameplay</Link>
          <Link href="/dear-passengers-player-count">Player count and multiplayer</Link>
          <Link href="/#requirements">System requirements</Link>
          <Link href="/#faq">Game FAQ</Link>
        </div>

        <div>
          <h2>Release desk</h2>
          <Link href="/dear-passengers-release-date">Dear Passengers Release Date</Link>
          <Link href="/privacy-policy">Privacy policy</Link>
          <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Official Steam page ↗</a>
          <Link href="/dear-passengers-release-date#platforms">Platform status</Link>
          <Link href="/dear-passengers-release-date#demo">Demo and playtest status</Link>
        </div>

        <div>
          <h2>Editorial desk</h2>
          <Link href="/about">About DearPassengers.net</Link>
          <Link href="/editorial-policy">Editorial and corrections policy</Link>
          <Link href="/contact">Contact and corrections</Link>
          <Link href="/#sources">Sources and verification</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 DearPassengers.net</span>
        <span>Information checked July 15, 2026 · Verify time-sensitive details on Steam.</span>
      </div>
    </footer>
  );
}
