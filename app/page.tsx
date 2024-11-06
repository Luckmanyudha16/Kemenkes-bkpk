import Link from "next/link"; // Import Link from next/link
import "./Pencapaian/Pencapaian.css";
import Timeline from "./components/Pencapaian/Timeline";
import Screensaver from './components/Screensaver';

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white">

      {/* Header Section */}
      <div className="flex items-center justify-between p-1">
        <div className="flex items-center gap-6 pl-10">
          <img
            src="BKPK LOGO.png"
            alt="Logo BKPK"
            className="h-full w-auto max-h-20"
          />
           <img
          src="Logo Footer.png"
          alt="Footer Logo"
          className="h-50 w-auto pr-10 md:h-40 sm:h-32" // Adjust height for smaller screens
        />
        </div>
        <img
          src="Supergrafis.png"
          alt="Logo Tambahan"
          className="h-40 w-auto"
        />
      </div>

      {/* Main Content */}
      <div className="full-page-background bg-white">
        <Screensaver  videoSrc="PROFIL BKPK.mp4" idleTimeout={10000}/>
        {/* Left Arrow Button */}
        <div className="arrow-button-container left">
          <Link href="/Transformasi">
            <svg
              className="h-16 w-16 text-green-700"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="12" r="9" />
              <line x1="8" y1="12" x2="16" y2="12" /> {/* Panah kanan */}
              <line x1="8" y1="12" x2="12" y2="16" />
              <line x1="8" y1="12" x2="12" y2="8" />
            </svg>
          </Link>
        </div>

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center pl-10 pr-10 h-full">
          <Timeline />
        </main>

        {/* Right Arrow Button */}
        <div className="arrow-button-container right">
          <Link href="/Transformasi">
            <svg
              className="h-16 w-16 text-green-700"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="12" r="9" />
              <line x1="16" y1="12" x2="8" y2="12" />
              <line x1="16" y1="12" x2="12" y2="16" />
              <line x1="16" y1="12" x2="12" y2="8" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between p-1">
        <img
          src="Supergrafiskiri.png"
          alt="Logo Tambahan Kiri"
          className="h-40 w-auto" // Adjust height for smaller screens
        />
      </div>
    </div>
  );
}
