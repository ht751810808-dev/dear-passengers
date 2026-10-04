import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

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
  setRoute(route: number): void;
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

/** Keep logical/animated groups, but submit their stationary pieces together. */
function batchStaticGeometry(group: THREE.Group, skip: Set<THREE.Object3D>,
  removedGeometries: Set<THREE.BufferGeometry>, removedMaterials: Set<THREE.Material>) {
  group.updateWorldMatrix(true, true);
  const inverse = group.matrixWorld.clone().invert();
  const signatures = new Map<THREE.Material, string>();
  const buckets = new Map<string, THREE.Mesh[]>();
  const visit = (object: THREE.Object3D) => {
    if (skip.has(object)) return;
    if (object instanceof THREE.Mesh && !Array.isArray(object.material) && !(object as THREE.SkinnedMesh).isSkinnedMesh && object.visible) {
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

function bubbleTexture() {
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

function seat(parent: Parent, x: number, z: number) {
  const g = new THREE.Group(); g.position.set(x, 0, z); parent.add(g);
  const blue = mat(color.blue, .9), darkBlue = mat(color.seat, .9), frame = mat(0x6d7c91, .45, .25);
  box(g, 1.28, .25, 1.04, darkBlue, 0, .61, .06, .12);
  box(g, 1.30, 1.19, .24, blue, 0, 1.22, -.44, .11).rotation.x = -.07;
  box(g, .98, .33, .15, mat(0x368aeb), 0, 1.69, -.27, .07);
  box(g, .50, .24, .025, mat(0xf4eadd), 0, 1.72, -.174, .028);
  for (const s of [-1, 1]) {
    box(g, .10, .51, .61, frame, s * .46, .27, 0, .035);
    box(g, .13, .48, .13, frame, s * .64, .88, .06, .025);
    box(g, .21, .12, .91, mat(0x2a4263), s * .65, 1.09, .1, .065);
    box(g, .22, .04, .24, mat(0x718294), s * .65, 1.16, .37, .022);
  }
  box(g, .86, .40, .055, mat(0x153963), 0, 1.03, -.588, .04);
  box(g, .82, .045, .05, mat(0x4e7298), 0, 1.22, -.63, .02);
  return g;
}

function passenger(parent: Parent, id: number, x: number, z: number, texture: THREE.Texture): CabinPassenger {
  const g = new THREE.Group(); g.position.set(x, 0, z); parent.add(g);
  const skins = [0xeab189, 0xb97143, 0xf0b995, 0xcf956d, 0x8f5438, 0xefb090, 0xd39364, 0xeba673];
  const shirts = [0xefece1, 0x236d91, 0xf3b633, 0x966cca, 0x38a183, 0xe47769, 0xedeee3, 0x376cbd];
  const trousers = [0x435064, 0x30384c, 0x5c6768, 0x333743, 0x344150, 0x3e4c62, 0x656474, 0x334352];
  const skin = mat(skins[id], .88), outfit = mat(shirts[id]), pants = mat(trousers[id]);
  const boots = mat(id % 3 === 0 ? 0x775138 : 0x283440);
  sphere(g, outfit, 0, 1.12, -.045, .39, .47, .265);
  box(g, .41, .64, .07, mat(id % 2 === 0 ? 0x8eb3d8 : shirts[id]), 0, 1.21, .202, .04);
  if (id % 2 === 0) {
    for (const s of [-1, 1]) box(g, .15, .69, .11, outfit, s * .22, 1.21, .245, .04).rotation.z = s * .04;
    limb(g, mat(0xc9c6b8), [-.25, 1.5, .26], [-.17, 1.25, .29], .018);
  } else {
    for (let n = 0; n < 4; n++) sphere(g, mat(0xe4dcca), .04, 1.41 - n * .12, .275, .022);
  }
  cylinder(g, skin, .12, .13, .19, 0, 1.58, -.02);
  for (const s of [-1, 1]) {
    limb(g, pants, [s * .2, .82, .07], [s * .27, .7, .60], .18);
    limb(g, pants, [s * .27, .7, .58], [s * .27, .24, .64], .14);
    sphere(g, boots, s * .27, .17, .73, .17, .115, .27);
    limb(g, outfit, [s * .36, 1.41, -.02], [s * .48, 1.01, .18], .145);
    limb(g, outfit, [s * .48, 1.03, .19], [s * .44, .91, .45], .12);
    sphere(g, skin, s * .44, .91, .48, .13, .09, .15);
    for (let f = 0; f < 3; f++) limb(g, skin, [s * .44 + (f - 1) * .05, .91, .52], [s * .44 + (f - 1) * .05, .87, .61], .027);
  }
  // A broad webbing belt and a brass latch sell the seated cabin pose.
  const belt = new THREE.Group(); g.add(belt); g.userData.belt = belt; belt.visible = false;
  box(belt, .76, .10, .07, mat(0x30353a), 0, .83, .34, .015);
  box(belt, .17, .15, .07, mat(0xc3c8cc, .35, .65), 0, .83, .4, .02);
  box(belt, .09, .085, .012, mat(color.gold, .42, .35), .018, .83, .44, .012);
  for (const s of [-1, 1]) {
    const loose = box(g, .12, .29, .045, mat(0x30353a), s * .48, .77, .43, .012);
    loose.rotation.z = s * .22;
    box(g, .14, .075, .05, mat(0xaeb7c0, .35, .6), s * .5, .63, .44, .012);
  }

  const head = new THREE.Group(); head.position.set(0, 1.96, .015);
  head.rotation.y = x > 0 ? -.18 : .18;
  head.rotation.z = (id % 3 - 1) * .055; g.add(head); g.userData.head = head;
  sphere(head, skin, 0, 0, 0, .40, .47, .34);
  for (const s of [-1, 1]) {
    sphere(head, skin, s * .398, -.02, .016, .093, .13, .09);
    sphere(head, mat(0xfffbef, .4), s * .19, .09, .279, .218, .253, .147);
    sphere(head, mat(0x222a30, .25), s * .18 + (x > 0 ? -.023 : .023), .025, .415, .073, .088, .030);
    sphere(head, mat(0xffffff, .2), s * .18 - .024, .062, .441, .017);
  }
  sphere(head, skin, 0, -.12, .347, .075, .08, .10);
  const smile = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-.205, -.245, .281), new THREE.Vector3(0, -.277, .328), new THREE.Vector3(.205, -.243, .28),
  ]);
  head.add(new THREE.Mesh(new THREE.TubeGeometry(smile, 14, .016, 5, false), mat(0x824333)));
  const hairColors = [0x483729, 0x2d2626, 0xbc6b2b, 0x483d3a, 0x252126, 0xdfc4a0, 0xc9cbc6, 0x312b28];
  const hair = mat(hairColors[id]);
  if (id === 3 || id === 7) {
    sphere(head, mat(id === 3 ? 0x36a372 : 0xeb9c30), 0, .355, -.01, .435, .2, .355);
    box(head, .52, .058, .35, mat(id === 3 ? 0x1d8657 : 0xe5a32e), 0, .35, .30, .1);
    if (id === 3) { sphere(head, mat(0x269462), -.22, .54, 0, .1); sphere(head, mat(0x269462), .22, .54, 0, .1); }
  } else {
    sphere(head, hair, 0, .32, -.065, .407, .22, .335);
    for (let n = 0; n < 7; n++) sphere(head, hair, Math.cos(n * Math.PI / 6) * .32, .32 + Math.sin(n * 1.5) * .035, .17 + Math.sin(n * Math.PI / 6) * .1, .115, .15, .115);
    if (id === 5) sphere(head, hair, .05, .45, -.22, .20);
    if (id === 4) for (let n = 0; n < 8; n++) sphere(head, hair, Math.cos(n * .78) * .36, .3 + Math.sin(n * .78) * .23, -.1, .18);
  }
  if (id === 6) {
    const glasses = mat(0x4c4c48, .4, .5);
    for (const s of [-1, 1]) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(.22, .014, 6, 32), glasses);
      ring.position.set(s * .2, .09, .415); head.add(ring);
    }
    box(head, .065, .022, .02, glasses, 0, .11, .42, .005);
    sphere(head, hair, -.08, -.2, .30, .1, .04, .05); sphere(head, hair, .08, -.2, .30, .1, .04, .05);
  }
  const bubble = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, depthTest: true, transparent: true }));
  bubble.position.set(0, 2.83, .03); bubble.scale.set(.51, .51, 1); g.add(bubble);
  return { id, group: g, position: new THREE.Vector3(x, 1.4, z), bubble };
}

function arch(parent: Parent, z: number, material: THREE.Material, thickness = .07) {
  const points: THREE.Vector3[] = [];
  for (let i = 0; i <= 32; i++) {
    const a = i / 32 * Math.PI;
    points.push(new THREE.Vector3(Math.cos(a) * 3.06, 2.76 + Math.sin(a) * 1.19, z));
  }
  const curve = new THREE.CatmullRomCurve3(points);
  const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 48, thickness, 6, false), material);
  mesh.castShadow = true; parent.add(mesh);
}

function buildCockpit(parent: Parent) {
  const g = new THREE.Group(); g.position.z = -11.9; parent.add(g);
  const dashboard = mat(0x263c51, .65), dark = mat(0x122939, .6);
  // The slanted windshield is open to the surrounding blue sky.
  box(g, 5.4, .70, 1.15, dashboard, 0, 1.05, -.28, .13);
  const deck = box(g, 5.05, .18, 1.1, dark, 0, 1.48, -.23, .06); deck.rotation.x = .16;
  for (let i = 0; i < 5; i++) {
    const monitor = box(g, .62, .41, .055, mat(0x071d2b), (i - 2) * .88, 1.64, .095, .026);
    monitor.rotation.x = -.17;
    const display = label(g, i % 2 ? "ALT 35000" : "FL 248", .55, .24, (i - 2) * .88, 1.68, .129, "#0b3c45", "#6ef4c5"); display.rotation.x = -.17;
    for (let b = 0; b < 4; b++) sphere(g, mat(b % 2 ? 0x8ddb9d : 0xfbc973), (i - 2) * .88 - .2 + b * .13, 1.43, .327, .027);
  }
  for (const x of [-1.1, 1.1]) {
    box(g, .85, .16, .74, mat(0x40566c), x, .59, 1.18, .10);
    box(g, .87, .93, .20, mat(0x40566c), x, 1.04, 1.52, .09);
    cylinder(g, mat(0x9babad, .35, .4), .08, .11, .57, x, .29, 1.18);
    limb(g, dark, [x, 1.09, .69], [x, 1.4, .42], .04);
    limb(g, dark, [x - .23, 1.43, .42], [x + .23, 1.43, .42], .055);
  }
  for (const x of [-2.6, -.9, .9, 2.6]) limb(g, mat(0xc7ccd0), [x, 1.62, -.8], [x * .77, 3.41, -.8], .065);
  limb(g, mat(0xc7ccd0), [-2.1, 3.35, -.8], [2.1, 3.35, -.8], .09);
  box(parent, 1.8, 3.32, .23, mat(color.wall), -2.2, 1.66, -10.15, .06);
  box(parent, 1.8, 3.32, .23, mat(color.wall), 2.2, 1.66, -10.15, .06);
  box(parent, 2.7, .73, .24, mat(color.wall), 0, 3.12, -10.15, .06);
  label(parent, "FLIGHT DECK", 1.65, .26, 0, 2.98, -9.998);
  for (const x of [-1.23, 1.23]) box(parent, .09, 2.7, .18, mat(color.dark), x, 1.37, -10.12, .03);
}

export function buildCabin(scene: THREE.Scene): CabinWorld {
  const root = new THREE.Group(); root.name = "Dear Passengers · Cabin"; scene.add(root);
  const wall = mat(color.wall, .82), trim = mat(color.trim, .56, .1), dark = mat(color.dark, .7);
  const warmWhite = new THREE.MeshStandardMaterial({ color: 0xfff4d7, emissive: 0xffe4a7, emissiveIntensity: 1.2 });
  scene.background = new THREE.Color(0x8ed4f4);
  scene.fog = new THREE.Fog(0xcce8ed, 24, 68);
  const ambient = new THREE.HemisphereLight(0xb9e7ff, 0x7b8278, 2.2); root.add(ambient);
  const sunlight = new THREE.DirectionalLight(0xffedd0, 3.0);
  sunlight.position.set(-12, 18, 8); sunlight.castShadow = true;
  sunlight.shadow.mapSize.set(2048, 2048); sunlight.shadow.camera.left = -17; sunlight.shadow.camera.right = 17;
  sunlight.shadow.camera.top = 17; sunlight.shadow.camera.bottom = -17; sunlight.shadow.camera.near = .1; sunlight.shadow.camera.far = 55;
  sunlight.shadow.bias = -.0007; sunlight.shadow.normalBias = .035; sunlight.target.position.set(0, 0, 0);
  root.add(sunlight, sunlight.target);
  const fill = new THREE.DirectionalLight(0xa3d6fa, .8); fill.position.set(7, 6, -10); root.add(fill);

  const carpetCanvas = document.createElement("canvas"); carpetCanvas.width = carpetCanvas.height = 128;
  const cctx = carpetCanvas.getContext("2d")!; cctx.fillStyle = "#23416e"; cctx.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 1700; i++) { const v = ((i * 73) % 29) + 49; cctx.fillStyle = `rgba(${v},${v + 25},${v + 56},.38)`; cctx.fillRect((i * 37) % 128, (i * 89) % 128, 1, 2); }
  const carpetTexture = new THREE.CanvasTexture(carpetCanvas); carpetTexture.wrapS = carpetTexture.wrapT = THREE.RepeatWrapping; carpetTexture.repeat.set(6, 26); carpetTexture.colorSpace = THREE.SRGBColorSpace;
  box(root, 6.1, .16, 27.1, new THREE.MeshStandardMaterial({ map: carpetTexture, roughness: 1 }), 0, -.10, -.1, 0);
  for (const x of [-.88, .88]) box(root, .026, .005, 24.1, mat(0x8491a6), x, -.012, -.4, 0);
  for (let z = -9; z <= 10; z += 1) box(root, 1.70, .006, .013, mat(0x344f77), 0, -.009, z, 0);

  // Separate perforated panels leave actual openings, so the changing exterior reads as sky.
  const windowZs = [-8.6, -5.6, -2.6, .4, 3.4, 6.4, 9.4];
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
      const hole = roundPath(1.25, 1.65, .38, windowOffset, 1.98);
      panelShape.holes.push(new THREE.Path(hole.getPoints(28)));
      const panel = new THREE.Mesh(new THREE.ExtrudeGeometry(panelShape, { depth: .10, bevelEnabled: false }), wall);
      panel.position.set(side * 3.055, 0, z); panel.rotation.y = Math.PI / 2; panel.castShadow = true; panel.receiveShadow = true; root.add(panel);
      const rimShape = roundPath(1.49, 1.88, .43, windowOffset, 1.98);
      rimShape.holes.push(new THREE.Path(roundPath(1.24, 1.63, .37, windowOffset, 1.98).getPoints(28)));
      const frame = new THREE.Mesh(new THREE.ExtrudeGeometry(rimShape, { depth: .10, bevelEnabled: true, bevelSize: .045, bevelThickness: .035, bevelSegments: 2, steps: 1 }), mat(0xf4f1e6, .47));
      frame.position.set(side * 3.00, 0, z); frame.rotation.y = Math.PI / 2; frame.castShadow = true; frame.receiveShadow = true; root.add(frame);
      box(root, .06, 1.85, .016, trim, side * 2.986, 1.93, z + 1.49, .008);
      // Tiny pull-down shade grip.
      box(root, .05, .035, .26, trim, side * 2.91, 2.76, z - windowOffset, .015);
    }
    // Long baggage shelves with open fronts and colourful cases.
    box(root, 1.07, .12, 20.45, dark, side * 2.49, 2.97, -.15, .05);
    box(root, .10, .14, 20.45, mat(0xa6b4bd, .4, .3), side * 1.96, 3.025, -.15, .035);
    for (let z = -9; z < 9.5; z += 2.5) {
      limb(root, dark, [side * 3.02, 2.64, z], [side * 2.33, 2.90, z], .048);
      box(root, .36, .027, .72, warmWhite, side * 2.37, 2.893, z, .012);
      for (const o of [-.18, .18]) cylinder(root, mat(0x697c8d), .047, .047, .018, side * 2.72, 2.89, z + o, 12);
    }
    const baggageColors = [0xf6bd32, 0xe85946, 0x2fa777, 0xab6cce, 0x4e99cb, 0xde9142, 0xeb88a5];
    for (let n = 0; n < 16; n++) {
      const bag = suitcase(root, baggageColors[(n + (side === 1 ? 3 : 0)) % baggageColors.length], side * 2.48, 3.04, -9.45 + n * 1.22, .9 + (n % 3) * .06);
      bag.rotation.y = side === -1 ? Math.PI / 2 : -Math.PI / 2;
      bag.rotation.z = (n % 3 - 1) * .04;
    }
  }
  // Elliptical ceiling skin with exposed ribs.
  const vertices: number[] = [], indices: number[] = [];
  for (let j = 0; j <= 1; j++) for (let i = 0; i <= 40; i++) {
    const a = i / 40 * Math.PI; vertices.push(Math.cos(a) * 3.13, 2.78 + Math.sin(a) * 1.25, j ? 13.5 : -13.5);
  }
  for (let i = 0; i < 40; i++) { indices.push(i, i + 1, i + 41, i + 1, i + 42, i + 41); }
  const ceilingGeo = new THREE.BufferGeometry(); ceilingGeo.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3)); ceilingGeo.setIndex(indices); ceilingGeo.computeVertexNormals();
  const ceilingMat = mat(0xd6d6d2); ceilingMat.side = THREE.DoubleSide;
  const ceiling = new THREE.Mesh(ceilingGeo, ceilingMat); ceiling.receiveShadow = true; root.add(ceiling);
  for (let z = -12; z <= 12; z += 3) arch(root, z, mat(0xa9afb6), .075);
  for (const x of [-.37, .37]) box(root, .035, .045, 25.3, mat(0x99a3ae), x, 3.96, 0, .015);
  for (let z = -10; z <= 10; z += 3) {
    box(root, .43, .048, .66, mat(0x8d9daa), 0, 3.97, z, .06);
    box(root, .30, .03, .48, warmWhite, 0, 3.936, z, .055);
    if ((z + 10) % 9 === 0) { const light = new THREE.PointLight(0xffedca, 1.4, 11, 2); light.position.set(0, 3.45, z); root.add(light); }
  }

  const bubbleMap = bubbleTexture();
  const passengers: CabinPassenger[] = [];
  for (let row = 0; row < 4; row++) {
    const z = -7 + row * 4;
    for (const side of [-1, 1]) {
      seat(root, side * 1.83, z);
      const p = passenger(root, row * 2 + (side === 1 ? 1 : 0), side * 1.83, z, bubbleMap);
      passengers.push(p);
      const rowTag = label(root, `${row + 1}${side < 0 ? " A" : " B"}`, .42, .14, side * 1.98, 2.82, z + .45, "#2a3f58", "#fff2d0"); rowTag.rotation.y = side * .3;
    }
  }

  buildCockpit(root);
  const copilot = passenger(root, 1, 1.10, -10.73, bubbleMap);
  copilot.group.rotation.y = Math.PI; copilot.bubble.visible = false;
  const pilotHead = copilot.group.userData.head as THREE.Group;
  const pilotHat = mat(0x233e61);
  cylinder(pilotHead, pilotHat, .36, .31, .13, 0, .43, 0);
  box(pilotHead, .55, .05, .27, pilotHat, 0, .365, .28, .075);
  box(pilotHead, .25, .05, .02, mat(color.gold), 0, .43, .337, .014);
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
  const flameParts: THREE.Mesh[] = [];
  for (let n = 0; n < 8; n++) {
    const angle = n * 2.39;
    const flame = sphere(fire, new THREE.MeshBasicMaterial({ color: n % 2 ? 0xffa419 : 0xff6130, transparent: true, opacity: .85 }), Math.cos(angle) * .14, .29, Math.sin(angle) * .14, .15, .4 + (n % 3) * .08, .15);
    flameParts.push(flame);
  }
  const core = sphere(fire, new THREE.MeshBasicMaterial({ color: 0xffe684 }), 0, .20, 0, .17, .32, .17); flameParts.push(core);
  const fireLight = new THREE.PointLight(0xff9b26, 5, 5); fireLight.position.y = .65; fire.add(fireLight);

  // Visible engine, wing and soft cloud banks outside the window openings.
  for (const side of [-1, 1]) {
    const wing = box(root, 10, .11, 2.3, mat(0xc5d9e1, .35, .2), side * 7.4, -.1, .9, .1); wing.rotation.y = side * -.2;
    const engine = cylinder(root, mat(0xe4edf0, .4, .3), .56, .67, 2.14, side * 5.12, -.39, 1.2, 24); engine.rotation.x = Math.PI / 2;
    const mouth = cylinder(root, mat(0x314b62, .6, .3), .50, .50, .06, side * 5.12, -.39, 2.30, 24); mouth.rotation.x = Math.PI / 2;
    const hub = cylinder(root, mat(0x91a8b3), .14, .25, .21, side * 5.12, -.39, 2.35); hub.rotation.x = Math.PI / 2;
  }
  const clouds = new THREE.Group(); root.add(clouds);
  const cloudMaterial = new THREE.MeshBasicMaterial({ color: 0xf2fbff, transparent: true, opacity: .88 });
  for (let n = 0; n < 32; n++) {
    const side = n % 2 ? -1 : 1;
    const g = new THREE.Group(); g.position.set(side * (12 + n % 5 * 4), -1.7 + n % 4 * 2.2, -42 + n * 3.8); clouds.add(g);
    for (let k = 0; k < 4; k++) sphere(g, cloudMaterial, (k - 1.5) * 1.2, Math.sin(k * 2) * .45, Math.cos(k * 1.9) * .35, 1.35, .66 + k % 2 * .26, .87);
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

  const removedGeometries = new Set<THREE.BufferGeometry>(), removedMaterials = new Set<THREE.Material>();
  const actors = [...passengers, copilot];
  const movingGroups = new Set<THREE.Object3D>([
    ...actors.map(p => p.group), cart, cargo, door, fire, clouds, coast, mountains, night,
  ]);
  const before = { meshes: 0 }; root.traverse(object => { if (object instanceof THREE.Mesh) before.meshes++; });
  batchStaticGeometry(root, movingGroups, removedGeometries, removedMaterials);
  for (const p of actors) {
    const head = p.group.userData.head as THREE.Group, belt = p.group.userData.belt as THREE.Group;
    batchStaticGeometry(p.group, new Set([head, belt]), removedGeometries, removedMaterials);
    batchStaticGeometry(head, new Set(), removedGeometries, removedMaterials);
    batchStaticGeometry(belt, new Set(), removedGeometries, removedMaterials);
  }
  // The parent transforms remain live: cart sway, door hinge, clouds and route
  // visibility all continue to work on their original public object references.
  for (const group of [cart, cargo, door, coast, mountains, night, ...clouds.children as THREE.Group[]]) {
    batchStaticGeometry(group, new Set(), removedGeometries, removedMaterials);
  }
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
    root, passengers, cart, door, fire, cargo,
    galley: new THREE.Vector3(0, 1.1, 11.7), cockpit: new THREE.Vector3(0, 1.3, -11.5),
    setRoute(nextRoute) {
      route = ((nextRoute % 3) + 3) % 3;
      coast.visible = route === 0; mountains.visible = route === 1; night.visible = route === 2;
      const background = [0x8ed4f4, 0x7d94ab, 0x11243f][route];
      (scene.background as THREE.Color).setHex(background);
      (scene.fog as THREE.Fog).color.setHex(background); (scene.fog as THREE.Fog).far = route === 1 ? 54 : 90;
      sunlight.color.setHex([0xffedd0, 0xd1e2f0, 0x83b8ef][route]); sunlight.intensity = [3, .9, .38][route];
      ambient.intensity = [2.2, 1.65, 1.08][route]; ambient.color.setHex([0xb9e7ff,0xa6bed2,0x7aa9dc][route]);
      fill.intensity = [.8,.6,.35][route];
      cloudMaterial.color.setHex([0xf2fbff,0x9eafba,0x405672][route]); cloudMaterial.opacity = route === 2 ? .48 : .88;
      warmWhite.emissiveIntensity = route === 2 ? 2 : 1.2;
    },
    update(time, turbulence) {
      for (const p of passengers) {
        const head = p.group.userData.head as THREE.Group;
        head.rotation.z = Math.sin(time * 1.3 + p.id * 1.8) * .035 + Math.sin(time * 16 + p.id) * turbulence * .10;
        p.bubble.position.y = 2.83 + Math.sin(time * 2.2 + p.id) * .055;
        p.group.rotation.z = Math.sin(time * 9 + p.id) * turbulence * .026;
      }
      for (let i = 0; i < flameParts.length; i++) {
        flameParts[i].scale.y = .35 + Math.sin(time * 12 + i * 1.7) * .13 + (i % 3) * .12;
        flameParts[i].rotation.z = Math.sin(time * 8 + i) * .15;
      }
      fireLight.intensity = 4 + Math.sin(time * 15) * 1.2;
      for (let i = 0; i < clouds.children.length; i++) clouds.children[i].position.z = ((-42 + i * 3.8 + time * (route === 1 ? 1.6 : .6)) % 120 + 120) % 120 - 60;
      pilotHead.rotation.z = Math.sin(time * 1.1) * .022;
      if (route === 1) sunlight.intensity = time > 4 && time % 23 < .09 ? 5 : .9;
    },
    dispose() {
      const geometries = new Set<THREE.BufferGeometry>(); const materials = new Set<THREE.Material>(); const textures = new Set<THREE.Texture>();
      root.traverse(object => {
        const mesh = object as THREE.Mesh;
        if (mesh.geometry) geometries.add(mesh.geometry);
        if (mesh.material) for (const m of Array.isArray(mesh.material) ? mesh.material : [mesh.material]) {
          materials.add(m); const texture = (m as THREE.MeshStandardMaterial).map; if (texture) textures.add(texture);
        }
      });
      geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose()); textures.forEach(t => t.dispose());
      sunlight.shadow.dispose(); scene.remove(root);
    },
  };
}

export function makeHeldItem(kind: "coffee" | "extinguisher" | "wrench"): THREE.Group {
  const g = new THREE.Group();
  const glove = mat(0x10b4d5, .45); const cuff = mat(0xe8ece7); const dark = mat(0x263b48);
  // Hands are modelled, including separate curved fingers, so held props have weight.
  limb(g, glove, [.48, -.29, .36], [.16, -.05, .11], .092);
  sphere(g, glove, .115, .04, .055, .108, .105, .09);
  const cuffMesh = cylinder(g, cuff, .114, .114, .12, .47, -.27, .34); cuffMesh.rotation.z = -.76; cuffMesh.rotation.x = -.7;
  for (let f = 0; f < 3; f++) {
    limb(g, glove, [.095, .1 - f * .05, .11], [-.012, .11 - f * .05, .14], .028);
    sphere(g, glove, -.015, .11 - f * .05, .126, .03, .03, .036);
  }
  limb(g, glove, [.12, .11, .022], [.049, .17, -.021], .038);
  if (kind === "coffee") makeCup(g, -.02, -.09, 0, 1.18);
  if (kind === "extinguisher") {
    cylinder(g, mat(0xda4239, .36, .1), .105, .108, .42, -.02, .11, -.016);
    sphere(g, mat(0xda4239), -.02, .317, -.016, .105, .06, .105);
    cylinder(g, dark, .038, .045, .09, -.02, .39, -.016);
    box(g, .24, .035, .08, dark, .055, .437, -.016, .015);
    box(g, .12, .11, .017, mat(0xf9e9bf), -.02, .16, .095, .004);
    const hose = new THREE.CatmullRomCurve3([new THREE.Vector3(-.08, .39, 0), new THREE.Vector3(-.2, .32, 0), new THREE.Vector3(-.17, .01, -.05), new THREE.Vector3(-.15, .12, -.25)]);
    g.add(new THREE.Mesh(new THREE.TubeGeometry(hose, 16, .023, 7, false), dark));
    const nozzle = cylinder(g, dark, .046, .026, .13, -.15, .12, -.30); nozzle.rotation.x = Math.PI / 2;
  }
  if (kind === "wrench") {
    const steel = mat(0xb8c9d2, .29, .65);
    box(g, .09, .47, .055, steel, -.02, .13, 0, .024);
    box(g, .25, .08, .055, steel, -.02, .38, 0, .02);
    for (const x of [-.12, .08]) box(g, .057, .15, .055, steel, x, .45, 0, .013);
    box(g, .115, .23, .07, mat(0xe2a840), -.02, -.045, 0, .03);
  }
  return g;
}
