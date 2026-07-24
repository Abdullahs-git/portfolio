"use client";

export default function Arsenal() {
  const skills = ["Next.js", "PyTorch", "React", "TypeScript", "Node.js", "Python", "WebGL", "GSAP"];
  
  return (
    <section id="arsenal" className="py-32 px-4 md:px-12 border-t border-[#222] overflow-hidden">
      <div className="w-full flex whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity duration-500">
        <div className="animate-marquee inline-block font-syne text-[8vw] font-black uppercase tracking-tighter text-outline">
          {skills.map(s => <span key={s} className="mx-8">{s}</span>)}
          {skills.map(s => <span key={s + "2"} className="mx-8">{s}</span>)}
        </div>
      </div>
    </section>
  );
}
