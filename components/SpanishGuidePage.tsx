import Image from 'next/image';
import Link from 'next/link';
import type { SpanishGuide } from '@/app/es/spanish-content';
import EditorialNote from '@/components/EditorialNote';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=spanish';
const FLEXUS_INTERVIEW = 'https://gamedev.dou.ua/articles/dear-passengers-interview/';

const labels: Record<string, string> = {
  'juego-dear-passengers': 'Qué es el juego',
  'dear-passengers-como-jugar': 'Cómo jugar',
  'dear-passengers-cuantos-jugadores': 'Cuántos jugadores',
  'dear-passengers-fecha-de-lanzamiento': 'Fecha de lanzamiento',
  'dear-passengers-demo': 'Estado de la demo',
  'dear-passengers-descargar': 'Descarga segura',
  'dear-passengers-requisitos': 'Requisitos',
  'dear-passengers-trailer': 'Tráiler oficial',
  'dear-passengers-noticias': 'Noticias',
  'dear-passengers-caracteristicas-confirmadas': 'Características confirmadas',
  'dear-passengers-roles': 'Roles de la tripulación',
  'dear-passengers-desarrollador-flexus': 'Desarrollador FLEXUS',
  'juegos-parecidos-a-dear-passengers': 'Juegos parecidos',
};

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return <>{parts.map((part, index) => {
    const match = part.match(/^\[\[([^|]+)\|([^\]]+)\]\]$/);
    return match ? <Link href={match[1]} key={`${match[1]}-${index}`}>{match[2]}</Link> : part;
  })}</>;
}

export default function SpanishGuidePage({ guide, canonicalPath }: { guide: SpanishGuide; canonicalPath: string }) {
  const pageUrl = `https://dearpassengers.net${canonicalPath}`;
  const articleSchema = {
    '@context': 'https://schema.org', '@type': guide.slug ? 'Article' : 'WebPage',
    headline: guide.title, description: guide.description, mainEntityOfPage: pageUrl,
    datePublished: '2026-07-30', dateModified: '2026-07-30', inLanguage: 'es',
    author: { '@type': 'Organization', name: 'Equipo editorial en español de DearPassengers.net', url: 'https://dearpassengers.net/es/sobre/' },
    publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/', logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' } },
    image: `https://dearpassengers.net${guide.heroImage}`,
    isPartOf: { '@type': 'WebSite', name: 'DearPassengers.net', url: 'https://dearpassengers.net/es/' },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Guía de Dear Passengers en español', item: 'https://dearpassengers.net/es/' },
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
    <Header locale="es" languageHref={guide.englishPath} />
    <main id="main-content" lang="es" className="spanish-content">
      <article>
        <header className="article-hero">
          <Image src={guide.heroImage} alt={guide.heroAlt} fill sizes="100vw" priority />
          <div className="hero-shade" />
          <div className="container article-hero-content">
            <nav className="breadcrumbs" aria-label="Ruta de navegación"><Link href="/es/">Guía en español</Link><span>/</span><span>{guide.keyword}</span></nav>
            <div className="eyebrow"><span>●</span> {guide.eyebrow}</div>
            <h1><RichText text={guide.h1} /></h1>
            <p><RichText text={guide.intro} /></p>
            <div className="article-meta"><span>Verificado el 30 de julio de 2026</span><span>Fuentes primarias: Steam y FLEXUS</span><span>Idioma del sitio: español</span></div>
          </div>
        </header>
        <div className="container article-layout">
          <aside className="article-toc" aria-label="Contenido de la guía">
            <p>EN ESTA GUÍA</p><a href="#respuesta">Respuesta rápida</a>
            {guide.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.heading}</a>)}
            <a href="#busqueda-espanol">Contexto de búsqueda</a><a href="#preguntas">Preguntas frecuentes</a>
            <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Añadir a la lista de deseados ↗</a>
          </aside>
          <div className="article-prose prose">
            <EditorialNote checked="30 de julio de 2026" locale="es" note={guide.note} />
            <section id="respuesta">
              <span className="kicker">RESPUESTA RÁPIDA</span><h2>{guide.keyword}: situación actual</h2>
              <p className="snippet-answer"><strong><RichText text={guide.answer} /></strong></p>
              <div className="status-grid" aria-label="Estado de la información">
                <div className="fact-callout"><span>CONFIRMADO</span><strong>Lo que dicen las fuentes primarias</strong><ul>{guide.confirmed.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div className="fact-callout unknown-callout"><span>NO PUBLICADO</span><strong>Lo que sigue siendo desconocido</strong><ul>{guide.unknown.map((item) => <li key={item}>{item}</li>)}</ul></div>
              </div>
            </section>
            {guide.sections.map((section) => <section id={section.id} key={section.id}>
              <span className="kicker">{section.kicker}</span><h2><RichText text={section.heading} /></h2>
              {section.paragraphs.map((paragraph, index) => <p key={index}><RichText text={paragraph} /></p>)}
              {section.bullets && <ul>{section.bullets.map((item) => <li key={item}><RichText text={item} /></li>)}</ul>}
            </section>)}
            <section id="busqueda-espanol">
              <span className="kicker">CONTEXTO DE BÚSQUEDA EN ESPAÑOL</span><h2>¿Por qué usamos “{guide.keyword}”?</h2>
              {guide.localContext.map((paragraph) => <p key={paragraph}><RichText text={paragraph} /></p>)}
            </section>
            <section id="verificacion">
              <span className="kicker">MÉTODO DE VERIFICACIÓN</span><h2>¿Cómo verificamos la información sobre {guide.keyword}?</h2>
              <p>Primero revisamos Steam para plataforma, ventana de lanzamiento, modos, idiomas y hardware. Las entrevistas directas con FLEXUS contextualizan planes, pero “planeado” no significa “disponible”. Que varios sitios repitan una afirmación no la convierte en confirmación si ninguno identifica el origen.</p>
              <p>“Confirmado” es un dato explícito de una fuente primaria. “Observación” describe solo lo visible en una imagen o vídeo oficial. “Plan” es una intención del desarrollador y puede cambiar. “No publicado” es la respuesta correcta para precio, día exacto, máximo de jugadores, consolas y otros detalles ausentes.</p>
              <p><RichText text="DearPassengers.net es una guía independiente sin relación con FLEXUS, Valve o Steam. Las imágenes oficiales se usan con finalidad editorial y pertenecen a sus titulares. Puedes enviar una corrección con fuente desde la [[/es/contacto/|página de contacto]]." /></p>
            </section>
            <section id="preguntas"><span className="kicker">PREGUNTAS FRECUENTES</span><h2>Dudas sobre {guide.keyword}</h2><p>Las respuestas usan español natural y no rellenan una laguna oficial con una suposición.</p><FAQ items={guide.faqs} /></section>
            <section id="fuentes"><span className="kicker">FUENTES PRIMARIAS</span><h2>Comprueba la información en su origen</h2><p>La <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">ficha oficial de Dear Passengers en Steam ↗</a> muestra plataforma, modos, ausencia de español y requisitos mínimos. La <a href={FLEXUS_INTERVIEW} target="_blank" rel="noopener noreferrer">entrevista directa con FLEXUS ↗</a> aporta contexto sobre la demo. No enlazamos archivos de terceros.</p></section>
            <section className="related-guide"><span className="kicker">GUÍA EN ESPAÑOL</span><h2>Más temas sobre Dear Passengers</h2><p>Cada página responde a una intención propia y los enlaces contextuales conectan las dudas sin hacer que varias URLs compitan por la misma consulta.</p><div className="related-actions"><Link className="button" href="/es/">Inicio en español →</Link>{guide.related.map((slug) => <Link className="button button-ghost" href={`/es/${slug}/`} key={slug}>{labels[slug] || slug} →</Link>)}</div></section>
          </div>
        </div>
      </article>
    </main>
    <Footer locale="es" />
  </>;
}
