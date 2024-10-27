'use client'
import React, { useState } from 'react';
import './Timeline.css'; // Ensure to import your CSS file

const Timeline = () => {
  const [showDescription1, setShowDescription1] = useState(false); // State for the first item
  const [showDescription2, setShowDescription2] = useState(false); // State for the second item
  const [showDescription3, setShowDescription3] = useState(false); // State for the third item

  const handleImageClick1 = () => {
    setShowDescription1(!showDescription1);
  };

  const handleImageClick2 = () => {
    setShowDescription2(!showDescription2);
  };

  const handleImageClick3 = () => {
    setShowDescription3(!showDescription3);
  };

  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {/* First Timeline Item */}
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">1984</time>
          <div className="text-lg font-black">First Macintosh computer</div>
          <img
            src="/imam.jpg"
            alt="First Macintosh computer"
            className="h-30 w-30 object-cover cursor-pointer"
            onClick={handleImageClick1} // Click handler for the first image
          />
          {showDescription1 && (
            <p className="description">
              The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.
            </p>
          )}
        </div>
        <hr />
      </li>

      {/* Second Timeline Item */}
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">2015</time>
          <div className="text-lg font-black">Apple Watch</div>
          <img
            src="/imam.jpg"
            alt="Apple Watch"
            className="h-30 w-30 object-cover cursor-pointer"
            onClick={handleImageClick2} // Click handler for the second image
          />
          {showDescription2 && (
            <p className="description">
              The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services.
            </p>
          )}
        </div>
        <hr />
      </li>

      {/* Third Timeline Item */}
      <li>
      <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">1984</time>
          <div className="text-lg font-black">First Macintosh computer</div>
          <img
            src="/imam.jpg"
            alt="First Macintosh computer"
            className="h-30 w-30 object-cover cursor-pointer"
            onClick={handleImageClick3} // Click handler for the first image
          />
          {showDescription3 && (
            <p className="description">
              The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.
            </p>
          )}
        </div>
        <hr />
      </li>
    </ul>
  );
};

export default Timeline;
