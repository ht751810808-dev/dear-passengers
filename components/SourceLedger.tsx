import Link from 'next/link';

const sources = [
  {
    label: 'PRIMARY GAME LISTING',
    title: 'Dear Passengers on Steam',
    description: 'Release, play modes, languages, and PC requirements.',
    href: 'https://store.steampowered.com/app/4534960/Dear_Passengers/',
  },
  {
    label: 'OFFICIAL MEDIA',
    title: 'FLEXUS announcement trailer',
    description: 'Official footage of roles, hazards, cargo, and repairs.',
    href: 'https://www.youtube.com/watch?v=XRvd_HZesys',
  },
  {
    label: 'DEVELOPER',
    title: 'FLEXUS studio website',
    description: 'First-party background on the game studio.',
    href: 'https://flexus.games/',
  },
  {
    label: 'PLAYER QUESTIONS',
    title: 'Steam Community discussions',
    description: 'Identifies questions but never confirms features.',
    href: 'https://steamcommunity.com/app/4534960/discussions/',
  },
];

export default function SourceLedger({ locale = 'en' }: { locale?: 'en' | 'zh-CN' }) {
  const isChinese = locale === 'zh-CN';
  if (isChinese) {
    return (
      <section className="section source-section" id="sources" lang="zh-CN">
        <div className="container">
          <div className="section-heading source-heading">
            <div><span className="kicker">资料清单</span><h2>Dear Passengers 中文资料如何核验</h2></div>
            <p>游戏事实以第一方页面为准；玩家讨论只用来识别问题，不用来确认功能。</p>
          </div>
          <div className="source-grid">
            {sources.map((source) => (
              <a href={source.href} target="_blank" rel="noopener noreferrer" key={source.href}>
                <span>{source.label}</span><strong>{source.title}</strong><p>{source.description}</p><b>打开资料 ↗</b>
              </a>
            ))}
          </div>
          <div className="verification-log" aria-label="Dear Passengers 中文资料更新记录">
            <div><time dateTime="2026-07-14">2026 · 07 · 14</time><p><strong>游戏公开。</strong> Steam 商店页面与官方预告片上线。</p></div>
            <div><time dateTime="2026-07-16">2026 · 07 · 16</time><p><strong>语言更新。</strong> Steam 列出英语、阿拉伯语、简体中文、土耳其语、乌克兰语和日语界面。</p></div>
            <div><time dateTime="2026-07-18">2026 · 07 · 18</time><p><strong>内容核查。</strong> 新增预告片、功能核查与中文发售状态。</p></div>
            <div><time dateTime="2026-07-19">2026 · 07 · 19</time><p><strong>开发商与里程碑更新。</strong> 补充 FLEXUS 资料、100 万官方里程碑与开发者采访。</p></div>
            <div><span>下次核验</span><p><strong>资料发生变化时。</strong> 包括日期、试玩、玩家上限、输入方式或平台。</p></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section source-section" id="sources">
      <div className="container">
        <div className="section-heading source-heading">
          <div>
            <span className="kicker">SOURCE MANIFEST</span>
            <h2>How This Dear Passengers Guide Is Verified</h2>
          </div>
          <p>
            Official sources establish facts. Community posts identify questions but never confirm features.
          </p>
        </div>
        <div className="source-grid">
          {sources.map((source) => (
            <a href={source.href} target="_blank" rel="noopener noreferrer" key={source.href}>
              <span>{source.label}</span>
              <strong>{source.title}</strong>
              <p>{source.description}</p>
              <b>Open source ↗</b>
            </a>
          ))}
        </div>
        <div className="verification-log" aria-label="Dear Passengers verification update log">
          <div><time dateTime="2026-07-14">JUL 14 · 2026</time><p><strong>Public reveal.</strong> Steam listing and official trailer published.</p></div>
          <div><time dateTime="2026-07-15">JUL 15 · 2026</time><p><strong>First verification.</strong> Core facts checked against Steam.</p></div>
          <div><time dateTime="2026-07-16">JUL 16 · 2026</time><p><strong>Language update.</strong> Six interface languages now appear on Steam.</p></div>
          <div><time dateTime="2026-07-18">JUL 18 · 2026</time><p><strong>Evidence expansion.</strong> Trailer, fact-check, and Chinese release pages added.</p></div>
          <div><time dateTime="2026-07-19">JUL 19 · 2026</time><p><strong>Developer and milestone update.</strong> FLEXUS background, the official one-million milestone, and founder interview added.</p></div>
          <div><span>NEXT CHECK</span><p><strong>Material change.</strong> Date, demo, player limit, input, or platform.</p></div>
        </div>
        <p className="source-policy-link">
          Read our <Link href="/editorial-policy">editorial and corrections policy</Link> or{' '}
          <Link href="/contact">report a factual issue</Link>.
        </p>
      </div>
    </section>
  );
}
