import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SourceLedger from '@/components/SourceLedger';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=schinese';
const PAGE_URL = 'https://dearpassengers.net/zh-cn/dear-passengers-player-count/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers 几人联机？玩家人数与单人模式' },
  description:
    'Dear Passengers 几人联机？查看官方玩家人数状态、单人模式、在线合作、本地联机、分屏、跨平台、语音和服务器信息。',
  alternates: {
    canonical: '/zh-cn/dear-passengers-player-count/',
    languages: {
      en: '/dear-passengers-player-count/',
      ar: '/ar/dear-passengers-player-count/',
      de: '/de/dear-passengers-spielerzahl/',
      tr: '/tr/dear-passengers-kac-kisilik/',
      'pt-BR': '/pt-br/dear-passengers-quantos-jogadores/',
      es: '/es/dear-passengers-cuantos-jugadores/',
      'zh-CN': '/zh-cn/dear-passengers-player-count/',
      'x-default': '/dear-passengers-player-count/',
    },
  },
  openGraph: {
    title: 'Dear Passengers 玩家人数与联机模式中文指南',
    description: '区分已经确认的单人和在线合作，以及尚未公布的房间人数、分屏、跨平台、语音与服务器功能。',
    url: PAGE_URL,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dear Passengers 中文玩家人数与联机指南',
      },
    ],
    locale: 'zh_CN',
    alternateLocale: ['en_US'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers 几人联机？',
    description: '玩家人数、单人模式、在线合作、本地联机、跨平台与语音状态。',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  {
    question: 'Dear Passengers 最多可以几个人玩？',
    answer:
      'FLEXUS 目前没有公布正式的最大玩家人数。Steam 只确认单人游戏和在线合作。预告片里出现多名机组成员，可以说明多人分工是核心表现，但不能用画面人数代替官方房间上限。',
  },
  {
    question: 'Dear Passengers 可以一个人玩吗？',
    answer:
      '可以。Steam 已将单人游戏列为正式功能。不过开发商尚未解释单人玩家如何同时处理驾驶舱与客舱工作，因此 AI 队友、自动驾驶、暂停切换岗位、任务简化和单人难度都仍未确认。',
  },
  {
    question: 'Dear Passengers 支持在线联机吗？',
    answer:
      '支持。Steam 已明确列出在线合作。公开匹配、好友邀请、快速加入、中途加入、专用服务器、服务器浏览器和私人房间设置尚未公布。',
  },
  {
    question: 'Dear Passengers 支持本地联机或分屏吗？',
    answer:
      '目前没有确认。Steam 没有列出本地合作、共享屏幕、分屏或 Remote Play Together。不要因为游戏支持在线合作，就推断同一台电脑可以多人游玩。',
  },
  {
    question: 'Dear Passengers 支持跨平台联机吗？',
    answer:
      '跨平台联机尚未公布。当前唯一确认的平台是 Windows PC 的 Steam 版本，在第二个平台正式公布之前，也没有足够条件确认跨平台功能。',
  },
  {
    question: 'Dear Passengers 有距离语音吗？',
    answer:
      '距离语音尚未获得 FLEXUS 的正式确认。Steam 显示游戏内聊天和在线互动，但这些通用提示不能证明语音距离衰减、无线电频道、按键说话或语音审核机制。',
  },
  {
    question: 'Dear Passengers 支持简体中文吗？',
    answer:
      '支持简体中文界面。Steam 目前列出英语、阿拉伯语、简体中文、土耳其语、乌克兰语和日语界面；完整配音和字幕栏没有被勾选。',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers 几人联机？玩家人数与单人模式中文指南',
  description: '整理 Dear Passengers 玩家人数、单人游戏、在线合作、本地联机、跨平台和语音状态。',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-07-20',
  dateModified: '2026-07-20',
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
    { '@type': 'ListItem', position: 2, name: 'Dear Passengers 玩家人数', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'zh-CN',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function ChinesePlayerCountPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header locale="zh-CN" languageHref="/dear-passengers-player-count/" />

      <main id="main-content" lang="zh-CN">
        <article>
          <header className="article-hero zh-multiplayer-hero">
            <Image
              src="/images/hero-bg.webp"
              alt="Dear Passengers 多名机组成员在飞机内在线合作"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="面包屑导航">
                <Link href="/zh-cn/">Dear Passengers 中文指南</Link><span>/</span><span>玩家人数</span>
              </nav>
              <div className="eyebrow"><span>●</span> 联机状态 · 已确认与未公布</div>
              <h1>Dear Passengers 几人联机？<br /><em>玩家人数与单人模式</em></h1>
              <p>
                <strong>Dear Passengers</strong> 已确认支持单人游戏和在线合作，但 FLEXUS 尚未公布最大房间人数。
                本页集中整理 Dear Passengers 玩家人数、单人玩法、本地联机、分屏、跨平台、语音、匹配和服务器状态。
              </p>
              <div className="hero-actions">
                <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">查看 Steam 官方功能 ↗</a>
                <Link className="button button-ghost" href="/zh-cn/dear-passengers-release-date">查看发售时间 →</Link>
              </div>
              <div className="status-strip" aria-label="Dear Passengers 联机状态摘要">
                <div><small>单人游戏</small><strong>已确认</strong></div>
                <div><small>在线合作</small><strong>已确认</strong></div>
                <div><small>最大人数</small><strong>未公布</strong></div>
                <div><small>本地合作</small><strong>未公布</strong></div>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>联机简报</p>
              <a href="#answer">直接答案</a>
              <a href="#confirmed">官方确认模式</a>
              <a href="#maximum">最大玩家人数</a>
              <a href="#solo">单人模式</a>
              <a href="#local">本地与跨平台</a>
              <a href="#voice">语音与服务器</a>
              <a href="#roles">机组分工</a>
              <a href="#status">完整状态表</a>
              <a href="#player-faq">常见问题</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam 官方页 ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote note="本页优先采用 Steam 商店功能栏与 FLEXUS 第一方信息。预告片可用于观察多人分工，但画面中的角色数量、第三方报道或论坛猜测，都不能替代正式的房间人数与联机功能说明。" />

              <section id="answer">
                <span className="kicker">先说结论</span>
                <h2>Dear Passengers 可以几个人玩？</h2>
                <p className="snippet-answer">
                  截至 2026 年 7 月 20 日，<strong>Dear Passengers</strong> 官方最大玩家人数仍未公布。Steam 已确认
                  Dear Passengers 支持<strong>单人游戏</strong>和<strong>在线合作</strong>，但没有写明 2 人、4 人、
                  6 人或其他房间上限。本地合作、分屏、跨平台、公开匹配和服务器浏览器也都没有正式说明。
                </p>
                <p>
                  Dear Passengers 的公开设定非常适合多人分工：一名机组成员负责驾驶飞机，其他玩家在客舱服务乘客、
                  保护货物并处理事故。预告片确实出现多名角色共同工作，但 Dear Passengers 画面人数可能包含演示安排、
                  剪辑或非最终版本，不能直接换算成产品承诺。
                </p>
                <p>
                  因此，当前最准确的写法不是“Dear Passengers 是四人游戏”，而是“Dear Passengers 已确认单人和在线合作，
                  最大合作人数等待 FLEXUS 公布”。这种表达可以避免玩家根据错误人数提前组织固定队或购买多份游戏。
                </p>
                <div className="fact-callout">
                  <span>当前安全结论</span>
                  <strong>能单人，也能在线合作；最大人数未知</strong>
                  <p>任何具体房间上限，都应等待 Steam 功能栏、官方 FAQ、Demo 或 FLEXUS 公告确认。</p>
                </div>
              </section>

              <section id="confirmed">
                <span className="kicker">Steam 功能栏</span>
                <h2>Dear Passengers 已确认哪些游玩模式？</h2>
                <p>
                  Steam 目前为 Dear Passengers 列出单人游戏、在线合作和家庭共享。Dear Passengers 商店简介还明确写到：
                  一名玩家驾驶飞机，其他机组成员负责维持客舱、服务乘客并处理不断升级的问题。这足以确认驾驶舱与客舱之间
                  存在合作分工。
                </p>
                <p>
                  “在线合作”并不自动包含所有常见联机功能。Dear Passengers 是否支持公共大厅、仅限好友房间、房间密码、
                  快速匹配、掉线重连、中途加入、房主迁移或专用服务器，都需要额外的官方说明。Steam 标签中的
                  “多人游戏”也不能单独回答每一项房间功能。
                </p>
                <p>
                  家庭共享同样不代表多人可以同时使用一份游戏副本进行 Dear Passengers 联机。它是 Steam 账户与游戏库层面的
                  功能，不是 Dear Passengers 的房间人数或本地合作证明。购买前仍应以 Steam 当前规则和游戏页面为准。
                </p>
              </section>

              <section id="maximum">
                <span className="kicker">最常见问题</span>
                <h2>为什么 Dear Passengers 最大玩家人数仍不能确定？</h2>
                <p>
                  FLEXUS 尚未在 Steam 简介、功能栏或公开公告中写出 Dear Passengers 最大合作人数。第三方页面可能根据预告片
                  猜测四人，也可能把同类合作游戏的人数套用到 Dear Passengers；这些推断都缺少直接产品字段。
                </p>
                <p>
                  预告片中的角色数量只能回答“Dear Passengers 是否表现多人合作”，不能回答“一个正式房间能容纳多少人”。
                  宣传片可以跨场景剪辑，多名角色也可能来自开发环境。只有官方房间界面、Demo 实测、Steam 功能更新或
                  FLEXUS 明确文字，才能把 Dear Passengers 玩家人数从未知改成确定数字。
                </p>
                <h3>什么时候可以更新具体人数？</h3>
                <p>
                  最值得观察的是 Dear Passengers 公开 Demo、Steam Playtest、联机 FAQ、商店页面更新和开发者公告。
                  如果 Gamescom 试玩只开放固定机位，也不能自动证明最终网络房间上限。本站会把展会试玩人数和正式版本人数分开记录。
                </p>
                <p>
                  英文资料需要更完整的来源说明时，可以查看
                  <Link href="/dear-passengers-player-count" hrefLang="en"> Dear Passengers player count guide</Link>。
                  中文页面与英文页面互相链接，但分别服务不同搜索需求，不会把机器翻译当作新增信息。
                </p>
              </section>

              <section id="solo">
                <span className="kicker">一个人值班</span>
                <h2>Dear Passengers 可以单人玩吗？</h2>
                <p>
                  可以。Steam 已正式列出 Dear Passengers 单人游戏。这个结论比最大人数更明确，但 Dear Passengers 的单人工作方式
                  仍然没有解释。游戏设定同时包含驾驶、客舱服务、乘客管理、货物保护、天气和突发事故，一个人如何覆盖这些岗位
                  是目前最大的单人玩法问题。
                </p>
                <p>
                  FLEXUS 尚未确认 Dear Passengers 是否提供 AI 机组、自动驾驶、岗位快速切换、暂停后下达指令、任务简化、
                  较少乘客、较低风险货物或单独的难度平衡。因此，不能因为 Steam 标记单人，就进一步声称单人体验与在线合作完全相同。
                </p>
                <p>
                  如果玩家主要打算单人游玩，最稳妥的做法是等待 Dear Passengers Demo 或连续实机演示。届时可以检查驾驶时客舱如何运作、
                  离开驾驶舱后飞机是否保持航线，以及系统是否会自动处理基础服务。现阶段只能确认“可以单人进入游戏”，不能确认
                  “单人如何高效完成所有工作”。
                </p>
              </section>

              <section id="local">
                <span className="kicker">同屏与不同平台</span>
                <h2>本地合作、分屏和跨平台状态</h2>
                <h3>Dear Passengers 支持本地联机吗？</h3>
                <p>
                  目前没有证据确认 Dear Passengers 本地合作。Steam 没有列出 Local Co-op、本地多人、共享/分屏合作或
                  Remote Play Together。Dear Passengers 支持在线合作，不等于两名玩家可以在同一台电脑、同一块屏幕或两只手柄上游玩。
                </p>
                <h3>Dear Passengers 支持跨平台吗？</h3>
                <p>
                  跨平台也没有公布。Dear Passengers 当前唯一确认的平台是 Windows PC 的 Steam 版本。PS5、Xbox Series、
                  Nintendo Switch、Mac 和 Linux 都没有正式版本信息，因此目前不存在第二个已确认平台来建立跨平台联机。
                </p>
                <p>
                  即使未来 Dear Passengers 宣布主机版，也不能自动假设跨平台。跨平台账号、邀请系统、进度同步和语音兼容都需要单独说明。
                  发售与平台变化可查看
                  <Link href="/zh-cn/dear-passengers-release-date"> Dear Passengers 中文发售时间指南</Link>。
                </p>
              </section>

              <section id="voice">
                <span className="kicker">沟通与大厅</span>
                <h2>Dear Passengers 有距离语音或服务器浏览器吗？</h2>
                <p>
                  Dear Passengers 的合作结构显然需要沟通，但“需要沟通”并不等于“已经确认距离语音”。Steam 当前显示游戏内聊天和
                  在线互动，这类商店提示没有说明语音距离、墙体遮挡、无线电频道、按键说话、静音、举报或审核功能。
                </p>
                <p>
                  一些媒体和玩家会把 Dear Passengers 与带距离语音的热门合作游戏放在一起，因此搜索结果里经常出现“proximity chat”。
                  在 FLEXUS 发布功能列表前，Dear Passengers 距离语音应保持“未确认”。玩家可以暂时计划使用 Steam 语音、Discord
                  或其他外部工具，但这不是对最终体验的要求。
                </p>
                <p>
                  Dear Passengers 服务器浏览器、专用服务器、地区选择、延迟显示、私人大厅、公开匹配和房主迁移同样未公布。
                  这些信息更可能在 Demo、联机测试或接近发售时出现，过早为每一项建立单独页面只会产生内容很浅的重复答案。
                </p>
              </section>

              <section id="roles">
                <span className="kicker">机组如何分工</span>
                <h2>Dear Passengers 联机时有哪些岗位？</h2>
                <p>
                  Dear Passengers 已确认两类广义工作区域：驾驶舱与客舱。一名玩家负责驾驶，其他机组成员服务乘客、保护货物并处理事故。
                  FLEXUS 还没有公布固定职业选择，所以“副驾驶”“货物专员”“乘务长”和“应急人员”应当理解为玩家自行安排的任务，
                  不是已经确认的职业名称。
                </p>
                <p>
                  如果 Dear Passengers 最终支持较少人数，一名客舱玩家可能需要同时处理服务与货物。如果房间人数更多，团队可以把
                  常规服务、货物监控和紧急响应分开。由于最大玩家人数未知，现在不适合发布固定的“最佳队伍配置”。
                </p>
                <p>
                  现阶段可以采用简单原则：先确定驾驶员，再指定一名客舱优先响应者，最后让其余玩家根据乘客、货物与天气变化灵活补位。
                  英文
                  <Link href="/dear-passengers-roles" hrefLang="en"> Dear Passengers 角色对比表</Link>
                  已把官方职责和建议分工分开标注。
                </p>
              </section>

              <section id="status">
                <span className="kicker">完整核对表</span>
                <h2>Dear Passengers 玩家人数与联机状态表</h2>
                <div className="platform-table" role="table" aria-label="Dear Passengers 玩家人数与联机功能状态">
                  <div className="platform-head" role="row"><span role="columnheader">功能</span><span role="columnheader">状态</span><span role="columnheader">依据</span></div>
                  <div role="row"><strong role="cell">单人游戏</strong><span className="status-confirmed" role="cell">已确认</span><span role="cell">Steam 功能栏</span></div>
                  <div role="row"><strong role="cell">在线合作</strong><span className="status-confirmed" role="cell">已确认</span><span role="cell">Steam 功能栏</span></div>
                  <div role="row"><strong role="cell">最大玩家人数</strong><span className="status-open" role="cell">未公布</span><span role="cell">等待 FLEXUS 说明</span></div>
                  <div role="row"><strong role="cell">本地合作与分屏</strong><span className="status-open" role="cell">未公布</span><span role="cell">Steam 未列出</span></div>
                  <div role="row"><strong role="cell">跨平台联机</strong><span className="status-open" role="cell">未公布</span><span role="cell">只有 PC 平台确认</span></div>
                  <div role="row"><strong role="cell">距离语音</strong><span className="status-open" role="cell">未确认</span><span role="cell">通用聊天提示不等于距离语音</span></div>
                  <div role="row"><strong role="cell">公开匹配与服务器浏览器</strong><span className="status-open" role="cell">未公布</span><span role="cell">等待联机功能说明</span></div>
                  <div role="row"><strong role="cell">简体中文界面</strong><span className="status-confirmed" role="cell">已确认</span><span role="cell">Steam 语言表</span></div>
                </div>
                <p>
                  表格核验日期为 2026 年 7 月 20 日。Dear Passengers 仍在发售前阶段，功能可能继续变化；任何更新都应同时修改正文、
                  结构化数据、站点地图时间和相关页面内链。
                </p>
              </section>

              <section id="player-faq">
                <span className="kicker">常见问题</span>
                <h2>Dear Passengers 玩家人数 FAQ</h2>
                <p>
                  以下答案区分 Steam 已确认功能与玩家仍在等待的 Dear Passengers 联机细节。具体房间上限公布后，本页会优先更新。
                </p>
                <FAQ items={faqs} />
              </section>

              <section className="related-guide related-links-panel">
                <span className="kicker">继续查看中文资料</span>
                <h2>完成 Dear Passengers 发售前准备</h2>
                <p>
                  返回中文首页了解完整玩法，查看发售时间和平台状态，或核对电脑最低配置与简体中文支持。
                </p>
                <div className="related-actions">
                  <Link className="button button-ghost" href="/zh-cn/dear-passengers-game">这是什么游戏？ →</Link>
                  <Link className="button" href="/zh-cn/">Dear Passengers 中文首页 →</Link>
                  <Link className="button button-ghost" href="/zh-cn/dear-passengers-release-date">中文发售时间 →</Link>
                  <Link className="button button-ghost" href="/zh-cn/dear-passengers-system-requirements">中文配置要求 →</Link>
                  <Link className="button button-ghost" href="/dear-passengers-player-count" hrefLang="en">English version →</Link>
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
