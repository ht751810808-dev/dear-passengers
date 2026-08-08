import type { Metadata } from 'next';
import SpanishGuidePage from '@/components/SpanishGuidePage';
import { spanishHomeGuide } from '@/app/es/spanish-content';

export const metadata: Metadata = {
  title: { absolute: spanishHomeGuide.title }, description: spanishHomeGuide.description,
  alternates: { canonical: '/es/', languages: { en: '/', es: '/es/', ar: '/ar/', de: '/de/', tr: '/tr/', 'pt-BR': '/pt-br/', 'my-MM': '/my/', ru: '/ru/', cs: '/cs/', 'zh-CN': '/zh-cn/', 'x-default': '/' } },
  openGraph: { title: spanishHomeGuide.title, description: spanishHomeGuide.description, url: 'https://dearpassengers.net/es/', siteName: 'DearPassengers.net', images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: spanishHomeGuide.heroAlt }], locale: 'es_ES', alternateLocale: ['en_US', 'de_DE', 'ar', 'tr_TR', 'pt_BR', 'zh_CN'], type: 'website' },
  twitter: { card: 'summary_large_image', title: spanishHomeGuide.title, description: spanishHomeGuide.description, images: ['/images/og-image.png'] },
};

export default function SpanishHomePage() { return <SpanishGuidePage guide={spanishHomeGuide} canonicalPath="/es/" />; }
