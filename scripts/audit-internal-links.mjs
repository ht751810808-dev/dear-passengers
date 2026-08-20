import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const SITE_ORIGIN = 'https://dearpassengers.net';
const LOCALES = new Set(['de', 'ar', 'tr', 'pt-br', 'es', 'my', 'ru', 'cs', 'it', 'zh-cn']);
const UTILITY_ROUTES = new Set([
  '/about/', '/contact/', '/privacy-policy/', '/editorial-policy/',
  '/de/ueber-uns/', '/de/kontakt/', '/de/datenschutz/', '/de/redaktionsrichtlinien/',
  '/ar/about/', '/ar/contact/', '/ar/privacy-policy/', '/ar/editorial-policy/',
  '/tr/hakkimizda/', '/tr/iletisim/', '/tr/gizlilik/', '/tr/editorial-policy/',
  '/pt-br/sobre/', '/pt-br/contato/', '/pt-br/privacidade/', '/pt-br/politica-editorial/',
  '/es/sobre/', '/es/contacto/', '/es/privacidad/', '/es/politica-editorial/',
  '/my/about/', '/my/contact/', '/my/privacy-policy/', '/my/editorial-policy/',
]);

async function collectHtml(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectHtml(path));
    else if (entry.name === 'index.html') files.push(path);
  }
  return files;
}

function routeFromFile(out, file) {
  return `/${relative(out, file).replace(/index\.html$/, '').replaceAll('\\', '/')}`.replace(/\/+/g, '/');
}

function normalizeRoute(pathname) {
  const path = pathname.replace(/\/+/g, '/');
  return path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`;
}

function attribute(attributes, name) {
  return attributes.match(new RegExp(`\\b${name}=["']([^"']*)["']`, 'i'))?.[1];
}

function anchors(html) {
  return [...html.matchAll(/<a\b([^>]*)>/gi)].map((match) => ({
    href: attribute(match[1], 'href'),
    hrefLang: attribute(match[1], 'hreflang'),
    rel: attribute(match[1], 'rel') || '',
  }));
}

function internalDestination(href) {
  if (!href) return null;
  let internal = href;
  if (href.startsWith(SITE_ORIGIN)) internal = href.slice(SITE_ORIGIN.length) || '/';
  if (!internal.startsWith('/') || internal.startsWith('//')) return null;
  const [pathAndQuery, hash = ''] = internal.split('#', 2);
  const pathname = pathAndQuery.split('?')[0] || '/';
  if (/\.[a-z0-9]{2,5}$/i.test(pathname) || pathname.startsWith('/_next/')) return null;
  return { route: normalizeRoute(pathname), hash };
}

function routeLocale(route) {
  const firstSegment = route.split('/').filter(Boolean)[0];
  return LOCALES.has(firstSegment) ? firstSegment : 'en';
}

function isLocaleHome(route) {
  return route === '/' || /^\/(de|ar|tr|pt-br|es|my|ru|cs|it|zh-cn)\/$/.test(route);
}

function hasId(html, hash) {
  if (!hash) return true;
  const decoded = decodeURIComponent(hash);
  const escaped = decoded.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`\\bid=["']${escaped}["']`, 'i').test(html);
}

const out = join(process.cwd(), 'out');
const files = await collectHtml(out);
const pages = new Map();

for (const file of files) {
  const route = routeFromFile(out, file);
  pages.set(route, { file, html: await readFile(file, 'utf8') });
}

const mainIncoming = new Map();
const errors = [];
let anchorInstances = 0;
let mainAnchorInstances = 0;

function addIncoming(graph, target, source) {
  if (target === source) return;
  if (!graph.has(target)) graph.set(target, new Set());
  graph.get(target).add(source);
}

for (const [sourceRoute, page] of pages) {
  const canonical = page.html.match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i)?.[1]
    || page.html.match(/<link\b[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*>/i)?.[1];
  const expectedCanonical = `${SITE_ORIGIN}${sourceRoute}`;
  if (sourceRoute !== '/404/' && canonical !== expectedCanonical) {
    errors.push(`Canonical mismatch: ${sourceRoute} -> ${canonical || 'missing'} (expected ${expectedCanonical})`);
  }

  const h1Count = (page.html.match(/<h1\b/gi) || []).length;
  if (h1Count !== 1) errors.push(`H1 count ${h1Count}: ${sourceRoute}`);
  if (/<h1\b[^>]*>[\s\S]*?<a\b[\s\S]*?<\/h1>/i.test(page.html)) errors.push(`Linked H1: ${sourceRoute}`);

  const mainHtml = page.html.match(/<main\b[^>]*>[\s\S]*?<\/main>/i)?.[0] || '';
  const allAnchors = anchors(page.html);
  const contextualAnchors = anchors(mainHtml);
  anchorInstances += allAnchors.length;
  mainAnchorInstances += contextualAnchors.length;

  for (const anchor of allAnchors) {
    const target = internalDestination(anchor.href);
    if (!target) continue;
    const targetPage = pages.get(target.route);
    if (!targetPage) {
      errors.push(`Broken internal link: ${sourceRoute} -> ${target.route}`);
      continue;
    }
    if (anchor.rel.split(/\s+/).some((value) => value.toLowerCase() === 'nofollow')) {
      errors.push(`Internal nofollow: ${sourceRoute} -> ${target.route}`);
    }
    if (!hasId(targetPage.html, target.hash)) {
      errors.push(`Broken fragment: ${sourceRoute} -> ${target.route}#${target.hash}`);
    }
  }

  for (const anchor of contextualAnchors) {
    const target = internalDestination(anchor.href);
    if (!target || !pages.has(target.route)) continue;
    addIncoming(mainIncoming, target.route, sourceRoute);
    if (routeLocale(sourceRoute) !== routeLocale(target.route) && !anchor.hrefLang) {
      errors.push(`Cross-locale main link missing hreflang: ${sourceRoute} -> ${target.route}`);
    }
  }
}

const sitemapXml = await readFile(join(out, 'sitemap.xml'), 'utf8');
const sitemapRoutes = new Set([...sitemapXml.matchAll(/<loc>https:\/\/dearpassengers\.net([^<]*)<\/loc>/g)].map((match) => normalizeRoute(match[1] || '/')));
const indexableRoutes = new Set([...pages.keys()].filter((route) => route !== '/404/'));

for (const route of indexableRoutes) {
  if (!sitemapRoutes.has(route)) errors.push(`Indexable route missing from sitemap: ${route}`);
}
for (const route of sitemapRoutes) {
  if (!indexableRoutes.has(route)) errors.push(`Sitemap route missing rendered page: ${route}`);
}

const contentRoutes = [...indexableRoutes].filter((route) => !isLocaleHome(route) && !UTILITY_ROUTES.has(route));
for (const route of contentRoutes) {
  const count = mainIncoming.get(route)?.size || 0;
  if (count < 2) errors.push(`Content page has ${count} contextual incoming source(s): ${route}`);
}

if (errors.length) {
  console.error(`Internal-link audit failed (${errors.length}):\n${[...new Set(errors)].join('\n')}`);
  process.exitCode = 1;
} else {
  const localeSummary = [...LOCALES].map((locale) => {
    const count = [...indexableRoutes].filter((route) => route.startsWith(`/${locale}/`)).length;
    return `${count} ${locale}`;
  }).join(', ');
  console.log(
    `Internal-link audit passed: ${pages.size} rendered pages, ${sitemapRoutes.size} sitemap URLs, `
    + `${anchorInstances} anchor instances scanned (${mainAnchorInstances} inside main), `
    + `0 broken targets or fragments, valid canonicals/hreflang, and all ${contentRoutes.length} content pages have at least two contextual incoming sources (${localeSummary}).`,
  );
}
