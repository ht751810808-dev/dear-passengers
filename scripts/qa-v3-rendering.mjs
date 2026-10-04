import assert from 'node:assert/strict';
import {writeFileSync,mkdirSync} from 'node:fs';
import {chromium,launchOptions} from './flight-qa-runtime.mjs';
const out=process.env.FLIGHT_RENDER_OUTPUT||'/private/tmp/dear-passengers-v3-rendering';mkdirSync(out,{recursive:true});
const browser=await chromium.launch(launchOptions),page=await browser.newPage({viewport:{width:1280,height:800}});const errors=[],report=[];
page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error'&&/THREE|WebGL|shader|framebuffer/i.test(m.text()))errors.push(m.text());});
async function sample(label){
const result=await page.evaluate(async()=>{
 const samples=[];let previous=performance.now();for(let i=0;i<90;i++){await new Promise(requestAnimationFrame);const now=performance.now();if(i>20)samples.push(now-previous);previous=now;}samples.sort((a,b)=>a-b);
 return {medianFrameMs:samples[Math.floor(samples.length*.5)],p95FrameMs:samples[Math.floor(samples.length*.95)],calls:window.game.renderer.info.render.calls,triangles:window.game.renderer.info.render.triangles,phase:window.game.state.phase};
});assert.equal(result.phase,'playing');assert(result.calls>0&&result.triangles>0);report.push({label,...result});console.log(label,result);}
try{
await page.goto('http://127.0.0.1:8898');await page.waitForFunction(()=>window.game);await page.evaluate(()=>window.game.start({mission:3,route:1,difficulty:'training',practice:true,upgradeHull:0,upgradeService:0,upgradeHandling:0,riskyCargo:true}));
await sample('HQ playing');await page.evaluate(()=>window.game.quality());await sample('LQ playing');await page.evaluate(()=>window.game.quality());await page.setViewportSize({width:844,height:390});await sample('HQ after resize');
await page.evaluate(()=>{window.game.dispose();window.game=new Flight.CabinEngine(document.querySelector('#game'),s=>window.flight=s);window.game.start({mission:0,route:0,difficulty:'training',practice:true,upgradeHull:0,upgradeService:0,upgradeHandling:0,riskyCargo:false});});await sample('HQ after dispose/recreate');
assert.deepEqual(errors,[]);
}finally{writeFileSync(`${out}/report.json`,JSON.stringify({errors,samples:report,note:'Headless Chromium on the current Mac, Metal, DPR 1. These results do not measure physical phone hardware.'},null,2));await browser.close();}
