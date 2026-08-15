'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  scale?: boolean;
  blur?: boolean;
  className?: string;
}

export const Reveal = ({
  children,
  width = 'fit-content',
  delay = 0,
  direction = 'up',
  scale = false,
  blur = false,
  className,
}: RevealProps) => {
  const directionMap = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  const offset = directionMap[direction];

  const hiddenState: Record<string, number | string> = {
    opacity: 0,
    ...offset,
  };
  const visibleState: Record<string, number | string> = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  if (scale) {
    hiddenState.scale = 0.95;
    visibleState.scale = 1;
  }
  if (blur) {
    hiddenState.filter = 'blur(8px)';
    visibleState.filter = 'blur(0px)';
  }

  return (
    <div style={{ position: 'relative', width, overflow: 'hidden' }} className={className}>
      <motion.div
        variants={{
          hidden: hiddenState,
          visible: visibleState,
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
