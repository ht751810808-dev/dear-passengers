import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/de/dear-passengers-ps5/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=german';
const PLAYSTATION_URL = 'https://store.playstation.com/de-de/search/dear%20passengers';
const OFFICIAL_URL = 'https://dearpassengers.game/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers PS5: Release- und Store-Status' },
  description: 'Dear Passengers PS5 auf Deutsch prüfen: PlayStation Store, Release, Preis, PS Plus, DualSense, Trophäen, Koop und Crossplay.',
  alternates: {
    canonical: '/de/dear-passengers-ps5/',
    languages: { en: '/dear-passengers-ps5/', de: '/de/dear-passengers-ps5/', tr: '/tr/dear-passengers-ps5/', 'x-default': '/dear-passengers-ps5/' },
  },
  openGraph: {
    title: 'Dear Passengers PS5: Deutscher Release- und Store-Status',
    description: 'PS5-Verfügbarkeit, Store-Identität, Termin, Steuerung und Online-Funktionen anhand offizieller Quellen prüfen.',
    url: PAGE_URL,
    locale: 'de_DE',
    type: 'article',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Dear Passengers PS5 Status für den deutschen Markt' }],
  },
};

const faqs: FaqItem[] = [
  { question: 'Ist Dear Passengers auf PS5?', answer: 'Nein. Eine Dear Passengers PS5 Version wurde nicht angekündigt. Bestätigt sind FLEXUS, Windows-PC, Steam und das Jahr 2026; ein passender PlayStation-Store-Eintrag fehlt.' },
  { question: 'Wann kommt Dear Passengers für PS5?', answer: 'Für Dear Passengers PS5 gibt es keinen Termin. Das Jahr 2026 gehört zum Windows-Produkt und darf nicht auf eine unangekündigte Konsolenfassung übertragen werden.' },
  { question: 'Was kostet Dear Passengers auf PS5?', answer: 'Der Konsolenpreis ist unbekannt, weil weder Produkt noch Vorbestellung existieren. Auch Steam zeigt noch keinen PC-Preis.' },
  { question: 'Unterstützt Dear Passengers DualSense und Crossplay?', answer: 'Dear Passengers PS5 Funktionen wie DualSense, Trophäen, lokaler Koop und Crossplay sind nicht angekündigt. PC-Filmmaterial kann sie nicht bestätigen.' },
];

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Dear Passengers PS5: Release- und Store-Status',
  description: 'Deutscher Quellencheck zu PS5-Verfügbarkeit, PlayStation Store, Termin und Plattformfunktionen.',
  mainEntityOfPage: PAGE_URL, datePublished: '2026-08-26', dateModified: '2026-08-26', inLanguage: 'de-DE',
  author: { '@type': 'Organization', name: 'DearPassengers.net Redaktion', url: 'https://dearpassengers.net/de/ueber-uns/' },
  publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/', logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' } },
  image: 'https://dearpassengers.net/images/og-image.png', citation: [STEAM_URL, PLAYSTATION_URL, OFFICIAL_URL],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers Deutsch', item: 'https://dearpassengers.net/de/' },
    { '@type': 'ListItem', position: 2, name: 'PlayStation-Status', item: 'https://dearpassengers.net/dear-passengers-playstation/' },
    { '@type': 'ListItem', position: 3, name: 'Dear Passengers PS5', item: PAGE_URL },
  ],
};

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };

export default function GermanPS5Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="localized-site localized-site-de">
        <Header locale="de" languageHref="/dear-passengers-ps5/" />
        <main id="main-content" className="steam-guide-page" lang="de">
          <article>
            <header className="article-hero steam-article-hero">
              <Image src="/images/release-date.webp" alt="Flugmotiv zum Dear Passengers PS5 Status" fill sizes="100vw" priority />
              <div className="hero-shade" />
              <div className="container article-hero-content steam-hero-content">
                <nav className="breadcrumbs" aria-label="Brotkrümelnavigation"><Link href="/de/">Deutsch</Link><span>/</span><Link href="/dear-passengers-playstation/" hrefLang="en">PlayStation</Link><span>/</span><span>PS5</span></nav>
                <div className="steam-hero-grid">
                  <div className="steam-hero-copy">
                    <div className="eyebrow"><span>●</span> PS5-CHECK · NICHT ANGEKÜNDIGT</div>
                    <h1>Dear Passengers PS5:<br /><em>Release- und Store-Status</em></h1>
                    <p><strong>Dear Passengers PS5 ist nicht bestätigt.</strong> FLEXUS nennt Windows-PC und 2026. Für PlayStation 5 fehlen Produktseite, Termin, Preis und spielbare Version.</p>
                    <a className="button" href={PLAYSTATION_URL} target="_blank" rel="noopener noreferrer">PlayStation Store prüfen ↗</a>
                    <div className="article-meta"><span>26. August 2026</span><span>PC bestätigt</span><span>PS5 offen</span></div>
                  </div>
                  <dl className="steam-identity-board" aria-label="Dear Passengers PS5 Kurzstatus">
                    <div><dt>Steam</dt><dd>Windows</dd><small>App 4534960</small></div><div><dt>PS5</dt><dd>Offen</dd><small>Keine Produktseite</small></div>
                    <div><dt>Termin</dt><dd>Unbekannt</dd><small>2026 gilt für PC</small></div><div><dt>Zugriff</dt><dd>Keiner</dd><small>Keine Vorbestellung</small></div>
                  </dl>
                </div>
              </div>
            </header>

            <div className="container article-layout">
              <aside className="article-toc" aria-label="Inhalt"><p>PS5-STATUS</p><a href="#antwort">Kurzantwort</a><a href="#store">Store-Prüfung</a><a href="#funktionen">PS5-Funktionen</a><a href="#faq">FAQ</a><a href="#quellen">Quellen</a></aside>
              <div className="article-prose prose">
                <EditorialNote checked="26. August 2026" locale="de" note="Nicht angekündigt bedeutet weder abgesagt noch versprochen. Entscheidend sind FLEXUS und ein offizieller PlayStation-Eintrag." />
                <section id="antwort">
                  <span className="kicker">KURZANTWORT</span><h2>Gibt es Dear Passengers auf PS5?</h2>
                  <p className="snippet-answer">Eine Dear Passengers PS5 Ausgabe wurde nicht angekündigt. Steam bestätigt FLEXUS, Windows-PC, Einzelspieler, Online-Koop und 2026. PlayStation 5 wird im offiziellen Produkt nicht genannt; Kauf, Download und Termin fehlen.</p>
                  <p>Interesse an Dear Passengers PS5 ist kein Port-Nachweis. Laut einer wiedergegebenen FAQ entscheidet das Studio noch über Plattformen. Dieser Dear Passengers PS5 Guide trennt die PS5-Frage vom breiteren <Link href="/dear-passengers-playstation/" hrefLang="en">PlayStation-Vergleich</Link>.</p>
                </section>

                <section id="store">
                  <span className="kicker">STORE-IDENTITÄT</span><h2>Dear Passengers PS5 im PlayStation Store prüfen</h2>
                  <p>Eine Dear Passengers PS5 Produktseite muss auf einer Sony-Domain liegen und FLEXUS, Gerät sowie Zugriff nennen. Händler und PC-Videos reichen nicht. Bei der Dear Passengers PS5 Prüfung fehlt der Eintrag.</p>
                  <div className="platform-table" role="table" aria-label="Dear Passengers PS5 Produktstatus">
                    <div className="platform-head" role="row"><span role="columnheader">Feld</span><span role="columnheader">Status</span><span role="columnheader">Beleg</span></div>
                    <div role="row"><strong role="cell">Windows-PC</strong><span className="status-confirmed" role="cell">2026 geplant</span><span role="cell">Steam 4534960</span></div>
                    <div role="row"><strong role="cell">PlayStation 5</strong><span className="status-open" role="cell">Nicht angekündigt</span><span role="cell">Keine Dear Passengers PS5 Seite</span></div>
                    <div role="row"><strong role="cell">Preis / Vorbestellung</strong><span className="status-open" role="cell">Unbekannt</span><span role="cell">Kein Konsolenprodukt</span></div>
                  </div>
                  <p>Das PC-Jahr 2026 ist kein Dear Passengers PS5 Termin. Monat, Preis, PS Plus, Editionen und regionaler Start bleiben unbekannt.</p>
                </section>

                <section id="funktionen">
                  <span className="kicker">PS5-FUNKTIONEN</span><h2>Dear Passengers PS5: DualSense, Trophäen und Koop</h2>
                  <p>Dear Passengers PS5 hat keine bestätigten DualSense-Funktionen. Adaptive Trigger, Haptik, Bewegung, Trophäen, 4K, 60 fps und PS5-Pro-Modus dürfen nicht aus einem PC-Trailer abgeleitet werden.</p>
                  <p>Steam nennt Online-Koop, aber keine Spielerzahl. Dear Passengers PS5 Crossplay, lokaler Koop, Splitscreen und PS Plus brauchen eine Plattformangabe. Eine spätere Ankündigung bestätigt diese Felder nicht automatisch.</p>
                  <ul>
                    <li>Zur Bestätigung müssen Dear Passengers PS5 Store-URL, FLEXUS-Zuordnung, Hardware und Zugriff übereinstimmen.</li>
                    <li>Store-URL, Publisher und PS5-Gerät müssen in einem Sony-Datensatz zusammenpassen.</li>
                    <li>Termin, Preis und Regionen benötigen jeweils ein veröffentlichtes Produktfeld.</li>
                    <li>Controller, Trophäen, Leistung und Netzwerkfunktionen werden getrennt geprüft.</li>
                    <li>Eine Wunschliste auf Steam bleibt die einzige offizielle Aktion und keine Konsolenfreigabe.</li>
                  </ul>
                </section>

                <section id="faq"><span className="kicker">FRAGEN</span><h2>Dear Passengers PS5 FAQ</h2><FAQ items={faqs} /></section>
                <section id="quellen" className="related-guide related-links-panel"><span className="kicker">QUELLEN</span><h2>Dear Passengers PS5 selbst verifizieren</h2>
                  <p><a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam ↗</a> bestätigt das Windows-Produkt. Die <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer">offizielle Spielseite ↗</a> führt dorthin; die <a href={PLAYSTATION_URL} target="_blank" rel="noopener noreferrer">PlayStation-Suche ↗</a> prüft den Sony-Store.</p>
                  <p>Weiter zum <Link href="/de/dear-passengers-release/">deutschen Release-Status</Link>, <Link href="/de/dear-passengers-steam/">Steam-Check</Link> oder <Link href="/dear-passengers-console/" hrefLang="en">Konsolenvergleich</Link>.</p>
                </section>
              </div>
            </div>
          </article>
        </main>
        <Footer locale="de" />
      </div>
    </>
  );
}
