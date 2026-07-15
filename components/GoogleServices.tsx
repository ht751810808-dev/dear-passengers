import Script from 'next/script';

const DEFAULT_GA4_ID = 'G-YR5WE8P3Q4';
const DEFAULT_ADSENSE_ID = 'ca-pub-4159784234426326';

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
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ga4Id}', {
            anonymize_ip: true
          });
        `}
      </Script>

      {adsenseId ? (
        <Script
          id="google-adsense"
          async
          crossOrigin="anonymous"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
          strategy="afterInteractive"
        />
      ) : null}
    </>
  );
}
