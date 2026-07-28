import type { Metadata } from 'next';
import PortugueseGuidePage from '@/components/PortugueseGuidePage';
import { portugueseHomeGuide } from '@/app/pt-br/portuguese-content';

export const metadata: Metadata = {
  title: { absolute: portugueseHomeGuide.title }, description: portugueseHomeGuide.description,
  alternates: { canonical: '/pt-br/', languages: { en: '/', ar: '/ar/', de: '/de/', tr: '/tr/', 'pt-BR': '/pt-br/', 'zh-CN': '/zh-cn/', 'x-default': '/' } },
  openGraph: { title: portugueseHomeGuide.title, description: portugueseHomeGuide.description, url: 'https://dearpassengers.net/pt-br/', siteName: 'DearPassengers.net', images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: portugueseHomeGuide.heroAlt }], locale: 'pt_BR', alternateLocale: ['en_US', 'de_DE', 'ar', 'tr_TR', 'zh_CN'], type: 'website' },
  twitter: { card: 'summary_large_image', title: portugueseHomeGuide.title, description: portugueseHomeGuide.description, images: ['/images/og-image.png'] },
};

export default function PortugueseHomePage() { return <PortugueseGuidePage guide={portugueseHomeGuide} canonicalPath="/pt-br/" />; }
