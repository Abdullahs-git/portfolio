"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Text Scramble Effect
    const chars = "!<>-_\\\\/[]{}—=+*^?#________";
    const element = titleRef.current;
    if (!element) return;
    
    const originalText = element.innerText;
    let iteration = 0;
    
    const interval = setInterval(() => {
      element.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) return originalText[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
        
      if (iteration >= originalText.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: "120%", opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { ease: [0.16, 1, 0.3, 1], duration: 1.2 }
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-4 md:px-12 pt-32 pb-12 overflow-hidden">
      <div className="w-full mx-auto relative z-10 flex flex-col items-start">
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full"
        >
          <div className="reveal-mask w-full">
            <motion.h1 
              variants={item}
              className="text-[9vw] leading-[0.85] font-syne font-extrabold uppercase tracking-tighter text-[#fafafa] m-0"
            >
              MUHAMMAD
            </motion.h1>
          </div>
          
          <div className="reveal-mask w-full">
            <motion.h1 
              variants={item}
              className="text-[9vw] leading-[0.85] font-syne font-extrabold uppercase tracking-tighter text-[#fafafa] m-0"
            >
              ABDULLAH BUTT
            </motion.h1>
          </div>
          
          <div className="reveal-mask w-full mt-4">
            <motion.h2 
              ref={titleRef}
              variants={item}
              className="text-2xl md:text-4xl font-syne font-bold text-[#888] uppercase tracking-widest"
            >
              Senior Full-Stack AI Engineer & Researcher
            </motion.h2>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mt-12 md:mt-24 gap-8">
            <div className="reveal-mask">
              <motion.div variants={item} className="flex gap-4">
                <a href="#projects" className="font-manrope text-sm font-semibold tracking-wide uppercase border border-[#333] px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300">
                  Selected Works
                </a>
                <a href="#publications" className="font-manrope text-sm font-semibold tracking-wide uppercase px-6 py-3 hover:text-[#888] transition-colors duration-300">
                  Research (MAPF-Lite)
                </a>
              </motion.div>
            </div>

            <div className="reveal-mask max-w-md text-right">
              <motion.p variants={item} className="font-manrope text-sm md:text-base text-[#888] leading-relaxed">
                Based in London (Huzzle.com) & Pakistan (MAQ Enterprises). Specializing in MAPF-Lite research (FLINS-ISKE 2026), RAG pipelines, and high-performance React architectures.
              </motion.p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
