'use client';
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  accentColor?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

export const BentoCard = ({
  children,
  className,
  delay = 0,
  hover = true,
  accentColor = 'primary',
}: BentoCardProps) => {
  const cardRotation = React.useMemo(() => {
    // Generate a subtle random rotation for a sticker feel (-2deg to 2deg)
    return Math.random() * 4 - 2;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        'bento-card relative p-6 overflow-hidden group transition-all duration-300',
        className
      )}
      style={{ transform: `rotate(${cardRotation}deg)` }}
      data-cursor="hover"
    >
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </motion.div>
  );
};
