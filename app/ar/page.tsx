import type { Metadata } from 'next';
import ArabicGuidePage from '@/components/ArabicGuidePage';
import { arabicHomeGuide } from '@/app/ar/arabic-content';

export const metadata: Metadata = {
  title: { absolute: arabicHomeGuide.title }, description: arabicHomeGuide.description,
  alternates: { canonical: '/ar/', languages: { en: '/', ar: '/ar/', de: '/de/', tr: '/tr/', 'pt-BR': '/pt-br/', 'zh-CN': '/zh-cn/', 'x-default': '/' } },
  openGraph: { title: arabicHomeGuide.title, description: arabicHomeGuide.description, url: 'https://dearpassengers.net/ar/', siteName: 'DearPassengers.net', images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: arabicHomeGuide.heroAlt }], locale: 'ar', alternateLocale: ['en_US', 'de_DE', 'zh_CN'], type: 'website' },
  twitter: { card: 'summary_large_image', title: arabicHomeGuide.title, description: arabicHomeGuide.description, images: ['/images/og-image.png'] },
};

export default function ArabicHomePage() { return <ArabicGuidePage guide={arabicHomeGuide} canonicalPath="/ar/" modifiedDate="2026-07-29" verifiedDate="29 يوليو 2026" />; }
