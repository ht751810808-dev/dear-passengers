import type { Metadata } from 'next';
import Link from 'next/link';
import PriceGuidePage from '@/components/PriceGuidePage';

const PAGE_URL = 'https://dearpassengers.net/dear-passengers-price/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const COMMUNITY_URL = 'https://steamcommunity.com/app/4534960/discussions/0/579425364008468733/';
const OFFICIAL_SITE_URL = 'https://dearpassengers.game/';
const INSIDER_URL = 'https://insider-gaming.com/how-much-will-dear-passengers-cost-price-explained/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Price: Steam Cost & Free Status' },
  description: 'The Dear Passengers price is not numeric yet. Check the Steam price field, free-to-play tag, regional cost, editions, discounts and official evidence.',
  alternates: { canonical: '/dear-passengers-price/', languages: { en: '/dear-passengers-price/', es: '/es/precio-de-dear-passengers/', cs: '/cs/cena-dear-passengers/', it: '/it/prezzo-di-dear-passengers/', 'x-default': '/dear-passengers-price/' } },
  openGraph: { title: 'Dear Passengers Price: Steam Cost and Free Status', description: 'A source-backed fare desk for the unannounced numeric price, business model and regional Steam fields.', url: PAGE_URL, type: 'article', images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Dear Passengers price and Steam cost status guide' }] },
  twitter: { card: 'summary_large_image', title: 'Dear Passengers Price: Current Steam Status', description: 'No numeric price is published; the community tag is not a purchase field.', images: ['/images/og-image.png'] },
};

const faqs = [
  { question: 'What is the Dear Passengers price?', answer: 'The Dear Passengers price has no numeric Steam value yet. FLEXUS says the price should align with similar games in the genre, but has not named an amount, currency, edition or launch discount.' },
  { question: 'How much will Dear Passengers cost?', answer: 'The Dear Passengers price cannot be converted into dollars, euros or another currency until FLEXUS or the official Steam purchase panel publishes a number. Third-party comparisons are estimates, not a quotation.' },
  { question: 'Is Dear Passengers free to play?', answer: 'The Dear Passengers price model is not confirmed as free. Free to Play appears among popular user-defined Steam tags, while the publisher-controlled page has no free license, paid package or buy button.' },
  { question: 'Will the Dear Passengers price be different by country?', answer: 'Regional Dear Passengers price values are unknown. If the launch is paid, Steam may display region-specific currency and tax treatment, but no regional table exists for this unreleased app.' },
  { question: 'Is there a Dear Passengers preorder price?', answer: 'No Dear Passengers price, preorder package, deluxe edition, supporter bundle or early-access offer is listed. Wishlisting is free and does not reserve or purchase a copy.' },
  { question: 'Does the sale-event badge mean Dear Passengers is discounted?', answer: 'No. The Dear Passengers price remains unpublished. A festival or sale-event badge can describe event participation without proving a discount, playable demo or released product.' },
  { question: 'Where should I verify the Dear Passengers price?', answer: 'Verify the Dear Passengers price on Steam App 4534960 and in attributable FLEXUS announcements. A real amount should appear in a publisher-controlled purchase field, not only a search snippet or key shop.' },
  { question: 'Is the reported $8–$10 Dear Passengers price official?', answer: 'No. That Dear Passengers price range is a media estimate based on other co-op games. FLEXUS gave only a non-numeric comparison with similar games, so the final amount remains unknown.' },
];

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article', headline: 'Dear Passengers Price: Steam Cost and Free Status',
  description: 'An evidence-led guide to the unannounced numeric price, free-to-play tag, regional fields, editions and discounts.',
  mainEntityOfPage: PAGE_URL, datePublished: '2026-08-27', dateModified: '2026-08-27',
  author: { '@type': 'Organization', name: 'DearPassengers.net Editorial Team', url: 'https://dearpassengers.net/about/' },
  publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/', logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' } },
  image: 'https://dearpassengers.net/images/og-image.png', citation: [STEAM_URL, COMMUNITY_URL, OFFICIAL_SITE_URL, INSIDER_URL],
};
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Dear Passengers', item: 'https://dearpassengers.net/' },
  { '@type': 'ListItem', position: 2, name: 'Release Date', item: 'https://dearpassengers.net/dear-passengers-release-date/' },
  { '@type': 'ListItem', position: 3, name: 'Price', item: PAGE_URL },
] };
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };

export default function DearPassengersPricePage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <PriceGuidePage
      locale="en" languageHref="/dear-passengers-price/" eyebrow="PRICE DESK · OFFICIAL FIELDS"
      h1="Dear Passengers Price: Steam Cost & Free Status"
      intro={<><strong>The Dear Passengers price has not been published as a number.</strong> Steam shows a 2026 Windows game and wishlist access, but no buy panel, currency, edition or preorder. FLEXUS has given only a broad market-position answer. This Dear Passengers price guide separates that confirmed direction from estimates, a user-defined Free to Play tag and every still-unknown launch field.</>}
      checked="August 27, 2026" note="The Dear Passengers price changes only when a publisher-controlled store field or attributable FLEXUS statement changes. Community tags and comparisons stay labelled separately."
      breadcrumbHome="Dear Passengers Game" breadcrumbParent="Release Date" parentHref="/dear-passengers-release-date/" pageLabel="Price"
      meta={['Published August 27, 2026', 'Numeric price: unknown', 'Store: wishlist only']}
      tocLabel="PRICE CHECK" statusHeading="Dear Passengers Price Status Board" statusHeaders={['Price field', 'Current status', 'Evidence']}
      statusRows={[
        { label: 'Numeric Steam price', status: 'Not published', evidence: 'No purchase panel' },
        { label: 'Publisher direction', status: 'Genre-market level', evidence: 'FLEXUS moderator response', confirmed: true },
        { label: 'Free-to-play model', status: 'Not confirmed', evidence: 'User tag only' },
        { label: 'Regional currencies', status: 'Not published', evidence: 'No live package' },
        { label: 'Preorder and editions', status: 'Not announced', evidence: 'Wishlist action only' },
        { label: 'Launch discount', status: 'Not announced', evidence: 'Event badge is insufficient' },
      ]}
      confirmedLabel="CONFIRMED" confirmedTitle="A broad pricing direction" confirmed={['The Dear Passengers price direction refers to similar games in the genre', 'The Dear Passengers price listing is Steam App 4534960', 'The Dear Passengers price awaits the planned 2026 release', 'The Dear Passengers price page currently offers wishlisting only']}
      unknownLabel="UNKNOWN" unknownTitle="No amount or package" unknown={['Dollar, euro and regional Dear Passengers price', 'Dear Passengers price: paid versus free model', 'Dear Passengers price: standard, deluxe or supporter editions', 'Preorder, launch discount and refund terms']}
      sections={[
        { id: 'answer', kicker: 'DIRECT ANSWER', heading: 'How Much Will Dear Passengers Cost?', paragraphs: [
          <><strong>The Dear Passengers price is unknown in numeric terms.</strong> The official Steam listing has no publisher-set amount, purchase button or free-license panel. A moderator on the game&apos;s Steam Community hub said the price would be in line with the standard market price for similar games in the genre. That is useful first-party direction, but it is not a dollar value, a range or a promise about one particular competitor.</>,
          <>The distinction matters because a media guide converted that broad answer into an $8–$10 estimate by comparing other co-op releases. That range is an editorial inference. It is not the Dear Passengers price announced by FLEXUS, and no player should budget, convert currency or advertise a deal from it. The final Dear Passengers price could match, exceed or differ from the comparison once scope, launch timing and regional rules are set.</>,
          <>This page owns the commercial-status task. The <Link href="/dear-passengers-release-date/">release date guide</Link> tracks when the game comes out; the Dear Passengers price guide tracks what the store will charge, whether the model is free, which packages exist and how currencies appear. Keeping those jobs separate prevents the release page, homepage and feature guide from competing for the same unanswered cost question.</>,
        ]},
        { id: 'free', kicker: 'BUSINESS MODEL', heading: 'Is the Dear Passengers Price Free to Play?', paragraphs: [
          <>No official field confirms that the Dear Passengers price is zero. Steam currently displays Free to Play among popular user-defined tags. Those tags are supplied and voted on by users; they sit apart from the publisher-controlled purchase area. The same page says the game is not yet available and presents a wishlist action, not a free install button.</>,
          <>A missing number also does not prove a paid Dear Passengers price. Pre-release store pages often omit commercial fields until the publisher is ready. Accurate wording therefore avoids both extremes: Dear Passengers is not confirmed free to play, and a paid amount is not announced. The community tag is an observed discovery signal, not a confirmed business model.</>,
          <>Treat a future Dear Passengers price as confirmed only when Steam shows a matching license or buy panel, or when FLEXUS makes an attributable announcement. If a free model is selected, the store should expose a play or install action and the package terms. If a paid model is selected, the official listing should expose the amount and applicable regional currency.</>,
        ]},
        { id: 'regional', kicker: 'REGIONAL FARE BOARD', heading: 'Dear Passengers Price by Country and Currency', paragraphs: [
          <>There is no Dear Passengers price table for the United States, United Kingdom, European Union, Brazil, Türkiye, Czechia or another market. Steam does not publish a base amount for App 4534960, so converting a guessed US figure into euros, pounds, reais, lira or koruna would compound an unsupported assumption with a changing exchange rate.</>,
          <>A real regional Dear Passengers price may not be a direct currency conversion. Steam publishers can choose regional values, and displayed totals can reflect local currency and tax treatment. That is why this guide records each region only after the official store exposes it. Search snippets, grey-market key shops and placeholder catalogs cannot establish the launch table.</>,
          <>The Dear Passengers price should also be distinguished from ongoing Steam sales. The current page carries a sale-event badge, but the game remains unreleased and has no amount to discount. Event participation can exist without a playable demo, launch discount or purchase option. The badge is not evidence of a reduced Dear Passengers price.</>,
        ]},
        { id: 'packages', kicker: 'EDITIONS & ACCESS', heading: 'Dear Passengers Price, Editions and Preorder Status', paragraphs: [
          <>No Dear Passengers price package is listed. There is no Standard Edition, Deluxe Edition, supporter pack, founder bundle, soundtrack package, preorder bonus or Early Access price. Steam&apos;s wishlist button simply asks the store to notify the account later; it does not reserve a copy, charge money or lock a future Dear Passengers price.</>,
          <>Likewise, there is no confirmed launch discount. A developer may reveal one later, but applying the normal behavior of another game would be inference. The Dear Passengers price record will need a named package, official amount, start time, end time and region before a discount can be calculated honestly.</>,
          <>Subscription claims are also outside the current evidence. PC Game Pass, PlayStation Plus and other console services are unannounced because Windows Steam is the only confirmed product. A subscription placement would not itself reveal the standalone Dear Passengers price on Steam, so each access route must be documented independently.</>,
        ]},
        { id: 'verify', kicker: 'VERIFICATION ROUTE', heading: 'How to Verify the Real Dear Passengers Price', paragraphs: [
          <>Start with the <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">official Steam App 4534960 ↗</a>. Confirm that developer and publisher are FLEXUS, then inspect the publisher-controlled area below the feature panel. Today it says the title is not yet available and offers wishlisting. A real Dear Passengers price update should add an amount, license or purchase action on that same identity.</>,
          <>Next, compare any claim with the <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer">price discussion on the official Community hub ↗</a> and a dated FLEXUS channel. The moderator response confirms only the intended market position. It does not validate a copied number. The official product site links back to Steam but currently adds no Dear Passengers price field.</>,
          <>Reject pages that offer a key, preorder, crack, APK, torrent or deposit before the official package exists. A copied logo and plausible amount do not create a legitimate Dear Passengers price. Use the <Link href="/dear-passengers-download/">download safety guide</Link> for installer claims and the <Link href="/dear-passengers-steam/">Steam identity guide</Link> for the correct store record.</>,
        ]},
        { id: 'labels', kicker: 'FACT BOUNDARIES', heading: 'Confirmed, Inferred and Unknown Price Claims', paragraphs: [
          <><strong>Confirmed:</strong> the Dear Passengers price is intended to sit around the standard market level for similar games in the genre, according to a moderator response mirrored in the official Discord reporting. Steam has no numeric amount, and the product remains wishlist-only. These are the narrow statements supported by current records.</>,
          <><strong>Inference:</strong> third parties compare the game with Lethal Company, R.E.P.O. and PEAK and propose a range. That analysis can describe a possible market neighborhood, but it cannot become the Dear Passengers price. Genre labels, wishlists and minimum PC requirements also cannot calculate production cost or retail strategy.</>,
          <><strong>Unknown:</strong> the final Dear Passengers price, whether it is paid or free, regional amounts, editions, launch discount, preorder, Early Access, downloadable content, in-game purchases and refund-specific package terms. Unknown does not mean negative; it means the field awaits a source that controls it.</>,
        ]},
      ]}
      faqsHeading="Dear Passengers Price FAQ" faqs={faqs}
      sourcesHeading="Sources for the Dear Passengers Price Check"
      sourcesIntro={<>The price record uses the <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">official Steam listing ↗</a>, the <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer">official Community discussion ↗</a>, the <a href={OFFICIAL_SITE_URL} target="_blank" rel="noopener noreferrer">FLEXUS product site ↗</a> and <a href={INSIDER_URL} target="_blank" rel="noopener noreferrer">Insider Gaming&apos;s attributed comparison ↗</a>. The first three establish identity and current store status; the media estimate is labelled inference, not the Dear Passengers price itself. Last checked August 27, 2026.</>}
      relatedHeading="Next Dear Passengers Checks" related={[
        { href: '/dear-passengers-release-date/', label: 'Release date parent' }, { href: '/dear-passengers-steam/', label: 'Official Steam identity' }, { href: '/dear-passengers-download/', label: 'Download safety' },
        { href: '/it/prezzo-di-dear-passengers/', label: 'Guida italiana', hrefLang: 'it' },
      ]}
      steamLabel="Check official Steam" parentLabel="Return to release date" heroAlt="Airliner and editorial fare board for the Dear Passengers price guide"
    />
  </>;
}
