import assert from 'node:assert/strict';
import {FlightSimulation,SEATS} from '../lib/cabin-simulation';
import {FLIGHT_MISSIONS,FLIGHT_DIFFICULTIES} from '../lib/flight-missions';
let checks=0;
function check(name:string,fn:()=>void){fn();checks++;console.log(`PASS ${name}`);}
function basic(mission=0,difficulty:'training'|'standard'|'expert'='standard'){
  const sim=new FlightSimulation();sim.start({mission,route:FLIGHT_MISSIONS[mission].route,difficulty,upgradeHandling:0,upgradeHull:0,upgradeService:0,riskyCargo:false});return sim;
}
function serve(sim:FlightSimulation){
  const s=sim.state;for(const n of SEATS.slice(0,s.requiredServed)){sim.completeAction(`pax-${n}`);s.item='coffee';s.cups=5;sim.completeAction(`pax-${n}`);}
  for(const n of SEATS.slice(0,s.requiredFood)){s.item='food';s.cups=2;sim.completeAction(`pax-${n}`);}
}
for(const mission of FLIGHT_MISSIONS)for(const difficulty of FLIGHT_DIFFICULTIES)check(`${mission.flight} ${difficulty.id}: takeoff → cruise → approach → safe landing`,()=>{
  const sim=basic(mission.id,difficulty.id),stages=new Set<string>();serve(sim);sim.enterCockpit();
  for(let i=0;i<14000&&sim.state.phase==='playing';i++){
    for(const hazard of sim.state.activeHazards){sim.state.item=hazard==='fire'?'extinguisher':hazard==='repair'?'wrench':null;sim.completeAction(hazard);}
    sim.update(.05);stages.add(sim.state.stage);
  }
  assert.equal(sim.state.won,true,JSON.stringify(sim.state));assert.equal(sim.state.altitude,0);assert.equal(sim.state.foodServed,sim.state.requiredFood);assert(sim.state.remaining>0);assert.deepEqual(Array.from(stages),['takeoff','cruise','approach','landed']);
  const score=sim.state.score;sim.finish(true);sim.update(.5);assert.equal(sim.state.score,score,'Settlement must not repeat');
});
check('Seatbelts / drinks / meals require correct tool and never double count',()=>{
  const sim=basic(2),s=sim.state;assert(sim.completeAction('pax-0'));assert(!sim.completeAction('pax-0'));s.item='food';s.cups=2;assert(!sim.completeAction('pax-0'));s.item='coffee';assert(sim.completeAction('pax-0'));assert(!sim.completeAction('pax-0'));s.item='food';assert(sim.completeAction('pax-0'));assert(!sim.completeAction('pax-0'));assert.equal(s.belts,1);assert.equal(s.served,1);assert.equal(s.foodServed,1);
});
check('Boarding timeout cannot award a safe landing',()=>{const sim=basic();for(let i=0;i<700;i++)sim.update(.5);assert.equal(sim.state.phase,'result');assert.equal(sim.state.won,false);assert.equal(sim.state.failReason,'timeout');});
check('Hazards begin after takeoff; pressure changes and recovers',()=>{
  const sim=basic(3);for(let i=0;i<200;i++)sim.update(.5);assert.equal(sim.state.activeHazards.length,0);assert.equal(sim.state.airborneElapsed,0);sim.enterCockpit();for(let i=0;i<210;i++)sim.update(.5);assert(sim.isActive('door'));const pressure=sim.state.pressure;assert(pressure<100);assert(!sim.completeAction('fire'),'Wrong tool should not extinguish');assert(sim.completeAction('door'));for(let i=0;i<10;i++)sim.update(.5);assert(sim.state.pressure>pressure);
});
check('Pause freezes flight, weather, damage and fuel',()=>{const sim=basic(5);sim.enterCockpit();for(let i=0;i<200;i++)sim.update(.5);sim.state.phase='paused';const before=JSON.stringify(sim.state);sim.update(.5);assert.equal(JSON.stringify(sim.state),before);});
check('Manual roll/pitch/throttle affect real flight parameters; leaving engages autopilot',()=>{
  const sim=basic(2);sim.enterCockpit();for(let i=0;i<80;i++)sim.update(.5);sim.toggleAutopilot();const old={...sim.state};for(let i=0;i<80;i++)sim.update(.05,{roll:.7,pitch:.4,throttle:-1});assert(sim.state.bank>old.bank+10);assert(sim.state.pitch>old.pitch);assert(sim.state.throttle<old.throttle);assert.notEqual(sim.state.runwayOffset,old.runwayOffset);sim.leaveCockpit();assert.equal(sim.state.autopilot,true);assert.equal(sim.state.piloting,false);
});
check('Scene completion cannot skip upcoming scheduled safety checks',()=>{const sim=basic(5);serve(sim);assert(!sim.cabinComplete());assert.equal(sim.completeAction('fire'),false);});
check('Replaying resets passenger state, hazards, timers and results',()=>{const sim=basic(3);serve(sim);sim.enterCockpit();sim.update(.5);sim.start({...sim.config});assert.equal(sim.state.stage,'boarding');assert.equal(sim.state.served,0);assert.equal(sim.state.belts,0);assert.equal(sim.state.airborneElapsed,0);assert.equal(sim.state.health,100);assert.equal(sim.beltedIds.size,0);});
console.log(`${checks} simulation checks passed`);
