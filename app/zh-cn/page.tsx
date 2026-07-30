import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SourceLedger from '@/components/SourceLedger';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const PAGE_URL = 'https://dearpassengers.net/zh-cn/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers 中文指南：发售时间、玩法与配置要求' },
  description: 'Dear Passengers 中文资料指南，整理游戏玩法、发售时间、联机人数、最低电脑配置、简体中文支持和 Steam 官方信息。',
  alternates: {
    canonical: '/zh-cn/',
    languages: { en: '/', ar: '/ar/', de: '/de/', tr: '/tr/', 'pt-BR': '/pt-br/', es: '/es/', 'zh-CN': '/zh-cn/', 'x-default': '/' },
  },
  openGraph: {
    title: 'Dear Passengers 中文指南：玩法、发售与电脑配置',
    description: '根据 Steam 与 FLEXUS 第一方资料整理的 Dear Passengers 中文游戏指南。',
    url: PAGE_URL,
    siteName: 'DearPassengers.net',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Dear Passengers 中文游戏指南' }],
    locale: 'zh_CN',
    alternateLocale: ['en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers 中文指南',
    description: '玩法、发售时间、联机人数、配置要求与中文支持。',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Dear Passengers 是什么游戏？',
    answer: 'Dear Passengers 是 FLEXUS 开发和发行的物理喜剧动作冒险游戏。玩家需要驾驶一架状况糟糕的飞机，同时处理乘客、货物、餐饮服务、天气和突发事故。Steam 已确认单人游戏与在线合作模式。',
  },
  {
    question: 'Dear Passengers 什么时候发售？',
    answer: 'Steam 官方页面目前只公布 2026 年发售窗口，没有具体月份或日期，也没有公开价格。Windows PC 的 Steam 版本是当前唯一确认的平台。',
  },
  {
    question: 'Dear Passengers 支持中文吗？',
    answer: '支持简体中文界面。Steam 目前列出英语、阿拉伯语、简体中文、土耳其语、乌克兰语和日语界面，但没有标记这些语言的完整音频或字幕，繁体中文也未列出。',
  },
  {
    question: 'Dear Passengers 可以几个人玩？',
    answer: 'Steam 已确认单人和在线合作，但 FLEXUS 尚未公布正式的最大玩家人数。预告片出现多名机组成员，不等于官方确认具体房间上限。',
  },
  {
    question: 'Dear Passengers 最低配置是什么？',
    answer: '最低配置为 Windows 10 64 位、2.5GHz Intel Core i5 或同等级处理器、8GB 内存、GTX 1060 或 RX 6600 XT、DirectX 12，以及 4GB 可用空间。推荐配置尚未公布。',
  },
  {
    question: 'Dear Passengers 有试玩或测试吗？',
    answer: '目前 Steam 页面没有公开 Demo 下载按钮、Steam Playtest 报名入口或测试日期。请只通过 Steam 与 FLEXUS 的第一方页面确认下载和测试消息。',
  },
];

const gameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Dear Passengers',
  url: PAGE_URL,
  sameAs: [STEAM_URL, 'https://www.youtube.com/watch?v=XRvd_HZesys'],
  gamePlatform: 'Windows PC',
  genre: ['动作', '冒险', '独立游戏', '在线合作'],
  author: { '@type': 'Organization', name: 'FLEXUS' },
  publisher: { '@type': 'Organization', name: 'FLEXUS' },
  inLanguage: 'zh-CN',
  description: 'Dear Passengers 是一款物理喜剧合作航空游戏，玩家分别驾驶飞机和管理混乱的客舱。',
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers 中文指南：发售时间、玩法与配置要求',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-07-16',
  dateModified: '2026-07-29',
  inLanguage: 'zh-CN',
  author: { '@type': 'Organization', name: 'DearPassengers.net 编辑团队', url: 'https://dearpassengers.net/about/' },
  publisher: { '@type': 'Organization', name: 'DearPassengers.net', logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' } },
  image: 'https://dearpassengers.net/images/og-image.png',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

export default function ChineseHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header locale="zh-CN" />

      <main id="main-content" lang="zh-CN">
        <section className="hero home-hero">
          <Image className="hero-image" src="/images/hero-bg.webp" alt="Dear Passengers 游戏中的混乱飞机客舱与机组成员" fill sizes="100vw" priority />
          <div className="hero-shade" />
          <div className="container hero-content">
            <div className="eyebrow"><span>●</span> 独立游戏资料 · 2026 年 7 月 29 日更新</div>
            <h1>Dear Passengers 中文指南：<br /><em>玩法、发售与电脑配置</em></h1>
            <p className="hero-lede">
              <strong>Dear Passengers 游戏</strong>把普通航班变成一场多人合作灾难：机长要驾驶故障频发的飞机，
              客舱成员则要服务乘客、保护货物并处理天气与意外。本页只整理 Steam 和 FLEXUS 已经公布的资料，
              并将玩家关心但尚未确认的内容明确标出。
            </p>
            <div className="hero-actions">
              <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">加入 Steam 愿望单 ↗</a>
              <Link className="button button-ghost" href="/zh-cn/dear-passengers-game">这是什么游戏？ →</Link>
              <Link className="button button-ghost" href="/zh-cn/dear-passengers-release-date">查看发售与试玩状态 →</Link>
            </div>
            <div className="status-strip" aria-label="Dear Passengers 已确认信息">
              <div><small>发售窗口</small><strong>2026 年</strong></div>
              <div><small>确认平台</small><strong>PC · STEAM</strong></div>
              <div><small>游戏模式</small><strong>单人 · 在线合作</strong></div>
              <div><small>开发商</small><strong>FLEXUS</strong></div>
            </div>
          </div>
        </section>

        <div className="container home-editorial-note">
          <EditorialNote locale="zh-CN" checked="2026 年 7 月 29 日" note="游戏事实以 Steam 和 FLEXUS 第一方资料为准；预告片解读与玩家讨论不会被当作官方功能承诺。" />
        </div>

        <section className="section intro-section" id="overview">
          <div className="container two-column editorial-grid">
            <aside className="section-index"><span>01</span><p>游戏概览</p></aside>
            <div className="prose lead-prose">
              <span className="kicker">一间糟糕的航空公司</span>
              <h2>Dear Passengers 是什么游戏？</h2>
              <p>
                <strong>Dear Passengers</strong> 是一款动作冒险和在线合作游戏，核心主题是经营一趟极不可靠的航班。
                游戏并不追求严肃飞行模拟，而是利用物理系统、分工和不断升级的意外制造合作喜剧。起飞前，机组需要
                选择乘客与货物；报酬更高的订单可能同时带来更麻烦的风险。
              </p>
              <p>
                飞行中，一名玩家可以负责驾驶，其他人则在客舱中提供餐饮、安抚乘客、固定货物并处理事故。
                颠簸和气流会让没有固定的物品在机舱内移动，一次驾驶操作也可能给后舱制造新的问题。
                <strong>Dear Passengers 游戏</strong>因此强调沟通、临场反应和共同承担失败，而不是执行一条完美流程。
              </p>
              <h3>谁在开发 Dear Passengers？</h3>
              <p>
                Steam 将 FLEXUS 同时列为开发商和发行商。DearPassengers.net 是独立非官方资料站，不代表 FLEXUS、
                Valve 或 Steam。本站会优先使用商店页面、官方预告片和开发商渠道，并在资料发生变化时更新核验日期。
              </p>
              <p>
                FLEXUS 官方资料显示，这是一家 2020 年成立于乌克兰基辅的工作室，团队超过 70 人，旗下游戏累计下载量
                超过 3 亿次并覆盖 150 多个国家。英文
                <Link href="/dear-passengers-developer-flexus" hrefLang="en"> Dear Passengers 开发商专题</Link>
                整理了工作室背景、100 万愿望单里程碑与创始人采访。
              </p>
            </div>
          </div>
        </section>

        <section className="section mechanics-section" id="gameplay">
          <div className="container">
            <div className="section-heading split-heading">
              <div><span className="kicker">机组分工</span><h2>Dear Passengers 游戏玩法</h2></div>
              <p>驾驶、客舱服务、乘客管理和货物保护会同时发生，混乱来自不同职责之间的相互影响。</p>
            </div>
            <div className="mechanics-grid">
              <article className="feature-card feature-card-wide"><span className="card-number">A</span><div><h3>机长与客舱成员</h3><p>机长负责控制飞机，客舱成员则处理机舱内的服务与事故。驾驶员认为平稳的动作，可能让餐车或行李在后舱滑动，因此团队需要不断交换信息。</p></div></article>
              <article className="feature-card"><span className="card-number">B</span><h3>乘客、货物与天气</h3><p>乘客和货物选择构成风险与收益。官方说明提到湍流和气穴，天气会让不安全的物品与乘客变成新的问题。</p></article>
              <article className="feature-card dark-card"><span className="card-number">C</span><h3>物理系统与突发事故</h3><p>Dear Passengers 的乐趣来自连锁反应。团队需要在事故继续扩大前想出可行办法，而不是背诵唯一的最优路线。</p></article>
            </div>
          </div>
        </section>

        <section className="section manifest-section" id="multiplayer">
          <div className="container two-column">
            <div className="prose">
              <span className="kicker">联机状态</span>
              <h2>Dear Passengers 可以几个人玩？</h2>
              <p>
                Steam 已确认 <strong>Dear Passengers</strong> 支持单人和在线合作，但没有公布正式的最大玩家人数。
                预告片显示多名机组成员共同工作，只能证明多人分工是游戏表现的一部分，不能据此把具体人数写成官方上限。
              </p>
              <p>
                本地合作、分屏、跨平台联机、公开房间、服务器浏览器和加入中途游戏目前都没有正式说明。
                控制器、Steam Deck 和 VR 状态也仍然未知。中文读者可以查看
                <Link href="/zh-cn/dear-passengers-player-count"> Dear Passengers 玩家人数与联机指南</Link>，
                需要英文来源分析时再切换到对应英文页面。
              </p>
              <Link className="text-link" href="/zh-cn/dear-passengers-player-count">打开完整中文联机指南 →</Link>
            </div>
            <div className="status-board">
              <div className="board-header"><span>状态看板</span><b>已确认与未公布</b></div>
              <div className="board-row confirmed"><span>单人游戏</span><b>已确认</b></div>
              <div className="board-row confirmed"><span>在线合作</span><b>已确认</b></div>
              <div className="board-row open"><span>最大玩家人数</span><b>未说明</b></div>
              <div className="board-row open"><span>本地合作与分屏</span><b>未公布</b></div>
              <div className="board-row open"><span>跨平台联机</span><b>未公布</b></div>
              <p>来源：Steam 商店功能栏，核验于 2026 年 7 月 29 日。</p>
            </div>
          </div>
        </section>

        <section className="section release-preview" id="release">
          <div className="container release-card">
            <div className="release-stamp"><small>计划抵达</small><strong>2026</strong><span>具体日期待公布</span></div>
            <div className="prose">
              <span className="kicker">发售信息</span>
              <h2>Dear Passengers 发售时间与平台</h2>
              <p>
                Dear Passengers 计划在 2026 年登陆 Windows PC 的 Steam，但没有具体月份或日期，也没有价格、预购、
                公开 Demo 或 Playtest 入口。PlayStation、Xbox、Nintendo Switch、Mac 和 Linux 版本都未公布。
              </p>
              <p>
                FLEXUS 已宣布游戏在两天内达到 100 万 Steam 愿望单并进入愿望单 Top 25。创始人在 7 月 17 日采访时
                表示数字约为 120 万，同时仍以 2026 年为目标，但不会为了赶时间发布未打磨完成的版本。
              </p>
              <p>
                中文用户可以查看
                <Link href="/zh-cn/dear-passengers-release-date"> Dear Passengers 发售时间、试玩与平台指南</Link>；
                需要核对英文原始说明时，再打开
                <Link href="/dear-passengers-release-date" hrefLang="en"> 英文发售指南</Link>。
              </p>
            </div>
          </div>
        </section>

        <section className="section requirements-section" id="requirements">
          <div className="container two-column requirements-grid">
            <div className="prose">
              <span className="kicker">电脑配置</span>
              <h2>Dear Passengers 配置要求</h2>
              <p>
                官方最低配置为 Windows 10 64 位、2.5GHz Intel Core i5 或同等级处理器、8GB 内存、GTX 1060
                或 RX 6600 XT、DirectX 12，以及 4GB 可用空间。Steam 没有为最低配置注明分辨率、画质或帧率，
                推荐配置也尚未公布。
              </p>
              <p>
                如果要判断笔记本、老电脑、Steam Deck、Mac 或 Linux 状态，请查看
                <Link href="/zh-cn/dear-passengers-system-requirements"> Dear Passengers 配置要求完整中文指南</Link>。
              </p>
            </div>
            <div className="spec-sheet">
              <div><span>操作系统</span><strong>Windows 10 · 64 位</strong></div>
              <div><span>处理器</span><strong>Intel Core i5 · 2.5GHz 或同级</strong></div>
              <div><span>内存</span><strong>8GB RAM</strong></div>
              <div><span>显卡</span><strong>GTX 1060 / RX 6600 XT</strong></div>
              <div><span>DirectX</span><strong>版本 12</strong></div>
              <div><span>存储空间</span><strong>4GB 可用空间</strong></div>
            </div>
          </div>
        </section>

        <section className="section similar-section" id="languages">
          <div className="container narrow prose">
            <span className="kicker">语言支持</span>
            <h2>Dear Passengers 支持简体中文吗？</h2>
            <p>
              支持简体中文界面。Steam 当前列出英语、阿拉伯语、简体中文、土耳其语、乌克兰语和日语界面。
              商店语言表没有标记完整音频或字幕，因此不能把“中文界面”扩大为中文配音或完整中文本地化。
              繁体中文目前也没有列出，未来语言变化应以 Steam 官方页面为准。
            </p>
          </div>
        </section>

        <SourceLedger locale="zh-CN" />

        <section className="section faq-section" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro"><span className="kicker">常见问题</span><h2>Dear Passengers 中文问答</h2><p>以下答案只总结当前已经确认的资料，未公布的功能不会用推测补齐。</p></div>
            <FAQ items={faqs} />
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <span className="kicker">登机提醒</span>
            <h2>在 Dear Passengers 发售前关注官方消息</h2>
            <p>将游戏加入 Steam 愿望单以获取官方发售提醒，并收藏本站查看配置、联机、平台和语言信息的核验更新。</p>
            <div className="hero-actions"><a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">加入 Steam 愿望单 ↗</a><Link className="button button-ghost" href="/">English site →</Link></div>
          </div>
        </section>
      </main>

      <Footer locale="zh-CN" />
    </>
  );
}
