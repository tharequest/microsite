/**
 * theme.js — Tema Kemerdekaan 🇮🇩 (merah-putih)
 * Baca settings.merdekaColorTheme dari /api/save-data (settings yang sama
 * dipakai fitur "Tema 17 Agustus" lain), lalu set atribut
 * [data-theme="merdeka"] di <html> supaya var(--primary) dkk di base.css
 * berubah otomatis ke nuansa merah-putih. Slider tidak disentuh sama
 * sekali di sini — gambar slidenya kamu ganti manual sesuai rencana.
 *
 * Cache di localStorage dipakai supaya tema langsung tampil tanpa
 * nunggu network di kunjungan berikutnya (dibaca instan lewat inline
 * snippet kecil yang taruh paling atas <head> tiap halaman).
 */
(function () {
  var CACHE_KEY = 'merdeka_theme_v1';

  function applyTheme(active) {
    document.documentElement.setAttribute('data-theme', active ? 'merdeka' : 'default');
    if (active) injectFlagField();
    else removeFlagField();
  }

  function injectFlagField() {
    if (document.getElementById('merdekaFlagField') || !document.body) return;
    var field = document.createElement('div');
    field.id = 'merdekaFlagField';
    field.setAttribute('aria-hidden', 'true');

    var n = window.innerWidth < 600 ? 10 : 18;
    var html = '';
    for (var i = 0; i < n; i++) {
      var left  = (Math.random() * 100).toFixed(1);
      var dur   = (9 + Math.random() * 10).toFixed(1);
      var delay = (Math.random() * -20).toFixed(1);
      var rot   = (Math.random() * 30 - 15).toFixed(1);
      var scale = (0.6 + Math.random() * 0.8).toFixed(2);
      html += '<span class="merdeka-flag" style="left:' + left + 'vw;' +
              'animation-duration:' + dur + 's;' +
              'animation-delay:' + delay + 's;' +
              '--r:' + rot + 'deg;--s:' + scale + '">' +
              '<i class="mf-r"></i><i class="mf-w"></i></span>';
    }
    field.innerHTML = html;
    document.body.appendChild(field);
  }

  function removeFlagField() {
    var field = document.getElementById('merdekaFlagField');
    if (field) field.remove();
  }

  function readCache() {
    try { return localStorage.getItem(CACHE_KEY); } catch (_) { return null; }
  }
  function writeCache(active) {
    try { localStorage.setItem(CACHE_KEY, active ? '1' : '0'); } catch (_) {}
  }

  async function init() {
    // Cache (harusnya sudah diterapkan lebih dulu oleh inline snippet
    // di <head>, ini cuma memastikan flag field ikut muncul juga).
    if (readCache() === '1') applyTheme(true);

    // Ambil setting terbaru dari server — publik, tanpa auth (GET).
    try {
      var res = await fetch('/api/save-data');
      if (!res.ok) return;
      var data = await res.json();
      var active = !!(data.settings && data.settings.merdekaColorTheme);
      applyTheme(active);
      writeCache(active);
    } catch (_) {
      // Gagal diam-diam, biarkan tampilan pakai cache/default.
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
