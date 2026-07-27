import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const pages = [
  ['tr', 'Dear Passengers'],
  ['tr/dear-passengers-oynanis', 'Dear Passengers'],
  ['tr/dear-passengers-kac-kisilik', 'Dear Passengers'],
  ['tr/dear-passengers-cikis-tarihi', 'Dear Passengers'],
  ['tr/dear-passengers-demo', 'Dear Passengers'],
  ['tr/dear-passengers-indir', 'Dear Passengers'],
  ['tr/dear-passengers-sistem-gereksinimleri', 'Dear Passengers'],
  ['tr/dear-passengers-fragman', 'Dear Passengers'],
  ['tr/dear-passengers-haberleri', 'Dear Passengers'],
  ['tr/dear-passengers-ozellikleri', 'Dear Passengers'],
  ['tr/dear-passengers-rolleri', 'Dear Passengers'],
  ['tr/dear-passengers-gelistiricisi', 'Dear Passengers'],
  ['tr/dear-passengers-benzeri-oyunlar', 'Dear Passengers'],
];

const decode = (value) => value.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

let failed = false;
for (const [route, keyword] of pages) {
  const html = await readFile(join(process.cwd(), 'out', route, 'index.html'), 'utf8');
  const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0] || '';
  const text = decode(main.replace(/<script\b[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
  const words = text.match(/[A-Za-zÇĞİÖŞÜçğıöşü0-9]+(?:[-’'][A-Za-zÇĞİÖŞÜçğıöşü0-9]+)*/g) || [];
  const count = (text.match(new RegExp(keyword, 'gi')) || []).length;
  const density = (count * 2 / words.length) * 100;
  const ok = density >= 3 && words.length >= 800;
  if (!ok) failed = true;
  console.log(`${ok ? 'PASS' : 'FAIL'} ${route.padEnd(48)} ${String(words.length).padStart(4)} kelime  ${String(count).padStart(2)}×  ${density.toFixed(2)}%`);
}
if (failed) process.exitCode = 1;
