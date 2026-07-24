import type { Metadata } from 'next';
import GermanGuidePage from '@/components/GermanGuidePage';
import { germanHomeGuide } from '@/app/de/german-content';

export const metadata: Metadata = {
  title: { absolute: germanHomeGuide.title },
  description: germanHomeGuide.description,
  alternates: {
    canonical: '/de/',
    languages: { en: '/', de: '/de/', 'zh-CN': '/zh-cn/', 'x-default': '/' },
  },
  openGraph: {
    title: germanHomeGuide.title,
    description: germanHomeGuide.description,
    url: 'https://dearpassengers.net/de/',
    siteName: 'DearPassengers.net',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: germanHomeGuide.heroAlt }],
    locale: 'de_DE',
    alternateLocale: ['en_US', 'zh_CN'],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: germanHomeGuide.title, description: germanHomeGuide.description, images: ['/images/og-image.png'] },
};

export default function GermanHomePage() {
  return <GermanGuidePage guide={germanHomeGuide} canonicalPath="/de/" />;
}
