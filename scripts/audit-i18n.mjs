import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const sets = [
  ['/', '/de/', '/zh-cn/', '/ar/', '/tr/'],
  ['/dear-passengers-gameplay/', '/de/dear-passengers-gameplay/', '/ar/dear-passengers-gameplay/', '/tr/dear-passengers-oynanis/'],
  ['/dear-passengers-trailer/', '/de/dear-passengers-trailer/', '/ar/dear-passengers-trailer/', '/tr/dear-passengers-fragman/'],
  ['/dear-passengers-confirmed-features/', '/de/dear-passengers-bestaetigte-features/', '/ar/dear-passengers-confirmed-features/', '/tr/dear-passengers-ozellikleri/'],
  ['/dear-passengers-roles/', '/de/dear-passengers-rollen/', '/ar/dear-passengers-roles/', '/tr/dear-passengers-rolleri/'],
  ['/dear-passengers-player-count/', '/de/dear-passengers-spielerzahl/', '/zh-cn/dear-passengers-player-count/', '/ar/dear-passengers-player-count/', '/tr/dear-passengers-kac-kisilik/'],
  ['/dear-passengers-release-date/', '/de/dear-passengers-release/', '/zh-cn/dear-passengers-release-date/', '/ar/dear-passengers-release/', '/tr/dear-passengers-cikis-tarihi/'],
  ['/dear-passengers-demo/', '/de/dear-passengers-demo/', '/ar/dear-passengers-demo/', '/tr/dear-passengers-demo/'],
  ['/dear-passengers-download/', '/de/dear-passengers-download/', '/ar/dear-passengers-download/', '/tr/dear-passengers-indir/'],
  ['/dear-passengers-news/', '/de/dear-passengers-news/', '/ar/dear-passengers-news/', '/tr/dear-passengers-haberleri/'],
  ['/dear-passengers-developer-flexus/', '/de/dear-passengers-entwickler-flexus/', '/ar/dear-passengers-developer/', '/tr/dear-passengers-gelistiricisi/'],
  ['/dear-passengers-system-requirements/', '/de/dear-passengers-systemanforderungen/', '/zh-cn/dear-passengers-system-requirements/', '/ar/dear-passengers-system-requirements/', '/tr/dear-passengers-sistem-gereksinimleri/'],
  ['/games-like-dear-passengers/', '/de/spiele-wie-dear-passengers/', '/ar/games-like-dear-passengers/', '/tr/dear-passengers-benzeri-oyunlar/'],
  ['/about/', '/de/ueber-uns/', '/ar/about/', '/tr/hakkimizda/'],
  ['/editorial-policy/', '/de/redaktionsrichtlinien/', '/ar/editorial-policy/', '/tr/editorial-policy/'],
  ['/contact/', '/de/kontakt/', '/ar/contact/', '/tr/iletisim/'],
  ['/privacy-policy/', '/de/datenschutz/', '/ar/privacy-policy/', '/tr/gizlilik/'],
];

const base = 'https://dearpassengers.net';
let failures = 0;

for (const set of sets) {
  const expected = new Set(set.map((path) => `${base}${path}`));
  for (const path of set) {
    const outputPath = path === '/' ? 'out/index.html' : join('out', path, 'index.html');
    const html = await readFile(join(process.cwd(), outputPath), 'utf8');
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
    const alternates = [...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/gi)];
    const languageUrls = new Set(alternates.filter(([_, lang]) => lang !== 'x-default').map((match) => match[2]));
    const xDefault = alternates.find(([_, lang]) => lang === 'x-default')?.[2];
    const selfOk = canonical === `${base}${path}` && languageUrls.has(canonical);
    const setOk = expected.size === languageUrls.size && [...expected].every((url) => languageUrls.has(url));
    const defaultOk = xDefault === `${base}${set[0]}`;
    const lang = html.match(/<html lang="([^"]+)"/i)?.[1];
    const expectedLang = path.startsWith('/de/') || path === '/de/'
      ? 'de'
      : path.startsWith('/zh-cn/') || path === '/zh-cn/'
        ? 'zh-CN'
        : path.startsWith('/ar/') || path === '/ar/'
          ? 'ar'
          : path.startsWith('/tr/') || path === '/tr/'
            ? 'tr'
          : 'en';
    if (!selfOk || !setOk || !defaultOk || lang !== expectedLang) {
      failures += 1;
      console.error(`FAIL ${path} canonical=${canonical} self=${selfOk} set=${setOk} default=${defaultOk} lang=${lang}`);
    }
  }
}

if (failures) process.exitCode = 1;
else console.log(`Hreflang audit passed: ${sets.length} reciprocal sets, ${sets.reduce((sum, set) => sum + set.length, 0)} pages.`);
