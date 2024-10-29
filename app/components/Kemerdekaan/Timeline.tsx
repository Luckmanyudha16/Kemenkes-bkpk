"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Timeline.module.css";
import Link from "next/link";

const data = [
  {
    year: 1945,
    judul: "KEMERDEKAAN",
    title: "Orde lama",
    image: "/obat.jpg",
    description:
      "Pada awal abad ke-19, sekitar tahun 1804, kolonialisme Eropa mulai memperkenalkan ilmu pengetahuan modern, termasuk di bidang kesehatan...",
  },
  {
    year: 1945,
    judul: "KEMERDEKAAN",
    title: "Orde lama",
    image: "/obat.jpg",
    description:
      "Pada tahun 1847, pengaruh kolonial Eropa semakin memperkuat ilmu kesehatan di Nusantara...",
  },
  {
    year: 1946,
    judul: "KEMERDEKAAN",
    title: "Orde lama",
    image: "/obat.jpg",
    description:
      "Pada pertengahan abad ke-19, perdagangan rempah-rempah masih berlangsung...",
  },
  {
    year: 1950,
    judul: "KEMERDEKAAN",
    title: "Orde lama",
    image: "/obat.jpg",
    description:
      "Pada tahun 1882, didirikan STOVIA di Batavia sebagai sekolah kedokteran pertama...",
  },
  {
    year: 1960,
    judul: "KEMERDEKAAN",
    title: "Orde lama",
    image: "/obat.jpg",
    description:
      "Pada tahun 1942, Indonesia memasuki masa pendudukan Jepang, mengakhiri era kolonial Belanda...",
  },
];

export default function Timeline() {
  const defaultYear = 1945;
  const [selectedIndex, setSelectedIndex] = useState(
    data.findIndex((entry) => entry.year === defaultYear)
  );

  const [fadeIn, setFadeIn] = useState(false);
  const { year, image, title, judul, description } = data[selectedIndex];

  useEffect(() => {
    setFadeIn(false);
    const timeout = setTimeout(() => setFadeIn(true), 550);
    return () => clearTimeout(timeout);
  }, [selectedIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.Judul}>{judul}</div>
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
        <Link href="/OrdeBaru">
          <button className={styles.navigationButton}>Orde Baru</button>
        </Link>
      </div>
    </div>
  );
}
