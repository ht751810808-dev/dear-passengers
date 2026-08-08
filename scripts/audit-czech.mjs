import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const pages = [
  ['cs', 'Dear Passengers'],
  ['cs/hra-dear-passengers', 'hra Dear Passengers'],
  ['cs/dear-passengers-jak-hrat', 'Dear Passengers jak hrát'],
  ['cs/dear-passengers-pocet-hracu', 'Dear Passengers počet hráčů'],
  ['cs/dear-passengers-datum-vydani', 'Dear Passengers datum vydání'],
  ['cs/dear-passengers-demo', 'Dear Passengers demo'],
  ['cs/dear-passengers-stahnout', 'Dear Passengers stáhnout'],
  ['cs/dear-passengers-systemove-pozadavky', 'Dear Passengers systémové požadavky'],
  ['cs/dear-passengers-cestina', 'Dear Passengers čeština'],
];

const decode = (value) => value
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;/g, "'")
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>');

let failures = 0;

for (const [route, keyword] of pages) {
  const html = await readFile(join(process.cwd(), 'out', route, 'index.html'), 'utf8');
  const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0] || '';
  const text = decode(main
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' '));
  const words = text.match(/[\p{L}\p{N}]+(?:[-’'][\p{L}\p{N}]+)*/gu) || [];
  const count = (text.match(new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')) || []).length;
  const density = (count * keyword.split(/\s+/).length / words.length) * 100;
  const brandCount = (text.match(/Dear Passengers/gi) || []).length;
  const brandDensity = (brandCount * 2 / words.length) * 100;
  const passes = words.length >= 650 && words.length <= 1100 && count >= 4 && brandDensity > 3;
  if (!passes) failures += 1;
  console.log(`${passes ? 'PASS' : 'FAIL'} ${route.padEnd(43)} ${String(words.length).padStart(4)} slov  ${String(count).padStart(2)}× ${density.toFixed(2)}% lokálně  ${brandDensity.toFixed(2)}% Dear Passengers`);
}

if (failures) process.exitCode = 1;
