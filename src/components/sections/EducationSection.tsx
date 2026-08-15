'use client';
import { CONTENT } from '@/data/content';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BentoCard } from '@/components/ui/BentoCard';

export const EducationSection = () => {
  return (
    <section id="credentials" className="relative w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="6" title="Education" />

        <div className="mt-12 md:mt-24 space-y-8 md:space-y-12">
          
          {/* Education + Achievements Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education Card (larger) */}
            <Reveal width="100%">
              <BentoCard className="h-full !p-8 md:!p-12 flex flex-col justify-center bg-accent-tertiary border-none shadow-[0_20px_48px_rgba(255,200,0,0.15)]" hover={false}>
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-sm rotate-3">
                    🎓
                  </div>
                  <div>
                    <h4 className="font-display text-2xl md:text-4xl font-black text-text-primary tracking-tight">
                      {CONTENT.education[0].degree}
                    </h4>
                    <p className="font-body font-bold text-sm text-text-primary/80 mt-2">
                      {CONTENT.education[0].institution}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-auto pt-6 border-t border-black/10 gap-4">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white font-mono font-bold text-[10px] uppercase tracking-widest text-text-primary shadow-sm">
                    {CONTENT.education[0].dates}
                  </span>
                  <p className="font-body text-sm font-bold text-text-primary/80">
                    Thesis: {CONTENT.education[0].thesis}
                  </p>
                </div>
              </BentoCard>
            </Reveal>

            {/* Achievements */}
            <div className="flex flex-col gap-4">
              <Reveal>
                <h3 className="font-display font-black text-2xl text-text-primary mb-2">
                  Highlights
                </h3>
              </Reveal>
              {CONTENT.achievements.map((achievement, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex items-start gap-4 p-5 rounded-bento-sm bg-white border border-glass-border hover:border-accent-primary/50 hover:shadow-card transition-all group">
                    <div className="w-6 h-6 rounded-full bg-accent-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent-primary transition-colors">
                      <span className="text-accent-primary font-bold text-xs group-hover:text-white transition-colors">✓</span>
                    </div>
                    <p className="font-body text-sm font-medium text-text-primary leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="pt-8">
            <Reveal>
              <h3 className="font-display font-black text-2xl text-text-primary mb-6">
                Certifications
              </h3>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {CONTENT.certifications.map((cert, i) => (
                <Reveal key={i} delay={(i % 4) * 0.1}>
                  <BentoCard
                    className="h-full flex flex-col items-center justify-center text-center !p-6 md:!p-8"
                    accentColor={cert.issuer === 'Oracle' ? 'primary' : 'secondary'}
                  >
                    {/* Issuer bubble */}
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 border-4 ${cert.issuer === 'Oracle' ? 'bg-accent-primary/10 border-accent-primary/20' : 'bg-accent-secondary/10 border-accent-secondary/20'}`}>
                      <span className={`font-display text-xl font-black ${cert.issuer === 'Oracle' ? 'text-accent-primary' : 'text-accent-secondary'}`}>
                        {cert.issuer.slice(0, 1)}
                      </span>
                    </div>
                    <p className="font-body text-sm font-bold text-text-primary leading-snug mb-3">
                      {cert.name}
                    </p>
                    <span className="font-mono text-[10px] font-bold text-text-muted uppercase tracking-widest bg-bg-base px-3 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </BentoCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
