import"./layanan-popup-qGJfxhSt.js";function s(){var e;(e=document.getElementById("kt-overlay"))==null||e.classList.remove("kt-open")}document.addEventListener("DOMContentLoaded",()=>{var e,t;(e=document.getElementById("kt-close-btn"))==null||e.addEventListener("click",s),(t=document.getElementById("kt-overlay"))==null||t.addEventListener("click",n=>{n.target.id==="kt-overlay"&&s()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&s()})});(function(){const t=document.querySelector("header");if(!t)return;const n=80;function o(){window.scrollY>n?t.classList.add("scrolled"):t.classList.remove("scrolled")}window.addEventListener("scroll",o,{passive:!0}),o()})();function L(){const e=document.getElementById("hamburger"),t=document.getElementById("mobileNav");!e||!t||(e.addEventListener("click",n=>{n.stopPropagation(),e.classList.toggle("open"),t.classList.toggle("open"),document.body.classList.toggle("mobile-nav-open",t.classList.contains("open"))}),t.querySelectorAll("a").forEach(n=>{n.addEventListener("click",()=>{e.classList.remove("open"),t.classList.remove("open"),document.body.classList.remove("mobile-nav-open")})}),document.addEventListener("click",n=>{!e.contains(n.target)&&!t.contains(n.target)&&(e.classList.remove("open"),t.classList.remove("open"),document.body.classList.remove("mobile-nav-open"))}))}function w(){document.querySelectorAll(".dropdown > span").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation();const n=e.parentElement.querySelector(".dropdown-menu");if(!n)return;const o=n.style.display==="block";document.querySelectorAll(".dropdown-menu").forEach(a=>a.style.display="none"),n.style.display=o?"none":"block"})}),document.addEventListener("click",()=>{document.querySelectorAll(".dropdown-menu").forEach(e=>e.style.display="none")})}function E(){document.querySelectorAll(".mobile-title").forEach(e=>{e.addEventListener("click",()=>{e.parentElement.classList.toggle("active")})})}document.addEventListener("DOMContentLoaded",()=>{L(),w(),E(),I()});function I(){const t=window.location.pathname.split("/").pop()||"index.html";document.querySelectorAll(".main-nav > a, #mobileNav a").forEach(n=>{n.classList.remove("active")}),document.querySelectorAll(".main-nav > a, #mobileNav a").forEach(n=>{const o=(n.getAttribute("href")||"").split("/").pop();if(!o)return;((t===""||t==="index.html")&&(o==="index.html"||o==="")||o===t)&&n.classList.add("active")})}let r=[],l=0;function u(e,t,n){const o=document.getElementById("popupOverlay"),a=document.getElementById("popupInner");e.popupType==="pdf"?(r=[],l=0,e.popupUrl?e.popupUrl.startsWith("data:")?a.innerHTML=A(e,e.popupUrl):a.innerHTML=B(e):a.innerHTML=S(e)):(t&&t.length>1?(r=t,l=typeof n=="number"?n:0):(r=[e],l=0),h(a)),o.classList.add("open")}function h(e){e||(e=document.getElementById("popupInner"));const t=r[l],n=r.length,o=n>1,a=o?`
    <button class="popup-nav-btn popup-nav-prev" onclick="navigateImagePopup(-1)" title="Sebelumnya">
      &#8592;
    </button>`:"",d=o?`
    <button class="popup-nav-btn popup-nav-next" onclick="navigateImagePopup(1)" title="Berikutnya">
      &#8594;
    </button>`:"",i=o?`
    <div class="popup-nav-counter">${l+1} / ${n}</div>`:"";if(t.popupType==="pdf")if(t.popupUrl&&!t.popupUrl.startsWith("data:")){const p=t.popupUrl.startsWith("/api/get-file")?t.popupUrl:`https://docs.google.com/viewer?url=${encodeURIComponent(t.popupUrl)}&embedded=true`,k=`
        <a href="${t.popupUrl}" target="_blank" rel="noopener"
          style="margin-left:auto;font-size:11px;color:rgba(255,255,255,.75);
                 text-decoration:none;padding:3px 10px;
                 background:rgba(255,255,255,.15);border-radius:6px;">
          ⬇️ Download
        </a>`;e.innerHTML=`
        <div class="popup-pdf-wrap" style="position:relative;">
          ${a}
          <div class="popup-pdf-header">
            📄 ${t.popupLabel||t.title}
            ${k}
          </div>
          <div class="popup-pdf-body">
            <iframe src="${p}" frameborder="0" allowfullscreen></iframe>
          </div>
          ${d}
          ${i}
        </div>`}else e.innerHTML=`
        <div style="position:relative;width:min(380px,88vw);background:#fff;
                    border-radius:16px;padding:36px 28px;text-align:center;">
          ${a}
          <div style="font-size:48px;margin-bottom:12px;">📄</div>
          <div style="font-size:14px;font-weight:700;color:#1a4f8a;margin-bottom:8px;">
            ${t.popupLabel||t.title}
          </div>
          <div style="font-size:13px;color:#5a6e82;">
            File PDF belum diunggah.<br>
            Upload melalui <strong>Admin Panel</strong>.
          </div>
          ${d}
          ${i}
        </div>`;else{const p=t.popupUrl||t.imageUrl;e.innerHTML=`
      <div class="popup-img" style="position:relative;">
        ${a}
        <img
          src="${p}"
          alt="${t.title}"
          style="display:block;max-height:80vh;max-width:min(90vw,900px);border-radius:12px;"
        />
        ${d}
        ${i}
        ${t.title?`<div class="popup-nav-caption">${t.title}</div>`:""}
      </div>`}}function m(e){l=(l+e+r.length)%r.length,h()}function P(e){document.getElementById("popupOverlay").classList.contains("open")&&(r.length<=1||(e.key==="ArrowLeft"&&m(-1),e.key==="ArrowRight"&&m(1)))}function B(e){const n=e.popupUrl.startsWith("/api/get-file")?e.popupUrl:`https://docs.google.com/viewer?url=${encodeURIComponent(e.popupUrl)}&embedded=true`,o=`
    <a href="${e.popupUrl}" target="_blank" rel="noopener"
      style="margin-left:auto;font-size:11px;color:rgba(255,255,255,.75);
             text-decoration:none;padding:3px 10px;
             background:rgba(255,255,255,.15);border-radius:6px;">
      ⬇️ Download
    </a>`;return`
    <div class="popup-pdf-wrap">
      <div class="popup-pdf-header">
        📄 ${e.popupLabel||e.title}
        ${o}
      </div>
      <div class="popup-pdf-body">
        <iframe src="${n}" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>`}function S(e){return`
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
    </div>`}function A(e,t){const n=t.startsWith("data:");return`
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
    </div>`}function c(){document.getElementById("popupOverlay").classList.remove("open"),r=[],l=0,setTimeout(()=>{const t=document.getElementById("popupInner");t&&(t.innerHTML="")},250)}document.addEventListener("DOMContentLoaded",()=>{var e,t;(e=document.getElementById("popupClose"))==null||e.addEventListener("click",c),(t=document.getElementById("popupOverlay"))==null||t.addEventListener("click",n=>{n.target.id==="popupOverlay"&&c()}),document.addEventListener("keydown",n=>{if(n.key==="Escape"){c();return}P(n)})});(function(){if(document.getElementById("popup-nav-style"))return;const t=document.createElement("style");t.id="popup-nav-style",t.textContent=`
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
  `,document.head.appendChild(t)})();const D=[{name:"Surat Aktif Kuliah",desc:"Permohonan surat keterangan aktif kuliah",url:"https://docs.google.com/forms/d/e/1FAIpQLSdIvl3vcqG8G-AKpRcC1DKh6Hfq8_MYGB8VuK26okxMEyZRgg/viewform"},{name:"Surat Keterangan Lulus",desc:"Permohonan SKL sebelum ijazah terbit",url:"https://docs.google.com/forms/d/e/1FAIpQLSeleQzeEElYtt8PoW8tHm5wL4t6GJbDzfRjhQ6Bwn3KHtSzbg/viewform"},{name:"Surat Cuti Kuliah",desc:"Pengajuan cuti semester aktif",url:"https://docs.google.com/forms/d/e/1FAIpQLSfcv_u0UlgJgJ_PuKC_ELfI5UUwLufISUdXlNl37VD_NMSAOg/viewform"},{name:"Surat Pengunduran Diri",desc:"Permohonan pengunduran diri mahasiswa",url:"https://docs.google.com/forms/d/e/1FAIpQLSfzD_poqcDT_U3d_vmsZOPFXewTzubYSZyNY7FpyObYL7FKGA/viewform"},{name:"Surat Pindah Kuliah",desc:"Pengajuan pindah ke perguruan tinggi lain",url:"https://docs.google.com/forms/d/e/1FAIpQLSeoHxHVHXY86d_acF92oZfyxzsQxoPrppB1z5bFfE3oRRKqMw/viewform"},{name:"Surat Pengembalian Dana",desc:"Permohonan surat pengembalian dana pendidikan",url:"https://docs.google.com/forms/d/e/1FAIpQLSeev6qHtma1S3mRIbgzBHgqEtqnlLw5rW3t13z9Mk4H03RVeg/viewform"},{name:"Pernyataan Terbit Artikel Mahasiswa",desc:"Surat Pernyataan Pembimbing Terhadap Artikel Mahasiswa yang belum berstatus terbit",url:"https://docs.google.com/forms/d/e/1FAIpQLSdiZVbf77fVqu8yYe1D_grYFDNF-mIl26n6KYKvuMdOS-0YJw/viewform"}],f=[{bg:"#e8f0fd",text:"#1a4f8a"},{bg:"#e6f7f0",text:"#0f6e56"},{bg:"#fef3e2",text:"#854f0b"},{bg:"#fce8f3",text:"#993556"},{bg:"#eeedfe",text:"#3c3489"},{bg:"#fcebeb",text:"#791f1f"},{bg:"#eaf3de",text:"#27500a"},{bg:"#f1efe8",text:"#444441"}];function $(e){const t=document.getElementById("lp-list");if(!e.length){t.innerHTML='<div class="lp-empty">Layanan tidak ditemukan</div>',document.getElementById("lp-count").textContent="0 layanan";return}document.getElementById("lp-count").textContent=e.length+" layanan tersedia",t.innerHTML=e.map((n,o)=>{const a=f[o%f.length];return`
      <a class="lp-item" href="${n.url}" target="_blank" rel="noopener">
        <div class="lp-num" style="background:${a.bg};color:${a.text}">
          ${String(o+1).padStart(2,"0")}
        </div>
        <div class="lp-info">
          <div class="lp-name">${n.name}</div>
          <div class="lp-desc">${n.desc}</div>
        </div>
        <svg class="lp-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>`}).join("")}function T(){$(D),document.getElementById("lp-search").value="",document.getElementById("lp-overlay").classList.add("lp-open"),setTimeout(()=>document.getElementById("lp-search").focus(),200)}function g(){document.getElementById("lp-overlay").classList.remove("lp-open")}document.addEventListener("DOMContentLoaded",()=>{var e,t;(e=document.getElementById("btn-jenis-layanan"))==null||e.addEventListener("click",T),(t=document.getElementById("lp-overlay"))==null||t.addEventListener("click",n=>{n.target.id==="lp-overlay"&&g()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&g()})});const U=[{name:"Pedoman Akademik",desc:"Panduan akademik resmi FMIPA Untan",type:"pdf",url:"https://drive.google.com/uc?export=download&id=14HAQ4UAs_QiSS4Zg0e2M3q1CsHX7zGbX"},{name:"Kalender Akademik",desc:"Jadwal kegiatan akademik tahun berjalan",type:"pdf",url:"https://drive.google.com/uc?export=download&id=1iCfmCHktV68lQ2HEw2C1qkhbFnbB5E71"},{name:"Kode Etik Untan",desc:"Ketentuan etika mahasiswa dan sivitas akademika",type:"pdf",url:"https://drive.google.com/uc?export=download&id=1c093F5EznNhtH_48ZbrsTDRILkvxVBnM"},{name:"Edaran PISN",desc:"Surat edaran terkait PISN",type:"pdf",url:"https://drive.google.com/uc?export=download&id=1iE5rlnfnTdvad4svmKDW1QyZXXh7JRkD"},{name:"Perbaikan Data PDDIKTI",desc:"Prosedur perbaikan data PDDIKTI mahasiswa",type:"pdf",url:"https://drive.google.com/uc?export=download&id=10G0cmbmU1_Fjn3m1SRmLUIzJ3VEdRjK4"},{name:"Prosedur Pengajuan Cuti",desc:"Tata cara pengajuan cuti kuliah",type:"pdf",url:"https://drive.google.com/uc?export=download&id=1fV2sJh5zzpKd65WZ5_2XY2woL0shd-GH"}],H=[{name:"Akreditasi UNTAN",desc:"Dokumen status akreditasi institusi",type:"pdf",url:"https://drive.google.com/uc?export=download&id=1mNeuaIv-AsfNzMgqRului4uO5otE6Vbg"},{name:"Draft Syarat Sidang",desc:"Template dokumen syarat sidang",type:"link",url:"https://docs.google.com/document/d/1QQFK0vpB2VYwZN9XRjxiJWRfck6HUCTu/edit"},{name:"Draft Bebas Laboratorium",desc:"Template surat bebas laboratorium",type:"link",url:"https://docs.google.com/document/d/10O5ifI5A3WheOjYs9ZWEKtOAe9NsoB7r/edit"}],v=[{bg:"#e8f0fd",text:"#1a4f8a"},{bg:"#e6f7f0",text:"#0f6e56"},{bg:"#fef3e2",text:"#854f0b"},{bg:"#fce8f3",text:"#993556"},{bg:"#eeedfe",text:"#3c3489"},{bg:"#fcebeb",text:"#791f1f"},{bg:"#eaf3de",text:"#27500a"},{bg:"#f1efe8",text:"#444441"}];function x(e,t){const n=document.getElementById(e+"-list"),o=document.getElementById(e+"-count");if(n){if(!t.length){n.innerHTML='<div class="lp-empty">Tidak ditemukan</div>',o&&(o.textContent="0 dokumen");return}o&&(o.textContent=t.length+" dokumen"),n.innerHTML=t.map((a,d)=>{const i=v[d%v.length],p=a.type==="link";return`
      <a class="lp-item" href="${p?a.url:"javascript:void(0)"}"
         ${p?'target="_blank" rel="noopener"':""}>
        <div class="lp-num" style="background:${i.bg};color:${i.text}">
          ${String(d+1).padStart(2,"0")}
        </div>
        <div class="lp-info">
          <div class="lp-name">${a.name}</div>
          <div class="lp-desc">${a.desc}</div>
        </div>
        <svg class="lp-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>`}).join(""),n.querySelectorAll(".lp-item").forEach((a,d)=>{const i=t[d];i.type==="pdf"&&a.addEventListener("click",p=>{p.preventDefault(),typeof u=="function"&&u({popupType:"pdf",popupUrl:i.url,title:i.name})})})}}function z(){var t;x("ip",U);const e=document.getElementById("ip-search");e&&(e.value=""),(t=document.getElementById("ip-overlay"))==null||t.classList.add("lp-open"),setTimeout(()=>e==null?void 0:e.focus(),200)}function y(){var e;(e=document.getElementById("ip-overlay"))==null||e.classList.remove("lp-open")}function M(){var t;x("dl",H);const e=document.getElementById("dl-search");e&&(e.value=""),(t=document.getElementById("dl-overlay"))==null||t.classList.add("lp-open"),setTimeout(()=>e==null?void 0:e.focus(),200)}function b(){var e;(e=document.getElementById("dl-overlay"))==null||e.classList.remove("lp-open")}document.addEventListener("DOMContentLoaded",()=>{var e,t,n,o;(e=document.getElementById("btn-info-penting"))==null||e.addEventListener("click",z),(t=document.getElementById("btn-download"))==null||t.addEventListener("click",M),(n=document.getElementById("ip-overlay"))==null||n.addEventListener("click",a=>{a.target.id==="ip-overlay"&&y()}),(o=document.getElementById("dl-overlay"))==null||o.addEventListener("click",a=>{a.target.id==="dl-overlay"&&b()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&(y(),b())})});
