"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-4 md:px-12 border-t border-[#222]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        <h2 className="text-4xl md:text-5xl font-syne font-bold uppercase tracking-tighter w-full md:w-1/3">
          The <br/> Architecture
        </h2>
        
        <div className="w-full md:w-2/3 space-y-8 font-manrope text-[#aaa] text-lg md:text-xl leading-relaxed">
          <p>
            I am a Senior Full-Stack AI Engineer and Architect based in London & Pakistan. My expertise lies at the intersection of complex algorithmic research (like Multi-Agent Pathfinding) and high-performance, scalable web infrastructure.
          </p>
          <p>
            With over 3 years of enterprise experience, I specialize in bridging the gap between deep learning models and consumer-facing applications, utilizing technologies ranging from PyTorch and CUDA to Next.js and WebGL.
          </p>
          
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#222]">
            <div>
              <div className="text-4xl font-syne font-bold text-white mb-2">3+</div>
              <div className="text-sm uppercase tracking-wide">Years Exp</div>
            </div>
            <div>
              <div className="text-4xl font-syne font-bold text-white mb-2">99%</div>
              <div className="text-sm uppercase tracking-wide">MAPF Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-syne font-bold text-white mb-2">8+</div>
              <div className="text-sm uppercase tracking-wide">Certifications</div>
            </div>
            <div>
              <div className="text-4xl font-syne font-bold text-white mb-2">2</div>
              <div className="text-sm uppercase tracking-wide">Locations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
