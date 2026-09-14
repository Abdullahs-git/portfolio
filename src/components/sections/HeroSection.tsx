'use client';
import { motion } from 'framer-motion';
import { CONTENT } from '@/data/content';
import { ArrowDown, Download } from 'lucide-react';

const ease = [0.25, 0, 0.1, 1] as [number, number, number, number];

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-16 pt-20 pb-12 bg-white overflow-hidden">
      {/* Top Status Badge & Meta */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
        className="max-w-[1400px] mx-auto w-full flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-gray-100 pb-4"
      >
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-black animate-pulse" />
          <span className="font-mono text-[10px] tracking-wider uppercase text-black font-semibold">
            {CONTENT.hero.status}
          </span>
        </div>
        <span className="font-mono text-[10px] tracking-wider uppercase text-gray-500 font-medium">
          RESEARCHER &middot; FULL-STACK AI ENGINEER
        </span>
      </motion.div>

      {/* Center — Massive Typography & Identity */}
      <div className="flex-1 flex flex-col justify-center my-12 md:my-16">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="font-mono text-[11px] md:text-xs tracking-widest uppercase text-gray-500 mb-4 font-medium"
          >
            MUHAMMAD ABDULLAH BUTT
          </motion.p>

          <motion.h1
            className="text-display-xl font-black tracking-tightest text-black leading-[0.85] uppercase"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease }}
          >
            {CONTENT.hero.line1}
          </motion.h1>
          <motion.h1
            className="text-display-xl font-black tracking-tightest leading-[0.85] uppercase text-metallic mt-1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease }}
          >
            {CONTENT.hero.line2}
          </motion.h1>

          {/* One-line philosophy quote callout */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease }}
            className="font-sans text-sm md:text-base text-gray-700 tracking-wide mt-8 max-w-2xl border-l-2 border-black pl-4 leading-relaxed italic"
          >
            &ldquo;{CONTENT.quote.text}&rdquo;
          </motion.p>

          {/* Download CV CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="/Muhammad_Abdullah_Butt_CV.pdf"
              download="Muhammad_Abdullah_Butt_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-mono text-xs tracking-wider uppercase font-semibold hover:bg-gray-800 transition-colors shadow-sm rounded-none"
              aria-label="Download Curriculum Vitae PDF"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD UPDATED CV</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar — Summary & Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8, ease }}
        className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-6 border-t border-gray-200"
      >
        <p className="font-sans text-sm md:text-base text-gray-700 max-w-xl leading-relaxed font-normal">
          {CONTENT.hero.summary}
        </p>

        <motion.a
          href="#research"
          className="flex items-center gap-3 text-gray-500 hover:text-black transition-colors duration-500 group cursor-pointer"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Scroll down to research section"
        >
          <span className="font-mono text-[10px] tracking-wider uppercase font-medium">Scroll to Research</span>
          <ArrowDown className="w-4 h-4 text-black group-hover:translate-y-0.5 transition-transform" />
        </motion.a>
      </motion.div>
    </section>
  );
};
