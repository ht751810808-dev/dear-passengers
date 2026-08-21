import Image from 'next/image';
import Link from 'next/link';
import type { RussianGuide } from '@/app/ru/russian-content';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=russian';
const FLEXUS_INTERVIEW = 'https://gamedev.dou.ua/articles/dear-passengers-interview/';

const labels: Record<string, string> = {
  'igra-dear-passengers': 'Что это за игра',
  'dear-passengers-vr': 'VR и Meta Quest',
  'dear-passengers-kak-igrat': 'Как играть',
  'dear-passengers-skolko-igrokov': 'Сколько игроков',
  'dear-passengers-data-vyhoda': 'Дата выхода',
  'dear-passengers-demo': 'Статус демо',
  'dear-passengers-skachat': 'Безопасная загрузка',
  'dear-passengers-sistemnye-trebovaniya': 'Системные требования',
  'dear-passengers-russkiy-yazyk': 'Русский язык',
};

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return <>{parts.map((part, index) => {
    const match = part.match(/^\[\[([^|]+)\|([^\]]+)\]\]$/);
    return match ? <Link href={match[1]} key={`${match[1]}-${index}`}>{match[2]}</Link> : part;
  })}</>;
}

export default function RussianGuidePage({ guide, canonicalPath }: { guide: RussianGuide; canonicalPath: string }) {
  const pageUrl = `https://dearpassengers.net${canonicalPath}`;
  const articleSchema = {
    '@context': 'https://schema.org', '@type': guide.slug ? 'Article' : 'WebPage',
    headline: guide.title, description: guide.description, mainEntityOfPage: pageUrl,
    datePublished: '2026-08-05', dateModified: '2026-08-05', inLanguage: 'ru',
    author: { '@type': 'Organization', name: 'Русская редакция DearPassengers.net', url: 'https://dearpassengers.net/about/' },
    publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/', logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' } },
    image: `https://dearpassengers.net${guide.heroImage}`,
    isPartOf: { '@type': 'WebSite', name: 'DearPassengers.net', url: 'https://dearpassengers.net/ru/' },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Dear Passengers на русском', item: 'https://dearpassengers.net/ru/' },
      ...(guide.slug ? [{ '@type': 'ListItem', position: 2, name: guide.title, item: pageUrl }] : []),
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: guide.faqs.map((item) => ({
      '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <Header locale="ru" languageHref={guide.englishPath || '/'} />
    <main id="main-content" lang="ru" className="russian-content">
      <article>
        <header className="article-hero">
          <Image src={guide.heroImage} alt={guide.heroAlt} fill sizes="100vw" priority />
          <div className="hero-shade" />
          <div className="container article-hero-content">
            <nav className="breadcrumbs" aria-label="Навигационная цепочка"><Link href="/ru/">Русский гид</Link><span>/</span><span>{guide.keyword}</span></nav>
            <div className="eyebrow"><span>●</span> {guide.eyebrow}</div>
            <h1><RichText text={guide.h1} /></h1>
            <p><RichText text={guide.intro} /></p>
            <div className="article-meta"><span>Проверено 05.08.2026</span><span>Первоисточники: Steam и FLEXUS</span><span>Язык раздела: русский</span></div>
          </div>
        </header>
        <div className="container article-layout">
          <aside className="article-toc" aria-label="Содержание руководства">
            <p>НА ЭТОЙ СТРАНИЦЕ</p><a href="#answer">Короткий ответ</a>
            {guide.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.heading}</a>)}
            <a href="#russian-search">Семантика в России</a><a href="#faq">Частые вопросы</a>
            <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Добавить в желаемое ↗</a>
          </aside>
          <div className="article-prose prose">
            <aside className="editorial-note" aria-label="Редакционная проверка">
              <div><span>РЕДАКЦИОННАЯ ПРОВЕРКА</span><strong>Русская редакция DearPassengers.net</strong></div>
              <p>{guide.note}</p>
              <div className="editorial-note-links"><small>Последняя проверка: 05.08.2026</small><Link href="/editorial-policy" hrefLang="en">Как мы проверяем источники →</Link></div>
            </aside>
            <section id="answer">
              <span className="kicker">КОРОТКИЙ ОТВЕТ</span><h2>{guide.keyword}: актуальный статус</h2>
              <p className="snippet-answer"><strong><RichText text={guide.answer} /></strong></p>
              <div className="status-grid" aria-label="Статус информации">
                <div className="fact-callout"><span>ПОДТВЕРЖДЕНО</span><strong>Что сообщают первоисточники</strong><ul>{guide.confirmed.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div className="fact-callout unknown-callout"><span>НЕ ОПУБЛИКОВАНО</span><strong>Что пока неизвестно</strong><ul>{guide.unknown.map((item) => <li key={item}>{item}</li>)}</ul></div>
              </div>
            </section>
            {guide.sections.map((section) => <section id={section.id} key={section.id}>
              <span className="kicker">{section.kicker}</span><h2><RichText text={section.heading} /></h2>
              {section.paragraphs.map((paragraph, index) => <p key={index}><RichText text={paragraph} /></p>)}
              {section.bullets && <ul>{section.bullets.map((item) => <li key={item}><RichText text={item} /></li>)}</ul>}
            </section>)}
            <section id="russian-search">
              <span className="kicker">СЕМАНТИКА ДЛЯ РОССИИ</span><h2>Почему используется формулировка «{guide.keyword}»?</h2>
              {guide.localContext.map((paragraph) => <p key={paragraph}><RichText text={paragraph} /></p>)}
            </section>
            <section id="verification">
              <span className="kicker">МЕТОД ПРОВЕРКИ</span><h2>Как проверяется информация о Dear Passengers?</h2>
              <p>Сначала мы сверяем Steam: платформу, окно релиза, режимы, языки и требования к PC. Прямые сообщения и интервью FLEXUS дают контекст о планах, но план не считается готовой функцией. Форумы используются только для поиска вопросов аудитории и никогда не заменяют ответ разработчика.</p>
              <p>«Подтверждено» означает прямое утверждение первоисточника. «Наблюдение» описывает только то, что видно в официальном кадре или видео. «План» может измениться. «Не опубликовано» — точный ответ для цены, дня выхода, числа игроков, русского перевода и других отсутствующих характеристик.</p>
              <p>DearPassengers.net — независимый неофициальный гид без связи с FLEXUS, Valve или Steam. Официальные изображения цитируются в редакционном контексте и принадлежат правообладателям. Исправление со ссылкой на источник можно отправить через <Link href="/contact" hrefLang="en">страницу контактов</Link>.</p>
            </section>
            <section id="faq"><span className="kicker">ЧАСТЫЕ ВОПРОСЫ</span><h2>Вопросы о {guide.keyword}</h2><p>Ответы сохраняют естественный русский язык и не заполняют пробелы догадками.</p><FAQ items={guide.faqs} /></section>
            <section id="sources"><span className="kicker">ПЕРВОИСТОЧНИКИ</span><h2>Где проверить сведения самостоятельно?</h2><p><a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Официальная карточка Dear Passengers в Steam ↗</a> показывает платформу, режимы, языки и минимальные требования. <a href={FLEXUS_INTERVIEW} target="_blank" rel="noopener noreferrer">Прямое интервью с FLEXUS ↗</a> объясняет план демоверсии. Сторонние установочные файлы не используются как источники.</p></section>
            <section className="related-guide"><span className="kicker">РУССКИЙ ГИД</span><h2>Другие темы о Dear Passengers</h2><p>Каждая страница отвечает на отдельную поисковую задачу, а контекстные ссылки помогают перейти к следующему решению без дублирования материалов.</p><div className="related-actions"><Link className="button" href="/ru/">Главная на русском →</Link>{guide.related.map((slug) => <Link className="button button-ghost" href={`/ru/${slug}/`} key={slug}>{labels[slug] || slug} →</Link>)}</div></section>
          </div>
        </div>
      </article>
    </main>
    <Footer locale="ru" />
  </>;
}
