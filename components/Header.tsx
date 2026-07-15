'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';

const links = [
  { href: '/#gameplay', label: 'Gameplay' },
  { href: '/dear-passengers-player-count', label: 'Player count' },
  { href: '/dear-passengers-release-date', label: 'Release date' },
  { href: '/#requirements', label: 'PC specs' },
  { href: '/#sources', label: 'Sources' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Dear Passengers game guide home">
          <Image
            src="/images/logo.png"
            alt="Dear Passengers game guide logo"
            width={40}
            height={40}
            priority
          />
          <span>
            <b>DEAR PASSENGERS</b>
            <small>INDEPENDENT FLIGHT GUIDE</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="button button-small" href={STEAM_URL} target="_blank" rel="noopener noreferrer">
            Wishlist on Steam <span aria-hidden="true">↗</span>
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
          <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Open the official Steam page ↗</a>
        </nav>
      )}
    </header>
  );
}
