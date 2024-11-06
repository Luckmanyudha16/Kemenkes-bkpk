"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Timeline.module.css";

// import { FaStethoscope, FaMicroscope, FaClipboardList } from "react-icons/fa";

const data = [
  {
    year: "Pencapaian",
    judul: "",
    title: "Sejarah BKPK",
    background: "BKPK%20LOGO.png",
    // icon: <FaMicroscope size={50} color="#FF9800" />,
    description:
      "",
    media: [
      { type: "image", src: "gedung.jpg", judul:"<h3><b>Sejarah BKPK</b></h3>", description: "Pada 17 Maret 2021, Presiden Joko Widodo menandatangani Peraturan Presiden (Perpres) Nomor 18 Tahun 2021 tentang Kementerian Kesehatan. Penerbitan Perpres ini merupakan tindak lanjut dari ditetapkannya Keputusan Presiden Nomor 113/P Tahun 2019 tentang Pembentukan Kementerian Negara dan Pengangkatan Menteri Negara Kabinet Indonesia Maju Periode Tahun 2019-2024. Hal itu juga bertujuan untuk melaksanakan ketentuan Pasal 11 Undang-Undang Nomor 39 Tahun 2008 tentang Kementerian Negara.\n\nSebagaimana diatur dalam Perpres tersebut, salah satu fungsi yang diselenggarakan oleh Kementerian Kesehatan adalah perumusan, penetapan, dan pelaksanaan kebijakan di bidang kesehatan masyarakat, pencegahan dan pengendalian penyakit, pelayanan kesehatan, kefarmasian, alat kesehatan, dan tenaga kesehatan. Dengan demikian, fungsi penelitian dan pengembangan yang sebelumnya melekat di Kementerian Kesehatan melalui unit organisasi Badan Penelitian dan Pengembangan Kesehatan (Badan Litbangkes) tidak lagi terdapat di dalamnya.\n\nPerubahan ini menyebabkan Badan Litbangkes bertransformasi menjadi Badan Kebijakan Pembangunan Kesehatan (BKPK), yang kini mengemban fungsi perumusan, penetapan, dan pelaksanaan kebijakan di bidang kesehatan masyarakat.\n\nSelain itu, dalam tubuh organisasi Kementerian Kesehatan juga terjadi penataan lembaga. Menteri Kesehatan Budi Gunadi Sadikin merombak jajarannya untuk memperkuat transformasi sistem kesehatan yang tangguh dalam menghadapi bencana kesehatan global maupun nasional. Perubahan ini tertuang dalam Peraturan Menteri Kesehatan (Permenkes) Republik Indonesia Nomor 5 Tahun 2022 tentang Organisasi dan Tata Kerja Kementerian Kesehatan, yang ditandatangani oleh Menteri Kesehatan pada 7 Februari 2022.\n\nDalam Permenkes tersebut, organisasi BKPK terdiri dari lima unit eselon 2, yaitu Sekretariat Badan; Pusat Kebijakan Upaya Kesehatan; Pusat Kebijakan Sistem Ketahanan Kesehatan dan Sumber Daya Kesehatan; Pusat Kebijakan Pembiayaan dan Desentralisasi Kesehatan; serta Pusat Kebijakan Kesehatan Global dan Teknologi Kesehatan."},
      // { type: "image", src: "", judul:"", description: "" },
      // { type: "video", src: "", judul:"", description: "" },
    ],
  },

  {
    year: "Pencapaian",
    judul: "",
    title: "Profil BKPK",
    background: "BKPK%20LOGO.png",
    // icon: <FaStethoscope size={50} color="#4CAF50" />,
    description:
     "Berdasarkan Peraturan Menteri Kesehatan Nomor 5 Tahun 2022 tentang Struktur Organisasi dan Tata Kerja Kementerian Kesehatan, Badan Kebijakan Pembangunan Kesehatan (BKPK) mempunyai tugas melaksanakan perumusan dan pemberian rekomendasi kebijakan pembangunan kesehatan.<br>Fungsi:<br>1. Penyusunan kebijakan teknis penguatan kebijakan pembangunan kesehatan<br>2. Pelaksanaan analisis dan pemberian rekomendasi kebijakan pembangunan kesehatan<br>3. Pelaksanaan integrasi dan sinergi pencapaian sasaran pembangunan kesehatan<br>4. Evaluasi dan pelaporan pelaksanaan penguatan kebijakan pembangunan kesehatan<br>5. Pelaksanaan administrasi Badan; dan\n6. Pelaksanaan fungsi lain yang diberikan oleh Menteri.",
    media: [
      { type: "image", src: "gedung.jpg", judul:"<h3><b>Tugas dan Fungsi</b></h3>", description: "<p><strong>Tugas</strong></p><p>Berdasarkan Peraturan Menteri Kesehatan Nomor 5 Tahun 2022 tentang Struktur Organisasi dan tata Kerja Kementerian Kesehatan, Badan Kebijakan Pembangunan Kesehatan mempunyai tugas melaksanakan perumusan dan pemberian rekomendasi kebijakan pembangunan kesehatan.</p><br><p><strong>Fungsi</strong></p><p>Dalam melaksanakan tugasnya Badan Kebijakan Pembangunan Kesehatan menyelenggarakan fungsi:</p><ul><li>penyusunan kebijakan teknis penguatan kebijakan pembangunan kesehatan;</li><li>pelaksanaan analisis dan pemberian rekomendasi kebijakan pembangunan kesehatan;</li><li>pelaksanaan integrasi dan sinergi pencapaian sasaran pembangunan kesehatan;</li><li>evaluasi dan pelaporan pelaksanaan penguatan kebijakan pembangunan kesehatan;</li><li>pelaksanaan administrasi Badan; dan</li><li>pelaksanaan fungsi lain yang diberikan oleh Menteri.</li></ul>" },
      { type: "image", src: "Struktur baru.png", judul:"<h2><b>Struktur Organisasi</b></h2>", description: "" },
      { type: "image", src: "Kabadan Liza.png", judul:"<h3>Syarifah Liza Munira, Ph.D</h3><p><b>Kepala Badan Kebijakan Pembangunan Kesehatan</b></p>", description: "Perempuan kelahiran Jakarta ini dilantik sebagai Kepala Badan Kebijakan Pembangunan Kesehatan pada tanggal 8 Desember 2022. Sebelumnya, Dosen Fakultas Ekonomi dan Bisnis Universitas Indonesia (FEB UI) ini adalah Research Fellow in Health Economics di Australian National University dan pernah menjabat sebagai Ketua Program Studi Magister Ekonomi Kependudukan dan Ketenagakerjaan FEB UI. Beliau berpengalaman bekerja pada lembaga tingkat nasional maupun internasional, seperti World Health Organization, the Global Fund to Fight AIDS, TB and Malaria, the World Bank, serta menjadi Government Affairs Director di GlaxoSmithKline Pharmaceuticals. Gelar Doctor of Philosophy diraihnya dari Australian National University, gelar Master in Public Policy dari National University of Singapore dan gelar Sarjana Ekonomi dari Universitas Indonesia." },
      { type: "image", src: "https://www.badankebijakan.kemkes.go.id/wp-content/uploads/2024/04/Foto-Sesban-Etik-1.jpg", judul:"<h3>dr. Etik Retno Wiyati, MARS, MH</h3><p><b>Sekretaris Badan Kebijakan Pembangunan Kesehatan</b></p>", description: "Etik Retno Wiyati, perempuan asal Sukoharjo, Jawa Tengah ini telah berkarir di Kementerian Kesehatan sejak tahun 2008. Sebelum dilantik menjadi Sekretaris Badan Kebijakan Pembangunan Kesehatan, Etik bertugas di Direktorat Jenderal Tenaga Kesehatan sebagai Ketua Tim Kerja Pendayagunaan Tenaga Kesehatan dan Tenaga Penunjang/Tenaga Pendukung WNA dan WNI Lulusan Luar Negeri. Etik merupakan sekretaris komite bersama adaptasi yang bertugas melakukan evaluasi kompetensi dan pendayagunaan tenaga medis lulusan luar negeri. Diluar tugas pokoknya, ia memiliki pengalaman sebagai Kepala Bidang Kesehatan Panitia Penyelenggara Ibadah Haji Arab Saudi bidang Kesehatan pada tahun 2017." },
      { type: "image", src: "dwii.jpg", judul:"<h3>Dwi Puspasari, SKM., M.Sc</h3><p><b>Plt. Kepala Pusat Kebijakan Upaya Kesehatan</b></p>", description: "Puspa, begitu beliau biasa disapa, merupakan pribadi kelahiran Medan, 26 Desember 1976. Besar dan tumbuh di Jakarta, beliau memperoleh gelar sarjana kesehatan masyarakat dari Universitas Indonesia (1998-2000) dan melanjutkan studi program magister dalam Ilmu Kesehatan Masyarakat di KIT Royal Tropical Institute yang bekerjasama dengan Vrije Universiteit Amsterdam, The Netherlands (2018-2019). Selain menjalankan tugas sebagai Plt. Kepala Pusat Kebijakan Upaya Kesehatan, beliau merupakan seorang Analis Kebijakan Kesehatan khususnya terkait kebijakan kesehatan multilateral." },
      { type: "image", src: "dr.ira.png", judul:"<h3>Dr. IRA CYNDIRA TRESNA, M.I.Kom</h3><p><b>Kepala Pusat Kebijakan Sistem Ketahanan Kesehatan dan Sumber Daya Kesehatan</b></p>", description: "Wanita  kelahiran Bandung ini ditunjuk menjadi Plt. Kepala Pusat Kebijakan Sistem Ketahanan Kesehatan dan Sumber Daya Kesehatan, Beliau menyelesaikan pendidikan Kedokteran dari Universitas Kristen Indonesia dan memperoleh gelar Magister Komunikasi dari  Universitas Mercu Buana. Selain menjalankan tugas sebagai Plt. Pusat Kebijakan Sistem Ketahanan Kesehatan dan Sumber Daya Kesehatan, beliau merupakan seorang Analis Kebijakan Kesehatan." },
      { type: "image", src: "bonan.jpg", judul:"<h3>Bonanza Perwira Taihitu, S.Sos., M.Si.</h3><p><b>Kepala Pusat Kebijakan Kesehatan Global dan Teknologi Kesehatan</b></p>", description: "Pria kelahiran Jakarta ini dilantik sebagai Kepala Pusat Kebijakan Kesehatan Global dan Teknologi Kesehatan pada tanggal 14 April 2022. Sebelumnya, beliau menjabat sebagai Koordinator Fungsi Politik II untuk Kerja Sama Kesehatan, HAM dan Kemanusiaan Kementerian Kerja Sama Luar Negeri pada tahun 2019, Beliau menyelesaikan pendidikan dan memperoleh gelar Sarjana Ilmu Sosial Program Studi Hubungan Interna di Universitas Airlangga dan S2 Magister Ilmu Politik Hubungan Internasional di Universitas Indonesia." },
      { type: "image", src: "https://www.badankebijakan.kemkes.go.id/wp-content/uploads/2024/04/Pas-Foto-Ahmad-Irsan.jpg", judul:"<h3>Dr. Ahmad Irsan A. Moeis, SE, ME</h3><p><b>Kepala Pusat Kebijakan Pembiayaan dan Desentralisasi Kesehatan</b></p>", description: "Pria kelahiran Medan ini dilantik sebagai Kepala Pusat Kebijakan Pembiayaan dan Desentralisasi Kesehatan pada tanggal 1 April 2024. Sebelum berkarir di Kementerian Kesehatan, Ahmad Irsan bertugas sebagai Kasubdit Anggaran Bidang Kesehatan, Direktorat Jenderal Anggaran Kemenkeu RI. Ia adalah alumnus Sekolah Tinggi Akuntansi Negara (STAN) dan memperoleh gelar Sarjana Ekonomi dari Universitas Sumatera Utara, serta Magister Ekonomi dan Doktor Ilmu Ekonomi dari Universitas Indonesia. Sempat mengenyam pendidikan diluar negeri, peraih beasiswa LPDP ini juga lulusan Regional Economic Development Expert di Berlin pada tahun 2009 dan Executive Education, Harvard Kennedy School pada 2021." },
    ],
  },
  {
    year: "Pencapaian",
    judul: "",
    title:
      "Capaian BKPK",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    background: "BKPK%20LOGO.png",
    description:
      "BKPK telah menjalankan Survei Status Gizi Indonesia (SSGI) setiap tahun sejak 2019. Survei Status Gizi Indonesia sejak 2019, melibatkan konsorsium lembaga survei untuk manajemen lapangan pada tahun 2024. Keterlibatan para akademisi sebagai tim pakar dan validator eksternal SSGI. Bersama BPS serta BRIN dalam tim SSGI mengawal metodologi dan analisis data. BKPK juga melaksanakan Survei Kesehatan Indonesia (SKI) pada 2023. Pada Juli 2024, telah dilakukan diseminasi terhadap hasil survei tersebut.",
    media: [
      { type: "image", src: "mengawal.jpeg", judul:"<h2><b>Mengawal Penyusunan Kebijakan (UU dan Turunannya)</b></h2>", description: "BKPK telah mengawal penyusunan kebijakan kesehatan sampai menghasilkan Undang Undang Kesehatan Nomor 17 tahun 2023 dan Peraturan Pemerintah Nomor 28 tahun 2024." },
      { type: "image", src: ["kajian.jpg", "kajian2.jpg"], judul:"<h2><b>Kajian Implementasi Kebijakan</b></h2>", description: "Kajian Implementasi Kebijakan BKPK sudah melaksanakan 16 topik kajian Implementasi Kebijakan."},
      { type: "image", src: ["status gizi.jpg", "status gizi 2.jpg", "survei kesehatan indo.png"], judul:"<h2><b>Survei Kesehatan Indonesia (SKI)</b></h2>", description: "BKPK telah menjalankan Survei Status Gizi Indonesia (SSGI) setiap tahun sejak 2019. Survei Status Gizi Indonesia sejak 2019, melibatkan konsorsium lembaga survei untuk manajemen lapangan pada tahun 2024. Keterlibatan para akademisi sebagai tim pakar dan validator eksternal SSGI. Bersama BPS serta BRIN dalam tim SSGI mengawal metodologi dan analisis data. BKPK juga melaksanakan Survei Kesehatan Indonesia (SKI) pada 2023. Pada Juli 2024, telah dilakukan diseminasi terhadap hasil survei tersebut."},
      { type: "image", src: ["sibijak award.jpg","bijak.jpg"], judul:"<h2><b>SiBijaKs Awards 2024</b></h2>", description: "BKPK menyelenggarakan Rekomendasi Kebijakan Kesehatan (SiBijaKs) Awards 2024, yaitu kompetisi penulisan rekomendasi kebijakan kesehatan dengan data Survei Kesehatan Indonesia (SKI) tahun 2023 sebagai sumber data utama."},
      { type: "image", src: ["islamic dev.jpg", "uni emirate  arab.jpeg", "sun medical.jpg" ], judul:"<h2><b>Kerja Sama Internasional</b></h2>", description: "BKPK menjalin Kerjasama Internasiona antara lain dengan untuk layanan Kesehatan Ibu dan Anak di 6 Rumah Sakit Vertikal, United Arab Emirates untuk Pembangunan Rumah Sakit Kardiologi di Solo, Sun Medical Centre Korea Selatan, Joint Operation Kemenkes dan Institute for Health Metrics and Evaluation (IHME)."},
      { type: "image", src: "vaksin.jpg", judul:"<h2><b>Vaksin Merah Putih</b></h2>", description: "BKPK berkolaborasi dengan Universitas Airlangga melaksanakan uji klinis  vaksin Merah Putih dan vaksin booster Covid-19."},
      { type: "image", src: "assesment teknologi.jpg", judul:"<h2><b>National Health Account dan Health Technology Assessment</b></h2>", description: "Untuk penguatan jaminan kesehatan, BKPK National Health Account yang menghasilkan potret belanja kesehatan Indonesia, belanja farmasi dan belanja berdasarkan penyakit. BKPK juga sudah melakukan review Health Technology Assessment untuk mendapatkan inovasi teknologi di program JKN."},
      { type: "image", src: ["arsitektur_global.jpeg", "arsitektur_regional.jpg"], judul:"<h2><b>Arsitektur Kesehatan Global</b></h2>", description: "BKPK berperan penting dalam membangun Arsitektur Kesehatan Global saat Presidensi G20 ,dan Keketuaan ASEAN Tahun 2023"},
      { type: "image", src: "peran.jpg", judul:"<h2><b>Peran dalam Organisasi Internasional</b></h2>", description: "Wakil dari Kementerian Kesehatan menduduki posisi board maupun co-chair dalam organisasi internasional seperti pandemic fund, CEPI, Global fund, dan GAVI."},
      { type: "image", src: "kolaborasi.jpg", judul:"<h2><b>Kolaborasi Global</b></h2>", description: "BKPK memanfaatkan jejaring kolaborasi global untuk melakukan leap frog di bidang bioteknologi, genomik dan layanan kedokteran presisi dan juga peningkatan sistem informasi kesehatan."},
      { type: "image", src: ["SIMPLEK 1.png", "SIMPLEK 2.JPG", "SIMPLEK 3.JPG", "SIMPLEK 4.jpg"], judul:"<h2><b>Sistem Informasi Monitoring Implementasi Kebijakan (SIMPLEK)</b></h2>", description: "Untuk kinerja internal yang lebih baik, BKPK mengembangkan aplikasi SIMPLEK atau Sistem Informasi Monitoring Implementasi Kebijakan"},
      { type: "image", src: "Pelatihan Koding.jpg", judul:"<h2><b>Layanan Data untuk Publik</b></h2>", description: "BKPK juga melayani permintaan data survei secara online untuk memberikan kemudahan kepada publik."},
      // { type: "video", src: "peta.mp4", judul:"<h3></h3>", description: "Layanan Data untuk Publik<br>BKPK juga melayani permintaan data survei secara online untuk memberikan kemudahan kepada publik."},
    ],
  },
  {
    year: "Pencapaian",
    judul: "",
    title: "Data Survei",
    background: "BKPK%20LOGO.png",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description:
      "BKPK menyelenggarakan Rekomendasi Kebijakan Kesehatan (SiBijaKs) Awards 2024, yaitu kompetisi penulisan rekomendasi kebijakan kesehatan dengan data Survei Kesehatan Indonesia (SKI) tahun 2023 sebagai sumber data utama.",
    media: [
      // { type: "image", src: "SKI.png", judul:"<h2><b>SSGI 2022</b></h2>", description: "Survei Kesehatan Indonesia (SKI) 2023 dilakukan untuk menilai capaian hasil pembangunan kesehatan yang dilakukan pada kurun waktu lima tahun terakhir di Indonesia, dan juga untuk mengukur tren status gizi balita setiap tahun (2019-2024). Data yang dihasilkan dapat merepresentasikan status kesehatan tingkat Nasional sampai dengan tingkat Kabupaten/Kota. Ketersediaan data dan informasi terkait capaian hasil pembangunan kesehatan penting bagi Kementerian Kesehatan, Pemerintah Provinsi dan Kabupaten/Kota sebagai bahan penyusunan kebijakan, program dan kegiatan pembangunan yang lebih terarah dan tepat sasaran berbasis bukti termasuk pengembangan Rencana Pembangunan Kesehatan Jangka Menengah Nasional (RPJMN 2024-2029) oleh Kementerian PPN/Bappenas. Dalam upaya penyediaan data yang valid dan akurat tersebut, Badan Kebijakan Pembangunan Kesehatan (BKPK) bekerjasama dengan Badan Pusat Statistik (BPS) dalam penyusunan metode dan kerangka sampel SKI 2023, serta bersama dengan Lintas Program di Kementerian Kesehatan, World Health Organization (WHO) dan World Bank dalam pengembangan instrumen, pedoman hingga pelaporan survei." },
      { type: "image", src: "SKI.png", judul:"<h2><b>Data Survei SKI 2023</b></h2>", description: "Survei Kesehatan Indonesia (SKI) 2023 merupakan survei yang mengintegrasikan Riset Kesehatan Dasar (Riskesdas) dan Survei Status Gizi Balita Indonesia (SSGI). SKI 2023 dikerjakan untuk menilai capaian hasil pembangunan kesehatan yang dilakukan pada kurun waktu lima tahun terakhir di Indonesia, dan juga untuk mengukur tren status gizi balita setiap tahun (2019-2024). Data yang dihasilkan dapat merepresentasikan status kesehatan tingkat Nasional sampai dengan tingkat Kabupaten/Kota. Ketersediaan data dan informasi terkait capaian hasil pembangunan kesehatan penting bagi Kementerian Kesehatan, Pemerintah Provinsi dan Kabupaten/Kota sebagai bahan penyusunan kebijakan, program dan kegiatan pembangunan yang lebih terarah dan tepat sasaran berbasis bukti termasuk pengembangan Rencana Pembangunan Kesehatan Jangka Menengah Nasional (RPJMN 2024-2029) oleh Kementerian PPN/Bappenas. Dalam upaya penyediaan data yang valid dan akurat tersebut, Badan Kebijakan Pembangunan Kesehatan (BKPK) bekerjasama dengan Badan Pusat Statistik (BPS) dalam penyusunan metode dan kerangka sampel SKI 2023, serta bersama dengan Lintas Program di Kementerian Kesehatan, World Health Organization (WHO) dan World Bank dalam pengembangan instrumen, pedoman hingga pelaporan survei." },
      { type: "video", src: "SKI HIGHLIGHT.mp4", judul:"", description: "Berikut Video Dokumentasi"  },
      { type: "video", src: "00047.mp4" , judul:"", description: "Berikut Video Dokumentasi" },
      { type: "video", src: "00054.mp4", judul:"", description: "Berikut Video Dokumentasi" },
      { type: "video", src: "00069.mp4", judul:"", description:"Berikut Video Dokumentasi"  },
      { type: "video", src: "00074.mp4", judul:"", description: "Berikut Video Dokumentasi"  },
      { type: "video", src: "00087.mp4", judul:"", description: "Berikut Video Dokumentasi"  },
      { type: "image", src: ["PORTAL LAYANAN.PNG"], judul:"<h3><b>Layanan Data</b></h3>", description: "Badan Kebijakan Pembangunan Kesehatan mengelola data hasil survey skala nasional, dimulai dari Riset Kesehatan Dasar (Riskesdas), Studi Status Gizi Indonesia (SSGI), Riset Fasilitas Kesehatan (Rifaskes), dan survey nasional lainnya." },
    ],
  },
  // {
  //   year: "Pencapaian",
  //   judul: "",
  //   title: "Layanan Data",
  //   background: "BKPK%20LOGO.png",
    
  //   description:
  //     "",
  //   media: [
  //     { type: "image", src: ["ld1.JPG", "ld2.JPG", "ld3.JPG","ld4.JPG"], judul:"<h3><b>Layanan Data</b></h3>", description: "Badan Kebijakan Pembangunan Kesehatan mengelola data hasil survey skala nasional, dimulai dari Riset Kesehatan Dasar (Riskesdas), Studi Status Gizi Indonesia (SSGI), Riset Fasilitas Kesehatan (Rifaskes), dan survey nasional lainnya." },
  //     // { type: "video", src: "", judul:"", description: ""},
  //     // { type: "video", src: "", judul:"", description: "" },
  //   ],
  // },
  {
    year: "Pencapaian",
    judul: "",
    title: "Repository",
    background: "BKPK%20LOGO.png",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description:
      "BKPK berkolaborasi dengan Universitas Airlangga melaksanakan uji klinis  vaksin Merah Putih dan vaksin booster Covid-19.",
    media: [
      { type: "image", judul:"", src: "repository.png", description: "Repositori Badan Kebijakan Pembangunan Kesehatan merupakan sistem informasi penyimpanan, pengelolaan, dan pelayanan akses terhadap koleksi digital karya ilmiah dan produk yang dihasilkan Badan Litbang Kesehatan (saat ini Badan Kebijakan Pembangunan Kesehatan). Repositori ini berisi laporan penelitian, artikel ilmiah, buku, dan koleksi digital lainnya."  },
      // { type: "image", judul:"", src: "", description: ""  },
      // { type: "video", judul:"", src: "", description: ""  },
    ],
  },
  // Tambahkan data lainnya
];

export default function Timeline() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);


  useEffect(() => {
    if (selectedIndex !== null) {
      setPopupVisible(true);
      setCurrentMediaIndex(0);
    }
  }, [selectedIndex]);

  const radius = 300;

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20000 : -90000, // Shift further left for right-edge alignment when entering from left
      scale: 0.9,
      opacity: 0,
    }),
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 100, damping: 20 },
        scale: { duration: 0.4 },
        opacity: { duration: 0.3 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300, // Move out of view in the appropriate direction
      scale: 0.9,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const handleCardClick = (index:number) => {
    console.log(index);
    setSelectedIndex(index);
  };

  const handleClosePopup = () => {
    setSelectedIndex(null);
    setPopupVisible(false);
  };

  const handleNextMedia = () => {
    if (selectedIndex !== null) { // Check if selectedIndex is not null
      const totalMedia = data[selectedIndex]?.media.length || 0;
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % totalMedia);
    }
  };

  const handlePrevMedia = () => {
    if (selectedIndex !== null) { // Ensure selectedIndex is not null
      const totalMedia = data[selectedIndex]?.media.length || 0;
      setCurrentMediaIndex(
        (prevIndex) => (prevIndex - 1 + totalMedia) % totalMedia
      );
    }
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
          className="h-full rounded-md shadow max-w-[900px] overflow-hidden"
        />
      )
    }
  };

  return (
    <>

{/* <AnimatePresence>
  {isPopupVisible && selectedIndex !== null && (
    <motion.div 
      variants={popupVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }} 
      className="absolute bg-black bg-opacity-50 w-full h-full z-[999] left-0 top-0 flex items-center justify-center">
      
      <div className="flex items-center px-[40px] max-w-[60vw] min-h-[60vh] bg-white border border-sm rounded-xl gap-8 relative">
        <div 
          className='absolute right-[-20px] top-[-20px] bg-white border w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300' 
          onClick={handleClosePopup} 
          style={{ color: "green" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>

        <div className="flex justify-center mb-[2px] relative min-w-[50%]" style={{ maxWidth: "50%", overflow: "hidden" }}>
          {data[selectedIndex].media && data[selectedIndex].media.length > 1 && (
            <div className="flex items-center justify-between h-full absolute top-0 left-0 inset-y-0 px-[10px] z-[99]">
              <div onClick={handlePrevMedia} className="flex items-center p-2 rounded-full bg-black bg-opacity-10 hover:bg-opacity-20 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </div>
            </div>
          )}

          <AnimatePresence>
            {data[selectedIndex].media[currentMediaIndex].type === "image" ? (
              <motion.img
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    handleNextMedia();
                  } else if (swipe > swipeConfidenceThreshold) {
                    handlePrevMedia();
                  }
                }}
                src={data[selectedIndex].media[currentMediaIndex].src}
                alt={`${data[selectedIndex].title} media ${currentMediaIndex + 0}`}
                className="w-full bg-transparent"
              />
            ) : (
              <video
                src={data[selectedIndex].media[currentMediaIndex].src}
                controls
                className="w-full rounded-2xl"
              />
            )}
          </AnimatePresence>

          {data[selectedIndex].media && data[selectedIndex].media.length > 1 && (
            <div className="flex items-center justify-between h-full absolute top-0 right-0 inset-y-0 px-[10px] z-[99]">
              <div onClick={handleNextMedia} className="flex items-center p-2 rounded-full bg-black bg-opacity-10 hover:bg-opacity-20 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
          )}
        </div>

        <div className={styles.popupDescription}>
          <h3 className={styles.popupTitle}>{data[selectedIndex].title}</h3>
          <p>{data[selectedIndex].description}</p>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence> */}

    
      {isPopupVisible && selectedIndex !== null && (
        <div className="absolute bg-black bg-opacity-50 w-[100%] h-[100%] z-[999] left-0 top-0 flex items-center justify-center">
          <div className={`flex ${data[selectedIndex].media[currentMediaIndex].type == 'video' ? "flex-col" : ""} items-center px-[80px] py-[30px] max-w-[60vw] min-h-[60vh] bg-white border border-sm rounded-xl gap-8 relative`}>
            <div className='absolute right-[-20] top-[-20] bg-white border w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300' onClick={handleClosePopup} style={{ color: "green"}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>

            {data[selectedIndex].media && data[selectedIndex].media.length > 1 && (
              <div className="absolute left-0 inset-y-0 z-[99] flex items-center ml-4">
                <div onClick={handlePrevMedia} className="flex items-center p-2 rounded-full bg-black bg-opacity-10  hover:bg-opacity-20 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </div>
              </div>
              
            )}

            <div className={`bg-slate-200 ${data[selectedIndex].media[currentMediaIndex].type === "image" ? "min-w-[40%] h-[100%]" : "w-[100%]"} rounded-md flex justify-center mb-[2px] relative`}>
              

              {data[selectedIndex].media[currentMediaIndex].type ===
              "image" ? (
                <RenderImageSlider images={data[selectedIndex].media[currentMediaIndex].src} title={data[selectedIndex].title} />
              ) : (
                <video
                src={Array.isArray(data[selectedIndex].media[currentMediaIndex].src) 
                  ? data[selectedIndex].media[currentMediaIndex].src[0] // Use the first element if it's an array
                  : data[selectedIndex].media[currentMediaIndex].src}   // Use the string directly if it's already a string
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
             
            </div>

            {data[selectedIndex].media && data[selectedIndex].media.length > 1 && (
              <div className="absolute right-0 inset-y-0 z-[99] flex items-center mr-4">
                <div onClick={handleNextMedia} className="flex items-center p-2 rounded-full bg-black bg-opacity-10  hover:bg-opacity-20 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className={styles.timelineContainer}>
        <button className={`${styles.styledButton} ${styles.circularCard}`}>
          Badan Kebijakan Pembangunan Kesehatan
        </button>
        <div className={styles.timeline}>
          <div style={{
            position: "relative",
            width: "200px",
            height: "200px",
          }}>

            {data.map((entry, index) => {
              const angle = (index / data.length) * 2 * Math.PI;
              const x = Math.round((radius * Math.cos(angle) * 80) + 80) / 100;
              const y = Math.round((radius * Math.sin(angle) * 80) + 80) / 100;

              return (
                
              <div
                key={index}
                className={`${styles.card} ${selectedIndex === index ? styles.active : ""}`}
                style={{ left: `${x + 40}px`, top: `${y + 40}px`, backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}/${entry.background})`, backgroundSize: "100px", backgroundPosition: "center", }}
                onClick={() => handleCardClick(index)}
              >
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)"
                }} className="rounded-full"></div>
                <h3 className={styles.cardTitle}style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0}}>{entry.title}</h3>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
