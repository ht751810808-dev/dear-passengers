#!/usr/bin/env node
/** Browser checks through visible UI only. No production debug API or test state injection. */
import assert from 'node:assert/strict';
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { homedir, tmpdir } from 'node:os';
import path from 'node:path';

const require = createRequire(import.meta.url);
const bundle = process.env.FLIGHT_QA_NODE_MODULES || path.join(homedir(), '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules');
function dependency(name) {
  try { return require(name); } catch {
    try { return require(path.join(bundle, name)); } catch {
      throw new Error(`${name} is unavailable. Set FLIGHT_QA_NODE_MODULES to an existing runtime node_modules directory. This script does not install packages.`);
    }
  }
}
const { chromium } = dependency('playwright');
const { PNG } = dependency('pngjs');
const url = process.env.FLIGHT_QA_URL || 'http://localhost:3000/play/cabin-crisis/';
const onlyPause = process.env.FLIGHT_QA_ONLY === 'pause';
const origin = new URL(url).origin;
const runId = new Date().toISOString().replace(/[:.]/g, '-');
const outDir = path.resolve(process.env.FLIGHT_QA_OUTPUT || path.join(tmpdir(), 'dear-passengers-gameplay-qa', runId));
mkdirSync(outDir, { recursive: true });
const report = { url, mode: onlyPause ? 'pause' : 'full', startedAt: new Date().toISOString(), output: outDir, browser: '', checks: [], consoleErrors: [], pageErrors: [], failedRequests: [], failedResponses: [], visualMeasurements: [] };
let browser;

function executable() {
  if (process.env.FLIGHT_QA_BROWSER) return process.env.FLIGHT_QA_BROWSER;
  const bundled = chromium.executablePath();
  if (existsSync(bundled)) return bundled;
  const cache = process.env.PLAYWRIGHT_BROWSERS_PATH || path.join(homedir(), 'Library/Caches/ms-playwright');
  if (existsSync(cache)) {
    const dirs = readdirSync(cache).filter(name => /^chromium-\d+$/.test(name)).sort((a, b) => Number(b.split('-')[1]) - Number(a.split('-')[1]));
    for (const dir of dirs) {
      for (const relative of ['chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing', 'chrome-mac/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing', 'chrome-linux/chrome', 'chrome-linux64/chrome']) {
        const candidate = path.join(cache, dir, relative);
        if (existsSync(candidate)) return candidate;
      }
    }
  }
  throw new Error('No installed Chromium found. Set FLIGHT_QA_BROWSER to an existing browser executable.');
}

async function check(name, fn) {
  const started = Date.now();
  try {
    const details = await fn();
    report.checks.push({ name, status: 'passed', milliseconds: Date.now() - started, ...(details === undefined ? {} : { details }) });
    console.log(`PASS ${name}`);
    return true;
  } catch (error) {
    report.checks.push({ name, status: 'failed', milliseconds: Date.now() - started, error: error.stack || String(error) });
    console.error(`FAIL ${name}: ${error.message}`);
    return false;
  }
}

function observe(page, label) {
  page.setDefaultTimeout(15000);
  page.on('pageerror', error => report.pageErrors.push({ page: label, message: error.message }));
  page.on('console', message => {
    if (message.type() === 'error') report.consoleErrors.push({ page: label, message: message.text() });
  });
  page.on('requestfailed', request => report.failedRequests.push({ page: label, url: request.url(), error: request.failure()?.errorText, resource: request.resourceType() }));
  page.on('response', response => {
    if (response.status() >= 400) report.failedResponses.push({ page: label, url: response.url(), status: response.status(), resource: response.request().resourceType() });
  });
  page.on('dialog', dialog => dialog.dismiss());
}

const rootFor = page => page.locator('[data-game-root="passenger-flight"]');
const canvasFor = page => rootFor(page).locator('[data-game-canvas] canvas').first();
const button = (page, name) => rootFor(page).getByRole('button', { name: new RegExp(`^${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?:\\s|$)`) }).first();
async function shot(page, name, canvasOnly = false) {
  const filename = path.join(outDir, `${name}.png`);
  if (canvasOnly) {
    const clip = await canvasFor(page).boundingBox();
    assert(clip && clip.width > 0 && clip.height > 0, 'Cannot capture an invisible canvas');
    return page.screenshot({ path: filename, clip, animations: 'disabled', timeout: 15000 });
  }
  return rootFor(page).screenshot({ path: filename, animations: 'disabled', timeout: 15000 });
}
async function openGame(page) {
  const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  assert(response && response.ok(), `Game URL returned ${response?.status()}`);
  await rootFor(page).waitFor({ state: 'visible', timeout: 45000 });
  await button(page, 'Board flight').waitFor({ state: 'visible', timeout: 45000 });
}
async function board(page) {
  await button(page, 'Board flight').click();
  await button(page, 'Pause flight').waitFor({ state: 'visible', timeout: 45000 });
  await canvasFor(page).waitFor({ state: 'visible', timeout: 45000 });
  await page.waitForTimeout(1200);
  const box = await canvasFor(page).boundingBox();
  assert(box && box.width > 250 && box.height > 250, '3D canvas has no usable display area');
}
async function clocks(page) {
  const visible = await rootFor(page).innerText();
  return [...new Set([...visible.matchAll(/\b\d{1,2}:\d{2}\b/g)].map(match => match[0]))];
}
function difference(first, second) {
  const a = PNG.sync.read(first);
  const b = PNG.sync.read(second);
  assert.equal(a.width, b.width, 'Visual comparison widths differ');
  assert.equal(a.height, b.height, 'Visual comparison heights differ');
  let total = 0;
  let changed = 0;
  let sum = 0;
  let brightness = 0;
  // Exclude peripheral HUD/crosshair: inspect actual cabin geometry within the canvas.
  for (let y = Math.floor(a.height * 0.24); y < a.height * 0.84; y += 3) {
    for (let x = Math.floor(a.width * 0.12); x < a.width * 0.88; x += 3) {
      const index = (y * a.width + x) * 4;
      const delta = (Math.abs(a.data[index] - b.data[index]) + Math.abs(a.data[index + 1] - b.data[index + 1]) + Math.abs(a.data[index + 2] - b.data[index + 2])) / 3;
      if (delta > 18) changed += 1;
      sum += delta;
      brightness += (b.data[index] + b.data[index + 1] + b.data[index + 2]) / 3;
      total += 1;
    }
  }
  return { changedRatio: changed / total, meanDelta: sum / total, meanBrightness: brightness / total };
}
function validateMovement(label, idle, moved) {
  report.visualMeasurements.push({ label, idle, moved });
  assert(moved.meanBrightness > 8 && moved.meanBrightness < 249, 'Scene looks blank/black/white');
  assert(moved.changedRatio > 0.025 && moved.meanDelta > 2.5, `No substantial cabin change after input: ${JSON.stringify(moved)}`);
  assert(moved.meanDelta > idle.meanDelta * 1.1 + 0.5 || moved.changedRatio > idle.changedRatio + 0.035, `Input difference does not clearly exceed idle animation; inspect evidence: ${JSON.stringify({ idle, moved })}`);
}
async function keyboardMovement(page) {
  const before = await shot(page, 'desktop-idle-before', true);
  await page.waitForTimeout(650);
  const idleFrame = await shot(page, 'desktop-idle-after', true);
  await page.keyboard.down('w');
  await page.waitForTimeout(650);
  await page.keyboard.up('w');
  const moved = await shot(page, 'desktop-after-forward', true);
  const idle = difference(before, idleFrame);
  const forward = difference(idleFrame, moved);
  validateMovement('desktop WASD forward', idle, forward);
  return { idle, forward };
}

async function mobileMovement(context, page) {
  const joystick = button(page, 'Move through cabin');
  await joystick.waitFor({ state: 'visible', timeout: 10000 });
  const box = await joystick.boundingBox();
  assert(box, 'Touch joystick is not measurable');
  const before = await shot(page, 'mobile-idle-before', true);
  await page.waitForTimeout(700);
  const idleFrame = await shot(page, 'mobile-idle-after', true);
  const session = await context.newCDPSession(page);
  const point = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
  try {
    await session.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ ...point, id: 1, radiusX: 8, radiusY: 8, force: 1 }] });
    await session.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: point.x, y: point.y - Math.min(36, box.height * 0.36), id: 1, radiusX: 8, radiusY: 8, force: 1 }] });
    await page.waitForTimeout(700);
    await session.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  } finally { await session.detach(); }
  const moved = await shot(page, 'mobile-after-touch-forward', true);
  const idle = difference(before, idleFrame);
  const forward = difference(idleFrame, moved);
  validateMovement('mobile touch joystick forward', idle, forward);
  return { idle, forward };
}

try {
  report.browser = executable();
  browser = await chromium.launch({ headless: process.env.FLIGHT_QA_HEADED !== '1', executablePath: report.browser, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  const page = await desktop.newPage();
  observe(page, 'desktop');
  if (await check('Desktop departures menu loads', async () => { await openGame(page); await shot(page, 'desktop-menu'); })) {
    if (!onlyPause) await check('Chinese / English UI switch', async () => {
      await button(page, '中文').click();
      const chinese = await rootFor(page).innerText();
      assert((chinese.match(/[\u3400-\u9fff]/g) || []).length > 10, 'Switch did not produce translated Chinese UI');
      await shot(page, 'desktop-menu-zh');
      await button(page, 'EN').click();
      await button(page, 'Board flight').waitFor({ state: 'visible', timeout: 5000 });
    });
    const playing = await check('Boarding produces a visible playable 3D cabin', async () => { await board(page); await shot(page, 'desktop-start'); });
    if (playing) {
      if (!onlyPause) await check('W keyboard movement changes cabin beyond idle animation', () => keyboardMovement(page));
      await check('Pause freezes countdown, resume advances it', async () => {
        await button(page, 'Pause flight').click();
        await button(page, 'Resume flight').waitFor({ state: 'visible' });
        const frozen = await clocks(page);
        assert(frozen.length, 'No visible M:SS / MM:SS countdown found for pause verification');
        await page.waitForTimeout(1400);
        assert.deepEqual(await clocks(page), frozen, 'Clock advanced while paused');
        await shot(page, 'desktop-paused');
        await button(page, 'Resume flight').click();
        await button(page, 'Pause flight').waitFor({ state: 'visible' });
        const deadline = Date.now() + 15000;
        let resumed = await clocks(page);
        while (JSON.stringify(resumed) === JSON.stringify(frozen) && Date.now() < deadline) {
          await page.waitForTimeout(300);
          resumed = await clocks(page);
        }
        assert.notDeepEqual(resumed, frozen, 'Clock value did not advance within 15 seconds after resume');
        await shot(page, 'desktop-resumed');
        return { frozen, resumed };
      });
      if (!onlyPause) await check('Restart gives a fresh active flight', async () => {
        const previous = await clocks(page);
        await button(page, 'Pause flight').click();
        await button(page, 'Restart flight').click();
        await button(page, 'Pause flight').waitFor({ state: 'visible', timeout: 10000 });
        await page.waitForTimeout(350);
        const restarted = await clocks(page);
        assert(restarted.length, 'Restart has no visible flight timer');
        assert.notDeepEqual(restarted, previous, 'Restart did not reset elapsed/remaining flight time');
        await shot(page, 'desktop-restarted');
        return { previous, restarted };
      });
    }
  }
  await desktop.close();

  if (!onlyPause) {
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
  const phone = await mobile.newPage();
  observe(phone, 'mobile');
  if (await check('Mobile portrait departures menu fits', async () => {
    await openGame(phone);
    const size = await phone.evaluate(() => ({ width: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
    assert(size.scroll <= size.width + 2, `Horizontal page overflow: ${JSON.stringify(size)}`);
    await shot(phone, 'mobile-portrait-menu');
  })) {
    if (await check('Mobile cabin exposes usable touch controls', async () => {
      await board(phone);
      for (const name of ['Move through cabin', 'Interact', 'Drop held item']) {
        const control = button(phone, name);
        await control.waitFor({ state: 'visible', timeout: 10000 });
        const box = await control.boundingBox();
        assert(box && box.width >= 36 && box.height >= 36, `${name} is smaller than a usable touch target`);
      }
      await shot(phone, 'mobile-portrait-start');
    })) {
      await check('Mobile joystick moves cabin through real touch input', () => mobileMovement(mobile, phone));
      await check('Landscape resize preserves game and touch actions', async () => {
        await phone.setViewportSize({ width: 844, height: 390 });
        await phone.waitForTimeout(650);
        await shot(phone, 'mobile-landscape-start');
        const box = await canvasFor(phone).boundingBox();
        assert(box && box.width >= 700 && box.height >= 250, `Canvas failed to resize: ${JSON.stringify(box)}`);
        const interactBox = await button(phone, 'Interact').boundingBox();
        assert(interactBox && interactBox.y + interactBox.height <= 392, 'Interact control is outside landscape viewport');
        await button(phone, 'Pause flight').click();
        await button(phone, 'Resume flight').waitFor({ state: 'visible' });
        await button(phone, 'Resume flight').click();
        await button(phone, 'Interact').tap();
        // Empty hands intentionally disable Drop; the complete-flight pass verifies carrying/dropping.
        if (await button(phone, 'Drop held item').isEnabled()) await button(phone, 'Drop held item').tap();
      });
    }
  }
  await mobile.close();
  }
  await check('No uncaught runtime / rendering / local asset errors', async () => {
    assert.equal(report.pageErrors.length, 0, JSON.stringify(report.pageErrors));
    const localFailures = report.failedRequests.filter(item => item.url.startsWith(origin) && item.error !== 'net::ERR_ABORTED');
    assert.equal(localFailures.length, 0, JSON.stringify(localFailures));
    const localHttpFailures = report.failedResponses.filter(item => item.url.startsWith(origin));
    assert.equal(localHttpFailures.length, 0, JSON.stringify(localHttpFailures));
    const renderingErrors = report.consoleErrors.filter(item => /WebGL|THREE\.|hydration|uncaught|maximum update depth|cannot read propert/i.test(item.message));
    assert.equal(renderingErrors.length, 0, JSON.stringify(renderingErrors));
  });
} catch (error) {
  report.checks.push({ name: 'QA setup / browser launch', status: 'failed', error: error.stack || String(error) });
  console.error(error.message);
} finally {
  await browser?.close();
  report.finishedAt = new Date().toISOString();
  report.passed = report.checks.filter(item => item.status === 'passed').length;
  report.failed = report.checks.filter(item => item.status === 'failed').length;
  writeFileSync(path.join(outDir, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
  console.log(`\n${report.passed} passed; ${report.failed} failed. Evidence: ${outDir}`);
  process.exitCode = report.failed ? 1 : 0;
}
