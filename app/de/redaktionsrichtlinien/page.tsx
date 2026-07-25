import type { Metadata } from 'next';
import GermanTrustPage from '@/components/GermanTrustPage';

export const metadata: Metadata = {
  title: { absolute: 'Redaktionsrichtlinien: Quellen, Updates und Korrekturen' },
  description: 'Deutsche Redaktionsrichtlinien von DearPassengers.net zu Quellenpriorität, Faktenstatus, Aktualisierungen, KI-Unterstützung und Korrekturen.',
  alternates: { canonical: '/de/redaktionsrichtlinien/', languages: { en: '/editorial-policy/', ar: '/ar/editorial-policy/', de: '/de/redaktionsrichtlinien/', 'x-default': '/editorial-policy/' } },
};

export default function GermanEditorialPage() {
  return <GermanTrustPage title="Redaktionsrichtlinien" englishPath="/editorial-policy/" lede="Diese Regeln erklären, wie DearPassengers.net Informationen auswählt, lokalisiert, kennzeichnet, aktualisiert und korrigiert. Sie gelten für die deutsche Ausgabe und ihre Verbindungen zu den englischen und chinesischen Seiten." sections={[
    { heading: 'Quellenpriorität', paragraphs: ['Offizielle Storefelder und FLEXUS-Veröffentlichungen stehen an erster Stelle. Direkte Interviews liefern Kontext. Seriöse Medien, Foren und Suchfragen dienen der Einordnung und Themenfindung, aber nicht als Ersatz für eine Primärquelle.'] },
    { heading: 'Bestätigt, beobachtet, geplant und unbekannt', paragraphs: ['Bestätigt verlangt eine eindeutige Produkt- oder Entwickleraussage. Beobachtet beschreibt sichtbares Material ohne vollständige Funktionszusage. Geplant kennzeichnet eine Absicht ohne veröffentlichte Umsetzung. Unbekannt füllt eine öffentliche Informationslücke nicht mit Vermutung.'] },
    { heading: 'Lokalisierung statt Direktübersetzung', paragraphs: ['SEO-Titel, Hauptbegriffe, Fragen und Überschriften werden anhand deutscher Such- und Mediensprache gewählt. Fakten können sprachübergreifend gleich sein, doch Aufbau, Erklärungen und Beispiele werden für deutsche Nutzer neu formuliert.'] },
    { heading: 'Updates und Korrekturen', paragraphs: ['Bei wesentlichen Änderungen werden Text, FAQ, Schema, Datum, Sitemap und interne Links gemeinsam geprüft. Hreflang-Paare bleiben vollständig und wechselseitig. Alte Ranglistenstände werden mit Datum bewahrt, wenn sie eine Entwicklung dokumentieren.'] },
    { heading: 'Automatisierung und KI-Unterstützung', paragraphs: ['Werkzeuge können Recherche, Struktur, Übersetzungshilfe und Qualitätsprüfung unterstützen. Fakten erhalten dadurch keinen höheren Status. Die Redaktion bleibt für Quellenwahl, Formulierung, Veröffentlichung und Korrektur verantwortlich.'] },
    { heading: 'Unabhängigkeit', paragraphs: ['Die Website ist nicht mit FLEXUS, Valve oder Steam verbunden. Werbung oder externe Links ändern keine Faktenklassifizierung.'] },
  ]} />;
}
