"use client";

import { Terminal } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-32 px-4 md:px-12 border-t border-os-border bg-os-bg font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="os-window p-2 bg-os-panel border border-os-primary mb-12 inline-block">
          <div className="flex items-center gap-2 text-os-primary font-bold">
            <Terminal className="w-4 h-4" />
            <span>cat education.sys</span>
          </div>
        </div>
        
        <div className="os-window p-8 bg-os-panel border border-os-border hover:border-os-primary transition-colors flex flex-col md:flex-row justify-between items-start md:items-center group">
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight group-hover:text-os-primary transition-colors text-os-text">
              Bachelor of Science in Computer Science
            </h3>
            <div className="text-xs uppercase tracking-widest text-os-secondary mt-2 mb-4">
              GIFT University, Gujranwala, Pakistan (2022-2026)
            </div>
            <div className="text-sm text-os-muted leading-relaxed border-l-2 border-os-primary pl-4 bg-black/50 py-2">
              <span className="text-os-primary font-bold mr-2">THESIS:</span>
              MAPF Lite published at FLINS ISKE 2026 and officially included in the Springer Nature proceedings volume.
            </div>
          </div>
          <div className="mt-8 md:mt-0 font-black text-5xl md:text-7xl text-os-bg text-outline-os group-hover:text-os-primary transition-colors">
            2026
          </div>
        </div>
      </div>
    </section>
  );
}
