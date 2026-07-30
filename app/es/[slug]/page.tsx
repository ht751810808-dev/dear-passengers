import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SpanishGuidePage from '@/components/SpanishGuidePage';
import { spanishGuideBySlug, spanishGuides } from '@/app/es/spanish-content';
import { portugueseGuideByEnglishPath } from '@/app/pt-br/portuguese-content';

export const dynamicParams = false;
export function generateStaticParams() { return spanishGuides.map((guide) => ({ slug: guide.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = spanishGuideBySlug.get(params.slug);
  if (!guide) return {};
  const canonical = `/es/${guide.slug}/`;
  const counterpart = portugueseGuideByEnglishPath.get(guide.englishPath);
  const languages: Record<string, string> = { en: guide.englishPath, es: canonical, 'x-default': guide.englishPath };
  if (counterpart) {
    languages.ar = counterpart.arabicPath;
    languages.de = counterpart.germanPath;
    languages.tr = counterpart.turkishPath;
    languages['pt-BR'] = `/pt-br/${counterpart.slug}/`;
    if (counterpart.chinesePath) languages['zh-CN'] = counterpart.chinesePath;
  }
  return {
    title: { absolute: guide.title }, description: guide.description,
    alternates: { canonical, languages },
    openGraph: { title: guide.title, description: guide.description, url: `https://dearpassengers.net${canonical}`, siteName: 'DearPassengers.net', images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: guide.heroAlt }], locale: 'es_ES', alternateLocale: ['en_US'], type: 'article' },
    twitter: { card: 'summary_large_image', title: guide.title, description: guide.description, images: ['/images/og-image.png'] },
  };
}

export default function SpanishDynamicGuide({ params }: { params: { slug: string } }) {
  const guide = spanishGuideBySlug.get(params.slug);
  if (!guide) notFound();
  return <SpanishGuidePage guide={guide} canonicalPath={`/es/${guide.slug}/`} />;
}
