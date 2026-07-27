import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Benefits from "@/components/sections/Benefits";
import Events from "@/components/sections/Events";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Events />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
    </>
  );
}
