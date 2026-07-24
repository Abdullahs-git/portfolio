"use client";

export default function Education() {
  return (
    <section id="education" className="py-32 px-4 md:px-12 border-t border-[#222]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-syne font-bold uppercase tracking-tighter mb-16">
          Education
        </h2>
        <div className="border-t border-b border-[#222] py-12 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="text-3xl font-syne font-bold uppercase tracking-tight">FAST NUCES</h3>
            <p className="font-manrope text-[#888] text-lg mt-2">B.S. Artificial Intelligence</p>
          </div>
          <div className="mt-4 md:mt-0 font-syne text-5xl font-black text-outline">
            2026
          </div>
        </div>
      </div>
    </section>
  );
}
