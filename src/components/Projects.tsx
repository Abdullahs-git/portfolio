"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Enterprise B2C Cloud",
      category: "Full-Stack AI",
      desc: "Architected a scalable SaaS infrastructure for 1M+ active users, integrating predictive analytics via PyTorch.",
    },
    {
      title: "Quantum Route Optimizer",
      category: "MAPF Algorithms",
      desc: "Developed a distributed route optimizer based on MAPF-Lite, reducing compute time by 40% for logistics fleets.",
    },
    {
      title: "Omni-Channel NLP Pipeline",
      category: "LLM Infrastructure",
      desc: "Built a robust RAG pipeline utilizing massive parallel indexing and custom embeddings for real-time inference.",
    }
  ];

  return (
    <section id="projects" className="py-32 px-4 md:px-12 border-t border-[#222]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[8vw] leading-[0.8] font-syne font-extrabold uppercase tracking-tighter mb-20">
          Selected Works
        </h2>
        
        <div className="flex flex-col border-t border-[#222]">
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-b border-[#222] hover:bg-white hover:text-black transition-colors duration-500 px-4 -mx-4"
            >
              <div className="flex flex-col gap-2">
                <span className="text-sm font-manrope font-bold uppercase tracking-widest text-[#555] group-hover:text-[#888] transition-colors">
                  {proj.category}
                </span>
                <h3 className="text-3xl md:text-5xl font-syne font-bold uppercase tracking-tight">
                  {proj.title}
                </h3>
              </div>
              
              <div className="mt-6 md:mt-0 max-w-sm font-manrope text-sm md:text-base text-[#888] group-hover:text-[#333] transition-colors">
                {proj.desc}
              </div>

              <div className="absolute right-8 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:block">
                <ArrowUpRight className="w-12 h-12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
