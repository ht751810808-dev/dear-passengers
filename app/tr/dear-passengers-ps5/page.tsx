import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/tr/dear-passengers-ps5/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=turkish';
const PLAYSTATION_URL = 'https://store.playstation.com/tr-tr/search/dear%20passengers';
const OFFICIAL_URL = 'https://dearpassengers.game/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers PS5: Çıkış ve Mağaza Durumu' },
  description: 'Dear Passengers PS5 durumunu Türkçe kontrol edin: PlayStation Store, çıkış tarihi, fiyat, PS Plus, DualSense, kupa, eşli oyun ve çapraz platform.',
  alternates: {
    canonical: '/tr/dear-passengers-ps5/',
    languages: { en: '/dear-passengers-ps5/', de: '/de/dear-passengers-ps5/', tr: '/tr/dear-passengers-ps5/', 'x-default': '/dear-passengers-ps5/' },
  },
  openGraph: {
    title: 'Dear Passengers PS5: Türkçe Çıkış ve Mağaza Durumu',
    description: 'PS5 sürümü, mağaza kimliği, tarih, kontrolcü ve çevrimiçi özellikleri resmî kaynaklarla kontrol edin.',
    url: PAGE_URL, locale: 'tr_TR', type: 'article',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Dear Passengers PS5 Türkçe durum rehberi' }],
  },
};

const faqs: FaqItem[] = [
  { question: 'Dear Passengers PS5’te var mı?', answer: 'Hayır. Dear Passengers PS5 sürümü duyurulmadı. Resmî kayıtta FLEXUS, Windows PC, Steam ve 2026 bulunuyor; eşleşen PlayStation Store ürünü yok.' },
  { question: 'Dear Passengers PS5’e ne zaman çıkacak?', answer: 'Dear Passengers PS5 için çıkış tarihi yok. Steam’deki 2026 bilgisi Windows ürününe aittir ve duyurulmayan konsol sürümüne aktarılamaz.' },
  { question: 'Dear Passengers PS5 fiyatı ne kadar?', answer: 'Konsol fiyatı bilinmiyor; ürün ve ön sipariş bulunmuyor. Steam de henüz Windows fiyatı göstermiyor.' },
  { question: 'Dear Passengers DualSense ve crossplay destekleyecek mi?', answer: 'Dear Passengers PS5 için DualSense, kupalar, yerel eşli oyun ve çapraz platform desteği açıklanmadı. PC videosu bu özellikleri doğrulamaz.' },
];

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article', headline: 'Dear Passengers PS5: Çıkış ve Mağaza Durumu',
  description: 'PS5 sürümü, PlayStation Store, tarih ve platform özellikleri için Türkçe kaynak kontrolü.',
  mainEntityOfPage: PAGE_URL, datePublished: '2026-08-26', dateModified: '2026-08-26', inLanguage: 'tr-TR',
  author: { '@type': 'Organization', name: 'DearPassengers.net Editör Ekibi', url: 'https://dearpassengers.net/tr/hakkimizda/' },
  publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/', logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' } },
  image: 'https://dearpassengers.net/images/og-image.png', citation: [STEAM_URL, PLAYSTATION_URL, OFFICIAL_URL],
};

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Türkçe Dear Passengers', item: 'https://dearpassengers.net/tr/' },
  { '@type': 'ListItem', position: 2, name: 'PlayStation durumu', item: 'https://dearpassengers.net/dear-passengers-playstation/' },
  { '@type': 'ListItem', position: 3, name: 'Dear Passengers PS5', item: PAGE_URL },
] };
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };

export default function TurkishPS5Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header locale="tr" languageHref="/dear-passengers-ps5/" />
      <main id="main-content" className="steam-guide-page" lang="tr">
        <article>
          <header className="article-hero steam-article-hero">
            <Image src="/images/release-date.webp" alt="Dear Passengers PS5 durum rehberi için uçak görseli" fill sizes="100vw" priority />
            <div className="hero-shade" />
            <div className="container article-hero-content steam-hero-content">
              <nav className="breadcrumbs" aria-label="İçerik yolu"><Link href="/tr/">Türkçe</Link><span>/</span><Link href="/dear-passengers-playstation/" hrefLang="en">PlayStation</Link><span>/</span><span>PS5</span></nav>
              <div className="steam-hero-grid">
                <div className="steam-hero-copy">
                  <div className="eyebrow"><span>●</span> PS5 KONTROLÜ · DUYURULMADI</div>
                  <h1>Dear Passengers PS5:<br /><em>Çıkış ve Mağaza Durumu</em></h1>
                  <p><strong>Dear Passengers PS5 doğrulanmadı.</strong> FLEXUS Windows PC ve 2026 bilgisini yayımladı. PlayStation 5 için ürün sayfası, tarih, fiyat veya oynanabilir sürüm yok.</p>
                  <a className="button" href={PLAYSTATION_URL} target="_blank" rel="noopener noreferrer">PlayStation Store’u kontrol et ↗</a>
                  <div className="article-meta"><span>26 Ağustos 2026</span><span>PC doğrulandı</span><span>PS5 açık</span></div>
                </div>
                <dl className="steam-identity-board" aria-label="Dear Passengers PS5 kısa durum">
                  <div><dt>Steam</dt><dd>Windows</dd><small>App 4534960</small></div><div><dt>PS5</dt><dd>Açık</dd><small>Ürün sayfası yok</small></div>
                  <div><dt>Tarih</dt><dd>Bilinmiyor</dd><small>2026 PC’ye ait</small></div><div><dt>Erişim</dt><dd>Yok</dd><small>Ön sipariş yok</small></div>
                </dl>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc" aria-label="İçerik"><p>PS5 DURUMU</p><a href="#yanit">Kısa yanıt</a><a href="#magaza">Mağaza kontrolü</a><a href="#ozellikler">PS5 özellikleri</a><a href="#sss">SSS</a><a href="#kaynaklar">Kaynaklar</a></aside>
            <div className="article-prose prose">
              <EditorialNote checked="26 Ağustos 2026" locale="tr" note="Duyurulmadı ifadesi iptal veya vaat anlamına gelmez. FLEXUS ve resmî PlayStation kaydı belirleyicidir." />
              <section id="yanit">
                <span className="kicker">KISA YANIT</span><h2>Dear Passengers PS5’te var mı?</h2>
                <p className="snippet-answer">Dear Passengers PS5 sürümü duyurulmadı. Steam; FLEXUS, Windows PC, tek oyunculu, çevrimiçi eşli oyun ve 2026 bilgisini doğruluyor. Resmî üründe PlayStation 5 yok; satın alma, indirme ve çıkış tarihi bulunmuyor.</p>
                <p>Bu aramalar oyuncu ilgisini gösterir, portu değil. Stüdyo, aktarılan resmî SSS’ye göre platformları hâlâ değerlendiriyor; bu bir garanti değildir. Bu Türkçe rehber güncel nesil sorularını genel <Link href="/dear-passengers-playstation/" hrefLang="en">PlayStation durumundan</Link> ayrı ele alır.</p>
              </section>

              <section id="magaza">
                <span className="kicker">MAĞAZA KİMLİĞİ</span><h2>Dear Passengers PS5 PlayStation Store’da nasıl doğrulanır?</h2>
                <p>Gerçek ürün sayfası Sony alan adında yer almalı; FLEXUS, donanım, bölge ve erişimi göstermelidir. Yer tutucular ve PC videoları kanıt değildir. Dear Passengers PS5 kontrolünde böyle bir kayıt yok.</p>
                <div className="platform-table" role="table" aria-label="Dear Passengers PS5 ürün durumu">
                  <div className="platform-head" role="row"><span role="columnheader">Alan</span><span role="columnheader">Durum</span><span role="columnheader">Kanıt</span></div>
                  <div role="row"><strong role="cell">Windows PC</strong><span className="status-confirmed" role="cell">2026 planı</span><span role="cell">Steam 4534960</span></div>
                  <div role="row"><strong role="cell">PlayStation 5</strong><span className="status-open" role="cell">Duyurulmadı</span><span role="cell">Dear Passengers PS5 sayfası yok</span></div>
                  <div role="row"><strong role="cell">Fiyat / ön sipariş</strong><span className="status-open" role="cell">Bilinmiyor</span><span role="cell">Konsol ürünü yok</span></div>
                </div>
                <p>PC için verilen 2026, Dear Passengers PS5 tarihi değildir. Ay, fiyat, PS Plus, sürümler ve Türkiye açılış saati açıklanmadı.</p>
              </section>

              <section id="ozellikler">
                <span className="kicker">PS5 ÖZELLİKLERİ</span><h2>Dear Passengers PS5: DualSense, kupalar ve eşli oyun</h2>
                <p>Dear Passengers PS5 için DualSense özelliği doğrulanmadı. Uyarlanabilir tetikler, dokunsal geri bildirim, hareket, kupalar, 4K, 60 fps ve PS5 Pro modu PC fragmanından çıkarılamaz.</p>
                <p>Steam çevrimiçi eşli oyunu listeliyor ancak oyuncu sınırını açıklamıyor. Dear Passengers PS5 crossplay, yerel eşli oyun, bölünmüş ekran ve PS Plus ayrı bir platform kaydı ister. Bir PS5 duyurusu bunları otomatik doğrulamaz.</p>
                <p>Doğrulama için Dear Passengers PS5 mağaza adresi, FLEXUS kimliği, cihaz ve erişim alanları eşleşmelidir. O zamana kadar resmî işlem Steam istek listesidir.</p>
                <ul>
                  <li>Mağaza adresi, yayıncı ve cihaz aynı Sony kaydında eşleşmelidir.</li>
                  <li>Tarih, fiyat, kontrolcü ve ağ alanları ayrı ayrı doğrulanmalıdır.</li>
                </ul>
              </section>

              <section id="sss"><span className="kicker">SORULAR</span><h2>Dear Passengers PS5 SSS</h2><FAQ items={faqs} /></section>
              <section id="kaynaklar" className="related-guide related-links-panel"><span className="kicker">KAYNAKLAR</span><h2>Dear Passengers PS5 bilgisini kaynağından kontrol edin</h2>
                <p><a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam ↗</a> Windows ürününü doğrular. <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer">Resmî oyun sitesi ↗</a> Steam’e yönlendirir; <a href={PLAYSTATION_URL} target="_blank" rel="noopener noreferrer">PlayStation araması ↗</a> Sony mağazasını kontrol eder.</p>
                <div>Sonraki adımlar: <Link href="/tr/dear-passengers-cikis-tarihi/">çıkış durumu</Link>, <Link href="/tr/dear-passengers-steam/">Steam kimliği</Link> ve <Link href="/dear-passengers-console/" hrefLang="en">konsol karşılaştırması</Link>.</div>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer locale="tr" />
    </>
  );
}
