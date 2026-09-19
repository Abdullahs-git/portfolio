/* =====================================================================
   MAB·26 — the keyboard, rendered into the page.

   One WebGL canvas sits behind the page, but nothing is drawn full-screen
   except the keycaps drifting around the hero. The board itself is drawn
   into windows: ordinary elements in the page flow ([data-window]) whose
   rectangles are read every frame and rendered with a scissored viewport
   and a top-down orthographic camera. The page keeps its layout — a board
   in the construction chapter, three crops in the feature rows, a board in
   the finish chapter, one key beside each process step — and the 3-D adds
   the drop of a key landing, the press of a hover, and the sweep of a
   finish changing.

   Everything is built at runtime: no models are downloaded.

   The reveal grammar and the scroll wiring follow the pattern of ThreeUI's
   "Kage" page by Meng To (MIT), rewritten for this scene.
   https://github.com/MengTo/threeui
   ===================================================================== */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

export function bootMk(config) {
config = config || {};
const TYPED        = String(config.typed || '').toLowerCase();
const FONT_DISPLAY = config.displayFont || 'Inter Tight';
const FONT_MONO    = config.monoFont || 'JetBrains Mono';
const PRE_LINES    = config.preloaderLines || ['cutting keys', 'printing legends', 'loading type', 'ready'];

/* ------------------------------------------------------------ 0 · basics */
const Q      = new URLSearchParams(location.search);
const qs     = (k, d) => { const v = Q.get(k); return v === null ? d : v; };
const REDUCE = matchMedia('(prefers-reduced-motion: reduce)').matches;
const COARSE = matchMedia('(hover: none)').matches;
const clamp  = (v, a, b) => v < a ? a : (v > b ? b : v);
const sat    = v => clamp(v, 0, 1);
const lerp   = (a, b, t) => a + (b - a) * t;
const smooth = (e0, e1, x) => { const t = sat((x - e0) / (e1 - e0)); return t * t * (3 - 2 * t); };
const easeOut = t => 1 - Math.pow(1 - t, 3);
const damp   = (cur, to, rate, dt) => lerp(cur, to, 1 - Math.exp(-rate * dt));
const $  = s => document.querySelector(s);
const $$ = s => [].slice.call(document.querySelectorAll(s));
function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
let alive = true;
const disposers = [];
const listen = (target, ev, fn, opts) => {
  target.addEventListener(ev, fn, opts);
  disposers.push(() => target.removeEventListener(ev, fn, opts));
};
const vpW = () => document.documentElement.clientWidth || innerWidth;
const vpH = () => document.documentElement.clientHeight || innerHeight;

/* ------------------------------------------------------------ 1 · the board
   Seventy-eight keys in six rows, fifteen units wide. The function row
   carries the disciplines; the space bar carries the verb. */
const U = 1;
const ROWS = [
  [['ESC', 1, 'mono', 'accent', 'ESC'], ['UX', 1, 'mono', '', 'F1'], ['UI', 1, 'mono', '', 'F2'], ['IA', 1, 'mono', '', 'F3'],
   ['DS', 1, 'mono', '', 'F4'], ['FE', 1, 'mono', '', 'F5'], ['A11Y', 1, 'mono', '', 'F6'], ['SEO', 1, 'mono', '', 'F7'],
   ['PERF', 1, 'mono', '', 'F8'], ['TS', 1, 'mono', '', 'F9'], ['CSS', 1, 'mono', '', 'F10'], ['3D', 1, 'mono', '', 'F11'],
   ['MOTION', 1, 'mono', '', 'F12'], ['DEL', 2, 'mono', '', 'DEL']],
  [['`', 1, 'sym'], ['1', 1], ['2', 1], ['3', 1], ['4', 1], ['5', 1], ['6', 1], ['7', 1], ['8', 1], ['9', 1], ['0', 1],
   ['-', 1, 'sym'], ['=', 1, 'sym'], ['BKSP', 2, 'mono', '', 'BKSP']],
  [['TAB', 1.5, 'mono', '', 'TAB'], ['Q', 1], ['W', 1], ['E', 1], ['R', 1], ['T', 1], ['Y', 1], ['U', 1], ['I', 1], ['O', 1], ['P', 1],
   ['[', 1, 'sym'], [']', 1, 'sym'], ['\\', 1.5, 'sym']],
  [['CAPS', 1.75, 'mono', '', 'CAPS'], ['A', 1], ['S', 1], ['D', 1], ['F', 1], ['G', 1], ['H', 1], ['J', 1], ['K', 1], ['L', 1],
   [';', 1, 'sym'], ['\'', 1, 'sym'], ['RETURN', 2.25, 'mono', '', 'RET']],
  [['SHIFT', 2.25, 'mono', '', 'LSHIFT'], ['Z', 1], ['X', 1], ['C', 1], ['V', 1], ['B', 1], ['N', 1], ['M', 1],
   [',', 1, 'sym'], ['.', 1, 'sym'], ['/', 1, 'sym'], ['SHIFT', 1.75, 'mono', '', 'RSHIFT'], ['↑', 1, 'sym', '', 'UP']],
  [['FN', 1, 'mono', '', 'FN'], ['CTRL', 1, 'mono', '', 'CTRL'], ['OPT', 1, 'mono', '', 'LOPT'], ['CMD', 1.25, 'mono', '', 'LCMD'],
   ['SHIP', 5.5, 'mono', '', 'SPACE'], ['CMD', 1.25, 'mono', '', 'RCMD'], ['OPT', 1, 'mono', '', 'ROPT'],
   ['←', 1, 'sym', '', 'LEFT'], ['↓', 1, 'sym', '', 'DOWN'], ['→', 1, 'sym', '', 'RIGHT']]
];
const KEYS = [];
ROWS.forEach((row, r) => {
  let cursor = 0;
  row.forEach(spec => {
    const [legend, w, kind, flag, id] = [spec[0], spec[1], spec[2] || 'letter', spec[3] || '', spec[4] || spec[0].toLowerCase()];
    KEYS.push({ legend, w, kind, accent: flag === 'accent', id, row: r,
      x: (-7.5 + cursor + w / 2) * U, z: (r - 2.5) * U });
    cursor += w;
  });
});
const KEY_BY_ID = {}; KEYS.forEach(k => { KEY_BY_ID[k.id] = k; });
const N = KEYS.length;

/* the keycaps that hang around the hero: id, x and y as fractions of the
   frame, size, in-plane turn (deg), and how far they drift with the pointer */
const FLOATERS = [
  ['ESC',  -.44, .74, 1.05, -8,  1.1], ['m',    -.80, .62, 1.15, -14, .8], ['F8',  -.08, .76, .78, 10,  1.4],
  ['a',    .72,  .70, 1.0,  8,   .9],  ['LCMD', .40,  .33, 1.1,  -6,  1.3], ['1',   .84,  -.18, 1.0, 14, .7],
  ['g',    -.86, -.26, 1.05, 6,  1.0], ['c',    -.60, -.72, .95, -12, 1.2], ['RCMD', .60, -.66, 1.15, 9, .8]
];

/* ------------------------------------------------------------ 2 · gl */
const canvas = document.getElementById('gl');
let renderer, scene, maxAniso = 1;
const DPR_CAP = COARSE ? 1.5 : 2;
const PERF = { scale: 1, acc: 0, n: 0, locked: qs('adapt', '1') === '0' };
const LAYER_BOARD = 0, LAYER_HERO = 1;

function initGL() {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, DPR_CAP));
  renderer.setSize(vpW(), vpH(), true);
  renderer.setClearColor(0x000000, 0);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.autoClear = false;
  maxAniso = renderer.capabilities.getMaxAnisotropy();
  scene = new THREE.Scene();
}

/* ------------------------------------------------------------ 3 · finishes */
const CHARCOAL = { case: 0x151517, key: 0x222225, ink: 0xededea, well: 0x0f0f11 };
const CHALK    = { case: 0xd6d6d1, key: 0xeeeeea, ink: 0x2b2b2d, well: 0xb9b9b4 };
const ACCENT   = 0xf0662b;
const cA = new THREE.Color(), cB = new THREE.Color();
const mixHex = (a, b, t, out) => { cA.setHex(a); cB.setHex(b); return out.copy(cA).lerp(cB, t); };

/* ------------------------------------------------------------ 4 · lights
   Flat, soft, from above and a little to the left: the board reads as a
   product photograph, not a render. */
const LIGHT = {};
function buildLights() {
  const hemi = new THREE.HemisphereLight(0xffffff, 0x9a9a95, .38);
  hemi.layers.enable(LAYER_HERO); scene.add(hemi); LIGHT.hemi = hemi;
  const key = new THREE.DirectionalLight(0xffffff, .44);
  key.position.set(-6, 22, 8); key.castShadow = true;
  key.shadow.mapSize.set(COARSE ? 1024 : 2048, COARSE ? 1024 : 2048);
  const c = key.shadow.camera; c.left = -12; c.right = 12; c.top = 12; c.bottom = -12; c.near = 2; c.far = 60;
  key.shadow.bias = -0.0006; key.shadow.normalBias = .02; key.shadow.radius = 4;
  key.layers.enable(LAYER_HERO);
  scene.add(key); scene.add(key.target); LIGHT.key = key;

  const ground = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.ShadowMaterial({ opacity: .22 }));
  ground.rotation.x = -Math.PI / 2; ground.position.y = -.62; ground.receiveShadow = true;
  scene.add(ground); LIGHT.ground = ground;

  /* the hero keycaps live on their own layer, high above the board, with their own floor */
  const heroGround = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.ShadowMaterial({ opacity: .16 }));
  heroGround.rotation.x = -Math.PI / 2; heroGround.position.y = HERO_Y - 2.2; heroGround.receiveShadow = true;
  heroGround.layers.set(LAYER_HERO);
  scene.add(heroGround);
  const heroKey = new THREE.DirectionalLight(0xffffff, .55);
  heroKey.position.set(-8, HERO_Y + 30, 10); heroKey.target.position.set(0, HERO_Y, 0); heroKey.castShadow = true;
  heroKey.shadow.mapSize.set(2048, 2048);
  const hc = heroKey.shadow.camera; hc.left = -40; hc.right = 40; hc.top = 30; hc.bottom = -30; hc.near = 2; hc.far = 80;
  heroKey.shadow.bias = -0.0005; heroKey.shadow.radius = 6;
  heroKey.layers.set(LAYER_HERO);
  scene.add(heroKey); scene.add(heroKey.target);
}
function applyTheme(t) {
  LIGHT.hemi.intensity = lerp(.38, .5, t);
  LIGHT.hemi.groundColor.setHex(t > .5 ? 0x2a2a28 : 0x9a9a95);
  LIGHT.ground.material.opacity = lerp(.22, .4, t);
}

/* ------------------------------------------------------------ 5 · legends
   One atlas carries every legend, drawn white so the ink can be tinted per
   finish. Each key's small plane maps to its own cell. */
const ATLAS = { tex: null, cols: 16, cell: 128 };
function buildAtlas() {
  const S = ATLAS.cols * ATLAS.cell, c = document.createElement('canvas');
  c.width = c.height = S;
  const x = c.getContext('2d');
  x.clearRect(0, 0, S, S);
  x.fillStyle = '#fff'; x.textAlign = 'center'; x.textBaseline = 'middle';
  KEYS.forEach((k, i) => {
    const col = i % ATLAS.cols, row = Math.floor(i / ATLAS.cols);
    const cx = col * ATLAS.cell + ATLAS.cell / 2, cy = row * ATLAS.cell + ATLAS.cell / 2;
    if (k.kind === 'letter') { x.font = '500 58px ' + FONT_DISPLAY + ', sans-serif'; x.fillText(k.legend, cx, cy + 2); }
    else if (k.kind === 'sym') { x.font = '500 52px ' + FONT_DISPLAY + ', system-ui, sans-serif'; x.fillText(k.legend, cx, cy + 2); }
    else {
      const size = k.legend.length > 4 ? 20 : 26;
      x.font = '500 ' + size + 'px ' + FONT_MONO + ', monospace';
      if ('letterSpacing' in x) x.letterSpacing = '2px';
      x.fillText(k.legend, cx, cy + 1);
      if ('letterSpacing' in x) x.letterSpacing = '0px';
    }
  });
  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = Math.min(8, maxAniso); tex.encoding = THREE.sRGBEncoding;
  ATLAS.tex = tex;
}
function legendGeometry(i, size) {
  const g = new THREE.PlaneGeometry(size, size);
  const uv = g.attributes.uv;
  const col = i % ATLAS.cols, row = Math.floor(i / ATLAS.cols), n = ATLAS.cols;
  const u0 = col / n, v0 = 1 - (row + 1) / n;
  for (let j = 0; j < uv.count; j++) uv.setXY(j, u0 + uv.getX(j) / n, v0 + uv.getY(j) / n);
  g.rotateX(-Math.PI / 2);
  return g;
}

/* ------------------------------------------------------------ 6 · geometry */
const KEY_H = .5;
const geoCache = {};
const keyGeo = w => geoCache[w] || (geoCache[w] = new RoundedBoxGeometry(w * U - .1, KEY_H, .9, 4, .1));
const BOARD = { group: null, keys: [], caseMesh: null, well: null, ready: false };
const HERO = { group: null, keys: [], ready: false };
const HERO_Y = 120;
const rnd = mulberry32(78);

function makeKey(k, i) {
  const mat = new THREE.MeshStandardMaterial({ color: k.accent ? ACCENT : CHARCOAL.key, roughness: .82, metalness: .0 });
  const mesh = new THREE.Mesh(keyGeo(k.w), mat);
  mesh.castShadow = true; mesh.receiveShadow = true;
  const inkMat = new THREE.MeshBasicMaterial({ map: ATLAS.tex, transparent: true, alphaTest: .12, color: k.accent ? 0xffffff : CHARCOAL.ink, depthWrite: false, toneMapped: false });
  const ink = new THREE.Mesh(legendGeometry(i, k.kind === 'letter' ? .58 : .76), inkMat);
  ink.position.y = KEY_H / 2 + .005;
  mesh.add(ink);
  return { mesh, ink, mat, inkMat };
}
function buildBoard() {
  const group = new THREE.Group();
  scene.add(group);
  BOARD.group = group;
  const caseMat = new THREE.MeshStandardMaterial({ color: CHARCOAL.case, roughness: .7, metalness: 0 });
  const caseMesh = new THREE.Mesh(new RoundedBoxGeometry(15.8 * U, .6, 6.8 * U, 6, .34), caseMat);
  caseMesh.position.y = -.36; caseMesh.castShadow = true; caseMesh.receiveShadow = true;
  group.add(caseMesh); BOARD.caseMesh = caseMesh;
  const well = new THREE.Mesh(new THREE.BoxGeometry(15.2 * U, .08, 6.2 * U), new THREE.MeshStandardMaterial({ color: CHARCOAL.well, roughness: .95 }));
  well.position.y = -.06; well.receiveShadow = true; group.add(well); BOARD.well = well;

  KEYS.forEach((k, i) => {
    const K = makeKey(k, i);
    group.add(K.mesh);
    BOARD.keys.push(Object.assign(K, {
      k, i, slot: new THREE.Vector3(k.x, 0, k.z),
      /* each key waits above its own slot and drops in when its turn comes */
      drop: 5 + rnd() * 4, spin: (rnd() - .5) * .9, tilt: (rnd() - .5) * .7,
      order: (k.row * 15 + (k.x + 7.5)) / (6 * 15), press: 0, want: 0
    }));
  });
  BOARD.ready = true;
}
function buildHero() {
  const group = new THREE.Group();
  group.position.y = HERO_Y;
  scene.add(group);
  HERO.group = group;
  FLOATERS.forEach(f => {
    const k = KEY_BY_ID[f[0]]; if (!k) return;
    const i = KEYS.indexOf(k);
    const K = makeKey(k, i);
    K.mesh.layers.set(LAYER_HERO); K.ink.layers.set(LAYER_HERO);
    K.mesh.scale.setScalar(f[3]);
    group.add(K.mesh);
    HERO.keys.push(Object.assign(K, { k, nx: f[1], ny: f[2], size: f[3], turn: f[4] * Math.PI / 180, par: f[5], bob: rnd() * 6.28, home: new THREE.Vector3(), from: new THREE.Vector3() }));
  });
  HERO.ready = true;
}

/* ------------------------------------------------------------ 7 · cameras
   Every view is orthographic and looks straight down with a slight lean
   toward the front, so the keys show a face and the board stays a plan. */
function makeOrtho() {
  const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, .5, 200);
  cam.up.set(0, 0, -1);
  return cam;
}
const _c = new THREE.Vector3();
function aimOrtho(cam, cx, cz, halfW, aspect, baseY) {
  const halfH = halfW / Math.max(.05, aspect);
  cam.left = -halfW; cam.right = halfW; cam.top = halfH; cam.bottom = -halfH;
  cam.position.set(cx, (baseY || 0) + 40, cz + 9);
  _c.set(cx, baseY || 0, cz);
  cam.lookAt(_c);
  cam.updateProjectionMatrix();
}

/* — the windows: page elements the board is drawn into */
const CROPS = {
  board:  { cx: 0,    cz: -.15, halfW: 8.45 },
  finish: { cx: 0,    cz: -.15, halfW: 8.45 },
  row:    { cx: -4.1, cz: -1.9, halfW: 3.05 },
  arrows: { cx: 5.7,  cz: 1.7,  halfW: 2.3 },
  macro:  { cx: -6.6, cz: -2.3, halfW: 1.45 }
};
const WINDOWS = [];
function buildWindows() {
  $$('[data-window]').forEach(el => {
    const kind = el.dataset.window;
    let spec = CROPS[kind];
    if (kind === 'key') {
      const k = KEY_BY_ID[el.dataset.key];
      if (!k) return;
      spec = { cx: k.x, cz: k.z, halfW: .62 * Math.max(1, k.w) };
    }
    if (!spec) return;
    const cam = makeOrtho(); cam.layers.set(LAYER_BOARD);
    WINDOWS.push({ el, kind, spec, cam, rect: null });
  });
}
const heroCam = makeOrtho(); heroCam.layers.set(LAYER_HERO);

/* ------------------------------------------------------------ 8 · state */
const STATE = { assemble: 0, finish: 0, theme: 0, intro: 0 };
const RIG = { mx: 0, my: 0, tmx: 0, tmy: 0 };
const FIN = { user: -1 };
let clock = 0, typedCount = 0, arrowTick = 0;

/* the pointer only turns the floaters; the page is not a camera ride */
function wirePointer() {
  if (COARSE) return;
  listen(window, 'pointermove', e => {
    RIG.tmx = (e.clientX / vpW()) * 2 - 1;
    RIG.tmy = -((e.clientY / vpH()) * 2 - 1);
  }, { passive: true });
}

/* ------------------------------------------------------------ 9 · sound
   A key click is a short filtered burst and a low thump, synthesised on
   demand and only after the visitor asks for it. */
const SOUND = { on: false, ctx: null };
function clickSound(strength) {
  if (!SOUND.on) return;
  try {
    if (!SOUND.ctx) SOUND.ctx = new (window.AudioContext || window.webkitAudioContext)();
    const ctx = SOUND.ctx, t = ctx.currentTime, s = strength || 1;
    if (ctx.state === 'suspended') ctx.resume();
    const len = Math.floor(ctx.sampleRate * .06), buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2);
    const src = ctx.createBufferSource(); src.buffer = buf;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 2400 + Math.random() * 900; bp.Q.value = 1.1;
    const g = ctx.createGain(); g.gain.setValueAtTime(.18 * s, t); g.gain.exponentialRampToValueAtTime(.001, t + .07);
    src.connect(bp); bp.connect(g); g.connect(ctx.destination); src.start(t);
    const osc = ctx.createOscillator(); osc.type = 'sine'; osc.frequency.setValueAtTime(190, t); osc.frequency.exponentialRampToValueAtTime(70, t + .05);
    const og = ctx.createGain(); og.gain.setValueAtTime(.16 * s, t); og.gain.exponentialRampToValueAtTime(.001, t + .06);
    osc.connect(og); og.connect(ctx.destination); osc.start(t); osc.stop(t + .07);
  } catch (e) { /* no audio, no problem */ }
}
function pressKey(id, strength) {
  const K = BOARD.keys.find(x => x.k.id === id);
  if (!K) return;
  K.press = 1;
  clickSound(strength);
}

/* ------------------------------------------------------------ 10 · per frame */
const typedEl = $('#typed');
const buildStage = $('.build-stage');
const finishStage = $('.finish-stage');
function stageProgress(el) {
  if (!el) return 0;
  const r = el.getBoundingClientRect(), vh = vpH();
  /* 0 as the stage's top reaches the middle of the frame, 1 as its bottom does */
  return sat((vh * .5 - r.top) / Math.max(1, r.height));
}
function updateState(dt) {
  const ap = stageProgress(buildStage);
  STATE.assemble = REDUCE ? (ap > 0 ? 1 : 0) : damp(STATE.assemble, smooth(0, .78, ap), 6, dt);
  const fp = stageProgress(finishStage);
  const scrollFinish = smooth(.32, .62, fp);
  const finishTarget = FIN.user < 0 ? scrollFinish : (fp > .6 ? 1 : (fp < .2 ? 0 : FIN.user));
  STATE.finish = REDUCE ? finishTarget : damp(STATE.finish, finishTarget, 5, dt);
  STATE.theme = STATE.finish;
  const dark = STATE.finish > .5;
  const html = document.documentElement;
  if ((html.dataset.theme === 'dark') !== dark) html.dataset.theme = dark ? 'dark' : 'light';
  const r = $('#finish-build');
  if (r && FIN.user < 0 && r.checked !== dark) { r.checked = dark; if (!dark) { const d = $('#finish-design'); if (d) d.checked = true; } }
  RIG.mx = damp(RIG.mx, RIG.tmx, 3, dt);
  RIG.my = damp(RIG.my, RIG.tmy, 3, dt);
}
function updateBoard(dt) {
  if (!BOARD.ready) return;
  const A = STATE.assemble, F = STATE.finish;
  mixHex(CHARCOAL.case, CHALK.case, F, BOARD.caseMesh.material.color);
  mixHex(CHARCOAL.well, CHALK.well, F, BOARD.well.material.color);
  for (let n = 0; n < BOARD.keys.length; n++) {
    const K = BOARD.keys[n], m = K.mesh;
    const start = K.order * .8, e = easeOut(smooth(start, start + .2, A));
    m.visible = e > 0;
    if (!m.visible) continue;
    K.press = damp(K.press, K.want, 12, dt);
    K.want = damp(K.want, 0, 9, dt);
    const settle = Math.sin(e * Math.PI) * .12;
    m.position.set(K.slot.x, (1 - e) * K.drop + settle - K.press * .16, K.slot.z);
    m.rotation.set(K.tilt * (1 - e), K.spin * (1 - e), 0);
    const kx = (K.slot.x + 7.5) / 15;
    const fi = smooth(kx * .7, kx * .7 + .3, F);
    if (!K.k.accent) { mixHex(CHARCOAL.key, CHALK.key, fi, K.mat.color); mixHex(CHARCOAL.ink, CHALK.ink, fi, K.inkMat.color); }
    K.mat.emissive.setHex(0xffffff).multiplyScalar(K.press * .08);
  }
  /* the board types as the last keys land */
  if (typedEl && TYPED) {
    const tp = smooth(.72, 1, A);
    const want = Math.floor(tp * (TYPED.length + .999));
    if (want !== typedCount) {
      if (want > typedCount) for (let i = typedCount; i < want; i++) pressKey(TYPED[i] === ' ' ? 'SPACE' : TYPED[i], .8);
      typedCount = want;
      typedEl.textContent = TYPED.slice(0, typedCount);
      typedEl.classList.toggle('done', typedCount >= TYPED.length);
    }
  }
  /* the arrows walk while their crop is on screen */
  const arrows = WINDOWS.find(w => w.kind === 'arrows');
  if (arrows && arrows.rect) {
    arrowTick += dt;
    if (arrowTick > .46) { arrowTick = 0; pressKey(['LEFT', 'DOWN', 'RIGHT', 'UP'][Math.floor(clock * 2.2) % 4], .45); }
  }
}
function updateHero(dt) {
  if (!HERO.ready) return;
  const t = clock, io = STATE.intro;
  for (let n = 0; n < HERO.keys.length; n++) {
    const K = HERO.keys[n], m = K.mesh;
    /* each cap flies in from beyond the frame on its own cue, then floats */
    const e = easeOut(clamp((io - .05 - n * .06) / .55, 0, 1));
    const bobY = Math.sin(t * .7 + K.bob) * .35;
    const px = K.home.x + RIG.mx * K.par * 1.6 + Math.sin(t * .35 + K.bob) * .25;
    const pz = K.home.z - RIG.my * K.par * 1.2 + Math.cos(t * .3 + K.bob * 1.3) * .2;
    /* the group already sits at HERO_Y; the cap only carries its own bob */
    m.position.set(lerp(K.from.x, px, e), bobY + (1 - e) * 6, lerp(K.from.z, pz, e));
    m.rotation.set(Math.sin(t * .45 + K.bob) * .12 - .1 + (1 - e) * .9, K.turn + Math.sin(t * .3 + K.bob * 2) * .06 + (1 - e) * 1.2, Math.cos(t * .5 + K.bob) * .1);
    m.visible = e > 0;
    K.press = damp(K.press || 0, 0, 8, dt);
  }
}
function placeHero() {
  if (!HERO.ready) return;
  const aspect = vpW() / vpH(), narrow = aspect < .9;
  const halfW = narrow ? 9 : 13.5, halfH = halfW / aspect;
  aimOrtho(heroCam, 0, 0, halfW, aspect, HERO_Y);
  HERO.keys.forEach(K => {
    const nx = narrow ? K.nx * .9 : K.nx, ny = narrow ? K.ny * .96 : K.ny;
    K.home.set(nx * halfW, 0, -ny * halfH);
    K.from.set(nx * halfW * 2.4, 0, -ny * halfH * 2.4);
  });
}

/* ------------------------------------------------------------ 11 · rendering */
function render() {
  const vw = vpW(), vh = vpH(), pr = renderer.getPixelRatio();
  renderer.setScissorTest(false);
  renderer.setViewport(0, 0, vw, vh);
  renderer.clear(true, true, false);
  /* the hero: full frame, only while the hero is on screen */
  if (HERO.ready && scrollY < vh * 1.15) {
    HERO.group.visible = true;
    renderer.render(scene, heroCam);
    HERO.group.visible = false;
  }
  if (!BOARD.ready) return;
  BOARD.group.visible = true;
  for (let i = 0; i < WINDOWS.length; i++) {
    const W = WINDOWS[i], r = W.el.getBoundingClientRect();
    W.rect = null;
    if (r.bottom < -20 || r.top > vh + 20 || r.width < 4 || r.height < 4) continue;
    W.rect = r;
    aimOrtho(W.cam, W.spec.cx, W.spec.cz, W.spec.halfW, r.width / r.height, 0);
    renderer.setViewport(r.left, vh - r.bottom, r.width, r.height);
    renderer.setScissor(r.left, vh - r.bottom, r.width, r.height);
    renderer.setScissorTest(true);
    renderer.clearDepth();
    renderer.render(scene, W.cam);
  }
  renderer.setScissorTest(false);
  BOARD.group.visible = false;
}

/* ------------------------------------------------------------ 12 · page wiring */
const nav = $('#nav'), preEl = $('#pre'), preFill = $('#pre-fill'), preLog = $('#pre-log');
const progressBar = $('#progress');

function wireReveals() {
  splitHeadingWords();
  const groups = new Map();
  const items = $$('[data-rv], .mask-line');
  items.forEach(el => {
    const key = el.parentElement;
    const arr = groups.get(key) || []; arr.push(el); groups.set(key, arr);
  });
  groups.forEach(arr => arr.forEach((el, i) => el.dataset.rvd = i * 70));
  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const d = parseFloat(e.target.dataset.rvd || 0);
      setTimeout(() => e.target.classList.add('rv-in'), REDUCE ? 0 : d);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .04 });
  items.forEach(el => { if (!el.closest('#hero')) io.observe(el); });
  disposers.push(() => io.disconnect());
}
function splitHeadingWords() {
  if (REDUCE) return;
  $$('.display').forEach(heading => {
    const lines = heading.querySelectorAll('.mask-line');
    const targets = lines.length ? [].slice.call(lines) : [heading];
    targets.forEach(target => {
      if (target.dataset.wordReady === 'true') return;
      const phrase = target.textContent.replace(/\s+/g, ' ').trim();
      if (!phrase) return;
      target.dataset.wordReady = 'true';
      target.classList.add('word-reveal');
      target.setAttribute('aria-label', phrase);
      target.textContent = '';
      phrase.split(' ').forEach((word, i) => {
        if (i) target.appendChild(document.createTextNode(' '));
        const mask = document.createElement('span');
        const inner = document.createElement('span');
        mask.className = 'word-mask'; mask.setAttribute('aria-hidden', 'true');
        inner.className = 'word'; inner.textContent = word;
        inner.style.setProperty('--word-delay', (i * 64) + 'ms');
        mask.appendChild(inner); target.appendChild(mask);
      });
    });
  });
}
/* the thesis reads itself: words turn from grey to ink as the page passes them */
let THESIS = [];
function wireThesis() {
  THESIS = $$('[data-words]').map(el => {
    if (el.dataset.wordsReady !== 'true') {
      const words = el.textContent.replace(/\s+/g, ' ').trim().split(' ');
      el.setAttribute('aria-label', words.join(' '));
      el.dataset.wordsReady = 'true';
      el.textContent = '';
      words.forEach((w, i) => {
        if (i) el.appendChild(document.createTextNode(' '));
        const s = document.createElement('span'); s.className = 'w'; s.textContent = w; s.setAttribute('aria-hidden', 'true');
        el.appendChild(s);
      });
    }
    return { el, words: [].slice.call(el.querySelectorAll('.w')), on: -1 };
  });
}
function updateThesis() {
  const vh = vpH();
  THESIS.forEach(T => {
    const r = T.el.getBoundingClientRect();
    if (r.bottom < 0 || r.top > vh) return;
    const p = sat((vh * .8 - r.top) / (r.height + vh * .2));
    const count = Math.round(p * T.words.length);
    if (count === T.on) return;
    T.on = count;
    T.words.forEach((w, i) => w.classList.toggle('on', i < count));
  });
}
function wireHeroExit() {
  const hero = $('#hero'); if (!hero) return;
  const seq = [
    { el: $('.hero-cue'), at: .05, span: .3, shift: true },
    ...$$('.hero-corner').map((el, i) => ({ el, at: .2 + i * .1, span: .3, shift: true })),
    { el: $('.hero-term'), at: .3, span: .3, shift: true },
    { el: $('.hero-sub'), at: .4, span: .3, shift: true },
    { el: $('.hero h1'), at: .5, span: .35, shift: true }
  ].filter(o => o.el);
  let on = false;
  const apply = () => {
    const t = clamp(scrollY / Math.max(1, vpH() * .62), 0, 1);
    if (t <= 0) {
      if (!on) return;
      seq.forEach(o => { o.el.style.opacity = ''; o.el.style.transform = ''; o.el.style.pointerEvents = ''; o.el.style.transition = ''; });
      on = false; return;
    }
    on = true;
    seq.forEach(o => {
      o.el.style.transition = 'none';
      const a = 1 - smooth(o.at, o.at + o.span, t);
      o.el.style.opacity = a.toFixed(3);
      if (o.shift) o.el.style.transform = 'translate3d(0,' + ((1 - a) * -18).toFixed(1) + 'px,0)';
      o.el.style.pointerEvents = a < .05 ? 'none' : '';
    });
  };
  listen(window, 'scroll', apply, { passive: true });
  listen(window, 'resize', apply, { passive: true });
  apply();
}
function wireNav() {
  let last = 0, maxScroll = 1;
  const measure = () => { maxScroll = Math.max(1, document.documentElement.scrollHeight - vpH()); };
  measure();
  listen(window, 'resize', measure, { passive: true });
  listen(window, 'scroll', () => {
    const y = scrollY;
    nav.classList.toggle('stuck', y > 40);
    nav.classList.toggle('hide', y > last + 4 && y > vpH() * .8);
    last = y;
    if (progressBar) progressBar.style.transform = 'scaleX(' + (y / maxScroll).toFixed(4) + ')';
  }, { passive: true });
  $$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    const t = href === '#top' ? document.body : document.querySelector(href);
    if (!t) return;
    e.preventDefault();
    scrollTo({ top: href === '#top' ? 0 : t.getBoundingClientRect().top + scrollY - 24, behavior: REDUCE ? 'auto' : 'smooth' });
  }));
  const snd = $('#sound');
  if (snd) snd.addEventListener('click', () => {
    SOUND.on = !SOUND.on;
    snd.classList.toggle('on', SOUND.on);
    snd.setAttribute('aria-pressed', String(SOUND.on));
    const lab = snd.querySelector('.lab'); if (lab) lab.textContent = SOUND.on ? 'Sound on' : 'Sound off';
    if (SOUND.on) pressKey('SPACE', .7);
  });
}
function wirePresses() {
  $$('[data-key]').forEach(el => {
    if (el.hasAttribute('data-window')) return;
    const id = el.dataset.key;
    el.addEventListener('mouseenter', () => pressKey(id, .6));
    el.addEventListener('focus', () => pressKey(id, .6));
    el.addEventListener('click', () => pressKey(id, .8));
  });
  $$('input[name="finish"]').forEach(r => r.addEventListener('change', () => {
    FIN.user = r.id === 'finish-build' ? 1 : 0;
    pressKey(r.id === 'finish-build' ? 'F5' : 'F2', .7);
  }));
}

/* ------------------------------------------------------------ 13 · the machine */
let running = false, tPrev = 0;
const INTRO = { t0: 0 };
function resize() {
  const w = vpW(), h = vpH();
  document.documentElement.style.setProperty('--vw', w + 'px');
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, DPR_CAP) * PERF.scale);
  renderer.setSize(w, h, true);
  placeHero();
}
function frame(now) {
  if (!running) return;
  const raw = (now - tPrev) / 1000 || 0;
  const dt = Math.min(raw, .05);
  tPrev = now; clock += dt;
  if (!PERF.locked && clock > 2.5) {
    PERF.acc += raw; PERF.n++;
    if (PERF.n >= 40 || PERF.acc > .9) {
      const avg = PERF.acc / PERF.n; PERF.acc = 0; PERF.n = 0;
      if (avg > .0230 && PERF.scale > .6) { PERF.scale = Math.max(.6, PERF.scale * (avg > .05 ? .7 : .86)); resize(); }
      else if (avg < .0138 && PERF.scale < 1) { PERF.scale = Math.min(1, PERF.scale + .08); resize(); }
    }
  }
  if (INTRO.t0) STATE.intro = sat((now - INTRO.t0) / 1500);
  updateState(dt);
  applyTheme(STATE.theme);
  updateBoard(dt);
  updateHero(dt);
  updateThesis();
  render();
  requestAnimationFrame(frame);
}

/* ------------------------------------------------------------ 14 · booting
   The preloader is a terminal: one line per job, then the page is revealed. */
const JOBS = [
  [() => Promise.all([document.fonts.load('500 58px ' + FONT_DISPLAY), document.fonts.load('500 26px ' + FONT_MONO)]).catch(() => {})],
  [() => { initGL(); buildLights(); buildAtlas(); buildBoard(); }],
  [() => { buildHero(); buildWindows(); }],
  [() => { resize(); }]
];
function logLine(text, ok) {
  if (!preLog) return;
  const li = document.createElement('div');
  li.className = 'pre-line';
  li.innerHTML = '<span>' + text + '</span>' + (ok ? '<b>ok</b>' : '');
  preLog.appendChild(li);
}
function boot() {
  if (!alive) return;
  preEl.classList.remove('done');
  wireReveals(); wireThesis(); wireNav(); wireHeroExit(); wirePresses(); wirePointer();
  document.body.classList.add('is-locked');
  let i = 0;
  const step = () => {
    if (!alive) return;
    const j = JOBS[i];
    const done = () => {
      logLine(PRE_LINES[i] || '…', i < JOBS.length - 1);
      i++;
      if (preFill) preFill.style.transform = 'scaleX(' + (i / JOBS.length).toFixed(3) + ')';
      if (i < JOBS.length) setTimeout(step, REDUCE ? 0 : 160); else setTimeout(start, REDUCE ? 0 : 420);
    };
    let r;
    try { r = j[0](); }
    catch (err) {
      console.error('[mk] boot job ' + i + ' failed', err);
      if (i <= 1) return fallback(err);
    }
    (r && r.then) ? r.then(done, done) : done();
  };
  setTimeout(step, REDUCE ? 0 : 260);
}
function fallback(err) {
  document.documentElement.classList.add('no-webgl');
  document.body.classList.remove('is-locked');
  preEl.classList.add('done');
  $$('[data-rv], .mask-line').forEach(e => e.classList.add('rv-in'));
  THESIS.forEach(T => T.words.forEach(w => w.classList.add('on')));
  window.__mk = { fallback: true, error: String(err && err.message || err) };
}
function start() {
  if (!alive) return;
  listen(window, 'resize', () => { resize(); }, { passive: true });
  listen(window, 'orientationchange', () => setTimeout(resize, 250));
  listen(document, 'visibilitychange', () => {
    if (document.hidden) { running = false; }
    else if (!running && alive) { running = true; tPrev = performance.now(); requestAnimationFrame(frame); }
  });
  resize();
  /* the reveal: the curtain lifts, the caps fly in, the words rise */
  preEl.classList.add('done');
  document.documentElement.classList.add('is-revealed');
  running = true; tPrev = performance.now();
  INTRO.t0 = REDUCE ? performance.now() - 5000 : performance.now() + 200;
  setTimeout(() => {
    document.body.classList.remove('is-locked');
    $('#hero').querySelectorAll('[data-rv], .mask-line').forEach((e, i) =>
      setTimeout(() => e.classList.add('rv-in'), REDUCE ? 0 : 200 + i * 90));
  }, REDUCE ? 0 : 380);
  requestAnimationFrame(frame);
  window.__mk = { STATE, RIG, BOARD, HERO, WINDOWS, renderer, scene, pressKey, sound: SOUND };
}

boot();

return function destroy() {
  alive = false; running = false;
  disposers.splice(0).forEach(f => { try { f(); } catch (e) { /* already gone */ } });
  document.body.classList.remove('is-locked');
  document.documentElement.classList.remove('no-webgl', 'is-revealed');
  delete document.documentElement.dataset.theme;
  try { if (renderer) renderer.dispose(); } catch (e) { /* best effort */ }
  if (window.__mk) delete window.__mk;
};
}
