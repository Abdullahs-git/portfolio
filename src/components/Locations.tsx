"use client";

export default function Locations() {
  return (
    <section id="locations" className="py-32 px-4 md:px-12 border-t border-[#222]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="w-full md:w-1/2">
          <h2 className="text-[6vw] leading-[0.8] font-syne font-extrabold uppercase tracking-tighter">
            London
          </h2>
          <p className="mt-6 font-manrope text-[#888] text-lg uppercase tracking-widest">Base of Operations</p>
        </div>
        <div className="w-full md:w-1/2 md:text-right">
          <h2 className="text-[6vw] leading-[0.8] font-syne font-extrabold uppercase tracking-tighter">
            Pakistan
          </h2>
          <p className="mt-6 font-manrope text-[#888] text-lg uppercase tracking-widest">Research & Dev Hub</p>
        </div>
      </div>
    </section>
  );
}
