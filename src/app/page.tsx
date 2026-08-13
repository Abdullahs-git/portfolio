import Hero from "@/components/Hero";
import About from "@/components/About";
import Locations from "@/components/Locations";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Arsenal from "@/components/Arsenal";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ClientInteractions from "@/components/ClientInteractions";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-os-text relative font-sans">
      <BackgroundCanvas />
      <CustomCursor />
      
      <ClientInteractions />

      <div className="relative z-0">
        <Hero />
        <About />
        <Projects />
        <Publications />
        <Arsenal />
        <Locations />
        <Certifications />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
