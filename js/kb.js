/* ================================================================
   kb.js - Kirana Knowledge Base
   Data statis FMIPA UNTAN untuk konteks AI Kirana
   Update: Juli 2026
   ================================================================ */

const KIRANA_KB = [

  /* ── Layanan Portal ── */
  {
    id: 'bio_ijazah',
    answer:
      'Bio Ijazah adalah layanan verifikasi dan cetak biodata ijazah resmi Untan. ' +
      'Akses melalui xandria.pduntan.id/login menggunakan akun mahasiswa.',
  },

  {
    id: 'satu_untan',
    answer:
      'SATU UNTAN adalah portal terpadu sistem informasi Universitas Tanjungpura. ' +
      'Tersedia di satu.untan.ac.id untuk KRS, nilai, transkrip, dan layanan akademik lainnya.',
  },

  {
    id: 'cek_surat',
    answer:
      'Cek status surat di halaman Cek Surat portal: infobakmipa.vercel.app/ceksurat.html\n' +
      'Masukkan Nama atau NIM, pilih Himpunan, pilih jenis surat, klik Cari.',
  },

  {
    id: 'pengajuan_surat',
    answer:
      'CARA BUAT SURAT DI FMIPA UNTAN:\n' +
      '1. Buka portal → klik "Jenis Layanan" → pilih jenis surat → isi Google Form → submit\n' +
      '   ATAU scan barcode/QR di slider portal pakai HP\n' +
      '2. Tunggu 1–2 hari kerja (isi pagi → sore bisa jadi)\n' +
      '3. Pantau status di: infobakmipa.vercel.app/ceksurat.html\n' +
      '4. Jika status belum muncul, hubungi bagian akademik sesuai jenis surat (lihat di bawah)\n\n' +
      'Tidak perlu datang ke kantor. Semua online.\n\n' +
      'LINK GOOGLE FORM:\n' +
      '- Surat Aktif Kuliah: https://docs.google.com/forms/d/e/1FAIpQLSdIvl3vcqG8G-AKpRcC1DKh6Hfq8_MYGB8VuK26okxMEyZRgg/viewform\n' +
      '- SKL: https://docs.google.com/forms/d/e/1FAIpQLSeleQzeEElYtt8PoW8tHm5wL4t6GJbDzfRjhQ6Bwn3KHtSzbg/viewform\n' +
      '- Surat Cuti: https://docs.google.com/forms/d/e/1FAIpQLSfcv_u0UlgJgJ_PuKC_ELfI5UUwLufISUdXlNl37VD_NMSAOg/viewform\n' +
      '- Surat Pengunduran Diri: https://docs.google.com/forms/d/e/1FAIpQLSfzD_poqcDT_U3d_vmsZOPFXewTzubYSZyNY7FpyObYL7FKGA/viewform\n' +
      '- Surat Pindah Kuliah: https://docs.google.com/forms/d/e/1FAIpQLSeoHxHVHXY86d_acF92oZfyxzsQxoPrppB1z5bFfE3oRRKqMw/viewform\n' +
      '- Surat Pengembalian Dana: https://docs.google.com/forms/d/e/1FAIpQLSeev6qHtma1S3mRIbgzBHgqEtqnlLw5rW3t13z9Mk4H03RVeg/viewform\n' +
      '- Pernyataan Terbit Artikel: https://docs.google.com/forms/d/e/1FAIpQLSdiZVbf77fVqu8yYe1D_grYFDNF-mIl26n6KYKvuMdOS-0YJw/viewform\n\n' +
      'JIKA SURAT BELUM ADA / ADA KENDALA — HUBUNGI:\n' +
      '- SKL → Onny Suryana (Bag. Akademik, homebase Ruang Baca) via menu Kontak portal\n' +
      '- Surat Aktif Kuliah → Agung (Bag. Kemahasiswaan) via menu Kontak portal\n' +
      '- Surat Cuti, Pindah, Pengunduran Diri → Bu Ana (Bag. Akademik) via menu Kontak portal\n' +
      '- Surat Izin Kegiatan (MSI, HIMATIKA, HIMASTA, HIMAFIS, HIMABIO, HMG, KOMIK, ART LABORATORY) → Thareq (Bag. Akademik) via menu Kontak portal\n' +
      '- Surat Izin Kegiatan (HIMASTER, HMIK, HMSI, BEM, DPM, FIKRI, IMASIKA, HIMKI) → Onny Suryana (Bag. Akademik, homebase Ruang Baca) via menu Kontak portal',
  },

  {
    id: 'sekar',
    answer:
      'SEKAR (Sistem Informasi Ruangan) adalah aplikasi peminjaman ruangan FMIPA Untan. ' +
      'Akses di sekarfmipa.vercel.app.',
  },

  {
    id: 'kontak_layanan',
    answer:
      'Layanan akademik FMIPA Untan:\n' +
      '- Loket Akademik: Senin-Kamis 08.00-15.00 WIB (Jumat WFH via online/WhatsApp)\n' +
      '- Konsultasi & pembayaran UKT: Ruang Loket Akademik, Senin-Kamis 08.00-15.00 WIB\n' +
      '- Kontak via WhatsApp tersedia di menu Kontak portal (Senin-Jumat)',
  },

  /* ── UKT & Keuangan ── */
  {
    id: 'ukt_info',
    answer:
      'Informasi UKT FMIPA Untan:\n\n' +
      'KONSULTASI & PEMBAYARAN UKT\n' +
      'Dilaksanakan di Ruang Loket Akademik.\n' +
      'Hari: Senin - Kamis | Waktu: 08.00 - 15.00 WIB\n\n' +
      'PENGURANGAN UKT 50% (Mahasiswa Tahap Kuliah Akhir)\n' +
      'Syarat:\n' +
      '- Mahasiswa S1 minimal semester 9 ATAU D3 minimal semester 7\n' +
      '- Sisa mata kuliah yang belum ditempuh maksimal 6 SKS\n' +
      '- Tidak berlaku jika sisa SKS lebih dari 6\n' +
      '- SKS perbaikan nilai tetap dihitung dalam akumulasi total SKS\n' +
      '- Jika sudah membayar 50%, wajib melunasi sisa 50% sebelum Ujian Akhir Semester\n\n' +
      'DOKUMEN YANG DIPERLUKAN:\n' +
      '1. Surat Permohonan Pengurangan Pembayaran UKT\n' +
      '2. Transkrip nilai terakhir\n' +
      '3. Lembar Isian Rencana Studi (LIRS)\n' +
      '4. Surat Pernyataan Tidak Sedang Menerima Beasiswa\n' +
      '5. Surat Pernyataan Tanggung Jawab Mutlak (SPTJM)\n\n' +
      'TATA CARA PENGAJUAN:\n' +
      '1. Isi formulir permohonan sesuai format\n' +
      '2. Lengkapi bukti pendukung\n' +
      '3. Ajukan maksimal 2 minggu sebelum daftar ulang\n' +
      '4. Disampaikan ke fakultas melalui Wakil Dekan Bidang Keuangan dan Umum\n' +
      '5. WD Keuangan akan verifikasi dan terbitkan Surat Rekomendasi',
  },

  {
    id: 'ukt_penanggung_jawab',
    answer:
      'Untuk informasi lebih lanjut soal UKT, silakan hubungi Pak Prima atau Bu Warsi di Ruang Akademik FMIPA Untan, atau melalui menu Kontak di portal.\n' +
      'Jam layanan: Senin-Kamis 08.00-15.00 WIB.',
  },

  /* ── Data Pegawai & Dosen ── */
  {
    id: 'pejabat_struktural',
    answer:
      'PEJABAT STRUKTURAL FMIPA UNTAN (per Juli 2026):\n\n' +
      'DEKANAT:\n' +
      '- Dekan: Prof. Dr. Gusrizal, S.Si., M.Si.\n' +
      '- Wakil Dekan Bid. Akademik: Yudha Arman, S.Si, M.Si., D.Sc.\n' +
      '- Wakil Dekan Bid. Keuangan & Umum: Dr. Evi Noviani, S.Si., M.Si.\n' +
      '- Wakil Dekan Bid. Kemahasiswaan & Alumni: Tedy Rismawan, S.Kom., M.Cs.\n\n' +
      'KETUA JURUSAN:\n' +
      '- Matematika: Dr. Yundari, S.Si., M.Sc.\n' +
      '- Fisika: Dr. Bintoro Siswo Nugroho, S.Si., M.Si.\n' +
      '- Kimia: Dr. Anis Shofiyani, S.Si., M.Si.\n' +
      '- Biologi: Dr. Dwi Gusmalawati, S.Si., M.Si.\n' +
      '- Ilmu Kelautan: Dr. Apriansyah, S.Si., M.Si.\n' +
      '- RSK & Sisfo: Arif Bijaksana Putra Negara, S.Kom., M.Kom.\n\n' +
      'KOORDINATOR PRODI:\n' +
      '- Matematika: Dr. Bayu Prihandono, S.Si., M.Sc.\n' +
      '- Statistika: Dr. Evy Sulistianingsih, S.Si., M.Sc.\n' +
      '- Fisika: Dr. Azrul Azwar, S.Si., M.Si.\n' +
      '- Kimia: Dr. Winda Rahmalia, S.Si., M.Si.\n' +
      '- Geofisika: Dr. Yoga Satria Putra, S.Si., M.Si.\n\n' +
      'KEPALA LABORATORIUM:\n' +
      '- Lab Matematika: Fransiskus Fran, S.Si., M.Si.\n' +
      '- Lab Statistika: Shantika Martha, S.Si., M.Si.\n' +
      '- Lab Fisika Dasar: Boni Pahlanop Lapanporo, S.Si., M.Sc.\n' +
      '- Lab Fisika Lanjut & Komputasi: Dr. Dwiria Wahyuni, S.Si., M.Sc.\n' +
      '- Lab Geofisika & SIG: Dr. Joko Sampurno, S.Si., M.Si.\n' +
      '- Lab Kimia: Dr. Nurlina, S.Si., M.Sc.\n' +
      '- Lab Bioteknologi & Riset: Adhitiyawarman, S.Si., M.Si., Ph.D.\n' +
      '- Lab Biologi: Dr. Zulfa Zakiah, S.Si., M.Si.\n' +
      '- Lab Zoologi: Ari Hepi Yanti, S.Si., M.Sc.\n' +
      '- Lab Ilmu Kelautan: Warsidah, S.Si., M.Si., Apt.\n' +
      '- Lab Pemrograman & Komputasi: Uray Ristian, S.Kom., M.Kom.\n' +
      '- Lab Sistem Informasi: Ferdy Febriyanto, S.Kom., M.Kom.\n\n' +
      'KEPALA BAGIAN:\n' +
      '- Kepala Bagian Tata Usaha: Eva Novianti Hestivera, S.T., S.E., M.M.\n' +
      '- Pengadministrasi Akademik: Sakdiana',
  },

  {
    id: 'dosen_fmipa',
    answer: '=== DATA DOSEN FMIPA UNTAN (per Juli 2026) ===\n\n[Biologi]\n  • Prof. Dr. Dra. Siti Khotimah, M.Si. | Guru Besar | Gol. IV/d\n  • Prof. Dr. Rafdinal, S.Si., M.Si. | Guru Besar | Gol. IV/c\n  • Dr. Elvi Rusmiyanto Pancaning Wardoyo, S.Si., M.Si. | Lektor Kepala | Gol. IV/b\n  • Riza Linda, S.Si., M.Si. | Lektor Kepala | Gol. IV/a\n  • Dr. Kustiati, S.Si., M.Si. | Lektor Kepala | Gol. IV/c\n  • Masnur Turnip, S.Si., M.Sc. | Lektor | Gol. III/d\n  • Mukarlina, S.Si., M.Si. | Lektor | Gol. III/d\n  • Dr. Zulfa Zakiah, S.Si., M.Si. | Lektor | Gol. III/d | Jabatan: Kepala Laboratorium Biologi\n  • Irwan Lovadi, S.Si., M.App.Sc., Ph.D. | Lektor | Gol. III/d\n  • Siti Ifadatin, S.Si., M.Si. | Lektor | Gol. III/d | Jabatan: Sekretaris Jurusan Biologi\n  • Dr. Junardi, S.Si., M.Si. | Lektor Kepala | Gol. IV/a\n  • Ari Hepi Yanti, S.Si., M.Sc. | Lektor Kepala | Gol. III/d | Jabatan: Kepala Laboratorium Zoologi\n  • Dr. Dwi Gusmalawati, S.Si., M.Si. | Lektor | Gol. III/c | Jabatan: Ketua Jurusan Biologi\n  • Rahmawati, S.Si., M.Sc. | Lektor | Gol. III/c\n  • Diah Wulandari Rousdy, S.Si., M.Sc. | Lektor | Gol. III/c\n  • Riyandi, S.Si., M.Si. | Asisten Ahli | Gol. III/b\n  • Firman Saputra, S.Si., M.Sc. | Asisten Ahli | Gol. III/b\n  • Tri Rima Setyawati, S.Si., M.Si. | Lektor | Gol. III/d | Status: TUGAS BELAJAR\n\n[Fisika]\n  • Yudha Arman, S.Si, M.Si., D.Sc. | Lektor Kepala | Gol. III/d | Jabatan: Wakil Dekan Bid. Akademik\n  • Dr. Bintoro Siswo Nugroho, S.Si., M.Si. | Lektor Kepala | Gol. IV/b | Jabatan: Ketua Jurusan Fisika\n  • Hasanuddin, S.Si., M.Si., Ph.D. | Lektor | Gol. III/d | Jabatan: Sekretaris Jurusan Fisika\n  • Dr. Azrul Azwar, S.Si., M.Si. | Lektor | Gol. III/d | Jabatan: Koordinator Prodi Fisika\n  • Dr. Dwiria Wahyuni, S.Si., M.Sc. | Lektor | Gol. III/d | Jabatan: Kepala Lab Fisika Lanjut & Komputasi\n  • Boni Pahlanop Lapanporo, S.Si., M.Sc. | Lektor | Gol. III/d | Jabatan: Kepala Lab Fisika Dasar\n  • Mariana Bara\'allo Malino, S.Si., M.Sc. | Lektor | Gol. III/c\n  • Dr. Nurhasanah, S.Si., M.Si. | Lektor | Gol. III/d\n  • Dr. Abdul Muid, S.Si., M.Si. | Asisten Ahli | Gol. III/b\n  • Asifa Asri, S.Si., M.Si. | Asisten Ahli | Gol. III/b\n  • Yuris Sutanto, M.Sc. | Asisten Ahli | Gol. III/b\n\n[Geofisika]\n  • Dr. Yoga Satria Putra, S.Si., M.Si. | Lektor Kepala | Gol. IV/a | Jabatan: Koordinator Prodi Geofisika\n  • Dr. Andi Ihwan, S.Si., M.Si. | Lektor Kepala | Gol. IV/c\n  • Dr. Muhammad Ishak Jumarang, S.Si., M.Si. | Lektor Kepala | Gol. IV/c\n  • Dr. Joko Sampurno, S.Si., M.Si. | Lektor Kepala | Gol. III/d | Jabatan: Kepala Lab Geofisika & SIG\n  • Muliadi, S.Si., M.Si. | Lektor Kepala | Gol. IV/a\n  • Zulfian, S.Si., M.Si. | Lektor | Gol. III/c\n  • Irfana Diah Faryuni, S.Si., M.Si. | Asisten Ahli | Gol. III/b\n  • Radhitya Perdhana, S.Si., M.Sc. | Asisten Ahli | Gol. III/b\n  • Riza Adriat, S.Si., M.Si. | Lektor | Gol. III/b | Status: TUGAS BELAJAR\n  • Muhardi, S.Si., M.Sc. | Asisten Ahli | Gol. III/b | Status: TUGAS BELAJAR\n\n[Ilmu Kelautan]\n  • Dr. Apriansyah, S.Si., M.Si. | Lektor | Gol. III/c | Jabatan: Ketua Jurusan Ilmu Kelautan\n  • Warsidah, S.Si., M.Si., Apt. | Lektor | Gol. III/d | Jabatan: Kepala Lab Ilmu Kelautan\n  • Yusuf Arief Nurrahman, S.Kel., M.Si. | Asisten Ahli | Gol. III/b | Jabatan: Sekretaris Jurusan Ilmu Kelautan\n  • Arie Antasari Kushadiwijayanto, S.Si., M.Si. | Lektor | Gol. III/c\n  • Mega Sari Juane Sofiana, S.Si., M.Sc. | Lektor | Gol. III/c\n  • Sukal Minsas, S.Si., M.Si. | Lektor | Gol. III/b\n  • Nora Idiawati, S.Si., M.Si. | Lektor | Gol. III/d | Status: TUGAS BELAJAR\n\n[Kimia]\n  • Prof. Berlian Sitorus, S.Si., M.Si., M.Sc., Ph.D. | Guru Besar | Gol. IV/b\n  • Prof. Rudiyansyah, S.Si., M.Si., Ph.D. | Guru Besar | Gol. IV/c\n  • Dr. Nelly Wahyuni, S.Si., M.Si. | Lektor Kepala | Gol. IV/c\n  • H. Afghani Jayuska, S.Si., M.Si. | Lektor Kepala | Gol. IV/c\n  • Titin Anita Zaharah, S.Si., M.Sc. | Lektor Kepala | Gol. IV/c\n  • Puji Ardiningsih, S.Si., M.Si. | Lektor Kepala | Gol. IV/c\n  • Dr. Anthoni Batahan Aritonang, S.Si., M.Si. | Lektor Kepala | Gol. IV/a\n  • Dr. Endah Sayekti, S.Si., M.Si. | Lektor Kepala | Gol. IV/c | Jabatan: Sekretaris Jurusan Kimia\n  • Dr. Winda Rahmalia, S.Si., M.Si. | Lektor Kepala | Gol. IV/a | Jabatan: Koordinator Prodi S1 Kimia\n  • Dr. Lia Destiarti, S.Si., M.Si. | Lektor Kepala | Gol. IV/a | Jabatan: Koordinator Prodi Magister Kimia\n  • Adhitiyawarman, S.Si., M.Si., Ph.D. | Lektor | Gol. III/d | Jabatan: Kepala Lab Bioteknologi & Riset\n  • Dr. Nurlina, S.Si., M.Sc. | Lektor | Gol. III/d | Jabatan: Kepala Lab Kimia\n  • Intan Syahbanu, S.Si., M.Si. | Lektor | Gol. III/d | Status: TUGAS BELAJAR\n\n[Magister Kimia (S2)]\n  • Prof. Dr. Gusrizal, S.Si., M.Si. | Guru Besar | Gol. IV/c | Jabatan: Dekan FMIPA\n  • Dr. Andi Hairil Alimuddin, S.Si., M.Si. | Lektor Kepala | Gol. IV/c\n  • Dr. Anis Shofiyani, S.Si., M.Si. | Lektor | Gol. III/d | Jabatan: Ketua Jurusan Kimia\n  • Prof. Dr. H. Thamrin Usman, DEA. | Guru Besar | Gol. IV/e\n  • Prof. Risa Nofiani, S.Si., M.Si., Ph.D. | Guru Besar | Gol. IV/d\n  • Dr. Muhamad Agus Wibowo, S.Si., M.Si. | Lektor Kepala | Gol. IV/c\n  • Dr. Ari Widiyantoro, S.Si., M.Si. | Lektor Kepala | Gol. IV/a\n\n[Matematika]\n  • Dr. Evi Noviani, S.Si., M.Si. | Lektor Kepala | Gol. IV/a | Jabatan: Wakil Dekan Bid. Keuangan & Umum\n  • Dr. Yundari, S.Si., M.Sc. | Lektor Kepala | Gol. IV/a | Jabatan: Ketua Jurusan Matematika\n  • Dr. Nilamsari Kusumastuti, S.Si., M.Sc. | Lektor | Gol. III/d | Jabatan: Sekretaris Jurusan Matematika\n  • Dr. Bayu Prihandono, S.Si., M.Sc. | Lektor | Gol. III/d | Jabatan: Koordinator Prodi Matematika\n  • Fransiskus Fran, S.Si., M.Si. | Lektor | Gol. III/c | Jabatan: Kepala Lab Matematika\n  • Drs. Helmi, M.Si. | Lektor | Gol. III/d\n  • Yudhi, S.Si., M.Si. | Asisten Ahli | Gol. III/b\n  • Nur\'ainul Miftahul Huda, S.Si., M.Si. | Lektor | Gol. III/c\n  • Meliana Pasaribu, S.Pd., M.Sc. | Asisten Ahli | Gol. III/b\n  • Mariatul Kiftiah, S.Si., M.Sc. | Lektor | Gol. III/d | Status: TUGAS BELAJAR\n\n[Rekayasa Sistem Komputer]\n  • Tedy Rismawan, S.Kom., M.Cs. | Lektor | Gol. III/d | Jabatan: Wakil Dekan Bid. Kemahasiswaan & Alumni\n  • Syamsul Bahri, S.Kom., M.Cs. | Lektor | Gol. III/c | Jabatan: Ketua Jurusan RSK\n  • Dwi Marisa Midyanti, ST., M.Cs. | Lektor Kepala | Gol. IV/a | Jabatan: Sekretaris Jurusan RSK\n  • Uray Ristian, S.Kom., M.Kom. | Lektor | Gol. III/c | Jabatan: Kepala Lab Pemrograman & Komputasi\n  • Drs. Cucu Suhery, MA. | Lektor | Gol. III/d\n  • Dedi Triyanto, ST., MT. | Lektor | Gol. III/d\n  • Rahmi Hidayati, S.Kom., M.Cs. | Lektor | Gol. III/d\n  • Ikhwan Ruslianto, S.Kom., M.Cs. | Lektor | Gol. III/d\n  • Irma Nirmala, ST., MT. | Lektor | Gol. III/c\n  • Suhardi, ST., M.Eng. | Asisten Ahli | Gol. III/b\n  • Hirzen Hasfani, M.Cs. | Asisten Ahli | Gol. III/b\n  • Kartika Sari, M.Cs. | Asisten Ahli | Gol. III/b\n  • Kasliono, S.Mat., M.Cs. | Asisten Ahli | Gol. III/b\n\n[Sistem Informasi]\n  • Renny Puspita Sari, ST., MT. | Lektor | Gol. III/d | Jabatan: Ketua Jurusan Sistem Informasi\n  • Ibnur Rusi, S.Kom., MM. | Lektor | Gol. III/c | Jabatan: Sekretaris Jurusan Sistem Informasi\n  • Ferdy Febriyanto, S.Kom., M.Kom. | Asisten Ahli | Gol. III/b | Jabatan: Kepala Lab Sistem Informasi\n  • Ilhamsyah, S.Si., M.Cs. | Lektor | Gol. III/d\n  • Nurul Mutiah, ST., MT. | Lektor | Gol. III/d\n  • Dian Prawira, ST., M.Eng. | Lektor | Gol. III/c\n\n[Statistika]\n  • Neva Satyahadewi, S.Si., M.Sc. | Lektor Kepala | Gol. IV/a\n  • Dr. Evy Sulistianingsih, S.Si., M.Sc. | Lektor | Gol. III/d | Jabatan: Koordinator Prodi Statistika\n  • Shantika Martha, S.Si., M.Si. | Lektor | Gol. III/d | Jabatan: Kepala Lab Statistika\n  • Nurfitri Imro\'ah, S.Si., M.Si. | Lektor | Gol. III/c\n  • Hendra Perdana, S.Si., M.Sc. | Asisten Ahli | Gol. III/b\n  • Wirda Andani, M.Si. | Asisten Ahli | Gol. III/b\n  • Yuyun Eka Pratiwi, S.Si., M.Aktr. | Asisten Ahli | Gol. III/b\n  • Ray Tamtama, M.Si. | Gol. III/b\n  • Naomi Nessyana Debataraja, S.Si., M.Si. | Lektor | Gol. III/d | Status: TUGAS BELAJAR\n  • Setyo Wira Rizki, S.Si., M.Sc. | Lektor | Gol. III/c | Status: TUGAS BELAJAR\n\n=== TENAGA KEPENDIDIKAN PNS & PPPK ===\n  • Eva Novianti Hestivera, S.T., S.E., M.M. | Gol. IV/a | Kepala Bagian Tata Usaha\n  • Rinny Yusnita Absari, S.E., M.M. | Gol. IV/a | Pengelola Data | Bag. Keuangan\n  • Rachmat Jamaluddin, A.Md. | Gol. III/c | Bendahara Pengeluaran Pembantu | Bag. Keuangan\n  • Eko Sri Haryati, A.Md. | Gol. III/b | Pengelola Data | Bag. Keuangan\n  • Sakdiana | Gol. III/a | Pengadministrasi Akademik | Bag. Akademik\n  • Megawati June, S.Mat. | Pranata Lab. Pendidikan | Lab. Statistika\n  • Muhammad Hariski, S.Mat. | Pranata Lab. Pendidikan | Lab. Sistem Informasi\n  • Tiara Nusa Putri, S.Si. | Pranata Lab. Pendidikan | Lab. Geofisika\n  • Apriliandi, S.Mat. | Pranata Lab. Pendidikan | Lab. Matematika\n  • Asterina, S.Si. | Pranata Lab. Pendidikan | Lab. Fisika Dasar\n  • Filza Buana Putra, S.Mat. | Pranata Lab. Pendidikan | Lab. Pemrograman & Komputasi\n  • Yoga Pratama, S.Si. | Pranata Lab. Pendidikan | Lab. Bioteknologi dan Riset\n  • Toni | Pengadministrasi Perkantoran | Bag. Kepegawaian\n  • Wiwid Widyana, S.Si. | Penata Layanan Operasional | Bag. Kepegawaian\n  • Riyo Riadi, S.Mat. | Penata Layanan Operasional | Bag. Kepegawaian\n  • Budi Suryadarma | Pengadministrasi Perkantoran | Bag. Keuangan\n  • Suandi, S.Si. | Penata Layanan Operasional | Bag. Keuangan\n  • Nayla Afifah, S.Hut. | Penata Layanan Operasional | Bag. Umum\n  • Supriani, S.Hut. | Penata Layanan Operasional | Bag. Umum\n  • Peri Suhendra | Operator Layanan Operasional | Bag. Umum\n  • Sahroni | Operator Layanan Operasional | Bag. Umum\n  • Susanti, S.Pd. | Penata Layanan Operasional | Bag. Umum / Staf Dekan\n  • Hajjar | Operator Layanan Operasional | Bag. Umum\n  • Onny Suryana | Pengadministrasi Perkantoran | Bag. Akademik\n  • Primanita Putri Darmanto, S.Pd., M.Pd. | Penata Layanan Operasional | Bag. Akademik\n  • Agung Setyowahyu, A.Md.Kesling. | Pengelola Layanan Operasional | Bag. Akademik\n  • Thareq Abdul Aziz, A.Md. | Pengelola Layanan Operasional | Bag. Akademik\n  • Prima, S.S.T. | Penata Layanan Operasional | Administrasi Jurusan Matematika & Statistika\n  • Surya Darma, A.Md. | Pengelola Layanan Operasional | Administrasi Jurusan Ilmu Kelautan & Fisika\n  • Warsi Kurnia Rahayu, S.Si | Penata Layanan Operasional | Administrasi Jurusan Kimia\n  • M. Khairuddin, A.Md. | Pengelola Layanan Operasional | Administrasi Jurusan Biologi\n  • Agus Setiawan, S.Si. | Penata Layanan Operasional | Lab. Fisika Dasar\n  • Emma Khairiah, S.Si | Penata Layanan Operasional | Lab. Biologi\n  • Harianto, S.Si. | Penata Layanan Operasional | Lab. Ilmu Kelautan\n\n=== TENAGA KONTRAK & PHL ===\n  • Sri Rahayu, S.Si | Tenaga Laboran | Lab. Zoologi\n  • Margie Surahman, S.Si. | Tenaga Laboran | Lab. Biologi\n  • Titik Lestari, S.Si. | Laboran Kimia | Lab. Kimia\n  • Muhammad Raymount Abdahu, S.Kom. | Tenaga Administrasi | Jurusan RSK dan Sistem Informasi\n  • Hamdi, S.Kom. | TIK | Bag. Akademik',
  },

  /* ── Info Akademik ── */
  {
    id: 'program_studi',
    answer:
      'Program Studi di FMIPA Untan:\n' +
      'S-1: Matematika, Fisika, Kimia, Biologi, Rekayasa Sistem Komputer (Siskom), ' +
      'Sistem Informasi (Sisfo), Statistika, Ilmu Kelautan, Geofisika\n' +
      'S-2: Kimia\n\n' +
      'Mahasiswa Aktif (2026): 2.370 | Lulus: 100',
  },

  {
    id: 'kalender_akademik',
    answer:
      'Kalender akademik FMIPA Untan mengikuti kalender Universitas Tanjungpura. ' +
      'Info terbaru tersedia di slider portal atau hubungi bagian akademik.',
  },

  /* ── Wisuda ── */
  {
    id: 'wisuda_periode_iv',
    answer:
      'WISUDA PERIODE IV T.A. 2025/2026:\n' +
      '- Tanggal wisuda: 29–30 Juli 2026\n' +
      '- Batas daftar: 10 Juli 2026 (via operator fakultas)\n' +
      '- Biaya D3/S1: GRATIS\n' +
      '- Biaya S2/S3/Profesi: Rp 695.000\n' +
      '- Biaya toga: Rp 325.000 → Bank Kalbar rek. 1012556566 a.n. Apollo Mas CV\n' +
      '- Ambil toga: Untan Smart Store, Gedung Perpustakaan Lt.2 (14–24 Juli 2026)\n' +
      '- Batas serahkan berkas: 9 Juli 2026',
  },

  {
    id: 'syarat_berkas_wisuda',
    answer:
      'SYARAT BERKAS WISUDA FMIPA UNTAN (Periode IV 2025/2026):\n' +
      '1. Print screenshot biodata Satu Untan\n' +
      '2. Print screenshot PISN dari Bio Ijazah\n' +
      '3. Isi biodata online akademik: https://s.id/BiodataIV-26MIPA\n' +
      '4. Bukti isi biodata online\n' +
      '5. Fotokopi Berita Acara Sidang Skripsi\n' +
      '6. Surat bebas biaya kuliah (ditandatangani WD Keuangan)\n' +
      '7. Surat pengantar penyerahan Skripsi/TA\n' +
      '8. Surat bukti terbit jurnal (ditandatangani WD Akademik)\n' +
      '9. Fotokopi ijazah SMA/S1 dilegalisir 2 lembar\n' +
      '10. Fotokopi KTP 200x200px — 2 lembar\n' +
      '11. Fotokopi KK — 2 lembar\n' +
      '12. Fotokopi surat cuti (jika pernah cuti)\n' +
      '13. Surat pernyataan pengambilan ijazah (materai Rp 10.000)\n' +
      '14. Bukti bayar toga\n' +
      '15. Bukti bayar wisuda (khusus S2)',
  },

  /* ── Beasiswa BSI ── */
  {
    id: 'beasiswa_bsi',
    answer:
      'BEASISWA BSI SCHOLARSHIP INSPIRASI 2026:\n' +
      '- Open Recruitment: 8 Juni – 3 Juli 2026\n' +
      '- Seleksi Administrasi: 6–13 Juli 2026\n' +
      '- Paper Test: 17–19 Juli 2026\n' +
      '- Pengumuman: 3 Agustus 2026\n' +
      '- Daftar: linktr.ee/BSI_Scholarship\n' +
      '- Info: Iswandi (0853-9353-7252) / Hendri Purwanto (0896-8965-7258)',
  },

  /* ── Tracer Study ── */
  {
    id: 'tracer_study',
    answer:
      'Tracer Study FMIPA Untan sedang dalam pengembangan (progress ~35%).\n' +
      'Platform pelacakan karir alumni. Target launch: September 2026.\n' +
      'Info: infobakmipa.vercel.app/tracer-study.html',
  },

  /* ── Identitas Pembuat ── */
  {
    id: 'identitas_pembuat',
    answer:
      'Portal Akademik & Kemahasiswaan FMIPA Untan dibuat dan dikembangkan oleh Ceo Menyamar. ' +
      'Kreator: https://www.tiktok.com/@koecheng.sol',
  },

];

if (typeof window !== 'undefined') window.KIRANA_KB = KIRANA_KB;