import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CzechGuidePage from '@/components/CzechGuidePage';
import { czechGuideBySlug, czechGuides } from '@/app/cs/czech-content';
import { portugueseGuideByEnglishPath } from '@/app/pt-br/portuguese-content';
import { spanishGuideByEnglishPath } from '@/app/es/spanish-content';
import { myanmarGuideByEnglishPath } from '@/app/my/myanmar-content';
import { russianGuideByEnglishPath } from '@/app/ru/russian-content';

export const dynamicParams = false;
export function generateStaticParams() { return czechGuides.map((guide) => ({ slug: guide.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = czechGuideBySlug.get(params.slug);
  if (!guide) return {};
  const canonical = `/cs/${guide.slug}/`;
  const languages: Record<string, string> = { cs: canonical };
  if (guide.englishPath) {
    languages.en = guide.englishPath;
    languages['x-default'] = guide.englishPath;
    const portuguese = portugueseGuideByEnglishPath.get(guide.englishPath);
    const spanish = spanishGuideByEnglishPath.get(guide.englishPath);
    const myanmar = myanmarGuideByEnglishPath.get(guide.englishPath);
    const russian = russianGuideByEnglishPath.get(guide.englishPath);
    if (portuguese) {
      languages.de = portuguese.germanPath;
      languages.ar = portuguese.arabicPath;
      languages.tr = portuguese.turkishPath;
      languages['pt-BR'] = `/pt-br/${portuguese.slug}/`;
      if (portuguese.chinesePath) languages['zh-CN'] = portuguese.chinesePath;
    }
    if (spanish) languages.es = `/es/${spanish.slug}/`;
    if (myanmar) languages['my-MM'] = `/my/${myanmar.slug}/`;
    if (russian) languages.ru = `/ru/${russian.slug}/`;
    if (guide.englishPath === '/dear-passengers-release-date/') languages.it = '/it/dear-passengers-data-di-uscita/';
    if (guide.englishPath === '/game-dear-passengers/') Object.assign(languages, {
      de: '/de/dear-passengers-spiel/', ar: '/ar/dear-passengers-game/', tr: '/tr/dear-passengers-oyunu/',
      'pt-BR': '/pt-br/jogo-dear-passengers/', es: '/es/juego-dear-passengers/', 'zh-CN': '/zh-cn/dear-passengers-game/', ru: '/ru/igra-dear-passengers/',
    });
  }
  return {
    title: { absolute: guide.title }, description: guide.description,
    alternates: { canonical, languages },
    openGraph: { title: guide.title, description: guide.description, url: `https://dearpassengers.net${canonical}`, siteName: 'DearPassengers.net', images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: guide.heroAlt }], locale: 'cs_CZ', alternateLocale: ['en_US'], type: 'article' },
    twitter: { card: 'summary_large_image', title: guide.title, description: guide.description, images: ['/images/og-image.png'] },
  };
}

export default function CzechDynamicGuide({ params }: { params: { slug: string } }) {
  const guide = czechGuideBySlug.get(params.slug);
  if (!guide) notFound();
  return <CzechGuidePage guide={guide} canonicalPath={`/cs/${guide.slug}/`} />;
}
