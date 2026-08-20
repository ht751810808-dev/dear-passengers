'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import adsenseRoutePolicy from '../data/adsense-route-policy.json';

const NON_CONTENT_PATHS = new Set(adsenseRoutePolicy.nonContentPaths);

// Google Publisher products do not currently support Burmese/Myanmar as a
// primary content language. The site can keep serving those editorial pages,
// but Google ad code must never load on them.
// https://support.google.com/adsense/answer/9727
const UNSUPPORTED_AD_LANGUAGE_PREFIXES = adsenseRoutePolicy.unsupportedAdLanguagePrefixes;

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
