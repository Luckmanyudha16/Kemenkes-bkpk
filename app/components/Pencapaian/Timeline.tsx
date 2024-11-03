"use client";

import React, { useEffect, useState } from "react";
import styles from "./Timeline.module.css";
// import { FaStethoscope, FaMicroscope, FaClipboardList } from "react-icons/fa";

const data = [
  {
    year: "Pencapaian",
    judul: "Sejarah BKPK",
    title: "Sejarah BKPK",
    // icon: <FaMicroscope size={50} color="#FF9800" />,
    description:
      "Pada 17 Maret 2021 Presiden Joko Widodo menandatangani Peraturan Presiden (Perpres) Nomor 18 Tahun 2021 tentang Kementerian Kesehatan. Penerbitan Perpres ini merupakan tindak lanjut ditetapkannya Keputusan Presiden Nomor 113/P Tahun 2019 tentang Pembentukan Kementerian Negara dan Pengangkatan Menteri Negara Kabinet Indonesia Maju Periode Tahun 2019-2024. Hal itu juga untuk melaksanakan ketentuan Pasal 11 Undang-undang Nomor 39 Tahun 2008 tentang Kementerian Negara.Sebagaimana ketentuan dalam Perpres tersebut, salah satu fungsi yang diselenggarakan Kementerian Kesehatan adalah perumusan, penetapan, dan pelaksanaan kebijakan di bidang kesehatan masyarakat, pencegahan dan pengendalian penyakit, pelayanan kesehatan, kefarmasian, alat kesehatan, dan tenaga Kesehatan. Dengan demikian, tidak lagi terdapat fungsi penelitian dan pengembangan yang selama ini melekat di Kementerian Kesehatan melalui unit organisasi Badan Penelitian dan Pengembangan Kesehatan (Badan Litbangkes).Adanya perubahan itu membuat Badan Litbangkes bertransformasi menjadi Badan Kebijakan Pembangunan Kesehatan (BKPK) yang mengemban fungsi perumusan, penetapan, dan pelaksanaan kebijakan di bidang kesehatan masyarakat.Tak hanya itu, dalam tubuh organisasi Kementerian Kesehatan juga terjadi penataan lembaga. Menteri Kesehatan Budi Gunadi Sadikin merombak jajarannya untuk mengawal transformasi sistem kesehatan yang kuat dan tangguh dalam merespons bencana kesehatan global maupun nasional. Perubahan ini tertuang dalam Peraturan Menteri Kesehatan (Permenkes) Republik Indonesia Nomor 5 Tahun 2022 tentang Organisasi dan Tata Kerja Kementerian Kesehatan yang ditandatangani Menteri Kesehatan pada 7 Februari 2022. Dalam Permenkes tersebut disebutkan organisasi BKPK terdiri dari lima unit eselon 2, yaitu Sekretariat Badan; Pusat Kebijakan Upaya Kesehatan; Pusat Kebijakan Sistem Ketahanan Kesehatan dan Sumber Daya Kesehatan; Pusat Kebijakan Pembiayaan dan Desentralisasi Kesehatan; dan Pusat Kebijakan Kesehatan Global dan Teknologi Kesehatan.",
    media: [
      { type: "image", src: "dokter.png", judul:"", description: "" },
      { type: "image", src: "dokter.png", judul:"", description: "" },
      { type: "video", src: "IndonesiaRaya.mp4", judul:"", description: "" },
    ],
  },

  {
    year: "Pencapaian",
    judul: "",
    title: "Profil BKPK",
    // icon: <FaStethoscope size={50} color="#4CAF50" />,
    description:
     "Berdasarkan Peraturan Menteri Kesehatan Nomor 5 Tahun 2022 tentang Struktur Organisasi dan Tata Kerja Kementerian Kesehatan, Badan Kebijakan Pembangunan Kesehatan (BKPK) mempunyai tugas melaksanakan perumusan dan pemberian rekomendasi kebijakan pembangunan kesehatan.<br>Fungsi:<br>1. Penyusunan kebijakan teknis penguatan kebijakan pembangunan kesehatan<br>2. Pelaksanaan analisis dan pemberian rekomendasi kebijakan pembangunan kesehatan<br>3. Pelaksanaan integrasi dan sinergi pencapaian sasaran pembangunan kesehatan<br>4. Evaluasi dan pelaporan pelaksanaan penguatan kebijakan pembangunan kesehatan<br>5. Pelaksanaan administrasi Badan; dan\n6. Pelaksanaan fungsi lain yang diberikan oleh Menteri.",
    media: [
      { type: "image", src: "budi.png", judul:"<h3>Tugas dan Fungsi</h3>", description: "<p><strong>Tugas</strong></p><p>Berdasarkan Peraturan Menteri Kesehatan Nomor 5 Tahun 2022 tentang Struktur Organisasi dan tata Kerja Kementerian Kesehatan, Badan Kebijakan Pembangunan Kesehatan mempunyai tugas melaksanakan perumusan dan pemberian rekomendasi kebijakan pembangunan kesehatan.</p><br><p><strong>Fungsi</strong></p><p>Dalam melaksanakan tugasnya Badan Kebijakan Pembangunan Kesehatan menyelenggarakan fungsi:</p><ul><li>penyusunan kebijakan teknis penguatan kebijakan pembangunan kesehatan;</li><li>pelaksanaan analisis dan pemberian rekomendasi kebijakan pembangunan kesehatan;</li><li>pelaksanaan integrasi dan sinergi pencapaian sasaran pembangunan kesehatan;</li><li>evaluasi dan pelaporan pelaksanaan penguatan kebijakan pembangunan kesehatan;</li><li>pelaksanaan administrasi Badan; dan</li><li>pelaksanaan fungsi lain yang diberikan oleh Menteri.</li></ul>" },
      { type: "image", src: "Struktur_Organisasi.jpg", judul:"<h3>Struktur Organisasi</h3>", description: "" },
      { type: "image", src: "https://www.badankebijakan.kemkes.go.id/wp-content/uploads/2022/12/Kabadan-syarifah-liza-munira.jpg", judul:"<h3>Syarifah Liza Munira, Ph.D</h3><p><b>Kepala Badan Kebijakan Pembangunan Kesehatan</b></p>", description: "Perempuan kelahiran Jakarta ini dilantik sebagai Kepala Badan Kebijakan Pembangunan Kesehatan pada tanggal 8 Desember 2022. Sebelumnya, Dosen Fakultas Ekonomi dan Bisnis Universitas Indonesia (FEB UI) ini adalah Research Fellow in Health Economics di Australian National University dan pernah menjabat sebagai Ketua Program Studi Magister Ekonomi Kependudukan dan Ketenagakerjaan FEB UI. Beliau berpengalaman bekerja pada lembaga tingkat nasional maupun internasional, seperti World Health Organization, the Global Fund to Fight AIDS, TB and Malaria, the World Bank, serta menjadi Government Affairs Director di GlaxoSmithKline Pharmaceuticals. Gelar Doctor of Philosophy diraihnya dari Australian National University, gelar Master in Public Policy dari National University of Singapore dan gelar Sarjana Ekonomi dari Universitas Indonesia." },
      { type: "image", src: "https://www.badankebijakan.kemkes.go.id/wp-content/uploads/2024/04/Foto-Sesban-Etik-1.jpg", judul:"<h3>dr. Etik Retno Wiyati, MARS, MH</h3><p><b>Sekretaris Badan Kebijakan Pembangunan Kesehatan</b></p>", description: "Etik Retno Wiyati, perempuan asal Sukoharjo, Jawa Tengah ini telah berkarir di Kementerian Kesehatan sejak tahun 2008. Sebelum dilantik menjadi Sekretaris Badan Kebijakan Pembangunan Kesehatan, Etik bertugas di Direktorat Jenderal Tenaga Kesehatan sebagai Ketua Tim Kerja Pendayagunaan Tenaga Kesehatan dan Tenaga Penunjang/Tenaga Pendukung WNA dan WNI Lulusan Luar Negeri. Etik merupakan sekretaris komite bersama adaptasi yang bertugas melakukan evaluasi kompetensi dan pendayagunaan tenaga medis lulusan luar negeri. Diluar tugas pokoknya, ia memiliki pengalaman sebagai Kepala Bidang Kesehatan Panitia Penyelenggara Ibadah Haji Arab Saudi bidang Kesehatan pada tahun 2017." },
      { type: "image", src: "https://www.badankebijakan.kemkes.go.id/wp-content/uploads/2023/10/1670412670644.jpeg", judul:"<h3>Dwi Puspasari, SKM., M.Sc</h3><p><b>Plt. Kepala Pusat Kebijakan Upaya Kesehatan</b></p>", description: "Puspa, begitu beliau biasa disapa, merupakan pribadi kelahiran Medan, 26 Desember 1976. Besar dan tumbuh di Jakarta, beliau memperoleh gelar sarjana kesehatan masyarakat dari Universitas Indonesia (1998-2000) dan melanjutkan studi program magister dalam Ilmu Kesehatan Masyarakat di KIT Royal Tropical Institute yang bekerjasama dengan Vrije Universiteit Amsterdam, The Netherlands (2018-2019). Selain menjalankan tugas sebagai Plt. Kepala Pusat Kebijakan Upaya Kesehatan, beliau merupakan seorang Analis Kebijakan Kesehatan khususnya terkait kebijakan kesehatan multilateral." },
      { type: "image", src: "https://www.badankebijakan.kemkes.go.id/wp-content/uploads/2022/04/FOTO-JPG1.jpg.jpg", judul:"<h3>Dr.apt. IGM. Wirabrata, S.Si., M.Kes., MM, MH</h3><p><b>Kepala Pusat Kebijakan Sistem Ketahanan Kesehatan dan Sumber Daya Kesehatan</b></p>", description: "Pria kelahiran Jakarta ini dilantik sebagai Kepala Pusat Kebijakan Sistem Ketahanan Kesehatan dan Sumber Daya Kesehatan pada tanggal 10 Februari 2022. Sebelumnya, Beliau menjabat sebagai Direktur Pelayanan Kesehatan Tradisional, Ditjen Pelayanan Kesehatan, Kemenkes RI pada tahun 2021, dan Direktur Penilaian Alat Kesehatan dan Perbekalan Kesehatan Rumah Tangga, Ditjen Kefarmasian dan Alat Kesehatan, Kemenkes RI tahun 2018. Beliau menyelesaikan pendidikan dan memperoleh beberapa gelar Magister di antaranya adalah Magister Kesehatan dari Fakultas Kesehatan Masyarakat – Universitas Indonesia, Magister Manajemen dari Sekolah Tinggi Ilmu Ekonomi Kalbe, dan Magister Hukum dari Universitas Pendidikan Nasional, serta meraih gelar Doktor Ilmu Ekonomi dari Universitas Persada Indonesia YAI." },
      { type: "image", src: "https://www.badankebijakan.kemkes.go.id/wp-content/uploads/2024/04/ss1.jpg", judul:"<h3>Bonanza Perwira Taihitu, S.Sos., M.Si.</h3><p><b>Kepala Pusat Kebijakan Kesehatan Global dan Teknologi Kesehatan</b></p>", description: "Pria kelahiran Jakarta ini dilantik sebagai Kepala Pusat Kebijakan Kesehatan Global dan Teknologi Kesehatan pada tanggal 14 April 2022. Sebelumnya, beliau menjabat sebagai Koordinator Fungsi Politik II untuk Kerja Sama Kesehatan, HAM dan Kemanusiaan Kementerian Kerja Sama Luar Negeri pada tahun 2019, Beliau menyelesaikan pendidikan dan memperoleh gelar Sarjana Ilmu Sosial Program Studi Hubungan Interna di Universitas Airlangga dan S2 Magister Ilmu Politik Hubungan Internasional di Universitas Indonesia." },
      { type: "image", src: "https://www.badankebijakan.kemkes.go.id/wp-content/uploads/2024/04/Pas-Foto-Ahmad-Irsan.jpg", judul:"<h3>Dr. Ahmad Irsan A. Moeis, SE, ME</h3><p><b>Kepala Pusat Kebijakan Pembiayaan dan Desentralisasi Kesehatan</b></p>", description: "Pria kelahiran Medan ini dilantik sebagai Kepala Pusat Kebijakan Pembiayaan dan Desentralisasi Kesehatan pada tanggal 1 April 2024. Sebelum berkarir di Kementerian Kesehatan, Ahmad Irsan bertugas sebagai Kasubdit Anggaran Bidang Kesehatan, Direktorat Jenderal Anggaran Kemenkeu RI. Ia adalah alumnus Sekolah Tinggi Akuntansi Negara (STAN) dan memperoleh gelar Sarjana Ekonomi dari Universitas Sumatera Utara, serta Magister Ekonomi dan Doktor Ilmu Ekonomi dari Universitas Indonesia. Sempat mengenyam pendidikan diluar negeri, peraih beasiswa LPDP ini juga lulusan Regional Economic Development Expert di Berlin pada tahun 2009 dan Executive Education, Harvard Kennedy School pada 2021." },
    ],
  },
  {
    year: "Pencapaian",
    judul: "",
    title:
      "Capaian BKPK",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description:
      "BKPK telah menjalankan Survei Status Gizi Indonesia (SSGI) setiap tahun sejak 2019. Survei Status Gizi Indonesia sejak 2019, melibatkan konsorsium lembaga survei untuk manajemen lapangan pada tahun 2024. Keterlibatan para akademisi sebagai tim pakar dan validator eksternal SSGI. Bersama BPS serta BRIN dalam tim SSGI mengawal metodologi dan analisis data. BKPK juga melaksanakan Survei Kesehatan Indonesia (SKI) pada 2023. Pada Juli 2024, telah dilakukan diseminasi terhadap hasil survei tersebut.",
    media: [
      { type: "image", src: "Layanan Rujukan_2.jpg", judul:"", description: "Mengawal Penyusunan Kebijakan (UU dan Turunannya).<br>BKPK telah mengawal penyusunan kebijakan kesehatan sampai menghasilkan Undang Undang Kesehatan Nomor 17 tahun 2023 dan Peraturan Pemerintah Nomor 28 tahun 2024." },
      { type: "image", src: "Layanan Rujukan_3.jpg", judul:"", description: "Kajian Implementasi Kebijakan<br>BKPK sudah melaksanakan 16 topik kajian Implementasi Kebijakan."},
      { type: "image", src: "Layanan Rujukan_4.jpg", judul:"", description: "Survei Status Gizi Indonesia (SSGI) & Survei Kesehatan Indonesia (SKI)<br>BKPK telah menjalankan Survei Status Gizi Indonesia (SSGI) setiap tahun sejak 2019. Survei Status Gizi Indonesia sejak 2019, melibatkan konsorsium lembaga survei untuk manajemen lapangan pada tahun 2024. Keterlibatan para akademisi sebagai tim pakar dan validator eksternal SSGI. Bersama BPS serta BRIN dalam tim SSGI mengawal metodologi dan analisis data. BKPK juga melaksanakan Survei Kesehatan Indonesia (SKI) pada 2023. Pada Juli 2024, telah dilakukan diseminasi terhadap hasil survei tersebut."},
      { type: "image", src: ["Layanan Rujukan_5.jpg", "Layanan Rujukan_6.jpg"], judul:"", description: "SiBijaKs Awards 2024<br>BKPK menyelenggarakan Rekomendasi Kebijakan Kesehatan (SiBijaKs) Awards 2024, yaitu kompetisi penulisan rekomendasi kebijakan kesehatan dengan data Survei Kesehatan Indonesia (SKI) tahun 2023 sebagai sumber data utama."},
      { type: "image", src: "Layanan Rujukan_6.jpg", judul:"", description: "Kerja Sama Internasional<br>BKPK menjalin Kerjasama Internasiona antara lain dengan untuk layanan Kesehatan Ibu dan Anak di 6 Rumah Sakit Vertikal, United Arab Emirates untuk Pembangunan Rumah Sakit Kardiologi di Solo, Sun Medical Centre Korea Selatan, Joint Operation Kemenkes dan Institute for Health Metrics and Evaluation (IHME)."},
      { type: "image", src: "Layanan Rujukan_7.jpg", judul:"", description: "Vaksin Merah Putih<br>BKPK berkolaborasi dengan Universitas Airlangga melaksanakan uji klinis  vaksin Merah Putih dan vaksin booster Covid-19."},
      { type: "image", src: "Layanan Rujukan_8.jpg", judul:"", description: "National Health Account dan Health Technology Assessment<br>Untuk penguatan jaminan kesehatan, BKPK National Health Account yang menghasilkan potret belanja kesehatan Indonesia, belanja farmasi dan belanja berdasarkan penyakit. BKPK juga sudah melakukan review Health Technology Assessment untuk mendapatkan inovasi teknologi di program JKN."},
      { type: "image", src: "Layanan Rujukan_9.jpg", judul:"", description: "Arsitektur Kesehatan Global<br>BKPK berperan penting dalam membangun Arsitektur Kesehatan Global saat Presidensi G20 ,dan Keketuaan ASEAN Tahun 2023"},
      { type: "image", src: "Layanan Rujukan_10.jpg", judul:"", description: "Peran dalam Organisasi Internasional<br>Wakil dari Kementerian Kesehatan menduduki posisi board maupun co-chair dalam organisasi internasional seperti pandemic fund, CEPI, Global fund, dan GAVI."},
      { type: "image", src: "Layanan Rujukan_11.jpg", judul:"", description: "Kolaborasi Global<br>BKPK memanfaatkan jejaring kolaborasi global untuk melakukan leap frog di bidang bioteknologi, genomik dan layanan kedokteran presisi dan juga peningkatan sistem informasi kesehatan."},
      { type: "image", src: "Layanan Rujukan_12.jpg", judul:"", description: "Sistem Informasi Monitoring Implementasi Kebijakan (SIMPLEK)<br>Untuk kinerja internal yang lebih baik, BKPK mengembangkan aplikasi SIMPLEK atau Sistem Informasi Monitoring Implementasi Kebijakan"},
      { type: "video", src: "peta.mp4", judul:"", description: "Layanan Data untuk Publik<br>BKPK juga melayani permintaan data survei secara online untuk memberikan kemudahan kepada publik."},
    ],
  },
  {
    year: "Pencapaian",
    judul: "<h3>Badan Kebijakan Pembangunan Kesehatan</h3>",
    title: "Data Survei",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description:
      "BKPK menyelenggarakan Rekomendasi Kebijakan Kesehatan (SiBijaKs) Awards 2024, yaitu kompetisi penulisan rekomendasi kebijakan kesehatan dengan data Survei Kesehatan Indonesia (SKI) tahun 2023 sebagai sumber data utama.",
    media: [
      { type: "image", src: "dokter.png", judul:"", description: "" },
      { type: "image", src: "dokter.png", judul:"", description: "" },
      { type: "video", src: "IndonesiaRaya.mp4", judul:"", description: "" },
    ],
  },
  {
    year: "Pencapaian",
    judul: "",
    title: "Layanan Data",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description:
      "BKPK menjalin Kerjasama Internasiona antara lain dengan untuk layanan Kesehatan Ibu dan Anak di 6 Rumah Sakit Vertikal, United Arab Emirates untuk Pembangunan Rumah Sakit Kardiologi di Solo, Sun Medical Centre Korea Selatan, Joint Operation Kemenkes dan Institute for Health Metrics and Evaluation (IHME). ",
    media: [
      { type: "video", src: "peta.mp4", judul:"", description: ""},
      { type: "image", src: "Layanan Rujukan_19.jpg", judul:"", description: "" },
      { type: "video", src: "IndonesiaRaya.mp4", judul:"", description: "" },
    ],
  },
  {
    year: "Pencapaian",
    judul: "",
    title: "Repository",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description:
      "BKPK berkolaborasi dengan Universitas Airlangga melaksanakan uji klinis  vaksin Merah Putih dan vaksin booster Covid-19.",
    media: [
      { type: "image", judul:"", src: "dokter.png", description: ""  },
      { type: "image", judul:"", src: "dokter.png", description: ""  },
      { type: "video", judul:"", src: "IndonesiaRaya.mp4", description: ""  },
    ],
  },
  // {
  //   year: "Pencapaian",
  //   // judul: "Badan Kebijakan Pembangunan Kesehatan",
  //   title: "National Health Account dan Health Technology Assessment",
  //   // icon: <FaClipboardList size={50} color="#2196F3" />,
  //   description:
  //     "Untuk penguatan jaminan kesehatan, BKPK National Health Account yang menghasilkan potret belanja kesehatan Indonesia, belanja farmasi dan belanja berdasarkan penyakit. BKPK juga sudah melakukan review Health Technology Assessment untuk mendapatkan inovasi teknologi di program JKN. ",
  //   media: [
  //     { type: "image", src: "dokter.png" },
  //     { type: "image", src: "dokter.png" },
  //     { type: "video", src: "IndonesiaRaya.mp4" },
  //   ],
  // },
  // {
  //   year: "Pencapaian",
  //   // judul: "Badan Kebijakan Pembangunan Kesehatan",
  //   title: "Arsitektur Kesehatan Global",
  //   // icon: <FaClipboardList size={50} color="#2196F3" />,
  //   description:
  //     "BKPK berperan penting dalam membangun Arsitektur Kesehatan Global saat Presidensi G20 ,dan Keketuaan ASEAN Tahun 2023.",
  //   media: [
  //     { type: "image", src: "dokter.png" },
  //     { type: "image", src: "dokter.png" },
  //     { type: "video", src: "IndonesiaRaya.mp4" },
  //   ],
  // },
  // {
  //   year: "Pencapaian",
  //   // judul: "Badan Kebijakan Pembangunan Kesehatan",
  //   title: "Peran dalam Organisasi Internasional",
  //   // icon: <FaClipboardList size={50} color="#2196F3" />,
  //   description:
  //     "Wakil dari Kementerian Kesehatan menduduki posisi board maupun co-chair dalam organisasi internasional seperti pandemic fund, CEPI, Global fund, dan GAVI.",
  //   media: [
  //     { type: "image", src: "dokter.png" },
  //     { type: "image", src: "dokter.png" },
  //     { type: "video", src: "IndonesiaRaya.mp4" },
  //   ],
  // },
  // {
  //   year: "Pencapaian",
  //   // judul: "Badan Kebijakan Pembangunan Kesehatan",
  //   title: "Kolaborasi Global",
  //   // icon: <FaClipboardList size={50} color="#2196F3" />,
  //   description:
  //     "BKPK memanfaatkan jejaring kolaborasi global untuk melakukan leap frog di bidang bioteknologi, genomik dan layanan kedokteran presisi dan juga peningkatan sistem informasi kesehatan.",
  //   media: [
  //     { type: "image", src: "dokter.png" },
  //     { type: "image", src: "dokter.png" },
  //     { type: "video", src: "IndonesiaRaya.mp4" },
  //   ],
  // },
  // {
  //   year: "Pencapaian",
  //   // judul: "Badan Kebijakan Pembangunan Kesehatan",
  //   title: "Sistem Informasi Monitoring Implementasi Kebijakan (SIMPLEK)",
  //   // icon: <FaClipboardList size={50} color="#2196F3" />,
  //   description:
  //     "Untuk kinerja internal yang lebih baik, BKPK mengembangkan aplikasi SIMPLEK atau Sistem Informasi Monitoring Implementasi Kebijakan.",
  //   media: [
  //     { type: "image", src: "dokter.png" },
  //     { type: "image", src: "dokter.png" },
  //     { type: "video", src: "IndonesiaRaya.mp4" },
  //   ],
  // },
  // {
  //   year: "Pencapaian",
  //   // judul: "Badan Kebijakan Pembangunan Kesehatan",
  //   title: "Layanan Data untuk Publik",
  //   // icon: <FaClipboardList size={50} color="#2196F3" />,
  //   description:
  //     "BKPK juga melayani permintaan data survei secara online untuk memberikan kemudahan kepada publik.",
  //   media: [
  //     { type: "image", src: "dokter.png" },
  //     { type: "image", src: "dokter.png" },
  //     { type: "video", src: "IndonesiaRaya.mp4" },
  //   ],
  // },
  // {
  //   year: "Pencapaian",
  //   // judul: "Badan Kebijakan Pembangunan Kesehatan",
  //   title: "Gambar dan Judul",
  //   // icon: <FaClipboardList size={50} color="#2196F3" />,
  //   description: "Deskripsi tentang Dokumen SKI dan SSGI.",
  //   media: [
  //     { type: "image", src: "dokter.png" },
  //     { type: "image", src: "dokter.png" },
  //     { type: "video", src: "IndonesiaRaya.mp4" },
  //   ],
  // },
  // {
  //   year: "Pencapaian",
  //   // judul: "Badan Kebijakan Pembangunan Kesehatan",
  //   title: "Gambar dan Judul",
  //   // icon: <FaClipboardList size={50} color="#2196F3" />,
  //   description: "Deskripsi tentang Dokumen SKI dan SSGI.",
  //   media: [
  //     { type: "image", src: "dokter.png" },
  //     { type: "image", src: "dokter.png" },
  //     { type: "video", src: "IndonesiaRaya.mp4" },
  //   ],
  // },
  // {
  //   year: "Pencapaian",
  //   // judul: "Badan Kebijakan Pembangunan Kesehatan",
  //   title: "Gambar dan Judul",
  //   // icon: <FaClipboardList size={50} color="#2196F3" />,
  //   description: "Deskripsi tentang Dokumen SKI dan SSGI.",
  //   media: [
  //     { type: "image", src: "dokter.png" },
  //     { type: "image", src: "dokter.png" },
  //     { type: "video", src: "IndonesiaRaya.mp4" },
  //   ],
  // },
  // Tambahkan data lainnya
];

export default function Timeline() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    if (selectedIndex !== null) {
      setPopupVisible(true);
      setCurrentMediaIndex(0);
    }
  }, [selectedIndex]);

  const radius = 300;

  const handleCardClick = (index) => {
    console.log(index);
    setSelectedIndex(index);
  };

  const handleClosePopup = () => {
    setSelectedIndex(null);
    setPopupVisible(false);
  };

  const handleNextMedia = () => {
    const totalMedia = data[selectedIndex]?.media.length;
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % totalMedia);
  };

  const handlePrevMedia = () => {
    const totalMedia = data[selectedIndex]?.media.length;
    setCurrentMediaIndex(
      (prevIndex) => (prevIndex - 1 + totalMedia) % totalMedia
    );
  };

  interface ImageSliderProps {
    images: string | string[];
    title: string;
  }
  const RenderImageSlider: React.FC<ImageSliderProps> = ({ images, title }) => {
    const [imageSlide, SetImageSlide] = React.useState(0);
    if (Array.isArray(images)) {
      return (
        <div className="rounded-md shadow max-w-[1200px] flex gap-4" style={{
          width: "100%",
          height: "100%",
          overflowX: "auto"
        }}>
          {images.map((item: string, index: number) => (
            <img
              key={index}
              src={item}
              alt={`${title} media ${index + 1}`}
              className="h-full"
            />
          ))}
        </div>
        // <>
        //   <div>
        //     <img
        //       src={images[imageSlide]}
        //       alt={`${title} media ${currentMediaIndex + 1}`}
        //       className="w-full rounded-md shadow max-w-[900px]"
        //     />
        //     <div className="flex gap-2 my-2 justify-center">
        //       <div onClick={() => {
        //           if(imageSlide - 1 == -1) {
        //             SetImageSlide(images.length - 1);
        //           } else {
        //             SetImageSlide(imageSlide - 1);
        //           }
        //         }}>
        //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        //           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        //         </svg>
        //       </div>

        //       <p>{imageSlide + 1} of {images.length}</p>

        //       <div onClick={() => {
        //           if(imageSlide + 1 == images.length) {
        //             SetImageSlide(0);
        //           } else {
        //             SetImageSlide(imageSlide + 1);
        //           }
        //         }}>
        //           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        //             <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        //           </svg>
        //       </div>
        //     </div>
        //   </div>
        // </>
      );
    } else {
      return (
        <img
          src={images}
          alt={`${title} media ${currentMediaIndex + 1}`}
          className="w-full rounded-md shadow max-w-[900px]"
        />
      )
    }
  };

  return (
    <>
      {isPopupVisible && selectedIndex !== null && (
        <div className="absolute bg-black bg-opacity-50 w-[100%] h-[100%] z-[999] left-0 top-0 flex items-center justify-center">
          <div className={`flex ${data[selectedIndex].media[currentMediaIndex].type == 'video' ? "flex-col" : ""} items-center px-[40px] py-[10px] max-w-[60vw] min-h-[60vh] bg-white border border-sm rounded-xl gap-8 relative`}>
            <div className='absolute right-[-20] top-[-20] bg-white border w-[50px] h-[50px] rounded-full flex items-center justify-center'>
              <button onClick={handleClosePopup} style={{ color: "green"}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div>
              {data[selectedIndex].media && data[selectedIndex].media.length > 1 && (
                <div className="flex items-center justify-between w-full h-full absolute top-0 left-0 px-[10px]">
                  <div onClick={handlePrevMedia} className="flex items-center p-2 rounded-full bg-black bg-opacity-10  hover:bg-opacity-20 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                  </div>
                  <div onClick={handleNextMedia} className="flex items-center p-2 rounded-full bg-black bg-opacity-10  hover:bg-opacity-20 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            <div className={`bg-slate-200 ${data[selectedIndex].media[currentMediaIndex].type === "image" ? "min-w-[40%] h-[100%]" : "w-[100%]"} rounded-md flex justify-center mb-[2px] relative`}>
              {/* {data[selectedIndex].media &&
                data[selectedIndex].media.length > 1 && (
                  <div className={styles.carouselControls}>
                    <button onClick={handlePrevMedia}>&lt;</button>
                    <button onClick={handleNextMedia}>&gt;</button>
                  </div>
                )} */}

              {data[selectedIndex].media[currentMediaIndex].type ===
              "image" ? (
                <RenderImageSlider images={data[selectedIndex].media[currentMediaIndex].src} title={data[selectedIndex].title} />
              ) : (
                <video
                  src={data[selectedIndex].media[currentMediaIndex].src}
                  controls
                  className="w-full rounded-2xl"
                />
              )}
            </div>

            <div className={styles.popupDescription}>
              <div 
                className={styles.popupTitle}
                dangerouslySetInnerHTML={{
                  __html: data[selectedIndex].judul ? data[selectedIndex].judul : data[selectedIndex].media[currentMediaIndex].judul,
                }}>
                
              </div>
              
              <div
                dangerouslySetInnerHTML={{
                  __html: data[selectedIndex].media[currentMediaIndex].description,
                }}></div>
              {/* <p>{data[selectedIndex].description}</p> */}
            </div>
          </div>
        </div>
      )}

      <div className={styles.timelineContainer}>
        <button className={`${styles.styledButton} ${styles.circularCard}`}>
          Transformasi Kesehatan
        </button>
        <div className={styles.timeline}>
          {data.map((entry, index) => {
            const angle = (index / data.length) * 2 * Math.PI;
            const x = Math.round((radius * Math.cos(angle) + 50) * 100) / 100;
            const y = Math.round((radius * Math.sin(angle) + 50) * 100) / 100;

            return (
              <div
                key={index}
                className={`${styles.card} ${
                  selectedIndex === index ? styles.active : ""
                }`}
                style={{ left: `${x}px`, top: `${y}px` }}
                onClick={() => handleCardClick(index)}>
                <h3 className={styles.cardTitle}>{entry.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
