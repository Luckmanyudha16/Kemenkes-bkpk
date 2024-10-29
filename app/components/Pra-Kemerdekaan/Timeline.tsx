"use client"; // Pastikan ini ada di baris pertama

import { useEffect,useState } from "react";
import Image from "next/image";
import styles from "./Timeline.module.css";
import Link from "next/link";

const data : Record<number, { image: string; title:string; judul:string; description: string }> ={
  1799: {
    judul:"MASA KOLONIAL BELANDA",
    title :"",
    image: "/rempah.png",
    description:
      "Kolonialisme Belanda yang berlangsung pada 1799-1942 berawal dari upaya mencari rempah-rempah di Nusantara. Pada masa itu, rempah-rempah digunakan untuk penyedap makanan dan obat. Kolonialisme Belanda membuat masyarakat Nusantara mengenal dunia kesehatan Eropa, yang berdampak besar dalam perjalanan Indonesia pada masa setelahnya. Pengetahuan kesehatan pada masa kolonialisme Belanda yang berdampak pada dunia kesehatan Indonesia saat ini antara lain pelaksanaan program vaksinasi, pembentukan STOVIA, dan karantina.",
  },
  1804: {
    judul:"MASA KOLONIAL BELANDA",
    title :"Vaksinasi",
    image: "/belanda.png",
    description:
      "Pada 1804, Batavia mengalami wabah cacar. Untuk menangani masalah tersebut, pemerintah kolonial mendatangkan dokter-dokter Belanda untuk memberikan vaksinasi cacar. Vaksinasi cacar diperluas ke wilayah lain di Pulau Jawa pada masa Letnan Gubernur Thomas Stamford Raffles (1811-1816). ",
  },
  1847: {
    judul:"MASA KOLONIAL BELANDA",
    title :"Karantina",
    image: "/karantina.png",
    description:
      "Pada 1847, pemerintah kolonial Belanda memberlakukan karantina untuk membatasi penularan wabah cacar. Kemudian pada 1911, pemerintah kolonial menerapkan kebijakan karantina untuk jemaah Haji. Pusat karantina Haji dibangun di Pulau Rubiah, Sabang, dan Pulau Onrust, Kepulauan Seribu.",
  },
  1851: {
    judul:"MASA KOLONIAL BELANDA",
    title :"Masa Pendudukan Jepang ",
    image: "/Koran.jpg",
    description:
      "Secara umum, pemerintah pendudukan Jepang hanya melakukan eksplotasi terhadap sumber daya manusia dan sumber daya alam Indonesia sehingga pada masa ini, kesehatan masyarakat mengalami kemunduran. Sebagai gambaran, sebagian masyarakat pada masa ini memanfaatkan bonggol pisang sebagai makanan, menggunakan karung goni sebagai sandang, dan menggunakan pelepah pisang sebagai pengganti pembalut luka. Selain itu, tenaga-tenaga medis dan dokter Indonesia dipaksa ikut dalam pasukan tempur Jepang. ",
  },
  1882: {
    judul:"MASA KOLONIAL BELANDA",
    title :"Lorem ipsum is placeholder text",
    image: "/BKPK LOGO.png",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  1942: {
    judul:"Masa Pendudukan Jepang",
    title :"Lorem ipsum is placeholder text",
    image: "/BKPK LOGO.png",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
};


export default function Timeline() {
  const [selectedYear, setSelectedYear] = useState(1799); // Tahun awal default

  const [fadeIn, setFadeIn] = useState(false); // State to control fade-in effect

  const { image, title, judul, description } = data[selectedYear];

  useEffect(() => {
    // Trigger fade-in effect when selectedYear changes
    setFadeIn(false); // Reset fade effect
    const timeout = setTimeout(() => {
      setFadeIn(true); // Trigger fade effect after a short delay
    }, 550); // Short delay to allow reset

    return () => clearTimeout(timeout); // Clean up timeout
  }, [selectedYear]);

  return (
    <div className={styles.container} >
    {/* <div className={`${styles.container} ${fadeIn ? styles.fadeinActive : styles.fadein}`}> */}
      <div className={styles.Judul}>{judul}
      </div>
      <div className={`${styles.content} ${fadeIn ? styles.fadeinActive : styles.fadein}`}>
        <Image
          src={image}
          alt="Deskripsi gambar"
          width={300}
          height={300}
          className={styles.image}
        />
        <div>
          <h1></h1>
        </div>

        <div className={`${styles.textContainer} ${fadeIn ? styles.fadeinActive : styles.fadein}`}>
          <div className={styles.title}>{title}</div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>

      <div className={styles.timeline}>
        {Object.keys(data).map((year) => (
          <div
            key={year}
            className={`${styles.timelinePoint} ${selectedYear == Number(year) ? styles.active : ""}`}
            onClick={() => setSelectedYear(Number(year))}
          >
            <span>{year}</span>
          </div>
        ))}
      </div>
       {/* Button to navigate to another page */}
      <div className={styles.buttonContainer}>
        <Link href="/Kemerdekaan">
          <button className={styles.navigationButton}>Kemerdekaan</button>
        </Link>
      </div>
    </div>
  );
}
