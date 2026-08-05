import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import RussianGuidePage from '@/components/RussianGuidePage';
import { russianGuideBySlug, russianGuides } from '@/app/ru/russian-content';
import { portugueseGuideByEnglishPath } from '@/app/pt-br/portuguese-content';
import { spanishGuideByEnglishPath } from '@/app/es/spanish-content';
import { myanmarGuideByEnglishPath } from '@/app/my/myanmar-content';

export const dynamicParams = false;
export function generateStaticParams() { return russianGuides.map((guide) => ({ slug: guide.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = russianGuideBySlug.get(params.slug);
  if (!guide) return {};
  const canonical = `/ru/${guide.slug}/`;
  const languages: Record<string, string> = { ru: canonical };
  if (guide.englishPath) {
    languages.en = guide.englishPath;
    languages['x-default'] = guide.englishPath;
    const portuguese = portugueseGuideByEnglishPath.get(guide.englishPath);
    const spanish = spanishGuideByEnglishPath.get(guide.englishPath);
    const myanmar = myanmarGuideByEnglishPath.get(guide.englishPath);
    if (portuguese) {
      languages.de = portuguese.germanPath;
      languages.ar = portuguese.arabicPath;
      languages.tr = portuguese.turkishPath;
      languages['pt-BR'] = `/pt-br/${portuguese.slug}/`;
      if (portuguese.chinesePath) languages['zh-CN'] = portuguese.chinesePath;
    }
    if (spanish) languages.es = `/es/${spanish.slug}/`;
    if (myanmar) languages['my-MM'] = `/my/${myanmar.slug}/`;
    if (guide.englishPath === '/game-dear-passengers/') Object.assign(languages, {
      de: '/de/dear-passengers-spiel/', ar: '/ar/dear-passengers-game/', tr: '/tr/dear-passengers-oyunu/',
      'pt-BR': '/pt-br/jogo-dear-passengers/', es: '/es/juego-dear-passengers/', 'zh-CN': '/zh-cn/dear-passengers-game/',
    });
  }
  return {
    title: { absolute: guide.title }, description: guide.description,
    alternates: { canonical, languages },
    openGraph: { title: guide.title, description: guide.description, url: `https://dearpassengers.net${canonical}`, siteName: 'DearPassengers.net', images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: guide.heroAlt }], locale: 'ru_RU', alternateLocale: ['en_US'], type: 'article' },
    twitter: { card: 'summary_large_image', title: guide.title, description: guide.description, images: ['/images/og-image.png'] },
  };
}

export default function RussianDynamicGuide({ params }: { params: { slug: string } }) {
  const guide = russianGuideBySlug.get(params.slug);
  if (!guide) notFound();
  return <RussianGuidePage guide={guide} canonicalPath={`/ru/${guide.slug}/`} />;
}
