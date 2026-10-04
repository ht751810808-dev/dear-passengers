import * as THREE from 'three';
import { buildCabin, makeHeldItem } from './cabin-scene';

export type FlightLocale = 'en' | 'zh';
export type FlightConfig = {route:number; upgradeHull:number; upgradeService:number; upgradeHandling:number; riskyCargo:boolean};
export type FlightPhase = 'ready' | 'playing' | 'paused' | 'result';
export type FlightItem = 'coffee' | 'extinguisher' | 'wrench' | null;
export type FlightSnapshot = {
  phase: FlightPhase; remaining: number; health: number; score: number; served: number;
  cargo: boolean; fire: boolean; door: boolean; landed: boolean;
  item: FlightItem; cups: number; prompt: string; target: string; announcement: string;
  turbulence: boolean; piloting: boolean; bank: number; approach: number;
  elapsed: number; won: boolean; fps: number; requiredServed:number; belts:number; requiredBelts:number; repaired:boolean; route:number;
};
const initial = (): FlightSnapshot => ({phase:'ready',remaining:240,health:100,score:0,served:0,cargo:false,fire:false,door:false,landed:false,item:null,cups:0,prompt:'',target:'',announcement:'welcome',turbulence:false,piloting:false,bank:0,approach:0,elapsed:0,won:false,fps:60,requiredServed:3,belts:0,requiredBelts:3,repaired:false,route:0});
export const INITIAL_FLIGHT = initial();
const clamp = THREE.MathUtils.clamp;
function releaseObject(object:THREE.Object3D){object.traverse(node=>{if(node instanceof THREE.Mesh||node instanceof THREE.Points||node instanceof THREE.Sprite){if('geometry' in node)node.geometry.dispose();const materials=Array.isArray(node.material)?node.material:[node.material];materials.forEach(material=>{const texture=(material as THREE.MeshStandardMaterial).map;texture?.dispose();material.dispose();});}});}
const SEATS = [0,3,6,1,5];

class CabinAudio {
  ctx: AudioContext | null = null; volume: GainNode | null = null; muted = false;
  start() {
    if (!this.ctx) {
      this.ctx = new AudioContext(); this.volume = this.ctx.createGain(); this.volume.gain.value=this.muted?0:.035; this.volume.connect(this.ctx.destination);
      [52, 104, 107].forEach(f=>{const o=this.ctx!.createOscillator();o.type='sine';o.frequency.value=f;o.connect(this.volume!);o.start();});
    }
    void this.ctx.resume().catch(()=>{});
  }
  tone(type:'good'|'alert'|'pick') {
    if(!this.ctx || this.muted || this.ctx.state!=='running')return;
    const o=this.ctx.createOscillator(),g=this.ctx.createGain(),t=this.ctx.currentTime;
    o.type='sine';o.frequency.setValueAtTime(type==='alert'?240:600,t);o.frequency.exponentialRampToValueAtTime(type==='good'?1000:type==='pick'?760:150,t+.2);
    g.gain.setValueAtTime(.055,t);g.gain.exponentialRampToValueAtTime(.001,t+.3);o.connect(g);g.connect(this.ctx.destination);o.start();o.stop(t+.32);
  }
  pause(){void this.ctx?.suspend().catch(()=>{});}
  mute(){this.muted=!this.muted;if(this.volume)this.volume.gain.value=this.muted?0:.035;return this.muted;}
  dispose(){void this.ctx?.close().catch(()=>{});}
}

export class CabinEngine {
  private renderer:THREE.WebGLRenderer; private scene=new THREE.Scene(); private camera=new THREE.PerspectiveCamera(72,1,.08,180);
  private world:ReturnType<typeof buildCabin>; private state=initial(); private keys=new Set<string>();
  private yaw=0; private pitch=0; private raf=0; private last=0; private sinceUI=0; private renderTime=0;
  private position=new THREE.Vector3(0,1.65,9.7); private velocity=new THREE.Vector3(); private held:THREE.Group|null=null;
  private config:FlightConfig={route:0,upgradeHull:0,upgradeService:0,upgradeHandling:0,riskyCargo:false}; private beltedIds=new Set<number>();
  private targets: Array<{id:string;pos:THREE.Vector3;label:()=>string;available:()=>boolean}> = [];
  private selected=''; private servedIds=new Set<number>(); private audio=new CabinAudio(); private dragged=false;
  private lookPointer:number|null=null; private pointerStart={x:0,y:0}; private moveInput={x:0,y:0}; private observer:ResizeObserver;
  private disposed=false; private sprayTime=0; private throwObjects:Array<{mesh:THREE.Group;v:THREE.Vector3;life:number}>=[];
  private spray:THREE.Points; private lowQuality=false; private resetDoor=0;

  constructor(private host:HTMLElement, private onUpdate:(state:FlightSnapshot)=>void, private locale:FlightLocale='en') {
    this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.6));
    this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.16;
    this.renderer.domElement.setAttribute('aria-label','Interactive 3D aircraft cabin');this.renderer.domElement.tabIndex=0;
    this.host.appendChild(this.renderer.domElement); this.scene.background=new THREE.Color('#90c9ef');this.scene.fog=new THREE.Fog('#c4d5dc',25,95);
    this.world=buildCabin(this.scene);this.scene.add(this.camera);this.camera.rotation.order='YXZ';
    const particles=new Float32Array(180*3);for(let i=0;i<particles.length;i++) particles[i]=(Math.random()-.5);
    const sg=new THREE.BufferGeometry();sg.setAttribute('position',new THREE.BufferAttribute(particles,3));
    const mist=document.createElement('canvas');mist.width=mist.height=32;const mistContext=mist.getContext('2d')!;const gradient=mistContext.createRadialGradient(16,16,0,16,16,16);gradient.addColorStop(0,'rgba(255,255,255,.8)');gradient.addColorStop(.45,'rgba(255,255,255,.35)');gradient.addColorStop(1,'rgba(255,255,255,0)');mistContext.fillStyle=gradient;mistContext.fillRect(0,0,32,32);
    this.spray=new THREE.Points(sg,new THREE.PointsMaterial({color:0xf6ffff,map:new THREE.CanvasTexture(mist),size:.15,transparent:true,opacity:.7,depthWrite:false}));this.spray.visible=false;this.camera.add(this.spray);this.spray.position.set(.15,-.15,-1.3);this.spray.scale.set(1.3,1.3,2);
    const tr=(en:string,zh:string)=>this.locale==='zh'?zh:en;
    this.targets=[
      {id:'galley',pos:new THREE.Vector3(-.65,1,11.3),label:()=>tr('Pick up coffee · 3 cups','取咖啡 · 3 杯'),available:()=>true},
      {id:'extinguisher',pos:new THREE.Vector3(1.3,1,10),label:()=>tr('Take fire extinguisher','拿取灭火器'),available:()=>true},
      {id:'wrench',pos:new THREE.Vector3(1.3,1,11.4),label:()=>tr('Take repair wrench','拿取维修扳手'),available:()=>true},
      {id:'repair',pos:new THREE.Vector3(1,1.3,-9.5),label:()=>this.state.item==='wrench'?tr('Repair the electrical panel','修理故障电路板'):tr('Electrical fault! Get a wrench from the rear','电路故障！前往后舱取扳手'),available:()=>this.state.elapsed>=105&&!this.state.repaired},
      {id:'cargo',pos:new THREE.Vector3(.8,1,-8),label:()=>tr('Secure loose luggage','固定松脱的行李'),available:()=>this.state.elapsed>=22&&!this.state.cargo},
      {id:'fire',pos:new THREE.Vector3(-1,1,-5),label:()=>this.state.item==='extinguisher'?tr('Extinguish fire','扑灭火焰'):tr('Fire! Get the extinguisher at the rear','起火！到后舱拿灭火器'),available:()=>this.state.elapsed>=48&&!this.state.fire},
      {id:'door',pos:new THREE.Vector3(-2.7,1.15,8.6),label:()=>tr('Pull emergency door shut','关闭松脱的应急舱门'),available:()=>this.state.elapsed>=78&&!this.state.door},
      {id:'cockpit',pos:new THREE.Vector3(0,1,-11.3),label:()=>this.cabinComplete()?tr('Take the controls · begin approach','接管驾驶 · 开始进近'):tr('Cockpit · finish cabin tasks first','驾驶舱 · 请先完成客舱任务'),available:()=>true},
      ...SEATS.map(id=>({id:`pax-${id}`,pos:this.world.passengers[id].position.clone(),label:()=>!this.beltedIds.has(id)?tr('Fasten passenger seatbelt','扣好乘客安全带'):this.state.item==='coffee'?tr('Serve coffee','递给乘客咖啡'):tr('Needs coffee · collect it from the rear galley','需要咖啡 · 前往后舱取饮料'),available:()=>SEATS.slice(0,this.state.requiredServed).includes(id)&&!this.servedIds.has(id)})),
    ];
    this.observer=new ResizeObserver(()=>this.resize());this.observer.observe(this.host);this.resize();
    window.addEventListener('keydown',this.keyDown);window.addEventListener('keyup',this.keyUp);window.addEventListener('blur',this.blur);
    document.addEventListener('visibilitychange',this.visibility);document.addEventListener('pointerlockchange',this.lockChange);
    this.renderer.domElement.addEventListener('pointerdown',this.pointerDown);window.addEventListener('pointermove',this.pointerMove);window.addEventListener('pointerup',this.pointerUp);
    this.renderer.domElement.addEventListener('contextmenu',this.contextMenu);
    this.emit();this.raf=requestAnimationFrame(this.frame);
  }
  previewRoute(route:number){if(this.state.phase==='ready')this.world.setRoute(route);}
  setLocale(locale:FlightLocale){this.locale=locale;this.emit();}
  private resize(){const w=this.host.clientWidth,h=this.host.clientHeight;this.renderer.setSize(w,h);this.camera.aspect=w/Math.max(h,1);this.camera.updateProjectionMatrix();}
  private keyDown=(e:KeyboardEvent)=>{
    if(e.target instanceof HTMLInputElement||e.target instanceof HTMLSelectElement)return;
    if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space','ShiftLeft','ShiftRight','KeyE','KeyQ','Escape','KeyP'].includes(e.code)){
      if(this.state.phase==='playing')e.preventDefault();
      if(!e.repeat){if(e.code==='KeyE')this.interact();if(e.code==='KeyQ')this.drop();if(e.code==='KeyP'||e.code==='Escape'){if(this.state.phase==='paused')this.resume();else this.pause();}}
      this.keys.add(e.code);
    }
  };
  private keyUp=(e:KeyboardEvent)=>{this.keys.delete(e.code);};
  private blur=()=>{this.keys.clear();this.moveInput={x:0,y:0};this.pause();};
  private visibility=()=>{if(document.hidden)this.pause();};
  private lockChange=()=>{if(!document.pointerLockElement && this.state.phase==='playing') this.keys.clear();};
  private contextMenu=(e:Event)=>e.preventDefault();
  private pointerDown=(e:PointerEvent)=>{if(this.state.phase!=='playing')return;this.lookPointer=e.pointerId;this.pointerStart={x:e.clientX,y:e.clientY};this.dragged=false;this.renderer.domElement.focus({preventScroll:true});};
  private pointerMove=(e:PointerEvent)=>{
    if(this.state.phase!=='playing'||this.state.piloting)return;
    if(document.pointerLockElement===this.renderer.domElement){this.look(e.movementX*.0024,e.movementY*.0024);return;}
    if(this.lookPointer===e.pointerId){const dx=e.clientX-this.pointerStart.x,dy=e.clientY-this.pointerStart.y; if(Math.abs(dx)+Math.abs(dy)>2)this.dragged=true; this.look(dx*.004,dy*.004);this.pointerStart={x:e.clientX,y:e.clientY};}
  };
  private pointerUp=(e:PointerEvent)=>{if(this.lookPointer===e.pointerId){if(!this.dragged&&e.pointerType==='mouse'&&this.state.phase==='playing'&&!document.pointerLockElement){try{const p=this.renderer.domElement.requestPointerLock();if(p)p.catch(()=>{});}catch{/* Drag looking remains available. */}}this.lookPointer=null;}};
  look(x:number,y:number){this.yaw-=x;this.pitch=clamp(this.pitch-y,-1.15,1.15);}
  move(x:number,y:number){this.moveInput={x,y};}
  private cabinComplete(){return this.state.served===this.state.requiredServed&&this.state.belts===this.state.requiredBelts&&this.state.cargo&&this.state.fire&&this.state.door&&this.state.repaired;}
  start(config?:FlightConfig){if(config)this.config={...config,route:clamp(config.route,0,2)};this.state=initial();this.world.setRoute(this.config.route);this.state.route=this.config.route;this.state.requiredServed=3+this.config.route;this.state.requiredBelts=this.state.requiredServed;this.state.remaining=240+this.config.route*30;this.beltedIds.clear();this.state.phase='playing';this.position.set(0,1.65,9.7);this.velocity.set(0,0,0);this.yaw=0;this.pitch=0;this.servedIds.clear();this.selected='';this.lookPointer=null;this.keys.clear();this.moveInput={x:0,y:0};this.sprayTime=0;this.resetDoor=0;this.world.door.rotation.y=0;this.world.fire.visible=false;this.setItem(null);this.throwObjects.forEach(o=>{this.scene.remove(o.mesh);releaseObject(o.mesh);});this.throwObjects=[];this.audio.start();this.announce('coffee');this.emit();this.renderer.domElement.focus({preventScroll:true});}
  resetToReady(){this.pause();this.state=initial();this.world.fire.visible=false;this.world.door.rotation.y=0;this.setItem(null);this.emit();}
  pause(){if(this.state.phase!=='playing')return;this.state.phase='paused';this.keys.clear();this.moveInput={x:0,y:0};this.audio.pause();if(document.pointerLockElement)document.exitPointerLock();this.emit();}
  resume(){if(this.state.phase!=='paused')return;this.state.phase='playing';this.keys.clear();this.last=performance.now();this.audio.start();this.emit();}
  mute(){return this.audio.mute();}
  quality(){this.lowQuality=!this.lowQuality;this.renderer.setPixelRatio(this.lowQuality?1:Math.min(window.devicePixelRatio,1.6));this.renderer.shadowMap.enabled=!this.lowQuality;this.scene.traverse(o=>{if(o instanceof THREE.Mesh){const mats=Array.isArray(o.material)?o.material:[o.material];mats.forEach(m=>m.needsUpdate=true);}});return this.lowQuality;}
  private announce(id:string){this.state.announcement=id;this.audio.tone('alert');this.emit();}
  private setItem(item:FlightItem){
    if(this.held){this.camera.remove(this.held);this.held.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();const m=Array.isArray(o.material)?o.material:[o.material];m.forEach(x=>x.dispose());}});this.held=null;}
    this.state.item=item;if(item){this.held=makeHeldItem(item);this.held.position.set(.43,-.44,-.76);this.held.rotation.y=-.14;this.camera.add(this.held);}
  }
  drop(){if(this.state.phase!=='playing'||!this.state.item)return;const obj=makeHeldItem(this.state.item);const hands:THREE.Object3D[]=[];obj.traverse(n=>{if(n instanceof THREE.Mesh){const m=n.material as THREE.MeshStandardMaterial;if([0x10b4d5,0xe8ece7].includes(m.color?.getHex()))hands.push(n);}});hands.forEach(n=>{obj.remove(n);releaseObject(n);});obj.scale.setScalar(.65);this.camera.getWorldPosition(obj.position);const dir=this.camera.getWorldDirection(new THREE.Vector3());obj.position.add(dir);this.scene.add(obj);this.throwObjects.push({mesh:obj,v:dir.multiplyScalar(4).add(new THREE.Vector3(0,1,0)),life:5});this.setItem(null);this.state.cups=0;this.emit();}
  interact(){
    if(this.state.phase!=='playing'||this.state.piloting)return;
    const id=this.selected;if(!id)return;
    if(id==='galley'){this.setItem('coffee');this.state.cups=3+this.config.upgradeService;this.audio.tone('pick');}
    else if(id==='wrench'){this.setItem('wrench');this.state.cups=0;this.audio.tone('pick');}
    else if(id==='repair'){if(this.state.item!=='wrench'){this.announce('getWrench');return;}this.state.repaired=true;this.state.score+=250;this.audio.tone('good');this.announce('repairDone');}
    else if(id==='extinguisher'){this.setItem('extinguisher');this.state.cups=0;this.audio.tone('pick');}
    else if(id.startsWith('pax-')){const passengerId=Number(id.slice(4));if(!this.beltedIds.has(passengerId)){this.beltedIds.add(passengerId);this.state.belts++;this.state.score+=75;this.audio.tone('good');if(this.state.belts===this.state.requiredBelts)this.announce('beltsDone');this.emit();return;}if(this.state.item!=='coffee'){this.announce('getCoffee');return;}const n=Number(id.slice(4));if(this.servedIds.has(n))return;this.servedIds.add(n);this.state.served++;this.state.cups--;this.state.score+=150;this.state.health=Math.min(100,this.state.health+3);if(this.state.cups===0)this.setItem(null);this.audio.tone('good');if(this.state.served===this.state.requiredServed)this.announce('serviceDone');}
    else if(id==='cargo'){this.state.cargo=true;this.state.score+=200;this.audio.tone('good');this.announce('cargoDone');}
    else if(id==='fire'){if(this.state.item!=='extinguisher'){this.announce('getExtinguisher');return;}this.sprayTime=2.2;this.state.fire=true;this.state.score+=250;this.audio.tone('good');this.announce('fireDone');}
    else if(id==='door'){this.state.door=true;this.state.score+=200;this.resetDoor=.8;this.audio.tone('good');this.announce('doorDone');}
    else if(id==='cockpit'){if(!this.cabinComplete()){this.announce('finishCabin');return;}this.state.piloting=true;this.setItem(null);this.sprayTime=0;this.position.set(0,2.05,-11.15);this.yaw=0;this.pitch=-.04;this.state.bank=17;this.announce('approach');}
    this.emit();
  }
  private updateTarget(){
    if(this.state.piloting){this.selected='';this.state.prompt='';return;}
    const forward=this.camera.getWorldDirection(new THREE.Vector3());let best=Infinity;this.selected='';this.state.prompt='';
    for(const t of this.targets){if(!t.available())continue;const d=t.pos.clone().sub(this.position);d.y*=.45;const distance=d.length();const dot=d.normalize().dot(forward);if(distance>2.65||dot<.25)continue;const rank=distance+(1-dot)*.8;if(rank<best){best=rank;this.selected=t.id;this.state.prompt=t.label();}}
    this.state.target=this.selected;
  }
  private finish(won:boolean){this.state.phase='result';this.state.won=won;this.state.landed=won;if(won)this.state.score+=500+Math.round(this.state.health*5)+Math.round(this.state.remaining*2);this.keys.clear();this.audio.pause();if(document.pointerLockElement)document.exitPointerLock();this.emit();}
  private emit(){if(!this.disposed)this.onUpdate({...this.state});}
  private frame=(now:number)=>{
    if(this.disposed)return;const dt=Math.min((now-(this.last||now))/1000,.05);this.last=now;this.renderTime+=dt;this.sinceUI+=dt;
    const s=this.state;
    if(s.phase==='playing'){
      s.elapsed+=dt;s.remaining=Math.max(0,240+this.config.route*30-s.elapsed);
      const cycle=s.elapsed%(26-this.config.route*3);s.turbulence=cycle>18-this.config.route*3&&cycle<24-this.config.route*3;const turbulence=s.turbulence?.75+this.config.route*.12:0;
      for(const [at,id] of [[22,'cargo'],[48,'fire'],[78,'door'],[105,'repair']] as const){if(s.elapsed>=at&&s.elapsed-dt<at)this.announce(id);}
      this.world.fire.visible=s.elapsed>=48&&!s.fire;
      if(s.elapsed>=78&&!s.door)this.world.door.rotation.y=THREE.MathUtils.lerp(this.world.door.rotation.y,-1.12,dt*2);
      if(this.resetDoor>0){this.resetDoor-=dt;this.world.door.rotation.y=THREE.MathUtils.lerp(this.world.door.rotation.y,0,dt*9);}
      let damage=0;if(s.elapsed>70&&!s.fire)damage+=.38;if(s.elapsed>98&&!s.door)damage+=.35;if(s.elapsed>55&&!s.cargo)damage+=s.turbulence?.8:.08;
      if(s.elapsed>125&&!s.repaired)damage+=.22;damage*= (1+this.config.route*.25+(this.config.riskyCargo?.3:0))*(1-this.config.upgradeHull*.16);s.health=clamp(s.health-damage*dt,0,100);
      if(s.piloting){const control=(this.keys.has('KeyD')||this.keys.has('ArrowRight')?1:0)-(this.keys.has('KeyA')||this.keys.has('ArrowLeft')?1:0)+this.moveInput.x;
        s.bank+= ((Math.sin(s.elapsed*1.8)*5+Math.cos(s.elapsed*.8)*4)*(1+this.config.route*.2)*(1-this.config.upgradeHandling*.2)+control*26)*dt;s.bank=clamp(s.bank,-45,45);
        if(Math.abs(s.bank)<8)s.approach+=dt;else s.approach=Math.max(0,s.approach-dt*.25);
        if(Math.abs(s.bank)>30)s.health=Math.max(0,s.health-dt*1.6);
        if(s.approach>=10)this.finish(true);
      }else{
        const f=(this.keys.has('KeyW')||this.keys.has('ArrowUp')?1:0)-(this.keys.has('KeyS')||this.keys.has('ArrowDown')?1:0)-this.moveInput.y;
        const r=(this.keys.has('KeyD')||this.keys.has('ArrowRight')?1:0)-(this.keys.has('KeyA')||this.keys.has('ArrowLeft')?1:0)+this.moveInput.x;
        const norm=Math.max(1,Math.hypot(f,r));const speed=this.keys.has('ShiftLeft')||this.keys.has('ShiftRight')?4.4:2.8;
        const vx=(r*Math.cos(this.yaw)-f*Math.sin(this.yaw))/norm*speed,vz=(-f*Math.cos(this.yaw)-r*Math.sin(this.yaw))/norm*speed;
        this.velocity.x=THREE.MathUtils.lerp(this.velocity.x,vx,Math.min(1,dt*12));this.velocity.z=THREE.MathUtils.lerp(this.velocity.z,vz,Math.min(1,dt*12));
        const oldX=this.position.x,oldZ=this.position.z;this.position.x+=this.velocity.x*dt;this.position.z+=this.velocity.z*dt;
        // Solid equipment footprint keeps the camera out of the galley appliances.
        const obstacles=[[-1.2,-.10,10.95,12],[.86,1.75,9.55,10.5],[.83,1.75,10.95,12]];
        for(const [minX,maxX,minZ,maxZ] of obstacles){if(this.position.x>minX&&this.position.x<maxX&&this.position.z>minZ&&this.position.z<maxZ){if(oldZ<=minZ||oldZ>=maxZ)this.position.z=oldZ;else this.position.x=oldX;}}
        if(s.turbulence)this.position.x+=Math.sin(s.elapsed*7)*dt*.4;
        // Seats and cabin walls leave a generous, continuous walking aisle; vestibules are wider.
        const width=this.position.z>7||this.position.z< -10.5?1.75:1.05;
        this.position.x=clamp(this.position.x,-width,width);this.position.z=clamp(this.position.z,-12,11.6);
      }
      this.world.update(this.renderTime,turbulence);
      this.world.cart.position.x=.8+Math.sin(s.elapsed*2.4)*turbulence*.45;this.world.cart.rotation.z=Math.sin(s.elapsed*8)*turbulence*.07;
      if(!s.cargo){this.world.cargo.rotation.z=Math.sin(s.elapsed*7)*turbulence*.22;this.world.cargo.position.y=.035+Math.abs(Math.sin(s.elapsed*5))*turbulence*.18;}
      if(s.cargo){this.world.cargo.rotation.z=0;this.world.cargo.position.y=.035;}
      const walk=Math.min(1,this.velocity.length()/2);const bob=s.piloting?0:Math.sin(s.elapsed*9)*.025*walk;
      this.camera.position.copy(this.position);this.camera.position.y+=bob+(s.turbulence?Math.sin(s.elapsed*23)*.017:0);
      this.camera.rotation.set(this.pitch,this.yaw,s.piloting?THREE.MathUtils.degToRad(-s.bank)*.35:Math.sin(s.elapsed*6)*turbulence*.022,'YXZ');
      if(this.held){this.held.position.y=-.44+Math.sin(s.elapsed*8)*.017*walk;this.held.rotation.z=Math.sin(s.elapsed*5)*.025;}
      this.updateTarget();if(s.remaining<=0||s.health<=0)this.finish(false);
    }else if(s.phase==='ready'){
      this.camera.position.set(-.1,1.77,9.2);this.camera.rotation.set(-.045,Math.sin(this.renderTime*.12)*.085,0,'YXZ');this.world.update(this.renderTime,.05);
    }
    for(const p of this.world.passengers){const required=SEATS.slice(0,s.requiredServed).includes(p.id);const secure=this.beltedIds.has(p.id)||!required;if(p.group.userData.belt)p.group.userData.belt.visible=secure;p.group.position.y=s.phase==='playing'&&s.turbulence&&!secure?Math.abs(Math.sin(s.elapsed*8+p.id))*.2:0;p.bubble.visible=s.phase==='playing'&&SEATS.slice(0,s.requiredServed).includes(p.id)&&!this.servedIds.has(p.id);}
    if(this.sprayTime>0){this.sprayTime-=dt;this.spray.visible=true;this.spray.rotation.z+=dt*2;}else this.spray.visible=false;
    this.throwObjects=this.throwObjects.filter(o=>{o.life-=dt;o.v.y-=dt*8;o.mesh.position.addScaledVector(o.v,dt);o.mesh.rotation.x+=dt*3;if(o.mesh.position.y<.2){o.mesh.position.y=.2;o.v.y=Math.abs(o.v.y)*.35;o.v.x*=.95;o.v.z*=.95;}if(o.life<=0){this.scene.remove(o.mesh);o.mesh.traverse(n=>{if(n instanceof THREE.Mesh){n.geometry.dispose();(Array.isArray(n.material)?n.material:[n.material]).forEach(m=>m.dispose());}});return false;}return true;});
    this.renderer.render(this.scene,this.camera);
    if(this.sinceUI>.12){s.fps=Math.round(1/Math.max(dt,.001));this.sinceUI=0;this.emit();}
    this.raf=requestAnimationFrame(this.frame);
  };
  dispose(){this.disposed=true;cancelAnimationFrame(this.raf);this.observer.disconnect();this.audio.dispose();if(document.pointerLockElement===this.renderer.domElement)document.exitPointerLock();window.removeEventListener('keydown',this.keyDown);window.removeEventListener('keyup',this.keyUp);window.removeEventListener('blur',this.blur);document.removeEventListener('visibilitychange',this.visibility);document.removeEventListener('pointerlockchange',this.lockChange);window.removeEventListener('pointermove',this.pointerMove);window.removeEventListener('pointerup',this.pointerUp);this.renderer.domElement.removeEventListener('pointerdown',this.pointerDown);this.renderer.domElement.removeEventListener('contextmenu',this.contextMenu);this.world.dispose();this.scene.traverse(n=>{if(n instanceof THREE.Mesh||n instanceof THREE.Points){n.geometry.dispose();const ms=Array.isArray(n.material)?n.material:[n.material];ms.forEach(m=>m.dispose());}});this.renderer.dispose();this.renderer.domElement.remove();}
}
