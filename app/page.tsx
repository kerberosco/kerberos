import AboutUs from "./components/sections/AboutUs";
import MainVisual from "./components/sections/MainVisual";
import WhyKerberos from "./components/sections/WhyKerberos";

export default function Home() {
  return (
    <main className="w-full">
      <MainVisual />
      <AboutUs />
      <WhyKerberos />
    </main>
  );
}
