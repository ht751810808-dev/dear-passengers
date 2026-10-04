import * as THREE from 'three';
import { buildCabin, makeHeldItem, makeIdleHands } from './cabin-scene';
import { CabinAudio } from './cabin-audio';
import { FlightSimulation, INITIAL_FLIGHT, initialFlight, SEATS, type FlightConfig, type FlightItem, type FlightLocale, type FlightSnapshot } from './cabin-simulation';
import type { FlightRoomSession, FlightRoomEvent, FlightPose, FlightAction } from './flight-network';
import { makeCrewAvatar } from './cabin-scene';
export { INITIAL_FLIGHT };
export type { FlightConfig, FlightItem, FlightLocale, FlightSnapshot, FlightPhase } from './cabin-simulation';

const clamp=THREE.MathUtils.clamp;
function releaseObject(object:THREE.Object3D){
  const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>(),textures=new Set<THREE.Texture>();
  object.traverse(node=>{if(node instanceof THREE.Mesh||node instanceof THREE.Points||node instanceof THREE.Sprite){if('geometry' in node)geometries.add(node.geometry);(Array.isArray(node.material)?node.material:[node.material]).forEach(material=>{materials.add(material);Object.values(material).forEach(value=>{if(value instanceof THREE.Texture)textures.add(value);});});}});
  geometries.forEach(g=>g.dispose());textures.forEach(t=>t.dispose());materials.forEach(m=>m.dispose());
}
type Target={id:string;pos:()=>THREE.Vector3;label:()=>string;available:()=>boolean};
type Body={id:string;mesh:THREE.Group;v:THREE.Vector3;home:THREE.Vector3;rotation:THREE.Euler;radius:number;floor:number;dynamic:boolean;disposable:boolean;passenger?:number;owner?:string;kind?:FlightItem};
type CrewPlayer={id:string;pose:FlightPose;item:FlightItem;cups:number;piloting:boolean;grabbed:string|null;action:{id:string;elapsed:number;duration:number}|null;avatar:THREE.Group};
type CrewPacket={version:1;round:string;config:FlightConfig;state:FlightSnapshot;belts:number[];served:number[];fed:number[];players:Array<{id:string;pose:FlightPose;item:FlightItem;cups:number;piloting:boolean;grabbed:string|null;action:{id:string;elapsed:number;duration:number}|null}>;bodies:Array<{id:string;p:number[];r:number[];dynamic:boolean;kind?:FlightItem}>};

export class CabinEngine {
  private renderer:THREE.WebGLRenderer;private scene=new THREE.Scene();private camera=new THREE.PerspectiveCamera(72,1,.06,350);
  private world:ReturnType<typeof buildCabin>;private simulation=new FlightSimulation();private keys=new Set<string>();
  private yaw=0;private pitch=0;private raf=0;private last=0;private sinceUI=0;private renderTime=0;private frameSamples:number[]=[];
  private position=new THREE.Vector3(0,1.65,9.7);private velocity=new THREE.Vector3();private held:THREE.Group|null=null;
  private targets:Target[]=[];private selected='';private audio=new CabinAudio();private dragged=false;
  private lookPointer:number|null=null;private pointerStart={x:0,y:0};private moveInput={x:0,y:0};private observer:ResizeObserver;
  private disposed=false;private spray:THREE.Points;private lowQuality=false;private bodies:Body[]=[];private grabbed:Body|null=null;
  private idleHands:THREE.Group;
  private crew:FlightRoomSession|null=null;private crewUnsubscribe:(()=>void)|null=null;private crewPlayers=new Map<string,CrewPlayer>();
  private crewRound='';private crewClock=0;private localPaused=false;private guestPilot:string|null=null;private guestControls={roll:0,pitch:0,throttle:0};private guestControlsAt=0;
  private backgroundTimer:ReturnType<typeof setInterval>;
  private onCrewRound:((config:FlightConfig,id:string)=>void)|null=null;
  private action:{id:string;elapsed:number;duration:number}|null=null;private previousAnnouncement='';private footstepTime=0;private impactTime=0;
  private get state(){return this.simulation.state;}
  private tr(en:string,zh:string){return this.locale==='zh'?zh:en;}

  constructor(private host:HTMLElement,private onUpdate:(state:FlightSnapshot)=>void,private locale:FlightLocale='en'){
    this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5));this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.05;
    this.renderer.domElement.setAttribute('aria-label','Interactive 3D aircraft cabin');this.renderer.domElement.tabIndex=0;
    this.host.appendChild(this.renderer.domElement);this.scene.background=new THREE.Color('#90c9ef');this.scene.fog=new THREE.Fog('#bacbd5',55,240);
    this.world=buildCabin(this.scene);this.scene.add(this.camera);this.camera.rotation.order='YXZ';
    const particles=new Float32Array(220*3);for(let i=0;i<particles.length;i++)particles[i]=(Math.random()-.5);
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(particles,3));
    const mist=document.createElement('canvas');mist.width=mist.height=32;const ctx=mist.getContext('2d')!;const gradient=ctx.createRadialGradient(16,16,0,16,16,16);gradient.addColorStop(0,'rgba(255,255,255,.85)');gradient.addColorStop(.4,'rgba(255,255,255,.35)');gradient.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=gradient;ctx.fillRect(0,0,32,32);
    this.spray=new THREE.Points(geometry,new THREE.PointsMaterial({color:0xe8ffff,map:new THREE.CanvasTexture(mist),size:.17,transparent:true,opacity:.6,depthWrite:false}));this.spray.visible=false;this.camera.add(this.spray);this.spray.position.set(.15,-.2,-1.5);this.spray.scale.set(1.2,1,2.6);
    this.idleHands=makeIdleHands();this.idleHands.position.set(0,-.12,-.68);this.camera.add(this.idleHands);
    this.setupBodies();this.setupTargets();void this.renderer.compileAsync(this.scene,this.camera).catch(()=>{});
    this.observer=new ResizeObserver(()=>this.resize());this.observer.observe(this.host);this.resize();
    window.addEventListener('keydown',this.keyDown);window.addEventListener('keyup',this.keyUp);window.addEventListener('blur',this.blur);
    document.addEventListener('visibilitychange',this.visibility);document.addEventListener('pointerlockchange',this.lockChange);
    this.renderer.domElement.addEventListener('pointerdown',this.pointerDown);window.addEventListener('pointermove',this.pointerMove);window.addEventListener('pointerup',this.pointerUp);this.renderer.domElement.addEventListener('contextmenu',this.contextMenu);
    this.backgroundTimer=setInterval(()=>this.backgroundTick(),100);this.emit();this.raf=requestAnimationFrame(this.frame);
  }
  private setupBodies(){
    for(const object of this.world.objects??[])this.bodies.push({id:object.id,mesh:object.group,v:new THREE.Vector3(),home:object.group.position.clone(),rotation:object.group.rotation.clone(),radius:.3,floor:.24,dynamic:false,disposable:false});
    for(const p of this.world.passengers)this.bodies.push({id:`pax-${p.id}`,mesh:p.group,v:new THREE.Vector3(),home:p.group.position.clone(),rotation:p.group.rotation.clone(),radius:.43,floor:0,dynamic:false,disposable:false,passenger:p.id});
  }
  private setupTargets(){
    const fixed=(id:string,x:number,y:number,z:number,label:()=>string,available=()=>true)=>({id,pos:()=>new THREE.Vector3(x,y,z),label,available});
    this.targets=[
      fixed('galley',-.65,1.3,11.3,()=>this.tr(`Take coffee · ${3+this.simulation.config.upgradeService} cups`,`取咖啡 · ${3+this.simulation.config.upgradeService} 杯`)),
      fixed('food',-1.55,1.1,10.0,()=>this.tr('Take meal trays · 2 meals','取餐盘 · 2 份餐食'),()=>this.state.requiredFood>0),
      fixed('extinguisher',1.3,1.2,10,()=>this.tr('Take fire extinguisher','拿取灭火器')),
      fixed('wrench',1.3,1.2,11.4,()=>this.tr('Take repair wrench','拿取维修扳手')),
      fixed('repair',1,1.3,-9.5,()=>this.state.item==='wrench'?this.tr('Repair electrical panel · 5s','维修电路面板 · 5 秒'):this.tr('Electrical fault · get the rear wrench','电路故障 · 去后舱拿扳手'),()=>this.simulation.isActive('repair')),
      fixed('cargo',.8,1,-8,()=>this.tr('Strap down loose cargo · 3s','绑紧松动货物 · 3 秒'),()=>this.simulation.isActive('cargo')),
      fixed('fire',-1,1.1,-5,()=>this.state.item==='extinguisher'?this.tr('Fight the fire · stay nearby','持续灭火 · 保持靠近'):this.tr('Fire · get the rear extinguisher','起火 · 去后舱拿灭火器'),()=>this.simulation.isActive('fire')),
      fixed('door',-2.7,1.15,8.6,()=>this.tr('Pull and latch emergency door · 4s','拉紧并锁住应急舱门 · 4 秒'),()=>this.simulation.isActive('door')),
      fixed('cockpit',0,1.3,-11.3,()=>this.state.stage==='boarding'?this.tr('Take the controls · start takeoff','进入驾驶舱 · 开始起飞'):this.tr('Enter flight deck · autopilot available','进入驾驶舱 · 可使用自动驾驶')),
      ...this.world.passengers.map(p=>({id:`pax-${p.id}`,pos:()=>p.group.position.clone().add(new THREE.Vector3(0,1.4,0)),available:()=>SEATS.slice(0,this.state.requiredServed).includes(p.id),label:()=>{
        const id=p.id;if(!this.simulation.beltedIds.has(id))return this.tr('Seat passenger and fasten seatbelt','让乘客归座并扣好安全带');
        if(!this.simulation.servedIds.has(id))return this.state.item==='coffee'?this.tr('Serve coffee','递上咖啡'):this.tr('Coffee requested · rear galley','需要咖啡 · 后舱备餐间取用');
        if(SEATS.slice(0,this.state.requiredFood).includes(id)&&!this.simulation.fedIds.has(id))return this.state.item==='food'?this.tr('Serve meal tray','递上餐盘'):this.tr('Meal requested · rear galley','需要餐食 · 后舱取餐盘');
        return this.tr('Passenger comfortable · F to lift','乘客状态良好 · F 抓取');
      }})),
      ...this.bodies.filter(b=>b.passenger===undefined).map(b=>({id:`object:${b.id}`,pos:()=>b.mesh.position.clone(),available:()=>b.mesh.visible,label:()=>this.tr('F · pick up loose object / Q · throw','F 抓取松散物品 / Q 抛出')})),
    ];
  }
  previewRoute(route:number){if(this.state.phase==='ready')this.world.setRoute(route);}
  setLocale(locale:FlightLocale){this.locale=locale;this.emit();}
  private resize(){const w=this.host.clientWidth,h=this.host.clientHeight;this.renderer.setSize(w,h);this.camera.aspect=w/Math.max(1,h);this.camera.updateProjectionMatrix();}
  private keyDown=(e:KeyboardEvent)=>{
    if(e.target instanceof HTMLElement&&(e.target.closest('input,select,textarea,[contenteditable="true"]')||e.target.closest('button')&&['Space','Enter'].includes(e.code)))return;
    if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space','ShiftLeft','ShiftRight','KeyE','KeyQ','KeyF','KeyR','Escape','KeyP'].includes(e.code)){
      if(this.state.phase==='playing')e.preventDefault();if(!e.repeat){if(e.code==='KeyE')this.interact();if(e.code==='KeyQ')this.drop();if(e.code==='KeyF'&&!this.state.piloting)this.grab();if(e.code==='Space')this.toggleAutopilot();if(e.code==='KeyP'||e.code==='Escape'){if(this.state.phase==='paused')this.resume();else this.pause();}}
      this.keys.add(e.code);
    }
  };
  private keyUp=(e:KeyboardEvent)=>{this.keys.delete(e.code);};
  private blur=()=>{if(this.crew?.role==='guest')this.crew.sendAction({kind:'pilotIdle'});this.keys.clear();this.moveInput={x:0,y:0};if(!this.crew)this.pause();};
  private visibility=()=>{if(document.hidden&&!this.crew)this.pause();};
  private lockChange=()=>{if(!document.pointerLockElement)this.keys.clear();};
  private contextMenu=(e:Event)=>e.preventDefault();
  private pointerDown=(e:PointerEvent)=>{if(this.state.phase!=='playing')return;this.lookPointer=e.pointerId;this.pointerStart={x:e.clientX,y:e.clientY};this.dragged=false;this.renderer.domElement.focus({preventScroll:true});};
  private pointerMove=(e:PointerEvent)=>{if(this.state.phase!=='playing')return;if(document.pointerLockElement===this.renderer.domElement){this.look(e.movementX*.0024,e.movementY*.0024);return;}if(this.lookPointer===e.pointerId){const dx=e.clientX-this.pointerStart.x,dy=e.clientY-this.pointerStart.y;if(Math.abs(dx)+Math.abs(dy)>2)this.dragged=true;this.look(dx*.004,dy*.004);this.pointerStart={x:e.clientX,y:e.clientY};}};
  private pointerUp=(e:PointerEvent)=>{if(this.lookPointer===e.pointerId){if(!this.dragged&&e.pointerType==='mouse'&&this.state.phase==='playing'&&!document.pointerLockElement){try{this.renderer.domElement.requestPointerLock()?.catch(()=>{});}catch{/* Dragging remains available. */}}this.lookPointer=null;}};
  look(x:number,y:number){this.yaw-=x;this.pitch=clamp(this.pitch-y,-1.15,1.15);if(this.state.piloting)this.yaw=clamp(this.yaw,-1.2,1.2);}
  move(x:number,y:number){this.moveInput={x:clamp(x,-1,1),y:clamp(y,-1,1)};}
  toggleAutopilot(){if(this.crew?.role==='guest'){this.crew.sendAction({kind:'autopilot'});return;}this.simulation.toggleAutopilot();this.emit();}
  adjustThrottle(delta:number){if(this.crew?.role==='guest'){this.crew.sendAction({kind:'throttle',delta});return;}if(this.state.piloting)this.simulation.adjustThrottle(delta);this.emit();}
  start(config?:FlightConfig){
    if(this.crew?.role==='guest')return;this.crewRound=crypto.randomUUID();this.guestPilot=null;this.crewPlayers.forEach(p=>{p.item=null;p.cups=0;p.piloting=false;p.action=null;p.grabbed=null;});this.simulation.start(config??this.simulation.config);this.world.setRoute(this.state.route);this.resetScene();this.state.phase='playing';this.audio.start();this.emit();this.renderer.domElement.focus({preventScroll:true});
  }
  private resetScene(){
    this.position.set(0,1.65,9.7);this.velocity.set(0,0,0);this.yaw=this.pitch=0;this.selected='';this.lookPointer=null;this.keys.clear();this.moveInput={x:0,y:0};this.action=null;this.grabbed=null;this.previousAnnouncement='';this.world.door.rotation.y=0;this.world.fire.visible=false;this.setItem(null);
    this.bodies=this.bodies.filter(body=>{if(body.disposable){body.mesh.removeFromParent();releaseObject(body.mesh);return false;}body.mesh.position.copy(body.home);body.mesh.rotation.copy(body.rotation);body.dynamic=false;body.owner=undefined;body.v.set(0,0,0);if(body.id==='pet-carrier')body.mesh.visible=this.simulation.mission.cargo==='hazardous';return true;});
  }
  resetToReady(){if(this.crew?.role==='guest'){this.localPaused=false;return;}this.pause();this.simulation.state=initialFlight();this.resetScene();this.emit();}
  pause(){if(this.state.phase!=='playing')return;if(this.crew?.role==='guest'){this.localPaused=true;this.crew.sendAction({kind:'pilotIdle'});}this.state.phase='paused';this.keys.clear();this.moveInput={x:0,y:0};this.lookPointer=null;this.audio.pause();if(document.pointerLockElement===this.renderer.domElement)document.exitPointerLock();this.emit();}
  resume(){if(this.state.phase!=='paused')return;this.localPaused=false;this.state.phase='playing';this.keys.clear();this.last=performance.now();this.audio.start();this.emit();}
  mute(){return this.audio.mute();}
  quality(){this.lowQuality=!this.lowQuality;this.renderer.setPixelRatio(this.lowQuality?1:Math.min(window.devicePixelRatio,1.5));this.renderer.shadowMap.enabled=!this.lowQuality;this.world.setLowQuality?.(this.lowQuality);this.scene.traverse(o=>{if(o instanceof THREE.Mesh)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m.needsUpdate=true);});return this.lowQuality;}
  private setItem(item:FlightItem){if(this.held){this.held.removeFromParent();releaseObject(this.held);this.held=null;}this.state.item=item;if(item){this.held=makeHeldItem(item);this.held.userData.item=item;this.held.position.set(.43,-.44,-.76);this.held.rotation.y=-.14;this.camera.add(this.held);}}
  private announce(id:string){this.state.announcement=id;this.emit();}
  grab(){
    if(this.state.phase!=='playing'||this.state.piloting)return;
    if(this.crew?.role==='guest'&&this.state.grabbed){this.crew.sendAction({kind:'grab'});return;}
    if(this.grabbed){this.grabbed.owner=undefined;this.grabbed=null;this.state.grabbed=null;this.emit();return;}
    const forward=this.camera.getWorldDirection(new THREE.Vector3());let best=2.9,chosen:Body|null=null;
    for(const body of this.bodies){if(!body.mesh.visible||body.owner)continue;const center=body.mesh.position.clone();if(body.passenger!==undefined)center.y+=1.3;const delta=center.sub(this.position),distance=delta.length(),dot=delta.normalize().dot(forward);if(distance<best&&dot>.72){chosen=body;best=distance;}}
    if(!chosen)return;if(this.crew?.role==='guest'){this.crew.sendPosition(this.localPose());this.crew.sendAction({kind:'grab',targetId:chosen.id});return;}this.action=null;this.setItem(null);this.state.cups=0;this.grabbed=chosen;chosen.dynamic=true;this.state.grabbed=chosen.id;
    if(chosen.passenger!==undefined&&this.simulation.beltedIds.delete(chosen.passenger))this.state.belts--;
    this.audio.tone('pick');this.emit();
  }
  drop(){
    if(this.state.phase!=='playing'||this.state.piloting)return;
    const dir=this.camera.getWorldDirection(new THREE.Vector3());
    if(this.crew?.role==='guest'){this.crew.sendAction({kind:'throw'});return;}
    if(this.grabbed){this.grabbed.v.copy(dir).multiplyScalar(7).add(new THREE.Vector3(0,2,0));this.grabbed=null;this.state.grabbed=null;this.audio.tone('pick');this.emit();return;}
    if(!this.state.item)return;this.action=null;
    this.spawnThrowable(this.state.item,this.camera.position.clone().addScaledVector(dir,.9),dir.multiplyScalar(5).add(new THREE.Vector3(0,1.5,0)));
    this.setItem(null);this.state.cups=0;this.emit();
  }
  private returnPassenger(body:Body){
    if(this.grabbed===body){this.grabbed=null;this.state.grabbed=null;}this.crewPlayers.forEach(player=>{if(player.grabbed===body.id)player.grabbed=null;});
    body.owner=undefined;body.mesh.position.copy(body.home);body.mesh.rotation.copy(body.rotation);body.dynamic=false;body.v.set(0,0,0);
  }
  private spawnThrowable(kind:FlightItem,position:THREE.Vector3,velocity:THREE.Vector3){
    if(!kind)return;const mesh=makeHeldItem(kind,false);mesh.scale.setScalar(.65);mesh.position.copy(position);this.world.root.add(mesh);
    this.bodies.push({id:`thrown-${crypto.randomUUID()}`,mesh,v:velocity,home:position.clone(),rotation:mesh.rotation.clone(),radius:.22,floor:.2,dynamic:true,disposable:true,kind});
    const disposable=this.bodies.filter(b=>b.disposable);if(disposable.length>12){const oldest=disposable.find(b=>!b.owner&&b!==this.grabbed)??disposable[0];oldest.mesh.removeFromParent();releaseObject(oldest.mesh);this.bodies=this.bodies.filter(b=>b!==oldest);}
  }
  interact(){
    const s=this.state;if(s.phase!=='playing')return;
    if(this.crew?.role==='guest'){this.crew.sendPosition(this.localPose());this.crew.sendAction({kind:'interact',targetId:s.piloting?'cockpit':this.selected});return;}
    if(s.piloting){this.simulation.leaveCockpit();this.position.set(0,1.65,-10);this.yaw=0;this.pitch=0;this.emit();return;}
    if(this.grabbed){this.grab();return;}
    const id=this.selected;if(!id)return;
    if(id.startsWith('object:')){this.grab();return;}
    if(id==='galley'||id==='food'||id==='extinguisher'||id==='wrench'){
      this.action=null;this.setItem(id==='galley'?'coffee':id);s.cups=id==='galley'?3+this.simulation.config.upgradeService:id==='food'?2:0;this.audio.tone('pick');this.emit();return;
    }
    if(id==='cockpit'){
      if(this.guestPilot){this.announce('cockpitOccupied');return;}
      this.action=null;this.simulation.enterCockpit();this.setItem(null);this.position.set(0,1.98,-11.15);this.velocity.set(0,0,0);this.yaw=0;this.pitch=-.06;this.emit();return;
    }
    if(id==='fire'&&s.item!=='extinguisher'){this.announce('getExtinguisher');return;}if(id==='repair'&&s.item!=='wrench'){this.announce('getWrench');return;}
    if(id.startsWith('pax-')){
      const n=Number(id.slice(4));if(this.simulation.beltedIds.has(n)&&!this.simulation.servedIds.has(n)&&s.item!=='coffee'){this.announce('getCoffee');return;}
      if(this.simulation.beltedIds.has(n)&&this.simulation.servedIds.has(n)&&SEATS.slice(0,s.requiredFood).includes(n)&&!this.simulation.fedIds.has(n)&&s.item!=='food'){this.announce('getFood');return;}
    }
    if(this.action?.id===id){this.action=null;s.interactionProgress=0;return;}
    this.action={id,elapsed:0,duration:id==='fire'?4+this.state.fireIntensity*2:id==='repair'?5:id==='door'?4:id==='cargo'?3:id.startsWith('pax-')?1:1};this.audio.tone('pick');this.emit();
  }
  private updateAction(dt:number){
    const s=this.state;if(!this.action){s.interactionProgress=0;s.interactionLabel='';return;}
    const target=this.targets.find(t=>t.id===this.action!.id);if(!target||target.pos().distanceTo(this.position)>3.25||!target.available()){this.action=null;s.interactionProgress=0;s.interactionLabel='';return;}
    this.action.elapsed+=dt*(1+this.simulation.config.upgradeService*.1);s.interactionProgress=clamp(this.action.elapsed/this.action.duration,0,1);s.interactionLabel=target.label();
    if(this.action.id==='fire'){this.spray.visible=true;this.spray.rotation.z+=dt*3;s.fireIntensity=Math.max(.08,s.fireIntensity-dt*.06);}
    if(s.interactionProgress>=1){const id=this.action.id;this.action=null;if(this.simulation.completeAction(id)){
      this.audio.tone('good');if(id.startsWith('pax-')){const body=this.bodies.find(b=>b.id===id)!;this.returnPassenger(body);}
      if((s.item==='coffee'||s.item==='food')&&s.cups<=0)this.setItem(null);
    }s.interactionProgress=0;s.interactionLabel='';}
  }
  private updateTarget(){
    const s=this.state;if(s.piloting){this.selected='cockpit';s.target='cockpit';s.prompt=this.tr('E · leave flight deck (autopilot stays on)','E 返回客舱（保持自动驾驶）');s.targetDistance=0;return;}
    const forward=this.camera.getWorldDirection(new THREE.Vector3());let best=Infinity;this.selected='';s.prompt='';s.targetDistance=null;
    for(const t of this.targets){if(!t.available())continue;const d=t.pos().sub(this.position);d.y*=.6;const distance=d.length(),dot=d.normalize().dot(forward);if(distance>2.8||dot<.40)continue;let rank=distance+(1-dot)*1.8;
      if(t.id.startsWith('pax-')){const n=Number(t.id.slice(4));if(this.simulation.servedIds.has(n)&&(!SEATS.slice(0,s.requiredFood).includes(n)||this.simulation.fedIds.has(n)))rank+=1;}
      if(rank<best){best=rank;this.selected=t.id;s.prompt=t.label();s.targetDistance=distance;}
    }s.target=this.selected;
  }
  private movePlayer(dt:number){
    const forward=(this.keys.has('KeyW')||this.keys.has('ArrowUp')?1:0)-(this.keys.has('KeyS')||this.keys.has('ArrowDown')?1:0)-this.moveInput.y;
    const right=(this.keys.has('KeyD')||this.keys.has('ArrowRight')?1:0)-(this.keys.has('KeyA')||this.keys.has('ArrowLeft')?1:0)+this.moveInput.x;
    const norm=Math.max(1,Math.hypot(forward,right)),speed=(this.keys.has('ShiftLeft')||this.keys.has('ShiftRight')?4.5:3.2)*(this.grabbed?.passenger!==undefined?.8:1);
    this.velocity.x=THREE.MathUtils.damp(this.velocity.x,(right*Math.cos(this.yaw)-forward*Math.sin(this.yaw))/norm*speed,12,dt);this.velocity.z=THREE.MathUtils.damp(this.velocity.z,(-forward*Math.cos(this.yaw)-right*Math.sin(this.yaw))/norm*speed,12,dt);
    const oldX=this.position.x,oldZ=this.position.z;this.position.x+=this.velocity.x*dt;this.position.z+=this.velocity.z*dt;
    for(const [minX,maxX,minZ,maxZ] of [[-1.2,-.10,10.95,12],[.86,1.75,9.55,10.5],[.83,1.75,10.95,12]])if(this.position.x>minX&&this.position.x<maxX&&this.position.z>minZ&&this.position.z<maxZ){if(oldZ<=minZ||oldZ>=maxZ)this.position.z=oldZ;else this.position.x=oldX;}
    if(this.state.turbulence)this.position.x+=Math.sin(this.state.elapsed*7)*dt*.35;
    const width=this.position.z>7||this.position.z< -10.5?1.75:1.05;this.position.x=clamp(this.position.x,-width,width);this.position.z=clamp(this.position.z,-12,11.6);
    this.footstepTime+=dt;if(this.velocity.length()>1&&this.footstepTime>.48){this.audio.tone('step');this.footstepTime=0;}
  }
  private updatePhysics(dt:number){
    const s=this.state;const dir=this.camera.getWorldDirection(new THREE.Vector3());const grip=this.camera.position.clone().addScaledVector(dir,1.55);this.impactTime=Math.max(0,this.impactTime-dt);
    for(const b of this.bodies){
      if(!b.mesh.visible)continue;
      if(!b.dynamic&&b.passenger===undefined&&s.turbulence&&this.simulation.isActive('cargo'))b.dynamic=true;
      if(!b.dynamic)continue;
      const p=b.mesh.position;
      const remoteHolder=b.owner?this.crewPlayers.get(b.owner):undefined;
      if(this.grabbed===b||remoteHolder){const target=remoteHolder?new THREE.Vector3(remoteHolder.pose.x,remoteHolder.pose.y,remoteHolder.pose.z).add(new THREE.Vector3(-Math.sin(remoteHolder.pose.yaw),Math.sin(remoteHolder.pose.pitch),-Math.cos(remoteHolder.pose.yaw)).multiplyScalar(1.55)):grip.clone();if(b.passenger!==undefined)target.y-=1.3;b.v.addScaledVector(target.sub(p),dt*32);b.v.multiplyScalar(Math.exp(-dt*8));}
      else {b.v.y-=dt*8.5;b.v.x+=(Math.sin(s.bank*Math.PI/180)*4+(s.turbulence?Math.sin(s.elapsed*6)*1.4:0))*dt;b.v.z+=(s.turbulence?Math.cos(s.elapsed*4)*.8:0)*dt;b.v.multiplyScalar(Math.exp(-dt*.18));}
      p.addScaledVector(b.v,dt);let impact=0;
      if(p.y<b.floor){p.y=b.floor;impact=Math.max(impact,Math.abs(b.v.y));b.v.y=Math.abs(b.v.y)*.27;b.v.x*=Math.exp(-dt*5);b.v.z*=Math.exp(-dt*5);}
      if(p.y>2.6){p.y=2.6;b.v.y=-Math.abs(b.v.y)*.4;}
      for(const axis of ['x','z'] as const){const low=axis==='x'?-2.5:-11.5,high=axis==='x'?2.5:11.2;if(p[axis]<low+b.radius||p[axis]>high-b.radius){p[axis]=clamp(p[axis],low+b.radius,high-b.radius);impact=Math.max(impact,Math.abs(b.v[axis]));b.v[axis]*=-.35;}}
      // Seat rows are solid to loose objects, while passengers can be returned to their seat with E.
      if(b.passenger===undefined&&p.y<1.5&&Math.abs(p.x)>1.0)for(const z of [-7,-3,1,5])if(Math.abs(p.z-z)<.85){const sign=Math.sign(p.x);p.x=sign*(1-b.radius*.3);b.v.x*=-.3;}
      if(b.passenger===undefined){b.mesh.rotation.x+=b.v.z*dt*.4;b.mesh.rotation.z-=b.v.x*dt*.4;}else{b.mesh.rotation.z=THREE.MathUtils.damp(b.mesh.rotation.z,clamp(-b.v.x*.05,-.7,.7),5,dt);}
      if(impact>2.2&&this.impactTime<=0){this.audio.tone('impact');this.simulation.collision(impact);this.impactTime=.2;}
    }
    for(let i=0;i<this.bodies.length;i++)for(let j=i+1;j<this.bodies.length;j++){
      const a=this.bodies[i],b=this.bodies[j];if(!a.dynamic||!b.dynamic||a===this.grabbed||b===this.grabbed)continue;const delta=b.mesh.position.clone().sub(a.mesh.position);const d=delta.length(),min=a.radius+b.radius;if(d>.001&&d<min){delta.divideScalar(d);const overlap=(min-d)*.5;a.mesh.position.addScaledVector(delta,-overlap);b.mesh.position.addScaledVector(delta,overlap);const relative=b.v.clone().sub(a.v).dot(delta);if(relative<0){a.v.addScaledVector(delta,relative*.65);b.v.addScaledVector(delta,-relative*.65);}}
    }
  }
  connectCrew(session:FlightRoomSession|null,onRound?:(config:FlightConfig,id:string)=>void){
    this.crewUnsubscribe?.();this.crewUnsubscribe=null;this.crewPlayers.forEach(p=>{p.avatar.removeFromParent();releaseObject(p.avatar);});this.crewPlayers.clear();this.crew=session;this.onCrewRound=onRound??null;this.localPaused=false;this.guestPilot=null;
    if(!session){if(this.state.phase==='playing')this.pause();return;}
    this.crewUnsubscribe=session.subscribe(event=>this.receiveCrew(event));
  }
  private localPose():FlightPose{return {x:this.position.x,y:this.position.y,z:this.position.z,yaw:this.yaw,pitch:this.pitch,piloting:this.state.piloting,held:this.state.item??undefined};}
  private ensureCrewPlayer(id:string){
    let player=this.crewPlayers.get(id);if(player)return player;
    const avatar=makeCrewAvatar(this.crewPlayers.size+1);avatar.position.set(0,0,9);this.world.root.add(avatar);
    player={id,pose:{x:0,y:1.65,z:9,yaw:0,pitch:0},item:null,cups:0,piloting:false,grabbed:null,action:null,avatar};this.crewPlayers.set(id,player);return player;
  }
  private receiveCrew(event:FlightRoomEvent){
    if(!this.crew)return;
    if(event.type==='roster'){
      const ids=new Set(event.players.map(p=>p.id));for(const [id,player] of Array.from(this.crewPlayers.entries()))if(!ids.has(id)){player.avatar.removeFromParent();releaseObject(player.avatar);this.crewPlayers.delete(id);if(this.guestPilot===id){this.guestPilot=null;this.state.autopilot=true;}this.bodies.forEach(b=>{if(b.owner===id)b.owner=undefined;});}
      event.players.filter(p=>p.id!==this.crew!.playerId).forEach(p=>{const crewPlayer=this.ensureCrewPlayer(p.id);crewPlayer.avatar.userData.connected=p.connected;if(!p.connected){crewPlayer.action=null;crewPlayer.grabbed=null;this.bodies.forEach(b=>{if(b.owner===p.id)b.owner=undefined;});if(this.guestPilot===p.id){this.guestControls={roll:0,pitch:0,throttle:0};this.guestPilot=null;crewPlayer.piloting=false;this.state.autopilot=true;}}});
    }else if(event.type==='position'&&event.playerId!==this.crew.playerId){
      const player=this.ensureCrewPlayer(event.playerId);if(!player.piloting)player.pose={...event.pose,x:clamp(event.pose.x,-2,2),y:clamp(event.pose.y,1.4,2.1),z:clamp(event.pose.z,-12,11.6)};
    }else if(event.type==='action'&&this.crew.role==='host')this.receiveCrewAction(event.playerId,event.action);
    else if(event.type==='world'&&this.crew.role==='guest')this.applyCrewWorld(event.snapshot as CrewPacket);
    else if(event.type==='host-away'){this.localPaused=true;this.pause();this.state.announcement='hostAway';}
    else if(event.type==='host-back'){this.localPaused=false;this.resume();}
    else if(event.type==='ended'){this.pause();this.state.announcement='crewEnded';this.emit();}
  }
  private applyCrewWorld(packet:CrewPacket){
    if(!packet||packet.version!==1||!packet.state||!Array.isArray(packet.players))return;
    if(packet.round!==this.crewRound){this.crewRound=packet.round;this.simulation.start(packet.config);this.world.setRoute(packet.config.route);this.resetScene();const index=Math.max(1,this.crew!.players.findIndex(p=>p.id===this.crew!.playerId));const spawn=[[-1.5,9.6],[1.5,9.0],[0,10.5]][(index-1)%3];this.position.set(spawn[0],1.65,spawn[1]);this.onCrewRound?.(packet.config,packet.round);this.audio.start();}
    const oldPhase=this.state.phase;
    const local=packet.players.find(p=>p.id===this.crew!.playerId),wasPiloting=this.state.piloting,localPrompt=this.state.prompt,localTarget=this.state.target;
    Object.assign(this.state,packet.state,{item:local?.item??null,cups:local?.cups??0,piloting:local?.piloting??false,grabbed:local?.grabbed??null,prompt:localPrompt,target:localTarget});
    if(this.localPaused&&this.state.phase==='playing')this.state.phase='paused';
    if(this.state.phase!=='playing'&&oldPhase==='playing'){this.keys.clear();this.moveInput={x:0,y:0};this.audio.pause();if(document.pointerLockElement===this.renderer.domElement)document.exitPointerLock();}else if(this.state.phase==='playing'&&oldPhase!=='playing')this.audio.start();
    this.state.interactionProgress=local?.action?local.action.elapsed/local.action.duration:0;this.state.interactionLabel=local?.action?this.targets.find(t=>t.id===local.action!.id)?.label()??'':'';
    this.simulation.beltedIds=new Set(packet.belts);this.simulation.servedIds=new Set(packet.served);this.simulation.fedIds=new Set(packet.fed);
    if(this.state.item!==this.held?.userData.item){const item=this.state.item;this.setItem(item);if(this.held)this.held.userData.item=item;}
    if(this.state.piloting&&!wasPiloting){this.position.set(0,1.98,-11.15);this.yaw=0;this.pitch=-.06;}else if(!this.state.piloting&&wasPiloting){this.position.set(0,1.65,-10);this.yaw=this.pitch=0;}
    for(const player of packet.players){if(player.id===this.crew!.playerId)continue;const p=this.ensureCrewPlayer(player.id);Object.assign(p,{pose:player.pose,item:player.item,cups:player.cups,piloting:player.piloting,grabbed:player.grabbed,action:player.action});}
    const activeBodies=new Set(packet.bodies.map(b=>b.id));this.bodies=this.bodies.filter(body=>{if(body.disposable&&!activeBodies.has(body.id)){body.mesh.removeFromParent();releaseObject(body.mesh);return false;}return true;});
    for(const bodyState of packet.bodies){let body=this.bodies.find(b=>b.id===bodyState.id);if(!body&&bodyState.id.startsWith('thrown-')){const mesh=makeHeldItem(bodyState.kind??'suitcase',false);mesh.scale.setScalar(.65);this.world.root.add(mesh);body={id:bodyState.id,mesh,v:new THREE.Vector3(),home:new THREE.Vector3(),rotation:new THREE.Euler(),radius:.25,floor:.2,dynamic:true,disposable:true};this.bodies.push(body);}if(body){body.mesh.position.fromArray(bodyState.p);body.mesh.rotation.set(bodyState.r[0],bodyState.r[1],bodyState.r[2]);body.dynamic=bodyState.dynamic;}}
    this.emit();
  }
  private receiveCrewAction(id:string,action:FlightAction){
    if(this.state.phase!=='playing')return;const p=this.ensureCrewPlayer(id),s=this.state,kind=action.kind;
    if(kind==='pilotIdle'&&this.guestPilot===id){this.guestControls={roll:0,pitch:0,throttle:0};s.autopilot=true;return;}
    if(kind==='pilotControl'&&this.guestPilot===id){this.guestControlsAt=performance.now();this.guestControls={roll:clamp(Number(action.roll)||0,-1,1),pitch:clamp(Number(action.pitch)||0,-1,1),throttle:clamp(Number(action.throttle)||0,-1,1)};return;}
    if(kind==='autopilot'&&this.guestPilot===id){s.autopilot=!s.autopilot;return;}if(kind==='throttle'&&this.guestPilot===id){this.simulation.adjustThrottle(clamp(Number(action.delta)||0,-.1,.1));return;}
    if(kind==='grab'||kind==='throw'){
      if(p.piloting)return;
      if(p.grabbed){const body=this.bodies.find(b=>b.id===p.grabbed);if(body){body.owner=undefined;if(kind==='throw')body.v.set(-Math.sin(p.pose.yaw)*7,2,-Math.cos(p.pose.yaw)*7);}p.grabbed=null;return;}
      if(kind==='grab'){
        const body=this.bodies.find(b=>b.id===action.targetId);if(!body||!body.mesh.visible||body.owner||body===this.grabbed||body.mesh.position.distanceTo(new THREE.Vector3(p.pose.x,body.mesh.position.y,p.pose.z))>3)return;
        body.owner=id;body.dynamic=true;p.grabbed=body.id;p.item=null;p.cups=0;p.action=null;if(body.passenger!==undefined&&this.simulation.beltedIds.delete(body.passenger))s.belts--;
      }else if(p.item){this.spawnThrowable(p.item,new THREE.Vector3(p.pose.x,p.pose.y,p.pose.z),new THREE.Vector3(-Math.sin(p.pose.yaw)*5,1.5,-Math.cos(p.pose.yaw)*5));p.item=null;p.cups=0;p.action=null;}
      return;
    }
    if(kind!=='interact')return;const targetId=String(action.targetId??'');
    if(p.piloting){p.piloting=false;this.guestPilot=null;s.autopilot=true;p.pose={...p.pose,x:0,y:1.65,z:-10};return;}
    if(p.grabbed){const body=this.bodies.find(b=>b.id===p.grabbed);if(body)body.owner=undefined;p.grabbed=null;return;}
    const target=this.targets.find(t=>t.id===targetId);if(!target||!target.available()||target.pos().distanceTo(new THREE.Vector3(p.pose.x,p.pose.y,p.pose.z))>3.3)return;
    if(targetId==='cockpit'){if(s.piloting||this.guestPilot)return;const local=s.piloting;this.simulation.enterCockpit();s.piloting=local;this.guestPilot=id;p.piloting=true;p.pose={x:0,y:1.98,z:-11.15,yaw:0,pitch:-.06};p.action=null;p.item=null;return;}
    if(['galley','food','extinguisher','wrench'].includes(targetId)){p.item=(targetId==='galley'?'coffee':targetId) as FlightItem;p.cups=targetId==='galley'?3+this.simulation.config.upgradeService:targetId==='food'?2:0;p.action=null;return;}
    if(targetId==='fire'&&p.item!=='extinguisher'||targetId==='repair'&&p.item!=='wrench')return;
    p.action={id:targetId,elapsed:0,duration:targetId==='repair'?5:targetId==='fire'?5:targetId==='door'?4:targetId==='cargo'?3:1};
  }
  private updateCrewActions(dt:number){
    if(this.guestPilot&&performance.now()-this.guestControlsAt>750){this.guestControls={roll:0,pitch:0,throttle:0};this.state.autopilot=true;}
    for(const p of Array.from(this.crewPlayers.values())){if(!p.action)continue;const target=this.targets.find(t=>t.id===p.action!.id);if(!target||!target.available()||target.pos().distanceTo(new THREE.Vector3(p.pose.x,p.pose.y,p.pose.z))>3.3){p.action=null;continue;}
      p.action.elapsed+=dt*(1+this.simulation.config.upgradeService*.1);if(p.action.elapsed>=p.action.duration){const localItem=this.state.item,localCups=this.state.cups;this.state.item=p.item;this.state.cups=p.cups;const done=this.simulation.completeAction(p.action.id);p.cups=this.state.cups;if(p.cups<=0&&(p.item==='coffee'||p.item==='food'))p.item=null;this.state.item=localItem;this.state.cups=localCups;
        if(done&&p.action.id.startsWith('pax-')){const body=this.bodies.find(b=>b.id===p.action!.id);if(body)this.returnPassenger(body);}
        p.action=null;
      }
    }
  }
  private updateCrew(dt:number){
    if(!this.crew)return;this.crewClock+=dt;
    for(const player of Array.from(this.crewPlayers.values())){const previousItem=player.avatar.userData.heldItem as THREE.Group|undefined;if(player.avatar.userData.item!==player.item){if(previousItem){previousItem.removeFromParent();releaseObject(previousItem);}player.avatar.userData.item=player.item;player.avatar.userData.heldItem=undefined;if(player.item){const held=makeHeldItem(player.item,false);held.scale.setScalar(.65);held.position.set(.18,1.05,.34);held.rotation.y=Math.PI;player.avatar.add(held);player.avatar.userData.heldItem=held;}}player.avatar.visible=this.state.phase!=='ready'&&player.avatar.userData.connected!==false&&Math.hypot(player.pose.x-this.position.x,player.pose.z-this.position.z)>.7;player.avatar.position.lerp(new THREE.Vector3(player.pose.x,player.pose.y-1.65,player.pose.z),Math.min(1,dt*12));player.avatar.rotation.y=player.pose.yaw+Math.PI;}
    if(this.crewClock<.1)return;this.crewClock=0;this.crew.sendPosition(this.localPose());if(this.crew.role==='guest'&&this.state.piloting&&!this.localPaused)this.crew.sendAction({kind:'pilotControl',...this.guestControls});
    if(this.crew.role==='host'){
      const players=[{id:this.crew.playerId,pose:this.localPose(),item:this.state.item,cups:this.state.cups,piloting:this.state.piloting,grabbed:this.state.grabbed,action:this.action},...Array.from(this.crewPlayers.values()).map(p=>({id:p.id,pose:p.pose,item:p.item,cups:p.cups,piloting:p.piloting,grabbed:p.grabbed,action:p.action}))];
      const packet:CrewPacket={version:1,round:this.crewRound,config:this.simulation.config,state:{...this.state},belts:Array.from(this.simulation.beltedIds),served:Array.from(this.simulation.servedIds),fed:Array.from(this.simulation.fedIds),players,bodies:this.bodies.map(b=>({id:b.id,p:b.mesh.position.toArray(),r:[b.mesh.rotation.x,b.mesh.rotation.y,b.mesh.rotation.z],dynamic:b.dynamic,kind:b.kind}))};this.crew.publishWorld(packet);
    }
  }
  private backgroundTick(){
    if(!document.hidden||!this.crew||this.crew.role!=='host'||this.state.phase!=='playing')return;
    const now=performance.now();let elapsed=Math.min(1,(now-this.last)/1000);if(elapsed<.09)return;this.last=now;
    const localPilot=this.state.piloting;while(elapsed>0){const dt=Math.min(.05,elapsed);this.state.piloting=Boolean(localPilot||this.guestPilot);this.simulation.update(dt,this.guestPilot?this.guestControls:{roll:0,pitch:0,throttle:0});this.state.piloting=localPilot;this.updateCrewActions(dt);this.updatePhysics(dt);elapsed-=dt;}
    this.updateCrew(.11);this.emit();
  }
  private emit(){if(!this.disposed)this.onUpdate({...this.state,activeHazards:[...this.state.activeHazards],debrief:{...this.state.debrief}});}
  private frame=(now:number)=>{
    if(this.disposed)return;const elapsed=(now-(this.last||now))/1000,dt=Math.min(elapsed,.05);this.last=now;this.renderTime+=dt;this.sinceUI+=dt;const s=this.state;
    if(s.phase==='playing'){
      const roll=(this.keys.has('KeyD')||this.keys.has('ArrowRight')?1:0)-(this.keys.has('KeyA')||this.keys.has('ArrowLeft')?1:0)+this.moveInput.x;
      const pitch=(this.keys.has('KeyW')||this.keys.has('ArrowUp')?1:0)-(this.keys.has('KeyS')||this.keys.has('ArrowDown')?1:0)-this.moveInput.y;
      const localControls={roll:s.piloting?roll:0,pitch:s.piloting?pitch:0,throttle:s.piloting?(this.keys.has('KeyR')?1:0)-(this.keys.has('KeyF')?1:0):0};
      if(this.crew?.role!=='guest'){const localPilot=s.piloting;if(this.guestPilot)s.piloting=true;this.simulation.update(dt,this.guestPilot?this.guestControls:localControls);s.piloting=localPilot;this.updateCrewActions(dt);}else if(s.piloting)this.guestControls=localControls;
      if(!s.piloting)this.movePlayer(dt);else this.velocity.set(0,0,0);
      const turbulence=s.turbulence?(s.weather==='storm'?1:.65):0;
      this.world.update(this.renderTime,turbulence);this.world.setFlightState?.({stage:s.stage,altitude:s.altitude,speed:s.speed,bank:s.bank,pitch:s.pitch,pressure:s.pressure/100,fireIntensity:s.fireIntensity,weather:s.weather});
      this.world.fire.visible=this.simulation.isActive('fire');this.world.door.rotation.y=THREE.MathUtils.damp(this.world.door.rotation.y,this.simulation.isActive('door')?-1.12:0,3,dt);
      this.world.cart.position.x=.65+Math.sin(s.elapsed*2.4)*turbulence*.35;this.world.cart.rotation.z=Math.sin(s.elapsed*8)*turbulence*.045;
      this.world.cargo.rotation.z=this.simulation.isActive('cargo')?Math.sin(s.elapsed*7)*turbulence*.15:0;
      const walk=Math.min(1,this.velocity.length()/3),bob=s.piloting?0:Math.sin(s.elapsed*9)*.023*walk;
      this.camera.position.copy(this.position);this.camera.position.y+=bob+(s.turbulence?Math.sin(s.elapsed*23)*.018:0);
      this.camera.rotation.set(this.pitch+(s.piloting?s.pitch*Math.PI/180*.35:0),this.yaw,s.piloting?-s.bank*Math.PI/180*.45:Math.sin(s.elapsed*6)*turbulence*.024,'YXZ');
      this.idleHands.visible=!s.item&&!s.piloting;this.idleHands.position.y=-.12+Math.sin(s.elapsed*8)*.015*walk+(this.action?Math.sin(s.elapsed*7)*.045:0);this.idleHands.position.z=this.action?-.95:-.68;
      if(this.held){this.held.position.y=-.44+Math.sin(s.elapsed*8)*.017*walk;this.held.rotation.z=Math.sin(s.elapsed*5)*.025;}
      this.spray.visible=false;if(this.crew?.role!=='guest'){this.updateAction(dt);this.updatePhysics(dt);}this.updateTarget();
      for(const p of this.world.passengers){const required=SEATS.slice(0,s.requiredServed).includes(p.id),belted=this.simulation.beltedIds.has(p.id)||!required,body=this.bodies.find(b=>b.passenger===p.id)!;
        const needsFood=SEATS.slice(0,s.requiredFood).includes(p.id)&&!this.simulation.fedIds.has(p.id);
        this.world.setPassengerState?.(p.id,{belted,served:this.simulation.servedIds.has(p.id)&&!needsFood,panic:clamp((100-s.satisfaction)/100+(s.turbulence&&!belted?.5:0)+(this.simulation.isActive('fire')?.2:0),0,1),grabbed:body.dynamic});
        if(p.group.userData.belt)p.group.userData.belt.visible=belted;
        if(!body.dynamic){p.group.position.copy(body.home);p.group.position.y+=s.turbulence&&!belted?Math.abs(Math.sin(s.elapsed*8+p.id))*.2:0;}
        p.bubble.visible=required&&(!this.simulation.servedIds.has(p.id)||!belted||needsFood);
      }
      this.audio.update(s.speed,s.pressure,s.turbulence);if(s.announcement!==this.previousAnnouncement){this.previousAnnouncement=s.announcement;this.audio.tone(s.announcement.endsWith('Done')?'good':'alert');}
      if((s.phase as FlightSnapshot['phase'])==='result'){this.action=null;this.keys.clear();this.audio.pause();if(document.pointerLockElement===this.renderer.domElement)document.exitPointerLock();this.emit();}
    }else if(s.phase==='ready'){
      this.idleHands.visible=false;this.camera.position.set(-.1,1.76,9.2);this.camera.rotation.set(-.03,Math.sin(this.renderTime*.12)*.055,0,'YXZ');this.world.update(this.renderTime,.025);
      this.world.setFlightState?.({stage:'cruise',altitude:1200,speed:210,bank:0,pitch:0,pressure:1,fireIntensity:0});
      for(const p of this.world.passengers)p.bubble.visible=false;
    }
    this.updateCrew(dt);this.renderer.render(this.scene,this.camera);if(elapsed>0){this.frameSamples.push(elapsed);if(this.frameSamples.length>45)this.frameSamples.shift();}
    if(this.sinceUI>.1){s.fps=Math.round(this.frameSamples.length/Math.max(.001,this.frameSamples.reduce((sum,v)=>sum+v,0)));this.sinceUI=0;this.emit();}
    this.raf=requestAnimationFrame(this.frame);
  };
  dispose(){clearInterval(this.backgroundTimer);this.crewUnsubscribe?.();this.crewUnsubscribe=null;this.crewPlayers.forEach(p=>releaseObject(p.avatar));this.disposed=true;cancelAnimationFrame(this.raf);this.observer.disconnect();this.audio.dispose();if(document.pointerLockElement===this.renderer.domElement)document.exitPointerLock();window.removeEventListener('keydown',this.keyDown);window.removeEventListener('keyup',this.keyUp);window.removeEventListener('blur',this.blur);document.removeEventListener('visibilitychange',this.visibility);document.removeEventListener('pointerlockchange',this.lockChange);window.removeEventListener('pointermove',this.pointerMove);window.removeEventListener('pointerup',this.pointerUp);this.renderer.domElement.removeEventListener('pointerdown',this.pointerDown);this.renderer.domElement.removeEventListener('contextmenu',this.contextMenu);releaseObject(this.camera);this.bodies.filter(b=>b.disposable).forEach(b=>releaseObject(b.mesh));this.world.dispose();this.renderer.dispose();this.renderer.domElement.remove();}
}
