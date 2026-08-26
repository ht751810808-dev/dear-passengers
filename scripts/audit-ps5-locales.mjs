import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const pages = [
  { route: 'dear-passengers-ps5', locale: 'en', keyword: 'Dear Passengers PS5', checkCharacters: false },
  { route: 'de/dear-passengers-ps5', locale: 'de-DE', keyword: 'Dear Passengers PS5', checkCharacters: true },
  { route: 'tr/dear-passengers-ps5', locale: 'tr-TR', keyword: 'Dear Passengers PS5', checkCharacters: true },
];

const remoteBase = process.argv[2]?.replace(/\/$/, '');
const decodeEntities = (value) => value
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
  .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
  .replace(/&nbsp;/gi, ' ').replace(/&amp;/gi, '&').replace(/&quot;/gi, '"')
  .replace(/&apos;|&#39;/gi, "'").replace(/&lt;/gi, '<').replace(/&gt;/gi, '>');

function removeHiddenSubtrees(fragment) {
  const hiddenElement = /<([a-z][\w:-]*)\b(?=[^>]*\shidden(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?(?:\s|\/?>))[^>]*>[\s\S]*?<\/\1>/gi;
  let result = fragment;
  let previous;
  do { previous = result; result = result.replace(hiddenElement, ' '); } while (result !== previous);
  return result;
}

function textWithoutMarkup(fragment) {
  return decodeEntities(fragment.replace(/<(script|style|svg)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function wordUnits(text) { return text.match(/[\p{L}\p{N}]+(?:[’'._-][\p{L}\p{N}]+)*/gu) ?? []; }
function exactOccurrences(text, keyword) {
  const escaped = keyword.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
  return [...text.matchAll(new RegExp(`(?<![\\p{L}\\p{N}])${escaped}(?![\\p{L}\\p{N}])`, 'giu'))].length;
}

let failed = false;
for (const page of pages) {
  const htmlPath = join(process.cwd(), 'out', page.route, 'index.html');
  let html;
  if (remoteBase) {
    const response = await fetch(`${remoteBase}/${page.route}/`);
    if (!response.ok) throw new Error(`/${page.route}/ returned HTTP ${response.status}`);
    html = await response.text();
  } else {
    html = await readFile(htmlPath, 'utf8');
  }

  const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? '';
  const initiallyVisibleMain = removeHiddenSubtrees(main);
  const paragraphText = [...initiallyVisibleMain.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((match) => textWithoutMarkup(removeHiddenSubtrees(match[1]))).join(' ');

  const audit = (text) => {
    const units = wordUnits(text).length;
    const occurrences = exactOccurrences(text, page.keyword);
    const density = units === 0 ? 0 : (occurrences / units) * 100;
    return { wordUnits: units, exactOccurrences: occurrences, densityPercent: Number(density.toFixed(2)), formula: `(${occurrences} ÷ ${units}) × 100` };
  };

  const initiallyVisible = audit(textWithoutMarkup(removeHiddenSubtrees(body)));
  const indexableIncludingExpandedFaq = audit(textWithoutMarkup(body));
  const initiallyVisibleMainWordUnits = wordUnits(textWithoutMarkup(initiallyVisibleMain)).length;
  const meaningfulParagraphCharacters = Array.from(paragraphText.replace(/\s+/gu, '')).length;
  const h1Count = (main.match(/<h1\b/gi) ?? []).length;
  const densityPass = [initiallyVisible, indexableIncludingExpandedFaq].every((item) => item.densityPercent >= 3 && item.densityPercent <= 3.2);
  const lengthPass = page.checkCharacters
    ? meaningfulParagraphCharacters >= 1350 && meaningfulParagraphCharacters <= 1650
    : initiallyVisibleMainWordUnits >= 1500 && initiallyVisibleMainWordUnits <= 1800;
  const pass = densityPass && lengthPass && h1Count === 1;
  if (!pass) failed = true;

  console.log(JSON.stringify({
    route: `/${page.route}/`, source: remoteBase ? `${remoteBase}/${page.route}/` : htmlPath,
    locale: page.locale, keyword: page.keyword, initiallyVisible, indexableIncludingExpandedFaq,
    initiallyVisibleMainWordUnits, meaningfulParagraphCharacters: page.checkCharacters ? meaningfulParagraphCharacters : null,
    characterFormula: page.checkCharacters ? 'visible non-whitespace characters inside paragraphs' : null,
    characterTarget: page.checkCharacters ? '1350–1650' : null, h1Count, pass,
  }, null, 2));
}

if (failed) process.exitCode = 1;
