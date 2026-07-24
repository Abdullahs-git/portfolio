"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Locations() {
  const locRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!locRef.current) return;
    
    gsap.fromTo(locRef.current.querySelectorAll('.loc-item'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: locRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section id="locations" className="py-32 px-4 md:px-12 border-t border-[#222]">
      <div ref={locRef} className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="loc-item w-full md:w-1/2">
          <h2 className="text-[6vw] leading-[0.8] font-syne font-extrabold uppercase tracking-tighter">
            London
          </h2>
          <p className="mt-6 font-manrope text-[#888] text-lg uppercase tracking-widest">Base of Operations (Huzzle.com)</p>
        </div>
        <div className="loc-item w-full md:w-1/2 md:text-right">
          <h2 className="text-[6vw] leading-[0.8] font-syne font-extrabold uppercase tracking-tighter">
            Pakistan
          </h2>
          <p className="mt-6 font-manrope text-[#888] text-lg uppercase tracking-widest">Dev Hub (MAQ Enterprises)</p>
        </div>
      </div>
    </section>
  );
}
