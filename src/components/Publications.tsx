"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal, Shield, FileText } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Publications() {
  const pubRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pubRef.current) return;
    
    gsap.fromTo(pubRef.current.querySelectorAll('.pub-card'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: pubRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section id="publications" className="py-32 px-4 md:px-12 border-t border-os-border bg-os-bg relative overflow-hidden font-mono">
      <div className="absolute inset-0 scanline-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        <div className="w-full md:w-1/3 sticky top-32 os-window p-4 bg-os-panel border border-os-primary">
          <div className="flex items-center gap-2 text-os-primary font-bold border-b border-os-border pb-2 mb-2">
            <Terminal className="w-4 h-4" />
            <span>ls -l /research</span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,5rem)] leading-[1] font-black uppercase tracking-tighter text-os-muted opacity-50 mt-4">
            02 <br/> RESEARCH
          </h2>
        </div>
        
        <div ref={pubRef} className="w-full md:w-2/3 space-y-12">
          
          <div className="pub-card os-window p-6 bg-os-panel border border-os-border">
            <div className="os-header mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-os-text font-bold">
                <Shield className="w-4 h-4 text-os-primary" />
                <span>MAPF_LITE.pdf</span>
              </div>
              <span className="text-xs text-os-primary">[PUBLISHED]</span>
            </div>
            
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-os-text mb-2">
              MAPF Lite: A Parameter Efficient Multimodal Framework for High Fidelity Deepfake Detection
            </h3>
            
            <div className="text-xs font-bold uppercase tracking-widest text-os-secondary mb-6 border-b border-os-border pb-4">
              FLINS ISKE 2026 (Published) • Springer Nature Proceedings Volume • Sole Architect & Lead Researcher
            </div>
            
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-xs md:text-sm">
              <div className="flex justify-between border-b border-os-border pb-1">
                <span className="text-os-muted">Accuracy on FakeAVCeleb:</span>
                <span className="text-os-primary font-bold">99.34%</span>
              </div>
              <div className="flex justify-between border-b border-os-border pb-1">
                <span className="text-os-muted">AUC on FakeAVCeleb:</span>
                <span className="text-os-primary font-bold">99.84%</span>
              </div>
              <div className="flex justify-between border-b border-os-border pb-1">
                <span className="text-os-muted">Cross dataset accuracy:</span>
                <span className="text-os-primary font-bold">99.40% (Zero-shot)</span>
              </div>
              <div className="flex justify-between border-b border-os-border pb-1">
                <span className="text-os-muted">Trainable Parameters:</span>
                <span className="text-os-primary font-bold">0.566M (↓99.6%)</span>
              </div>
              <div className="flex justify-between border-b border-os-border pb-1">
                <span className="text-os-muted">Inference Speed:</span>
                <span className="text-os-primary font-bold">4.7x real time</span>
              </div>
              <div className="flex justify-between border-b border-os-border pb-1">
                <span className="text-os-muted">Peak Memory:</span>
                <span className="text-os-primary font-bold">1.1 GB (Edge ready)</span>
              </div>
            </div>
            
            <div className="text-sm text-os-muted leading-relaxed bg-black/50 p-4 border-l-2 border-os-primary">
              <strong className="text-os-primary">Architecture:</strong> Frozen CLIP + Whisper backbones, Forgery Signature Gate, SRM/DCT Analysis, Method Aware Dynamic Prompting, XAI heatmaps. Outperformed AAAI 2025 state of the art (4.4M params) using 99.6% fewer parameters.
            </div>
          </div>

          <div className="pub-card os-window p-6 bg-os-panel border border-os-border">
            <div className="os-header mb-4 flex items-center justify-between bg-os-border">
              <div className="flex items-center gap-2 text-os-text font-bold">
                <FileText className="w-4 h-4 text-os-secondary" />
                <span>SYSTEMATIC_REVIEW.draft</span>
              </div>
              <span className="text-xs text-os-secondary">[IN_PREPARATION]</span>
            </div>
            
            <h3 className="text-xl font-black uppercase tracking-tight text-os-text mb-2">
              Deepfake Detection in the Multimodal Era: A Systematic Review
            </h3>
            
            <div className="text-xs font-bold uppercase tracking-widest text-os-secondary mb-4 border-b border-os-border pb-4">
              Lead author
            </div>
            
            <div className="text-sm text-os-muted leading-relaxed">
              <span className="text-os-secondary mr-2">&gt;</span>
              Surveys multimodal deepfake detection techniques, parameter efficient architectures, and benchmark datasets, extending MAPF Lite findings.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
