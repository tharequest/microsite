/**
 * /api/visitor.js — Visitor Counter dengan Upstash Redis
 * GET         → baca statistik (publik)
 * POST        → increment counter pengunjung (publik)
 * POST + auth → override/edit angka manual dari admin
 *
 * Redis Keys:
 *   visitor:alltime          → total keseluruhan
 *   visitor:day:YYYY-MM-DD   → harian
 *   visitor:week:YYYY-Www    → mingguan
 *   visitor:month:YYYY-MM    → bulanan
 *   visitor:override         → angka offset dari admin (JSON)
 */

const { requireAuth } = require('./_auth-middleware');

function getDateKeys() {
  const now   = new Date();
  const pad   = n => String(n).padStart(2, '0');
  const date  = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}`;
  const month = `${now.getFullYear()}-${pad(now.getMonth()+1)}`;

  // ISO week number
  const tmp = new Date(now);
  tmp.setHours(0,0,0,0);
  tmp.setDate(tmp.getDate() + 3 - (tmp.getDay()+6) % 7);
  const week1 = new Date(tmp.getFullYear(), 0, 4);
  const weekNum = Math.round(((tmp - week1) / 86400000 + (week1.getDay()+6) % 7) / 7) + 1;
  const week  = `${now.getFullYear()}-W${pad(weekNum)}`;

  return { date, month, week };
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();

  // Cek apakah Upstash Redis tersedia
  let redis;
  try {
    const { Redis } = require('@upstash/redis');
    redis = Redis.fromEnv();
  } catch {
    return res.status(500).json({ error: '@upstash/redis belum diinstall. Jalankan: npm install @upstash/redis' });
  }

  const { date, month, week } = getDateKeys();

  // ── GET: baca statistik ─────────────────────────────
  if (req.method === 'GET') {
    try {
      const [alltime, today, thisWeek, thisMonth, overrideRaw] = await Promise.all([
        redis.get('visitor:alltime'),
        redis.get(`visitor:day:${date}`),
        redis.get(`visitor:week:${week}`),
        redis.get(`visitor:month:${month}`),
        redis.get('visitor:override'),
      ]);

      // Upstash SDK sudah auto-parse JSON, jadi overrideRaw bisa object atau null
      const override = (overrideRaw && typeof overrideRaw === 'object')
        ? overrideRaw
        : (overrideRaw ? JSON.parse(overrideRaw) : {});

      // Terapkan override: nilai real + offset dari admin
      const calc = (real, key) => {
        const base = parseInt(override[key] ?? 0);
        return Math.max(0, (parseInt(real) || 0) + base);
      };

      // Jika request raw=1 (admin minta lihat angka override mentah)
      if (req.query && req.query.raw === '1') {
        return res.status(200).json({
          alltime:   calc(alltime,   'alltime'),
          today:     calc(today,     'today'),
          thisWeek:  calc(thisWeek,  'thisWeek'),
          thisMonth: calc(thisMonth, 'thisMonth'),
          override,
          lastUpdated: new Date().toISOString(),
        });
      }

      return res.status(200).json({
        alltime:   calc(alltime,   'alltime'),
        today:     calc(today,     'today'),
        thisWeek:  calc(thisWeek,  'thisWeek'),
        thisMonth: calc(thisMonth, 'thisMonth'),
        lastUpdated: new Date().toISOString(),
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // ── POST: increment atau admin override ─────────────
  if (req.method === 'POST') {
    const body = req.body || {};

    // Admin override (edit manual angka) — butuh auth
    if (body.action === 'override') {
      const auth = await requireAuth(req, res);
      if (!auth) return;

      try {
        await redis.set('visitor:override', JSON.stringify(body.override || {}));
        return res.status(200).json({ ok: true, override: body.override });
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }
    }

    // Increment normal (pengunjung baru)
    try {
      await Promise.all([
        redis.incr('visitor:alltime'),
        redis.incr(`visitor:day:${date}`),
        redis.incr(`visitor:week:${week}`),
        redis.incr(`visitor:month:${month}`),
        // TTL: hapus data harian setelah 32 hari, mingguan 60 hari, bulanan 400 hari
        redis.expire(`visitor:day:${date}`,   32 * 86400),
        redis.expire(`visitor:week:${week}`,  60 * 86400),
        redis.expire(`visitor:month:${month}`, 400 * 86400),
      ]);

      const [alltime, today, thisWeek, thisMonth, overrideRaw] = await Promise.all([
        redis.get('visitor:alltime'),
        redis.get(`visitor:day:${date}`),
        redis.get(`visitor:week:${week}`),
        redis.get(`visitor:month:${month}`),
        redis.get('visitor:override'),
      ]);

      const override = (overrideRaw && typeof overrideRaw === 'object')
        ? overrideRaw
        : (overrideRaw ? JSON.parse(overrideRaw) : {});
      const calc = (real, key) => Math.max(0, (parseInt(real) || 0) + parseInt(override[key] ?? 0));

      return res.status(200).json({
        alltime:   calc(alltime,   'alltime'),
        today:     calc(today,     'today'),
        thisWeek:  calc(thisWeek,  'thisWeek'),
        thisMonth: calc(thisMonth, 'thisMonth'),
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
};