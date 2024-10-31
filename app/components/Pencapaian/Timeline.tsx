"use client";

import { useEffect, useState } from "react";
import styles from "./Timeline.module.css";
// import { FaStethoscope, FaMicroscope, FaClipboardList } from "react-icons/fa";

const data = [
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaStethoscope size={50} color="#4CAF50" />,
    description: "Deskripsi tentang 21 Implementasi Riset.",
    image: "https://example.com/image1.jpg", // Ganti dengan URL gambar yang sesuai
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaMicroscope size={50} color="#FF9800" />,
    description: "Deskripsi tentang dokumen",
    image: "dokter.png", // Ganti dengan URL gambar yang sesuai
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    image: "/45.png", // Ganti dengan URL gambar yang sesuai
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    image: "/45.png", // Ganti dengan URL gambar yang sesuai
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    image: "/45.png", // Ganti dengan URL gambar yang sesuai
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    image: "/45.png", // Ganti dengan URL gambar yang sesuai
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    image: "/45.png", // Ganti dengan URL gambar yang sesuai
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    image: "/45.png", // Ganti dengan URL gambar yang sesuai
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    image: "/45.png", // Ganti dengan URL gambar yang sesuai
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    image: "/45.png", // Ganti dengan URL gambar yang sesuai
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    image: "/45.png", // Ganti dengan URL gambar yang sesuai
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Gambar dan Judul",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Deskripsi tentang Dokumen SKI dan SSGI.",
    image: "/45.png", // Ganti dengan URL gambar yang sesuai
  },
  // Tambahkan data lainnya
];

export default function Timeline() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    if (selectedIndex !== null) {
      setPopupVisible(true);
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

  return (
    <div className={styles.timelineContainer}>
    <button className={styles.styledButton}>
  Badan Kebijakan <br /> Pembangunan Kesehatan  (BKPK)
</button>


      {/* <div className={styles.title}>
        Badan Kebijakan Pembangunan Kesehatan (BKPK)
      </div> */}
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
              {/* <div className={styles.iconContainer}>{entry.}</div> */}
              <h3 className={styles.cardTitle}>{entry.title}</h3>
              {/* <p className={styles.cardSubtitle}>{entry.}</p> */}
            </div>
          );
        })}
      </div>

      {isPopupVisible && selectedIndex !== null && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.close} onClick={handleClosePopup}>
              ×
            </span>
            <h3>{data[selectedIndex].description}</h3>
            <img
              src={data[selectedIndex].image}
              alt={data[selectedIndex].title}
              className={styles.popupImage}
            />
            {/* <p>{data[selectedIndex].description}</p> */}
          </div>
        </div>
      )}
    </div>
  );
}
