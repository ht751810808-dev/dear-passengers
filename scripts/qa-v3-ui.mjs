import assert from 'node:assert/strict';
import {mkdirSync,writeFileSync} from 'node:fs';
import path from 'node:path';
import {chromium,launchOptions} from './flight-qa-runtime.mjs';
const out=process.env.FLIGHT_UI_OUTPUT||'/private/tmp/dear-passengers-v3-ui';mkdirSync(out,{recursive:true});
const browser=await chromium.launch(launchOptions),page=await browser.newPage({viewport:{width:1440,height:900}});const errors=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));
async function check(name,run){await run();checks.push(name);console.log('PASS',name);}
try{
await page.goto(process.env.FLIGHT_UI_URL||'http://127.0.0.1:3011/play/cabin-crisis/',{waitUntil:'domcontentloaded'});
const board=page.getByRole('button',{name:/Board flight/});await board.waitFor({timeout:60000});await page.waitForFunction(()=>!Array.from(document.querySelectorAll('button')).find(b=>b.textContent.includes('Board flight'))?.disabled,{timeout:60000});
await check('Flight starts through public UI',async()=>{await board.click();await page.getByRole('button',{name:'Pause flight',exact:true}).waitFor();});
await page.screenshot({path:path.join(out,'desktop.png')});
await check('V hides interface without pausing flight',async()=>{await page.keyboard.press('v');await page.getByRole('button',{name:'Show interface · V',exact:true}).waitFor();assert.equal(await page.getByRole('button',{name:'Pause flight',exact:true}).isVisible(),false);});
await page.screenshot({path:path.join(out,'clean-view.png')});
await check('V restores normal interface',async()=>{await page.keyboard.press('v');await page.getByRole('button',{name:'Pause flight',exact:true}).waitFor();});
await check('Pause remains reachable from clean view',async()=>{await page.keyboard.press('v');await page.keyboard.press('p');await page.getByRole('dialog').waitFor();await page.getByRole('button',{name:/Resume flight/}).click();await page.getByRole('button',{name:'Show interface · V',exact:true}).waitFor();await page.getByRole('button',{name:'Show interface · V',exact:true}).click();});
await check('390px and 844px viewports have no horizontal overflow',async()=>{for(const size of [{width:390,height:844},{width:844,height:390}]){await page.setViewportSize(size);await page.waitForTimeout(350);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);const buttons=await page.locator('header button:visible').evaluateAll(nodes=>nodes.map(n=>({text:n.getAttribute('aria-label'),right:n.getBoundingClientRect().right,left:n.getBoundingClientRect().left})));assert(buttons.every(b=>b.left>=0&&b.right<=size.width+1),JSON.stringify(buttons));await page.screenshot({path:path.join(out,`mobile-${size.width}.png`)});}});
await check('No uncaught browser errors',async()=>assert.deepEqual(errors,[]));
}finally{writeFileSync(path.join(out,'report.json'),JSON.stringify({checks,errors},null,2));await browser.close();}
