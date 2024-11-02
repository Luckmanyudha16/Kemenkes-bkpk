"use client";

import { useEffect, useState } from "react";
import styles from "./Timeline.module.css";

const data = [
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Transformasi Layanan Primer",
    // icon: <FaStethoscope size={50} color="#4CAF50" />,
    description: "Berkaitan dengan stunting, seluruh Indikator capaian Intervensi spesifik masih On-Track.",
    media: [
      { type: "image", src: "Layanan Primer_1.jpg" },
      { type: "image", src: "Layanan Primer_2.jpg" },
      { type: "image", src: "Layanan Primer_3.jpg" },
      { type: "image", src: "Layanan Primer_4.jpg" },
      { type: "image", src: "Layanan Primer_5.jpg" },
      { type: "image", src: "Layanan Primer_6.jpg" },
      { type: "image", src: "Layanan Primer_7.jpg" },
      { type: "image", src: "Layanan Primer_8.jpg" },
      // { type: "video", src: "IndonesiaRaya.mp4" }
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Transformasi Layanan Rujukan",
    // icon: <FaMicroscope size={50} color="#FF9800" />,
    description: "Berkaitan dengan Jejaring Kanker, Jantung, Stroke, Uronefrologi, dan Kesehatan Ibu dan Anak (KJSU dan KIA), Jejaring Layanan Rujukan mengalami peningkatan. Berkaitan dengan Pengembangan Layanan Rujukan, Kemenkes bekerja sama dengan Mitra Pembangunan dalam pengembangan layanan Unggulan KJSU-KIA di RS Kemenkes, yaitu RS Kanker Dharmais (Jakarta), RS Persahabatan (Jakarta), RS Wahidin Sudirohusodo (Makassar), RS Sardjito (Yogyakarta), RS Ngoerah (Denpasar), dan RS Hasan Sadikin (Bandung).",
    media: [
      { type: "image", src: "dokter.png" },
      { type: "image", src: "dokter.png" },
      { type: "video", src: "IndonesiaRaya.mp4" }
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Transformasi Sistem Ketahanan Kesehatan",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Berkaitan dengan Kemandirian Obat, Vaksin, dan Alkes, per Triwulan II Tahun 2024 telah diproduksi delapan dari sepuluh bahan baku obat, 10 dari 14 antigen vaksin program, 1 dari 2 platform vaksin baru, 6 dari 10 produk biologi, dan 8 dari 10 alkes terbesar by value. Berkaitan dengan sumber daya manusia, data per 30 Agustus 2024 menunjukkan bahwa ada 17.289 tenaga cadangan kesehatan tersebar di seluruh Indonesia.",
    media: [
      { type: "image", src: "dokter.png" },
      { type: "image", src: "dokter.png" },
      { type: "video", src: "IndonesiaRaya.mp4" }
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Transformasi Sistem Pembiayaan Kesehatan",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Perbaikan Standar Tarif terus dilakukan dalam meningkatkan kualitas penyelenggaraan Program Jaminan Kesehatan. Saat ini, sedang dilakukan perbaikan standar tarif yang ditargetkan launching pada Januari 2025. Kemudian, dilakukan juga perbaikan proses costing pelayanan RS melalui aplikasi SIPK dan pengembangan INA- Grouper yang disesuaikan dengan kondisi penyakit masyarakat Indonesia. Berkaitan dengan Health Technology Assessment (HTA), pada 2024 ditetapkan 27 topik prioritas HTA baru, dengan variasi topik menyesuaikan prioritas kebijakan Kemenkes terhadap pencegahan dan pengelolaan penyakit. ",
    media: [
      { type: "image", src: "dokter.png" },
      { type: "image", src: "dokter.png" },
      { type: "video", src: "IndonesiaRaya.mp4" }
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Transformasi SDM Kesehatan",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Dalam hal upaya pemenuhan SDM Kesehatan hingga Juni 2024, telah ditempatkan 3.457 tenaga kesehatan di Puskesmas DTPK/DBK dan 2.670 dokter spesialis di RSUD dan Rumah Sakit Pemerintah. Kemenkes juga menyediakan Program Beasiswa bagi Tenaga Medis dan Tenaga Kesehatan dengan ikatan pengabdian, serta menginisiasi Hospital Based atau Program Pendidikan Dokter Spesialis berbasis Rumah Sakit Pendidikan Penyelenggara Utama (RSP-PU) yang diresmikan oleh Presiden Joko Widodo pada 6 Mei 2024.",
    media: [
      { type: "image", src: "dokter.png" },
      { type: "image", src: "dokter.png" },
      { type: "video", src: "IndonesiaRaya.mp4" }
    ],
  },
  
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
    setCurrentMediaIndex((prevIndex) => (prevIndex - 1 + totalMedia) % totalMedia);
  };

  return (
    <div className={styles.timelineContainer}>
      <button className={`${styles.styledButton} ${styles.circularCard}`}>Transformasi Kesehatan</button>
      <div className={styles.timeline}>
        {data.map((entry, index) => {
          const angle = (index / data.length) * 2 * Math.PI;
          const x = Math.round((radius * Math.cos(angle) + 50) * 130) / 100;
          const y = Math.round((radius * Math.sin(angle) + 50) * 130) / 100;

          return (
            <div
              key={index}
              className={`${styles.card} ${selectedIndex === index ? styles.active : ""}`}
              style={{ left: `${x}px`, top: `${y}px` }}
              onClick={() => handleCardClick(index)}
            >
              <h3 className={styles.cardTitle}>{entry.title}</h3>
            </div>
          );
        })}
      </div>

      {isPopupVisible && selectedIndex !== null && (
  <div className={`${styles.popup} ${isPopupVisible ? styles.popupVisible : ''}`}>
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo">
          <span className={styles.close} onClick={handleClosePopup}>×</span>
          
          <div className={styles.mediaContainer}>
            {data[selectedIndex].media && data[selectedIndex].media.length > 1 && (
              <div className={styles.carouselControls}>
                <button onClick={handlePrevMedia}>&lt;</button>
                <button onClick={handleNextMedia}>&gt;</button>
              </div>
            )}
            
            {data[selectedIndex].media[currentMediaIndex].type === "image" ? (
              <img
                src={data[selectedIndex].media[currentMediaIndex].src}
                alt={`${data[selectedIndex].title} media ${currentMediaIndex + 1}`}
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
            <h3 className={styles.popupTitle}>{data[selectedIndex].title}</h3>
            <p>{data[selectedIndex].description}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
}