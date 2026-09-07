import type { Metadata } from 'next';
import Link from 'next/link';
import PriceGuidePage from '@/components/PriceGuidePage';

const PAGE_URL = 'https://dearpassengers.net/tr/dear-passengers-parali-mi/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=turkish';
const COMMUNITY_URL = 'https://steamcommunity.com/app/4534960/discussions/0/579425364008468733/';

const faqs = [
  { question: 'Dear Passengers paralı mı?', answer: 'Dear Passengers paralı mı henüz bilinmiyor. Steam’de fiyat ya da ücretsiz lisans yok; yalnızca istek listesi var.' },
  { question: 'Dear Passengers paralı mı yoksa ücretsiz mi?', answer: 'Dear Passengers paralı mı sorusunu FLEXUS yanıtlamadı. Free to Play kullanıcı etiketi yayıncı kararı değildir.' },
  { question: 'Dear Passengers paralı mı, demo ücretsiz olacak mı?', answer: 'Dear Passengers paralı mı bilgisi ile demo koşulları ayrıdır. Demo planlandı, ancak erişim ve ücret açıklanmadı.' },
  { question: 'Dear Passengers kaç TL olacak?', answer: 'Türkiye fiyatı yayımlanmadı. Resmî bir temel tutar olmadan kur çevrimi yapmak güvenilir sonuç vermez.' },
  { question: 'Dear Passengers için ön sipariş var mı?', answer: 'Hayır. Steam’de ön sipariş, paket, sürüm veya ödeme alanı bulunmuyor.' },
  { question: 'Free to Play etiketi oyunun ücretsiz olduğunu kanıtlar mı?', answer: 'Hayır. Steam bunu popüler kullanıcı etiketi olarak gösteriyor; satın alma alanında ücretsiz lisans yer almıyor.' },
];

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Paralı mı? Fiyat ve Ücretsiz Durumu' },
  description: 'Dear Passengers paralı mı? Steam fiyatını, Free to Play etiketini, Türkiye tutarını, sürümleri ve resmî iş modeli kanıtını kontrol edin.',
  alternates: { canonical: '/tr/dear-passengers-parali-mi/', languages: { en: '/dear-passengers-price/', es: '/es/precio-de-dear-passengers/', cs: '/cs/cena-dear-passengers/', it: '/it/prezzo-di-dear-passengers/', tr: '/tr/dear-passengers-parali-mi/', 'x-default': '/dear-passengers-price/' } },
  openGraph: { title: 'Dear Passengers Paralı mı? Resmî Fiyat Durumu', description: 'Steam’de fiyat, ücretsiz lisans ve Türkiye tutarı henüz yayımlanmadı.', url: PAGE_URL, locale: 'tr_TR', type: 'article', images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Dear Passengers paralı mı sorusu için Türkiye fiyat durum panosu' }] },
  twitter: { card: 'summary_large_image', title: 'Dear Passengers Paralı mı? Fiyat Durumu', description: 'Kullanıcı etiketi ile resmî mağaza fiyatını ayıran Türkçe kontrol.', images: ['/images/og-image.png'] },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article', inLanguage: 'tr-TR', headline: 'Dear Passengers Paralı mı? Fiyat ve Ücretsiz Durumu',
  description: 'Dear Passengers iş modeli, Türkiye fiyatı, Free to Play etiketi, sürümler ve ön sipariş için kaynaklı durum rehberi.',
  mainEntityOfPage: PAGE_URL, datePublished: '2026-09-07', dateModified: '2026-09-07',
  author: { '@type': 'Organization', name: 'DearPassengers.net Türkçe Editörleri', url: 'https://dearpassengers.net/tr/hakkimizda/' },
  publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/', logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' } },
  image: 'https://dearpassengers.net/images/og-image.png', citation: [STEAM_URL, COMMUNITY_URL],
};
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Dear Passengers', item: 'https://dearpassengers.net/tr/' },
  { '@type': 'ListItem', position: 2, name: 'Çıkış tarihi', item: 'https://dearpassengers.net/tr/dear-passengers-cikis-tarihi/' },
  { '@type': 'ListItem', position: 3, name: 'Fiyat ve ücret durumu', item: PAGE_URL },
] };
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };

export default function TurkishPricePage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <PriceGuidePage
      locale="tr" languageHref="/dear-passengers-price/" eyebrow="FİYAT · RESMÎ MAĞAZA ALANLARI"
      h1="Dear Passengers paralı mı? Fiyat ve ücretsiz durumu"
      intro={<><strong>Dear Passengers paralı mı sorusunun yanıtı henüz bilinmiyor.</strong> Steam fiyat, ücretsiz lisans veya satın alma düğmesi göstermiyor. Dear Passengers paralı mı kontrolü, kullanıcı etiketini resmî iş modelinden ayırır.</>}
      checked="7 Eylül 2026" note="Dear Passengers paralı mı yanıtı yalnız FLEXUS açıklaması veya yayıncı denetimindeki Steam satış alanı değiştiğinde güncellenir."
      breadcrumbHome="Dear Passengers" homeHref="/tr/" homeHrefLang="tr" breadcrumbParent="Çıkış tarihi" parentHref="/tr/dear-passengers-cikis-tarihi/" parentHrefLang="tr" pageLabel="Fiyat"
      meta={['Yayımlanma: 7 Eylül 2026', 'Türkiye fiyatı: bilinmiyor', 'Erişim: istek listesi']} tocLabel="FİYAT KONTROLÜ"
      statusHeading="Türkiye için güncel mağaza durumu" statusHeaders={['Alan', 'Durum', 'Kanıt']} statusRows={[
        { label: 'Steam fiyatı', status: 'Yayımlanmadı', evidence: 'Satın alma alanı yok' },
        { label: 'Ücretli model', status: 'Doğrulanmadı', evidence: 'FLEXUS açıklaması yok' },
        { label: 'Free to Play', status: 'Doğrulanmadı', evidence: 'Yalnız kullanıcı etiketi' },
        { label: 'Türkiye tutarı', status: 'Yayımlanmadı', evidence: 'Etkin paket yok' },
      ]}
      confirmedLabel="DOĞRULANDI" confirmedTitle="Mağaza kimliği ve mevcut işlem" confirmed={['Steam App 4534960 resmî kayıttır', 'FLEXUS geliştirici ve yayıncıdır', 'Oyun 2026 için istek listesine eklenebilir']}
      unknownLabel="BİLİNMİYOR" unknownTitle="Fiyat ve iş modeli açıklanmadı" unknown={['Ücretli ya da ücretsiz tam oyun', 'Türkiye fiyatı ve para birimi', 'Sürümler, ön sipariş ve çıkış indirimi']}
      sections={[
        { id: 'yanit', kicker: 'DOĞRUDAN YANIT', heading: 'Dear Passengers paralı mı?', paragraphs: [
          <><strong>Dear Passengers paralı mı sorusuna evet veya hayır denemez.</strong> Steam’de ücret, satın alma düğmesi ya da ücretsiz lisans yok. İstek listesi oyunu satın almaz ve iş modelini doğrulamaz.</>,
          <>FLEXUS fiyatın benzer oyunların pazar düzeyine yakın olacağını belirtti, fakat rakam vermedi. Bu, Dear Passengers paralı mı sorusuna kesin ücret veya model sağlamaz.</>,
        ]},
        { id: 'etiket', kicker: 'KULLANICI ETİKETİ', heading: 'Dear Passengers paralı mı ve Steam kullanıcı etiketi', paragraphs: [
          <>Free to Play, Steam’de popüler kullanıcı etiketi olarak görünüyor. Oyuncuların eklediği bu etiket, yayıncı denetimindeki fiyat alanından ayrıdır ve yalnız gözlem sayılır.</>,
          <>Ücretsiz tam oyun için mağazada ücretsiz lisans veya FLEXUS duyurusu gerekir. Bunlar yokken Dear Passengers paralı mı sorusunu “ücretsiz” diye yanıtlamak doğru değildir.</>,
        ]},
        { id: 'turkiye', kicker: 'TÜRKİYE FİYATI', heading: 'Türkiye fiyatı kaç TL olacak?', paragraphs: [
          <>Dear Passengers paralı mı belli olmadığı için TL veya dolar tutarı da yoktur. Başka bir oyunun fiyatını çevirmek resmî Türkiye fiyatı üretmez.</>,
          <>Steam paketi açarsa para birimi, vergi, sürüm ve indirim ayrı kaydedilir. Şimdilik Dear Passengers paralı mı ve “kaç TL” soruları aynı bilinmeyen alana bağlıdır.</>,
        ]},
        { id: 'dogrula', kicker: 'DOĞRULAMA', heading: 'Resmî fiyat nasıl doğrulanır?', paragraphs: [
          <>Önce <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam App 4534960 ↗</a> üzerinde FLEXUS kimliğini ve satış panelini kontrol edin. Dear Passengers paralı mı yanıtı, lisans ve fiyat alanından gelmelidir.</>,
          <><a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer">Community tartışmasını ↗</a> bağlamıyla okuyun. Anahtar, APK, crack veya ön sipariş ilanı Dear Passengers paralı mı sonucunu belirleyemez.</>,
        ]},
      ]}
      faqsHeading="Fiyat ve ücret soruları" faqs={faqs}
      sourcesHeading="Fiyat kontrolünün kaynakları"
      sourcesIntro={<>Dear Passengers paralı mı kontrolü, <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">resmî Steam kaydını ↗</a> ve <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer">Community yanıtını ↗</a> kullanır. Fiyat veya ücretsiz lisans yayımlanana kadar sonuç bilinmiyor kalır.</>}
      relatedHeading="Sonraki resmî kontroller" related={[
        { href: '/tr/dear-passengers-cikis-tarihi/', label: 'Çıkış tarihi', hrefLang: 'tr' },
        { href: '/tr/dear-passengers-steam/', label: 'Steam kimliği', hrefLang: 'tr' },
        { href: '/tr/dear-passengers-indir/', label: 'Güvenli indirme', hrefLang: 'tr' },
      ]}
      steamLabel="Steam’de doğrula" parentLabel="Çıkış tarihine dön" heroAlt="Dear Passengers paralı mı sorusu için Türkiye fiyat ve Steam durum panosu"
    />
  </>;
}
