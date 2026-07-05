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
