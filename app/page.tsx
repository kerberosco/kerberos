import AboutUs from "./components/sections/AboutUs";
import MainVisual from "./components/sections/MainVisual";

export default function Home() {
  return (
    <main className="w-full">
      <MainVisual />
      <AboutUs />
    </main>
  );
}
