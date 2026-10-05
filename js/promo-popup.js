/* ═══ POPUP PROMO / PENGUMUMAN GAMBAR ═══
   Muncul setiap kali halaman dimuat / di-reload.
   Ganti gambar : ubah PROMO_IMG_SRC
   Ganti teks   : ubah PROMO_LEFT / PROMO_RIGHT (set null untuk menghilangkan)
   Matikan popup: ubah PROMO_ENABLED jadi false
*/
(function () {
  'use strict';

  var PROMO_ENABLED = true;
  var PROMO_IMG_SRC = '/assets/images/juara-asean-cup.jpg';
  var PROMO_IMG_ALT = 'Indonesia juara FIFA ASEAN Cup 2026';

  // Teks di sisi kiri & kanan gambar (di atas latar gelap)
  var PROMO_LEFT  = { text: 'KING', emoji: '\uD83D\uDC51' };  // 👑
  var PROMO_RIGHT = { text: 'INDO', emoji: '\uD83D\uDD25' };  // 🔥

  if (!PROMO_ENABLED) return;

  function makeSide(cls, cfg) {
    if (!cfg) return null;
    var el = document.createElement('div');
    el.className = 'ac-promo-side ' + cls;
    el.setAttribute('aria-hidden', 'true');

    var t = document.createElement('span');
    t.className = 'ac-promo-text';
    t.textContent = cfg.text;

    var e = document.createElement('span');
    e.className = 'ac-promo-emoji';
    e.textContent = cfg.emoji;

    el.appendChild(t);
    el.appendChild(e);
    return el;
  }

  function init() {
    var overlay = document.createElement('div');
    overlay.className = 'ac-promo-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', PROMO_IMG_ALT);

    var box = document.createElement('div');
    box.className = 'ac-promo-box';

    var img = document.createElement('img');
    img.className = 'ac-promo-img';
    img.alt = PROMO_IMG_ALT;
    img.decoding = 'async';
    img.referrerPolicy = 'no-referrer';

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'ac-promo-close';
    btn.setAttribute('aria-label', 'Tutup');
    btn.innerHTML = '&#10005;';

    box.appendChild(img);
    var left = makeSide('left', PROMO_LEFT);
    var right = makeSide('right', PROMO_RIGHT);
    if (left) box.appendChild(left);
    if (right) box.appendChild(right);
    box.appendChild(btn);
    overlay.appendChild(box);

    var prevOverflow = '';

    function close() {
      overlay.classList.remove('show');
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
      setTimeout(function () {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }, 350);
    }

    function onKey(e) {
      if (e.key === 'Escape') close();
    }

    function open() {
      document.body.appendChild(overlay);
      prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      void overlay.offsetWidth; // paksa reflow supaya transisi jalan
      overlay.classList.add('show');
      document.addEventListener('keydown', onKey);
      btn.focus();
    }

    btn.addEventListener('click', close);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });

    // Tampilkan hanya setelah gambar berhasil dimuat
    img.onload = open;
    img.onerror = function () {
      console.warn('[promo-popup] gambar gagal dimuat:', PROMO_IMG_SRC);
    };
    img.src = PROMO_IMG_SRC;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
