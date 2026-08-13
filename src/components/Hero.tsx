"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Text Scramble Effect
    const chars = "01!<>-_\\\\/[]{}—=+*^?#________";
    const element = titleRef.current;
    if (!element) return;
    
    const originalText = element.dataset.text || element.innerText;
    element.dataset.text = originalText;
    let iteration = 0;
    
    const interval = setInterval(() => {
      element.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) return originalText[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
        
      if (iteration >= originalText.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // GSAP Stagger Reveal
    if (!containerRef.current) return;
    
    const validElements = elementsRef.current.filter(Boolean);
    gsap.fromTo(
      validElements,
      { y: "120%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.5,
      }
    );
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-4 md:px-12 pt-32 pb-12 overflow-hidden bg-os-bg text-os-primary font-mono">
      <div className="absolute inset-0 scanline-overlay"></div>
      
      <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col items-start os-window p-6 md:p-12 mt-8 md:mt-16">
        <div className="absolute top-0 left-0 w-full os-header flex items-center justify-between">
          <span>root@abdullah-os:~</span>
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-os-border inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-os-border inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-os-text inline-block"></span>
          </div>
        </div>

        <div ref={containerRef} className="w-full mt-8">
          <div className="reveal-mask w-full">
            <div ref={addToRefs}>
              <h1 
                aria-label="Muhammad Abdullah Butt"
                className="text-[clamp(3rem,8vw,8rem)] leading-[0.85] font-black uppercase tracking-tighter text-os-text m-0"
              >
                <span aria-hidden="true">MUHAMMAD</span>
              </h1>
            </div>
          </div>
          
          <div className="reveal-mask w-full">
            <div ref={addToRefs}>
              <h1 
                className="text-[clamp(3rem,8vw,8rem)] leading-[0.85] font-black uppercase tracking-tighter text-os-text m-0"
              >
                <span aria-hidden="true">ABDULLAH BUTT</span>
              </h1>
            </div>
          </div>
          
          <div className="reveal-mask w-full mt-6">
            <div ref={addToRefs}>
              <h2 
                ref={titleRef}
                className="text-xl md:text-2xl font-bold text-os-secondary uppercase tracking-widest"
              >
                Senior Full-Stack AI Engineer & Researcher
              </h2>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mt-12 md:mt-24 gap-8">
            <div className="reveal-mask">
              <div ref={addToRefs} className="flex flex-col sm:flex-row gap-4">
                <a href="#projects" className="text-xs md:text-sm font-semibold tracking-wide uppercase border border-os-primary px-6 py-3 hover:bg-os-primary hover:text-os-bg transition-colors duration-300">
                  ./execute_projects.sh
                </a>
                <a href="#publications" className="text-xs md:text-sm font-semibold tracking-wide uppercase px-6 py-3 hover:text-os-secondary transition-colors duration-300">
                  cat research_mapf_lite.txt
                </a>
              </div>
            </div>

            <div className="reveal-mask max-w-md text-left md:text-right">
              <div ref={addToRefs} className="text-xs md:text-sm text-os-muted leading-relaxed">
                <span className="text-os-primary animate-blink">_</span> Based in London (Huzzle.com) & Pakistan (MAQ Enterprises). Specializing in MAPF-Lite research (FLINS-ISKE 2026), RAG pipelines, and high-performance architectures.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
