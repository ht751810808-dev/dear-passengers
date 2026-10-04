import {mkdirSync,writeFileSync} from 'node:fs';
import path from 'node:path';
import {chromium,launchOptions} from './flight-qa-runtime.mjs';
const out=process.env.FLIGHT_VISUAL_OUTPUT||'/private/tmp/dear-passengers-v3-visuals';mkdirSync(out,{recursive:true});
const browser=await chromium.launch(launchOptions),page=await browser.newPage({viewport:{width:1600,height:900},deviceScaleFactor:1});
const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error'&&/THREE|WebGL|shader|framebuffer/i.test(m.text()))errors.push(m.text());});const shots=[];
try{
await page.goto(process.env.FLIGHT_VISUAL_URL||'http://127.0.0.1:8898');await page.waitForFunction(()=>window.game);await page.locator('#hud').evaluate(element=>element.style.display='none');
for(const scenario of [
  {name:'day-aisle',route:0,camera:[0,1.68,8.6],look:[0,1.65,-4],item:null},
  {name:'passenger-coffee',route:0,camera:[.05,1.72,3.0],look:[1.83,1.65,1.0],item:'coffee'},
  {name:'meal-service',route:0,camera:[-.15,1.72,2.6],look:[1.83,1.65,1],item:'food'},
  {name:'cockpit',route:0,camera:[0,1.98,-11.15],look:[0,1.9,-16],item:null,piloting:true},
  {name:'storm-fire',route:1,camera:[0,1.72,-2.3],look:[-1.7,1.60,-5.8],item:'extinguisher',fire:true},
  {name:'night-cabin',route:2,camera:[0,1.68,7.7],look:[0,1.6,-5],item:null}
]){
await page.evaluate(s=>{
  const g=window.game;g.start({mission:0,route:s.route,difficulty:'training',practice:true,upgradeHull:0,upgradeService:0,upgradeHandling:0,riskyCargo:false});
  g.position.fromArray(s.camera);const d=g.position.clone().fromArray(s.look).sub(g.position);g.yaw=Math.atan2(-d.x,-d.z);g.pitch=Math.atan2(d.y,Math.hypot(d.x,d.z));
  g.state.stage='cruise';g.state.altitude=1200;g.state.speed=210;g.state.weather=s.route===1?'storm':s.route===2?'night':'clear';g.state.piloting=Boolean(s.piloting);g.state.elapsed=18;g.state.satisfaction=s.fire?25:100;g.setItem(s.item);g.state.cups=3;
  g.world.setRoute(s.route);if(s.fire){g.state.fireIntensity=.8;g.simulation.state.fire=true;}
},scenario);
await page.waitForTimeout(1000);
await page.evaluate(s=>{const g=window.game;g.pause();g.world.fire.visible=Boolean(s.fire);g.world.setFlightState({stage:'cruise',altitude:1200,speed:210,weather:s.route===1?'storm':s.route===2?'night':'clear',fireIntensity:s.fire?.8:0});g.world.update(18.7,s.fire?.3:0);for(const p of g.world.passengers)p.bubble.visible=false;},scenario);
await page.waitForTimeout(500);
const info=await page.evaluate(()=>({drawCalls:window.game.renderer.info.render.calls,triangles:window.game.renderer.info.render.triangles,fps:window.game.state.fps}));
await page.screenshot({path:path.join(out,`${scenario.name}.png`)});shots.push({...scenario,...info});console.log(scenario.name,info);
}
await page.setViewportSize({width:390,height:844});await page.evaluate(()=>{window.game.setItem('coffee');window.game.resume();});await page.waitForTimeout(600);await page.evaluate(()=>window.game.pause());await page.screenshot({path:path.join(out,'portrait.png')});
writeFileSync(path.join(out,'report.json'),JSON.stringify({errors,shots,viewport:'1600x900 / DPR 1',note:'Scene samples use the separate local fixture to select camera and flight conditions. Gameplay validation runs separately.'},null,2));
}finally{await browser.close();}if(errors.length){console.error(errors);process.exitCode=1;}
