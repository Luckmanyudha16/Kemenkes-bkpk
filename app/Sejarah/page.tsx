import Image from "next/image";
import style from "./PageSejarah.module.css";

export default function Sejarah() {
  return (
    <div className={style.bgRed}>
      <img
    src="Supergrafis.png"
    alt="Logo Tambahan"
    className="absolute top-0 right-0 max-h-0 w-auto sm:max-h-0 md:max-h-0 lg:max-h-72 m-2"
  />
      <h1 className="text-center py-6">Pengobatan Tradisional dan Masyarakat Adat</h1>
      
      {/* Gambar pertama di tengah */}
      <div className="flex justify-center items-center py-6">
        <Image
          className="rounded-md"
          src="/Dokter.png"
          alt="Main Image"
          width={400}
          height={400}
        />
      </div>

      {/* Section dengan gambar lebih kecil */}
      <section className="py-10 bg-white sm:py-16 lg:py-24 animate-section">
  <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
    <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
      <div className="pr-12 sm:pr-0">
        <div className="relative max-w-xs mb-12">
          <Image
            className="object-bottom rounded-md animate-section"
            src="/Bidan.png"
            alt="Secondary Image"
            width={300} // Lebih kecil dari gambar pertama
            height={300}
          />
        </div>
      </div>

      <div className="animate-section">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Grow business with Celebration.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  </div>
</section>

      <div className="relative mt-12 flex justify-">
    <img
      src="Supergrafiskiri.png"
      alt="Logo Tambahan"
      className="max-h-48 w-auto sm:max-h-56 md:max-h-64 lg:max-h-72"
    />
  </div>
    </div>
  );
}
