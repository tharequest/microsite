/**
 * sidebar.js — rail navigasi samping (gaya manifest.human.tech)
 * - titik = section halaman, aktif mengikuti scroll
 * - ikon bulat di atas = ikon section yang sedang dilihat
 * - tombol salin tautan di bagian intro
 * Section diambil dari id: top, pengumuman, layanan, informasi
 */
(function () {
  var ICONS = {
    book:  '<path d="M3 5.5C5.5 4.5 8.5 4.5 12 6c3.5-1.5 6.5-1.5 9-.5V19c-2.5-1-5.5-1-9 .5C8.5 18 5.5 18 3 19z"/><path d="M12 6v13.5"/>',
    mega:  '<path d="M4 10v4h3l7 4V6L7 10z"/><path d="M17.5 9.5a4 4 0 010 5"/>',
    grid:  '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
    news:  '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8M8 13h8M8 17h5"/>'
  };
  var SECTIONS = [
    { id: 'top',        label: 'Beranda',               icon: 'book' },
    { id: 'pengumuman', label: 'Pengumuman & Surat',    icon: 'mega' },
    { id: 'layanan',    label: 'Akses Cepat Layanan',   icon: 'grid' },
    { id: 'informasi',  label: 'Informasi & Statistik', icon: 'news' }
  ].filter(function (s) { return document.getElementById(s.id); });

  var cur  = document.getElementById('mfRailCur');
  var dots = document.getElementById('mfRailDots');
  if (!cur || !dots) return;

  function svg(name) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICONS[name] + '</svg>';
  }
  function goTo(id) {
    if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  SECTIONS.forEach(function (s) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'mf-dot';
    b.dataset.id = s.id;
    b.dataset.label = s.label;
    b.setAttribute('aria-label', s.label);
    b.addEventListener('click', function () { goTo(s.id); });
    dots.appendChild(b);
  });
  cur.addEventListener('click', function () { goTo('top'); });

  var last = null;
  function update() {
    var current = SECTIONS[0];
    SECTIONS.forEach(function (s) {
      var el = document.getElementById(s.id);
      if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = s;
    });
    if (current.id === last) return;
    last = current.id;
    cur.innerHTML = svg(current.icon);
    cur.setAttribute('aria-label', current.label);
    dots.querySelectorAll('.mf-dot').forEach(function (d) {
      d.classList.toggle('active', d.dataset.id === current.id);
    });
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();

  // Salin tautan halaman
  var copy = document.getElementById('mfCopy');
  if (copy) {
    copy.addEventListener('click', function () {
      var url = location.href.split('#')[0];
      var done = function () {
        copy.title = 'Tersalin ✓';
        setTimeout(function () { copy.title = 'Salin tautan'; }, 1600);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, done);
      else done();
    });
  }
})();
