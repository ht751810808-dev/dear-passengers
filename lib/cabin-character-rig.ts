import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { CabinPassenger } from './cabin-scene';

/** The character's rest pose faces +Z. All targets passed to the updater are world positions. */
export interface PassengerRigState {
  belted?: boolean; served?: boolean; coffeeServed?: boolean; foodServed?: boolean;
  panic?: number; grabbed?: boolean; request?: string; turbulence?: number;
}
export interface CrewRigState { speed: number; pitch: number; piloting: boolean; held: string | null; working: boolean }
type Parent = THREE.Group | THREE.Scene;
type Outfit = 'holiday' | 'athlete' | 'denim' | 'beanie' | 'officer' | 'cardigan' | 'elder' | 'traveller';
type Arm = { upper: THREE.Group; lower: THREE.Group; shoulder: THREE.Vector3; upperLength: number; lowerLength: number; side: number; wrist: THREE.Vector3; elbow: THREE.Vector3 };
type Leg = { upper: THREE.Group; lower: THREE.Group; hip: THREE.Vector3; side: number; standing: boolean };
type CharacterRig = {
  id: number; standing: boolean; head: THREE.Group; eyes: THREE.Group; pupils: THREE.Group;
  mouth: THREE.Group; gasp: THREE.Group; lids: THREE.Group[]; arms: Arm[]; legs: Leg[]; torso: THREE.Group;
  cup: THREE.Group; food: THREE.Group; belt: THREE.Group; dynamicParts: THREE.Group[];
  pupilBase: THREE.Vector3; headBase: THREE.Vector3; headYaw: number; headPitch: number;
  outfit: Outfit; bubble?: THREE.Sprite; lastTime: number;
};
const Y_DOWN = new THREE.Vector3(0, -1, 0);
const clamp = THREE.MathUtils.clamp;
const palettes = [
  {skin:0xe4ae87,hair:0x624020,outfit:'athlete' as Outfit,cloth:0x182c32,pants:0x5c6871},
  {skin:0xc8906e,hair:0x292321,outfit:'denim' as Outfit,cloth:0x235975,pants:0x22272c},
  {skin:0xe5ad89,hair:0x755035,outfit:'holiday' as Outfit,cloth:0x156b62,pants:0x907653},
  {skin:0xd29872,hair:0x523e2b,outfit:'beanie' as Outfit,cloth:0x32718c,pants:0x314d62},
  {skin:0x9d6e50,hair:0x292522,outfit:'officer' as Outfit,cloth:0x283e58,pants:0x23313c},
  {skin:0xe0b19a,hair:0x463329,outfit:'cardigan' as Outfit,cloth:0x965647,pants:0x3d4651},
  {skin:0xc99475,hair:0xbec0bb,outfit:'elder' as Outfit,cloth:0x52556c,pants:0x626773},
  {skin:0xe5b088,hair:0x93532c,outfit:'traveller' as Outfit,cloth:0xc29a53,pants:0x475262},
];

function material(hex: THREE.ColorRepresentation, roughness=.79) { return new THREE.MeshStandardMaterial({color:hex,roughness}); }
function put(parent: Parent, geometry: THREE.BufferGeometry, mat: THREE.Material, x=0,y=0,z=0, shadow=true) {
  const mesh=new THREE.Mesh(geometry,mat);mesh.position.set(x,y,z);mesh.castShadow=shadow;mesh.receiveShadow=true;parent.add(mesh);return mesh;
}
function ellipsoid(parent:Parent,mat:THREE.Material,x:number,y:number,z:number,sx:number,sy=sx,sz=sx,shadow=true){
  const geometry=new THREE.SphereGeometry(1,24,16);geometry.scale(sx,sy,sz);return put(parent,geometry,mat,x,y,z,shadow);
}
function box(parent:Parent,mat:THREE.Material,w:number,h:number,d:number,x=0,y=0,z=0,r=.025){
  return put(parent,new RoundedBoxGeometry(w,h,d,2,Math.min(r,w*.3,h*.3,d*.3)),mat,x,y,z);
}
function tube(parent:Parent,mat:THREE.Material,points:number[][],radius:number,radial=7,segments=20){
  return put(parent,new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(v=>new THREE.Vector3(...v))),segments,radius,radial,false),mat);
}
function cylinder(parent:Parent,mat:THREE.Material,top:number,bottom:number,height:number,x=0,y=0,z=0,segments=28){return put(parent,new THREE.CylinderGeometry(top,bottom,height,segments),mat,x,y,z);}
function group(parent:Parent,x=0,y=0,z=0){const g=new THREE.Group();g.position.set(x,y,z);parent.add(g);return g;}
function profileGeometry(points:number[][],segments=36,radial=36){
  const curve=new THREE.SplineCurve(points.map(p=>new THREE.Vector2(p[0],p[1])));
  return new THREE.LatheGeometry(curve.getPoints(segments),radial);
}
function ring(parent:Parent,mat:THREE.Material,radius:number,width:number,x:number,y:number,z:number){return put(parent,new THREE.TorusGeometry(radius,width,7,36),mat,x,y,z);}

/** Original, repeating hibiscus/leaves textile, not a photograph pasted on the figure. */
function floralTexture(){
  const canvas=document.createElement('canvas');canvas.width=canvas.height=512;
  const ctx=canvas.getContext('2d')!;ctx.fillStyle='#185f5a';ctx.fillRect(0,0,512,512);
  const leaf=(x:number,y:number,a:number,length:number,color:string)=>{
    ctx.save();ctx.translate(x,y);ctx.rotate(a);ctx.fillStyle=color;ctx.beginPath();ctx.moveTo(0,0);ctx.bezierCurveTo(-14,-length*.27,-11,-length*.75,0,-length);ctx.bezierCurveTo(16,-length*.67,12,-length*.22,0,0);ctx.fill();ctx.strokeStyle='#c0c867';ctx.lineWidth=1.1;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(0,-length*.86);ctx.stroke();ctx.restore();
  };
  for(let n=0;n<24;n++){
    const x=(n*173+23)%512,y=(n*97+31)%512,a=n*2.37;
    ctx.save();ctx.translate(x,y);ctx.rotate(a);ctx.strokeStyle='#adbb62';ctx.lineWidth=2.6;ctx.beginPath();ctx.moveTo(0,38);ctx.quadraticCurveTo(12,0,0,-48);ctx.stroke();ctx.restore();
    for(let j=0;j<4;j++){const offset=j*14;leaf(x+Math.sin(a)*offset,y-Math.cos(a)*offset,a+(j%2?-.7:.7),37+(n%3)*5,j%2?'#80a050':'#bac15a');}
  }
  for(let n=0;n<15;n++){
    const x=(n*193+75)%512,y=(n*131+59)%512;
    ctx.save();ctx.translate(x,y);ctx.rotate(n*1.77);
    for(let p=0;p<5;p++){ctx.rotate(Math.PI*2/5);const gradient=ctx.createRadialGradient(0,0,2,0,-14,27);gradient.addColorStop(0,'#a73d59');gradient.addColorStop(.6,'#eb7590');gradient.addColorStop(1,'#f4a195');ctx.fillStyle=gradient;ctx.beginPath();ctx.moveTo(0,0);ctx.bezierCurveTo(-21,-12,-17,-34,0,-29);ctx.bezierCurveTo(21,-33,22,-10,0,0);ctx.fill();}
    ctx.strokeStyle='#f4cb68';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(0,0);ctx.quadraticCurveTo(5,-5,15,-19);ctx.stroke();ctx.fillStyle='#ffdb77';ctx.beginPath();ctx.arc(15,-19,3,0,Math.PI*2);ctx.fill();ctx.restore();
  }
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(4.5,2.35);texture.anisotropy=4;return texture;
}
function emblemTexture(){
  const canvas=document.createElement('canvas');canvas.width=256;canvas.height=192;const ctx=canvas.getContext('2d')!;ctx.clearRect(0,0,256,192);
  ctx.strokeStyle='#a6b75b';ctx.fillStyle='#a6b75b';ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(121,132);ctx.quadraticCurveTo(132,89,131,40);ctx.stroke();
  for(let n=0;n<7;n++){const a=n/7*Math.PI*2;ctx.beginPath();ctx.moveTo(131,43);ctx.quadraticCurveTo(131+Math.cos(a)*45,43+Math.sin(a)*14,131+Math.cos(a)*61,43+Math.sin(a)*36);ctx.quadraticCurveTo(131+Math.cos(a)*25,43+Math.sin(a)*17,131,43);ctx.fill();}
  ctx.fillStyle='#bdc3aa';ctx.textAlign='center';ctx.font='bold 18px sans-serif';ctx.fillText('ISLAND ATHLETIC',128,156);ctx.font='12px sans-serif';ctx.fillText('SUN  •  SURF  •  FLIGHT',128,175);
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;return texture;
}

/** One smooth, long capsule mesh: straight cheek walls and a rounded, continuous jaw. */
function makeHead(parent:Parent,id:number,skin:number,hair:number,outfit:Outfit,standing=false){
  const head=group(parent,0,standing?1.345:1.965,.006);if(standing)head.scale.setScalar(.55);
  const wider=outfit==='holiday'?1.055:outfit==='cardigan'?.935:1;
  const geometry=profileGeometry([[0,-.565],[.145,-.545],[.24,-.485],[.285,-.375],[.299,-.19],[.302,.08],[.31,.31],[.282,.465],[.19,.558],[0,.595]],46,44);
  geometry.scale(wider,1,.935);
  const vertices=geometry.attributes.position,colors=new Float32Array(vertices.count*3),base=new THREE.Color(skin),blush=new THREE.Color(skin).lerp(new THREE.Color(0xae695b),.18);
  for(let n=0;n<vertices.count;n++){
    const x=vertices.getX(n),y=vertices.getY(n),z=vertices.getZ(n);
    // Tiny asymmetry and a flatter lower lip plane keep the face from reading as a toy ball.
    const cheek=Math.max(0,1-Math.abs(Math.abs(x)-.20)*7)*Math.max(0,1-Math.abs(y+.06)*7)*Math.max(0,z*5);
    const tint=base.clone().lerp(blush,cheek);colors.set([tint.r,tint.g,tint.b],n*3);
    if(y<-.27&&z>0)vertices.setZ(n,z+.008*(1-Math.abs(x)/.31));
  }
  geometry.setAttribute('color',new THREE.BufferAttribute(colors,3));
  const skinMat=material(skin),faceMat=material(0xffffff);faceMat.vertexColors=true;put(head,geometry,faceMat);
  for(const side of [-1,1]){
    ellipsoid(head,skinMat,side*.302*wider,-.047,-.025,.045,.082,.050);
    ellipsoid(head,material(new THREE.Color(skin).multiplyScalar(.86)),side*.329*wider,-.055,.004,.016,.038,.023);
  }
  const eyes=group(head,0,.118,0),pupils=group(eyes),lids=[group(eyes,0,0,.292),group(eyes,0,0,.292)];
  const white=material(0xfffaf0,.21),black=material(0x13191b,.24),rimMat=material(new THREE.Color(skin).multiplyScalar(.91));
  const tired=outfit==='elder'?.93:1,eyeSeparation=outfit==='holiday'?.17:.168;
  for(const side of [-1,1]){
    // Nearly spherical exposed eyeballs, with the socket ring behind the globe rather than glasses in front.
    const socket=ring(head,rimMat,.184,.008,side*eyeSeparation,.118,.264);socket.scale.set(.98,1.1,1);
    ellipsoid(eyes,white,side*eyeSeparation,0,.292,.177,.195*tired,.180,false);
    ellipsoid(pupils,black,side*eyeSeparation,-.012,.466,.040,.047,.013,false);
    ellipsoid(pupils,material(0xffffff,.21),side*eyeSeparation-.010,.005,.478,.007,.010,.003,false);
    const browY=.365+(outfit==='elder'?-.018:0);
    const brow=tube(head,material(hair),[[side*eyeSeparation-.115,browY-.018,.306],[side*eyeSeparation,browY+.013+(side===1&&id%3===1?.027:0),.33],[side*eyeSeparation+.108,browY-.009,.303]],outfit==='elder'?.013:.017,6,16);
    brow.castShadow=false;
  }
  for(let lid=0;lid<2;lid++){
    for(const side of [-1,1]){
      const shell=new THREE.SphereGeometry(1,24,12,0,Math.PI*2,lid===0?0:Math.PI/2,Math.PI/2);shell.scale(.188,.207,.207);put(lids[lid],shell,skinMat,side*eyeSeparation,0,0,false);
    }
    lids[lid].visible=false;
  }
  // A short bridge, not a separate round nose stuck between the eyes.
  const noseGeo=profileGeometry([[0,-.06],[.032,-.054],[.039,-.023],[.029,.047],[0,.075]],18,20);noseGeo.scale(1,1,.7);put(head,noseGeo,skinMat,0,-.085,.294);
  const mouth=group(head,0,-.255,.287),gasp=group(head,0,-.26,.287);gasp.visible=false;
  const lip=material(new THREE.Color(skin).lerp(new THREE.Color(0x8e4946),.5));
  const expressions=[[-.012,-.029,.018],[-.004,-.018,.018],[-.008,-.006,-.016],[.013,-.018,.01],[.004,.002,-.006],[-.008,-.019,.005],[.006,-.005,-.016],[.004,-.028,.02]];
  const expression=expressions[id%8];
  tube(mouth,material(0x7f5148),[[-.143,expression[0],-.024],[-.061,expression[1],.010],[.055,expression[1]-.002,.009],[.14,expression[2],-.024]],.009,6,20).castShadow=false;
  tube(mouth,lip,[[-.117,expression[0]-.017,-.011],[-.015,expression[1]-.018,.015],[.105,expression[2]-.018,-.009]],.010,6,18).castShadow=false;
  ellipsoid(gasp,material(0x683d39),0,-.006,.006,.082,.106,.022,false);
  ellipsoid(gasp,material(0xc9847e),0,-.068,.025,.049,.020,.007,false);
  if(outfit==='elder'){
    tube(head,material(new THREE.Color(skin).multiplyScalar(.78)),[[-.102,-.137,.288],[-.055,-.128,.313],[0,-.14,.318],[.055,-.128,.313],[.102,-.137,.288]],.012,6,20).castShadow=false;
    for(const side of [-1,1])tube(head,material(new THREE.Color(skin).multiplyScalar(.86)),[[side*.278,-.02,.232],[side*.268,-.095,.252],[side*.227,-.148,.268]],.005,5,10).castShadow=false;
  }
  if(outfit==='beanie')makeBeanie(head);
  else if(outfit==='officer'||standing)makeCap(head,standing?0x403770:0x25394f);
  else makeHair(head,hair,outfit);
  return {head,eyes,pupils,mouth,gasp,lids};
}

function makeHair(head:THREE.Group,hairColor:number,outfit:Outfit){
  const geo=new THREE.BufferGeometry(),positions:number[]=[],indices:number[]=[],colors:number[]=[],base=new THREE.Color(hairColor);
  const around=56,down=22,elder=outfit==='elder',bob=outfit==='cardigan'||outfit==='denim';
  const skullProfile=new THREE.SplineCurve([[0,-.565],[.145,-.545],[.24,-.485],[.285,-.375],[.299,-.19],[.302,.08],[.31,.31],[.282,.465],[.19,.558],[0,.595]].map(p=>new THREE.Vector2(p[0],p[1]))).getPoints(200);
  const skullRadius=(height:number)=>{if(height>=.595)return 0;for(let n=1;n<skullProfile.length;n++){const a=skullProfile[n-1],b=skullProfile[n];if(a.y<=height&&b.y>=height)return THREE.MathUtils.lerp(a.x,b.x,(height-a.y)/Math.max(.00001,b.y-a.y));}return .3;};
  for(let row=0;row<=down;row++)for(let col=0;col<=around;col++){
    const angle=col/around*Math.PI*2,front=Math.max(0,Math.sin(angle)),t=row/down;
    const hairline=front>.05?.365-front*.024+Math.sin(angle*4+.8)*.024:(bob?-.27:-.095)+Math.cos(angle*2)*.028;
    const top=.629+(outfit==='athlete'?.059:elder?.02:0);
    const y=top-(top-hairline)*t;
    const radius=skullRadius(.595-(top-y)*.99)+.018*Math.sin(t*Math.PI/2);
    const part=Math.sin(angle*18+t*2.4)*.0055*Math.sin(t*Math.PI);
    const swoop=(outfit==='athlete'||elder)?Math.pow(front,3)*Math.sin(t*Math.PI)*.037:0;
    const x=Math.cos(angle)*(radius+part)*(outfit==='holiday'?1.06:1);
    positions.push(x,y+swoop,Math.sin(angle)*(radius*.955+part)-.013);
    const c=base.clone().multiplyScalar(.91+Math.cos(angle*18+t*2.4)*.04+(1-t)*.19);colors.push(c.r,c.g,c.b);
    if(row<down&&col<around){const a=row*(around+1)+col,b=a+around+1;indices.push(a,a+1,b,b,a+1,b+1);}
  }
  geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));geo.setIndex(indices);geo.computeVertexNormals();const mat=material(0xffffff);mat.vertexColors=true;put(head,geo,mat);
  const strand=material(new THREE.Color(hairColor).multiplyScalar(1.07));
  if(outfit==='athlete'||elder){
    for(let n=0;n<8;n++){
      const x=-.256+n*.071;
      tube(head,strand,[[x,.44,.22],[x+.026,.583,.252],[x+.074,.66-(n/8)*.055,.09],[x+.028,.572,-.11]],.025+(n<4?.006:0),7,20);
    }
  }else if(bob){
    for(let n=0;n<5;n++){
      const x=-.26+n*.104;
      tube(head,strand,[[x-.025,.40,.23],[x+.055,.565,.225],[x+.095,.592,.05],[x+.070,.48,-.15]],.021,7,18);
    }
    if(outfit==='cardigan'){
      const bun=ellipsoid(head,material(hairColor),.02,.16,-.337,.155,.174,.141);bun.rotation.z=-.18;
      for(let n=0;n<4;n++)tube(head,strand,[[-.10+n*.06,.08,-.405],[-.10+n*.06,.20,-.47],[-.07+n*.045,.29,-.392]],.012,6,12);
    }
  }else{
    for(let n=0;n<6;n++){const x=-.23+n*.084;tube(head,strand,[[x,.402,.249],[x+.028,.54,.208],[x+.062,.604,.035]],.019,6,16);}
  }
}
function makeBeanie(head:THREE.Group){
  const green=material(0x138964),shade=material(0x087953);
  const hatGeo=profileGeometry([[0,.405],[.31,.405],[.337,.435],[.329,.62],[.278,.744],[.13,.786],[0,.79]],32,40);hatGeo.scale(1,1,.95);put(head,hatGeo,green,0,0,-.017);
  for(let i=0;i<28;i++){const angle=i/28*Math.PI*2;const r=.336;tube(head,shade,[[Math.cos(angle)*r,.415,Math.sin(angle)*r*.95-.017],[Math.cos(angle)*r,.47,Math.sin(angle)*r*.95-.017]],.0045,5,5);}
  for(const side of [-1,1]){ellipsoid(head,green,side*.205,.773,-.045,.083,.083,.08);ellipsoid(head,shade,side*.205,.788,.021,.039,.037,.015);}
}
function makeCap(head:THREE.Group,hatColor:number){
  const navy=material(hatColor),band=material(0x1c2937),gold=material(0xdab25c,.49);
  const capGeo=profileGeometry([[0,.51],[.26,.51],[.337,.55],[.391,.615],[.355,.686],[.18,.723],[0,.73]],26,40);capGeo.scale(1,1,.85);put(head,capGeo,navy,0,0,-.027);
  cylinder(head,band,.329,.322,.082,0,.517,-.028,36).scale.z=.86;
  const peak=ellipsoid(head,band,0,.478,.20,.335,.025,.255);peak.rotation.x=.08;
  tube(head,gold,[[-.292,.496,.115],[-.18,.493,.246],[0,.489,.288],[.18,.493,.246],[.292,.496,.115]],.011,6,22);
  ellipsoid(head,gold,0,.608,.302,.037,.042,.012);
  for(const side of [-1,1]){
    const wing=new THREE.Shape();wing.moveTo(side*.023,0);wing.lineTo(side*.19,.022);wing.lineTo(side*.16,-.025);wing.lineTo(side*.035,-.035);wing.closePath();
    const mesh=put(head,new THREE.ExtrudeGeometry(wing,{depth:.009,bevelEnabled:true,bevelSize:.003,bevelThickness:.003,bevelSegments:1,steps:1}),gold,0,.615,.300);mesh.rotation.z=side*.04;
    for(let n=0;n<3;n++)box(head,band,.011,.035,.010,side*(.073+n*.029),.605,.313,.002).rotation.z=-side*.6;
  }
}

function makeTorso(root:THREE.Group,outfit:Outfit,skin:number,cloth:number,pants:number,fabric:THREE.Texture|undefined,standing:boolean){
  const body=group(root),scale=standing?.66:1,center=standing?.80:1.13;
  const clothMat=material(cloth),skinMat=material(skin),pantsMat=material(pants),cream=material(0xe8e4d8);
  // Profile transitions from hip to ribcage and shoulder in one surface.
  const torsoGeometry=profileGeometry([[0,-.35],[.235,-.347],[.304,-.275],[.326,-.10],[.339,.15],[.325,.29],[.205,.34],[.115,.352],[0,.352]],36,40);torsoGeometry.scale(scale,scale,.73*scale);
  if(!standing){
    const vertices=torsoGeometry.attributes.position;
    for(let n=0;n<vertices.count;n++){
      const y=vertices.getY(n),x=vertices.getX(n),z=vertices.getZ(n);
      const belly=Math.max(0,1-Math.abs(y+.13)*3.3);
      if(outfit==='holiday')vertices.setXYZ(n,x*(1+belly*.115),y,z*(1+belly*.16));
      else if(outfit==='athlete')vertices.setX(n,x*(.92+clamp((y+.30)/.55,0,1)*.17));
      else if(outfit==='cardigan'||outfit==='elder')vertices.setX(n,x*.94);
    }
  }
  const topMat=outfit==='holiday'?material(0xffffff):clothMat;
  if(outfit==='holiday'){topMat.map=floralTexture();topMat.bumpMap=fabric??null;topMat.bumpScale=.005;}
  put(body,torsoGeometry,topMat,0,center,0);
  if(standing){body.scale.x=1.12;}
  const local=group(body,0,center,0);local.scale.setScalar(scale);
  cylinder(local,skinMat,.122,.137,.18,0,.362,0);
  if(outfit==='athlete'){
    // Scoop-neck vest, bare muscular shoulders and a small printed chest graphic.
    ellipsoid(local,skinMat,0,.275,.166,.18,.117,.073);
    for(const side of [-1,1])box(local,clothMat,.094,.262,.077,side*.215,.227,.177,.032).rotation.z=-side*.16;
    tube(local,material(0xa8ad79),[[-.168,.28,.235],[-.104,.196,.25],[0,.176,.25],[.104,.196,.25],[.168,.28,.235]],.011,6,20);
    const decal=put(local,new THREE.PlaneGeometry(.40,.30),new THREE.MeshStandardMaterial({map:emblemTexture(),transparent:true,depthWrite:false,roughness:.94}),0,.022,.250,false);decal.renderOrder=1;
  }else{
    const open=outfit==='denim'||outfit==='beanie'||outfit==='elder'||outfit==='cardigan'||outfit==='traveller';
    if(open){
      box(local,cream,.264,.55,.035,0,.025,.25,.04);
      for(const side of [-1,1]){
        const lapel=box(local,clothMat,.119,.50,.061,side*.18,.02,.258,.025);lapel.rotation.z=side*.046;
        tube(local,material(new THREE.Color(cloth).multiplyScalar(1.25)),[[side*.23,.27,.259],[side*.167,.09,.296],[side*.178,-.226,.296]],.007,5,16);
      }
    }
    for(const side of [-1,1]){
      const collarShape=new THREE.Shape();collarShape.moveTo(-.069,.049);collarShape.lineTo(.059,.059);collarShape.lineTo(.074,-.012);collarShape.lineTo(.007,-.104);collarShape.lineTo(-.068,-.017);collarShape.closePath();const collar=put(local,new THREE.ExtrudeGeometry(collarShape,{depth:.013,bevelEnabled:true,bevelSize:.006,bevelThickness:.004,bevelSegments:2,steps:1}),(outfit==='elder'?cream:topMat),side*.092,.315,.214);collar.rotation.z=side*.32;collar.rotation.x=.10;
    }
    if(outfit==='officer'||standing){
      box(local,material(0x263447),.044,.292,.025,0,.085,.279,.007);
      const shape=new THREE.Shape();shape.moveTo(-.023,0);shape.lineTo(.023,0);shape.lineTo(.035,-.09);shape.lineTo(0,-.125);shape.lineTo(-.035,-.09);shape.closePath();put(local,new THREE.ShapeGeometry(shape),material(0x263447),0,-.027,.296);
      for(const side of [-1,1]){
        box(local,topMat,.152,.114,.025,side*.19,.02,.256,.012);
        box(local,material(new THREE.Color(cloth).multiplyScalar(.82)),.151,.014,.028,side*.19,.065,.274,.005);
        for(let n=0;n<3;n++)box(local,material(0xe0b968),.068,.012,.063,side*.267,.299,.01+n*.025,.004);
      }
      ellipsoid(local,material(0xe3b967),-.18,.058,.278,.028,.035,.008);
    }else if(!open){
      box(local,topMat,.026,.56,.019,.017,-.006,.255,.006);
      for(let n=0;n<4;n++)ellipsoid(local,material(0xdddfc5),.022,.196-n*.125,.272,.012,.012,.006,false);
      box(local,topMat,.14,.135,.024,-.176,.07,.234,.012);
    }
    if(outfit==='denim'){
      tube(local,material(0xc8ab5a,.49),[[-.098,.281,.228],[-.074,.184,.286],[0,.154,.285],[.074,.184,.286],[.098,.281,.228]],.009,6,18);
      for(const side of [-1,1])box(local,clothMat,.126,.15,.028,side*.207,.067,.249,.010);
    }
    if(outfit==='elder'){
      const scarf=material(0xe3ddd1);
      tube(local,scarf,[[-.157,.305,.185],[-.115,.249,.238],[0,.232,.258],[.129,.249,.221],[.159,.317,.174]],.048,10,22);
      box(local,scarf,.079,.28,.055,-.14,.080,.290,.018).rotation.z=-.12;
    }
  }
  if(!standing){
    ellipsoid(body,pantsMat,0,.910,.06,.337,.154,.25);
    box(body,material(0x604b38),.565,.060,.030,0,.971,.257,.012);
    box(body,material(0xc7b796,.49),.076,.075,.026,.015,.969,.283,.012);
  }
  return {body,clothMat:topMat};
}

/** A tapered continuous limb, capped at both ends. Its long axis points down local Y. */
function limbGeometry(length:number,top:number,bottom:number){
  return profileGeometry([[0,.033],[top*.72,.024],[top,0],[top*.97,-length*.20],[bottom*1.12,-length*.72],[bottom,-length*.94],[bottom*.73,-length-.018],[0,-length-.024]].reverse(),26,20);
}
function makeArm(root:THREE.Group,side:number,skin:number,cloth:number,outfit:Outfit,standing:boolean,floral?:THREE.Material):Arm{
  const shoulder=new THREE.Vector3(side*(standing?.252:.346),standing?1.015:1.414,-.012),upperLength=standing?.233:.323,lowerLength=standing?.205:.292;
  const upper=group(root),lower=group(root),skinMat=material(skin),clothMat=floral??material(cloth),shortSleeve=outfit==='holiday'||outfit==='officer'||standing,bare=outfit==='athlete';
  const radius=standing?.082:bare?.131:.124;
  put(upper,limbGeometry(upperLength,radius,standing?.064:.097),bare||shortSleeve?skinMat:clothMat);
  if(shortSleeve){put(upper,limbGeometry(upperLength*.60,radius*1.09,radius*.95),clothMat);cylinder(upper,material(new THREE.Color(cloth).multiplyScalar(.82)),radius*.965,radius*.965,.018,0,-upperLength*.60,0);}
  put(lower,limbGeometry(lowerLength,standing?.066:.098,standing?.046:.061),bare||shortSleeve?skinMat:clothMat);
  if(!bare&&!shortSleeve)cylinder(lower,material(new THREE.Color(cloth).multiplyScalar(.81)),standing?.053:.072,standing?.053:.072,.046,0,-lowerLength+.004,0);
  const handScale=standing?.72:1;
  const hand=group(lower,0,-lowerLength-.023,.018);hand.scale.setScalar(handScale);
  ellipsoid(hand,skinMat,0,-.022,0,.078,.098,.046);
  // Three continuous phalanges per finger read as a hand in silhouette, not four beads.
  for(let n=0;n<4;n++){
    const x=(n-1.5)*.037,len=.081-Math.abs(n-1.5)*.009;
    tube(hand,skinMat,[[x,-.066,.004],[x,-.103,.008],[x+.002,-.103-len*.47,.023],[x+.003,-.101-len*.70,.041]],.019-(n===3?.002:0),8,14);ellipsoid(hand,skinMat,x+.003,-.101-len*.70,.041,.018-(n===3?.002:0));
  }
  tube(hand,skinMat,[[side*.064,-.003,.005],[side*.096,-.041,.022],[side*.097,-.078,.054]],.025,8,14);ellipsoid(hand,skinMat,side*.097,-.078,.054,.024);
  if(outfit==='athlete')tube(upper,material(new THREE.Color(skin).multiplyScalar(.90)),[[side*.068,-.068,.087],[side*.071,-.16,.08],[side*.045,-.23,.070]],.007,5,12).castShadow=false;
  return {upper,lower,shoulder,upperLength,lowerLength,side,wrist:new THREE.Vector3(),elbow:new THREE.Vector3()};
}
function makeLeg(root:THREE.Group,side:number,skin:number,pants:number,outfit:Outfit,standing:boolean):Leg{
  const upper=group(root),lower=group(root),hip=new THREE.Vector3(side*(standing?.125:.182),standing?.645:.956,.015);
  const pantsMat=material(pants),skinMat=material(skin),shoe=material(outfit==='holiday'||outfit==='elder'?0x795137:0x373d41),sole=material(0x8d897d);
  if(standing){
    put(upper,limbGeometry(.292,.084,.064),skinMat);put(lower,limbGeometry(.282,.065,.048),skinMat);
    ellipsoid(lower,skinMat,0,-.280,.067,.073,.056,.137);
  }else{
    const shorts=outfit==='athlete';
    put(upper,limbGeometry(.585,.169,.139),pantsMat);
    put(lower,limbGeometry(.715,.113,.078),shorts?skinMat:pantsMat);
    if(shorts)cylinder(upper,material(new THREE.Color(pants).multiplyScalar(.8)),.140,.140,.035,0,-.567,0);
    else{
      tube(upper,material(new THREE.Color(pants).multiplyScalar(1.13)),[[side*.113,-.09,.108],[side*.121,-.24,.10],[side*.111,-.39,.087]],.005,5,14).castShadow=false;
      for(let n=0;n<2;n++)tube(lower,material(new THREE.Color(pants).multiplyScalar(.84)),[[-.076,-.08-n*.033,.091],[0,-.065-n*.033,.114],[.08,-.09-n*.033,.093]],.006,5,12).castShadow=false;
    }
    ellipsoid(lower,shoe,0,-.737,.092,.13,.091,.224);
    ellipsoid(lower,sole,0,-.789,.098,.132,.029,.221);
    for(let n=0;n<3;n++)box(lower,material(0xb3a78e),.087,.012,.018,0,-.681,.068+n*.04,.005).rotation.x=-.20;
    if(outfit==='beanie'){
      const tear=new THREE.Shape();tear.moveTo(-.08,0);tear.lineTo(.034,.026);tear.lineTo(.084,-.011);tear.lineTo(-.024,-.038);tear.closePath();put(upper,new THREE.ShapeGeometry(tear),skinMat,0,-.24,.163,false);
      tube(upper,material(0x9faeac),[[-.075,-.24,.164],[-.021,-.229,.170],[.064,-.247,.163]],.005,5,10).castShadow=false;
    }
  }
  return {upper,lower,hip,side,standing};
}
function makeBelt(root:THREE.Group){
  const belt=group(root,0,.125,0);belt.visible=false;const webbing=material(0x31373d),metal=material(0xb9c5cb,.45),gold=material(0xddb65c,.45);
  const path=new THREE.CatmullRomCurve3([new THREE.Vector3(-.445,.825,.07),new THREE.Vector3(-.335,.848,.268),new THREE.Vector3(0,.845,.389),new THREE.Vector3(.335,.848,.268),new THREE.Vector3(.445,.825,.07)]);
  const positions:number[]=[],indices:number[]=[];
  for(let n=0;n<=28;n++){
    const center=path.getPoint(n/28);
    for(const [y,z] of [[-.044,-.015],[.044,-.015],[.044,.015],[-.044,.015]])positions.push(center.x,center.y+y,center.z+z);
    if(n<28)for(let edge=0;edge<4;edge++){const a=n*4+edge,b=n*4+(edge+1)%4;indices.push(a,b,a+4,b,b+4,a+4);}
  }
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setIndex(indices);geometry.computeVertexNormals();put(belt,geometry,webbing);
  box(belt,metal,.155,.113,.055,0,.847,.42,.016);box(belt,gold,.079,.071,.014,.017,.847,.452,.009);
  return belt;
}
function makeCup(parent:THREE.Group){
  const cup=group(parent),paper=material(0x94383d),lid=material(0xe3d2b2);
  cylinder(cup,paper,.076,.054,.205,0,.101,0);cylinder(cup,lid,.081,.081,.026,0,.218,0);cylinder(cup,lid,.067,.078,.016,0,.237,0);
  cylinder(cup,material(0xd3b795),.072,.065,.055,0,.101,0);box(cup,material(0x76614d),.026,.005,.010,0,.248,.038,.003);cup.visible=false;return cup;
}
function makeBurger(parent:THREE.Group){
  const food=group(parent),bread=material(0xd9a054),meat=material(0x624131),lettuce=material(0x6f9741),cheese=material(0xe0b940);
  cylinder(food,bread,.10,.09,.027,0,.015,0);cylinder(food,meat,.10,.098,.025,0,.043,0);cylinder(food,lettuce,.112,.105,.012,0,.062,0,16);box(food,cheese,.184,.012,.18,0,.074,0,.005).rotation.y=.18;
  const top=new THREE.SphereGeometry(.104,24,12,0,Math.PI*2,0,Math.PI/2);top.scale(1,.50,1);put(food,top,bread,0,.079,0);
  for(let n=0;n<10;n++){const a=n*2.399,r=.023+(n%3)*.022;const seed=ellipsoid(food,material(0xf4d199),Math.cos(a)*r,.13-r*.16,Math.sin(a)*r,.008,.0025,.003,false);seed.rotation.y=a;}
  food.visible=false;return food;
}

/** Bake solid colours, then merge each rigid part independently. Animated pivots remain intact. */
function optimiseRig(root:THREE.Group,parts:THREE.Group[]){
  const matte=new THREE.MeshStandardMaterial({color:0xffffff,vertexColors:true,roughness:.79});
  const gloss=new THREE.MeshStandardMaterial({color:0xffffff,vertexColors:true,roughness:.24});
  const metals=new THREE.MeshStandardMaterial({color:0xffffff,vertexColors:true,roughness:.45,metalness:.15});
  const retired=new Set<THREE.Material>(),textures=new Set<THREE.Texture>();
  root.traverse(node=>{
    if(!(node instanceof THREE.Mesh)||Array.isArray(node.material))return;
    const mat=node.material;if(!(mat instanceof THREE.MeshStandardMaterial)||mat.map||mat.transparent)return;
    const geom=node.geometry,position=geom.attributes.position,existing=geom.attributes.color,values=new Float32Array(position.count*3);
    for(let i=0;i<position.count;i++){values[i*3]=mat.color.r*(existing&&mat.vertexColors?existing.getX(i):1);values[i*3+1]=mat.color.g*(existing&&mat.vertexColors?existing.getY(i):1);values[i*3+2]=mat.color.b*(existing&&mat.vertexColors?existing.getZ(i):1);}
    geom.setAttribute('color',new THREE.BufferAttribute(values,3));if(!geom.attributes.uv)geom.setAttribute('uv',new THREE.BufferAttribute(new Float32Array(position.count*2),2));
    retired.add(mat);node.material=mat.roughness<.3?gloss:mat.roughness<.55?metals:matte;
  });
  const dynamic=new Set<THREE.Object3D>(parts),usedGeometries=new Set<THREE.BufferGeometry>();
  const mergePart=(part:THREE.Group)=>{
    root.updateWorldMatrix(true,true);const inverse=part.matrixWorld.clone().invert(),buckets=new Map<string,THREE.Mesh[]>();
    const visit=(node:THREE.Object3D)=>{
      if(dynamic.has(node)&&node!==part)return;
      if(node instanceof THREE.Mesh&&!Array.isArray(node.material)){
        const key=`${node.material.uuid}|${node.castShadow}|${node.receiveShadow}|${node.renderOrder}`;
        const meshes=buckets.get(key)??[];meshes.push(node);buckets.set(key,meshes);
      }
      for(const child of node.children)visit(child);
    };for(const child of part.children)visit(child);
    for(const meshes of Array.from(buckets.values())){
      if(meshes.length<2)continue;
      const geometries=meshes.map(mesh=>{
        const geo=mesh.geometry.clone();if(!geo.index){const size=geo.attributes.position.count,indices=size>65535?new Uint32Array(size):new Uint16Array(size);for(let n=0;n<size;n++)indices[n]=n;geo.setIndex(new THREE.BufferAttribute(indices,1));}
        geo.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse,mesh.matrixWorld));return geo;
      });
      const merged=mergeGeometries(geometries,false);geometries.forEach(g=>g.dispose());if(!merged)continue;
      merged.computeBoundingSphere();const mesh=new THREE.Mesh(merged,meshes[0].material);mesh.name=`Character rigid batch (${meshes.length})`;mesh.castShadow=meshes[0].castShadow;mesh.receiveShadow=meshes[0].receiveShadow;mesh.renderOrder=meshes[0].renderOrder;part.add(mesh);
      for(const original of meshes){usedGeometries.add(original.geometry);original.removeFromParent();}
    }
  };
  mergePart(root);for(const part of parts)mergePart(part);
  const liveMaterials=new Set<THREE.Material>(),liveGeometries=new Set<THREE.BufferGeometry>();root.traverse(node=>{if(node instanceof THREE.Mesh){liveGeometries.add(node.geometry);for(const mat of Array.isArray(node.material)?node.material:[node.material]){liveMaterials.add(mat);Object.values(mat).forEach(value=>{if(value instanceof THREE.Texture)textures.add(value);});}}});
  retired.forEach(mat=>{if(!liveMaterials.has(mat))mat.dispose();});for(const mat of [matte,gloss,metals])if(!liveMaterials.has(mat))mat.dispose();usedGeometries.forEach(geo=>{if(!liveGeometries.has(geo))geo.dispose();});
  root.userData.rigTextures=textures;root.userData.rigBatchCount=Array.from(liveGeometries).length;
}

function buildCharacter(parent:Parent,id:number,x:number,z:number,fabric?:THREE.Texture,standing=false):{root:THREE.Group;rig:CharacterRig}{
  const root=group(parent,x,0,z),preset=palettes[((id%8)+8)%8],outfit=standing?'officer':preset.outfit;
  const skin=standing?[0x0da6d0,0xce564a,0xedc42a,0x28b474][((id%4)+4)%4]:preset.skin,cloth=standing?0xe5e8e1:preset.cloth,pants=standing?skin:preset.pants;
  root.name=standing?`Crew ${id}`:`Passenger ${id} · ${outfit}`;
  const {body,clothMat}=makeTorso(root,outfit,skin,cloth,pants,fabric,standing);
  const {head,eyes,pupils,mouth,gasp,lids}=makeHead(root,id,skin,preset.hair,outfit,standing);
  const arms=[-1,1].map(side=>makeArm(root,side,skin,cloth,outfit,standing,outfit==='holiday'?clothMat:undefined));
  const legs=[-1,1].map(side=>makeLeg(root,side,skin,pants,outfit,standing));
  const belt=standing?group(root):makeBelt(root),cup=makeCup(root),food=makeBurger(root);
  const dynamicParts=[body,head,eyes,pupils,mouth,gasp,...lids,belt,...arms.flatMap(a=>[a.upper,a.lower]),...legs.flatMap(l=>[l.upper,l.lower]),cup,food];
  const rig:CharacterRig={id,standing,head,eyes,pupils,mouth,gasp,lids,arms,legs,torso:body,cup,food,belt,dynamicParts,pupilBase:pupils.position.clone(),headBase:head.position.clone(),headYaw:0,headPitch:0,outfit,lastTime:0};
  root.userData.characterRig=rig;root.userData.dynamicParts=dynamicParts;root.userData.belt=belt;root.userData.head=head;root.userData.eyes=eyes;root.userData.mouth=mouth;root.userData.gasp=gasp;
  root.userData.arms=arms.map(a=>a.upper);root.userData.leftArm=arms[0].upper;root.userData.rightArm=arms[1].upper;root.userData.legs=legs.map(l=>l.upper);
  root.userData.visualState={belted:false,served:false,panic:0,grabbed:false,request:'coffee'};
  optimiseRig(root,dynamicParts);
  if(standing)updateCrewRig(root,0,{speed:0,pitch:0,piloting:false,held:null,working:false});else updatePassengerRig(root,0,root.userData.visualState);
  return {root,rig};
}

export function createPassenger(parent:Parent,id:number,x:number,z:number,bubbleTexture:THREE.Texture,fabric:THREE.Texture):CabinPassenger{
  const {root,rig}=buildCharacter(parent,id,x,z,fabric);
  const bubble=new THREE.Sprite(new THREE.SpriteMaterial({map:bubbleTexture,transparent:true,depthTest:true}));bubble.position.set(0,2.88,.02);bubble.scale.set(.49,.49,1);root.add(bubble);rig.bubble=bubble;
  return {id,group:root,position:new THREE.Vector3(x,1.4,z),bubble};
}
export function createCrewAvatar(index:number):THREE.Group{
  const temporary=new THREE.Group(),{root}=buildCharacter(temporary,index,0,0,undefined,true);root.removeFromParent();return root;
}

// Reused temporary vectors: no allocations in the per-frame articulated arm solver.
const direction=new THREE.Vector3(),bend=new THREE.Vector3(),upperDirection=new THREE.Vector3(),lowerDirection=new THREE.Vector3(),localLook=new THREE.Vector3(),worldOrigin=new THREE.Vector3(),handTarget=new THREE.Vector3(),elbowHint=new THREE.Vector3();
function poseArm(arm:Arm,target:THREE.Vector3,hint:THREE.Vector3){
  direction.copy(target).sub(arm.shoulder);const distance=clamp(direction.length(),.025,arm.upperLength+arm.lowerLength-.009);direction.normalize();
  arm.wrist.copy(arm.shoulder).addScaledVector(direction,distance);
  bend.copy(hint).sub(arm.shoulder);bend.addScaledVector(direction,-bend.dot(direction));if(bend.lengthSq()<.001)bend.set(arm.side,0,0);bend.normalize();
  const along=(arm.upperLength*arm.upperLength-arm.lowerLength*arm.lowerLength+distance*distance)/(2*distance),height=Math.sqrt(Math.max(0,arm.upperLength*arm.upperLength-along*along));
  arm.elbow.copy(arm.shoulder).addScaledVector(direction,along).addScaledVector(bend,height);
  arm.upper.position.copy(arm.shoulder);upperDirection.copy(arm.elbow).sub(arm.shoulder).normalize();arm.upper.quaternion.setFromUnitVectors(Y_DOWN,upperDirection);
  arm.lower.position.copy(arm.elbow);lowerDirection.copy(arm.wrist).sub(arm.elbow).normalize();arm.lower.quaternion.setFromUnitVectors(Y_DOWN,lowerDirection);arm.lower.rotateY(Math.PI);
}
function poseLeg(leg:Leg,time:number,motion:number,grabbed:boolean){
  leg.upper.position.copy(leg.hip);
  if(leg.standing){
    leg.upper.rotation.set(Math.sin(time*8.5+leg.side*Math.PI*.5)*motion*.47,0,0);
    leg.lower.position.copy(leg.hip).add(new THREE.Vector3(0,-.292,0).applyEuler(leg.upper.rotation));
    leg.lower.rotation.set(leg.upper.rotation.x-Math.max(0,-Math.sin(time*8.5+leg.side*Math.PI*.5))*motion*.49,0,0);
  }else{
    const knee=new THREE.Vector3(leg.side*.232,.890,.598),ankle=new THREE.Vector3(leg.side*.245,.190,.696);
    if(grabbed){knee.y+=Math.sin(time*5+leg.side)*.13;knee.x+=Math.sin(time*6+leg.side)*.045;ankle.z+=Math.sin(time*7+leg.side)*.13;}
    else ankle.z+=Math.sin(time*1.8+leg.side*2.1)*motion*.028;
    upperDirection.copy(knee).sub(leg.hip).normalize();leg.upper.quaternion.setFromUnitVectors(Y_DOWN,upperDirection);
    leg.lower.position.copy(knee);lowerDirection.copy(ankle).sub(knee).normalize();leg.lower.quaternion.setFromUnitVectors(Y_DOWN,lowerDirection);
  }
}
function animateFace(root:THREE.Group,rig:CharacterRig,time:number,panic:number,lookTarget?:THREE.Vector3){
  const dt=clamp(time-rig.lastTime,0,.08)||.016;rig.lastTime=time;
  let targetYaw=Math.sin(time*.31+rig.id*1.91)*.11,targetPitch=Math.sin(time*.73+rig.id)*.018;
  if(lookTarget){
    root.updateWorldMatrix(true,false);worldOrigin.copy(lookTarget);localLook.copy(worldOrigin);root.worldToLocal(localLook);localLook.sub(rig.headBase);
    if(localLook.length()<5.3&&localLook.z>-.3){targetYaw=clamp(Math.atan2(localLook.x,Math.max(.2,localLook.z)),-.55,.55);targetPitch=clamp(-Math.atan2(localLook.y,Math.hypot(localLook.x,localLook.z)),-.19,.20);}
  }
  rig.headYaw=THREE.MathUtils.damp(rig.headYaw,targetYaw,2.6,dt);rig.headPitch=THREE.MathUtils.damp(rig.headPitch,targetPitch,3,dt);
  rig.head.rotation.set(rig.headPitch+Math.sin(time*(panic>.5?4.5:1.4)+rig.id)*(.010+panic*.027),rig.headYaw,Math.sin(time*.9+rig.id*2.2)*.022+Math.sin(time*9+rig.id)*panic*.055);
  const period=4.7+rig.id*.29,blink=(time+rig.id*1.313)%period;let eyeOpen=blink<.16?Math.max(.045,Math.abs(blink-.08)/.08):1;
  if(rig.outfit==='elder')eyeOpen*=.94;
  rig.eyes.scale.y=1;rig.lids[0].rotation.x=-Math.PI*.5*eyeOpen;rig.lids[1].rotation.x=Math.PI*.5*eyeOpen;rig.lids.forEach(lid=>{lid.visible=eyeOpen<.999;});rig.pupils.position.x=clamp(targetYaw-rig.headYaw,-.4,.4)*.076+Math.sin(time*.58+rig.id)*.007;rig.pupils.position.y=clamp(-targetPitch+rig.headPitch,-.25,.25)*.08;
  rig.mouth.visible=panic<.58;rig.gasp.visible=panic>=.58;rig.gasp.scale.set(1+Math.sin(time*5+rig.id)*panic*.05,.75+panic*.45,1);
}

export function updatePassengerRig(root:THREE.Group,time:number,state:PassengerRigState,lookTarget?:THREE.Vector3){
  const rig=root.userData.characterRig as CharacterRig|undefined;if(!rig||rig.standing)return;
  const panic=clamp(state.panic??0,0,1),grabbed=!!state.grabbed,turbulence=state.turbulence??0;
  animateFace(root,rig,time,panic,lookTarget);rig.belt.visible=!!state.belted;
  rig.torso.scale.y=1+Math.sin(time*1.5+rig.id*1.8)*.006;rig.head.position.y=rig.headBase.y+Math.sin(time*1.5+rig.id*1.8)*.005;
  const cycle=(time+rig.id*2.73)%(12.4+rig.id*.23),hasCoffee=state.coffeeServed??state.served??false,hasFood=state.foodServed??false;
  const sipping=hasCoffee&&!grabbed&&panic<.58&&cycle>1.2&&cycle<5.9;
  const eating=hasFood&&!grabbed&&panic<.58&&cycle>7.1&&cycle<10.7;
  const smooth=(v:number)=>{v=clamp(v,0,1);return v*v*(3-2*v);};
  const sipWeight=sipping?smooth(Math.min(cycle-1.2,5.9-cycle)/1.0):0;
  const eatWeight=eating?smooth(Math.min(cycle-7.1,10.7-cycle)/.75):0;
  rig.cup.visible=hasCoffee&&!grabbed&&panic<.72&&!eating;rig.food.visible=hasFood&&!grabbed&&panic<.72&&eating;
  for(const arm of rig.arms){
    const side=arm.side;
    handTarget.set(side*.586,1.155,.378);elbowHint.set(side*.68,1.02,-.02);
    if(grabbed){handTarget.set(side*(.64+Math.sin(time*4.3+rig.id+side)*.085),1.91+Math.sin(time*5.1+rig.id+side)*.16,.37);elbowHint.set(side*.69,1.75,-.14);}
    else if(panic>.57){
      const wave=Math.sin(time*(3.1+rig.id*.15)+rig.id*2+side*1.8);
      if((rig.id%3===0&&side===-1)||panic>.88){handTarget.set(side*.47,1.73+wave*.16,.34);elbowHint.set(side*.68,1.34,.06);}
      else {handTarget.set(side*.55,1.12+Math.max(0,wave)*.065,.39);elbowHint.set(side*.62,1.01,.02);}
    }else if(side===1&&hasCoffee){
      handTarget.lerp(new THREE.Vector3(.120,1.603,.515),sipWeight);
      if(!sipping)handTarget.set(.42,1.125,.46);
      elbowHint.set(.67,1.115,.17);rig.head.rotation.x-=sipWeight*.065;
    }else if(side===-1&&eating){handTarget.lerp(new THREE.Vector3(-.098,1.610,.445),eatWeight);elbowHint.set(-.65,1.14,.20);}
    else {handTarget.y+=Math.sin(time*.87+rig.id+side)*.009+turbulence*Math.sin(time*9+rig.id+side)*.02;}
    poseArm(arm,handTarget,elbowHint);
    if(side===1){rig.cup.position.copy(arm.wrist).add(new THREE.Vector3(-.039,-.078,.006));rig.cup.rotation.set(-sipWeight*.63,0,-.10+Math.sin(time*.75+rig.id)*.025);}
    else{rig.food.position.copy(arm.wrist).add(new THREE.Vector3(.028,-.03,.032));rig.food.rotation.set(eatWeight*.27,0,.11);}
  }
  for(const leg of rig.legs)poseLeg(leg,time+rig.id*1.31,panic*.5+turbulence*.2,grabbed);
  if(eating&&eatWeight>.90){rig.mouth.visible=false;rig.gasp.visible=true;rig.gasp.scale.set(.72,.32,1);}
  if(rig.bubble)rig.bubble.position.y=2.88+Math.sin(time*1.9+rig.id)*.036;
}

export function updateCrewRig(root:THREE.Group,time:number,state:CrewRigState){
  const rig=root.userData.characterRig as CharacterRig|undefined;if(!rig||!rig.standing)return;
  const movement=clamp(state.speed/2.9,0,1),working=state.working?1:0;
  animateFace(root,rig,time,0);rig.head.rotation.x=clamp(-state.pitch,-.36,.36);
  rig.head.position.y=rig.headBase.y+Math.sin(time*17)*movement*.008;
  rig.torso.position.y=Math.sin(time*17)*movement*.006;
  for(const leg of rig.legs)poseLeg(leg,time+rig.id*.39,movement,false);
  for(const arm of rig.arms){
    const side=arm.side,swing=Math.sin((time+rig.id*.39)*8.5+side*Math.PI*.5)*movement;
    handTarget.set(side*.27,.66,.026-swing*.15);elbowHint.set(side*.33,.86,-.02);
    if(state.piloting){handTarget.set(side*.20,.98,.32);elbowHint.set(side*.35,.89,.08);}
    else if(state.held&&side===1){handTarget.set(.165,1.024,.292);elbowHint.set(.37,.867,.11);}
    else if(working){handTarget.set(side*.24,1.06+Math.sin(time*6+side)*.04,.28);elbowHint.set(side*.34,.91,.08);}
    poseArm(arm,handTarget,elbowHint);
  }
}
