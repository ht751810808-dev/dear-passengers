import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=italian';
const STEAM_NEWS_URL = 'https://steamcommunity.com/app/4534960/allnews/';
const DOU_INTERVIEW_URL = 'https://gamedev.dou.ua/articles/dear-passengers-interview/?from=community_widget_post';
const PAGE_URL = 'https://dearpassengers.net/it/dear-passengers-data-di-uscita/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers: uscita, prezzo e demo nel 2026' },
  description:
    'Quando esce Dear Passengers? Steam conferma il 2026 su PC. Verifica data di uscita, prezzo, demo, PS5, Xbox e stato della lingua italiana.',
  alternates: {
    canonical: '/it/dear-passengers-data-di-uscita/',
    languages: {
      en: '/dear-passengers-release-date/',
      ar: '/ar/dear-passengers-release/',
      de: '/de/dear-passengers-release/',
      tr: '/tr/dear-passengers-cikis-tarihi/',
      'pt-BR': '/pt-br/dear-passengers-data-de-lancamento/',
      es: '/es/dear-passengers-fecha-de-lanzamiento/',
      'my-MM': '/my/dear-passengers-release-date/',
      ru: '/ru/dear-passengers-data-vyhoda/',
      cs: '/cs/dear-passengers-datum-vydani/',
      it: '/it/dear-passengers-data-di-uscita/',
      'zh-CN': '/zh-cn/dear-passengers-release-date/',
      'x-default': '/dear-passengers-release-date/',
    },
  },
  openGraph: {
    title: 'Dear Passengers: data di uscita, prezzo e demo',
    description: 'Steam indica il 2026 su PC; giorno, prezzo e data della demo non sono ancora stati annunciati.',
    url: PAGE_URL,
    siteName: 'DearPassengers.net',
    locale: 'it_IT',
    alternateLocale: ['en_US'],
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Guida italiana alla data di uscita di Dear Passengers nel 2026',
    }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers: uscita, prezzo e demo nel 2026',
    description: 'Stato verificato di data, prezzo, demo, piattaforme e lingua italiana.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Quando esce Dear Passengers?',
    answer: 'Dear Passengers è previsto nel 2026 su Windows PC tramite Steam. FLEXUS non ha annunciato il giorno o il mese preciso, quindi non esiste ancora un conto alla rovescia ufficiale.',
  },
  {
    question: 'Qual è la data di uscita di Dear Passengers in Italia?',
    answer: 'Per l’Italia vale la stessa finestra globale indicata su Steam: 2026. Non è stata comunicata una data italiana separata né un orario di sblocco per il nostro fuso orario.',
  },
  {
    question: 'Quanto costa Dear Passengers?',
    answer: 'Il prezzo di Dear Passengers non è stato annunciato. Steam non mostra acquisto, preordine o prezzo in euro; anche eventuali sconti e prezzi regionali restano sconosciuti.',
  },
  {
    question: 'Dear Passengers sarà gratis?',
    answer: 'Non è confermato. Il tag “Free to Play” può comparire tra i tag definiti dagli utenti, ma non equivale a un prezzo ufficiale o a una dichiarazione di FLEXUS.',
  },
  {
    question: 'Esiste una demo di Dear Passengers?',
    answer: 'FLEXUS ha dichiarato di preparare una demo per Gamescom e una demo pubblica successiva. Al 10 agosto 2026 non risultano un download pubblico, una data, un modulo beta o un pulsante Steam Playtest.',
  },
  {
    question: 'Dear Passengers uscirà su PS5, Xbox o Nintendo Switch?',
    answer: 'Non ci sono annunci ufficiali per PS5, Xbox Series X|S, Nintendo Switch o Switch 2. L’unica piattaforma confermata è Windows PC su Steam.',
  },
  {
    question: 'Dear Passengers sarà in italiano?',
    answer: 'L’italiano non compare nella tabella delle lingue Steam attuale. Sono indicate le interfacce in inglese, arabo, cinese semplificato, turco, ucraino e giapponese; doppiaggio e sottotitoli non risultano segnati.',
  },
  {
    question: 'Si può già scaricare Dear Passengers?',
    answer: 'No. La pagina Steam consente di aggiungere Dear Passengers alla lista dei desideri, ma non offre ancora gioco completo, demo, pre-caricamento o Playtest pubblico.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  inLanguage: 'it-IT',
  headline: 'Dear Passengers: data di uscita, prezzo e demo nel 2026',
  description: 'Guida italiana verificata alla finestra di uscita, al prezzo, alla demo, alle piattaforme e alla localizzazione di Dear Passengers.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-08-10',
  dateModified: '2026-08-10',
  author: { '@type': 'Organization', name: 'Redazione italiana di DearPassengers.net', url: 'https://dearpassengers.net/about/' },
  publisher: {
    '@type': 'Organization',
    name: 'DearPassengers.net',
    url: 'https://dearpassengers.net/',
    logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' },
  },
  image: 'https://dearpassengers.net/images/og-image.png',
  citation: [STEAM_URL, STEAM_NEWS_URL, DOU_INTERVIEW_URL],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers', item: 'https://dearpassengers.net/' },
    { '@type': 'ListItem', position: 2, name: 'Data di uscita', item: PAGE_URL },
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

export default function ItalianReleaseDatePage() {
  return (
    <div className="localized-site-it" lang="it">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header locale="it" languageHref="/dear-passengers-release-date/" />

      <main id="main-content">
        <article>
          <header className="article-hero">
            <Image
              src="/images/release-date.webp"
              alt="Aereo di Dear Passengers usato come immagine editoriale per la guida all'uscita 2026"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Percorso di navigazione">
                <Link href="/" hrefLang="en">Dear Passengers</Link><span>/</span><span>Data di uscita</span>
              </nav>
              <div className="eyebrow"><span>●</span> USCITA 2026 · FONTI UFFICIALI</div>
              <h1>Dear Passengers:<br /><em>uscita, prezzo e demo nel 2026</em></h1>
              <p>
                <strong>Dear Passengers è previsto nel 2026 su Windows PC tramite Steam.</strong> FLEXUS non ha ancora
                annunciato giorno, mese, prezzo o data della demo pubblica. Questa guida italiana separa ciò che è
                confermato da piani, deduzioni e informazioni tuttora sconosciute.
              </p>
              <div className="hero-actions">
                <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Aggiungi ai desideri ↗</a>
                <a className="button button-ghost" href="#uscita">Leggi la risposta completa ↓</a>
              </div>
              <div className="article-meta">
                <span>Pubblicato il 10 agosto 2026</span><span>Finestra ufficiale: 2026</span><span>Piattaforma: Windows PC</span>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>IN QUESTA GUIDA</p>
              <a href="#uscita">Data di uscita</a>
              <a href="#prezzo">Prezzo</a>
              <a href="#piattaforme">PC, PS5 e Xbox</a>
              <a href="#demo">Demo e Playtest</a>
              <a href="#lingua">Lingua italiana</a>
              <a href="#cronologia">Cronologia</a>
              <a href="#fonti">Fonti</a>
              <a href="#faq">Domande frequenti</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam ufficiale ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote
                locale="it"
                checked="10 agosto 2026"
                note="Le informazioni su Dear Passengers vengono confrontate con Steam e con dichiarazioni dirette di FLEXUS. Tag della community, possibilità future e dati mancanti sono indicati separatamente."
              />

              <section id="uscita">
                <span className="kicker">RISPOSTA RAPIDA</span>
                <h2>Quando esce Dear Passengers?</h2>
                <p className="snippet-answer">
                  La data di uscita di <strong>Dear Passengers</strong> è indicata solo come <strong>2026</strong>. Il
                  lancio è confermato su Windows PC attraverso Steam, ma FLEXUS non ha comunicato un giorno o un mese.
                  In Italia non esiste una data separata né un orario ufficiale di sblocco.
                </p>
                <p>
                  Questa è la risposta completa disponibile oggi. Quando un negozio mostra soltanto l’anno, non è
                  corretto trasformarlo in un trimestre, in una data provvisoria o nel 31 dicembre. Quest’ultima è spesso
                  una data tecnica usata da database e negozi per ordinare le uscite senza giorno preciso; non è la data
                  di <strong>Dear Passengers</strong>. Anche un conto alla rovescia trovato su un sito non ufficiale non
                  costituisce una conferma.
                </p>
                <p>
                  L’intervista pubblicata da GameDev DOU il 17 luglio aggiunge contesto: il fondatore di FLEXUS, Semen
                  Kozyura, ha dichiarato che lo studio mira ancora a pubblicare <strong>Dear Passengers</strong> nel
                  2026, ma non vuole affrettare un prodotto poco rifinito. La dichiarazione sostiene la finestra annuale;
                  non permette di ricavare un mese. Se la qualità richiedesse più tempo, soltanto FLEXUS o Steam
                  potrebbero confermare un eventuale cambiamento.
                </p>
                <div className="status-grid">
                  <div className="fact-callout">
                    <span>CONFERMATO</span>
                    <strong>2026 · PC · Steam</strong>
                    <ul>
                      <li>Windows come sistema operativo</li>
                      <li>Giocatore singolo e cooperativa online</li>
                      <li>FLEXUS come sviluppatore e editore</li>
                    </ul>
                  </div>
                  <div className="fact-callout unknown-callout">
                    <span>NON ANNUNCIATO</span>
                    <strong>GIORNO · PREZZO · CONSOLE</strong>
                    <ul>
                      <li>Mese, giorno e orario italiano</li>
                      <li>Prezzo in euro o preordine</li>
                      <li>PS5, Xbox, Switch, Mac e Linux</li>
                    </ul>
                  </div>
                </div>
                <h3>Che cosa significa “uscita prevista nel 2026”?</h3>
                <p>
                  Significa che <strong>Dear Passengers</strong> è pianificato per quell’anno, non che ogni dettaglio di
                  produzione sia chiuso. La pagina Steam è già utile per identificare l’app ufficiale, App ID 4534960,
                  e per aggiungerla alla lista dei desideri. Non offre però acquisto, pre-caricamento o pacchetti. La
                  formulazione italiana più precisa resta quindi “uscita prevista nel 2026, data esatta da annunciare”.
                </p>
              </section>

              <section id="prezzo">
                <span className="kicker">PREZZO E ACCESSO</span>
                <h2>Quanto costerà Dear Passengers in Italia?</h2>
                <p className="snippet-answer">
                  Il prezzo di <strong>Dear Passengers</strong> non è noto. Steam non mostra un importo in euro, un
                  preordine o un’edizione acquistabile. Non sono confermati neppure sconto di lancio, pacchetti o prezzi
                  regionali.
                </p>
                <p>
                  La guida dedicata al <Link href="/it/prezzo-di-dear-passengers/" hrefLang="it">prezzo di Dear
                  Passengers</Link> controlla importo, modello gratuito o a pagamento, valute regionali, edizioni e
                  sconti. Questa pagina conserva soltanto il riepilogo necessario per la data di uscita.
                </p>
                <p>
                  La pagina ufficiale può mostrare “Free to Play” tra i tag popolari definiti dagli utenti. Quel campo
                  descrive una classificazione della community, non il modello commerciale deciso da FLEXUS. Finché non
                  appare un pulsante di acquisto con prezzo o una dichiarazione dello studio, non è corretto affermare
                  che <strong>Dear Passengers</strong> sarà gratis; allo stesso modo, non si può inventare un prezzo a
                  pagamento basandosi su giochi simili.
                </p>
                <div className="platform-table" role="table" aria-label="Stato di uscita e prezzo di Dear Passengers al 10 agosto 2026">
                  <div className="platform-head" role="row"><span role="columnheader">Voce</span><span role="columnheader">Stato</span><span role="columnheader">Prova disponibile</span></div>
                  <div role="row"><strong role="cell">Finestra di uscita</strong><span className="status-confirmed" role="cell">2026 confermato</span><span role="cell">Pagina Steam ufficiale</span></div>
                  <div role="row"><strong role="cell">Data precisa</strong><span className="status-open" role="cell">Non annunciata</span><span role="cell">Nessun mese o giorno</span></div>
                  <div role="row"><strong role="cell">Prezzo in euro</strong><span className="status-open" role="cell">Non annunciato</span><span role="cell">Nessun acquisto o preordine</span></div>
                  <div role="row"><strong role="cell">Free-to-play</strong><span className="status-open" role="cell">Non confermato</span><span role="cell">Il tag utente non è un prezzo</span></div>
                  <div role="row"><strong role="cell">Accesso anticipato</strong><span className="status-open" role="cell">Non annunciato</span><span role="cell">Nessuna etichetta Early Access</span></div>
                </div>
                <h3>Come riconoscere il prezzo ufficiale</h3>
                <p>
                  Per verificare <strong>Dear Passengers</strong>, apri la scheda Steam, controlla che sviluppatore ed
                  editore siano entrambi FLEXUS e cerca il riquadro di acquisto. Un prezzo copiato da un aggregatore può
                  essere vecchio, convertito male o semplicemente inventato. Evita anche pagine che promettono “download
                  gratis”, APK o key prima che l’app ufficiale sia disponibile: la nostra <Link href="/dear-passengers-download/" hrefLang="en">verifica del download di Dear Passengers</Link> spiega in inglese come distinguere la scheda reale da installer ingannevoli.
                </p>
              </section>

              <section id="piattaforme">
                <span className="kicker">PIATTAFORME</span>
                <h2>Dear Passengers su PC, PS5, Xbox e Switch</h2>
                <p>
                  <strong>Dear Passengers</strong> è confermato soltanto per Windows PC su Steam. Non risultano pagine
                  ufficiali PlayStation, Microsoft o Nintendo, né comunicati su conversioni console. Un gioco cooperativo
                  che sembra adatto al controller non diventa automaticamente un titolo PS5 o Xbox: servono sviluppo del
                  port, certificazione e un annuncio verificabile.
                </p>
                <div className="platform-table" role="table" aria-label="Piattaforme confermate e non annunciate per Dear Passengers">
                  <div className="platform-head" role="row"><span role="columnheader">Piattaforma</span><span role="columnheader">Stato</span><span role="columnheader">Fonte</span></div>
                  <div role="row"><strong role="cell">Windows PC</strong><span className="status-confirmed" role="cell">Confermato per il 2026</span><span role="cell">Steam</span></div>
                  <div role="row"><strong role="cell">PlayStation 5</strong><span className="status-open" role="cell">Non annunciata</span><span role="cell">Nessuna scheda ufficiale</span></div>
                  <div role="row"><strong role="cell">Xbox Series X|S</strong><span className="status-open" role="cell">Non annunciata</span><span role="cell">Nessuna scheda ufficiale</span></div>
                  <div role="row"><strong role="cell">Nintendo Switch / Switch 2</strong><span className="status-open" role="cell">Non annunciata</span><span role="cell">Nessuna scheda ufficiale</span></div>
                  <div role="row"><strong role="cell">Mac / Linux</strong><span className="status-open" role="cell">Non annunciati</span><span role="cell">Requisiti solo Windows</span></div>
                </div>
                <p>
                  Anche supporto controller, Steam Deck, cross-play e versione VR restano senza conferma pubblica. Per
                  un controllo più ampio consulta lo <Link href="/dear-passengers-platforms/" hrefLang="en">stato delle piattaforme di Dear Passengers</Link>, disponibile in inglese e aggiornato separatamente. Qui manteniamo il focus sulla data di uscita italiana e sulle domande che precedono il lancio.
                </p>
              </section>

              <section id="demo">
                <span className="kicker">DEMO, BETA E PLAYTEST</span>
                <h2>Esiste una demo di Dear Passengers?</h2>
                <p className="snippet-answer">
                  Una demo di <strong>Dear Passengers</strong> è pianificata, ma non è ancora pubblicamente scaricabile.
                  FLEXUS ha parlato di una build per Gamescom e di una demo pubblica successiva; non ha annunciato data,
                  iscrizione beta o Steam Playtest.
                </p>
                <p>
                  “Pianificata” e “disponibile” non sono sinonimi. La build mostrata a un evento può essere riservata alla
                  stampa o ai visitatori e può differire dal gioco finale. Al 10 agosto 2026 la scheda Steam di
                  <strong>Dear Passengers</strong> non presenta il pulsante “Scarica demo” né una richiesta di accesso al
                  Playtest. Qualunque file esterno che usi il nome del gioco non diventa ufficiale per questo motivo.
                </p>
                <h3>Come ricevere l’avviso senza scaricare file falsi</h3>
                <ol className="steps article-steps">
                  <li><span>01</span><p>Apri Steam e verifica l’App ID 4534960, con FLEXUS indicato come sviluppatore ed editore.</p></li>
                  <li><span>02</span><p>Aggiungi <strong>Dear Passengers</strong> alla lista dei desideri per ricevere le notifiche del negozio.</p></li>
                  <li><span>03</span><p>Segui l’hub ufficiale e controlla se compare un pulsante Demo o Playtest sulla stessa scheda.</p></li>
                  <li><span>04</span><p>Non installare APK, launcher o archivi presentati come demo PC prima di una conferma ufficiale.</p></li>
                </ol>
                <p>
                  La <Link href="/dear-passengers-demo/" hrefLang="en">pagina dedicata alla demo di Dear Passengers</Link>
                  conserva in inglese il dettaglio su Gamescom, accesso pubblico e possibili formati di test. Un’eventuale
                  demo servirà anche a verificare prestazioni, comandi, accessibilità e numero massimo di giocatori, dati
                  che oggi non vanno dedotti dai brevi filmati promozionali.
                </p>
              </section>

              <section id="lingua">
                <span className="kicker">LOCALIZZAZIONE</span>
                <h2>Dear Passengers sarà disponibile in italiano?</h2>
                <p className="snippet-answer">
                  Al momento <strong>Dear Passengers non elenca l’italiano</strong> tra le lingue supportate su Steam. La
                  presenza di questa guida in italiano non indica una localizzazione ufficiale del gioco.
                </p>
                <p>
                  La tabella Steam corrente indica l’interfaccia in inglese, arabo, cinese semplificato, turco, ucraino e
                  giapponese. Non risultano spunte per audio completo o sottotitoli, e l’italiano è assente. Questa è una
                  fotografia del 10 agosto 2026, non la prova che l’italiano non arriverà mai: FLEXUS potrebbe ampliare la
                  tabella prima dell’uscita, ma non ha pubblicato una promessa in tal senso.
                </p>
                <p>
                  Per un giocatore italiano la distinzione è importante. “Pagina Steam visualizzata in italiano” significa
                  soltanto che il negozio traduce la propria interfaccia; “<strong>Dear Passengers</strong> in italiano”
                  richiederebbe invece una spunta ufficiale nella riga del gioco. Quando Steam cambierà quella tabella,
                  controlleremo separatamente interfaccia, sottotitoli e doppiaggio senza usare una sola voce come prova
                  delle altre.
                </p>
              </section>

              <section id="cronologia">
                <span className="kicker">CRONOLOGIA VERIFICATA</span>
                <h2>Le tappe ufficiali di Dear Passengers</h2>
                <div className="timeline">
                  <div><time>14 LUG<br />2026</time><p><strong>Apre la fase di scoperta pubblica.</strong> La scheda Steam presenta <strong>Dear Passengers</strong> e indica il 2026 su Windows.</p></div>
                  <div><time>17 LUG<br />2026</time><p><strong>FLEXUS ribadisce l’obiettivo 2026.</strong> Nell’intervista a GameDev DOU, Kozyura spiega che lo studio non intende sacrificare la qualità per correre.</p></div>
                  <div><time>31 LUG<br />2026</time><p><strong>Aggiornamento ufficiale su Steam.</strong> FLEXUS comunica due milioni di wishlist e il controllo dell’intero aereo; non aggiunge data, prezzo o accesso alla demo.</p></div>
                  <div className="future"><time>PROSSIMO<br />AGGIORNAMENTO</time><p><strong>Restano aperti i dettagli di lancio.</strong> Cerchiamo data esatta, prezzo, demo, limite giocatori, requisiti consigliati e nuove piattaforme.</p></div>
                </div>
                <p>
                  Il numero di wishlist è un dato comunicato dallo sviluppatore, non equivale a vendite, giocatori attivi
                  o utenti italiani. La cronologia resta volutamente breve: aggiungiamo una tappa solo quando una fonte
                  datata modifica ciò che sappiamo su <strong>Dear Passengers</strong>, evitando di trasformare reazioni
                  social o previsioni in annunci.
                </p>
              </section>

              <section id="fonti">
                <span className="kicker">FONTI PRIMARIE</span>
                <h2>Dove verifichiamo Dear Passengers</h2>
                <p>
                  La fonte principale è la <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">pagina Steam ufficiale di Dear Passengers ↗</a>, perché identifica prodotto, piattaforma, finestra, modalità, lingue e requisiti. L’<a href={STEAM_NEWS_URL} target="_blank" rel="noopener noreferrer">hub degli annunci Steam ↗</a> conserva gli aggiornamenti pubblicati da FLEXUS. L’<a href={DOU_INTERVIEW_URL} target="_blank" rel="noopener noreferrer">intervista diretta su GameDev DOU ↗</a> supporta le dichiarazioni sul 2026 e sulla demo.
                </p>
                <p>
                  Le fonti rispondono a domande diverse. Steam è decisivo per prezzo e disponibilità; una dichiarazione
                  dello studio può descrivere un piano non ancora attivo; tag, forum e video della community aiutano a
                  capire le domande dei giocatori ma non confermano funzioni. Se le fonti entrano in conflitto, mostriamo
                  la data del controllo e privilegiamo il canale ufficiale più recente.
                </p>
              </section>

              <section id="faq">
                <span className="kicker">DOMANDE FREQUENTI</span>
                <h2>Dear Passengers: uscita, prezzo e demo</h2>
                <p>
                  Le risposte seguenti riassumono lo stato verificato per chi cerca quando esce <strong>Dear Passengers</strong>
                  in Italia. “Non annunciato” significa che manca una fonte affidabile, non che una funzione sia stata
                  cancellata o esclusa per sempre.
                </p>
                <FAQ items={faqs} />
              </section>

              <section className="related-guide">
                <span className="kicker">CONTINUA LA VERIFICA</span>
                <h2>Approfondimenti su Dear Passengers</h2>
                <p>
                  Torna alla <Link href="/" hrefLang="en">guida principale di Dear Passengers</Link> oppure consulta gli
                  approfondimenti in inglese su <Link href="/dear-passengers-release-date/" hrefLang="en">uscita e prezzo</Link>,
                  <Link href="/dear-passengers-demo/" hrefLang="en"> demo pubblica</Link>, <Link href="/dear-passengers-platforms/" hrefLang="en"> piattaforme</Link> e <Link href="/dear-passengers-player-count/" hrefLang="en">numero di giocatori</Link>. Ogni pagina mantiene un intento distinto per evitare risposte duplicate.
                </p>
                <div className="related-actions">
                  <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam ufficiale ↗</a>
                  <Link className="button button-ghost" href="/" hrefLang="en">Guida completa →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-demo/" hrefLang="en">Stato demo →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-platforms/" hrefLang="en">Piattaforme →</Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer locale="it" />
    </div>
  );
}
