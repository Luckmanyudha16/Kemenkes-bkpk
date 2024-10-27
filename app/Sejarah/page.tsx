import Image from "next/image";
import style from "./PageSejarah.module.css";

export default function Sejarah() {
  return (
    <div className={style.bgRed}>
      <h1 className="text-center py-6">Pengobatan Tradisional dan Masyarakat Adat</h1>
      
      {/* Gambar pertama di tengah */}
      <div className="flex justify-center items-center py-6">
        <Image
          className="rounded-md"
          src="/globe.svg"
          alt="Main Image"
          width={400}
          height={400}
        />
      </div>

      {/* Section dengan gambar lebih kecil */}
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div className="pr-12 sm:pr-0">
              <div className="relative max-w-xs mb-12">
                <Image
                  className="object-bottom rounded-md"
                  src="/globe.svg"
                  alt="Secondary Image"
                  width={300} // Lebih kecil dari gambar pertama
                  height={300}
                />
                <Image
                  className="absolute origin-bottom-right scale-50 rounded-md -bottom-6 -right-6"
                  src="/globe.svg"
                  alt="Overlay Image"
                  width={150}
                  height={150}
                />
              </div>
            </div>

            <div>
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
    </div>
  );
}
