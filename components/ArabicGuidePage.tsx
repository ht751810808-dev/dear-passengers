import Image from 'next/image';
import Link from 'next/link';
import type { ArabicGuide } from '@/app/ar/arabic-content';
import EditorialNote from '@/components/EditorialNote';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=arabic';
const FLEXUS_INTERVIEW = 'https://gamedev.dou.ua/articles/dear-passengers-interview/';
const STEAM_NEWS_URL = 'https://steamcommunity.com/app/4534960/allnews/';
const GAMES_FROM_UKRAINE_URL = 'https://www.ggconference.com/en/conference/games-from-ukraine-2026/participants/';

const labels: Record<string, string> = {
  'dear-passengers-game': 'ما هي اللعبة؟',
  'dear-passengers-gameplay': 'طريقة اللعب',
  'dear-passengers-player-count': 'عدد اللاعبين',
  'dear-passengers-release': 'موعد الإصدار',
  'dear-passengers-demo': 'النسخة التجريبية',
  'dear-passengers-download': 'التحميل الآمن',
  'dear-passengers-system-requirements': 'متطلبات التشغيل',
  'dear-passengers-trailer': 'العرض الرسمي',
  'dear-passengers-news': 'الأخبار',
  'dear-passengers-confirmed-features': 'الميزات المؤكدة',
  'dear-passengers-roles': 'أدوار الطاقم',
  'dear-passengers-developer': 'المطور FLEXUS',
  'games-like-dear-passengers': 'ألعاب مشابهة',
};

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\]|Dear Passengers|FLEXUS|Steam|Windows|Android|APK|Playtest|Crossplay|PS5|Xbox|Switch|DirectX|GTX|RX|RAM)/g);
  return <>{parts.map((part, index) => {
    const match = part.match(/^\[\[([^|]+)\|([^\]]+)\]\]$/);
    if (match) return <Link href={match[1]} key={`${match[1]}-${index}`}>{match[2]}</Link>;
    if (/^(Dear Passengers|FLEXUS|Steam|Windows|Android|APK|Playtest|Crossplay|PS5|Xbox|Switch|DirectX|GTX|RX|RAM)$/.test(part)) {
      return <bdi dir="ltr" key={`${part}-${index}`}>{part === 'Dear Passengers' ? 'Dear\u00a0Passengers' : part}</bdi>;
    }
    return part;
  })}</>;
}

export default function ArabicGuidePage({
  guide,
  canonicalPath,
  modifiedDate,
  verifiedDate,
}: {
  guide: ArabicGuide;
  canonicalPath: string;
  modifiedDate?: string;
  verifiedDate?: string;
}) {
  const pageUrl = `https://dearpassengers.net${canonicalPath}`;
  const effectiveModifiedDate = modifiedDate ?? guide.modifiedDate ?? '2026-07-25';
  const effectiveVerifiedDate = verifiedDate ?? guide.verifiedDate ?? '25 يوليو 2026';
  const articleSchema = {
    '@context': 'https://schema.org', '@type': guide.slug ? 'Article' : 'WebPage',
    headline: guide.title, description: guide.description, mainEntityOfPage: pageUrl,
    datePublished: '2026-07-25', dateModified: effectiveModifiedDate, inLanguage: 'ar',
    author: { '@type': 'Organization', name: 'فريق تحرير DearPassengers.net', url: 'https://dearpassengers.net/ar/about/' },
    publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/', logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' } },
    image: `https://dearpassengers.net${guide.heroImage}`,
    isPartOf: { '@type': 'WebSite', name: 'DearPassengers.net', url: 'https://dearpassengers.net/ar/' },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'دليل Dear Passengers بالعربية', item: 'https://dearpassengers.net/ar/' },
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
    <Header locale="ar" languageHref={guide.englishPath} />
    <main id="main-content" lang="ar" dir="rtl" className="arabic-content">
      <article>
        <header className="article-hero">
          <Image src={guide.heroImage} alt={guide.heroAlt} fill sizes="100vw" priority />
          <div className="hero-shade" />
          <div className="container article-hero-content">
            <nav className="breadcrumbs" aria-label="مسار الصفحة"><Link href="/ar/">الدليل العربي</Link><span>/</span><span>{guide.keyword}</span></nav>
            <div className="eyebrow"><span>●</span> {guide.eyebrow}</div>
            <h1><RichText text={guide.h1} /></h1>
            <p><RichText text={guide.intro} /></p>
            <div className="article-meta"><span>{guide.verifiedDate ? `آخر تحقق ${effectiveVerifiedDate}` : 'نُشر في 25 يوليو 2026'}</span><span>المصادر: Steam وFLEXUS</span><span>اللغة: العربية</span></div>
          </div>
        </header>
        <div className="container article-layout">
          <aside className="article-toc" aria-label="محتويات الدليل">
            <p>في هذا الدليل</p>
            <a href="#answer">الإجابة المختصرة</a>
            {guide.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.heading}</a>)}
            <a href="#faq">الأسئلة الشائعة</a>
            <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">أضفها إلى قائمة الأمنيات ↗</a>
          </aside>
          <div className="article-prose prose">
            <EditorialNote checked={effectiveVerifiedDate} locale="ar" note={guide.note} />
            <section id="answer">
              <span className="kicker">الإجابة المختصرة</span>
              <h2><RichText text={guide.keyword} />: الخلاصة</h2>
              <p className="snippet-answer"><strong><RichText text={guide.answer} /></strong></p>
              <div className="status-grid" aria-label="حالة المعلومات">
                <div className="fact-callout"><span>مؤكد</span><strong>ما تقوله المصادر الأولى</strong><ul>{guide.confirmed.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div className="fact-callout unknown-callout"><span>غير معروف</span><strong>ما لم يُعلن بعد</strong><ul>{guide.unknown.map((item) => <li key={item}>{item}</li>)}</ul></div>
              </div>
            </section>
            {guide.sections.map((section) => <section id={section.id} key={section.id}>
              <span className="kicker">{section.kicker}</span><h2><RichText text={section.heading} /></h2>
              {section.paragraphs.map((paragraph, index) => <p key={index}><RichText text={paragraph} /></p>)}
              {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
            </section>)}
            <section id="verification">
              <span className="kicker">منهج التحقق</span><h2>كيف نحدّث معلومات {guide.keyword}؟</h2>
              <p>نبدأ من صفحة Steam الرسمية لأنها المرجع الحالي للمنصة واللغات وأنماط اللعب والمتطلبات ونافذة الإصدار. نستخدم مقابلات FLEXUS المباشرة للسياق، مع الحفاظ على الفرق بين خاصية منشورة وخطة تطويرية. لا يصبح تكرار الادعاء في عدة مواقع دليلاً مستقلاً إذا كانت جميعها تنسخ مصدراً مجهولاً.</p>
              <p>المعلومة «المؤكدة» تحتاج إلى نص أولي واضح. «المشاهدة» تصف ما يظهر في صورة أو فيديو من دون افتراض نطاقه. «المخطط» هدف قال المطور إنه يريده لكنه غير متاح. «غير معروف» جواب مشروع عندما لا توجد بيانات. نراجع النسخ اللغوية المتناظرة عند كل تغيير جوهري حتى لا تعرض لغة وعداً حُذف من لغة أخرى.</p>
              <p>DearPassengers.net موقع مستقل غير تابع إلى FLEXUS أو Valve أو Steam. الصور الرسمية مستخدمة في سياق تحريري وتبقى حقوقها لأصحابها. يمكن إرسال رابط تصحيح عبر <Link href="/ar/contact/">صفحة التواصل العربية</Link>، ويُراجع قبل تغيير الحالة.</p>
            </section>
            <section id="faq"><span className="kicker">أسئلة شائعة</span><h2>أسئلة عن {guide.keyword}</h2><p>إجابات مباشرة بصياغة عربية، مع ترك المعلومات الغائبة مفتوحة بدلاً من ملئها بالتخمين.</p><FAQ items={guide.faqs} /></section>
            <section id="sources"><span className="kicker">المصادر الأولى</span><h2>تحقق من البيانات الأصلية</h2><p>راجع <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">صفحة Dear Passengers الرسمية على Steam ↗</a> للمنصة واللغات والأنماط والمتطلبات، و<a href={FLEXUS_INTERVIEW} target="_blank" rel="noopener noreferrer">مقابلة FLEXUS المباشرة ↗</a> لسياق الإصدار والديمو. لا نربط ملفات تنزيل من طرف ثالث.</p>{['dear-passengers-news', 'dear-passengers-demo'].includes(guide.slug) && <p>راجع أيضاً <a href={STEAM_NEWS_URL} target="_blank" rel="noopener noreferrer">سجل أخبار Dear Passengers على Steam ↗</a> لتاريخ آخر منشور، و<a href={GAMES_FROM_UKRAINE_URL} target="_blank" rel="noopener noreferrer">Games From Ukraine ↗</a> لسياق مشاركة FLEXUS في Gamescom.</p>}</section>
            <section className="related-guide"><span className="kicker">الدليل العربي</span><h2>موضوعات مرتبطة</h2><p>هذه الصفحات تشكل مجموعة عربية مترابطة، ولكل منها سؤال مستقل ومصدر واضح.</p><div className="related-actions"><Link className="button" href="/ar/">الصفحة العربية الرئيسية →</Link>{guide.related.map((slug) => <Link className="button button-ghost" href={`/ar/${slug}/`} key={slug}>{labels[slug] || slug} →</Link>)}</div></section>
          </div>
        </div>
      </article>
    </main>
    <Footer locale="ar" />
  </>;
}
