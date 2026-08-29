import Image from 'next/image';
import Link from 'next/link';
import type { MyanmarGuide } from '@/app/my/myanmar-content';
import EditorialNote from '@/components/EditorialNote';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const FLEXUS_INTERVIEW = 'https://gamedev.dou.ua/articles/dear-passengers-interview/';
const STEAM_NEWS_URL = 'https://steamcommunity.com/app/4534960/allnews/';
const GAMES_FROM_UKRAINE_URL = 'https://www.ggconference.com/en/conference/games-from-ukraine-2026/participants/';

const labels: Record<string, string> = {
  'dear-passengers-gameplay': 'ကစားနည်း',
  'dear-passengers-player-count': 'ကစားသမားအရေအတွက်',
  'dear-passengers-release-date': 'ထွက်မည့်ရက်',
  'dear-passengers-demo': 'Demo အခြေအနေ',
  'dear-passengers-download': 'လုံခြုံသော Download',
  'dear-passengers-system-requirements': 'PC စနစ်လိုအပ်ချက်',
  'dear-passengers-trailer': 'တရားဝင် Trailer',
  'dear-passengers-news': 'နောက်ဆုံးသတင်း',
  'dear-passengers-confirmed-features': 'အတည်ပြု Feature များ',
  'dear-passengers-roles': 'Crew Role များ',
  'dear-passengers-developer-flexus': 'Developer FLEXUS',
  'games-like-dear-passengers': 'ဆင်တူသောဂိမ်းများ',
};

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return <>{parts.map((part, index) => {
    const match = part.match(/^\[\[([^|]+)\|([^\]]+)\]\]$/);
    return match ? <Link href={match[1]} key={`${match[1]}-${index}`}>{match[2]}</Link> : part;
  })}</>;
}

export default function MyanmarGuidePage({ guide, canonicalPath }: { guide: MyanmarGuide; canonicalPath: string }) {
  const pageUrl = `https://dearpassengers.net${canonicalPath}`;
  const modifiedDate = guide.modifiedDate ?? '2026-07-30';
  const verifiedDate = guide.verifiedDate ?? '2026 ဇူလိုင် 30 ရက်';
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': guide.slug ? 'Article' : 'WebPage',
    headline: guide.title,
    description: guide.description,
    mainEntityOfPage: pageUrl,
    datePublished: '2026-07-30',
    dateModified: modifiedDate,
    inLanguage: 'my-MM',
    author: {
      '@type': 'Organization',
      name: 'DearPassengers.net မြန်မာဘာသာ အယ်ဒီတာအဖွဲ့',
      url: 'https://dearpassengers.net/my/about/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'DearPassengers.net',
      url: 'https://dearpassengers.net/',
      logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' },
    },
    image: `https://dearpassengers.net${guide.heroImage}`,
    isPartOf: { '@type': 'WebSite', name: 'DearPassengers.net', url: 'https://dearpassengers.net/my/' },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Dear Passengers မြန်မာဘာသာလမ်းညွှန်', item: 'https://dearpassengers.net/my/' },
      ...(guide.slug ? [{ '@type': 'ListItem', position: 2, name: guide.title, item: pageUrl }] : []),
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header locale="my-MM" languageHref={guide.englishPath} />
      <main
        id="main-content"
        lang="my-MM"
        className="myanmar-content"
        style={{ fontFamily: '"Noto Sans Myanmar", "Myanmar Text", "Myanmar Sangam MN", sans-serif' }}
      >
        <article>
          <header className="article-hero">
            <Image src={guide.heroImage} alt={guide.heroAlt} fill sizes="100vw" priority />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="လမ်းညွှန်နေရာ">
                <Link href="/my/">မြန်မာဘာသာလမ်းညွှန်</Link><span>/</span><span>{guide.keyword}</span>
              </nav>
              <div className="eyebrow"><span>●</span> {guide.eyebrow}</div>
              <h1><RichText text={guide.h1} /></h1>
              <p><RichText text={guide.intro} /></p>
              <div className="article-meta">
                <span>{verifiedDate} စစ်ဆေးပြီး</span>
                <span>Primary source: Steam နှင့် FLEXUS</span>
                <span>ဝဘ်ဆိုက်ဘာသာ: မြန်မာ</span>
              </div>
            </div>
          </header>
          <div className="container article-layout">
            <aside className="article-toc" aria-label="လမ်းညွှန်အကြောင်းအရာ">
              <p>ဤလမ်းညွှန်တွင်</p>
              <a href="#answer">အမြန်အဖြေ</a>
              {guide.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.heading}</a>)}
              <a href="#myanmar-search">မြန်မာ search context</a>
              <a href="#faq">မေးလေ့ရှိသောမေးခွန်း</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam Wishlist ထည့်ရန် ↗</a>
            </aside>
            <div className="article-prose prose">
              <EditorialNote checked={verifiedDate} locale="my-MM" note={guide.note} />
              <section id="answer">
                <span className="kicker">အမြန်အဖြေ</span>
                <h2>{guide.keyword}: လက်ရှိအခြေအနေ</h2>
                <p className="snippet-answer"><strong><RichText text={guide.answer} /></strong></p>
                <div className="status-grid" aria-label="အချက်အလက်အခြေအနေ">
                  <div className="fact-callout">
                    <span>အတည်ပြုပြီး</span>
                    <strong>Primary source က ပြောထားသည့်အချက်များ</strong>
                    <ul>{guide.confirmed.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                  <div className="fact-callout unknown-callout">
                    <span>မကြေညာသေး</span>
                    <strong>မသိရသေးသည့်အချက်များ</strong>
                    <ul>{guide.unknown.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                </div>
              </section>
              {guide.sections.map((section) => (
                <section id={section.id} key={section.id}>
                  <span className="kicker">{section.kicker}</span>
                  <h2><RichText text={section.heading} /></h2>
                  {section.paragraphs.map((paragraph, index) => <p key={index}><RichText text={paragraph} /></p>)}
                  {section.bullets && <ul>{section.bullets.map((item) => <li key={item}><RichText text={item} /></li>)}</ul>}
                </section>
              ))}
              <section id="myanmar-search">
                <span className="kicker">မြန်မာ SEARCH CONTEXT</span>
                <h2>“{guide.keyword}” ကို ဘာကြောင့် အသုံးပြုသလဲ</h2>
                {guide.localContext.map((paragraph) => <p key={paragraph}><RichText text={paragraph} /></p>)}
              </section>
              <section id="verification">
                <span className="kicker">အချက်အလက်စစ်ဆေးနည်း</span>
                <h2>{guide.keyword} အချက်အလက်ကို ဘယ်လိုစစ်ဆေးသလဲ</h2>
                <p>Platform၊ release window၊ play mode၊ language နှင့် hardware အတွက် Steam ကို ဦးစားပေးစစ်ဆေးသည်။ FLEXUS တိုက်ရိုက်အင်တာဗျူးသည် အနာဂတ်အစီအစဉ်ကို context ပေးသော်လည်း “စီစဉ်ထားသည်” ကို “ရရှိနိုင်ပြီ” ဟု မပြောင်းပါ။ Source မသိရသောစာသားကို ဝဘ်ဆိုက်များစွာက ပြန်ရေးရုံဖြင့် အတည်ပြုချက် မဖြစ်ပါ။</p>
                <p>“အတည်ပြုပြီး” သည် primary source က တိုက်ရိုက်ပြောထားသည့်အချက်ဖြစ်သည်။ “မြင်ရသည်” သည် တရားဝင်ပုံ သို့မဟုတ် ဗီဒီယိုထဲတွင် မြင်ရသည့်အရာကိုသာ ဆိုသည်။ “စီစဉ်ထားသည်” သည် ပြောင်းနိုင်သည့် developer intention ဖြစ်ပြီး “မကြေညာသေး” သည် price၊ exact date၊ player cap နှင့် console ကဲ့သို့ အချက်အလက်မရှိသေးသည့်အခါ မှန်ကန်သောအဖြေဖြစ်သည်။</p>
                <p><RichText text="DearPassengers.net သည် FLEXUS၊ Valve သို့မဟုတ် Steam နှင့် မသက်ဆိုင်သော independent guide ဖြစ်သည်။ Official image များကို editorial purpose ဖြင့် source ဖော်ပြပြီး အသုံးပြုသည်။ Source ပါသောပြင်ဆင်ချက်ကို [[/my/contact/|ဆက်သွယ်ရန်စာမျက်နှာ]] မှ ပေးပို့နိုင်သည်။" /></p>
              </section>
              <section id="faq">
                <span className="kicker">မေးလေ့ရှိသောမေးခွန်း</span>
                <h2>{guide.keyword} အကြောင်း အမြန်မေးခွန်းများ</h2>
                <p>အဖြေများသည် သဘာဝမြန်မာစကားကို သုံးပြီး တရားဝင်အချက်အလက်မရှိသည့်နေရာတွင် ခန့်မှန်းချက် မထည့်ပါ။</p>
                <FAQ items={guide.faqs} />
              </section>
              <section id="sources">
                <span className="kicker">PRIMARY SOURCES</span>
                <h2>မူရင်း source တွင် အချက်အလက်ကို ပြန်စစ်ပါ</h2>
                <p>
                  <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Dear Passengers တရားဝင် Steam စာမျက်နှာ ↗</a> တွင် platform၊ play mode၊ language table နှင့် minimum requirements ရှိသည်။{' '}
                  <a href={FLEXUS_INTERVIEW} target="_blank" rel="noopener noreferrer">FLEXUS တိုက်ရိုက်အင်တာဗျူး ↗</a> က demo plan ကို context ပေးသည်။ Third-party file သို့မဟုတ် installer ကို မချိတ်ပါ။
                </p>
                {['dear-passengers-news', 'dear-passengers-demo'].includes(guide.slug) && <p><a href={STEAM_NEWS_URL} target="_blank" rel="noopener noreferrer">Dear Passengers Steam news history ↗</a> တွင် နောက်ဆုံး game-specific post ရက်ကို စစ်နိုင်ပြီး <a href={GAMES_FROM_UKRAINE_URL} target="_blank" rel="noopener noreferrer">Games From Ukraine ↗</a> တွင် FLEXUS ၏ Gamescom ပါဝင်မှု context ကို ပြန်စစ်နိုင်သည်။</p>}
              </section>
              <section className="related-guide">
                <span className="kicker">မြန်မာဘာသာလမ်းညွှန်</span>
                <h2>Dear Passengers အကြောင်း ဆက်ဖတ်ရန်</h2>
                <p>စာမျက်နှာတစ်ခုစီသည် သီးခြား search intent တစ်ခုကို ဖြေပြီး contextual link များက duplicate page မဖြစ်စေဘဲ ဆက်စပ်မေးခွန်းများကို ချိတ်ဆက်ထားသည်။</p>
                <div className="related-actions">
                  <Link className="button" href="/my/">မြန်မာပင်မစာမျက်နှာ →</Link>
                  {guide.related.map((slug) => (
                    <Link className="button button-ghost" href={`/my/${slug}/`} key={slug}>
                      {labels[slug] || slug} →
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer locale="my-MM" />
    </>
  );
}
