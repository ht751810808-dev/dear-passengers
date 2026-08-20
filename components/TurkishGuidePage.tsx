import Image from 'next/image';
import Link from 'next/link';
import type { TurkishGuide } from '@/app/tr/turkish-content';
import EditorialNote from '@/components/EditorialNote';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=turkish';
const FLEXUS_INTERVIEW = 'https://gamedev.dou.ua/articles/dear-passengers-interview/';

const labels: Record<string, string> = {
  'dear-passengers-oyunu': 'Oyun nedir?',
  'dear-passengers-steam': 'Steam kaydı ve istek listesi',
  'dear-passengers-oynanis': 'Oynanış',
  'dear-passengers-kac-kisilik': 'Kaç kişilik?',
  'dear-passengers-cikis-tarihi': 'Çıkış tarihi',
  'dear-passengers-demo': 'Demo durumu',
  'dear-passengers-indir': 'Güvenli indirme',
  'dear-passengers-sistem-gereksinimleri': 'Sistem gereksinimleri',
  'dear-passengers-fragman': 'Resmî fragmanlar',
  'dear-passengers-haberleri': 'Haberler',
  'dear-passengers-ozellikleri': 'Onaylanan özellikler',
  'dear-passengers-rolleri': 'Ekip rolleri',
  'dear-passengers-gelistiricisi': 'Geliştirici FLEXUS',
  'dear-passengers-benzeri-oyunlar': 'Benzer oyunlar',
};

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return <>{parts.map((part, index) => {
    const match = part.match(/^\[\[([^|]+)\|([^\]]+)\]\]$/);
    return match ? <Link href={match[1]} key={`${match[1]}-${index}`}>{match[2]}</Link> : part;
  })}</>;
}

export default function TurkishGuidePage({
  guide,
  canonicalPath,
  modifiedDate = '2026-07-27',
  verifiedDate = '27 Temmuz 2026',
}: {
  guide: TurkishGuide;
  canonicalPath: string;
  modifiedDate?: string;
  verifiedDate?: string;
}) {
  const pageUrl = `https://dearpassengers.net${canonicalPath}`;
  const articleSchema = {
    '@context': 'https://schema.org', '@type': guide.slug ? 'Article' : 'WebPage',
    headline: guide.title, description: guide.description, mainEntityOfPage: pageUrl,
    datePublished: '2026-07-27', dateModified: modifiedDate, inLanguage: 'tr',
    author: { '@type': 'Organization', name: 'DearPassengers.net Türkçe Editör Ekibi', url: 'https://dearpassengers.net/tr/hakkimizda/' },
    publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/', logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' } },
    image: `https://dearpassengers.net${guide.heroImage}`,
    isPartOf: { '@type': 'WebSite', name: 'DearPassengers.net', url: 'https://dearpassengers.net/tr/' },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Dear Passengers Türkçe rehber', item: 'https://dearpassengers.net/tr/' },
      ...(guide.slug ? [{ '@type': 'ListItem', position: 2, name: guide.title, item: pageUrl }] : []),
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: guide.faqs.map((item) => ({
      '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <Header locale="tr" languageHref={guide.englishPath} />
    <main id="main-content" lang="tr" className="turkish-content">
      <article>
        <header className="article-hero">
          <Image src={guide.heroImage} alt={guide.heroAlt} fill sizes="100vw" priority />
          <div className="hero-shade" />
          <div className="container article-hero-content">
            <nav className="breadcrumbs" aria-label="Sayfa yolu"><Link href="/tr/">Türkçe rehber</Link><span>/</span><span>{guide.keyword}</span></nav>
            <div className="eyebrow"><span>●</span> {guide.eyebrow}</div>
            <h1><RichText text={guide.h1} /></h1>
            <p><RichText text={guide.intro} /></p>
            <div className="article-meta"><span>{verifiedDate} tarihinde doğrulandı</span><span>Birincil kaynaklar: Steam ve FLEXUS</span><span>Dil: Türkçe</span></div>
          </div>
        </header>
        <div className="container article-layout">
          <aside className="article-toc" aria-label="İçindekiler">
            <p>BU REHBERDE</p>
            <a href="#kisa-cevap">Kısa cevap</a>
            {guide.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.heading}</a>)}
            <a href="#yerel-arama">Türkiye arama bağlamı</a>
            <a href="#sss">Sık sorulan sorular</a>
            <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam istek listesine ekle ↗</a>
          </aside>
          <div className="article-prose prose">
            <EditorialNote checked={verifiedDate} locale="tr" note={guide.note} />
            <section id="kisa-cevap">
              <span className="kicker">KISA CEVAP</span>
              <h2>{guide.keyword}: güncel durum</h2>
              <p className="snippet-answer"><strong><RichText text={guide.answer} /></strong></p>
              <div className="status-grid" aria-label="Bilgi durumu">
                <div className="fact-callout"><span>ONAYLANDI</span><strong>Birincil kaynakların söylediği</strong><ul>{guide.confirmed.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div className="fact-callout unknown-callout"><span>BİLİNMİYOR</span><strong>Henüz açıklanmayanlar</strong><ul>{guide.unknown.map((item) => <li key={item}>{item}</li>)}</ul></div>
              </div>
            </section>
            {guide.sections.map((section) => <section id={section.id} key={section.id}>
              <span className="kicker">{section.kicker}</span><h2><RichText text={section.heading} /></h2>
              {section.paragraphs.map((paragraph, index) => <p key={index}><RichText text={paragraph} /></p>)}
              {section.bullets && <ul>{section.bullets.map((item) => <li key={item}><RichText text={item} /></li>)}</ul>}
            </section>)}
            <section id="yerel-arama">
              <span className="kicker">TÜRKİYE ARAMA BAĞLAMI</span><h2>{guide.keyword} neden bu ifadeyle anlatılıyor?</h2>
              {guide.localContext.map((paragraph) => <p key={paragraph}><RichText text={paragraph} /></p>)}
            </section>
            <section id="dogrulama">
              <span className="kicker">DOĞRULAMA YÖNTEMİ</span><h2>{guide.keyword} bilgilerini nasıl güncelliyoruz?</h2>
              <p>Platform, çıkış penceresi, oyun modları, dil desteği ve donanım tablosu için önce resmî Steam sayfasını kontrol ediyoruz. FLEXUS ile yapılan doğrudan röportajlar geliştirme planına bağlam sağlar; ancak “planlanıyor” ifadesini “yayınlandı” olarak değiştirmiyoruz. Aynı iddianın farklı sitelerde tekrarlanması, hepsi kaynaksızsa yeni bir doğrulama sayılmaz.</p>
              <p>“Onaylandı” birincil kaynaktaki açık bilgidir. “Gözlem” yalnızca resmî video veya görselde gerçekten görüneni anlatır. “Plan” geliştiricinin hedefidir ve değişebilir. “Bilinmiyor” ise fiyat, kesin tarih, oyuncu sınırı ya da konsol sürümü gibi henüz açıklanmamış ayrıntılar için doğru cevaptır.</p>
              <p><RichText text="DearPassengers.net, FLEXUS, Valve veya Steam ile bağlantılı olmayan bağımsız bir rehberdir. Resmî görseller editoryal bağlamda kullanılır ve hakları sahiplerine aittir. Bir düzeltme, kaynak bağlantısıyla birlikte [[/tr/iletisim/|Türkçe iletişim sayfasından]] gönderilebilir; ortak bir gerçek değiştiğinde ilgili tüm dil sürümleri birlikte incelenir." /></p>
            </section>
            <section id="sss"><span className="kicker">SIK SORULAN SORULAR</span><h2>{guide.keyword} hakkında sorular</h2><p>Yanıtlar Türkiye’de kullanılan doğal oyun terimlerine göre yazıldı. Açıklanmayan bilgi, arama sonucunu doldurmak için tahmin edilmedi.</p><FAQ items={guide.faqs} /></section>
            <section id="kaynaklar"><span className="kicker">BİRİNCİL KAYNAKLAR</span><h2>Bilgiyi kaynağından kontrol edin</h2><p><a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Dear Passengers Türkçe Steam sayfası ↗</a> platform, mod, Türkçe arayüz ve minimum gereksinimleri gösterir. <a href={FLEXUS_INTERVIEW} target="_blank" rel="noopener noreferrer">Doğrudan FLEXUS röportajı ↗</a> demo ve geliştirme hedeflerine bağlam sağlar. Üçüncü taraf indirme dosyalarına bağlantı vermiyoruz.</p></section>
            <section className="related-guide"><span className="kicker">TÜRKÇE REHBER</span><h2>İlgili Dear Passengers konuları</h2><p>Her sayfa bağımsız bir soruya yanıt verir; bağlamsal bağlantılar aynı anahtar kelimenin birden fazla URL tarafından hedeflenmesini önler.</p><div className="related-actions"><Link className="button" href="/tr/">Türkçe ana sayfa →</Link>{guide.related.map((slug) => <Link className="button button-ghost" href={`/tr/${slug}/`} key={slug}>{labels[slug] || slug} →</Link>)}</div></section>
          </div>
        </div>
      </article>
    </main>
    <Footer locale="tr" />
  </>;
}
