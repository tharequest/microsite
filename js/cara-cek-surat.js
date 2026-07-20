
const CC_DATA = {
  akademik: {
    title: "Surat Akademik",
    subtitle: "Aktif Kuliah, SKL, Cuti, Pindah, Pengunduran Diri, Rekomendasi KIP",
    steps: [
      "Masukkan <strong>Nama</strong> atau <strong>NIM Mahasiswa</strong> pada kolom pencarian.",
      "Klik tombol <strong>Cari</strong>.",
      "Jika data ditemukan, klik <strong>Lihat File</strong> untuk download langsung, atau scan QR Code yang muncul.",
      "Jika surat tidak ditemukan / data belum tersedia, hubungi bagian terkait di bawah ini."
    ],
    contactNote: "Surat tidak ditemukan? Hubungi:",
    contacts: [
      { label: "Surat Aktif Kuliah", name: "Agung" },
      { label: "Surat Keterangan Lulus (SKL)", name: "Onny" },
      { label: "Surat Cuti / Pindah / Pengunduran Diri", name: "Ana" },
      { label: "Surat Rekomendasi KIP", name: "Primanita" }
    ]
  },
  kegiatan: {
    title: "Surat Izin Kegiatan",
    subtitle: "Untuk kegiatan Himpunan Mahasiswa",
    steps: [
      "Pilih jenis surat <strong>Surat Izin Kegiatan</strong>.",
      "Pilih <strong>Himpunan</strong> kamu pada dropdown yang muncul.",
      "Klik tombol <strong>Cari</strong>.",
      "Jika data ditemukan, pilih kegiatan yang dimaksud, lalu klik <strong>Lihat File</strong> untuk download.",
      "Jika data surat tidak ditemukan, hubungi admin yang membuat surat izin kegiatan di bawah ini."
    ],
    contactNote: "Surat tidak ditemukan? Hubungi admin yang membuat surat izin kegiatan:",
    contacts: [
      { label: "MSI, HIMATIKA, HIMASTA, HIMAFIS, HIMABIO, HMG, KOMIK, Art Laboratory", name: "Thareq" },
      { label: "HIMASTER, HMIK, HMSI, BEM, DPM, FIKRI, IMASIKA, HIMKI", name: "Onny" }
    ]
  }
};

const CC_WA_SVG = `
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 2.9C8.8 2.9 3 8.7 3 15.9c0 2.3.6 4.5 1.8 6.5L3 29.1l6.9-1.8
           c1.9 1 4 1.6 6.1 1.6 7.2 0 13-5.8 13-13S23.2 2.9 16 2.9zm6.4 18.1
           c-.3.8-1.5 1.5-2.1 1.6-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6
           -3-1.3-4.9-4.3-5.1-4.5-.2-.2-1.3-1.7-1.3-3.2s.8-2.3 1.1-2.6
           c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.5.8 2 .9 2.1.1.2.1.4 0 .6
           -.1.2-.2.3-.3.5-.1.2-.3.4-.4.5-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1
           c1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.7-.1
           .3.1 1.8.9 2.1 1 .3.2.5.3.6.4.1.3.1 1-.2 1.7z"/>
</svg>`;

function ccFindWaUrl(name) {
  if (typeof KONTAK_DATA === "undefined" || typeof ktBuildWaUrl !== "function") return null;
  const person = KONTAK_DATA.find(p =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );
  return person ? ktBuildWaUrl(person.phone) : null;
}

function ccRenderSection(data) {
  const stepsHtml = data.steps.map((step, i) => `
    <li>
      <span class="cc-step-num">${i + 1}</span>
      <span>${step}</span>
    </li>`).join("");

  const contactsHtml = data.contacts.map(c => {
    const waUrl = ccFindWaUrl(c.name);
    const btn = waUrl
      ? `<a class="cc-contact-wa" href="${waUrl}" target="_blank" rel="noopener">${CC_WA_SVG}Chat</a>`
      : `<a class="cc-contact-wa" href="javascript:void(0)" onclick="openKontakPopup()">${CC_WA_SVG}Kontak</a>`;
    return `
      <div class="cc-contact-item">
        <div class="cc-contact-label">${c.label}</div>
        ${btn}
      </div>`;
  }).join("");

  return `
    <div class="cc-section">
      <div class="cc-section-title">📄 ${data.title}</div>
      <div class="cc-section-sub">${data.subtitle}</div>
      <ol class="cc-steps">${stepsHtml}</ol>
      <div class="cc-contact-note">${data.contactNote}</div>
      <div class="cc-contact-list">${contactsHtml}</div>
    </div>`;
}

function ccRenderBody() {
  const body = document.getElementById("cc-body");
  if (!body) return;
  body.innerHTML = ccRenderSection(CC_DATA.akademik) + ccRenderSection(CC_DATA.kegiatan);
}

function openCaraCekPopup() {
  ccRenderBody();
  document.getElementById("cc-overlay")?.classList.add("cc-open");
}

function closeCaraCekPopup() {
  document.getElementById("cc-overlay")?.classList.remove("cc-open");
}
document.addEventListener("DOMContentLoaded", () => {
  openCaraCekPopup();
  document.getElementById("cc-help-fab")?.addEventListener("click", openCaraCekPopup);
  document.getElementById("cc-close-btn")?.addEventListener("click", closeCaraCekPopup);
  document.getElementById("cc-footer-close-btn")?.addEventListener("click", closeCaraCekPopup);
  document.getElementById("cc-overlay")?.addEventListener("click", e => {
    if (e.target.id === "cc-overlay") closeCaraCekPopup();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeCaraCekPopup();
  });
});
