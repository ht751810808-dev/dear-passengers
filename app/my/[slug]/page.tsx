import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import MyanmarGuidePage from '@/components/MyanmarGuidePage';
import { myanmarGuideBySlug, myanmarGuides } from '@/app/my/myanmar-content';
import { portugueseGuideByEnglishPath } from '@/app/pt-br/portuguese-content';
import { spanishGuideByEnglishPath } from '@/app/es/spanish-content';

export const dynamicParams = false;

export function generateStaticParams() {
  return myanmarGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = myanmarGuideBySlug.get(params.slug);
  if (!guide) return {};
  const canonical = `/my/${guide.slug}/`;
  const counterpart = portugueseGuideByEnglishPath.get(guide.englishPath);
  const spanish = spanishGuideByEnglishPath.get(guide.englishPath);
  const languages: Record<string, string> = {
    en: guide.englishPath,
    'my-MM': canonical,
    'x-default': guide.englishPath,
  };
  if (counterpart) {
    languages.ar = counterpart.arabicPath;
    languages.de = counterpart.germanPath;
    languages.tr = counterpart.turkishPath;
    languages['pt-BR'] = `/pt-br/${counterpart.slug}/`;
    if (counterpart.chinesePath) languages['zh-CN'] = counterpart.chinesePath;
  }
  if (spanish) languages.es = `/es/${spanish.slug}/`;
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
      locale: 'my_MM',
      alternateLocale: ['en_US'],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.description,
      images: ['/images/og-image.png'],
    },
  };
}

export default function MyanmarDynamicGuide({ params }: { params: { slug: string } }) {
  const guide = myanmarGuideBySlug.get(params.slug);
  if (!guide) notFound();
  return <MyanmarGuidePage guide={guide} canonicalPath={`/my/${guide.slug}/`} />;
}
