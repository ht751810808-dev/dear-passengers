'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

const NON_CONTENT_PATHS = new Set([
  '/404',
  '/_not-found',
  '/about',
  '/contact',
  '/editorial-policy',
  '/privacy-policy',
  '/de/ueber-uns',
  '/de/redaktionsrichtlinien',
  '/de/kontakt',
  '/de/datenschutz',
  '/ar/about',
  '/ar/editorial-policy',
  '/ar/contact',
  '/ar/privacy-policy',
  '/tr/hakkimizda',
  '/tr/editorial-policy',
  '/tr/iletisim',
  '/tr/gizlilik',
  '/pt-br/sobre',
  '/pt-br/politica-editorial',
  '/pt-br/contato',
  '/pt-br/privacidade',
  '/es/sobre',
  '/es/politica-editorial',
  '/es/contacto',
  '/es/privacidad',
]);

// Google Publisher products do not currently support Burmese/Myanmar as a
// primary content language. The site can keep serving those editorial pages,
// but Google ad code must never load on them.
// https://support.google.com/adsense/answer/9727
const UNSUPPORTED_AD_LANGUAGE_PREFIXES = ['/my'];

export function isAdSenseContentPath(pathname: string) {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  const usesUnsupportedAdLanguage = UNSUPPORTED_AD_LANGUAGE_PREFIXES.some(
    (prefix) => normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`),
  );

  return !usesUnsupportedAdLanguage && !NON_CONTENT_PATHS.has(normalizedPath);
}

export default function AdSenseScript({ publisherId }: { publisherId: string }) {
  const pathname = usePathname();

  if (!publisherId || !isAdSenseContentPath(pathname)) return null;

  return (
    <Script
      id="google-adsense"
      async
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
      strategy="afterInteractive"
    />
  );
}
