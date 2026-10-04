import * as THREE from "three";
import { createPassenger, createCrewAvatar, updatePassengerRig } from "./cabin-character-rig";
import { buildDetailedFlightDeck, addCabinStillLife } from "./cabin-interior";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { mergeGeometries, mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { buildCabinEffects, buildVolumetricFire, makeContactShadowTexture, makeFabricTexture, type CabinFlightVisualState } from './cabin-effects';

export interface PassengerVisualState { belted: boolean; served: boolean; panic: number; grabbed: boolean; request: string; coffeeServed?: boolean; foodServed?: boolean }
export interface CabinLooseObject { id: string; kind: 'parcel' | 'food' | 'animal'; group: THREE.Group; position: THREE.Vector3 }

export interface CabinPassenger {
  id: number;
  group: THREE.Group;
  position: THREE.Vector3;
  bubble: THREE.Sprite;
}

export interface CabinWorld {
  root: THREE.Group;
  passengers: CabinPassenger[];
  cart: THREE.Group;
  door: THREE.Group;
  fire: THREE.Group;
  cargo: THREE.Group;
  galley: THREE.Vector3;
  cockpit: THREE.Vector3;
  objects: CabinLooseObject[];
  setRoute(route: number): void;
  setFlightState(state: Partial<CabinFlightVisualState>): void;
  setPassengerState(id: number, state: Partial<PassengerVisualState>): void;
  setLowQuality(enabled: boolean): void;
  update(time: number, turbulence: number): void;
  dispose(): void;
}

type Parent = THREE.Group | THREE.Scene;
const color = {
  wall: 0xe4e2da, white: 0xfffcf0, trim: 0xb9bdc5, dark: 0x283b53,
  blue: 0x1977dd, seat: 0x1362b9, carpet: 0x1d3966, gold: 0xf8bc43,
};

function mat(hex: THREE.ColorRepresentation, roughness = .72, metalness = 0) {
  return new THREE.MeshStandardMaterial({ color: hex, roughness, metalness });
}

// Most small cartoon parts differ only in their solid colour. Baking that colour
// into vertices lets a whole face/body share a draw call without losing its palette.
function bakeSolidColours(root:THREE.Group,retired:Set<THREE.Material>){
  const shared=new Map<string,THREE.MeshStandardMaterial>();
  root.traverse(object=>{
    if(!(object instanceof THREE.Mesh)||Array.isArray(object.material)||(object as THREE.InstancedMesh).isInstancedMesh)return;
    const material=object.material;
    if(!(material instanceof THREE.MeshStandardMaterial)||material.transparent||material.map||material.normalMap||material.alphaMap||material.emissive.getHex()!==0||material.metalness>.12)return;
    const roughness=material.roughness<.5?.43:.86;
    const bumpScale=material.bumpMap?(material.bumpScale<=.005?.004:.01):0;
    const key=`${roughness}|${material.side}|${material.bumpMap?.uuid||''}|${bumpScale}`;
    let replacement=shared.get(key);
    if(!replacement){replacement=new THREE.MeshStandardMaterial({color:0xffffff,vertexColors:true,roughness,side:material.side,bumpMap:material.bumpMap,bumpScale});shared.set(key,replacement);}
    const geometry=object.geometry,vertices=geometry.attributes.position,existing=geometry.attributes.color;
    const colours=new Float32Array(vertices.count*3);
    for(let i=0;i<vertices.count;i++){
      colours[i*3]=material.color.r*(material.vertexColors&&existing?existing.getX(i):1);
      colours[i*3+1]=material.color.g*(material.vertexColors&&existing?existing.getY(i):1);
      colours[i*3+2]=material.color.b*(material.vertexColors&&existing?existing.getZ(i):1);
    }
    geometry.setAttribute('color',new THREE.BufferAttribute(colours,3));
    if(!geometry.attributes.uv)geometry.setAttribute('uv',new THREE.BufferAttribute(new Float32Array(vertices.count*2),2));
    object.material=replacement;retired.add(material);
  });
}

/** Keep logical/animated groups, but submit their stationary pieces together. */
function batchStaticGeometry(group: THREE.Group, skip: Set<THREE.Object3D>,
  removedGeometries: Set<THREE.BufferGeometry>, removedMaterials: Set<THREE.Material>) {
  group.updateWorldMatrix(true, true);
  const inverse = group.matrixWorld.clone().invert();
  const signatures = new Map<THREE.Material, string>();
  const buckets = new Map<string, THREE.Mesh[]>();
  const visit = (object: THREE.Object3D) => {
    if (skip.has(object)) return;
    if (object instanceof THREE.Mesh && !Array.isArray(object.material) && !(object as THREE.SkinnedMesh).isSkinnedMesh && !(object as THREE.InstancedMesh).isInstancedMesh && object.visible) {
      const material = object.material;
      let signature = signatures.get(material);
      if (!signature) {
        // toJSON includes every relevant material setting plus texture UUIDs.
        // Seed texture references so no canvas is encoded to PNG just for a key.
        const metadata = { textures: {} as Record<string, { uuid: string }>, images: {} };
        for (const value of Object.values(material)) {
          if (value && (value as THREE.Texture).isTexture) {
            const texture = value as THREE.Texture;
            metadata.textures[texture.uuid] = { uuid: texture.uuid };
          }
        }
        const data = material.toJSON(metadata) as Record<string, unknown>;
        delete data.uuid; delete data.name; delete data.metadata; delete data.textures; delete data.images;
        signature = JSON.stringify(data); signatures.set(material, signature);
      }
      const attributes = Object.entries(object.geometry.attributes).map(([key, value]) => {
        const attribute = value as THREE.BufferAttribute;
        return `${key}:${attribute.itemSize}:${attribute.normalized}`;
      }).sort().join(",");
      const key = `${signature}|${object.castShadow}|${object.receiveShadow}|${object.renderOrder}|${object.layers.mask}|${attributes}`;
      const bucket = buckets.get(key) || []; bucket.push(object); buckets.set(key, bucket);
    }
    for (const child of object.children) visit(child);
  };
  for (const child of group.children) visit(child);
  for (const meshes of Array.from(buckets.values())) {
    if (meshes.length < 2) continue;
    const pieces = meshes.map(mesh => {
      const geometry = mesh.geometry.clone();
      // Keep indexed spheres indexed; expanding them would nearly double the
      // GPU attribute memory. Give non-indexed rounded boxes a sequential index.
      if (!geometry.index) {
        const count = geometry.attributes.position.count;
        const index = count > 65535 ? new Uint32Array(count) : new Uint16Array(count);
        for (let i = 0; i < count; i++) index[i] = i;
        geometry.setIndex(new THREE.BufferAttribute(index, 1));
      }
      geometry.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse, mesh.matrixWorld));
      return geometry;
    });
    const geometry = mergeGeometries(pieces, false);
    pieces.forEach(piece => piece.dispose());
    if (!geometry) continue;
    geometry.computeBoundingSphere(); geometry.computeBoundingBox();
    const first = meshes[0];
    const merged = new THREE.Mesh(geometry, first.material);
    merged.name = `Cabin batch · ${meshes.length} pieces`;
    merged.castShadow = first.castShadow; merged.receiveShadow = first.receiveShadow;
    merged.renderOrder = first.renderOrder; merged.layers.mask = first.layers.mask;
    group.add(merged);
    for (const mesh of meshes) {
      removedGeometries.add(mesh.geometry); removedMaterials.add(mesh.material as THREE.Material);
      mesh.removeFromParent();
    }
  }
}

function optimiseStandalone(group:THREE.Group,parts:THREE.Group[]=[]){
  const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>();
  bakeSolidColours(group,materials);batchStaticGeometry(group,new Set(parts),geometries,materials);
  for(const part of parts)batchStaticGeometry(part,new Set(),geometries,materials);
  const liveGeo=new Set<THREE.BufferGeometry>(),liveMat=new Set<THREE.Material>();
  group.traverse(o=>{const mesh=o as THREE.Mesh;if(mesh.geometry)liveGeo.add(mesh.geometry);if(mesh.material)(Array.isArray(mesh.material)?mesh.material:[mesh.material]).forEach(m=>liveMat.add(m));});
  geometries.forEach(g=>{if(!liveGeo.has(g))g.dispose();});materials.forEach(m=>{if(!liveMat.has(m))m.dispose();});
  return group;
}

function box(parent: Parent, w: number, h: number, d: number, material: THREE.Material,
  x = 0, y = 0, z = 0, radius = .04) {
  const geometry = radius > 0 ? new RoundedBoxGeometry(w, h, d, 2, Math.min(radius, w / 3, h / 3, d / 3)) : new THREE.BoxGeometry(w, h, d);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function sphere(parent: Parent, material: THREE.Material, x: number, y: number, z: number,
  sx: number, sy = sx, sz = sx) {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 14), material);
  mesh.position.set(x, y, z);
  mesh.scale.set(sx, sy, sz);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function cylinder(parent: Parent, material: THREE.Material, top: number, bottom: number,
  height: number, x: number, y: number, z: number, segments = 20) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(top, bottom, height, segments), material);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function limb(parent: Parent, material: THREE.Material, start: number[], end: number[], radius: number) {
  const a = new THREE.Vector3(...start as [number, number, number]);
  const b = new THREE.Vector3(...end as [number, number, number]);
  const length = a.distanceTo(b);
  const mesh = new THREE.Mesh(new THREE.CapsuleGeometry(radius, Math.max(.001, length - radius * 2), 4, 10), material);
  mesh.position.copy(a).lerp(b, .5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.sub(a).normalize());
  mesh.castShadow = true;
  parent.add(mesh);
  return mesh;
}

function roundPath(width: number, height: number, radius: number, x = 0, y = 0) {
  const shape = new THREE.Shape();
  const left = x - width / 2, right = x + width / 2, bottom = y - height / 2, top = y + height / 2;
  shape.moveTo(left + radius, bottom);
  shape.lineTo(right - radius, bottom);
  shape.quadraticCurveTo(right, bottom, right, bottom + radius);
  shape.lineTo(right, top - radius);
  shape.quadraticCurveTo(right, top, right - radius, top);
  shape.lineTo(left + radius, top);
  shape.quadraticCurveTo(left, top, left, top - radius);
  shape.lineTo(left, bottom + radius);
  shape.quadraticCurveTo(left, bottom, left + radius, bottom);
  return shape;
}

function plaque(text: string, bg: string, fg: string, width = 512, height = 128) {
  const canvas = document.createElement("canvas");
  canvas.width = width; canvas.height = height;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = bg; ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = fg; ctx.font = `800 ${height * .56}px Arial, sans-serif`;
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.fillText(text, width / 2, height * .53, width * .92);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
}

function label(parent: Parent, text: string, w: number, h: number, x: number, y: number, z: number,
  bg = "#263c58", fg = "#fff4d6") {
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), plaque(text, bg, fg));
  mesh.position.set(x, y, z); parent.add(mesh); return mesh;
}

function bubbleTexture(kind:'coffee'|'food'='coffee') {
  const canvas = document.createElement("canvas"); canvas.width = 128; canvas.height = 128;
  const ctx = canvas.getContext("2d")!;
  ctx.shadowColor = "rgba(18,38,61,.23)"; ctx.shadowBlur = 10; ctx.shadowOffsetY = 4;
  ctx.fillStyle = "#fffaf0";
  ctx.beginPath(); ctx.roundRect(9, 7, 110, 99, 25); ctx.fill();
  ctx.beginPath(); ctx.moveTo(48, 101); ctx.lineTo(63, 122); ctx.lineTo(79, 101); ctx.fill();
  ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;
  ctx.fillStyle = "#b45335"; ctx.beginPath(); ctx.moveTo(40, 47); ctx.lineTo(86, 47); ctx.lineTo(78, 86); ctx.lineTo(47, 86); ctx.closePath(); ctx.fill();
  ctx.fillStyle = "#f2d8a6"; ctx.fillRect(36, 39, 54, 10); ctx.fillRect(45, 65, 36, 10);
  ctx.strokeStyle = "#29445d"; ctx.lineWidth = 4; ctx.lineCap = "round";
  for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.moveTo(48 + i * 14, 30); ctx.quadraticCurveTo(41 + i * 14, 22, 48 + i * 14, 16); ctx.stroke(); }
  if(kind==='food'){
    ctx.fillStyle='#fffaf0';ctx.fillRect(29,13,70,77);
    ctx.fillStyle='#d8913f';ctx.beginPath();ctx.ellipse(64,48,28,21,0,Math.PI,Math.PI*2);ctx.fill();
    ctx.fillStyle='#79a449';ctx.beginPath();ctx.roundRect(32,50,64,9,4);ctx.fill();
    ctx.fillStyle='#704332';ctx.beginPath();ctx.roundRect(35,62,59,11,4);ctx.fill();
    ctx.fillStyle='#edbe54';ctx.fillRect(35,58,59,5);
    ctx.fillStyle='#dca159';ctx.beginPath();ctx.roundRect(37,76,55,11,5);ctx.fill();
    ctx.fillStyle='#f7db9f';for(let n=0;n<6;n++){ctx.beginPath();ctx.ellipse(46+n%3*17,36+Math.floor(n/3)*7,2.8,1.2,-.35,0,Math.PI*2);ctx.fill();}
  }
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeCup(parent: Parent, x = 0, y = 0, z = 0, scale = 1) {
  const group = new THREE.Group(); group.position.set(x, y, z); group.scale.setScalar(scale); parent.add(group);
  cylinder(group, mat(0xa64139), .105, .073, .29, 0, .145, 0);
  cylinder(group, mat(0xdfba86), .096, .09, .073, 0, .143, 0);
  cylinder(group, mat(0xf5dfb2), .115, .116, .033, 0, .303, 0);
  cylinder(group, mat(0xe1c796), .1, .114, .019, 0, .328, 0);
  box(group, .041, .008, .016, mat(0x584330), 0, .34, .059, .004);
  return group;
}

function suitcase(parent: Parent, hue: number, x: number, y: number, z: number, scale = 1) {
  const g = new THREE.Group(); g.position.set(x, y, z); g.scale.setScalar(scale); parent.add(g);
  const shell = mat(hue, .55); const edge = mat(new THREE.Color(hue).multiplyScalar(.65));
  box(g, .66, .49, .47, shell, 0, .245, 0, .065);
  for (const offset of [-.20, -.1, 0, .1, .2]) box(g, .018, .36, .012, edge, offset, .245, .241, .007);
  box(g, .68, .02, .485, edge, 0, .25, 0, .01);
  box(g, .21, .05, .075, mat(0x293744), 0, .532, 0, .022);
  for (const side of [-1, 1]) { box(g, .045, .075, .065, edge, side * .085, .505, 0, .008); sphere(g, mat(0x172b3a), side * .25, .015, .17, .055); }
  box(g, .12, .13, .01, mat(0xfff4d7), .18, .34, .25, .01).rotation.z = -.18;
  return g;
}

function makeFood(parent:Parent,x=0,y=0,z=0,scale=1){
  const group=new THREE.Group();group.position.set(x,y,z);group.scale.setScalar(scale);parent.add(group);
  const bread=mat(0xdfa75a,.92),filling=mat(0x694330,.93),lettuce=mat(0x70a342,.95);
  cylinder(group,bread,.15,.135,.037,0,.025,0);
  cylinder(group,filling,.148,.147,.032,0,.064,0);
  const leaf=cylinder(group,lettuce,.162,.16,.022,0,.093,0,18);leaf.rotation.y=.24;
  box(group,.253,.012,.242,mat(0xf0c34e,.85),0,.111,0,.009).rotation.y=.25;
  const bun=new THREE.Mesh(new THREE.SphereGeometry(.155,20,12,0,Math.PI*2,0,Math.PI/2),bread);bun.position.y=.12;bun.scale.y=.42;bun.castShadow=true;group.add(bun);
  const sesame=mat(0xf6d797,.92);
  for(let n=0;n<9;n++){const a=n*2.4,r=.035+(n%3)*.027;const seed=sphere(group,sesame,Math.cos(a)*r,.174-(r/.155)*.015,Math.sin(a)*r,.010,.0035,.004);seed.rotation.y=a;}
  return group;
}

function makeLooseObjects(parent:THREE.Group,fabric:THREE.Texture):CabinLooseObject[]{
  const parcel=new THREE.Group();parcel.position.set(-.72,.035,2.7);parent.add(parcel);
  const cardboard=mat(0xb68a5b,.98);cardboard.bumpMap=fabric;cardboard.bumpScale=.01;
  box(parcel,.46,.34,.39,cardboard,0,.17,0,.025);
  for(const x of [-.10,.10])box(parcel,.043,.352,.404,mat(0xdfc59b,.9),x,.171,0,.005);
  label(parcel,'FRAGILE',.29,.075,0,.23,.203,'#dfcca5','#694a37');
  box(parcel,.16,.10,.008,mat(0xefe6ca),.07,.105,.203,.004);
  const tray=new THREE.Group();tray.position.set(.81,1.215,7.02);parent.add(tray);
  box(tray,.48,.036,.34,mat(0x8ba5b1,.5),0,0,0,.04);
  makeFood(tray,-.065,.019,-.015,.82);
  box(tray,.14,.012,.18,mat(0xe5dfce,.95),.13,.027,.015,.007);
  const carrier=new THREE.Group();carrier.position.set(-1.37,.025,9.76);parent.add(carrier);
  const cage=mat(0x687f8c,.42,.35),plastic=mat(0xdd9b43,.76),lining=mat(0xd8c8a4,.94);
  box(carrier,.88,.105,.73,plastic,0,.052,0,.058);box(carrier,.79,.025,.63,lining,0,.117,0,.03);
  for(const x of [-.414,.414])for(const z of [-.335,.335])box(carrier,.052,.58,.052,cage,x,.37,z,.022);
  for(const y of [.17,.40,.65])for(const z of [-.335,.335])box(carrier,.85,.025,.024,cage,0,y,z,.008);
  for(let n=-3;n<=3;n++)for(const z of [-.335,.335])box(carrier,.018,.49,.022,cage,n*.114,.409,z,.007);
  for(const side of [-1,1])for(let n=-2;n<=2;n++)box(carrier,.021,.49,.018,cage,side*.414,.409,n*.127,.006);
  box(carrier,.88,.060,.73,plastic,0,.69,0,.04);
  box(carrier,.26,.043,.09,cage,0,.80,0,.018);for(const x of [-.108,.108])box(carrier,.035,.10,.065,cage,x,.755,0,.01);
  box(carrier,.08,.11,.04,plastic,.335,.34,.358,.018);
  const animal=new THREE.Group();animal.position.set(0,.12,0);carrier.add(animal);carrier.userData.animal=animal;
  const green=mat(0x779856,.94),belly=mat(0xced4a0,.94),white=mat(0xf7efd1,.8),black=mat(0x263329,.6);
  sphere(animal,green,0,.13,-.035,.23,.12,.28);
  const tailCurve=new THREE.CatmullRomCurve3([new THREE.Vector3(0,.1,-.20),new THREE.Vector3(-.12,.10,-.30),new THREE.Vector3(-.27,.14,-.22)]);
  animal.add(new THREE.Mesh(new THREE.TubeGeometry(tailCurve,14,.040,7,false),green));
  for(const side of [-1,1])for(const z of [-.10,.12])limb(animal,green,[side*.15,.11,z],[side*.27,.048,z+.05],.048);
  const animalHead=new THREE.Group();animalHead.position.set(0,.17,.16);animal.add(animalHead);carrier.userData.animalHead=animalHead;
  box(animalHead,.28,.125,.30,green,0,.028,.005,.048);
  box(animalHead,.23,.052,.21,belly,0,-.037,.047,.025);
  for(const side of [-1,1]){
    sphere(animalHead,green,side*.091,.103,-.066,.064,.060,.060);
    sphere(animalHead,white,side*.096,.108,-.018,.041,.037,.014);
    sphere(animalHead,black,side*.096,.106,-.003,.011,.023,.008);
    sphere(animalHead,black,side*.065,.085,.107,.012,.006,.010);
    for(let n=0;n<3;n++){const tooth=new THREE.Mesh(new THREE.ConeGeometry(.012,.027,5),white);tooth.position.set(side*.118,-.022,-.01+n*.057);tooth.rotation.z=Math.PI;animalHead.add(tooth);}
  }
  for(let n=0;n<5;n++){const spike=new THREE.Mesh(new THREE.ConeGeometry(.023,.042,4),green);spike.position.set(0,.25,-.2+n*.07);animal.add(spike);}
  label(carrier,'LIVE CARGO',.54,.11,0,.704,.374,'#eab769','#4a4b34');
  return [{id:'parcel-1',kind:'parcel',group:parcel,position:parcel.position.clone()},{id:'food-tray',kind:'food',group:tray,position:tray.position.clone()},{id:'pet-carrier',kind:'animal',group:carrier,position:carrier.position.clone()}];
}

function seat(parent: Parent, x: number, z: number, fabric: THREE.Texture) {
  const g = new THREE.Group(); g.position.set(x, 0, z); parent.add(g);
  const blue = mat(0x125fc6, .47), bolster = mat(0x1a72d9, .46), seam = mat(0x14529b, .79);
  const shell = mat(0xe9e9df, .69), frame = mat(0x73818c, .4, .32), brown = mat(0x6d4938, .53);
  // The reference upholstery has smooth leather-like highlights, not a coarse woven bump.
  // Bulged cushions give the broad upholstery faces actual volume and wrapped highlights.
  const pillow = (w:number,h:number,d:number,m:THREE.Material,px:number,py:number,pz:number) => {
    const geometry = new RoundedBoxGeometry(w,h,d,4,Math.min(.12,d*.43));
    const positions=geometry.attributes.position,normals=geometry.attributes.normal,normal=new THREE.Vector3();
    for(let i=0;i<positions.count;i++){
      const vx=positions.getX(i),vy=positions.getY(i),vz=positions.getZ(i);
      if(vz<=0)continue;
      const ax=w*.52,ay=h*.52,bx=Math.max(0,1-(vx/ax)**2),by=Math.max(0,1-(vy/ay)**2);
      const t=Math.min(1,vz/(d*.5)),weight=t*t*(3-2*t),derivative=6*t*(1-t)/(d*.5);
      const height=.055*bx*by;
      positions.setZ(i,vz+height*weight);
      // RoundedBoxGeometry is non-indexed and supplies smooth analytic normals.
      // Calling computeVertexNormals here would replace them with a flat normal per triangle.
      const nz=normals.getZ(i)/(1+height*derivative);
      normal.set(normals.getX(i)+.11*vx/(ax*ax)*by*weight*nz,normals.getY(i)+.11*vy/(ay*ay)*bx*weight*nz,nz).normalize();
      normals.setXYZ(i,normal.x,normal.y,normal.z);
    }
    const mesh=new THREE.Mesh(geometry,m);mesh.position.set(px,py,pz);mesh.castShadow=mesh.receiveShadow=true;g.add(mesh);return mesh;
  };
  box(g,1.35,1.30,.19,shell,0,1.23,-.53,.065).rotation.x=-.07;
  const back=pillow(1.23,1.18,.31,blue,0,1.22,-.38);back.rotation.x=-.08;
  const cushion=pillow(1.24,1.04,.24,blue,0,.66,.055);cushion.rotation.x=-Math.PI/2;
  for(const side of [-1,1]){
    pillow(.235,1.02,.32,bolster,side*.50,1.20,-.285).rotation.z=-side*.035;
    pillow(.25,.36,.29,bolster,side*.475,1.76,-.245).rotation.y=side*.08;
    box(g,.15,.58,.86,shell,side*.647,.81,.09,.055);
    box(g,.165,.105,.81,mat(0x526478,.68),side*.647,.566,.09,.026);
    box(g,.23,.10,.94,brown,side*.647,1.13,.11,.041);
    box(g,.085,.34,.12,frame,side*.43,.23,.04,.02);
    box(g,.115,.06,.92,frame,side*.43,.058,.045,.025);
    const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(side*.39,.80,-.188),new THREE.Vector3(side*.39,1.14,-.159),new THREE.Vector3(side*.40,1.54,-.215)]);
    g.add(new THREE.Mesh(new THREE.TubeGeometry(curve,14,.006,4,false),seam));
    const bottomSeam=box(g,.009,.008,.74,seam,side*.38,.790,.09,.003);bottomSeam.rotation.x=-.025;
  }
  pillow(.72,.34,.27,blue,0,1.76,-.235);
  const stitch=new THREE.CatmullRomCurve3([new THREE.Vector3(-.30,1.84,-.071),new THREE.Vector3(-.26,1.64,-.060),new THREE.Vector3(.26,1.64,-.060),new THREE.Vector3(.30,1.84,-.071)]);
  g.add(new THREE.Mesh(new THREE.TubeGeometry(stitch,16,.006,4,false),seam));
  box(g,.84,.40,.058,mat(0x224874,.85),0,1.07,-.675,.035);
  box(g,.83,.042,.067,mat(0x8293a7,.55),0,1.28,-.700,.016);
  box(g,.33,.20,.013,mat(0xf2efdb,.86),-.17,1.20,-.711,.007);
  box(g,.19,.21,.014,mat(0xcbd6df,.86),.21,1.215,-.713,.007).rotation.z=.08;
  return g;
}

function passenger(parent: Parent, id: number, x: number, z: number, texture: THREE.Texture, fabric: THREE.Texture): CabinPassenger {
  return createPassenger(parent,id,x,z,texture,fabric);
}

function arch(parent: Parent, z: number, material: THREE.Material, thickness = .055) {
  // A shallow ceiling seam follows the upholstered roof instead of a round exposed pipe.
  const vertices:number[]=[],indices:number[]=[];
  for(let i=0;i<=48;i++){
    const angle=i/48*Math.PI;
    for(const side of [-1,1])vertices.push(Math.cos(angle)*3.105,2.78+Math.sin(angle)*1.232,z+side*thickness);
  }
  for(let i=0;i<48;i++)indices.push(i*2,i*2+1,i*2+2,i*2+1,i*2+3,i*2+2);
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geometry.setIndex(indices);geometry.computeVertexNormals();
  const mesh=new THREE.Mesh(geometry,material);mesh.receiveShadow=true;parent.add(mesh);
}

function buildCockpit(parent: Parent) {
  const instruments=buildDetailedFlightDeck(parent);
  const wall=mat(0xe8e9e2,.80),trim=mat(0x7d8e9f,.52);
  box(parent,1.8,3.32,.23,wall,-2.2,1.66,-10.15,.08);
  box(parent,1.8,3.32,.23,wall,2.2,1.66,-10.15,.08);
  box(parent,2.7,.73,.24,wall,0,3.12,-10.15,.075);
  label(parent,"FLIGHT DECK",1.65,.26,0,2.98,-9.998,"#193857","#f1f3e6");
  for(const x of [-1.23,1.23])box(parent,.09,2.7,.18,trim,x,1.37,-10.12,.03);
  return instruments;
}

export function buildCabin(scene: THREE.Scene): CabinWorld {
  const root = new THREE.Group(); root.name = "Dear Passengers · Cabin"; scene.add(root);
  const fabric=makeFabricTexture();
  const wall = mat(0xe8eae4, .83), trim = mat(0xa5b3be, .58, .1), dark = mat(0x253853, .75);
  // Smooth cream cabin panels: alternating one-pixel fabric lines produced wall moiré.
  const warmWhite = new THREE.MeshStandardMaterial({ color: 0xfff5e2, emissive: 0xffd5a0, emissiveIntensity: .62 });
  const readingWhite = new THREE.MeshStandardMaterial({ color: 0xf1faff, emissive: 0xcceaff, emissiveIntensity: 1.25 });
  scene.background = new THREE.Color(0x8ed4f4);
  scene.fog = new THREE.Fog(0xcce8ed, 24, 68);
  const ambient = new THREE.HemisphereLight(0xc5e3ff, 0x7186a4, 1.6); root.add(ambient);
  const sunlight = new THREE.DirectionalLight(0xf5faff, 3.15);
  sunlight.position.set(-16, 13, 6); sunlight.castShadow = true;
  sunlight.shadow.mapSize.set(2048, 2048); sunlight.shadow.camera.left = -17; sunlight.shadow.camera.right = 17;
  sunlight.shadow.camera.top = 17; sunlight.shadow.camera.bottom = -17; sunlight.shadow.camera.near = .1; sunlight.shadow.camera.far = 55;
  sunlight.shadow.bias = -.0007; sunlight.shadow.normalBias = .035; sunlight.target.position.set(0, 0, 0);
  root.add(sunlight, sunlight.target);
  const fill = new THREE.DirectionalLight(0xc2ddfa, .92); fill.position.set(7, 5, -10); root.add(fill);

  const carpetCanvas = document.createElement("canvas"); carpetCanvas.width = carpetCanvas.height = 128;
  const cctx = carpetCanvas.getContext("2d")!; cctx.fillStyle = "#23416e"; cctx.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 1700; i++) { const v = ((i * 73) % 29) + 49; cctx.fillStyle = `rgba(${v},${v + 25},${v + 56},.38)`; cctx.fillRect((i * 37) % 128, (i * 89) % 128, 1, 2); }
  const carpetTexture = new THREE.CanvasTexture(carpetCanvas); carpetTexture.wrapS = carpetTexture.wrapT = THREE.RepeatWrapping; carpetTexture.repeat.set(6, 26); carpetTexture.colorSpace = THREE.SRGBColorSpace;
  box(root, 6.1, .16, 27.1, new THREE.MeshStandardMaterial({ map: carpetTexture, roughness: 1 }), 0, -.10, -.1, 0);
  for (const x of [-.88, .88]) box(root, .026, .005, 24.1, mat(0x8491a6), x, -.012, -.4, 0);
  // The aisle is continuous carpet; crossbars made the previous interior read like bus flooring.

  // Separate perforated panels leave actual openings, so the changing exterior reads as sky.
  const windowZs = [-8.6, -5.6, -2.6, .4, 3.4, 6.4, 9.4];
  const intactHull = new THREE.Group(), damagedHull = new THREE.Group();
  intactHull.name='Intact fire-side wall';damagedHull.name='Visible fire-side structural damage';
  root.add(intactHull,damagedHull);damagedHull.visible=false;
  for (const side of [-1, 1]) {
    const lowerSections: Array<[number, number]> = side < 0 ? [[-13.5, 8.04], [9.31, 13.3]] : [[-13.5, 13.3]];
    for (const [a, b] of lowerSections) {
      box(root, .12, .85, b - a, wall, side * 3.09, .39, (a + b) / 2, .04);
      box(root, .06, .045, b - a, mat(0x5687b4), side * 3.011, .92, (a + b) / 2, .012);
      box(root, .09, .07, b - a, warmWhite, side * 2.94, .12, (a + b) / 2, .025);
    }
    const gapRanges: Array<[number, number]> = [[-13.5, -10.1], [10.9, 13.4]];
    for (const [a, b] of gapRanges) box(root, .13, 2.14, b - a, wall, side * 3.08, 1.9, (a + b) / 2, .03);
    for (const z of windowZs) {
      const hasDoor = side < 0 && z === 9.4;
      const windowOffset = hasDoor ? -.78 : 0;
      const panelParent=side<0&&z===-5.6?intactHull:root;
      let panelShape = roundPath(3, 2.25, .045, 0, 1.86);
      if (hasDoor) {
        // This opening continues down through the lower wall; the adjacent window
        // moves aft so the swung-out door reveals open sky rather than a solid panel.
        panelShape = new THREE.Shape();
        panelShape.moveTo(-1.5, .735); panelShape.lineTo(.09, .735);
        panelShape.lineTo(.09, 2.65); panelShape.lineTo(1.36, 2.65);
        panelShape.lineTo(1.36, .735); panelShape.lineTo(1.5, .735);
        panelShape.lineTo(1.5, 2.985); panelShape.lineTo(-1.5, 2.985); panelShape.closePath();
      }
      const windowWidth=hasDoor?1.20:1.72,windowHeight=hasDoor?1.61:1.77;
      const hole = roundPath(windowWidth, windowHeight, .39, windowOffset, 1.98);
      panelShape.holes.push(new THREE.Path(hole.getPoints(28)));
      const panel = new THREE.Mesh(new THREE.ExtrudeGeometry(panelShape, { depth: .10, bevelEnabled: false }), wall);
      panel.position.set(side * 3.055, 0, z); panel.rotation.y = Math.PI / 2; panel.castShadow = true; panel.receiveShadow = true; panelParent.add(panel);
      const rimShape = roundPath(windowWidth+.26, windowHeight+.24, .49, windowOffset, 1.98);
      rimShape.holes.push(new THREE.Path(roundPath(windowWidth-.025, windowHeight-.025, .38, windowOffset, 1.98).getPoints(28)));
      const extrudedRim=new THREE.ExtrudeGeometry(rimShape, { depth: .12, bevelEnabled: true, bevelSize: .047, bevelThickness: .048, bevelSegments: 4, steps: 1 });
      // Untextured bevels can share vertices across UV seams for continuous molded-plastic shading.
      extrudedRim.deleteAttribute('normal');extrudedRim.deleteAttribute('uv');
      const smoothRim=mergeVertices(extrudedRim,.00001);smoothRim.computeVertexNormals();extrudedRim.dispose();
      const frame = new THREE.Mesh(smoothRim, mat(0xeef0e9, .63));
      frame.position.set(side * 3.00, 0, z); frame.rotation.y = Math.PI / 2; frame.castShadow = true; frame.receiveShadow = true; panelParent.add(frame);
      box(panelParent, .07, 2.13, .075, trim, side * 2.986, 1.88, z + 1.49, .026);
      // Tiny pull-down shade grip.
      box(panelParent, .055, .042, .29, trim, side * 2.90, 2.79, z - windowOffset, .015);
    }
    // Long baggage shelves with open fronts and colourful cases.
    box(root, 1.16, .19, 20.45, dark, side * 2.48, 3.01, -.15, .07);
    box(root, .20, .24, 20.45, mat(0x354762, .65), side * 1.93, 3.095, -.15, .065);
    box(root, .048, .035, 20.40, mat(0xa7b6c6, .41, .25), side * 1.818, 3.067, -.15, .015);
    for (let z = -9; z < 9.5; z += 2.5) {
      box(root,.10,.19,.12,trim,side*2.95,2.85,z,.025);
      box(root,.39,.04,.78,mat(0x92a5b5,.53),side*2.34,2.885,z,.018);
      for(const offset of [-.235,0,.235])box(root,.29,.022,.185,readingWhite,side*2.34,2.853,z+offset,.018);
      for (const o of [-.18, .18]) cylinder(root, mat(0x697c8d), .047, .047, .018, side * 2.72, 2.89, z + o, 12);
    }
    const baggageColors = [0xf6bd32, 0xe85946, 0x2fa777, 0xab6cce, 0x4e99cb, 0xde9142, 0xeb88a5];
    for (let n = 0; n < 12; n++) {
      const bag = suitcase(root, baggageColors[(n + (side === 1 ? 3 : 0)) % baggageColors.length], side * 2.51, 3.105, -9.05 + n * 1.58, .82 + (n % 3) * .055);
      bag.rotation.y = side === -1 ? Math.PI / 2 : -Math.PI / 2;
      bag.rotation.z = (n % 3 - 1) * .04;
    }
  }
  // Fire-side damage is a real opening with a ragged metal edge. It is visual damage only;
  // the movement/collision envelope and all interaction targets remain unchanged.
  const tornEdge=[[-1.42,1.17],[-1.13,.91],[-.75,1.04],[-.33,.88],[.03,.98],[.45,.86],[.88,1.03],[1.37,1.11],[1.22,1.52],[1.42,1.86],[1.26,2.23],[1.38,2.70],[.92,2.84],[.55,2.73],[.20,2.89],[-.15,2.73],[-.54,2.90],[-.91,2.78],[-1.31,2.83],[-1.19,2.40],[-1.40,2.02],[-1.25,1.62]];
  const tearPath=new THREE.Path(tornEdge.map(([x,y])=>new THREE.Vector2(x,y)));tearPath.closePath();
  const brokenShape=roundPath(3,2.25,.035,0,1.86);brokenShape.holes.push(tearPath);
  const brokenPanel=new THREE.Mesh(new THREE.ExtrudeGeometry(brokenShape,{depth:.13,bevelEnabled:false}),mat(0x9ca3a1,.87));
  brokenPanel.position.set(-3.06,0,-5.6);brokenPanel.rotation.y=Math.PI/2;brokenPanel.castShadow=brokenPanel.receiveShadow=true;damagedHull.add(brokenPanel);
  const scorchedShape=new THREE.Shape(tornEdge.map(([x,y])=>new THREE.Vector2(Math.max(-1.48,Math.min(1.48,x*1.08)),Math.max(.77,Math.min(2.96,1.86+(y-1.86)*1.12)))));
  scorchedShape.holes.push(new THREE.Path(tornEdge.map(([x,y])=>new THREE.Vector2(x,y))));
  const scorchMaterial=mat(0x383d43,.98);scorchMaterial.side=THREE.DoubleSide;
  const scorch=new THREE.Mesh(new THREE.ExtrudeGeometry(scorchedShape,{depth:.025,bevelEnabled:false}),scorchMaterial);
  scorch.position.set(-2.899,0,-5.6);scorch.rotation.y=Math.PI/2;damagedHull.add(scorch);
  const exposed=mat(0x758896,.44,.48);
  for(const z of [-6.87,-4.31]){
    box(damagedHull,.15,.37,.13,exposed,-2.966,2.78,z,.016).rotation.x=z<-5?.15:-.21;
    box(damagedHull,.13,.29,.12,exposed,-2.97,.94,z,.014).rotation.z=.13;
  }
  for(let n=0;n<5;n++){
    const shard=box(damagedHull,.24,.20,.17,n%2?exposed:scorchMaterial,-2.94,2.83-(n%2)*.1,-6.60+n*.42,.007);
    shard.rotation.set(n*.2,-.28+n*.15,n%2?.5:-.2);
  }
  for(let n=0;n<3;n++){
    const z=-5.98+n*.19;
    const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(-2.96,2.85,z),new THREE.Vector3(-2.73,2.63,z+.035),new THREE.Vector3(-2.70,2.38-n*.10,z+.08),new THREE.Vector3(-2.77,2.29-n*.09,z+.05)]);
    damagedHull.add(new THREE.Mesh(new THREE.TubeGeometry(curve,13,.012,5,false),mat([0xb64c3c,0x4c8469,0x29353a][n],.79)));
  }

  // Continuous cream ceiling skin, with shallow upholstered panel seams.
  const vertices: number[] = [], indices: number[] = [];
  for (let j = 0; j <= 1; j++) for (let i = 0; i <= 40; i++) {
    const a = i / 40 * Math.PI; vertices.push(Math.cos(a) * 3.13, 2.78 + Math.sin(a) * 1.25, j ? 13.5 : -13.5);
  }
  for (let i = 0; i < 40; i++) { indices.push(i, i + 1, i + 41, i + 1, i + 42, i + 41); }
  const ceilingGeo = new THREE.BufferGeometry(); ceilingGeo.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3)); ceilingGeo.setIndex(indices); ceilingGeo.computeVertexNormals();
  const ceilingMat = mat(0xdfe5e7,.87); ceilingMat.side = THREE.DoubleSide;
  const ceiling = new THREE.Mesh(ceilingGeo, ceilingMat); ceiling.receiveShadow = true; root.add(ceiling);
  const ceilingSeam=mat(0xc2cdd5,.82);ceilingSeam.side=THREE.DoubleSide;
  for (let z = -12; z <= 12; z += 3) arch(root, z, ceilingSeam, .045);
  for (const x of [-.37, .37]) box(root, .023, .018, 25.3, mat(0xc2ced8), x, 4.003, 0, .007);
  for (let z = -10; z <= 10; z += 3) {
    box(root, .43, .048, .66, mat(0x8d9daa), 0, 3.97, z, .06);
    box(root, .30, .03, .48, readingWhite, 0, 3.936, z, .055);
    if ((z + 10) % 9 === 0) { const light = new THREE.PointLight(z===8?0xffe1bb:0xdcecff, z===8?1.65:1.40, 10, 2); light.position.set(0, 3.32, z); root.add(light); }
  }
  addCabinStillLife(root);

  const bubbleMap = bubbleTexture(),foodBubbleMap=bubbleTexture('food');
  const passengers: CabinPassenger[] = [];
  for (let row = 0; row < 4; row++) {
    const z = -7 + row * 4;
    for (const side of [-1, 1]) {
      seat(root, side * 1.83, z,fabric);
      const p = passenger(root, row * 2 + (side === 1 ? 1 : 0), side * 1.83, z, bubbleMap,fabric);
      passengers.push(p);
      const rowTag = label(root, `${row + 1}${side < 0 ? " A" : " B"}`, .42, .14, side * 1.98, 2.82, z + .45, "#2a3f58", "#fff2d0"); rowTag.rotation.y = side * .3;
    }
  }

  const instruments=buildCockpit(root);
  const copilot = passenger(root, 4, 1.10, -10.73, bubbleMap,fabric);
  copilot.group.rotation.y = Math.PI; copilot.bubble.visible = false;
  const pilotHead = copilot.group.userData.head as THREE.Group;
  // Rear galley: metal compartments, espresso station and a red curtain.
  box(root, 6.1, 3.8, .23, wall, 0, 1.9, 13.05, .06);
  const galleyCabinet = mat(0xb4c4cd, .43, .3);
  for (const x of [-2.02, 2.02]) {
    box(root, 1.73, 2.74, .69, galleyCabinet, x, 1.38, 12.51, .06);
    for (let y = .52; y < 2.7; y += .71) {
      box(root, 1.55, .62, .045, mat(y < 1.6 ? 0xcdd5d7 : 0x879ca9, .4, .25), x, y, 12.14, .035);
      box(root, .34, .055, .07, dark, x, y + .17, 12.10, .018);
      box(root, .045, .07, .075, mat(color.gold), x + .57, y + .17, 12.08, .01);
    }
  }
  box(root, 2.23, .16, .97, dark, 0, 1.02, 12.32, .05);
  box(root, 2.13, .91, .72, galleyCabinet, 0, .49, 12.46, .04);
  for (const x of [-.52, .52]) { box(root, .96, .71, .04, mat(0xd9ddd9), x, .5, 12.073, .04); box(root, .28, .055, .045, dark, x, .76, 12.036, .016); }
  box(root, .76, 1.03, .66, mat(0x728b9a, .48, .18), -.65, .53, 11.34, .055);
  box(root, .79, .07, .70, dark, -.65, 1.08, 11.34, .025);
  box(root, .68, .7, .52, mat(0x354c5a), -.65, 1.45, 11.44, .055);
  box(root, .53, .28, .035, mat(0x121d26), -.65, 1.37, 11.158, .012);
  const coffeeScreen = label(root, "COFFEE", .47, .13, -.65, 1.68, 11.139, "#0f3442", "#b3ffe2"); coffeeScreen.rotation.y = Math.PI;
  const coffeeSign = label(root, "COFFEE", .67, .20, -.65, 1.96, 11.25, "#efc34c", "#283d51"); coffeeSign.rotation.y = Math.PI;
  cylinder(root, mat(0xc7d8de, .2, .6), .045, .045, .11, -.65, 1.36, 11.10);
  makeCup(root, -.65, 1.12, 11.05, .60);
  cylinder(root, mat(0xc0ced0, .28, .6), .16, .16, .32, .47, 1.27, 12.25);
  makeCup(root, -.40, 1.085, 11.999, .72);
  for (let n = 0; n < 3; n++) makeCup(root, .12 + n * .19, 1.13, 12.09, .52);
  const rearLabel = label(root, "CREW · GALLEY", 1.80, .25, 0, 2.37, 12.00); rearLabel.rotation.y = Math.PI;

  // A wall-mounted meal rack leaves room for the live-cargo carrier below and
  // puts the visible trays at the service target used by the flight controls.
  const mealSteel=mat(0xa1b5bc,.43,.22),mealBlue=mat(0x3b6172,.72);
  box(root,.10,.72,.66,mealBlue,-2.76,1.03,10.16,.025);
  box(root,1.62,.075,.69,mealSteel,-2.0,1.025,10.16,.028);
  box(root,1.62,.075,.69,mealSteel,-2.0,1.55,10.16,.028);
  box(root,1.58,.055,.035,dark,-2.0,1.085,9.815,.012);
  box(root,1.58,.055,.035,dark,-2.0,1.61,9.815,.012);
  for(const x of [-2.40,-1.68]){
    box(root,.56,.036,.40,mealSteel,x,1.09,10.08,.025);
    makeFood(root,x-.075,1.11,10.07,.9);
    box(root,.145,.019,.205,mat(0xeee6d3,.95),x+.145,1.123,10.10,.01);
    for(let n=0;n<3;n++)box(root,.55,.031,.39,mealSteel,x,1.615+n*.035,10.12,.02);
  }
  const mealSign=label(root,"MEALS",.88,.21,-1.88,1.90,9.87,"#d8a446","#253e4d");mealSign.rotation.y=Math.PI;

  // Clearly identifiable equipment stations sit within reach of the central aisle.
  box(root, .67, .09, .64, dark, 1.3, .73, 10.04, .035);
  box(root, .52, .65, .46, galleyCabinet, 1.3, .37, 10.08, .04);
  cylinder(root, mat(0xdb4a3c, .4), .13, .14, .48, 1.3, 1.03, 10.0);
  sphere(root, mat(0xdb4a3c), 1.3, 1.28, 10, .13, .06, .13);
  cylinder(root, dark, .045, .05, .10, 1.3, 1.34, 10);
  box(root, .23, .045, .09, dark, 1.36, 1.4, 10, .012);
  box(root, .16, .15, .026, mat(0xf8eaca), 1.3, 1.04, 9.859, .007);
  const extinguisherSign = label(root, "FIRE KIT", .63, .18, 1.3, 1.68, 9.91, "#bf3f36", "#fff2db"); extinguisherSign.rotation.y = Math.PI;
  const equipmentHose = new THREE.CatmullRomCurve3([new THREE.Vector3(1.22,1.34,10),new THREE.Vector3(1.08,1.28,10),new THREE.Vector3(1.09,.85,9.99),new THREE.Vector3(1.16,.9,9.96)]);
  root.add(new THREE.Mesh(new THREE.TubeGeometry(equipmentHose, 14, .024, 7, false), dark));
  box(root, .66, .10, .63, dark, 1.3, .77, 11.4, .035);
  box(root, .50, .68, .46, galleyCabinet, 1.3, .39, 11.44, .04);
  box(root, .51, .24, .36, mat(0xefb843), 1.3, .95, 11.4, .045);
  box(root, .55, .045, .38, mat(0xbe832f), 1.3, 1.065, 11.4, .015);
  box(root, .20, .05, .07, dark, 1.3, 1.15, 11.4, .017);
  for (const s of [-1,1]) box(root, .036, .11, .047, dark, 1.3 + s * .083, 1.105, 11.4, .008);
  box(root, .06, .08, .025, mat(0xe8e6d7), 1.3, 1.025, 11.204, .008);
  const toolkitSign = label(root, "TOOL KIT", .65, .18, 1.3, 1.44, 11.3, "#efbd42", "#2f4151"); toolkitSign.rotation.y = Math.PI;
  const repairPanel = new THREE.Group(); repairPanel.position.set(1.17, 1.35, -9.63); root.add(repairPanel);
  box(repairPanel, .53, .76, .10, mat(0x7e969e, .45, .3), 0, 0, 0, .05);
  box(repairPanel, .41, .53, .018, mat(0x193949), 0, -.035, .064, .018);
  for (let n = 0; n < 3; n++) {
    const wire = new THREE.CatmullRomCurve3([new THREE.Vector3(-.14,.1 - n*.1,.1),new THREE.Vector3(-.04,.12 - n*.1,.12),new THREE.Vector3(.06,.04 - n*.1,.12),new THREE.Vector3(.15,.065 - n*.1,.1)]);
    repairPanel.add(new THREE.Mesh(new THREE.TubeGeometry(wire, 10, .012, 5, false), mat([0xe16d46,0x59b5ce,0xf4d267][n])));
  }
  label(repairPanel, "ELECTRICAL", .43, .10, 0, .27, .063, "#eabd54", "#243b4e");
  for (const s of [-1,1]) sphere(repairPanel, mat(0xdd6561), s*.17, -.28, .086, .021);

  const cart = new THREE.Group(); cart.position.set(.81, 0, 7.02); root.add(cart);
  box(cart, .59, .98, .86, mat(0x9aaeb9, .34, .38), 0, .62, 0, .065);
  box(cart, .64, .055, .90, dark, 0, 1.13, 0, .025);
  for (const side of [-1, 1]) {
    box(cart, .03, .15, .87, dark, side * .32, 1.19, 0, .015);
    for (const z of [-.28, .28]) { const wheel = cylinder(cart, mat(0x29333b), .08, .08, .06, side * .23, .1, z); wheel.rotation.z = Math.PI / 2; }
  }
  for (let y = .4; y < 1; y += .23) { box(cart, .49, .18, .023, mat(0xc1cbd1, .5, .3), 0, y, .444, .01); box(cart, .15, .025, .026, dark, 0, y + .04, .465, .008); }
  for (const x of [-.14, .14]) for (const z of [-.23, .1]) makeCup(cart, x, 1.17, z, .64);
  limb(cart, dark, [-.30, 1.13, .58], [.30, 1.13, .58], .027);
  label(cart, "CREW", .37, .14, 0, .73, -.438).rotation.y = Math.PI;

  // Exit leaf pivots at its forward edge and can be swung open by the game.
  for (const z of [8.035, 9.315]) box(root, .19, 2.66, .09, mat(0xf0eee5), -2.986, 1.33, z, .035);
  box(root, .19, .10, 1.34, mat(0xf0eee5), -2.986, 2.65, 8.675, .04);
  box(root, .22, .04, 1.34, mat(0x9aaeb7, .3, .5), -2.99, .025, 8.675, .015);
  const door = new THREE.Group(); door.position.set(-3.00, 0, 8.08); root.add(door);
  const leaf = box(door, .13, 2.52, 1.18, mat(0xdde2db), 0, 1.32, .57, .13);
  leaf.userData.isExitDoor = true;
  box(door, .05, .87, .57, mat(0x90cfeb, .15), .073, 1.82, .55, .14);
  box(door, .065, .17, .44, mat(0xca4b3f), .103, 1.02, .62, .025);
  box(door, .09, .055, .34, mat(0xffd684), .146, 1.02, .58, .025);
  const exitLabel = label(root, "EXIT", .81, .28, -2.83, 2.81, 8.58, "#c23731", "#fff8ec"); exitLabel.rotation.y = Math.PI / 2;
  const exitArrow = label(root, "←", .40, .23, -2.83, 2.44, 7.81, "#f1f0e5", "#c94737"); exitArrow.rotation.y = Math.PI / 2;
  const extinguisher = new THREE.Group(); extinguisher.position.set(-2.82, .46, 7.6); root.add(extinguisher);
  cylinder(extinguisher, mat(0xd94736, .36), .09, .095, .37, 0, .19, 0);
  cylinder(extinguisher, dark, .044, .044, .06, 0, .41, 0);
  box(extinguisher, .05, .036, .16, dark, 0, .46, 0, .01);
  box(extinguisher, .12, .12, .02, mat(0xf6ebcf), .065, .21, .065, .004);

  const cargo = suitcase(root, 0xedac30, .79, .015, -8.53, 1.24);
  cargo.rotation.y = -.41; cargo.rotation.z = -.06;
  const fire = new THREE.Group(); fire.position.set(-.97, .03, -5.0); root.add(fire); fire.visible = false;
  const fireEffect=buildVolumetricFire(fire);
  const effects=buildCabinEffects(root);
  const alarmMaterial=new THREE.MeshStandardMaterial({color:0xc95932,emissive:0xf56328,emissiveIntensity:.05,roughness:.4});
  sphere(root,alarmMaterial,0,3.57,10.73,.14,.075,.14);
  const alarmLight=new THREE.PointLight(0xff6535,0,12);alarmLight.position.set(0,3.16,10.2);root.add(alarmLight);
  const flightState:CabinFlightVisualState={stage:'cruise',altitude:3500,speed:180,bank:0,pitch:0,pressure:1,fireIntensity:0,weather:'clear'};
  let lowQuality=false;

  // Visible engine, wing and soft cloud banks outside the window openings.
  for (const side of [-1, 1]) {
    const wing = box(root, 10, .11, 2.3, mat(0xc5d9e1, .35, .2), side * 7.4, -.1, .9, .1); wing.rotation.y = side * -.2;
    const engine = cylinder(root, mat(0xe4edf0, .4, .3), .56, .67, 2.14, side * 5.12, -.39, 1.2, 24); engine.rotation.x = Math.PI / 2;
    const mouth = cylinder(root, mat(0x314b62, .6, .3), .50, .50, .06, side * 5.12, -.39, 2.30, 24); mouth.rotation.x = Math.PI / 2;
    const hub = cylinder(root, mat(0x91a8b3), .14, .25, .21, side * 5.12, -.39, 2.35); hub.rotation.x = Math.PI / 2;
  }
  const clouds = new THREE.Group(); root.add(clouds); clouds.visible=false; // Layered procedural clouds are supplied by cabin-effects.
  const cloudMaterial = new THREE.MeshStandardMaterial({ color: 0xf0f8fc,roughness:1,transparent:true,opacity:.95 });
  for (let n = 0; n < 32; n++) {
    const side = n % 2 ? -1 : 1;
    const g = new THREE.Group(); g.position.set(side * (12 + n % 5 * 4), -1.7 + n % 4 * 2.2, -42 + n * 3.8); clouds.add(g);
    for (let k = 0; k < 4; k++) {
      const cloud=sphere(g,cloudMaterial,(k-1.5)*1.2,Math.sin(k*2)*.36,Math.cos(k*1.9)*.35,1.38,.76+k%2*.30,.98);
      cloud.castShadow=false;cloud.receiveShadow=false;
      const positions=cloud.geometry.attributes.position;
      for(let v=0;v<positions.count;v++){
        const x=positions.getX(v),y=positions.getY(v),z=positions.getZ(v),noise=1+Math.sin(x*11+k)*Math.sin(z*9+n)*.075;
        positions.setXYZ(v,x*noise,y*noise,z*noise);
      }
      cloud.geometry.computeVertexNormals();
    }
  }
  const coast = new THREE.Group(), mountains = new THREE.Group(), night = new THREE.Group();
  root.add(coast, mountains, night); mountains.visible = false; night.visible = false;
  const ocean = new THREE.Mesh(new THREE.PlaneGeometry(350, 350), mat(0x61c1ce, .28, .1));
  ocean.rotation.x = -Math.PI / 2; ocean.position.y = -9; coast.add(ocean);
  for (let n = 0; n < 10; n++) {
    const x = (n % 2 ? -1 : 1) * (19 + n % 3 * 12), z = -48 + n * 10.7;
    sphere(coast, mat(0xd8d19b), x, -8.95, z, 4.8, .27, 3.4);
    sphere(coast, mat(0x559e7e), x, -8.73, z, 4.3, .63, 2.8);
    sphere(coast, mat(0x83b17e), x + .9, -8.15, z, 1.6, 1.0, 1.1);
  }
  for (let n = 0; n < 18; n++) {
    const h = 7 + n % 5 * 1.8, x = (n % 2 ? -1 : 1) * (25 + n % 3 * 7), z = -65 + n * 8;
    const mountain = new THREE.Mesh(new THREE.ConeGeometry(7 + n % 3 * 2, h, 6), mat(n % 2 ? 0x657d8f : 0x8295a2));
    mountain.position.set(x, -7 + h / 2, z); mountain.rotation.y = n * .7; mountains.add(mountain);
    const peak = new THREE.Mesh(new THREE.ConeGeometry(2.6 + n % 3 * .65, h * .35, 6), mat(0xc7d9df));
    peak.position.set(x, -7 + h * .825, z); peak.rotation.y = n * .7; mountains.add(peak);
  }
  const nightGround = new THREE.Mesh(new THREE.PlaneGeometry(350,350), mat(0x112f43)); nightGround.rotation.x = -Math.PI / 2; nightGround.position.y = -9; night.add(nightGround);
  const cityPositions: number[] = [];
  for (let n = 0; n < 720; n++) cityPositions.push(((n * 17.63) % 150) - 75, -8.85, ((n * 29.77) % 150) - 75);
  const cityGeo = new THREE.BufferGeometry(); cityGeo.setAttribute("position",new THREE.Float32BufferAttribute(cityPositions,3));
  night.add(new THREE.Points(cityGeo,new THREE.PointsMaterial({ color:0xffcd7a,size:.24,sizeAttenuation:true,transparent:true,opacity:.9 })));
  const starPositions: number[] = [];
  for(let n = 0; n < 160; n++) starPositions.push(Math.sin(n * 137.5) * 70, 7 + (n * 7.7) % 36, Math.cos(n * 31.7) * 70);
  const starGeo = new THREE.BufferGeometry(); starGeo.setAttribute("position",new THREE.Float32BufferAttribute(starPositions,3));
  night.add(new THREE.Points(starGeo,new THREE.PointsMaterial({color:0xe2f1ff,size:.13,sizeAttenuation:true})));
  const moon = sphere(night,new THREE.MeshBasicMaterial({color:0xfff2ce}),-26,18,-42,2.5); moon.castShadow = false;
  let route = 0;
  // Small pieces of cabin mess make the otherwise regular rows feel occupied.
  for (let i = 0; i < 7; i++) {
    const trash = box(root, .12, .09, .18, mat(i % 2 ? 0xd89e52 : 0x80c2be), (i % 2 ? -1 : 1) * (.91 + i % 3 * .035), .065, -6.3 + i * 1.9, .022);
    trash.rotation.set(.2, i * 1.2, .4);
  }
  const objects=makeLooseObjects(root,fabric);
  const shadowTexture=makeContactShadowTexture();
  const contactMaterial=new THREE.MeshBasicMaterial({map:shadowTexture,transparent:true,opacity:.62,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1});
  for(const p of passengers){
    const shadow=new THREE.Mesh(new THREE.PlaneGeometry(1.8,1.95),contactMaterial);shadow.rotation.x=-Math.PI/2;shadow.position.set(p.position.x,-.008,p.position.z+.17);root.add(shadow);
  }
  for(const at of [[.81,7.02,1,1.2],[-1.37,9.76,1.1,.94],[-.72,2.7,.7,.7]]){
    const shadow=new THREE.Mesh(new THREE.PlaneGeometry(at[2],at[3]),contactMaterial);shadow.rotation.x=-Math.PI/2;shadow.position.set(at[0],-.008,at[1]);root.add(shadow);
  }

  const removedGeometries = new Set<THREE.BufferGeometry>(), removedMaterials = new Set<THREE.Material>();
  bakeSolidColours(root,removedMaterials);
  const actors = [...passengers, copilot];
  const movingGroups = new Set<THREE.Object3D>([
    ...actors.map(p => p.group), ...objects.map(o=>o.group), ...instruments.needles, instruments.radarSweep, intactHull, damagedHull, effects.root, cart, cargo, door, fire, clouds, coast, mountains, night,
  ]);
  const before = { meshes: 0 }; root.traverse(object => { if (object instanceof THREE.Mesh) before.meshes++; });
  batchStaticGeometry(root, movingGroups, removedGeometries, removedMaterials);
  for (const p of actors) {
    if(p.group.userData.characterRig)continue;
    const head = p.group.userData.head as THREE.Group, belt = p.group.userData.belt as THREE.Group;
    const eyes=p.group.userData.eyes as THREE.Group,mouth=p.group.userData.mouth as THREE.Group,gasp=p.group.userData.gasp as THREE.Group;
    batchStaticGeometry(p.group, new Set([head, belt]), removedGeometries, removedMaterials);
    batchStaticGeometry(head, new Set([eyes,mouth,gasp]), removedGeometries, removedMaterials);
    for(const part of [eyes,mouth,gasp])batchStaticGeometry(part,new Set(),removedGeometries,removedMaterials);
    batchStaticGeometry(belt, new Set(), removedGeometries, removedMaterials);
  }
  for(const object of objects){
    const animal=object.group.userData.animal as THREE.Group|undefined;
    const animalHead=object.group.userData.animalHead as THREE.Group|undefined;
    batchStaticGeometry(object.group,new Set(animal?[animal]:[]),removedGeometries,removedMaterials);
    if(animal)batchStaticGeometry(animal,new Set(animalHead?[animalHead]:[]),removedGeometries,removedMaterials);
    if(animalHead)batchStaticGeometry(animalHead,new Set(),removedGeometries,removedMaterials);
  }
  // The parent transforms remain live: cart sway, door hinge, clouds and route
  // visibility all continue to work on their original public object references.
  for (const group of [cart, cargo, door, intactHull, damagedHull, coast, mountains, night, ...clouds.children as THREE.Group[]]) {
    batchStaticGeometry(group, new Set(), removedGeometries, removedMaterials);
  }
  // Install terrain shaders after batching so their hooks survive colour baking,
  // while cloned materials keep the indoor cabin on its existing lighting path.
  for(const terrain of [coast,mountains,night])effects.applyAtmosphere(terrain);
  const liveGeometries = new Set<THREE.BufferGeometry>(), liveMaterials = new Set<THREE.Material>();
  let afterMeshes = 0;
  root.traverse(object => {
    const drawable = object as THREE.Mesh;
    if (object instanceof THREE.Mesh) afterMeshes++;
    if (drawable.geometry) liveGeometries.add(drawable.geometry);
    if (drawable.material) for (const material of Array.isArray(drawable.material) ? drawable.material : [drawable.material]) liveMaterials.add(material);
  });
  // A material may also be shared with a dynamic object, so retire only those
  // that no remaining drawable references after every batch is complete.
  removedGeometries.forEach(geometry => { if (!liveGeometries.has(geometry)) geometry.dispose(); });
  removedMaterials.forEach(material => { if (!liveMaterials.has(material)) material.dispose(); });
  root.userData.batchStats = { beforeMeshes: before.meshes, afterMeshes };

  return {
    root, passengers, cart, door, fire, cargo, objects,
    galley: new THREE.Vector3(0, 1.1, 11.7), cockpit: new THREE.Vector3(0, 1.3, -11.5),
    setRoute(nextRoute) {
      route = ((nextRoute % 3) + 3) % 3;
      flightState.weather = ['clear','storm','night'][route];
      coast.visible = route === 0; mountains.visible = route === 1; night.visible = route === 2;
      const background = [0x8ed4f4, 0x7d94ab, 0x11243f][route];
      (scene.background as THREE.Color).setHex(background);
      sunlight.color.setHex([0xf5faff, 0xd2e2f2, 0x83b8ef][route]); sunlight.intensity = [3.15, 1.0, .38][route];
      ambient.intensity = [1.6, 1.28, 1.05][route]; ambient.color.setHex([0xc5e3ff,0xb4cada,0x7aa9dc][route]);
      fill.intensity = [.92,.65,.35][route];
      cloudMaterial.color.setHex([0xf2fbff,0x9eafba,0x405672][route]); cloudMaterial.opacity = route === 2 ? .48 : .88;
      warmWhite.emissiveIntensity = route === 2 ? 1.3 : .62;
      readingWhite.emissiveIntensity = route === 2 ? 1.7 : 1.25;
    },
    setFlightState(state){Object.assign(flightState,state);},
    setPassengerState(id,state){
      const p=passengers.find(passenger=>passenger.id===id);if(!p)return;
      Object.assign(p.group.userData.visualState,state);
      if(state.belted!==undefined)(p.group.userData.belt as THREE.Group).visible=state.belted;
      if(state.served)p.bubble.visible=false;
      if(state.request){p.bubble.userData.request=state.request;(p.bubble.material as THREE.SpriteMaterial).map=state.request==='food'?foodBubbleMap:bubbleMap;}
    },
    setLowQuality(enabled){
      lowQuality=enabled;sunlight.shadow.mapSize.set(enabled?1024:2048,enabled?1024:2048);sunlight.shadow.map?.dispose();sunlight.shadow.map=null;
      root.traverse(object=>{const drawable=object as THREE.Mesh;if(drawable.material)(Array.isArray(drawable.material)?drawable.material:[drawable.material]).forEach(material=>{material.needsUpdate=true;});});
    },
    update(time, turbulence) {
      for (const p of passengers) {
        updatePassengerRig(p.group,time,{...p.group.userData.visualState,turbulence},root.userData.viewerPosition);
        p.bubble.position.y = 2.83 + Math.sin(time * 2.2 + p.id) * .055;
      }
      fireEffect.update(time,flightState.fireIntensity||1,lowQuality);
      effects.update(time,flightState,route,lowQuality);
      const atmosphericFog=scene.fog as THREE.Fog;
      atmosphericFog.color.copy(effects.horizon);atmosphericFog.near=effects.fogRange.x;atmosphericFog.far=effects.fogRange.y;
      const hullDamaged=(fire.visible&&flightState.fireIntensity>.2)||flightState.pressure<.54;
      intactHull.visible=!hullDamaged;damagedHull.visible=hullDamaged;
      const alarm=flightState.pressure<.77||fire.visible;
      const alarmPulse=alarm?(.3+Math.max(0,Math.sin(time*5))*.7):0;
      alarmLight.intensity=alarmPulse*3.7;alarmMaterial.emissiveIntensity=.05+alarmPulse*1.8;
      instruments.needles[0].rotation.z=-THREE.MathUtils.degToRad(flightState.speed*1.3-120);
      instruments.needles[1].rotation.z=-THREE.MathUtils.degToRad((flightState.altitude/20)%360);
      instruments.needles[2].rotation.z=THREE.MathUtils.degToRad(flightState.bank);
      instruments.needles[3].rotation.z=-.8+Math.sin(time*.02)*.12;
      instruments.needles[4].rotation.z=(1-flightState.pressure)*3.8-1.9;
      instruments.radarSweep.rotation.z=-time*.48;
      const pet=objects[2].group;
      (pet.userData.animal as THREE.Group).scale.y=1+Math.sin(time*2.4)*.025;
      (pet.userData.animalHead as THREE.Group).rotation.y=Math.sin(time*.71)*.17;
      for (let i = 0; i < clouds.children.length; i++) clouds.children[i].position.z = ((-42 + i * 3.8 + time * (route === 1 ? 1.6 : .6)) % 120 + 120) % 120 - 60;
      pilotHead.rotation.z = Math.sin(time * 1.1) * .022;
      if (route === 1) sunlight.intensity = time > 4 && time % 23 < .09 ? 5 : .9;
    },
    dispose() {
      const geometries = new Set<THREE.BufferGeometry>(); const materials = new Set<THREE.Material>(); const textures = new Set<THREE.Texture>([bubbleMap,foodBubbleMap,fabric]);
      root.traverse(object => {
        if (object instanceof THREE.InstancedMesh) object.dispose();
        const mesh = object as THREE.Mesh;
        if (mesh.geometry) geometries.add(mesh.geometry);
        if (mesh.material) for (const m of Array.isArray(mesh.material) ? mesh.material : [mesh.material]) {
          materials.add(m);for(const value of Object.values(m)){if(value&&(value as THREE.Texture).isTexture)textures.add(value as THREE.Texture);}
          if(m instanceof THREE.ShaderMaterial)for(const uniform of Object.values(m.uniforms)){if(uniform.value instanceof THREE.Texture)textures.add(uniform.value);}
        }
      });
      geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose()); textures.forEach(t => t.dispose());
      sunlight.shadow.dispose(); scene.remove(root);
    },
  };
}

export function makeCrewAvatar(index:number):THREE.Group { return createCrewAvatar(index); }

export function makeHeldItem(kind: "coffee" | "extinguisher" | "wrench" | "food" | "suitcase", withHands=true): THREE.Group {
  const g = new THREE.Group();
  const glove = mat(0x10b4d5, .45); const cuff = mat(0xe8ece7); const dark = mat(0x263b48);
  // Carried items have blue hands; loose and remote props do not.
  if(withHands){
  limb(g, glove, [.48, -.29, .36], [.16, -.05, .11], .092);
  sphere(g, glove, .115, .04, .055, .108, .105, .09);
  const cuffMesh = cylinder(g, cuff, .114, .114, .12, .47, -.27, .34); cuffMesh.rotation.z = -.76; cuffMesh.rotation.x = -.7;
  for (let f = 0; f < 3; f++) {
    limb(g, glove, [.095, .1 - f * .05, .11], [-.012, .11 - f * .05, .14], .028);
    sphere(g, glove, -.015, .11 - f * .05, .126, .03, .03, .036);
  }
  limb(g, glove, [.12, .11, .022], [.049, .17, -.021], .038);
  }
  if (kind === "coffee") makeCup(g, -.02, -.09, 0, .95);
  if (kind === "food") {
    const tray=new THREE.Group();g.add(tray);tray.position.set(0,-.04,0);
    const metal=mat(0xb9c8cf,.35,.45),paper=mat(0xf1e5cf,.96);
    box(tray,.66,.026,.43,metal,0,0,0,.028);
    box(tray,.60,.007,.37,paper,0,.018,0,.013);
    for(const side of [-1,1]){box(tray,.018,.042,.43,metal,side*.32,.025,0,.009);box(tray,.66,.042,.018,metal,0,.025,side*.205,.009);}
    for(let row=0;row<2;row++)for(let col=0;col<3;col++)makeFood(tray,(col-1)*.205,.026,(row-.5)*.184,.60);
  }
  if (kind === "suitcase") {const heldCase=suitcase(g,0xe6ae49,-.08,-.35,-.025,.72);heldCase.rotation.y=.12;}
  if (kind === "extinguisher") {
    cylinder(g, mat(0xda4239, .36, .1), .105, .108, .42, -.02, .11, -.016);
    sphere(g, mat(0xda4239), -.02, .317, -.016, .105, .06, .105);
    cylinder(g, dark, .038, .045, .09, -.02, .39, -.016);
    box(g, .24, .035, .08, dark, .055, .437, -.016, .015);
    box(g, .12, .11, .017, mat(0xf9e9bf), -.02, .16, .095, .004);
    const hose = new THREE.CatmullRomCurve3([new THREE.Vector3(-.08, .39, 0), new THREE.Vector3(-.30, .30, .03), new THREE.Vector3(-.48, .025, -.08), new THREE.Vector3(-.56, .20, -.28)]);
    g.add(new THREE.Mesh(new THREE.TubeGeometry(hose, 16, .023, 7, false), dark));
    const nozzle = cylinder(g, dark, .046, .026, .17, -.56, .20, -.34); nozzle.rotation.x = Math.PI / 2;
  }
  if (kind === "wrench") {
    const steel = mat(0xb8c9d2, .29, .65);
    box(g, .09, .47, .055, steel, -.02, .13, 0, .024);
    box(g, .25, .08, .055, steel, -.02, .38, 0, .02);
    for (const x of [-.12, .08]) box(g, .057, .15, .055, steel, x, .45, 0, .013);
    box(g, .115, .23, .07, mat(0xe2a840), -.02, -.045, 0, .03);
  }
  return optimiseStandalone(g);
}
