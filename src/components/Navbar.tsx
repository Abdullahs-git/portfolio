"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Terminal } from "lucide-react";

export default function Navbar({ onOpenCommandPalette }: { onOpenCommandPalette: () => void }) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current, 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-8 border-b border-os-border bg-os-bg/90 backdrop-blur-sm pointer-events-auto font-mono"
    >
      <div className="flex items-center gap-2">
        <Terminal className="w-5 h-5 text-os-primary" />
        <div className="text-sm font-bold uppercase tracking-tight text-os-text">
          Abdullah_OS
        </div>
      </div>

      <div className="hidden md:flex gap-8 items-center text-xs font-semibold uppercase tracking-wider text-os-muted">
        <a href="#about" className="hover:text-os-primary transition-colors">cd /about</a>
        <a href="#projects" className="hover:text-os-primary transition-colors">cd /work</a>
        <a href="#publications" className="hover:text-os-primary transition-colors">cd /research</a>
      </div>

      <button
        onClick={onOpenCommandPalette}
        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-os-primary hover:text-os-bg hover:bg-os-primary px-3 py-1.5 border border-os-primary transition-colors"
      >
        <span>[CMD]</span>
      </button>
    </nav>
  );
}
