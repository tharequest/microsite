/* ═══ AUTO-GENERATED — gabungan CSS+JS untuk index.html ═══ */
/* Jangan diedit manual di sini — edit file asli di css/ atau js/, lalu jalankan `npm run build` lagi. */

import '../css/base.css';
import '../css/animations.css';
import '../css/header.css';
import '../css/slider.css';
import '../css/popup.css';
import '../css/content.css';
import '../css/footer.css';
import '../css/kirana-search.css';
import '../css/layanan-popup.css';
import '../css/kontak.css';
import kiranaAvatarUrl from '../assets/images/kiranabot.png';

/* ─── mulai: js/kontak.js ─── */


/* ── Data kontak ── */
const KONTAK_DATA = [
  {
    name:     "Bu Ana",
    phone:    "+6285822020466",
    initials: "BA"
  },
  {
    name:     "Bu Primanita",
    phone:    "+6285750325925",
    initials: "BP"
  },
  {
    name:     "Onny",
    phone:    "+6289651758517",
    initials: "ON"
  },
  {
    name:     "Agung",
    phone:    "+6285882959315",
    initials: "AG"
  },
  {
    name:     "Thareq",
    phone:    "+6285787908406",
    initials: "TH"
  },
  /* ── Kontak baru ── */
  {
    name: "Pak Prima",
    phone: "+6282351862413",
    initials: "PP",
    desc: "Admin Matematika, Statistika, Operator UKT"
  },
  {
    name: "Surya Dharma",
    phone: "+62882019580331",
    initials: "SD",
    desc: "Admin IlmuKel, Fisika, Geofisika"
  },
  {
    name: "Raymount",
    phone: "+6285750114081",
    initials: "RM",
    desc: "Admin Sisfo, Siskom"
  },
  {
    name: "Bu Warsih",
    phone: "+6285750079543",
    initials: "BW",
    desc: "Admin S1 Kimia, S2 Kimia, Operator UKT"
  },
  {
    name: "Pak Udin",
    phone: "+6285252036331",
    initials: "PU",
    desc: "Admin Biologi"
  }
];

/* Warna avatar — seragam dengan BADGE_COLORS layanan-popup.js */
const KONTAK_AVATAR_COLORS = [
  { bg: "#e8f0fd", text: "#1a4f8a" },
  { bg: "#e6f7f0", text: "#0f6e56" },
  { bg: "#fef3e2", text: "#854f0b" },
  { bg: "#fce8f3", text: "#993556" },
  { bg: "#eeedfe", text: "#3c3489" }
];

/* ── Format nomor untuk tampilan (0858...) ── */
function ktFormatPhone(phone) {
  return phone.replace(/^\+62/, "0");
}

/* ── Buat URL WhatsApp ── */
function ktBuildWaUrl(phone) {
  const clean = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${clean}`;
}

/* ── SVG WhatsApp ── */
const KT_WA_SVG = `
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#fff">
  <path d="M16 2.9C8.8 2.9 3 8.7 3 15.9c0 2.3.6 4.5 1.8 6.5L3 29.1l6.9-1.8
           c1.9 1 4 1.6 6.1 1.6 7.2 0 13-5.8 13-13S23.2 2.9 16 2.9zm6.4 18.1
           c-.3.8-1.5 1.5-2.1 1.6-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6
           -3-1.3-4.9-4.3-5.1-4.5-.2-.2-1.3-1.7-1.3-3.2s.8-2.3 1.1-2.6
           c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.5.8 2 .9 2.1.1.2.1.4 0 .6
           -.1.2-.2.3-.3.5-.1.2-.3.4-.4.5-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1
           c1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.7-.1
           .3.1 1.8.9 2.1 1 .3.2.5.3.6.4.1.3.1 1-.2 1.7z"/>
</svg>`;

/* ── Render daftar kontak ── */
function renderKontakList() {
  const container = document.getElementById("kt-list");
  if (!container) return;

  container.innerHTML = KONTAK_DATA.map((person, i) => {
    const color = KONTAK_AVATAR_COLORS[i % KONTAK_AVATAR_COLORS.length];
    const waUrl = ktBuildWaUrl(person.phone);

    return `
      <a class="kt-item"
         href="${waUrl}"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Chat WhatsApp dengan ${person.name}">
        <div class="kt-avatar"
             style="background:${color.bg};color:${color.text}">
          ${person.initials}
        </div>
        <div class="kt-info">
          <div class="kt-name">${person.name}</div>
          <div class="kt-desc">${person.desc || ""}</div>
        </div>
        <div class="kt-wa-icon">${KT_WA_SVG}</div>
      </a>`;
  }).join("");
}

/* ── Buka popup ── */
function openKontakPopup() {
  renderKontakList();
  document.getElementById("kt-overlay")?.classList.add("kt-open");
}

/* ── Tutup popup ── */
function closeKontakPopup() {
  document.getElementById("kt-overlay")?.classList.remove("kt-open");
}

/* ── Event listeners ── */
document.addEventListener("DOMContentLoaded", () => {
  /* Tombol X */
  document.getElementById("kt-close-btn")
    ?.addEventListener("click", closeKontakPopup);

  /* Klik overlay (luar modal) → tutup */
  document.getElementById("kt-overlay")
    ?.addEventListener("click", e => {
      if (e.target.id === "kt-overlay") closeKontakPopup();
    });

  /* Escape → tutup */
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeKontakPopup();
  });
});
/* ─── selesai: js/kontak.js ─── */

/* ─── mulai: js/store.js ─── */
/**
 * Portal Informasi v3 – Data Store
 * Data diambil dari /api/save-data (GitHub) bukan localStorage.
 * localStorage hanya dipakai sebagai cache sementara.
 */

const CACHE_KEY = 'portal_v3_cache';
const CACHE_TTL = 5 * 60 * 1000; // 5 menit

// ── Generate ID unik ─────────────────────────────────
function genId(prefix = 'id') {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
}

// ── Format ukuran file ────────────────────────────────
function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

// ── File ke Base64 ────────────────────────────────────
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload  = e => resolve(e.target.result);
    reader.onerror = () => reject(new Error('Gagal membaca file'));
    reader.readAsDataURL(file);
  });
}

// ── Ambil data dari API (dengan cache) ────────────────
async function fetchPortalData(forceRefresh = false) {
  // Cek cache dulu
  if (!forceRefresh) {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL) {
          return data;
        }
      }
    } catch (_) {}
  }

  // Fetch dari API
  const res = await fetch('/api/save-data');
  if (!res.ok) throw new Error('Gagal mengambil data dari server');
  const data = await res.json();

  // Simpan ke cache
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
  } catch (_) {}

  return data;
}

// ── Simpan data ke API ────────────────────────────────
async function savePortalData(slides, news) {
  // Gunakan authFetch agar token Bearer ikut terkirim
  const fetchFn = (typeof window !== 'undefined' && window.authFetch) ? window.authFetch : fetch;
  const res = await fetchFn('/api/save-data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slides, news })
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Gagal menyimpan data');
  }

  // Hapus cache agar frontend refresh
  try { localStorage.removeItem(CACHE_KEY); } catch (_) {}

  return res.json();
}

// ── Upload gambar ke GitHub via API ──────────────────
async function uploadImage(file) {
  const base64 = await fileToBase64(file);
  const filename = `${Date.now()}-${file.name.replace(/\s/g, '_')}`;

  // Gunakan authFetch agar token Bearer ikut terkirim
  const fetchFn = (typeof window !== 'undefined' && window.authFetch) ? window.authFetch : fetch;
  const res = await fetchFn('/api/upload-image', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filename, content: base64 })
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Gagal upload gambar');
  }

  return res.json(); // { success, path, url }
}

// ── Upload PDF ke GitHub via API ──────────────────────
async function uploadPdf(file) {
  const base64 = await fileToBase64(file);
  const filename = `${Date.now()}-${file.name.replace(/\s/g, '_')}`;

  // Gunakan authFetch agar token Bearer ikut terkirim
  const fetchFn = (typeof window !== 'undefined' && window.authFetch) ? window.authFetch : fetch;
  const res = await fetchFn('/api/upload-pdf', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filename, content: base64 })
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Gagal upload PDF');
  }

  return res.json(); // { success, path, url }
}
/* ─── selesai: js/store.js ─── */

/* ─── mulai: js/header.js ─── */
(function initScrollHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  const THRESHOLD = 80;

  function onScroll() {
    if (window.scrollY > THRESHOLD) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // cek posisi awal
})();

// ── Hamburger mobile ──
function initHamburger() {
  const ham = document.getElementById('hamburger');
  const nav = document.getElementById('mobileNav');
  if (!ham || !nav) return;

  ham.addEventListener('click', (e) => {
    e.stopPropagation();
    ham.classList.toggle('open');
    nav.classList.toggle('open');
    /* Tandai body saat menu mobile terbuka, dipakai kirana-search.css
       untuk menyembunyikan Kirana bar agar tidak tumpang tindih */
    document.body.classList.toggle('mobile-nav-open', nav.classList.contains('open'));
  });

  // Tutup saat klik link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      ham.classList.remove('open');
      nav.classList.remove('open');
      document.body.classList.remove('mobile-nav-open');
    });
  });

  // Tutup saat klik di luar
  document.addEventListener('click', (e) => {
    if (!ham.contains(e.target) && !nav.contains(e.target)) {
      ham.classList.remove('open');
      nav.classList.remove('open');
      document.body.classList.remove('mobile-nav-open');
    }
  });
}

// ── Dropdown desktop (click) ──
function initDropdowns() {
  document.querySelectorAll('.dropdown > span').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const menu = btn.parentElement.querySelector('.dropdown-menu');
      if (!menu) return;
      const isOpen = menu.style.display === 'block';
      document.querySelectorAll('.dropdown-menu').forEach(m => m.style.display = 'none');
      menu.style.display = isOpen ? 'none' : 'block';
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(m => m.style.display = 'none');
  });
}

// ── Mobile dropdown accordion ──
function initMobileDropdowns() {
  document.querySelectorAll('.mobile-title').forEach(title => {
    title.addEventListener('click', () => {
      title.parentElement.classList.toggle('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initHamburger();
  initDropdowns();
  initMobileDropdowns();
  setActiveNav();
});

// ── Auto-set nav aktif berdasarkan halaman saat ini ──
function setActiveNav() {
  // Ambil nama file dari URL (misal: "ceksurat.html" atau "" untuk index)
  const path     = window.location.pathname;
  const page     = path.split('/').pop() || 'index.html';

  // Hapus semua class active dulu dari nav desktop & mobile
  document.querySelectorAll('.main-nav > a, #mobileNav a').forEach(a => {
    a.classList.remove('active');
  });

  // Tandai link yang href-nya cocok dengan halaman saat ini
  document.querySelectorAll('.main-nav > a, #mobileNav a').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (!href) return;

    const isHome    = (page === '' || page === 'index.html') && (href === 'index.html' || href === '');
    const isMatch   = href === page;

    if (isHome || isMatch) {
      a.classList.add('active');
    }
  });
}
/* ─── selesai: js/header.js ─── */

/* ─── mulai: js/slider.js ─── */
/**
 * slider.js — Infinite loop slider dengan pause on hover,
 * restart delay setelah klik manual, dan stagger start.
 *
 * FIXES:
 *  - White flash: tambah loading placeholder + inline bg-cover on slide-bg
 *  - Popup navigasi: kirim (group, index) ke openPopup untuk image slides
 */

const sliderState = {
  1: { current: 1, total: 0 },
  2: { current: 1, total: 0 }
};

const sliderTimers = {
  1: { interval: null, restartTimeout: null },
  2: { interval: null, restartTimeout: null }
};

const SLIDER_INTERVAL = { 1: 5500, 2: 7000 };
const RESTART_DELAY   = 700;
const STAGGER_DELAY   = { 1: 0, 2: 2500 };

function setTrackPosition(num, animate) {
  const track = document.getElementById('track' + num);
  if (!track) return;
  if (!animate) track.style.transition = 'none';
  track.style.transform = `translateX(-${sliderState[num].current * 100}%)`;
  if (!animate) { track.offsetHeight; track.style.transition = ''; }
}

function updateDots(num) {
  const s = sliderState[num];
  const dotIndex = ((s.current - 1) % s.total + s.total) % s.total;
  document.querySelectorAll(`#dots${num} .dot`).forEach((d, i) =>
    d.classList.toggle('active', i === dotIndex)
  );
}

function goTo(num, idx) {
  const s = sliderState[num];
  if (!s.total) return;
  s.current = idx;
  setTrackPosition(num, true);
  updateDots(num);
}

function handleTransitionEnd(num) {
  const s = sliderState[num];
  if (s.current <= 0) {
    s.current = s.total; setTrackPosition(num, false);
  } else if (s.current >= s.total + 1) {
    s.current = 1; setTrackPosition(num, false);
  }
}

function startInterval(num) {
  const t = sliderTimers[num];
  clearInterval(t.interval);
  t.interval = setInterval(() => goTo(num, sliderState[num].current + 1), SLIDER_INTERVAL[num]);
}

function stopInterval(num) {
  clearInterval(sliderTimers[num].interval);
  sliderTimers[num].interval = null;
}

function resetInterval(num) {
  const t = sliderTimers[num];
  stopInterval(num);
  if (t.restartTimeout) clearTimeout(t.restartTimeout);
  t.restartTimeout = setTimeout(() => { startInterval(num); t.restartTimeout = null; }, RESTART_DELAY);
}

/* ─── FIX #1: Pasang loading placeholder agar slider tidak putih ─── */
function initSliderPlaceholder(num) {
  const track    = document.getElementById('track' + num);
  const viewport = track ? track.parentElement : null;
  if (viewport) {
    // Beri background gelap sementara agar tidak putih kosong
    viewport.style.background = 'linear-gradient(135deg, #1a3a6a 0%, #2d6cb0 100%)';
  }
  if (track) {
    track.innerHTML = `
      <div class="slide" style="display:flex;align-items:center;justify-content:center;">
        <div style="text-align:center;color:rgba(255,255,255,.5);font-size:13px;letter-spacing:.5px;">
          ⏳ Memuat...
        </div>
      </div>`;
  }
}

function buildSliders(slides) {
  [1, 2].forEach(num => {
    // Filter slide yang disembunyikan admin
    const group = slides.filter(s => s.slider === num && s.hidden !== true);
    sliderState[num].total = group.length;

    const track = document.getElementById('track' + num);
    const dots  = document.getElementById('dots' + num);
    if (!track || !dots) return;
    track.innerHTML = ''; dots.innerHTML = '';

    // Reset placeholder background setelah data ada
    const viewport = track.parentElement;
    if (viewport) viewport.style.background = '';

    if (!group.length) {
      track.innerHTML = `<div class="slide"><div class="slide-bg" style="background:#e8f0fd"></div>
        <div class="slide-overlay"></div><div class="slide-content" style="text-align:center;width:100%;">
        <p style="color:rgba(255,255,255,.7);font-size:13px;">Belum ada slide. Tambahkan via Admin Panel.</p>
        </div></div>`;
      return;
    }

    const slideEls = group.map((slide, i) => {
      const hint = slide.popupType === 'pdf' ? '📄 Lihat PDF' : '🔍 Lihat Gambar';
      const el = document.createElement('div');
      el.className = 'slide';
      el.innerHTML = `
        <div class="slide-bg" style="
          background-image: url('${slide.imageUrl}');
          background-size: cover;
          background-position: center;
          position: absolute;
          inset: 0;
        "></div>
        <div class="slide-overlay"></div>
        <div class="slide-hint">${hint}</div>
        <div class="slide-content">
          <span class="slide-tag">${slide.tag}</span>
          <h2>${slide.title}</h2>
          <p>${slide.desc}</p>
        </div>`;

      /* ─── FIX #2: Kirim group + index agar popup bisa navigasi ─── */
      el.addEventListener('click', () => openPopup(slide, group, i));

      return el;
    });

    group.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', e => {
        e.stopPropagation();
        goTo(num, i + 1);
        resetInterval(num);
      });
      dots.appendChild(dot);
    });

    const cloneFirst = slideEls[0].cloneNode(true);
    const cloneLast  = slideEls[slideEls.length - 1].cloneNode(true);
    track.appendChild(cloneLast);
    slideEls.forEach(el => track.appendChild(el));
    track.appendChild(cloneFirst);

    sliderState[num].current = 1;
    setTrackPosition(num, false);
    updateDots(num);

    if (track._sliderHandler) track.removeEventListener('transitionend', track._sliderHandler);
    const handler = e => {
      if (e.target !== track || e.propertyName !== 'transform') return;
      handleTransitionEnd(num);
    };
    track._sliderHandler = handler;
    track.addEventListener('transitionend', handler);

    // Pause on hover
    const wrapper = track.closest('.slider-card') || track.parentElement;
    if (wrapper && !wrapper._hoverBound) {
      wrapper._hoverBound = true;
      wrapper.addEventListener('mouseenter', () => {
        stopInterval(num);
        const t = sliderTimers[num];
        if (t.restartTimeout) { clearTimeout(t.restartTimeout); t.restartTimeout = null; }
      });
      wrapper.addEventListener('mouseleave', () => {
        const t = sliderTimers[num];
        if (t.restartTimeout) clearTimeout(t.restartTimeout);
        t.restartTimeout = setTimeout(() => { startInterval(num); t.restartTimeout = null; }, 500);
      });
    }
  });
}

function startAuto() {
  [1, 2].forEach(num => {
    stopInterval(num);
    setTimeout(() => startInterval(num), STAGGER_DELAY[num]);
  });
}

function initSliderBtns() {
  // Pasang placeholder agar tidak putih saat data belum datang
  [1, 2].forEach(num => initSliderPlaceholder(num));

  document.querySelectorAll('.slider-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const num = +btn.dataset.slider;
      goTo(num, sliderState[num].current + +btn.dataset.dir);
      resetInterval(num);
    });
  });
}

document.addEventListener('DOMContentLoaded', initSliderBtns);
/* ─── selesai: js/slider.js ─── */

/* ─── mulai: js/popup.js ─── */
/**
 * popup.js — Popup untuk slide (image/pdf)
 *
 * FIXES:
 *  - Image popup sekarang punya tombol ← → untuk navigasi antar slide
 *  - Terima parameter (slide, allSlides, index) dari slider.js
 *  - FIX: renderImagePopup sekarang bisa handle slide PDF saat navigasi arrow
 */

/* ─── State popup image slideshow ─────────────────────────────── */
let _popupGroup = [];
let _popupIdx   = 0;

/* ─── BUKA POPUP ────────────────────────────────────────────────
 * @param {Object} slide      - data slide yang diklik
 * @param {Array}  allSlides  - semua slide dalam grup (opsional)
 * @param {number} index      - index slide yang diklik dalam allSlides
 */
function openPopup(slide, allSlides, index) {
  const overlay = document.getElementById('popupOverlay');
  const inner   = document.getElementById('popupInner');

  if (slide.popupType === 'pdf') {

    /* ── PDF diklik langsung (tanpa group navigasi) ── */
    _popupGroup = [];
    _popupIdx   = 0;

    if (slide.popupUrl) {
      if (slide.popupUrl.startsWith('data:')) {
        inner.innerHTML = buildPdfFallback(slide, slide.popupUrl);
      } else {
        inner.innerHTML = buildPdfEmbed(slide);
      }
    } else {
      inner.innerHTML = buildPdfNotUploaded(slide);
    }

  } else {

    /* ── IMAGE popup — dengan navigasi kalau ada group ── */
    if (allSlides && allSlides.length > 1) {
      _popupGroup = allSlides;
      _popupIdx   = (typeof index === 'number') ? index : 0;
    } else {
      _popupGroup = [slide];
      _popupIdx   = 0;
    }
    renderPopupSlide(inner);
  }

  overlay.classList.add('open');
}

/* ─── Render slide (image ATAU pdf) saat navigasi ──────────────
 * FIX: cek popupType per-slide agar PDF dalam group tetap tampil
 */
function renderPopupSlide(inner) {
  if (!inner) inner = document.getElementById('popupInner');
  const slide  = _popupGroup[_popupIdx];
  const total  = _popupGroup.length;
  const hasNav = total > 1;

  const navPrev = hasNav ? `
    <button class="popup-nav-btn popup-nav-prev" onclick="navigateImagePopup(-1)" title="Sebelumnya">
      &#8592;
    </button>` : '';

  const navNext = hasNav ? `
    <button class="popup-nav-btn popup-nav-next" onclick="navigateImagePopup(1)" title="Berikutnya">
      &#8594;
    </button>` : '';

  const navCounter = hasNav ? `
    <div class="popup-nav-counter">${_popupIdx + 1} / ${total}</div>` : '';

  if (slide.popupType === 'pdf') {

    /* ── Slide PDF dalam group — tampil dengan tombol navigasi ── */
    if (slide.popupUrl && !slide.popupUrl.startsWith('data:')) {

      const iframeSrc = slide.popupUrl.startsWith('/api/get-file')
        ? slide.popupUrl
        : `https://docs.google.com/viewer?url=${encodeURIComponent(slide.popupUrl)}&embedded=true`;

      const downloadBtn = `
        <a href="${slide.popupUrl}" target="_blank" rel="noopener"
          style="margin-left:auto;font-size:11px;color:rgba(255,255,255,.75);
                 text-decoration:none;padding:3px 10px;
                 background:rgba(255,255,255,.15);border-radius:6px;">
          ⬇️ Download
        </a>`;

      inner.innerHTML = `
        <div class="popup-pdf-wrap" style="position:relative;">
          ${navPrev}
          <div class="popup-pdf-header">
            📄 ${slide.popupLabel || slide.title}
            ${downloadBtn}
          </div>
          <div class="popup-pdf-body">
            <iframe src="${iframeSrc}" frameborder="0" allowfullscreen></iframe>
          </div>
          ${navNext}
          ${navCounter}
        </div>`;

    } else {

      /* PDF belum diupload tapi tetap ada navigasi */
      inner.innerHTML = `
        <div style="position:relative;width:min(380px,88vw);background:#fff;
                    border-radius:16px;padding:36px 28px;text-align:center;">
          ${navPrev}
          <div style="font-size:48px;margin-bottom:12px;">📄</div>
          <div style="font-size:14px;font-weight:700;color:#1a4f8a;margin-bottom:8px;">
            ${slide.popupLabel || slide.title}
          </div>
          <div style="font-size:13px;color:#5a6e82;">
            File PDF belum diunggah.<br>
            Upload melalui <strong>Admin Panel</strong>.
          </div>
          ${navNext}
          ${navCounter}
        </div>`;
    }

  } else {

    /* ── Slide IMAGE — seperti semula ── */
    const src = slide.popupUrl || slide.imageUrl;

    inner.innerHTML = `
      <div class="popup-img" style="position:relative;">
        ${navPrev}
        <img
          src="${src}"
          alt="${slide.title}"
          style="display:block;max-height:80vh;max-width:min(90vw,900px);border-radius:12px;"
        />
        ${navNext}
        ${navCounter}
        ${slide.title ? `<div class="popup-nav-caption">${slide.title}</div>` : ''}
      </div>`;
  }
}

/* ─── Alias agar kode lama (renderImagePopup) tetap kompatibel ── */
function renderImagePopup(inner) {
  renderPopupSlide(inner);
}

/* ─── Navigasi popup (image & pdf) ─────────────────────────────── */
function navigateImagePopup(dir) {
  _popupIdx = (_popupIdx + dir + _popupGroup.length) % _popupGroup.length;
  renderPopupSlide();
}

/* ─── Keyboard navigasi ─────────────────────────────────────────── */
function _handlePopupKey(e) {
  if (!document.getElementById('popupOverlay').classList.contains('open')) return;
  if (_popupGroup.length <= 1) return;
  if (e.key === 'ArrowLeft')  navigateImagePopup(-1);
  if (e.key === 'ArrowRight') navigateImagePopup(1);
}

/* ─── Helper: PDF embed iframe ──────────────────────────────────── */
function buildPdfEmbed(slide) {
  const isProxyUrl  = slide.popupUrl.startsWith('/api/get-file');
  const iframeSrc   = isProxyUrl
    ? slide.popupUrl
    : `https://docs.google.com/viewer?url=${encodeURIComponent(slide.popupUrl)}&embedded=true`;

  const downloadBtn = `
    <a href="${slide.popupUrl}" target="_blank" rel="noopener"
      style="margin-left:auto;font-size:11px;color:rgba(255,255,255,.75);
             text-decoration:none;padding:3px 10px;
             background:rgba(255,255,255,.15);border-radius:6px;">
      ⬇️ Download
    </a>`;

  return `
    <div class="popup-pdf-wrap">
      <div class="popup-pdf-header">
        📄 ${slide.popupLabel || slide.title}
        ${downloadBtn}
      </div>
      <div class="popup-pdf-body">
        <iframe src="${iframeSrc}" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>`;
}

/* ─── Helper: PDF belum diupload ────────────────────────────────── */
function buildPdfNotUploaded(slide) {
  return `
    <div style="width:min(380px,88vw);background:#fff;border-radius:16px;
                padding:36px 28px;text-align:center;">
      <div style="font-size:48px;margin-bottom:12px;">📄</div>
      <div style="font-size:14px;font-weight:700;color:#1a4f8a;margin-bottom:8px;">
        ${slide.popupLabel || slide.title}
      </div>
      <div style="font-size:13px;color:#5a6e82;">
        File PDF belum diunggah.<br>
        Upload melalui <strong>Admin Panel</strong>.
      </div>
    </div>`;
}

/* ─── Fallback PDF base64 ───────────────────────────────────────── */
function buildPdfFallback(slide, url) {
  const isBase64 = url.startsWith('data:');
  return `
    <div style="width:min(360px,88vw);background:#fff;border-radius:16px;
                padding:28px 24px;text-align:center;">
      <div style="font-size:48px;margin-bottom:12px;">📄</div>
      <div style="font-size:15px;font-weight:700;color:#1a4f8a;margin-bottom:8px;">
        ${slide.popupLabel || slide.title}
      </div>
      <div style="font-size:13px;color:#5a6e82;margin-bottom:20px;line-height:1.6;">
        Klik tombol di bawah untuk membuka atau mendownload PDF.
      </div>
      <a href="${url}"
        ${isBase64 ? 'download="dokumen.pdf"' : 'target="_blank" rel="noopener"'}
        style="display:flex;align-items:center;justify-content:center;gap:8px;
               background:#1a4f8a;color:#fff;font-size:14px;font-weight:700;
               padding:12px 24px;border-radius:10px;text-decoration:none;width:100%;">
        📖 Buka / Download PDF
      </a>
    </div>`;
}

/* ─── Tutup popup ────────────────────────────────────────────────── */
function closePopup() {
  const overlay = document.getElementById('popupOverlay');
  overlay.classList.remove('open');
  _popupGroup = [];
  _popupIdx   = 0;
  setTimeout(() => {
    const inner = document.getElementById('popupInner');
    if (inner) inner.innerHTML = '';
  }, 250);
}

/* ─── Event listeners ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('popupClose')?.addEventListener('click', closePopup);

  document.getElementById('popupOverlay')?.addEventListener('click', e => {
    if (e.target.id === 'popupOverlay') closePopup();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closePopup(); return; }
    _handlePopupKey(e);
  });
});

/* ─── Style tombol navigasi (inject sekali) ──────────────────────── */
(function injectPopupNavStyle() {
  if (document.getElementById('popup-nav-style')) return;
  const style = document.createElement('style');
  style.id = 'popup-nav-style';
  style.textContent = `
    .popup-nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0,0,0,.55);
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 44px;
      height: 44px;
      font-size: 20px;
      cursor: pointer;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background .2s, transform .2s;
      user-select: none;
    }
    .popup-nav-btn:hover {
      background: rgba(26,79,138,.85);
      transform: translateY(-50%) scale(1.1);
    }
    .popup-nav-prev { left: -22px; }
    .popup-nav-next { right: -22px; }

    @media (max-width: 600px) {
      .popup-nav-prev { left: 8px; }
      .popup-nav-next { right: 8px; }
    }

    .popup-nav-counter {
      position: absolute;
      bottom: -32px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0,0,0,.5);
      color: #fff;
      font-size: 12px;
      padding: 3px 10px;
      border-radius: 20px;
      white-space: nowrap;
    }

    .popup-nav-caption {
      position: absolute;
      bottom: -60px;
      left: 50%;
      transform: translateX(-50%);
      color: rgba(255,255,255,.8);
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      max-width: 80vw;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .popup-img {
      padding-bottom: 70px;
    }

    /* PDF dalam group navigasi */
    .popup-pdf-wrap {
      position: relative;
    }
    .popup-pdf-wrap .popup-nav-btn {
      top: 50%;
    }
    .popup-pdf-wrap .popup-nav-counter {
      bottom: 8px;
      left: 50%;
    }
  `;
  document.head.appendChild(style);
})();
/* ─── selesai: js/popup.js ─── */

/* ─── mulai: js/news.js ─── */
/**
 * news.js — Build daftar berita di frontend.
 * Mendukung field pdfLink opsional → popup PDF (bukan new tab).
 *
 * FIX: Google Drive URL kini dikonversi ke /preview (embed native),
 *      sehingga tidak lagi menampilkan HTML mentah di iframe.
 */

/**
 * Konversi berbagai format URL Google Drive ke URL embed /preview.
 * Format yang didukung:
 *   https://drive.google.com/file/d/FILE_ID/view?...
 *   https://drive.google.com/file/d/FILE_ID/edit
 *   https://drive.google.com/open?id=FILE_ID
 *   https://drive.google.com/uc?id=FILE_ID&export=...
 */
function toGDriveEmbedUrl(url) {
  try {
    // Sudah format preview → kembalikan apa adanya
    if (/drive\.google\.com\/file\/d\/.+\/preview/.test(url)) return url;

    // Format: /file/d/FILE_ID/...
    const fileMatch = url.match(/drive\.google\.com\/file\/d\/([^/?&#]+)/);
    if (fileMatch) return `https://drive.google.com/file/d/${fileMatch[1]}/preview`;

    // Format: ?id=FILE_ID atau open?id=FILE_ID atau uc?id=FILE_ID
    const idMatch = url.match(/[?&]id=([^&]+)/);
    if (idMatch && url.includes('drive.google.com')) {
      return `https://drive.google.com/file/d/${idMatch[1]}/preview`;
    }
  } catch (_) {}
  return null; // bukan Google Drive
}

/**
 * Tentukan URL yang tepat untuk iframe PDF.
 *   1. Proxy internal  → gunakan langsung
 *   2. Google Drive    → konversi ke /preview
 *   3. URL lain        → pakai Google Docs Viewer sebagai fallback
 */
function resolvePdfIframeSrc(pdfUrl) {
  if (pdfUrl.startsWith('/api/get-file')) return pdfUrl;

  const gdrive = toGDriveEmbedUrl(pdfUrl);
  if (gdrive) return gdrive;

  // Fallback: Google Docs Viewer (untuk URL PDF publik non-Drive)
  return `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
}

// ─────────────────────────────────────────────────────────────────────────────

function buildNews(news) {
  const list = document.getElementById('newsList');
  if (!list) return;

  if (!news || news.length === 0) {
    list.innerHTML = `
      <li style="color:var(--text-muted);font-size:13px;padding:8px 0;">
        Belum ada berita.
      </li>`;
    return;
  }

  list.innerHTML = news.map(item => {
    let contentHtml;

    if (item.pdfLink) {
      // Ada PDF link → klik buka popup PDF (bukan new tab)
      contentHtml = `
        <div class="news-text news-clickable"
             onclick="openNewsPdf('${item.pdfLink}', '${(item.text || '').replace(/'/g, "\\'")}')"
             title="Klik untuk buka PDF">
          ${item.text}
          <span class="news-pdf-badge">📄 PDF</span>
        </div>`;
    } else if (item.link) {
      // Ada link biasa → buka new tab
      contentHtml = `
        <div class="news-text">
          <a href="${item.link}" target="_blank" style="color:#1a4f8a;">
            ${item.text}
          </a>
        </div>`;
    } else {
      contentHtml = `<div class="news-text">${item.text}</div>`;
    }

    return `
      <li>
        <div class="news-date">${item.date}</div>
        ${contentHtml}
      </li>`;
  }).join('');
}

/**
 * Buka PDF berita sebagai popup (sama seperti popup slide PDF).
 * Sekarang menangani URL Google Drive dengan benar.
 */
function openNewsPdf(pdfUrl, label) {
  const overlay = document.getElementById('popupOverlay');
  const inner   = document.getElementById('popupInner');
  if (!overlay || !inner) { window.open(pdfUrl, '_blank'); return; }

  const iframeSrc = resolvePdfIframeSrc(pdfUrl);

  inner.innerHTML = `
    <div class="popup-pdf-wrap">
      <div class="popup-pdf-header">
        📄 ${label}
        <a href="${pdfUrl}" target="_blank" rel="noopener"
          style="margin-left:auto;font-size:11px;color:rgba(255,255,255,.75);
          text-decoration:none;padding:3px 10px;
          background:rgba(255,255,255,.15);border-radius:6px;">
          ⬇️ Download
        </a>
      </div>
      <div class="popup-pdf-body">
        <iframe src="${iframeSrc}" frameborder="0" allowfullscreen
                onload="this.style.opacity='1'"
                style="opacity:0;transition:opacity .3s;"></iframe>
      </div>
    </div>`;

  overlay.classList.add('open');
}
/* ─── selesai: js/news.js ─── */

/* ─── mulai: js/kb.js ─── */
/* ================================================================
   kb.js - Kirana Knowledge Base
   Data statis FMIPA UNTAN untuk konteks AI Kirana
   Update: Juli 2026
   ================================================================ */

const KIRANA_KB = [

  /* ── Layanan Portal ── */
  {
    id: 'bio_ijazah',
    answer:
      'Bio Ijazah adalah layanan verifikasi dan cetak biodata ijazah resmi Untan. ' +
      'Akses melalui xandria.pduntan.id/login menggunakan akun mahasiswa.',
  },

  {
    id: 'satu_untan',
    answer:
      'SATU UNTAN adalah portal terpadu sistem informasi Universitas Tanjungpura. ' +
      'Tersedia di satu.untan.ac.id untuk KRS, nilai, transkrip, dan layanan akademik lainnya.',
  },

  {
    id: 'cek_surat',
    answer:
      'Cek status surat di halaman Cek Surat portal: infobakmipa.vercel.app/ceksurat.html\n' +
      'Masukkan Nama atau NIM, pilih Himpunan, pilih jenis surat, klik Cari.',
  },

  {
    id: 'pengajuan_surat',
    answer:
      'CARA BUAT SURAT DI FMIPA UNTAN:\n' +
      '1. Buka portal → klik "Jenis Layanan" → pilih jenis surat → isi Google Form → submit\n' +
      '   ATAU scan barcode/QR di slider portal pakai HP\n' +
      '2. Tunggu 1–2 hari kerja (isi pagi → sore bisa jadi)\n' +
      '3. Pantau status di: infobakmipa.vercel.app/ceksurat.html\n' +
      '4. Jika status belum muncul, hubungi bagian akademik sesuai jenis surat (lihat di bawah)\n\n' +
      'Tidak perlu datang ke kantor. Semua online.\n\n' +
      'LINK GOOGLE FORM:\n' +
      '- Surat Aktif Kuliah: https://docs.google.com/forms/d/e/1FAIpQLSdIvl3vcqG8G-AKpRcC1DKh6Hfq8_MYGB8VuK26okxMEyZRgg/viewform\n' +
      '- SKL: https://docs.google.com/forms/d/e/1FAIpQLSeleQzeEElYtt8PoW8tHm5wL4t6GJbDzfRjhQ6Bwn3KHtSzbg/viewform\n' +
      '- Surat Cuti: https://docs.google.com/forms/d/e/1FAIpQLSfcv_u0UlgJgJ_PuKC_ELfI5UUwLufISUdXlNl37VD_NMSAOg/viewform\n' +
      '- Surat Pengunduran Diri: https://docs.google.com/forms/d/e/1FAIpQLSfzD_poqcDT_U3d_vmsZOPFXewTzubYSZyNY7FpyObYL7FKGA/viewform\n' +
      '- Surat Pindah Kuliah: https://docs.google.com/forms/d/e/1FAIpQLSeoHxHVHXY86d_acF92oZfyxzsQxoPrppB1z5bFfE3oRRKqMw/viewform\n' +
      '- Surat Pengembalian Dana: https://docs.google.com/forms/d/e/1FAIpQLSeev6qHtma1S3mRIbgzBHgqEtqnlLw5rW3t13z9Mk4H03RVeg/viewform\n' +
      '- Pernyataan Terbit Artikel: https://docs.google.com/forms/d/e/1FAIpQLSdiZVbf77fVqu8yYe1D_grYFDNF-mIl26n6KYKvuMdOS-0YJw/viewform\n\n' +
      'JIKA SURAT BELUM ADA / ADA KENDALA — HUBUNGI:\n' +
      '- SKL → Onny Suryana (Bag. Akademik, homebase Ruang Baca) via menu Kontak portal\n' +
      '- Surat Aktif Kuliah → Agung (Bag. Kemahasiswaan) via menu Kontak portal\n' +
      '- Surat Cuti, Pindah, Pengunduran Diri → Bu Ana (Bag. Akademik) via menu Kontak portal\n' +
      '- Surat Izin Kegiatan (MSI, HIMATIKA, HIMASTA, HIMAFIS, HIMABIO, HMG, KOMIK, ART LABORATORY) → Thareq (Bag. Akademik) via menu Kontak portal\n' +
      '- Surat Izin Kegiatan (HIMASTER, HMIK, HMSI, BEM, DPM, FIKRI, IMASIKA, HIMKI) → Onny Suryana (Bag. Akademik, homebase Ruang Baca) via menu Kontak portal',
  },

  {
    id: 'sekar',
    answer:
      'SEKAR (Sistem Informasi Ruangan) adalah aplikasi peminjaman ruangan FMIPA Untan. ' +
      'Akses di sekarfmipa.vercel.app.',
  },

  {
    id: 'kontak_layanan',
    answer:
      'Layanan akademik FMIPA Untan:\n' +
      '- Loket Akademik: Senin-Kamis 08.00-15.00 WIB (Jumat WFH via online/WhatsApp)\n' +
      '- Konsultasi & pembayaran UKT: Ruang Loket Akademik, Senin-Kamis 08.00-15.00 WIB\n' +
      '- Kontak via WhatsApp tersedia di menu Kontak portal (Senin-Jumat)',
  },

  /* ── UKT & Keuangan ── */
  {
    id: 'ukt_info',
    answer:
      'Informasi UKT FMIPA Untan:\n\n' +
      'KONSULTASI & PEMBAYARAN UKT\n' +
      'Dilaksanakan di Ruang Loket Akademik.\n' +
      'Hari: Senin - Kamis | Waktu: 08.00 - 15.00 WIB\n\n' +
      'PENGURANGAN UKT 50% (Mahasiswa Tahap Kuliah Akhir)\n' +
      'Syarat:\n' +
      '- Mahasiswa S1 minimal semester 9 ATAU D3 minimal semester 7\n' +
      '- Sisa mata kuliah yang belum ditempuh maksimal 6 SKS\n' +
      '- Tidak berlaku jika sisa SKS lebih dari 6\n' +
      '- SKS perbaikan nilai tetap dihitung dalam akumulasi total SKS\n' +
      '- Jika sudah membayar 50%, wajib melunasi sisa 50% sebelum Ujian Akhir Semester\n\n' +
      'DOKUMEN YANG DIPERLUKAN:\n' +
      '1. Surat Permohonan Pengurangan Pembayaran UKT\n' +
      '2. Transkrip nilai terakhir\n' +
      '3. Lembar Isian Rencana Studi (LIRS)\n' +
      '4. Surat Pernyataan Tidak Sedang Menerima Beasiswa\n' +
      '5. Surat Pernyataan Tanggung Jawab Mutlak (SPTJM)\n\n' +
      'TATA CARA PENGAJUAN:\n' +
      '1. Isi formulir permohonan sesuai format\n' +
      '2. Lengkapi bukti pendukung\n' +
      '3. Ajukan maksimal 2 minggu sebelum daftar ulang\n' +
      '4. Disampaikan ke fakultas melalui Wakil Dekan Bidang Keuangan dan Umum\n' +
      '5. WD Keuangan akan verifikasi dan terbitkan Surat Rekomendasi',
  },

  {
    id: 'ukt_penanggung_jawab',
    answer:
      'Untuk informasi lebih lanjut soal UKT, silakan hubungi Pak Prima atau Bu Warsi di Ruang Akademik FMIPA Untan, atau melalui menu Kontak di portal.\n' +
      'Jam layanan: Senin-Kamis 08.00-15.00 WIB.',
  },

  /* ── Data Pegawai & Dosen ── */
  {
    id: 'pejabat_struktural',
    answer:
      'PEJABAT STRUKTURAL FMIPA UNTAN (per Juli 2026):\n\n' +
      'DEKANAT:\n' +
      '- Dekan: Prof. Dr. Gusrizal, S.Si., M.Si.\n' +
      '- Wakil Dekan Bid. Akademik: Yudha Arman, S.Si, M.Si., D.Sc.\n' +
      '- Wakil Dekan Bid. Keuangan & Umum: Dr. Evi Noviani, S.Si., M.Si.\n' +
      '- Wakil Dekan Bid. Kemahasiswaan & Alumni: Tedy Rismawan, S.Kom., M.Cs.\n\n' +
      'KETUA JURUSAN:\n' +
      '- Matematika: Dr. Yundari, S.Si., M.Sc.\n' +
      '- Fisika: Dr. Bintoro Siswo Nugroho, S.Si., M.Si.\n' +
      '- Kimia: Dr. Anis Shofiyani, S.Si., M.Si.\n' +
      '- Biologi: Dr. Dwi Gusmalawati, S.Si., M.Si.\n' +
      '- Ilmu Kelautan: Dr. Apriansyah, S.Si., M.Si.\n' +
      '- RSK & Sisfo: Arif Bijaksana Putra Negara, S.Kom., M.Kom.\n\n' +
      'KOORDINATOR PRODI:\n' +
      '- Matematika: Dr. Bayu Prihandono, S.Si., M.Sc.\n' +
      '- Statistika: Dr. Evy Sulistianingsih, S.Si., M.Sc.\n' +
      '- Fisika: Dr. Azrul Azwar, S.Si., M.Si.\n' +
      '- Kimia: Dr. Winda Rahmalia, S.Si., M.Si.\n' +
      '- Geofisika: Dr. Yoga Satria Putra, S.Si., M.Si.\n\n' +
      'KEPALA LABORATORIUM:\n' +
      '- Lab Matematika: Fransiskus Fran, S.Si., M.Si.\n' +
      '- Lab Statistika: Shantika Martha, S.Si., M.Si.\n' +
      '- Lab Fisika Dasar: Boni Pahlanop Lapanporo, S.Si., M.Sc.\n' +
      '- Lab Fisika Lanjut & Komputasi: Dr. Dwiria Wahyuni, S.Si., M.Sc.\n' +
      '- Lab Geofisika & SIG: Dr. Joko Sampurno, S.Si., M.Si.\n' +
      '- Lab Kimia: Dr. Nurlina, S.Si., M.Sc.\n' +
      '- Lab Bioteknologi & Riset: Adhitiyawarman, S.Si., M.Si., Ph.D.\n' +
      '- Lab Biologi: Dr. Zulfa Zakiah, S.Si., M.Si.\n' +
      '- Lab Zoologi: Ari Hepi Yanti, S.Si., M.Sc.\n' +
      '- Lab Ilmu Kelautan: Warsidah, S.Si., M.Si., Apt.\n' +
      '- Lab Pemrograman & Komputasi: Uray Ristian, S.Kom., M.Kom.\n' +
      '- Lab Sistem Informasi: Ferdy Febriyanto, S.Kom., M.Kom.\n\n' +
      'KEPALA BAGIAN:\n' +
      '- Kepala Bagian Tata Usaha: Eva Novianti Hestivera, S.T., S.E., M.M.\n' +
      '- Pengadministrasi Akademik: Sakdiana',
  },

  {
    id: 'dosen_fmipa',
    answer: '=== DATA DOSEN FMIPA UNTAN (per Juli 2026) ===\n\n[Biologi]\n  • Prof. Dr. Dra. Siti Khotimah, M.Si. | Guru Besar | Gol. IV/d\n  • Prof. Dr. Rafdinal, S.Si., M.Si. | Guru Besar | Gol. IV/c\n  • Dr. Elvi Rusmiyanto Pancaning Wardoyo, S.Si., M.Si. | Lektor Kepala | Gol. IV/b\n  • Riza Linda, S.Si., M.Si. | Lektor Kepala | Gol. IV/a\n  • Dr. Kustiati, S.Si., M.Si. | Lektor Kepala | Gol. IV/c\n  • Masnur Turnip, S.Si., M.Sc. | Lektor | Gol. III/d\n  • Mukarlina, S.Si., M.Si. | Lektor | Gol. III/d\n  • Dr. Zulfa Zakiah, S.Si., M.Si. | Lektor | Gol. III/d | Jabatan: Kepala Laboratorium Biologi\n  • Irwan Lovadi, S.Si., M.App.Sc., Ph.D. | Lektor | Gol. III/d\n  • Siti Ifadatin, S.Si., M.Si. | Lektor | Gol. III/d | Jabatan: Sekretaris Jurusan Biologi\n  • Dr. Junardi, S.Si., M.Si. | Lektor Kepala | Gol. IV/a\n  • Ari Hepi Yanti, S.Si., M.Sc. | Lektor Kepala | Gol. III/d | Jabatan: Kepala Laboratorium Zoologi\n  • Dr. Dwi Gusmalawati, S.Si., M.Si. | Lektor | Gol. III/c | Jabatan: Ketua Jurusan Biologi\n  • Rahmawati, S.Si., M.Sc. | Lektor | Gol. III/c\n  • Diah Wulandari Rousdy, S.Si., M.Sc. | Lektor | Gol. III/c\n  • Riyandi, S.Si., M.Si. | Asisten Ahli | Gol. III/b\n  • Firman Saputra, S.Si., M.Sc. | Asisten Ahli | Gol. III/b\n  • Tri Rima Setyawati, S.Si., M.Si. | Lektor | Gol. III/d | Status: TUGAS BELAJAR\n\n[Fisika]\n  • Yudha Arman, S.Si, M.Si., D.Sc. | Lektor Kepala | Gol. III/d | Jabatan: Wakil Dekan Bid. Akademik\n  • Dr. Bintoro Siswo Nugroho, S.Si., M.Si. | Lektor Kepala | Gol. IV/b | Jabatan: Ketua Jurusan Fisika\n  • Hasanuddin, S.Si., M.Si., Ph.D. | Lektor | Gol. III/d | Jabatan: Sekretaris Jurusan Fisika\n  • Dr. Azrul Azwar, S.Si., M.Si. | Lektor | Gol. III/d | Jabatan: Koordinator Prodi Fisika\n  • Dr. Dwiria Wahyuni, S.Si., M.Sc. | Lektor | Gol. III/d | Jabatan: Kepala Lab Fisika Lanjut & Komputasi\n  • Boni Pahlanop Lapanporo, S.Si., M.Sc. | Lektor | Gol. III/d | Jabatan: Kepala Lab Fisika Dasar\n  • Mariana Bara\'allo Malino, S.Si., M.Sc. | Lektor | Gol. III/c\n  • Dr. Nurhasanah, S.Si., M.Si. | Lektor | Gol. III/d\n  • Dr. Abdul Muid, S.Si., M.Si. | Asisten Ahli | Gol. III/b\n  • Asifa Asri, S.Si., M.Si. | Asisten Ahli | Gol. III/b\n  • Yuris Sutanto, M.Sc. | Asisten Ahli | Gol. III/b\n\n[Geofisika]\n  • Dr. Yoga Satria Putra, S.Si., M.Si. | Lektor Kepala | Gol. IV/a | Jabatan: Koordinator Prodi Geofisika\n  • Dr. Andi Ihwan, S.Si., M.Si. | Lektor Kepala | Gol. IV/c\n  • Dr. Muhammad Ishak Jumarang, S.Si., M.Si. | Lektor Kepala | Gol. IV/c\n  • Dr. Joko Sampurno, S.Si., M.Si. | Lektor Kepala | Gol. III/d | Jabatan: Kepala Lab Geofisika & SIG\n  • Muliadi, S.Si., M.Si. | Lektor Kepala | Gol. IV/a\n  • Zulfian, S.Si., M.Si. | Lektor | Gol. III/c\n  • Irfana Diah Faryuni, S.Si., M.Si. | Asisten Ahli | Gol. III/b\n  • Radhitya Perdhana, S.Si., M.Sc. | Asisten Ahli | Gol. III/b\n  • Riza Adriat, S.Si., M.Si. | Lektor | Gol. III/b | Status: TUGAS BELAJAR\n  • Muhardi, S.Si., M.Sc. | Asisten Ahli | Gol. III/b | Status: TUGAS BELAJAR\n\n[Ilmu Kelautan]\n  • Dr. Apriansyah, S.Si., M.Si. | Lektor | Gol. III/c | Jabatan: Ketua Jurusan Ilmu Kelautan\n  • Warsidah, S.Si., M.Si., Apt. | Lektor | Gol. III/d | Jabatan: Kepala Lab Ilmu Kelautan\n  • Yusuf Arief Nurrahman, S.Kel., M.Si. | Asisten Ahli | Gol. III/b | Jabatan: Sekretaris Jurusan Ilmu Kelautan\n  • Arie Antasari Kushadiwijayanto, S.Si., M.Si. | Lektor | Gol. III/c\n  • Mega Sari Juane Sofiana, S.Si., M.Sc. | Lektor | Gol. III/c\n  • Sukal Minsas, S.Si., M.Si. | Lektor | Gol. III/b\n  • Nora Idiawati, S.Si., M.Si. | Lektor | Gol. III/d | Status: TUGAS BELAJAR\n\n[Kimia]\n  • Prof. Berlian Sitorus, S.Si., M.Si., M.Sc., Ph.D. | Guru Besar | Gol. IV/b\n  • Prof. Rudiyansyah, S.Si., M.Si., Ph.D. | Guru Besar | Gol. IV/c\n  • Dr. Nelly Wahyuni, S.Si., M.Si. | Lektor Kepala | Gol. IV/c\n  • H. Afghani Jayuska, S.Si., M.Si. | Lektor Kepala | Gol. IV/c\n  • Titin Anita Zaharah, S.Si., M.Sc. | Lektor Kepala | Gol. IV/c\n  • Puji Ardiningsih, S.Si., M.Si. | Lektor Kepala | Gol. IV/c\n  • Dr. Anthoni Batahan Aritonang, S.Si., M.Si. | Lektor Kepala | Gol. IV/a\n  • Dr. Endah Sayekti, S.Si., M.Si. | Lektor Kepala | Gol. IV/c | Jabatan: Sekretaris Jurusan Kimia\n  • Dr. Winda Rahmalia, S.Si., M.Si. | Lektor Kepala | Gol. IV/a | Jabatan: Koordinator Prodi S1 Kimia\n  • Dr. Lia Destiarti, S.Si., M.Si. | Lektor Kepala | Gol. IV/a | Jabatan: Koordinator Prodi Magister Kimia\n  • Adhitiyawarman, S.Si., M.Si., Ph.D. | Lektor | Gol. III/d | Jabatan: Kepala Lab Bioteknologi & Riset\n  • Dr. Nurlina, S.Si., M.Sc. | Lektor | Gol. III/d | Jabatan: Kepala Lab Kimia\n  • Intan Syahbanu, S.Si., M.Si. | Lektor | Gol. III/d | Status: TUGAS BELAJAR\n\n[Magister Kimia (S2)]\n  • Prof. Dr. Gusrizal, S.Si., M.Si. | Guru Besar | Gol. IV/c | Jabatan: Dekan FMIPA\n  • Dr. Andi Hairil Alimuddin, S.Si., M.Si. | Lektor Kepala | Gol. IV/c\n  • Dr. Anis Shofiyani, S.Si., M.Si. | Lektor | Gol. III/d | Jabatan: Ketua Jurusan Kimia\n  • Prof. Dr. H. Thamrin Usman, DEA. | Guru Besar | Gol. IV/e\n  • Prof. Risa Nofiani, S.Si., M.Si., Ph.D. | Guru Besar | Gol. IV/d\n  • Dr. Muhamad Agus Wibowo, S.Si., M.Si. | Lektor Kepala | Gol. IV/c\n  • Dr. Ari Widiyantoro, S.Si., M.Si. | Lektor Kepala | Gol. IV/a\n\n[Matematika]\n  • Dr. Evi Noviani, S.Si., M.Si. | Lektor Kepala | Gol. IV/a | Jabatan: Wakil Dekan Bid. Keuangan & Umum\n  • Dr. Yundari, S.Si., M.Sc. | Lektor Kepala | Gol. IV/a | Jabatan: Ketua Jurusan Matematika\n  • Dr. Nilamsari Kusumastuti, S.Si., M.Sc. | Lektor | Gol. III/d | Jabatan: Sekretaris Jurusan Matematika\n  • Dr. Bayu Prihandono, S.Si., M.Sc. | Lektor | Gol. III/d | Jabatan: Koordinator Prodi Matematika\n  • Fransiskus Fran, S.Si., M.Si. | Lektor | Gol. III/c | Jabatan: Kepala Lab Matematika\n  • Drs. Helmi, M.Si. | Lektor | Gol. III/d\n  • Yudhi, S.Si., M.Si. | Asisten Ahli | Gol. III/b\n  • Nur\'ainul Miftahul Huda, S.Si., M.Si. | Lektor | Gol. III/c\n  • Meliana Pasaribu, S.Pd., M.Sc. | Asisten Ahli | Gol. III/b\n  • Mariatul Kiftiah, S.Si., M.Sc. | Lektor | Gol. III/d | Status: TUGAS BELAJAR\n\n[Rekayasa Sistem Komputer]\n  • Tedy Rismawan, S.Kom., M.Cs. | Lektor | Gol. III/d | Jabatan: Wakil Dekan Bid. Kemahasiswaan & Alumni\n  • Syamsul Bahri, S.Kom., M.Cs. | Lektor | Gol. III/c | Jabatan: Ketua Jurusan RSK\n  • Dwi Marisa Midyanti, ST., M.Cs. | Lektor Kepala | Gol. IV/a | Jabatan: Sekretaris Jurusan RSK\n  • Uray Ristian, S.Kom., M.Kom. | Lektor | Gol. III/c | Jabatan: Kepala Lab Pemrograman & Komputasi\n  • Drs. Cucu Suhery, MA. | Lektor | Gol. III/d\n  • Dedi Triyanto, ST., MT. | Lektor | Gol. III/d\n  • Rahmi Hidayati, S.Kom., M.Cs. | Lektor | Gol. III/d\n  • Ikhwan Ruslianto, S.Kom., M.Cs. | Lektor | Gol. III/d\n  • Irma Nirmala, ST., MT. | Lektor | Gol. III/c\n  • Suhardi, ST., M.Eng. | Asisten Ahli | Gol. III/b\n  • Hirzen Hasfani, M.Cs. | Asisten Ahli | Gol. III/b\n  • Kartika Sari, M.Cs. | Asisten Ahli | Gol. III/b\n  • Kasliono, S.Mat., M.Cs. | Asisten Ahli | Gol. III/b\n\n[Sistem Informasi]\n  • Renny Puspita Sari, ST., MT. | Lektor | Gol. III/d | Jabatan: Ketua Jurusan Sistem Informasi\n  • Ibnur Rusi, S.Kom., MM. | Lektor | Gol. III/c | Jabatan: Sekretaris Jurusan Sistem Informasi\n  • Ferdy Febriyanto, S.Kom., M.Kom. | Asisten Ahli | Gol. III/b | Jabatan: Kepala Lab Sistem Informasi\n  • Ilhamsyah, S.Si., M.Cs. | Lektor | Gol. III/d\n  • Nurul Mutiah, ST., MT. | Lektor | Gol. III/d\n  • Dian Prawira, ST., M.Eng. | Lektor | Gol. III/c\n\n[Statistika]\n  • Neva Satyahadewi, S.Si., M.Sc. | Lektor Kepala | Gol. IV/a\n  • Dr. Evy Sulistianingsih, S.Si., M.Sc. | Lektor | Gol. III/d | Jabatan: Koordinator Prodi Statistika\n  • Shantika Martha, S.Si., M.Si. | Lektor | Gol. III/d | Jabatan: Kepala Lab Statistika\n  • Nurfitri Imro\'ah, S.Si., M.Si. | Lektor | Gol. III/c\n  • Hendra Perdana, S.Si., M.Sc. | Asisten Ahli | Gol. III/b\n  • Wirda Andani, M.Si. | Asisten Ahli | Gol. III/b\n  • Yuyun Eka Pratiwi, S.Si., M.Aktr. | Asisten Ahli | Gol. III/b\n  • Ray Tamtama, M.Si. | Gol. III/b\n  • Naomi Nessyana Debataraja, S.Si., M.Si. | Lektor | Gol. III/d | Status: TUGAS BELAJAR\n  • Setyo Wira Rizki, S.Si., M.Sc. | Lektor | Gol. III/c | Status: TUGAS BELAJAR\n\n=== TENAGA KEPENDIDIKAN PNS & PPPK ===\n  • Eva Novianti Hestivera, S.T., S.E., M.M. | Gol. IV/a | Kepala Bagian Tata Usaha\n  • Rinny Yusnita Absari, S.E., M.M. | Gol. IV/a | Pengelola Data | Bag. Keuangan\n  • Rachmat Jamaluddin, A.Md. | Gol. III/c | Bendahara Pengeluaran Pembantu | Bag. Keuangan\n  • Eko Sri Haryati, A.Md. | Gol. III/b | Pengelola Data | Bag. Keuangan\n  • Sakdiana | Gol. III/a | Pengadministrasi Akademik | Bag. Akademik\n  • Megawati June, S.Mat. | Pranata Lab. Pendidikan | Lab. Statistika\n  • Muhammad Hariski, S.Mat. | Pranata Lab. Pendidikan | Lab. Sistem Informasi\n  • Tiara Nusa Putri, S.Si. | Pranata Lab. Pendidikan | Lab. Geofisika\n  • Apriliandi, S.Mat. | Pranata Lab. Pendidikan | Lab. Matematika\n  • Asterina, S.Si. | Pranata Lab. Pendidikan | Lab. Fisika Dasar\n  • Filza Buana Putra, S.Mat. | Pranata Lab. Pendidikan | Lab. Pemrograman & Komputasi\n  • Yoga Pratama, S.Si. | Pranata Lab. Pendidikan | Lab. Bioteknologi dan Riset\n  • Toni | Pengadministrasi Perkantoran | Bag. Kepegawaian\n  • Wiwid Widyana, S.Si. | Penata Layanan Operasional | Bag. Kepegawaian\n  • Riyo Riadi, S.Mat. | Penata Layanan Operasional | Bag. Kepegawaian\n  • Budi Suryadarma | Pengadministrasi Perkantoran | Bag. Keuangan\n  • Suandi, S.Si. | Penata Layanan Operasional | Bag. Keuangan\n  • Nayla Afifah, S.Hut. | Penata Layanan Operasional | Bag. Umum\n  • Supriani, S.Hut. | Penata Layanan Operasional | Bag. Umum\n  • Peri Suhendra | Operator Layanan Operasional | Bag. Umum\n  • Sahroni | Operator Layanan Operasional | Bag. Umum\n  • Susanti, S.Pd. | Penata Layanan Operasional | Bag. Umum / Staf Dekan\n  • Hajjar | Operator Layanan Operasional | Bag. Umum\n  • Onny Suryana | Pengadministrasi Perkantoran | Bag. Akademik\n  • Primanita Putri Darmanto, S.Pd., M.Pd. | Penata Layanan Operasional | Bag. Akademik\n  • Agung Setyowahyu, A.Md.Kesling. | Pengelola Layanan Operasional | Bag. Akademik\n  • Thareq Abdul Aziz, A.Md. | Pengelola Layanan Operasional | Bag. Akademik\n  • Prima, S.S.T. | Penata Layanan Operasional | Administrasi Jurusan Matematika & Statistika\n  • Surya Darma, A.Md. | Pengelola Layanan Operasional | Administrasi Jurusan Ilmu Kelautan & Fisika\n  • Warsi Kurnia Rahayu, S.Si | Penata Layanan Operasional | Administrasi Jurusan Kimia\n  • M. Khairuddin, A.Md. | Pengelola Layanan Operasional | Administrasi Jurusan Biologi\n  • Agus Setiawan, S.Si. | Penata Layanan Operasional | Lab. Fisika Dasar\n  • Emma Khairiah, S.Si | Penata Layanan Operasional | Lab. Biologi\n  • Harianto, S.Si. | Penata Layanan Operasional | Lab. Ilmu Kelautan\n\n=== TENAGA KONTRAK & PHL ===\n  • Sri Rahayu, S.Si | Tenaga Laboran | Lab. Zoologi\n  • Margie Surahman, S.Si. | Tenaga Laboran | Lab. Biologi\n  • Titik Lestari, S.Si. | Laboran Kimia | Lab. Kimia\n  • Muhammad Raymount Abdahu, S.Kom. | Tenaga Administrasi | Jurusan RSK dan Sistem Informasi\n  • Hamdi, S.Kom. | TIK | Bag. Akademik',
  },

  /* ── Info Akademik ── */
  {
    id: 'program_studi',
    answer:
      'Program Studi di FMIPA Untan:\n' +
      'S-1: Matematika, Fisika, Kimia, Biologi, Rekayasa Sistem Komputer (Siskom), ' +
      'Sistem Informasi (Sisfo), Statistika, Ilmu Kelautan, Geofisika\n' +
      'S-2: Kimia\n\n' +
      'Mahasiswa Aktif (2026): 2.370 | Lulus: 100',
  },

  {
    id: 'kalender_akademik',
    answer:
      'Kalender akademik FMIPA Untan mengikuti kalender Universitas Tanjungpura. ' +
      'Info terbaru tersedia di slider portal atau hubungi bagian akademik.',
  },

  /* ── Wisuda ── */
  {
    id: 'wisuda_periode_iv',
    answer:
      'WISUDA PERIODE IV T.A. 2025/2026:\n' +
      '- Tanggal wisuda: 29–30 Juli 2026\n' +
      '- Batas daftar: 10 Juli 2026 (via operator fakultas)\n' +
      '- Biaya D3/S1: GRATIS\n' +
      '- Biaya S2/S3/Profesi: Rp 695.000\n' +
      '- Biaya toga: Rp 325.000 → Bank Kalbar rek. 1012556566 a.n. Apollo Mas CV\n' +
      '- Ambil toga: Untan Smart Store, Gedung Perpustakaan Lt.2 (14–24 Juli 2026)\n' +
      '- Batas serahkan berkas: 9 Juli 2026',
  },

  {
    id: 'syarat_berkas_wisuda',
    answer:
      'SYARAT BERKAS WISUDA FMIPA UNTAN (Periode IV 2025/2026):\n' +
      '1. Print screenshot biodata Satu Untan\n' +
      '2. Print screenshot PISN dari Bio Ijazah\n' +
      '3. Isi biodata online akademik: https://s.id/BiodataIV-26MIPA\n' +
      '4. Bukti isi biodata online\n' +
      '5. Fotokopi Berita Acara Sidang Skripsi\n' +
      '6. Surat bebas biaya kuliah (ditandatangani WD Keuangan)\n' +
      '7. Surat pengantar penyerahan Skripsi/TA\n' +
      '8. Surat bukti terbit jurnal (ditandatangani WD Akademik)\n' +
      '9. Fotokopi ijazah SMA/S1 dilegalisir 2 lembar\n' +
      '10. Fotokopi KTP 200x200px — 2 lembar\n' +
      '11. Fotokopi KK — 2 lembar\n' +
      '12. Fotokopi surat cuti (jika pernah cuti)\n' +
      '13. Surat pernyataan pengambilan ijazah (materai Rp 10.000)\n' +
      '14. Bukti bayar toga\n' +
      '15. Bukti bayar wisuda (khusus S2)',
  },

  /* ── Beasiswa BSI ── */
  {
    id: 'beasiswa_bsi',
    answer:
      'BEASISWA BSI SCHOLARSHIP INSPIRASI 2026:\n' +
      '- Open Recruitment: 8 Juni – 3 Juli 2026\n' +
      '- Seleksi Administrasi: 6–13 Juli 2026\n' +
      '- Paper Test: 17–19 Juli 2026\n' +
      '- Pengumuman: 3 Agustus 2026\n' +
      '- Daftar: linktr.ee/BSI_Scholarship\n' +
      '- Info: Iswandi (0853-9353-7252) / Hendri Purwanto (0896-8965-7258)',
  },

  /* ── Tracer Study ── */
  {
    id: 'tracer_study',
    answer:
      'Tracer Study FMIPA Untan sedang dalam pengembangan (progress ~35%).\n' +
      'Platform pelacakan karir alumni. Target launch: September 2026.\n' +
      'Info: infobakmipa.vercel.app/tracer-study.html',
  },

  /* ── Identitas Pembuat ── */
  {
    id: 'identitas_pembuat',
    answer:
      'Portal Akademik & Kemahasiswaan FMIPA Untan dibuat dan dikembangkan oleh Ceo Menyamar. ' +
      'Kreator: https://www.tiktok.com/@koecheng.sol',
  },

];

if (typeof window !== 'undefined') window.KIRANA_KB = KIRANA_KB;
/* ─── selesai: js/kb.js ─── */

/* ─── mulai: js/kirana-search.js ─── */
/* ================================================================
   kirana-search.js - Kirana Chat
   Input bar sticky bawah → overlay panel percakapan muncul di atas
   ================================================================ */

const AI_PROXY_URL = '/api/kirana';

const FMIPA_STATIC_CONTEXT = `
=== PORTAL RESMI: AKADEMIK & KEMAHASISWAAN FMIPA UNTAN ===
Nama Lengkap  : Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)
Universitas   : Universitas Tanjungpura (Untan), Pontianak, Kalimantan Barat

SUMBER DATA UTAMA:
1. Portal terbaru : https://infobakmipa.vercel.app
2. Mirror portal  : https://portalmipa.vercel.app
3. SEKAR ruangan  : https://sekarfmipa.vercel.app
4. Universitas    : https://untan.ac.id
5. Fakultas MIPA  : https://mipa.untan.ac.id website resmi

PROGRAM STUDI S-1: Matematika, Fisika, Kimia, Biologi, Siskom, Ilmu Kelautan,
Sisfo, Statistika, Geofisika. S-2: Kimia.

JAM LAYANAN: Senin-Kamis (kantor) | Jumat WFH via online/WhatsApp.

LAYANAN: Bio Ijazah → xandria.pduntan.id | SATU UNTAN → satu.untan.ac.id
Cek Surat & Jenis Layanan → infobakmipa.vercel.app | SEKAR → sekarfmipa.vercel.app

SURAT: Aktif Kuliah, SKL, Cuti, Pindah, Pengunduran Diri. Proses 1-3 hari kerja.

DATA 2026: Mahasiswa Aktif 2.370 | Lulus 100
Wisuda Periode IV: 29–30 Juli 2026

KONTAK: WhatsApp via menu Kontak di infobakmipa.vercel.app (Senin-Jumat)
`.trim();

/* ──────────────────────────────────────────────────────────────── */
function buildKBContext() {
  if (typeof window.KIRANA_KB === 'undefined') return '';
  return window.KIRANA_KB
    .filter(i => !['kata_kasar','pujian_diri'].includes(i.id))
    .map(i => {
      const c = i.answer
        .replace(/<br\s*\/?>/gi,'\n')
        .replace(/<a[^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/gi,'$2 ($1)')
        .replace(/<[^>]+>/g,'')
        .replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>')
        .replace(/&nbsp;/g,' ').replace(/\n{3,}/g,'\n\n').trim();
      return `[${i.id}]\n${c}`;
    }).join('\n\n');
}

async function buildPortalDataContext() {
  try {
    const r = await fetch('/data/portal-data.json');
    if (!r.ok) return '';
    const d = await r.json();
    const p = [];
    if (d.news?.length) {
      p.push('=== BERITA TERKINI (infobakmipa.vercel.app) ===');
      d.news.forEach(n => p.push(`• [${n.date}] ${n.text}`));
    }
    if (d.slides?.length) {
      p.push('\n=== INFO SLIDER ===');
      const seen = new Set();
      d.slides.filter(s => { if(seen.has(s.title)) return false; seen.add(s.title); return true; })
        .forEach(s => p.push(`• [${s.tag}] ${s.title}${s.desc?': '+s.desc:''}`));
    }
    return p.join('\n');
  } catch { return ''; }
}

function buildSystemPrompt(dynCtx) {
  const kbCtx = buildKBContext();
  return `Kamu adalah Kirana, asisten virtual AI Portal Akademik & Kemahasiswaan FMIPA Universitas Tanjungpura (Untan), Pontianak.

KEPRIBADIAN: Ramah, hangat, natural. Seperti kakak tingkat yang helpful. Pakai emoji sesekali 😊. Jangan kaku atau robotic.

CARA MENJAWAB:
- Jawab natural layaknya AI asisten pintar — tidak harus selalu soal kampus
- Pertanyaan umum (hari libur, presiden, info dunia, dll) → jawab langsung dari pengetahuanmu
- Pertanyaan soal FMIPA/Untan → prioritaskan data di bawah ini
- Jangan paksa redirect ke website kalau kamu sudah tahu jawabannya
- Hanya arahkan ke website jika info memang perlu dikonfirmasi atau tidak tersedia

TOPIK SENSITIF (Politik, SARA, konten vulgar): tolak dengan santai dan ajak balik ke topik kampus.

FORMAT: Bahasa Indonesia natural, singkat & padat. Bullet point hanya jika memang perlu.

=== DATA REFERENSI FMIPA UNTAN ===
${FMIPA_STATIC_CONTEXT}
${dynCtx ? '\n' + dynCtx : ''}
${kbCtx ? '\n=== DETAIL DATA PEGAWAI & LAYANAN ===\n' + kbCtx : ''}

Ingat konteks percakapan sebelumnya. Tetap ramah dan helpful! 😊`;
}

/* ──────────────────────────────────────────────────────────────── */
function stripThink(t) {
  let result = t.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
  const openIdx = result.search(/<think>/i);
  if (openIdx !== -1) result = result.slice(0, openIdx).trim();
  return result;
}

function fmt(raw) {
  let h = raw
    .replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/\*\*([^*\n]+)\*\*/g,'<strong>$1</strong>')
    .replace(/__([^_\n]+)__/g,'<strong>$1</strong>')
    .replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g,'<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:var(--primary,#2589e9);font-weight:600;">$1</a>')
    .replace(/`([^`\n]+)`/g,
      '<code style="background:#f3f4f6;padding:1px 5px;border-radius:4px;font-size:12px;font-family:monospace;">$1</code>')
    .replace(/^[•\-\*]\s+(.+)$/gm,'<li>$1</li>')
    .replace(/^\d+\.\s+(.+)$/gm,'<li>$1</li>')
    .replace(/\n/g,'<br>');
  h = h.replace(/(<li>.*?<\/li>(<br>)?)+/g, m =>
    '<ul style="margin:5px 0 5px 17px;line-height:1.7;">' + m.replace(/<br>/g,'') + '</ul>');
  return h;
}

/* ──────────────────────────────────────────────────────────────── */
let _history   = [];
let _portalCtx = null;
let _isTyping  = false;
let _isOpen    = false;

async function getCtx() {
  if (_portalCtx === null) _portalCtx = await buildPortalDataContext();
  return _portalCtx;
}

/* ── OPEN / CLOSE ────────────────────────────────────────────── */
function openOverlay() {
  if (_isOpen) return;
  _isOpen = true;
  document.getElementById('kiranaOverlay')?.classList.add('kirana--open');
  scrollLog();
}

function closeOverlay() {
  _isOpen  = false;
  _history = [];
  document.getElementById('kiranaOverlay')?.classList.remove('kirana--open');

  const log = document.getElementById('kiranaLog');
  if (log) log.innerHTML = '';

  const chips = document.getElementById('kiranaChips');
  if (chips) chips.style.display = '';

  setTimeout(() => document.getElementById('kiranaInput')?.focus(), 200);
}

/* ── UI HELPERS ──────────────────────────────────────────────── */
function scrollLog() {
  const l = document.getElementById('kiranaLog');
  if (l) l.scrollTop = l.scrollHeight;
}

function addUserBubble(text) {
  const log = document.getElementById('kiranaLog');
  if (!log) return;
  const d = document.createElement('div');
  d.className = 'kirana-msg kirana-msg--user';
  d.innerHTML = `<div class="kirana-bubble kirana-bubble--user">${text.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>`;
  log.appendChild(d);
  scrollLog();
}

function addBotBubble() {
  const log = document.getElementById('kiranaLog');
  if (!log) return null;
  const d = document.createElement('div');
  d.className = 'kirana-msg kirana-msg--bot';
  d.innerHTML = `<img class="kirana-avatar" src="${kiranaAvatarUrl}" alt="Kirana">
    <div class="kirana-bubble kirana-bubble--bot"></div>`;
  log.appendChild(d);
  scrollLog();
  return d.querySelector('.kirana-bubble--bot');
}

function addTyping() {
  const log = document.getElementById('kiranaLog');
  if (!log) return;
  const d = document.createElement('div');
  d.className = 'kirana-msg kirana-msg--bot';
  d.id = 'kiranaTyping';
  d.innerHTML = `<img class="kirana-avatar" src="${kiranaAvatarUrl}" alt="Kirana">
    <div class="kirana-bubble kirana-bubble--bot kirana-typing"><span></span><span></span><span></span></div>`;
  log.appendChild(d);
  scrollLog();
}

function rmTyping() { document.getElementById('kiranaTyping')?.remove(); }

function setDisabled(v) {
  const i = document.getElementById('kiranaInput');
  const b = document.getElementById('kiranaSendBtn');
  if (i) i.disabled = v;
  if (b) b.disabled = v;
}

/* ── STREAM ──────────────────────────────────────────────────── */
async function streamResp(sysPrompt, msgs, bubble, onDone, onErr) {
  try {
    const res = await fetch(AI_PROXY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ systemPrompt: sysPrompt, messages: msgs })
    });
    if (!res.ok) {
      let m = `HTTP ${res.status}`;
      try { const e = await res.json(); if(e.error?.message) m = e.error.message; } catch {}
      throw new Error(m);
    }
    const reader = res.body.getReader();
    const dec    = new TextDecoder();
    let buf = '', raw = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      const lines = buf.split('\n');
      buf = lines.pop() ?? '';
      for (const ln of lines) {
        if (!ln.startsWith('data: ')) continue;
        const pay = ln.slice(6).trim();
        if (pay === '[DONE]') { onDone(raw); return; }
        try {
          const p = JSON.parse(pay);
          const d = p.choices?.[0]?.delta?.content ?? '';
          if (d) {
            raw += d;
            const clean = stripThink(raw);
            if (bubble.parentElement.style.display === 'none') {
              rmTyping();
              bubble.parentElement.style.display = '';
            }
            if (clean) {
              bubble.classList.remove('kirana-bubble--thinking');
              bubble.innerHTML = fmt(clean);
            } else {
              bubble.classList.add('kirana-bubble--thinking');
              bubble.innerHTML = '<span class="kirana-think-dots"><span></span><span></span><span></span></span>';
            }
            scrollLog();
          }
        } catch {}
      }
    }
    onDone(raw);
  } catch(e) { onErr(e.message || 'Koneksi gagal.'); }
}

/* ── SEND ────────────────────────────────────────────────────── */
async function send(text) {
  text = (text || '').trim();
  if (!text || _isTyping) return;
  _isTyping = true;

  const input = document.getElementById('kiranaInput');
  if (input) { input.value = ''; input.style.height = 'auto'; }

  openOverlay();

  const chips = document.getElementById('kiranaChips');
  if (chips) chips.style.display = 'none';

  addUserBubble(text);
  _history.push({ role:'user', content:text });
  setDisabled(true);
  addTyping();

  const ctx    = await getCtx();
  const sysPr  = buildSystemPrompt(ctx);

  const bubble = addBotBubble();
  if (!bubble) { _isTyping = false; setDisabled(false); return; }
  bubble.parentElement.style.display = 'none';

  await streamResp(sysPr, [..._history], bubble,
    (raw) => {
      _isTyping = false;
      setDisabled(false);
      rmTyping();
      bubble.parentElement.style.display = '';
      const c = stripThink(raw);
      bubble.innerHTML = c ? fmt(c) : '<em style="color:#6b7280">Tidak ada respons.</em>';
      if (c) _history.push({ role:'assistant', content:c });
      input?.focus();
    },
    (err) => {
      _isTyping = false;
      setDisabled(false);
      rmTyping();
      bubble.parentElement.style.display = '';
      bubble.innerHTML = `<div style="color:#b91c1c;display:flex;gap:7px;align-items:flex-start">
        <span>⚠️</span>
        <div><strong style="display:block;margin-bottom:2px">Gagal</strong>
        <span style="font-size:11.5px;color:#6b7280">${err}</span></div></div>`;
      input?.focus();
    }
  );
}

/* ── TYPEWRITER BUBBLE HINT ─────────────────────────────────── */
(function() {
  const MESSAGES = [
    'Hai, bingung? Tanya aku saja 😊',
    'Info wisuda, jadwal, surat? Tanya aku! 🎓',
    'Mau tau info FMIPA Untan? Yuk tanya! ✨',
    'Ada yang bisa aku bantu hari ini? 💬',
    'Cek surat, beasiswa, kontak? Aku tau! 📋',
  ];

  let msgIdx = 0, charIdx = 0, isDeleting = false, timer = null;
  let hintEl = null, textEl = null;

  const SPEED_TYPE = 55, SPEED_DELETE = 28, PAUSE_END = 2200, PAUSE_START = 600;

  function tick() {
    if (!hintEl || !textEl) return;
    const msg = MESSAGES[msgIdx];
    if (!isDeleting) {
      charIdx++;
      textEl.textContent = msg.slice(0, charIdx);
      textEl.classList.remove('done');
      if (charIdx === msg.length) {
        textEl.classList.add('done');
        timer = setTimeout(() => { isDeleting = true; textEl.classList.remove('done'); tick(); }, PAUSE_END);
        return;
      }
      timer = setTimeout(tick, SPEED_TYPE);
    } else {
      charIdx--;
      textEl.textContent = msg.slice(0, charIdx);
      if (charIdx === 0) {
        isDeleting = false;
        msgIdx = (msgIdx + 1) % MESSAGES.length;
        timer = setTimeout(tick, PAUSE_START);
        return;
      }
      timer = setTimeout(tick, SPEED_DELETE);
    }
  }

  function startHint() {
    hintEl = document.getElementById('kiranaBubbleHint');
    textEl = document.getElementById('kiranaBubbleText');
    if (!hintEl || !textEl) return;

    setTimeout(() => { hintEl.classList.add('visible'); tick(); }, 1200);

    const obs = new MutationObserver(() => {
      const overlay = document.getElementById('kiranaOverlay');
      if (!overlay) return;
      if (overlay.classList.contains('kirana--open')) {
        hintEl.classList.remove('visible');
        clearTimeout(timer);
      } else {
        hintEl.classList.add('visible');
        charIdx = 0; isDeleting = false;
        tick();
      }
    });
    const overlay = document.getElementById('kiranaOverlay');
    if (overlay) obs.observe(overlay, { attributes: true, attributeFilter: ['class'] });
  }

  document.addEventListener('DOMContentLoaded', startHint);
})();

/* ── INIT ────────────────────────────────────────────────────── */
function init() {
  const input    = document.getElementById('kiranaInput');
  const sendBtn  = document.getElementById('kiranaSendBtn');
  const closeBtn = document.getElementById('kiranaCloseBtn');
  const overlay  = document.getElementById('kiranaOverlay');
  const chips    = document.querySelectorAll('.kirana-chip');

  if (!input) return;

  sendBtn?.addEventListener('click', () => send(input.value));
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input.value); }
  });

  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 100) + 'px';
  });

  closeBtn?.addEventListener('click', closeOverlay);
  overlay?.addEventListener('click', e => { if (e.target === overlay) closeOverlay(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && _isOpen) closeOverlay(); });

  chips.forEach(c => {
    c.addEventListener('click', () => {
      const q = c.dataset.query || c.textContent.replace(/^[\p{Emoji}\s]+/u,'').trim();
      send(q);
    });
  });

  getCtx().catch(() => {});
}

document.addEventListener('DOMContentLoaded', init);
/* ─── selesai: js/kirana-search.js ─── */

/* ─── mulai: js/app.js ─── */


document.addEventListener('DOMContentLoaded', async () => {

  // Tampilkan loading sementara data diambil dari server
  [1, 2].forEach(n => {
    const t = document.getElementById('track' + n);
    if (t) t.innerHTML = `
      <div class="slide">
        <div class="slide-bg" style="background:#e8f0fd"></div>
        <div class="slide-overlay"></div>
        <div class="slide-content" style="text-align:center;width:100%;">
          <p style="color:rgba(255,255,255,.8);font-size:13px;">⏳ Memuat...</p>
        </div>
      </div>`;
  });

  try {
    // Ambil data terbaru dari GitHub via /api/save-data
    const data = await fetchPortalData();
    buildSliders(data.slides || []);
    buildNews(data.news || []);
    startAuto();

  } catch (err) {
    console.error('Gagal memuat data dari server:', err);

    // Fallback: coba dari cache localStorage jika API gagal
    try {
      const cached = localStorage.getItem('portal_v3_cache');
      if (cached) {
        const { data } = JSON.parse(cached);
        buildSliders(data.slides || []);
        buildNews(data.news || []);
        startAuto();
        console.info('Data dimuat dari cache.');
      }
    } catch (_) {
      console.warn('Cache juga tidak tersedia.');
    }
  }
});
/* ─── selesai: js/app.js ─── */

/* ─── mulai: js/layanan-popup.js ─── */
/**
 * layanan-popup.js
 * ─────────────────────────────────────────────
 * Popup daftar Google Form untuk kartu
 * "Jenis Layanan" di halaman utama
 */

const LAYANAN_DATA = [
  {
    name: "Surat Aktif Kuliah",
    desc: "Permohonan surat keterangan aktif kuliah",
    url:  "https://docs.google.com/forms/d/e/1FAIpQLSdIvl3vcqG8G-AKpRcC1DKh6Hfq8_MYGB8VuK26okxMEyZRgg/viewform"
  },
  {
    name: "Surat Keterangan Lulus",
    desc: "Permohonan SKL sebelum ijazah terbit",
    url:  "https://docs.google.com/forms/d/e/1FAIpQLSeleQzeEElYtt8PoW8tHm5wL4t6GJbDzfRjhQ6Bwn3KHtSzbg/viewform"
  },
  {
    name: "Surat Cuti Kuliah",
    desc: "Pengajuan cuti semester aktif",
    url:  "https://docs.google.com/forms/d/e/1FAIpQLSfcv_u0UlgJgJ_PuKC_ELfI5UUwLufISUdXlNl37VD_NMSAOg/viewform"
  },
  {
    name: "Surat Pengunduran Diri",
    desc: "Permohonan pengunduran diri mahasiswa",
    url:  "https://docs.google.com/forms/d/e/1FAIpQLSfzD_poqcDT_U3d_vmsZOPFXewTzubYSZyNY7FpyObYL7FKGA/viewform"
  },
  {
    name: "Surat Pindah Kuliah",
    desc: "Pengajuan pindah ke perguruan tinggi lain",
    url:  "https://docs.google.com/forms/d/e/1FAIpQLSeoHxHVHXY86d_acF92oZfyxzsQxoPrppB1z5bFfE3oRRKqMw/viewform"
  },
  {
    name: "Surat Pengembalian Dana",
    desc: "Permohonan surat pengembalian dana pendidikan",
    url:  "https://docs.google.com/forms/d/e/1FAIpQLSeev6qHtma1S3mRIbgzBHgqEtqnlLw5rW3t13z9Mk4H03RVeg/viewform"
  },
  {
    name: "Pernyataan Terbit Artikel Mahasiswa",
    desc: "Surat Pernyataan Pembimbing Terhadap Artikel Mahasiswa yang belum berstatus terbit",
    url:  "https://docs.google.com/forms/d/e/1FAIpQLSdiZVbf77fVqu8yYe1D_grYFDNF-mIl26n6KYKvuMdOS-0YJw/viewform"
  }
  
];

/* Warna badge nomor — berulang sesuai jumlah item */
const BADGE_COLORS = [
  { bg: "#e8f0fd", text: "#1a4f8a" },
  { bg: "#e6f7f0", text: "#0f6e56" },
  { bg: "#fef3e2", text: "#854f0b" },
  { bg: "#fce8f3", text: "#993556" },
  { bg: "#eeedfe", text: "#3c3489" },
  { bg: "#fcebeb", text: "#791f1f" },
  { bg: "#eaf3de", text: "#27500a" },
  { bg: "#f1efe8", text: "#444441" }
];

/* ── Render list item ── */
function renderLayananList(list) {
  const container = document.getElementById("lp-list");
  if (!list.length) {
    container.innerHTML = `<div class="lp-empty">Layanan tidak ditemukan</div>`;
    document.getElementById("lp-count").textContent = "0 layanan";
    return;
  }
  document.getElementById("lp-count").textContent = list.length + " layanan tersedia";
  container.innerHTML = list.map((item, i) => {
    const color = BADGE_COLORS[i % BADGE_COLORS.length];
    return `
      <a class="lp-item" href="${item.url}" target="_blank" rel="noopener">
        <div class="lp-num" style="background:${color.bg};color:${color.text}">
          ${String(i + 1).padStart(2, "0")}
        </div>
        <div class="lp-info">
          <div class="lp-name">${item.name}</div>
          <div class="lp-desc">${item.desc}</div>
        </div>
        <svg class="lp-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>`;
  }).join("");
}

/* ── Filter pencarian ── */
function lpFilter(q) {
  const result = LAYANAN_DATA.filter(item =>
    item.name.toLowerCase().includes(q.toLowerCase()) ||
    item.desc.toLowerCase().includes(q.toLowerCase())
  );
  renderLayananList(result);
}

/* ── Buka modal ── */
function openLayananPopup() {
  renderLayananList(LAYANAN_DATA);
  document.getElementById("lp-search").value = "";
  document.getElementById("lp-overlay").classList.add("lp-open");
  setTimeout(() => document.getElementById("lp-search").focus(), 200);
}

/* ── Tutup modal ── */
function closeLayananPopup() {
  document.getElementById("lp-overlay").classList.remove("lp-open");
}

/* ── Event listeners ── */
document.addEventListener("DOMContentLoaded", () => {
  /* Klik kartu "Jenis Layanan" → buka popup */
  document.getElementById("btn-jenis-layanan")?.addEventListener("click", openLayananPopup);

  /* Klik overlay (luar modal) → tutup */
  document.getElementById("lp-overlay")?.addEventListener("click", e => {
    if (e.target.id === "lp-overlay") closeLayananPopup();
  });

  /* Escape → tutup */
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeLayananPopup();
  });
});
/* ─── selesai: js/layanan-popup.js ─── */

/* ─── mulai: js/info-download-popup.js ─── */

const INFO_PENTING_DATA = [
  {
    name: "Pedoman Akademik",
    desc: "Panduan akademik resmi FMIPA Untan",
    type: "pdf",
    url:  "https://drive.google.com/uc?export=download&id=14HAQ4UAs_QiSS4Zg0e2M3q1CsHX7zGbX"
  },
  {
    name: "Kalender Akademik",
    desc: "Jadwal kegiatan akademik tahun berjalan",
    type: "pdf",
    url:  "https://drive.google.com/uc?export=download&id=1iCfmCHktV68lQ2HEw2C1qkhbFnbB5E71"
  },
  {
    name: "Kode Etik Untan",
    desc: "Ketentuan etika mahasiswa dan sivitas akademika",
    type: "pdf",
    url:  "https://drive.google.com/uc?export=download&id=1c093F5EznNhtH_48ZbrsTDRILkvxVBnM"
  },
  {
    name: "Edaran PISN",
    desc: "Surat edaran terkait PISN",
    type: "pdf",
    url:  "https://drive.google.com/uc?export=download&id=1iE5rlnfnTdvad4svmKDW1QyZXXh7JRkD"
  },
  {
    name: "Perbaikan Data PDDIKTI",
    desc: "Prosedur perbaikan data PDDIKTI mahasiswa",
    type: "pdf",
    url:  "https://drive.google.com/uc?export=download&id=10G0cmbmU1_Fjn3m1SRmLUIzJ3VEdRjK4"
  },
  {
    name: "Prosedur Pengajuan Cuti",
    desc: "Tata cara pengajuan cuti kuliah",
    type: "pdf",
    url:  "https://drive.google.com/uc?export=download&id=1fV2sJh5zzpKd65WZ5_2XY2woL0shd-GH"
  }
];

const DOWNLOAD_DATA = [
  {
    name: "Akreditasi UNTAN",
    desc: "Dokumen status akreditasi institusi",
    type: "pdf",
    url:  "https://drive.google.com/uc?export=download&id=1mNeuaIv-AsfNzMgqRului4uO5otE6Vbg"
  },
  {
    name: "Draft Syarat Sidang",
    desc: "Template dokumen syarat sidang",
    type: "link",
    url:  "https://docs.google.com/document/d/1QQFK0vpB2VYwZN9XRjxiJWRfck6HUCTu/edit"
  },
  {
    name: "Draft Bebas Laboratorium",
    desc: "Template surat bebas laboratorium",
    type: "link",
    url:  "https://docs.google.com/document/d/10O5ifI5A3WheOjYs9ZWEKtOAe9NsoB7r/edit"
  }
];

/* Warna badge nomor — sama seperti di layanan-popup.js */
const IDP_BADGE_COLORS = [
  { bg: "#e8f0fd", text: "#1a4f8a" },
  { bg: "#e6f7f0", text: "#0f6e56" },
  { bg: "#fef3e2", text: "#854f0b" },
  { bg: "#fce8f3", text: "#993556" },
  { bg: "#eeedfe", text: "#3c3489" },
  { bg: "#fcebeb", text: "#791f1f" },
  { bg: "#eaf3de", text: "#27500a" },
  { bg: "#f1efe8", text: "#444441" }
];

/* ── Render list (dipakai untuk kedua modal, dibedakan lewat prefix) ── */
function idpRenderList(prefix, list) {
  const container = document.getElementById(prefix + "-list");
  const countEl   = document.getElementById(prefix + "-count");
  if (!container) return;

  if (!list.length) {
    container.innerHTML = `<div class="lp-empty">Tidak ditemukan</div>`;
    if (countEl) countEl.textContent = "0 dokumen";
    return;
  }

  if (countEl) countEl.textContent = list.length + " dokumen";

  container.innerHTML = list.map((item, i) => {
    const color = IDP_BADGE_COLORS[i % IDP_BADGE_COLORS.length];
    const isLink = item.type === "link";
    return `
      <a class="lp-item" href="${isLink ? item.url : "javascript:void(0)"}"
         ${isLink ? 'target="_blank" rel="noopener"' : ""}>
        <div class="lp-num" style="background:${color.bg};color:${color.text}">
          ${String(i + 1).padStart(2, "0")}
        </div>
        <div class="lp-info">
          <div class="lp-name">${item.name}</div>
          <div class="lp-desc">${item.desc}</div>
        </div>
        <svg class="lp-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>`;
  }).join("");

  /* Item bertipe "pdf" dibuka lewat popup PDF utama, bukan tab baru */
  container.querySelectorAll(".lp-item").forEach((el, i) => {
    const item = list[i];
    if (item.type === "pdf") {
      el.addEventListener("click", e => {
        e.preventDefault();
        if (typeof openPopup === "function") {
          openPopup({ popupType: "pdf", popupUrl: item.url, title: item.name });
        }
      });
    }
  });
}

/* ── Filter pencarian (dipakai kedua modal) ── */
function idpFilter(prefix, dataArr, q) {
  const result = dataArr.filter(item =>
    item.name.toLowerCase().includes(q.toLowerCase()) ||
    item.desc.toLowerCase().includes(q.toLowerCase())
  );
  idpRenderList(prefix, result);
}

/* ── Buka / tutup modal Info Penting ── */
function openInfoPentingPopup() {
  idpRenderList("ip", INFO_PENTING_DATA);
  const search = document.getElementById("ip-search");
  if (search) search.value = "";
  document.getElementById("ip-overlay")?.classList.add("lp-open");
  setTimeout(() => search?.focus(), 200);
}
function closeInfoPentingPopup() {
  document.getElementById("ip-overlay")?.classList.remove("lp-open");
}

/* ── Buka / tutup modal Download ── */
function openDownloadPopup() {
  idpRenderList("dl", DOWNLOAD_DATA);
  const search = document.getElementById("dl-search");
  if (search) search.value = "";
  document.getElementById("dl-overlay")?.classList.add("lp-open");
  setTimeout(() => search?.focus(), 200);
}
function closeDownloadPopup() {
  document.getElementById("dl-overlay")?.classList.remove("lp-open");
}

/* ── Event listeners ── */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-info-penting")?.addEventListener("click", openInfoPentingPopup);
  document.getElementById("btn-download")?.addEventListener("click", openDownloadPopup);

  document.getElementById("ip-overlay")?.addEventListener("click", e => {
    if (e.target.id === "ip-overlay") closeInfoPentingPopup();
  });
  document.getElementById("dl-overlay")?.addEventListener("click", e => {
    if (e.target.id === "dl-overlay") closeDownloadPopup();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeInfoPentingPopup();
      closeDownloadPopup();
    }
  });
});
/* ─── selesai: js/info-download-popup.js ─── */

/* ─── mulai: js/stats.js ─── */
/**
 * stats.js — Visitor Counter Frontend
 * - Increment counter saat pertama kali buka (per sesi)
 * - Tampilkan statistik real time
 * - Animasi angka naik
 */

const VISITOR_SESSION_KEY = 'fmipa_visited';

// ── Animasi angka naik ────────────────────────────────
function animateCount(el, target, duration = 1200) {
  const start     = parseInt(el.textContent.replace(/\D/g, '')) || 0;
  const range     = target - start;
  const startTime = performance.now();

  function update(now) {
    const elapsed  = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Easing: ease out cubic
    const eased    = 1 - Math.pow(1 - progress, 3);
    const current  = Math.round(start + range * eased);
    el.textContent = current.toLocaleString('id-ID');
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ── Update tampilan statistik ─────────────────────────
function updateVisitorUI(data) {
  const map = {
    'stat-alltime':   data.alltime   || 0,
    'stat-today':     data.today     || 0,
    'stat-week':      data.thisWeek  || 0,
    'stat-month':     data.thisMonth || 0,
  };
  Object.entries(map).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) animateCount(el, val);
  });
}

// ── Init: increment + tampilkan ───────────────────────
async function initVisitorStats() {
  try {
    let data;
    const alreadyVisited = sessionStorage.getItem(VISITOR_SESSION_KEY);

    if (!alreadyVisited) {
      // Increment counter — satu kali per sesi browser
      const res  = await fetch('/api/visitor', { method: 'POST' });
      data = await res.json();
      sessionStorage.setItem(VISITOR_SESSION_KEY, '1');
    } else {
      // Sudah pernah kunjungi di sesi ini — hanya baca saja
      const res = await fetch('/api/visitor');
      data = await res.json();
    }

    updateVisitorUI(data);
  } catch (err) {
    console.warn('Visitor stats tidak tersedia:', err.message);
  }
}

// Jalankan setelah DOM siap
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVisitorStats);
} else {
  initVisitorStats();
}
/* ─── selesai: js/stats.js ─── */
