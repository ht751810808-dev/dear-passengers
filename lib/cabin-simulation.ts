import { getFlightMission, getFlightDifficulty, missionDuration, type FlightDifficulty, type FlightStage, type FlightHazard } from './flight-missions';

export type FlightLocale = 'en' | 'zh';
export type FlightConfig = { route: number; upgradeHull: number; upgradeService: number; upgradeHandling: number; riskyCargo: boolean; mission?: number; difficulty?: FlightDifficulty; practice?: boolean; seed?:number };
export type FlightPhase = 'ready' | 'playing' | 'paused' | 'result';
export type FlightItem = 'coffee' | 'food' | 'extinguisher' | 'wrench' | 'suitcase' | null;
export type FlightSnapshot = {
  phase: FlightPhase; remaining: number; health: number; score: number; served: number; cargo: boolean; fire: boolean; door: boolean; landed: boolean;
  item: FlightItem; cups: number; prompt: string; target: string; announcement: string; turbulence: boolean; piloting: boolean; bank: number; approach: number;
  elapsed: number; airborneElapsed: number; won: boolean; fps: number; requiredServed: number; belts: number; requiredBelts: number; repaired: boolean; route: number;
  stage: FlightStage; pressure: number; fuel: number; satisfaction: number; targetDistance: number | null; interactionProgress: number; interactionLabel: string;
  stageProgress: number; activeHazards: FlightHazard[]; failReason: string; debrief: {service: number; safety: number; handling: number; time: number};
  altitude: number; speed: number; pitch: number; throttle: number; verticalSpeed: number; heading: number; runwayOffset: number; flightProgress: number;
  actionHint: string; foodServed: number; requiredFood: number; grabbed: string | null; autopilot: boolean; fireIntensity: number; weather: string; cargoIntegrity: number;
};
export const SEATS = [0, 3, 6, 1, 5, 2, 7, 4];
export const initialFlight = (): FlightSnapshot => ({phase:'ready',remaining:300,health:100,score:0,served:0,cargo:false,fire:false,door:false,landed:false,item:null,cups:0,prompt:'',target:'',announcement:'welcome',turbulence:false,piloting:false,bank:0,approach:0,elapsed:0,airborneElapsed:0,won:false,fps:60,requiredServed:3,belts:0,requiredBelts:3,repaired:false,route:0,stage:'boarding',pressure:100,fuel:100,satisfaction:100,targetDistance:null,interactionProgress:0,interactionLabel:'',stageProgress:0,activeHazards:[],failReason:'',debrief:{service:0,safety:0,handling:0,time:0},altitude:0,speed:0,pitch:0,throttle:.85,verticalSpeed:0,heading:0,runwayOffset:0,flightProgress:0,actionHint:'boarding',foodServed:0,requiredFood:0,grabbed:null,autopilot:true,fireIntensity:0,weather:'clear',cargoIntegrity:100});
export const INITIAL_FLIGHT = initialFlight();
const clamp = (n:number,min:number,max:number) => Math.max(min,Math.min(max,n));
export type FlightControls = {roll:number; pitch:number; throttle:number};
const EMPTY_CONTROLS:FlightControls = {roll:0,pitch:0,throttle:0};

/** Deterministic flight rules, independent of rendering, audio, frame rate and input devices. */
export class FlightSimulation {
  state = initialFlight();
  config:FlightConfig = {route:0,upgradeHull:0,upgradeService:0,upgradeHandling:0,riskyCargo:false,mission:0,difficulty:'standard'};
  beltedIds = new Set<number>(); servedIds = new Set<number>(); fedIds = new Set<number>();
  private triggered = new Set<FlightHazard>();
  private hazardTimes:Partial<Record<FlightHazard,number>>={};
  private approachTime = 0; private approachAltitude = 1200; private roughSeconds = 0; private manualSeconds = 0;
  get mission(){return getFlightMission(this.config.mission ?? this.config.route*2);}
  get duration(){return missionDuration(this.mission,this.config.difficulty ?? 'standard');}
  get difficulty(){return getFlightDifficulty(this.config.difficulty ?? 'standard');}
  start(config:FlightConfig){
    this.config={...config,route:clamp(config.route,0,2),upgradeHull:clamp(config.upgradeHull,0,3),upgradeService:clamp(config.upgradeService,0,3),upgradeHandling:clamp(config.upgradeHandling,0,3)};
    this.state=initialFlight();const s=this.state,m=this.mission;
    s.phase='playing';s.route=m.route;s.remaining=this.duration;s.requiredBelts=s.requiredServed=m.passengers;s.requiredFood=m.id>=2?2:0;s.weather=m.weather;
    s.cargo=m.hazards.cargo===null;s.fire=m.hazards.fire===null;s.door=m.hazards.door===null;s.repaired=m.hazards.repair===null;
    let seed=(config.seed??Math.floor(Math.random()*2147483647))>>>0;this.hazardTimes={};
    for(const hazard of ['cargo','fire','door','repair'] as const){seed=(Math.imul(seed,1664525)+1013904223)>>>0;const nominal=m.hazards[hazard];if(nominal!==null)this.hazardTimes[hazard]=Math.max(15,nominal+(seed/4294967296-.5)*14);}
    s.announcement='boarding';this.beltedIds.clear();this.servedIds.clear();this.fedIds.clear();this.triggered.clear();this.approachTime=this.roughSeconds=this.manualSeconds=0;
  }
  cabinComplete(){const s=this.state;return s.belts>=s.requiredBelts&&s.served>=s.requiredServed&&s.foodServed>=s.requiredFood&&s.cargo&&s.fire&&s.door&&s.repaired;}
  isActive(hazard:FlightHazard){return (this.triggered.has(hazard)||this.state.activeHazards.includes(hazard))&&!(hazard==='repair'?this.state.repaired:this.state[hazard]);}
  enterCockpit(){const s=this.state;if(s.phase!=='playing')return;s.piloting=true;if(s.stage==='boarding'){s.stage='takeoff';s.announcement='takeoff';s.throttle=.95;}this.updateHint();}
  leaveCockpit(){this.state.piloting=false;this.state.autopilot=true;this.state.announcement='autopilot';}
  toggleAutopilot(){if(this.state.phase==='playing'&&this.state.piloting){this.state.autopilot=!this.state.autopilot;this.state.announcement=this.state.autopilot?'autopilot':'manualFlight';}}
  adjustThrottle(delta:number){this.state.throttle=clamp(this.state.throttle+delta,.05,1);}
  completeAction(id:string):boolean{
    const s=this.state;if(s.phase!=='playing')return false;
    if(id.startsWith('pax-')){
      const n=Number(id.slice(4));if(!SEATS.slice(0,s.requiredServed).includes(n))return false;
      if(!this.beltedIds.has(n)){this.beltedIds.add(n);s.belts++;s.score+=75;s.announcement=s.belts===s.requiredBelts?'beltsDone':'seatbelt';return true;}
      if(!this.servedIds.has(n)&&s.item==='coffee'&&s.cups>0){this.servedIds.add(n);s.served++;s.cups--;s.score+=150;s.satisfaction=clamp(s.satisfaction+3,0,100);s.announcement=s.served===s.requiredServed?'serviceDone':'coffeeDelivered';return true;}
      if(this.servedIds.has(n)&&!this.fedIds.has(n)&&SEATS.slice(0,s.requiredFood).includes(n)&&s.item==='food'&&s.cups>0){this.fedIds.add(n);s.foodServed++;s.cups--;s.score+=180;s.satisfaction=clamp(s.satisfaction+5,0,100);s.announcement='foodDelivered';return true;}
      return false;
    }
    if(!(['cargo','fire','door','repair'] as string[]).includes(id)||!this.isActive(id as FlightHazard))return false;
    if(id==='fire'&&s.item!=='extinguisher'||id==='repair'&&s.item!=='wrench')return false;
    if(id==='repair')s.repaired=true;else s[id as 'cargo'|'fire'|'door']=true;
    if(id==='fire')s.fireIntensity=0;s.score+=id==='fire'||id==='repair'?250:200;s.announcement=`${id}Done`;return true;
  }
  collision(energy:number){if(this.state.phase!=='playing'||energy<1)return;this.state.satisfaction=clamp(this.state.satisfaction-energy*.15,0,100);if(!this.state.cargo)this.state.cargoIntegrity=clamp(this.state.cargoIntegrity-energy*.15,0,100);}
  private updateHint(){const s=this.state;
    s.actionHint=s.stage==='boarding'?'boarding':s.stage==='takeoff'?'takeoff':s.activeHazards.includes('fire')?'fire':s.activeHazards.includes('door')?'door':s.activeHazards.includes('repair')?'repair':s.activeHazards.includes('cargo')?'cargo':s.belts<s.requiredBelts?'belts':s.served<s.requiredServed?'coffee':s.foodServed<s.requiredFood?'food':s.flightProgress>=.75&&!s.piloting?'returnCockpit':s.stage==='approach'?'landing':'cruise';
  }
  update(dt:number,controls=EMPTY_CONTROLS){
    const s=this.state;if(s.phase!=='playing'||!Number.isFinite(dt)||dt<=0)return;
    // Bounded substeps preserve physical behaviour after slow frames and in replay tests.
    if(dt>.05){let left=Math.min(dt,.5);while(left>0){const step=Math.min(.05,left);this.update(step,controls);left-=step;}return;}
    s.elapsed+=dt;s.remaining=Math.max(0,this.duration-s.elapsed);
    const airborne=s.stage!=='boarding';if(airborne)s.airborneElapsed+=dt;
    const wind=(s.weather==='storm'?1:s.weather==='crosswind'?.65:s.weather==='night'?.4:.25);
    const cycle=s.airborneElapsed%(27-wind*7);
    s.turbulence=airborne&&s.altitude>80&&cycle>15-wind*5&&cycle<22-wind*3;
    const turbulence=s.turbulence?wind:0;
    for(const hazard of ['cargo','fire','door','repair'] as const){const at=this.hazardTimes[hazard];if(airborne&&at!==undefined&&s.airborneElapsed>=at&&!this.triggered.has(hazard)){this.triggered.add(hazard);s.announcement=hazard;if(hazard==='fire')s.fireIntensity=.3;}}
    s.activeHazards=(['cargo','fire','door','repair'] as const).filter(h=>this.isActive(h));
    if(this.isActive('fire'))s.fireIntensity=clamp(s.fireIntensity+dt*(.0035+(this.config.riskyCargo?.002:0)),0,1);
    s.pressure=clamp(s.pressure+(this.isActive('door')?-(s.altitude>80?.55:.2):.9)*dt,0,100);
    const damage=(this.isActive('fire')?s.fireIntensity*.45:0)+(this.isActive('repair')?.1:0)+(s.pressure<40?.45:0)+(this.isActive('cargo')&&s.turbulence?.18:0);
    s.health=clamp(s.health-damage*dt*this.difficulty.damageMultiplier*(1-this.config.upgradeHull*.16)*(this.config.riskyCargo?1.15:1),0,100);
    s.fuel=clamp(s.fuel-(airborne?.09+s.throttle*.05:0)*dt,0,100);
    s.satisfaction=clamp(s.satisfaction-dt*((s.airborneElapsed>90?(s.requiredServed-s.served)*.012:0)+(s.turbulence?(s.requiredBelts-s.belts)*.06:0)+(s.pressure<70?.045:0)),0,100);
    if(s.turbulence||Math.abs(s.bank)>15)this.roughSeconds+=dt;
    if(airborne){
      const oldAltitude=s.altitude;
      if(s.autopilot){
        s.bank+=(Math.sin(s.airborneElapsed*.8)*turbulence*3-s.bank)*Math.min(1,dt*2);
        s.runwayOffset*=Math.exp(-dt*.65);s.heading*=Math.exp(-dt*.5);
        if(s.stage==='takeoff'){
          s.throttle=.95;s.speed=Math.min(185,s.speed+dt*11);
          s.pitch=s.speed>130?9:0;if(s.speed>130)s.altitude+=dt*24;
        }else if(s.stage==='cruise'){
          s.throttle=.68;s.speed+=(215-s.speed)*dt*.3;const target=1200+s.route*350;s.altitude+=(target-s.altitude)*dt*.07;s.pitch=clamp((target-s.altitude)/150,0,7);
        }else if(s.stage==='approach'){
          this.approachTime+=dt;const p=clamp(this.approachTime/48,0,1);s.approach=p*10;s.throttle=.36;s.altitude=this.approachAltitude*Math.pow(1-p,1.7);s.speed=155-p*37;s.pitch=-3+p*6;s.stageProgress=p;s.flightProgress=.75+p*.25;
        }
      }else{
        this.manualSeconds+=dt;this.adjustThrottle(controls.throttle*dt*.22);
        s.bank=clamp(s.bank+(controls.roll*27+Math.sin(s.airborneElapsed*2)*turbulence*5*(1-this.config.upgradeHandling*.22)-s.bank*(.08+this.config.upgradeHandling*.04))*dt,-55,55);
        s.pitch=clamp(s.pitch+(controls.pitch*11-s.pitch*.12)*dt,-18,22);
        const targetSpeed=70+s.throttle*170-Math.max(0,s.pitch)*1.7;
        s.speed=clamp(s.speed+(targetSpeed-s.speed)*dt*.2,0,270);
        const lift=s.speed>105?Math.sin(s.pitch*Math.PI/180)*s.speed*.514:-(105-s.speed)*.25;
        s.altitude=Math.max(0,s.altitude+lift*dt);s.heading+=Math.sin(s.bank*Math.PI/180)*dt*7;
        s.runwayOffset+=Math.sin(s.heading*Math.PI/180)*s.speed*.514*dt;
        if(s.stage==='approach'){this.approachTime+=dt;const p=clamp(this.approachTime/48,0,1);s.approach=p*10;s.stageProgress=p;s.flightProgress=.75+p*.25;}
        if(s.speed<100&&s.altitude>20){s.health=Math.max(0,s.health-dt*1.5);s.announcement='stall';}
      }
      s.verticalSpeed=(s.altitude-oldAltitude)/dt;
      if(s.stage==='takeoff'&&s.altitude>=350){s.stage='cruise';s.announcement='cruise';s.stageProgress=0;}
      if(s.stage==='takeoff')s.stageProgress=clamp(s.altitude/350,0,1);
      if(s.stage==='cruise'){
        const lastHazard=Math.max(60,...Object.values(this.hazardTimes).filter((n):n is number=>typeof n==='number'));
        s.flightProgress=Math.min(.75,s.flightProgress+dt*.75/(lastHazard+22));s.stageProgress=s.flightProgress/.75;
        if(s.flightProgress>=.75&&this.cabinComplete()&&s.piloting){s.stage='approach';s.announcement='approach';this.approachTime=0;this.approachAltitude=Math.max(100,s.altitude);s.stageProgress=0;}
      }
      if(s.stage==='approach'&&this.approachTime>=5&&s.altitude<=1){
        if(Math.abs(s.bank)>10||Math.abs(s.runwayOffset)>30||s.speed>170||s.speed<90||s.verticalSpeed< -12){s.health=Math.max(0,s.health-35);if(s.health<=0)this.finish(false,'hardLanding');else{this.goAround();}}
        else this.finish(true);
      }
      if(!s.autopilot&&s.stage==='cruise'&&s.altitude<=0)this.finish(false,'terrain');
      if(s.stage==='approach'&&this.approachTime>70)this.goAround();
    }
    this.updateHint();
    if(s.phase==='playing'&&(s.health<=0||s.remaining<=0||s.fuel<=0))this.finish(false,s.health<=0?'aircraft':s.fuel<=0?'fuel':'timeout');
  }
  private goAround(){const s=this.state;s.stage='cruise';s.altitude=Math.max(180,s.altitude);s.autopilot=true;s.flightProgress=.70;s.announcement='goAround';s.approach=0;this.approachTime=0;}
  finish(won:boolean,reason=''){
    const s=this.state;if(s.phase==='result')return;s.phase='result';s.won=won;s.landed=won;s.failReason=reason;s.interactionProgress=0;s.interactionLabel='';if(won){s.stage='landed';s.flightProgress=s.stageProgress=1;s.altitude=0;s.speed=0;s.score+=500+Math.round(s.health*5)+Math.round(s.remaining*2)+Math.round(Math.min(this.manualSeconds,60)*3);}
    s.debrief={service:Math.round((s.served+s.foodServed)/(s.requiredServed+s.requiredFood)*s.satisfaction),safety:Math.round((s.health+s.cargoIntegrity+s.belts/s.requiredBelts*100)/3),handling:Math.round(clamp(100-this.roughSeconds*.3-Math.abs(s.runwayOffset)*.2,0,100)),time:Math.round(clamp(s.remaining/this.duration*150+50,0,100))};
  }
}
