import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const pages = [
  ['de', 'Dear Passengers Spiel'],
  ['de/dear-passengers-gameplay', 'Dear Passengers Gameplay'],
  ['de/dear-passengers-spielerzahl', 'Dear Passengers Spielerzahl'],
  ['de/dear-passengers-release', 'Dear Passengers Release'],
  ['de/dear-passengers-demo', 'Dear Passengers Demo'],
  ['de/dear-passengers-download', 'Dear Passengers Download'],
  ['de/dear-passengers-systemanforderungen', 'Dear Passengers Systemanforderungen'],
  ['de/dear-passengers-trailer', 'Dear Passengers Trailer'],
  ['de/dear-passengers-news', 'Dear Passengers News'],
  ['de/dear-passengers-bestaetigte-features', 'Dear Passengers Features'],
  ['de/dear-passengers-rollen', 'Dear Passengers Rollen'],
  ['de/dear-passengers-entwickler-flexus', 'Dear Passengers Entwickler'],
  ['de/spiele-wie-dear-passengers', 'Spiele wie Dear Passengers'],
];

const decode = (value) => value
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;/g, "'")
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>');

for (const [route, keyword] of pages) {
  const html = await readFile(join(process.cwd(), 'out', route, 'index.html'), 'utf8');
  const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0] || '';
  const text = decode(main
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' '));
  const words = text.match(/[A-Za-zÄÖÜäöüß0-9]+(?:[-’'][A-Za-zÄÖÜäöüß0-9]+)*/g) || [];
  const count = (text.match(new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')) || []).length;
  const density = (count * keyword.split(/\s+/).length / words.length) * 100;
  console.log(`${route.padEnd(43)} ${String(words.length).padStart(4)} Wörter  ${String(count).padStart(2)}×  ${density.toFixed(2)}%  ${keyword}`);
}
