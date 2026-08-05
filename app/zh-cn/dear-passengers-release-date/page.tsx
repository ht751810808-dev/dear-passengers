import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SourceLedger from '@/components/SourceLedger';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const INTERVIEW_URL = 'https://dev.ua/en/news/dear-passengers-1784100084';
const DOU_INTERVIEW_URL = 'https://gamedev.dou.ua/articles/dear-passengers-interview/?from=community_widget_post';
const PAGE_URL = 'https://dearpassengers.net/zh-cn/dear-passengers-release-date/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers 发售时间：2026、试玩与平台中文指南' },
  description:
    'Dear Passengers 发售时间中文指南：核对 2026 年 Steam 上线窗口、公开 Demo、Gamescom 试玩、价格、下载、PS5、Xbox、Switch 和中文支持。',
  alternates: {
    canonical: '/zh-cn/dear-passengers-release-date/',
    languages: {
      en: '/dear-passengers-release-date/',
      ar: '/ar/dear-passengers-release/',
      de: '/de/dear-passengers-release/',
      tr: '/tr/dear-passengers-cikis-tarihi/',
      'pt-BR': '/pt-br/dear-passengers-data-de-lancamento/',
      es: '/es/dear-passengers-fecha-de-lanzamiento/',
      'my-MM': '/my/dear-passengers-release-date/',
      ru: '/ru/dear-passengers-data-vyhoda/',
      'zh-CN': '/zh-cn/dear-passengers-release-date/',
      'x-default': '/dear-passengers-release-date/',
    },
  },
  openGraph: {
    title: 'Dear Passengers 发售时间、试玩与平台状态',
    description: '只根据 Steam 与开发者资料整理的 Dear Passengers 2026 发售和 Demo 中文状态页。',
    url: PAGE_URL,
    siteName: 'DearPassengers.net',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dear Passengers 发售时间与试玩状态中文指南',
      },
    ],
    locale: 'zh_CN',
    alternateLocale: ['en_US'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers 发售时间：2026、试玩与平台',
    description: '准确区分已确认发售窗口、公开试玩计划与尚未公布的日期、价格和平台。',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Dear Passengers 什么时候发售？',
    answer:
      'Steam 官方页面目前只公布 Dear Passengers 将在 2026 年发售。FLEXUS 创始人在 7 月 17 日采访中表示仍计划今年发布，但不会为了赶时间推出未完成打磨的版本。具体月份、日期或上线时间仍未公布。',
  },
  {
    question: 'Dear Passengers 现在可以玩吗？',
    answer:
      '暂时不能购买或游玩正式版。Steam 页面目前提供愿望单入口，没有购买按钮、公开 Demo 下载按钮或 Steam Playtest 报名入口。',
  },
  {
    question: 'Dear Passengers 有 Demo 或试玩版吗？',
    answer:
      '开发者已确认正在为 Gamescom 准备一个 Dear Passengers Demo，并计划之后推出公开 Demo。但公开试玩尚未上线，也没有公布日期、下载平台、开放时长、内容范围或支持人数。',
  },
  {
    question: 'Dear Passengers 会在 PS5、Xbox 或 Switch 上发售吗？',
    answer:
      '目前没有公布 PlayStation 5、Xbox Series、Nintendo Switch 或 Switch 2 版本。Windows PC 的 Steam 版是唯一确认的平台。',
  },
  {
    question: 'Dear Passengers 售价是多少？',
    answer:
      '官方尚未公布价格。Steam 没有预购、版本对比、区域价格、首发折扣或 Early Access 标记，因此现阶段无法可靠预测人民币售价。',
  },
  {
    question: 'Dear Passengers 支持简体中文吗？',
    answer:
      '支持简体中文界面。Steam 当前列出英语、阿拉伯语、简体中文、土耳其语、乌克兰语和日语界面，但没有标记完整音频或字幕，繁体中文也尚未列出。',
  },
  {
    question: '在哪里下载 Dear Passengers 才安全？',
    answer:
      '只在 Dear Passengers 官方 Steam 页面出现购买、Demo 或 Playtest 按钮后下载。不要安装第三方网站提供的所谓提前版、破解试玩、激活器或测试资格程序。',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers 发售时间：2026、试玩与平台中文指南',
  description: 'Dear Passengers 发售窗口、Demo 计划、平台、价格、下载与中文支持的第一方资料核验。',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-07-18',
  dateModified: '2026-07-19',
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
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers 中文指南', item: 'https://dearpassengers.net/zh-cn/' },
    { '@type': 'ListItem', position: 2, name: 'Dear Passengers 发售时间', item: PAGE_URL },
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

export default function ChineseReleaseDatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header locale="zh-CN" languageHref="/dear-passengers-release-date/" />

      <main id="main-content" lang="zh-CN">
        <article>
          <header className="article-hero">
            <Image
              src="/images/release-date.webp"
              alt="Dear Passengers 发售时间中文指南与 2026 航班到达信息"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="面包屑导航">
                <Link href="/zh-cn/">Dear Passengers 中文指南</Link><span>/</span><span>发售时间</span>
              </nav>
              <div className="eyebrow"><span>●</span> 发售资料 · 依据 STEAM 与开发者信息核验</div>
              <h1>Dear Passengers 发售时间：<br /><em>2026、试玩与平台中文指南</em></h1>
              <p>
                <strong>Dear Passengers 发售时间</strong>目前确定为 2026 年，平台是 Windows PC 的 Steam。
                官方尚未公布具体日期、价格或主机版本。开发者已经确认 Gamescom Demo 与之后的公开试玩计划，
                但公开版本仍不能下载。本页把已确认内容、开发者计划和未公布问题分别说明。
              </p>
              <div className="hero-actions">
                <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">打开 Steam 官方页面 ↗</a>
                <Link className="button button-ghost" href="/zh-cn/dear-passengers-system-requirements">查看电脑配置 →</Link>
              </div>
              <div className="status-strip" aria-label="Dear Passengers 发售状态摘要">
                <div><small>发售窗口</small><strong>2026 年</strong></div>
                <div><small>确认平台</small><strong>WINDOWS · STEAM</strong></div>
                <div><small>公开试玩</small><strong>计划中 · 未上线</strong></div>
                <div><small>准确日期与价格</small><strong>未公布</strong></div>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>本页内容</p>
              <a href="#current-answer">当前答案</a>
              <a href="#demo">Demo 与试玩</a>
              <a href="#platforms">平台状态</a>
              <a href="#price">价格与购买</a>
              <a href="#timeline">公告时间线</a>
              <a href="#languages">中文与配置</a>
              <a href="#safe-download">安全下载</a>
              <a href="#release-faq">常见问题</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam 官方页 ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote
                locale="zh-CN"
                checked="2026 年 7 月 19 日"
                note="2026 年发售窗口、Windows 平台、游戏模式、语言和最低配置以 Steam 为准；Gamescom 与公开 Demo 计划来自具名开发者采访。没有第一方资料的问题统一标为未公布。"
              />

              <section id="current-answer">
                <span className="kicker">当前准确答案</span>
                <h2>Dear Passengers 发售时间是什么时候？</h2>
                <p className="snippet-answer">
                  <strong>Dear Passengers 发售时间</strong>目前是 2026 年，确定登陆 Windows PC 的 Steam。
                  FLEXUS 和 Steam 都没有公布具体月份、日期或时区。商店页面可以加入愿望单，但暂时没有购买、
                  预购、预载、公开 Demo 或 Steam Playtest 入口。
                </p>
                <p>
                  7 月 17 日的 GameDev DOU 采访提供了最新开发背景：创始人 Semen Kozyura 表示团队仍计划在 2026 年
                  发布，但不会为了赶进度推出质量不足或没有完成打磨的版本。这确认了年份目标，却没有产生更精确日期。
                </p>
                <p>
                  现阶段最准确的写法就是“2026 年，具体日期未公布”。搜索结果中的季度预测、倒计时、某一天上线、
                  限时预购或提前解锁，如果没有链接到新的 Steam 页面或 FLEXUS 官方消息，都不能当作
                  Dear Passengers 发售时间。发售年份并不自动代表已经可以下载。
                </p>
                <p>
                  Steam 同时把 FLEXUS 列为开发商和发行商，页面状态仍是未发售。用户可以加入愿望单，让 Steam
                  在游戏正式可用或商店状态发生变化时发送提醒。愿望单是目前唯一明确的玩家操作，不是预购，
                  也不会收取费用或保证测试资格。
                </p>

                <div className="fact-callout">
                  <span>已经确认</span>
                  <strong>2026 · WINDOWS PC · STEAM</strong>
                  <p>具体日期、价格、预购、Early Access、预载和主机版本均未公布。</p>
                </div>

                <h3>为什么现在没有更精确的日期？</h3>
                <p>
                  Dear Passengers 刚完成公开亮相，开发商可以先展示概念、开放愿望单并准备试玩，再确定最终上线日。
                  这并不代表延期，也不代表一定会在某个季度发布。只有官方商店把“2026”改为具体日期，或 FLEXUS
                  发布明确公告后，本页才会更新倒计时、时区和购买信息。
                </p>
              </section>

              <section id="demo">
                <span className="kicker">试玩状态</span>
                <h2>Dear Passengers 有 Demo 或公开试玩吗？</h2>
                <p>
                  Dear Passengers Demo 已经从“完全未公布”变成“开发者确认的计划”。FLEXUS 创始人 Semen Kozyura
                  在具名采访中表示，团队正在为 Gamescom 准备试玩版本，并计划之后发布公开 Demo。这证明试玩计划
                  存在，但不代表公开版本已经上线。
                </p>
                <p>
                  截至本次核验，Steam 没有显示“下载 Demo”按钮，也没有 Steam Playtest 的“请求访问权限”面板。
                  开发商尚未公布公开 Dear Passengers Demo 的日期、下载渠道、开放时长、任务数量、是否支持联机、
                  玩家上限、存档规则、配置表现或地区限制。
                </p>
                <p>
                  Gamescom 会场版本和之后的公开版本也不一定完全相同。会场 Demo 可能由工作人员控制设备、时间和
                  队伍，而公开 Demo 需要处理下载、服务器、设置和硬件兼容。现阶段可以确认“会准备”和“之后公开”，
                  不能确认具体内容或把任何第三方文件称为正式试玩。
                </p>
                <p>
                  英文 <Link href="/dear-passengers-demo" hrefLang="en">Dear Passengers Demo 完整状态页</Link>
                  会继续记录 Gamescom、公开下载、Playtest、Beta 和安全检查。中文页面则优先回答什么时候能玩、
                  去哪里下载，以及哪些信息仍然不能确定。
                </p>

                <div className="platform-table" role="table" aria-label="Dear Passengers 试玩形式状态">
                  <div className="platform-head" role="row"><span role="columnheader">形式</span><span role="columnheader">状态</span><span role="columnheader">当前答案</span></div>
                  <div role="row"><strong role="cell">Gamescom Demo</strong><span className="status-confirmed" role="cell">已确认准备</span><span role="cell">具体展位与试玩安排待公布</span></div>
                  <div role="row"><strong role="cell">公开 Demo</strong><span className="status-confirmed" role="cell">开发者计划</span><span role="cell">没有日期或下载入口</span></div>
                  <div role="row"><strong role="cell">Steam Playtest</strong><span className="status-open" role="cell">未公布</span><span role="cell">商店没有申请面板</span></div>
                  <div role="row"><strong role="cell">Beta / 测试资格</strong><span className="status-open" role="cell">未公布</span><span role="cell">没有官方报名表</span></div>
                </div>
              </section>

              <section id="platforms">
                <span className="kicker">平台到达信息</span>
                <h2>Dear Passengers 会登陆哪些平台？</h2>
                <p>
                  Windows PC 是当前唯一确认的平台。Steam 的最低配置明确写着 Windows 10 64 位，游戏页面也没有
                  指向其他官方商店。Dear Passengers 发售时间因此只能应用于 Windows Steam 版，不能直接扩展为
                  全平台同步上线。
                </p>
                <p>
                  PlayStation 5、Xbox Series X|S、Nintendo Switch、Switch 2、Mac 和 Linux 版本都没有官方公告。
                  Epic Games Store、GOG、Microsoft Store、Game Pass 或其他订阅服务同样未公布。合作游戏适合主机、
                  画面看起来可以使用手柄，或者最低存储只有 4GB，都不能证明移植计划存在。
                </p>

                <div className="platform-table" role="table" aria-label="Dear Passengers 各平台发售状态">
                  <div className="platform-head" role="row"><span role="columnheader">平台</span><span role="columnheader">状态</span><span role="columnheader">可靠依据</span></div>
                  <div role="row"><strong role="cell">Windows PC · Steam</strong><span className="status-confirmed" role="cell">2026 年确认</span><span role="cell">官方 Steam 页面</span></div>
                  <div role="row"><strong role="cell">PlayStation 5</strong><span className="status-open" role="cell">未公布</span><span role="cell">没有官方商店页面</span></div>
                  <div role="row"><strong role="cell">Xbox Series X|S</strong><span className="status-open" role="cell">未公布</span><span role="cell">没有官方商店页面</span></div>
                  <div role="row"><strong role="cell">Switch / Switch 2</strong><span className="status-open" role="cell">未公布</span><span role="cell">没有官方商店页面</span></div>
                  <div role="row"><strong role="cell">Mac / Linux</strong><span className="status-open" role="cell">未公布</span><span role="cell">只提供 Windows 配置</span></div>
                </div>

                <p>
                  如果未来出现主机版本，最可靠的信号会是平台官方商店页面和 FLEXUS 的同步公告。单纯出现手柄图标、
                  玩家愿望或“开发商正在考虑”的二手转述，都不足以建立独立的 PS5、Xbox 或 Switch 发售日期。
                </p>
              </section>

              <section id="price">
                <span className="kicker">购买状态</span>
                <h2>Dear Passengers 价格公布了吗？</h2>
                <p>
                  Dear Passengers 目前没有公开售价。Steam 页面没有购买按钮、预购价格、豪华版、捆绑包、首发折扣、
                  区域价格或人民币价格。也没有 Early Access 标记，因此不能把 2026 发售窗口写成抢先体验时间。
                </p>
                <p>
                  不同地区的最终价格通常需要商店正式开放后才能核对。根据其他合作游戏猜测一个价格区间可以作为玩家
                  讨论，但不能放进“已确认”状态。本站会在 Steam 正式显示购买信息后记录基础版价格、地区货币、
                  首发折扣、版本差异和退款相关入口。
                </p>
                <p>
                  现在无需向任何第三方支付所谓预购定金、激活费用或 Demo 资格费。将 Dear Passengers 加入愿望单
                  不收费。开发者没有发布测试码销售、预售礼包或邀请资格交易信息。
                </p>
              </section>

              <section id="timeline">
                <span className="kicker">公告时间线</span>
                <h2>Dear Passengers 发售与试玩时间线</h2>
                <div className="timeline">
                  <div><time>7 月 14 日<br />2026</time><p><strong>Dear Passengers 公开亮相。</strong> Steam 页面上线，确认 FLEXUS、Windows PC、2026 年、单人和在线合作。</p></div>
                  <div><time>7 月 15 日<br />2026</time><p><strong>开发者说明试玩计划。</strong> 具名采访提到 Gamescom Demo，并表示之后会推出公开 Demo。</p></div>
                  <div><time>7 月 16 日<br />2026</time><p><strong>FLEXUS 报告愿望单里程碑。</strong> 官方公司渠道称 36 小时达到 70 万愿望单；该数字属于开发者报告，不代表销量。</p></div>
                  <div><time>7 月 17 日<br />2026</time><p><strong>两天达到 100 万愿望单。</strong> FLEXUS 表示游戏进入 Steam 愿望单 Top 25；创始人采访时称约为 120 万，并重申 2026 年目标但不会赶工。</p></div>
                  <div className="future"><time>下一次<br />更新</time><p><strong>等待可验证变化。</strong> 包括 Demo 日期、公开下载、准确发售日、价格、玩家上限、推荐配置或新平台。</p></div>
                </div>
                <p>
                  时间线不会为了保持“每日更新”而添加没有变化的条目。下一条记录必须包含日期、原始来源，以及它如何
                  改变 Dear Passengers 发售时间或试玩状态。只有搜索热度或转发数量变化，不会自动改变游戏事实。
                </p>
              </section>

              <section id="languages">
                <span className="kicker">中文与硬件准备</span>
                <h2>Dear Passengers 支持中文吗？电脑需要什么配置？</h2>
                <p>
                  Steam 已确认简体中文界面。当前六种界面语言是英语、阿拉伯语、简体中文、土耳其语、乌克兰语和日语。
                  商店语言表没有标记这些语言的完整音频或字幕，因此“支持简体中文界面”不能写成中文配音。
                  繁体中文目前也没有列出。
                </p>
                <p>
                  官方最低配置为 Windows 10 64 位、2.5GHz Intel Core i5 或同等级处理器、8GB 内存、GTX 1060
                  或 RX 6600 XT、DirectX 12，以及 4GB 可用空间。Steam 没有公布推荐配置，也没有说明最低配置对应
                  的分辨率、画质和帧率。
                </p>
                <p>
                  手柄支持、Steam Deck 兼容等级、Mac、Linux、VR、飞行摇杆和按键重映射均未公布。硬件玩家可以阅读
                  <Link href="/zh-cn/dear-passengers-system-requirements"> Dear Passengers 配置要求中文指南</Link>，
                  其中分别解释显卡、笔记本、核显、存储、Steam Deck 和语言状态。
                </p>
              </section>

              <section id="safe-download">
                <span className="kicker">下载安全检查</span>
                <h2>如何安全下载 Dear Passengers？</h2>
                <p>
                  Dear Passengers 正式版和公开 Demo 都还没有可用下载，因此现在声称提供安装包的网站都不能使用
                  官方 Steam 状态证明自己。最安全的方法是收藏 Steam 页面，等待商店出现明确的购买、下载 Demo
                  或 Playtest 按钮。
                </p>
                <ol className="steps article-steps">
                  <li><span>01</span><p><strong>核对网址。</strong> 官方商店应用编号为 4534960，开发商与发行商都应显示 FLEXUS。</p></li>
                  <li><span>02</span><p><strong>检查按钮。</strong> 只有 Steam 页面真正出现 Demo、Playtest 或购买入口时，下载状态才算改变。</p></li>
                  <li><span>03</span><p><strong>拒绝外部安装器。</strong> 不运行所谓破解试玩、抢先体验解锁器、密钥生成器或浏览器扩展。</p></li>
                  <li><span>04</span><p><strong>不出售测试资格。</strong> 没有第一方公告的报名表、邀请码和付费资格都不能信任。</p></li>
                  <li><span>05</span><p><strong>回来核对日期。</strong> 本页会在官方来源变化时同步更新修改日期和站点地图。</p></li>
                </ol>
                <p>
                  这种做法不仅避免恶意文件，也防止下载到另一个同名项目。Dear Passengers 是常见英语短语，搜索结果
                  中可能出现铁路、航空通知或其他作品。开发商名称、Steam 应用编号和官方页面三项同时匹配才是可靠入口。
                </p>
              </section>

              <section id="release-faq">
                <span className="kicker">常见问题</span>
                <h2>Dear Passengers 发售时间 FAQ</h2>
                <p>
                  以下答案根据 2026 年 7 月 19 日可以核验的第一方资料整理。没有公布的内容不会用竞品推测、预告片
                  截图或玩家愿望补齐。发生正式变化后，本页会更新答案、修改日期和相关内链。
                </p>
                <FAQ items={faqs} />
                <p>
                  查看<a href={DOU_INTERVIEW_URL} target="_blank" rel="noopener noreferrer">GameDev DOU 创始人采访 ↗</a>
                  或英文<Link href="/dear-passengers-developer-flexus" hrefLang="en">开发商专题</Link>了解完整背景。
                </p>
              </section>

              <section className="related-guide related-links-panel">
                <span className="kicker">继续查看资料</span>
                <h2>关注 Dear Passengers 发售前的可靠变化</h2>
                <p>
                  返回中文首页了解玩法和联机概览，查看完整电脑配置，或阅读英文新闻与 Demo 页面追踪具名来源。
                  如果需要原始证据，可以直接打开 Steam 与开发者采访。
                </p>
                <div className="related-actions">
                  <Link className="button button-ghost" href="/zh-cn/dear-passengers-game">游戏介绍与当前状态 →</Link>
                  <Link className="button" href="/zh-cn/">Dear Passengers 中文首页 →</Link>
                  <Link className="button button-ghost" href="/zh-cn/dear-passengers-player-count">中文联机人数 →</Link>
                  <Link className="button button-ghost" href="/zh-cn/dear-passengers-system-requirements">中文配置要求 →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-news" hrefLang="en">英文新闻 →</Link>
                  <Link className="button button-ghost" href="/de/dear-passengers-release/" hrefLang="de">德语发售指南 →</Link>
                  <a className="button button-ghost" href={INTERVIEW_URL} target="_blank" rel="noopener noreferrer">开发者采访 ↗</a>
                </div>
              </section>
            </div>
          </div>
        </article>

        <SourceLedger locale="zh-CN" />
      </main>

      <Footer locale="zh-CN" />
    </>
  );
}
