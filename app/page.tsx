import Theme from "./components/Home/Theme";
import Carousel from "./components/Home/Carousel";
import  Style  from "./app/page.module.css";

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Header Section */}
      <div className="flex items-center justify-between p-0">
        <div className="flex items-center gap-6 pl-2">
          {/* <img
            src="garuda.png"
            alt="Logo Garuda"
            className="h-full w-auto max-h-20 md:max-h-16 sm:max-h-12" // Adjust max-height for smaller screens
          /> */}
          <img
            src="BKPK LOGO.png"
            alt="Logo BKPK"
            className="h-full w-auto max-h-40 md:max-h-32 sm:max-h-20" // Adjust max-height for smaller screens
          />
        </div>
        <img
          src="Supergrafis.png"
          alt="Logo Tambahan"
          className="h-40 w-auto md:h-32 sm:h-24" // Adjust height for smaller screens
        />
      </div>
      {/* <div className="flex items-center gap-6 pl-10 py-10">
        <img
          src="Garis.png"
          alt="Logo Garuda"
          className="h-auto w-auto" // Hide on smaller screens
        />
      </div> */}

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center pl-5 pr-5">
        <Carousel />
      </main>

      {/* <div className="flex items-center justify-end gap-6 pr-10 py-10">
  <img
    src="Garis.png"
    alt="Logo Garuda"
    className="h-auto w-auto" // Rotate 180 degrees
  />
</div> */}

      {/* Footer Section */}
      <div className="flex items-center justify-between p-1 pr-10">
        <img
          src="Supergrafiskiri.png"
          alt="Logo Tambahan Kiri"
          className="h-40 w-auto md:h-32 sm:h-24" // Adjust height for smaller screens
        />
        <img
          src="Logo Footer.png"
          alt="Footer Logo"
          className="h-50 w-auto pr-10 md:h-40 sm:h-32" // Adjust height for smaller screens
        />
      </div>
    </div>
  );
}