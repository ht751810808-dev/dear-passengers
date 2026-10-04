import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

type Parent = THREE.Group | THREE.Scene;
const material = (colour: number, roughness = .65, metalness = 0) => new THREE.MeshStandardMaterial({ color: colour, roughness, metalness });
function block(parent: Parent, size: number[], position: number[], mat: THREE.Material, radius = .03) {
  const mesh = new THREE.Mesh(new RoundedBoxGeometry(size[0], size[1], size[2], 2, Math.min(radius, ...size.map(v => v / 3))), mat);
  mesh.position.fromArray(position); mesh.castShadow = mesh.receiveShadow = true; parent.add(mesh); return mesh;
}
function rod(parent: Parent, a: number[], b: number[], radius: number, mat: THREE.Material) {
  const from = new THREE.Vector3().fromArray(a), to = new THREE.Vector3().fromArray(b);
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, from.distanceTo(to), 12), mat);
  mesh.position.copy(from).lerp(to, .5); mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), to.sub(from).normalize()); mesh.castShadow = true; parent.add(mesh); return mesh;
}
function dialAtlas() {
  const canvas = document.createElement('canvas'); canvas.width = 1024; canvas.height = 512;
  const ctx = canvas.getContext('2d')!;
  for (let i = 0; i < 8; i++) {
    const ox = (i % 4) * 256, oy = Math.floor(i / 4) * 256;
    ctx.save(); ctx.translate(ox + 128, oy + 128); ctx.fillStyle = '#071923'; ctx.fillRect(-128, -128, 256, 256);
    const glow = ctx.createRadialGradient(-25, -35, 10, 0, 0, 124); glow.addColorStop(0, i === 5 ? '#144431' : '#203e51'); glow.addColorStop(1, '#07121e'); ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(0, 0, 120, 0, Math.PI * 2); ctx.fill();
    if (i === 5) {
      ctx.strokeStyle = '#35ba7b'; ctx.lineWidth = 1.5;
      for (const radius of [22, 47, 74, 102]) { ctx.beginPath(); ctx.arc(0, 0, radius, 0, Math.PI * 2); ctx.stroke(); }
      ctx.beginPath(); ctx.moveTo(-113, 0); ctx.lineTo(113, 0); ctx.moveTo(0, -113); ctx.lineTo(0, 113); ctx.stroke();
      ctx.fillStyle = '#d4ffd8'; for (const p of [[-54, -37], [64, 47], [28, -65]]) { ctx.beginPath(); ctx.arc(p[0], p[1], 3, 0, Math.PI * 2); ctx.fill(); }
      ctx.fillStyle = '#67c6a3'; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center'; ctx.fillText('WEATHER RADAR', 0, 91);
    } else {
      if (i === 2) { ctx.fillStyle = '#548db2'; ctx.fillRect(-87, -66, 174, 66); ctx.fillStyle = '#806a50'; ctx.fillRect(-87, 0, 174, 57); ctx.strokeStyle = '#eadcad'; ctx.lineWidth = 2; for (let j = -2; j <= 2; j++) { ctx.beginPath(); ctx.moveTo(-21, j * 14); ctx.lineTo(21, j * 14); ctx.stroke(); } }
      for (let n = 0; n < 48; n++) {
        const a = n / 48 * Math.PI * 2, inner = n % 4 ? 103 : 92;
        ctx.strokeStyle = n > 36 && i !== 2 ? '#dea780' : '#d7ddd3'; ctx.lineWidth = n % 4 ? 1.4 : 3;
        ctx.beginPath(); ctx.moveTo(Math.sin(a) * inner, -Math.cos(a) * inner); ctx.lineTo(Math.sin(a) * 114, -Math.cos(a) * 114); ctx.stroke();
        if (n % 8 === 0) { ctx.font = '15px sans-serif'; ctx.fillStyle = '#d7e5e4'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(n * 5), Math.sin(a) * 77, -Math.cos(a) * 77); }
      }
      ctx.fillStyle = '#e4ebe0'; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'center'; ctx.fillText(['AIRSPEED', 'ALTITUDE', 'ATTITUDE', 'FUEL', 'PRESSURE', '', 'COMPASS', 'OIL TEMP'][i], 0, 35);
      ctx.fillStyle = '#7faead'; ctx.font = '11px sans-serif'; ctx.fillText(i === 0 ? 'KNOTS' : i === 1 ? 'FEET ×100' : 'FLIGHT SYSTEMS', 0, 52);
    }
    ctx.restore();
  }
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
  return new THREE.MeshBasicMaterial({ map: texture });
}

/** Static dashboard pieces share materials and are merged by the cabin's batch pass. */
export function buildDetailedFlightDeck(parent: Parent) {
  const group = new THREE.Group(); group.name = 'Analog flight deck'; group.position.z = -12.38; parent.add(group);
  const navy = material(0x223044, .74), panel = material(0x3c5069, .72, .10), edge = material(0x142133, .47), steel = material(0x8495a3, .35, .45), ivory = material(0xe6e9e3, .76);
  block(group, [5.6, .70, 1.16], [0, .91, -.25], navy, .14);
  block(group, [5.29, .095, 1.23], [0, 1.275, -.23], edge, .04);
  const fascia = block(group, [4.8, .90, .18], [0, 1.60, -.035], panel, .10); fascia.rotation.x = -.10;
  block(group, [4.9, .085, .28], [0, 2.045, -.08], navy, .045);
  for (const x of [-2.68, 2.68]) {
    block(group, [.47, .42, 1.16], [x, 1.01, .16], navy, .10);
    block(group, [.41, .052, 1.11], [x, 1.24, .13], panel, .035);
  }
  const atlas = dialAtlas(), needles: THREE.Group[] = [];
  const gauges = [[-1.69, 1.66, .245], [-1.14, 1.68, .245], [.40, 1.68, .285], [1.05, 1.68, .24], [1.60, 1.68, .24], [-.44, 1.67, .37], [2.08, 1.73, .16], [2.08, 1.36, .15]];
  gauges.forEach(([x, y, radius], index) => {
    const surround = new THREE.Mesh(new THREE.TorusGeometry(radius, .036, 8, 32), steel); surround.position.set(x, y, .081); group.add(surround);
    const bezel = new THREE.Mesh(new THREE.TorusGeometry(radius - .027, .018, 6, 32), edge); bezel.position.set(x, y, .114); group.add(bezel);
    const geometry = new THREE.CircleGeometry(radius - .030, 40), uv = geometry.attributes.uv;
    for (let n = 0; n < uv.count; n++) uv.setXY(n, (uv.getX(n) + index % 4) / 4, (uv.getY(n) + 1 - Math.floor(index / 4)) / 2);
    const face = new THREE.Mesh(geometry, atlas); face.position.set(x, y, .124); group.add(face);
    if (index < 5) {
      const needle = new THREE.Group(); needle.position.set(x, y, .134); group.add(needle); needles.push(needle);
      block(needle, [.012, radius * .68, .009], [0, radius * .23, 0], material(0xf0e8c4, .46), .004);
      const pin = new THREE.Mesh(new THREE.SphereGeometry(.025, 10, 8), steel); pin.position.z = .005; pin.scale.z = .4; needle.add(pin);
    }
    for (const side of [-1, 1]) block(group, [.035, .035, .012], [x + side * (radius + .065), y - radius * .78, .083], steel, .008);
  });
  const radarSweep = new THREE.Group(); radarSweep.position.set(-.44, 1.67, .137); group.add(radarSweep);
  const sweep = new THREE.Mesh(new THREE.CircleGeometry(.331, 28, 0, .30), new THREE.MeshBasicMaterial({ color: 0x61fcb1, transparent: true, opacity: .19, depthWrite: false })); radarSweep.add(sweep);
  block(radarSweep, [.329, .005, .005], [.164, 0, .001], new THREE.MeshBasicMaterial({ color: 0x8bf5bc }), .001);
  const red = new THREE.MeshStandardMaterial({ color: 0xfd6254, emissive: 0xfd372a, emissiveIntensity: 1.15, roughness: .34 });
  const green = new THREE.MeshStandardMaterial({ color: 0x80d88f, emissive: 0x38a95c, emissiveIntensity: .9, roughness: .34 });
  const amber = new THREE.MeshStandardMaterial({ color: 0xffce6e, emissive: 0xe59031, emissiveIntensity: .7, roughness: .34 });
  for (let i = 0; i < 10; i++) {
    const x = -2.17 + i * .405;
    block(group, [.18, .12, .06], [x, 1.31, .13], edge, .025);
    block(group, [.119, .061, .023], [x, 1.317, .171], i % 5 === 0 ? red : i % 3 === 0 ? amber : green, .014);
    if (i % 2 === 0) { rod(group, [x, 1.15, .16], [x, 1.21, .22], .013, steel); block(group, [.045, .025, .065], [x, 1.216, .233], ivory, .01); }
  }
  for (let n = 0; n < 8; n++) {
    const x = -.98 + n * .28;
    const knob = new THREE.Mesh(new THREE.CylinderGeometry(.035, .037, .041, 10), edge); knob.rotation.x = Math.PI / 2; knob.position.set(x, 2.03, .095); group.add(knob);
    block(group, [.009, .024, .006], [x, 2.035, .12], ivory, .002);
  }
  // One central yoke precisely meets the first-person hand targets at ±.29, 1.65, -11.94.
  rod(group, [0, 1.14, .19], [0, 1.51, .43], .071, steel);
  block(group, [.23, .16, .14], [0, 1.54, .44], edge, .05);
  rod(group, [-.29, 1.60, .44], [0, 1.51, .44], .046, edge);
  rod(group, [0, 1.51, .44], [.29, 1.60, .44], .046, edge);
  for (const x of [-.29, .29]) {
    block(group, [.10, .21, .12], [x, 1.65, .44], edge, .036);
    block(group, [.047, .028, .04], [x, 1.758, .446], x < 0 ? red : ivory, .011);
  }
  const console = block(group, [.57, .40, .70], [.94, 1.01, .65], panel, .06); console.rotation.x = .12;
  for (const x of [.81, 1.07]) {
    block(group, [.07, .018, .43], [x, 1.22, .67], edge, .021);
    rod(group, [x, 1.23, .77], [x, 1.43, .63], .026, steel);
    block(group, [.12, .09, .16], [x, 1.46, .63], material(0x8f463c, .6), .035);
  }
  // Broad windshield edges make the cockpit a glazed enclosure rather than an open bus front.
  for (const x of [-2.75, -.06, 2.75]) rod(group, [x, 1.92, -.78], [x * .82, 3.42, -.72], x === -.06 ? .065 : .11, ivory);
  rod(group, [-2.72, 1.99, -.73], [2.72, 1.99, -.73], .075, ivory);
  rod(group, [-2.21, 3.42, -.72], [2.21, 3.42, -.72], .095, ivory);
  const monitor = new THREE.Group(); monitor.position.set(0, 2.92, -.13); monitor.rotation.x = .16; group.add(monitor);
  block(monitor, [1.53, .69, .10], [0, 0, 0], edge, .06);
  const canvas = document.createElement('canvas'); canvas.width = 768; canvas.height = 320; const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#0b152c'; ctx.fillRect(0, 0, 768, 320); ctx.strokeStyle = '#416caf'; ctx.lineWidth = 5; ctx.strokeRect(10, 10, 748, 300);
  ctx.strokeStyle = '#aacdee'; ctx.fillStyle = '#294b76'; ctx.lineWidth = 4; ctx.beginPath();
  [[384, 48], [400, 83], [401, 145], [530, 194], [530, 215], [402, 184], [400, 240], [447, 260], [447, 274], [384, 264], [321, 274], [321, 260], [368, 240], [366, 184], [238, 215], [238, 194], [367, 145], [368, 83]].forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#8bd7c4'; for (const [x, y] of [[384, 116], [299, 194], [470, 194], [384, 226]]) { ctx.beginPath(); ctx.arc(x, y, 8, 0, Math.PI * 2); ctx.fill(); }
  ctx.fillStyle = '#d8e7f3'; ctx.font = 'bold 19px sans-serif'; ctx.fillText('AIRCRAFT SYSTEMS', 34, 43); ctx.font = '16px monospace'; ctx.fillStyle = '#7fc0bf'; ctx.fillText('CABIN', 39, 103); ctx.fillText('ENG 1', 39, 165); ctx.fillText('ENG 2', 638, 165); ctx.fillText('STABLE', 625, 279);
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.42, .59), new THREE.MeshBasicMaterial({ map: texture })); screen.position.z = .056; monitor.add(screen);
  return { needles, radarSweep };
}

/** A handful of still life accents stay beyond the central walking corridor. */
export function addCabinStillLife(parent: Parent) {
  const plastic = material(0x8dccdd, .35), cap = material(0xc8e4e8, .5), white = material(0xeaf0e8, .81), can = material(0x6a9971, .4, .3), rubber = material(0x42546a, .9);
  for (const [x, z, angle] of [[-1.02, -6.1, .4], [1.1, -1.8, -.6], [-1.1, 3.6, 1.2], [1.15, 6.2, .2]]) {
    const bottle = new THREE.Group(); bottle.position.set(x, .11, z); bottle.rotation.set(Math.PI / 2, 0, angle); parent.add(bottle);
    const body = new THREE.Mesh(new THREE.CylinderGeometry(.066, .064, .29, 10), plastic); bottle.add(body);
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(.025, .061, .065, 10), plastic); neck.position.y = .175; bottle.add(neck);
    const top = new THREE.Mesh(new THREE.CylinderGeometry(.029, .029, .035, 10), cap); top.position.y = .225; bottle.add(top);
    const band = new THREE.Mesh(new THREE.CylinderGeometry(.067, .067, .065, 10), white); band.position.y = -.025; bottle.add(band);
    for (const y of [-.10, .10]) { const rib = new THREE.Mesh(new THREE.TorusGeometry(.066, .004, 4, 10), cap); rib.rotation.x = Math.PI / 2; rib.position.y = y; bottle.add(rib); }
  }
  for (const [x, z] of [[1.0, -.45], [-1.01, 7.7]]) {
    const body = new THREE.Mesh(new THREE.CylinderGeometry(.068, .061, .17, 12), can); body.rotation.z = 1.23; body.position.set(x, .075, z); parent.add(body);
    block(parent, [.11, .018, .22], [x + .13, .012, z + .19], white, .005).rotation.y = .43;
  }
  for (const side of [-1, 1]) for (const z of [-7, -3, 1, 5]) block(parent, [.75, .018, .34], [side * 1.83, .015, z + .12], rubber, .035);
}
