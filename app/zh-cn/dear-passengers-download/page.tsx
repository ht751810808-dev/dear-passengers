import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const OFFICIAL_SITE_URL = 'https://dearpassengers.game/';
const STEAM_NEWS_URL = 'https://steamcommunity.com/app/4534960/allnews/';
const ROUGH_AIR_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.dearpassenger';
const INTERVIEW_URL = 'https://dev.ua/en/news/dear-passengers-1784100084';
const PAGE_URL = 'https://dearpassengers.net/zh-cn/dear-passengers-download/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers 下载：Steam 正版、Demo 与 APK 安全指南' },
  description:
    'Dear Passengers 下载中文指南：核对正版 Steam 页面、当前下载状态、PC 与 Demo 入口、APK 和同名手游区别，以及安全安装方法。',
  alternates: {
    canonical: '/zh-cn/dear-passengers-download/',
    languages: {
      en: '/dear-passengers-download/',
      'zh-CN': '/zh-cn/dear-passengers-download/',
      de: '/de/dear-passengers-download/',
      ar: '/ar/dear-passengers-download/',
      tr: '/tr/dear-passengers-indir/',
      'pt-BR': '/pt-br/dear-passengers-baixar/',
      es: '/es/dear-passengers-descargar/',
      'my-MM': '/my/dear-passengers-download/',
      ru: '/ru/dear-passengers-skachat/',
      cs: '/cs/dear-passengers-stahnout/',
      'x-default': '/dear-passengers-download/',
    },
  },
  openGraph: {
    title: 'Dear Passengers 下载：正版入口与 APK 安全检查',
    description: '确认 FLEXUS 正版游戏的 Steam 下载状态，并识别同名 Android 应用与虚假安装包。',
    url: PAGE_URL,
    siteName: 'DearPassengers.net',
    images: [{
      url: '/images/dear-passengers-download-og.webp',
      width: 1200,
      height: 630,
      alt: 'Dear Passengers 下载正版入口与第三方文件安全检查示意图',
    }],
    locale: 'zh_CN',
    alternateLocale: ['en_US'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers 下载与 APK 安全指南',
    description: '现在能否下载、正版 Steam 在哪里，以及如何识别同名 APK。',
    images: ['/images/dear-passengers-download-og.webp'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Dear Passengers 现在可以下载吗？',
    answer:
      '不可以。FLEXUS 开发的 Dear Passengers 正式版尚未发售，官方 Steam 页面目前只有愿望单与关注入口，没有购买、安装、预载或正式版下载按钮。Steam 仍标注 2026 年发售。',
  },
  {
    question: 'Dear Passengers 在哪里下载才是正版？',
    answer:
      'Windows PC 的 Steam 是当前唯一确认的平台与商店。正版页面的 App ID 是 4534960，开发商和发行商都显示 FLEXUS。只有这个页面或 FLEXUS 第一方公告出现真实的安装、Demo 或 Playtest 入口后，下载状态才算改变。',
  },
  {
    question: 'Dear Passengers 有官方 APK 或安卓版吗？',
    answer:
      '没有。FLEXUS 没有宣布 Android、iOS 或官方 APK。搜索结果中的同名或近似名 Android 应用可能是其他开发商的独立产品，不能只凭标题、图标或相似介绍认定为 FLEXUS 手游版。',
  },
  {
    question: 'Dear Passengers: Rough Air 是正版手机版吗？',
    answer:
      '没有第一方资料能证明它是 FLEXUS 游戏的手机版。Google Play 将 Dear Passengers: Rough Air 的开发商列为 Kusya Games，而正版 PC 游戏的 Steam 页面将开发商和发行商都列为 FLEXUS。开发者身份不同，应该视为不同产品；这不等于对该应用的安全性作结论。',
  },
  {
    question: 'Dear Passengers Demo 可以下载了吗？',
    answer:
      '目前还不可以。FLEXUS 创始人确认团队在准备 Gamescom 展会版本，并计划之后提供公开 Demo，但没有公布公开日期、下载方式或开放时长。Steam 当前没有 Download Demo 或 Playtest 请求入口。',
  },
  {
    question: 'Dear Passengers 是免费游戏吗？',
    answer:
      '官方尚未公布价格或商业模式。加入 Steam 愿望单是免费的，但愿望单不等于拥有游戏，也不代表 Dear Passengers 会免费发行。',
  },
  {
    question: 'Dear Passengers 下载大小是多少？',
    answer:
      '最终下载包大小尚未公布。Steam 最低配置中的 4GB 是可用存储空间要求，不等于准确下载流量；压缩、临时安装文件、补丁与缓存都可能让实际占用不同。',
  },
  {
    question: 'Dear Passengers 的 torrent、破解或提前版是真的吗？',
    answer:
      '不是官方发行方式。游戏尚未公开发售，因此所谓正式版 torrent、破解、密钥生成器或提前解锁安装器不可能由当前官方商店状态证明。不要运行这类文件，也不要在第三方页面输入 Steam 密码。',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers 下载：Steam 正版、Demo 与 APK 安全指南',
  description: 'Dear Passengers 正版下载状态、Steam 入口、Demo、APK 与同名移动应用的中文核验指南。',
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
  image: 'https://dearpassengers.net/images/dear-passengers-download-og.webp',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers 中文指南', item: 'https://dearpassengers.net/zh-cn/' },
    { '@type': 'ListItem', position: 2, name: 'Dear Passengers 下载', item: PAGE_URL },
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

export default function ChineseDearPassengersDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header locale="zh-CN" languageHref="/dear-passengers-download/" />

      <main id="main-content" lang="zh-CN">
        <article>
          <header className="article-hero download-hero">
            <Image
              src="/images/dear-passengers-download-safety.webp"
              alt="Dear Passengers 下载正版 Steam 路线与第三方安装包安全检查示意图"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="面包屑导航">
                <Link href="/zh-cn/">Dear Passengers 中文指南</Link><span>/</span><span>下载与安装</span>
              </nav>
              <div className="eyebrow"><span>●</span> 正版入口检查 · 2026 年 8 月 20 日核验</div>
              <h1>Dear Passengers<br />下载：<br /><em>Steam 正版、<br className="mobile-only-break" />Demo 与 APK<br className="mobile-only-break" />安全指南</em></h1>
              <p>
                官方 <strong>Dear Passengers 下载</strong>目前还没有开放。这里直接说明正版 PC 游戏在哪里、
                为什么现在不能安装、公开 Demo 到了哪一步，以及如何分辨同名 Android 应用、APK 和虚假下载页。
              </p>
              <div className="hero-actions">
                <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">打开正版 Steam 页面 ↗</a>
                <Link className="button button-ghost" href="/zh-cn/dear-passengers-release-date/">查看发售与试玩状态 →</Link>
              </div>
              <div className="status-strip" aria-label="Dear Passengers 下载状态">
                <div><small>正版应用</small><strong>STEAM 4534960</strong></div>
                <div><small>正式版下载</small><strong>尚未开放</strong></div>
                <div><small>公开 DEMO</small><strong>计划中</strong></div>
                <div><small>官方 APK</small><strong>未公布</strong></div>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>本页内容</p>
              <a href="#answer">直接答案</a>
              <a href="#official">正版下载入口</a>
              <a href="#pc">PC 安装步骤</a>
              <a href="#apk">APK 与同名应用</a>
              <a href="#demo">Demo 下载状态</a>
              <a href="#size">平台与文件大小</a>
              <a href="#warnings">安全检查</a>
              <a href="#keywords">搜索词说明</a>
              <a href="#download-faq">常见问题</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam 正版页 ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote
                locale="zh-CN"
                checked="2026 年 8 月 20 日"
                note="页面主图是原创编辑示意图，不是官方游戏截图或下载界面。正式版、平台、语言和配置以 Steam App 4534960 为准；同名移动应用只按各自商店显示的开发者身份进行区分。本站不托管、不运行，也不推荐第三方安装包。"
              />

              <section id="answer">
                <span className="kicker">当前准确答案</span>
                <h2>Dear Passengers 现在可以下载吗？</h2>
                <p className="snippet-answer">
                  不可以。FLEXUS 的 <strong>Dear Passengers 下载</strong>尚未正式开放。Steam 官方页面当前可以加入愿望单和关注，
                  但没有购买、安装、预载、Download Demo 或 Steam Playtest 按钮。商店只公布 Windows PC 与 2026 年发售窗口。
                </p>
                <p>
                  这个答案只针对 FLEXUS 开发和发行的合作航空游戏。搜索结果里出现“Dear Passengers”并不等于找到了同一产品。
                  正版身份要同时匹配游戏名称、FLEXUS、Steam App ID 4534960、Windows 平台与官方访问状态，而不是只看图标或页面标题。
                </p>
                <p>
                  已确认的是：Steam 商店页面存在，Windows 版本计划在 2026 年推出，开发者也计划提供公开 Demo。
                  合理推断是正式版可用后会通过 Steam 客户端安装。仍然未知的是准确日期、价格、预载、最终文件大小、Demo 日期和其他平台。
                </p>
                <div className="status-grid" aria-label="已确认和未公布的下载信息">
                  <div className="fact-callout">
                    <span>已确认</span><strong>Steam 是当前唯一正版入口</strong>
                    <p>App ID 4534960 · 开发商/发行商 FLEXUS · Windows · 2026 年。</p>
                  </div>
                  <div className="fact-callout unknown-callout">
                    <span>未公布</span><strong>安装开放日期与最终下载规格</strong>
                    <p>价格、预载、Demo 日期、包大小、DRM 与其他商店都没有正式答案。</p>
                  </div>
                </div>
              </section>

              <section id="official">
                <span className="kicker">正版路线</span>
                <h2>Dear Passengers 下载入口在哪里？</h2>
                <p>
                  目前唯一应当收藏的入口是 <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Dear Passengers 官方 Steam 页面 ↗</a>。
                  页面显示 FLEXUS 同时担任开发商与发行商，应用编号是 4534960。官方站点的“Get the game”也会把玩家带到这一商店记录，
                  形成从开发者控制页面到 Steam 的身份链。
                </p>
                <p>
                  正式发售后，Steam 页面应出现价格或明确的获取条件，拥有游戏的账户再通过 Steam 客户端安装。
                  如果公开试玩先上线，它也应该出现在同一商店生态，或由 FLEXUS 的第一方公告给出可核验链接。
                  单独出现的云盘、压缩包、二维码或“高速下载器”不能代替这条身份链。
                </p>
                <div className="platform-table" role="table" aria-label="Dear Passengers 官方访问状态">
                  <div className="platform-head" role="row"><span role="columnheader">访问项目</span><span role="columnheader">当前状态</span><span role="columnheader">判断依据</span></div>
                  <div role="row"><strong role="cell">Steam 商店页面</strong><span className="status-confirmed" role="cell">官方</span><span role="cell">App 4534960；FLEXUS</span></div>
                  <div role="row"><strong role="cell">加入愿望单</strong><span className="status-confirmed" role="cell">可用</span><span role="cell">只记录兴趣，不下载文件</span></div>
                  <div role="row"><strong role="cell">正式版安装</strong><span className="status-open" role="cell">未开放</span><span role="cell">没有购买或安装按钮</span></div>
                  <div role="row"><strong role="cell">公开 Demo</strong><span className="status-open" role="cell">已计划，未开放</span><span role="cell">没有日期或商店按钮</span></div>
                  <div role="row"><strong role="cell">Android / iOS</strong><span className="status-open" role="cell">未公布</span><span role="cell">无 FLEXUS 移动商店记录</span></div>
                </div>
              </section>

              <section id="pc">
                <span className="kicker">WINDOWS PC</span>
                <h2>Dear Passengers PC 下载与安装步骤</h2>
                <p>
                  现在能完成的只有核对页面、加入愿望单和准备电脑。以下步骤描述未来正版开放后的安全流程，
                  不是暗示安装按钮已经存在，也不构成提前购买或下载承诺。
                </p>
                <ol className="steps article-steps">
                  <li><span>01</span><p><strong>打开正确页面。</strong> 核对 steampowered.com、App ID 4534960 与 FLEXUS 开发者身份。</p></li>
                  <li><span>02</span><p><strong>检查真实状态。</strong> 发售前只有愿望单；只有商店出现购买、安装、Demo 或 Playtest 控件才继续。</p></li>
                  <li><span>03</span><p><strong>使用 Steam 客户端。</strong> 通过自己的库开始安装，不从镜像站寻找同名 EXE 或 ZIP。</p></li>
                  <li><span>04</span><p><strong>重新核对配置。</strong> 发售前配置可能更新，安装前查看官方要求和可用空间。</p></li>
                  <li><span>05</span><p><strong>保留账户安全。</strong> Steam 登录只在真实 Steam 域名或客户端内完成，不向密钥页提交密码。</p></li>
                </ol>
                <p>
                  当前最低配置包括 Windows 10 64 位、2.5GHz Intel Core i5 或同级处理器、8GB 内存、
                  GTX 1060 或 RX 6600 XT、DirectX 12 和 4GB 可用空间。完整解释见
                  <Link href="/zh-cn/dear-passengers-system-requirements/"> Dear Passengers 中文配置要求</Link>。
                </p>
              </section>

              <section id="apk">
                <span className="kicker">名称冲突</span>
                <h2>Dear Passengers APK 和安卓版是官网吗？</h2>
                <p>
                  FLEXUS 没有公布 Dear Passengers 安卓版、iPhone 版、移动测试或官方 APK。Google、应用目录或下载站出现同名结果，
                  只能证明有页面使用这个名称，不能证明它是 Steam 游戏的移动移植。判断产品身份要比较开发者、包名、商店记录、平台和官方互链。
                </p>
                <p>
                  例如 <a href={ROUGH_AIR_PLAY_URL} target="_blank" rel="noopener noreferrer">Google Play 上的 Dear Passengers: Rough Air ↗</a>
                  显示开发商为 Kusya Games，而 Steam 上的 Dear Passengers 显示开发商和发行商都是 FLEXUS。
                  两者开发者身份不同，也没有找到 FLEXUS 第一方页面把这个移动应用称为官方端口，因此应当按不同产品理解。
                </p>
                <div className="platform-table" role="table" aria-label="Dear Passengers Steam 与同名 Android 应用身份对比">
                  <div className="platform-head" role="row"><span role="columnheader">商店记录</span><span role="columnheader">开发者</span><span role="columnheader">结论</span></div>
                  <div role="row"><strong role="cell">Dear Passengers · Steam 4534960</strong><span className="status-confirmed" role="cell">FLEXUS</span><span role="cell">确认的正版 PC 游戏</span></div>
                  <div role="row"><strong role="cell">Dear Passengers: Rough Air · Google Play</strong><span className="status-open" role="cell">Kusya Games</span><span role="cell">不同开发者；未证实为 FLEXUS 端口</span></div>
                </div>
                <p>
                  上述对比只回答“是不是同一款游戏”，并不把另一个应用认定为恶意软件。反过来，第三方 APK 站写着“安全”“最新版”或给出版本号，
                  也不能替 FLEXUS 建立官方身份。没有开发者互链时，不应把它宣传为正版 Dear Passengers 手机版。
                </p>
              </section>

              <section id="demo">
                <span className="kicker">公开试玩</span>
                <h2>Dear Passengers Demo 下载开放了吗？</h2>
                <p>
                  公开 Demo 已经是开发者确认的计划，但还不是可下载产品。FLEXUS 创始人 Semen Kozyura 表示团队正在为 Gamescom 准备版本，
                  之后会推出公开 Demo；这段话没有给出公开日期、时长、内容、参与人数、下载平台或进度继承方式。
                </p>
                <p>
                  展会现场版本、公开 Demo、Steam Playtest、Beta 和 Early Access 是不同访问形式。Steam 当前没有 Download Demo 按钮，
                  也没有 Request Access 面板，因此搜索“Dear Passengers Demo 下载”时，准确答案仍然是“尚未开放”。
                  中文<Link href="/zh-cn/dear-passengers-release-date/">发售与试玩状态页</Link>会继续跟踪日期和平台，
                  英文<Link href="/dear-passengers-demo/" hrefLang="en">Demo 专页</Link>保留完整的原始来源分析。
                </p>
              </section>

              <section id="size">
                <span className="kicker">平台与容量</span>
                <h2>Dear Passengers 下载支持哪些设备、需要多大空间？</h2>
                <p>
                  Windows PC 是唯一确认的平台。PlayStation、Xbox、Nintendo Switch、Mac、Linux、Steam Deck 兼容评级、Android 和 iOS
                  都没有官方发布确认。未来可能增加平台不等于今天已经存在对应安装包，下载页不能把搜索需求写成产品承诺。
                </p>
                <p>
                  Steam 最低配置列出的 4GB 是“可用存储空间”，不是正式下载包的精确大小。下载压缩率、安装临时文件、更新、缓存和 Demo 范围
                  都会影响传输与最终占用。在 FLEXUS 或 Steam 给出包体数据前，任何更精确的 MB/GB 数字都应视为未知。
                </p>
              </section>

              <section id="warnings">
                <span className="kicker">安装前停止检查</span>
                <h2>Dear Passengers 虚假下载页有哪些特征？</h2>
                <p>
                  当前官方来源没有正式版安装、价格、预载、APK 或公开 Demo，所以第三方页面给出的过度确定信息本身就是警报。
                  复制官方截图、游戏介绍或 FLEXUS 名称，也不能证明页面拥有正版文件。
                </p>
                <ul>
                  <li>发售前提供“完整破解版”、torrent、repack、密钥生成器或提前解锁。</li>
                  <li>把 Android APK 称为 FLEXUS PC 游戏，却显示不同开发者或包名。</li>
                  <li>要求关闭杀毒软件、安装浏览器扩展、允许远程控制或开启通知。</li>
                  <li>让玩家在非 Steam 域名输入账户密码、验证码、钱包或支付信息。</li>
                  <li>用倒计时、虚构版本号、下载量或未经来源支持的“免费”标签制造紧迫感。</li>
                  <li>提供多个相互冲突的 Download 按钮，却不显示文件所有者与第一方公告。</li>
                </ul>
                <p>
                  本站不会替所有第三方文件做病毒扫描或安全认证。更可靠的结论是：当正版尚未开放下载时，没有必要冒险测试来历不明的安装器。
                  等待第一方按钮出现，再重新核对产品身份即可。
                </p>
              </section>

              <section id="keywords">
                <span className="kicker">中文搜索意图</span>
                <h2>为什么本页使用“Dear Passengers 下载”？</h2>
                <p>
                  中文玩家会使用“Dear Passengers 下载”“Dear Passengers 怎么下载”“Dear Passengers PC 下载”与
                  “Dear Passengers APK”等表达。它们都围绕同一个任务：确认游戏是否可用、在哪里获得，以及搜索结果里的文件是不是同一款产品。
                  因此这些问题集中在一个页面回答，不再拆成多个内容相似的薄页面。
                </p>
                <p>
                  “Demo 下载”属于时间敏感的试玩意图，所以本页给出当前答案并链接到发售/试玩追踪；“配置要求”则属于安装前硬件判断，交给独立配置页。
                  这种分工让每个 URL 有清楚主题，也降低首页、发售页和下载页之间的关键词蚕食。
                </p>
              </section>

              <section id="download-faq">
                <span className="kicker">玩家常见问题</span>
                <h2>Dear Passengers 下载 FAQ</h2>
                <p>
                  以下回答只针对 FLEXUS 的 Dear Passengers，并以 2026 年 8 月 20 日可核验的官方状态为准。
                  新的安装、Demo、平台或价格必须先在 Steam 或 FLEXUS 第一方渠道出现。
                </p>
                <FAQ items={faqs} />
              </section>

              <section id="sources">
                <span className="kicker">证据来源</span>
                <h2>下载状态如何核验？</h2>
                <ul>
                  <li><a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam 官方商店 ↗</a>：游戏身份、开发商、发行商、平台、发售窗口、语言、配置与当前按钮。</li>
                  <li><a href={OFFICIAL_SITE_URL} target="_blank" rel="noopener noreferrer">Dear Passengers 官方站 ↗</a>：第一方产品介绍与通往正版商店的入口。</li>
                  <li><a href={STEAM_NEWS_URL} target="_blank" rel="noopener noreferrer">Steam 官方新闻中心 ↗</a>：FLEXUS 发布的后续更新。</li>
                  <li><a href={INTERVIEW_URL} target="_blank" rel="noopener noreferrer">开发者采访 ↗</a>：Gamescom 版本与之后公开 Demo 的计划。</li>
                  <li><a href={ROUGH_AIR_PLAY_URL} target="_blank" rel="noopener noreferrer">Google Play 产品记录 ↗</a>：只用于核对同名应用显示的开发者身份。</li>
                </ul>
                <p>
                  页面不使用下载站自行填写的版本号、文件大小、评分或“已验证”标签来确认 FLEXUS 产品。
                  玩家讨论只用来发现问题，不会替代开发者与商店记录。
                </p>
              </section>

              <section className="related-guide related-links-panel">
                <span className="kicker">继续核对</span>
                <h2>下载之前，还需要确认什么？</h2>
                <p>
                  返回中文首页了解游戏，查看发售与 Demo 时间，或在安装前比较电脑配置。每个页面承担不同搜索意图，
                  并共同指向同一款 FLEXUS 产品。
                </p>
                <div className="related-actions">
                  <Link className="button" href="/zh-cn/">Dear Passengers 中文首页 →</Link>
                  <Link className="button button-ghost" href="/zh-cn/dear-passengers-steam/">Steam 官方商店核验 →</Link>
                  <Link className="button button-ghost" href="/zh-cn/dear-passengers-release-date/">发售与 Demo 状态 →</Link>
                  <Link className="button button-ghost" href="/zh-cn/dear-passengers-system-requirements/">电脑配置要求 →</Link>
                  <Link className="button button-ghost" href="/zh-cn/dear-passengers-game/">这是什么游戏？ →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-download/" hrefLang="en">English download guide →</Link>
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
