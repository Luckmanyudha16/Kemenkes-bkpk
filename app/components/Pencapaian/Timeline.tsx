"use client";

import { useEffect, useState } from "react";
import styles from "./Timeline.module.css";
// import { FaStethoscope, FaMicroscope, FaClipboardList } from "react-icons/fa";

const data = [
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Sejarah BKPK",
    // icon: <FaMicroscope size={50} color="#FF9800" />,
    description:
      "Pada 17 Maret 2021 Presiden Joko Widodo menandatangani Peraturan Presiden (Perpres) Nomor 18 Tahun 2021 tentang Kementerian Kesehatan. Penerbitan Perpres ini merupakan tindak lanjut ditetapkannya Keputusan Presiden Nomor 113/P Tahun 2019 tentang Pembentukan Kementerian Negara dan Pengangkatan Menteri Negara Kabinet Indonesia Maju Periode Tahun 2019-2024. Hal itu juga untuk melaksanakan ketentuan Pasal 11 Undang-undang Nomor 39 Tahun 2008 tentang Kementerian Negara. Sebagaimana ketentuan dalam Perpres tersebut, salah satu fungsi yang diselenggarakan Kementerian Kesehatan adalah perumusan, penetapan, dan pelaksanaan kebijakan di bidang kesehatan masyarakat, pencegahan dan pengendalian penyakit, pelayanan kesehatan, kefarmasian, alat kesehatan, dan tenaga Kesehatan. Dengan demikian, tidak lagi terdapat fungsi penelitian dan pengembangan yang selama ini melekat di Kementerian Kesehatan melalui unit organisasi Badan Penelitian dan Pengembangan Kesehatan (Badan Litbangkes). Adanya perubahan itu membuat Badan Litbangkes bertransformasi menjadi Badan Kebijakan Pembangunan Kesehatan (BKPK) yang mengemban fungsi perumusan, penetapan, dan pelaksanaan kebijakan di bidang kesehatan masyarakat. Tak hanya itu, dalam tubuh organisasi Kementerian Kesehatan juga terjadi penataan lembaga. Menteri Kesehatan Budi Gunadi Sadikin merombak jajarannya untuk mengawal transformasi sistem kesehatan yang kuat dan tangguh dalam merespons bencana kesehatan global maupun nasional. Perubahan ini tertuang dalam Peraturan Menteri Kesehatan (Permenkes) Republik Indonesia Nomor 5 Tahun 2022 tentang Organisasi dan Tata Kerja Kementerian Kesehatan yang ditandatangani Menteri Kesehatan pada 7 Februari 2022. Dalam Permenkes tersebut disebutkan organisasi BKPK terdiri dari lima unit eselon 2, yaitu Sekretariat Badan; Pusat Kebijakan Upaya Kesehatan; Pusat Kebijakan Sistem Ketahanan Kesehatan dan Sumber Daya Kesehatan; Pusat Kebijakan Pembiayaan dan Desentralisasi Kesehatan; dan Pusat Kebijakan Kesehatan Global dan Teknologi Kesehatan.",
    media: [
      { type: "image", src: "dokter.png" },
      { type: "image", src: "dokter.png" },
      { type: "video", src: "IndonesiaRaya.mp4" },
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Capaian BKPK",
    // icon: <FaStethoscope size={50} color="#4CAF50" />,
    description:
      "1. Mengawal Penyusunan Kebijakan (UU dan Turunannya).<br>BKPK telah mengawal penyusunan kebijakan kesehatan sampai menghasilkan Undang Undang Kesehatan Nomor 17 tahun 2023 dan Peraturan Pemerintah Nomor 28 tahun 2024.<br>2. Kajian Implementasi Kebijakan<br>BKPK sudah melaksanakan 16 topik kajian Implementasi Kebijakan.<br>3. Survei Status Gizi Indonesia (SSGI) & Survei Kesehatan Indonesia (SKI)<br>BKPK telah menjalankan Survei Status Gizi Indonesia (SSGI) setiap tahun sejak 2019. Survei Status Gizi Indonesia sejak 2019, melibatkan konsorsium lembaga survei untuk manajemen lapangan pada tahun 2024. Keterlibatan para akademisi sebagai tim pakar dan validator eksternal SSGI. Bersama BPS serta BRIN dalam tim SSGI mengawal metodologi dan analisis data. BKPK juga melaksanakan Survei Kesehatan Indonesia (SKI) pada 2023. Pada Juli 2024, telah dilakukan diseminasi terhadap hasil survei tersebut.<br>4. SiBijaKs Awards 2024<br>BKPK menyelenggarakan Rekomendasi Kebijakan Kesehatan (SiBijaKs) Awards 2024, yaitu kompetisi penulisan rekomendasi kebijakan kesehatan dengan data Survei Kesehatan Indonesia (SKI) tahun 2023 sebagai sumber data utama. <br>5. Kerja Sama Internasional<br>BKPK menjalin Kerjasama Internasiona antara lain dengan untuk layanan Kesehatan Ibu dan Anak di 6 Rumah Sakit Vertikal, United Arab Emirates untuk Pembangunan Rumah Sakit Kardiologi di Solo, Sun Medical Centre Korea Selatan, Joint Operation Kemenkes dan Institute for Health Metrics and Evaluation (IHME). <br>6. Vaksin Merah Putih<br>BKPK berkolaborasi dengan Universitas Airlangga melaksanakan uji klinis  vaksin Merah Putih dan vaksin booster Covid-19.<br>7. National Health Account dan Health Technology Assessment<br>Untuk penguatan jaminan kesehatan, BKPK National Health Account yang menghasilkan potret belanja kesehatan Indonesia, belanja farmasi dan belanja berdasarkan penyakit. BKPK juga sudah melakukan review Health Technology Assessment untuk mendapatkan inovasi teknologi di program JKN.<br>8. Arsitektur Kesehatan Global<br>BKPK berperan penting dalam membangun Arsitektur Kesehatan Global saat Presidensi G20 ,dan Keketuaan ASEAN Tahun 2023<br>9. Peran dalam Organisasi Internasional<br>Wakil dari Kementerian Kesehatan menduduki posisi board maupun co-chair dalam organisasi internasional seperti pandemic fund, CEPI, Global fund, dan GAVI.<br>10. Kolaborasi Global<br>BKPK memanfaatkan jejaring kolaborasi global untuk melakukan leap frog di bidang bioteknologi, genomik dan layanan kedokteran presisi dan juga peningkatan sistem informasi kesehatan.<br>11. Sistem Informasi Monitoring Implementasi Kebijakan (SIMPLEK)<br>Untuk kinerja internal yang lebih baik, BKPK mengembangkan aplikasi SIMPLEK atau Sistem Informasi Monitoring Implementasi Kebijakan<br>12. Layanan Data untuk Publik<br>BKPK juga melayani permintaan data survei secara online untuk memberikan kemudahan kepada publik. ",
    media: [
      { type: "image", src: "budi.png" },
      { type: "image", src: "budi.png" },
      { type: "video", src: "IndonesiaRaya.mp4" },
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title:
      "Survei Status Gizi Indonesia (SSGI) & Survei Kesehatan Indonesia (SKI) ",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description:
      "BKPK telah menjalankan Survei Status Gizi Indonesia (SSGI) setiap tahun sejak 2019. Survei Status Gizi Indonesia sejak 2019, melibatkan konsorsium lembaga survei untuk manajemen lapangan pada tahun 2024. Keterlibatan para akademisi sebagai tim pakar dan validator eksternal SSGI. Bersama BPS serta BRIN dalam tim SSGI mengawal metodologi dan analisis data. BKPK juga melaksanakan Survei Kesehatan Indonesia (SKI) pada 2023. Pada Juli 2024, telah dilakukan diseminasi terhadap hasil survei tersebut.",
    media: [
      { type: "image", src: "dokter.png" },
      { type: "image", src: "dokter.png" },
      { type: "video", src: "IndonesiaRaya.mp4" },
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "SiBijaKs Awards 2024",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description:
      "BKPK menyelenggarakan Rekomendasi Kebijakan Kesehatan (SiBijaKs) Awards 2024, yaitu kompetisi penulisan rekomendasi kebijakan kesehatan dengan data Survei Kesehatan Indonesia (SKI) tahun 2023 sebagai sumber data utama.",
    media: [
      { type: "image", src: "dokter.png" },
      { type: "image", src: "dokter.png" },
      { type: "video", src: "IndonesiaRaya.mp4" },
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Kerja Sama Internasional",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description:
      "BKPK menjalin Kerjasama Internasiona antara lain dengan untuk layanan Kesehatan Ibu dan Anak di 6 Rumah Sakit Vertikal, United Arab Emirates untuk Pembangunan Rumah Sakit Kardiologi di Solo, Sun Medical Centre Korea Selatan, Joint Operation Kemenkes dan Institute for Health Metrics and Evaluation (IHME). ",
    media: [
      { type: "image", src: "dokter.png" },
      { type: "image", src: "dokter.png" },
      { type: "video", src: "IndonesiaRaya.mp4" },
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Vaksin Merah Putih",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description:
      "BKPK berkolaborasi dengan Universitas Airlangga melaksanakan uji klinis  vaksin Merah Putih dan vaksin booster Covid-19.",
    media: [
      { type: "image", src: "dokter.png" },
      { type: "image", src: "dokter.png" },
      { type: "video", src: "IndonesiaRaya.mp4" },
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "National Health Account dan Health Technology Assessment",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description:
      "Untuk penguatan jaminan kesehatan, BKPK National Health Account yang menghasilkan potret belanja kesehatan Indonesia, belanja farmasi dan belanja berdasarkan penyakit. BKPK juga sudah melakukan review Health Technology Assessment untuk mendapatkan inovasi teknologi di program JKN. ",
    media: [
      { type: "image", src: "dokter.png" },
      { type: "image", src: "dokter.png" },
      { type: "video", src: "IndonesiaRaya.mp4" },
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Arsitektur Kesehatan Global",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description:
      "BKPK berperan penting dalam membangun Arsitektur Kesehatan Global saat Presidensi G20 ,dan Keketuaan ASEAN Tahun 2023.",
    media: [
      { type: "image", src: "dokter.png" },
      { type: "image", src: "dokter.png" },
      { type: "video", src: "IndonesiaRaya.mp4" },
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Peran dalam Organisasi Internasional",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description:
      "Wakil dari Kementerian Kesehatan menduduki posisi board maupun co-chair dalam organisasi internasional seperti pandemic fund, CEPI, Global fund, dan GAVI.",
    media: [
      { type: "image", src: "dokter.png" },
      { type: "image", src: "dokter.png" },
      { type: "video", src: "IndonesiaRaya.mp4" },
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Kolaborasi Global",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description:
      "BKPK memanfaatkan jejaring kolaborasi global untuk melakukan leap frog di bidang bioteknologi, genomik dan layanan kedokteran presisi dan juga peningkatan sistem informasi kesehatan.",
    media: [
      { type: "image", src: "dokter.png" },
      { type: "image", src: "dokter.png" },
      { type: "video", src: "IndonesiaRaya.mp4" },
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Sistem Informasi Monitoring Implementasi Kebijakan (SIMPLEK)",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description:
      "Untuk kinerja internal yang lebih baik, BKPK mengembangkan aplikasi SIMPLEK atau Sistem Informasi Monitoring Implementasi Kebijakan.",
    media: [
      { type: "image", src: "dokter.png" },
      { type: "image", src: "dokter.png" },
      { type: "video", src: "IndonesiaRaya.mp4" },
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Layanan Data untuk Publik",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description:
      "BKPK juga melayani permintaan data survei secara online untuk memberikan kemudahan kepada publik.",
    media: [
      { type: "image", src: "dokter.png" },
      { type: "image", src: "dokter.png" },
      { type: "video", src: "IndonesiaRaya.mp4" },
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    media: [
      { type: "image", src: "dokter.png" },
      { type: "image", src: "dokter.png" },
      { type: "video", src: "IndonesiaRaya.mp4" },
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    media: [
      { type: "image", src: "dokter.png" },
      { type: "image", src: "dokter.png" },
      { type: "video", src: "IndonesiaRaya.mp4" },
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    media: [
      { type: "image", src: "dokter.png" },
      { type: "image", src: "dokter.png" },
      { type: "video", src: "IndonesiaRaya.mp4" },
    ],
  },
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

  return (
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

      {isPopupVisible && selectedIndex !== null && (
        <div
          className={`${styles.popup} ${
            isPopupVisible ? styles.popupVisible : ""
          }`}>
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo">
                <button
                  className={styles.closeButton}
                  onClick={handleClosePopup}>
                  &times;
                </button>

                <div className={styles.mediaContainer}>
                  {data[selectedIndex].media &&
                    data[selectedIndex].media.length > 1 && (
                      <div className={styles.carouselControls}>
                        <button onClick={handlePrevMedia}>&lt;</button>
                        <button onClick={handleNextMedia}>&gt;</button>
                      </div>
                    )}

                  {data[selectedIndex].media[currentMediaIndex].type ===
                  "image" ? (
                    <img
                      src={data[selectedIndex].media[currentMediaIndex].src}
                      alt={`${data[selectedIndex].title} media ${
                        currentMediaIndex + 1
                      }`}
                      className={styles.popupImage}
                    />
                  ) : (
                    <video
                      src={data[selectedIndex].media[currentMediaIndex].src}
                      controls
                      className={styles.popupVideo}
                    />
                  )}
                </div>

                <div className={styles.popupDescription}>
                  <h3 className={styles.popupTitle}>
                    {data[selectedIndex].title}
                  </h3>
                  <div
                    className={styles.popupDescriptionContent}
                    dangerouslySetInnerHTML={{
                      __html: data[selectedIndex].description,
                    }}></div>
                  {/* <p>{data[selectedIndex].description}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
