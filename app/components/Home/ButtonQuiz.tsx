'use client'
import { useState } from 'react';

export default function ButtonQuiz() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e) => {
    e.preventDefault(); // Mencegah langsung berpindah tab
    setIsAnimating(true); // Memulai animasi

    // Menunggu animasi selesai (600ms) sebelum membuka tab baru
    setTimeout(() => {
      window.open("https://kahoot.com/home/kahoot-quiz-games/", "_blank");
      setIsAnimating(false); // Mengembalikan ke keadaan awal setelah animasi
    }, 600); // Durasi waktu harus sesuai dengan durasi animasi
  };

  return (
    <div className="relative">
      {/* Tombol dengan animasi roket meluncur */}
      <button
        onClick={handleClick}
        className={`absolute bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg text-center transform transition-all duration-300 hover:bg-gray-600 hover:scale-105 ${
          isAnimating ? 'animate-rocket' : ''
        }`}
      >
        <img src="quiz.png" alt="Quiz Icon" className="w-6 h-6 inline-block mr-2" />
        Quiz
      </button>

      <style jsx>{`
        /* Tambahkan animasi khusus "rocket launch" */
        @keyframes rocket-launch {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.1);
          }
          100% {
            transform: translateY(-200px) scale(0.3);
            opacity: 0;
          }
        }
        .animate-rocket {
          animation: rocket-launch 0.6s forwards ease-in;
        }
      `}</style>
    </div>
  );
}
