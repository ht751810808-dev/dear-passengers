import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const route = 'it/dear-passengers-data-di-uscita';
const html = await readFile(join(process.cwd(), 'out', route, 'index.html'), 'utf8');
const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0] || '';
const text = main
  .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;/g, "'")
  .replace(/\s+/g, ' ');
const words = text.match(/[\p{L}\p{N}]+(?:[-’'][\p{L}\p{N}]+)*/gu) || [];
const brandCount = (text.match(/Dear Passengers/gi) || []).length;
const brandDensity = (brandCount * 2 / words.length) * 100;
const checks = {
  wordCount: words.length >= 1600 && words.length <= 2000,
  brandDensity: brandDensity > 3,
  localIntent: /quando esce Dear Passengers/i.test(text) && /prezzo di Dear Passengers/i.test(text),
  factLabels: text.includes('CONFERMATO') && text.includes('NON ANNUNCIATO'),
  structures: html.includes('"@type":"Article"') && html.includes('"@type":"FAQPage"') && html.includes('"@type":"BreadcrumbList"'),
  localization: html.includes('<html lang="it"') && (html.includes('hreflang="it"') || html.includes('hrefLang="it"')),
};
const passes = Object.values(checks).every(Boolean);

console.log(`${passes ? 'PASS' : 'FAIL'} /${route}/ ${words.length} parole · ${brandCount}× Dear Passengers · densità ${brandDensity.toFixed(2)}%`);
console.log(checks);
if (!passes) process.exitCode = 1;
