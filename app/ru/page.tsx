import type { Metadata } from 'next';
import RussianGuidePage from '@/components/RussianGuidePage';
import { russianHomeGuide } from '@/app/ru/russian-content';

export const metadata: Metadata = {
  title: { absolute: russianHomeGuide.title }, description: russianHomeGuide.description,
  alternates: { canonical: '/ru/', languages: { en: '/', ru: '/ru/', cs: '/cs/', 'zh-CN': '/zh-cn/', de: '/de/', ar: '/ar/', tr: '/tr/', 'pt-BR': '/pt-br/', es: '/es/', 'my-MM': '/my/', 'x-default': '/' } },
  openGraph: { title: russianHomeGuide.title, description: russianHomeGuide.description, url: 'https://dearpassengers.net/ru/', siteName: 'DearPassengers.net', images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: russianHomeGuide.heroAlt }], locale: 'ru_RU', alternateLocale: ['en_US', 'de_DE', 'ar', 'tr_TR', 'pt_BR', 'es_ES', 'my_MM', 'zh_CN'], type: 'website' },
  twitter: { card: 'summary_large_image', title: russianHomeGuide.title, description: russianHomeGuide.description, images: ['/images/og-image.png'] },
};

export default function RussianHomePage() { return <RussianGuidePage guide={russianHomeGuide} canonicalPath="/ru/" />; }
