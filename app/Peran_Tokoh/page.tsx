'use client'
import React, { useState } from "react";

import "./PeranTokoh.css";
import Link from "next/link";

export default function Peran_Tokoh() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalImage, setModalImage] = useState(""); // New state for modal image

  // Function to handle card click and set modal content
  const handleCardClick = (content: string, image: any) => {
    setModalContent(content);
    setModalImage(image); // Set the image for the modal
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>

    
     <div className="container mx-auto px-6">
      {/* Logo Section */}
      <div className="flex justify items gap-6 py-6">
      <img
        src="garuda.png"
        alt="Logo Garuda"
        className="max-h-24 w-auto sm:max-h-28 md:max-h-32 lg:max-h-36"
      />
      <img
        src="BKPK LOGO.png"
        alt="Logo BKPK"
        className="max-h-24 w-auto sm:max-h-28 md:max-h-32 lg:max-h-36"
      />
    </div>
    <img
      src="Supergrafis.png"
      alt="Logo Tambahan"
      className="absolute top-0 right-0 max-h-0 w-auto sm:max-h-0 md:max-h-0 lg:max-h-72 m-2"
    />
      {/* <section className="py-10 bg-white sm:py-16 lg:py-24"> */}
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Peran Tokoh Kesehatan dalam Perjuangan Menuju Kemerdekaan
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 two-line-text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
            {/* Array of cards with image sources and descriptions */}
            {[
              { title: "Imam Bonjol 1", description: "Description for Imam Bonjol 1", imgSrc: "imam.jpg" },
              { title: "Imam Bonjol 2", description: "Description for Imam Bonjol 2", imgSrc: "imam.jpg" },
              { title: "Imam Bonjol 3", description: "Description for Imam Bonjol 3", imgSrc: "imam.jpg" },
              { title: "Imam Bonjol 4", description: "Description for Imam Bonjol 4", imgSrc: "imam.jpg" },
              { title: "Imam Bonjol 5", description: "Description for Imam Bonjol 5", imgSrc: "imam.jpg" },
              { title: "Imam Bonjol 6", description: "Description for Imam Bonjol 6", imgSrc: "imam.jpg" },
              { title: "Imam Bonjol 7", description: "Description for Imam Bonjol 7", imgSrc: "imam.jpg" },
              { title: "Imam Bonjol 8", description: "Description for Imam Bonjol 8", imgSrc: "imam.jpg" },
              { title: "Imam Bonjol 9", description: "Description for Imam Bonjol 9", imgSrc: "imam.jpg" },
            ].map((card, index) => (
              <div className="card cursor-pointer" key={index} onClick={() => handleCardClick(card.description, card.imgSrc)}>
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover w-full h-full"
                    src={card.imgSrc}
                    alt={card.title}
                  />
                </a>
                <p className="text-sm font-bold leading-tight text-center text-black sm:text-base lg:text-lg">
                  {card.title}
                </p>
              </div>
            ))}
          </div>

          {/* Modal for displaying image and description */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded shadow-lg max-w-md mx-auto">
                <img src={modalImage} alt={modalContent} className="w-full h-auto mt-2 rounded" />
                <h3 className="text-lg font-bold mt-2">{modalContent}</h3> {/* Moved description below the image */}
                <button onClick={closeModal} className="mt-4 text-blue-500">
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      {/* </section> */}
    </div>
      <div className="relative mt-12 flex justify-start items-start">
  <img
    src="Supergrafiskiri.png"
    alt="Logo Tambahan"
    className="max-h-48 w-auto sm:max-h-56 md:max-h-64 lg:max-h-72"
  />
  <div className="absolute top-0 right-0 px-4 mt-4">
    <Link href="/"> {/* Wrap the button with Link */}
      <button className="btn btn-outline btn-primary">
        Back
      </button>
    </Link>
  </div>
</div>
    </div>
  );
}
