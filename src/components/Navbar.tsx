'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.25, 0, 0.1, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-editorial ${
          scrolled || mobileMenuOpen
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
          {/* Left */}
          <a href="#" className="font-mono text-[10px] tracking-wider text-black uppercase">
            <span className="font-medium">[MUHAMMAD ABDULLAH BUTT]</span>
            <span className="text-gray-400 hidden sm:inline"> — PORTFOLIO &apos;26</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-[10px] tracking-wider text-gray-500 uppercase hover:text-black transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Desktop Info */}
          <div className="hidden md:flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-wider text-gray-400 uppercase">
              STATUS: <span className="text-black font-semibold">AVAILABLE</span>
            </span>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black hover:text-gray-600 transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Drawer (Brutalist Overlay) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.25, 0, 0.1, 1] }}
            className="fixed inset-x-0 top-14 z-40 bg-white border-b border-gray-200 px-6 py-8 flex flex-col gap-6 md:hidden shadow-lg"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 border-b border-gray-100 font-mono text-xs uppercase tracking-wider text-black hover:text-gray-500 transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-gray-400 text-[10px]">0{idx + 1}</span>
                </a>
              ))}
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-gray-100 font-mono text-[10px] tracking-wider uppercase text-gray-400">
              <span>STATUS</span>
              <span className="text-black font-medium">AVAILABLE / REMOTE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
