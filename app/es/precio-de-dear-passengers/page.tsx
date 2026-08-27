import type { Metadata } from 'next';
import Link from 'next/link';
import PriceGuidePage from '@/components/PriceGuidePage';

const PAGE_URL = 'https://dearpassengers.net/es/precio-de-dear-passengers/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=spanish';
const COMMUNITY_URL = 'https://steamcommunity.com/app/4534960/discussions/0/579425364008468733/';
const faqs = [
  { question: '¿Cuál es el precio de Dear Passengers?', answer: 'El precio de Dear Passengers no tiene una cifra oficial. FLEXUS solo ha indicado que estará en línea con juegos similares del género.' },
  { question: '¿Dear Passengers será gratis?', answer: 'El modelo comercial no está confirmado como gratuito. Free to Play es una etiqueta de usuarios, no un campo de compra.' },
  { question: '¿Cuánto costará en euros?', answer: 'La cifra en euros sigue sin publicarse; no debe calcularse desde una estimación en dólares.' },
  { question: '¿Hay reserva o edición especial?', answer: 'No. El precio de Dear Passengers, las ediciones, la reserva y los descuentos de lanzamiento siguen sin anunciarse.' },
  { question: '¿Dónde se comprobará el precio?', answer: 'El precio de Dear Passengers debe aparecer en Steam App 4534960 o en un anuncio atribuible a FLEXUS.' },
];

export const metadata: Metadata = {
  title: { absolute: 'Precio de Dear Passengers: coste y estado en Steam' },
  description: 'El precio de Dear Passengers aún no tiene cifra. Comprueba coste en euros, si será gratis, ediciones, reserva, descuentos y la fuente oficial de Steam.',
  alternates: { canonical: '/es/precio-de-dear-passengers/', languages: { en: '/dear-passengers-price/', es: '/es/precio-de-dear-passengers/', cs: '/cs/cena-dear-passengers/', it: '/it/prezzo-di-dear-passengers/', 'x-default': '/dear-passengers-price/' } },
  openGraph: { title: 'Precio de Dear Passengers: estado oficial', description: 'Guía española del coste, modelo comercial y campos regionales aún no publicados.', url: PAGE_URL, locale: 'es_ES', type: 'article', images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Guía del precio de Dear Passengers y su estado en Steam' }] },
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', inLanguage: 'es-ES', headline: 'Precio de Dear Passengers: coste y estado en Steam', mainEntityOfPage: PAGE_URL, datePublished: '2026-08-27', dateModified: '2026-08-27', author: { '@type': 'Organization', name: 'Equipo editorial en español de DearPassengers.net' }, publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/' }, citation: [STEAM_URL, COMMUNITY_URL] };
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Dear Passengers en español', item: 'https://dearpassengers.net/es/' }, { '@type': 'ListItem', position: 2, name: 'Fecha de lanzamiento', item: 'https://dearpassengers.net/es/dear-passengers-fecha-de-lanzamiento/' }, { '@type': 'ListItem', position: 3, name: 'Precio', item: PAGE_URL }] };
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };

export default function SpanishPricePage() { return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  <PriceGuidePage locale="es" languageHref="/dear-passengers-price/" eyebrow="PRECIO · CAMPOS OFICIALES" h1="Precio de Dear Passengers: coste y estado en Steam"
    intro={<><strong>El precio de Dear Passengers no se ha publicado con una cifra.</strong> Steam permite añadir el juego a deseados, pero no comprarlo. Esta guía de coste distingue la respuesta general de FLEXUS, la etiqueta comunitaria Free to Play y lo que todavía falta.</>}
    checked="27 de agosto de 2026" note="El dato solo cambia cuando Steam o FLEXUS publican un campo controlado por el editor; las comparaciones se marcan como estimaciones."
    breadcrumbHome="Dear Passengers en español" breadcrumbParent="Fecha de lanzamiento" parentHref="/es/dear-passengers-fecha-de-lanzamiento/" parentHrefLang="es" pageLabel="Precio"
    meta={['Publicado el 27 de agosto de 2026', 'Cifra: desconocida', 'Acceso: lista de deseados']} tocLabel="CONTROL DE PRECIO"
    statusHeading="Estado del precio de Dear Passengers" statusHeaders={['Campo', 'Estado', 'Prueba']} statusRows={[
      { label: 'Precio numérico', status: 'No publicado', evidence: 'Sin panel de compra' }, { label: 'Orientación de FLEXUS', status: 'Mercado del género', evidence: 'Respuesta moderada', confirmed: true }, { label: 'Free to Play', status: 'No confirmado', evidence: 'Etiqueta de usuarios' }, { label: 'Euros y monedas regionales', status: 'No publicados', evidence: 'Sin paquete activo' },
    ]}
    confirmedLabel="CONFIRMADO" confirmedTitle="Solo una orientación general" confirmed={['FLEXUS menciona juegos similares', 'Steam App 4534960 es la ficha real', 'Lanzamiento previsto en 2026']}
    unknownLabel="DESCONOCIDO" unknownTitle="Sin cifra ni edición" unknown={['Precio en euros o dólares', 'Modelo gratuito o de pago', 'Reserva, ediciones y descuentos']}
    sections={[
      { id: 'respuesta', kicker: 'RESPUESTA DIRECTA', heading: '¿Cuánto costará Dear Passengers?', paragraphs: [<><strong>El precio de Dear Passengers sigue sin cifra.</strong> Un moderador oficial respondió que estará en línea con el precio habitual de juegos similares del género, pero no dio número. Convertir comparaciones de otros títulos en una cifra sería una estimación, no un anuncio.</>]},
      { id: 'gratis', kicker: 'MODELO COMERCIAL', heading: '¿El precio de Dear Passengers será gratis?', paragraphs: [<>La ficha muestra Free to Play entre etiquetas populares creadas por usuarios. Esa señal no hace que el precio de Dear Passengers sea cero: no existe licencia gratuita, botón de instalación ni compra. Tampoco confirma un coste de pago; ambos modelos siguen abiertos.</>]},
      { id: 'euros', kicker: 'ESPAÑA Y REGIONES', heading: 'Precio de Dear Passengers en euros', paragraphs: [<>No hay precio de Dear Passengers en euros, pesos ni otra moneda. Steam puede usar valores regionales e impuestos locales, por lo que una conversión previa sería engañosa. El precio de Dear Passengers se registrará cuando la ficha oficial muestre cada campo regional.</>]},
      { id: 'comprobar', kicker: 'VERIFICACIÓN', heading: 'Cómo comprobar el precio de Dear Passengers', paragraphs: [<>Abre <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam App 4534960 ↗</a>, verifica FLEXUS y busca el panel de compra. La respuesta del <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer">foro oficial ↗</a> no autoriza una cifra. Evita claves, reservas y descargas que inventen el precio de Dear Passengers.</>]},
    ]}
    faqsHeading="Preguntas sobre el precio de Dear Passengers" faqs={faqs} sourcesHeading="Fuentes del precio de Dear Passengers"
    sourcesIntro={<>La ficha oficial de <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam ↗</a> confirma que no hay compra; el <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer">debate oficial ↗</a> aporta la única orientación general. Ninguna fuente publica aún el precio de Dear Passengers.</>}
    relatedHeading="Siguientes comprobaciones" related={[{ href: '/es/dear-passengers-fecha-de-lanzamiento/', label: 'Fecha de lanzamiento', hrefLang: 'es' }, { href: '/es/dear-passengers-descargar/', label: 'Descarga segura', hrefLang: 'es' }, { href: '/dear-passengers-steam/', label: 'Ficha Steam', hrefLang: 'en' }]}
    steamLabel="Comprobar Steam" parentLabel="Volver al lanzamiento" heroAlt="Panel editorial del precio de Dear Passengers para España" />
</>; }
