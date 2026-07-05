import"./layanan-popup-qGJfxhSt.js";const X="/assets/kiranabot-BWMVcmDT.png";function E(){var a;(a=document.getElementById("kt-overlay"))==null||a.classList.remove("kt-open")}document.addEventListener("DOMContentLoaded",()=>{var a,e;(a=document.getElementById("kt-close-btn"))==null||a.addEventListener("click",E),(e=document.getElementById("kt-overlay"))==null||e.addEventListener("click",n=>{n.target.id==="kt-overlay"&&E()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&E()})});const O="portal_v3_cache",sa=300*1e3;async function la(a=!1){if(!a)try{const t=localStorage.getItem(O);if(t){const{data:i,timestamp:o}=JSON.parse(t);if(Date.now()-o<sa)return i}}catch{}const e=await fetch("/api/save-data");if(!e.ok)throw new Error("Gagal mengambil data dari server");const n=await e.json();try{localStorage.setItem(O,JSON.stringify({data:n,timestamp:Date.now()}))}catch{}return n}(function(){const e=document.querySelector("header");if(!e)return;const n=80;function t(){window.scrollY>n?e.classList.add("scrolled"):e.classList.remove("scrolled")}window.addEventListener("scroll",t,{passive:!0}),t()})();function da(){const a=document.getElementById("hamburger"),e=document.getElementById("mobileNav");!a||!e||(a.addEventListener("click",n=>{n.stopPropagation(),a.classList.toggle("open"),e.classList.toggle("open"),document.body.classList.toggle("mobile-nav-open",e.classList.contains("open"))}),e.querySelectorAll("a").forEach(n=>{n.addEventListener("click",()=>{a.classList.remove("open"),e.classList.remove("open"),document.body.classList.remove("mobile-nav-open")})}),document.addEventListener("click",n=>{!a.contains(n.target)&&!e.contains(n.target)&&(a.classList.remove("open"),e.classList.remove("open"),document.body.classList.remove("mobile-nav-open"))}))}function ua(){document.querySelectorAll(".dropdown > span").forEach(a=>{a.addEventListener("click",e=>{e.stopPropagation();const n=a.parentElement.querySelector(".dropdown-menu");if(!n)return;const t=n.style.display==="block";document.querySelectorAll(".dropdown-menu").forEach(i=>i.style.display="none"),n.style.display=t?"none":"block"})}),document.addEventListener("click",()=>{document.querySelectorAll(".dropdown-menu").forEach(a=>a.style.display="none")})}function ca(){document.querySelectorAll(".mobile-title").forEach(a=>{a.addEventListener("click",()=>{a.parentElement.classList.toggle("active")})})}document.addEventListener("DOMContentLoaded",()=>{da(),ua(),ca(),pa()});function pa(){const e=window.location.pathname.split("/").pop()||"index.html";document.querySelectorAll(".main-nav > a, #mobileNav a").forEach(n=>{n.classList.remove("active")}),document.querySelectorAll(".main-nav > a, #mobileNav a").forEach(n=>{const t=(n.getAttribute("href")||"").split("/").pop();if(!t)return;((e===""||e==="index.html")&&(t==="index.html"||t==="")||t===e)&&n.classList.add("active")})}const f={1:{current:1,total:0},2:{current:1,total:0}},h={1:{interval:null,restartTimeout:null},2:{interval:null,restartTimeout:null}},ma={1:5500,2:7e3},Sa=700,ka={1:0,2:2500};function L(a,e){const n=document.getElementById("track"+a);n&&(e||(n.style.transition="none"),n.style.transform=`translateX(-${f[a].current*100}%)`,e||(n.offsetHeight,n.style.transition=""))}function aa(a){const e=f[a],n=((e.current-1)%e.total+e.total)%e.total;document.querySelectorAll(`#dots${a} .dot`).forEach((t,i)=>t.classList.toggle("active",i===n))}function G(a,e){const n=f[a];n.total&&(n.current=e,L(a,!0),aa(a))}function ga(a){const e=f[a];e.current<=0?(e.current=e.total,L(a,!1)):e.current>=e.total+1&&(e.current=1,L(a,!1))}function x(a){const e=h[a];clearInterval(e.interval),e.interval=setInterval(()=>G(a,f[a].current+1),ma[a])}function R(a){clearInterval(h[a].interval),h[a].interval=null}function ea(a){const e=h[a];R(a),e.restartTimeout&&clearTimeout(e.restartTimeout),e.restartTimeout=setTimeout(()=>{x(a),e.restartTimeout=null},Sa)}function fa(a){const e=document.getElementById("track"+a),n=e?e.parentElement:null;n&&(n.style.background="linear-gradient(135deg, #1a3a6a 0%, #2d6cb0 100%)"),e&&(e.innerHTML=`
      <div class="slide" style="display:flex;align-items:center;justify-content:center;">
        <div style="text-align:center;color:rgba(255,255,255,.5);font-size:13px;letter-spacing:.5px;">
          ⏳ Memuat...
        </div>
      </div>`)}function _(a){[1,2].forEach(e=>{const n=a.filter(s=>s.slider===e&&s.hidden!==!0);f[e].total=n.length;const t=document.getElementById("track"+e),i=document.getElementById("dots"+e);if(!t||!i)return;t.innerHTML="",i.innerHTML="";const o=t.parentElement;if(o&&(o.style.background=""),!n.length){t.innerHTML=`<div class="slide"><div class="slide-bg" style="background:#e8f0fd"></div>
        <div class="slide-overlay"></div><div class="slide-content" style="text-align:center;width:100%;">
        <p style="color:rgba(255,255,255,.7);font-size:13px;">Belum ada slide. Tambahkan via Admin Panel.</p>
        </div></div>`;return}const r=n.map((s,S)=>{const d=s.popupType==="pdf"?"📄 Lihat PDF":"🔍 Lihat Gambar",c=document.createElement("div");return c.className="slide",c.innerHTML=`
        <div class="slide-bg" style="
          background-image: url('${s.imageUrl}');
          background-size: cover;
          background-position: center;
          position: absolute;
          inset: 0;
        "></div>
        <div class="slide-overlay"></div>
        <div class="slide-hint">${d}</div>
        <div class="slide-content">
          <span class="slide-tag">${s.tag}</span>
          <h2>${s.title}</h2>
          <p>${s.desc}</p>
        </div>`,c.addEventListener("click",()=>B(s,n,S)),c});n.forEach((s,S)=>{const d=document.createElement("button");d.className="dot"+(S===0?" active":""),d.addEventListener("click",c=>{c.stopPropagation(),G(e,S+1),ea(e)}),i.appendChild(d)});const l=r[0].cloneNode(!0),m=r[r.length-1].cloneNode(!0);t.appendChild(m),r.forEach(s=>t.appendChild(s)),t.appendChild(l),f[e].current=1,L(e,!1),aa(e),t._sliderHandler&&t.removeEventListener("transitionend",t._sliderHandler);const u=s=>{s.target!==t||s.propertyName!=="transform"||ga(e)};t._sliderHandler=u,t.addEventListener("transitionend",u);const p=t.closest(".slider-card")||t.parentElement;p&&!p._hoverBound&&(p._hoverBound=!0,p.addEventListener("mouseenter",()=>{R(e);const s=h[e];s.restartTimeout&&(clearTimeout(s.restartTimeout),s.restartTimeout=null)}),p.addEventListener("mouseleave",()=>{const s=h[e];s.restartTimeout&&clearTimeout(s.restartTimeout),s.restartTimeout=setTimeout(()=>{x(e),s.restartTimeout=null},500)}))})}function C(){[1,2].forEach(a=>{R(a),setTimeout(()=>x(a),ka[a])})}function Ia(){[1,2].forEach(a=>fa(a)),document.querySelectorAll(".slider-btn").forEach(a=>{a.addEventListener("click",e=>{e.stopPropagation();const n=+a.dataset.slider;G(n,f[n].current+ +a.dataset.dir),ea(n)})})}document.addEventListener("DOMContentLoaded",Ia);let k=[],g=0;function B(a,e,n){const t=document.getElementById("popupOverlay"),i=document.getElementById("popupInner");a.popupType==="pdf"?(k=[],g=0,a.popupUrl?a.popupUrl.startsWith("data:")?i.innerHTML=Aa(a,a.popupUrl):i.innerHTML=ba(a):i.innerHTML=ya(a)):(e&&e.length>1?(k=e,g=typeof n=="number"?n:0):(k=[a],g=0),na(i)),t.classList.add("open")}function na(a){a||(a=document.getElementById("popupInner"));const e=k[g],n=k.length,t=n>1,i=t?`
    <button class="popup-nav-btn popup-nav-prev" onclick="navigateImagePopup(-1)" title="Sebelumnya">
      &#8592;
    </button>`:"",o=t?`
    <button class="popup-nav-btn popup-nav-next" onclick="navigateImagePopup(1)" title="Berikutnya">
      &#8594;
    </button>`:"",r=t?`
    <div class="popup-nav-counter">${g+1} / ${n}</div>`:"";if(e.popupType==="pdf")if(e.popupUrl&&!e.popupUrl.startsWith("data:")){const l=e.popupUrl.startsWith("/api/get-file")?e.popupUrl:`https://docs.google.com/viewer?url=${encodeURIComponent(e.popupUrl)}&embedded=true`,m=`
        <a href="${e.popupUrl}" target="_blank" rel="noopener"
          style="margin-left:auto;font-size:11px;color:rgba(255,255,255,.75);
                 text-decoration:none;padding:3px 10px;
                 background:rgba(255,255,255,.15);border-radius:6px;">
          ⬇️ Download
        </a>`;a.innerHTML=`
        <div class="popup-pdf-wrap" style="position:relative;">
          ${i}
          <div class="popup-pdf-header">
            📄 ${e.popupLabel||e.title}
            ${m}
          </div>
          <div class="popup-pdf-body">
            <iframe src="${l}" frameborder="0" allowfullscreen></iframe>
          </div>
          ${o}
          ${r}
        </div>`}else a.innerHTML=`
        <div style="position:relative;width:min(380px,88vw);background:#fff;
                    border-radius:16px;padding:36px 28px;text-align:center;">
          ${i}
          <div style="font-size:48px;margin-bottom:12px;">📄</div>
          <div style="font-size:14px;font-weight:700;color:#1a4f8a;margin-bottom:8px;">
            ${e.popupLabel||e.title}
          </div>
          <div style="font-size:13px;color:#5a6e82;">
            File PDF belum diunggah.<br>
            Upload melalui <strong>Admin Panel</strong>.
          </div>
          ${o}
          ${r}
        </div>`;else{const l=e.popupUrl||e.imageUrl;a.innerHTML=`
      <div class="popup-img" style="position:relative;">
        ${i}
        <img
          src="${l}"
          alt="${e.title}"
          style="display:block;max-height:80vh;max-width:min(90vw,900px);border-radius:12px;"
        />
        ${o}
        ${r}
        ${e.title?`<div class="popup-nav-caption">${e.title}</div>`:""}
      </div>`}}function $(a){g=(g+a+k.length)%k.length,na()}function ha(a){document.getElementById("popupOverlay").classList.contains("open")&&(k.length<=1||(a.key==="ArrowLeft"&&$(-1),a.key==="ArrowRight"&&$(1)))}function ba(a){const n=a.popupUrl.startsWith("/api/get-file")?a.popupUrl:`https://docs.google.com/viewer?url=${encodeURIComponent(a.popupUrl)}&embedded=true`,t=`
    <a href="${a.popupUrl}" target="_blank" rel="noopener"
      style="margin-left:auto;font-size:11px;color:rgba(255,255,255,.75);
             text-decoration:none;padding:3px 10px;
             background:rgba(255,255,255,.15);border-radius:6px;">
      ⬇️ Download
    </a>`;return`
    <div class="popup-pdf-wrap">
      <div class="popup-pdf-header">
        📄 ${a.popupLabel||a.title}
        ${t}
      </div>
      <div class="popup-pdf-body">
        <iframe src="${n}" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>`}function ya(a){return`
    <div style="width:min(380px,88vw);background:#fff;border-radius:16px;
                padding:36px 28px;text-align:center;">
      <div style="font-size:48px;margin-bottom:12px;">📄</div>
      <div style="font-size:14px;font-weight:700;color:#1a4f8a;margin-bottom:8px;">
        ${a.popupLabel||a.title}
      </div>
      <div style="font-size:13px;color:#5a6e82;">
        File PDF belum diunggah.<br>
        Upload melalui <strong>Admin Panel</strong>.
      </div>
    </div>`}function Aa(a,e){const n=e.startsWith("data:");return`
    <div style="width:min(360px,88vw);background:#fff;border-radius:16px;
                padding:28px 24px;text-align:center;">
      <div style="font-size:48px;margin-bottom:12px;">📄</div>
      <div style="font-size:15px;font-weight:700;color:#1a4f8a;margin-bottom:8px;">
        ${a.popupLabel||a.title}
      </div>
      <div style="font-size:13px;color:#5a6e82;margin-bottom:20px;line-height:1.6;">
        Klik tombol di bawah untuk membuka atau mendownload PDF.
      </div>
      <a href="${e}"
        ${n?'download="dokumen.pdf"':'target="_blank" rel="noopener"'}
        style="display:flex;align-items:center;justify-content:center;gap:8px;
               background:#1a4f8a;color:#fff;font-size:14px;font-weight:700;
               padding:12px 24px;border-radius:10px;text-decoration:none;width:100%;">
        📖 Buka / Download PDF
      </a>
    </div>`}function K(){document.getElementById("popupOverlay").classList.remove("open"),k=[],g=0,setTimeout(()=>{const e=document.getElementById("popupInner");e&&(e.innerHTML="")},250)}document.addEventListener("DOMContentLoaded",()=>{var a,e;(a=document.getElementById("popupClose"))==null||a.addEventListener("click",K),(e=document.getElementById("popupOverlay"))==null||e.addEventListener("click",n=>{n.target.id==="popupOverlay"&&K()}),document.addEventListener("keydown",n=>{if(n.key==="Escape"){K();return}ha(n)})});(function(){if(document.getElementById("popup-nav-style"))return;const e=document.createElement("style");e.id="popup-nav-style",e.textContent=`
    .popup-nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0,0,0,.55);
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 44px;
      height: 44px;
      font-size: 20px;
      cursor: pointer;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background .2s, transform .2s;
      user-select: none;
    }
    .popup-nav-btn:hover {
      background: rgba(26,79,138,.85);
      transform: translateY(-50%) scale(1.1);
    }
    .popup-nav-prev { left: -22px; }
    .popup-nav-next { right: -22px; }

    @media (max-width: 600px) {
      .popup-nav-prev { left: 8px; }
      .popup-nav-next { right: 8px; }
    }

    .popup-nav-counter {
      position: absolute;
      bottom: -32px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0,0,0,.5);
      color: #fff;
      font-size: 12px;
      padding: 3px 10px;
      border-radius: 20px;
      white-space: nowrap;
    }

    .popup-nav-caption {
      position: absolute;
      bottom: -60px;
      left: 50%;
      transform: translateX(-50%);
      color: rgba(255,255,255,.8);
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      max-width: 80vw;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .popup-img {
      padding-bottom: 70px;
    }

    /* PDF dalam group navigasi */
    .popup-pdf-wrap {
      position: relative;
    }
    .popup-pdf-wrap .popup-nav-btn {
      top: 50%;
    }
    .popup-pdf-wrap .popup-nav-counter {
      bottom: 8px;
      left: 50%;
    }
  `,document.head.appendChild(e)})();function j(a){const e=document.getElementById("newsList");if(e){if(!a||a.length===0){e.innerHTML=`
      <li style="color:var(--text-muted);font-size:13px;padding:8px 0;">
        Belum ada berita.
      </li>`;return}e.innerHTML=a.map(n=>{let t;return n.pdfLink?t=`
        <div class="news-text news-clickable"
             onclick="openNewsPdf('${n.pdfLink}', '${(n.text||"").replace(/'/g,"\\'")}')"
             title="Klik untuk buka PDF">
          ${n.text}
          <span class="news-pdf-badge">📄 PDF</span>
        </div>`:n.link?t=`
        <div class="news-text">
          <a href="${n.link}" target="_blank" style="color:#1a4f8a;">
            ${n.text}
          </a>
        </div>`:t=`<div class="news-text">${n.text}</div>`,`
      <li>
        <div class="news-date">${n.date}</div>
        ${t}
      </li>`}).join("")}}const va=[{id:"bio_ijazah",answer:"Bio Ijazah adalah layanan verifikasi dan cetak biodata ijazah resmi Untan. Akses melalui xandria.pduntan.id/login menggunakan akun mahasiswa."},{id:"satu_untan",answer:"SATU UNTAN adalah portal terpadu sistem informasi Universitas Tanjungpura. Tersedia di satu.untan.ac.id untuk KRS, nilai, transkrip, dan layanan akademik lainnya."},{id:"cek_surat",answer:`Cek status surat di halaman Cek Surat portal: infobakmipa.vercel.app/ceksurat.html
Masukkan Nama atau NIM, pilih Himpunan, pilih jenis surat, klik Cari.`},{id:"pengajuan_surat",answer:`CARA BUAT SURAT DI FMIPA UNTAN:
1. Buka portal → klik "Jenis Layanan" → pilih jenis surat → isi Google Form → submit
   ATAU scan barcode/QR di slider portal pakai HP
2. Tunggu 1–2 hari kerja (isi pagi → sore bisa jadi)
3. Pantau status di: infobakmipa.vercel.app/ceksurat.html
4. Jika status belum muncul, hubungi bagian akademik sesuai jenis surat (lihat di bawah)

Tidak perlu datang ke kantor. Semua online.

LINK GOOGLE FORM:
- Surat Aktif Kuliah: https://docs.google.com/forms/d/e/1FAIpQLSdIvl3vcqG8G-AKpRcC1DKh6Hfq8_MYGB8VuK26okxMEyZRgg/viewform
- SKL: https://docs.google.com/forms/d/e/1FAIpQLSeleQzeEElYtt8PoW8tHm5wL4t6GJbDzfRjhQ6Bwn3KHtSzbg/viewform
- Surat Cuti: https://docs.google.com/forms/d/e/1FAIpQLSfcv_u0UlgJgJ_PuKC_ELfI5UUwLufISUdXlNl37VD_NMSAOg/viewform
- Surat Pengunduran Diri: https://docs.google.com/forms/d/e/1FAIpQLSfzD_poqcDT_U3d_vmsZOPFXewTzubYSZyNY7FpyObYL7FKGA/viewform
- Surat Pindah Kuliah: https://docs.google.com/forms/d/e/1FAIpQLSeoHxHVHXY86d_acF92oZfyxzsQxoPrppB1z5bFfE3oRRKqMw/viewform
- Surat Pengembalian Dana: https://docs.google.com/forms/d/e/1FAIpQLSeev6qHtma1S3mRIbgzBHgqEtqnlLw5rW3t13z9Mk4H03RVeg/viewform
- Pernyataan Terbit Artikel: https://docs.google.com/forms/d/e/1FAIpQLSdiZVbf77fVqu8yYe1D_grYFDNF-mIl26n6KYKvuMdOS-0YJw/viewform

JIKA SURAT BELUM ADA / ADA KENDALA — HUBUNGI:
- SKL → Onny Suryana (Bag. Akademik, homebase Ruang Baca) via menu Kontak portal
- Surat Aktif Kuliah → Agung (Bag. Kemahasiswaan) via menu Kontak portal
- Surat Cuti, Pindah, Pengunduran Diri → Bu Ana (Bag. Akademik) via menu Kontak portal
- Surat Izin Kegiatan (MSI, HIMATIKA, HIMASTA, HIMAFIS, HIMABIO, HMG, KOMIK, ART LABORATORY) → Thareq (Bag. Akademik) via menu Kontak portal
- Surat Izin Kegiatan (HIMASTER, HMIK, HMSI, BEM, DPM, FIKRI, IMASIKA, HIMKI) → Onny Suryana (Bag. Akademik, homebase Ruang Baca) via menu Kontak portal`},{id:"sekar",answer:"SEKAR (Sistem Informasi Ruangan) adalah aplikasi peminjaman ruangan FMIPA Untan. Akses di sekarfmipa.vercel.app."},{id:"kontak_layanan",answer:`Layanan akademik FMIPA Untan:
- Loket Akademik: Senin-Kamis 08.00-15.00 WIB (Jumat WFH via online/WhatsApp)
- Konsultasi & pembayaran UKT: Ruang Loket Akademik, Senin-Kamis 08.00-15.00 WIB
- Kontak via WhatsApp tersedia di menu Kontak portal (Senin-Jumat)`},{id:"ukt_info",answer:`Informasi UKT FMIPA Untan:

KONSULTASI & PEMBAYARAN UKT
Dilaksanakan di Ruang Loket Akademik.
Hari: Senin - Kamis | Waktu: 08.00 - 15.00 WIB

PENGURANGAN UKT 50% (Mahasiswa Tahap Kuliah Akhir)
Syarat:
- Mahasiswa S1 minimal semester 9 ATAU D3 minimal semester 7
- Sisa mata kuliah yang belum ditempuh maksimal 6 SKS
- Tidak berlaku jika sisa SKS lebih dari 6
- SKS perbaikan nilai tetap dihitung dalam akumulasi total SKS
- Jika sudah membayar 50%, wajib melunasi sisa 50% sebelum Ujian Akhir Semester

DOKUMEN YANG DIPERLUKAN:
1. Surat Permohonan Pengurangan Pembayaran UKT
2. Transkrip nilai terakhir
3. Lembar Isian Rencana Studi (LIRS)
4. Surat Pernyataan Tidak Sedang Menerima Beasiswa
5. Surat Pernyataan Tanggung Jawab Mutlak (SPTJM)

TATA CARA PENGAJUAN:
1. Isi formulir permohonan sesuai format
2. Lengkapi bukti pendukung
3. Ajukan maksimal 2 minggu sebelum daftar ulang
4. Disampaikan ke fakultas melalui Wakil Dekan Bidang Keuangan dan Umum
5. WD Keuangan akan verifikasi dan terbitkan Surat Rekomendasi`},{id:"ukt_penanggung_jawab",answer:`Untuk informasi lebih lanjut soal UKT, silakan hubungi Pak Prima atau Bu Warsi di Ruang Akademik FMIPA Untan, atau melalui menu Kontak di portal.
Jam layanan: Senin-Kamis 08.00-15.00 WIB.`},{id:"pejabat_struktural",answer:`PEJABAT STRUKTURAL FMIPA UNTAN (per Juli 2026):

DEKANAT:
- Dekan: Prof. Dr. Gusrizal, S.Si., M.Si.
- Wakil Dekan Bid. Akademik: Yudha Arman, S.Si, M.Si., D.Sc.
- Wakil Dekan Bid. Keuangan & Umum: Dr. Evi Noviani, S.Si., M.Si.
- Wakil Dekan Bid. Kemahasiswaan & Alumni: Tedy Rismawan, S.Kom., M.Cs.

KETUA JURUSAN:
- Matematika: Dr. Yundari, S.Si., M.Sc.
- Fisika: Dr. Bintoro Siswo Nugroho, S.Si., M.Si.
- Kimia: Dr. Anis Shofiyani, S.Si., M.Si.
- Biologi: Dr. Dwi Gusmalawati, S.Si., M.Si.
- Ilmu Kelautan: Dr. Apriansyah, S.Si., M.Si.
- RSK & Sisfo: Arif Bijaksana Putra Negara, S.Kom., M.Kom.

KOORDINATOR PRODI:
- Matematika: Dr. Bayu Prihandono, S.Si., M.Sc.
- Statistika: Dr. Evy Sulistianingsih, S.Si., M.Sc.
- Fisika: Dr. Azrul Azwar, S.Si., M.Si.
- Kimia: Dr. Winda Rahmalia, S.Si., M.Si.
- Geofisika: Dr. Yoga Satria Putra, S.Si., M.Si.

KEPALA LABORATORIUM:
- Lab Matematika: Fransiskus Fran, S.Si., M.Si.
- Lab Statistika: Shantika Martha, S.Si., M.Si.
- Lab Fisika Dasar: Boni Pahlanop Lapanporo, S.Si., M.Sc.
- Lab Fisika Lanjut & Komputasi: Dr. Dwiria Wahyuni, S.Si., M.Sc.
- Lab Geofisika & SIG: Dr. Joko Sampurno, S.Si., M.Si.
- Lab Kimia: Dr. Nurlina, S.Si., M.Sc.
- Lab Bioteknologi & Riset: Adhitiyawarman, S.Si., M.Si., Ph.D.
- Lab Biologi: Dr. Zulfa Zakiah, S.Si., M.Si.
- Lab Zoologi: Ari Hepi Yanti, S.Si., M.Sc.
- Lab Ilmu Kelautan: Warsidah, S.Si., M.Si., Apt.
- Lab Pemrograman & Komputasi: Uray Ristian, S.Kom., M.Kom.
- Lab Sistem Informasi: Ferdy Febriyanto, S.Kom., M.Kom.

KEPALA BAGIAN:
- Kepala Bagian Tata Usaha: Eva Novianti Hestivera, S.T., S.E., M.M.
- Pengadministrasi Akademik: Sakdiana`},{id:"dosen_fmipa",answer:`=== DATA DOSEN FMIPA UNTAN (per Juli 2026) ===

[Biologi]
  • Prof. Dr. Dra. Siti Khotimah, M.Si. | Guru Besar | Gol. IV/d
  • Prof. Dr. Rafdinal, S.Si., M.Si. | Guru Besar | Gol. IV/c
  • Dr. Elvi Rusmiyanto Pancaning Wardoyo, S.Si., M.Si. | Lektor Kepala | Gol. IV/b
  • Riza Linda, S.Si., M.Si. | Lektor Kepala | Gol. IV/a
  • Dr. Kustiati, S.Si., M.Si. | Lektor Kepala | Gol. IV/c
  • Masnur Turnip, S.Si., M.Sc. | Lektor | Gol. III/d
  • Mukarlina, S.Si., M.Si. | Lektor | Gol. III/d
  • Dr. Zulfa Zakiah, S.Si., M.Si. | Lektor | Gol. III/d | Jabatan: Kepala Laboratorium Biologi
  • Irwan Lovadi, S.Si., M.App.Sc., Ph.D. | Lektor | Gol. III/d
  • Siti Ifadatin, S.Si., M.Si. | Lektor | Gol. III/d | Jabatan: Sekretaris Jurusan Biologi
  • Dr. Junardi, S.Si., M.Si. | Lektor Kepala | Gol. IV/a
  • Ari Hepi Yanti, S.Si., M.Sc. | Lektor Kepala | Gol. III/d | Jabatan: Kepala Laboratorium Zoologi
  • Dr. Dwi Gusmalawati, S.Si., M.Si. | Lektor | Gol. III/c | Jabatan: Ketua Jurusan Biologi
  • Rahmawati, S.Si., M.Sc. | Lektor | Gol. III/c
  • Diah Wulandari Rousdy, S.Si., M.Sc. | Lektor | Gol. III/c
  • Riyandi, S.Si., M.Si. | Asisten Ahli | Gol. III/b
  • Firman Saputra, S.Si., M.Sc. | Asisten Ahli | Gol. III/b
  • Tri Rima Setyawati, S.Si., M.Si. | Lektor | Gol. III/d | Status: TUGAS BELAJAR

[Fisika]
  • Yudha Arman, S.Si, M.Si., D.Sc. | Lektor Kepala | Gol. III/d | Jabatan: Wakil Dekan Bid. Akademik
  • Dr. Bintoro Siswo Nugroho, S.Si., M.Si. | Lektor Kepala | Gol. IV/b | Jabatan: Ketua Jurusan Fisika
  • Hasanuddin, S.Si., M.Si., Ph.D. | Lektor | Gol. III/d | Jabatan: Sekretaris Jurusan Fisika
  • Dr. Azrul Azwar, S.Si., M.Si. | Lektor | Gol. III/d | Jabatan: Koordinator Prodi Fisika
  • Dr. Dwiria Wahyuni, S.Si., M.Sc. | Lektor | Gol. III/d | Jabatan: Kepala Lab Fisika Lanjut & Komputasi
  • Boni Pahlanop Lapanporo, S.Si., M.Sc. | Lektor | Gol. III/d | Jabatan: Kepala Lab Fisika Dasar
  • Mariana Bara'allo Malino, S.Si., M.Sc. | Lektor | Gol. III/c
  • Dr. Nurhasanah, S.Si., M.Si. | Lektor | Gol. III/d
  • Dr. Abdul Muid, S.Si., M.Si. | Asisten Ahli | Gol. III/b
  • Asifa Asri, S.Si., M.Si. | Asisten Ahli | Gol. III/b
  • Yuris Sutanto, M.Sc. | Asisten Ahli | Gol. III/b

[Geofisika]
  • Dr. Yoga Satria Putra, S.Si., M.Si. | Lektor Kepala | Gol. IV/a | Jabatan: Koordinator Prodi Geofisika
  • Dr. Andi Ihwan, S.Si., M.Si. | Lektor Kepala | Gol. IV/c
  • Dr. Muhammad Ishak Jumarang, S.Si., M.Si. | Lektor Kepala | Gol. IV/c
  • Dr. Joko Sampurno, S.Si., M.Si. | Lektor Kepala | Gol. III/d | Jabatan: Kepala Lab Geofisika & SIG
  • Muliadi, S.Si., M.Si. | Lektor Kepala | Gol. IV/a
  • Zulfian, S.Si., M.Si. | Lektor | Gol. III/c
  • Irfana Diah Faryuni, S.Si., M.Si. | Asisten Ahli | Gol. III/b
  • Radhitya Perdhana, S.Si., M.Sc. | Asisten Ahli | Gol. III/b
  • Riza Adriat, S.Si., M.Si. | Lektor | Gol. III/b | Status: TUGAS BELAJAR
  • Muhardi, S.Si., M.Sc. | Asisten Ahli | Gol. III/b | Status: TUGAS BELAJAR

[Ilmu Kelautan]
  • Dr. Apriansyah, S.Si., M.Si. | Lektor | Gol. III/c | Jabatan: Ketua Jurusan Ilmu Kelautan
  • Warsidah, S.Si., M.Si., Apt. | Lektor | Gol. III/d | Jabatan: Kepala Lab Ilmu Kelautan
  • Yusuf Arief Nurrahman, S.Kel., M.Si. | Asisten Ahli | Gol. III/b | Jabatan: Sekretaris Jurusan Ilmu Kelautan
  • Arie Antasari Kushadiwijayanto, S.Si., M.Si. | Lektor | Gol. III/c
  • Mega Sari Juane Sofiana, S.Si., M.Sc. | Lektor | Gol. III/c
  • Sukal Minsas, S.Si., M.Si. | Lektor | Gol. III/b
  • Nora Idiawati, S.Si., M.Si. | Lektor | Gol. III/d | Status: TUGAS BELAJAR

[Kimia]
  • Prof. Berlian Sitorus, S.Si., M.Si., M.Sc., Ph.D. | Guru Besar | Gol. IV/b
  • Prof. Rudiyansyah, S.Si., M.Si., Ph.D. | Guru Besar | Gol. IV/c
  • Dr. Nelly Wahyuni, S.Si., M.Si. | Lektor Kepala | Gol. IV/c
  • H. Afghani Jayuska, S.Si., M.Si. | Lektor Kepala | Gol. IV/c
  • Titin Anita Zaharah, S.Si., M.Sc. | Lektor Kepala | Gol. IV/c
  • Puji Ardiningsih, S.Si., M.Si. | Lektor Kepala | Gol. IV/c
  • Dr. Anthoni Batahan Aritonang, S.Si., M.Si. | Lektor Kepala | Gol. IV/a
  • Dr. Endah Sayekti, S.Si., M.Si. | Lektor Kepala | Gol. IV/c | Jabatan: Sekretaris Jurusan Kimia
  • Dr. Winda Rahmalia, S.Si., M.Si. | Lektor Kepala | Gol. IV/a | Jabatan: Koordinator Prodi S1 Kimia
  • Dr. Lia Destiarti, S.Si., M.Si. | Lektor Kepala | Gol. IV/a | Jabatan: Koordinator Prodi Magister Kimia
  • Adhitiyawarman, S.Si., M.Si., Ph.D. | Lektor | Gol. III/d | Jabatan: Kepala Lab Bioteknologi & Riset
  • Dr. Nurlina, S.Si., M.Sc. | Lektor | Gol. III/d | Jabatan: Kepala Lab Kimia
  • Intan Syahbanu, S.Si., M.Si. | Lektor | Gol. III/d | Status: TUGAS BELAJAR

[Magister Kimia (S2)]
  • Prof. Dr. Gusrizal, S.Si., M.Si. | Guru Besar | Gol. IV/c | Jabatan: Dekan FMIPA
  • Dr. Andi Hairil Alimuddin, S.Si., M.Si. | Lektor Kepala | Gol. IV/c
  • Dr. Anis Shofiyani, S.Si., M.Si. | Lektor | Gol. III/d | Jabatan: Ketua Jurusan Kimia
  • Prof. Dr. H. Thamrin Usman, DEA. | Guru Besar | Gol. IV/e
  • Prof. Risa Nofiani, S.Si., M.Si., Ph.D. | Guru Besar | Gol. IV/d
  • Dr. Muhamad Agus Wibowo, S.Si., M.Si. | Lektor Kepala | Gol. IV/c
  • Dr. Ari Widiyantoro, S.Si., M.Si. | Lektor Kepala | Gol. IV/a

[Matematika]
  • Dr. Evi Noviani, S.Si., M.Si. | Lektor Kepala | Gol. IV/a | Jabatan: Wakil Dekan Bid. Keuangan & Umum
  • Dr. Yundari, S.Si., M.Sc. | Lektor Kepala | Gol. IV/a | Jabatan: Ketua Jurusan Matematika
  • Dr. Nilamsari Kusumastuti, S.Si., M.Sc. | Lektor | Gol. III/d | Jabatan: Sekretaris Jurusan Matematika
  • Dr. Bayu Prihandono, S.Si., M.Sc. | Lektor | Gol. III/d | Jabatan: Koordinator Prodi Matematika
  • Fransiskus Fran, S.Si., M.Si. | Lektor | Gol. III/c | Jabatan: Kepala Lab Matematika
  • Drs. Helmi, M.Si. | Lektor | Gol. III/d
  • Yudhi, S.Si., M.Si. | Asisten Ahli | Gol. III/b
  • Nur'ainul Miftahul Huda, S.Si., M.Si. | Lektor | Gol. III/c
  • Meliana Pasaribu, S.Pd., M.Sc. | Asisten Ahli | Gol. III/b
  • Mariatul Kiftiah, S.Si., M.Sc. | Lektor | Gol. III/d | Status: TUGAS BELAJAR

[Rekayasa Sistem Komputer]
  • Tedy Rismawan, S.Kom., M.Cs. | Lektor | Gol. III/d | Jabatan: Wakil Dekan Bid. Kemahasiswaan & Alumni
  • Syamsul Bahri, S.Kom., M.Cs. | Lektor | Gol. III/c | Jabatan: Ketua Jurusan RSK
  • Dwi Marisa Midyanti, ST., M.Cs. | Lektor Kepala | Gol. IV/a | Jabatan: Sekretaris Jurusan RSK
  • Uray Ristian, S.Kom., M.Kom. | Lektor | Gol. III/c | Jabatan: Kepala Lab Pemrograman & Komputasi
  • Drs. Cucu Suhery, MA. | Lektor | Gol. III/d
  • Dedi Triyanto, ST., MT. | Lektor | Gol. III/d
  • Rahmi Hidayati, S.Kom., M.Cs. | Lektor | Gol. III/d
  • Ikhwan Ruslianto, S.Kom., M.Cs. | Lektor | Gol. III/d
  • Irma Nirmala, ST., MT. | Lektor | Gol. III/c
  • Suhardi, ST., M.Eng. | Asisten Ahli | Gol. III/b
  • Hirzen Hasfani, M.Cs. | Asisten Ahli | Gol. III/b
  • Kartika Sari, M.Cs. | Asisten Ahli | Gol. III/b
  • Kasliono, S.Mat., M.Cs. | Asisten Ahli | Gol. III/b

[Sistem Informasi]
  • Renny Puspita Sari, ST., MT. | Lektor | Gol. III/d | Jabatan: Ketua Jurusan Sistem Informasi
  • Ibnur Rusi, S.Kom., MM. | Lektor | Gol. III/c | Jabatan: Sekretaris Jurusan Sistem Informasi
  • Ferdy Febriyanto, S.Kom., M.Kom. | Asisten Ahli | Gol. III/b | Jabatan: Kepala Lab Sistem Informasi
  • Ilhamsyah, S.Si., M.Cs. | Lektor | Gol. III/d
  • Nurul Mutiah, ST., MT. | Lektor | Gol. III/d
  • Dian Prawira, ST., M.Eng. | Lektor | Gol. III/c

[Statistika]
  • Neva Satyahadewi, S.Si., M.Sc. | Lektor Kepala | Gol. IV/a
  • Dr. Evy Sulistianingsih, S.Si., M.Sc. | Lektor | Gol. III/d | Jabatan: Koordinator Prodi Statistika
  • Shantika Martha, S.Si., M.Si. | Lektor | Gol. III/d | Jabatan: Kepala Lab Statistika
  • Nurfitri Imro'ah, S.Si., M.Si. | Lektor | Gol. III/c
  • Hendra Perdana, S.Si., M.Sc. | Asisten Ahli | Gol. III/b
  • Wirda Andani, M.Si. | Asisten Ahli | Gol. III/b
  • Yuyun Eka Pratiwi, S.Si., M.Aktr. | Asisten Ahli | Gol. III/b
  • Ray Tamtama, M.Si. | Gol. III/b
  • Naomi Nessyana Debataraja, S.Si., M.Si. | Lektor | Gol. III/d | Status: TUGAS BELAJAR
  • Setyo Wira Rizki, S.Si., M.Sc. | Lektor | Gol. III/c | Status: TUGAS BELAJAR

=== TENAGA KEPENDIDIKAN PNS & PPPK ===
  • Eva Novianti Hestivera, S.T., S.E., M.M. | Gol. IV/a | Kepala Bagian Tata Usaha
  • Rinny Yusnita Absari, S.E., M.M. | Gol. IV/a | Pengelola Data | Bag. Keuangan
  • Rachmat Jamaluddin, A.Md. | Gol. III/c | Bendahara Pengeluaran Pembantu | Bag. Keuangan
  • Eko Sri Haryati, A.Md. | Gol. III/b | Pengelola Data | Bag. Keuangan
  • Sakdiana | Gol. III/a | Pengadministrasi Akademik | Bag. Akademik
  • Megawati June, S.Mat. | Pranata Lab. Pendidikan | Lab. Statistika
  • Muhammad Hariski, S.Mat. | Pranata Lab. Pendidikan | Lab. Sistem Informasi
  • Tiara Nusa Putri, S.Si. | Pranata Lab. Pendidikan | Lab. Geofisika
  • Apriliandi, S.Mat. | Pranata Lab. Pendidikan | Lab. Matematika
  • Asterina, S.Si. | Pranata Lab. Pendidikan | Lab. Fisika Dasar
  • Filza Buana Putra, S.Mat. | Pranata Lab. Pendidikan | Lab. Pemrograman & Komputasi
  • Yoga Pratama, S.Si. | Pranata Lab. Pendidikan | Lab. Bioteknologi dan Riset
  • Toni | Pengadministrasi Perkantoran | Bag. Kepegawaian
  • Wiwid Widyana, S.Si. | Penata Layanan Operasional | Bag. Kepegawaian
  • Riyo Riadi, S.Mat. | Penata Layanan Operasional | Bag. Kepegawaian
  • Budi Suryadarma | Pengadministrasi Perkantoran | Bag. Keuangan
  • Suandi, S.Si. | Penata Layanan Operasional | Bag. Keuangan
  • Nayla Afifah, S.Hut. | Penata Layanan Operasional | Bag. Umum
  • Supriani, S.Hut. | Penata Layanan Operasional | Bag. Umum
  • Peri Suhendra | Operator Layanan Operasional | Bag. Umum
  • Sahroni | Operator Layanan Operasional | Bag. Umum
  • Susanti, S.Pd. | Penata Layanan Operasional | Bag. Umum / Staf Dekan
  • Hajjar | Operator Layanan Operasional | Bag. Umum
  • Onny Suryana | Pengadministrasi Perkantoran | Bag. Akademik
  • Primanita Putri Darmanto, S.Pd., M.Pd. | Penata Layanan Operasional | Bag. Akademik
  • Agung Setyowahyu, A.Md.Kesling. | Pengelola Layanan Operasional | Bag. Akademik
  • Thareq Abdul Aziz, A.Md. | Pengelola Layanan Operasional | Bag. Akademik
  • Prima, S.S.T. | Penata Layanan Operasional | Administrasi Jurusan Matematika & Statistika
  • Surya Darma, A.Md. | Pengelola Layanan Operasional | Administrasi Jurusan Ilmu Kelautan & Fisika
  • Warsi Kurnia Rahayu, S.Si | Penata Layanan Operasional | Administrasi Jurusan Kimia
  • M. Khairuddin, A.Md. | Pengelola Layanan Operasional | Administrasi Jurusan Biologi
  • Agus Setiawan, S.Si. | Penata Layanan Operasional | Lab. Fisika Dasar
  • Emma Khairiah, S.Si | Penata Layanan Operasional | Lab. Biologi
  • Harianto, S.Si. | Penata Layanan Operasional | Lab. Ilmu Kelautan

=== TENAGA KONTRAK & PHL ===
  • Sri Rahayu, S.Si | Tenaga Laboran | Lab. Zoologi
  • Margie Surahman, S.Si. | Tenaga Laboran | Lab. Biologi
  • Titik Lestari, S.Si. | Laboran Kimia | Lab. Kimia
  • Muhammad Raymount Abdahu, S.Kom. | Tenaga Administrasi | Jurusan RSK dan Sistem Informasi
  • Hamdi, S.Kom. | TIK | Bag. Akademik`},{id:"program_studi",answer:`Program Studi di FMIPA Untan:
S-1: Matematika, Fisika, Kimia, Biologi, Rekayasa Sistem Komputer (Siskom), Sistem Informasi (Sisfo), Statistika, Ilmu Kelautan, Geofisika
S-2: Kimia

Mahasiswa Aktif (2026): 2.370 | Lulus: 100`},{id:"kalender_akademik",answer:"Kalender akademik FMIPA Untan mengikuti kalender Universitas Tanjungpura. Info terbaru tersedia di slider portal atau hubungi bagian akademik."},{id:"wisuda_periode_iv",answer:`WISUDA PERIODE IV T.A. 2025/2026:
- Tanggal wisuda: 29–30 Juli 2026
- Batas daftar: 10 Juli 2026 (via operator fakultas)
- Biaya D3/S1: GRATIS
- Biaya S2/S3/Profesi: Rp 695.000
- Biaya toga: Rp 325.000 → Bank Kalbar rek. 1012556566 a.n. Apollo Mas CV
- Ambil toga: Untan Smart Store, Gedung Perpustakaan Lt.2 (14–24 Juli 2026)
- Batas serahkan berkas: 9 Juli 2026`},{id:"syarat_berkas_wisuda",answer:`SYARAT BERKAS WISUDA FMIPA UNTAN (Periode IV 2025/2026):
1. Print screenshot biodata Satu Untan
2. Print screenshot PISN dari Bio Ijazah
3. Isi biodata online akademik: https://s.id/BiodataIV-26MIPA
4. Bukti isi biodata online
5. Fotokopi Berita Acara Sidang Skripsi
6. Surat bebas biaya kuliah (ditandatangani WD Keuangan)
7. Surat pengantar penyerahan Skripsi/TA
8. Surat bukti terbit jurnal (ditandatangani WD Akademik)
9. Fotokopi ijazah SMA/S1 dilegalisir 2 lembar
10. Fotokopi KTP 200x200px — 2 lembar
11. Fotokopi KK — 2 lembar
12. Fotokopi surat cuti (jika pernah cuti)
13. Surat pernyataan pengambilan ijazah (materai Rp 10.000)
14. Bukti bayar toga
15. Bukti bayar wisuda (khusus S2)`},{id:"beasiswa_bsi",answer:`BEASISWA BSI SCHOLARSHIP INSPIRASI 2026:
- Open Recruitment: 8 Juni – 3 Juli 2026
- Seleksi Administrasi: 6–13 Juli 2026
- Paper Test: 17–19 Juli 2026
- Pengumuman: 3 Agustus 2026
- Daftar: linktr.ee/BSI_Scholarship
- Info: Iswandi (0853-9353-7252) / Hendri Purwanto (0896-8965-7258)`},{id:"tracer_study",answer:`Tracer Study FMIPA Untan sedang dalam pengembangan (progress ~35%).
Platform pelacakan karir alumni. Target launch: September 2026.
Info: infobakmipa.vercel.app/tracer-study.html`},{id:"identitas_pembuat",answer:"Portal Akademik & Kemahasiswaan FMIPA Untan dibuat dan dikembangkan oleh Ceo Menyamar. Kreator: https://www.tiktok.com/@koecheng.sol"}];typeof window<"u"&&(window.KIRANA_KB=va);const La="/api/kirana",Ma=`
=== PORTAL RESMI: AKADEMIK & KEMAHASISWAAN FMIPA UNTAN ===
Nama Lengkap  : Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)
Universitas   : Universitas Tanjungpura (Untan), Pontianak, Kalimantan Barat

SUMBER DATA UTAMA:
1. Portal terbaru : https://infobakmipa.vercel.app
2. Mirror portal  : https://portalmipa.vercel.app
3. SEKAR ruangan  : https://sekarfmipa.vercel.app
4. Universitas    : https://untan.ac.id
5. Fakultas MIPA  : https://mipa.untan.ac.id website resmi

PROGRAM STUDI S-1: Matematika, Fisika, Kimia, Biologi, Siskom, Ilmu Kelautan,
Sisfo, Statistika, Geofisika. S-2: Kimia.

JAM LAYANAN: Senin-Kamis (kantor) | Jumat WFH via online/WhatsApp.

LAYANAN: Bio Ijazah → xandria.pduntan.id | SATU UNTAN → satu.untan.ac.id
Cek Surat & Jenis Layanan → infobakmipa.vercel.app | SEKAR → sekarfmipa.vercel.app

SURAT: Aktif Kuliah, SKL, Cuti, Pindah, Pengunduran Diri. Proses 1-3 hari kerja.

DATA 2026: Mahasiswa Aktif 2.370 | Lulus 100
Wisuda Periode IV: 29–30 Juli 2026

KONTAK: WhatsApp via menu Kontak di infobakmipa.vercel.app (Senin-Jumat)
`.trim();function Ea(){return typeof window.KIRANA_KB>"u"?"":window.KIRANA_KB.filter(a=>!["kata_kasar","pujian_diri"].includes(a.id)).map(a=>{const e=a.answer.replace(/<br\s*\/?>/gi,`
`).replace(/<a[^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/gi,"$2 ($1)").replace(/<[^>]+>/g,"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/\n{3,}/g,`

`).trim();return`[${a.id}]
${e}`}).join(`

`)}async function Ka(){var a,e;try{const n=await fetch("/data/portal-data.json");if(!n.ok)return"";const t=await n.json(),i=[];if((a=t.news)!=null&&a.length&&(i.push("=== BERITA TERKINI (infobakmipa.vercel.app) ==="),t.news.forEach(o=>i.push(`• [${o.date}] ${o.text}`))),(e=t.slides)!=null&&e.length){i.push(`
=== INFO SLIDER ===`);const o=new Set;t.slides.filter(r=>o.has(r.title)?!1:(o.add(r.title),!0)).forEach(r=>i.push(`• [${r.tag}] ${r.title}${r.desc?": "+r.desc:""}`))}return i.join(`
`)}catch{return""}}function Pa(a){const e=Ea();return`Kamu adalah Kirana, asisten virtual AI Portal Akademik & Kemahasiswaan FMIPA Universitas Tanjungpura (Untan), Pontianak.

KEPRIBADIAN: Ramah, hangat, natural. Seperti kakak tingkat yang helpful. Pakai emoji sesekali 😊. Jangan kaku atau robotic.

CARA MENJAWAB:
- Jawab natural layaknya AI asisten pintar — tidak harus selalu soal kampus
- Pertanyaan umum (hari libur, presiden, info dunia, dll) → jawab langsung dari pengetahuanmu
- Pertanyaan soal FMIPA/Untan → prioritaskan data di bawah ini
- Jangan paksa redirect ke website kalau kamu sudah tahu jawabannya
- Hanya arahkan ke website jika info memang perlu dikonfirmasi atau tidak tersedia

TOPIK SENSITIF (Politik, SARA, konten vulgar): tolak dengan santai dan ajak balik ke topik kampus.

FORMAT: Bahasa Indonesia natural, singkat & padat. Bullet point hanya jika memang perlu.

=== DATA REFERENSI FMIPA UNTAN ===
${Ma}
${a?`
`+a:""}
${e?`
=== DETAIL DATA PEGAWAI & LAYANAN ===
`+e:""}

Ingat konteks percakapan sebelumnya. Tetap ramah dan helpful! 😊`}function ta(a){let e=a.replace(/<think>[\s\S]*?<\/think>/gi,"").trim();const n=e.search(/<think>/i);return n!==-1&&(e=e.slice(0,n).trim()),e}function ia(a){let e=a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>").replace(/__([^_\n]+)__/g,"<strong>$1</strong>").replace(new RegExp("(?<!\\*)\\*([^*\\n]+)\\*(?!\\*)","g"),"<em>$1</em>").replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer" style="color:var(--primary,#2589e9);font-weight:600;">$1</a>').replace(/`([^`\n]+)`/g,'<code style="background:#f3f4f6;padding:1px 5px;border-radius:4px;font-size:12px;font-family:monospace;">$1</code>').replace(/^[•\-\*]\s+(.+)$/gm,"<li>$1</li>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>");return e=e.replace(/(<li>.*?<\/li>(<br>)?)+/g,n=>'<ul style="margin:5px 0 5px 17px;line-height:1.7;">'+n.replace(/<br>/g,"")+"</ul>"),e}let v=[],P=null,b=!1,M=!1;async function oa(){return P===null&&(P=await Ka()),P}function wa(){var a;M||(M=!0,(a=document.getElementById("kiranaOverlay"))==null||a.classList.add("kirana--open"),y())}function w(){var n;M=!1,v=[],(n=document.getElementById("kiranaOverlay"))==null||n.classList.remove("kirana--open");const a=document.getElementById("kiranaLog");a&&(a.innerHTML="");const e=document.getElementById("kiranaChips");e&&(e.style.display=""),setTimeout(()=>{var t;return(t=document.getElementById("kiranaInput"))==null?void 0:t.focus()},200)}function y(){const a=document.getElementById("kiranaLog");a&&(a.scrollTop=a.scrollHeight)}function Ta(a){const e=document.getElementById("kiranaLog");if(!e)return;const n=document.createElement("div");n.className="kirana-msg kirana-msg--user",n.innerHTML=`<div class="kirana-bubble kirana-bubble--user">${a.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`,e.appendChild(n),y()}function Ba(){const a=document.getElementById("kiranaLog");if(!a)return null;const e=document.createElement("div");return e.className="kirana-msg kirana-msg--bot",e.innerHTML=`<img class="kirana-avatar" src="${X}" alt="Kirana">
    <div class="kirana-bubble kirana-bubble--bot"></div>`,a.appendChild(e),y(),e.querySelector(".kirana-bubble--bot")}function Da(){const a=document.getElementById("kiranaLog");if(!a)return;const e=document.createElement("div");e.className="kirana-msg kirana-msg--bot",e.id="kiranaTyping",e.innerHTML=`<img class="kirana-avatar" src="${X}" alt="Kirana">
    <div class="kirana-bubble kirana-bubble--bot kirana-typing"><span></span><span></span><span></span></div>`,a.appendChild(e),y()}function D(){var a;(a=document.getElementById("kiranaTyping"))==null||a.remove()}function A(a){const e=document.getElementById("kiranaInput"),n=document.getElementById("kiranaSendBtn");e&&(e.disabled=a),n&&(n.disabled=a)}async function Ga(a,e,n,t,i){var o,r,l,m;try{const u=await fetch(La,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({systemPrompt:a,messages:e})});if(!u.ok){let c=`HTTP ${u.status}`;try{const I=await u.json();(o=I.error)!=null&&o.message&&(c=I.error.message)}catch{}throw new Error(c)}const p=u.body.getReader(),s=new TextDecoder;let S="",d="";for(;;){const{done:c,value:I}=await p.read();if(c)break;S+=s.decode(I,{stream:!0});const N=S.split(`
`);S=N.pop()??"";for(const U of N){if(!U.startsWith("data: "))continue;const J=U.slice(6).trim();if(J==="[DONE]"){t(d);return}try{const H=((m=(l=(r=JSON.parse(J).choices)==null?void 0:r[0])==null?void 0:l.delta)==null?void 0:m.content)??"";if(H){d+=H;const F=ta(d);n.parentElement.style.display==="none"&&(D(),n.parentElement.style.display=""),F?(n.classList.remove("kirana-bubble--thinking"),n.innerHTML=ia(F)):(n.classList.add("kirana-bubble--thinking"),n.innerHTML='<span class="kirana-think-dots"><span></span><span></span><span></span></span>'),y()}}catch{}}}t(d)}catch(u){i(u.message||"Koneksi gagal.")}}async function T(a){if(a=(a||"").trim(),!a||b)return;b=!0;const e=document.getElementById("kiranaInput");e&&(e.value="",e.style.height="auto"),wa();const n=document.getElementById("kiranaChips");n&&(n.style.display="none"),Ta(a),v.push({role:"user",content:a}),A(!0),Da();const t=await oa(),i=Pa(t),o=Ba();if(!o){b=!1,A(!1);return}o.parentElement.style.display="none",await Ga(i,[...v],o,r=>{b=!1,A(!1),D(),o.parentElement.style.display="";const l=ta(r);o.innerHTML=l?ia(l):'<em style="color:#6b7280">Tidak ada respons.</em>',l&&v.push({role:"assistant",content:l}),e==null||e.focus()},r=>{b=!1,A(!1),D(),o.parentElement.style.display="",o.innerHTML=`<div style="color:#b91c1c;display:flex;gap:7px;align-items:flex-start">
        <span>⚠️</span>
        <div><strong style="display:block;margin-bottom:2px">Gagal</strong>
        <span style="font-size:11.5px;color:#6b7280">${r}</span></div></div>`,e==null||e.focus()})}(function(){const a=["Hai, bingung? Tanya aku saja 😊","Info wisuda, jadwal, surat? Tanya aku! 🎓","Mau tau info FMIPA Untan? Yuk tanya! ✨","Ada yang bisa aku bantu hari ini? 💬","Cek surat, beasiswa, kontak? Aku tau! 📋"];let e=0,n=0,t=!1,i=null,o=null,r=null;const l=55,m=28,u=2200,p=600;function s(){if(!o||!r)return;const d=a[e];if(t){if(n--,r.textContent=d.slice(0,n),n===0){t=!1,e=(e+1)%a.length,i=setTimeout(s,p);return}i=setTimeout(s,m)}else{if(n++,r.textContent=d.slice(0,n),r.classList.remove("done"),n===d.length){r.classList.add("done"),i=setTimeout(()=>{t=!0,r.classList.remove("done"),s()},u);return}i=setTimeout(s,l)}}function S(){if(o=document.getElementById("kiranaBubbleHint"),r=document.getElementById("kiranaBubbleText"),!o||!r)return;setTimeout(()=>{o.classList.add("visible"),s()},1200);const d=new MutationObserver(()=>{const I=document.getElementById("kiranaOverlay");I&&(I.classList.contains("kirana--open")?(o.classList.remove("visible"),clearTimeout(i)):(o.classList.add("visible"),n=0,t=!1,s()))}),c=document.getElementById("kiranaOverlay");c&&d.observe(c,{attributes:!0,attributeFilter:["class"]})}document.addEventListener("DOMContentLoaded",S)})();function xa(){const a=document.getElementById("kiranaInput"),e=document.getElementById("kiranaSendBtn"),n=document.getElementById("kiranaCloseBtn"),t=document.getElementById("kiranaOverlay"),i=document.querySelectorAll(".kirana-chip");a&&(e==null||e.addEventListener("click",()=>T(a.value)),a.addEventListener("keydown",o=>{o.key==="Enter"&&!o.shiftKey&&(o.preventDefault(),T(a.value))}),a.addEventListener("input",()=>{a.style.height="auto",a.style.height=Math.min(a.scrollHeight,100)+"px"}),n==null||n.addEventListener("click",w),t==null||t.addEventListener("click",o=>{o.target===t&&w()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&M&&w()}),i.forEach(o=>{o.addEventListener("click",()=>{const r=o.dataset.query||o.textContent.replace(/^[\p{Emoji}\s]+/u,"").trim();T(r)})}),oa().catch(()=>{}))}document.addEventListener("DOMContentLoaded",xa);document.addEventListener("DOMContentLoaded",async()=>{[1,2].forEach(a=>{const e=document.getElementById("track"+a);e&&(e.innerHTML=`
      <div class="slide">
        <div class="slide-bg" style="background:#e8f0fd"></div>
        <div class="slide-overlay"></div>
        <div class="slide-content" style="text-align:center;width:100%;">
          <p style="color:rgba(255,255,255,.8);font-size:13px;">⏳ Memuat...</p>
        </div>
      </div>`)});try{const a=await la();_(a.slides||[]),j(a.news||[]),C()}catch(a){console.error("Gagal memuat data dari server:",a);try{const e=localStorage.getItem("portal_v3_cache");if(e){const{data:n}=JSON.parse(e);_(n.slides||[]),j(n.news||[]),C(),console.info("Data dimuat dari cache.")}}catch{console.warn("Cache juga tidak tersedia.")}}});const Ra=[{name:"Surat Aktif Kuliah",desc:"Permohonan surat keterangan aktif kuliah",url:"https://docs.google.com/forms/d/e/1FAIpQLSdIvl3vcqG8G-AKpRcC1DKh6Hfq8_MYGB8VuK26okxMEyZRgg/viewform"},{name:"Surat Keterangan Lulus",desc:"Permohonan SKL sebelum ijazah terbit",url:"https://docs.google.com/forms/d/e/1FAIpQLSeleQzeEElYtt8PoW8tHm5wL4t6GJbDzfRjhQ6Bwn3KHtSzbg/viewform"},{name:"Surat Cuti Kuliah",desc:"Pengajuan cuti semester aktif",url:"https://docs.google.com/forms/d/e/1FAIpQLSfcv_u0UlgJgJ_PuKC_ELfI5UUwLufISUdXlNl37VD_NMSAOg/viewform"},{name:"Surat Pengunduran Diri",desc:"Permohonan pengunduran diri mahasiswa",url:"https://docs.google.com/forms/d/e/1FAIpQLSfzD_poqcDT_U3d_vmsZOPFXewTzubYSZyNY7FpyObYL7FKGA/viewform"},{name:"Surat Pindah Kuliah",desc:"Pengajuan pindah ke perguruan tinggi lain",url:"https://docs.google.com/forms/d/e/1FAIpQLSeoHxHVHXY86d_acF92oZfyxzsQxoPrppB1z5bFfE3oRRKqMw/viewform"},{name:"Surat Pengembalian Dana",desc:"Permohonan surat pengembalian dana pendidikan",url:"https://docs.google.com/forms/d/e/1FAIpQLSeev6qHtma1S3mRIbgzBHgqEtqnlLw5rW3t13z9Mk4H03RVeg/viewform"},{name:"Pernyataan Terbit Artikel Mahasiswa",desc:"Surat Pernyataan Pembimbing Terhadap Artikel Mahasiswa yang belum berstatus terbit",url:"https://docs.google.com/forms/d/e/1FAIpQLSdiZVbf77fVqu8yYe1D_grYFDNF-mIl26n6KYKvuMdOS-0YJw/viewform"}],z=[{bg:"#e8f0fd",text:"#1a4f8a"},{bg:"#e6f7f0",text:"#0f6e56"},{bg:"#fef3e2",text:"#854f0b"},{bg:"#fce8f3",text:"#993556"},{bg:"#eeedfe",text:"#3c3489"},{bg:"#fcebeb",text:"#791f1f"},{bg:"#eaf3de",text:"#27500a"},{bg:"#f1efe8",text:"#444441"}];function Na(a){const e=document.getElementById("lp-list");if(!a.length){e.innerHTML='<div class="lp-empty">Layanan tidak ditemukan</div>',document.getElementById("lp-count").textContent="0 layanan";return}document.getElementById("lp-count").textContent=a.length+" layanan tersedia",e.innerHTML=a.map((n,t)=>{const i=z[t%z.length];return`
      <a class="lp-item" href="${n.url}" target="_blank" rel="noopener">
        <div class="lp-num" style="background:${i.bg};color:${i.text}">
          ${String(t+1).padStart(2,"0")}
        </div>
        <div class="lp-info">
          <div class="lp-name">${n.name}</div>
          <div class="lp-desc">${n.desc}</div>
        </div>
        <svg class="lp-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>`}).join("")}function Ua(){Na(Ra),document.getElementById("lp-search").value="",document.getElementById("lp-overlay").classList.add("lp-open"),setTimeout(()=>document.getElementById("lp-search").focus(),200)}function V(){document.getElementById("lp-overlay").classList.remove("lp-open")}document.addEventListener("DOMContentLoaded",()=>{var a,e;(a=document.getElementById("btn-jenis-layanan"))==null||a.addEventListener("click",Ua),(e=document.getElementById("lp-overlay"))==null||e.addEventListener("click",n=>{n.target.id==="lp-overlay"&&V()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&V()})});const Ja=[{name:"Pedoman Akademik",desc:"Panduan akademik resmi FMIPA Untan",type:"pdf",url:"https://drive.google.com/uc?export=download&id=14HAQ4UAs_QiSS4Zg0e2M3q1CsHX7zGbX"},{name:"Kalender Akademik",desc:"Jadwal kegiatan akademik tahun berjalan",type:"pdf",url:"https://drive.google.com/uc?export=download&id=1iCfmCHktV68lQ2HEw2C1qkhbFnbB5E71"},{name:"Kode Etik Untan",desc:"Ketentuan etika mahasiswa dan sivitas akademika",type:"pdf",url:"https://drive.google.com/uc?export=download&id=1c093F5EznNhtH_48ZbrsTDRILkvxVBnM"},{name:"Edaran PISN",desc:"Surat edaran terkait PISN",type:"pdf",url:"https://drive.google.com/uc?export=download&id=1iE5rlnfnTdvad4svmKDW1QyZXXh7JRkD"},{name:"Perbaikan Data PDDIKTI",desc:"Prosedur perbaikan data PDDIKTI mahasiswa",type:"pdf",url:"https://drive.google.com/uc?export=download&id=10G0cmbmU1_Fjn3m1SRmLUIzJ3VEdRjK4"},{name:"Prosedur Pengajuan Cuti",desc:"Tata cara pengajuan cuti kuliah",type:"pdf",url:"https://drive.google.com/uc?export=download&id=1fV2sJh5zzpKd65WZ5_2XY2woL0shd-GH"}],Ha=[{name:"Akreditasi UNTAN",desc:"Dokumen status akreditasi institusi",type:"pdf",url:"https://drive.google.com/uc?export=download&id=1mNeuaIv-AsfNzMgqRului4uO5otE6Vbg"},{name:"Draft Syarat Sidang",desc:"Template dokumen syarat sidang",type:"link",url:"https://docs.google.com/document/d/1QQFK0vpB2VYwZN9XRjxiJWRfck6HUCTu/edit"},{name:"Draft Bebas Laboratorium",desc:"Template surat bebas laboratorium",type:"link",url:"https://docs.google.com/document/d/10O5ifI5A3WheOjYs9ZWEKtOAe9NsoB7r/edit"}],W=[{bg:"#e8f0fd",text:"#1a4f8a"},{bg:"#e6f7f0",text:"#0f6e56"},{bg:"#fef3e2",text:"#854f0b"},{bg:"#fce8f3",text:"#993556"},{bg:"#eeedfe",text:"#3c3489"},{bg:"#fcebeb",text:"#791f1f"},{bg:"#eaf3de",text:"#27500a"},{bg:"#f1efe8",text:"#444441"}];function ra(a,e){const n=document.getElementById(a+"-list"),t=document.getElementById(a+"-count");if(n){if(!e.length){n.innerHTML='<div class="lp-empty">Tidak ditemukan</div>',t&&(t.textContent="0 dokumen");return}t&&(t.textContent=e.length+" dokumen"),n.innerHTML=e.map((i,o)=>{const r=W[o%W.length],l=i.type==="link";return`
      <a class="lp-item" href="${l?i.url:"javascript:void(0)"}"
         ${l?'target="_blank" rel="noopener"':""}>
        <div class="lp-num" style="background:${r.bg};color:${r.text}">
          ${String(o+1).padStart(2,"0")}
        </div>
        <div class="lp-info">
          <div class="lp-name">${i.name}</div>
          <div class="lp-desc">${i.desc}</div>
        </div>
        <svg class="lp-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>`}).join(""),n.querySelectorAll(".lp-item").forEach((i,o)=>{const r=e[o];r.type==="pdf"&&i.addEventListener("click",l=>{l.preventDefault(),typeof B=="function"&&B({popupType:"pdf",popupUrl:r.url,title:r.name})})})}}function Fa(){var e;ra("ip",Ja);const a=document.getElementById("ip-search");a&&(a.value=""),(e=document.getElementById("ip-overlay"))==null||e.classList.add("lp-open"),setTimeout(()=>a==null?void 0:a.focus(),200)}function Y(){var a;(a=document.getElementById("ip-overlay"))==null||a.classList.remove("lp-open")}function Oa(){var e;ra("dl",Ha);const a=document.getElementById("dl-search");a&&(a.value=""),(e=document.getElementById("dl-overlay"))==null||e.classList.add("lp-open"),setTimeout(()=>a==null?void 0:a.focus(),200)}function q(){var a;(a=document.getElementById("dl-overlay"))==null||a.classList.remove("lp-open")}document.addEventListener("DOMContentLoaded",()=>{var a,e,n,t;(a=document.getElementById("btn-info-penting"))==null||a.addEventListener("click",Fa),(e=document.getElementById("btn-download"))==null||e.addEventListener("click",Oa),(n=document.getElementById("ip-overlay"))==null||n.addEventListener("click",i=>{i.target.id==="ip-overlay"&&Y()}),(t=document.getElementById("dl-overlay"))==null||t.addEventListener("click",i=>{i.target.id==="dl-overlay"&&q()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&(Y(),q())})});const Q="fmipa_visited";function _a(a,e,n=1200){const t=parseInt(a.textContent.replace(/\D/g,""))||0,i=e-t,o=performance.now();function r(l){const m=l-o,u=Math.min(m/n,1),p=1-Math.pow(1-u,3),s=Math.round(t+i*p);a.textContent=s.toLocaleString("id-ID"),u<1&&requestAnimationFrame(r)}requestAnimationFrame(r)}function Ca(a){const e={"stat-alltime":a.alltime||0,"stat-today":a.today||0,"stat-week":a.thisWeek||0,"stat-month":a.thisMonth||0};Object.entries(e).forEach(([n,t])=>{const i=document.getElementById(n);i&&_a(i,t)})}async function Z(){try{let a;sessionStorage.getItem(Q)?a=await(await fetch("/api/visitor")).json():(a=await(await fetch("/api/visitor",{method:"POST"})).json(),sessionStorage.setItem(Q,"1")),Ca(a)}catch(a){console.warn("Visitor stats tidak tersedia:",a.message)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Z):Z();
