import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const pages = [
  'pt-br',
  'pt-br/dear-passengers-como-jogar',
  'pt-br/dear-passengers-quantos-jogadores',
  'pt-br/dear-passengers-data-de-lancamento',
  'pt-br/dear-passengers-demo',
  'pt-br/dear-passengers-baixar',
  'pt-br/dear-passengers-requisitos',
  'pt-br/dear-passengers-trailer',
  'pt-br/dear-passengers-noticias',
  'pt-br/dear-passengers-recursos-confirmados',
  'pt-br/dear-passengers-funcoes',
  'pt-br/dear-passengers-desenvolvedora-flexus',
  'pt-br/jogos-parecidos-com-dear-passengers',
];

const decode = (value) => value.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

let failed = false;
for (const route of pages) {
  const html = await readFile(join(process.cwd(), 'out', route, 'index.html'), 'utf8');
  const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0] || '';
  const text = decode(main.replace(/<script\b[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
  const words = text.match(/[A-Za-zÀ-ÖØ-öø-ÿ0-9]+(?:[-’'][A-Za-zÀ-ÖØ-öø-ÿ0-9]+)*/g) || [];
  const count = (text.match(/Dear Passengers/gi) || []).length;
  const density = (count * 2 / words.length) * 100;
  const structuralChecks = [
    html.includes('hreflang="pt-BR"') || html.includes('hrefLang="pt-BR"'),
    html.includes('application/ld+json'),
    html.includes('CONFIRMADO'),
    html.includes('NÃO INFORMADO'),
    html.includes('Steam'),
    !text.includes('[['),
  ];
  const ok = density >= 3 && words.length >= 800 && structuralChecks.every(Boolean);
  if (!ok) failed = true;
  console.log(`${ok ? 'PASS' : 'FAIL'} ${route.padEnd(58)} ${String(words.length).padStart(4)} palavras  ${String(count).padStart(2)}×  ${density.toFixed(2)}%  estrutura=${structuralChecks.every(Boolean) ? 'ok' : 'falha'}`);
}
if (failed) process.exitCode = 1;
