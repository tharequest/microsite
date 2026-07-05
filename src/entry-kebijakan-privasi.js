/* ═══ AUTO-GENERATED — gabungan CSS+JS untuk kebijakan-privasi.html ═══ */
/* Jangan diedit manual di sini — edit file asli di css/ atau js/, lalu jalankan `npm run build` lagi. */

import '../css/base.css';
import '../css/animations.css';
import '../css/header.css';
import '../css/footer.css';
import '../css/kontak.css';
import '../css/popup.css';
import '../css/layanan-popup.css';

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
