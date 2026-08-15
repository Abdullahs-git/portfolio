'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CONTENT } from '@/data/content';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'research', 'experience', 'projects', 'stack', 'credentials', 'contact'];
      let current = 'hero';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'research', label: 'Research' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'stack', label: 'Stack' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Floating Pill Navbar (Desktop) */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div
          className={cn(
            'flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300',
            isScrolled
              ? 'bg-white shadow-[6px_6px_0px_#121826] border-[3px] border-text-primary'
              : 'bg-transparent'
          )}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                'relative px-5 py-2.5 rounded-full font-body font-bold text-[13px] tracking-wide transition-colors',
                activeSection === item.id
                  ? 'text-white'
                  : 'text-text-muted hover:text-text-primary'
              )}
              data-cursor="hover"
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-accent-primary rounded-full z-[-1] border-[3px] border-text-primary shadow-[4px_4px_0px_#121826]"
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>
      </motion.header>

      {/* Mobile Header */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300',
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-glass-border' : 'bg-transparent'
        )}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <span className="font-display font-black text-xl text-text-primary tracking-tighter">
            MAB.
          </span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50 relative"
          >
            <span
              className={cn(
                'w-6 h-0.5 bg-text-primary transition-all duration-300 origin-center',
                mobileMenuOpen && 'rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'w-6 h-0.5 bg-text-primary transition-all duration-300',
                mobileMenuOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'w-6 h-0.5 bg-text-primary transition-all duration-300 origin-center',
                mobileMenuOpen && '-rotate-45 -translate-y-2'
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-base flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    'font-display text-4xl font-black tracking-tighter',
                    activeSection === item.id ? 'text-accent-primary' : 'text-text-primary'
                  )}
                >
                  {item.label}
                </motion.button>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex gap-6"
              >
                <a href={`https://${CONTENT.contact.linkedin}`} target="_blank" className="text-text-primary font-body font-bold">LinkedIn</a>
                <a href={`https://${CONTENT.contact.github}`} target="_blank" className="text-text-primary font-body font-bold">GitHub</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
