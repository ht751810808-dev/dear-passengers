import Script from 'next/script';
import AdSenseScript from '@/components/AdSenseScript';

const DEFAULT_GA4_ID = 'G-YR5WE8P3Q4';
const DEFAULT_ADSENSE_ID = 'ca-pub-4159784234426326';
const EEA_UK_SWITZERLAND = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IS', 'IE',
  'IT', 'LI', 'LV', 'LT', 'LU', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  'GB', 'CH',
];

export function GoogleConsentDefaults() {
  return (
    <script
      id="google-consent-defaults"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};

          window.gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500,
            region: ${JSON.stringify(EEA_UK_SWITZERLAND)}
          });

          window.gtag('consent', 'default', {
            ad_storage: 'granted',
            analytics_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted'
          });

          window.gtag('set', 'ads_data_redaction', true);
        `,
      }}
    />
  );
}

export default function GoogleServices() {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID || DEFAULT_GA4_ID;
  const adsenseId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID || DEFAULT_ADSENSE_ID;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
          window.gtag('js', new Date());
          window.gtag('config', '${ga4Id}', {
            anonymize_ip: true
          });
        `}
      </Script>

      <AdSenseScript publisherId={adsenseId} />
    </>
  );
}
