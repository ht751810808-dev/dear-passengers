import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/tr/dear-passengers-steam/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=turkish';
const STEAM_NEWS_URL = 'https://store.steampowered.com/news/app/4534960?l=turkish';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Steam: Resmî Sayfa, App ID ve Durum' },
  description:
    'Dear Passengers Steam sayfasını, App ID 4534960 bilgisini, istek listesi durumunu, 2026 çıkış aralığını ve Türkçe dil desteğini doğrulayın.',
  alternates: {
    canonical: '/tr/dear-passengers-steam/',
    languages: {
      en: '/dear-passengers-steam/',
      de: '/de/dear-passengers-steam/',
      tr: '/tr/dear-passengers-steam/',
      'zh-CN': '/zh-cn/dear-passengers-steam/',
      'x-default': '/dear-passengers-steam/',
    },
  },
  openGraph: {
    title: 'Dear Passengers Steam: Resmî App ID ve Mağaza Durumu',
    description: 'App ID 4534960, FLEXUS, istek listesi, 2026 aralığı ve henüz açıklanmayan alanlar.',
    url: PAGE_URL,
    locale: 'tr_TR',
    type: 'article',
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Dear Passengers Steam mağaza durumu için bağımsız Türkçe rehber',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers Steam: Resmî App ID ve Durum',
    description: 'Resmî mağaza kaydını, istek listesi durumunu ve açıklanmayan alanları kontrol edin.',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Dear Passengers Steam’de var mı?',
    answer:
      'Evet. Dear Passengers Steam, App ID 4534960 ile Valve mağazasında resmî olarak listeleniyor. Geliştirici ve yayıncı FLEXUS; oyun henüz satışta değil.',
  },
  {
    question: 'Dear Passengers Steam ne zaman çıkacak?',
    answer:
      'Dear Passengers Steam için yalnızca 2026 doğrulandı. Ay, gün, ön yükleme ve Erken Erişim tarihi açıklanmadı.',
  },
  {
    question: 'Dear Passengers Steam istek listesine nasıl eklenir?',
    answer:
      'App 4534960 sayfasını açın, Valve alan adında giriş yapın ve istek listesi düğmesini kullanın. Bu satın alma değildir.',
  },
  {
    question: 'Dear Passengers Steam Türkçe olacak mı?',
    answer:
      'Dear Passengers Steam mağaza sayfasındaki dil tablosunda Türkçe yalnızca arayüz seçeneği olarak işaretli; Türkçe ses ve altyazı doğrulanmadı.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers Steam: Resmî Sayfa, App ID ve Mağaza Durumu',
  description: 'Dear Passengers Steam mağaza kaydını ve mevcut erişim durumunu birincil kaynakla doğrulayan Türkçe rehber.',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-08-20',
  dateModified: '2026-08-20',
  inLanguage: 'tr-TR',
  author: { '@type': 'Organization', name: 'DearPassengers.net Editör Ekibi', url: 'https://dearpassengers.net/tr/hakkimizda/' },
  publisher: {
    '@type': 'Organization',
    name: 'DearPassengers.net',
    url: 'https://dearpassengers.net/',
    logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' },
  },
  image: 'https://dearpassengers.net/images/og-image.png',
  citation: [STEAM_URL, STEAM_NEWS_URL],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Türkçe Dear Passengers rehberi', item: 'https://dearpassengers.net/tr/' },
    { '@type': 'ListItem', position: 2, name: 'Dear Passengers oyunu', item: 'https://dearpassengers.net/tr/dear-passengers-oyunu/' },
    { '@type': 'ListItem', position: 3, name: 'Dear Passengers Steam', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function TurkishDearPassengersSteamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header locale="tr" languageHref="/dear-passengers-steam/" />

      <main id="main-content" className="steam-guide-page" lang="tr">
        <article>
          <header className="article-hero steam-article-hero">
            <Image
              src="/images/dear-passengers-unity-flight.webp"
              alt="Dear Passengers Steam Türkçe mağaza rehberi için FLEXUS tarafından paylaşılan Unity uçuş görseli"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content steam-hero-content">
              <nav className="breadcrumbs" aria-label="İçerik yolu">
                <Link href="/tr/">Dear Passengers</Link><span>/</span>
                <Link href="/tr/dear-passengers-oyunu/">Oyun</Link><span>/</span><span>Steam</span>
              </nav>

              <div className="steam-hero-grid">
                <div className="steam-hero-copy">
                  <div className="eyebrow"><span>●</span> MAĞAZA DOĞRULAMA · APP 4534960</div>
                  <h1>Dear Passengers Steam:<br /><em>Resmî Sayfa ve Erişim Durumu</em></h1>
                  <p>
                    Dear Passengers Steam sayfasının App ID’si <strong>4534960</strong>’dır ve kayıt FLEXUS’a aittir. Windows
                    sürümü istek listesine eklenebilir; satış, kurulum, fiyat, kesin tarih ve resmî demo bağlantısı henüz yoktur.
                  </p>
                  <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">
                    Resmî Steam sayfasını aç ↗
                  </a>
                  <div className="article-meta"><span>20 Ağustos 2026</span><span>Birincil kaynak: Steam</span><span>Mevcut işlem: İstek listesi</span></div>
                </div>

                <dl className="steam-identity-board" aria-label="Resmî Steam ürün kimliği">
                  <div><dt>Steam App ID</dt><dd>4534960</dd><small>Resmî ürün kaydı</small></div>
                  <div><dt>Geliştirici / yayıncı</dt><dd>FLEXUS</dd><small>İki alan da eşleşiyor</small></div>
                  <div><dt>Platform</dt><dd>Windows PC</dd><small>Onaylanan mağaza platformu</small></div>
                  <div><dt>Erişim</dt><dd>İstek listesi</dd><small>Oyun yayımlanmadı</small></div>
                </dl>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc" aria-label="Steam doğrulama bölümleri">
              <p>MAĞAZA KONTROLÜ</p>
              <a href="#yanit">Kısa yanıt</a>
              <a href="#kimlik">App ID doğrulama</a>
              <a href="#durum">Erişim ve dil</a>
              <a href="#sss">SSS</a>
              <a href="#kaynaklar">Kaynaklar</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam’de doğrula ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote
                checked="20 Ağustos 2026"
                locale="tr"
                note="Bu sayfa mağaza kimliğiyle sınırlıdır. Tarih, demo, indirme ve donanım ayrı rehberlerdedir."
              />

              <section id="yanit">
                <span className="kicker">DOĞRUDAN YANIT</span>
                <h2>Dear Passengers Steam’de var mı?</h2>
                <p className="snippet-answer">
                  <strong>Evet. Dear Passengers Steam, App ID 4534960 ile Valve mağazasında resmî olarak listeleniyor.</strong>{' '}
                  Kayıtta geliştirici ve yayıncı FLEXUS’tur. Mağaza Windows PC ve 2026 aralığını gösterir. Satın alma ve
                  kurulum yoktur; istek listesiyle takip kullanılabilir.
                </p>
                <p>
                  Dear Passengers Steam sayfası açık olsa da oyun henüz indirilemez. Steam ya da FLEXUS’un doğrulanabilir
                  bağlantısı olmadan sunulan üçüncü taraf kurulum, demo veya anahtarlar resmî oyun erişimi olarak kabul edilmemelidir.
                </p>

                <div className="status-grid">
                  <div className="fact-callout">
                    <span>ONAYLANDI</span><strong>Canlı mağaza alanları</strong>
                    <ul>
                      <li>Steam App ID: 4534960</li>
                      <li>FLEXUS: geliştirici ve yayıncı</li>
                      <li>Windows PC ve 2026 çıkış aralığı</li>
                      <li>Tek oyunculu ve çevrimiçi eşli oyun</li>
                    </ul>
                  </div>
                  <div className="fact-callout unknown-callout">
                    <span>AÇIKLANMADI</span><strong>Henüz mağazada yok</strong>
                    <ul>
                      <li>Kesin gün, fiyat ve sürümler</li>
                      <li>Ön sipariş, kurulum veya ön yükleme</li>
                      <li>Açık demo veya Playtest erişimi</li>
                      <li>Steam Deck ve kontrolcü doğrulaması</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="kimlik">
                <span className="kicker">ÜRÜN KİMLİĞİ</span>
                <h2>Dear Passengers Steam sayfası nasıl doğrulanır?</h2>
                <p>
                  Adreste <code>/app/4534960/</code> yolu bulunmalı; geliştirici ve yayıncı alanlarında FLEXUS görünmelidir.
                  Dear Passengers Steam kaydını App ID ve Valve alan adıyla doğrulayın.
                </p>
                <ol className="steps article-steps">
                  <li><span>01</span><p><strong>App ID’yi eşleştirin.</strong> Dear Passengers Steam adresi App ID 4534960’ı içermelidir.</p></li>
                  <li><span>02</span><p><strong>FLEXUS’u kontrol edin.</strong> İki kimlik alanında da görünmelidir.</p></li>
                  <li><span>03</span><p><strong>Steam’de giriş yapın.</strong> İstek listesi satın alma değildir.</p></li>
                </ol>
              </section>

              <section id="durum">
                <span className="kicker">ERİŞİM VE DİL</span>
                <h2>Dear Passengers Steam ne zaman çıkacak?</h2>
                <p>
                  Dear Passengers Steam için Steam’de yalnızca 2026 aralığı doğrulandı; ay ve gün açıklanmadı. Güncellemeler için{' '}
                  <Link href="/tr/dear-passengers-cikis-tarihi/">çıkış</Link>, <Link href="/tr/dear-passengers-demo/">demo</Link>{' '}
                  ve <Link href="/tr/dear-passengers-indir/">indirme</Link> rehberlerini izleyin.
                </p>
                <p>
                  Dear Passengers Steam mağaza sayfasının dil tablosunda Türkçe yalnızca arayüz desteği olarak işaretlidir;
                  ses ve altyazı doğrulanmadı. PC alanları <Link href="/tr/dear-passengers-sistem-gereksinimleri/">sistem rehberindedir</Link>.
                  Windows ibaresi, Steam Deck desteğini kanıtlamaz.
                </p>
              </section>

              <section id="sss">
                <span className="kicker">OYUNCU SORULARI</span>
                <h2>Steam mağazası SSS</h2>
                <p>Yanıtlar 20 Ağustos 2026’da Steam ve FLEXUS ile kontrol edildi.</p>
                <FAQ items={faqs} />
              </section>

              <section id="kaynaklar">
                <span className="kicker">BİRİNCİL KAYNAKLAR</span>
                <h2>Dear Passengers Steam kaydını doğrudan kontrol edin</h2>
                <p>
                  Dear Passengers Steam mağazası birincil kaynaktır; topluluk yorumu onay değildir.
                </p>
                <ul>
                  <li><a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Resmî Dear Passengers Steam App 4534960 ↗</a></li>
                  <li><a href={STEAM_NEWS_URL} target="_blank" rel="noopener noreferrer">Steam üzerindeki resmî FLEXUS haberleri ↗</a></li>
                </ul>
              </section>

              <section className="related-guide steam-related-guide">
                <span className="kicker">TÜRKÇE REHBER</span>
                <h2>Mağaza kontrolünden sonra</h2>
                <p>Kimlik, tarih, demo, indirme ve PC sorularını ilgili rehberde sürdürün.</p>
                <div className="related-actions">
                  <Link className="button" href="/tr/">Türkçe ana sayfa →</Link>
                  <Link className="button button-ghost" href="/tr/dear-passengers-oyunu/">Oyun kimliği →</Link>
                  <Link className="button button-ghost" href="/tr/dear-passengers-cikis-tarihi/">Çıkış tarihi →</Link>
                  <Link className="button button-ghost" href="/tr/dear-passengers-demo/">Demo durumu →</Link>
                  <Link className="button button-ghost" href="/tr/dear-passengers-indir/">İndirme güvenliği →</Link>
                  <Link className="button button-ghost" href="/tr/dear-passengers-sistem-gereksinimleri/">PC gereksinimleri →</Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer locale="tr" />
    </>
  );
}
