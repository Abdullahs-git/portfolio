"use client";

export default function Education() {
  return (
    <section id="education" className="py-32 px-4 md:px-12 border-t border-[#222]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[5vw] leading-[0.8] font-syne font-extrabold uppercase tracking-tighter text-outline opacity-50 mb-16">
          05 Education
        </h2>
        
        <div className="border-t border-b border-[#222] py-12 flex flex-col md:flex-row justify-between items-start md:items-center group hover:bg-[#111] transition-colors -mx-4 px-4">
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-syne font-bold uppercase tracking-tight group-hover:text-[#06b6d4] transition-colors">
              Bachelor of Science in Computer Science
            </h3>
            <p className="font-manrope text-[#888] text-lg mt-4 leading-relaxed">
              <strong>GIFT University</strong> (2022-2026). Migrated from University of Sialkot. 
              Thesis: MAPF-Lite deepfake detection framework, published at FLINS-ISKE 2026.
            </p>
          </div>
          <div className="mt-8 md:mt-0 font-syne text-6xl md:text-8xl font-black text-outline opacity-30 group-hover:opacity-100 transition-opacity">
            2026
          </div>
        </div>
      </div>
    </section>
  );
}
