import type { Metadata } from 'next';
import PassengerFlightGame from '@/components/PassengerFlightGame';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers — Play the 3D Fan Game' },
  description: 'Board a playable 3D airline adventure: serve passengers, fight fires, secure the cabin and fly home. Three routes, aircraft upgrades and saved career progress. Unofficial fan-made game, not the official Dear Passengers demo; not affiliated with FLEXUS.',
  alternates: { canonical: 'https://dearpassengers.net/play/cabin-crisis/', languages: {} },
  robots: { index: false, follow: true },
  openGraph: { title: 'Dear Passengers — 3D Fan Game', description: 'Your airline. Your passengers. Your problem. Play a complete flight in your browser.', url: 'https://dearpassengers.net/play/cabin-crisis/', type: 'website' },
};

export default function FlightGamePage() {
  return <PassengerFlightGame />;
}
