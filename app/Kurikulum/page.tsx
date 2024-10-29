import "./PageSejarah.css";
import Link from "next/link";

export default function Kurikulum() {
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
            Kurikulum dan Pelatihan
          </h2>
        </div>

        <section className="py-6 bg-white-50 sm:py-8 lg:py-10">
            <div className="">
              <div className="flex justify-left items-center py-4">
                <img
                  className="w-1000 h-auto rounded-md animate-fade-in"
                  src="/Bidan.png"
                  alt=""
                  width={500}
                  height={500}
                />

              </div>
              <div className="flow-root mt-12 sm:mt-16">
            <div className="divide-y divide-gray--200 -my-9">
                <div className="py-9">
                    <p className="mt-3 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="py-6 bg-white sm:py-8 lg:py-10">
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center md:grid-cols-2 gap-y-8 md:gap-x-16">
              <div>
                <blockquote className="text-2xl font-bold leading-tight text-black sm:text-2xl lg:text-2xl italic">
                  “Lorem ipsum dolor sit amet consectetur. Odio tellus viverra
                  gravida volutpat augue nibh suspendisse id libero. Non
                  molestie ultricies ut accumsan quis aliquet nisl curabitur.”
                </blockquote>
              </div>

              <div className="flex justify-left items-center py-4">
                <img
                  className="w-full h-auto rounded-md animate-fade-in"
                  src="/fotobareng.jpg"
                  alt=""
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </section>
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
