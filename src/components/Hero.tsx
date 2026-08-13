"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [typedText, setTypedText] = useState("");
  
  const terminalLines = [
    ">_MAPF_LITE_ACCEPTED:_FLINS_ISKE_2026_(SPRINGER_NATURE)",
    ">_OUTPERFORMED_AAAI_2025_BENCHMARKS",
    ">_SENIOR_AI_ENGINEER_@_HUZZLE.COM_(LONDON)",
    ">_FOUNDER_@_NEURAL_STACK",
    ">_BUILDING:_RAG_PIPELINES,_AGENTIC_AI,_FULL_STACK_SAAS",
    ">_ACCESS_GRANTED"
  ];

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const fullText = terminalLines[currentLine];
      
      if (isDeleting) {
        setTypedText(fullText.substring(0, currentChar - 1));
        currentChar--;
      } else {
        setTypedText(fullText.substring(0, currentChar + 1));
        currentChar++;
      }

      let typeSpeed = 50; // Typing speed
      if (isDeleting) typeSpeed = 30; // Deleting speed

      if (!isDeleting && currentChar === fullText.length) {
        // Pause at end of word
        typeSpeed = 1500;
        if (currentLine === terminalLines.length - 1) {
          // Stop at "ACCESS_GRANTED"
          return; 
        }
        isDeleting = true;
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentLine++;
        typeSpeed = 500;
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    timeoutId = setTimeout(type, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
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
          <div className="flex gap-2 items-center">
            <span className="text-xs mr-2 opacity-50 hidden md:block">PROFILE_VIEWS: 1337+</span>
            <span className="w-3 h-3 rounded-full bg-os-border inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-os-border inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-os-text inline-block"></span>
          </div>
        </div>

        <div ref={containerRef} className="w-full mt-8">
          <div className="reveal-mask w-full mb-2">
            <div ref={addToRefs} className="flex gap-4 mb-4">
              <a href="mailto:abdullahbutt3579@gmail.com" className="flex items-center gap-2 text-xs border border-os-border px-3 py-1 hover:bg-os-border hover:text-os-text transition-colors">
                <Mail className="w-3 h-3" /> EMAIL
              </a>
              <a href="https://linkedin.com/in/muhammadabdullahbutt" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs border border-os-border px-3 py-1 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors">
                <Linkedin className="w-3 h-3" /> LINKEDIN
              </a>
              <a href="https://github.com/Abdullahs-git" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs border border-os-border px-3 py-1 hover:bg-white hover:text-black hover:border-white transition-colors">
                <Github className="w-3 h-3" /> GITHUB
              </a>
            </div>
          </div>

          <div className="reveal-mask w-full">
            <div ref={addToRefs}>
              <h1 
                aria-label="Muhammad Abdullah Butt"
                className="text-[clamp(2.5rem,7vw,7rem)] leading-[0.85] font-black uppercase tracking-tighter text-os-text m-0"
              >
                <span aria-hidden="true">MUHAMMAD</span>
              </h1>
            </div>
          </div>
          
          <div className="reveal-mask w-full">
            <div ref={addToRefs}>
              <h1 
                className="text-[clamp(2.5rem,7vw,7rem)] leading-[0.85] font-black uppercase tracking-tighter text-os-text m-0"
              >
                <span aria-hidden="true">ABDULLAH BUTT</span>
              </h1>
            </div>
          </div>
          
          <div className="reveal-mask w-full mt-6 h-8 md:h-10">
            <div ref={addToRefs}>
              <h2 className="text-sm md:text-xl font-bold text-os-secondary uppercase tracking-widest whitespace-nowrap overflow-hidden text-ellipsis flex items-center">
                {typedText}
                <span className="inline-block w-2 md:w-3 h-4 md:h-6 bg-os-secondary ml-1 animate-blink"></span>
              </h2>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mt-12 md:mt-16 gap-8">
            <div className="reveal-mask">
              <div ref={addToRefs} className="flex flex-col sm:flex-row gap-4">
                <a href="#projects" className="text-xs md:text-sm font-semibold tracking-wide uppercase border border-os-primary px-6 py-3 hover:bg-os-primary hover:text-os-bg transition-colors duration-300">
                  ./execute_projects.sh
                </a>
                <a href="#publications" className="text-xs md:text-sm font-semibold tracking-wide uppercase px-6 py-3 hover:text-os-secondary transition-colors duration-300 flex items-center gap-2">
                  cat research_mapf_lite.txt <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
