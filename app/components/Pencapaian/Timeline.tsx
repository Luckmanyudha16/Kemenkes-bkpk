"use client";

import { useEffect, useState } from "react";
import styles from "./Timeline.module.css";
// import { FaStethoscope, FaMicroscope, FaClipboardList } from "react-icons/fa";

const data = [
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "21  (1)",
    // icon: <FaStethoscope size={50} color="#4CAF50" />,
    description: "Berkaitan dengan Jejaring Kanker, Jantung, Stroke, Uronefrologi, dan Kesehatan Ibu dan Anak (KJSU dan KIA), Jejaring Layanan Rujukan mengalami peningkatan. Berkaitan dengan Pengembangan Layanan Rujukan, Kemenkes bekerja sama dengan Mitra Pembangunan dalam pengembangan layanan Unggulan KJSU-KIA di RS Kemenkes, yaitu RS Kanker Dharmais (Jakarta), RS Persahabatan (Jakarta), RS Wahidin Sudirohusodo (Makassar), RS Sardjito (Yogyakarta), RS Ngoerah (Denpasar), dan RS Hasan Sadikin (Bandung). ",
    media: [
      { type: "image", src: "dokter.png" },
      { type: "image", src: "dokter.png" },
      { type: "video", src: "IndonesiaRaya.mp4" }
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "SKI dan SSGI (2)",
    // icon: <FaMicroscope size={50} color="#FF9800" />,
    description: "Deskripsi tentang dokumen",
    images: ["dokter.png", "dokter2.png"], // Multiple images
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    images: ["dokter.png", "dokter2.png"], // Multiple images
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    images: ["dokter.png", "dokter2.png"], // Multiple images
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    images: ["dokter.png", "dokter2.png"], // Multiple images
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    images: ["dokter.png", "dokter2.png"], // Multiple images
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    images: ["dokter.png", "dokter2.png"], // Multiple images
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    images: ["dokter.png", "dokter2.png"], // Multiple images
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    images: ["dokter.png", "dokter2.png"], // Multiple images
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    images: ["dokter.png", "dokter2.png"], // Multiple images
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    images: ["dokter.png", "dokter2.png"], // Multiple images
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    images: ["dokter.png", "dokter2.png"], // Multiple images
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    images: ["dokter.png", "dokter2.png"], // Multiple images
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    images: ["IndonesiaRaya.mp4"], // Multiple images
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    images: ["dokter.png", "dokter2.png"], // Multiple images
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
  <div className={styles.popup}>
    <div className={styles.popupContent}>
      <span className={styles.close} onClick={handleClosePopup}>×</span>
      
      {/* Media Section */}
      <div className={styles.mediaContainer}>
        {data[selectedIndex].media && data[selectedIndex].media.length > 1 && (
          <div className={`${styles.carouselControls} ${styles.center}`}>
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
      
      {/* Text Content Section */}
      <div className={styles.popupDescription}>
        <h3 className={styles.popupTitle}>{data[selectedIndex].title}</h3>
        <p>{data[selectedIndex].description}</p>
      </div>
    </div>
  </div>
)}
  
    </div>
  );
}