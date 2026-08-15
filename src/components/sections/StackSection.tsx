'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { CONTENT } from '@/data/content';
import { cn } from '@/lib/utils';
import { BentoCard } from '@/components/ui/BentoCard';

export const StackSection = () => {
  const categories = Object.keys(CONTENT.stack);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const activeTechs = CONTENT.stack[activeCategory as keyof typeof CONTENT.stack] || [];

  return (
    <section id="stack" className="relative w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading number="5" title="Stack" />

        {/* Category Tabs */}
        <Reveal delay={0.1} width="100%">
          <div className="flex flex-wrap gap-3 mt-12 md:mt-20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'font-body font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full border-2 transition-all duration-300 shadow-sm',
                  activeCategory === category
                    ? 'bg-accent-secondary text-white border-accent-secondary shadow-glow-secondary'
                    : 'bg-white border-glass-border text-text-muted hover:border-accent-secondary/50 hover:text-text-primary hover:shadow-card'
                )}
                data-cursor="hover"
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Tech Items Grid */}
        <div className="mt-10 md:mt-14 min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
            >
              {activeTechs.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: i * 0.04,
                    duration: 0.4,
                    type: 'spring',
                  }}
                  className="group"
                >
                  <BentoCard className="flex flex-col items-center justify-center gap-4 text-center h-full !p-6" hover={true} accentColor="secondary">
                    {/* Icon placeholder (bubble) */}
                    <div className="w-12 h-12 rounded-full bg-bg-base flex items-center justify-center group-hover:bg-accent-secondary transition-colors duration-300">
                      <span className="font-display text-lg font-bold text-accent-secondary group-hover:text-white transition-colors duration-300">
                        {tech.slice(0, 1)}
                      </span>
                    </div>
                    <span className="font-body font-bold text-xs text-text-primary">
                      {tech}
                    </span>
                  </BentoCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative large orbit rings (Umami Land style) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0 opacity-40 hidden lg:block">
        <div className="absolute inset-0 border-[40px] border-accent-tertiary/20 rounded-full mix-blend-multiply" style={{ animation: 'pulse-soft 6s infinite alternate' }} />
        <div className="absolute inset-[100px] border-[20px] border-accent-primary/10 rounded-full mix-blend-multiply" style={{ animation: 'pulse-soft 8s infinite alternate-reverse' }} />
      </div>
    </section>
  );
};
