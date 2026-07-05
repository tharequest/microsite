/* ═══ AUTO-GENERATED — gabungan CSS+JS untuk ceksurat.html ═══ */
/* Jangan diedit manual di sini — edit file asli di css/ atau js/, lalu jalankan `npm run build` lagi. */

import '../css/base.css';
import '../css/animations.css';
import '../css/header.css';
import '../css/footer.css';
import '../css/kontak.css';
import '../css/popup.css';
import '../css/layanan-popup.css';
import '../css/ceksurat.css';
import '../css/cara-cek-surat.css';

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

/* ─── mulai: js/cara-cek-surat.js ─── */

const CC_DATA = {
  akademik: {
    title: "Surat Akademik",
    subtitle: "Aktif Kuliah, SKL, Cuti, Pindah, Pengunduran Diri",
    steps: [
      "Masukkan <strong>Nama</strong> atau <strong>NIM Mahasiswa</strong> pada kolom pencarian.",
      "Klik tombol <strong>Cari</strong>.",
      "Jika data ditemukan, klik <strong>Lihat File</strong> untuk download langsung, atau scan QR Code yang muncul.",
      "Jika surat tidak ditemukan / data belum tersedia, hubungi bagian terkait di bawah ini."
    ],
    contactNote: "Surat tidak ditemukan? Hubungi:",
    contacts: [
      { label: "Surat Aktif Kuliah", name: "Agung" },
      { label: "Surat Keterangan Lulus (SKL)", name: "Onny" },
      { label: "Surat Cuti / Pindah / Pengunduran Diri", name: "Ana" }
    ]
  },
  kegiatan: {
    title: "Surat Izin Kegiatan",
    subtitle: "Untuk kegiatan Himpunan Mahasiswa",
    steps: [
      "Pilih jenis surat <strong>Surat Izin Kegiatan</strong>.",
      "Pilih <strong>Himpunan</strong> kamu pada dropdown yang muncul.",
      "Klik tombol <strong>Cari</strong>.",
      "Jika data ditemukan, pilih kegiatan yang dimaksud, lalu klik <strong>Lihat File</strong> untuk download.",
      "Jika data surat tidak ditemukan, hubungi admin yang membuat surat izin kegiatan di bawah ini."
    ],
    contactNote: "Surat tidak ditemukan? Hubungi admin yang membuat surat izin kegiatan:",
    contacts: [
      { label: "MSI, HIMATIKA, HIMASTA, HIMAFIS, HIMABIO, HMG, KOMIK, Art Laboratory", name: "Thareq" },
      { label: "HIMASTER, HMIK, HMSI, BEM, DPM, FIKRI, IMASIKA, HIMKI", name: "Onny" }
    ]
  }
};

const CC_WA_SVG = `
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 2.9C8.8 2.9 3 8.7 3 15.9c0 2.3.6 4.5 1.8 6.5L3 29.1l6.9-1.8
           c1.9 1 4 1.6 6.1 1.6 7.2 0 13-5.8 13-13S23.2 2.9 16 2.9zm6.4 18.1
           c-.3.8-1.5 1.5-2.1 1.6-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6
           -3-1.3-4.9-4.3-5.1-4.5-.2-.2-1.3-1.7-1.3-3.2s.8-2.3 1.1-2.6
           c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.5.8 2 .9 2.1.1.2.1.4 0 .6
           -.1.2-.2.3-.3.5-.1.2-.3.4-.4.5-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1
           c1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.7-.1
           .3.1 1.8.9 2.1 1 .3.2.5.3.6.4.1.3.1 1-.2 1.7z"/>
</svg>`;

/* ── Cari nomor WA dari KONTAK_DATA (kontak.js) berdasarkan nama ── */
function ccFindWaUrl(name) {
  if (typeof KONTAK_DATA === "undefined" || typeof ktBuildWaUrl !== "function") return null;
  const person = KONTAK_DATA.find(p =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );
  return person ? ktBuildWaUrl(person.phone) : null;
}

/* ── Render satu blok kategori ── */
function ccRenderSection(data) {
  const stepsHtml = data.steps.map((step, i) => `
    <li>
      <span class="cc-step-num">${i + 1}</span>
      <span>${step}</span>
    </li>`).join("");

  const contactsHtml = data.contacts.map(c => {
    const waUrl = ccFindWaUrl(c.name);
    const btn = waUrl
      ? `<a class="cc-contact-wa" href="${waUrl}" target="_blank" rel="noopener">${CC_WA_SVG}Chat</a>`
      : `<a class="cc-contact-wa" href="javascript:void(0)" onclick="openKontakPopup()">${CC_WA_SVG}Kontak</a>`;
    return `
      <div class="cc-contact-item">
        <div class="cc-contact-label">${c.label}</div>
        ${btn}
      </div>`;
  }).join("");

  return `
    <div class="cc-section">
      <div class="cc-section-title">📄 ${data.title}</div>
      <div class="cc-section-sub">${data.subtitle}</div>
      <ol class="cc-steps">${stepsHtml}</ol>
      <div class="cc-contact-note">${data.contactNote}</div>
      <div class="cc-contact-list">${contactsHtml}</div>
    </div>`;
}

/* ── Render seluruh isi modal ── */
function ccRenderBody() {
  const body = document.getElementById("cc-body");
  if (!body) return;
  body.innerHTML = ccRenderSection(CC_DATA.akademik) + ccRenderSection(CC_DATA.kegiatan);
}

/* ── Buka / tutup modal ── */
function openCaraCekPopup() {
  ccRenderBody();
  document.getElementById("cc-overlay")?.classList.add("cc-open");
}
function closeCaraCekPopup() {
  document.getElementById("cc-overlay")?.classList.remove("cc-open");
}

/* ── Event listeners ── */
document.addEventListener("DOMContentLoaded", () => {
  /* Auto-buka setiap kali halaman ceksurat.html dibuka */
  openCaraCekPopup();

  /* Tombol "?" mengambang → buka ulang panduan */
  document.getElementById("cc-help-fab")?.addEventListener("click", openCaraCekPopup);

  /* Tombol X & tombol "Mengerti" → tutup */
  document.getElementById("cc-close-btn")?.addEventListener("click", closeCaraCekPopup);
  document.getElementById("cc-footer-close-btn")?.addEventListener("click", closeCaraCekPopup);

  /* Klik overlay (luar modal) → tutup */
  document.getElementById("cc-overlay")?.addEventListener("click", e => {
    if (e.target.id === "cc-overlay") closeCaraCekPopup();
  });

  /* Escape → tutup */
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeCaraCekPopup();
  });
});
/* ─── selesai: js/cara-cek-surat.js ─── */

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

/* ─── mulai: js/ceksurat.js ─── */
const SCRAMBLE_CHARS = "█▓▒░#@$%&*+=?ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SCRAMBLE_DELAY = 2000;

/**
 * Format tanggal dari berbagai format ke bahasa Indonesia
 * Handles: ISO string, "Sabtu, 9 Mei 2026", dll
 */
function formatTanggal(val) {
  if (!val) return "–";
  // Sudah dalam format Indonesia
  if (/[A-Za-z]/.test(val) && !val.includes("T")) return val;
  // ISO date string dari Google Sheets
  try {
    const d = new Date(val);
    if (isNaN(d.getTime())) return val;
    return d.toLocaleDateString("id-ID", {
      weekday: "long", day: "numeric", month: "long", year: "numeric"
    });
  } catch { return val; }
}

/**
 * Efek teks scramble / decode pada elemen
 * @param {HTMLElement} element  - elemen target
 * @param {string}      finalText - teks akhir yang dituju
 * @param {string}      colorFinal    - warna saat sudah terdecode
 * @param {string}      colorScramble - warna saat masih scramble
 */
function createScramble(element, finalText, colorFinal = "#1a4f8a", colorScramble = "#c5c7cc") {
  let iteration  = 0;
  let frameId;
  let isDecoding = false;

  function tick() {
    element.textContent = finalText.split("").map((char, i) => {
      if (char === " ") return " ";
      if (i < iteration) return finalText[i];
      return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
    }).join("");

    element.style.color = isDecoding ? colorFinal : colorScramble;

    if (iteration <= finalText.length) {
      iteration += 0.5;
      frameId = requestAnimationFrame(tick);
    } else {
      cancelAnimationFrame(frameId);
      isDecoding = !isDecoding;
      setTimeout(() => {
        iteration = 0;
        frameId = requestAnimationFrame(tick);
      }, SCRAMBLE_DELAY);
    }
  }

  requestAnimationFrame(tick);
}

/* ══════════════════════════════════════════════
   BAGIAN 2 — CARD 3D TILT
   ══════════════════════════════════════════════ */

function initCardTilt() {
  const card      = document.getElementById("tilt-card");
  const container = document.querySelector(".cs-card-container");
  if (!card || !container) return;

  container.addEventListener("mousemove", (e) => {
    const rect  = card.getBoundingClientRect();
    const xNorm = ((e.clientX - rect.left)  / rect.width)  * 2 - 1;
    const yNorm = ((e.clientY - rect.top)   / rect.height) * 2 - 1;
    const MAX   = 6;
    card.style.transform = `rotateX(${-yNorm*MAX}deg) rotateY(${xNorm*MAX}deg) translateZ(12px)`;
  });

  container.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0px)";
  });
}

/* ══════════════════════════════════════════════
   BAGIAN 3 — FETCH API GOOGLE SHEET
   Ganti API_URL dengan endpoint Apps Script kamu
   ══════════════════════════════════════════════ */

const API_URL = "https://script.google.com/macros/s/AKfycbx_fgFroV_E7VtVpkgm1HjSAmy9pPc-HxNia8TGev9-mVLjVjOo8pzh8YX0lmu7LRRU5Q/exec";

async function cariSurat() {
  const inputEl      = document.getElementById("searchInput");
  const himpunanEl   = document.getElementById("himpunanSelect");
  const selectEl     = document.getElementById("jenisSurat");
  const hasilEl      = document.getElementById("hasil");

  const jenisSurat   = selectEl.value.trim();
  const isKegiatan   = jenisSurat === "izin_kegiatan";

  // Ambil keyword dari field yang aktif
  const keyword = isKegiatan
    ? himpunanEl.value.trim()
    : inputEl.value.trim();

  // Reset error
  inputEl.classList.remove("error");
  himpunanEl.classList.remove("error");

  if (!keyword) {
    if (isKegiatan) {
      himpunanEl.classList.add("error");
      hasilEl.innerHTML = `<div class="cs-error-msg">⚠️ Pilih nama Himpunan terlebih dahulu.</div>`;
    } else {
      inputEl.classList.add("error");
      hasilEl.innerHTML = `<div class="cs-error-msg">⚠️ Masukkan Nama atau NIM terlebih dahulu.</div>`;
      inputEl.focus();
    }
    return;
  }

  if (!jenisSurat) {
    hasilEl.innerHTML = `<div class="cs-error-msg">⚠️ Pilih jenis surat terlebih dahulu.</div>`;
    return;
  }

  hasilEl.innerHTML = `<div class="cs-loading">Memuat data...</div>`;

  try {
    const url = `${API_URL}?nama=${encodeURIComponent(keyword)}&jenis=${encodeURIComponent(jenisSurat)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    if (!data || data.length === 0) {
      // ── Pesan kontak per jenis surat ──
      const kontakMap = {
        ket_lulus:     "Mohon hubungi <strong>Onny</strong> di Menu <strong>Kontak</strong> terkait Surat Keterangan Lulus.",
        aktif_kuliah:  "Mohon hubungi <strong>Agung</strong> di Menu <strong>Kontak</strong> terkait Surat Aktif Kuliah.",
        cuti_kuliah:   "Mohon hubungi <strong>Bu Ana</strong> di Menu <strong>Kontak</strong> terkait surat ini.",
        undur_diri:    "Mohon hubungi <strong>Bu Ana</strong> di Menu <strong>Kontak</strong> terkait surat ini.",
        pindah_kuliah: "Mohon hubungi <strong>Bu Ana</strong> di Menu <strong>Kontak</strong> terkait surat ini.",
      };

      // ── Khusus izin_kegiatan: per himpunan ──
      const thareqList = ["HIMATIKA","HIMABIO","HIMAFIS","HMG","HIMASTA","KOMIK","ART LABORATORY","MSI"];
      const onnyList   = ["HIMASTER","HIMKI","HMIK","HMSI","FIKRI","IMASIKA","BEM","DPM"];

      let kontakMsg = kontakMap[jenisSurat] || "";
      // izin_kegiatan: tidak tampilkan pesan kontak di sini
      // karena kotak kontak sudah tampil di atas hasil pencarian
      if (jenisSurat === "izin_kegiatan") kontakMsg = "";

      hasilEl.innerHTML = `
        <div class="cs-no-result">
          ❌ Data tidak ditemukan untuk "<strong>${keyword}</strong>".
          ${kontakMsg ? `<br><span class="cs-no-result-kontak">${kontakMsg}</span>` : ""}
        </div>`;
      return;
    }

    renderHasil(data, jenisSurat);

  } catch (err) {
    console.error("Fetch error:", err);
    hasilEl.innerHTML = `<div class="cs-error-msg">⚠️ Server tidak merespons. Coba beberapa saat lagi.</div>`;
  }
}

// Enter key juga bisa cari
document.addEventListener("DOMContentLoaded", () => {
  const jenisSuratEl  = document.getElementById("jenisSurat");
  const searchInputEl = document.getElementById("searchInput");
  const himpunanEl    = document.getElementById("himpunanSelect");
  const subEl         = document.getElementById("searchSub");

  const DEFAULT_SUB    = "Masukkan nama atau NIM dan pilih jenis surat";
  const KEGIATAN_SUB   = "Pilih nama Himpunan dan klik Cari";

  // Enter pada text input
  searchInputEl?.addEventListener("keydown", e => {
    if (e.key === "Enter") cariSurat();
  });

  const THAREQ_LIST = ["HIMATIKA","HIMABIO","HIMAFIS","HMG","HIMASTA","KOMIK","ART LABORATORY","MSI"];
  const ONNY_LIST   = ["HIMASTER","HIMKI","HMIK","HMSI","FIKRI","IMASIKA","BEM","DPM"];

  function getPic(himpunanValue) {
    // value dari option langsung dipakai (sudah singkatan/nama bersih)
    const val = himpunanValue.trim().toUpperCase();
    if (THAREQ_LIST.includes(val)) return "Thareq";
    if (ONNY_LIST.includes(val))   return "Onny";
    return "Thareq / Onny";
  }

  function updateKontakCard() {
    const kontakBox  = document.getElementById("kontakKegiatan");
    const kontakText = document.getElementById("kontakKegiatanText");
    if (!kontakBox || !kontakText) return;

    if (jenisSuratEl.value !== "izin_kegiatan") {
      kontakBox.style.display = "none";
      return;
    }

    const pic         = himpunanEl.value ? getPic(himpunanEl.value) : "Thareq / Onny";
    const namaDisplay = himpunanEl.value
      ? `<strong>${himpunanEl.options[himpunanEl.selectedIndex]?.text.split(/[–-]/)[0].trim()}</strong>`
      : "himpunan";

    kontakText.innerHTML = `Jika surat izin kegiatan ${namaDisplay} belum terdaftar atau butuh konfirmasi, hubungi <strong>${pic}</strong> di Menu <strong>Kontak</strong>.`;
    kontakBox.style.display = "";
  }

  // Ganti tampilan field sesuai jenis surat
  jenisSuratEl?.addEventListener("change", () => {
    const val = jenisSuratEl.value;

    if (val === "izin_kegiatan") {
      searchInputEl.style.display = "none";
      himpunanEl.style.display    = "";
      himpunanEl.selectedIndex    = 0;
      if (subEl) subEl.style.display = "none";
    } else {
      searchInputEl.style.display = "";
      himpunanEl.style.display    = "none";
      if (subEl) subEl.style.display = "";
    }

    updateKontakCard();

    const placeholder = jenisSuratEl.querySelector('option[value=""]');
    if (placeholder) placeholder.remove();
  });

  // Update kontak card saat himpunan dipilih
  himpunanEl?.addEventListener("change", updateKontakCard);

  // QR modal tutup saat klik overlay
  document.getElementById("qrModal")?.addEventListener("click", e => {
    if (e.target.id === "qrModal") closeQR();
  });

  // Scramble effect
  const el1 = document.getElementById("linesurat");
  const el2 = document.getElementById("linesurat2");
  if (el1) createScramble(el1, "Cek Status",     "#1a4f8a", "#c5c7cc");
  if (el2) createScramble(el2, "Surat Mahasiswa", "#e8a020", "#c5c7cc");

  // 3D tilt card
  initCardTilt();
});

/* ══════════════════════════════════════════════
   BAGIAN 4 — RENDER TABEL HASIL
   ══════════════════════════════════════════════ */

function renderHasil(data, jenisSurat) {
  const hasilEl    = document.getElementById("hasil");
  const isKegiatan = jenisSurat === "izin_kegiatan";

  if (isKegiatan) {
    let rows = data.map(row => {
      const fileUrl = row.link || row.lihat_surat || row.file || "";
      return `
        <tr>
          <td>${row.nama_himpunan || row.nama || "–"}</td>
          <td>${formatTanggal(row.hari_tanggal)}</td>
          <td>${row.tempat || "–"}</td>
          <td>
            <button class="cs-file-btn" onclick="openQR('${fileUrl}')">
              📄 Lihat File
            </button>
          </td>
        </tr>`;
    }).join("");

    hasilEl.innerHTML = `
      <table class="cs-table">
        <thead>
          <tr>
            <th>Nama Himpunan</th>
            <th>Hari/Tanggal</th>
            <th>Tempat</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>`;
  } else {
    let rows = data.map(row => `
      <tr>
        <td>${row.nama  || "–"}</td>
        <td>${row.nim   || "–"}</td>
        <td>${row.surat || "–"}</td>
        <td>
          <button class="cs-file-btn" onclick="openQR('${row.file || ""}')">
            📄 Lihat File
          </button>
        </td>
      </tr>`).join("");

    hasilEl.innerHTML = `
      <table class="cs-table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>NIM</th>
            <th>Jenis Surat</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>`;
  }
}

/* ══════════════════════════════════════════════
   BAGIAN 5 — QR CODE MODAL
   ══════════════════════════════════════════════ */

/**
 * Ekstrak Google Drive File ID dari berbagai format URL
 */
function extractFileId(url) {
  if (!url) return null;
  let m = url.match(/\/d\/([a-zA-Z0-9_-]{10,})/);
  if (m) return m[1];
  m = url.match(/id=([a-zA-Z0-9_-]{10,})/);
  if (m) return m[1];
  return null;
}

/**
 * Buka modal QR code untuk file Google Drive
 * @param {string} fileUrl - URL Google Drive
 */
function openQR(fileUrl) {
  if (!fileUrl) {
    alert("File belum tersedia.");
    return;
  }

  const fileId = extractFileId(fileUrl);
  if (!fileId) {
    alert("Format URL file tidak valid.");
    return;
  }

  const previewURL = `https://drive.google.com/uc?id=${fileId}&export=view`;
  const downloadURL = `https://drive.google.com/uc?id=${fileId}&export=download`;

  // Coba Google Charts QR, fallback ke qrserver
  const qrImg = document.getElementById("qrImage");
  qrImg.src   = `https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=${encodeURIComponent(previewURL)}`;
  qrImg.onerror = () => {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(previewURL)}`;
    qrImg.onerror = null;
  };

  // Set href tombol download
  const dlBtn = document.getElementById("qrDownloadBtn");
  if (dlBtn) dlBtn.href = downloadURL;

  // Tampilkan modal
  const modal = document.getElementById("qrModal");
  modal.style.display = "flex";
  modal.classList.add("open");
}

/**
 * Tutup modal QR
 */
function closeQR() {
  const modal = document.getElementById("qrModal");
  modal.style.display = "none";
  modal.classList.remove("open");
  document.getElementById("qrImage").src = "";
}

// Klik overlay tutup modal
/* ─── selesai: js/ceksurat.js ─── */
