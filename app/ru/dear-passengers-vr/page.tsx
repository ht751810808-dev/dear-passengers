import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/ru/dear-passengers-vr/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=russian';
const QUEST_URL = 'https://queststoredb.com/game/dear-passengers-vr-1251691901365016/';
const META_URL = 'https://www.meta.com/experiences/1251691901365016/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers VR: поддержка и запись Meta Quest' },
  description:
    'Проверка Dear Passengers VR: FLEXUS не анонсировала VR-режим, запись Meta Quest относится к другому издателю, статус шлемов и управления.',
  alternates: {
    canonical: '/ru/dear-passengers-vr/',
    languages: { en: '/dear-passengers-vr/', de: '/de/dear-passengers-vr/', es: '/es/dear-passengers-vr/', ru: '/ru/dear-passengers-vr/', 'x-default': '/dear-passengers-vr/' },
  },
  openGraph: {
    title: 'Dear Passengers VR: статус и проверка записи Quest',
    description: 'Отделяем Windows-игру FLEXUS от одноимённой записи Quest по издателю и идентификатору.',
    url: PAGE_URL, locale: 'ru_RU', type: 'article',
    images: [{ url: '/images/dear-passengers-unity-flight.webp', width: 1920, height: 1024, alt: 'Dear Passengers VR — проверка статуса на официальном изображении FLEXUS' }],
  },
};

const faqs: FaqItem[] = [
  { question: 'Поддерживает ли Dear Passengers VR?', answer: 'Dear Passengers VR не анонсирована для игры FLEXUS. В Steam 4534960 указаны Windows, одиночная игра и онлайн-кооператив, но нет SteamVR, VR Only или списка шлемов.' },
  { question: 'Можно ли играть в Dear Passengers VR на Meta Quest?', answer: 'Подтверждённой версии FLEXUS для Quest нет. Отдельная запись Dear Passengers VR с Meta ID 1251691901365016 называет разработчиком Fun Land Games и не подтверждает связь со Steam 4534960.' },
  { question: 'Будут ли в Dear Passengers VR контроллеры движения?', answer: 'Контроллеры движения, отслеживание рук, сидячий режим и настройки комфорта Dear Passengers VR не объявлены. Вид от первого лица не является подтверждением управления.' },
  { question: 'Когда выйдет Dear Passengers VR?', answer: 'FLEXUS не называла дату Dear Passengers VR. Для Windows-игры указан только 2026 год, а дата отдельной Quest-записи не относится к продукту FLEXUS.' },
];

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Dear Passengers VR: поддержка и запись Meta Quest',
  description: 'Русскоязычная проверка VR-поддержки, шлемов и одноимённой записи Quest.',
  mainEntityOfPage: PAGE_URL, datePublished: '2026-08-21', dateModified: '2026-08-21', inLanguage: 'ru',
  author: { '@type': 'Organization', name: 'Редакция DearPassengers.net', url: 'https://dearpassengers.net/about/' },
  publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/', logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' } },
  image: 'https://dearpassengers.net/images/dear-passengers-unity-flight.webp', citation: [STEAM_URL, QUEST_URL, META_URL],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers на русском', item: 'https://dearpassengers.net/ru/' },
    { '@type': 'ListItem', position: 2, name: 'Платформы', item: 'https://dearpassengers.net/dear-passengers-platforms/' },
    { '@type': 'ListItem', position: 3, name: 'Dear Passengers VR', item: PAGE_URL },
  ],
};

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };

export default function RussianDearPassengersVrPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header locale="ru" languageHref="/dear-passengers-vr/" />
      <main id="main-content" className="steam-guide-page" lang="ru">
        <article>
          <header className="article-hero steam-article-hero">
            <Image src="/images/dear-passengers-unity-flight.webp" alt="Официальный кадр FLEXUS в проверке Dear Passengers VR" fill sizes="100vw" priority />
            <div className="hero-shade" />
            <div className="container article-hero-content steam-hero-content">
              <nav className="breadcrumbs" aria-label="Навигационная цепочка"><Link href="/ru/">Русский</Link><span>/</span><Link href="/dear-passengers-platforms/" hrefLang="en">Платформы</Link><span>/</span><span>VR</span></nav>
              <div className="steam-hero-grid">
                <div className="steam-hero-copy">
                  <div className="eyebrow"><span>●</span> VR-СТАТУС · ПРОВЕРКА ИГРЫ</div>
                  <h1>Dear Passengers VR:<br /><em>поддержка и запись Quest</em></h1>
                  <p><strong>Dear Passengers VR не подтверждена разработчиком FLEXUS.</strong> Официальная Steam-страница указывает только Windows. Одноимённая запись Quest называет Fun Land Games, поэтому её характеристики нельзя переносить на VR-версию от FLEXUS.</p>
                  <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Проверить официальную игру ↗</a>
                  <div className="article-meta"><span>21 августа 2026</span><span>Steam 4534960</span><span>VR не анонсирована</span></div>
                </div>
                <dl className="steam-identity-board" aria-label="Краткий статус Dear Passengers VR">
                  <div><dt>FLEXUS</dt><dd>Windows</dd><small>Официальная запись</small></div>
                  <div><dt>SteamVR</dt><dd>Нет поля</dd><small>Режим не заявлен</small></div>
                  <div><dt>Quest</dt><dd>Отдельно</dd><small>Fun Land Games</small></div>
                  <div><dt>Проверка</dt><dd>App ID</dd><small>Сверяйте издателя</small></div>
                </dl>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc" aria-label="Разделы"><p>VR-ПРОВЕРКА</p><a href="#status">Статус</a><a href="#hardware">Шлемы</a><a href="#quest">Запись Quest</a><a href="#faq">Вопросы</a><a href="#sources">Источники</a></aside>
            <div className="article-prose prose">
              <EditorialNote checked="21 августа 2026" locale="ru" note="Мы сверяем издателя и идентификатор. Одинаковое название само по себе не доказывает связь продуктов." />

              <section id="status">
                <span className="kicker">ПРЯМОЙ ОТВЕТ</span>
                <h2>Dear Passengers VR — это VR-игра?</h2>
                <p className="snippet-answer">Нет подтверждения VR-версии от FLEXUS. Steam App 4534960 называет FLEXUS разработчиком и издателем, публикует требования Windows и режимы игры. Полей SteamVR, VR Supported, VR Only и поддерживаемых шлемов нет.</p>
              </section>

              <section id="hardware">
                <span className="kicker">ШЛЕМЫ И УПРАВЛЕНИЕ</span>
                <h2>Dear Passengers VR на Quest, SteamVR и PS VR2</h2>
                <p>Для этой игры нет официальной таблицы устройств. Quest Link и Air Link не превращают обычную Windows-игру в VR. Valve Index, Vive, Pico и PS VR2 также не упомянуты FLEXUS.</p>
                <p>Неизвестны контроллеры движения, ручное отслеживание, сидячий режим, поворот шагами и настройки укачивания. Минимальные GTX 1060 или RX 6600 XT относятся к плоской версии, а не к производительности Dear Passengers VR.</p>
              </section>

              <section id="quest">
                <span className="kicker">ОДИНАКОВОЕ НАЗВАНИЕ</span>
                <h2>Отдельная запись Dear Passengers VR в Meta Quest</h2>
                <p>Архив Quest Store DB связывает Dear Passengers VR с Meta ID 1251691901365016 и Fun Land Games. Там указаны Quest 2/Pro, Quest 3/3S и цена 6,99 доллара. FLEXUS и Steam 4534960 в этой записи не названы.</p>
                <div className="platform-table" role="table" aria-label="Сравнение Dear Passengers VR">
                  <div className="platform-head" role="row"><span role="columnheader">Запись</span><span role="columnheader">Издатель</span><span role="columnheader">Вывод</span></div>
                  <div role="row"><strong role="cell">Dear Passengers · Steam 4534960</strong><span role="cell">FLEXUS</span><span className="status-confirmed" role="cell">Windows подтверждена</span></div>
                  <div role="row"><strong role="cell">Dear Passengers VR · Meta 1251691901365016</strong><span role="cell">Fun Land Games</span><span className="status-open" role="cell">Отдельный продукт</span></div>
                </div>
              </section>

              <section id="faq"><span className="kicker">ОТВЕТЫ</span><h2>Dear Passengers VR: частые вопросы</h2><p>VR-статус изменится после поля Steam, заявления FLEXUS или страницы платформы со ссылкой от разработчика. Запросы сообщества и моды не равны нативной поддержке. Мы проверяем только данные, связанные с продуктом FLEXUS.</p><FAQ items={faqs} /></section>

              <section id="sources" className="related-guide related-links-panel">
                <span className="kicker">ИСТОЧНИКИ</span><h2>Проверить Dear Passengers VR самостоятельно</h2>
                <p>Для проверки Dear Passengers VR всегда сверяйте разработчика, App ID, платформу и доступную страницу официального магазина. <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam ↗</a> подтверждает FLEXUS и Windows. <a href={QUEST_URL} target="_blank" rel="noopener noreferrer">Архив Quest ↗</a> называет Fun Land Games, а <a href={META_URL} target="_blank" rel="noopener noreferrer">Meta ↗</a> показывает недоступную страницу.</p>
                <p>Дальше: <Link href="/ru/igra-dear-passengers/">обзор игры</Link>, <Link href="/ru/dear-passengers-sistemnye-trebovaniya/">системные требования</Link> и <Link href="/dear-passengers-platforms/" hrefLang="en">все платформы</Link>. Dear Passengers VR отвечает только за шлемы и идентичность.</p>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer locale="ru" />
    </>
  );
}
