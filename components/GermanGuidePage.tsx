import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { GermanGuide } from '@/app/de/german-content';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=german';
const STEAM_NEWS_URL = 'https://steamcommunity.com/app/4534960/allnews/';
const DOU_RELEASE_INTERVIEW = 'https://gamedev.dou.ua/articles/dear-passengers-interview/';
const GAMESCOM_PARTICIPATION_URL = 'https://www.ggconference.com/en/conference/games-from-ukraine-2026/participants/';

const labels: Record<string, string> = {
  'dear-passengers-spiel': 'Was ist Dear Passengers?',
  'dear-passengers-steam': 'Steam-App und Wunschliste',
  'dear-passengers-vr': 'VR-Support und Quest-Identität',
  'dear-passengers-ps5': 'PS5-Status und PlayStation Store',
  'dear-passengers-gameplay': 'Gameplay',
  'dear-passengers-spielerzahl': 'Spielerzahl und Koop',
  'dear-passengers-release': 'Release 2026',
  'dear-passengers-demo': 'Demo-Status',
  'dear-passengers-download': 'Sicherer Download',
  'dear-passengers-systemanforderungen': 'Systemanforderungen',
  'dear-passengers-trailer': 'Traileranalyse',
  'dear-passengers-news': 'News und Updates',
  'dear-passengers-bestaetigte-features': 'Bestätigte Features',
  'dear-passengers-rollen': 'Pilot und Kabinencrew',
  'dear-passengers-entwickler-flexus': 'Entwickler FLEXUS',
  'spiele-wie-dear-passengers': 'Ähnliche Koop-Spiele',
};

const supplements: Record<string, string[]> = {
  home: [
    'Der deutsche Markt benötigt eine eigene Informationsarchitektur. Suchende formulieren „Dear Passengers Spiel“, „wann kommt Dear Passengers raus“, „wie viele Spieler“ oder „Systemanforderungen“. Deshalb führt die Startseite nicht bloß übersetzte englische Menüpunkte auf, sondern ordnet jede Frage einer klaren deutschen Fachseite zu. Das Dear Passengers Spiel bleibt dabei der gemeinsame Markenbegriff.',
    'Die deutsche Ausgabe behauptet ausdrücklich keine deutsche Sprache im Spiel. Steam markiert Deutsch derzeit als nicht unterstützt. Ein deutschsprachiger Guide beantwortet Informationsbedarf, er verändert nicht die offizielle Sprachliste. Wer Menüs auf Deutsch benötigt, sollte den Storestatus vor einem späteren Kauf erneut prüfen.',
    'Auch Datums- und Zahlenformat folgen deutschem Gebrauch: 24.07.2026 und 1,5 Millionen. Ein Rang erhält ein Prüfdatum, ein Euro-Preis wird erst nach Veröffentlichung genannt. Diese Details wirken klein, sind aber wichtig, damit das Dear Passengers Spiel nicht wie eine oberflächlich kopierte internationale Seite präsentiert wird.',
    'Jede deutsche Seite besitzt einen selbstreferenzierenden Canonical und vollständige Sprachalternativen zur englischen Fassung; vorhandene chinesische Gegenstücke werden ebenfalls verbunden. Navigation, Fußbereich und thematische Links verhindern isolierte Seiten. Nutzer können dadurch vom Überblick direkt zu Gameplay, Release, Demo, Spielerzahl oder Hardware wechseln.',
    'Dieser Hub wird nicht täglich umformuliert. Eine Aktualisierung erfolgt bei neuer Primärquelle, neuer deutscher Suchabsicht oder einer sachlichen Korrektur. So bleibt das Dear Passengers Spiel ausführlich dokumentiert, ohne künstliche News oder dünne Übersetzungsseiten zu erzeugen.'
  ],
  'dear-passengers-spielerzahl': [
    'Deutsche Suchfragen verwenden neben „Spielerzahl“ besonders die Form „Wie viele Spieler können Dear Passengers spielen?“. Beide Formulierungen beschreiben dieselbe technische Absicht. Der Guide nutzt die natürliche Frage in Überschriften, hält den Hauptbegriff Dear Passengers Spielerzahl aber stabil, damit Antwort und Status klar auffindbar bleiben.',
    'Sobald eine Zahl erscheint, muss zusätzlich geklärt werden, ob sie Minimum, Maximum oder empfohlene Gruppengröße meint. Eine Storeangabe wie „2–4“ wäre stärker als eine Demo mit begrenzten Stationen. Die Dear Passengers Spielerzahl wird deshalb nicht ohne Plattform, Modus und Quellenzeitpunkt veröffentlicht.'
  ],
  'dear-passengers-demo': [
    'Für deutsche Nutzer ist der Gamescom-Kontext ein eigener Informationswert. Die Teilnahme von FLEXUS ist inzwischen bestätigt; daraus folgt jedoch weder, dass ein Dear-Passengers-Build gezeigt wird oder wurde, noch dass Besucher ihn ausprobieren können. Die Dear Passengers Demo bleibt ohne Steam-Zugang und Termin ein früherer Plan, keine verfügbare Testversion.',
    'Nach einer Veröffentlichung wird außerdem geprüft, ob Fortschritt gespeichert wird, ob der Test zeitlich begrenzt ist und welche Region teilnehmen kann. Diese Angaben beeinflussen die Antwort stärker als die bloße Existenz eines Buttons. Die Dear Passengers Demo erhält deshalb einen vollständigen Status statt einer kurzen Downloadmeldung.'
  ],
  'dear-passengers-download': [
    'Im deutschen Suchraum wird „Download“ oft mit „herunterladen“, „kostenlos“ oder „APK“ kombiniert. Diese Wörter werden nicht genutzt, um nicht vorhandene Dateien anzulocken, sondern um die Verfügbarkeit eindeutig zu beantworten. Der Dear Passengers Download ist erst real, wenn Herausgeber, Plattform und Zugang zusammenpassen.',
    'Bei einem späteren Verkauf wird die deutsche Storeansicht auf Euro-Preis, Edition, Alterskennzeichnung und Rückgabekontext geprüft. Ein regionaler Preis darf nicht aus US-Dollar umgerechnet und als offizieller Betrag ausgegeben werden. Gleiches gilt für Dateigröße und Veröffentlichungszeit.',
    'Der Sicherheitszweck dieser Seite endet nicht mit dem Release. Neue Fake-Installer können gerade nach einer Veröffentlichung auftauchen. Der offizielle Dear Passengers Download bleibt an Steam oder weitere ausdrücklich bestätigte Stores gebunden; Suchanzeigen und Mirrors erhalten dadurch keinen automatischen Vertrauensbonus.'
  ],
  'dear-passengers-systemanforderungen': [
    'Deutsche Nutzer suchen sowohl nach „Systemanforderungen“ als auch nach „PC-Anforderungen“ und „Kann mein PC das Spiel ausführen?“. Der erste Begriff ist die natürliche technische Hauptbezeichnung. Die Dear Passengers Systemanforderungen werden nicht in eine pauschale Ampel verwandelt, weil Hardwarevergleiche ohne exakte Modelle unzuverlässig sind.',
    'Die ungewöhnliche Paarung GTX 1060 und RX 6600 XT sollte bei einer späteren Aktualisierung besonders geprüft werden. Es kann sich um eine bewusst breite Entwicklerempfehlung oder einen vorläufigen Storewert handeln. Bis FLEXUS die Tabelle ändert, wird sie exakt wiedergegeben und nicht redaktionell „korrigiert“.',
    'Nach einer Demo können Communitymessungen hilfreich sein, erhalten aber eine niedrigere Quellenstufe als offizielle Dear Passengers Systemanforderungen. Ein guter Test nennt CPU, GPU, RAM, Treiber, Auflösung, Preset und Bildrate. Videos ohne diese Angaben belegen nur, dass ein unbekanntes System eine bestimmte Szene abgespielt hat.'
  ],
  'dear-passengers-trailer': [
    'Deutsche Ergebnislisten vermischen den offiziellen Film mit Medien-Reuploads und Shorts. Der Dear Passengers Trailer wird deshalb über Ursprung und Inhalt identifiziert, nicht nur über Videotitel. Derselbe Ausschnitt auf einem neuen Kanal bleibt dasselbe Material und erhält kein neues Enthüllungsdatum.',
    'Untertitel und gesprochene Aussagen müssen getrennt vom Bild ausgewertet werden. Ein Werbeslogan kann Ton und Idee erklären, aber keine technische Eigenschaft garantieren. Umgekehrt kann eine sichtbare Szene eine Beobachtung stützen, ohne dass ihr Zweck im finalen Spiel feststeht.',
    'Bei einem neuen Dear Passengers Trailer wird geprüft, welche Bilder wirklich neu sind, ob FLEXUS ihn veröffentlicht hat und welche Storefelder sich gleichzeitig ändern. Nur neues Material rechtfertigt neue Szenenabschnitte oder andere Bilder auf dieser Seite; ein anderes Thumbnail allein nicht.'
  ],
  'dear-passengers-news': [
    'Die deutsche News-Suche bevorzugt schnelle Antworten, doch Geschwindigkeit darf keine Statuswörter verschieben. „Studio plant“ bleibt ein Plan, „Steam listet“ ein Storefakt und „Nutzer diskutieren“ eine Communityreaktion. Dear Passengers News werden mit dieser Herkunft bereits im ersten Absatz eingeordnet.',
    'Platz 4 ist keine klassische Chartplatzierung nach Verkäufen. Er stammt aus einer am 29.08.2026 ohne persönliche Präferenzfilter geprüften Momentaufnahme der öffentlichen Steam-Liste „Top Wishlists“. Der Unterschied gehört in jede Meldung, damit Wunschlistenrang, Verkaufsrang und aktive Spieler nicht verwechselt werden.',
    'Bei einer neuen Wunschlistenzahl wird geprüft, ob sie kumulativ, zeitlich eingegrenzt oder gerundet ist. Dear Passengers News nennen deshalb „laut FLEXUS“: Das Studio meldete am 31.07.2026 zwei Millionen Wunschlisten. Die Zahl ist weder ein Live-Zähler noch ein Verkaufs- oder Spielerwert.',
    'Die Seite dient zugleich als Änderungsprotokoll für die deutschen Guides. Eine bestätigte Plattformmeldung aktualisiert Release und Download; neue Specs aktualisieren den Hardware-Guide; eine Lobbyzahl aktualisiert Koop und Rollen. So verbreitet sich eine neue Tatsache konsistent statt als widersprüchlicher Einzelartikel.'
  ],
  'dear-passengers-bestaetigte-features': [
    'Der englische Begriff „Features“ ist in deutschen Spielemedien üblich, während „Funktionen“ und „Spielmerkmale“ als erklärende Varianten dienen. Der Hauptbegriff Dear Passengers Features ist deshalb keine blinde Übersetzung, sondern entspricht lokaler Gaming-Sprache. Überschriften kombinieren ihn mit klaren deutschen Statuswörtern.',
    'Ein Feature kann im Entwicklungsbuild sichtbar sein und später verändert werden. Darum speichert der Faktencheck das Prüfdatum. Bei einem veröffentlichten Storefeld ist die Sicherheit höher als bei einem einzelnen Frame; eine direkte Entwicklererklärung kann zusätzlich Zweck und Umfang beschreiben.',
    'Negative Aussagen werden ebenfalls vorsichtig formuliert. Fehlt Splitscreen auf Steam, lautet der Status „nicht angekündigt“, nicht „ausgeschlossen“. Nur eine ausdrückliche Absage rechtfertigt die stärkere Form. Diese Genauigkeit hält Dear Passengers Features offen für legitime spätere Änderungen.',
    'Eine Demo kann beobachtbare Details liefern, aber ein begrenzter Build besitzt möglicherweise nicht alle Funktionen. Der Guide markiert deshalb die Version. Was in einer Gamescom-Fassung fehlt, muss nicht aus der Vollversion gestrichen sein; was enthalten ist, kann sich noch ändern.',
    'Das Register vermeidet doppelte Behauptungen. Tiefe Erklärungen liegen auf Gameplay-, Rollen-, Spielerzahl- und PC-Seiten; hier steht der Status. Dadurch bleibt die Seite nützlich, ohne andere deutsche Inhalte nur neu anzuordnen.'
  ],
  'dear-passengers-rollen': [
    'Die deutsche Suche verwendet „Rollen“, „Pilot“, „Kabinencrew“ und „Aufgaben“. Der Guide wählt Dear Passengers Rollen als Hauptbegriff, spricht aber nicht von Klassen, solange keine Klassenwahl sichtbar oder beschrieben ist. Das ist sprachlich natürlicher und sachlich zurückhaltender als eine direkte Übernahme von „classes“.',
    'Rollen können außerdem situativ sein. Eine Person, die normalerweise Passagiere bedient, könnte in einem Notfall Fracht sichern. Ohne feste Fähigkeiten ist Verantwortung flexibler als ein Charaktertyp. Diese Möglichkeit wird als Teammodell erklärt, nicht als bestätigte Steuerungsregel.',
    'Für Barrierefreiheit ist noch unbekannt, ob einzelne Aufgaben unterschiedliche motorische, visuelle oder auditive Anforderungen besitzen. Die Dear Passengers Rollen sollten später auch danach bewertet werden, sobald Steuerung und Optionen öffentlich sind. Derzeit wäre eine Zugänglichkeitszusage unbelegt.',
    'Bei einer öffentlichen Demo werden Rollenwechsel, Interaktionswege und Arbeitslast geprüft. Ein Test mit einer bestimmten Gruppengröße kann jedoch von der Vollversion abweichen. Die Beschreibung nennt deshalb immer Build und Modus.',
    'Der Rollen-Guide vermeidet optimierende Sprache wie „beste Klasse“, bevor Balance messbar ist. Eine sinnvolle Vorabaufteilung ist keine Rangliste. Erst reale Spielrunden erlauben Empfehlungen zu Schwierigkeit, Verantwortung und Kombination.'
  ],
  'dear-passengers-entwickler-flexus': [
    'Deutsche Nutzer suchen nach „Entwickler“, „Studio“ und „Wer macht Dear Passengers?“. Der Begriff Dear Passengers Entwickler beantwortet die Zuordnung direkt. FLEXUS wird nicht mit ähnlich benannten Fan-Domains oder der Plattform Steam gleichgesetzt; Valve betreibt Steam, während FLEXUS das Produkt entwickelt und veröffentlicht.',
    'Ein Studio-Profil sollte Personenzahlen und Standorte nicht aus veralteten Profilen zusammenrechnen. Teamgröße kann projektabhängig sein und sich ändern. Dieser Guide übernimmt nur klar datierte Selbstauskünfte und vermeidet private Angaben zu einzelnen Beschäftigten.',
    'Frühere Mobile-Spiele sind relevante Historie, aber keine Prognose. Weder Monetarisierung noch Plattformstrategie müssen gleich bleiben. Der Dear Passengers Entwickler erhält für jedes Produkt eine eigene Faktenbasis; ein Mobile-Portfolio bestätigt keine spätere Android-Version des PC-Spiels.',
    'Auch Erfolgsberichte benötigen Kontext. Wunschlisten können Marketinginteresse zeigen, sind aber keine Qualitätsbewertung und kein Umsatz. Die Kombination aus öffentlichem Rang und zugeschriebener Studiozahl ist informativer als eine unkritische Rekordüberschrift.',
    'Wenn FLEXUS neue Partner, Niederlassungen oder Publishing-Vereinbarungen nennt, werden Steam-Felder und Originalmitteilung verglichen. Eine Firmenänderung wird erst übernommen, wenn die Beziehung zum konkreten Spiel eindeutig ist.'
  ],
  'spiele-wie-dear-passengers': [
    'Deutsche Suchende verwenden „Spiele wie“, „ähnliche Spiele“ und „Alternativen“. Der Hauptbegriff Spiele wie Dear Passengers beschreibt Entdeckung, nicht Konkurrenz. Jede Empfehlung braucht mindestens eine konkrete Übereinstimmung und einen ebenso klaren Unterschied.',
    'Der Vergleich wird nach Veröffentlichung neu geprüft. Vielleicht ist Flugsteuerung wichtiger als heute sichtbar, vielleicht dominiert Kabinenservice oder Risikoauswahl. Eine echte Gewichtung kann Titel auf- oder abwerten. Bis dahin orientiert sich die Liste ausschließlich an bestätigten Säulen.',
    'Lokale Verfügbarkeit und Sprache werden auf den offiziellen Stores der Alternativen geprüft, wenn sie für eine Kaufentscheidung relevant werden. Diese Seite nennt keine dauerhaften Preise oder Rabatte. Spiele wie Dear Passengers können ihre Modi und Plattformen durch Updates verändern.',
    'Die Auswahl vermeidet reine Namensnähe. Ein Film, Album oder Verkehrsdokument mit „Dear Passengers“ gehört nicht in einen Spielevergleich. Ebenso reicht ein beliebiges Flugzeugspiel ohne Koop-, Service- oder Physikbezug nicht aus.'
  ]
};

const supplementDetails: Record<string, string[]> = {
  home: [
    'Die inhaltliche Breite wird nicht durch erfundene Unterseiten vergrößert. Preis, Konsolen oder Kontroversen erhalten nur dann eigene deutsche Ziele, wenn zuverlässige Informationen und eine eigenständige lokale Suchabsicht genug Substanz bieten. Bis dahin beantworten Release, News und Feature-Check diese offenen Fragen im passenden Zusammenhang.',
    'Visuell nutzt die deutsche Ausgabe dieselben offiziellen oder klar als redaktionell bezeichneten Motive wie ihre jeweiligen Themengegenstücke. Das ist bei Sprachversionen sinnvoll, weil Bild und Suchabsicht gleich bleiben. Alt-Texte werden jedoch deutsch formuliert, Größen bleiben fest und Social-Preview-Maße unverändert.',
    'Das vollständige Sprachangebot bedeutet nicht, dass jede Sprache gleichzeitig gestartet wird. Zuerst wird der deutsche Cluster technisch und redaktionell geschlossen. Erst danach beginnt die Recherche für Arabisch, Türkisch oder brasilianisches Portugiesisch jeweils neu. Damit entsteht kein globales Netz aus wörtlich übersetzten, schwach belegten Seiten.',
    'Für die Pflege bedeutet das: Eine neue offizielle Tatsache wird zuerst inhaltlich verstanden und danach auf jede betroffene Sprachseite übertragen. Der deutsche Text wird neu formuliert und behält seine lokale Begriffswahl. Dadurch bleiben Aktualität und kulturelle Lesbarkeit verbunden, ohne dass Übersetzungen zeitlich auseinanderlaufen.',
    'Die Startseite dient dabei als Wegweiser, nicht als Ersatz für jede Fachantwort. Sie nennt den belastbaren Status und führt anschließend zur passenden Vertiefung. Das reduziert Wiederholung, stärkt interne Orientierung und verhindert, dass mehrere deutsche URLs um dieselbe Suchfrage konkurrieren.'
  ],
  'dear-passengers-spielerzahl': [
    'Eine spätere Demo kann eine begrenzte Testgruppe vorgeben, die nicht zwingend dem finalen Limit entspricht. Deshalb wird eine beobachtete Messe- oder Playtest-Zahl mit Build und Kontext gespeichert. Erst ein finales Storefeld oder eine eindeutige FLEXUS-Aussage beantwortet die Dear Passengers Spielerzahl ohne Einschränkung.'
  ],
  'dear-passengers-demo': [
    'Auch nach einem Start kann eine Dear Passengers Demo zeitweise entfernt oder durch einen neuen Build ersetzt werden. Der Guide speichert deshalb nicht nur „verfügbar“, sondern Prüfdatum, Plattform und Zugangsweg. So führt ein alter Suchtreffer nicht dauerhaft zu einer abgelaufenen Aktion oder einer nicht mehr erreichbaren Testversion.'
  ],
  'dear-passengers-download': [
    'Für eine veröffentlichte Vollversion werden Prüfsummen nur dann genannt, wenn der offizielle Anbieter sie selbst bereitstellt. Steam verwaltet Dateien im Client; zufällige Hashwerte auf Mirror-Seiten beweisen keine Herkunft. Der Dear Passengers Download wird deshalb über Plattform und Herausgeber verifiziert, nicht über technische Dekoration eines Drittangebots.',
    'Eine angeblich kostenlose Vollversion wäre besonders kritisch, solange FLEXUS weder Preis noch Free-to-Play-Modell bekannt gegeben hat. Kostenlos kann später für eine Demo gelten, aber nicht automatisch für das gesamte Spiel. Der Guide trennt diese Angebote, damit der Suchbegriff „kostenlos herunterladen“ nicht zu einer falschen Kauf- oder Sicherheitsannahme führt.'
  ],
  'dear-passengers-systemanforderungen': [
    'Vor einem Upgrade sollte niemand Hardware nur für ein unveröffentlichtes Spiel kaufen, wenn der vorhandene PC nahe am Minimum liegt. Empfohlene Werte und reale Tests können die Einschätzung verändern. Die Dear Passengers Systemanforderungen sind vorläufige Produktdaten und keine individuelle Kaufberatung für eine bestimmte Grafikkarte oder CPU.',
    'Auch deutsche Dezimal- und Speicherschreibweise bleibt konsistent: 2,5 GHz, 8 GB und 4 GB. Produktnamen werden unverändert übernommen. Das verhindert Missverständnisse zwischen lokaler Darstellung und offiziellen Modellspezifikationen, ohne die Steam-Angabe in eine vermeintlich präzisere Empfehlung umzudeuten.',
    'Ein späterer Patch kann Anforderungen verändern. Deshalb erhalten alte Werte kein unsichtbares Überschreiben: Prüfdatum und Quelle werden gemeinsam angepasst, während relevante Änderungen im News-Tracker erwähnt werden. Die Dear Passengers Systemanforderungen bleiben so zeitlich nachvollziehbar.'
  ],
  'dear-passengers-trailer': [
    'Eine vollständige Szene wird außerdem nicht aus einzelnen Frames rekonstruiert, wenn Schnitt und Reihenfolge unklar sind. Marketingvideos können verschiedene Missionen zusammenschneiden. Der Dear Passengers Trailer zeigt dann mehrere mögliche Momente, aber keine garantiert zusammenhängende Runde. Diese Grenze ist besonders wichtig, wenn aus einer Bildfolge Ursache und Wirkung abgeleitet werden sollen.',
    'Musik, Sprechertext und Schnitt erzeugen Humor und Tempo. Sie sind Teil der Präsentation, nicht zwingend Teil der Spielmechanik. Ein Soundeffekt im Video bestätigt keine räumliche Audiofunktion; ein eingeblendeter Satz bestätigt keine deutsche Benutzeroberfläche. Visuelle und technische Aussagen werden getrennt geprüft.',
    'Die Analyse vermeidet außerdem vollständige Transkripte oder umfangreiche Bildfolgen. Kurze Beschreibungen reichen, um eine Behauptung zu prüfen, während das Originalvideo die maßgebliche Betrachtungsquelle bleibt. Das schützt Rechteinhaber und hält die Seite als eigenständige Einordnung statt als Kopie des Trailers nützlich.',
    'Neue deutsche Untertitel würden nur dann als offizielles Sprachsignal gelten, wenn FLEXUS sie am Originalvideo oder Store bereitstellt. Fan-Untertitel können Verständnis helfen, bestätigen aber keine deutsche Lokalisierung des Spiels und werden entsprechend gekennzeichnet.'
  ],
  'dear-passengers-news': [
    'Für deutsche Leser werden internationale Daten nicht in lokale Uhrzeiten umgerechnet, wenn die Quelle keine genaue Veröffentlichungszeit enthält. Ein Kalendertag reicht dann. Bei einem künftigen Launch werden Zeitzone und Store-Freischaltung dagegen wichtig, weil „24.07.“ je nach Region unterschiedliche Stunden bedeuten kann.',
    'Eine neue Rangposition allein löst nicht jeden Tag eine Inhaltsänderung aus. Relevante Meilensteine oder sachliche Widersprüche werden dokumentiert, normale Schwankungen nicht als dramatische Dear Passengers News aufgeblasen. Das hält die Seite aktuell, ohne Suchmaschinen und Leser mit nahezu identischen Meldungen zu belasten.',
    'Wenn mehrere Medien dieselbe FLEXUS-Mitteilung aufgreifen, zählt das nicht als mehrere unabhängige Bestätigungen. Alle Berichte können auf dieselbe Quelle zurückgehen. Der Tracker verlinkt bevorzugt das Original und nutzt zusätzliche Artikel nur für nachweislich eigene Informationen oder deutsche Einordnung.',
    'Ein sichtbares Änderungsdatum wird nur bei substanzieller Aktualisierung gesetzt. Rechtschreibung oder Layoutkorrekturen erzeugen keine künstliche neue Meldung. Dear Passengers News behalten dadurch einen glaubwürdigen zeitlichen Verlauf und vermeiden Scheinaktualität.'
  ],
  'dear-passengers-bestaetigte-features': [
    'Besonders bei Sprachen ist die Storetabelle maßgeblich. Eine Community-Übersetzung, ein deutscher Guide oder automatisch erzeugte Untertitel machen Deutsch nicht zur unterstützten Spielsprache. Erst eine aktualisierte offizielle Tabelle verändert das entsprechende Dear Passengers Feature.',
    'Bei Plattformen gilt die gleiche Regel. Interesse an PS5 oder Xbox, Controllerbilder und Händlerkategorien bestätigen keinen Port. Eine Konsole benötigt eine FLEXUS-Ankündigung oder einen offiziellen Storeeintrag. Crossplay wird anschließend als eigenes Feature geprüft, weil mehrere Plattformen allein keine Verbindung garantieren.',
    'Der Faktencheck kann auch bestätigte Aussagen zurückstufen, wenn eine Quelle entfernt oder vom Entwickler korrigiert wird. Die Änderung wird begründet und mit Datum versehen. Das Register ist kein unveränderliches Werbeblatt, sondern eine überprüfbare Momentaufnahme des öffentlichen Produktstands.',
    'Bei widersprüchlichen Quellen erhält die aktuellere und produktnähere Angabe Vorrang, ohne die ältere Aussage aus dem historischen Kontext zu löschen. Ein Steam-Feld kann ein frühes Interviewziel ersetzen. Der Unterschied wird erklärt, statt daraus ohne Beleg eine Verschiebung oder gebrochene Zusage zu konstruieren.',
    'Jede Statuszeile muss außerdem eine klare Nutzerfolge besitzen: bestätigt kann eingeplant werden, geplant sollte beobachtet werden, unbekannt darf nicht vorausgesetzt werden. Diese praktische Lesart macht Dear Passengers Features hilfreicher als eine unkommentierte Marketingliste.',
    'Wer eine einzelne Behauptung teilen möchte, findet deshalb immer Status und Kontext zusammen. Ein herausgelöster Tabellenwert ohne Quelle oder Prüfdatum soll nicht stärker wirken als der zugrunde liegende Beleg.'
  ],
  'dear-passengers-rollen': [
    'Charakterdarstellung und Aufgabe sind ebenfalls getrennt. Ein bestimmtes Outfit oder eine sichtbare Figur beweist keine exklusive Rolle. Kosmetik, Avatare und Anpassung sind noch nicht erklärt. Der Guide beschreibt deshalb Handlungen, bevor er aus Erscheinungsbildern ein Klassensystem ableitet.',
    'Falls Aufgaben frei gewechselt werden können, kann ein Team während eines Flugs spontan umplanen. Falls sie gebunden sind, wird die Wahl vor dem Start wichtiger. Beide Modelle passen zur bisherigen Präsentation, keines ist bestätigt. Genau diese offene Designfrage entscheidet später über praktische Rollenempfehlungen.',
    'Eine gute deutsche Anleitung wird nach Veröffentlichung nicht nur englische Rollennamen übertragen. Sie prüft offizielle deutsche Bezeichnungen, falls das Spiel Deutsch unterstützt, oder verwendet verständliche lokale Funktionswörter. Bis dahin bleiben Pilot und Kabinencrew die klarsten Dear Passengers Rollen.',
    'Die Seite unterscheidet außerdem Rollen von allgemeinen Aktionen. Jeder Spieler könnte Gegenstände tragen oder Passagiere ansprechen, ohne dass daraus eine eigene Rolle entsteht. Erst exklusive Aufgaben, Auswahlfelder oder Entwicklerbezeichnungen rechtfertigen eine feinere Klassifizierung. So bleibt der Guide verständlich und vermeidet künstlich aufgeblähte Listen.',
    'Wenn FLEXUS später offizielle Rollennamen veröffentlicht, werden deutsche Begriffe nicht frei erfunden. Zuerst wird geprüft, ob Steam eine lokalisierte Bezeichnung liefert. Andernfalls bleibt der Originalname erhalten und erhält eine verständliche deutsche Erklärung.',
    'Dass das Spiel aktuell keine deutsche Oberfläche listet, ändert diese redaktionelle Aufgabe nicht. Der Guide kann Begriffe verständlich erklären, muss aber klar zwischen eigener Wortwahl und offizieller Ingame-Bezeichnung unterscheiden.'
  ],
  'dear-passengers-entwickler-flexus': [
    'Das Profil vermeidet außerdem eine Vermischung mit anderen Unternehmen gleichen oder ähnlichen Namens. Ein Link muss zum Spieleportfolio, zur Steam-Seite oder zum direkten Interview passen. Pressemitteilungen ohne nachvollziehbaren Absender werden nicht als Studioaussage übernommen.',
    'Bei Übersetzungen aus ukrainischen oder englischen Interviews bleibt die Bedeutung wichtiger als ein wortwörtlicher deutscher Satz. Unsicherheiten, Zeitformen und Bedingungen werden erhalten. Ein sinngemäßes „wir möchten“ darf nicht als „wir werden“ erscheinen, nur um eine stärkere Schlagzeile zu erzeugen.',
    'Der Dear Passengers Entwickler wird nicht anhand einer einzigen viralen Woche bewertet. Spätere Demoqualität, Kommunikation und Veröffentlichung liefern weitere überprüfbare Informationen. Bis dahin ist das Profil eine sachliche Herkunfts- und Quellenübersicht, keine Vorabwertung des Studios.',
    'Für journalistische Sorgfalt werden Zitate nicht aus Social-Media-Karten ohne erreichbares Original übernommen. Falls ein Post gelöscht wurde, braucht es ein vertrauenswürdiges Archiv oder eine direkte Bestätigung. Diese Regel schützt sowohl das Studio als auch Leser vor aus dem Zusammenhang gelösten Aussagen.',
    'Auch Nationalität, Kriegskontext oder Unternehmensgeschichte werden nur genannt, wenn sie durch die Quelle belegt und für Produktion oder Aussage relevant sind. Persönliche Spekulationen über Mitarbeitende gehören nicht in das Profil des Dear Passengers Entwicklers.',
    'Das Profil verlinkt bei Produktfragen zu den thematischen Guides, statt Studioaussagen mehrfach zu kopieren. Dadurch kann ein späteres Interview zentral eingeordnet und auf Release, Demo oder News verteilt werden, ohne widersprüchliche Versionen zu erzeugen.',
    'Für Leser bleibt damit erkennbar, was eine Studiohistorie, eine Selbstauskunft und ein überprüfbares Storefeld jeweils leisten. Diese Transparenz ist wichtiger als eine lückenlose, aber spekulative Firmenerzählung.'
  ],
  'spiele-wie-dear-passengers': [
    'Altersfreigabe und Ton können stark abweichen. Lethal Company oder R.E.P.O. enthalten Horror, während Overcooked! familienfreundlicher wirkt und Sky Team ein Brettspiel ist. Die Empfehlung nennt deshalb nicht nur Mechanik, sondern auch den wichtigsten Unterschied. Eine Gruppe sollte nicht allein nach dem gemeinsamen Wort „Koop“ entscheiden.',
    'Die Reihenfolge ist keine objektive Bestenliste. Sie ordnet Ähnlichkeit zu bestimmten bestätigten Aspekten. Nutzer mit Interesse an Cockpit, Service, Physik oder Risiko erhalten unterschiedliche Einstiege. Nach dem Release können belastbare Spieltests zeigen, welcher Vergleich tatsächlich am nächsten liegt.',
    'Spiele wie Dear Passengers sollen Wartezeit sinnvoll füllen, ohne das kommende Spiel zu ersetzen. Wunschliste und offizielle Demo bleiben die richtigen Wege, um FLEXUS’ eigenes Konzept später zu beurteilen. Der Vergleich wird nicht mit falschen Downloadbuttons oder Vorbestellungsdruck verbunden.',
    'Neue Empfehlungen werden nicht allein wegen Popularität aufgenommen. Ein sehr bekanntes Koop-Spiel ohne passende Aufgaben oder Physik würde die Suchabsicht verwässern. Qualität bedeutet hier eine begründete Auswahl mit Grenzen, nicht die längstmögliche Liste oder eine Sammlung austauschbarer Storelinks.',
    'Nutzerfeedback kann die Gewichtung ergänzen, ersetzt aber keine Produktprüfung. Ein vorgeschlagener Titel wird anhand seiner offiziellen Beschreibung und tatsächlichen Mechanik kontrolliert. So bleiben Spiele wie Dear Passengers nachvollziehbar ausgewählt und nicht von bloßer Erwähnungshäufigkeit bestimmt.'
  ]
};

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^\[\[([^|]+)\|([^\]]+)\]\]$/);
        if (!match) return part;
        return <Link href={match[1]} key={`${match[1]}-${index}`}>{match[2]}</Link>;
      })}
    </>
  );
}

export default function GermanGuidePage({
  guide,
  canonicalPath,
  modifiedDate = '2026-07-24',
  verifiedDate = '24.07.2026',
}: {
  guide: GermanGuide;
  canonicalPath: string;
  modifiedDate?: string;
  verifiedDate?: string;
}) {
  const pageUrl = `https://dearpassengers.net${canonicalPath}`;
  const isNewsOrDemo = guide.slug === 'dear-passengers-news' || guide.slug === 'dear-passengers-demo';
  const resolvedModifiedDate = guide.modifiedDate ?? modifiedDate;
  const resolvedVerifiedDate = guide.verifiedDate ?? verifiedDate;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    mainEntityOfPage: pageUrl,
    datePublished: '2026-07-24',
    dateModified: resolvedModifiedDate,
    inLanguage: 'de',
    author: { '@type': 'Organization', name: 'DearPassengers.net Redaktion', url: 'https://dearpassengers.net/de/ueber-uns/' },
    publisher: {
      '@type': 'Organization',
      name: 'DearPassengers.net',
      url: 'https://dearpassengers.net/',
      logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' },
    },
    image: `https://dearpassengers.net${guide.heroImage}`,
    isPartOf: { '@type': 'WebSite', name: 'DearPassengers.net', url: 'https://dearpassengers.net/de/' },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Dear Passengers auf Deutsch', item: 'https://dearpassengers.net/de/' },
      { '@type': 'ListItem', position: 2, name: guide.title, item: pageUrl },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header locale="de" languageHref={guide.englishPath} />

      <main id="main-content" lang="de">
        <article>
          <header className="article-hero">
            <Image src={guide.heroImage} alt={guide.heroAlt} fill sizes="100vw" priority />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="Brotkrümelnavigation">
                <Link href="/de/">Deutscher Guide</Link><span>/</span><span>{guide.keyword}</span>
              </nav>
              <div className="eyebrow"><span>●</span> {guide.eyebrow}</div>
              <h1>{guide.h1}<br /><em>{guide.h1Accent}</em></h1>
              <p><RichText text={guide.intro} /></p>
              <div className="article-meta">
                <span>Geprüft: {resolvedVerifiedDate}</span><span>Primärquellen: Steam + FLEXUS</span><span>Sprache: Deutsch</span>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc" aria-label="Inhaltsverzeichnis">
              <p>IN DIESEM GUIDE</p>
              {guide.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.heading}</a>)}
              <a href="#faq">FAQ</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Auf Steam vormerken ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote checked={resolvedVerifiedDate} locale="de" note={guide.note} />
              <section id="kurzantwort">
                <span className="kicker">KURZANTWORT</span>
                <h2>{guide.keyword}: Das Wichtigste</h2>
                <p className="snippet-answer"><strong><RichText text={guide.answer} /></strong></p>
                <div className="fact-callout">
                  <span>FAKTENSTATUS</span>
                  <strong>Bestätigt, beobachtet oder offen</strong>
                  <p>Jede Aussage wird nach Quellenstufe gekennzeichnet. Fehlende Angaben werden nicht aus Konkurrenzspielen abgeleitet.</p>
                </div>
              </section>

              {guide.sections.map((section) => (
                <section id={section.id} key={section.id}>
                  <span className="kicker">{section.kicker}</span>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph, index) => <p key={index}><RichText text={paragraph} /></p>)}
                  {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}><RichText text={bullet} /></li>)}</ul>}
                </section>
              ))}

              {supplements[guide.slug || 'home'] && (
                <section id="deutsche-einordnung">
                  <span className="kicker">DEUTSCHE EINORDNUNG</span>
                  <h2>{guide.keyword} im lokalen Suchkontext</h2>
                  {supplements[guide.slug || 'home'].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </section>
              )}

              {supplementDetails[guide.slug || 'home'] && (
                <section id="qualitaetsrahmen">
                  <span className="kicker">QUALITÄTSRAHMEN</span>
                  <h2>{guide.keyword}: Was bei Updates zusätzlich geprüft wird</h2>
                  {supplementDetails[guide.slug || 'home'].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </section>
              )}

              <section id="faq">
                <span className="kicker">HÄUFIGE FRAGEN</span>
                <h2>{guide.keyword} FAQ</h2>
                <p>Kurze Antworten auf deutsche Suchfragen. Maßgeblich bleiben die offizielle Steam-Seite und eindeutig zugeordnete FLEXUS-Mitteilungen.</p>
                <FAQ items={guide.faqs} />
              </section>

              <section id="primaerquellen">
                <span className="kicker">PRIMÄRQUELLEN</span>
                <h2>Offizielle Angaben selbst prüfen</h2>
                <p>
                  Die <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">deutsche Steam-Seite ↗</a> ist die
                  Ausgangsquelle für Plattform, Modi, Sprachen, Anforderungen und den beschriebenen Spielablauf. Das
                  <a href={DOU_RELEASE_INTERVIEW} target="_blank" rel="noopener noreferrer"> direkte FLEXUS-Interview ↗</a>
                  liefert Kontext zu Entwicklung, Demo und Release-Ziel. Medienberichte helfen bei deutscher Terminologie,
                  ersetzen aber keine Produktbestätigung.
                </p>
                {isNewsOrDemo && <p>
                  Für den aktuellen Status werden zusätzlich der <a href={STEAM_NEWS_URL} target="_blank" rel="noopener noreferrer">offizielle Steam-Newsfeed ↗</a> und die <a href={GAMESCOM_PARTICIPATION_URL} target="_blank" rel="noopener noreferrer">Games-From-Ukraine-Teilnehmerinformation ↗</a> geprüft. Die Messequelle bestätigt die Teilnahme von FLEXUS, aber keine öffentliche Vorführung eines Dear-Passengers-Builds.
                </p>}
              </section>

              <section className="related-guide">
                <span className="kicker">DEUTSCHER GUIDE</span>
                <h2>Weitere Dear Passengers Themen</h2>
                <p>Die deutschen Seiten bilden ein zusammenhängendes Themencluster und verlinken gezielt zu den nächsten passenden Fragen.</p>
                <div className="related-actions">
                  <Link className="button" href="/de/">Zur deutschen Startseite →</Link>
                  {guide.related.map((slug) => (
                    <Link className="button button-ghost" href={`/de/${slug}/`} key={slug}>{labels[slug] || slug} →</Link>
                  ))}
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
