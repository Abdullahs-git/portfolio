"use client";

import { motion } from "framer-motion";
import { Command } from "lucide-react";

export default function Navbar({ onOpenCommandPalette }: { onOpenCommandPalette: () => void }) {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-auto"
    >
      <div className="text-xl font-syne font-bold uppercase tracking-tight text-[#fafafa]">
        Abdullah.
      </div>

      <div className="hidden md:flex gap-8 items-center text-sm font-manrope font-semibold uppercase tracking-wider text-[#fafafa]">
        <a href="#about" className="hover:text-[#888] transition-colors">About</a>
        <a href="#projects" className="hover:text-[#888] transition-colors">Work</a>
        <a href="#publications" className="hover:text-[#888] transition-colors">Research</a>
      </div>

      <button
        onClick={onOpenCommandPalette}
        className="flex items-center gap-2 text-sm font-manrope font-semibold uppercase tracking-wider text-[#fafafa] hover:text-[#888] transition-colors"
      >
        <span>Menu</span>
        <Command className="w-4 h-4" />
      </button>
    </motion.nav>
  );
}
