import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/de/dear-passengers-switch/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=german';
const NINTENDO_URL = 'https://www.nintendo.com/de-de/Suche/Search-299117.html?q=Dear%20Passengers';
const OFFICIAL_SITE_URL = 'https://dearpassengers.game/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Switch: Nintendo- und Switch-2-Status' },
  description:
    'Dear Passengers Switch auf Deutsch prüfen: Nintendo Switch, Switch 2, eShop, Release, Handheld-Modus, Koop und offizielle Quellen.',
  alternates: {
    canonical: '/de/dear-passengers-switch/',
    languages: {
      en: '/dear-passengers-switch/',
      de: '/de/dear-passengers-switch/',
      'x-default': '/dear-passengers-switch/',
    },
  },
  openGraph: {
    title: 'Dear Passengers Switch: Deutscher Nintendo-Status',
    description: 'Nintendo-Store, Switch 2, Handheld-Spiel und Koop anhand offizieller Produktdaten prüfen.',
    url: PAGE_URL,
    locale: 'de_DE',
    type: 'article',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Dear Passengers Switch Status für Nintendo-Konsolen' }],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Ist Dear Passengers auf Nintendo Switch?',
    answer: 'Nein. Eine Dear Passengers Switch Version wurde nicht angekündigt. Bestätigt ist nur Windows-PC über Steam; ein passender Nintendo-eShop-Eintrag fehlt.',
  },
  {
    question: 'Kommt Dear Passengers für Switch 2?',
    answer: 'Dear Passengers Switch 2 Support ist nicht angekündigt. Neue Hardware übernimmt weder eine unbestätigte Version noch das Release-Jahr der PC-Ausgabe.',
  },
  {
    question: 'Wann erscheint Dear Passengers für Nintendo?',
    answer: 'Für Dear Passengers Switch gibt es keinen Termin. Das Jahr 2026 auf Steam gilt für Windows und darf nicht auf eine unangekündigte Nintendo-Version übertragen werden.',
  },
  {
    question: 'Gibt es lokalen Koop auf Switch?',
    answer: 'Lokaler Koop und Splitscreen sind nicht bestätigt. Eine Nintendo-Version müsste diese Spielmodi in einer offiziellen Produktseite ausdrücklich nennen.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers Switch: Nintendo- und Switch-2-Status',
  description: 'Deutscher Quellencheck zu Nintendo-Hardware, eShop, Handheld-Spiel und Koop.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-08-24',
  dateModified: '2026-08-24',
  inLanguage: 'de',
  author: { '@type': 'Organization', name: 'DearPassengers.net Redaktion', url: 'https://dearpassengers.net/de/ueber-uns/' },
  publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/', logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' } },
  image: 'https://dearpassengers.net/images/og-image.png',
  citation: [STEAM_URL, NINTENDO_URL, OFFICIAL_SITE_URL],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers Deutsch', item: 'https://dearpassengers.net/de/' },
    { '@type': 'ListItem', position: 2, name: 'Konsolenstatus', item: 'https://dearpassengers.net/dear-passengers-console/' },
    { '@type': 'ListItem', position: 3, name: 'Dear Passengers Switch', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

export default function GermanSwitchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="localized-site localized-site-de">
        <Header locale="de" languageHref="/dear-passengers-switch/" />
        <main id="main-content" className="steam-guide-page" lang="de">
          <article>
            <header className="article-hero steam-article-hero">
              <Image src="/images/release-date.webp" alt="Flugmotiv zum Dear Passengers Switch Nintendo-Status" fill sizes="100vw" priority />
              <div className="hero-shade" />
              <div className="container article-hero-content steam-hero-content">
                <nav className="breadcrumbs" aria-label="Brotkrümelnavigation"><Link href="/de/">Deutsch</Link><span>/</span><Link href="/dear-passengers-console/" hrefLang="en">Konsolen</Link><span>/</span><span>Nintendo</span></nav>
                <div className="steam-hero-grid">
                  <div className="steam-hero-copy">
                    <div className="eyebrow"><span>●</span> NINTENDO-CHECK · NICHT ANGEKÜNDIGT</div>
                    <h1>Dear Passengers Switch:<br /><em>Nintendo- und Switch-2-Status</em></h1>
                    <p><strong>Dear Passengers Switch ist nicht bestätigt.</strong> FLEXUS nennt Windows-PC und 2026. Für Nintendo fehlen Store-Eintrag, Termin und spielbare Version.</p>
                    <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Offiziellen PC-Eintrag prüfen ↗</a>
                    <div className="article-meta"><span>24. August 2026</span><span>PC bestätigt</span><span>Nintendo offen</span></div>
                  </div>
                  <dl className="steam-identity-board" aria-label="Dear Passengers Switch Kurzstatus">
                    <div><dt>Steam</dt><dd>Windows</dd><small>App 4534960</small></div>
                    <div><dt>Switch</dt><dd>Offen</dd><small>Kein eShop-Eintrag</small></div>
                    <div><dt>Switch 2</dt><dd>Offen</dd><small>Keine Ankündigung</small></div>
                    <div><dt>Termin</dt><dd>Unbekannt</dd><small>2026 gilt für PC</small></div>
                  </dl>
                </div>
              </div>
            </header>

            <div className="container article-layout">
              <aside className="article-toc" aria-label="Inhalt"><p>NINTENDO-STATUS</p><a href="#antwort">Kurzantwort</a><a href="#shop">eShop-Prüfung</a><a href="#handheld">Handheld & Koop</a><a href="#faq">FAQ</a><a href="#quellen">Quellen</a></aside>
              <div className="article-prose prose">
                <EditorialNote checked="24. August 2026" locale="de" note="Nicht angekündigt bedeutet weder abgesagt noch versprochen. Entscheidend sind FLEXUS und ein offizieller Nintendo-Eintrag." />

                <section id="antwort">
                  <span className="kicker">KURZANTWORT</span>
                  <h2>Kommt Dear Passengers für Nintendo Switch?</h2>
                  <p className="snippet-answer">Eine Dear Passengers Switch Ausgabe wurde nicht angekündigt. Steam bestätigt FLEXUS, Windows-PC und das Jahr 2026. Nintendo Switch, Switch 2 und eShop werden dort nicht genannt. Daher gibt es keinen Kauf, Download oder Termin.</p>
                  <p>Suchanfragen nach Dear Passengers Switch zeigen Interesse, aber keine Zusage. FLEXUS hat einen Nintendo-Port weder ausgeschlossen noch versprochen. Dieser Dear Passengers Switch Guide beantwortet die Nintendo-Frage.</p>
                </section>

                <section id="shop">
                  <span className="kicker">STORE-PRÜFUNG</span>
                  <h2>Dear Passengers Switch im Nintendo eShop prüfen</h2>
                  <p>Eine Dear Passengers Switch Produktseite muss auf einer Nintendo-Domain liegen und FLEXUS zuordnen. Händler, ROM-Angebote und PC-Material reichen nicht. Bei der Dear Passengers Switch Prüfung fehlt dieser Eintrag.</p>
                  <div className="platform-table" role="table" aria-label="Dear Passengers Nintendo Produktstatus">
                    <div className="platform-head" role="row"><span role="columnheader">Produkt</span><span role="columnheader">Status</span><span role="columnheader">Beleg</span></div>
                    <div role="row"><strong role="cell">Windows-PC</strong><span className="status-confirmed" role="cell">2026 geplant</span><span role="cell">Steam 4534960</span></div>
                    <div role="row"><strong role="cell">Nintendo Switch</strong><span className="status-open" role="cell">Nicht angekündigt</span><span role="cell">Keine Dear Passengers Switch Seite</span></div>
                    <div role="row"><strong role="cell">Nintendo Switch 2</strong><span className="status-open" role="cell">Nicht angekündigt</span><span role="cell">Kein Hardware-Eintrag</span></div>
                  </div>
                  <p>Das PC-Jahr 2026 ist kein Dear Passengers Switch Release-Fenster. Preis, Dateigröße, Regionen und Nintendo Switch Online bleiben unbekannt.</p>
                </section>

                <section id="handheld">
                  <span className="kicker">NUTZUNGSSZENARIO</span>
                  <h2>Dear Passengers Switch als Handheld und Koop-Spiel?</h2>
                  <p>Dear Passengers Switch klingt nach mobilem Spielen, doch Auflösung, Akkulaufzeit, Lesbarkeit und Offline-Modus lassen sich aus dem PC-Trailer nicht ableiten. Switch 2 ändert diesen Standard nicht.</p>
                  <p>Dear Passengers Switch auf Steam nennt Einzelspieler und Online-Koop. Splitscreen, Joy-Con-Spiel, Spielerzahl und Crossplay bleiben offen und brauchen ein echtes Produktblatt.</p>
                  <p>Zur Bestätigung müssen FLEXUS-Meldung, offizielle eShop-URL, Publisher, Gerät und Zugriffsstatus übereinstimmen.</p>
                </section>

                <section id="faq"><span className="kicker">FRAGEN</span><h2>Dear Passengers Switch FAQ</h2><FAQ items={faqs} /></section>

                <section id="quellen" className="related-guide related-links-panel">
                  <span className="kicker">QUELLEN</span><h2>Dear Passengers Switch selbst verifizieren</h2>
                  <p><a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam ↗</a> bestätigt FLEXUS und Windows. Die <a href={OFFICIAL_SITE_URL} target="_blank" rel="noopener noreferrer">Produktseite ↗</a> führt zu Steam; die <a href={NINTENDO_URL} target="_blank" rel="noopener noreferrer">Nintendo-Suche ↗</a> prüft den Store.</p>
                  <p>Weiter zum <Link href="/de/dear-passengers-release/">Release-Status</Link>, <Link href="/de/dear-passengers-steam/">Steam-Check</Link> oder <Link href="/dear-passengers-console/" hrefLang="en">Konsolenvergleich</Link>.</p>
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
