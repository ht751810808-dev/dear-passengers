import type { Metadata } from 'next';
import MyanmarGuidePage from '@/components/MyanmarGuidePage';
import { myanmarHomeGuide } from '@/app/my/myanmar-content';

export const metadata: Metadata = {
  title: { absolute: myanmarHomeGuide.title },
  description: myanmarHomeGuide.description,
  alternates: {
    canonical: '/my/',
    languages: {
      en: '/',
      'zh-CN': '/zh-cn/',
      de: '/de/',
      ar: '/ar/',
      tr: '/tr/',
      'pt-BR': '/pt-br/',
      es: '/es/',
      'my-MM': '/my/',
      ru: '/ru/',
      cs: '/cs/',
      'x-default': '/',
    },
  },
  openGraph: {
    title: myanmarHomeGuide.title,
    description: myanmarHomeGuide.description,
    url: 'https://dearpassengers.net/my/',
    siteName: 'DearPassengers.net',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: myanmarHomeGuide.heroAlt }],
    locale: 'my_MM',
    alternateLocale: ['en_US', 'zh_CN', 'de_DE', 'ar', 'tr_TR', 'pt_BR', 'es_ES'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: myanmarHomeGuide.title,
    description: myanmarHomeGuide.description,
    images: ['/images/og-image.png'],
  },
};

export default function MyanmarHomePage() {
  return <MyanmarGuidePage guide={myanmarHomeGuide} canonicalPath="/my/" />;
}
