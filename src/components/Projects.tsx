"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Folder, FileCode, Terminal } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "ForexAI.exe",
      category: "Mobile App for Forex Learning & Market Prediction",
      desc: "React Native • XGBoost • Kronos AI. Fine-tuned XGBoost and Decision Trees ensembled with Kronos AI for robust market movement prediction.",
    },
    {
      title: "MAPF-Lite.sh",
      category: "Parameter-Efficient Multimodal Deepfake Detection",
      desc: "PyTorch • Vision Transformers • CLIP • Whisper. Achieved 99.34% accuracy and 4.7x real-time inference speed using frozen backbones and SRM analysis.",
    },
    {
      title: "TeleMed_AI.app",
      category: "Telemedicine Ecosystem",
      desc: "React Native • Firebase • Computer Vision. Cross-platform system with AI-powered diagnostic scans and multi-role architecture.",
    },
    {
      title: "LingumedAI.py",
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
        end: "+=3000",
      }
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="projects" ref={containerRef} className="h-screen w-full overflow-hidden bg-os-bg border-t border-os-border font-mono relative">
      <div className="absolute inset-0 scanline-overlay pointer-events-none" />
      
      <div className="absolute top-8 left-4 md:left-12 z-20 os-window p-2 bg-os-panel border border-os-primary">
        <div className="flex items-center gap-2 text-os-primary font-bold">
          <Folder className="w-4 h-4" />
          <span>/home/abdullah/projects</span>
        </div>
      </div>

      <div ref={scrollWrapperRef} className="flex h-full w-[400vw]">
        {projects.map((proj, idx) => (
          <div 
            key={idx} 
            className="project-panel w-screen h-full flex flex-col justify-center px-4 md:px-32 relative"
          >
            <div className="relative z-10 max-w-4xl os-window p-6 md:p-10 bg-os-panel">
              <div className="os-header absolute top-0 left-0 w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  <span>{proj.title} - Execution Context</span>
                </div>
                <span>[{idx + 1}/{projects.length}]</span>
              </div>
              
              <div className="mt-8">
                <span className="text-xs font-bold uppercase tracking-widest text-os-secondary mb-4 block">
                  &gt; TYPE: {proj.category}
                </span>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-os-text mb-6 flex items-center gap-4">
                  <FileCode className="w-8 h-8 md:w-12 md:h-12 text-os-primary" />
                  {proj.title}
                </h3>
                <div className="text-sm md:text-lg text-os-muted leading-relaxed max-w-2xl border-l-2 border-os-primary pl-4 py-2 bg-black/50">
                  <span className="text-os-primary font-bold mr-2">LOG:</span>
                  {proj.desc}
                </div>
                
                <button className="mt-10 flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:text-os-bg hover:bg-os-primary transition-colors border border-os-primary px-6 py-3">
                  <span>./view_case_study.sh</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="absolute right-0 bottom-12 text-[clamp(4rem,12vw,16rem)] font-black text-outline opacity-10 mr-12 hidden lg:block pointer-events-none">
              0{idx + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
