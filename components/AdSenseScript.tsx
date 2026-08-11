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
  '/my/about',
  '/my/editorial-policy',
  '/my/contact',
  '/my/privacy-policy',
]);

export function isAdSenseContentPath(pathname: string) {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  return !NON_CONTENT_PATHS.has(normalizedPath);
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
