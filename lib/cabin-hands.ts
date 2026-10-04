import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

/** Articulated first-person hands, posed in camera space. All flight state stays in the engine. */
export interface HandPose {
  time:number; walk:number; item:string|null; grabbed:boolean; piloting:boolean;
  action:string; progress:number; bank:number; aspect:number; reach?:THREE.Vector3;
}
type Arm = {side:number;root:THREE.Group;upper:THREE.Mesh;forearm:THREE.Mesh;cuff:THREE.Mesh;hand:THREE.Group;fingers:THREE.Group[];thumb:THREE.Group;wrist:THREE.Vector3};
const up=new THREE.Vector3(0,1,0), direction=new THREE.Vector3(), midpoint=new THREE.Vector3();
function surface(color:number,roughness=.64){return new THREE.MeshStandardMaterial({color,roughness,metalness:0});}
function shape(parent:THREE.Object3D,geometry:THREE.BufferGeometry,material:THREE.Material,position:number[],scale?:number[]){
  const mesh=new THREE.Mesh(geometry,material);mesh.position.fromArray(position);if(scale)mesh.scale.fromArray(scale);mesh.castShadow=false;mesh.receiveShadow=true;parent.add(mesh);return mesh;
}
function bone(parent:THREE.Object3D,material:THREE.Material,radius:number,length:number){return shape(parent,new THREE.CapsuleGeometry(radius,Math.max(.001,length-2*radius),5,12),material,[0,0,0]);}
function placeBone(mesh:THREE.Mesh,a:THREE.Vector3,b:THREE.Vector3,baseLength:number){direction.subVectors(b,a);mesh.position.copy(midpoint.copy(a).add(b).multiplyScalar(.5));mesh.quaternion.setFromUnitVectors(up,direction.clone().normalize());mesh.scale.y=direction.length()/baseLength;}

function flexFinger(material:THREE.Material,length:number,width:number){
  const rings=18,sides=12,positions=new Float32Array((rings+1)*(sides+1)*3),indices:number[]=[];
  for(let row=0;row<rings;row++)for(let side=0;side<sides;side++){const a=row*(sides+1)+side,b=a+sides+1;indices.push(a,b,a+1,b,b+1,a+1);}
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));geometry.setIndex(indices);
  const mesh=new THREE.Mesh(geometry,material);mesh.receiveShadow=true;mesh.frustumCulled=false;mesh.userData={rings,sides,length,width,curl:-1};
  poseFinger(mesh,.2);return mesh;
}
function poseFinger(mesh:THREE.Mesh,curl:number){
  if(Math.abs(mesh.userData.curl-curl)<.002)return;mesh.userData.curl=curl;
  const {rings,sides,length,width}=mesh.userData as {rings:number;sides:number;length:number;width:number};
  const attribute=mesh.geometry.attributes.position as THREE.BufferAttribute,total=Math.max(.001,curl*1.9);
  for(let row=0;row<=rings;row++){
    const t=row/rings,angle=total*t,y=-length*(1-Math.cos(angle))/total,z=-length*Math.sin(angle)/total;
    const cap=t>.83?Math.sqrt(Math.max(0,1-((t-.83)/.17)**2)):1,radius=width*(1-t*.17)*cap;
    for(let side=0;side<=sides;side++){const phi=side/sides*Math.PI*2;attribute.setXYZ(row*(sides+1)+side,Math.cos(phi)*radius,y+Math.sin(phi)*Math.cos(angle)*radius,z-Math.sin(phi)*Math.sin(angle)*radius);}
  }
  attribute.needsUpdate=true;mesh.geometry.computeVertexNormals();
  const normals=mesh.geometry.attributes.normal as THREE.BufferAttribute;
  for(let row=0;row<=rings;row++){const first=row*(sides+1),last=first+sides;direction.set(normals.getX(first)+normals.getX(last),normals.getY(first)+normals.getY(last),normals.getZ(first)+normals.getZ(last)).normalize();normals.setXYZ(first,direction.x,direction.y,direction.z);normals.setXYZ(last,direction.x,direction.y,direction.z);}
  normals.needsUpdate=true;
}

export function makeFirstPersonHands():THREE.Group{
  const rig=new THREE.Group();rig.name='Articulated crew hands';
  const skin=surface(0x079fdb,.54),nail=surface(0x39b9e6,.6),shirt=surface(0xf1f1e9,.93),seam=surface(0xb6cad0,.9);
  const arms:Arm[]=[];
  for(const side of [-1,1]){
    const root=new THREE.Group();rig.add(root);
    const upper=bone(root,skin,.078,.42),forearm=bone(root,skin,.063,.42),cuff=bone(root,shirt,.087,.18);
    const hand=new THREE.Group();root.add(hand);
    // Palm and metacarpals overlap with a continuous silhouette; no ball at the wrist.
    shape(hand,new RoundedBoxGeometry(.155,.085,.185,4,.039),skin,[0,0,-.082]);
    shape(hand,new THREE.SphereGeometry(1,20,12),skin,[side*-.028,-.013,-.085],[.067,.041,.083]);
    const fingers:THREE.Group[]=[];
    for(let i=0;i<4;i++){
      const finger=new THREE.Group();finger.position.set((i-1.5)*.038,0,-.158+(i===0||i===3?.014:0));hand.add(finger);fingers.push(finger);
      const len=[.086,.105,.098,.076][i],width=[.019,.021,.0195,.017][i];
      const mesh=flexFinger(skin,len,width);finger.add(mesh);finger.userData.flexMesh=mesh;

    }
    const thumb=new THREE.Group();thumb.position.set(-side*.067,-.008,-.055);thumb.rotation.y=side*.65;hand.add(thumb);
    const thumbBase=bone(thumb,skin,.025,.075);thumbBase.rotation.x=Math.PI/2;thumbBase.position.z=-.025;
    const thumbTip=bone(thumb,skin,.021,.063);thumbTip.rotation.x=1.2;thumbTip.position.set(side*.01,-.010,-.076);
    shape(thumb,new THREE.SphereGeometry(1,12,8),nail,[side*.01,.008,-.089],[.014,.004,.014]);
    const cuffSeam=shape(cuff,new THREE.TorusGeometry(.082,.003,5,20),seam,[0,.063,0]);cuffSeam.rotation.x=Math.PI/2;
    arms.push({side,root,upper,forearm,cuff,hand,fingers,thumb,wrist:new THREE.Vector3(side*.34,-.42,-.42)});
  }
  rig.userData.arms=arms;return rig;
}

export function updateFirstPersonHands(rig:THREE.Group,pose:HandPose,held:THREE.Group|null){
  const arms=rig.userData.arms as Arm[];
  const pulse=Math.sin(Math.PI*Math.min(1,pose.progress));
  const active=pose.progress>0;
  const horizontal=Math.min(1,Math.max(.48,pose.aspect/1.2));
  let itemPosition=new THREE.Vector3(.37,-.33,-.70),itemRotation=new THREE.Euler(.04,-.14,0);
  if(pose.item==='food')itemPosition.set(.08,-.39,-.73);
  if(pose.item==='extinguisher')itemPosition.set(.43,-.54,-.78);
  if(pose.item==='wrench')itemPosition.set(.37,-.34,-.67);
  const bob=Math.sin(pose.time*8.5)*.010*pose.walk;
  itemPosition.y+=bob;
  if(active&&pose.item){
    if(pose.action==='repair'){
      itemRotation.x=-.55+Math.sin(pose.time*12)*.60;
      itemPosition.z-=.13+Math.sin(pose.time*12)*.055;itemPosition.y+=.08;
    }else if(pose.action==='fire'){
      itemPosition.set(.42,-.48,-.83);itemRotation.x=-.05;
    }else if(pose.action.startsWith('pax-')){
      itemPosition.add(new THREE.Vector3(-.12,.035,-.34).multiplyScalar(pulse));itemRotation.z=-.12*pulse;
    }
  }
  if(held){held.position.copy(itemPosition);held.position.x*=horizontal;held.rotation.copy(itemRotation);held.scale.setScalar(.68+.32*horizontal);}
  for(const arm of arms){
    const s=arm.side;
    let wrist=new THREE.Vector3(s*.35,-.47+bob,-.42),curl=.21,rotation=new THREE.Euler(-.10,s*-.18,s*-.11);
    if(pose.item){
      if(s===1){wrist.copy(itemPosition).add(new THREE.Vector3(.115,.045,.085));rotation.set(.10,1.25,-.08);curl=.85;}
      else{wrist.set(-.40,-.62,-.36);curl=.20;}
      if(pose.item==='food'){
        wrist.set(s*.265+itemPosition.x,itemPosition.y-.035,itemPosition.z+.08);rotation.set(.10,s*-.36,s*-.20);curl=.5;
      }
      if(pose.item==='extinguisher'&&s<0){wrist.set(-.16,-.29,-.98);rotation.set(-.12,.15,.10);curl=.84;}
      if(pose.item==='wrench'&&s>0)rotation.x=itemRotation.x;
    }else if(pose.piloting){
      wrist.set(s*.29,-.28,-.79);rotation.set(-.22,s*.15,s*-.18-pose.bank*.004);curl=.92;
    }else if(pose.grabbed){
      wrist.set(s*.34,-.26,-.96);rotation.set(-.06,s*-.40,s*.18);curl=.55;
    }else if(active){
      const target=pose.reach?.clone()??new THREE.Vector3(0,-.37,-1.05);
      // Reach is clipped to arm span; retain actual target bearing without stretching to 3 m.
      target.z=THREE.MathUtils.clamp(target.z,-1.11,-.62);target.y=THREE.MathUtils.clamp(target.y,-.55,.15);target.x=THREE.MathUtils.clamp(target.x,-.42,.42);
      const latch=pose.action.startsWith('pax-');
      wrist.lerp(target.add(new THREE.Vector3(s*(latch?.13:.27)*(1-pulse*.45),latch?-.04:0,.05)),Math.min(1,pulse*1.6));
      rotation.set(-.20,s*-.28,s*.20);curl=.38+pulse*.35;
    }
    wrist.x*=horizontal;
    arm.wrist.lerp(wrist,.22);arm.hand.position.copy(arm.wrist);arm.hand.rotation.copy(rotation);
    const shoulder=new THREE.Vector3(s*.49*(.7+.3*horizontal),-.48,.26);
    const elbow=shoulder.clone().lerp(arm.wrist,.52);elbow.x+=s*.09;elbow.y-=.13;
    placeBone(arm.upper,shoulder,elbow,.42);placeBone(arm.forearm,elbow,arm.wrist,.42);
    placeBone(arm.cuff,shoulder,shoulder.clone().lerp(elbow,.40),.18);
    arm.fingers.forEach((finger,i)=>{poseFinger(finger.userData.flexMesh as THREE.Mesh,curl*(.90+(i%2)*.09));finger.rotation.y=(i-1.5)*-.025;});
    arm.thumb.rotation.x=-curl*.45;arm.thumb.rotation.y=s*(.65-curl*.40);
  }
}
