import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/de/dear-passengers-vr/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=german';
const QUEST_URL = 'https://queststoredb.com/game/dear-passengers-vr-1251691901365016/';
const META_URL = 'https://www.meta.com/experiences/1251691901365016/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers VR: Status & Meta-Quest-Eintrag prüfen' },
  description:
    'Dear Passengers VR auf Deutsch prüfen: kein bestätigter FLEXUS-VR-Modus, separater Meta-Quest-Eintrag, Headset-Status und sichere Quellenkontrolle.',
  alternates: {
    canonical: '/de/dear-passengers-vr/',
    languages: {
      en: '/dear-passengers-vr/',
      de: '/de/dear-passengers-vr/',
      es: '/es/dear-passengers-vr/',
      ru: '/ru/dear-passengers-vr/',
      'x-default': '/dear-passengers-vr/',
    },
  },
  openGraph: {
    title: 'Dear Passengers VR: Deutscher Status- und Identitätscheck',
    description: 'FLEXUS-PC-Spiel und gleichnamigen Quest-Datensatz anhand von Publisher und App-ID unterscheiden.',
    url: PAGE_URL,
    locale: 'de_DE',
    type: 'article',
    images: [{ url: '/images/dear-passengers-unity-flight.webp', width: 1920, height: 1024, alt: 'Dear Passengers VR Statuscheck mit offiziellem FLEXUS-Flugmotiv' }],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Ist Dear Passengers VR offiziell bestätigt?',
    answer: 'Nein. Dear Passengers VR wurde von FLEXUS nicht angekündigt. Steam-App 4534960 nennt Windows-PC, aber weder SteamVR noch ein unterstütztes Headset.',
  },
  {
    question: 'Kann man Dear Passengers VR auf Meta Quest spielen?',
    answer: 'Für das FLEXUS-Spiel gibt es keinen bestätigten Quest-Build. Ein separater Dear Passengers VR Datensatz nennt Fun Land Games und Meta-ID 1251691901365016; eine Verbindung zu FLEXUS ist nicht belegt.',
  },
  {
    question: 'Hat Dear Passengers VR Bewegungssteuerung?',
    answer: 'Bewegungscontroller, Handtracking, Sitzmodus und Komfortoptionen sind für Dear Passengers VR nicht angekündigt. Die Ego-Perspektive im Trailer ist kein Steuerungsnachweis.',
  },
  {
    question: 'Wann erscheint Dear Passengers VR?',
    answer: 'FLEXUS hat keinen Dear Passengers VR Termin veröffentlicht. Das Windows-Spiel hat nur das Release-Fenster 2026; Daten des separaten Quest-Eintrags gelten nicht für Steam 4534960.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers VR: Status und Meta-Quest-Eintrag prüfen',
  description: 'Deutscher Quellencheck zu VR-Unterstützung, Headsets und einem gleichnamigen Quest-Datensatz.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-08-21',
  dateModified: '2026-08-21',
  inLanguage: 'de',
  author: { '@type': 'Organization', name: 'DearPassengers.net Redaktion', url: 'https://dearpassengers.net/de/ueber-uns/' },
  publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/', logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' } },
  image: 'https://dearpassengers.net/images/dear-passengers-unity-flight.webp',
  citation: [STEAM_URL, QUEST_URL, META_URL],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers Deutsch', item: 'https://dearpassengers.net/de/' },
    { '@type': 'ListItem', position: 2, name: 'Plattformen', item: 'https://dearpassengers.net/dear-passengers-platforms/' },
    { '@type': 'ListItem', position: 3, name: 'Dear Passengers VR', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

export default function GermanDearPassengersVrPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="localized-site localized-site-de">
        <Header locale="de" languageHref="/dear-passengers-vr/" />
        <main id="main-content" className="steam-guide-page" lang="de">
          <article>
            <header className="article-hero steam-article-hero">
              <Image src="/images/dear-passengers-unity-flight.webp" alt="Offizielles FLEXUS-Flugmotiv im Dear Passengers VR Faktencheck" fill sizes="100vw" priority />
              <div className="hero-shade" />
              <div className="container article-hero-content steam-hero-content">
                <nav className="breadcrumbs" aria-label="Brotkrümelnavigation"><Link href="/de/">Deutsch</Link><span>/</span><Link href="/dear-passengers-platforms/" hrefLang="en">Plattformen</Link><span>/</span><span>VR</span></nav>
                <div className="steam-hero-grid">
                  <div className="steam-hero-copy">
                    <div className="eyebrow"><span>●</span> VR-STATUS · IDENTITÄTSPRÜFUNG</div>
                    <h1>Dear Passengers VR:<br /><em>Support und Quest-Eintrag erklärt</em></h1>
                    <p><strong>Dear Passengers VR ist für das FLEXUS-Spiel nicht bestätigt.</strong> Steam nennt nur Windows-PC. Ein gleichnamiger Quest-Datensatz gehört laut Archiv zu Fun Land Games. Dieser Guide trennt beide Produkte.</p>
                    <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">FLEXUS-Spiel auf Steam prüfen ↗</a>
                    <div className="article-meta"><span>21. August 2026</span><span>Steam-App 4534960</span><span>VR: nicht angekündigt</span></div>
                  </div>
                  <dl className="steam-identity-board" aria-label="Dear Passengers VR Kurzstatus">
                    <div><dt>FLEXUS</dt><dd>Windows</dd><small>Steam 4534960</small></div>
                    <div><dt>VR-Feld</dt><dd>Fehlt</dd><small>Kein SteamVR-Support</small></div>
                    <div><dt>Quest-Eintrag</dt><dd>Separat</dd><small>Fun Land Games</small></div>
                    <div><dt>Prüfung</dt><dd>App-ID</dd><small>Publisher abgleichen</small></div>
                  </dl>
                </div>
              </div>
            </header>

            <div className="container article-layout">
              <aside className="article-toc" aria-label="Inhalt"><p>VR-CHECK</p><a href="#antwort">Kurzantwort</a><a href="#vergleich">Produktvergleich</a><a href="#hardware">Headsets</a><a href="#faq">FAQ</a><a href="#quellen">Quellen</a></aside>
              <div className="article-prose prose">
                <EditorialNote checked="21. August 2026" locale="de" note="Gleicher Titel bedeutet nicht gleicher Publisher. Wir übernehmen keine Quest-Daten in das FLEXUS-Spiel." />

                <section id="antwort">
                  <span className="kicker">KURZANTWORT</span>
                  <h2>Ist Dear Passengers VR ein VR-Spiel?</h2>
                  <p className="snippet-answer">Dear Passengers VR wurde von FLEXUS nicht angekündigt. Der offizielle Steam-Eintrag 4534960 bestätigt Windows-PC, Einzelspieler und Online-Koop. SteamVR, VR Only und unterstützte Headsets fehlen. Ego-Cockpit und sichtbare Hände beweisen keinen offiziellen VR-Modus.</p>
                </section>

                <section id="vergleich">
                  <span className="kicker">PRODUKTIDENTITÄT</span>
                  <h2>FLEXUS-Spiel und Dear Passengers VR Quest-Eintrag</h2>
                  <p>Das FLEXUS-Spiel führt zu Steam 4534960 und hat nur Windows-Anforderungen. Der Quest-Datensatz nennt dagegen Fun Land Games, Quest 2/Pro sowie Quest 3/3S und einen Basispreis von 6,99 US-Dollar. Diese Angaben gehören nicht zum PC-Spiel.</p>
                  <p>Der verlinkte Meta-Shop zeigt derzeit „Diese Seite ist nicht verfügbar“. Deshalb bestätigt er weder Kauf noch Release. Der Archivdatensatz dokumentiert nur eine frühere Listung; er beweist keine FLEXUS-Verbindung und keinen offiziellen VR-Port.</p>
                  <div className="platform-table" role="table" aria-label="Dear Passengers VR Produktvergleich">
                    <div className="platform-head" role="row"><span role="columnheader">Produkt</span><span role="columnheader">Publisher</span><span role="columnheader">Status</span></div>
                    <div role="row"><strong role="cell">Dear Passengers · Steam 4534960</strong><span role="cell">FLEXUS</span><span className="status-confirmed" role="cell">Windows bestätigt</span></div>
                    <div role="row"><strong role="cell">Dear Passengers VR · Meta 1251691901365016</strong><span role="cell">Fun Land Games</span><span className="status-open" role="cell">Separater Datensatz</span></div>
                  </div>
                </section>

                <section id="hardware">
                  <span className="kicker">HEADSET-STATUS</span>
                  <h2>Dear Passengers VR mit Quest, SteamVR oder PS VR2?</h2>
                  <p>Für das FLEXUS-Spiel gibt es keine offizielle Headset-Liste. Quest Link macht aus einem normalen Windows-Spiel keinen VR-Build. Motion Controller, Handtracking, Sitzmodus, Snap Turn und Komfortoptionen bleiben unbekannt.</p>
                </section>

                <section id="faq"><span className="kicker">FRAGEN</span><h2>Dear Passengers VR FAQ</h2><FAQ items={faqs} /></section>

                <section id="quellen" className="related-guide related-links-panel">
                  <span className="kicker">QUELLEN</span><h2>Dear Passengers VR selbst prüfen</h2>
                  <p>Dear Passengers VR lässt sich mit diesen Quellen prüfen: <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam ↗</a> bestätigt FLEXUS und Windows. Das <a href={QUEST_URL} target="_blank" rel="noopener noreferrer">Quest-Archiv ↗</a> nennt Fun Land Games; die <a href={META_URL} target="_blank" rel="noopener noreferrer">Meta-Seite ↗</a> ist nicht verfügbar.</p>
                  <p>Weiter zum <Link href="/dear-passengers-platforms/" hrefLang="en">Plattform-Überblick</Link>, zum <Link href="/de/dear-passengers-steam/">deutschen Steam-Check</Link> oder zum <Link href="/de/dear-passengers-bestaetigte-features/">Faktenboard</Link>. Dieser Guide bleibt auf Headsets und Produktidentität begrenzt.</p>
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
