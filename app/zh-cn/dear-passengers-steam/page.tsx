import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PAGE_URL = 'https://dearpassengers.net/zh-cn/dear-passengers-steam/';
const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=schinese';
const STEAM_NEWS_URL = 'https://steamcommunity.com/app/4534960/allnews/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers Steam：正版页面、App ID 与愿望单状态' },
  description:
    '核对 Dear Passengers Steam 正版页面、App ID 4534960、FLEXUS、愿望单、2026 发售窗口、Windows 平台和简体中文支持状态。',
  alternates: {
    canonical: '/zh-cn/dear-passengers-steam/',
    languages: {
      en: '/dear-passengers-steam/',
      de: '/de/dear-passengers-steam/',
      tr: '/tr/dear-passengers-steam/',
      'zh-CN': '/zh-cn/dear-passengers-steam/',
      'x-default': '/dear-passengers-steam/',
    },
  },
  openGraph: {
    title: 'Dear Passengers Steam：正版商店与愿望单状态',
    description: '用 App ID 4534960 核对 FLEXUS 正版商店记录，并区分已确认、尚未公布和玩家推测。',
    url: PAGE_URL,
    siteName: 'DearPassengers.net',
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Dear Passengers Steam 正版页面核验指南',
    }],
    locale: 'zh_CN',
    alternateLocale: ['en_US', 'de_DE', 'tr_TR'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers Steam：App ID 与商店状态',
    description: '确认正版 Steam 页面、愿望单、Windows 平台、2026 窗口与简体中文界面。',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Dear Passengers 在 Steam 上有正版页面吗？',
    answer:
      '有。Dear Passengers Steam 正版页面的 App ID 是 4534960，开发商与发行商都显示 FLEXUS。目前可以加入愿望单，但不代表已经可以买到或安装。',
  },
  {
    question: 'Dear Passengers Steam 什么时候发售？',
    answer:
      '官方 Dear Passengers Steam 商店只给出 2026 年窗口，没有公布月、日或具体开售时刻。更精确的日期需要由 App 4534960 或 FLEXUS 公告确认。',
  },
  {
    question: 'Dear Passengers Steam 支持简体中文吗？',
    answer:
      '支持范围目前是界面。Dear Passengers Steam 语言表勾选简体中文界面，但简体中文完整音频与字幕没有被单独勾选，所以不能把“界面中文”写成“全中文配音或字幕”。',
  },
  {
    question: '怎样把 Dear Passengers 加入愿望单？',
    answer:
      '打开 Dear Passengers Steam App 4534960，在 Valve 官方域名登录后使用愿望单按钮。加入愿望单不会购买、预订或下载游戏，也不需要第三方安装器；Dear Passengers Steam 当前仍未开放安装。',
  },
  {
    question: '如何识别假的 Dear Passengers Steam 页面？',
    answer:
      '识别 Dear Passengers Steam 时要检查域名、App ID 和开发者三项：域名应属于 Steam，编号为 4534960，开发商与发行商均为 FLEXUS。要求下载破解程序、密钥生成器或在站外输入 Steam 密码的页面不是官方商店入口。',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers Steam：正版页面、App ID 与愿望单状态',
  description: 'Dear Passengers Steam 官方记录、访问状态、简体中文界面和信息边界核验指南。',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-08-20',
  dateModified: '2026-08-20',
  inLanguage: 'zh-CN',
  author: {
    '@type': 'Organization',
    name: 'DearPassengers.net 编辑团队',
    url: 'https://dearpassengers.net/about/',
  },
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
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers 中文指南', item: 'https://dearpassengers.net/zh-cn/' },
    { '@type': 'ListItem', position: 2, name: 'Dear Passengers 游戏资料', item: 'https://dearpassengers.net/zh-cn/dear-passengers-game/' },
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

export default function ChineseDearPassengersSteamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header locale="zh-CN" languageHref="/dear-passengers-steam/" />

      <main id="main-content" className="steam-guide-page" lang="zh-CN">
        <article>
          <header className="article-hero steam-article-hero">
            <Image
              src="/images/dear-passengers-unity-flight.webp"
              alt="FLEXUS 发布的 Dear Passengers 开发画面，用于 Steam 商店状态核验"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content steam-hero-content">
              <nav className="breadcrumbs" aria-label="面包屑导航">
                <Link href="/zh-cn/">中文指南</Link><span>/</span>
                <Link href="/zh-cn/dear-passengers-game/">游戏资料</Link><span>/</span><span>Steam</span>
              </nav>

              <div className="steam-hero-grid">
                <div className="steam-hero-copy">
                  <div className="eyebrow"><span>●</span> 正版商店核验 · APP 4534960</div>
                  <h1>Dear Passengers Steam：<br /><em>正版页面、愿望单与中文支持</em></h1>
                  <p>
                    <strong>Dear Passengers Steam</strong> 的官方产品页是 App 4534960，开发商与发行商均为 FLEXUS。
                    玩家现在可以加入愿望单或关注更新，但游戏仍未发售。商店确认 Windows、2026 年窗口和
                    简体中文界面，没有给出更精确的上市时间。本页只核对商店身份、当前按钮与语言栏状态。
                  </p>
                  <div className="hero-actions">
                    <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">打开 Dear Passengers Steam 简体中文页面 ↗</a>
                  </div>
                  <p className="storefront-disclosure">Valve 官方商店直达链接 · 无联盟跟踪或佣金</p>
                  <div className="article-meta">
                    <span>核验：2026 年 8 月 20 日</span><span>一手来源：Steam</span><span>当前操作：加入愿望单</span>
                  </div>
                </div>

                <dl className="steam-identity-board" aria-label="Dear Passengers Steam 正版身份">
                  <div><dt>Dear Passengers Steam App ID</dt><dd>4534960</dd><small>官方编号</small></div>
                  <div><dt>Dear Passengers Steam 开发 / 发行</dt><dd>FLEXUS</dd><small>两个字段均一致</small></div>
                  <div><dt>Dear Passengers Steam 平台</dt><dd>Windows PC</dd><small>已确认平台</small></div>
                  <div><dt>Dear Passengers Steam 状态</dt><dd>愿望单</dd><small>尚未发售</small></div>
                </dl>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc" aria-label="页面目录">
              <p>商店核验</p>
              <a href="#answer">直接答案</a>
              <a href="#queries">搜索词分工</a>
              <a href="#identity">正版身份</a>
              <a href="#wishlist">愿望单</a>
              <a href="#language">简体中文</a>
              <a href="#boundaries">信息边界</a>
              <a href="#steam-faq">常见问题</a>
              <a href="#sources">官方来源</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">去 Dear Passengers Steam 核对 ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote
                locale="zh-CN"
                checked="2026 年 8 月 20 日"
                note="本页将 Dear Passengers Steam 视为商店核验问题，不复制发售、下载和电脑配置页面。确认项来自 App 4534960 与 FLEXUS 的 Steam 公告；推测和未公布字段不会写成游戏功能。"
              />

              <section id="queries">
                <span className="kicker">当前状态导航</span>
                <h2>Dear Passengers Steam 现在能核对哪些状态？</h2>
                <p>
                  玩家通常最关心商店身份、中文、愿望单和发售状态。下面每一项都给出当前能确认的结果；涉及下载和电脑规格时，
                  本页只说明商店边界，再链接到对应专题。这样可以直接找到答案，也不会把“已有产品页”误读成“已经开卖或能够安装”。
                </p>
                <dl className="steam-store-grid" aria-label="Dear Passengers Steam 中文搜索词分工">
                  <div><dt>Dear Passengers Steam 官网</dt><dd>Valve 域名与 App 4534960 可以互相核对</dd></div>
                  <div><dt>Dear Passengers Steam App ID</dt><dd>开发商与发行商两个字段均为 FLEXUS</dd></div>
                  <div><dt>Dear Passengers Steam 中文</dt><dd>当前明确勾选的是简体中文界面</dd></div>
                  <div><dt>Dear Passengers Steam 愿望单</dt><dd>现在可以收藏，也可以关注官方更新</dd></div>
                  <div><dt>Dear Passengers Steam 发售时间</dt><dd>当前只确认 2026 年窗口</dd></div>
                  <div><dt>Dear Passengers Steam 下载</dt><dd>游戏未发售，尚无正式安装入口</dd></div>
                  <div><dt>Dear Passengers Steam Demo</dt><dd>当前没有公开试玩按钮</dd></div>
                  <div><dt>Dear Passengers Steam 配置要求</dt><dd>Windows 已确认，完整规格另页核验</dd></div>
                  <div><dt>Dear Passengers Steam 价格</dt><dd>官方价格仍未公布</dd></div>
                  <div><dt>Dear Passengers Steam Deck</dt><dd>兼容状态仍未确认</dd></div>
                </dl>
                <p>
                  身份与商店按钮由本页负责；日期、下载和电脑规格交给各自专题。只要 Steam 或 FLEXUS 没有新增字段，价格、
                  试玩、掌机兼容和精确日期就继续标为“尚未公布”，不会用搜索摘要补全答案。
                </p>
              </section>

              <section id="answer">
                <span className="kicker">直接答案</span>
                <h2>Dear Passengers Steam 是官网吗？</h2>
                <p className="snippet-answer">
                  <strong>是官方 Steam 商店记录。</strong>正版 <strong>Dear Passengers Steam</strong> 页面位于 Valve 域名，
                  App ID 为 4534960，并把 FLEXUS 同时列为开发商与发行商。页面目前开放愿望单，正式游戏仍未发售；
                  已确认的时间只有 2026 年窗口，而不是某个月或某一天。
                </p>
                <p>
                  “已经有商店页”和“已经能玩”是两件事。<strong>Dear Passengers Steam</strong> 产品页可以展示介绍、语言、
                  平台和社区入口，但当前状态不能证明购买、安装、预载或站外安装包有效。转载标题和图片也不足以证明产品身份。
                </p>
                <div className="status-grid" aria-label="商店已确认与尚未公布信息">
                  <div className="fact-callout">
                    <span>已确认</span><strong>官方产品记录可核验</strong>
                    <p>Dear Passengers Steam · App 4534960 · FLEXUS · Windows · 2026 · 愿望单。</p>
                  </div>
                  <div className="fact-callout unknown-callout">
                    <span>尚未公布</span><strong>精确发售与购买字段</strong>
                    <p>Dear Passengers Steam 尚无精确日期、正式购买按钮或可验证的开售方案。</p>
                  </div>
                </div>
              </section>

              <section id="identity">
                <span className="kicker">正版身份</span>
                <h2>怎样核对 Dear Passengers Steam App ID？</h2>
                <p>
                  先看网址是否包含 <code>/app/4534960/</code>，再检查开发商与发行商是否都写着 FLEXUS。
                  最后对照 Windows、2026 与尚未发售状态。<strong>Dear Passengers Steam</strong> 的这组实时字段比转载标题、
                  截图、水印或相似域名更可靠；其中任意关键身份不匹配，都不应当直接登录或下载文件。
                </p>
                <dl className="steam-store-grid" aria-label="官方 Steam 字段">
                  <div><dt>Dear Passengers Steam 地址</dt><dd>store.steampowered.com/app/4534960</dd><small>Valve 域名与产品编号</small></div>
                  <div><dt>开发 / 发行</dt><dd>FLEXUS</dd><small>官方字段一致</small></div>
                  <div><dt>Dear Passengers Steam 发售状态</dt><dd>尚未发售</dd><small>只有 2026 年窗口</small></div>
                  <div><dt>当前平台</dt><dd>Windows</dd><small>不外推其他平台</small></div>
                </dl>
              </section>

              <section id="wishlist">
                <span className="kicker">当前可做的事</span>
                <h2>Dear Passengers Steam 愿望单怎么加？</h2>
                <p>
                  打开 <strong>Dear Passengers Steam</strong> App 4534960，在 Steam 官方域名登录，然后点击愿望单按钮。
                  愿望单是一项可随时移除的收藏操作，不会扣款、锁定版本、分配密钥或下载游戏。想追踪更新，也可以关注产品并查看官方公告。
                </p>
                <p>
                  判断 <strong>Dear Passengers Steam</strong> 是否真正开放新操作，应以商店出现可点击的新控件或 FLEXUS 的
                  可追溯公告为准。社区留言、搜索摘要和用户标签可以反映兴趣，却不能改变购买状态或把年份窗口变成精确日期。
                </p>
                <ol className="steps article-steps">
                  <li><span>01</span><p><strong>打开 App 4534960。</strong>先匹配 Valve 域名、编号和 Dear Passengers Steam 产品名。</p></li>
                  <li><span>02</span><p><strong>核对 Dear Passengers Steam 开发与发行字段。</strong>两个字段均应显示 FLEXUS。</p></li>
                  <li><span>03</span><p><strong>使用愿望单。</strong>只在 Steam 内登录，不运行站外“验证”程序。</p></li>
                </ol>
              </section>

              <section id="language">
                <span className="kicker">语言栏含义</span>
                <h2>Dear Passengers Steam 有简体中文吗？</h2>
                <p>
                  有，但当前明确支持的是<strong>简体中文界面</strong>。<strong>Dear Passengers Steam</strong> 语言表在简体中文一行
                  勾选界面，没有把完整音频和字幕分别勾选。准确表述应是“支持简体中文界面”，不能简化成“全中文”或“中文配音已确认”。
                </p>
                <p>
                  语言字段可能在发售前调整，因此需要看实时表格。本站不会根据预告片画面、机器翻译或社区愿望推断
                  <strong>Dear Passengers Steam</strong> 的最终本地化范围；商店栏改变后，才会同步更新这项结论。
                </p>
              </section>

              <section id="boundaries">
                <span className="kicker">页面分工</span>
                <h2>Dear Passengers Steam 信息该去哪里继续查？</h2>
                <p>
                  本页只负责 <strong>Dear Passengers Steam</strong> 的官方商店身份、愿望单和实时字段。想了解游戏类型与官方描述，查看
                  <Link href="/zh-cn/dear-passengers-game/"> Dear Passengers 游戏资料</Link>；想追踪年份窗口与变化条件，查看
                  <Link href="/zh-cn/dear-passengers-release-date/"> 中文发售时间指南</Link>。
                </p>
                <p>
                  如果搜索目标是安装入口与第三方文件风险，应前往
                  <Link href="/zh-cn/dear-passengers-download/"> 正版下载安全指南</Link>。如果要判断电脑能否运行，则查看
                  <Link href="/zh-cn/dear-passengers-system-requirements/"> Windows 配置要求</Link>。这些页面引用同一
                  <strong> Dear Passengers Steam</strong> 产品记录，但分别回答不同问题，避免用一段重复文字覆盖所有搜索意图。
                </p>
                <p>
                  对 <strong>Dear Passengers Steam</strong> 这张商店记录而言，“已确认”是当前能直接看到的字段，“合理推断”是依据字段作出的有限判断，
                  “未知”则是没有第一方答案的事项。年份、平台与语言可以确认；具体上市日等未公开字段必须继续标为未知。
                </p>
              </section>

              <section id="steam-faq">
                <span className="kicker">玩家常见问题</span>
                <h2>Dear Passengers Steam 常见问题</h2>
                <p>以下答案只对应 FLEXUS 的 Windows 游戏，并以 2026 年 8 月 20 日检查到的 Dear Passengers Steam 记录为准。</p>
                <FAQ items={faqs} />
              </section>

              <section id="sources">
                <span className="kicker">一手来源</span>
                <h2>直接查看 Dear Passengers Steam 官方记录</h2>
                <p>
                  <strong>Dear Passengers Steam</strong> 商店页是产品身份、平台、语言和可执行操作的首要来源；官方新闻用于核对
                  FLEXUS 发布的日期与变更说明。社区讨论可以提出问题，但不能单独确认功能、商业安排或发售日。
                </p>
                <p>
                  每次复核 <strong>Dear Passengers Steam</strong> 时，本站都会记录检查日期，并把实时商店字段与开发者公告分开。
                  只有新的第一方字段能够改变结论；旧报道、聚合页和愿望单数字不能代替当前
                  商店状态。如果语言或访问按钮发生变化，页面会同步修正，同时保留尚未确认项目的边界。
                </p>
                <ul>
                  <li><a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Dear Passengers Steam 简体中文商店页（App 4534960）↗</a></li>
                  <li><a href={STEAM_NEWS_URL} target="_blank" rel="noopener noreferrer">FLEXUS 的 Steam 官方公告 ↗</a></li>
                </ul>
                <figure className="article-source-figure">
                  <Image
                    src="/images/dear-passengers-unity-flight.webp"
                    alt="FLEXUS 在 Steam 公告中发布的 Dear Passengers Unity 开发画面"
                    width={1920}
                    height={897}
                    sizes="(max-width: 900px) 100vw, 790px"
                  />
                  <figcaption>
                    FLEXUS 在 Steam 公告中分享的 Unity 开发画面。图片用于说明来源，不代表游戏已发布或商店字段发生变化。
                    <a href={STEAM_NEWS_URL} target="_blank" rel="noopener noreferrer">查看来源 ↗</a>
                  </figcaption>
                </figure>
              </section>

              <section className="related-guide steam-related-guide">
                <span className="kicker">继续核对</span>
                <h2>从 Steam 商店页前往对应中文指南</h2>
                <p>按你的下一项问题选择页面，不要把商店状态误当作发售、下载或配置结论。</p>
                <div className="related-actions">
                  <Link className="button" href="/zh-cn/">中文指南首页 →</Link>
                  <Link className="button button-ghost" href="/zh-cn/dear-passengers-game/">游戏资料 →</Link>
                  <Link className="button button-ghost" href="/zh-cn/dear-passengers-release-date/">发售时间 →</Link>
                  <Link className="button button-ghost" href="/zh-cn/dear-passengers-download/">下载安全 →</Link>
                  <Link className="button button-ghost" href="/zh-cn/dear-passengers-system-requirements/">电脑配置 →</Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer locale="zh-CN" />
    </>
  );
}
