import type { Metadata } from 'next';
import PriceGuidePage from '@/components/PriceGuidePage';

const PAGE_URL = 'https://dearpassengers.net/it/prezzo-di-dear-passengers/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=italian';
const COMMUNITY_URL = 'https://steamcommunity.com/app/4534960/discussions/0/579425364008468733/';
const faqs = [
  { question: 'Qual è il prezzo di Dear Passengers?', answer: 'Il prezzo di Dear Passengers non ha ancora un importo ufficiale. FLEXUS ha dato solo un confronto generale.' },
  { question: 'Dear Passengers sarà gratis?', answer: 'Il modello commerciale non è confermato come gratuito; Free to Play è un tag degli utenti.' },
  { question: 'Quanto costerà in euro?', answer: 'La cifra in euro non è pubblicata e non va ricavata da una stima in dollari.' },
  { question: 'Ci saranno preordine o edizioni?', answer: 'No: prezzo di Dear Passengers, edizioni, preordine e sconto di lancio non sono annunciati.' },
  { question: 'Dove verificare il prezzo?', answer: 'Il prezzo di Dear Passengers va controllato su Steam App 4534960 o in un annuncio FLEXUS.' },
];
export const metadata: Metadata = {
  title: { absolute: 'Prezzo di Dear Passengers: costo e stato su Steam' },
  description: 'Il prezzo di Dear Passengers non ha ancora una cifra. Verifica costo in euro, Free to Play, edizioni, preordine, sconti e fonte ufficiale Steam.',
  alternates: { canonical: '/it/prezzo-di-dear-passengers/', languages: { en: '/dear-passengers-price/', es: '/es/precio-de-dear-passengers/', cs: '/cs/cena-dear-passengers/', it: '/it/prezzo-di-dear-passengers/', 'x-default': '/dear-passengers-price/' } },
  openGraph: { title: 'Prezzo di Dear Passengers: stato ufficiale', description: 'Guida italiana a costo, modello commerciale e valori regionali ancora mancanti.', url: PAGE_URL, locale: 'it_IT', type: 'article', images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Guida italiana al prezzo di Dear Passengers' }] },
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', inLanguage: 'it-IT', headline: 'Prezzo di Dear Passengers: costo e stato su Steam', mainEntityOfPage: PAGE_URL, datePublished: '2026-08-27', dateModified: '2026-08-27', author: { '@type': 'Organization', name: 'Redazione italiana di DearPassengers.net' }, publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/' }, citation: [STEAM_URL, COMMUNITY_URL] };
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Dear Passengers', item: 'https://dearpassengers.net/' }, { '@type': 'ListItem', position: 2, name: 'Data di uscita', item: 'https://dearpassengers.net/it/dear-passengers-data-di-uscita/' }, { '@type': 'ListItem', position: 3, name: 'Prezzo', item: PAGE_URL }] };
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };

export default function ItalianPricePage() { return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  <PriceGuidePage locale="it" languageHref="/dear-passengers-price/" eyebrow="PREZZO · CAMPI UFFICIALI" h1="Prezzo di Dear Passengers: costo e stato su Steam"
    intro={<><strong>Il prezzo di Dear Passengers non è stato pubblicato con una cifra.</strong> Steam offre solo la lista dei desideri. Questa guida al costo distingue la direzione generale di FLEXUS, il tag Free to Play e i dati commerciali ancora assenti.</>}
    checked="27 agosto 2026" note="Il dato cambia solo con un campo controllato dall’editore o una dichiarazione attribuibile a FLEXUS; le stime restano separate."
    breadcrumbHome="Dear Passengers" homeHref="/" homeHrefLang="en" breadcrumbParent="Data di uscita" parentHref="/it/dear-passengers-data-di-uscita/" parentHrefLang="it" pageLabel="Prezzo"
    meta={['Pubblicato il 27 agosto 2026', 'Importo: sconosciuto', 'Accesso: lista desideri']} tocLabel="CONTROLLO PREZZO"
    statusHeading="Stato del prezzo di Dear Passengers" statusHeaders={['Campo', 'Stato', 'Prova']} statusRows={[
      { label: 'Prezzo numerico', status: 'Non pubblicato', evidence: 'Nessun acquisto' }, { label: 'Indicazione FLEXUS', status: 'Mercato del genere', evidence: 'Risposta moderata', confirmed: true }, { label: 'Free to Play', status: 'Non confermato', evidence: 'Tag degli utenti' }, { label: 'Prezzo in euro', status: 'Non pubblicato', evidence: 'Nessun pacchetto' },
    ]}
    confirmedLabel="CONFERMATO" confirmedTitle="Solo una direzione generale" confirmed={['FLEXUS cita giochi simili', 'Steam App 4534960 è la scheda reale', 'Uscita prevista nel 2026']}
    unknownLabel="SCONOSCIUTO" unknownTitle="Nessun importo o edizione" unknown={['Prezzo in euro o dollari', 'Modello gratuito o a pagamento', 'Preordine, edizioni e sconto']}
    sections={[
      { id: 'risposta', kicker: 'RISPOSTA DIRETTA', heading: 'Quanto costerà Dear Passengers?', paragraphs: [<><strong>Il prezzo di Dear Passengers non ha un numero ufficiale.</strong> Un moderatore ha scritto che sarà in linea con giochi simili del genere, senza indicare una fascia. I confronti con altri titoli sono quindi stime e non un annuncio numerico di FLEXUS.</>]},
      { id: 'gratis', kicker: 'MODELLO COMMERCIALE', heading: 'Il prezzo di Dear Passengers sarà gratuito?', paragraphs: [<>Free to Play compare tra i tag popolari creati dagli utenti. Non rende nullo il prezzo di Dear Passengers: mancano licenza gratuita e installazione. Neppure un importo a pagamento è confermato, perché non esiste un riquadro d’acquisto.</>]},
      { id: 'euro', kicker: 'MERCATO ITALIANO', heading: 'Prezzo di Dear Passengers in euro', paragraphs: [<>Non esiste un prezzo di Dear Passengers in euro o altre valute. Steam può usare valori regionali e imposte locali, quindi una conversione anticipata sarebbe fuorviante. Il valore verrà registrato dalla scheda italiana ufficiale.</>]},
      { id: 'verifica', kicker: 'VERIFICA', heading: 'Come verificare il prezzo di Dear Passengers', paragraphs: [<>Apri <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam App 4534960 ↗</a>, controlla FLEXUS e cerca il riquadro di acquisto. La <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer">discussione ufficiale ↗</a> dà solo un orientamento. Key e preordini non autorizzati non fissano il prezzo di Dear Passengers.</>]},
    ]}
    faqsHeading="Domande sul prezzo di Dear Passengers" faqs={faqs} sourcesHeading="Fonti del prezzo di Dear Passengers"
    sourcesIntro={<>La scheda <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam ufficiale ↗</a> non mostra acquisto; la <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer">discussione del Community Hub ↗</a> offre solo un confronto generale. Nessuna fonte pubblica ancora una cifra. Il controllo viene ripetuto quando la scheda cambia, senza sostituire il dato con previsioni.</>}
    relatedHeading="Controlli successivi" related={[{ href: '/it/dear-passengers-data-di-uscita/', label: 'Data di uscita', hrefLang: 'it' }, { href: '/dear-passengers-steam/', label: 'Scheda Steam', hrefLang: 'en' }, { href: '/dear-passengers-download/', label: 'Download sicuro', hrefLang: 'en' }]}
    steamLabel="Controlla Steam" parentLabel="Torna all’uscita" heroAlt="Pannello editoriale italiano per il prezzo di Dear Passengers" />
</>; }
