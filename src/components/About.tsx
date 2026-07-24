"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    
    // Reveal text lines on scroll
    const lines = textRef.current.querySelectorAll('.reveal-line');
    
    lines.forEach((line) => {
      gsap.fromTo(line, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: line,
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
    <section id="about" ref={sectionRef} className="py-32 px-4 md:px-12 border-t border-[#222] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        
        <div className="w-full md:w-1/3 sticky top-32">
          <h2 className="text-[5vw] leading-[0.8] font-syne font-extrabold uppercase tracking-tighter text-outline opacity-50">
            01 <br/> Experience
          </h2>
        </div>
        
        <div ref={textRef} className="w-full md:w-2/3 space-y-16 font-manrope text-[#aaa] text-lg md:text-xl leading-relaxed">
          
          <div className="experience-block">
            <div className="reveal-mask"><div className="reveal-line font-syne text-3xl text-[#fafafa] font-bold">Senior Full-Stack AI Engineer</div></div>
            <div className="reveal-mask"><div className="reveal-line text-sm uppercase tracking-widest text-[#555] mb-4">Huzzle.com | London, UK (Remote) | Mar 2026 - Present</div></div>
            <div className="reveal-mask"><div className="reveal-line">• Developing AI-driven recruitment infrastructure integrating LLM pipelines with full-stack product features.</div></div>
            <div className="reveal-mask"><div className="reveal-line">• Building scalable backend services and frontend interfaces for a live, high-traffic B2C platform.</div></div>
          </div>

          <div className="experience-block">
            <div className="reveal-mask"><div className="reveal-line font-syne text-3xl text-[#fafafa] font-bold">Full Stack Engineer</div></div>
            <div className="reveal-mask"><div className="reveal-line text-sm uppercase tracking-widest text-[#555] mb-4">MAQ Enterprises Ltd. | Rawalpindi, Pakistan | Jan 2023 - Feb 2026</div></div>
            <div className="reveal-mask"><div className="reveal-line">• Engineered production web apps (Next.js, Prisma ORM), reducing load time ~40% via SSR.</div></div>
            <div className="reveal-mask"><div className="reveal-line">• Designed RESTful APIs and optimized PostgreSQL/MongoDB schemas, improving data retrieval speed ~35%.</div></div>
            <div className="reveal-mask"><div className="reveal-line">• Automated CI/CD (Jenkins, Docker) cutting release cycles by 30%, and provisioned IaC using Terraform.</div></div>
          </div>

          <div className="experience-block">
            <div className="reveal-mask"><div className="reveal-line font-syne text-3xl text-[#fafafa] font-bold">AI Researcher</div></div>
            <div className="reveal-mask"><div className="reveal-line text-sm uppercase tracking-widest text-[#555] mb-4">GIFT University | Pakistan | 2024 - 2026</div></div>
            <div className="reveal-mask"><div className="reveal-line">• Designed MAPF-Lite multimodal architecture (CLIP + Whisper + ViT) for audiovisual deepfake detection.</div></div>
            <div className="reveal-mask"><div className="reveal-line">• Implemented data augmentation & prompt-learning techniques to harden model robustness.</div></div>
          </div>

          <div className="experience-block">
            <div className="reveal-mask"><div className="reveal-line font-syne text-3xl text-[#fafafa] font-bold">Full-Stack Developer</div></div>
            <div className="reveal-mask"><div className="reveal-line text-sm uppercase tracking-widest text-[#555] mb-4">Estabraq (Fashion Brand) | Pakistan | 2025 - May 2026</div></div>
            <div className="reveal-mask"><div className="reveal-line">• Architected a live fashion e-commerce platform using Next.js App Router and Supabase.</div></div>
          </div>

        </div>
      </div>
    </section>
  );
}
