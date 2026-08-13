"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal, MapPin, Globe, Languages, Trophy, Microscope, Briefcase, Rocket, Package } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const experience = [
    {
      role: "Founder",
      company: "Neural Stack | Pakistan",
      date: "2026 - Present",
      bullets: [
        "Directing technical strategy, enterprise architecture, and advanced system design blueprints for a premier AI native software engineering agency."
      ]
    },
    {
      role: "Senior Full-Stack AI Engineer",
      company: "Huzzle.com | London, UK (Remote)",
      date: "Mar 2026 - Present",
      bullets: [
        "Building highly scalable AI driven recruitment infrastructure by deeply integrating LLM pipelines with advanced frontend product features for a live, high traffic B2C platform ecosystem."
      ]
    },
    {
      role: "Full Stack Engineer",
      company: "MAQ Enterprises Ltd. | Rawalpindi, Pakistan",
      date: "Jan 2023 - Feb 2026",
      bullets: [
        "Reduced page load time by 40% via comprehensive SSR optimization and strategic code splitting strategies.",
        "Improved complex data retrieval speeds by 35% through meticulous PostgreSQL and MongoDB schema optimization.",
        "Cut release cycle time by 30% deploying robust Jenkins and Docker CI/CD pipelines.",
        "Reduced production bug incidence by 25% using Cypress and Jest testing frameworks, while provisioning infrastructure as code using Terraform."
      ]
    },
    {
      role: "AI Researcher",
      company: "GIFT University | Gujranwala, Pakistan",
      date: "2024 - 2026",
      bullets: [
        "Designed MAPF Lite, published in a prestigious peer reviewed journal and Springer Nature proceedings.",
        "Reduced trainable parameters by 99.6% through PEFT methodologies while strictly maintaining SOTA accuracy.",
        "Achieved a 30% detection latency reduction by developing highly lightweight attention mechanisms suitable for edge deployment scenarios."
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Estabraq (Fashion Brand) | Pakistan",
      date: "2025 - May 2026",
      bullets: [
        "Architected a live fashion ecommerce platform via Next.js App Router, Prisma ORM, and Supabase.",
        "Integrated GraphQL APIs alongside Redis caching and CDN image optimization, successfully reducing latency by 30%.",
        "Fully automated deployments utilizing Docker CI/CD frameworks, accelerating release cycles by 25%."
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
            <span>cat profile.txt & experience.log</span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,5rem)] leading-[1] font-black uppercase tracking-tighter text-os-muted opacity-50 mt-4">
            01 <br/> ABOUT & EXP
          </h2>
        </div>
        
        <div ref={textRef} className="w-full md:w-2/3 space-y-12 text-os-muted text-sm md:text-base leading-relaxed">
          
          <div className="experience-block os-window p-6 bg-os-panel border-l-4 border-l-os-secondary">
            <div className="os-header mb-4 flex justify-between items-center bg-os-secondary text-os-bg font-bold">
              <span>sys.about_me</span>
              <span className="text-xs">STATUS: ONLINE</span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 text-xs uppercase tracking-widest text-os-secondary mb-6 border-b border-os-border pb-4">
              <span className="flex items-center gap-2"><MapPin className="w-3 h-3"/> Gujranwala, PK</span>
              <span className="flex items-center gap-2"><Globe className="w-3 h-3"/> Remote Open</span>
              <span className="flex items-center gap-2"><Languages className="w-3 h-3"/> EN: Native</span>
            </div>
            
            <p className="mb-6 text-os-text font-semibold">
              I am a Senior Full Stack AI Engineer and Published AI Researcher with deep production experience building scalable web platforms and LLM powered systems. I ship real products and publish research that consistently outperforms state of the art benchmarks.
            </p>

            <ul className="space-y-3 text-xs md:text-sm">
              <li className="flex items-start gap-3"><Trophy className="w-4 h-4 text-os-primary mt-0.5 shrink-0"/> <span><strong className="text-os-primary">Published Author:</strong> MAPF Lite accepted at FLINS ISKE 2026, included in Springer Nature proceedings volume.</span></li>
              <li className="flex items-start gap-3"><Microscope className="w-4 h-4 text-os-primary mt-0.5 shrink-0"/> <span><strong className="text-os-primary">Research Result:</strong> 99.34% accuracy at 0.566M parameters, outperforming AAAI 2025 benchmarks.</span></li>
              <li className="flex items-start gap-3"><Briefcase className="w-4 h-4 text-os-primary mt-0.5 shrink-0"/> <span><strong className="text-os-primary">Currently:</strong> Senior Full Stack AI Engineer at Huzzle.com (London, UK Remote).</span></li>
              <li className="flex items-start gap-3"><Rocket className="w-4 h-4 text-os-primary mt-0.5 shrink-0"/> <span><strong className="text-os-primary">Founder:</strong> Neural Stack AI native software agency.</span></li>
              <li className="flex items-start gap-3"><Package className="w-4 h-4 text-os-primary mt-0.5 shrink-0"/> <span><strong className="text-os-primary">Shipped:</strong> Live production products across healthcare, fintech, fashion, SaaS, and automotive.</span></li>
            </ul>
          </div>

          <div className="w-full h-px bg-os-border my-8"></div>

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
