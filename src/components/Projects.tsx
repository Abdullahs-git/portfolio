"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "ForexAI",
      category: "Mobile App for Forex Learning & Market Prediction",
      desc: "React Native • XGBoost • Kronos AI. Fine-tuned XGBoost and Decision Trees ensembled with Kronos AI for robust market movement prediction.",
    },
    {
      title: "MAPF-Lite",
      category: "Parameter-Efficient Multimodal Deepfake Detection",
      desc: "PyTorch • Vision Transformers • CLIP • Whisper. Achieved 99.34% accuracy and 4.7x real-time inference speed using frozen backbones and SRM analysis.",
    },
    {
      title: "TeleMed AI",
      category: "Telemedicine Ecosystem",
      desc: "React Native • Firebase • Computer Vision. Cross-platform system with AI-powered diagnostic scans and multi-role architecture.",
    },
    {
      title: "LingumedAI",
      category: "Clinical Decision Support for Nurses",
      desc: "React • FastAPI • LangChain • pgvector. Domain-specific RAG pipeline ingesting medical literature to provide grounded, hallucination-resistant guidance.",
    }
  ];

  useEffect(() => {
    if (!containerRef.current || !scrollWrapperRef.current) return;
    
    const sections = gsap.utils.toArray(".project-panel");
    
    const tween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: "+=3000", // Controls how long the user scrolls to see all horizontal items
      }
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="projects" ref={containerRef} className="h-screen w-full overflow-hidden bg-[#0a0a0a] border-t border-[#222]">
      
      <div className="absolute top-12 left-4 md:left-12 z-20">
        <h2 className="text-[5vw] leading-[0.8] font-syne font-extrabold uppercase tracking-tighter text-[#fafafa]">
          02 Works
        </h2>
      </div>

      <div ref={scrollWrapperRef} className="flex h-full w-[400vw]">
        {projects.map((proj, idx) => (
          <div 
            key={idx} 
            className="project-panel w-screen h-full flex flex-col justify-center px-4 md:px-32 relative"
          >
            <div className="absolute inset-0 opacity-5 pointer-events-none text-[20vw] font-syne font-black whitespace-nowrap overflow-hidden translate-y-1/2">
              {proj.title}
            </div>

            <div className="relative z-10 max-w-4xl">
              <span className="text-sm font-manrope font-bold uppercase tracking-widest text-[#06b6d4] mb-4 block">
                {proj.category}
              </span>
              <h3 className="text-5xl md:text-7xl font-syne font-bold uppercase tracking-tight text-[#fafafa] mb-8">
                {proj.title}
              </h3>
              <p className="font-manrope text-lg md:text-2xl text-[#888] leading-relaxed max-w-2xl border-l border-[#333] pl-6">
                {proj.desc}
              </p>
              
              <button className="mt-12 flex items-center gap-4 text-xs font-syne font-bold uppercase tracking-widest hover:text-[#06b6d4] transition-colors group">
                <span className="border-b border-[#333] group-hover:border-[#06b6d4] pb-1">View Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[10vw] font-syne font-black text-outline opacity-20 mr-12 hidden lg:block">
              0{idx + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
