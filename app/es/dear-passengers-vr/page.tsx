import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/es/dear-passengers-vr/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=spanish';
const QUEST_URL = 'https://queststoredb.com/game/dear-passengers-vr-1251691901365016/';
const META_URL = 'https://www.meta.com/experiences/1251691901365016/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers VR: compatibilidad y ficha de Meta Quest' },
  description:
    'Comprueba Dear Passengers VR en español: soporte no anunciado por FLEXUS, ficha separada de Meta Quest, cascos, controles y fuentes fiables.',
  alternates: {
    canonical: '/es/dear-passengers-vr/',
    languages: { en: '/dear-passengers-vr/', de: '/de/dear-passengers-vr/', es: '/es/dear-passengers-vr/', ru: '/ru/dear-passengers-vr/', 'x-default': '/dear-passengers-vr/' },
  },
  openGraph: {
    title: 'Dear Passengers VR: estado y comprobación de identidad',
    description: 'Distingue el juego de FLEXUS para Windows de una ficha homónima de Quest antes de asumir soporte VR.',
    url: PAGE_URL,
    locale: 'es_ES',
    type: 'article',
    images: [{ url: '/images/dear-passengers-unity-flight.webp', width: 1920, height: 1024, alt: 'Dear Passengers VR explicado con una imagen oficial de vuelo de FLEXUS' }],
  },
};

const faqs: FaqItem[] = [
  { question: '¿Dear Passengers VR está confirmado?', answer: 'No. Dear Passengers VR no ha sido anunciado por FLEXUS. Steam 4534960 solo confirma Windows, un jugador y cooperativo online; no muestra SteamVR ni cascos compatibles.' },
  { question: '¿Dear Passengers es un juego de realidad virtual?', answer: 'El Dear Passengers de FLEXUS es actualmente un juego para PC con Windows. La cámara en primera persona no confirma Dear Passengers VR, seguimiento de movimiento ni interfaz para casco.' },
  { question: '¿Se puede jugar Dear Passengers VR en Meta Quest?', answer: 'No existe una versión de Quest verificada por FLEXUS. Una ficha separada con ID 1251691901365016 nombra a Fun Land Games y no demuestra relación con Steam 4534960.' },
  { question: '¿Cuándo sale Dear Passengers VR?', answer: 'FLEXUS no ha publicado una fecha de Dear Passengers VR. El juego de Windows mantiene una ventana general de 2026; la fecha de otra ficha no debe trasladarse al producto de FLEXUS.' },
];

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Dear Passengers VR: compatibilidad y ficha de Meta Quest',
  description: 'Guía española para comprobar el soporte VR y separar dos productos homónimos.',
  mainEntityOfPage: PAGE_URL, datePublished: '2026-08-21', dateModified: '2026-08-21', inLanguage: 'es-ES',
  author: { '@type': 'Organization', name: 'Equipo editorial de DearPassengers.net', url: 'https://dearpassengers.net/es/sobre/' },
  publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/', logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' } },
  image: 'https://dearpassengers.net/images/dear-passengers-unity-flight.webp', citation: [STEAM_URL, QUEST_URL, META_URL],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers en español', item: 'https://dearpassengers.net/es/' },
    { '@type': 'ListItem', position: 2, name: 'Plataformas', item: 'https://dearpassengers.net/dear-passengers-platforms/' },
    { '@type': 'ListItem', position: 3, name: 'Dear Passengers VR', item: PAGE_URL },
  ],
};

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };

export default function SpanishDearPassengersVrPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header locale="es" languageHref="/dear-passengers-vr/" />
      <main id="main-content" className="steam-guide-page" lang="es">
        <article>
          <header className="article-hero steam-article-hero">
            <Image src="/images/dear-passengers-unity-flight.webp" alt="Imagen oficial de FLEXUS para comprobar el estado de Dear Passengers VR" fill sizes="100vw" priority />
            <div className="hero-shade" />
            <div className="container article-hero-content steam-hero-content">
              <nav className="breadcrumbs" aria-label="Migas de pan"><Link href="/es/">Español</Link><span>/</span><Link href="/dear-passengers-platforms/" hrefLang="en">Plataformas</Link><span>/</span><span>VR</span></nav>
              <div className="steam-hero-grid">
                <div className="steam-hero-copy">
                  <div className="eyebrow"><span>●</span> ESTADO VR · IDENTIDAD</div>
                  <h1>Dear Passengers VR:<br /><em>compatibilidad y ficha de Quest</em></h1>
                  <p><strong>Dear Passengers VR no está anunciado para el juego de FLEXUS.</strong> La ficha oficial confirma Windows. Otro registro con el nombre Dear Passengers VR pertenece a Fun Land Games, por lo que sus datos no describen Steam 4534960.</p>
                  <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Verificar el juego oficial ↗</a>
                  <div className="article-meta"><span>21 de agosto de 2026</span><span>Steam 4534960</span><span>VR: sin anunciar</span></div>
                </div>
                <dl className="steam-identity-board" aria-label="Resumen de Dear Passengers VR">
                  <div><dt>Juego FLEXUS</dt><dd>Windows</dd><small>Registro oficial</small></div>
                  <div><dt>Campo VR</dt><dd>No consta</dd><small>Sin SteamVR</small></div>
                  <div><dt>Ficha Quest</dt><dd>Separada</dd><small>Fun Land Games</small></div>
                  <div><dt>Comprobar</dt><dd>ID y editor</dd><small>No solo el título</small></div>
                </dl>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc" aria-label="Secciones"><p>CONTROL VR</p><a href="#identidad">Dos productos</a><a href="#soporte">Soporte real</a><a href="#confirmacion">Qué lo confirmaría</a><a href="#faq">Preguntas</a><a href="#fuentes">Fuentes</a></aside>
            <div className="article-prose prose">
              <EditorialNote checked="21 de agosto de 2026" locale="es" note="Separamos editor, plataforma e ID. No atribuimos intención ni relación sin una fuente verificable." />

              <section id="identidad">
                <span className="kicker">RESPUESTA DIRECTA</span>
                <h2>¿Dear Passengers VR es el juego de FLEXUS?</h2>
                <p className="snippet-answer">No hay una edición Dear Passengers VR confirmada por FLEXUS. Steam 4534960 identifica a FLEXUS como desarrollador y editor y solo publica requisitos de Windows. No aparece SteamVR, VR Supported, VR Only ni una lista de visores.</p>
                <p>Quest Store DB archiva otra ficha Dear Passengers VR con ID 1251691901365016. Allí figuran Fun Land Games, Quest 2/Pro, Quest 3/3S y un precio base de 6,99 dólares. Ninguno de esos campos pertenece al juego de FLEXUS.</p>
                <div className="platform-table" role="table" aria-label="Comparación de productos Dear Passengers VR">
                  <div className="platform-head" role="row"><span role="columnheader">Registro</span><span role="columnheader">Editor</span><span role="columnheader">Conclusión</span></div>
                  <div role="row"><strong role="cell">Dear Passengers · Steam 4534960</strong><span role="cell">FLEXUS</span><span className="status-confirmed" role="cell">Windows confirmado</span></div>
                  <div role="row"><strong role="cell">Dear Passengers VR · Meta 1251691901365016</strong><span role="cell">Fun Land Games</span><span className="status-open" role="cell">Producto separado</span></div>
                </div>
              </section>

              <section id="soporte">
                <span className="kicker">CASCOS Y CONTROLES</span>
                <h2>Dear Passengers VR en Quest, SteamVR o PS VR2</h2>
                <p>Dear Passengers VR no tiene matriz oficial de visores. Quest Link o Air Link no convierten por sí solos un juego normal de Windows en realidad virtual. Tampoco se han descrito mandos de movimiento, seguimiento de manos, giro por pasos o modo sentado.</p>
              </section>

              <section id="confirmacion">
                <span className="kicker">REGLA DE ACTUALIZACIÓN</span>
                <h2>Qué confirmaría Dear Passengers VR</h2>
                <p>Dear Passengers VR pasará a confirmado solo si Steam 4534960 añade un campo VR, FLEXUS publica una declaración o una tienda de plataforma enlazada por FLEXUS identifica visores y controles. Peticiones de la comunidad y mods no equivalen a soporte nativo.</p>
                <p>Antes de pagar o instalar, revisa el editor. Esta guía de Dear Passengers VR remite a <Link href="/dear-passengers-platforms/" hrefLang="en">plataformas</Link> y al <Link href="/es/juego-dear-passengers/">perfil español del juego</Link>.</p>
              </section>

              <section id="faq"><span className="kicker">DUDAS FRECUENTES</span><h2>Preguntas sobre Dear Passengers VR</h2><FAQ items={faqs} /></section>

              <section id="fuentes" className="related-guide related-links-panel">
                <span className="kicker">FUENTES</span><h2>Comprueba Dear Passengers VR</h2>
                <p>Para verificar Dear Passengers VR, <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam ↗</a> confirma FLEXUS y Windows. El <a href={QUEST_URL} target="_blank" rel="noopener noreferrer">archivo de Quest ↗</a> nombra a Fun Land Games; la <a href={META_URL} target="_blank" rel="noopener noreferrer">página de Meta ↗</a> no está disponible.</p>
                <p>Continúa con <Link href="/es/juego-dear-passengers/">el juego en español</Link>, <Link href="/es/dear-passengers-caracteristicas-confirmadas/">las características confirmadas</Link> o <Link href="/dear-passengers-platforms/" hrefLang="en">todas las plataformas</Link>. Dear Passengers VR conserva la tarea de cascos e identidad.</p>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer locale="es" />
    </>
  );
}
