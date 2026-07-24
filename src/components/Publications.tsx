"use client";

import { motion } from "framer-motion";

export default function Publications() {
  return (
    <section id="publications" className="py-32 px-4 md:px-12 border-t border-[#222]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        <h2 className="text-4xl md:text-5xl font-syne font-bold uppercase tracking-tighter w-full md:w-1/3">
          Research
        </h2>
        
        <div className="w-full md:w-2/3 space-y-12">
          <div className="group border-b border-[#222] pb-8">
            <h3 className="text-2xl md:text-3xl font-syne font-bold uppercase tracking-tight mb-4 group-hover:text-[#888] transition-colors">
              MAPF-Lite Algorithm
            </h3>
            <p className="font-manrope text-[#aaa] text-lg leading-relaxed mb-6">
              Published at FLINS-ISKE 2026. Achieved 99.34% accuracy with only 0.566M parameters, drastically reducing the computational overhead for multi-agent pathfinding in dense environments.
            </p>
            <a href="#" className="inline-block font-manrope text-sm font-bold tracking-widest uppercase border-b border-white pb-1 hover:text-[#888] hover:border-[#888] transition-colors">
              Read Paper
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
