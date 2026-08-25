import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const route = 'dear-passengers-playstation';
const keyword = 'Dear Passengers PlayStation';
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
function exactOccurrences(text) {
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
  return [...text.matchAll(new RegExp(`(?<![\\p{L}\\p{N}])${escaped}(?![\\p{L}\\p{N}])`, 'giu'))].length;
}

let html;
if (remoteBase) {
  const response = await fetch(`${remoteBase}/${route}/`);
  if (!response.ok) throw new Error(`/${route}/ returned HTTP ${response.status}`);
  html = await response.text();
} else {
  html = await readFile(join(process.cwd(), 'out', route, 'index.html'), 'utf8');
}

const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? '';
const audit = (text) => {
  const words = wordUnits(text).length;
  const occurrences = exactOccurrences(text);
  const density = words === 0 ? 0 : (occurrences / words) * 100;
  return { words, occurrences, densityPercent: Number(density.toFixed(2)), formula: `(${occurrences} ÷ ${words}) × 100` };
};

const initiallyVisible = audit(textWithoutMarkup(removeHiddenSubtrees(body)));
const includingExpandedFaq = audit(textWithoutMarkup(body));
const initiallyVisibleMainWords = wordUnits(textWithoutMarkup(removeHiddenSubtrees(main))).length;
const h1Count = (main.match(/<h1\b/gi) ?? []).length;
const densityPass = [initiallyVisible, includingExpandedFaq].every((item) => item.densityPercent >= 3 && item.densityPercent <= 3.2);
const structurePass = h1Count === 1 && initiallyVisibleMainWords >= 1500 && initiallyVisibleMainWords <= 1800;

console.log(JSON.stringify({ route: `/${route}/`, source: remoteBase ? `${remoteBase}/${route}/` : join(process.cwd(), 'out', route, 'index.html'), keyword, initiallyVisible, indexableIncludingExpandedFaq: includingExpandedFaq, initiallyVisibleMainWords, h1Count, pass: densityPass && structurePass }, null, 2));
if (!densityPass || !structurePass) process.exitCode = 1;
