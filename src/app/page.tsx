import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Marquee } from "@/components/motion/Marquee";
import { RevealFallback } from "@/components/motion/RevealFallback";
import { About } from "@/components/sections/About";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { services } from "@/content/services";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <div className="relative z-10 border-y border-bone/10 bg-[#120F18] py-5 font-display text-lg text-bone/70 uppercase">
          <Marquee items={services.map((service) => service.title)} />
        </div>

        <About />
        <Services />
        <Metrics />
        <Portfolio />
        <ContactSection />
      </main>

      <Footer />

      {/* Único trozo de cliente del sistema de animaciones, y solo actúa
          donde el navegador no soporta las líneas de tiempo de scroll. */}
      <RevealFallback />
    </>
  );
}
