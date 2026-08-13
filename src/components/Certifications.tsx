"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const certs = [
    { title: "OCI Certified Generative AI Professional", issuer: "Oracle", year: "2025" },
    { title: "OCI Certified AI Foundations Associate", issuer: "Oracle", year: "2025" },
    { title: "Agentic AI Expert", issuer: "IBM", year: "2024" },
    { title: "Build RAG Applications", issuer: "IBM", year: "2026" },
    { title: "NLP and Computer Vision Specialist", issuer: "IBM", year: "2024" },
    { title: "Generative AI: Language Modeling", issuer: "IBM", year: "2024" },
    { title: "Advanced React", issuer: "Meta", year: "2024" },
    { title: "Machine Learning Using Python", issuer: "IBM", year: "2023" }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    
    gsap.fromTo(sectionRef.current.querySelectorAll('.cert-row'),
      { scaleX: 0, transformOrigin: "left" },
      {
        scaleX: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="py-32 px-4 md:px-12 border-t border-os-border bg-os-bg font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="os-window p-2 bg-os-panel border border-os-primary mb-12 inline-block">
          <div className="flex items-center gap-2 text-os-primary font-bold">
            <Terminal className="w-4 h-4" />
            <span>cat credentials.sys</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4">
          {certs.map((cert, idx) => (
            <div key={idx} className="relative group overflow-hidden border-b border-os-border py-4 flex justify-between items-center cursor-default bg-os-panel px-4">
              <div className="cert-row absolute inset-0 bg-os-primary z-0 opacity-10" style={{ transform: 'scaleX(0)' }} />
              
              <div className="relative z-10 text-sm md:text-base font-bold uppercase tracking-tight text-os-text group-hover:text-os-primary transition-colors">
                <span className="text-os-primary mr-2">&gt;</span>{cert.title}
              </div>
              <div className="relative z-10 flex gap-4 text-xs font-bold uppercase tracking-widest text-os-muted">
                <span>{cert.issuer}</span>
                <span>[{cert.year}]</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
