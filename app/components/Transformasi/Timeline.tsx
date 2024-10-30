"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Timeline.module.css";
import Link from "next/link";

const data = [
  {
    year: "Sejarah",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Sejarah",
    image: "/BKPK LOGO.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    year: "Tugas dan Fungsi",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Tugas dan Fungsi",
    image: "/BKPK LOGO.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    year: "Struktur Organisasi",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Struktur Organisasi",
    image: "/BKPK LOGO.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    year: "Unit Kerja",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Unit Kerja",
    image: "/BKPK LOGO.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export default function Timeline() {
  const defaultYear = "Sejarah";
  const defaultIndex = data.findIndex((entry) => entry.year === defaultYear) || 0;
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const [fadeIn, setFadeIn] = useState(false);
  const { year, image, title, judul, description } = data[selectedIndex];

  useEffect(() => {
    setFadeIn(false);
    const timeout = setTimeout(() => setFadeIn(true), 550);
    return () => clearTimeout(timeout);
  }, [selectedIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.Judul}>{judul || "Sejarah"}</div>
      <div className={`${styles.content} ${fadeIn ? styles.fadeinActive : styles.fadein}`}>
        <Image
          src={image}
          alt="Deskripsi gambar"
          width={300}
          height={300}
          className={styles.image}
        />
        <div className={`${styles.textContainer} ${fadeIn ? styles.fadeinActive : styles.fadein}`}>
          <div className={styles.title}>{title}</div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>

      <div className={styles.timeline}>
        {data.map((entry, index) => (
          <div
            key={index}
            className={`${styles.timelinePoint} ${selectedIndex === index ? styles.active : ""}`}
            onClick={() => setSelectedIndex(index)}
          >
            <span>{entry.year}</span>
          </div>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <Link href="/Pencapaian">
          <button className={styles.navigationButton}>Pencapaian</button>
        </Link>
      </div>
    </div>
  );
}
