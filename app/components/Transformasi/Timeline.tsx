"use client";
import { motion, AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";
import styles from "./Timeline.module.css";

const data = [
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Transformasi Layanan Primer",
    background: "puskesmas.png",
    // icon: <FaStethoscope size={50} color="#4CAF50" />,
    description: "Berkaitan dengan stunting, seluruh Indikator capaian Intervensi spesifik masih On-Track.",
    media: [
      { type: "image", src: "Layanan Primer_1.jpg" },
      { type: "image", src: "Layanan Primer_2.jpg" },
      { type: "image", src: "Layanan Primer_3.jpg" },
      { type: "image", src: "Layanan Primer_4.jpg" },
      { type: "image", src: "Layanan Primer_5.jpg" },
      { type: "image", src: "Layanan Primer_6.jpg" },
      { type: "image", src: "Layanan Primer_7.jpg" },
      { type: "image", src: "Layanan Primer_8.jpg" },
      // { type: "video", src: "IndonesiaRaya.mp4" }
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Transformasi Layanan Rujukan",
    background: "RS.png",
    // icon: <FaMicroscope size={50} color="#FF9800" />,
    description: "Berkaitan dengan Jejaring Kanker, Jantung, Stroke, Uronefrologi, dan Kesehatan Ibu dan Anak (KJSU dan KIA), Jejaring Layanan Rujukan mengalami peningkatan. Berkaitan dengan Pengembangan Layanan Rujukan, Kemenkes bekerja sama dengan Mitra Pembangunan dalam pengembangan layanan Unggulan KJSU-KIA di RS Kemenkes, yaitu RS Kanker Dharmais (Jakarta), RS Persahabatan (Jakarta), RS Wahidin Sudirohusodo (Makassar), RS Sardjito (Yogyakarta), RS Ngoerah (Denpasar), dan RS Hasan Sadikin (Bandung).",
    media: [
      { type: "image", src: "Layanan Rujukan_1.jpg" },
      { type: "image", src: "Layanan Rujukan_2.jpg" },
      { type: "image", src: "Layanan Rujukan_3.jpg" },
      { type: "image", src: "Layanan Rujukan_4.jpg" },
      { type: "image", src: "Layanan Rujukan_5.jpg" },
      { type: "image", src: "Layanan Rujukan_6.jpg" },
      { type: "image", src: "Layanan Rujukan_7.jpg" },
      { type: "image", src: "Layanan Rujukan_8.jpg" },
      { type: "image", src: "Layanan Rujukan_9.jpg" },
      { type: "image", src: "Layanan Rujukan_10.jpg" },
      { type: "image", src: "Layanan Rujukan_11.jpg" },
      { type: "image", src: "Layanan Rujukan_12.jpg" },
      { type: "image", src: "Layanan Rujukan_13.jpg" },
      { type: "image", src: "Layanan Rujukan_14.jpg" },
      { type: "image", src: "Layanan Rujukan_15.jpg" },
      { type: "image", src: "Layanan Rujukan_16.jpg" },
      { type: "image", src: "Layanan Rujukan_17.jpg" },
      { type: "image", src: "Layanan Rujukan_18.jpg" },
      { type: "image", src: "Layanan Rujukan_19.jpg" },
      // { type: "video", src: "IndonesiaRaya.mp4" }
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Transformasi Sistem Ketahanan Kesehatan",
    background: "vaksin.png",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Berkaitan dengan Kemandirian Obat, Vaksin, dan Alkes, per Triwulan II Tahun 2024 telah diproduksi delapan dari sepuluh bahan baku obat, 10 dari 14 antigen vaksin program, 1 dari 2 platform vaksin baru, 6 dari 10 produk biologi, dan 8 dari 10 alkes terbesar by value. Berkaitan dengan sumber daya manusia, data per 30 Agustus 2024 menunjukkan bahwa ada 17.289 tenaga cadangan kesehatan tersebar di seluruh Indonesia.",
    media: [
      { type: "image", src: "3 Ketahanan Kesehatan Halaman 32-36_page-0001.jpg" },
      { type: "image", src: "3 Ketahanan Kesehatan Halaman 32-36_page-0002.jpg" },
      { type: "image", src: "3 Ketahanan Kesehatan Halaman 32-36_page-0003.jpg" },
      { type: "image", src: "3 Ketahanan Kesehatan Halaman 32-36_page-0004.jpg" },
      { type: "image", src: "3 Ketahanan Kesehatan Halaman 32-36_page-0005.jpg" },
      // { type: "video", src: "IndonesiaRaya.mp4" }
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Transformasi Sistem Pembiayaan Kesehatan",
    background: "JKN.png",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Perbaikan Standar Tarif terus dilakukan dalam meningkatkan kualitas penyelenggaraan Program Jaminan Kesehatan. Saat ini, sedang dilakukan perbaikan standar tarif yang ditargetkan launching pada Januari 2025. Kemudian, dilakukan juga perbaikan proses costing pelayanan RS melalui aplikasi SIPK dan pengembangan INA- Grouper yang disesuaikan dengan kondisi penyakit masyarakat Indonesia. Berkaitan dengan Health Technology Assessment (HTA), pada 2024 ditetapkan 27 topik prioritas HTA baru, dengan variasi topik menyesuaikan prioritas kebijakan Kemenkes terhadap pencegahan dan pengelolaan penyakit. ",
    media: [
      { type: "image", src: "4 Pembiayaan Kesehatan Halaman 37-40_page-0001.jpg" },
      { type: "image", src: "4 Pembiayaan Kesehatan Halaman 37-40_page-0002.jpg" },
      { type: "image", src: "4 Pembiayaan Kesehatan Halaman 37-40_page-0003.jpg" },
      { type: "image", src: "4 Pembiayaan Kesehatan Halaman 37-40_page-0004.jpg" },
      // { type: "video", src: "IndonesiaRaya.mp4" }
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Transformasi SDM Kesehatan",
    background: "SDM.png",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Dalam hal upaya pemenuhan SDM Kesehatan hingga Juni 2024, telah ditempatkan 3.457 tenaga kesehatan di Puskesmas DTPK/DBK dan 2.670 dokter spesialis di RSUD dan Rumah Sakit Pemerintah. Kemenkes juga menyediakan Program Beasiswa bagi Tenaga Medis dan Tenaga Kesehatan dengan ikatan pengabdian, serta menginisiasi Hospital Based atau Program Pendidikan Dokter Spesialis berbasis Rumah Sakit Pendidikan Penyelenggara Utama (RSP-PU) yang diresmikan oleh Presiden Joko Widodo pada 6 Mei 2024.",
    media: [
      { type: "image", src: "5 SDM Kesehatan Halaman 41-49_page-0001.jpg" },
      { type: "image", src: "5 SDM Kesehatan Halaman 41-49_page-0002.jpg" },
      { type: "image", src: "5 SDM Kesehatan Halaman 41-49_page-0003.jpg" },
      { type: "image", src: "5 SDM Kesehatan Halaman 41-49_page-0004.jpg" },
      { type: "image", src: "5 SDM Kesehatan Halaman 41-49_page-0005.jpg" },
      { type: "image", src: "5 SDM Kesehatan Halaman 41-49_page-0006.jpg" },
      { type: "image", src: "5 SDM Kesehatan Halaman 41-49_page-0007.jpg" },
      { type: "image", src: "5 SDM Kesehatan Halaman 41-49_page-0008.jpg" },
      { type: "image", src: "5 SDM Kesehatan Halaman 41-49_page-0009.jpg" },
      // { type: "video", src: "IndonesiaRaya.mp4" }
    ],
  },
  {
    year: "Pencapaian",
    // judul: "Badan Kebijakan Pembangunan Kesehatan",
    title: "Transformasi Teknologi Kesehatan",
    background: "satusehat.png",
    // icon: <FaClipboardList size={50} color="#2196F3" />,
    description: "Kemenkes menyelenggarakan integrasi data kesehatan di semua fasyankes di Indonesia. Melalui platform Satusehat, sebanyak lebih dari 35 ribu fasyankes sudah terintegrasi. Sementara itu, Aplikasi Sehat Indonesia KU (ASIK) Mobile dan Dashboard sudah digunakan oleh lebih dari 90 persen Puskesmas. ASIK menjadi percontohan negara lain.",
    media: [
      { type: "image", src: "6 Teknologi Kesehatan Halaman 50-59_page-0001.jpg" },
      { type: "image", src: "6 Teknologi Kesehatan Halaman 50-59_page-0002.jpg" },
      { type: "image", src: "6 Teknologi Kesehatan Halaman 50-59_page-0003.jpg" },
      { type: "image", src: "6 Teknologi Kesehatan Halaman 50-59_page-0004.jpg" },
      { type: "image", src: "6 Teknologi Kesehatan Halaman 50-59_page-0005.jpg" },
      { type: "image", src: "6 Teknologi Kesehatan Halaman 50-59_page-0006.jpg" },
      { type: "image", src: "6 Teknologi Kesehatan Halaman 50-59_page-0007.jpg" },
      { type: "image", src: "6 Teknologi Kesehatan Halaman 50-59_page-0008.jpg" },
      { type: "image", src: "6 Teknologi Kesehatan Halaman 50-59_page-0009.jpg" },
      { type: "image", src: "6 Teknologi Kesehatan Halaman 50-59_page-0010.jpg" },
      // { type: "video", src: "IndonesiaRaya.mp4" }
    ],
  },
  
];

export default function Timeline() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    if (selectedIndex !== null) {
      setPopupVisible(true);
      setCurrentMediaIndex(0);
    }
  }, [selectedIndex]);

  const radius = 300;

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  };

  const handleCardClick = (index) => {
    setSelectedIndex(index);
  };

  const handleClosePopup = () => {
    setSelectedIndex(null);
    setPopupVisible(false);
  };

  const handleNextMedia = () => {
    const totalMedia = data[selectedIndex]?.media.length;
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % totalMedia);
  };

  const handlePrevMedia = () => {
    const totalMedia = data[selectedIndex]?.media.length;
    setCurrentMediaIndex((prevIndex) => (prevIndex - 1 + totalMedia) % totalMedia);
  };

  return (
    <>
      <AnimatePresence>
        {isPopupVisible && selectedIndex !== null && (
          <motion.div variants={popupVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }} 
          className="absolute bg-black bg-opacity-50 w-[100%] h-[100%] z-[999] left-0 top-0 flex items-center justify-center">
            <div className="flex items-center px-[40px] max-w-[60vw] min-h-[60vh] bg-white border border-sm rounded-xl gap-8 relative">
              <div className='absolute right-[-20] top-[-20] bg-white border w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300' onClick={handleClosePopup} style={{ color: "green"}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </div>

              <div className="flex justify-center mb-[2px] relative min-w-[50%]">
                {data[selectedIndex].media && data[selectedIndex].media.length > 1 && (
                  <div className="flex items-center justify-between w-full h-full absolute top-0 left-0 px-[10px]">
                    <div onClick={handlePrevMedia} className="flex items-center p-2 rounded-full bg-black bg-opacity-10  hover:bg-opacity-20 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                      </svg>
                    </div>
                    <div onClick={handleNextMedia} className="flex items-center p-2 rounded-full bg-black bg-opacity-10  hover:bg-opacity-20 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </div>
                )}

                {data[selectedIndex].media[currentMediaIndex].type === "image" ? (
                  <img
                    src={data[selectedIndex].media[currentMediaIndex].src}
                    alt={`${data[selectedIndex].title} media ${currentMediaIndex + 1}`}
                    className="w-full bg-transparent"
                  />
                ) : (
                  <video
                    src={data[selectedIndex].media[currentMediaIndex].src}
                    controls
                    className={styles.popupVideo}
                  />
                )}
              </div>

              <div className={styles.popupDescription}>
                <h3 className={styles.popupTitle}>{data[selectedIndex].title}</h3>
                <p>{data[selectedIndex].description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </ AnimatePresence>

      <div className={styles.timelineContainer}>
        <button className={`${styles.styledButton} ${styles.circularCard}`}>Transformasi Kesehatan</button>
        <div className={styles.timeline}>
          {data.map((entry, index) => {
            const angle = (index / data.length) * 2 * Math.PI;
            const x = Math.round((radius * Math.cos(angle) + 50) * 110) / 130;
            const y = Math.round((radius * Math.sin(angle) + 50) * 110) / 130;

            return (
              <div
                key={index}
                className={`${styles.card} ${selectedIndex === index ? styles.active : ""}`}
                style={{ left: `${x}px`, top: `${y}px`, backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}/${entry.background})`, backgroundSize: "cover", backgroundPosition: "center", }}
                onClick={() => handleCardClick(index)}
              >
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)"
                }} className="rounded-full"></div>
                <h3 className={styles.cardTitle}style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0}}>{entry.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}