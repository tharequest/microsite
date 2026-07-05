
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
