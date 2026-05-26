import Hero from "@/components/Hero/Hero";
import Destinations from "@/components/Destinations/Destinations";
import About from "@/components/About/About";
import Gallery from "@/components/Gallery/Gallery";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Destinations />
      <About />
      <Gallery />
      <Contact />
    </main>
  );
}
