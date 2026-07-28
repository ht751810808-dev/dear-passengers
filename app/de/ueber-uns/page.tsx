import type { Metadata } from 'next';
import GermanTrustPage from '@/components/GermanTrustPage';

export const metadata: Metadata = {
  title: { absolute: 'Über DearPassengers.net: Unabhängiger deutscher Spiele-Guide' },
  description: 'Zweck, Unabhängigkeit, Quellenstandard und Aktualisierungsprozess der deutschen Dear Passengers Guides.',
  alternates: { canonical: '/de/ueber-uns/', languages: { en: '/about/', ar: '/ar/about/', de: '/de/ueber-uns/', tr: '/tr/hakkimizda/', 'pt-BR': '/pt-br/sobre/', 'x-default': '/about/' } },
};

export default function GermanAboutPage() {
  return <GermanTrustPage title="Über uns" englishPath="/about/" lede="DearPassengers.net ist ein unabhängiger, inoffizieller Informationsdienst zum Spiel Dear Passengers. Die deutsche Ausgabe beantwortet lokale Suchfragen mit überprüften Quellen und ist weder eine automatische Übersetzung noch eine offizielle FLEXUS-Seite." sections={[
    { heading: 'Was wir abdecken', paragraphs: ['Die Website bündelt Gameplay, Rollen, Spielerzahl, Release, Demo, Download, Systemanforderungen, Trailer, Studioinformationen und datierte News. Jede Fachseite besitzt eine eigene Suchabsicht und verweist auf verwandte deutsche Inhalte.', 'Wir veröffentlichen keine angeblichen Downloads, Keys oder Produktdaten, die nicht zu einem offiziellen Store oder Entwicklerkanal zurückgeführt werden können.'] },
    { heading: 'Wie wir arbeiten', paragraphs: ['Steam, offizielle FLEXUS-Mitteilungen und direkte Entwicklerinterviews haben Vorrang. Deutsche Medien und Suchergebnisse helfen bei lokaler Terminologie und offenen Nutzerfragen, ersetzen aber keine Produktbestätigung.', 'Aussagen werden als bestätigt, beobachtet, geplant oder unbekannt eingeordnet. Zeitkritische Angaben erhalten ein Prüfdatum.'] },
    { heading: 'Unabhängigkeit und Bildnachweise', paragraphs: ['DearPassengers.net gehört weder zu FLEXUS noch zu Valve oder Steam. Offizielle Spielbilder bleiben Eigentum ihrer Rechteinhaber; redaktionelle Illustrationen werden als solche bezeichnet.', 'Werbung beeinflusst keine Faktenklassifizierung. Externe Links werden nach inhaltlicher Relevanz gesetzt.'] },
    { heading: 'Korrekturen', paragraphs: ['Fehler können über die deutsche Kontaktseite gemeldet werden. Eine Originalquelle oder ein nachvollziehbarer Kontext beschleunigt die Prüfung. Wesentliche Korrekturen werden auf allen betroffenen Sprachversionen synchronisiert.'] },
  ]} />;
}
