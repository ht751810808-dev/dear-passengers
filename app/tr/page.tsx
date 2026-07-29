import type { Metadata } from 'next';
import TurkishGuidePage from '@/components/TurkishGuidePage';
import { turkishHomeGuide } from '@/app/tr/turkish-content';

export const metadata: Metadata = {
  title: { absolute: turkishHomeGuide.title }, description: turkishHomeGuide.description,
  alternates: { canonical: '/tr/', languages: { en: '/', ar: '/ar/', de: '/de/', tr: '/tr/', 'pt-BR': '/pt-br/', 'zh-CN': '/zh-cn/', 'x-default': '/' } },
  openGraph: { title: turkishHomeGuide.title, description: turkishHomeGuide.description, url: 'https://dearpassengers.net/tr/', siteName: 'DearPassengers.net', images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: turkishHomeGuide.heroAlt }], locale: 'tr_TR', alternateLocale: ['en_US', 'de_DE', 'ar'], type: 'website' },
  twitter: { card: 'summary_large_image', title: turkishHomeGuide.title, description: turkishHomeGuide.description, images: ['/images/og-image.png'] },
};

export default function TurkishHomePage() { return <TurkishGuidePage guide={turkishHomeGuide} canonicalPath="/tr/" modifiedDate="2026-07-29" verifiedDate="29 Temmuz 2026" />; }
