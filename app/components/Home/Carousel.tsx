"use client";
import Link from "next/link";
import { useState } from "react";

export default function Carousel() {
  const [index, setIndex] = useState(0);

  // Carousel items grouped by 3
  const slides = [
    [
      {
        href: "/Sejarah",
        src: "obat.jpg",
        alt: "Team Member",
        caption: "Pengobatan Tradisional dan Masyarakat Adat",
      },
      {
        href: "/Kondisi",
        src: "Bidan.jpg",
        alt: "Team Member",
        caption: "Kondisi Kesehatan di Masa Kolonial",
      },
      {
        href: "/Peran_Tokoh",
        src: "Dokter.jpg",
        alt: "Team Member",
        caption: (
          <>
            Peran Tokoh Kesehatan
            <br />
            dalam Perjuangan Menuju Kemerdekaan
          </>
        ),

      },
    ],
    [
      {
        href: "/Sejarah_Stovia",
        src: "stovia.png",
        alt: "Team Member",
        caption: "Sejarah Stovia",
      },
      {
        href: "/Kurikulum",
        src: "kurikulum.png",
        alt: "Team Member",
        caption: "Kurikulum dan Pelatihan",
      },
      {
        href: "/Tokoh_Perjuangan",
        src: "tokoh.png",
        alt: "Team Member",
        caption: (
          <>
          Peran Tokoh Kesehatan dan Penyakit Endemik 
          <br/>
          dalam Perjuangan Menuju Kemerdekaan
          </>
        ),
      },
    ],
  ];

  const nextSlide = () => {
    setIndex((index + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full">
      {/* Carousel container */}
      <div className="carousel w-full overflow-hidden">
        <div
          className="flex gap-4 transition-transform"
          style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((slideGroup, i) => (
            <div key={i} className="flex w-full flex-shrink-0 gap-4">
              {slideGroup.map((slide, j) => (
                <div key={j} className="relative group w-1/3 h-80">
                  <Link href={slide.href}>
                    <div className="h-full">
                      <img
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                        src={slide.src}
                        alt={slide.alt}
                        style={{ maxHeight: "100%", objectFit: "cover" }}
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                        {slide.caption}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation controls */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a className="btn btn-circle">❮</a>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a className="btn btn-circle">❯</a>
      </button>
    </div>
  );
}
