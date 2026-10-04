import * as THREE from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export interface CabinRenderer {
  render(dt: number): void;
  resize(width: number, height: number): void;
  setLowQuality(lowQuality: boolean): void;
  dispose(): void;
}

const fullscreenVertex = `varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`;

/**
 * One HDR cabin render, a half-resolution depth contact pass, then one output
 * conversion. LQ uses Three's direct path. No normal-buffer scene redraw is needed.
 */
export function createCabinRenderer(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera): CabinRenderer {
  const oldEnvironment = scene.environment, oldIntensity = scene.environmentIntensity;
  const oldAutoReset = renderer.info.autoReset;
  let environmentTarget: THREE.WebGLRenderTarget | null = null;
  // A small neutral studio reflection fills eye/metal highlights without adding
  // another local light or changing the scene's authored sun and cabin fixtures.
  try {
    const generator = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    environmentTarget = generator.fromScene(room, .04, .1, 80);
    room.dispose(); generator.dispose();
    scene.environment = environmentTarget.texture;
    scene.environmentIntensity = .22;
  } catch {
    // Direct lighting remains a complete fallback on constrained WebGL devices.
  }

  const color = new THREE.WebGLRenderTarget(1, 1, {
    type: THREE.HalfFloatType, format: THREE.RGBAFormat,
    minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
    depthBuffer: true, stencilBuffer: false, samples: 2,
  });
  color.texture.name = 'Cabin linear HDR';
  color.texture.colorSpace = THREE.LinearSRGBColorSpace;
  color.depthTexture = new THREE.DepthTexture(1, 1, THREE.UnsignedIntType);
  color.depthTexture.format = THREE.DepthFormat;
  const ao = new THREE.WebGLRenderTarget(1, 1, {
    type: THREE.UnsignedByteType, format: THREE.RGBAFormat,
    minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
    depthBuffer: false,
  });
  ao.texture.name = 'Cabin half-resolution contact shading';

  const contactMaterial = new THREE.ShaderMaterial({
    depthTest: false, depthWrite: false, toneMapped: false,
    uniforms: {
      depthMap: { value: color.depthTexture }, inverseProjection: { value: camera.projectionMatrixInverse },
      projection: { value: camera.projectionMatrix }, resolution: { value: new THREE.Vector2(1, 1) }, depthResolution: { value: new THREE.Vector2(1, 1) },
    },
    vertexShader: fullscreenVertex,
    fragmentShader: `varying vec2 vUv;uniform sampler2D depthMap;uniform mat4 inverseProjection,projection;uniform vec2 resolution,depthResolution;
      vec3 viewPosition(vec2 uv){uv=(floor(uv*depthResolution)+.5)/depthResolution;float depth=texture2D(depthMap,uv).x;vec4 v=inverseProjection*vec4(uv*2.-1.,depth*2.-1.,1.);return v.xyz/v.w;}
      void main(){float depth=texture2D(depthMap,vUv).x;vec3 p=viewPosition(vUv);
        if(depth>.99996||-p.z>42.){gl_FragColor=vec4(1.);return;}
        vec3 left=p-viewPosition(vUv-vec2(2.,0.)/depthResolution),right=viewPosition(vUv+vec2(2.,0.)/depthResolution)-p;
        vec3 below=p-viewPosition(vUv-vec2(0.,2.)/depthResolution),above=viewPosition(vUv+vec2(0.,2.)/depthResolution)-p;
        vec3 dx=abs(left.z)<abs(right.z)?left:right,dy=abs(below.z)<abs(above.z)?below:above;vec3 normal=normalize(cross(dx,dy));
        if(dot(normal,-p)<0.)normal=-normal;
        float radius=.37;float screenRadius=clamp(resolution.y*projection[1][1]*radius/max(-p.z,.15)*.5,1.5,34.);
        float occlusion=0.;
        for(int i=0;i<12;i++){float index=float(i);float angle=index*2.399963;float ring=sqrt((index+.5)/12.);
          vec2 offset=vec2(cos(angle),sin(angle))*screenRadius*ring/resolution;
          vec2 uv=clamp(vUv+offset,vec2(.001),vec2(.999));vec3 delta=viewPosition(uv)-p;float distance=length(delta);
          float facing=max(dot(normal,delta/max(distance,.0001))-.08,0.);
          float range=1.-smoothstep(.04,radius*1.6,distance);occlusion+=facing*range*step(.018,distance);
        }
        float visibility=clamp(1.-occlusion*.12,.73,1.);gl_FragColor=vec4(vec3(visibility),1.);
      }`,
  });
  const outputMaterial = new THREE.ShaderMaterial({
    depthTest: false, depthWrite: false,
    uniforms: {
      colorMap: { value: color.texture }, depthMap: { value: color.depthTexture }, contactMap: { value: ao.texture },
      texel: { value: new THREE.Vector2(1, 1) }, aoTexel: { value: new THREE.Vector2(1, 1) },
      cameraNear: { value: camera.near }, cameraFar: { value: camera.far },
    },
    vertexShader: fullscreenVertex,
    fragmentShader: `varying vec2 vUv;uniform sampler2D colorMap,contactMap,depthMap;uniform vec2 texel,aoTexel;uniform float cameraNear,cameraFar;
      float viewDepth(vec2 uv){float d=texture2D(depthMap,uv).x;return cameraNear*cameraFar/(cameraFar-d*(cameraFar-cameraNear));}
      void main(){vec3 color=texture2D(colorMap,vUv).rgb;float centerDepth=viewDepth(vUv);
        float contact=texture2D(contactMap,vUv).r*2.;float total=2.;vec3 bloom=vec3(0.);
        for(int i=0;i<8;i++){float angle=float(i)*.785398;vec2 direction=vec2(cos(angle),sin(angle));
          vec2 uv=clamp(vUv+direction*aoTexel*1.15,vec2(.001),vec2(.999));float weight=exp(-abs(viewDepth(uv)-centerDepth)*12.);
          contact+=texture2D(contactMap,uv).r*weight;total+=weight;
          vec3 bright=texture2D(colorMap,clamp(vUv+direction*texel*4.,vec2(.001),vec2(.999))).rgb;
          bloom+=max(bright-vec3(1.7),vec3(0.));
        }
        color*=contact/total;color+=bloom*.012;
        gl_FragColor=vec4(color,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const contactQuad = new FullScreenQuad(contactMaterial), outputQuad = new FullScreenQuad(outputMaterial);
  let lowQuality = false, disposed = false, width = 1, height = 1, pixelRatio = 0;
  renderer.info.autoReset = false;

  function resize(w: number, h: number) {
    width = Math.max(1, Math.round(w)); height = Math.max(1, Math.round(h)); pixelRatio = renderer.getPixelRatio();
    const physicalWidth = Math.max(1, Math.round(width * pixelRatio)), physicalHeight = Math.max(1, Math.round(height * pixelRatio));
    color.setSize(physicalWidth, physicalHeight);
    const factor = Math.min(.5, 960 / physicalWidth, 640 / physicalHeight);
    const aoWidth = Math.max(1, Math.round(physicalWidth * factor)), aoHeight = Math.max(1, Math.round(physicalHeight * factor));
    ao.setSize(aoWidth, aoHeight);
    contactMaterial.uniforms.resolution.value.set(aoWidth, aoHeight);
    contactMaterial.uniforms.depthResolution.value.set(physicalWidth, physicalHeight);
    outputMaterial.uniforms.texel.value.set(1 / physicalWidth, 1 / physicalHeight);
    outputMaterial.uniforms.aoTexel.value.set(1 / aoWidth, 1 / aoHeight);
  }
  const size = renderer.getSize(new THREE.Vector2()); resize(size.x, size.y);

  return {
    render(_dt) {
      if (disposed) return;
      renderer.info.reset();
      if (lowQuality) { renderer.render(scene, camera); return; }
      if (pixelRatio !== renderer.getPixelRatio()) resize(width, height);
      const previous = renderer.getRenderTarget();
      renderer.setRenderTarget(color); renderer.clear(); renderer.render(scene, camera);
      renderer.setRenderTarget(ao); contactQuad.render(renderer);
      outputMaterial.uniforms.cameraNear.value = camera.near; outputMaterial.uniforms.cameraFar.value = camera.far;
      renderer.setRenderTarget(previous); outputQuad.render(renderer);
    },
    resize,
    setLowQuality(value) { lowQuality = value; },
    dispose() {
      if (disposed) return; disposed = true;
      if (scene.environment === environmentTarget?.texture) { scene.environment = oldEnvironment; scene.environmentIntensity = oldIntensity; }
      environmentTarget?.dispose(); color.dispose(); ao.dispose();
      contactMaterial.dispose(); outputMaterial.dispose(); contactQuad.dispose(); outputQuad.dispose();
      renderer.info.autoReset = oldAutoReset;
    },
  };
}
