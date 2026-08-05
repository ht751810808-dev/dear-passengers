import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TurkishGuidePage from '@/components/TurkishGuidePage';
import { turkishGuideBySlug, turkishGuides } from '@/app/tr/turkish-content';
import { portugueseGuideByEnglishPath } from '@/app/pt-br/portuguese-content';
import { spanishGuideByEnglishPath } from '@/app/es/spanish-content';
import { myanmarGuideByEnglishPath } from '@/app/my/myanmar-content';
import { russianGuideByEnglishPath } from '@/app/ru/russian-content';

export const dynamicParams = false;
export function generateStaticParams() { return turkishGuides.map((guide) => ({ slug: guide.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = turkishGuideBySlug.get(params.slug);
  if (!guide) return {};
  const canonical = `/tr/${guide.slug}/`;
  const languages: Record<string, string> = { en: guide.englishPath, ar: guide.arabicPath, de: guide.germanPath, tr: canonical, 'pt-BR': `/pt-br/${portugueseGuideByEnglishPath.get(guide.englishPath)?.slug}/`, es: `/es/${spanishGuideByEnglishPath.get(guide.englishPath)?.slug}/`, 'my-MM': `/my/${myanmarGuideByEnglishPath.get(guide.englishPath)?.slug}/`, 'x-default': guide.englishPath };
  if (guide.chinesePath) languages['zh-CN'] = guide.chinesePath;
  const russian = russianGuideByEnglishPath.get(guide.englishPath);
  if (russian) languages.ru = `/ru/${russian.slug}/`;
  return {
    title: { absolute: guide.title }, description: guide.description, alternates: { canonical, languages },
    openGraph: { title: guide.title, description: guide.description, url: `https://dearpassengers.net${canonical}`, siteName: 'DearPassengers.net', images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: guide.heroAlt }], locale: 'tr_TR', alternateLocale: ['en_US', 'de_DE', 'ar'], type: 'article' },
    twitter: { card: 'summary_large_image', title: guide.title, description: guide.description, images: ['/images/og-image.png'] },
  };
}

export default function TurkishDynamicGuide({ params }: { params: { slug: string } }) {
  const guide = turkishGuideBySlug.get(params.slug);
  if (!guide) notFound();
  return <TurkishGuidePage guide={guide} canonicalPath={`/tr/${guide.slug}/`} />;
}
