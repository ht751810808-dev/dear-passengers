import type { Metadata } from 'next';
import GermanTrustPage from '@/components/GermanTrustPage';

export const metadata: Metadata = {
  title: { absolute: 'Datenschutzerklärung | DearPassengers.net' },
  description: 'Deutsche Datenschutzerklärung zu Google Analytics, AdSense, Einwilligung, externen Diensten, Aufbewahrung und Datenschutzoptionen.',
  alternates: { canonical: '/de/datenschutz/', languages: { en: '/privacy-policy/', ar: '/ar/privacy-policy/', de: '/de/datenschutz/', tr: '/tr/gizlilik/', 'pt-BR': '/pt-br/privacidade/', es: '/es/privacidad/', 'x-default': '/privacy-policy/' } },
};

export default function GermanPrivacyPage() {
  return <GermanTrustPage title="Datenschutzerklärung" englishPath="/privacy-policy/" lede="Diese verständliche deutsche Fassung beschreibt die auf DearPassengers.net eingesetzten Dienste und Auswahlmöglichkeiten. Sie ergänzt die englische Originalrichtlinie; bei rechtlichen Fragen sollte die jeweils aktuelle vollständige Fassung geprüft werden." sections={[
    { heading: 'Google Analytics', paragraphs: ['Google Analytics kann nach Ihrer Einwilligung technische Nutzungsdaten verarbeiten, um Reichweite und Seitenqualität zu messen. Dazu können gekürzte Netzwerk-, Geräte-, Browser- und Interaktionsinformationen gehören. Die Einwilligung kann über die Datenschutzeinstellungen geändert werden.'] },
    { heading: 'Google AdSense und Cookies', paragraphs: ['Google AdSense kann Anzeigen ausliefern und – abhängig von Region und Einwilligung – Cookies oder ähnliche Technologien verwenden. Personalisierte Werbung wird nicht ohne die erforderliche Zustimmung aktiviert. DearPassengers.net verkauft keine Downloadzugänge oder Spielerkonten.'] },
    { heading: 'Europäische Einwilligung', paragraphs: ['Für Besucher im Europäischen Wirtschaftsraum, Vereinigten Königreich und der Schweiz werden nicht notwendige Mess- und Werbespeicher standardmäßig abgelehnt, bis eine Auswahl getroffen wurde. Eine frühere Entscheidung kann über „Datenschutzeinstellungen“ im Fußbereich geändert werden.'] },
    { heading: 'Externe Dienste', paragraphs: ['Links zu Steam, FLEXUS, YouTube und anderen Quellen öffnen externe Websites mit eigenen Richtlinien. Eingebettete Inhalte können zusätzliche Verbindungen aufbauen, wenn sie geladen oder abgespielt werden.'] },
    { heading: 'Aufbewahrung und Rechte', paragraphs: ['Technische Protokolle und aggregierte Messdaten werden nur im Rahmen der jeweiligen Dienste und Zwecke aufbewahrt. Je nach Rechtsraum können Auskunft, Berichtigung, Löschung, Einschränkung und Widerspruch möglich sein. Datenschutzanfragen können an hello@dearpassengers.net gesendet werden.'] },
    { heading: 'Kinder und sensible Informationen', paragraphs: ['Die Website fordert keine sensiblen persönlichen Daten an und richtet keine Konten für Kinder ein. Bitte senden Sie keine Passwörter, Zahlungsdaten oder Identitätsdokumente über das Kontaktpostfach.'] },
    { heading: 'Rechtlicher Hinweis für Deutschland', paragraphs: ['Diese Lokalisierung erfindet keine Betreiberadresse oder Registerangaben. Ob eine zusätzliche Anbieterkennzeichnung oder ein Impressum erforderlich ist, hängt von Betreiber und Rechtsraum ab und muss vom Websiteinhaber rechtlich geprüft werden.'] },
  ]} />;
}
