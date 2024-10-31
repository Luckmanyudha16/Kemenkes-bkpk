"use client";

import { useEffect, useState } from "react";
import styles from "./Timeline.module.css";

const data = [
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Pembentukan Badan Kebijakan Pembangunan Kesehatan (BKPK)",
    // icon: <FaStethoscope size={50} color="#4CAF50" />,
    description:
      "Pada 2021, pemerintah mengeluarkan Peraturan Presiden (Perpres) Nomor 18 Tahun 2021 tentang Kementerian Kesehatan. Sebagaimana ketentuan dalam Perpres tersebut, salah satu fungsi yang diselenggarakan Kementerian Kesehatan adalah perumusan, penetapan, dan pelaksanaan kebijakan di bidang kesehatan masyarakat, pencegahan dan pengendalian penyakit, pelayanan kesehatan, kefarmasian, alat kesehatan, dan tenaga Kesehatan. Dengan demikian, tidak lagi terdapat fungsi penelitian dan pengembangan yang selama ini melekat di Kementerian Kesehatan melalui unit organisasi Badan Penelitian dan Pengembangan Kesehatan (Badan Litbangkes). Adanya perubahan itu membuat Badan Litbangkes bertransformasi menjadi Badan Kebijakan Pembangunan Kesehatan (BKPK) yang mengemban fungsi perumusan, penetapan, dan pelaksanaan kebijakan di bidang kesehatan masyarakat.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    image: "dokter.png", // Ganti dengan URL gambar yang sesuai
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "SKI dan SSGI (2)",
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
      {/* <button className="btn btn-wide">Wide</button> */}
      <button className={styles.styledButton}>Transformasi Kesehatan</button>
      {/* <div className={styles.title}>Transformasi Kesehatan</div> */}
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
            <div className={styles.imageAndDescription}>
              <img
                src={data[selectedIndex].image}
                alt={data[selectedIndex].title}
                className={styles.popupImage}
              />
              <div className={styles.popupDescription}>
                <h3 className={styles.popupTitle}>
                  {data[selectedIndex].title}
                </h3>
                <p>{data[selectedIndex].description}</p>
              </div>
            </div>
          </div>
        </div>
        // )}
      )}
    </div>
  );
}
