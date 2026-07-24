"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
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
import CommandPalette from "@/components/CommandPalette";
import BackgroundCanvas from "@/components/BackgroundCanvas";

export default function Home() {
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false);

  return (
    <main className="min-h-screen bg-transparent text-[#fafafa] relative font-sans">
      <BackgroundCanvas />
      <CustomCursor />
      <CommandPalette isOpen={cmdPaletteOpen} onClose={() => setCmdPaletteOpen(false)} />

      <div className="relative z-10 mix-blend-difference">
        <Navbar onOpenCommandPalette={() => setCmdPaletteOpen(true)} />
      </div>

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
