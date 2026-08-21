import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const pages = [
  { route: 'dear-passengers-vr', locale: 'en', keyword: 'Dear Passengers VR', checkCharacters: false },
  { route: 'de/dear-passengers-vr', locale: 'de-DE', keyword: 'Dear Passengers VR', checkCharacters: true },
  { route: 'es/dear-passengers-vr', locale: 'es-ES', keyword: 'Dear Passengers VR', checkCharacters: true },
  { route: 'ru/dear-passengers-vr', locale: 'ru-RU', keyword: 'Dear Passengers VR', checkCharacters: true },
];

const remoteBase = process.argv[2]?.replace(/\/$/, '');

const decodeEntities = (value) => value
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
  .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
  .replace(/&nbsp;/gi, ' ')
  .replace(/&amp;/gi, '&')
  .replace(/&quot;/gi, '"')
  .replace(/&apos;|&#39;/gi, "'")
  .replace(/&lt;/gi, '<')
  .replace(/&gt;/gi, '>');

function textWithoutMarkup(fragment) {
  return decodeEntities(fragment
    .replace(/<(script|style|svg)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

function visibleText(fragment) {
  return textWithoutMarkup(removeHiddenSubtrees(fragment));
}

function removeHiddenSubtrees(fragment) {
  const hiddenElement = /<([a-z][\w:-]*)\b(?=[^>]*\shidden(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?(?:\s|\/?>))[^>]*>[\s\S]*?<\/\1>/gi;
  let result = fragment;
  let previous;

  do {
    previous = result;
    result = result.replace(hiddenElement, ' ');
  } while (result !== previous);

  return result;
}

function wordUnits(text, locale) {
  if (locale === 'zh-CN') {
    const segmenter = new Intl.Segmenter(locale, { granularity: 'word' });
    return [...segmenter.segment(text)].filter((part) => part.isWordLike).map((part) => part.segment);
  }
  return text.match(/[\p{L}\p{N}]+(?:[’'._-][\p{L}\p{N}]+)*/gu) ?? [];
}

function exactOccurrences(text, keyword) {
  const escaped = keyword
    .trim()
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/\s+/g, '\\s+');
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
  const bodyText = visibleText(body);
  const indexableBodyText = textWithoutMarkup(body);
  const initiallyVisibleMain = removeHiddenSubtrees(main);
  const mainText = textWithoutMarkup(initiallyVisibleMain);
  const paragraphText = [...initiallyVisibleMain.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((match) => visibleText(match[1]))
    .join(' ');
  const units = wordUnits(bodyText, page.locale);
  const mainUnits = wordUnits(mainText, page.locale);
  const occurrences = exactOccurrences(bodyText, page.keyword);
  const density = units.length === 0 ? 0 : (occurrences / units.length) * 100;
  const indexableUnits = wordUnits(indexableBodyText, page.locale);
  const indexableOccurrences = exactOccurrences(indexableBodyText, page.keyword);
  const indexableDensity = indexableUnits.length === 0 ? 0 : (indexableOccurrences / indexableUnits.length) * 100;
  const meaningfulCharacters = page.locale === 'zh-CN'
    ? (paragraphText.match(/\p{Script=Han}/gu) ?? []).length
    : Array.from(paragraphText.replace(/\s+/gu, '')).length;
  const h1Count = (main.match(/<h1\b/gi) ?? []).length;
  const visibleDensityPass = density >= 3 && density <= 3.2;
  const indexableDensityPass = indexableDensity >= 3 && indexableDensity <= 3.2;
  const densityPass = visibleDensityPass && indexableDensityPass;
  const structurePass = h1Count === 1 && main.length > 0;
  const characterPass = !page.checkCharacters || (meaningfulCharacters >= 1350 && meaningfulCharacters <= 1650);

  if (!densityPass || !structurePass || !characterPass) failed = true;

  console.log(JSON.stringify({
    route: `/${page.route}/`,
    source: remoteBase ? `${remoteBase}/${page.route}/` : htmlPath,
    locale: page.locale,
    keyword: page.keyword,
    initiallyVisible: {
      wordUnits: units.length,
      exactOccurrences: occurrences,
      densityPercent: Number(density.toFixed(2)),
      formula: `(${occurrences} ÷ ${units.length}) × 100`,
    },
    indexableIncludingExpandedFaq: {
      wordUnits: indexableUnits.length,
      exactOccurrences: indexableOccurrences,
      densityPercent: Number(indexableDensity.toFixed(2)),
      formula: `(${indexableOccurrences} ÷ ${indexableUnits.length}) × 100`,
    },
    meaningfulParagraphCharacters: page.checkCharacters ? meaningfulCharacters : null,
    initiallyVisibleMainWordUnits: mainUnits.length,
    characterFormula: page.locale === 'zh-CN'
      ? 'visible Han characters inside paragraphs'
      : 'visible non-whitespace characters inside paragraphs',
    characterTarget: page.checkCharacters ? '1350–1650' : null,
    h1Count,
    pass: densityPass && structurePass && characterPass,
  }, null, 2));

  if (!characterPass) {
    console.error(`- /${page.route}/ has ${meaningfulCharacters} meaningful paragraph characters; expected 1350–1650.`);
  }
}

if (failed) process.exitCode = 1;
