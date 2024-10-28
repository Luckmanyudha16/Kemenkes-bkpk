
import Link from "next/link";
import Theme from "./components/Home/Theme";
import Kemerdekaan from "./components/Home/Kemerdekaan";

export default function Home() {
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
    {/* <h1>Landing Page</h1>    */}
    
    <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 md:mt-16 lg:gap-x-12">
  <div className="relative group">
    <Link href="/Sejarah">
      <img
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
        src="obat.jpg"
        alt="Team Member"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
      Pengobatan Tradisional dan Masyarakat Adat
      </span>
    </Link>
  </div>
  
  <div className="relative group">
    <Link href="/Kondisi">
      <img
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
        src="Bidan.jpg"
        alt="Team Member"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
      Kondisi Kesehatan di Masa Kolonial
      </span>
    </Link>
  </div>
  
  <div className="relative group">
    <Link href="/Peran_Tokoh">
    <img
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
        src="Dokter.jpg"
        alt="Team Member"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
      Peran Tokoh Kesehatan dalam 
      <br/>
      Perjuangan Menuju Kemerdekaan
      </span>
    </Link>
  </div>
  </div>
  </div>
    <div className="relative mt-12 flex justify-left">
    <img
      src="Supergrafiskiri.png"
      alt="Logo Tambahan"
      className="absolute top-0 left-0 max-h-0 w-auto sm:max-h-0 md:max-h-0 lg:max-h-72 m-2"
    />
  </div>
  </div>
  
  );
}

