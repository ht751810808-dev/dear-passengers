import type { Metadata } from 'next';
import GermanTrustPage from '@/components/GermanTrustPage';

export const metadata: Metadata = {
  title: { absolute: 'Kontakt und Korrekturen | DearPassengers.net' },
  description: 'DearPassengers.net auf Deutsch kontaktieren, Quellen und Korrekturen melden oder Datenschutz- und Bildnachweisfragen stellen.',
  alternates: { canonical: '/de/kontakt/', languages: { en: '/contact/', ar: '/ar/contact/', de: '/de/kontakt/', tr: '/tr/iletisim/', 'pt-BR': '/pt-br/contato/', es: '/es/contacto/', 'my-MM': '/my/contact/', 'x-default': '/contact/' } },
};

export default function GermanContactPage() {
  return <GermanTrustPage title="Kontakt und Korrekturen" englishPath="/contact/" lede="Für Korrekturen, neue Primärquellen, Datenschutzfragen, Bildnachweise und technische Barrieren erreichen Sie die Redaktion unter hello@dearpassengers.net. DearPassengers.net ist ein unabhängiger, inoffizieller Spiele-Guide und keine Supportstelle von FLEXUS, Valve oder Steam. Diese Seite erklärt, welche Angaben eine Anfrage prüfbar machen und was nach dem Eingang geschieht." sections={[
    {
      heading: 'Der richtige Kontaktweg',
      paragraphs: [
        'Senden Sie Ihre Nachricht an hello@dearpassengers.net. Ein eindeutiger Betreff wie „Korrektur Deutsch“, „neue Primärquelle“, „Bildnachweis“, „Datenschutz“ oder „Barriere melden“ erleichtert die Zuordnung. Für eine sachliche Prüfung ist keine lange Vorstellung erforderlich; wichtiger sind die betroffene Seite, die konkrete Aussage und eine Quelle, die auch Leser direkt öffnen können.',
        'Die Redaktion beantwortet redaktionelle und websitebezogene Anliegen. Allgemeine Wünsche zur Spielentwicklung dürfen gern als Kontext genannt werden, werden aber nicht als bestätigte Produktinformation veröffentlicht. DearPassengers.net kann keine Erklärung im Namen des Studios abgeben und leitet Nachrichten nicht automatisch an FLEXUS weiter.',
      ],
    },
    {
      heading: 'Was eine Korrektur enthalten sollte',
      paragraphs: [
        'Nennen Sie die vollständige DearPassengers.net-URL, den genauen Satz, Tabellenwert, FAQ-Eintrag, Bildtext oder Status, den Sie für falsch oder überholt halten. Formulieren Sie anschließend die vorgeschlagene Änderung in einfachen Worten. Bei Release, Plattform, Sprache, Spielerzahl, Demo, Eingabegerät oder Systemanforderungen ist ein direkter Link zur offiziellen Steam-Seite, zu einem FLEXUS-Kanal oder zum jeweiligen Plattformanbieter besonders wichtig.',
        'Ein Screenshot kann einen früheren Zustand dokumentieren, ersetzt aber keine erreichbare Ursprungsseite, wenn eine solche existiert. Bitte nennen Sie Aufnahmedatum, Quelle und Kontext. Ein Medienbericht oder Communitybeitrag kann eine Frage begründen, bestätigt jedoch allein keine Spieleigenschaft. Bei Übersetzungsfehlern helfen die deutsche Formulierung, die betroffene englische Ausgangsstelle und eine kurze Begründung.',
      ],
    },
    {
      heading: 'So wird ein Hinweis geprüft',
      paragraphs: [
        'Zuerst werden Absenderbehauptung, Quelle, Datum und Kontext getrennt bewertet. Offizielle Store- und Entwicklerangaben erhalten Vorrang. Trailerbilder werden nur als sichtbare Beobachtung beschrieben, solange keine begleitende Aussage die Funktion bestätigt. Fehlt eine Primärquelle, kann der Text als unbestätigt oder unbekannt gekennzeichnet bleiben, statt eine Vermutung als Tatsache zu veröffentlichen.',
        'Eine bestätigte Änderung wird nicht nur im gemeldeten Satz betrachtet. Die Redaktion prüft verbundene Tabellen, FAQ-Antworten, strukturierte Daten, Änderungsdaten, interne Links und relevante Sprachversionen. Ein Datum wird nur bei einer echten inhaltlichen Änderung oder erneuten wesentlichen Verifikation aktualisiert. Nicht jede Anfrage führt zu einer Änderung, sachliche und überprüfbare Hinweise werden jedoch nach demselben Redaktionsstandard bewertet.',
      ],
    },
    {
      heading: 'Bildrechte, Quellen und Namensnennung',
      paragraphs: [
        'Wenn Sie Rechteinhaber eines verwendeten Bildes, Textausschnitts oder Videos sind, nennen Sie das Werk, die konkrete Fundstelle auf DearPassengers.net, Ihre Beziehung zum Werk und die gewünschte Maßnahme. Hilfreich ist eine öffentlich nachvollziehbare Originalquelle oder ein anderer angemessener Nachweis. Senden Sie keine Ausweiskopie, wenn ein weniger sensibles Dokument oder eine Nachricht von einer offiziellen Domain genügt.',
        'Mögliche Maßnahmen sind eine korrigierte Namensnennung, ein anderer Quelllink, ein Austausch, eine zusätzliche Erläuterung oder die Entfernung. Die redaktionelle Nutzung wird im Einzelfall geprüft; das bloße Auffinden eines Materials auf einer Drittseite macht diese Seite nicht automatisch zum Ursprung. Dringende Rechtehinweise sollten im Betreff klar gekennzeichnet werden.',
      ],
    },
    {
      heading: 'Datenschutzanfragen',
      paragraphs: [
        'Senden Sie keine Passwörter, Zahlungsdaten, Steam-Anmeldedaten oder vertraulichen Kontodokumente. Die öffentliche Website bietet keine Benutzerkonten, Kommentare, Datei-Uploads oder Zahlungsabwicklung. Eine Datenschutzanfrage betrifft daher typischerweise eine frühere E-Mail, einen versehentlich veröffentlichten Personenbezug oder Fragen zu Analytics, Werbung und Einwilligung.',
        'Beschreiben Sie, welche Information betroffen ist und wo sie erscheint. Bei einer Anfrage zu einer früheren E-Mail ist eine Nachricht von derselben Adresse meist der datensparsamste Weg zur Zuordnung. Einzelheiten zu Google Analytics, Google AdSense, Cookies, lokaler Speicherung, europäischen Einwilligungsoptionen, Aufbewahrung und Betroffenenrechten stehen in der deutschen Datenschutzerklärung, die dauerhaft im Fußbereich verlinkt ist.',
      ],
    },
    {
      heading: 'Technische und barrierebezogene Hinweise',
      paragraphs: [
        'Melden Sie defekte Links, unlesbare Kontraste, überlappende Elemente, Tastaturprobleme, fehlende Alternativtexte oder Inhalte, die auf einem bestimmten Gerät nicht erreichbar sind. Nennen Sie nach Möglichkeit URL, Browser, Betriebssystem, ungefähre Fenstergröße und die Schritte bis zum Fehler. Ein zugeschnittener Screenshot ohne private Tabs oder Kontodaten kann die Reproduktion erleichtern.',
        'Bei Sicherheitsproblemen veröffentlichen Sie keine Anleitung, die Besucher gefährdet. Beschreiben Sie Auswirkung und betroffene URL direkt per E-Mail. Die Redaktion kann keine Prämie oder ein formales Bug-Bounty-Programm zusagen, nimmt konkrete Hinweise zur Sicherheit und Zugänglichkeit der eigenen Website aber ernst.',
      ],
    },
    {
      heading: 'Spiel-Support und offizielle Stellen',
      paragraphs: [
        'Bei Steam-Konto, Kauf, Rückerstattung, Wunschliste, Store-Zugriff oder Zahlungsfragen wenden Sie sich an den offiziellen Steam-Support. Für Fehler in einem später veröffentlichten Spiel, Serverprobleme, Communityregeln, Presseanfragen, Partnerschaften oder Jobs ist ein eindeutig offizieller FLEXUS-Kanal zuständig. Prüfen Sie Domain und Profilverknüpfung, bevor Sie Zugangsdaten oder Dateien übermitteln.',
        'DearPassengers.net kann keine Keys ausstellen, Testzugänge freischalten, Demo-Dateien bereitstellen, Rückerstattungen bearbeiten oder technische Kontoprobleme lösen. Eine angebliche Download- oder Beta-Einladung wird erst als offiziell beschrieben, wenn sie von Steam, FLEXUS oder einem bestätigten Plattformanbieter nachvollziehbar erreichbar ist.',
      ],
    },
    {
      heading: 'Erwartbare Antwort und Nachverfolgung',
      paragraphs: [
        'Eine Eingangsbestätigung oder feste Antwortzeit wird nicht garantiert. Vollständige, klar belegte Hinweise lassen sich schneller prüfen als allgemeine Aussagen ohne URL. Wenn neue Belege hinzukommen, antworten Sie im bestehenden E-Mail-Verlauf, damit Kontext und frühere Prüfung zusammenbleiben. Wiederholte Nachrichten beschleunigen eine externe Ankündigung oder eine noch nicht bestätigte Produktentscheidung nicht.',
        'Nach einer sichtbaren Korrektur können Sie die betroffene Seite und deren Verifikationsdatum erneut prüfen. Falls ein Punkt missverstanden wurde, antworten Sie mit der verbleibenden Abweichung und der Primärquelle. Die ausführlichen Regeln für Quellenhierarchie, bestätigte und beobachtete Aussagen, Aktualisierungen, Werbung und KI-Unterstützung stehen in den Redaktionsrichtlinien.',
      ],
    },
  ]} />;
}
