import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArabicGuidePage from '@/components/ArabicGuidePage';
import { arabicGuideBySlug, arabicGuides } from '@/app/ar/arabic-content';
import { turkishGuideByEnglishPath } from '@/app/tr/turkish-content';

export const dynamicParams = false;
export function generateStaticParams() { return arabicGuides.map((guide) => ({ slug: guide.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = arabicGuideBySlug.get(params.slug);
  if (!guide) return {};
  const canonical = `/ar/${guide.slug}/`;
  const languages: Record<string, string> = { en: guide.englishPath, ar: canonical, de: guide.germanPath, tr: `/tr/${turkishGuideByEnglishPath.get(guide.englishPath)?.slug}/`, 'x-default': guide.englishPath };
  if (guide.chinesePath) languages['zh-CN'] = guide.chinesePath;
  return {
    title: { absolute: guide.title }, description: guide.description, alternates: { canonical, languages },
    openGraph: { title: guide.title, description: guide.description, url: `https://dearpassengers.net${canonical}`, siteName: 'DearPassengers.net', images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: guide.heroAlt }], locale: 'ar', alternateLocale: ['en_US', 'de_DE'], type: 'article' },
    twitter: { card: 'summary_large_image', title: guide.title, description: guide.description, images: ['/images/og-image.png'] },
  };
}

export default function ArabicDynamicGuide({ params }: { params: { slug: string } }) {
  const guide = arabicGuideBySlug.get(params.slug);
  if (!guide) notFound();
  return <ArabicGuidePage guide={guide} canonicalPath={`/ar/${guide.slug}/`} />;
}
