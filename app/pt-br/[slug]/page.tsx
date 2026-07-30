import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PortugueseGuidePage from '@/components/PortugueseGuidePage';
import { portugueseGuideBySlug, portugueseGuides } from '@/app/pt-br/portuguese-content';
import { spanishGuideByEnglishPath } from '@/app/es/spanish-content';

export const dynamicParams = false;
export function generateStaticParams() { return portugueseGuides.map((guide) => ({ slug: guide.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = portugueseGuideBySlug.get(params.slug);
  if (!guide) return {};
  const canonical = `/pt-br/${guide.slug}/`;
  const languages: Record<string, string> = { en: guide.englishPath, ar: guide.arabicPath, de: guide.germanPath, tr: guide.turkishPath, 'pt-BR': canonical, es: `/es/${spanishGuideByEnglishPath.get(guide.englishPath)?.slug}/`, 'x-default': guide.englishPath };
  if (guide.chinesePath) languages['zh-CN'] = guide.chinesePath;
  return {
    title: { absolute: guide.title }, description: guide.description, alternates: { canonical, languages },
    openGraph: { title: guide.title, description: guide.description, url: `https://dearpassengers.net${canonical}`, siteName: 'DearPassengers.net', images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: guide.heroAlt }], locale: 'pt_BR', alternateLocale: ['en_US', 'de_DE', 'ar', 'tr_TR'], type: 'article' },
    twitter: { card: 'summary_large_image', title: guide.title, description: guide.description, images: ['/images/og-image.png'] },
  };
}

export default function PortugueseDynamicGuide({ params }: { params: { slug: string } }) {
  const guide = portugueseGuideBySlug.get(params.slug);
  if (!guide) notFound();
  return <PortugueseGuidePage guide={guide} canonicalPath={`/pt-br/${guide.slug}/`} />;
}
