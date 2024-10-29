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
        src: "gedung.png",
        alt: "Team Member",
        caption: "Pra Kemerdekaan",
      },
      {
        href: "/Kondisi",
        src: "orang.png",
        alt: "Team Member",
        caption: "Kemerdekaan",
      },
      {
        href: "/Sejarah_Stovia",
        src: "budi.png",
        alt: "Team Member",
        caption: "Transformasi Kesehatan",
      },
      {
        href: "/Peran_Tokoh",
        src: "45.png",
        alt: "Team Member",
        caption: (
          <>
            Menuju Indonesia Emas 2045
          </>
        ),
      },
    ],
  ];

  // const nextSlide = () => {
  //   setIndex((index + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setIndex((index - 1 + slides.length) % slides.length);
  // };

  return (
    <div className="relative w-full">
      {/* Carousel container */}
      <div className="carousel w-full overflow-center">
        <div
          className="flex gap-4 transition-transform"
          style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((slideGroup, i) => (
            <div key={i} className="flex w-full flex-shrink-0 ">
              {slideGroup.map((slide, j) => (
                <div key={j} className="relative group w-1/3 h-100 ">
                  <Link href={slide.href}>
                  <div className="relative">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                      src={slide.src}
                      alt={slide.alt}
                      style={{ maxHeight: "200%", objectFit: "cover" }}
                    />
                    {/* <figcaption
                      className="absolute inset-0 flex items-center justify-center  text-white p-2"
                      style={{ marginTop: '400px', fontSize: '1.8rem', fontFamily: 'VAG Rounded BT' }}
                    >
                      {slide.caption} 
                    </figcaption> */}
                  </div>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>



      {/* Navigation controls */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a className="btn btn-circle">❮</a>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a className="btn btn-circle">❯</a>
      </button> */}
    </div>
  );
}
