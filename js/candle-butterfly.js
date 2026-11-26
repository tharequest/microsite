/**
 * candle-butterfly.js — animasi kupu-kupu dari garis candlestick (versi vanilla JS)
 * Dialihkan dari komponen React <CandleButterfly /> (project candle-butterfly-next),
 * mesin animasinya tidak diubah. Canvas 2D murni, tanpa library.
 *
 * Pakai:  CandleButterfly.mount(document.getElementById('mfButterfly'), { ...opsi })
 * Elemen induk harus punya ukuran (mis. position:absolute + tinggi). Opsi: lihat DEFAULT_OPTIONS.
 * Video harus satu origin (assets/videos/) agar canvas tidak "tainted".
 */
(function () {
'use strict';

const DEFAULT_OPTIONS = {
  // Sumber video (taruh di /public/videos). Array = urutan prioritas; [] = pakai siluet cadangan buatan kode.
  src: ['/videos/kupu.webm', '/videos/kupu.mp4'],
  // Video bawaan: siluet PUTIH di latar HITAM -> false. Kalau videomu siluet GELAP di latar TERANG -> true.
  invert: false,

  // Tampilan garis (nilai default = sama dengan hero Base)
  res: 0.07, // kerapatan grid: jumlah sel = piksel x res
  scale: 0.66, // pengali ketebalan garis
  contrast: 3.1,
  capRound: 0.44, // kebulatan ujung segmen
  gap: 0.045, // celah antar segmen (porsi sel)
  colors: ['#EBBA00', '#A7E66B', '#FEA8CD', '#0000FF'], // tingkat tipis -> tebal
  inkAlpha: 0.45, // opasitas garis (di Base terukur sekitar 0.45). 1 = warna penuh

  // Jejak kursor (rumus mouseDistort Base). Bulatan saat kursor diam berasal dari bagian ini.
  mouseR: 0.18, // radius, dalam satuan tinggi elemen
  mouseOp: 0.3, // kekuatan per titik jejak
  trail: 8, // jumlah titik jejak (Base membatasi maks. 8)
  lag: 0.1, // seberapa lambat tiap titik menyusul titik di depannya
  decay: 0.42, // pelemahan ke belakang

  // Ekor garis tipis saat kursor digeser lalu memudar (tambahan agar mirip tampilan Base)
  echoLevel: 0.56, // kekuatan awal. 0 = matikan
  echoTau: 90, // lama memudar (frame). Makin besar, ekor makin panjang
  echoStep: 0.5, // jarak antar titik ekor (x ukuran sel)
  echoMax: 90, // jumlah maksimum titik ekor

  fadeIn: 1.2, // detik. 0 = tanpa fade-in
};

const HALF = [0.0625, 0.25, 0.375, 0.5]; // setengah lebar garis per tingkat (sebelum scale)
const CYCLE = 12; // detik per siklus (hanya untuk siluet cadangan)

/* Siluet cadangan (kurva kupu-kupu), tinggi 1, pusat 0,0 — dipakai bila video gagal dimuat */
const SIL = (() => {
  const pts = [];
  let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
  for (let t = 0; t <= 12 * Math.PI; t += 0.02) {
    const r = Math.exp(Math.sin(t)) - 2 * Math.cos(4 * t) + Math.pow(Math.sin((2 * t - Math.PI) / 24), 5);
    const x = Math.sin(t) * r, y = -Math.cos(t) * r;
    pts.push([x, y]);
    x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
  }
  const s = y1 - y0, cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
  return pts.map((p) => [(p[0] - cx) / s, (p[1] - cy) / s]);
})();

const smooth = (a, b, v) => {
  v = Math.min(1, Math.max(0, (v - a) / (b - a)));
  return v * v * (3 - 2 * v);
};

function tierOf(l) {
  if (l < 0.2) return -1; // kosong
  if (l < 0.4) return 0;
  if (l < 0.6) return 1;
  if (l < 0.8) return 2;
  return 3;
}

function pickSource(list) {
  const v = document.createElement('video');
  const types = { webm: 'video/webm; codecs="vp9"', mp4: 'video/mp4; codecs="avc1.42E01E"' };
  for (const s of list) {
    const ext = s.split('?')[0].split('.').pop().toLowerCase();
    if (!types[ext] || v.canPlayType(types[ext])) return s;
  }
  return list[0];
}

/** Mesin animasi (murni DOM/canvas, tidak tergantung React). Mengembalikan fungsi pembersih. */
function createEngine(host, canvas, o) {
  const ctx = canvas.getContext('2d');
  const oc = document.createElement('canvas');
  const octx = oc.getContext('2d', { willReadFrequently: true });
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const BGV = o.invert ? 255 : 0; // warna latar pada sumber
  const FGV = o.invert ? 0 : 255; // warna "tinta" pada sumber
  const TRAIL = Math.max(1, Math.floor(o.trail));
  const srcList = (Array.isArray(o.src) ? o.src : o.src ? [o.src] : []).filter(Boolean);

  let W = 0, H = 0, cell = 8, cols = 0, rows = 0;
  let tiers = new Int8Array(1), ef = new Float32Array(1);
  let vid = null, raf = 0, visible = true, destroyed = false, shown = false;

  const trail = Array.from({ length: TRAIL }, () => ({ x: 0.5, y: 0.5 }));
  const echo = [];
  const pt = { cx: 0, cy: 0 };
  let active = false, pointer = null, last = null, strength = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = host.getBoundingClientRect();
    W = r.width; H = r.height;
    if (!W || !H) return;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cell = Math.max(5, 1 / (o.res * dpr));
    cols = Math.ceil(W / cell);
    rows = Math.ceil(H / cell);
    oc.width = cols; oc.height = rows;
    tiers = new Int8Array(cols * rows);
    ef = new Float32Array(cols * rows);
  }

  /* ===== Sumber cadangan: siluet kupu-kupu terbang ===== */
  function flight(p) {
    const T = Math.PI * 2;
    return {
      x: W * (0.5 + (p - 0.5) * 0.62 + Math.sin(p * T * 2) * 0.05),
      y: H * (0.4 + Math.sin(p * T * 1.5 + 0.4) * 0.16),
      roll: Math.sin(p * T * 2) * 0.45,
      yaw: p * T * 1.5,
      size: H * (0.52 + 0.2 * Math.sin(p * Math.PI)),
      env: smooth(0, 0.14, p) * (1 - smooth(0.82, 1, p)),
    };
  }
  function drawSilhouette(t, f) {
    octx.fillStyle = `rgb(${BGV},${BGV},${BGV})`;
    octx.fillRect(0, 0, cols, rows);
    const flap = 0.55 + 0.45 * Math.abs(Math.cos(t * 3.2));
    const sx = flap * Math.abs(Math.cos(f.yaw)) + 0.06;
    const g = Math.round(FGV + (BGV - FGV) * (1 - f.env));
    octx.save();
    octx.translate(f.x / cell, f.y / cell);
    octx.rotate(f.roll);
    octx.scale((f.size / cell) * sx, f.size / cell);
    octx.fillStyle = `rgb(${g},${g},${g})`;
    octx.beginPath();
    SIL.forEach((q, i) => (i ? octx.lineTo(q[0], q[1]) : octx.moveTo(q[0], q[1])));
    octx.closePath();
    octx.fill();
    octx.restore();
  }

  /* ===== Sumber video: digambar "cover" ke grid kecil ===== */
  function drawVideo() {
    const vw = vid.videoWidth || 16, vh = vid.videoHeight || 9;
    const s = Math.max(cols / vw, rows / vh);
    octx.fillStyle = `rgb(${BGV},${BGV},${BGV})`;
    octx.fillRect(0, 0, cols, rows);
    if (vid.readyState >= 2) octx.drawImage(vid, (cols - vw * s) / 2, (rows - vh * s) / 2, vw * s, vh * s);
  }

  function draw(ms) {
    if (!W || !H) return;
    const t = reduce ? CYCLE * 0.4 : ms / 1000;
    const p = (t % CYCLE) / CYCLE;
    if (vid) drawVideo(); else drawSilhouette(t, flight(p));
    const px = octx.getImageData(0, 0, cols, rows).data;

    // posisi kursor relatif terhadap elemen (dihitung tiap frame supaya benar saat halaman di-scroll)
    if (active) {
      const r = host.getBoundingClientRect();
      pointer = { x: pt.cx - r.left, y: pt.cy - r.top };
      last = pointer;
    } else pointer = null;

    // rantai jejak kursor (rumus Base)
    if (last) {
      trail[0].x = last.x / W; trail[0].y = last.y / H;
      for (let i = 1; i < TRAIL; i++) {
        trail[i].x += (trail[i - 1].x - trail[i].x) * o.lag;
        trail[i].y += (trail[i - 1].y - trail[i].y) * o.lag;
      }
      strength += ((pointer ? 1 : 0) - strength) * 0.08; // memudar halus saat kursor keluar
    }
    const hover = !!last && strength > 0.01;
    const asp = W / H;

    // ekor garis tipis: titik-titik di sepanjang jalur kursor, makin lama makin lemah
    if (o.echoLevel > 0) {
      for (const e of echo) e.age++;
      while (echo.length && o.echoLevel * Math.exp(-echo[0].age / o.echoTau) < 0.39) echo.shift();
      if (pointer) {
        const nx = pointer.x / W, ny = pointer.y / H, stepPx = cell * o.echoStep, le = echo[echo.length - 1];
        if (!le) echo.push({ x: nx, y: ny, age: 0 });
        else {
          const dist = Math.hypot((nx - le.x) * W, (ny - le.y) * H);
          const n = Math.min(Math.floor(dist / stepPx), o.echoMax);
          for (let q = 1; q <= n; q++) {
            const u = ((q / n) * (n * stepPx)) / dist;
            echo.push({ x: le.x + (nx - le.x) * u, y: le.y + (ny - le.y) * u, age: 0 });
          }
        }
        while (echo.length > o.echoMax) echo.shift();
      }
    }
    ef.fill(0);
    if (hover && echo.length) {
      const R = o.mouseR, rc = (R * H) / cell;
      for (const e of echo) {
        const L = o.echoLevel * Math.exp(-e.age / o.echoTau);
        if (L < 0.39) continue;
        const ci = (e.x * W) / cell - 0.5, cj = (e.y * H) / cell - 0.5;
        const i0 = Math.max(0, Math.floor(ci - rc)), i1 = Math.min(cols - 1, Math.ceil(ci + rc));
        const j0 = Math.max(0, Math.floor(cj - rc)), j1 = Math.min(rows - 1, Math.ceil(cj + rc));
        for (let j = j0; j <= j1; j++) {
          for (let i = i0; i <= i1; i++) {
            const dx = ((i + 0.5) * cell) / W - e.x, dy = ((j + 0.5) * cell) / H - e.y;
            const d = Math.sqrt(dx * asp * dx * asp + dy * dy);
            if (d < R) {
              const v = smooth(R, 0, d) * L, kk = j * cols + i;
              if (v > ef[kk]) ef[kk] = v;
            }
          }
        }
      }
    }

    // kecerahan tiap sel -> tingkat ketebalan
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const k = j * cols + i;
        let l = (px[k * 4] * 0.299 + px[k * 4 + 1] * 0.587 + px[k * 4 + 2] * 0.114) / 255;
        if (hover) {
          const cx = ((i + 0.5) * cell) / W, cy = ((j + 0.5) * cell) / H;
          let a = 0;
          for (let s = 0; s < TRAIL; s++) {
            const dx = (cx - trail[s].x) * asp, dy = cy - trail[s].y;
            a += smooth(o.mouseR, 0, Math.sqrt(dx * dx + dy * dy)) * Math.exp(-o.decay * s) * o.mouseOp;
          }
          // jejak kursor = lapisan "tinta" yang ditimpa ke sumber -> garis muncul di sekitar kursor
          const m = Math.min(Math.max(a, ef[k]) * strength, 1);
          l = l * (1 - m) + (FGV / 255) * m;
        }
        l = Math.min(1, Math.max(0, (l - 0.5) * o.contrast + 0.5));
        if (o.invert) l = 1 - l;
        tiers[k] = tierOf(l);
      }
    }

    // gambar segmen: sel berurutan satu tingkat disambung jadi satu garis
    ctx.clearRect(0, 0, W, H);
    ctx.globalAlpha = o.inkAlpha;
    for (let i = 0; i < cols; i++) {
      let j = 0;
      while (j < rows) {
        const tr = tiers[j * cols + i];
        if (tr < 0) { j++; continue; }
        let j1 = j;
        while (j1 + 1 < rows && tiers[(j1 + 1) * cols + i] === tr) j1++;
        const half = HALF[tr] * o.scale, w = half * 2 * cell, g = o.gap * cell * 0.5;
        const y0 = j * cell + (j === 0 ? 0 : g), y1 = (j1 + 1) * cell - (j1 === rows - 1 ? 0 : g);
        const x = (i + 0.5) * cell - w / 2, h = Math.max(1, y1 - y0);
        const rho = Math.min(half * o.capRound * cell, w / 2, h / 2);
        ctx.fillStyle = o.colors[tr];
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(x, y0, w, h, rho); else ctx.rect(x, y0, w, h);
        ctx.fill();
        j = j1 + 1;
      }
    }

    if (!shown) { shown = true; host.style.opacity = '1'; }
  }

  /* ===== loop (berhenti saat tidak terlihat / tab tersembunyi) ===== */
  function loop(ms) {
    raf = 0;
    draw(ms);
    if (!reduce && visible && !document.hidden && !destroyed) raf = requestAnimationFrame(loop);
  }
  function start() {
    if (reduce) { draw(0); return; }
    if (!raf && !destroyed) raf = requestAnimationFrame(loop);
    if (vid) vid.play().catch(() => {});
  }
  function stop() {
    if (raf) { cancelAnimationFrame(raf); raf = 0; }
    if (vid) vid.pause();
  }

  /* ===== event ===== */
  function onMove(e) {
    if (e.pointerType === 'touch' || !W || !H) return; // layar sentuh tidak punya hover
    const r = host.getBoundingClientRect();
    pt.cx = e.clientX; pt.cy = e.clientY; active = true;
    const px = e.clientX - r.left, py = e.clientY - r.top;
    if (!last || strength < 0.02) {
      // masuk dari luar: jangan tarik jejak dari titik lama
      for (const t of trail) { t.x = px / W; t.y = py / H; }
      echo.length = 0;
    }
    pointer = { x: px, y: py };
    last = pointer;
  }
  const onLeave = () => { active = false; };
  const onVisibility = () => (document.hidden ? stop() : visible && start());

  window.addEventListener('pointermove', onMove, { passive: true });
  document.documentElement.addEventListener('pointerleave', onLeave);
  document.addEventListener('visibilitychange', onVisibility);

  const ro = new ResizeObserver(() => { resize(); if (reduce) draw(0); });
  ro.observe(host);
  const io = new IntersectionObserver(([en]) => {
    visible = en.isIntersecting;
    if (visible) start(); else stop();
  });
  io.observe(host);

  /* ===== mulai ===== */
  if (srcList.length && !reduce) {
    vid = document.createElement('video');
    Object.assign(vid, { muted: true, loop: true, autoplay: true, playsInline: true, preload: 'auto' });
    vid.setAttribute('playsinline', '');
    vid.addEventListener('error', () => { vid = null; }); // gagal muat -> pakai siluet cadangan
    vid.src = pickSource(srcList);
    vid.play().catch(() => {});
  }
  resize();
  start();

  return () => {
    destroyed = true;
    stop();
    ro.disconnect();
    io.disconnect();
    window.removeEventListener('pointermove', onMove);
    document.documentElement.removeEventListener('pointerleave', onLeave);
    document.removeEventListener('visibilitychange', onVisibility);
    if (vid) { vid.removeAttribute('src'); vid.load(); vid = null; }
  };
}


/** Pasang animasi ke elemen `host`. Mengembalikan fungsi untuk membongkar (destroy). */
function mount(host, options) {
  if (!host || host.__candle) return host && host.__candle;
  const o = Object.assign({}, DEFAULT_OPTIONS, options || {});
  const fade = o.fadeIn;
  Object.assign(host.style, {
    overflow: 'hidden', pointerEvents: 'none', opacity: '0',
    transition: 'opacity ' + fade + 's cubic-bezier(0.33, 1, 0.68, 1)'
  });
  host.setAttribute('aria-hidden', 'true');
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'width:100%;height:100%;display:block';
  host.appendChild(canvas);
  const destroy = createEngine(host, canvas, o);
  host.__candle = function () { destroy(); canvas.remove(); host.__candle = null; };
  return host.__candle;
}

window.CandleButterfly = { mount: mount, DEFAULT_OPTIONS: DEFAULT_OPTIONS };
})();
