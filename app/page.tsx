import Theme from "./components/Home/Theme";
import Carousel from "./components/Home/Carousel";

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Header Section */}
      <div className="flex items-center justify-between p-1">
  <div className="flex items-center gap-6 pl-10">
    {/* <img
      src="garuda.png"
      alt="Logo Garuda"
      className="h-full w-auto max-h-20" // Menggunakan max-h untuk membatasi tinggi
    /> */}
    <img
      src="BKPK LOGO.png"
      alt="Logo BKPK"
      className="h-full w-auto max-h-40" // Menggunakan max-h untuk membatasi tinggi
    />
  </div>
  <img
    src="Supergrafis.png"
    alt="Logo Tambahan"
    className="h-40 w-auto"
  />
</div>

      <br/>

      <div className="flex items-center gap-6 pl-10 py-10">
          <img
            src="Garis.png"
            alt="Logo Garuda"
            className="h- w-auto"
          />

      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center pl-10 pr-10">
        <Carousel />
      </main>


     <div className="flex items-center justify-end gap-6 pr-10 py-10">
    <img
        src="Garis.png"
        alt="Logo Garuda"
        className="h-auto w-auto"
    />
</div>

      {/* <div className="flex items-center justify-end p-4">
    <img
        src="Logo Footer.png"
        alt="Footer Logo"
        className="h-20 w-auto "
    />
</div> */}

      {/* Footer Section */}
      <div className="flex items-center justify-between p-1 pr-10">
        <img
          src="Supergrafiskiri.png"
          alt="Logo Tambahan Kiri"
          className="h-40 w-auto"
        />
         <img
        src="Logo Footer.png"
        alt="Footer Logo"
        className="h-50 w-auto pr-10"
    />
      </div>
    </div>
  );
}
