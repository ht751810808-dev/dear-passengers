import type { Metadata } from 'next';
import { Barlow_Condensed, Manrope } from 'next/font/google';
import GoogleServices, { GoogleConsentDefaults } from '@/components/GoogleServices';
import './globals.css';

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const googleAdsenseId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID || 'ca-pub-4159784234426326';

const display = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dearpassengers.net'),
  referrer: 'strict-origin-when-cross-origin',
  title: {
    default: 'Dear Passengers Game: Release Date, Gameplay & Steam Guide',
    template: '%s | DearPassengers.net',
  },
  description:
    'Explore the Dear Passengers game, including its 2026 release window, co-op gameplay, player count, Steam platforms, system requirements, demo news, and FAQs.',
  applicationName: 'DearPassengers.net',
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      'zh-CN': '/zh-cn/',
      'x-default': '/',
    },
  },
  verification: googleSiteVerification ? { google: googleSiteVerification } : undefined,
  other: googleAdsenseId ? { 'google-adsense-account': googleAdsenseId } : undefined,
  openGraph: {
    title: 'Dear Passengers Game: Release Date, Gameplay & Steam Guide',
    description:
      'A clear, independently maintained guide to Dear Passengers gameplay, multiplayer, release timing, platforms, requirements, and official Steam updates.',
    url: 'https://dearpassengers.net/',
    siteName: 'DearPassengers.net',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dear Passengers game release date and gameplay guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers Game: Release Date, Gameplay & Steam Guide',
    description:
      'Track confirmed Dear Passengers gameplay, multiplayer, platform, and release information.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <GoogleConsentDefaults />
      </head>
      <body>
        {children}
        <GoogleServices />
      </body>
    </html>
  );
}
