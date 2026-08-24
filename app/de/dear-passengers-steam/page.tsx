import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/de/dear-passengers-steam/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=german';
const STEAM_NEWS_URL = 'https://store.steampowered.com/news/app/4534960/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Steam: Offizielle Seite & App-ID 4534960' },
  description:
    'Dear Passengers Steam auf Deutsch prüfen: offizielle App-ID 4534960, Wunschliste, Release-Fenster 2026, Demo-Status und deutscher Sprachsupport.',
  alternates: {
    canonical: '/de/dear-passengers-steam/',
    languages: {
      en: '/dear-passengers-steam/',
      de: '/de/dear-passengers-steam/',
      tr: '/tr/dear-passengers-steam/',
      'zh-CN': '/zh-cn/dear-passengers-steam/',
      'x-default': '/dear-passengers-steam/',
    },
  },
  openGraph: {
    title: 'Dear Passengers Steam: Offizielle App-ID und Store-Status',
    description: 'Die offizielle Steam-Seite sicher erkennen und bestätigte Angaben von offenen Punkten trennen.',
    url: PAGE_URL,
    siteName: 'DearPassengers.net',
    locale: 'de_DE',
    alternateLocale: ['en_US', 'tr_TR', 'zh_CN'],
    type: 'article',
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Dear Passengers Steam Faktencheck zur offiziellen Store-Seite',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers Steam: App-ID, Wunschliste und Status',
    description: 'Offiziellen Store-Eintrag 4534960 prüfen und offene Angaben erkennen.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Ist Dear Passengers auf Steam?',
    answer:
      'Ja. Der offizielle Treffer für „Dear Passengers Steam“ ist App 4534960 von FLEXUS. Auf der Store-Seite kann man den Titel derzeit auf die Wunschliste setzen, ihm folgen oder ihn ignorieren; kaufen oder installieren lässt er sich noch nicht.',
  },
  {
    question: 'Wann kommt Dear Passengers auf Steam raus?',
    answer:
      'Für Dear Passengers Steam ist bislang nur das Veröffentlichungsjahr 2026 angegeben. Monat, Tag, Preis, Vorverkauf und Preload sind nicht genannt.',
  },
  {
    question: 'Gibt es eine Dear Passengers Steam Demo?',
    answer:
      'Derzeit nicht. Dear Passengers Steam zeigt aktuell weder einen Demo- noch einen Playtest-Button; dafür ist auch kein Termin angekündigt.',
  },
  {
    question: 'Unterstützt Dear Passengers Deutsch?',
    answer:
      'Nein. Deutsch steht in der aktuellen Sprachenliste nicht als unterstützte Sprache.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers Steam: Offizielle Seite und App-ID 4534960',
  description: 'Deutschsprachiger Faktencheck zum offiziellen Steam-Eintrag, Wunschlistenstatus und Release-Fenster.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-08-20',
  dateModified: '2026-08-20',
  inLanguage: 'de',
  author: {
    '@type': 'Organization',
    name: 'DearPassengers.net Redaktion',
    url: 'https://dearpassengers.net/de/ueber-uns/',
  },
  publisher: {
    '@type': 'Organization',
    name: 'DearPassengers.net',
    url: 'https://dearpassengers.net/',
    logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' },
  },
  image: 'https://dearpassengers.net/images/og-image.png',
  citation: [STEAM_URL, STEAM_NEWS_URL],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers auf Deutsch', item: 'https://dearpassengers.net/de/' },
    { '@type': 'ListItem', position: 2, name: 'Dear Passengers Spiel', item: 'https://dearpassengers.net/de/dear-passengers-spiel/' },
    { '@type': 'ListItem', position: 3, name: 'Dear Passengers Steam', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function GermanSteamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="localized-site localized-site-de">
        <Header locale="de" languageHref="/dear-passengers-steam/" />

        <main id="main-content" className="steam-guide-page" lang="de">
          <article>
            <header className="article-hero steam-article-hero">
              <Image
                src="/images/dear-passengers-unity-flight.webp"
                alt="Offizielles FLEXUS-Motiv für den Dear Passengers Steam Store-Faktencheck"
                fill
                sizes="100vw"
                priority
              />
              <div className="hero-shade" />
              <div className="container article-hero-content steam-hero-content">
                <nav className="breadcrumbs" aria-label="Brotkrümelnavigation">
                  <Link href="/de/">Deutscher Guide</Link><span>/</span>
                  <Link href="/de/dear-passengers-spiel/">Spiel</Link><span>/</span><span>Dear Passengers Steam</span>
                </nav>

                <div className="steam-hero-grid">
                  <div className="steam-hero-copy">
                    <div className="eyebrow"><span>●</span> STORE-CHECK · APP 4534960</div>
                    <h1>Dear Passengers Steam:<br /><em>Offizielle Seite und aktueller Status</em></h1>
                    <p>
                      Der offizielle Treffer für <strong>„Dear Passengers Steam“</strong> ist App 4534960 von FLEXUS. Der Titel ist
                      unveröffentlicht. Auf der Store-Seite kann man ihn auf die Wunschliste setzen, ihm folgen oder
                      ihn ignorieren; kaufen oder installieren lässt er sich noch nicht. Bestätigt ist bislang nur
                      das Jahr 2026. Preis, genauer Termin und Demo sind nicht angegeben.
                    </p>
                    <div className="hero-actions">
                      <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">
                        Offizielle Steam-Seite öffnen ↗
                      </a>
                    </div>
                    <p className="storefront-disclosure">Direkter offizieller Link · kein Affiliate-Tracking</p>
                    <div className="article-meta">
                      <span>Geprüft am 20.08.2026</span><span>Quelle: Steam</span><span>Aktion: Wunschliste</span>
                    </div>
                  </div>

                  <dl className="steam-identity-board" aria-label="Offizieller Dear Passengers Steam Eintrag">
                    <div><dt>App-ID</dt><dd>4534960</dd><small>Offizieller Produkteintrag</small></div>
                    <div><dt>Studio</dt><dd>FLEXUS</dd><small>Entwickler/Publisher</small></div>
                    <div><dt>Plattform</dt><dd>Windows-PC</dd><small>Auf Steam bestätigt</small></div>
                    <div><dt>Zugriff</dt><dd>Wunschliste</dd><small>Noch nicht veröffentlicht</small></div>
                  </dl>
                </div>
              </div>
            </header>

            <div className="container article-layout">
              <aside className="article-toc" aria-label="Inhalt">
                <p>STORE-PRÜFUNG</p>
                <a href="#antwort">Direkte Antwort</a>
                <a href="#pruefen">App-ID prüfen</a>
                <a href="#sprache">Release und Sprachsupport</a>
                <a href="#faq">FAQ</a>
                <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Auf Steam prüfen ↗</a>
              </aside>

              <div className="article-prose prose">
                <EditorialNote
                  locale="de"
                  checked="20.08.2026"
                  note="Diese Seite beantwortet nur die deutsche Store-Suche. Termin, Demo, Download und PC-Anforderungen bleiben eigenständige Prüfthemen."
                />

                <section id="antwort">
                  <span className="kicker">DIREKTE ANTWORT</span>
                  <h2>Ist Dear Passengers Steam offiziell?</h2>
                  <p className="snippet-answer">
                    <strong>Ja. Der offizielle Treffer für „Dear Passengers Steam“ ist App 4534960.</strong> Im Eintrag nennt Steam
                    FLEXUS als Entwickler und Publisher. Für <strong>Dear Passengers Steam</strong> sind zurzeit die
                    Aktionen „Auf die Wunschliste“, „Folgen“ und „Ignorieren“ verfügbar. Einen Kauf- oder
                    Installationsbutton gibt es noch nicht. Als Release-Fenster nennt der Store 2026, aber weder
                    Monat noch Tag.
                  </p>
                  <div className="status-grid">
                    <div className="fact-callout">
                      <span>BESTÄTIGT</span><strong>Dear Passengers Steam</strong>
                      <ul><li>App-ID 4534960</li><li>Windows-PC · Wunschliste · 2026</li></ul>
                    </div>
                    <div className="fact-callout unknown-callout">
                      <span>NOCH NICHT ANGEGEBEN</span><strong>Dear Passengers Steam</strong>
                      <ul><li>Tag, Preis und Kauf</li><li>Demo, Playtest und Deck-Status</li></ul>
                    </div>
                  </div>
                </section>

                <section id="pruefen">
                  <span className="kicker">SICHER ERKENNEN</span>
                  <h2>Dear Passengers Steam App-ID prüfen</h2>
                  <p>
                    Die URL muss <code>/app/4534960/</code> enthalten und FLEXUS als Entwickler und Publisher nennen.
                    Download-Portale sowie Crack-, Torrent-, Keygen- oder APK-Dateien gehören nicht zum offiziellen
                    Vertrieb. Solange der Installationsbutton für <strong>Dear Passengers Steam</strong> fehlt, gibt es
                    über Steam keinen regulären Download; Dateien von Drittseiten ändern daran nichts. Details stehen im
                    <Link href="/de/dear-passengers-download/"> Download-Check</Link>.
                  </p>
                </section>

                <section id="sprache">
                  <span className="kicker">DEAR PASSENGERS STEAM · LOKALER SUCHKONTEXT</span>
                  <h2>Welche Angaben macht der Store zu Release und deutschem Sprachsupport?</h2>
                  <p>
                    Deutsch ist in der aktuellen Sprachenliste des Stores nicht als unterstützte Sprache aufgeführt.
                    Für Dear Passengers Steam werden derzeit sechs Oberflächensprachen angegeben, darunter Englisch,
                    Türkisch und vereinfachtes Chinesisch. Das kann sich ändern, ist aber nicht zugesagt. Mehr Einordnung
                    bieten der <Link href="/de/dear-passengers-release/">Release-Check</Link>, der
                    <Link href="/de/dear-passengers-demo/"> Demo-Status</Link> und die
                    <Link href="/de/dear-passengers-systemanforderungen/"> PC-Anforderungen</Link>.
                  </p>
                </section>

                <section id="faq">
                  <span className="kicker">HÄUFIGE SUCHFRAGEN</span>
                  <h2>Dear Passengers Steam FAQ</h2>
                  <FAQ items={faqs} />
                </section>

                <section id="sources">
                  <span className="kicker">PRIMÄRQUELLEN</span>
                  <h2>Quellen zu Dear Passengers Steam direkt prüfen</h2>
                  <ul>
                    <li><a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Offizieller Store-Eintrag 4534960 ↗</a></li>
                    <li><a href={STEAM_NEWS_URL} target="_blank" rel="noopener noreferrer">Offizielle FLEXUS-Meldungen auf Steam ↗</a></li>
                  </ul>
                </section>

                <section className="related-guide steam-related-guide">
                  <span className="kicker">WEITER PRÜFEN</span>
                  <h2>Weitere Informationen zu Dear Passengers Steam</h2>
                  <div className="related-actions">
                    <Link className="button" href="/de/">Deutscher Überblick →</Link>
                    <Link className="button button-ghost" href="/de/dear-passengers-spiel/">Dear Passengers Steam Spielprofil mit allen wichtigen Grundlagen im Überblick →</Link>
                    <Link className="button button-ghost" href="/de/dear-passengers-release/">Release 2026 →</Link>
                    <Link className="button button-ghost" href="/de/dear-passengers-switch/">Nintendo Switch →</Link>
                    <Link className="button button-ghost" href="/de/dear-passengers-demo/">Demo →</Link>
                    <Link className="button button-ghost" href="/de/dear-passengers-download/">Download →</Link>
                    <Link className="button button-ghost" href="/de/dear-passengers-systemanforderungen/">Systemanforderungen →</Link>
                  </div>
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
