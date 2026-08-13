"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const experience = [
    {
      role: "Senior Full-Stack AI Engineer",
      company: "Huzzle.com | London, UK (Remote)",
      date: "Mar 2026 - Present",
      bullets: [
        "Developing AI-driven recruitment infrastructure integrating LLM pipelines with full-stack product features.",
        "Building scalable backend services and frontend interfaces for a live, high-traffic B2C platform."
      ]
    },
    {
      role: "Full Stack Engineer",
      company: "MAQ Enterprises Ltd. | Rawalpindi, Pakistan",
      date: "Jan 2023 - Feb 2026",
      bullets: [
        "Engineered production web apps (Next.js, Prisma ORM), reducing load time ~40% via SSR.",
        "Designed RESTful APIs and optimized PostgreSQL/MongoDB schemas, improving data retrieval speed ~35%.",
        "Automated CI/CD (Jenkins, Docker) cutting release cycles by 30%, and provisioned IaC using Terraform."
      ]
    },
    {
      role: "AI Researcher",
      company: "GIFT University | Pakistan",
      date: "2024 - 2026",
      bullets: [
        "Designed MAPF-Lite multimodal architecture (CLIP + Whisper + ViT) for audiovisual deepfake detection.",
        "Implemented data augmentation & prompt-learning techniques to harden model robustness."
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Estabraq (Fashion Brand) | Pakistan",
      date: "2025 - May 2026",
      bullets: [
        "Architected a live fashion e-commerce platform using Next.js App Router and Supabase."
      ]
    }
  ];

  useEffect(() => {
    if (!textRef.current) return;
    
    // Reveal text lines on scroll
    const blocks = textRef.current.querySelectorAll('.experience-block');
    
    blocks.forEach((block) => {
      gsap.fromTo(block, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-4 md:px-12 border-t border-os-border bg-os-bg relative overflow-hidden font-mono">
      <div className="absolute inset-0 scanline-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        
        <div className="w-full md:w-1/3 sticky top-32 os-window p-4 bg-os-panel border border-os-primary">
          <div className="flex items-center gap-2 text-os-primary font-bold border-b border-os-border pb-2 mb-2">
            <Terminal className="w-4 h-4" />
            <span>cat experience.log</span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,5rem)] leading-[1] font-black uppercase tracking-tighter text-os-muted opacity-50 mt-4">
            01 <br/> EXP
          </h2>
        </div>
        
        <div ref={textRef} className="w-full md:w-2/3 space-y-8 text-os-muted text-sm md:text-base leading-relaxed">
          
          {experience.map((job, index) => (
            <div key={index} className="experience-block os-window p-6 bg-os-panel">
              <div className="os-header mb-4 flex justify-between items-center bg-os-primary text-os-bg">
                <span>{job.role}</span>
                <span className="text-xs">{job.date}</span>
              </div>
              <div className="text-xs uppercase tracking-widest text-os-secondary mb-4 border-b border-os-border pb-2">
                @ {job.company}
              </div>
              <ul className="space-y-2">
                {job.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-os-primary mt-1">&gt;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
