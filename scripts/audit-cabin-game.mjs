import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
const root = process.cwd();
const gameRoute = '/play/cabin-crisis/';
const [gameHtml, demoHtml, sitemapXml, ui] = await Promise.all([
  readFile(join(root,'out/play/cabin-crisis/index.html'),'utf8'),
  readFile(join(root,'out/dear-passengers-demo/index.html'),'utf8'),
  readFile(join(root,'out/sitemap.xml'),'utf8'),
  readFile(join(root,'components/PassengerFlightGame.tsx'),'utf8'),
]);
const checks = {
  exported: gameHtml.length > 1000,
  singleH1: (gameHtml.match(/<h1\b/gi)??[]).length===1,
  noindexFollow: /<meta[^>]+name="robots"[^>]+content="[^"]*noindex[^"]*follow/.test(gameHtml),
  canonical: gameHtml.includes('href="https://dearpassengers.net/play/cabin-crisis/"'),
  clearIdentity: /unofficial fan/i.test(gameHtml) && /not the official Dear Passengers demo/i.test(gameHtml),
  linkedFromDemo: demoHtml.includes('href="/play/cabin-crisis/"'),
  officialSteamLink: gameHtml.includes('https://store.steampowered.com/app/4534960/Dear_Passengers'),
  oldQuizReplaced: !gameHtml.includes('Start fan drill') && !gameHtml.includes('FIVE-ROUND FAN DRILL'),
  excludedFromSitemap: !sitemapXml.includes(gameRoute),
  adsExcluded: !gameHtml.includes('pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'),
  accessibilityAnnouncements: ui.includes('aria-live'),
};
const failed=Object.entries(checks).filter(([,pass])=>!pass).map(([key])=>key);
console.log(JSON.stringify({route:gameRoute,checks,pass:!failed.length,failed},null,2));
if(failed.length)process.exitCode=1;
