import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import "./Kondisi_kesehatan.css";
import Timeline from "../components/Kondisi/Timeline";

export default function Kondisi() {
  return (
    <div>
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <img
    src="Supergrafis.png"
    alt="Logo Tambahan"
    className="absolute top-0 right-0 max-h-0 w-auto sm:max-h-0 md:max-h-0 lg:max-h-72 m-2"
  />
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-3xl animate-fade-in">
              Kondisi Kesehatan di Masa Kolonial
            </h1>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
            </p>
            <br />
          </div>
          <Timeline />
        </div>
      </section>
      <div className="flex justify-end px-4 mb-4">
        <Link href="/"> {/* Wrap the button with Link */}
          <button className="btn btn-outline btn-primary">
            Primary
          </button>
        </Link>
      </div>
      <img
      src="Supergrafiskiri.png"
      alt="Logo Tambahan"
      className="max-h-48 w-auto sm:max-h-56 md:max-h-64 lg:max-h-72"
    />
    </div>
  );
}
