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
  { href: '/zh-cn/dear-passengers-download', label: '下载' },
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

const turkishLinks = [
  { href: '/tr/dear-passengers-oynanis/', label: 'Oynanış' },
  { href: '/tr/dear-passengers-rolleri/', label: 'Roller' },
  { href: '/tr/dear-passengers-kac-kisilik/', label: 'Kaç kişilik?' },
  { href: '/tr/dear-passengers-cikis-tarihi/', label: 'Çıkış tarihi' },
  { href: '/tr/dear-passengers-demo/', label: 'Demo' },
  { href: '/tr/dear-passengers-indir/', label: 'Güvenli indir' },
  { href: '/tr/dear-passengers-haberleri/', label: 'Haberler' },
  { href: '/tr/dear-passengers-sistem-gereksinimleri/', label: 'Sistem' },
];

const portugueseLinks = [
  { href: '/pt-br/dear-passengers-como-jogar/', label: 'Como jogar' },
  { href: '/pt-br/dear-passengers-funcoes/', label: 'Funções' },
  { href: '/pt-br/dear-passengers-quantos-jogadores/', label: 'Jogadores' },
  { href: '/pt-br/dear-passengers-data-de-lancamento/', label: 'Lançamento' },
  { href: '/pt-br/dear-passengers-demo/', label: 'Demo' },
  { href: '/pt-br/dear-passengers-baixar/', label: 'Baixar com segurança' },
  { href: '/pt-br/dear-passengers-noticias/', label: 'Notícias' },
  { href: '/pt-br/dear-passengers-requisitos/', label: 'Requisitos' },
];

const spanishLinks = [
  { href: '/es/dear-passengers-como-jugar/', label: 'Cómo jugar' },
  { href: '/es/dear-passengers-roles/', label: 'Roles' },
  { href: '/es/dear-passengers-cuantos-jugadores/', label: 'Jugadores' },
  { href: '/es/dear-passengers-fecha-de-lanzamiento/', label: 'Lanzamiento' },
  { href: '/es/dear-passengers-demo/', label: 'Demo' },
  { href: '/es/dear-passengers-descargar/', label: 'Descargar' },
  { href: '/es/dear-passengers-noticias/', label: 'Noticias' },
  { href: '/es/dear-passengers-requisitos/', label: 'Requisitos' },
];

const myanmarLinks = [
  { href: '/my/dear-passengers-gameplay/', label: 'ကစားနည်း' },
  { href: '/my/dear-passengers-roles/', label: 'တာဝန်များ' },
  { href: '/my/dear-passengers-player-count/', label: 'ကစားသမားဦးရေ' },
  { href: '/my/dear-passengers-release-date/', label: 'ထွက်ရှိမည့်ရက်' },
  { href: '/my/dear-passengers-demo/', label: 'Demo' },
  { href: '/my/dear-passengers-download/', label: 'ဒေါင်းလုဒ်' },
  { href: '/my/dear-passengers-news/', label: 'သတင်း' },
  { href: '/my/dear-passengers-system-requirements/', label: 'PC လိုအပ်ချက်' },
];

const russianLinks = [
  { href: '/ru/igra-dear-passengers/', label: 'Об игре' },
  { href: '/ru/dear-passengers-kak-igrat/', label: 'Как играть' },
  { href: '/ru/dear-passengers-skolko-igrokov/', label: 'Игроки' },
  { href: '/ru/dear-passengers-data-vyhoda/', label: 'Дата выхода' },
  { href: '/ru/dear-passengers-demo/', label: 'Демо' },
  { href: '/ru/dear-passengers-skachat/', label: 'Скачать' },
  { href: '/ru/dear-passengers-sistemnye-trebovaniya/', label: 'Требования' },
  { href: '/ru/dear-passengers-russkiy-yazyk/', label: 'Русский язык' },
];

const czechLinks = [
  { href: '/cs/hra-dear-passengers/', label: 'O hře' },
  { href: '/cs/dear-passengers-jak-hrat/', label: 'Jak hrát' },
  { href: '/cs/dear-passengers-pocet-hracu/', label: 'Počet hráčů' },
  { href: '/cs/dear-passengers-datum-vydani/', label: 'Datum vydání' },
  { href: '/cs/dear-passengers-demo/', label: 'Demo' },
  { href: '/cs/dear-passengers-stahnout/', label: 'Stažení' },
  { href: '/cs/dear-passengers-systemove-pozadavky/', label: 'Požadavky' },
  { href: '/cs/dear-passengers-cestina/', label: 'Čeština' },
];

const italianLinks = [
  { href: '#uscita', label: 'Uscita' },
  { href: '#prezzo', label: 'Prezzo' },
  { href: '#piattaforme', label: 'Piattaforme' },
  { href: '#demo', label: 'Demo' },
  { href: '#lingua', label: 'Lingua italiana' },
  { href: '#faq', label: 'FAQ' },
];

type Locale = 'en' | 'zh-CN' | 'de' | 'ar' | 'tr' | 'pt-BR' | 'es' | 'my-MM' | 'ru' | 'cs' | 'it';

const localeOptions: Array<{ locale: Locale; shortLabel: string; label: string }> = [
  { locale: 'en', shortLabel: 'EN', label: 'English' },
  { locale: 'zh-CN', shortLabel: '中文', label: '简体中文' },
  { locale: 'de', shortLabel: 'DE', label: 'Deutsch' },
  { locale: 'ar', shortLabel: 'AR', label: 'العربية' },
  { locale: 'tr', shortLabel: 'TR', label: 'Türkçe' },
  { locale: 'pt-BR', shortLabel: 'PT-BR', label: 'Português (Brasil)' },
  { locale: 'es', shortLabel: 'ES', label: 'Español' },
  { locale: 'my-MM', shortLabel: 'MY', label: 'မြန်မာ' },
  { locale: 'ru', shortLabel: 'RU', label: 'Русский' },
  { locale: 'cs', shortLabel: 'CS', label: 'Čeština' },
  { locale: 'it', shortLabel: 'IT', label: 'Italiano' },
];

const localizedRoutes: Array<Partial<Record<Locale, string>> & { en: string }> = [
  { en: '/', 'zh-CN': '/zh-cn/', de: '/de/', ar: '/ar/', tr: '/tr/', 'pt-BR': '/pt-br/', es: '/es/', 'my-MM': '/my/', ru: '/ru/', cs: '/cs/' },
  { en: '/game-dear-passengers/', 'zh-CN': '/zh-cn/dear-passengers-game/', de: '/de/dear-passengers-spiel/', ar: '/ar/dear-passengers-game/', tr: '/tr/dear-passengers-oyunu/', 'pt-BR': '/pt-br/jogo-dear-passengers/', es: '/es/juego-dear-passengers/', 'my-MM': '/my/', ru: '/ru/igra-dear-passengers/', cs: '/cs/hra-dear-passengers/' },
  { en: '/dear-passengers-gameplay/', 'zh-CN': '/zh-cn/', de: '/de/dear-passengers-gameplay/', ar: '/ar/dear-passengers-gameplay/', tr: '/tr/dear-passengers-oynanis/', 'pt-BR': '/pt-br/dear-passengers-como-jogar/', es: '/es/dear-passengers-como-jugar/', 'my-MM': '/my/dear-passengers-gameplay/', ru: '/ru/dear-passengers-kak-igrat/', cs: '/cs/dear-passengers-jak-hrat/' },
  { en: '/dear-passengers-roles/', 'zh-CN': '/zh-cn/', de: '/de/dear-passengers-rollen/', ar: '/ar/dear-passengers-roles/', tr: '/tr/dear-passengers-rolleri/', 'pt-BR': '/pt-br/dear-passengers-funcoes/', es: '/es/dear-passengers-roles/', 'my-MM': '/my/dear-passengers-roles/', ru: '/ru/', cs: '/cs/' },
  { en: '/dear-passengers-player-count/', 'zh-CN': '/zh-cn/dear-passengers-player-count/', de: '/de/dear-passengers-spielerzahl/', ar: '/ar/dear-passengers-player-count/', tr: '/tr/dear-passengers-kac-kisilik/', 'pt-BR': '/pt-br/dear-passengers-quantos-jogadores/', es: '/es/dear-passengers-cuantos-jugadores/', 'my-MM': '/my/dear-passengers-player-count/', ru: '/ru/dear-passengers-skolko-igrokov/', cs: '/cs/dear-passengers-pocet-hracu/' },
  { en: '/dear-passengers-release-date/', 'zh-CN': '/zh-cn/dear-passengers-release-date/', de: '/de/dear-passengers-release/', ar: '/ar/dear-passengers-release/', tr: '/tr/dear-passengers-cikis-tarihi/', 'pt-BR': '/pt-br/dear-passengers-data-de-lancamento/', es: '/es/dear-passengers-fecha-de-lanzamiento/', 'my-MM': '/my/dear-passengers-release-date/', ru: '/ru/dear-passengers-data-vyhoda/', cs: '/cs/dear-passengers-datum-vydani/', it: '/it/dear-passengers-data-di-uscita/' },
  { en: '/dear-passengers-demo/', 'zh-CN': '/zh-cn/', de: '/de/dear-passengers-demo/', ar: '/ar/dear-passengers-demo/', tr: '/tr/dear-passengers-demo/', 'pt-BR': '/pt-br/dear-passengers-demo/', es: '/es/dear-passengers-demo/', 'my-MM': '/my/dear-passengers-demo/', ru: '/ru/dear-passengers-demo/', cs: '/cs/dear-passengers-demo/' },
  { en: '/dear-passengers-download/', 'zh-CN': '/zh-cn/dear-passengers-download/', de: '/de/dear-passengers-download/', ar: '/ar/dear-passengers-download/', tr: '/tr/dear-passengers-indir/', 'pt-BR': '/pt-br/dear-passengers-baixar/', es: '/es/dear-passengers-descargar/', 'my-MM': '/my/dear-passengers-download/', ru: '/ru/dear-passengers-skachat/', cs: '/cs/dear-passengers-stahnout/' },
  { en: '/dear-passengers-system-requirements/', 'zh-CN': '/zh-cn/dear-passengers-system-requirements/', de: '/de/dear-passengers-systemanforderungen/', ar: '/ar/dear-passengers-system-requirements/', tr: '/tr/dear-passengers-sistem-gereksinimleri/', 'pt-BR': '/pt-br/dear-passengers-requisitos/', es: '/es/dear-passengers-requisitos/', 'my-MM': '/my/dear-passengers-system-requirements/', ru: '/ru/dear-passengers-sistemnye-trebovaniya/', cs: '/cs/dear-passengers-systemove-pozadavky/' },
  { en: '/dear-passengers-trailer/', 'zh-CN': '/zh-cn/', de: '/de/dear-passengers-trailer/', ar: '/ar/dear-passengers-trailer/', tr: '/tr/dear-passengers-fragman/', 'pt-BR': '/pt-br/dear-passengers-trailer/', es: '/es/dear-passengers-trailer/', 'my-MM': '/my/dear-passengers-trailer/', ru: '/ru/', cs: '/cs/' },
  { en: '/dear-passengers-news/', 'zh-CN': '/zh-cn/', de: '/de/dear-passengers-news/', ar: '/ar/dear-passengers-news/', tr: '/tr/dear-passengers-haberleri/', 'pt-BR': '/pt-br/dear-passengers-noticias/', es: '/es/dear-passengers-noticias/', 'my-MM': '/my/dear-passengers-news/', ru: '/ru/', cs: '/cs/' },
  { en: '/dear-passengers-confirmed-features/', 'zh-CN': '/zh-cn/', de: '/de/dear-passengers-bestaetigte-features/', ar: '/ar/dear-passengers-confirmed-features/', tr: '/tr/dear-passengers-ozellikleri/', 'pt-BR': '/pt-br/dear-passengers-recursos-confirmados/', es: '/es/dear-passengers-caracteristicas-confirmadas/', 'my-MM': '/my/dear-passengers-confirmed-features/', ru: '/ru/', cs: '/cs/' },
  { en: '/dear-passengers-developer-flexus/', 'zh-CN': '/zh-cn/', de: '/de/dear-passengers-entwickler-flexus/', ar: '/ar/dear-passengers-developer/', tr: '/tr/dear-passengers-gelistiricisi/', 'pt-BR': '/pt-br/dear-passengers-desenvolvedora-flexus/', es: '/es/dear-passengers-desarrollador-flexus/', 'my-MM': '/my/dear-passengers-developer-flexus/', ru: '/ru/', cs: '/cs/' },
  { en: '/games-like-dear-passengers/', 'zh-CN': '/zh-cn/', de: '/de/spiele-wie-dear-passengers/', ar: '/ar/games-like-dear-passengers/', tr: '/tr/dear-passengers-benzeri-oyunlar/', 'pt-BR': '/pt-br/jogos-parecidos-com-dear-passengers/', es: '/es/juegos-parecidos-a-dear-passengers/', 'my-MM': '/my/games-like-dear-passengers/', ru: '/ru/', cs: '/cs/' },
  { en: '/about/', 'zh-CN': '/zh-cn/', de: '/de/ueber-uns/', ar: '/ar/about/', tr: '/tr/hakkimizda/', 'pt-BR': '/pt-br/sobre/', es: '/es/sobre/', 'my-MM': '/my/about/', ru: '/ru/', cs: '/cs/' },
  { en: '/editorial-policy/', 'zh-CN': '/zh-cn/', de: '/de/redaktionsrichtlinien/', ar: '/ar/editorial-policy/', tr: '/tr/editorial-policy/', 'pt-BR': '/pt-br/politica-editorial/', es: '/es/politica-editorial/', 'my-MM': '/my/editorial-policy/', ru: '/ru/', cs: '/cs/' },
  { en: '/contact/', 'zh-CN': '/zh-cn/', de: '/de/kontakt/', ar: '/ar/contact/', tr: '/tr/iletisim/', 'pt-BR': '/pt-br/contato/', es: '/es/contacto/', 'my-MM': '/my/contact/', ru: '/ru/', cs: '/cs/' },
  { en: '/privacy-policy/', 'zh-CN': '/zh-cn/', de: '/de/datenschutz/', ar: '/ar/privacy-policy/', tr: '/tr/gizlilik/', 'pt-BR': '/pt-br/privacidade/', es: '/es/privacidad/', 'my-MM': '/my/privacy-policy/', ru: '/ru/', cs: '/cs/' },
];

const localeHomes: Record<Locale, string> = { en: '/', 'zh-CN': '/zh-cn/', de: '/de/', ar: '/ar/', tr: '/tr/', 'pt-BR': '/pt-br/', es: '/es/', 'my-MM': '/my/', ru: '/ru/', cs: '/cs/', it: '/it/dear-passengers-data-di-uscita/' };

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
  const isTurkish = locale === 'tr';
  const isPortuguese = locale === 'pt-BR';
  const isSpanish = locale === 'es';
  const isMyanmar = locale === 'my-MM';
  const isRussian = locale === 'ru';
  const isCzech = locale === 'cs';
  const isItalian = locale === 'it';
  const links = isChinese ? chineseLinks : isGerman ? germanLinks : isArabic ? arabicLinks : isTurkish ? turkishLinks : isPortuguese ? portugueseLinks : isSpanish ? spanishLinks : isMyanmar ? myanmarLinks : isRussian ? russianLinks : isCzech ? czechLinks : isItalian ? italianLinks : englishLinks;
  const localizedRoute = localizedRoutes.find((route) => Object.values(route).includes(pathname));
  const localeHref = (targetLocale: Locale) => {
    if (targetLocale === locale) return pathname;
    if (localizedRoute?.[targetLocale]) return localizedRoute[targetLocale]!;
    if (targetLocale === 'en' && languageHref) return normalizePath(languageHref);
    return localeHomes[targetLocale];
  };
  const currentLocale = localeOptions.find((option) => option.locale === locale) || localeOptions[0];
  const visibleLocaleOptions = localeOptions.filter((option) => option.locale !== 'it' || isItalian || Boolean(localizedRoute?.it));
  const homeHref = isChinese ? '/zh-cn' : isGerman ? '/de/' : isArabic ? '/ar/' : isTurkish ? '/tr/' : isPortuguese ? '/pt-br/' : isSpanish ? '/es/' : isMyanmar ? '/my/' : isRussian ? '/ru/' : isCzech ? '/cs/' : '/';
  const homeLabel = isChinese
    ? 'Dear Passengers 中文指南首页'
    : isGerman
      ? 'Dear Passengers deutscher Spiele-Guide'
      : isArabic
        ? 'دليل لعبة Dear Passengers بالعربية'
        : isTurkish
          ? 'Dear Passengers Türkçe oyun rehberi'
          : isPortuguese
            ? 'Guia brasileiro do jogo Dear Passengers'
            : isSpanish
              ? 'Guía en español del juego Dear Passengers'
              : isMyanmar
                ? 'Dear Passengers မြန်မာဂိမ်းလမ်းညွှန်'
                : isRussian
                  ? 'Русский гид по игре Dear Passengers'
                  : isCzech
                    ? 'Český průvodce hrou Dear Passengers'
                    : isItalian
                      ? 'Guida italiana indipendente a Dear Passengers'
      : 'Dear Passengers game guide home';
  const siteLabel = isChinese ? '独立游戏资料站' : isGerman ? 'UNABHÄNGIGER SPIELE-GUIDE' : isArabic ? 'دليل ألعاب مستقل' : isTurkish ? 'BAĞIMSIZ OYUN REHBERİ' : isPortuguese ? 'GUIA BRASILEIRO INDEPENDENTE' : isSpanish ? 'GUÍA INDEPENDIENTE EN ESPAÑOL' : isMyanmar ? 'လွတ်လပ်သော မြန်မာဂိမ်းလမ်းညွှန်' : isRussian ? 'НЕЗАВИСИМЫЙ ГИД ПО ИГРЕ' : isCzech ? 'NEZÁVISLÝ HERNÍ PRŮVODCE' : isItalian ? 'GUIDA INDIPENDENTE IN ITALIANO' : 'INDEPENDENT FLIGHT GUIDE';
  const languageAria = isChinese ? '选择网站语言' : isGerman ? 'Website-Sprache wählen' : isArabic ? 'اختر لغة الموقع' : isTurkish ? 'Site dilini seçin' : isPortuguese ? 'Escolher idioma do site' : isSpanish ? 'Elegir idioma del sitio' : isMyanmar ? 'ဝဘ်ဆိုက်ဘာသာစကား ရွေးချယ်ရန်' : isRussian ? 'Выбрать язык сайта' : isCzech ? 'Vybrat jazyk webu' : isItalian ? 'Scegli la lingua del sito' : 'Choose site language';

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

        <nav className="desktop-nav" aria-label={isItalian ? 'Navigazione principale' : 'Primary navigation'}>
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
              {visibleLocaleOptions.map((option) => (
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
            {isChinese ? 'Steam 愿望单' : isGerman ? 'Auf Steam vormerken' : isArabic ? 'أضفها إلى قائمة الأمنيات' : isTurkish ? 'Steam istek listesi' : isPortuguese ? 'Adicionar à lista de desejos' : isSpanish ? 'Añadir a deseados' : isMyanmar ? 'Steam ဆန္ဒစာရင်း' : isRussian ? 'В желаемое Steam' : isCzech ? 'Přidat na seznam přání' : isItalian ? 'Aggiungi ai desideri' : 'Wishlist on Steam'} <span aria-hidden="true">↗</span>
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={isItalian ? 'Apri o chiudi la navigazione' : 'Toggle navigation'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label={isItalian ? 'Navigazione mobile' : 'Mobile navigation'}>
          {links.map((link) => (
            <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
          <div className="mobile-language-options" aria-label={languageAria}>
            {visibleLocaleOptions.map((option) => (
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
            {isChinese ? '打开 Steam 官方页面' : isGerman ? 'Offizielle Steam-Seite öffnen' : isArabic ? 'افتح صفحة Steam الرسمية' : isTurkish ? 'Resmî Steam sayfasını aç' : isPortuguese ? 'Abrir a página oficial na Steam' : isSpanish ? 'Abrir la página oficial de Steam' : isMyanmar ? 'Steam တရားဝင်စာမျက်နှာ ဖွင့်ရန်' : isRussian ? 'Открыть официальную страницу Steam' : isCzech ? 'Otevřít oficiální stránku Steam' : isItalian ? 'Apri la pagina Steam ufficiale' : 'Open the official Steam page'} ↗
          </a>
        </nav>
      )}
    </header>
  );
}
