'use client';
import { motion } from 'framer-motion';
import { CONTENT } from '@/data/content';
import { HeroScene } from '@/components/3d/HeroScene';
import { FloatingBadge } from '@/components/ui/FloatingBadge';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { BentoCard } from '@/components/ui/BentoCard';

const easeSmooth = [0.25, 0.1, 0.25, 1] as const;
const easeExpo = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeSmooth, delay },
});

export const HeroSection = () => {
  const nameWords = 'Muhammad Abdullah Butt'.split(' ');

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-8 lg:px-12 pt-32 pb-12 overflow-hidden">
      {/* Bento Grid Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">

          {/* ── Profile Card (left column) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeExpo }}
            className="lg:col-span-4 lg:row-span-2 relative rounded-[40px] overflow-hidden bg-bg-card shadow-[12px_12px_0px_#121826] min-h-[360px] lg:min-h-[500px] flex flex-col justify-end border-[4px] border-text-primary"
          >
            {/* Soft playful gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-accent-tertiary/10 z-0" />
            
            {/* 3D Scene Background */}
            <div className="absolute inset-0 z-[1]">
              <HeroScene />
            </div>

            {/* Profile info */}
            <div className="relative z-10 p-6 md:p-8 flex flex-col gap-3 bg-white/40 backdrop-blur-md border-t border-white/50">
              <motion.span
                {...fadeUp(0.5)}
                className="font-body font-bold text-[11px] text-accent-primary uppercase tracking-widest"
              >
                {CONTENT.hero.eyebrow}
              </motion.span>
              <motion.p
                {...fadeUp(0.6)}
                className="font-mono font-medium text-[12px] text-text-primary"
              >
                {CONTENT.contact.email}
              </motion.p>
              <motion.p
                {...fadeUp(0.65)}
                className="font-mono font-medium text-[12px] text-text-muted"
              >
                📍 {CONTENT.contact.location}
              </motion.p>
            </div>
          </motion.div>

          {/* ── Name Block (right, top) ── */}
          <div className="lg:col-span-8 flex flex-col justify-center gap-8 lg:gap-10 py-6 lg:py-0 px-2">
            {/* Massive Name */}
            <h1 className="flex flex-wrap font-display text-[clamp(48px,8.5vw,130px)] leading-[0.9] tracking-tighter font-black">
              {nameWords.map((word, index) => (
                <span key={index} className="overflow-hidden inline-block mr-[0.2em] last:mr-0">
                  <motion.span
                    className={index === 2 ? 'text-accent-primary inline-block' : 'text-text-primary inline-block'}
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 + index * 0.06, type: 'spring', damping: 20 }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* CTAs + Skills row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-10">
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.65, type: 'spring' }}
                className="flex items-center gap-4"
              >
                <MagneticButton
                  as="a"
                  href={`mailto:${CONTENT.contact.email}`}
                  variant="primary"
                  size="lg"
                >
                  {CONTENT.hero.cta.primary}
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="#about"
                  variant="outline"
                  size="lg"
                >
                  {CONTENT.hero.cta.secondary}
                </MagneticButton>
              </motion.div>

              {/* Skill tags - Bubble style */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="hidden lg:flex flex-wrap gap-2 max-w-sm"
              >
                {CONTENT.hero.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.05, type: 'spring' }}
                    className="font-body font-bold text-[11px] text-text-primary uppercase tracking-wider bg-white px-3 py-1.5 rounded-full shadow-[2px_2px_0px_#121826] border-[2px] border-text-primary flex items-center gap-2 transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_#121826]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* ── Stat Cards Row ── */}
          {CONTENT.hero.stats.map((stat, i) => {
            const colors = ['secondary', 'tertiary', 'quaternary'] as const;
            const color = colors[i % colors.length];
            return (
              <BentoCard
                key={i}
                delay={0.75 + i * 0.08}
                className="lg:col-span-2 flex flex-col justify-center items-center text-center gap-3 p-4"
                accentColor={color}
              >
                <span className="font-display text-[clamp(20px,2.5vw,28px)] font-black text-text-primary leading-[1.1] tracking-tight group-hover:text-accent-primary transition-colors">
                  {stat.value}
                </span>
                <span className="font-body font-bold text-[10px] uppercase tracking-widest text-text-muted mt-1">
                  {stat.label}
                </span>
              </BentoCard>
            );
          })}

          {/* ── Floating Badge ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.9, type: 'spring', stiffness: 100 }}
            className="lg:col-span-2 flex items-center justify-center py-4 lg:py-0"
          >
            <FloatingBadge
              href={`mailto:${CONTENT.contact.email}`}
              size={120}
            />
          </motion.div>

          {/* ── Empty space instead of typing SVG to keep it clean and playful ── */}
          <div className="lg:col-span-4 hidden lg:block" />

          {/* ── Hook Text ── */}
          <motion.div
            {...fadeUp(1.0)}
            className="lg:col-span-12 mt-6 lg:mt-2 text-center lg:text-left"
          >
            <p className="font-body text-base md:text-lg text-text-muted max-w-2xl mx-auto lg:mx-0 font-medium">
              {CONTENT.hero.hook}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
