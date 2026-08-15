'use client';
import { CONTENT } from '@/data/content';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatCounter } from '@/components/ui/StatCounter';
import { BentoCard } from '@/components/ui/BentoCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ArrowRight, BookOpen } from 'lucide-react';

export const ResearchSection = () => {
  return (
    <section id="research" className="relative w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="2" title="Research" />

        <div className="mt-12 md:mt-24">
          <Reveal width="100%">
            <BentoCard className="w-full flex flex-col lg:flex-row gap-12 lg:gap-16 !p-8 md:!p-12 lg:!p-16 border-t-8 border-t-accent-secondary" accentColor="secondary">
              
              {/* Content */}
              <div className="w-full flex flex-col justify-center">
                {CONTENT.publications.map((pub, idx) => (
                  <div key={idx} className="mb-12 last:mb-0">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-primary"></span>
                      </span>
                      <span className="font-body font-bold text-[11px] text-accent-primary uppercase tracking-widest">
                        {pub.venue}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-2xl md:text-4xl font-black text-text-primary tracking-tight leading-[1.1] mb-2">
                      {pub.title}
                    </h3>
                    <p className="font-mono text-sm text-text-primary font-bold mb-6">{pub.role}</p>
                    
                    <ul className="list-disc pl-5 font-body text-base md:text-lg text-text-muted leading-relaxed font-medium mb-8 space-y-2 marker:text-accent-secondary">
                      {pub.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>

                    {pub.links.length > 0 && (
                      <div className="flex flex-wrap gap-4">
                        {pub.links.map((link, i) => (
                          <MagneticButton key={i} as="a" href={link.url} target="_blank" variant={i === 0 ? "secondary" : "outline"} icon={<BookOpen className="w-4 h-4" />}>
                            {link.label}
                          </MagneticButton>
                        ))}
                      </div>
                    )}
                    
                    {idx !== CONTENT.publications.length - 1 && (
                      <div className="w-full h-[3px] bg-text-primary/10 my-12 rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>

            </BentoCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
