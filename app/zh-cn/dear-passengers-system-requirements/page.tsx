import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EditorialNote from '@/components/EditorialNote';
import FAQ, { type FaqItem } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const PAGE_URL = 'https://dearpassengers.net/zh-cn/dear-passengers-system-requirements/';

export const metadata: Metadata = {
  title: { absolute: 'Dear Passengers 配置要求：最低电脑配置与中文支持' },
  description: '查看 Dear Passengers 最低配置，包括 CPU、显卡、内存、存储空间、笔记本、Steam Deck、Mac、Linux 和简体中文支持状态。',
  alternates: {
    canonical: '/zh-cn/dear-passengers-system-requirements/',
    languages: {
      en: '/dear-passengers-system-requirements/',
      'zh-CN': '/zh-cn/dear-passengers-system-requirements/',
      'x-default': '/dear-passengers-system-requirements/',
    },
  },
  openGraph: {
    title: 'Dear Passengers 配置要求与最低电脑配置',
    description: '根据 Steam 官方页面整理的 Dear Passengers PC 配置、笔记本和系统兼容性指南。',
    url: PAGE_URL,
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Dear Passengers 配置要求中文指南' }],
    locale: 'zh_CN',
    alternateLocale: ['en_US'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear Passengers 配置要求',
    description: '最低电脑配置、笔记本、Steam Deck 与中文支持状态。',
    images: ['/images/og-image.png'],
  },
};

const faqs: FaqItem[] = [
  { question: 'Dear Passengers 最低配置是什么？', answer: 'Steam 当前列出的最低配置是 Windows 10 64 位、2.5GHz Intel Core i5 或同等级处理器、8GB 内存、GTX 1060 或 RX 6600 XT、DirectX 12，以及 4GB 可用存储空间。' },
  { question: '我的电脑能运行 Dear Passengers 吗？', answer: '需要逐项比较操作系统、处理器、内存、显卡、DirectX 和存储空间。达到这些最低配置只代表符合官方列出的基础门槛，Steam 没有承诺最低配置对应的分辨率、画质或帧率。' },
  { question: 'Dear Passengers 需要多少内存？', answer: '最低内存是 8GB RAM。官方没有公布推荐内存，因此不能把 16GB 写成 Dear Passengers 的官方推荐配置。' },
  { question: 'Dear Passengers 需要多少存储空间？', answer: 'Steam 目前列出 4GB 可用空间。这个数字可能在发售前变化，而且安装临时文件、更新、存档和着色器缓存可能需要额外空间。' },
  { question: '笔记本可以运行 Dear Passengers 吗？', answer: '游戏本如果实际 CPU、独立显卡、内存、操作系统和 DirectX 支持达到最低配置，就可以与官方门槛进行比较。不过移动显卡与桌面显卡可能有不同功耗和性能，不能只看系列名称。' },
  { question: 'Dear Passengers 支持 Steam Deck 吗？', answer: '目前没有 Steam Deck Verified 或 Playable 评级，FLEXUS 也没有正式公布 Steam Deck 兼容性。Windows 配置不能直接证明掌机支持。' },
  { question: 'Dear Passengers 支持 Mac 或 Linux 吗？', answer: '当前只列出 Windows 版本，没有原生 Mac 或 Linux 版本。兼容层测试不等于官方平台支持。' },
  { question: 'Dear Passengers 支持简体中文吗？', answer: '支持简体中文界面。Steam 还列出英语、阿拉伯语、土耳其语、乌克兰语和日语界面，但没有标记完整音频或字幕，繁体中文也未列出。' },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear Passengers 配置要求：最低电脑配置与中文支持',
  description: '根据 Steam 第一方资料整理的 Dear Passengers 最低配置和平台兼容性中文指南。',
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-07-16',
  dateModified: '2026-07-19',
  inLanguage: 'zh-CN',
  author: { '@type': 'Organization', name: 'DearPassengers.net 编辑团队', url: 'https://dearpassengers.net/about/' },
  publisher: { '@type': 'Organization', name: 'DearPassengers.net', logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' } },
  image: 'https://dearpassengers.net/images/og-image.png',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dear Passengers 中文指南', item: 'https://dearpassengers.net/zh-cn/' },
    { '@type': 'ListItem', position: 2, name: 'Dear Passengers 配置要求', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

export default function ChineseSystemRequirementsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header locale="zh-CN" languageHref="/dear-passengers-system-requirements" />

      <main id="main-content" lang="zh-CN">
        <article>
          <header className="article-hero requirements-hero">
            <Image src="/images/hero-bg.webp" alt="Dear Passengers 配置要求与飞机客舱背景" fill sizes="100vw" priority />
            <div className="hero-shade" />
            <div className="container article-hero-content">
              <nav className="breadcrumbs" aria-label="面包屑导航"><Link href="/zh-cn">Dear Passengers 中文指南</Link><span>/</span><span>配置要求</span></nav>
              <div className="eyebrow"><span>●</span> PC 硬件资料 · 已对照 STEAM 核验</div>
              <h1>Dear Passengers 配置要求：<br /><em>最低电脑配置与中文支持</em></h1>
              <p>
                官方 <strong>Dear Passengers 配置要求</strong>包括 Windows 10、8GB 内存、独立显卡、DirectX 12
                和 4GB 可用空间。本页逐项解释最低电脑配置，并明确区分尚未公布的推荐配置、Steam Deck、Mac 和 Linux 状态。
              </p>
              <div className="hero-actions">
                <a className="button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">查看 Steam 官方配置 ↗</a>
                <Link className="button button-ghost" href="/dear-passengers-system-requirements" hrefLang="en">English version →</Link>
              </div>
              <div className="article-meta"><span>发布于 2026 年 7 月 16 日</span><span>核验于 2026 年 7 月 19 日</span><span>已公布最低配置</span></div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-toc">
              <p>本页内容</p>
              <a href="#official">官方最低配置</a><a href="#can-i-run-it">能否运行</a><a href="#graphics">显卡要求</a>
              <a href="#recommended">推荐配置</a><a href="#laptops">笔记本</a><a href="#deck-os">Deck 与系统</a>
              <a href="#storage">存储与安装</a><a href="#languages">中文支持</a><a href="#requirements-faq">常见问题</a>
              <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam 页面 ↗</a>
            </aside>

            <div className="article-prose prose">
              <EditorialNote locale="zh-CN" checked="2026 年 7 月 19 日" note="以下正式配置与六种界面语言已重新核对 Steam 商店页面；硬件解释与 FLEXUS 尚未公布的内容会被明确分开。" />

              <section id="official">
                <span className="kicker">官方配置表</span>
                <h2>Dear Passengers 官方最低配置</h2>
                <p className="snippet-answer">
                  <strong>Dear Passengers 最低配置</strong>为 Windows 10 64 位、2.5GHz Intel Core i5 或同等级处理器、
                  8GB RAM、NVIDIA GTX 1060 或 AMD RX 6600 XT、DirectX 12，以及 4GB 可用空间。官方推荐配置尚未公布。
                </p>
                <div className="platform-table" role="table" aria-label="Dear Passengers 官方最低配置">
                  <div className="platform-head" role="row"><span role="columnheader">硬件项目</span><span role="columnheader">官方最低要求</span><span role="columnheader">状态</span></div>
                  <div role="row"><strong role="cell">操作系统</strong><span role="cell">Windows 10 64 位</span><span className="status-confirmed" role="cell">已确认</span></div>
                  <div role="row"><strong role="cell">处理器</strong><span role="cell">Intel Core i5 2.5GHz 或同级</span><span className="status-confirmed" role="cell">已确认</span></div>
                  <div role="row"><strong role="cell">内存</strong><span role="cell">8GB RAM</span><span className="status-confirmed" role="cell">已确认</span></div>
                  <div role="row"><strong role="cell">显卡</strong><span role="cell">GTX 1060 或 RX 6600 XT</span><span className="status-confirmed" role="cell">已确认</span></div>
                  <div role="row"><strong role="cell">DirectX</strong><span role="cell">版本 12</span><span className="status-confirmed" role="cell">已确认</span></div>
                  <div role="row"><strong role="cell">存储空间</strong><span role="cell">4GB 可用空间</span><span className="status-confirmed" role="cell">已确认</span></div>
                </div>
                <p>
                  这张表只是硬件门槛，不是性能承诺。Steam 没有注明最低配置对应 1080p、30FPS、60FPS 或哪一种画质。
                  电脑达到全部 <strong>Dear Passengers 配置要求</strong>，只能说明符合当前公开的最低标准，不能保证最终版本在
                  乘客、货物和物理物体很多的场景中达到特定帧率。
                </p>
                <p>
                  Dear Passengers 仍处于 2026 年计划发售阶段，配置可能随着优化继续变化。本站会记录核验日期，正式发售前
                  仍应再次检查 Steam 页面，不能把当前快照当成永久不变的要求。
                </p>

                <h3>操作系统与 DirectX</h3>
                <p>
                  官方写明 Windows 10 64 位和 DirectX 12，没有列出 32 位系统、Windows 7 或 Windows 8。
                  Windows 11 没有被单独写入最低配置，虽然它是更新的系统，也应该等待正式测试结果，而不是直接把兼容性写成保证。
                </p>

                <h3>处理器与内存</h3>
                <p>
                  CPU 部分只写了 2.5GHz Intel Core i5 或同级，没有说明具体代数、型号、核心数量，也没有提供 AMD 示例，
                  因而不能只凭“i5”三个字符判断。内存要求更清楚：Dear Passengers 最低需要 8GB RAM，推荐内存仍未知。
                </p>
              </section>

              <section id="can-i-run-it">
                <span className="kicker">兼容性检查</span>
                <h2>我的电脑能运行 Dear Passengers 吗？</h2>
                <p>
                  判断电脑能否运行时，需要检查操作系统、CPU、内存、显卡、DirectX 和存储空间六个项目。只满足其中一项，
                  不能抵消其他项目的不足。Windows 用户可以通过“系统信息”“任务管理器”“设备管理器”和 DirectX 诊断工具
                  查看实际硬件名称，再逐项对照 <strong>Dear Passengers 最低配置</strong>。
                </p>
                <div className="fact-callout"><span>重要限制</span><strong>没有官方帧率目标</strong><p>Steam 没有承诺最低配置对应 30FPS、60FPS、1080p 或特定画质预设。</p></div>
                <p>
                  电脑型号中的“游戏本”“办公本”或“i5”都不够精确。同一个处理器系列可能跨越多代，不同显卡也可能使用相似名称。
                  网络联机表现还会受到延迟和连接质量影响，这些问题不是硬件配置表能够回答的。
                </p>
              </section>

              <section id="graphics">
                <span className="kicker">显卡说明</span>
                <h2>Dear Passengers 显卡要求</h2>
                <p>
                  Steam 列出的显卡是 NVIDIA GTX 1060 或 AMD RX 6600 XT。两张显卡出现在同一行，不代表它们性能完全相同，
                  也不代表官方公开了画质、分辨率或帧率对照。这里只能确认它们是当前 <strong>Dear Passengers 配置要求</strong>
                  给出的两个显卡选项。
                </p>
                <p>
                  如果电脑使用其他显卡，应参考具体型号的可靠性能资料和 DirectX 12 支持，不能只比较显存容量。
                  Steam 没有列出最低显存、光线追踪、超分辨率或画面预设，所以这些项目现在都不应被编造成配置结论。
                </p>
                <h3>核显能不能运行？</h3>
                <p>
                  官方最低配置没有列出 Intel、AMD 或其他集成显卡。这不等于游戏一定无法启动，但说明核显不是当前公开的最低基准。
                  使用核显的玩家最好等待试玩版、开发商说明或正式版本测试，再判断是否能够流畅运行。
                </p>
              </section>

              <section id="recommended">
                <span className="kicker">尚未公布</span>
                <h2>Dear Passengers 推荐配置</h2>
                <p>
                  FLEXUS 还没有公布 <strong>Dear Passengers 推荐配置</strong>。Steam 的推荐配置栏没有 CPU、显卡、内存、
                  存储设备或系统要求。因此，任何把 RTX 显卡、16GB 内存、某款处理器或 SSD 写成“官方推荐”的页面，
                  都超出了当前第一方资料。
                </p>
                <p>
                  更强的硬件通常会带来余量，但普通装机建议不等于本游戏的正式规格。要提供可信的 60FPS 配置，需要明确游戏版本、
                  分辨率、画质、驱动、测试场景和可重复结果。目前这些条件都不具备，所以本站不会制作看似精确但没有依据的装机单。
                </p>
              </section>

              <section id="laptops">
                <span className="kicker">移动电脑</span>
                <h2>笔记本可以运行 Dear Passengers 吗？</h2>
                <p>
                  游戏本可以使用同一套最低配置进行比较，但移动显卡的功耗、散热和持续性能可能与桌面版本不同。
                  请确认完整 GPU 型号，而不是看到相同系列名称就认为性能一致。还要检查笔记本是否有 8GB 可用内存、
                  Windows 64 位、DirectX 12 与足够空间。
                </p>
                <p>
                  有些笔记本同时包含核显和独立显卡，运行游戏时需要确认系统使用的是独立显卡。购买年份也不能直接证明性能：
                  新办公本可能没有独显，较老游戏电脑反而可能更接近 <strong>Dear Passengers 最低配置</strong>。
                </p>
              </section>

              <section id="deck-os">
                <span className="kicker">平台兼容性</span>
                <h2>Steam Deck、Mac 和 Linux 支持状态</h2>
                <p>
                  Dear Passengers 当前没有 Steam Deck Verified 或 Playable 评级，FLEXUS 也没有公布控制器操作、文字大小、
                  启动器或 Linux 兼容情况。Windows 最低配置不能直接证明 Steam Deck 支持，因此掌机状态应保持“未确认”。
                </p>
                <p>
                  原生 Mac 和 Linux 版本也没有公布。Steam 只显示 Windows 操作系统。未来玩家可能会使用兼容层进行测试，
                  但社区实验与官方平台支持是两件不同的事。控制器支持同样没有出现在当前 Steam 功能栏中。
                </p>
              </section>

              <section id="storage">
                <span className="kicker">安装准备</span>
                <h2>Dear Passengers 存储空间与安装检查</h2>
                <p>
                  <strong>Dear Passengers 配置要求</strong>目前列出 4GB 可用空间。这是商店显示的安装空间，不一定等于下载包大小。
                  压缩、安装临时文件、补丁、存档、日志和着色器缓存都可能额外占用空间，预留余量比只剩刚好 4GB 更稳妥。
                </p>
                <ol className="steps article-steps">
                  <li><span>01</span><p>确认 Windows 为 64 位版本，并完成必要系统更新。</p></li>
                  <li><span>02</span><p>记录完整 CPU、GPU 与内存型号，不依赖宽泛的电脑产品名称。</p></li>
                  <li><span>03</span><p>确认 DirectX 12 支持，并使用硬件厂商的稳定版显卡驱动。</p></li>
                  <li><span>04</span><p>在官方 4GB 数字之外保留安装和后续更新空间。</p></li>
                  <li><span>05</span><p>发售前重新检查 Steam 上的 Dear Passengers 配置要求。</p></li>
                </ol>
                <p>
                  Steam 没有要求 SSD，因此不能把 SSD 写成官方最低条件。SSD 可能改善很多游戏的读取体验，但在没有 Dear Passengers
                  实际测试前，这仍然只是一般硬件建议，而不是本游戏已经公布的规格。
                </p>
              </section>

              <section id="languages">
                <span className="kicker">语言状态</span>
                <h2>Dear Passengers 支持简体中文吗？</h2>
                <p>
                  支持简体中文界面。Steam 当前共列出英语、阿拉伯语、简体中文、土耳其语、乌克兰语和日语界面。
                  商店没有为这些语言标记完整音频或字幕，因此准确说法是“支持简体中文界面”，而不是中文配音或完整本地化。
                </p>
                <p>
                  繁体中文、韩语、法语、德语、西班牙语和其他语言目前没有列出。语言表与硬件配置可能分别变化，
                  可返回<Link href="/zh-cn/">Dear Passengers 中文首页</Link>查看游戏玩法、发售时间和联机信息。
                </p>
              </section>

              <section id="requirements-faq">
                <span className="kicker">硬件问答</span>
                <h2>Dear Passengers 配置要求常见问题</h2>
                <p>以下回答根据当前 Steam 页面整理，不会编造推荐配置、帧率测试或尚未出现的 Steam Deck 评级。</p>
                <FAQ items={faqs} />
              </section>

              <section className="related-guide related-links-panel">
                <span className="kicker">继续阅读</span>
                <h2>查看更多 Dear Passengers 资料</h2>
                <p>
                  返回<Link href="/zh-cn/">Dear Passengers 中文指南</Link>了解玩法、发售与中文支持，或查看
                  <Link href="/dear-passengers-release-date" hrefLang="en">英文发售时间指南</Link>和
                  <Link href="/dear-passengers-player-count" hrefLang="en">英文玩家人数指南</Link>。
                </p>
                <div className="related-actions"><Link className="button" href="/zh-cn/">返回中文首页 →</Link><Link className="button button-ghost" href="/dear-passengers-system-requirements" hrefLang="en">English version →</Link></div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer locale="zh-CN" />
    </>
  );
}
