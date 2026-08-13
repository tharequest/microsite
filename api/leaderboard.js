/**
 * /api/leaderboard.js — Leaderboard Flappy Merah Putih (Tema 17 Agustus)
 * Disimpan di Upstash Redis (sama seperti visitor.js)
 *
 * GET              → ambil top skor (publik)
 * POST             → submit skor baru (publik, wajib nama + nim)
 * DELETE + auth    → reset seluruh leaderboard (admin only)
 *
 * Redis Keys:
 *   leaderboard:flappy17          → sorted set, member = nim, score = skor terbaik
 *   leaderboard:flappy17:names    → hash, field = nim, value = nama terakhir dipakai
 */

const { requireAuth } = require('./_auth-middleware');

const KEY_SCORES = 'leaderboard:flappy17';
const KEY_NAMES  = 'leaderboard:flappy17:names';
const MAX_ENTRIES = 50;
const MAX_SCORE   = 5000; // sanity cap, flappy bird score tidak wajar di atas ini

function sanitizeText(str, maxLen) {
  return String(str || '')
    .trim()
    .replace(/[<>"'`]/g, '')
    .slice(0, maxLen);
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  if (req.method === 'OPTIONS') return res.status(200).end();

  let redis;
  try {
    const { Redis } = require('@upstash/redis');
    redis = Redis.fromEnv();
  } catch {
    return res.status(500).json({ error: '@upstash/redis belum diinstall.' });
  }

  // ── GET: ambil leaderboard (publik) ─────────────────
  if (req.method === 'GET') {
    try {
      const raw = await redis.zrange(KEY_SCORES, 0, MAX_ENTRIES - 1, { rev: true, withScores: true });

      // Normalisasi hasil: bisa berupa flat array [member,score,...] atau array object
      const pairs = [];
      if (Array.isArray(raw)) {
        if (raw.length && typeof raw[0] === 'object' && raw[0] !== null && 'member' in raw[0]) {
          raw.forEach(r => pairs.push([r.member, r.score]));
        } else {
          for (let i = 0; i < raw.length; i += 2) pairs.push([raw[i], raw[i + 1]]);
        }
      }

      const nims = pairs.map(p => String(p[0]));
      const names = nims.length ? await redis.hmget(KEY_NAMES, ...nims) : [];

      const leaderboard = pairs.map((p, i) => ({
        nim: nims[i],
        nama: (names && names[nims[i]]) || (Array.isArray(names) ? names[i] : null) || '—',
        skor: Number(p[1]) || 0,
        rank: i + 1,
      }));

      return res.status(200).json({ leaderboard });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // ── POST: submit skor baru (publik) ─────────────────
  if (req.method === 'POST') {
    try {
      const body = req.body || {};
      const nama = sanitizeText(body.nama, 40);
      const nim  = sanitizeText(body.nim, 25);
      const skor = Math.max(0, Math.min(MAX_SCORE, parseInt(body.skor, 10) || 0));

      if (!nama || !nim) {
        return res.status(400).json({ error: 'Nama dan NIM wajib diisi.' });
      }

      // GT: hanya update kalau skor baru lebih tinggi dari skor tersimpan
      await redis.zadd(KEY_SCORES, { gt: true }, { score: skor, member: nim });
      await redis.hset(KEY_NAMES, { [nim]: nama });

      const best = await redis.zscore(KEY_SCORES, nim);
      const rank = await redis.zrevrank(KEY_SCORES, nim);

      return res.status(200).json({
        success: true,
        skorTersimpan: Number(best) || skor,
        rank: (rank === null || rank === undefined) ? null : rank + 1,
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // ── DELETE: reset leaderboard (admin only) ──────────
  if (req.method === 'DELETE') {
    const auth = await requireAuth(req, res);
    if (!auth) return;

    try {
      await redis.del(KEY_SCORES);
      await redis.del(KEY_NAMES);
      return res.status(200).json({ success: true, message: 'Leaderboard direset.' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
