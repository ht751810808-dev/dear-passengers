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
  horizon: THREE.Color;
  fogRange: THREE.Vector2;
  applyAtmosphere(terrain: THREE.Object3D): void;
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

const seeded=(value:number)=>{const v=Math.sin(value*127.1+311.7)*43758.5453123;return v-Math.floor(v);};
const smooth=(v:number)=>v*v*(3-2*v);
function noise2(x:number,y:number){const ix=Math.floor(x),iy=Math.floor(y),fx=smooth(x-ix),fy=smooth(y-iy);
  const a=seeded(ix+iy*157),b=seeded(ix+1+iy*157),c=seeded(ix+(iy+1)*157),d=seeded(ix+1+(iy+1)*157);
  return THREE.MathUtils.lerp(THREE.MathUtils.lerp(a,b,fx),THREE.MathUtils.lerp(c,d,fx),fy);}
function fbm2(x:number,y:number){let value=0,amplitude=.55;for(let i=0;i<4;i++){value+=noise2(x,y)*amplitude;x=x*2.03+13.7;y=y*2.01+8.1;amplitude*=.48;}return value;}

const NOISE_GLSL=`float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.)),f.x),f.y);}
float fbm(vec2 p){return noise(p)*.55+noise(p*2.03+13.7)*.26+noise(p*4.11+5.4)*.12;}`;
const BILLBOARD_VERTEX=`attribute vec2 puffSettings;varying vec2 vUv;varying float vTile,vOpacity,vDistance;
void main(){vUv=uv;vTile=puffSettings.x;vOpacity=puffSettings.y;
  vec4 center=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.);
  vec2 scale=vec2(length(instanceMatrix[0].xyz),length(instanceMatrix[1].xyz));
  center.xy+=position.xy*scale;vDistance=length(center.xyz);gl_Position=projectionMatrix*center;}`;

// Terrain and sky must converge to the same linear radiance before tone mapping.
// A separate fixed fog colour leaves a cyan seam where the ocean meets this sky.
const SKY_RADIANCE_GLSL=`uniform vec3 zenith,horizon,sunDirection;uniform float storm,night;
float flightSkyHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
vec3 flightSkyRadiance(vec3 d){
  float elevation=max(d.y,0.);
  float atmospheric=pow(smoothstep(-.14,.85,d.y),.47);
  vec3 color=mix(horizon,zenith,atmospheric);
  float sun=clamp(dot(d,sunDirection),0.,1.);
  color+=vec3(.30,.26,.19)*pow(sun,12.)*(1.-night)*(1.-storm*.8);
  color+=vec3(2.1,1.9,1.6)*smoothstep(.9994,.9998,sun)*(1.-night)*(1.-storm);
  color=mix(color,horizon*.92,(1.-smoothstep(-.32,.02,d.y))*.52);
  vec2 starUV=vec2(atan(d.x,d.z),asin(clamp(d.y,-1.,1.)))*vec2(160.,210.);
  vec2 cell=floor(starUV);float star=step(.996,flightSkyHash(cell))*pow(max(0.,1.-length(fract(starUV)-.5)*2.),8.);
  color+=vec3(.45,.60,.85)*star*night*smoothstep(.03,.3,elevation);
  float moon=dot(d,normalize(vec3(-.4,.58,-.7)));
  color+=vec3(.48,.58,.72)*(pow(max(moon,0.),150.)*.10+smoothstep(.9992,.9997,moon))*night;
  return color;
}`;

/** Locally generated density, light and erosion atlas. No source imagery is used. */
function makeCloudAtlas(smoke=false){
  const tile=256,canvas=document.createElement('canvas');canvas.width=canvas.height=tile*2;const ctx=canvas.getContext('2d')!;
  const image=ctx.createImageData(tile*2,tile*2);
  for(let variant=0;variant<4;variant++){
    const lobes=Array.from({length:12},(_,i)=>{const x=.12+seeded(i+variant*19)*.76;return {x,y:.57-Math.sin((x-.12)/.76*Math.PI)*.22+seeded(i+3+variant*23)*.11,rx:.09+seeded(i+5+variant*11)*.12,ry:.12+seeded(i+7+variant*13)*.21};});
    for(let y=0;y<tile;y++)for(let x=0;x<tile;x++){
      const u=x/(tile-1),v=y/(tile-1);let density=0,light=0;
      for(const l of lobes){const nx=(u-l.x)/l.rx,ny=(v-l.y)/l.ry,q=nx*nx+ny*ny,w=Math.exp(-q*2.2)*.62;density+=w;const nz=Math.sqrt(Math.max(.04,1-q*.40));const normalLength=Math.sqrt(nx*nx+ny*ny+nz*nz);light+=w*THREE.MathUtils.clamp((-nx*.34-ny*.72+nz*.60)/normalLength,0,1);}
      light/=Math.max(.001,density);
      const erosion=fbm2(u*19+variant*29,v*19),detail=fbm2(u*44+variant*7,v*44);
      density=Math.max(0,density-(.12+erosion*.22));
      const edge=Math.min(u,v,1-u,1-v);const fade=THREE.MathUtils.smoothstep(edge,0,.11);
      const alpha=(1-Math.exp(-density*(smoke?2.8:5.8)))*fade;
      const lighting=THREE.MathUtils.clamp(.12+light*.82+erosion*.10+detail*.045-(smoke?.06:0),0,1);
      const px=(y+Math.floor(variant/2)*tile)*(tile*2)+x+(variant%2)*tile;image.data[px*4]=image.data[px*4+1]=image.data[px*4+2]=Math.round(lighting*255);image.data[px*4+3]=Math.round(alpha*255);
    }
  }
  ctx.putImageData(image,0,0);const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.NoColorSpace;texture.generateMipmaps=true;texture.minFilter=THREE.LinearMipmapLinearFilter;return texture;
}
function makeGlowTexture(){const canvas=document.createElement('canvas');canvas.width=canvas.height=64;const ctx=canvas.getContext('2d')!;const g=ctx.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(.2,'rgba(255,244,200,.8)');g.addColorStop(.5,'rgba(255,224,160,.12)');g.addColorStop(1,'rgba(255,224,160,0)');ctx.fillStyle=g;ctx.fillRect(0,0,64,64);const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;return t;}

export function buildCabinEffects(parent: THREE.Group): CabinEffects {
  const root = new THREE.Group(); root.name = 'Flight atmosphere and runway'; parent.add(root);
  const skyMaterial = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    uniforms: {
      zenith: { value: new THREE.Color(0x438edf) }, horizon: { value: new THREE.Color(0xcce9fc) },
      sunDirection: { value: v3(-.68,.38,-.62).normalize() }, storm: { value: 0 }, night: { value: 0 }, time: { value: 0 },
    },
    vertexShader: `varying vec3 direction;void main(){direction=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader: `varying vec3 direction;${SKY_RADIANCE_GLSL}
      void main(){gl_FragColor=vec4(flightSkyRadiance(normalize(direction)),1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(175,32,18),skyMaterial);sky.name='Atmospheric sky dome';sky.renderOrder=-30;root.add(sky);
  const fogRange=new THREE.Vector2(24,80);
  const terrainMaterials=new Map<THREE.MeshStandardMaterial,THREE.MeshStandardMaterial>();
  const applyAtmosphere=(terrain:THREE.Object3D)=>terrain.traverse(object=>{
    if(!(object instanceof THREE.Mesh)||!(object.material instanceof THREE.MeshStandardMaterial))return;
    const original=object.material;
    let material=terrainMaterials.get(original);
    if(!material){
      // Called after static batching; clone materials shared with the cabin first.
      material=original.clone();material.fog=false;material.name='Exterior atmosphere';
      material.onBeforeCompile=shader=>{
        for(const key of ['zenith','horizon','sunDirection','storm','night'])shader.uniforms[key]=skyMaterial.uniforms[key];
        shader.uniforms.flightFogRange={value:fogRange};
        shader.vertexShader=`varying vec3 flightAtmosphereRay;\n${shader.vertexShader}`.replace('#include <project_vertex>',`#include <project_vertex>\nflightAtmosphereRay=(modelMatrix*vec4(transformed,1.)).xyz-cameraPosition;`);
        shader.fragmentShader=`varying vec3 flightAtmosphereRay;uniform vec2 flightFogRange;\n${SKY_RADIANCE_GLSL}\n${shader.fragmentShader}`.replace('#include <opaque_fragment>',`
          vec3 flightRay=normalize(flightAtmosphereRay);
          float flightProjection=dot(cameraPosition,flightRay);
          float flightSkyDistance=-flightProjection+sqrt(max(0.,flightProjection*flightProjection+30625.-dot(cameraPosition,cameraPosition)));
          vec3 flightSkyDirection=normalize(cameraPosition+flightRay*flightSkyDistance);
          outgoingLight=mix(outgoingLight,flightSkyRadiance(flightSkyDirection),smoothstep(flightFogRange.x,flightFogRange.y,length(flightAtmosphereRay)));
          #include <opaque_fragment>`);
      };
      material.customProgramCacheKey=()=> 'flight-exterior-atmosphere-v1';
      terrainMaterials.set(original,material);
    }
    object.material=material;
  });

  const cloudAtlas=makeCloudAtlas();
  const cloudMaterial=new THREE.ShaderMaterial({
    transparent:true,depthWrite:false,side:THREE.DoubleSide,
    uniforms:{atlas:{value:cloudAtlas},lightColor:{value:new THREE.Color(0xf7fbff)},shadeColor:{value:new THREE.Color(0x87a7c7)},opacity:{value:.9},haze:{value:new THREE.Color(0xb7dafa)}},
    vertexShader:BILLBOARD_VERTEX,
    fragmentShader:`varying vec2 vUv;varying float vTile,vOpacity,vDistance;uniform sampler2D atlas;uniform vec3 lightColor,shadeColor,haze;uniform float opacity;
      void main(){vec2 tile=vec2(mod(vTile,2.),floor(vTile/2.));vec4 puff=texture2D(atlas,(tile+clamp(vUv,.004,.996))*.5);
        float alpha=puff.a*opacity*vOpacity;if(alpha<.006)discard;
        vec3 color=mix(shadeColor,lightColor,smoothstep(.20,.92,puff.r));color=mix(color,haze,smoothstep(45.,145.,vDistance)*.30);
        gl_FragColor=vec4(color,alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  cloudMaterial.addEventListener('dispose',()=>cloudAtlas.dispose());
  const cloudGeometry=new THREE.PlaneGeometry(1,1);
  const cloudSettings=new Float32Array(48*2);for(let i=0;i<48;i++)cloudSettings.set([i%4,.82+(i%3)*.06],i*2);
  cloudGeometry.setAttribute('puffSettings',new THREE.InstancedBufferAttribute(cloudSettings,2));
  const clouds=new THREE.InstancedMesh(cloudGeometry,cloudMaterial,48);clouds.name='Layered soft cloud banks';clouds.frustumCulled=false;clouds.renderOrder=-10;root.add(clouds);
  const cloudMatrix=new THREE.Matrix4(),cloudRotation=new THREE.Quaternion();
  const cloudSeeds=Array.from({length:48},(_,i)=>{const far=i%2===0,radius=far?72:28;const angle=i*2.39996;
    return {x:Math.cos(angle)*radius,z:Math.sin(angle)*(far?104:66),y:-8+seeded(i+32)*19,scale:(far?28:15)+seeded(i+57)*(far?19:13),drift:.45+seeded(i+82)*.45};});

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
  return {root,horizon:skyMaterial.uniforms.horizon.value,fogRange,applyAtmosphere,update(time,state,route,lowQuality){
    const storm=state.weather==='storm'||state.weather==='rain'||route===1;
    const night=state.weather==='night'||route===2;
    skyMaterial.uniforms.zenith.value.setHex(night?0x061327:storm?0x3e5977:0x277bdd);
    skyMaterial.uniforms.horizon.value.setHex(night?0x324563:storm?0xa2b6c8:0x9bd9fa);
    if(!night&&!storm){skyMaterial.uniforms.zenith.value.setRGB(.025,.16,.90);skyMaterial.uniforms.horizon.value.setRGB(.17,.34,1.28);}
    skyMaterial.uniforms.storm.value=storm?1:0;skyMaterial.uniforms.night.value=night?1:0;skyMaterial.uniforms.time.value=time;
    fogRange.set(storm?18:24,storm?54:80);
    cloudMaterial.uniforms.lightColor.value.setHex(night?0x6882a2:storm?0xb5c5d2:0xffffff).multiplyScalar(night?.85:1.15);
    cloudMaterial.uniforms.shadeColor.value.setHex(night?0x15253c:storm?0x53677e:0x6f95bf);
    cloudMaterial.uniforms.haze.value.copy(skyMaterial.uniforms.horizon.value);
    cloudMaterial.uniforms.opacity.value=night?.72:storm?.97:.9;clouds.count=lowQuality?24:48;
    const groundLift=THREE.MathUtils.clamp(1-state.altitude/650,0,1)*14;
    for(let i=0;i<clouds.count;i++){const p=cloudSeeds[i];const z=((p.z+time*p.drift+140)%280)-140;
      cloudMatrix.compose(v3(p.x,p.y+groundLift,z),cloudRotation,v3(p.scale,p.scale*(.56+seeded(i+71)*.22),1));clouds.setMatrixAt(i,cloudMatrix);}
    clouds.instanceMatrix.needsUpdate=true;
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

/** Animated flame sheets and optical smoke, rather than opaque geometric cones. */
export function buildVolumetricFire(parent:THREE.Group):CabinFireEffect{
  const root=new THREE.Group();root.name='Fire, embers and rising smoke';parent.add(root);
  const flameMaterial=new THREE.ShaderMaterial({
    transparent:true,depthWrite:false,side:THREE.DoubleSide,
    uniforms:{time:{value:0},strength:{value:1}},vertexShader:BILLBOARD_VERTEX,
    fragmentShader:`varying vec2 vUv;varying float vTile,vOpacity,vDistance;uniform float time,strength;
      ${NOISE_GLSL}
      void main(){vec2 p=vUv;float phase=time*(1.4+vTile*.13);float y=p.y;
        float curl=(fbm(vec2(y*4.-phase*.5,vTile*4.+phase*.4))-.5)*.36*y;
        float width=.45*pow(1.-y,.7);float x=abs(p.x-.5+curl);
        float turbulent=fbm(vec2(p.x*5.+vTile*8.,p.y*6.-phase*2.));
        float shape=1.-smoothstep(width*.25,width+.035,x);
        float tip=smoothstep(.95,.46,y+turbulent*.21);float base=smoothstep(0.,.08,y);
        float alpha=shape*tip*base*(.37+turbulent*.5)*vOpacity*strength;
        if(alpha<.01)discard;
        vec3 color=mix(vec3(2.3,.82,.04),vec3(1.5,.12,.005),smoothstep(.16,.83,y));
        color=mix(color,vec3(2.8,1.5,.3),pow(1.-x/max(width,.001),3.)*(1.-y)*.22);
        gl_FragColor=vec4(color,alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const flameGeometry=new THREE.PlaneGeometry(1,1);
  const flameSettings=new Float32Array(12*2);for(let i=0;i<12;i++)flameSettings.set([i/3,.50+seeded(i+31)*.23],i*2);
  flameGeometry.setAttribute('puffSettings',new THREE.InstancedBufferAttribute(flameSettings,2));
  const flames=new THREE.InstancedMesh(flameGeometry,flameMaterial,12);flames.frustumCulled=false;root.add(flames);
  const smokeAtlas=makeCloudAtlas(true);
  const smokeMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,
    uniforms:{atlas:{value:smokeAtlas},strength:{value:1}},vertexShader:BILLBOARD_VERTEX,
    fragmentShader:`varying vec2 vUv;varying float vTile,vOpacity,vDistance;uniform sampler2D atlas;uniform float strength;
      void main(){vec2 tile=vec2(mod(vTile,2.),floor(vTile/2.));vec4 puff=texture2D(atlas,(tile+clamp(vUv,.004,.996))*.5);
        float alpha=puff.a*vOpacity*strength;if(alpha<.007)discard;
        vec3 color=mix(vec3(.045,.053,.065),vec3(.25,.28,.32),puff.r);
        gl_FragColor=vec4(color,alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  smokeMaterial.addEventListener('dispose',()=>smokeAtlas.dispose());
  const smokeGeometry=new THREE.PlaneGeometry(1,1),smokeSettings=new Float32Array(20*2);
  smokeGeometry.setAttribute('puffSettings',new THREE.InstancedBufferAttribute(smokeSettings,2));
  const smoke=new THREE.InstancedMesh(smokeGeometry,smokeMaterial,20);smoke.frustumCulled=false;root.add(smoke);
  const sparkTexture=makeGlowTexture();
  const sparksGeo=new THREE.BufferGeometry(),sparks=new Float32Array(30*3);sparksGeo.setAttribute('position',new THREE.BufferAttribute(sparks,3));
  const sparkMaterial=new THREE.PointsMaterial({color:0xffb954,map:sparkTexture,size:.055,transparent:true,opacity:.8,depthWrite:false,blending:THREE.AdditiveBlending});
  const sparkPoints=new THREE.Points(sparksGeo,sparkMaterial);root.add(sparkPoints);
  const glow=new THREE.Mesh(new THREE.PlaneGeometry(1.9,1.9),new THREE.MeshBasicMaterial({map:sparkTexture,color:0xff7826,transparent:true,opacity:.16,depthWrite:false,blending:THREE.AdditiveBlending}));glow.rotation.x=-Math.PI/2;glow.position.y=.025;root.add(glow);
  // The light remains in the always-visible cabin root to avoid light-count shader recompilation.
  const light=new THREE.PointLight(0xff8533,0,5,1.8);light.position.copy(parent.position).add(v3(0,.65,0));(parent.parent||root).add(light);
  const matrix=new THREE.Matrix4(),quaternion=new THREE.Quaternion();
  return{root,update(time,intensity,lowQuality){
    const power=THREE.MathUtils.clamp(intensity,0,1.5);flameMaterial.uniforms.time.value=time;flameMaterial.uniforms.strength.value=.7+power*.3;
    flames.count=lowQuality?6:12;
    for(let i=0;i<flames.count;i++){const phase=time*(2.6+seeded(i)*1.2)+i*2.7,height=(.58+seeded(i+1)*.55)*(.65+power*.5)*(1+Math.sin(phase)*.12);
      matrix.compose(v3(Math.cos(i*2.4)*.18,height*.48,Math.sin(i*2.4)*.16),quaternion,v3(.30+seeded(i+3)*.28,height,1));flames.setMatrixAt(i,matrix);}
    flames.instanceMatrix.needsUpdate=true;smoke.count=lowQuality?10:20;smokeMaterial.uniforms.strength.value=.34+power*.25;
    for(let i=0;i<smoke.count;i++){const age=(time*(.12+seeded(i+8)*.035)+i/smoke.count)%1;
      const scale=.26+age*1.50,height=.45+age*2.65;
      smokeSettings.set([i%4,Math.sin(age*Math.PI)*(.48+power*.25)],i*2);
      matrix.compose(v3(Math.sin(i*2.4+age*3)*age*.45+Math.max(0,height-2.6)*.9,height,Math.cos(i*1.9+age*2)*age*.36),quaternion,v3(scale,scale*.84,1));smoke.setMatrixAt(i,matrix);}
    smoke.instanceMatrix.needsUpdate=true;smokeGeometry.attributes.puffSettings.needsUpdate=true;
    for(let i=0;i<30;i++){const age=(time*(.40+seeded(i+29)*.35)+i/30)%1;sparks[i*3]=Math.sin(i*13.2+age*3)*age*.38;sparks[i*3+1]=.1+age*2.2;sparks[i*3+2]=Math.cos(i*7.7)*age*.32;}
    sparksGeo.attributes.position.needsUpdate=true;sparkPoints.visible=!lowQuality;
    light.position.copy(parent.position).add(v3(0,.65,0));light.intensity=parent.visible?(2.0+Math.sin(time*13)*.22+Math.sin(time*21)*.15)*power:0;
    (glow.material as THREE.MeshBasicMaterial).opacity=(.10+Math.sin(time*9)*.025)*power;
  }};
}
