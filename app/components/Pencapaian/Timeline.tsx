"use client";

import { useEffect, useState } from "react";
import styles from "./Timeline.module.css";
// import { FaStethoscope, FaMicroscope, FaClipboardList } from "react-icons/fa";

const data = [
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "21 Implementasi Riset (1)",
    // icon: <FaStethoscope size={50} color="#4CAF50" />,
    description: "Deskripsi tentang 21 Implementasi Riset.",
    images: ["dokter.png", "dokter2.png"], // Multiple images
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
  // Tambahkan data lainnya
];

export default function Timeline() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Carousel image index

  useEffect(() => {
    if (selectedIndex !== null) {
      setPopupVisible(true);
      setCurrentImageIndex(0); // Reset carousel index when a new entry is selected
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

  const handleNextImage = () => {
    const totalImages = data[selectedIndex]?.images.length;
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handlePrevImage = () => {
    const totalImages = data[selectedIndex]?.images.length;
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div className={styles.timelineContainer}>
      <button className={`${styles.styledButton} ${styles.circularCard}`}>Transformasi Kesehatan</button>
      <div className={styles.timeline}>
        {data.map((entry, index) => {
          const angle = (index / data.length) * 2 * Math.PI;
          const x = Math.round((radius * Math.cos(angle) + 50) * 100) / 100;
          const y = Math.round((radius * Math.sin(angle) + 50) * 100) / 100;

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
      <div className={styles.imageAndDescription}>
        {data[selectedIndex].images && data[selectedIndex].images.length > 1 && ( 
        <div className={`${styles.carouselControls} ${styles.center}`}>
          <button onClick={handlePrevImage}>&lt;</button>
          <button onClick={handleNextImage}>&gt;</button>
        </div>)}
  
        <img
          src={
            data[selectedIndex].images
              ? data[selectedIndex].images[currentImageIndex]
              : data[selectedIndex].image
          }
          alt={`${data[selectedIndex].title} image ${currentImageIndex + 1}`}
          className={styles.popupImage}
        />
        <div className={styles.popupDescription}>
          <h3 className={styles.popupTitle}>{data[selectedIndex].title}</h3>
          <p>{data[selectedIndex].description}</p>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
}