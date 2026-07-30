import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const sets = [
  ['/', '/de/', '/zh-cn/', '/ar/', '/tr/', '/pt-br/', '/es/'],
  ['/game-dear-passengers/', '/de/dear-passengers-spiel/', '/zh-cn/dear-passengers-game/', '/ar/dear-passengers-game/', '/tr/dear-passengers-oyunu/', '/pt-br/jogo-dear-passengers/', '/es/juego-dear-passengers/'],
  ['/dear-passengers-gameplay/', '/de/dear-passengers-gameplay/', '/ar/dear-passengers-gameplay/', '/tr/dear-passengers-oynanis/', '/pt-br/dear-passengers-como-jogar/', '/es/dear-passengers-como-jugar/'],
  ['/dear-passengers-trailer/', '/de/dear-passengers-trailer/', '/ar/dear-passengers-trailer/', '/tr/dear-passengers-fragman/', '/pt-br/dear-passengers-trailer/', '/es/dear-passengers-trailer/'],
  ['/dear-passengers-confirmed-features/', '/de/dear-passengers-bestaetigte-features/', '/ar/dear-passengers-confirmed-features/', '/tr/dear-passengers-ozellikleri/', '/pt-br/dear-passengers-recursos-confirmados/', '/es/dear-passengers-caracteristicas-confirmadas/'],
  ['/dear-passengers-roles/', '/de/dear-passengers-rollen/', '/ar/dear-passengers-roles/', '/tr/dear-passengers-rolleri/', '/pt-br/dear-passengers-funcoes/', '/es/dear-passengers-roles/'],
  ['/dear-passengers-player-count/', '/de/dear-passengers-spielerzahl/', '/zh-cn/dear-passengers-player-count/', '/ar/dear-passengers-player-count/', '/tr/dear-passengers-kac-kisilik/', '/pt-br/dear-passengers-quantos-jogadores/', '/es/dear-passengers-cuantos-jugadores/'],
  ['/dear-passengers-release-date/', '/de/dear-passengers-release/', '/zh-cn/dear-passengers-release-date/', '/ar/dear-passengers-release/', '/tr/dear-passengers-cikis-tarihi/', '/pt-br/dear-passengers-data-de-lancamento/', '/es/dear-passengers-fecha-de-lanzamiento/'],
  ['/dear-passengers-demo/', '/de/dear-passengers-demo/', '/ar/dear-passengers-demo/', '/tr/dear-passengers-demo/', '/pt-br/dear-passengers-demo/', '/es/dear-passengers-demo/'],
  ['/dear-passengers-download/', '/de/dear-passengers-download/', '/ar/dear-passengers-download/', '/tr/dear-passengers-indir/', '/pt-br/dear-passengers-baixar/', '/es/dear-passengers-descargar/'],
  ['/dear-passengers-news/', '/de/dear-passengers-news/', '/ar/dear-passengers-news/', '/tr/dear-passengers-haberleri/', '/pt-br/dear-passengers-noticias/', '/es/dear-passengers-noticias/'],
  ['/dear-passengers-developer-flexus/', '/de/dear-passengers-entwickler-flexus/', '/ar/dear-passengers-developer/', '/tr/dear-passengers-gelistiricisi/', '/pt-br/dear-passengers-desenvolvedora-flexus/', '/es/dear-passengers-desarrollador-flexus/'],
  ['/dear-passengers-system-requirements/', '/de/dear-passengers-systemanforderungen/', '/zh-cn/dear-passengers-system-requirements/', '/ar/dear-passengers-system-requirements/', '/tr/dear-passengers-sistem-gereksinimleri/', '/pt-br/dear-passengers-requisitos/', '/es/dear-passengers-requisitos/'],
  ['/games-like-dear-passengers/', '/de/spiele-wie-dear-passengers/', '/ar/games-like-dear-passengers/', '/tr/dear-passengers-benzeri-oyunlar/', '/pt-br/jogos-parecidos-com-dear-passengers/', '/es/juegos-parecidos-a-dear-passengers/'],
  ['/about/', '/de/ueber-uns/', '/ar/about/', '/tr/hakkimizda/', '/pt-br/sobre/', '/es/sobre/'],
  ['/editorial-policy/', '/de/redaktionsrichtlinien/', '/ar/editorial-policy/', '/tr/editorial-policy/', '/pt-br/politica-editorial/', '/es/politica-editorial/'],
  ['/contact/', '/de/kontakt/', '/ar/contact/', '/tr/iletisim/', '/pt-br/contato/', '/es/contacto/'],
  ['/privacy-policy/', '/de/datenschutz/', '/ar/privacy-policy/', '/tr/gizlilik/', '/pt-br/privacidade/', '/es/privacidad/'],
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
            : path.startsWith('/pt-br/') || path === '/pt-br/'
              ? 'pt-BR'
              : path.startsWith('/es/') || path === '/es/'
                ? 'es'
          : 'en';
    if (!selfOk || !setOk || !defaultOk || lang !== expectedLang) {
      failures += 1;
      console.error(`FAIL ${path} canonical=${canonical} self=${selfOk} set=${setOk} default=${defaultOk} lang=${lang}`);
    }
  }
}

if (failures) process.exitCode = 1;
else console.log(`Hreflang audit passed: ${sets.length} reciprocal sets, ${sets.reduce((sum, set) => sum + set.length, 0)} pages.`);
