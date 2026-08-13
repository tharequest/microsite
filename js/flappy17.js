/**
 * flappy17.js — Flappy Merah Putih (tema 17 Agustus)
 * Gate nama/NIM → main game → submit skor ke /api/leaderboard → tampil papan skor
 */

const PLAYER_KEY = 'f17_player_v1';

// ══════════════════════════════════════════════════════
// GATE: nama + NIM
// ══════════════════════════════════════════════════════
const gateForm   = document.getElementById('gateForm');
const gameArea   = document.getElementById('gameArea');
const playerTag  = document.getElementById('playerTag');
const inputNama  = document.getElementById('inputNama');
const inputNim   = document.getElementById('inputNim');
const gateError  = document.getElementById('gateError');
const btnMulai   = document.getElementById('btnMulai');

let player = null;

function loadSavedPlayer() {
  try {
    const raw = sessionStorage.getItem(PLAYER_KEY);
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  return null;
}

function startWithPlayer(p) {
  player = p;
  playerTag.textContent = `👤 ${p.nama} — ${p.nim}`;
  gateForm.hidden = true;
  gameArea.hidden = false;
  initGame();
}

btnMulai.addEventListener('click', () => {
  const nama = inputNama.value.trim();
  const nim  = inputNim.value.trim();

  if (!nama || nama.length < 2) {
    gateError.textContent = 'Nama wajib diisi (minimal 2 karakter).';
    return;
  }
  if (!nim || nim.length < 3) {
    gateError.textContent = 'NIM wajib diisi dengan benar.';
    return;
  }
  gateError.textContent = '';

  const p = { nama: nama.slice(0, 40), nim: nim.slice(0, 25) };
  try { sessionStorage.setItem(PLAYER_KEY, JSON.stringify(p)); } catch (_) {}
  startWithPlayer(p);
});

// Prefill kalau sudah pernah isi di sesi ini
const saved = loadSavedPlayer();
if (saved) {
  inputNama.value = saved.nama;
  inputNim.value = saved.nim;
}

// ══════════════════════════════════════════════════════
// LEADERBOARD
// ══════════════════════════════════════════════════════
const lbStatus = document.getElementById('lbStatus');
const lbTable  = document.getElementById('lbTable');
const lbBody   = document.getElementById('lbBody');
const btnRefreshLb = document.getElementById('btnRefreshLb');

async function loadLeaderboard() {
  lbStatus.hidden = false;
  lbStatus.textContent = 'Memuat papan skor…';
  lbTable.hidden = true;
  try {
    const res = await fetch('/api/leaderboard');
    if (!res.ok) throw new Error('Gagal memuat');
    const { leaderboard } = await res.json();

    if (!leaderboard || !leaderboard.length) {
      lbStatus.textContent = 'Belum ada skor. Jadilah yang pertama! 🚀';
      return;
    }

    lbBody.innerHTML = leaderboard.map(row => `
      <tr>
        <td>${row.rank}</td>
        <td>${escapeHtml(row.nama)}</td>
        <td>${escapeHtml(row.nim)}</td>
        <td>${row.skor}</td>
      </tr>
    `).join('');

    lbStatus.hidden = true;
    lbTable.hidden = false;
  } catch (err) {
    lbStatus.textContent = 'Gagal memuat papan skor. Coba refresh.';
  }
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

btnRefreshLb.addEventListener('click', loadLeaderboard);
loadLeaderboard();

async function submitScore(skor) {
  if (!player) return;
  try {
    const res = await fetch('/api/leaderboard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nama: player.nama, nim: player.nim, skor })
    });
    const data = await res.json();
    loadLeaderboard();
    return data;
  } catch (_) {
    return null;
  }
}

// ══════════════════════════════════════════════════════
// GAME
// ══════════════════════════════════════════════════════
let ctx, canvas, W, H;
let bird, pipes, frame, score, state, groundOffset, gameStarted;

const GRAVITY = 0.45;
const FLAP = -8.2;
const PIPE_GAP = 145;
const PIPE_W = 58;
const PIPE_SPEED = 2.5;
const GROUND_H = 54;

function initGame() {
  canvas = document.getElementById('game');
  ctx = canvas.getContext('2d');
  W = canvas.width; H = canvas.height;

  resetGame();

  document.addEventListener('keydown', onKeydown);
  document.getElementById('overlay').addEventListener('click', flap);
  canvas.addEventListener('mousedown', flap);
  canvas.addEventListener('touchstart', (e) => { e.preventDefault(); flap(); });

  requestAnimationFrame(loop);
}

function onKeydown(e) {
  if (e.code === 'Space') { e.preventDefault(); flap(); }
}

function resetGame() {
  bird = { x: 80, y: H / 2, r: 13, vel: 0, rot: 0 };
  pipes = [];
  frame = 0;
  score = 0;
  groundOffset = 0;
  state = 'ready';
  document.getElementById('score').textContent = '0';
  document.getElementById('overlayTitle').textContent = 'Siap-siap!';
  document.getElementById('overlayMsg').textContent = 'Klik / tap / spasi untuk terbang';
  document.getElementById('overlay').style.display = 'flex';
}

function flap() {
  if (state === 'ready') {
    state = 'playing';
    document.getElementById('overlay').style.display = 'none';
  } else if (state === 'over') {
    resetGame();
  } else if (state === 'playing') {
    bird.vel = FLAP;
  }
}

function spawnPipe() {
  const margin = 55;
  const top = margin + Math.random() * (H - GROUND_H - PIPE_GAP - margin * 2);
  pipes.push({ x: W, top, passed: false });
}

function update() {
  if (state !== 'playing') return;
  frame++;
  bird.vel += GRAVITY;
  bird.y += bird.vel;
  bird.rot = Math.max(-25, Math.min(90, bird.vel * 4));

  if (frame % 95 === 0) spawnPipe();

  for (const p of pipes) {
    p.x -= PIPE_SPEED;
    if (!p.passed && p.x + PIPE_W < bird.x) {
      p.passed = true;
      score++;
      document.getElementById('score').textContent = score;
    }
    const bl = bird.x - bird.r, br = bird.x + bird.r, bt = bird.y - bird.r, bb = bird.y + bird.r;
    if (br > p.x && bl < p.x + PIPE_W) {
      if (bt < p.top || bb > p.top + PIPE_GAP) endGame();
    }
  }
  pipes = pipes.filter(p => p.x + PIPE_W > -10);

  groundOffset -= PIPE_SPEED;
  if (groundOffset <= -30) groundOffset = 0;

  if (bird.y + bird.r > H - GROUND_H) {
    bird.y = H - GROUND_H - bird.r;
    endGame();
  }
  if (bird.y - bird.r < 0) { bird.y = bird.r; bird.vel = 0; }
}

let scoreSubmitted = false;
function endGame() {
  if (state !== 'playing') return;
  state = 'over';
  scoreSubmitted = false;

  const overlay = document.getElementById('overlay');
  overlay.style.display = 'flex';
  document.getElementById('overlayTitle').textContent = 'Game Over!';
  document.getElementById('overlayMsg').textContent = `Skor: ${score} — menyimpan skor…`;

  if (!scoreSubmitted) {
    scoreSubmitted = true;
    submitScore(score).then(data => {
      if (data && data.success) {
        document.getElementById('overlayMsg').textContent =
          `Skor: ${score} tersimpan! Peringkat kamu: #${data.rank ?? '-'}`;
      } else {
        document.getElementById('overlayMsg').textContent = `Skor: ${score} (gagal tersimpan, cek koneksi)`;
      }
    });
  }
}

function drawBackground() {
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, H);
  ctx.globalAlpha = 0.07;
  ctx.fillStyle = '#d10000';
  for (let i = 0; i < 4; i++) {
    const cx = (i * 120 + frame * 0.15) % (W + 100) - 50;
    ctx.beginPath();
    ctx.ellipse(cx, 90 + i * 80, 46, 20, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function drawPipes() {
  for (const p of pipes) {
    const grad = ctx.createLinearGradient(p.x, 0, p.x + PIPE_W, 0);
    grad.addColorStop(0, '#b00000'); grad.addColorStop(0.5, '#e60000'); grad.addColorStop(1, '#b00000');
    ctx.fillStyle = grad;
    ctx.fillRect(p.x, 0, PIPE_W, p.top);
    ctx.fillRect(p.x - 5, p.top - 20, PIPE_W + 10, 20);
    ctx.fillRect(p.x, p.top + PIPE_GAP, PIPE_W, H - (p.top + PIPE_GAP) - GROUND_H);
    ctx.fillRect(p.x - 5, p.top + PIPE_GAP, PIPE_W + 10, 20);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(p.x + PIPE_W / 2 - 3, 0, 6, p.top);
    ctx.fillRect(p.x + PIPE_W / 2 - 3, p.top + PIPE_GAP, 6, H - (p.top + PIPE_GAP) - GROUND_H);
  }
}

function drawGround() {
  ctx.fillStyle = '#d10000';
  ctx.fillRect(0, H - GROUND_H, W, GROUND_H);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, H - GROUND_H, W, 7);
  ctx.fillStyle = '#b00000';
  for (let x = groundOffset; x < W; x += 28) {
    ctx.fillRect(x, H - GROUND_H + 7, 14, GROUND_H - 7);
  }
}

function drawBird() {
  ctx.save();
  ctx.translate(bird.x, bird.y);
  ctx.rotate(bird.rot * Math.PI / 180);
  ctx.fillStyle = '#ffffff'; ctx.strokeStyle = '#d10000'; ctx.lineWidth = 2.3;
  ctx.beginPath(); ctx.ellipse(0, 0, 15, 12, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#d10000';
  ctx.beginPath(); ctx.ellipse(-2, -7, 11, 6.5, 0, Math.PI, Math.PI * 2); ctx.fill();
  ctx.beginPath();
  const wf = Math.sin(frame * 0.4) * 4;
  ctx.ellipse(-4, 2 + wf, 8, 5.5, -0.3, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#222';
  ctx.beginPath(); ctx.arc(6.5, -3, 2.1, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#ff9d00';
  ctx.beginPath(); ctx.moveTo(13, 0); ctx.lineTo(22, -2); ctx.lineTo(22, 4); ctx.closePath(); ctx.fill();
  ctx.restore();
}

function loop() {
  update();
  drawBackground();
  drawPipes();
  drawGround();
  drawBird();
  requestAnimationFrame(loop);
}

// Auto-start kalau nama/NIM sudah tersimpan dari sesi sebelumnya
if (saved) {
  // biarkan user klik "Lanjut Main" biar sadar identitasnya benar
}
