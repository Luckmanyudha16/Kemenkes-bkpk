import "./PageSejarah.css";
import Link from "next/link";

export default function Sejarah() {
  return (
    <div className="h-screen overflow-hidden flex flex-col justify-between">
      <div className="container mx-auto px-6 h-full relative">
        
        {/* Logo Garuda di pojok kiri atas */}
        <div className="absolute top-0 left-0 m-4 flex items-center gap-4">
          <img src="garuda.png" alt="Logo Garuda" className="logo-size" />
          <img src="BKPK LOGO.png" alt="Logo BKPK" className="logo-size" />
        </div>

        {/* Gambar dekoratif di pojok kanan atas */}
        <img
          src="Supergrafis.png"
          alt="Logo Tambahan"
          className="absolute top-0 right-0 supergrafis-size m-2"
        />

        {/* Konten Utama */}
        <div className="pt-24 text-left px-4 mx-auto sm:px-6 lg:px-8 main-content">
          <h2 className="heading">Pengobatan Tradisional dan Masyarakat Adat</h2>
          <div className="flex justify-center items-center py-4">
            <video className="video-size rounded-md" controls>
              <source src="/peta.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Gambar setelah video dengan ukuran proporsional */}
          <div className="grid md:grid-cols-2 gap-y-6 md:gap-x-10 content-grid">
            <div className="relative flex justify-center">
              <img className="image-size object-cover rounded-md" src="/obat.jpg" alt="Obat" />
            </div>
            <div>
              <h2 className="heading">Grow business with Celebration.</h2>
              <p className="text-gray-600 text-content">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bagian Footer */}
        <div className="footer flex justify-start items-center">
          <img src="Supergrafiskiri.png" alt="Logo Tambahan" className="footer-logo-size" />
          <div className="absolute top-0 right-0 px-4 mt-4">
            <Link href="/">
              <button className="btn btn-outline btn-primary">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
