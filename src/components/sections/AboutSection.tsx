'use client';
import { motion } from 'framer-motion';
import { CONTENT } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { BentoCard } from '@/components/ui/BentoCard';

export const AboutSection = () => {
  return (
    <section id="about" className="relative w-full py-32 md:py-48 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="1" title="About" />

        <div className="mt-12 md:mt-24 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Left: Cinematic Image inside Bento */}
          <div className="w-full lg:w-5/12 flex-shrink-0 relative">
            <Reveal width="100%">
              <BentoCard className="w-full aspect-[4/5] !p-2" hover={false}>
                <div className="relative w-full h-full rounded-bento-sm overflow-hidden bg-bg-base">
                  <motion.img
                    initial={{ scale: 1.1, filter: 'grayscale(100%) blur(4px)' }}
                    whileInView={{ scale: 1, filter: 'grayscale(0%) blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                    src="/abdullah.jpg"
                    alt="Muhammad Abdullah Butt"
                    className="object-cover w-full h-full object-center"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop';
                    }}
                  />
                  
                  {/* Playful corner accents */}
                  <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-accent-tertiary rounded-tl-xl" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-accent-tertiary rounded-br-xl" />
                </div>
              </BentoCard>
            </Reveal>
          </div>

          {/* Right: Narrative */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center gap-8 md:gap-10 pt-4">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {CONTENT.about.narrative.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p className="font-body text-base md:text-lg text-text-muted leading-relaxed font-medium mb-6">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <blockquote className="border-l-4 border-accent-secondary pl-6 py-2 mt-4 bg-white/50 rounded-r-2xl border border-glass-border border-l-accent-secondary">
                <p className="font-display text-xl md:text-2xl font-bold text-text-primary italic leading-snug">
                  "I don't just write code; I architect systems that solve real human problems at scale."
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Strip - Playful Style */}
      <div className="w-full mt-32 md:mt-48 overflow-hidden bg-accent-tertiary py-6 border-y border-black/10 transform -rotate-2 scale-105">
        <div className="marquee-track flex gap-12 items-center">
          {[...CONTENT.about.credentials, ...CONTENT.about.credentials, ...CONTENT.about.credentials].map((cred, i) => (
            <div key={i} className="flex items-center gap-12 whitespace-nowrap">
              <span className="font-display font-black text-2xl text-text-primary tracking-tight">
                {cred}
              </span>
              <span className="text-accent-primary text-xl font-black">✽</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
