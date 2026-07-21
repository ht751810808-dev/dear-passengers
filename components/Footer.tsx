import Image from 'next/image';
import Link from 'next/link';
import PrivacySettingsButton from '@/components/PrivacySettingsButton';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';

export default function Footer({ locale = 'en' }: { locale?: 'en' | 'zh-CN' }) {
  const isChinese = locale === 'zh-CN';

  if (isChinese) {
    return (
      <footer className="site-footer" lang="zh-CN">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/zh-cn">
              <Image src="/images/logo.png" alt="Dear Passengers 中文指南" width={36} height={36} />
              <span><b>DEAR PASSENGERS</b><small>独立游戏资料站</small></span>
            </Link>
            <p>DearPassengers.net 是面向 Dear Passengers 玩家维护的独立非官方资料站，与 FLEXUS、Valve 或 Steam 没有隶属关系。</p>
          </div>
          <div>
            <h2>中文指南</h2>
            <Link href="/zh-cn/#gameplay">Dear Passengers 游戏玩法</Link>
            <Link href="/zh-cn/dear-passengers-player-count">玩家人数与联机</Link>
            <Link href="/zh-cn/dear-passengers-system-requirements">电脑配置要求</Link>
            <Link href="/zh-cn/#faq">常见问题</Link>
          </div>
          <div>
            <h2>发售资料</h2>
            <Link href="/zh-cn/dear-passengers-release-date">发售时间、平台与试玩</Link>
            <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam 官方页面 ↗</a>
            <Link href="/dear-passengers-release-date" hrefLang="en">英文发售指南</Link>
            <Link href="/dear-passengers-player-count" hrefLang="en">英文联机指南</Link>
          </div>
          <div>
            <h2>网站信息</h2>
            <Link href="/" hrefLang="en">English site</Link>
            <Link href="/about">关于本站</Link>
            <Link href="/editorial-policy">编辑与更正政策</Link>
            <Link href="/contact">联系我们</Link>
            <Link href="/privacy-policy">隐私政策</Link>
            <PrivacySettingsButton locale="zh-CN" className="footer-privacy-button" />
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 DearPassengers.net</span>
          <span>资料核验于 2026 年 7 月 20 日 · 时效信息请以 Steam 官方页面为准。</span>
        </div>
      </footer>
    );
  }

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/">
            <Image src="/images/logo.png" alt="Dear Passengers" width={36} height={36} />
            <span><b>DEAR PASSENGERS</b><small>INDEPENDENT FLIGHT GUIDE</small></span>
          </Link>
          <p>
            DearPassengers.net is an independent, unofficial guide created for players following the
            Dear Passengers game. We are not affiliated with FLEXUS, Valve, or Steam.
          </p>
        </div>

        <div>
            <h2>Flight guide</h2>
          <Link href="/dear-passengers-gameplay">Dear Passengers gameplay</Link>
          <Link href="/dear-passengers-trailer">Official trailer breakdown</Link>
          <Link href="/dear-passengers-confirmed-features">Confirmed features</Link>
          <Link href="/dear-passengers-roles">Pilot and cabin crew roles</Link>
          <Link href="/dear-passengers-player-count">Player count and multiplayer</Link>
          <Link href="/dear-passengers-system-requirements">System requirements</Link>
          <Link href="/games-like-dear-passengers">Games like Dear Passengers</Link>
          <Link href="/#faq">Game FAQ</Link>
        </div>

        <div>
          <h2>Release desk</h2>
          <Link href="/dear-passengers-release-date">Dear Passengers Release Date</Link>
          <Link href="/dear-passengers-demo">Dear Passengers Demo</Link>
          <Link href="/dear-passengers-download">Dear Passengers Download</Link>
          <Link href="/dear-passengers-news">Dear Passengers News</Link>
          <Link href="/dear-passengers-developer-flexus">Dear Passengers Developer</Link>
          <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Official Steam page ↗</a>
          <Link href="/dear-passengers-release-date#platforms">Platform status</Link>
        </div>

        <div>
          <h2>Editorial desk</h2>
          <Link href="/about">About DearPassengers.net</Link>
          <Link href="/editorial-policy">Editorial and corrections policy</Link>
          <Link href="/contact">Contact and corrections</Link>
          <PrivacySettingsButton className="footer-privacy-button" />
          <Link href="/#sources">Sources and verification</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 DearPassengers.net</span>
        <span>Information checked July 21, 2026 · Verify time-sensitive details on Steam.</span>
      </div>
    </footer>
  );
}
