'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';

const englishLinks = [
  { href: '/dear-passengers-gameplay', label: 'Gameplay' },
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
  { href: '/zh-cn/dear-passengers-player-count', label: '联机' },
  { href: '/zh-cn/dear-passengers-release-date', label: '发售' },
  { href: '/zh-cn/dear-passengers-system-requirements', label: '电脑配置' },
  { href: '/zh-cn/#sources', label: '资料来源' },
];

const germanLinks = [
  { href: '/de/dear-passengers-gameplay/', label: 'Gameplay' },
  { href: '/de/dear-passengers-rollen/', label: 'Rollen' },
  { href: '/de/dear-passengers-spielerzahl/', label: 'Spielerzahl' },
  { href: '/de/dear-passengers-release/', label: 'Release' },
  { href: '/de/dear-passengers-demo/', label: 'Demo' },
  { href: '/de/dear-passengers-news/', label: 'News' },
  { href: '/de/dear-passengers-systemanforderungen/', label: 'PC-Specs' },
];

const arabicLinks = [
  { href: '/ar/dear-passengers-gameplay/', label: 'طريقة اللعب' },
  { href: '/ar/dear-passengers-roles/', label: 'الأدوار' },
  { href: '/ar/dear-passengers-player-count/', label: 'عدد اللاعبين' },
  { href: '/ar/dear-passengers-release/', label: 'موعد الإصدار' },
  { href: '/ar/dear-passengers-demo/', label: 'الديمو' },
  { href: '/ar/dear-passengers-download/', label: 'التحميل الآمن' },
  { href: '/ar/dear-passengers-news/', label: 'الأخبار' },
  { href: '/ar/dear-passengers-system-requirements/', label: 'المواصفات' },
];

type Locale = 'en' | 'zh-CN' | 'de' | 'ar';

const localeOptions: Array<{ locale: Locale; shortLabel: string; label: string }> = [
  { locale: 'en', shortLabel: 'EN', label: 'English' },
  { locale: 'zh-CN', shortLabel: '中文', label: '简体中文' },
  { locale: 'de', shortLabel: 'DE', label: 'Deutsch' },
  { locale: 'ar', shortLabel: 'AR', label: 'العربية' },
];

const localizedRoutes: Array<Record<Locale, string>> = [
  { en: '/', 'zh-CN': '/zh-cn/', de: '/de/', ar: '/ar/' },
  { en: '/dear-passengers-gameplay/', 'zh-CN': '/zh-cn/', de: '/de/dear-passengers-gameplay/', ar: '/ar/dear-passengers-gameplay/' },
  { en: '/dear-passengers-roles/', 'zh-CN': '/zh-cn/', de: '/de/dear-passengers-rollen/', ar: '/ar/dear-passengers-roles/' },
  { en: '/dear-passengers-player-count/', 'zh-CN': '/zh-cn/dear-passengers-player-count/', de: '/de/dear-passengers-spielerzahl/', ar: '/ar/dear-passengers-player-count/' },
  { en: '/dear-passengers-release-date/', 'zh-CN': '/zh-cn/dear-passengers-release-date/', de: '/de/dear-passengers-release/', ar: '/ar/dear-passengers-release/' },
  { en: '/dear-passengers-demo/', 'zh-CN': '/zh-cn/', de: '/de/dear-passengers-demo/', ar: '/ar/dear-passengers-demo/' },
  { en: '/dear-passengers-download/', 'zh-CN': '/zh-cn/', de: '/de/dear-passengers-download/', ar: '/ar/dear-passengers-download/' },
  { en: '/dear-passengers-system-requirements/', 'zh-CN': '/zh-cn/dear-passengers-system-requirements/', de: '/de/dear-passengers-systemanforderungen/', ar: '/ar/dear-passengers-system-requirements/' },
  { en: '/dear-passengers-trailer/', 'zh-CN': '/zh-cn/', de: '/de/dear-passengers-trailer/', ar: '/ar/dear-passengers-trailer/' },
  { en: '/dear-passengers-news/', 'zh-CN': '/zh-cn/', de: '/de/dear-passengers-news/', ar: '/ar/dear-passengers-news/' },
  { en: '/dear-passengers-confirmed-features/', 'zh-CN': '/zh-cn/', de: '/de/dear-passengers-bestaetigte-features/', ar: '/ar/dear-passengers-confirmed-features/' },
  { en: '/dear-passengers-developer-flexus/', 'zh-CN': '/zh-cn/', de: '/de/dear-passengers-entwickler-flexus/', ar: '/ar/dear-passengers-developer/' },
  { en: '/games-like-dear-passengers/', 'zh-CN': '/zh-cn/', de: '/de/spiele-wie-dear-passengers/', ar: '/ar/games-like-dear-passengers/' },
  { en: '/about/', 'zh-CN': '/zh-cn/', de: '/de/ueber-uns/', ar: '/ar/about/' },
  { en: '/editorial-policy/', 'zh-CN': '/zh-cn/', de: '/de/redaktionsrichtlinien/', ar: '/ar/editorial-policy/' },
  { en: '/contact/', 'zh-CN': '/zh-cn/', de: '/de/kontakt/', ar: '/ar/contact/' },
  { en: '/privacy-policy/', 'zh-CN': '/zh-cn/', de: '/de/datenschutz/', ar: '/ar/privacy-policy/' },
];

const localeHomes: Record<Locale, string> = { en: '/', 'zh-CN': '/zh-cn/', de: '/de/', ar: '/ar/' };

function normalizePath(pathname: string) {
  if (pathname === '/') return pathname;
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export default function Header({ locale = 'en', languageHref }: { locale?: Locale; languageHref?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = normalizePath(usePathname());
  const isChinese = locale === 'zh-CN';
  const isGerman = locale === 'de';
  const isArabic = locale === 'ar';
  const links = isChinese ? chineseLinks : isGerman ? germanLinks : isArabic ? arabicLinks : englishLinks;
  const localizedRoute = localizedRoutes.find((route) => Object.values(route).includes(pathname));
  const localeHref = (targetLocale: Locale) => {
    if (targetLocale === locale) return pathname;
    if (localizedRoute) return localizedRoute[targetLocale];
    if (targetLocale === 'en' && languageHref) return normalizePath(languageHref);
    return localeHomes[targetLocale];
  };
  const currentLocale = localeOptions.find((option) => option.locale === locale) || localeOptions[0];
  const homeHref = isChinese ? '/zh-cn' : isGerman ? '/de/' : isArabic ? '/ar/' : '/';
  const homeLabel = isChinese
    ? 'Dear Passengers 中文指南首页'
    : isGerman
      ? 'Dear Passengers deutscher Spiele-Guide'
      : isArabic
        ? 'دليل لعبة Dear Passengers بالعربية'
      : 'Dear Passengers game guide home';
  const siteLabel = isChinese ? '独立游戏资料站' : isGerman ? 'UNABHÄNGIGER SPIELE-GUIDE' : isArabic ? 'دليل ألعاب مستقل' : 'INDEPENDENT FLIGHT GUIDE';
  const languageAria = isChinese ? '选择网站语言' : isGerman ? 'Website-Sprache wählen' : isArabic ? 'اختر لغة الموقع' : 'Choose site language';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <Link className="brand" href={homeHref} aria-label={homeLabel}>
          <Image
            src="/images/logo.png"
            alt="Dear Passengers game guide logo"
            width={40}
            height={40}
            priority
          />
          <span>
            <b>DEAR PASSENGERS</b>
            <small>{siteLabel}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <details className="language-switcher">
            <summary aria-label={languageAria}>
              <span aria-hidden="true">◎</span>
              {currentLocale.shortLabel}
              <span className="language-chevron" aria-hidden="true">⌄</span>
            </summary>
            <div className="language-menu">
              {localeOptions.map((option) => (
                <a
                  href={localeHref(option.locale)}
                  hrefLang={option.locale}
                  lang={option.locale}
                  aria-current={option.locale === locale ? 'page' : undefined}
                  key={option.locale}
                >
                  <span>{option.shortLabel}</span>{option.label}
                </a>
              ))}
            </div>
          </details>
          <a className="button button-small" href={STEAM_URL} target="_blank" rel="noopener noreferrer">
            {isChinese ? 'Steam 愿望单' : isGerman ? 'Auf Steam vormerken' : isArabic ? 'أضفها إلى قائمة الأمنيات' : 'Wishlist on Steam'} <span aria-hidden="true">↗</span>
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
          <div className="mobile-language-options" aria-label={languageAria}>
            {localeOptions.map((option) => (
              <a
                href={localeHref(option.locale)}
                hrefLang={option.locale}
                lang={option.locale}
                aria-current={option.locale === locale ? 'page' : undefined}
                key={option.locale}
                onClick={() => setOpen(false)}
              >
                {option.label}
              </a>
            ))}
          </div>
          <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">
            {isChinese ? '打开 Steam 官方页面' : isGerman ? 'Offizielle Steam-Seite öffnen' : isArabic ? 'افتح صفحة Steam الرسمية' : 'Open the official Steam page'} ↗
          </a>
        </nav>
      )}
    </header>
  );
}
