import fs from 'node:fs';

const [htmlPath, keyword, minWordsRaw = '0', maxWordsRaw = '999999', minDensityRaw = '0', maxDensityRaw = '100'] = process.argv.slice(2);

if (!htmlPath || !keyword) {
  console.error('Usage: node scripts/audit-seo-page.mjs <html> <keyword> [minWords] [maxWords] [minDensity] [maxDensity]');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
const bodyMatch = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);

if (!bodyMatch) {
  console.error(`SEO page audit failed: no <body> found in ${htmlPath}`);
  process.exit(1);
}

const decodeEntities = (value) => value
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
  .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
  .replace(/&nbsp;/gi, ' ')
  .replace(/&amp;/gi, '&')
  .replace(/&quot;/gi, '"')
  .replace(/&apos;|&#39;/gi, "'")
  .replace(/&lt;/gi, '<')
  .replace(/&gt;/gi, '>');

const visibleText = decodeEntities(
  bodyMatch[1]
    .replace(/<(script|style|svg)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' '),
).replace(/\s+/g, ' ').trim();

const wordPattern = /[\p{L}\p{N}]+(?:[’'._-][\p{L}\p{N}]+)*/gu;
const words = visibleText.match(wordPattern) ?? [];
const keywordWords = keyword.match(wordPattern) ?? [];
const escapedKeyword = keyword
  .trim()
  .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  .replace(/\s+/g, '\\s+');
const occurrencePattern = new RegExp(`(?<![\\p{L}\\p{N}])${escapedKeyword}(?![\\p{L}\\p{N}])`, 'giu');
const occurrences = [...visibleText.matchAll(occurrencePattern)].length;
// Exact-phrase density: consecutive phrase occurrences divided by all visible page words.
// Do not multiply by the number of words inside the phrase.
const density = words.length === 0 ? 0 : (occurrences / words.length) * 100;

const minWords = Number(minWordsRaw);
const maxWords = Number(maxWordsRaw);
const minDensity = Number(minDensityRaw);
const maxDensity = Number(maxDensityRaw);
const errors = [];

if (words.length < minWords || words.length > maxWords) {
  errors.push(`visible word count ${words.length} is outside ${minWords}-${maxWords}`);
}
if (density < minDensity || density > maxDensity) {
  errors.push(`keyword density ${density.toFixed(2)}% is outside ${minDensity}-${maxDensity}%`);
}

console.log(JSON.stringify({
  htmlPath,
  keyword,
  visibleWords: words.length,
  keywordWords: keywordWords.length,
  exactOccurrences: occurrences,
  densityPercent: Number(density.toFixed(2)),
  formula: `(${occurrences} ÷ ${words.length}) × 100`,
}, null, 2));

if (errors.length > 0) {
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('SEO page audit passed.');
