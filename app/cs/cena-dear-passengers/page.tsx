import type { Metadata } from 'next';
import PriceGuidePage from '@/components/PriceGuidePage';

const PAGE_URL = 'https://dearpassengers.net/cs/cena-dear-passengers/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=czech';
const COMMUNITY_URL = 'https://steamcommunity.com/app/4534960/discussions/0/579425364008468733/';
const faqs = [
  { question: 'Jaká je cena hry Dear Passengers?', answer: 'Cena hry Dear Passengers zatím nemá oficiální částku. FLEXUS uvedl jen srovnání s podobnými hrami.' },
  { question: 'Bude Dear Passengers zdarma?', answer: 'Obchodní model není potvrzen jako bezplatný; Free to Play je uživatelský tag.' },
  { question: 'Kolik bude hra stát v korunách?', answer: 'Částka v Kč nebyla zveřejněna a nelze ji poctivě převést z odhadu.' },
  { question: 'Existuje předobjednávka?', answer: 'Ne. Cena hry Dear Passengers, edice, předobjednávka ani sleva nejsou na Steamu uvedeny.' },
  { question: 'Kde cenu ověřit?', answer: 'Cena hry Dear Passengers musí být uvedena na Steam App 4534960 nebo v oznámení FLEXUS.' },
];
export const metadata: Metadata = {
  title: { absolute: 'Cena hry Dear Passengers: kolik bude stát na Steamu' },
  description: 'Cena hry Dear Passengers zatím není zveřejněná. Ověřte cenu v Kč, Free to Play tag, edice, slevu, předobjednávku a oficiální zdroj.',
  alternates: { canonical: '/cs/cena-dear-passengers/', languages: { en: '/dear-passengers-price/', es: '/es/precio-de-dear-passengers/', cs: '/cs/cena-dear-passengers/', it: '/it/prezzo-di-dear-passengers/', 'x-default': '/dear-passengers-price/' } },
  openGraph: { title: 'Cena hry Dear Passengers: aktuální stav', description: 'Český přehled ceny, obchodního modelu a regionálních údajů na Steamu.', url: PAGE_URL, locale: 'cs_CZ', type: 'article', images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Český průvodce cenou hry Dear Passengers' }] },
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', inLanguage: 'cs-CZ', headline: 'Cena hry Dear Passengers: kolik bude stát na Steamu', mainEntityOfPage: PAGE_URL, datePublished: '2026-08-27', dateModified: '2026-08-27', author: { '@type': 'Organization', name: 'Česká redakce DearPassengers.net' }, publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/' }, citation: [STEAM_URL, COMMUNITY_URL] };
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Dear Passengers česky', item: 'https://dearpassengers.net/cs/' }, { '@type': 'ListItem', position: 2, name: 'Datum vydání', item: 'https://dearpassengers.net/cs/dear-passengers-datum-vydani/' }, { '@type': 'ListItem', position: 3, name: 'Cena', item: PAGE_URL }] };
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };

export default function CzechPricePage() { return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  <PriceGuidePage locale="cs" languageHref="/dear-passengers-price/" eyebrow="CENA · OFICIÁLNÍ POLE" h1="Cena hry Dear Passengers: kolik bude stát na Steamu"
    intro={<><strong>Cena hry Dear Passengers zatím nemá číselnou hodnotu.</strong> Steam nabízí jen seznam přání. Tento přehled vysvětluje, co o ceně hry řekl FLEXUS, proč uživatelský tag není obchodní model a které údaje stále chybějí.</>}
    checked="27. srpna 2026" note="Cena hry Dear Passengers se mění jen podle pole ovládaného vydavatelem nebo dohledatelného vyjádření FLEXUS; odhady zůstávají oddělené."
    breadcrumbHome="Dear Passengers česky" breadcrumbParent="Datum vydání" parentHref="/cs/dear-passengers-datum-vydani/" parentHrefLang="cs" pageLabel="Cena"
    meta={['Vydáno 27. srpna 2026', 'Částka: neznámá', 'Přístup: seznam přání']} tocLabel="KONTROLA CENY"
    statusHeading="Aktuální cena hry Dear Passengers" statusHeaders={['Pole', 'Stav', 'Důkaz']} statusRows={[
      { label: 'Číselná cena', status: 'Nezveřejněna', evidence: 'Bez nákupního panelu' }, { label: 'Směr FLEXUS', status: 'Úroveň podobných her', evidence: 'Moderovaná odpověď', confirmed: true }, { label: 'Free to Play', status: 'Nepotvrzeno', evidence: 'Uživatelský tag' }, { label: 'Cena v Kč', status: 'Nezveřejněna', evidence: 'Bez aktivního balíčku' },
    ]}
    confirmedLabel="POTVRZENO" confirmedTitle="Pouze obecné srovnání" confirmed={['Cena hry Dear Passengers míří k podobným hrám', 'Cena hry Dear Passengers patří k App 4534960', 'Cena hry Dear Passengers čeká na vydání v roce 2026']}
    unknownLabel="NEZNÁMÉ" unknownTitle="Bez částky a edice" unknown={['Cena hry Dear Passengers v korunách a eurech', 'Placený nebo bezplatný model', 'Edice, předobjednávka a sleva']}
    sections={[
      { id: 'odpoved', kicker: 'PŘÍMÁ ODPOVĚĎ', heading: 'Kolik bude Dear Passengers stát?', paragraphs: [<><strong>Cena hry Dear Passengers nebyla vyčíslena.</strong> Moderátor uvedl, že má odpovídat běžné ceně podobných her v žánru, ale částku nenapsal. Číselné srovnání konkurence proto není cena hry Dear Passengers ani slib studia. Český dotaz nepřepisujeme do cizí měny ani odhadu: zvlášť ověřujeme oficiální částku, regionální hodnotu, slevu a obchodní model.</>]},
      { id: 'zdarma', kicker: 'OBCHODNÍ MODEL', heading: 'Bude hra Dear Passengers zdarma?', paragraphs: [<>Free to Play se objevuje jen mezi uživatelskými tagy. Cena hry Dear Passengers proto není potvrzena jako nulová: chybí bezplatná licence a instalace. Stejně tak není potvrzena placená cena hry Dear Passengers, protože nákupní pole neexistuje.</>]},
      { id: 'koruny', kicker: 'ČESKÝ TRH', heading: 'Cena hry Dear Passengers v korunách', paragraphs: [<>Cena hry Dear Passengers v Kč ani eurech není dostupná. Steam může používat regionální hodnoty a místní daně, takže převod cizího odhadu by klamal. Cena hry Dear Passengers se zapíše až podle české oficiální karty.</>]},
      { id: 'overeni', kicker: 'OVĚŘENÍ', heading: 'Jak ověřit cenu hry Dear Passengers', paragraphs: [<>Na <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam App 4534960 ↗</a> zkontrolujte FLEXUS a nákupní panel. <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer">Oficiální diskuse ↗</a> potvrzuje jen směr. Klíč, záloha nebo stažení před vydáním neurčuje cenu hry Dear Passengers.</>]},
    ]}
    faqsHeading="Otázky k ceně hry Dear Passengers" faqs={faqs} sourcesHeading="Zdroje pro cenu hry Dear Passengers"
    sourcesIntro={<>Oficiální <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam ↗</a> nemá nákupní částku a <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer">komunitní diskuse ↗</a> uvádí jen obecné srovnání. Žádný zdroj zatím nepublikuje cenu hry Dear Passengers. Kontrolu opakujeme po každé změně obchodu.</>}
    relatedHeading="Další ověřené přehledy" related={[{ href: '/cs/dear-passengers-datum-vydani/', label: 'Datum vydání', hrefLang: 'cs' }, { href: '/cs/dear-passengers-stahnout/', label: 'Bezpečné stažení', hrefLang: 'cs' }, { href: '/cs/hra-dear-passengers/', label: 'Přehled hry', hrefLang: 'cs' }]}
    steamLabel="Ověřit Steam" parentLabel="Zpět na vydání" heroAlt="Český redakční panel pro cenu hry Dear Passengers" />
</>; }
