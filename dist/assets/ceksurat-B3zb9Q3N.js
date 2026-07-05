import"./layanan-popup-qGJfxhSt.js";const b=[{name:"Bu Ana",phone:"+6285822020466",initials:"BA"},{name:"Bu Primanita",phone:"+6285750325925",initials:"BP"},{name:"Onny",phone:"+6289651758517",initials:"ON"},{name:"Agung",phone:"+6285882959315",initials:"AG"},{name:"Thareq",phone:"+6285787908406",initials:"TH"},{name:"Pak Prima",phone:"+6282351862413",initials:"PP",desc:"Admin Matematika, Statistika, Operator UKT"},{name:"Surya Dharma",phone:"+62882019580331",initials:"SD",desc:"Admin IlmuKel, Fisika, Geofisika"},{name:"Raymount",phone:"+6285750114081",initials:"RM",desc:"Admin Sisfo, Siskom"},{name:"Bu Warsih",phone:"+6285750079543",initials:"BW",desc:"Admin S1 Kimia, S2 Kimia, Operator UKT"},{name:"Pak Udin",phone:"+6285252036331",initials:"PU",desc:"Admin Biologi"}];function I(e){return`https://wa.me/${e.replace(/[^0-9]/g,"")}`}function y(){var e;(e=document.getElementById("kt-overlay"))==null||e.classList.remove("kt-open")}document.addEventListener("DOMContentLoaded",()=>{var e,t;(e=document.getElementById("kt-close-btn"))==null||e.addEventListener("click",y),(t=document.getElementById("kt-overlay"))==null||t.addEventListener("click",n=>{n.target.id==="kt-overlay"&&y()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&y()})});const L={akademik:{title:"Surat Akademik",subtitle:"Aktif Kuliah, SKL, Cuti, Pindah, Pengunduran Diri",steps:["Masukkan <strong>Nama</strong> atau <strong>NIM Mahasiswa</strong> pada kolom pencarian.","Klik tombol <strong>Cari</strong>.","Jika data ditemukan, klik <strong>Lihat File</strong> untuk download langsung, atau scan QR Code yang muncul.","Jika surat tidak ditemukan / data belum tersedia, hubungi bagian terkait di bawah ini."],contactNote:"Surat tidak ditemukan? Hubungi:",contacts:[{label:"Surat Aktif Kuliah",name:"Agung"},{label:"Surat Keterangan Lulus (SKL)",name:"Onny"},{label:"Surat Cuti / Pindah / Pengunduran Diri",name:"Ana"}]},kegiatan:{title:"Surat Izin Kegiatan",subtitle:"Untuk kegiatan Himpunan Mahasiswa",steps:["Pilih jenis surat <strong>Surat Izin Kegiatan</strong>.","Pilih <strong>Himpunan</strong> kamu pada dropdown yang muncul.","Klik tombol <strong>Cari</strong>.","Jika data ditemukan, pilih kegiatan yang dimaksud, lalu klik <strong>Lihat File</strong> untuk download.","Jika data surat tidak ditemukan, hubungi admin yang membuat surat izin kegiatan di bawah ini."],contactNote:"Surat tidak ditemukan? Hubungi admin yang membuat surat izin kegiatan:",contacts:[{label:"MSI, HIMATIKA, HIMASTA, HIMAFIS, HIMABIO, HMG, KOMIK, Art Laboratory",name:"Thareq"},{label:"HIMASTER, HMIK, HMSI, BEM, DPM, FIKRI, IMASIKA, HIMKI",name:"Onny"}]}},E=`
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 2.9C8.8 2.9 3 8.7 3 15.9c0 2.3.6 4.5 1.8 6.5L3 29.1l6.9-1.8
           c1.9 1 4 1.6 6.1 1.6 7.2 0 13-5.8 13-13S23.2 2.9 16 2.9zm6.4 18.1
           c-.3.8-1.5 1.5-2.1 1.6-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6
           -3-1.3-4.9-4.3-5.1-4.5-.2-.2-1.3-1.7-1.3-3.2s.8-2.3 1.1-2.6
           c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.5.8 2 .9 2.1.1.2.1.4 0 .6
           -.1.2-.2.3-.3.5-.1.2-.3.4-.4.5-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1
           c1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.7-.1
           .3.1 1.8.9 2.1 1 .3.2.5.3.6.4.1.3.1 1-.2 1.7z"/>
</svg>`;function O(e){if(typeof b>"u"||typeof I!="function")return null;const t=b.find(n=>n.name.toLowerCase().includes(e.toLowerCase()));return t?I(t.phone):null}function x(e){const t=e.steps.map((a,o)=>`
    <li>
      <span class="cc-step-num">${o+1}</span>
      <span>${a}</span>
    </li>`).join(""),n=e.contacts.map(a=>{const o=O(a.name),i=o?`<a class="cc-contact-wa" href="${o}" target="_blank" rel="noopener">${E}Chat</a>`:`<a class="cc-contact-wa" href="javascript:void(0)" onclick="openKontakPopup()">${E}Kontak</a>`;return`
      <div class="cc-contact-item">
        <div class="cc-contact-label">${a.label}</div>
        ${i}
      </div>`}).join("");return`
    <div class="cc-section">
      <div class="cc-section-title">📄 ${e.title}</div>
      <div class="cc-section-sub">${e.subtitle}</div>
      <ol class="cc-steps">${t}</ol>
      <div class="cc-contact-note">${e.contactNote}</div>
      <div class="cc-contact-list">${n}</div>
    </div>`}function R(){const e=document.getElementById("cc-body");e&&(e.innerHTML=x(L.akademik)+x(L.kegiatan))}function A(){var e;R(),(e=document.getElementById("cc-overlay"))==null||e.classList.add("cc-open")}function v(){var e;(e=document.getElementById("cc-overlay"))==null||e.classList.remove("cc-open")}document.addEventListener("DOMContentLoaded",()=>{var e,t,n,a;A(),(e=document.getElementById("cc-help-fab"))==null||e.addEventListener("click",A),(t=document.getElementById("cc-close-btn"))==null||t.addEventListener("click",v),(n=document.getElementById("cc-footer-close-btn"))==null||n.addEventListener("click",v),(a=document.getElementById("cc-overlay"))==null||a.addEventListener("click",o=>{o.target.id==="cc-overlay"&&v()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&v()})});(function(){const t=document.querySelector("header");if(!t)return;const n=80;function a(){window.scrollY>n?t.classList.add("scrolled"):t.classList.remove("scrolled")}window.addEventListener("scroll",a,{passive:!0}),a()})();function U(){const e=document.getElementById("hamburger"),t=document.getElementById("mobileNav");!e||!t||(e.addEventListener("click",n=>{n.stopPropagation(),e.classList.toggle("open"),t.classList.toggle("open"),document.body.classList.toggle("mobile-nav-open",t.classList.contains("open"))}),t.querySelectorAll("a").forEach(n=>{n.addEventListener("click",()=>{e.classList.remove("open"),t.classList.remove("open"),document.body.classList.remove("mobile-nav-open")})}),document.addEventListener("click",n=>{!e.contains(n.target)&&!t.contains(n.target)&&(e.classList.remove("open"),t.classList.remove("open"),document.body.classList.remove("mobile-nav-open"))}))}function F(){document.querySelectorAll(".dropdown > span").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation();const n=e.parentElement.querySelector(".dropdown-menu");if(!n)return;const a=n.style.display==="block";document.querySelectorAll(".dropdown-menu").forEach(o=>o.style.display="none"),n.style.display=a?"none":"block"})}),document.addEventListener("click",()=>{document.querySelectorAll(".dropdown-menu").forEach(e=>e.style.display="none")})}function N(){document.querySelectorAll(".mobile-title").forEach(e=>{e.addEventListener("click",()=>{e.parentElement.classList.toggle("active")})})}document.addEventListener("DOMContentLoaded",()=>{U(),F(),N(),z()});function z(){const t=window.location.pathname.split("/").pop()||"index.html";document.querySelectorAll(".main-nav > a, #mobileNav a").forEach(n=>{n.classList.remove("active")}),document.querySelectorAll(".main-nav > a, #mobileNav a").forEach(n=>{const a=(n.getAttribute("href")||"").split("/").pop();if(!a)return;((t===""||t==="index.html")&&(a==="index.html"||a==="")||a===t)&&n.classList.add("active")})}let u=[],m=0;function w(e,t,n){const a=document.getElementById("popupOverlay"),o=document.getElementById("popupInner");e.popupType==="pdf"?(u=[],m=0,e.popupUrl?e.popupUrl.startsWith("data:")?o.innerHTML=Q(e,e.popupUrl):o.innerHTML=j(e):o.innerHTML=Y(e)):(t&&t.length>1?(u=t,m=typeof n=="number"?n:0):(u=[e],m=0),D(o)),a.classList.add("open")}function D(e){e||(e=document.getElementById("popupInner"));const t=u[m],n=u.length,a=n>1,o=a?`
    <button class="popup-nav-btn popup-nav-prev" onclick="navigateImagePopup(-1)" title="Sebelumnya">
      &#8592;
    </button>`:"",i=a?`
    <button class="popup-nav-btn popup-nav-next" onclick="navigateImagePopup(1)" title="Berikutnya">
      &#8594;
    </button>`:"",r=a?`
    <div class="popup-nav-counter">${m+1} / ${n}</div>`:"";if(t.popupType==="pdf")if(t.popupUrl&&!t.popupUrl.startsWith("data:")){const s=t.popupUrl.startsWith("/api/get-file")?t.popupUrl:`https://docs.google.com/viewer?url=${encodeURIComponent(t.popupUrl)}&embedded=true`,l=`
        <a href="${t.popupUrl}" target="_blank" rel="noopener"
          style="margin-left:auto;font-size:11px;color:rgba(255,255,255,.75);
                 text-decoration:none;padding:3px 10px;
                 background:rgba(255,255,255,.15);border-radius:6px;">
          ⬇️ Download
        </a>`;e.innerHTML=`
        <div class="popup-pdf-wrap" style="position:relative;">
          ${o}
          <div class="popup-pdf-header">
            📄 ${t.popupLabel||t.title}
            ${l}
          </div>
          <div class="popup-pdf-body">
            <iframe src="${s}" frameborder="0" allowfullscreen></iframe>
          </div>
          ${i}
          ${r}
        </div>`}else e.innerHTML=`
        <div style="position:relative;width:min(380px,88vw);background:#fff;
                    border-radius:16px;padding:36px 28px;text-align:center;">
          ${o}
          <div style="font-size:48px;margin-bottom:12px;">📄</div>
          <div style="font-size:14px;font-weight:700;color:#1a4f8a;margin-bottom:8px;">
            ${t.popupLabel||t.title}
          </div>
          <div style="font-size:13px;color:#5a6e82;">
            File PDF belum diunggah.<br>
            Upload melalui <strong>Admin Panel</strong>.
          </div>
          ${i}
          ${r}
        </div>`;else{const s=t.popupUrl||t.imageUrl;e.innerHTML=`
      <div class="popup-img" style="position:relative;">
        ${o}
        <img
          src="${s}"
          alt="${t.title}"
          style="display:block;max-height:80vh;max-width:min(90vw,900px);border-radius:12px;"
        />
        ${i}
        ${r}
        ${t.title?`<div class="popup-nav-caption">${t.title}</div>`:""}
      </div>`}}function M(e){m=(m+e+u.length)%u.length,D()}function q(e){document.getElementById("popupOverlay").classList.contains("open")&&(u.length<=1||(e.key==="ArrowLeft"&&M(-1),e.key==="ArrowRight"&&M(1)))}function j(e){const n=e.popupUrl.startsWith("/api/get-file")?e.popupUrl:`https://docs.google.com/viewer?url=${encodeURIComponent(e.popupUrl)}&embedded=true`,a=`
    <a href="${e.popupUrl}" target="_blank" rel="noopener"
      style="margin-left:auto;font-size:11px;color:rgba(255,255,255,.75);
             text-decoration:none;padding:3px 10px;
             background:rgba(255,255,255,.15);border-radius:6px;">
      ⬇️ Download
    </a>`;return`
    <div class="popup-pdf-wrap">
      <div class="popup-pdf-header">
        📄 ${e.popupLabel||e.title}
        ${a}
      </div>
      <div class="popup-pdf-body">
        <iframe src="${n}" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>`}function Y(e){return`
    <div style="width:min(380px,88vw);background:#fff;border-radius:16px;
                padding:36px 28px;text-align:center;">
      <div style="font-size:48px;margin-bottom:12px;">📄</div>
      <div style="font-size:14px;font-weight:700;color:#1a4f8a;margin-bottom:8px;">
        ${e.popupLabel||e.title}
      </div>
      <div style="font-size:13px;color:#5a6e82;">
        File PDF belum diunggah.<br>
        Upload melalui <strong>Admin Panel</strong>.
      </div>
    </div>`}function Q(e,t){const n=t.startsWith("data:");return`
    <div style="width:min(360px,88vw);background:#fff;border-radius:16px;
                padding:28px 24px;text-align:center;">
      <div style="font-size:48px;margin-bottom:12px;">📄</div>
      <div style="font-size:15px;font-weight:700;color:#1a4f8a;margin-bottom:8px;">
        ${e.popupLabel||e.title}
      </div>
      <div style="font-size:13px;color:#5a6e82;margin-bottom:20px;line-height:1.6;">
        Klik tombol di bawah untuk membuka atau mendownload PDF.
      </div>
      <a href="${t}"
        ${n?'download="dokumen.pdf"':'target="_blank" rel="noopener"'}
        style="display:flex;align-items:center;justify-content:center;gap:8px;
               background:#1a4f8a;color:#fff;font-size:14px;font-weight:700;
               padding:12px 24px;border-radius:10px;text-decoration:none;width:100%;">
        📖 Buka / Download PDF
      </a>
    </div>`}function h(){document.getElementById("popupOverlay").classList.remove("open"),u=[],m=0,setTimeout(()=>{const t=document.getElementById("popupInner");t&&(t.innerHTML="")},250)}document.addEventListener("DOMContentLoaded",()=>{var e,t;(e=document.getElementById("popupClose"))==null||e.addEventListener("click",h),(t=document.getElementById("popupOverlay"))==null||t.addEventListener("click",n=>{n.target.id==="popupOverlay"&&h()}),document.addEventListener("keydown",n=>{if(n.key==="Escape"){h();return}q(n)})});(function(){if(document.getElementById("popup-nav-style"))return;const t=document.createElement("style");t.id="popup-nav-style",t.textContent=`
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
  `,document.head.appendChild(t)})();const G=[{name:"Surat Aktif Kuliah",desc:"Permohonan surat keterangan aktif kuliah",url:"https://docs.google.com/forms/d/e/1FAIpQLSdIvl3vcqG8G-AKpRcC1DKh6Hfq8_MYGB8VuK26okxMEyZRgg/viewform"},{name:"Surat Keterangan Lulus",desc:"Permohonan SKL sebelum ijazah terbit",url:"https://docs.google.com/forms/d/e/1FAIpQLSeleQzeEElYtt8PoW8tHm5wL4t6GJbDzfRjhQ6Bwn3KHtSzbg/viewform"},{name:"Surat Cuti Kuliah",desc:"Pengajuan cuti semester aktif",url:"https://docs.google.com/forms/d/e/1FAIpQLSfcv_u0UlgJgJ_PuKC_ELfI5UUwLufISUdXlNl37VD_NMSAOg/viewform"},{name:"Surat Pengunduran Diri",desc:"Permohonan pengunduran diri mahasiswa",url:"https://docs.google.com/forms/d/e/1FAIpQLSfzD_poqcDT_U3d_vmsZOPFXewTzubYSZyNY7FpyObYL7FKGA/viewform"},{name:"Surat Pindah Kuliah",desc:"Pengajuan pindah ke perguruan tinggi lain",url:"https://docs.google.com/forms/d/e/1FAIpQLSeoHxHVHXY86d_acF92oZfyxzsQxoPrppB1z5bFfE3oRRKqMw/viewform"},{name:"Surat Pengembalian Dana",desc:"Permohonan surat pengembalian dana pendidikan",url:"https://docs.google.com/forms/d/e/1FAIpQLSeev6qHtma1S3mRIbgzBHgqEtqnlLw5rW3t13z9Mk4H03RVeg/viewform"},{name:"Pernyataan Terbit Artikel Mahasiswa",desc:"Surat Pernyataan Pembimbing Terhadap Artikel Mahasiswa yang belum berstatus terbit",url:"https://docs.google.com/forms/d/e/1FAIpQLSdiZVbf77fVqu8yYe1D_grYFDNF-mIl26n6KYKvuMdOS-0YJw/viewform"}],S=[{bg:"#e8f0fd",text:"#1a4f8a"},{bg:"#e6f7f0",text:"#0f6e56"},{bg:"#fef3e2",text:"#854f0b"},{bg:"#fce8f3",text:"#993556"},{bg:"#eeedfe",text:"#3c3489"},{bg:"#fcebeb",text:"#791f1f"},{bg:"#eaf3de",text:"#27500a"},{bg:"#f1efe8",text:"#444441"}];function V(e){const t=document.getElementById("lp-list");if(!e.length){t.innerHTML='<div class="lp-empty">Layanan tidak ditemukan</div>',document.getElementById("lp-count").textContent="0 layanan";return}document.getElementById("lp-count").textContent=e.length+" layanan tersedia",t.innerHTML=e.map((n,a)=>{const o=S[a%S.length];return`
      <a class="lp-item" href="${n.url}" target="_blank" rel="noopener">
        <div class="lp-num" style="background:${o.bg};color:${o.text}">
          ${String(a+1).padStart(2,"0")}
        </div>
        <div class="lp-info">
          <div class="lp-name">${n.name}</div>
          <div class="lp-desc">${n.desc}</div>
        </div>
        <svg class="lp-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>`}).join("")}function W(){V(G),document.getElementById("lp-search").value="",document.getElementById("lp-overlay").classList.add("lp-open"),setTimeout(()=>document.getElementById("lp-search").focus(),200)}function B(){document.getElementById("lp-overlay").classList.remove("lp-open")}document.addEventListener("DOMContentLoaded",()=>{var e,t;(e=document.getElementById("btn-jenis-layanan"))==null||e.addEventListener("click",W),(t=document.getElementById("lp-overlay"))==null||t.addEventListener("click",n=>{n.target.id==="lp-overlay"&&B()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&B()})});const X=[{name:"Pedoman Akademik",desc:"Panduan akademik resmi FMIPA Untan",type:"pdf",url:"https://drive.google.com/uc?export=download&id=14HAQ4UAs_QiSS4Zg0e2M3q1CsHX7zGbX"},{name:"Kalender Akademik",desc:"Jadwal kegiatan akademik tahun berjalan",type:"pdf",url:"https://drive.google.com/uc?export=download&id=1iCfmCHktV68lQ2HEw2C1qkhbFnbB5E71"},{name:"Kode Etik Untan",desc:"Ketentuan etika mahasiswa dan sivitas akademika",type:"pdf",url:"https://drive.google.com/uc?export=download&id=1c093F5EznNhtH_48ZbrsTDRILkvxVBnM"},{name:"Edaran PISN",desc:"Surat edaran terkait PISN",type:"pdf",url:"https://drive.google.com/uc?export=download&id=1iE5rlnfnTdvad4svmKDW1QyZXXh7JRkD"},{name:"Perbaikan Data PDDIKTI",desc:"Prosedur perbaikan data PDDIKTI mahasiswa",type:"pdf",url:"https://drive.google.com/uc?export=download&id=10G0cmbmU1_Fjn3m1SRmLUIzJ3VEdRjK4"},{name:"Prosedur Pengajuan Cuti",desc:"Tata cara pengajuan cuti kuliah",type:"pdf",url:"https://drive.google.com/uc?export=download&id=1fV2sJh5zzpKd65WZ5_2XY2woL0shd-GH"}],J=[{name:"Akreditasi UNTAN",desc:"Dokumen status akreditasi institusi",type:"pdf",url:"https://drive.google.com/uc?export=download&id=1mNeuaIv-AsfNzMgqRului4uO5otE6Vbg"},{name:"Draft Syarat Sidang",desc:"Template dokumen syarat sidang",type:"link",url:"https://docs.google.com/document/d/1QQFK0vpB2VYwZN9XRjxiJWRfck6HUCTu/edit"},{name:"Draft Bebas Laboratorium",desc:"Template surat bebas laboratorium",type:"link",url:"https://docs.google.com/document/d/10O5ifI5A3WheOjYs9ZWEKtOAe9NsoB7r/edit"}],P=[{bg:"#e8f0fd",text:"#1a4f8a"},{bg:"#e6f7f0",text:"#0f6e56"},{bg:"#fef3e2",text:"#854f0b"},{bg:"#fce8f3",text:"#993556"},{bg:"#eeedfe",text:"#3c3489"},{bg:"#fcebeb",text:"#791f1f"},{bg:"#eaf3de",text:"#27500a"},{bg:"#f1efe8",text:"#444441"}];function C(e,t){const n=document.getElementById(e+"-list"),a=document.getElementById(e+"-count");if(n){if(!t.length){n.innerHTML='<div class="lp-empty">Tidak ditemukan</div>',a&&(a.textContent="0 dokumen");return}a&&(a.textContent=t.length+" dokumen"),n.innerHTML=t.map((o,i)=>{const r=P[i%P.length],s=o.type==="link";return`
      <a class="lp-item" href="${s?o.url:"javascript:void(0)"}"
         ${s?'target="_blank" rel="noopener"':""}>
        <div class="lp-num" style="background:${r.bg};color:${r.text}">
          ${String(i+1).padStart(2,"0")}
        </div>
        <div class="lp-info">
          <div class="lp-name">${o.name}</div>
          <div class="lp-desc">${o.desc}</div>
        </div>
        <svg class="lp-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>`}).join(""),n.querySelectorAll(".lp-item").forEach((o,i)=>{const r=t[i];r.type==="pdf"&&o.addEventListener("click",s=>{s.preventDefault(),typeof w=="function"&&w({popupType:"pdf",popupUrl:r.url,title:r.name})})})}}function Z(){var t;C("ip",X);const e=document.getElementById("ip-search");e&&(e.value=""),(t=document.getElementById("ip-overlay"))==null||t.classList.add("lp-open"),setTimeout(()=>e==null?void 0:e.focus(),200)}function H(){var e;(e=document.getElementById("ip-overlay"))==null||e.classList.remove("lp-open")}function ee(){var t;C("dl",J);const e=document.getElementById("dl-search");e&&(e.value=""),(t=document.getElementById("dl-overlay"))==null||t.classList.add("lp-open"),setTimeout(()=>e==null?void 0:e.focus(),200)}function T(){var e;(e=document.getElementById("dl-overlay"))==null||e.classList.remove("lp-open")}document.addEventListener("DOMContentLoaded",()=>{var e,t,n,a;(e=document.getElementById("btn-info-penting"))==null||e.addEventListener("click",Z),(t=document.getElementById("btn-download"))==null||t.addEventListener("click",ee),(n=document.getElementById("ip-overlay"))==null||n.addEventListener("click",o=>{o.target.id==="ip-overlay"&&H()}),(a=document.getElementById("dl-overlay"))==null||a.addEventListener("click",o=>{o.target.id==="dl-overlay"&&T()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&(H(),T())})});const K="█▓▒░#@$%&*+=?ABCDEFGHIJKLMNOPQRSTUVWXYZ",te=2e3;function ne(e){if(!e)return"–";if(/[A-Za-z]/.test(e)&&!e.includes("T"))return e;try{const t=new Date(e);return isNaN(t.getTime())?e:t.toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}catch{return e}}function $(e,t,n="#1a4f8a",a="#c5c7cc"){let o=0,i,r=!1;function s(){e.textContent=t.split("").map((l,c)=>l===" "?" ":c<o?t[c]:K[Math.floor(Math.random()*K.length)]).join(""),e.style.color=r?n:a,o<=t.length?(o+=.5,i=requestAnimationFrame(s)):(cancelAnimationFrame(i),r=!r,setTimeout(()=>{o=0,i=requestAnimationFrame(s)},te))}requestAnimationFrame(s)}function ae(){const e=document.getElementById("tilt-card"),t=document.querySelector(".cs-card-container");!e||!t||(t.addEventListener("mousemove",n=>{const a=e.getBoundingClientRect(),o=(n.clientX-a.left)/a.width*2-1,i=(n.clientY-a.top)/a.height*2-1,r=6;e.style.transform=`rotateX(${-i*r}deg) rotateY(${o*r}deg) translateZ(12px)`}),t.addEventListener("mouseleave",()=>{e.style.transform="rotateX(0deg) rotateY(0deg) translateZ(0px)"}))}const oe="https://script.google.com/macros/s/AKfycbx_fgFroV_E7VtVpkgm1HjSAmy9pPc-HxNia8TGev9-mVLjVjOo8pzh8YX0lmu7LRRU5Q/exec";async function ie(){const e=document.getElementById("searchInput"),t=document.getElementById("himpunanSelect"),n=document.getElementById("jenisSurat"),a=document.getElementById("hasil"),o=n.value.trim(),i=o==="izin_kegiatan",r=i?t.value.trim():e.value.trim();if(e.classList.remove("error"),t.classList.remove("error"),!r){i?(t.classList.add("error"),a.innerHTML='<div class="cs-error-msg">⚠️ Pilih nama Himpunan terlebih dahulu.</div>'):(e.classList.add("error"),a.innerHTML='<div class="cs-error-msg">⚠️ Masukkan Nama atau NIM terlebih dahulu.</div>',e.focus());return}if(!o){a.innerHTML='<div class="cs-error-msg">⚠️ Pilih jenis surat terlebih dahulu.</div>';return}a.innerHTML='<div class="cs-loading">Memuat data...</div>';try{const s=`${oe}?nama=${encodeURIComponent(r)}&jenis=${encodeURIComponent(o)}`,l=await fetch(s);if(!l.ok)throw new Error(`HTTP ${l.status}`);const c=await l.json();if(!c||c.length===0){const f={ket_lulus:"Mohon hubungi <strong>Onny</strong> di Menu <strong>Kontak</strong> terkait Surat Keterangan Lulus.",aktif_kuliah:"Mohon hubungi <strong>Agung</strong> di Menu <strong>Kontak</strong> terkait Surat Aktif Kuliah.",cuti_kuliah:"Mohon hubungi <strong>Bu Ana</strong> di Menu <strong>Kontak</strong> terkait surat ini.",undur_diri:"Mohon hubungi <strong>Bu Ana</strong> di Menu <strong>Kontak</strong> terkait surat ini.",pindah_kuliah:"Mohon hubungi <strong>Bu Ana</strong> di Menu <strong>Kontak</strong> terkait surat ini."},d=["HIMATIKA","HIMABIO","HIMAFIS","HMG","HIMASTA","KOMIK","ART LABORATORY","MSI"],p=["HIMASTER","HIMKI","HMIK","HMSI","FIKRI","IMASIKA","BEM","DPM"];let g=f[o]||"";o==="izin_kegiatan"&&(g=""),a.innerHTML=`
        <div class="cs-no-result">
          ❌ Data tidak ditemukan untuk "<strong>${r}</strong>".
          ${g?`<br><span class="cs-no-result-kontak">${g}</span>`:""}
        </div>`;return}re(c,o)}catch(s){console.error("Fetch error:",s),a.innerHTML='<div class="cs-error-msg">⚠️ Server tidak merespons. Coba beberapa saat lagi.</div>'}}document.addEventListener("DOMContentLoaded",()=>{var f;const e=document.getElementById("jenisSurat"),t=document.getElementById("searchInput"),n=document.getElementById("himpunanSelect"),a=document.getElementById("searchSub");t==null||t.addEventListener("keydown",d=>{d.key==="Enter"&&ie()});const o=["HIMATIKA","HIMABIO","HIMAFIS","HMG","HIMASTA","KOMIK","ART LABORATORY","MSI"],i=["HIMASTER","HIMKI","HMIK","HMSI","FIKRI","IMASIKA","BEM","DPM"];function r(d){const p=d.trim().toUpperCase();return o.includes(p)?"Thareq":i.includes(p)?"Onny":"Thareq / Onny"}function s(){var k;const d=document.getElementById("kontakKegiatan"),p=document.getElementById("kontakKegiatanText");if(!d||!p)return;if(e.value!=="izin_kegiatan"){d.style.display="none";return}const g=n.value?r(n.value):"Thareq / Onny",_=n.value?`<strong>${(k=n.options[n.selectedIndex])==null?void 0:k.text.split(/[–-]/)[0].trim()}</strong>`:"himpunan";p.innerHTML=`Jika surat izin kegiatan ${_} belum terdaftar atau butuh konfirmasi, hubungi <strong>${g}</strong> di Menu <strong>Kontak</strong>.`,d.style.display=""}e==null||e.addEventListener("change",()=>{e.value==="izin_kegiatan"?(t.style.display="none",n.style.display="",n.selectedIndex=0,a&&(a.style.display="none")):(t.style.display="",n.style.display="none",a&&(a.style.display="")),s();const p=e.querySelector('option[value=""]');p&&p.remove()}),n==null||n.addEventListener("change",s),(f=document.getElementById("qrModal"))==null||f.addEventListener("click",d=>{d.target.id==="qrModal"&&se()});const l=document.getElementById("linesurat"),c=document.getElementById("linesurat2");l&&$(l,"Cek Status","#1a4f8a","#c5c7cc"),c&&$(c,"Surat Mahasiswa","#e8a020","#c5c7cc"),ae()});function re(e,t){const n=document.getElementById("hasil");if(t==="izin_kegiatan"){let o=e.map(i=>{const r=i.link||i.lihat_surat||i.file||"";return`
        <tr>
          <td>${i.nama_himpunan||i.nama||"–"}</td>
          <td>${ne(i.hari_tanggal)}</td>
          <td>${i.tempat||"–"}</td>
          <td>
            <button class="cs-file-btn" onclick="openQR('${r}')">
              📄 Lihat File
            </button>
          </td>
        </tr>`}).join("");n.innerHTML=`
      <table class="cs-table">
        <thead>
          <tr>
            <th>Nama Himpunan</th>
            <th>Hari/Tanggal</th>
            <th>Tempat</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>${o}</tbody>
      </table>`}else{let o=e.map(i=>`
      <tr>
        <td>${i.nama||"–"}</td>
        <td>${i.nim||"–"}</td>
        <td>${i.surat||"–"}</td>
        <td>
          <button class="cs-file-btn" onclick="openQR('${i.file||""}')">
            📄 Lihat File
          </button>
        </td>
      </tr>`).join("");n.innerHTML=`
      <table class="cs-table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>NIM</th>
            <th>Jenis Surat</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>${o}</tbody>
      </table>`}}function se(){const e=document.getElementById("qrModal");e.style.display="none",e.classList.remove("open"),document.getElementById("qrImage").src=""}
