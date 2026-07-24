"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-4 md:px-12 pt-32 pb-12">
      <div className="w-full mx-auto relative z-10 flex flex-col items-start">
        
        {/* Massive Typography */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full"
        >
          <div className="reveal-mask w-full">
            <motion.h1 
              variants={item}
              className="text-[12vw] leading-[0.85] font-syne font-extrabold uppercase tracking-tighter text-[#fafafa] m-0"
            >
              MUHAMMAD
            </motion.h1>
          </div>
          
          <div className="reveal-mask w-full">
            <motion.h1 
              variants={item}
              className="text-[12vw] leading-[0.85] font-syne font-extrabold uppercase tracking-tighter text-[#fafafa] m-0"
            >
              ABDULLAH BUTT
            </motion.h1>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mt-12 md:mt-16 gap-8">
            <div className="reveal-mask">
              <motion.div variants={item} className="flex gap-4">
                <a href="#projects" className="font-manrope text-sm font-semibold tracking-wide uppercase border border-[#333] px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
                  Featured Works
                </a>
                <a href="#contact" className="font-manrope text-sm font-semibold tracking-wide uppercase px-6 py-3 hover:text-[#888] transition-colors duration-300">
                  Get in touch
                </a>
              </motion.div>
            </div>

            <div className="reveal-mask max-w-sm text-right">
              <motion.p variants={item} className="font-manrope text-sm md:text-base text-[#888] leading-relaxed">
                Senior Full-Stack AI Engineer & UI/UX Architect based in London & Pakistan. Specializing in MAPF-Lite research and high-performance multimodal AI systems.
              </motion.p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
