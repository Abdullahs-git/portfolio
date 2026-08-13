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
      title: "Estabraq.exe",
      category: "Fashion Ecommerce Platform",
      desc: "Live production platform delivering sub-2-second load times. GraphQL APIs combined with Redis caching successfully reduced latency by 30%. Automated Docker CI/CD environments cut release cycles by 25%. A React Native mobile companion application is currently in progress.",
      stack: "Next.js • App Router • TypeScript • Supabase • Prisma ORM • GraphQL • Redis",
      link: "https://estabraq.pk"
    },
    {
      title: "MyPDFMate.app",
      category: "PDF SaaS",
      desc: "Live production SaaS engineered for advanced PDF processing and AI powered document workflows. Implemented AI driven document analysis and complex transformation pipelines wrapped in a clean, highly optimized interface designed for rapid conversion.",
      stack: "Next.js • FastAPI • AI Processing",
      link: "https://mypdfmate.com"
    },
    {
      title: "Khushi_Motors.sys",
      category: "Automotive Marketplace",
      desc: "Live automotive marketplace providing a comprehensive product catalogue, dynamic filtering systems, and robust inquiry management. Features production grade search, detailed categories, and secure lead capture functionality.",
      stack: "Next.js • Full Stack",
      link: "https://khushimotors.com"
    },
    {
      title: "DeployGenius.sh",
      category: "AI Chatbot SaaS",
      desc: "Multi tenant AI SaaS utilizing precise RAG grounding and multi session agentic workflows. Managed complete Stripe subscription lifecycles including tiered pricing, secure webhooks, and seamless checkouts, optimizing API costs by 25% via token consumption tuning.",
      stack: "FastAPI • LangChain • OpenAI GPT-4 • Next.js 14 • Redis • PostgreSQL • Stripe"
    },
    {
      title: "LingumedAI.py",
      category: "Clinical AI for Nurses",
      desc: "AI clinical assistant providing real time diagnostic guidance and complex drug interaction checks. Built a domain specific RAG pipeline across medical literature ensuring hallucination resistant responses. Includes stringent role based access control and detailed audit logging for compliance.",
      stack: "React • FastAPI • LangChain • RAG • pgvector • OpenAI API"
    },
    {
      title: "ForexAI.apk",
      category: "Mobile Trading & Prediction App",
      desc: "Forex education application featuring powerful AI market prediction algorithms. Fine tuned an advanced XGBoost and Kronos AI ensemble against massive sets of historical price data. Pairs an interactive in app learning curriculum with real time live prediction signals.",
      stack: "React Native • XGBoost • Kronos AI • Python"
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
        end: "+=4000",
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
      
      <div className="absolute top-8 left-4 md:left-12 z-20 os-window p-2 bg-os-panel border border-os-primary shadow-xl">
        <div className="flex items-center gap-2 text-os-primary font-bold">
          <Folder className="w-4 h-4" />
          <span>/home/abdullah/live_projects</span>
        </div>
      </div>

      <div ref={scrollWrapperRef} className="flex h-full w-[600vw]">
        {projects.map((proj, idx) => (
          <div 
            key={idx} 
            className="project-panel w-screen h-full flex flex-col justify-center px-4 md:px-32 relative"
          >
            <div className="relative z-10 max-w-4xl os-window p-6 md:p-10 bg-os-panel shadow-2xl">
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
                  <FileCode className="w-8 h-8 md:w-12 md:h-12 text-os-primary shrink-0" />
                  <span className="break-words">{proj.title}</span>
                </h3>
                
                <div className="text-xs md:text-sm uppercase tracking-widest text-os-muted mb-6 border-b border-os-border pb-4">
                  <span className="text-os-secondary font-bold mr-2">STACK:</span>
                  {proj.stack}
                </div>

                <div className="text-sm md:text-base text-os-muted leading-relaxed max-w-2xl border-l-2 border-os-primary pl-4 py-2 bg-black/50">
                  <span className="text-os-primary font-bold mr-2">LOG:</span>
                  {proj.desc}
                </div>
                
                {proj.link ? (
                  <a href={proj.link} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:text-os-bg hover:bg-os-primary transition-colors border border-os-primary px-6 py-3 cursor-pointer">
                    <span>./launch_production_build.sh</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <button className="mt-10 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-os-muted border border-os-border px-6 py-3 cursor-not-allowed">
                    <span>./launch_production_build.sh (RESTRICTED)</span>
                  </button>
                )}
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
