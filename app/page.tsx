
// import Link from "next/link";
import Theme from "./components/Home/Theme";
import Carousel from "./components/Home/Carousel";

export default function Home() {
  return (
    <div>
      <Theme/>

    
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
  <br/>
  </div>

  <div className="carousel w-full ">
  <Carousel/>
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

