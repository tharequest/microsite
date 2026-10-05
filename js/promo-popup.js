/* ═══ POPUP PROMO / PENGUMUMAN GAMBAR ═══
   Muncul setiap kali halaman dimuat / di-reload.
   Ganti gambar: ubah PROMO_IMG_SRC (disarankan file lokal, mis. 'assets/images/juara-asean-cup.jpg').
   Matikan popup: ubah PROMO_ENABLED jadi false.
*/
(function () {
  'use strict';

  var PROMO_ENABLED = true;
  var PROMO_IMG_SRC = 'https://pbs.twimg.com/media/HT4aRifWMAAwk-y?format=jpg&name=large';
  var PROMO_IMG_ALT = 'Indonesia juara FIFA ASEAN Cup 2026';

  if (!PROMO_ENABLED) return;

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
      // paksa reflow supaya transisi jalan
      void overlay.offsetWidth;
      overlay.classList.add('show');
      document.addEventListener('keydown', onKey);
      btn.focus();
    }

    btn.addEventListener('click', close);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });

    // Tampilkan hanya setelah gambar berhasil dimuat (tidak ada popup kosong kalau gagal)
    img.onload = open;
    img.onerror = function () { /* gambar gagal dimuat → jangan tampilkan popup */ };
    img.src = PROMO_IMG_SRC;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
