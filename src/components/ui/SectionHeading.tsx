'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  number: string;
  title: string;
  className?: string;
}

export const SectionHeading = ({ number, title, className }: SectionHeadingProps) => {
  return (
    <div className={cn('relative flex items-end gap-6 md:gap-8', className)}>
      <div className="flex flex-col gap-3 pb-2 md:pb-3 w-full items-center md:items-start text-center md:text-left">
        {/* Title */}
        <h2 className="flex flex-wrap justify-center md:justify-start font-display text-[clamp(40px,6vw,72px)] font-black tracking-tighter text-text-primary leading-[1.1]">
          {/* Number */}
          <motion.span
            className="inline-block text-accent-primary mr-[0.25em]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {number}.
          </motion.span>
          
          {/* Title Words */}
          {title.split(' ').map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-[0.25em] last:mr-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: "easeOut" }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Decorative playful line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, type: 'spring', damping: 15 }}
          className="w-[100px] h-[8px] rounded-full bg-accent-primary border-[2px] border-text-primary shadow-[2px_2px_0px_#121826] origin-left"
        />
      </div>
    </div>
  );
};
