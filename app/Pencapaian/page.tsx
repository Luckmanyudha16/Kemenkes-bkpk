import Timeline from "../components/Pencapaian/Timeline";
import "./Pencapaian.css";

export default function Pencapaian() {
  return (
    <>
    <div className="full-page-background">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center pl-10 pr-10">
        <Timeline />
      </main>
    </div>
    </>
  );
}
