import type { Metadata } from 'next';
import GermanTrustPage from '@/components/GermanTrustPage';

export const metadata: Metadata = {
  title: { absolute: 'Kontakt und Korrekturen | DearPassengers.net' },
  description: 'DearPassengers.net auf Deutsch kontaktieren, Quellen und Korrekturen melden oder Datenschutz- und Bildnachweisfragen stellen.',
  alternates: { canonical: '/de/kontakt/', languages: { en: '/contact/', ar: '/ar/contact/', de: '/de/kontakt/', 'x-default': '/contact/' } },
};

export default function GermanContactPage() {
  return <GermanTrustPage title="Kontakt und Korrekturen" englishPath="/contact/" lede="Für Korrekturen, neue Primärquellen, Datenschutzfragen und Bildnachweise erreichen Sie die Redaktion unter hello@dearpassengers.net. DearPassengers.net ist keine Supportstelle des Spieleentwicklers." sections={[
    { heading: 'Was eine Korrektur enthalten sollte', paragraphs: ['Nennen Sie die betroffene URL, den genauen Satz oder Status, die vorgeschlagene Änderung und möglichst die ursprüngliche Steam-, FLEXUS- oder Interviewquelle. Screenshots sind hilfreich, wenn zusätzlich die erreichbare Ursprungsseite genannt wird.'] },
    { heading: 'Was danach geschieht', paragraphs: ['Wir prüfen Quelle, Datum und Kontext. Eine bestätigte Änderung wird in sichtbarem Text, Tabellen, FAQ, Schema, Änderungsdatum und verbundenen Sprachversionen nachvollzogen. Nicht jede Anfrage führt zu einer Änderung, aber sachliche Hinweise werden geprüft.'] },
    { heading: 'Spiel-Support', paragraphs: ['Bei Konto-, Kauf-, Rückerstattungs-, Bug- oder Communityfragen wenden Sie sich an Steam oder einen offiziellen FLEXUS-Kanal. Wir können keine Keys ausstellen, Testzugänge freischalten oder technische Kontoprobleme lösen.'] },
    { heading: 'Datenschutz', paragraphs: ['Senden Sie keine Passwörter, Zahlungsdaten oder vertraulichen Kontodokumente. Für Fragen zur Einwilligung und zu externen Diensten gilt die deutsche Datenschutzerklärung.'] },
  ]} />;
}
