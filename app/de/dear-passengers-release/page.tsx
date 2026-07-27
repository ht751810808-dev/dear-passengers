import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=german';
const DOU_RELEASE_INTERVIEW = 'https://gamedev.dou.ua/articles/dear-passengers-interview/';
const DOU_STUDIO_INTERVIEW = 'https://gamedev.dou.ua/articles/flexus-games-interview/';
const PAGE_URL = 'https://dearpassengers.net/de/dear-passengers-release/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Release: Wann kommt das Koop-Spiel raus?' },
  description:
    'Der Dear Passengers Release ist für 2026 auf Steam geplant. Bestätigte Infos zu Termin, Demo, Plattformen, deutscher Sprache und Online-Koop.',
  alternates: {
    canonical: '/de/dear-passengers-release/',
    languages: {
      en: '/dear-passengers-release-date/',
      ar: '/ar/dear-passengers-release/',
      de: '/de/dear-passengers-release/',
      tr: '/tr/dear-passengers-cikis-tarihi/',
      'zh-CN': '/zh-cn/dear-passengers-release-date/',
      'x-default': '/dear-passengers-release-date/',
    },
  },
  openGraph: {
    title: 'Dear Passengers Release: Termin, Demo und Plattformen',
    description:
      'Wann kommt Dear Passengers raus? Der deutschsprachige Faktencheck zum Release 2026, zur Demo und zu allen bestätigten Plattformen.',
    url: PAGE_URL,
    siteName: 'DearPassengers.net',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dear Passengers Release Guide für 2026',
      },
    ],
    locale: 'de_DE',
    alternateLocale: ['en_US', 'zh_CN'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers Release: Wann kommt das Spiel raus?',
    description: 'Bestätigte Angaben zu Release, Demo, Plattformen, Sprache und Koop.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Wann kommt Dear Passengers raus?',
    answer:
      'Steam nennt für den Dear Passengers Release weiterhin das Jahr 2026. Ein genauer Tag oder Monat ist nicht angekündigt. FLEXUS-Gründer Semen Kozyura bestätigte in einem Interview das Ziel, das Spiel 2026 zu veröffentlichen, betonte aber zugleich, dass die Qualität Vorrang vor einem übereilten Termin hat.',
  },
  {
    question: 'Gibt es schon einen genauen Dear Passengers Release-Termin?',
    answer:
      'Nein. Auf Steam steht nur 2026. Eine frühere Interviewaussage nannte ungefähr den Herbst als Ziel, ist aber kein verbindlicher Store-Termin. Solange FLEXUS keinen Tag und keinen Monat veröffentlicht, bleibt jede genauere Datumsangabe unbestätigt.',
  },
  {
    question: 'Erscheint Dear Passengers auf Deutsch?',
    answer:
      'Eine deutsche Benutzeroberfläche ist derzeit nicht angekündigt. Steam listet Englisch, Arabisch, vereinfachtes Chinesisch, Türkisch, Ukrainisch und Japanisch als Oberflächensprachen. Deutsch ist in der offiziellen Sprachentabelle ausdrücklich nicht unterstützt.',
  },
  {
    question: 'Wird es eine Dear Passengers Demo geben?',
    answer:
      'Ja, eine Demo ist als Plan bestätigt. FLEXUS sprach über eine Gamescom-Fassung und eine spätere öffentliche Demo. Auf Steam gibt es aktuell jedoch keinen Download-Button, kein Playtest-Formular und keinen bestätigten Veröffentlichungstag für die Demo.',
  },
  {
    question: 'Kommt Dear Passengers für PS5 oder Xbox?',
    answer:
      'Bislang nicht bestätigt. Windows-PC über Steam ist die einzige offiziell genannte Plattform. Es gibt weder einen PlayStation- noch einen Xbox-Storeeintrag und auch keine Ankündigung für Nintendo Switch, Mac oder Linux.',
  },
  {
    question: 'Kann man Dear Passengers allein spielen?',
    answer:
      'Ja. Steam führt Einzelspieler und Online-Koop auf. Wie die verschiedenen Aufgaben beim Solospiel verteilt oder unterstützt werden, hat FLEXUS noch nicht im Detail erklärt.',
  },
  {
    question: 'Wie viele Spieler unterstützt Dear Passengers?',
    answer:
      'Eine maximale Spielerzahl ist noch nicht offiziell veröffentlicht. Der Trailer zeigt mehrere Besatzungsmitglieder, doch daraus lässt sich keine verlässliche Lobbygröße ableiten. Auch Crossplay und lokaler Koop sind nicht bestätigt.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers Release: Wann kommt das Koop-Spiel raus?',
  description: 'Deutschsprachiger Faktencheck zum Dear Passengers Release 2026, zur Demo und zu den Plattformen.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-07-24',
  dateModified: '2026-07-24',
  inLanguage: 'de',
  author: {
    '@type': 'Organization',
    name: 'DearPassengers.net Redaktion',
    url: 'https://dearpassengers.net/about/',
  },
  publisher: {
    '@type': 'Organization',
    name: 'DearPassengers.net',
    url: 'https://dearpassengers.net/',
    logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' },
  },
  image: 'https://dearpassengers.net/images/og-image.png',
  isPartOf: { '@type': 'WebSite', name: 'DearPassengers.net', url: 'https://dearpassengers.net/' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers auf Deutsch', item: 'https://dearpassengers.net/de/' },
    { '@type': 'ListItem', position: 2, name: 'Dear Passengers Release auf Deutsch', item: PAGE_URL },
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

export default function GermanReleasePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header locale="de" languageHref="/dear-passengers-release-date/" />

      <main id="main-content" lang="de">
        <article>
          <header className="article-hero">
            <Image
              src="/images/release-date.webp"
              alt="Illustrative Terminalszene für den Dear Passengers Release im Jahr 2026"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Brotkrümelnavigation">
                <Link href="/de/">Deutscher Dear Passengers Guide</Link><span>/</span><span>Release</span>
              </nav>
              <div className="eyebrow"><span>●</span> UNABHÄNGIGER RELEASE-CHECK · STAND 24.07.2026</div>
              <h1>Dear Passengers Release:<br /><em>Wann kommt das Koop-Spiel raus?</em></h1>
              <p>
                Der <strong>Dear Passengers Release</strong> ist für 2026 auf Windows-PC über Steam geplant. Ein
                genauer Tag oder Monat steht noch nicht fest. Dieser deutschsprachige Guide beantwortet die hierzulande
                üblichen Fragen zum Release-Termin, zur Demo, zu PS5 und Xbox, zur Spielerzahl und zu einer möglichen
                deutschen Fassung – ohne Interviewziele oder Trailerbilder als feste Zusage auszugeben.
              </p>
              <div className="hero-actions">
                <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Auf Steam vormerken ↗</a>
                <Link className="button button-ghost" href="/dear-passengers-release-date/" hrefLang="en">English release guide →</Link>
              </div>
              <div className="article-meta">
                <span>Veröffentlicht am 24.07.2026</span><span>Zuletzt geprüft am 24.07.2026</span><span>Offizielles Fenster: 2026</span>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>IN DIESEM GUIDE</p>
              <a href="#release">Release-Termin</a>
              <a href="#status">Bestätigt oder offen?</a>
              <a href="#plattformen">Plattformen</a>
              <a href="#demo">Demo</a>
              <a href="#koop">Koop und Spielerzahl</a>
              <a href="#deutsch">Deutsche Sprache</a>
              <a href="#faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam-Seite ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote
                locale="de"
                checked="24.07.2026"
                note="Verbindliche Angaben stammen von Steam oder direkt von FLEXUS. Interviewziele erhalten einen eigenen Status; unbekannte Daten werden nicht ergänzt."
              />

              <section id="release">
                <span className="kicker">DIE KURZE ANTWORT</span>
                <h2>Wann kommt Dear Passengers raus?</h2>
                <p className="snippet-answer">
                  Der <strong>Dear Passengers Release</strong> soll 2026 für Windows-PC auf Steam erfolgen. FLEXUS hat
                  noch keinen genauen Release-Termin veröffentlicht. Steam bietet derzeit nur die Wunschliste an; Preis,
                  Vorbestellung, Preload und eine konkrete Uhrzeit sind nicht verfügbar.
                </p>
                <p>
                  Damit ist die häufigste deutsche Suchfrage vollständig beantwortet: Dear Passengers kommt nach
                  aktuellem offiziellen Stand im Jahr 2026 heraus, aber noch ohne bestätigten Monat. Auf der deutschen
                  Steam-Seite steht unter „Veröffentlichung“ lediglich 2026. Wer einen bestimmten Tag, ein Quartal oder
                  einen Countdown nennt, geht über die Store-Angabe hinaus.
                </p>
                <p>
                  Für den <strong>Dear Passengers Release</strong> existiert dennoch zusätzlicher Kontext. FLEXUS-Gründer
                  Semen Kozyura sagte in einem Interview zunächst, das Studio peile ungefähr den Herbst 2026 an. In einem
                  späteren Gespräch erklärte er, es gebe noch kein genaues Datum: Das Team wolle weiterhin in diesem Jahr
                  veröffentlichen, ein unfertiger oder schlecht polierter Build wäre jedoch schädlicher als eine Verzögerung.
                  Das ist eine direkte Entwicklerauskunft, aber kein verbindlicher Kalendereintrag auf Steam.
                </p>
                <p>
                  Die saubere Formulierung lautet deshalb: „2026 bestätigt; Herbst als früheres Entwicklungsziel;
                  genauer <strong>Dear Passengers Release</strong> offen.“ Diese Unterscheidung ist besonders wichtig,
                  weil junge Store-Seiten häufig verändert werden. Erst wenn FLEXUS oder Steam einen Tag nennt, lässt
                  sich auch prüfen, ob der Start weltweit gleichzeitig erfolgt und welche Zeitzone gilt.
                </p>

                <div className="fact-callout">
                  <span>OFFIZIELL BESTÄTIGT</span>
                  <strong>2026 · WINDOWS-PC · STEAM</strong>
                  <p>Kein genauer Tag, kein öffentlicher Preis und noch kein Download der Vollversion.</p>
                </div>

                <h3>Warum deutsche Spieler nach „Release“ suchen</h3>
                <p>
                  Deutsche Spielemedien verwenden „Release“ und „Release-Termin“ ganz selbstverständlich. Typische
                  Fragen lauten „Wann kommt das Spiel raus?“ oder „Wann erscheint das Spiel?“. Deshalb behandelt diese
                  Seite <strong>Dear Passengers Release</strong>, „Wann kommt Dear Passengers raus?“ und „Wann erscheint
                  Dear Passengers?“ als dieselbe Suchabsicht. Das steife Wort „Erscheinungsdatum“ ist verständlich,
                  entspricht bei Videospielen aber seltener der üblichen Überschrift.
                </p>
              </section>

              <section id="status">
                <span className="kicker">FAKTENSTATUS</span>
                <h2>Was zum Dear Passengers Release bestätigt ist</h2>
                <p>
                  Beim <strong>Dear Passengers Release</strong> treffen drei Informationsarten aufeinander. Eine
                  Store-Angabe ist bestätigt. Eine direkte Interviewaussage kann den Entwicklungsstand erklären, ohne
                  schon ein unveränderlicher Termin zu sein. Alles, was weder im Store noch in einer benannten Aussage
                  vorkommt, bleibt unbekannt. Die folgende Übersicht hält diese Ebenen bewusst auseinander.
                </p>

                <div className="platform-table" role="table" aria-label="Faktenstatus zum Dear Passengers Release">
                  <div className="platform-head" role="row"><span role="columnheader">Angabe</span><span role="columnheader">Status</span><span role="columnheader">Einordnung</span></div>
                  <div role="row"><strong role="cell">Release 2026</strong><span className="status-confirmed" role="cell">Bestätigt</span><span role="cell">Aktuelle Steam-Angabe</span></div>
                  <div role="row"><strong role="cell">Windows-PC / Steam</strong><span className="status-confirmed" role="cell">Bestätigt</span><span role="cell">Store und Systemanforderungen</span></div>
                  <div role="row"><strong role="cell">Ungefähr Herbst 2026</strong><span className="status-open" role="cell">Entwicklungsziel</span><span role="cell">Frühere Gründer-Aussage, kein Store-Termin</span></div>
                  <div role="row"><strong role="cell">Genauer Tag und Preis</strong><span className="status-open" role="cell">Nicht angekündigt</span><span role="cell">Keine offizielle Angabe</span></div>
                  <div role="row"><strong role="cell">Öffentliche Demo</strong><span className="status-confirmed" role="cell">Als Plan bestätigt</span><span role="cell">Noch ohne Termin oder Download</span></div>
                </div>

                <p>
                  Auch die hohe Aufmerksamkeit rund um das Spiel ändert diesen Status nicht. Wunschlisten, Traileraufrufe
                  und Platzierungen auf Steam können Interesse zeigen, sind aber kein Beleg für Verkäufe, Spielerzahlen
                  oder einen bestimmten <strong>Dear Passengers Release</strong>. Aktuelle, datierte Meldungen werden im
                  englischen <Link href="/dear-passengers-news" hrefLang="en">Dear Passengers News-Log</Link> mit ihren
                  jeweiligen Quellen geführt.
                </p>
              </section>

              <section id="plattformen">
                <span className="kicker">PLATTFORM-CHECK</span>
                <h2>PC, PS5, Xbox und Nintendo Switch</h2>
                <p>
                  Der <strong>Dear Passengers Release</strong> ist bisher nur für Windows-PC bestätigt. Die Steam-Seite
                  enthält Windows-Systemanforderungen und führt Einzelspieler sowie Online-Koop als Funktionen. Ein
                  Eintrag im PlayStation Store, Microsoft Store oder Nintendo eShop existiert nicht. FLEXUS hat auch
                  keine parallele Konsolenveröffentlichung angekündigt.
                </p>

                <div className="platform-table" role="table" aria-label="Dear Passengers Plattformstatus">
                  <div className="platform-head" role="row"><span role="columnheader">Plattform</span><span role="columnheader">Status</span><span role="columnheader">Aktuelle Quelle</span></div>
                  <div role="row"><strong role="cell">Windows-PC</strong><span className="status-confirmed" role="cell">2026 bestätigt</span><span role="cell">Steam</span></div>
                  <div role="row"><strong role="cell">PlayStation 5</strong><span className="status-open" role="cell">Nicht angekündigt</span><span role="cell">Kein offizieller Store-Eintrag</span></div>
                  <div role="row"><strong role="cell">Xbox Series X|S</strong><span className="status-open" role="cell">Nicht angekündigt</span><span role="cell">Kein offizieller Store-Eintrag</span></div>
                  <div role="row"><strong role="cell">Nintendo Switch / Switch 2</strong><span className="status-open" role="cell">Nicht angekündigt</span><span role="cell">Kein offizieller Store-Eintrag</span></div>
                  <div role="row"><strong role="cell">Mac / Linux</strong><span className="status-open" role="cell">Nicht angekündigt</span><span role="cell">Nur Windows-Anforderungen gelistet</span></div>
                </div>

                <p>
                  Dass sich das Spiel mit Freunden spielen lässt oder im Trailer Controller-tauglich wirkt, beweist
                  weder eine Konsolenportierung noch Crossplay. Zertifizierung, Portierung und Netzwerkverbindungen
                  zwischen Plattformen sind eigene technische Zusagen. Bis eine solche Meldung erscheint, sollte der
                  <strong> Dear Passengers Release</strong> nicht als PS5-, Xbox- oder Switch-Spiel beworben werden.
                </p>
              </section>

              <section id="demo">
                <span className="kicker">PROBEFLUG</span>
                <h2>Demo, Gamescom und öffentlicher Test</h2>
                <p>
                  Eine Demo gehört zu den wenigen Plänen, die FLEXUS nach der Ankündigung näher beschrieben hat. Kozyura
                  sprach davon, eine spielbare Fassung für die Gamescom vorzubereiten und später eine öffentliche Demo
                  herauszubringen. Für Interessierte in Deutschland ist die Gamescom-Aussage relevant, sie bedeutet
                  jedoch nicht automatisch, dass jeder Messebesucher spielen kann oder dass am selben Tag ein Steam-
                  Download startet.
                </p>
                <p>
                  Derzeit zeigt Steam weder einen Demo-Button noch „Zugriff anfragen“ für einen Playtest. Es gibt keine
                  öffentliche Anmeldung, keine Startzeit, keine Laufzeit und keine bestätigte Plattform für die spätere
                  Testversion. Der <strong>Dear Passengers Release</strong> der Vollversion und die Demo sind daher zwei
                  getrennte Termine. Unser <Link href="/de/dear-passengers-demo/">ausführlicher Demo-Status</Link>
                  erklärt, welche Hinweise einen echten FLEXUS-Download von inoffiziellen Angeboten unterscheiden.
                </p>
                <p>
                  Eine Demo könnte offene Fragen zu Solo-Balance, Lobbygröße, Controllerbelegung, Netzwerkqualität und
                  Leistung beantworten. Bis sie spielbar ist, wären Aussagen dazu nur Erwartungen. Steam ist der sicherste
                  Ausgangspunkt: Entwickler und Publisher müssen beide FLEXUS lauten, und ein echter Test sollte direkt
                  über die Store-Seite oder einen verlinkten Entwicklerkanal erreichbar sein.
                </p>
              </section>

              <section id="koop">
                <span className="kicker">BESATZUNG</span>
                <h2>Koop, Einzelspieler und Spielerzahl</h2>
                <p>
                  Steam bestätigt Einzelspieler und Online-Koop. Im Spiel übernimmt ein Teil der Besatzung das Cockpit,
                  während andere Personen Passagiere bedienen, Fracht sichern und auf Probleme in der Kabine reagieren.
                  Physik, Turbulenzen, Wetter und riskante Ladung sollen diese Aufgaben miteinander verbinden. Das ist
                  die offiziell beschriebene Grundidee hinter dem <strong>Dear Passengers Release</strong>.
                </p>
                <p>
                  Nicht bekannt ist die maximale Lobbygröße. Der Trailer zeigt mehrere Figuren, aber eine sichtbare
                  Gruppe ersetzt keine technische Spielerangabe. Ebenso offen sind lokaler Koop, Splitscreen, Crossplay,
                  Voice-Chat, öffentliche Lobbys und ein Serverbrowser. Einzelspieler ist bestätigt; wie eine Person
                  mehrere Rollen bewältigt, hat FLEXUS noch nicht ausführlich gezeigt.
                </p>
                <p>
                  Diese Fragen erhalten einen eigenen Faktencheck im englischen Guide zur
                  <Link href="/de/dear-passengers-spielerzahl/"> Dear Passengers Spielerzahl</Link>. Der
                  <strong> Dear Passengers Release</strong> sollte erst dann mit einer festen Zahl beworben werden, wenn
                  die Steam-Funktionen, eine Entwicklerantwort oder die spielbare Version diese Grenze klar nennt.
                </p>
              </section>

              <section id="deutsch">
                <span className="kicker">SPRACHSTATUS</span>
                <h2>Wird Dear Passengers auf Deutsch erscheinen?</h2>
                <p>
                  Aktuell nein – zumindest nicht als offiziell unterstützte Benutzeroberfläche. Steam listet Englisch,
                  Arabisch, vereinfachtes Chinesisch, Türkisch, Ukrainisch und Japanisch. In der deutschen Store-Ansicht
                  steht bei Deutsch „Nicht unterstützt“. Vollständige Sprachausgabe und Untertitel sind für die sechs
                  gelisteten Sprachen ebenfalls nicht markiert.
                </p>
                <p>
                  Dieser deutschsprachige Guide ist also keine Aussage darüber, dass der <strong>Dear Passengers Release</strong>
                  eine deutsche Lokalisierung enthält. Er beantwortet deutsche Suchfragen mit überprüften Quellen. Wer
                  für Menüs oder Aufgaben zwingend Deutsch benötigt, sollte vor dem Kauf erneut die offizielle
                  Sprachentabelle prüfen. Eine spätere Ergänzung ist möglich, aber nicht angekündigt.
                </p>

                <h3>Welche PC-Anforderungen sind schon bekannt?</h3>
                <p>
                  Die Mindestanforderungen nennen Windows 10 in 64 Bit, einen Intel Core i5 mit 2,5 GHz oder ein
                  vergleichbares Modell, 8 GB Arbeitsspeicher, eine NVIDIA GeForce GTX 1060 oder AMD Radeon RX 6600 XT,
                  DirectX 12 und 4 GB freien Speicher. Empfohlene Anforderungen, Steam-Deck-Einstufung und konkrete
                  Leistungsziele fehlen noch. Die Werte können sich bis zum <strong>Dear Passengers Release</strong>
                  ändern; Details stehen im englischen
                  <Link href="/de/dear-passengers-systemanforderungen/"> PC-Anforderungscheck</Link>.
                </p>
              </section>

              <section id="vor-dem-release">
                <span className="kicker">VOR DEM START</span>
                <h2>Was vor dem Dear Passengers Release noch fehlt</h2>
                <p>
                  Vor dem <strong>Dear Passengers Release</strong> müssen vor allem praktische Informationen folgen:
                  exakter Termin, Preis, Lobbygröße, Umfang der Demo, empfohlene Hardware, Eingabegeräte und mögliche
                  weitere Plattformen. Auch Fortschritt, Missionsstruktur, Speichersystem, Barrierefreiheit und die
                  genaue Solo-Umsetzung sind öffentlich noch nicht ausreichend erklärt.
                </p>
                <p>
                  Die beste Vorbereitung ist deshalb schlicht: auf Steam vormerken, die Entwicklerangabe kontrollieren
                  und keine angeblichen Vollversionen von Download-Portalen beziehen. Dear Passengers ist noch nicht
                  kaufbar. APK-Dateien, Android-Versionen, Konsolenschlüssel oder Vorbestellungen außerhalb bestätigter
                  Kanäle belegen keinen offiziellen <strong>Dear Passengers Release</strong>.
                </p>
                <p>
                  Wenn ein Datum erscheint, wird dieser Guide nicht nur die Zahl austauschen. Geprüft werden dann Quelle,
                  Zeitzone, Plattform, Veröffentlichungsform, regionaler Preis, Sprachliste, Demo-Verfügbarkeit und die
                  Frage, ob sich Interviewziele tatsächlich in eine verbindliche Ankündigung verwandelt haben.
                </p>

                <h3>Was kostet Dear Passengers in Deutschland?</h3>
                <p>
                  Ein Preis in Euro ist noch nicht veröffentlicht. Die deutsche Steam-Seite besitzt keinen Kaufen- oder
                  Vorbestellen-Button und zeigt weder eine Standard Edition noch eine Deluxe Edition. Auch ein
                  Einführungsrabatt, Bundles und regionale Preisunterschiede sind unbekannt. Vergleichspreise anderer
                  Koop-Spiele wären keine verlässliche Grundlage, weil FLEXUS das eigene Geschäftsmodell noch nicht
                  genannt hat. Der Begriff „Free to Play“ taucht zwar zeitweise unter nutzergenerierten Steam-Tags auf;
                  solche Community-Tags sind aber keine Preisankündigung des Studios.
                </p>
                <p>
                  Vor dem offiziellen Verkaufsstart sollten deutsche Interessierte deshalb kein vermeintliches Steam-Key-
                  Angebot als Preisbestätigung behandeln. Drittanbieter können Platzhalterseiten anlegen, obwohl noch
                  kein Schlüssel ausgeliefert werden kann. Erst ein Kaufpreis auf Steam oder eine eindeutig zugeordnete
                  FLEXUS-Mitteilung beantwortet die Kostenfrage. Bis dahin ist die Wunschliste kostenlos und die einzige
                  Store-Funktion, die für das Spiel offiziell bereitsteht.
                </p>

                <h3>Welche Meldung zählt als offizieller Release-Termin?</h3>
                <p>
                  Ein belastbarer Termin sollte mindestens eine von drei Bedingungen erfüllen: Er steht direkt auf der
                  Steam-Produktseite, er wird von FLEXUS über einen eindeutig offiziellen Kanal veröffentlicht oder er
                  erscheint in einem Entwicklerinterview als wörtliche Aussage mit Datum und nachvollziehbarem Kontext.
                  Selbst im dritten Fall bleibt wichtig, ob die Aussage ein Ziel oder eine feste Ankündigung beschreibt.
                  Wörter wie „ungefähr“, „geplant“ und „wenn alles klappt“ kennzeichnen einen Arbeitsstand, nicht
                  automatisch einen garantierten Starttag.
                </p>
                <p>
                  Meldungen von Spielemedien können eine Ankündigung schnell und verständlich zusammenfassen. Für die
                  endgültige Prüfung sollte ihr Link jedoch zurück zur Primärquelle führen. Ein Social-Media-Screenshot
                  ohne erreichbares Original, ein Countdown auf einer Fanseite oder eine automatisch erzeugte
                  Händlerangabe genügt nicht. Diese Quellenregel verhindert, dass ein früheres Herbstziel später wie ein
                  verschobener Fixtermin wirkt, obwohl FLEXUS nie einen konkreten Tag versprochen hatte.
                </p>
              </section>

              <section id="faq">
                <span className="kicker">HÄUFIGE FRAGEN</span>
                <h2>Dear Passengers Release FAQ</h2>
                <p>
                  Die Antworten fassen die wichtigsten deutschen Suchfragen zusammen. Maßgeblich sind die aktuelle
                  Steam-Seite und benannte Entwicklerinterviews; Wünsche aus Foren oder Interpretationen des Trailers
                  werden nicht als zugesagte Funktion behandelt.
                </p>
                <FAQ items={faqs} />
              </section>

              <section id="quellen">
                <span className="kicker">QUELLEN UND TRANSPARENZ</span>
                <h2>So wurde dieser Release-Guide geprüft</h2>
                <p>
                  Die <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">deutsche Steam-Seite ↗</a> ist die
                  Primärquelle für Jahr, Plattform, Spielmodi, Sprachen und Mindestanforderungen. Das
                  <a href={DOU_RELEASE_INTERVIEW} target="_blank" rel="noopener noreferrer"> spätere DOU-Interview ↗</a>
                  liefert die direkte Aussage, dass noch kein genaues Datum feststeht. Das
                  <a href={DOU_STUDIO_INTERVIEW} target="_blank" rel="noopener noreferrer"> frühere Studio-Interview ↗</a>
                  dokumentiert Herbst und Gamescom als Ziele im damaligen Entwicklungsstand.
                </p>
                <p>
                  DearPassengers.net ist unabhängig und nicht mit FLEXUS, Valve oder Steam verbunden. Korrekturen und
                  Statusänderungen werden nach den englisch dokumentierten
                  <Link href="/de/redaktionsrichtlinien/"> Redaktionsregeln</Link> vorgenommen. Die verwendete
                  Titelgrafik ist eine redaktionelle Illustration und kein Screenshot des Spiels.
                </p>
              </section>

              <section className="related-guide">
                <span className="kicker">WEITERLESEN</span>
                <h2>Mehr verifizierte Dear Passengers Informationen</h2>
                <p>
                  Dieser deutsche Guide konzentriert sich auf den <strong>Dear Passengers Release</strong>. Die
                  englischen Fachseiten vertiefen aktuelle Meldungen, Demo-Zugang, Koop-Spielerzahl und Hardware. Jede
                  davon verweist auf die maßgeblichen Quellen und trennt bestätigte Angaben von offenen Fragen.
                </p>
                <div className="related-actions">
                  <Link className="button" href="/de/">Zum vollständigen Spiele-Guide →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-release-date/" hrefLang="en">English release guide →</Link>
                  <Link className="button button-ghost" href="/de/dear-passengers-news/">Aktuelle Meldungen →</Link>
                  <Link className="button button-ghost" href="/de/dear-passengers-demo/">Demo-Status →</Link>
                  <Link className="button button-ghost" href="/de/dear-passengers-spielerzahl/">Spielerzahl →</Link>
                  <Link className="button button-ghost" href="/de/dear-passengers-systemanforderungen/">PC-Anforderungen →</Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer locale="de" />
    </>
  );
}
