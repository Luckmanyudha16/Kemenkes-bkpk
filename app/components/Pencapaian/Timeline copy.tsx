"use client";

import { useEffect, useState } from "react";
import styles from "./Timeline.module.css";
import { FaStethoscope, FaMicroscope, FaClipboardList } from "react-icons/fa";

const data = [
  {
    year: "Pencapaian",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "21 Implementasi Riset",
    icon: <FaStethoscope size={50} color="#4CAF50" />,
  },
  {
    year: "Pencapaian",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "SKI dan SSGI",
    icon: <FaMicroscope size={50} color="#FF9800" />,
  },
  {
    year: "Pencapaian",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Dokumen SKI dan SSGI",
    icon: <FaClipboardList size={50} color="#2196F3" />,
  },
  {
    year: "Pencapaian",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Dokumen SKI dan SSGI",
    icon: <FaClipboardList size={50} color="#2196F3" />,
  },
  {
    year: "Pencapaian",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Dokumen SKI dan SSGI",
    icon: <FaClipboardList size={50} color="#2196F3" />,
  },
  {
    year: "Pencapaian",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Dokumen SKI dan SSGI",
    icon: <FaClipboardList size={50} color="#2196F3" />,
  },
  {
    year: "Pencapaian",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Dokumen SKI dan SSGI",
    icon: <FaClipboardList size={50} color="#2196F3" />,
  },
  {
    year: "Pencapaian",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Dokumen SKI dan SSGI",
    icon: <FaClipboardList size={50} color="#2196F3" />,
  },
  {
    year: "Pencapaian",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Dokumen SKI dan SSGI",
    icon: <FaClipboardList size={50} color="#2196F3" />,
  },
  {
    year: "Pencapaian",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Dokumen SKI dan SSGI",
    icon: <FaClipboardList size={50} color="#2196F3" />,
  },
  {
    year: "Pencapaian",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Dokumen SKI dan SSGI",
    icon: <FaClipboardList size={50} color="#2196F3" />,
  },
  {
    year: "Pencapaian",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Dokumen SKI dan SSGI",
    icon: <FaClipboardList size={50} color="#2196F3" />,
  },
  
];

export default function Timeline() {
  const defaultIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  useEffect(() => {
    setTimeout(() => setSelectedIndex(defaultIndex), 500);
  }, []);

  const radius = 300; // Radius lingkaran tempat kartu akan ditempatkan

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.title}>Pencapaian Kami</div>
      <div className={styles.timeline}>
        {data.map((entry, index) => {
          const angle = (index / data.length) * 2 * Math.PI; // Hitung sudut
          const x = radius * Math.cos(angle) + 50; // Posisi X kartu
          const y = radius * Math.sin(angle) + 50; // Posisi Y kartu

          return (
            <div
              key={index}
              className={`${styles.card} ${selectedIndex === index ? styles.active : ""}`}
              style={{ left: `${x}px`, top: `${y}px` }} // Posisi kartu
              onClick={() => setSelectedIndex(index)}
            >
              <div className={styles.iconContainer}>
                {entry.icon}
              </div>
              <h3 className={styles.cardTitle}>{entry.title}</h3>
              <p className={styles.cardSubtitle}>{entry.judul}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
