'use client';
import { motion } from 'framer-motion';
import { CONTENT } from '@/data/content';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BentoCard } from '@/components/ui/BentoCard';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative w-full py-32 md:py-48 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="3" title="Experience" />

        <div className="mt-16 md:mt-32 relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-[50%] top-0 bottom-0 w-2 bg-text-primary rounded-full -translate-x-1/2">
            <motion.div
              className="absolute top-0 w-full bg-accent-primary rounded-full origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              style={{ bottom: 0 }}
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {CONTENT.experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="flex flex-col md:flex-row w-full group relative">
                  
                  {/* Center Node (Bubble) */}
                  <div className="absolute left-[28px] md:left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-accent-tertiary border-[4px] border-text-primary flex items-center justify-center z-20 transition-transform duration-500 group-hover:scale-125 shadow-[2px_2px_0px_#121826]">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-ping-slow" />
                  </div>

                  {/* Company Details (Opposite side of card on desktop) */}
                  <div className={`hidden md:block w-1/2 pt-4 ${!isEven ? 'pr-12 lg:pr-16 order-1 text-right' : 'pl-12 lg:pl-16 order-2 text-left'}`}>
                    <Reveal width="100%" delay={0.2}>
                      <div className={`flex flex-col ${!isEven ? 'items-end' : 'items-start'}`}>
                        <span className="font-display font-black text-2xl text-text-primary tracking-tight">
                          {exp.company}
                        </span>
                        <span className="font-mono text-sm text-accent-primary mt-1 font-semibold uppercase tracking-widest">
                          {exp.duration}
                        </span>
                      </div>
                    </Reveal>
                  </div>

                  {/* Card Content */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-12 lg:pr-16 order-1 text-left' : 'md:pl-12 lg:pl-16 order-2 text-left'}`}>
                    <Reveal width="100%">
                      <BentoCard 
                        className="!p-8"
                        accentColor="primary"
                      >
                        <div className="md:hidden flex flex-col mb-6 text-left">
                          <span className="font-display font-black text-2xl text-text-primary tracking-tight">
                            {exp.company}
                          </span>
                          <span className="font-mono text-[11px] text-accent-primary mt-1 font-semibold uppercase tracking-widest">
                            {exp.duration}
                          </span>
                        </div>

                        <div className="flex flex-col items-start text-left mb-6">
                          <h4 className="font-display text-xl font-bold text-text-primary">{exp.role}</h4>
                        </div>

                        <ul className="flex flex-col gap-3 font-body text-sm text-text-muted leading-relaxed font-medium items-start text-left">
                          {exp.achievements.map((ach, i) => (
                            <li key={i} className="flex gap-3 max-w-lg">
                              <span className="text-accent-primary font-bold mt-0.5">›</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </BentoCard>
                    </Reveal>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
