import "./PageSejarah.css";
import Link from "next/link";

export default function Sejarah() {
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
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Pengobatan Tradisional dan Masyarakat Adat
          </h2>
        </div>
        <br/>

        {/* Video from public folder */}
        <div className="flex justify-center items-center py-6">
          <video className="w-full h-auto rounded-md" controls>
            <source src="/peta.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <br/>

        {/* Section dengan gambar lebih kecil */}
        {/* <section className="py-10 bg-white sm:py-16 lg:py-24"> */}
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div className="pr-12 sm:pr-0">
              <div className="relative max-w-xs mb-12">
                <img
                  className="object-bottom rounded-md"
                  src="/tanamanobat.jpg"
                  alt=""
                  width={400}
                  height={400}
                />

                {/* <img
                  className="absolute origin-bottom-right scale-50 rounded-md -bottom-6 -right-6"
                  src="/globe.svg"
                  alt=""
                  width={150}
                  height={150}
                /> */}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Grow business with Celebration.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
        {/* </section> */}
      </div>
    </div>
      <div className="relative mt-12 flex justify-start items-start">
        <img
          src="Supergrafiskiri.png"
          alt="Logo Tambahan"
          className="max-h-48 w-auto sm:max-h-56 md:max-h-64 lg:max-h-72"
        />
        <div className="absolute top-0 right-0 px-4 mt-4">
          <Link href="/">
            {" "}
            {/* Wrap the button with Link */}
            <button className="btn btn-outline btn-primary">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
