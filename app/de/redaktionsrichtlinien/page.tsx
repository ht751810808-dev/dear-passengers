import type { Metadata } from 'next';
import GermanTrustPage from '@/components/GermanTrustPage';

export const metadata: Metadata = {
  title: { absolute: 'Redaktionsrichtlinien: Quellen, Updates und Korrekturen' },
  description: 'Deutsche Redaktionsrichtlinien von DearPassengers.net zu Quellenpriorität, Faktenstatus, Aktualisierungen, KI-Unterstützung und Korrekturen.',
  alternates: { canonical: '/de/redaktionsrichtlinien/', languages: { en: '/editorial-policy/', ar: '/ar/editorial-policy/', de: '/de/redaktionsrichtlinien/', tr: '/tr/editorial-policy/', 'pt-BR': '/pt-br/politica-editorial/', es: '/es/politica-editorial/', 'my-MM': '/my/editorial-policy/', 'x-default': '/editorial-policy/' } },
};

export default function GermanEditorialPage() {
  return <GermanTrustPage title="Redaktionsrichtlinien" englishPath="/editorial-policy/" lede="Letzte inhaltliche Prüfung: 20. August 2026. Diese Regeln erklären, wie DearPassengers.net Informationen auswählt, lokalisiert, kennzeichnet, aktualisiert und korrigiert. Sie gelten für die gesamte deutsche Ausgabe und machen nachvollziehbar, warum eine Aussage als bestätigt, beobachtet, geplant oder unbekannt erscheint." sections={[
    {
      heading: 'Auftrag und Geltungsbereich der deutschen Redaktion',
      paragraphs: [
        'DearPassengers.net ist ein unabhängiger Informationsdienst für Menschen, die das noch unveröffentlichte Spiel Dear Passengers verfolgen. Die deutsche Redaktion bündelt den öffentlich bekannten Produktstatus, ordnet Suchfragen ein und führt Leser zu den jeweils passenden Detailseiten. Sie verkauft das Spiel nicht, hostet keine Installationsdateien und bietet weder Steam-Schlüssel noch Vorbestellungen an. Die Website ist nicht mit FLEXUS, Valve oder Steam verbunden.',
        'Diese Richtlinie gilt für deutsche Spiel-, Gameplay-, Release-, Demo-, Download-, Rollen-, Spielerzahl-, Systemanforderungs-, Entwickler- und Nachrichtenseiten sowie für zugehörige Vertrauensseiten. Jede Seite soll eine klar abgegrenzte Frage beantworten. Eine neue URL wird nicht allein deshalb angelegt, weil sich ein Suchbegriff geringfügig anders schreiben lässt. Ohne eigenständige Suchabsicht, ausreichende Belege und zusätzlichen Nutzwert bleibt die Information auf einer bestehenden Seite.',
      ],
    },
    {
      heading: 'Quellenhierarchie und Auswahl belastbarer Belege',
      paragraphs: [
        'An erster Stelle stehen aktuelle Produkteinträge und Veröffentlichungen des Rechteinhabers: die offizielle Steam-Seite, eindeutig zugeordnete FLEXUS-Kanäle, offizielle Videos, Storefelder und direkte Aussagen des Studios. Ein benanntes Entwicklerinterview kann Pläne und Hintergründe erklären. Dabei wird unterschieden, ob das Studio eine verfügbare Funktion bestätigt, ein Entwicklungsziel beschreibt oder nur eine Möglichkeit erwähnt.',
        'Seriöse Fachmedien können unabhängige Beobachtungen, Messeerfahrungen oder wörtlich zuordenbare Aussagen ergänzen. Foren, Kommentare, Suchvorschläge und soziale Netzwerke helfen vor allem dabei, offene Fragen der Spieler zu erkennen. Sie ersetzen keine Primärquelle für Termin, Preis, Spielerzahl, Plattform oder Systemfunktion. Datenbanken, Händler-Platzhalter und automatisch erzeugte Spieleprofile werden nicht stärker gewichtet, nur weil viele Websites dieselbe Angabe wiederholen.',
      ],
    },
    {
      heading: 'Bestätigt, beobachtet, geplant, abgeleitet und unbekannt',
      paragraphs: [
        '„Bestätigt“ verlangt eine eindeutige Angabe in einer aktuellen Primärquelle. „Beobachtet“ beschreibt nur, was in einem offiziellen Screenshot oder Video sichtbar ist; ein Gegenstand im Trailer beweist weder seine Häufigkeit noch ein vollständiges Spielsystem. „Geplant“ kennzeichnet eine öffentlich genannte Absicht, die noch nicht verfügbar ist. Eine angekündigte Demo bleibt deshalb ein Plan, bis ein offizieller Download- oder Playtest-Zugang erscheint.',
        '„Abgeleitet“ bezeichnet eine vorsichtige Schlussfolgerung aus mehreren bekannten Punkten und wird nicht wie eine Zusage formuliert. „Unbekannt“ ist die korrekte Antwort, wenn eine belastbare öffentliche Angabe fehlt. Das betrifft derzeit unter anderem den exakten Veröffentlichungstag, den Preis und die maximale Spielerzahl. Fehlende Information wird weder als Bestätigung noch als Absage interpretiert: „nicht für PS5 angekündigt“ bedeutet nicht „wird niemals für PS5 erscheinen“.',
      ],
    },
    {
      heading: 'Recherche, Gegenprüfung und Dokumentation',
      paragraphs: [
        'Vor einer wesentlichen Änderung wird die ursprüngliche Quelle geöffnet und mit dem bestehenden Faktenregister verglichen. Dynamische Angaben wie Steam-Ranglisten, Wunschlistenzahlen oder Storestatus erhalten ein Prüfdatum. Wenn eine Zahl vom Studio stammt und nicht öffentlich in einem Valve-Konto überprüfbar ist, wird sie ausdrücklich FLEXUS zugeschrieben. Eine Entwicklerangabe wird nicht in Verkäufe, aktive Spieler oder Umsatz umgerechnet.',
        'Trailer und Screenshots werden als visuelle Belege getrennt von Produkttexten behandelt. Die Redaktion notiert, was tatsächlich zu sehen ist, aus welchem offiziellen Material die Szene stammt und welche Interpretation darüber hinausgeht. Reuploads gelten nicht automatisch als neue Ankündigung. Ein später hochgeladenes identisches Video erhält keinen neuen Produktstatus, wenn es keine zusätzliche Aussage oder neues Bildmaterial enthält.',
      ],
    },
    {
      heading: 'Lokalisierung statt mechanischer Übersetzung',
      paragraphs: [
        'Deutsche Titel, Hauptbegriffe, Fragen und Zwischenüberschriften folgen natürlicher deutscher Such- und Mediensprache. Fakten können sprachübergreifend gleich sein, doch Aufbau, Beispiele, Datumsformat, Sicherheitswarnungen und Erklärungen werden für deutschsprachige Nutzer neu formuliert. Eine lokalisierte Seite darf keine Produktfunktion erfinden und auch nicht den Eindruck erwecken, die Existenz eines deutschen Guides bestätige eine deutsche Spieloberfläche.',
        'Hreflang verbindet inhaltlich entsprechende Sprachfassungen. Es ersetzt keine echte Lokalisierung und wird nur gesetzt, wenn die Zielseite erreichbar, kanonisch und thematisch passend ist. Unterschiede zwischen Sprachfassungen sind zulässig, wenn lokale Suchfragen oder verfügbare Quellen dies begründen. Eine wörtliche Absatz-für-Absatz-Kopie mit ausgetauschten Schlüsselwörtern entspricht nicht unserem Standard.',
      ],
    },
    {
      heading: 'Seitenarchitektur, Suchabsicht und interne Verlinkung',
      paragraphs: [
        'Die Startseite ist der breite Überblick. Detailseiten besitzen eine engere Aufgabe: Gameplay erklärt den veröffentlichten Ablauf, die Release-Seite bewertet Termine, die Download-Seite trennt offiziellen Zugang von riskanten Dateien und die Entwicklerseite ordnet FLEXUS ein. Überschneidungen werden auf den notwendigen Kontext begrenzt. Eine Seite soll nicht für jede verwandte Suchphrase denselben vollständigen Absatz wiederholen.',
        'Kontextuelle Links führen von einer Aussage zur passenden Vertiefung. Zusätzlich erhält eine Inhaltsseite nachvollziehbare Wege zur Sprach- oder Themenübersicht und zu eng verwandten Fragen. Globale Fußzeilenlinks zählen nicht als Ersatz für sinnvolle Verweise im Hauptinhalt. Vor der Veröffentlichung prüft ein automatisierter Audit unter anderem defekte Ziele, Fragmente, Canonicals, Hreflang und die Zahl unabhängiger inhaltlicher Eingänge.',
      ],
    },
    {
      heading: 'Aktualisierungen, Datumsangaben und Versionslogik',
      paragraphs: [
        'Ein sichtbares Änderungsdatum wird nur bei einer inhaltlich relevanten Prüfung oder Überarbeitung angepasst. Rechtschreibung, Formatierung und rein technische Builds erzeugen kein künstlich frisches Datum. Wenn sich ein offizieller Storewert ändert, werden betroffene Antwortboxen, Fließtext, FAQ, strukturierte Daten, interne Links und Sitemapangaben gemeinsam geprüft, damit verschiedene Seiten nicht widersprüchliche Zustände zeigen.',
        'Zeitgebundene Beobachtungen bleiben mit ihrem damaligen Datum erhalten, wenn sie eine Entwicklung dokumentieren. Eine frühere Ranglistenposition wird nicht stillschweigend zur heutigen Position erklärt. Veraltete Aussagen werden korrigiert oder als historischer Stand markiert. Bei einem noch nicht veröffentlichten Spiel ist diese Chronologie wichtiger als eine häufige, aber inhaltsleere Aktualisierung.',
      ],
    },
    {
      heading: 'Korrekturen, Hinweise und nachvollziehbare Entscheidungen',
      paragraphs: [
        'Korrekturhinweise können über die dauerhaft verlinkte deutsche Kontaktseite gesendet werden. Hilfreich sind die betroffene URL, die genaue Aussage und ein erreichbarer Originalbeleg. Ein Hinweis wird nach Herkunft, Aktualität und Aussagekraft geprüft; die bloße Zahl identischer Nachrichten entscheidet nicht über den Faktenstatus. Persönliche Daten, Passwörter, Zahlungsinformationen oder nicht notwendige Dokumente sollen nicht mitgesendet werden.',
        'Bestätigt eine Quelle den Fehler, wird die betroffene Formulierung berichtigt und bei wesentlichen Änderungen das Prüfdatum aktualisiert. Ein abweichender Wunsch nach stärkerer Werbesprache ist keine faktische Korrektur. Rechte-, Bild- und Zuschreibungshinweise werden getrennt vom Produktstatus geprüft, damit eine redaktionelle Änderung nicht versehentlich als neue Spieleankündigung erscheint.',
      ],
    },
    {
      heading: 'Automatisierung, Übersetzungshilfe und KI',
      paragraphs: [
        'Werkzeuge können bei Quellensuche, Strukturierung, Rechtschreibprüfung, Übersetzungshilfe, Linkkontrolle und technischen Tests unterstützen. Sie erhalten dadurch keine eigene Quellenautorität. Automatisch vorgeschlagene Daten, Funktionen oder Interpretationen müssen gegen erreichbare Primärquellen geprüft werden. Ein flüssig formulierter Satz ist kein Beleg für seine sachliche Richtigkeit.',
        'Die redaktionelle Verantwortung bleibt bei der Veröffentlichung: Auswahl der Suchabsicht, Quellengewichtung, Kennzeichnung, finale Formulierung und Korrektur dürfen nicht an eine unbeaufsichtigte Generierung delegiert werden. Automatisch skalierte Seiten ohne manuelle Prüfung werden nicht veröffentlicht. Generierte Illustrationen müssen als redaktionelle Gestaltung erkennbar bleiben und dürfen nicht als offizieller Screenshot oder als Beweis einer Spielmechanik erscheinen.',
      ],
    },
    {
      heading: 'Werbung, externe Links und redaktionelle Unabhängigkeit',
      paragraphs: [
        'Werbung ändert weder die Auswahl einer Quelle noch den Status einer Aussage. Anzeigen werden nicht auf dieser Richtlinienseite, auf Datenschutz-, Kontakt- oder Über-uns-Seiten und nicht in Sprachbereichen geladen, deren Hauptsprache von Google Publisher-Produkten nicht unterstützt wird. Inhaltsseiten müssen auch ohne Werbung vollständig nutzbar bleiben; Navigation, Downloadhinweise und Steam-Verweise dürfen nicht wie Anzeigen getarnt werden.',
        'Aktuelle Links zum Steam-Shop sind direkte, unbezahlte Quellen- und Wunschlistenlinks. Falls künftig eine Vergütung oder ein Sponsoring hinzukommt, muss dies sichtbar offengelegt werden. Externe Websites besitzen eigene Inhalte, Bedingungen und Datenschutzpraktiken. Ein Link dient als Beleg oder weiterführender Weg und ist keine pauschale Empfehlung aller Inhalte des Zielangebots.',
      ],
    },
    {
      heading: 'Bilder, Urheberrecht und Verantwortlichkeit',
      paragraphs: [
        'Offizielle Screenshots und Trailerbilder werden sparsam zur Identifikation, Analyse und redaktionellen Einordnung verwendet. Dateiname, Alternativtext und Quellenkontext sollen verständlich sein. Ein Bild wird nicht so bearbeitet, dass es eine nicht vorhandene Funktion vortäuscht. Rechteinhaber können über den Kontaktweg eine Zuschreibungs- oder Nutzungsprüfung anstoßen; die Redaktion prüft dann Quelle, Zweck und erforderliche Änderung.',
        'Diese Richtlinie ist eine transparente Arbeitsbeschreibung und keine Behauptung, dass Fehler unmöglich sind. Entscheidend ist, dass Leser den Status einer Aussage erkennen, den wichtigsten Beleg erreichen und eine sachliche Korrektur melden können. Die englische Redaktionsrichtlinie ist über die Sprachumschaltung erreichbar; bei Abweichungen wird geprüft, welche Fassung zuletzt substanziell aktualisiert wurde.',
      ],
    },
  ]} />;
}
