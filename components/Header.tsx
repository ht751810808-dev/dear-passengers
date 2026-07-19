'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';

const englishLinks = [
  { href: '/#gameplay', label: 'Gameplay' },
  { href: '/dear-passengers-roles', label: 'Roles' },
  { href: '/dear-passengers-player-count', label: 'Player count' },
  { href: '/dear-passengers-release-date', label: 'Release date' },
  { href: '/dear-passengers-demo', label: 'Demo' },
  { href: '/dear-passengers-news', label: 'News' },
  { href: '/dear-passengers-developer-flexus', label: 'Developer' },
  { href: '/dear-passengers-system-requirements', label: 'PC specs' },
];

const chineseLinks = [
  { href: '/zh-cn/#gameplay', label: '玩法' },
  { href: '/zh-cn/#multiplayer', label: '联机' },
  { href: '/zh-cn/dear-passengers-release-date', label: '发售' },
  { href: '/zh-cn/dear-passengers-system-requirements', label: '电脑配置' },
  { href: '/zh-cn/#sources', label: '资料来源' },
];

export default function Header({ locale = 'en', languageHref }: { locale?: 'en' | 'zh-CN'; languageHref?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isChinese = locale === 'zh-CN';
  const links = isChinese ? chineseLinks : englishLinks;
  const alternateHref = languageHref || (isChinese ? '/' : '/zh-cn');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <Link className="brand" href={isChinese ? '/zh-cn' : '/'} aria-label={isChinese ? 'Dear Passengers 中文指南首页' : 'Dear Passengers game guide home'}>
          <Image
            src="/images/logo.png"
            alt="Dear Passengers game guide logo"
            width={40}
            height={40}
            priority
          />
          <span>
            <b>DEAR PASSENGERS</b>
            <small>{isChinese ? '独立游戏资料站' : 'INDEPENDENT FLIGHT GUIDE'}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="language-link" href={alternateHref} hrefLang={isChinese ? 'en' : 'zh-CN'}>
            {isChinese ? 'EN' : '中文'}
          </Link>
          <a className="button button-small" href={STEAM_URL} target="_blank" rel="noopener noreferrer">
            {isChinese ? 'Steam 愿望单' : 'Wishlist on Steam'} <span aria-hidden="true">↗</span>
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
          <Link href={alternateHref} hrefLang={isChinese ? 'en' : 'zh-CN'} onClick={() => setOpen(false)}>
            {isChinese ? 'English site' : '简体中文'}
          </Link>
          <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">{isChinese ? '打开 Steam 官方页面' : 'Open the official Steam page'} ↗</a>
        </nav>
      )}
    </header>
  );
}
