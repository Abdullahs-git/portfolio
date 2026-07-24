"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <section id="certifications" ref={sectionRef} className="py-32 px-4 md:px-12 border-t border-[#222]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[5vw] leading-[0.8] font-syne font-extrabold uppercase tracking-tighter text-outline opacity-50 mb-16">
          04 Credentials
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4">
          {certs.map((cert, idx) => (
            <div key={idx} className="relative group overflow-hidden border-b border-[#222] py-6 flex justify-between items-center cursor-default">
              <div className="cert-row absolute inset-0 bg-[#111] z-0 -mx-4" style={{ scaleX: 0 }} />
              
              <div className="relative z-10 font-syne text-lg md:text-xl uppercase tracking-tight group-hover:text-[#06b6d4] transition-colors">
                {cert.title}
              </div>
              <div className="relative z-10 flex gap-4 font-manrope text-sm font-bold uppercase tracking-widest text-[#555]">
                <span>{cert.issuer}</span>
                <span>{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
