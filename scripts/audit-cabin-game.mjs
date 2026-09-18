import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const gameRoute = '/play/cabin-crisis/';
const gamePath = join(root, 'out', 'play', 'cabin-crisis', 'index.html');
const demoPath = join(root, 'out', 'dear-passengers-demo', 'index.html');
const sitemapPath = join(root, 'out', 'sitemap.xml');
const componentPath = join(root, 'components', 'CabinCrisisMiniGame.tsx');

const [gameHtml, demoHtml, sitemapXml, componentSource] = await Promise.all([
  readFile(gamePath, 'utf8'),
  readFile(demoPath, 'utf8'),
  readFile(sitemapPath, 'utf8'),
  readFile(componentPath, 'utf8'),
]);

const gameMain = gameHtml.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? '';
const h1Count = (gameMain.match(/<h1\b/gi) ?? []).length;
const languages = ['en', 'zh-CN', 'de', 'ar', 'tr', 'pt-BR', 'es', 'my', 'ru', 'cs'];

const checks = {
  exported: gameHtml.length > 1_000,
  singleH1: h1Count === 1,
  noindexFollow: /<meta[^>]+name="robots"[^>]+content="[^"]*noindex[^"]*follow[^"]*"/i.test(gameHtml),
  canonical: /<link[^>]+rel="canonical"[^>]+href="https:\/\/dearpassengers\.net\/play\/cabin-crisis\/"/i.test(gameHtml),
  clearUnofficialLabel:
    /unofficial fan-made/i.test(gameHtml)
    && /not (?:the )?official Dear Passengers demo/i.test(gameHtml)
    && /not affiliated/i.test(gameHtml),
  internalLinks:
    /href="\/dear-passengers-demo\/"/i.test(gameHtml)
    && /href="\/dear-passengers-gameplay\/"/i.test(gameHtml)
    && /href="\/dear-passengers-news\/"/i.test(gameHtml),
  officialSteamLink: /href="https:\/\/store\.steampowered\.com\/app\/4534960\/Dear_Passengers\/?"/i.test(gameHtml),
  excludedFromSitemap: !sitemapXml.includes(gameRoute),
  linkedFromDemo: /href="\/play\/cabin-crisis\/"/i.test(demoHtml),
  demoStillIndexable: /<meta[^>]+name="robots"[^>]+content="[^"]*index[^"]*follow[^"]*"/i.test(demoHtml),
  gamescomCopyCurrent: !/Gamescom is underway/i.test(demoHtml) && /September 6, 2026/i.test(demoHtml),
  adsExcluded: !/pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js/i.test(gameHtml),
  ariaLive: /aria-live=/i.test(componentSource),
  languageCoverage: languages.every((language) => componentSource.includes(language)),
  noOfficialAssets: !/\/(?:images|audio)\//i.test(componentSource),
};

const failed = Object.entries(checks).filter(([, passed]) => !passed).map(([name]) => name);
const report = {
  route: gameRoute,
  h1Count,
  languages,
  checks,
  pass: failed.length === 0,
  failed,
};

console.log(JSON.stringify(report, null, 2));
if (failed.length > 0) process.exitCode = 1;
