import Image from 'next/image';
import Link from 'next/link';
import PrivacySettingsButton from '@/components/PrivacySettingsButton';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';

export default function Footer({ locale = 'en' }: { locale?: 'en' | 'zh-CN' | 'de' | 'ar' | 'tr' | 'pt-BR' }) {
  const isChinese = locale === 'zh-CN';
  const isGerman = locale === 'de';
  const isArabic = locale === 'ar';
  const isTurkish = locale === 'tr';
  const isPortuguese = locale === 'pt-BR';

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

  if (isGerman) {
    return (
      <footer className="site-footer" lang="de">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/de/">
              <Image src="/images/logo.png" alt="Dear Passengers deutscher Spiele-Guide" width={36} height={36} />
              <span><b>DEAR PASSENGERS</b><small>UNABHÄNGIGER SPIELE-GUIDE</small></span>
            </Link>
            <p>
              DearPassengers.net ist ein unabhängiger, inoffizieller Guide. Die Website gehört weder zu FLEXUS noch
              zu Valve oder Steam. Zeitkritische Angaben werden mit Primärquellen abgeglichen.
            </p>
          </div>
          <div>
            <h2>Spiele-Guide</h2>
            <Link href="/de/dear-passengers-gameplay/">Dear Passengers Gameplay</Link>
            <Link href="/de/dear-passengers-trailer/">Traileranalyse</Link>
            <Link href="/de/dear-passengers-bestaetigte-features/">Bestätigte Features</Link>
            <Link href="/de/dear-passengers-rollen/">Pilot und Kabinencrew</Link>
            <Link href="/de/dear-passengers-spielerzahl/">Spielerzahl und Koop</Link>
            <Link href="/de/spiele-wie-dear-passengers/">Ähnliche Koop-Spiele</Link>
          </div>
          <div>
            <h2>Release-Desk</h2>
            <Link href="/de/dear-passengers-release/">Release 2026</Link>
            <Link href="/de/dear-passengers-demo/">Demo und Gamescom</Link>
            <Link href="/de/dear-passengers-download/">Download sicher prüfen</Link>
            <Link href="/de/dear-passengers-news/">Aktuelle Meldungen</Link>
            <Link href="/de/dear-passengers-entwickler-flexus/">Entwickler FLEXUS</Link>
            <Link href="/de/dear-passengers-systemanforderungen/">PC-Systemanforderungen</Link>
            <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Offizielle Steam-Seite ↗</a>
          </div>
          <div>
            <h2>Website</h2>
            <Link href="/" hrefLang="en">English site</Link>
            <Link href="/de/ueber-uns/">Über DearPassengers.net</Link>
            <Link href="/de/redaktionsrichtlinien/">Redaktionsrichtlinien</Link>
            <Link href="/de/kontakt/">Kontakt und Korrekturen</Link>
            <Link href="/de/datenschutz/">Datenschutzerklärung</Link>
            <PrivacySettingsButton locale="de" className="footer-privacy-button" />
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 DearPassengers.net</span>
          <span>Stand: 24.07.2026 · Zeitkritische Angaben bitte zusätzlich auf Steam prüfen.</span>
        </div>
      </footer>
    );
  }

  if (isArabic) {
    return (
      <footer className="site-footer" lang="ar" dir="rtl">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/ar/">
              <Image src="/images/logo.png" alt="دليل Dear Passengers بالعربية" width={36} height={36} />
              <span><b>DEAR PASSENGERS</b><small>دليل ألعاب مستقل</small></span>
            </Link>
            <p>DearPassengers.net دليل مستقل وغير رسمي للاعبين المهتمين بلعبة Dear Passengers. لا يتبع الموقع FLEXUS أو Valve أو Steam، وتُراجع المعلومات المتغيرة من مصادرها الأولى.</p>
          </div>
          <div>
            <h2>دليل اللعبة</h2>
            <Link href="/ar/dear-passengers-gameplay/">طريقة لعب Dear Passengers</Link>
            <Link href="/ar/dear-passengers-trailer/">تحليل العرض الرسمي</Link>
            <Link href="/ar/dear-passengers-confirmed-features/">الميزات المؤكدة</Link>
            <Link href="/ar/dear-passengers-roles/">الطيار وطاقم المقصورة</Link>
            <Link href="/ar/dear-passengers-player-count/">عدد اللاعبين والتعاون</Link>
            <Link href="/ar/games-like-dear-passengers/">ألعاب مشابهة</Link>
          </div>
          <div>
            <h2>الإصدار والتحميل</h2>
            <Link href="/ar/dear-passengers-release/">موعد الإصدار 2026</Link>
            <Link href="/ar/dear-passengers-demo/">النسخة التجريبية</Link>
            <Link href="/ar/dear-passengers-download/">التحميل الآمن وتحذير APK</Link>
            <Link href="/ar/dear-passengers-news/">آخر الأخبار</Link>
            <Link href="/ar/dear-passengers-developer/">المطور FLEXUS</Link>
            <Link href="/ar/dear-passengers-system-requirements/">متطلبات التشغيل</Link>
            <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">صفحة Steam الرسمية ↗</a>
          </div>
          <div>
            <h2>عن الموقع</h2>
            <Link href="/" hrefLang="en">English site</Link>
            <Link href="/ar/about/">عن DearPassengers.net</Link>
            <Link href="/ar/editorial-policy/">السياسة التحريرية</Link>
            <Link href="/ar/contact/">التواصل والتصحيحات</Link>
            <Link href="/ar/privacy-policy/">سياسة الخصوصية</Link>
            <PrivacySettingsButton locale="ar" className="footer-privacy-button" />
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 DearPassengers.net</span>
          <span>آخر تحقق: 25 يوليو 2026 · راجع Steam للمعلومات الزمنية.</span>
        </div>
      </footer>
    );
  }

  if (isTurkish) {
    return (
      <footer className="site-footer" lang="tr">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/tr/">
              <Image src="/images/logo.png" alt="Dear Passengers Türkçe oyun rehberi" width={36} height={36} />
              <span><b>DEAR PASSENGERS</b><small>BAĞIMSIZ OYUN REHBERİ</small></span>
            </Link>
            <p>DearPassengers.net, Dear Passengers oyunu için bağımsız ve resmî olmayan bir rehberdir. FLEXUS, Valve veya Steam ile bağlantılı değildir; değişken bilgiler birincil kaynaklardan kontrol edilir.</p>
          </div>
          <div>
            <h2>Oyun rehberi</h2>
            <Link href="/tr/dear-passengers-oynanis/">Dear Passengers oynanış</Link>
            <Link href="/tr/dear-passengers-fragman/">Resmî fragman analizi</Link>
            <Link href="/tr/dear-passengers-ozellikleri/">Onaylanan özellikler</Link>
            <Link href="/tr/dear-passengers-rolleri/">Pilot ve kabin rolleri</Link>
            <Link href="/tr/dear-passengers-kac-kisilik/">Oyuncu sayısı ve co-op</Link>
            <Link href="/tr/dear-passengers-benzeri-oyunlar/">Benzer co-op oyunlar</Link>
          </div>
          <div>
            <h2>Çıkış masası</h2>
            <Link href="/tr/dear-passengers-cikis-tarihi/">Çıkış tarihi 2026</Link>
            <Link href="/tr/dear-passengers-demo/">Demo ve Playtest durumu</Link>
            <Link href="/tr/dear-passengers-indir/">Güvenli indirme</Link>
            <Link href="/tr/dear-passengers-haberleri/">Son haberler</Link>
            <Link href="/tr/dear-passengers-gelistiricisi/">Geliştirici FLEXUS</Link>
            <Link href="/tr/dear-passengers-sistem-gereksinimleri/">Sistem gereksinimleri</Link>
            <a href={`${STEAM_URL}?l=turkish`} target="_blank" rel="noopener noreferrer">Resmî Steam sayfası ↗</a>
          </div>
          <div>
            <h2>Site bilgileri</h2>
            <Link href="/" hrefLang="en">English site</Link>
            <Link href="/tr/hakkimizda/">Hakkımızda</Link>
            <Link href="/tr/editorial-policy/">Editoryal politika</Link>
            <Link href="/tr/iletisim/">İletişim ve düzeltmeler</Link>
            <Link href="/tr/gizlilik/">Gizlilik politikası</Link>
            <PrivacySettingsButton locale="tr" className="footer-privacy-button" />
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 DearPassengers.net</span>
          <span>Son kontrol: 27.07.2026 · Zamana duyarlı bilgiler için Steam’i kontrol edin.</span>
        </div>
      </footer>
    );
  }

  if (isPortuguese) {
    return (
      <footer className="site-footer" lang="pt-BR">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/pt-br/">
              <Image src="/images/logo.png" alt="Guia brasileiro do jogo Dear Passengers" width={36} height={36} />
              <span><b>DEAR PASSENGERS</b><small>GUIA BRASILEIRO INDEPENDENTE</small></span>
            </Link>
            <p>DearPassengers.net é um guia independente e não oficial sobre o jogo Dear Passengers. O site não tem vínculo com FLEXUS, Valve ou Steam; informações variáveis são verificadas em fontes primárias.</p>
          </div>
          <div>
            <h2>Guia do jogo</h2>
            <Link href="/pt-br/dear-passengers-como-jogar/">Como jogar Dear Passengers</Link>
            <Link href="/pt-br/dear-passengers-trailer/">Análise dos trailers oficiais</Link>
            <Link href="/pt-br/dear-passengers-recursos-confirmados/">Recursos confirmados</Link>
            <Link href="/pt-br/dear-passengers-funcoes/">Funções da tripulação</Link>
            <Link href="/pt-br/dear-passengers-quantos-jogadores/">Número de jogadores e coop</Link>
            <Link href="/pt-br/jogos-parecidos-com-dear-passengers/">Jogos parecidos</Link>
          </div>
          <div>
            <h2>Lançamento</h2>
            <Link href="/pt-br/dear-passengers-data-de-lancamento/">Data de lançamento em 2026</Link>
            <Link href="/pt-br/dear-passengers-demo/">Situação da demo</Link>
            <Link href="/pt-br/dear-passengers-baixar/">Como baixar com segurança</Link>
            <Link href="/pt-br/dear-passengers-noticias/">Últimas notícias</Link>
            <Link href="/pt-br/dear-passengers-desenvolvedora-flexus/">Desenvolvedora FLEXUS</Link>
            <Link href="/pt-br/dear-passengers-requisitos/">Requisitos de sistema</Link>
            <a href={`${STEAM_URL}?l=brazilian`} target="_blank" rel="noopener noreferrer">Página oficial na Steam ↗</a>
          </div>
          <div>
            <h2>Sobre o site</h2>
            <Link href="/" hrefLang="en">English site</Link>
            <Link href="/pt-br/sobre/">Sobre o DearPassengers.net</Link>
            <Link href="/pt-br/politica-editorial/">Política editorial</Link>
            <Link href="/pt-br/contato/">Contato e correções</Link>
            <Link href="/pt-br/privacidade/">Política de privacidade</Link>
            <PrivacySettingsButton locale="pt-BR" className="footer-privacy-button" />
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 DearPassengers.net</span>
          <span>Última verificação: 28/07/2026 · Confira informações sensíveis ao tempo na Steam.</span>
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
