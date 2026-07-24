import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GermanGuidePage from '@/components/GermanGuidePage';
import { germanGuideBySlug, germanGuides } from '@/app/de/german-content';

export const dynamicParams = false;

export function generateStaticParams() {
  return germanGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = germanGuideBySlug.get(params.slug);
  if (!guide) return {};
  const canonical = `/de/${guide.slug}/`;
  const languages: Record<string, string> = { en: guide.englishPath, de: canonical, 'x-default': guide.englishPath };
  if (guide.chinesePath) languages['zh-CN'] = guide.chinesePath;
  return {
    title: { absolute: guide.title },
    description: guide.description,
    alternates: { canonical, languages },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `https://dearpassengers.net${canonical}`,
      siteName: 'DearPassengers.net',
      images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: guide.heroAlt }],
      locale: 'de_DE',
      alternateLocale: ['en_US'],
      type: 'article',
    },
    twitter: { card: 'summary_large_image', title: guide.title, description: guide.description, images: ['/images/og-image.png'] },
  };
}

export default function GermanDynamicGuide({ params }: { params: { slug: string } }) {
  const guide = germanGuideBySlug.get(params.slug);
  if (!guide) notFound();
  return <GermanGuidePage guide={guide} canonicalPath={`/de/${guide.slug}/`} />;
}

