"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Publications() {
  const pubRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pubRef.current) return;
    
    gsap.fromTo(pubRef.current.querySelectorAll('.pub-card'),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: pubRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  const publications = [
    {
      title: "MAPF-Lite: A Parameter-Efficient Multimodal Framework for High-Fidelity Deepfake Detection",
      venue: "FLINS-ISKE Journal, 2026 (Published)",
      role: "Sole architect and lead researcher",
      bullets: [
        "Achieved 99.34% accuracy and 99.84% AUC on FakeAVCeleb; 99.40% cross-dataset accuracy on DeepfakeTIMIT.",
        "Reduced trainable parameters by 99.6% to 0.566M using frozen CLIP/Whisper backbones.",
        "Integrated explainable-AI (XAI) modules with visual heatmaps for forensic transparency."
      ]
    },
    {
      title: "Machine Learning and Knowledge Engineering for Decision Making",
      venue: "Springer Nature (FLINS-ISKE 2026, Sydney)",
      role: "Contributing author",
      bullets: [
        "Research findings from the MAPF-Lite deepfake detection framework included in the conference proceedings volume, Part III."
      ]
    },
    {
      title: "Deepfake Detection in the Multimodal Era: Techniques & Open Challenges",
      venue: "Review Paper (In Preparation)",
      role: "Lead author",
      bullets: [
        "Systematic review surveying multimodal deepfake detection techniques, parameter-efficient architectures, and benchmark datasets."
      ]
    }
  ];

  return (
    <section id="publications" className="py-32 px-4 md:px-12 border-t border-[#222] bg-[#030303]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        <div className="w-full md:w-1/3 sticky top-32">
          <h2 className="text-[5vw] leading-[0.8] font-syne font-extrabold uppercase tracking-tighter text-outline opacity-50">
            03 <br/> Research
          </h2>
        </div>
        
        <div ref={pubRef} className="w-full md:w-2/3 space-y-12">
          {publications.map((pub, idx) => (
            <div key={idx} className="pub-card group border-b border-[#222] pb-8">
              <h3 className="text-2xl md:text-3xl font-syne font-bold uppercase tracking-tight mb-2 group-hover:text-[#06b6d4] transition-colors">
                {pub.title}
              </h3>
              <div className="text-sm font-manrope font-bold uppercase tracking-widest text-[#555] mb-6">
                {pub.venue} • <span className="text-[#888]">{pub.role}</span>
              </div>
              <ul className="font-manrope text-[#aaa] text-base leading-relaxed space-y-3">
                {pub.bullets.map((b, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#06b6d4] mr-3 mt-1">▹</span> {b}
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
