"use client"; // Pastikan ini ada di baris pertama

import { useEffect,useState } from "react";
import Image from "next/image";
import styles from "./Timeline.module.css";
import Link from "next/link";

const data : Record<number, { image: string; title:string; judul:string; description: string }> ={
  1966: {
    judul:"KEMERDEKAAN",
    title :"Orde baru",
    image: "/obat.jpg",
    description:
      "Pada tahun 1799, Belanda secara resmi mengambil alih kekuasaan perdagangan rempah dari VOC (Vereenigde Oostindische Compagnie), yang kolaps karena korupsi dan utang. Orde baru seperti cengkeh, lada, pala, dan kayu manis menjadi komoditas berharga di Eropa karena digunakan sebagai penyedap makanan, pengawet, dan obat. Permintaan tinggi menyebabkan persaingan sengit antara kekuatan kolonial seperti Portugis, Spanyol, Inggris, dan Belanda. Pulau Banda dan Maluku menjadi pusat penting dalam perdagangan rempah, terutama cengkeh dan pala.",
  },
  1968: {
    judul:"KEMERDEKAAN",
    title :"Orde baru",
    image: "/obat.jpg",
    description:
      "Pada awal abad ke-19, sekitar tahun 1804, kolonialisme Eropa mulai memperkenalkan ilmu pengetahuan modern, termasuk di bidang kesehatan. Pada masa ini, penggunaan rempah sebagai obat alami mulai dicampur dengan pendekatan medis modern dari Eropa, menggabungkan manfaat tradisional dan ilmu baru.",
  },
  1970: {
    judul:"KEMERDEKAAN",
    title :"Orde baru",
    image: "/obat.jpg",
    description:
      "Pada tahun 1847, pengaruh kolonial Eropa semakin memperkuat ilmu kesehatan di Nusantara. Ilmu farmasi dan kedokteran mulai diajarkan di lembaga pendidikan lokal. Pengetahuan tentang Orde baru sebagai obat tradisional bertemu dengan pendekatan ilmiah baru. Penggabungan ini berperan penting dalam mendirikan STOVIA (School Tot Opleiding Van Indische Artsen) di tahun 1882, yang menjadi sekolah kedokteran pertama di Indonesia.",
  },
  1984: {
    judul:"KEMERDEKAAN",
    title :"Orde baru",
    image: "/obat.jpg",
    description:
      "Pada pertengahan abad ke-19, perdagangan Orde baru masih berlangsung, tetapi perlahan mengalami penurunan karena semakin tergantikan oleh komoditas baru seperti kopi, teh, dan karet. Sementara itu, pemerintah kolonial mulai lebih fokus pada eksploitasi hasil bumi lain, namun rempah tetap memainkan peran dalam ekonomi rumah tangga dan industri obat tradisional.",
  },
  1992: {
    judul:"KEMERDEKAAN",
    title :"Rempah",
    image: "/obat.jpg",
    description:
      "Pada tahun 1882, didirikan STOVIA (School Tot Opleiding Van Indische Artsen) di Batavia sebagai sekolah kedokteran pertama. Di sekolah ini, pengajaran tentang tanaman obat dan rempah menjadi bagian dari kurikulum. Hal ini memperlihatkan bagaimana Orde baru tetap relevan, tidak hanya dalam perdagangan tetapi juga dalam pendidikan dan kesehatan modern.",
  },
};


export default function Timeline() {
  const [selectedYear, setSelectedYear] = useState(1966); // Tahun awal default

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
       <div className={styles.buttonContainerLeft}>
        <Link href="/Kemerdekaan">
          <button className={styles.navigationButtonLeft}>Orde Lama</button>
        </Link>
      </div>
       {/* Button to navigate to another page */}
       <div className={styles.buttonContainerRight}>
        <Link href="/Reformasi">
          <button className={styles.navigationButtonRight}>Reformasi</button>
        </Link>
      </div>
    </div>
  );
}
