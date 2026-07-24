import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const sets = [
  ['/', '/de/', '/zh-cn/'],
  ['/dear-passengers-gameplay/', '/de/dear-passengers-gameplay/'],
  ['/dear-passengers-trailer/', '/de/dear-passengers-trailer/'],
  ['/dear-passengers-confirmed-features/', '/de/dear-passengers-bestaetigte-features/'],
  ['/dear-passengers-roles/', '/de/dear-passengers-rollen/'],
  ['/dear-passengers-player-count/', '/de/dear-passengers-spielerzahl/', '/zh-cn/dear-passengers-player-count/'],
  ['/dear-passengers-release-date/', '/de/dear-passengers-release/', '/zh-cn/dear-passengers-release-date/'],
  ['/dear-passengers-demo/', '/de/dear-passengers-demo/'],
  ['/dear-passengers-download/', '/de/dear-passengers-download/'],
  ['/dear-passengers-news/', '/de/dear-passengers-news/'],
  ['/dear-passengers-developer-flexus/', '/de/dear-passengers-entwickler-flexus/'],
  ['/dear-passengers-system-requirements/', '/de/dear-passengers-systemanforderungen/', '/zh-cn/dear-passengers-system-requirements/'],
  ['/games-like-dear-passengers/', '/de/spiele-wie-dear-passengers/'],
  ['/about/', '/de/ueber-uns/'],
  ['/editorial-policy/', '/de/redaktionsrichtlinien/'],
  ['/contact/', '/de/kontakt/'],
  ['/privacy-policy/', '/de/datenschutz/'],
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
    const expectedLang = path.startsWith('/de/') || path === '/de/' ? 'de' : path.startsWith('/zh-cn/') || path === '/zh-cn/' ? 'zh-CN' : 'en';
    if (!selfOk || !setOk || !defaultOk || lang !== expectedLang) {
      failures += 1;
      console.error(`FAIL ${path} canonical=${canonical} self=${selfOk} set=${setOk} default=${defaultOk} lang=${lang}`);
    }
  }
}

if (failures) process.exitCode = 1;
else console.log(`Hreflang audit passed: ${sets.length} reciprocal sets, ${sets.reduce((sum, set) => sum + set.length, 0)} pages.`);
