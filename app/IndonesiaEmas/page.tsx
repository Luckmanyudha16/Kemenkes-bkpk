import Link from "next/link"; // Import Link from next/link
import "./Indonesia.css";
import Timeline from "../components/IndonesiaEmas/Timeline";

export default function IndonesiaEmas() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white">
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
      className="h-full w-auto max-h-20" // Menggunakan max-h untuk membatasi tinggi
    />
  </div>
  <img
    src="Supergrafis.png"
    alt="Logo Tambahan"
    className="h-40 w-auto"
  />
</div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center pl-10 pr-10">
        <Timeline />
      </main>

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
    //   <div className="relative flex justify-start items-start p-4"> {/* Added padding for spacing */}
    //     <img
    //       src="Supergrafiskiri.png"
    //       alt="Logo Tambahan"
    //       className="max-h-48 w-auto sm:max-h-56 md:max-h-64 lg:max-h-72"
    //     />
    //     <div className="absolute top-0 right-0">
    //       <Link href="/"> {/* Wrap the button with Link */}
    //         <button className="btn btn-outline btn-primary">Back</button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
}
