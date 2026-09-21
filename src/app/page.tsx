import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Marquee } from "@/components/motion/Marquee";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { About } from "@/components/sections/About";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
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
        <Portfolio />
        <Process />
        <ContactSection />
      </main>

      <Footer />

      {/* Único trozo de cliente del sistema de animaciones: marca cada
          elemento al asomar y deja de observarlo. */}
      <RevealObserver />
    </>
  );
}
