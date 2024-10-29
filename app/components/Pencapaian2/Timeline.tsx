"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Timeline.module.css";
import Link from "next/link";

const data = [
  {
    year: "Pencapaian",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Kerjasama Sun Medical Korea",
    image: "/obat.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    year: "Pencapaian",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Sero Survei",
    image: "/obat.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    year: "Pencapaian",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Vaksin Merah Putih",
    image: "/obat.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    year: "Pencapaian",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "G20",
    image: "/obat.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    year: "Pencapaian",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Simplek",
    image: "/obat.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    year: "Pencapaian",
    judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Sun Medical Korea",
    image: "/obat.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export default function Timeline() {
  const defaultYear = "Pencapaian";
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

       {/* Button to navigate to another page */}
       <div className={styles.buttonContainerLeft}>
        <Link href="/Pencapaian">
          <button className={styles.navigationButtonLeft}>Sebelumnya</button>
        </Link>
      </div>

      <div className={styles.buttonContainerRight}>
        <Link href="/IndonesiaEmas">
          <button className={styles.navigationButtonRight}>MENUJU INDONESIA EMAS 2045</button>
        </Link>
      </div>
    </div>
  );
}
