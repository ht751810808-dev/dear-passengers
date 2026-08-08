import type { Metadata } from 'next';
import CzechGuidePage from '@/components/CzechGuidePage';
import { czechHomeGuide } from '@/app/cs/czech-content';

export const metadata: Metadata = {
  title: { absolute: czechHomeGuide.title }, description: czechHomeGuide.description,
  alternates: { canonical: '/cs/', languages: { en: '/', cs: '/cs/', ru: '/ru/', 'zh-CN': '/zh-cn/', de: '/de/', ar: '/ar/', tr: '/tr/', 'pt-BR': '/pt-br/', es: '/es/', 'my-MM': '/my/', 'x-default': '/' } },
  openGraph: { title: czechHomeGuide.title, description: czechHomeGuide.description, url: 'https://dearpassengers.net/cs/', siteName: 'DearPassengers.net', images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: czechHomeGuide.heroAlt }], locale: 'cs_CZ', alternateLocale: ['en_US', 'de_DE', 'ar', 'tr_TR', 'pt_BR', 'es_ES', 'my_MM', 'ru_RU', 'zh_CN'], type: 'website' },
  twitter: { card: 'summary_large_image', title: czechHomeGuide.title, description: czechHomeGuide.description, images: ['/images/og-image.png'] },
};

export default function CzechHomePage() { return <CzechGuidePage guide={czechHomeGuide} canonicalPath="/cs/" />; }
