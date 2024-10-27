import Image from "next/image";
import Link from "next/link";
import Theme from "./components/Home/Theme";

export default function Home() {
  return (
   <div>
    <Theme></Theme>
    <h1>Landing Page</h1>   
    
    <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
    <div>
      <Link href="/Sejarah">
        <img
          className="w-full"
          src="image 1.png"
          alt="Team Member"
        />
      </Link>
    </div>
    <div>
      <Link href="/Kondisi">
        <img
          className="w-full"
          src="image 1.png"
          alt="Team Member"
        />
      </Link>
    </div>
    <div>
      <Link href="/Peran_Tokoh">
        <img
          className="w-full"
          src="image 1.png"
          alt="Team Member"
        />
      </Link>
    </div>
            
        </div>
  </div>
  
  );
}


