import fs from 'node:fs';
import path from 'node:path';

const OUTPUT_DIR = path.resolve('out');
const POLICY_PATH = path.resolve('data/adsense-route-policy.json');
const ADSENSE_LOADER = 'pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
const DEFAULT_ADSENSE_ID = 'ca-pub-4159784234426326';
const adsenseId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID || DEFAULT_ADSENSE_ID;
const publisherNumber = adsenseId.replace(/^ca-/, '');
const routePolicy = JSON.parse(fs.readFileSync(POLICY_PATH, 'utf8'));
const nonContentPaths = new Set(routePolicy.nonContentPaths);
const unsupportedPrefixes = routePolicy.unsupportedAdLanguagePrefixes;

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function routeFor(filePath) {
  const relative = path.relative(OUTPUT_DIR, filePath).split(path.sep).join('/');
  if (relative === 'index.html') return '/';
  if (relative === '404.html') return '/404';
  if (relative.endsWith('/index.html')) return `/${relative.replace(/\/index\.html$/, '')}`;
  return `/${relative.replace(/\.html$/, '')}`;
}

function usesUnsupportedAdLanguage(route) {
  return unsupportedPrefixes.some((prefix) => route === prefix || route.startsWith(`${prefix}/`));
}

function isExcludedRoute(route) {
  return nonContentPaths.has(route) || usesUnsupportedAdLanguage(route);
}

function mainWordCount(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || '';
  const text = main
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return (text.match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu) || []).length;
}

if (!fs.existsSync(OUTPUT_DIR)) {
  throw new Error('AdSense build audit requires the static out/ directory.');
}

const htmlFiles = walk(OUTPUT_DIR).filter((filePath) => filePath.endsWith('.html'));
const renderedRoutes = new Set(htmlFiles.map(routeFor));
const adBearingRoutes = new Set();
const protectedRoutes = new Set();
const unsupportedLanguageRoutes = new Set();
const failures = [];

for (const filePath of htmlFiles) {
  const route = routeFor(filePath);
  const html = fs.readFileSync(filePath, 'utf8');
  const hasAdSenseLoader = html.includes(ADSENSE_LOADER);
  const hasCorrectLoaderId = html.includes(`${ADSENSE_LOADER}?client=${adsenseId}`);
  const hasPublisherMeta = html.includes(`name="google-adsense-account" content="${adsenseId}"`);
  const hasConsentDefaults = html.includes('id="google-consent-defaults"')
    && html.includes("ad_storage: 'denied'")
    && html.includes("ad_personalization: 'denied'");
  const excluded = isExcludedRoute(route);

  if (excluded) {
    protectedRoutes.add(route);
    if (usesUnsupportedAdLanguage(route)) unsupportedLanguageRoutes.add(route);
    if (hasAdSenseLoader) failures.push(`${route} loads AdSense although route policy excludes it`);
  } else {
    adBearingRoutes.add(route);
    if (!hasAdSenseLoader) failures.push(`${route} is an eligible content page without the AdSense loader`);
    if (hasAdSenseLoader && !hasCorrectLoaderId) failures.push(`${route} loads an unexpected AdSense publisher ID`);
  }

  if (!hasPublisherMeta) failures.push(`${route} does not expose the expected AdSense ownership meta tag`);
  if (!hasConsentDefaults) failures.push(`${route} is missing denied regional Google Consent Mode defaults`);
}

for (const route of nonContentPaths) {
  if (route !== '/_not-found' && !renderedRoutes.has(route)) {
    failures.push(`AdSense route policy references missing protected page ${route}`);
  }
}

const adsTxtPath = path.join(OUTPUT_DIR, 'ads.txt');
const adsTxt = fs.existsSync(adsTxtPath) ? fs.readFileSync(adsTxtPath, 'utf8').trim() : '';
const expectedAdsTxtLine = `google.com, ${publisherNumber}, DIRECT, f08c47fec0942fa0`;
if (!adsTxt.split(/\r?\n/).includes(expectedAdsTxtLine)) {
  failures.push(`/ads.txt does not contain the expected seller line: ${expectedAdsTxtLine}`);
}

const privacyHtml = fs.readFileSync(path.join(OUTPUT_DIR, 'privacy-policy', 'index.html'), 'utf8');
for (const disclosure of [
  'Google AdSense, third-party advertising and identifiers',
  'participating third-party vendors may place or read cookies',
  'Privacy and cookie settings',
  'personalized advertising',
]) {
  if (!privacyHtml.includes(disclosure)) failures.push(`/privacy-policy/ is missing disclosure: ${disclosure}`);
}

for (const [route, minimumWords] of [
  ['/de/redaktionsrichtlinien', 800],
  ['/tr/gizlilik', 800],
]) {
  const html = fs.readFileSync(path.join(OUTPUT_DIR, route.slice(1), 'index.html'), 'utf8');
  const wordCount = mainWordCount(html);
  if (wordCount < minimumWords) failures.push(`${route}/ has ${wordCount} main words; expected at least ${minimumWords}`);
}

const identityHtml = fs.readFileSync(path.join(OUTPUT_DIR, 'game-dear-passengers', 'index.html'), 'utf8');
for (const doorwaySignal of [
  'Game Dear Passengers',
  'owns the identity query',
  'Google Search Console recorded',
  'reversed-word-order discovery query',
]) {
  if (identityHtml.includes(doorwaySignal)) failures.push(`/game-dear-passengers/ retains doorway signal: ${doorwaySignal}`);
}

if (fs.existsSync(path.join(OUTPUT_DIR, 'adsterra-native', 'index.html'))) {
  failures.push('/adsterra-native/ is a retired blank advertising page and must not be published');
}

const redirectsPath = path.join(OUTPUT_DIR, '_redirects');
const redirects = fs.existsSync(redirectsPath) ? fs.readFileSync(redirectsPath, 'utf8') : '';
if (!redirects.includes('/adsterra-native/* / 301')) {
  failures.push('/adsterra-native/ does not have a permanent retirement redirect');
}

if (unsupportedLanguageRoutes.size === 0) {
  failures.push('no unsupported-language pages were found, so their AdSense exclusion was not verified');
}

if (failures.length > 0) {
  console.error('AdSense build audit failed:');
  [...new Set(failures)].forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `AdSense build audit passed: ${adBearingRoutes.size} ad-bearing content routes; `
    + `${protectedRoutes.size} protected routes without the loader, including `
    + `${unsupportedLanguageRoutes.size} unsupported-language routes; publisher ID, ads.txt, `
    + 'privacy disclosures, consent defaults, and retired ad-page redirect verified.',
);
