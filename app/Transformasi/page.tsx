import Link from "next/link"; // Import Link from next/link
import "./Transformasi.css";
import Timeline from "../components/Transformasi/Timeline";

export default function Reformasi() {
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
        </div>
        <img
          src="Supergrafis.png"
          alt="Logo Tambahan"
          className="h-40 w-auto"
        />
      </div>

      {/* Main Content */}
      <div className="full-page-background bg-white">
        {/* Left Arrow Button */}
        <div className="arrow-button-container left">
          <Link href="/Pencapaian">
            <button className="btn btn-arrow">{"<"}</button>
          </Link>
        </div>

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center pl-10 pr-10">
          <Timeline />
        </main>

        {/* Right Arrow Button */}
        <div className="arrow-button-container right">
          <Link href="/Tranformasi">
            <button className="btn btn-arrow">{">"}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
