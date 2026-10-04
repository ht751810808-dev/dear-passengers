import * as THREE from 'three';

export interface CabinFlightVisualState {
  stage: string;
  altitude: number;
  speed: number;
  bank: number;
  pitch: number;
  pressure: number;
  fireIntensity: number;
  weather: string;
}

export interface CabinEffects {
  root: THREE.Group;
  update(time: number, state: CabinFlightVisualState, route: number, lowQuality: boolean): void;
}

const v3 = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);

function instances(parent: THREE.Group, geometry: THREE.BufferGeometry, material: THREE.Material,
  positions: Array<[number, number, number]>, scale?: THREE.Vector3) {
  const mesh = new THREE.InstancedMesh(geometry, material, positions.length);
  const matrix = new THREE.Matrix4();
  positions.forEach((p, i) => {
    matrix.compose(v3(...p), new THREE.Quaternion(), scale || v3(1, 1, 1)); mesh.setMatrixAt(i, matrix);
  });
  mesh.instanceMatrix.needsUpdate = true; mesh.computeBoundingSphere(); parent.add(mesh);
  return mesh;
}

export function makeContactShadowTexture() {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 128;
  const ctx = canvas.getContext('2d')!;
  const gradient = ctx.createRadialGradient(64, 64, 7, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(5,14,23,.68)'); gradient.addColorStop(.45, 'rgba(5,14,23,.29)'); gradient.addColorStop(1, 'rgba(5,14,23,0)');
  ctx.fillStyle = gradient; ctx.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(canvas);
}

export function makeFabricTexture() {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 128;
  const ctx = canvas.getContext('2d')!; ctx.fillStyle = '#bcbcbc'; ctx.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 128; i++) {
    ctx.fillStyle = i % 2 ? '#929292' : '#e3e3e3'; ctx.fillRect(i, 0, 1, 128);
    ctx.globalAlpha = .32; ctx.fillRect(0, i, 128, 1); ctx.globalAlpha = 1;
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping; texture.repeat.set(6, 6);
  return texture;
}

export function buildCabinEffects(parent: THREE.Group): CabinEffects {
  const root = new THREE.Group(); root.name = 'Flight atmosphere and runway'; parent.add(root);
  const skyMaterial = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    uniforms: {
      zenith: { value: new THREE.Color(0x4b9fdd) }, horizon: { value: new THREE.Color(0xd9f3ff) },
      glow: { value: new THREE.Color(0xffe7bc) }, sunDirection: { value: v3(-.7,.42,-.56).normalize() }, storm: { value: 0 },
    },
    vertexShader: `varying vec3 direction; void main(){direction=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader: `varying vec3 direction;uniform vec3 zenith,horizon,glow,sunDirection;uniform float storm;
      void main(){vec3 d=normalize(direction);float h=pow(clamp(d.y*.72+.16,0.,1.),.52);
      vec3 c=mix(horizon,zenith,h);float sun=max(dot(d,sunDirection),0.);
      c+=glow*(pow(sun,80.)*.2+pow(sun,850.)*.6)*(1.-storm);gl_FragColor=vec4(c,1.);}`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(150,32,20),skyMaterial); sky.renderOrder=-20;root.add(sky);

  const rainMaterial = new THREE.ShaderMaterial({
    transparent:true,depthWrite:false,side:THREE.DoubleSide,
    uniforms:{time:{value:0},amount:{value:0},night:{value:0}},
    vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`varying vec2 vUv;uniform float time,amount,night;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      void main(){vec2 uv=vUv*vec2(95.,10.);uv.x+=vUv.y*2.8;
      vec2 cell=floor(uv);float seed=hash(cell);float streak=fract(uv.y+time*(1.8+seed*1.4)+seed*8.);
      float x=abs(fract(uv.x)-.5);float a=smoothstep(.10,.0,x)*smoothstep(.86,.98,streak)*step(.30,seed);
      gl_FragColor=vec4(mix(vec3(.76,.89,1.),vec3(.32,.50,.74),night),a*amount*.43);}`,
  });
  const rain = new THREE.Group();root.add(rain);
  for(const side of [-1,1]){
    const panel=new THREE.Mesh(new THREE.PlaneGeometry(30,5),rainMaterial);
    panel.rotation.y=Math.PI/2;panel.position.set(side*3.25,2,0);rain.add(panel);
  }
  const windshieldRain=new THREE.Mesh(new THREE.PlaneGeometry(7,3.8),rainMaterial);windshieldRain.position.set(0,2.5,-13.2);rain.add(windshieldRain);

  const flashMaterial=new THREE.MeshBasicMaterial({color:0xd5e9ff,transparent:true,opacity:0,depthWrite:false,side:THREE.DoubleSide});
  const lightning=new THREE.Group();root.add(lightning);
  const lightningPoints=[v3(-14,17,-34),v3(-13,13,-34),v3(-15,9,-34),v3(-12.7,9.3,-34),v3(-14,5,-34),v3(-12,1,-34)];
  const bolt=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(lightningPoints,false,'catmullrom',.01),32,.10,4,false),flashMaterial);lightning.add(bolt);
  const flash=new THREE.PointLight(0xb5d8ff,0,80);flash.position.set(-12,9,-26);lightning.add(flash);
  const windPositions=new Float32Array(24*6),windGeometry=new THREE.BufferGeometry();windGeometry.setAttribute('position',new THREE.BufferAttribute(windPositions,3));
  const windMaterial=new THREE.LineBasicMaterial({color:0xd8eff4,transparent:true,opacity:.23,depthWrite:false});
  const wind=new THREE.LineSegments(windGeometry,windMaterial);wind.frustumCulled=false;root.add(wind);

  const airport=new THREE.Group();airport.name='Approach runway';root.add(airport);
  const tarmac=new THREE.Mesh(new THREE.PlaneGeometry(70,150),new THREE.MeshStandardMaterial({color:0x61746d,roughness:1}));
  tarmac.rotation.x=-Math.PI/2;tarmac.position.set(0,-.07,-82);airport.add(tarmac);
  const runway=new THREE.Mesh(new THREE.PlaneGeometry(9.2,135),new THREE.MeshStandardMaterial({color:0x283440,roughness:.96}));runway.rotation.x=-Math.PI/2;runway.position.z=-82;airport.add(runway);
  const stripeMaterial=new THREE.MeshBasicMaterial({color:0xf4f0cf});
  const stripePositions:Array<[number,number,number]>=[];
  for(let z=-22;z>=-144;z-=7)stripePositions.push([0,.018,z]);
  instances(airport,new THREE.BoxGeometry(.16,.012,2.8),stripeMaterial,stripePositions);
  const sides:Array<[number,number,number]>=[];for(const x of [-4.42,4.42])sides.push([x,.019,-82]);
  instances(airport,new THREE.BoxGeometry(.11,.015,135),stripeMaterial,sides);
  const thresholds:Array<[number,number,number]>=[];for(const z of [-19,-141])for(let x=-3.5;x<4;x+=.78)thresholds.push([x,.025,z]);
  instances(airport,new THREE.BoxGeometry(.4,.02,4.2),stripeMaterial,thresholds);
  const edgeLights:Array<[number,number,number]>=[];for(let z=-17;z>=-146;z-=4)for(const x of [-4.85,4.85])edgeLights.push([x,.10,z]);
  instances(airport,new THREE.SphereGeometry(.07,7,5),new THREE.MeshBasicMaterial({color:0xffe6ab}),edgeLights);
  const approachLights:Array<[number,number,number]>=[];for(let z=-8;z>=-15;z-=1.3)for(const x of [-1.5,-.75,0,.75,1.5])approachLights.push([x,.1,z]);
  instances(airport,new THREE.SphereGeometry(.07,7,5),new THREE.MeshBasicMaterial({color:0x7effb4}),approachLights);
  const buildings:Array<[number,number,number]>=[];for(let i=0;i<5;i++)buildings.push([15+i%2*5,1.35,-36-i*17]);
  instances(airport,new THREE.BoxGeometry(7,2.7,12),new THREE.MeshStandardMaterial({color:0xb7c4c6,roughness:.7}),buildings);
  const windows:Array<[number,number,number]>=[];for(let i=0;i<5;i++)for(let j=0;j<8;j++)windows.push([11.46+i%2*5,1.56,-41.2-i*17+j*1.5]);
  instances(airport,new THREE.BoxGeometry(.03,.85,.84),new THREE.MeshBasicMaterial({color:0x7fc6db}),windows);
  const tower=new THREE.Mesh(new THREE.CylinderGeometry(1.1,1.5,7,8),new THREE.MeshStandardMaterial({color:0xc1c6bb}));tower.position.set(-13,3.5,-62);airport.add(tower);
  const towerTop=new THREE.Mesh(new THREE.CylinderGeometry(2,1.4,1.5,8),new THREE.MeshStandardMaterial({color:0x28576a,metalness:.25,roughness:.4}));towerTop.position.set(-13,7.3,-62);airport.add(towerTop);
  const runwayNumber=document.createElement('canvas');runwayNumber.width=256;runwayNumber.height=256;const nr=runwayNumber.getContext('2d')!;nr.clearRect(0,0,256,256);nr.fillStyle='#fff5d4';nr.font='900 155px sans-serif';nr.textAlign='center';nr.fillText('27',128,182);
  const numberTexture=new THREE.CanvasTexture(runwayNumber);const number=new THREE.Mesh(new THREE.PlaneGeometry(3.2,4),new THREE.MeshBasicMaterial({map:numberTexture,transparent:true,depthWrite:false}));number.rotation.x=-Math.PI/2;number.position.set(0,.03,-25);airport.add(number);

  let lastTime=0,roll=0;
  return {root,update(time,state,route,lowQuality){
    const storm=state.weather==='storm'||state.weather==='rain'||route===1;
    const night=state.weather==='night'||route===2;
    // This unlit sky gradient is authored in display colour, outside exposure,
    // so dark cabins and bright sunlit upholstery share the same readable sky.
    skyMaterial.uniforms.zenith.value.setHex(night?0x06182f:storm?0x4b657d:0x238bd2).convertLinearToSRGB();
    skyMaterial.uniforms.horizon.value.setHex(night?0x243d5a:storm?0x9cacb6:0xc4ecfa).convertLinearToSRGB();
    skyMaterial.uniforms.storm.value=storm||night?1:0;
    rain.visible=storm;rainMaterial.uniforms.time.value=time;rainMaterial.uniforms.amount.value=lowQuality?.55:1;rainMaterial.uniforms.night.value=night?1:0;
    const lightningPhase=time%17.3;const flashing=storm&&time>3&&(lightningPhase<.095||(lightningPhase>.17&&lightningPhase<.24));
    flashMaterial.opacity=flashing?.95:0;flash.intensity=flashing&&!lowQuality?16:0;
    wind.visible=state.pressure<.8;
    if(wind.visible){for(let i=0;i<24;i++){const age=(time*1.3+i/24)%1,x=.35-age*3.6,y=.45+(i*1.317)%2.1,z=7.94+(i*1.791)%1.4;windPositions.set([x,y,z,x+.20+(1-state.pressure)*.18,y+.014,z-.02],i*6);}windGeometry.attributes.position.needsUpdate=true;}
    const nearGround=['boarding','taxi','takeoff','approach','landing','landed','touchdown'].includes(state.stage);
    airport.visible=nearGround;
    const altitude=Math.max(0,state.altitude);
    airport.position.y=-1.1-Math.min(60,altitude*.032);
    airport.position.z=-Math.min(98,altitude*.16);
    airport.rotation.z=THREE.MathUtils.degToRad(state.bank)*.12;
    const dt=Math.min(.05,Math.max(0,time-lastTime));lastTime=time;
    if(['landed','touchdown','taxi','takeoff'].includes(state.stage)){roll+=dt*state.speed*.045;airport.position.z+=(roll%32);}else roll=0;
  }};
}

export interface CabinFireEffect {root:THREE.Group;update(time:number,intensity:number,lowQuality:boolean):void;}

export function buildVolumetricFire(parent:THREE.Group):CabinFireEffect{
  const root=new THREE.Group();parent.add(root);
  const flameMaterial=new THREE.ShaderMaterial({
    transparent:true,depthWrite:false,side:THREE.DoubleSide,
    uniforms:{time:{value:0},strength:{value:1}},
    vertexShader:`uniform float time,strength;varying float h;varying vec3 local;
      void main(){vec3 p=position;h=clamp(p.y,0.,1.);p.x+=sin(p.y*8.+time*8.+position.z*4.)*.045*h;
      p.z+=cos(p.y*7.+time*6.+position.x*6.)*.035*h;p.y*=strength;local=p;
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,
    fragmentShader:`uniform float time,strength;varying float h;varying vec3 local;
      void main(){float wave=sin(local.x*19.+local.y*13.-time*9.)*.08;
      vec3 c=mix(vec3(1.,.88,.32),vec3(1.,.23,.025),smoothstep(.04,.85,h+wave));
      float a=(1.-smoothstep(.70,1.,h))*.85*min(strength,1.);gl_FragColor=vec4(c,a);}`,
  });
  const tongues=new THREE.Group();root.add(tongues);
  for(let n=0;n<6;n++){
    const profile:THREE.Vector2[]=[new THREE.Vector2(.025,0),new THREE.Vector2(.12,.07),new THREE.Vector2(.14,.18),new THREE.Vector2(.10,.4),new THREE.Vector2(.055,.65),new THREE.Vector2(.002,1)];
    const mesh=new THREE.Mesh(new THREE.LatheGeometry(profile,12),flameMaterial);const a=n*2.4;
    mesh.position.set(Math.cos(a)*.17,0,Math.sin(a)*.17);mesh.scale.set(.75+n%2*.3,.60+n%3*.13,.75);tongues.add(mesh);
  }
  const smokeMaterial=new THREE.MeshStandardMaterial({color:0x64717b,transparent:true,opacity:.32,roughness:1,depthWrite:false});
  const smoke=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,2),smokeMaterial,12);root.add(smoke);
  const sparksGeo=new THREE.BufferGeometry();const sparks=new Float32Array(24*3);sparksGeo.setAttribute('position',new THREE.BufferAttribute(sparks,3));
  const sparkPoints=new THREE.Points(sparksGeo,new THREE.PointsMaterial({color:0xffce52,size:.037,transparent:true,opacity:.9,depthWrite:false}));root.add(sparkPoints);
  // Keep the light in the always-visible cabin root. Hiding the fire must not
  // change the light count and force every cabin material to recompile mid-flight.
  const light=new THREE.PointLight(0xff9a35,0,4.5);light.position.copy(parent.position).add(v3(0,.65,0));(parent.parent||root).add(light);
  const matrix=new THREE.Matrix4(),quaternion=new THREE.Quaternion();
  return{root,update(time,intensity,lowQuality){
    const power=THREE.MathUtils.clamp(intensity,0,1.5);flameMaterial.uniforms.time.value=time;flameMaterial.uniforms.strength.value=.65+power*.5;
    tongues.scale.setScalar(.7+power*.3);smoke.count=lowQuality?6:12;
    for(let i=0;i<smoke.count;i++){
      const age=(time*.43+i*.081)%1;const scale=.09+age*.31;
      matrix.compose(v3(Math.sin(time+i*3)*age*.13,.4+age*1.65,Math.cos(time*.6+i)*age*.11),quaternion,v3(scale,scale*.7,scale));smoke.setMatrixAt(i,matrix);
    }
    smoke.instanceMatrix.needsUpdate=true;smokeMaterial.opacity=.13+power*.20;
    for(let i=0;i<24;i++){const age=(time*.7+i/24)%1;sparks[i*3]=Math.sin(i*13.2+time)*age*.27;sparks[i*3+1]=age*1.45;sparks[i*3+2]=Math.cos(i*7.7)*age*.25;}
    sparksGeo.attributes.position.needsUpdate=true;sparkPoints.visible=!lowQuality;light.position.copy(parent.position).add(v3(0,.65,0));light.intensity=parent.visible?(2.4+Math.sin(time*13)*.5)*power:0;
  }};
}
