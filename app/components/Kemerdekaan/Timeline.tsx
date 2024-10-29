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
    image: "/taran.png",
    description:
      "Pada masa-masa awal kemerdekaan, bangsa Indonesia mengalami berbagai masalah kesehatan yang terjadi akibat kebijakan pada masa pendudukan Jepang. Dengan latar belakang itu, kementerian kesehatan menjadi salah satu dari 12 kementerian yang dibentuk pada pemerintahan pertama Indonesia yang dipimpin SukarnoMohammad Hatta. Melalui kementerian kesehatan yang dipimpin Boentaran Martoatmodjo, pemerintah ingin meningkatkan kualitas kesehatan masyarakat, terutama anak anak. ",
  },
  {
    year: 1945,
    judul: "KEMERDEKAAN",
    title: "Kerja Sama Internasional ",
    image: "/BKPK LOGO.png",
    description:
      "Pada masa-masa awal kemerdekaan, pemerintah Indonesia berupaya meningkatkan jumlah tenaga kesehatan. Upaya tersebut dilakukan dengan antara lain bekerja sama dengan WHO dan UNICEF. WHO dan UNICEF merespons dengan mengirimkan tenaga-tenaga kesehatan internasional untuk memberikan pendidikan kesehatan di universitas-universitas Indonesia. Kerja sama ini berkembang dan mendorong pendirian fakultas-fakultas kedokteran di Sumatra, Jawa, Bali, dan Sulawesi. Seiring meningkatnya sumber daya manusia dalam bidang kesehatan, pemerintah Indonesia tidak hanya memberikan perhatian pada pengobatan, tetapi juga pada pencegahan, termasuk memberikan jaminan kesehatan nasional. ",
  },
  {
    year: 1946,
    judul: "KEMERDEKAAN",
    title: "Empat Sehat Lima Sempurna dan NV Saridele",
    image: "/image.png",
    description:
      "Pada 1952, Profesor Poerwo Soedarmo meluncurkan program “Empat Sehat Lima Sempurna”untuk mendorong masyarakat mengonsumsi makanan sehat dan bernutrisi. Melalui program tersebut, Profesor Poerwo Soedarmo dikenal sebagai Bapak Gizi Indonesia.  OBJEK: VISUAL PROFESSOR PORWO SOEDARMO Dua tahun setelah “Empat Sehat, Lima Sempurna” diperkenalkan, pemerintah bekerja sama dengan WHO mendirikan pabrik susu NV Saridele untuk mencukup kebutuhan gizi anak Indonesia. Pada 1965, NV Saridele yang sudah berganti nama menjadi Perusahaan Negara Sari Husada mendapatkan tugas dari Menteri Kesehatan Profesor Doktor Satrio untuk untuk membuat susu bayi yang terbuat dari bubuk skim, gula, lemak nabati, dan dilengkapi vitamin serta mineral. Formulasi ini dikenal luas dengan nama Susu, Gula, Minyak atau SGM.  ",
  },
  {
    year: 1950,
    judul: "KEMERDEKAAN",
    title: "Pengentasan Frambusia ",
    image: "/frambusia.png",
    description:
      "Selain membentuk NV Saridele, pemerintah juga merintis upaya pencegahan dan penanganan kesehatan pada masa-masa awal kemerdekaan. Salah satu keberhasilan pada masa ini adalah penanganan frambusia, yang dimotori oleh Dokter Kodiyat, yang diangkat menjadi Kepala Lembaga Penyelidikan dan Pemberantasan Penyakit Rakyat atau LP3R pada 1950.",
  },
  {
    year: 1960,
    judul: "KEMERDEKAAN",
    title: "UU Pokok Kesehatan 1960 ",
    image: "/BKPK LOGO.png",
    description:
      "Undang-Undang Pokok Kesehatan 1960 adalah payung hukum dunia kesehatan di Indonesia. Melalui UU Pokok Kesehatan 1960, pemerintah menegaskan komitmennya, untuk mengakomodasi kebutuhan kesejahteraan masyarakat dalam aspek luas dan sepenuhnya lepas dari Het Reglement of de Dienst der Volksgezondheid (Staatsblad 1882 No. 97).",
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
