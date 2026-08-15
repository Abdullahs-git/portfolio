'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

interface KineticTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
  delay?: number;
  highlightWord?: string;
  splitBy?: 'word' | 'char';
  animation?: 'slide-up' | 'mask-wipe' | 'blur-in';
}

export const KineticText = ({
  text,
  className,
  as = 'h1',
  delay = 0,
  highlightWord,
  splitBy = 'word',
  animation = 'slide-up',
}: KineticTextProps) => {
  const Tag = as as any;
  const items = splitBy === 'word' ? text.split(' ') : text.split('');
  const stagger = splitBy === 'word' ? 0.04 : 0.025;

  const getVariants = () => {
    switch (animation) {
      case 'slide-up':
        return {
          hidden: { y: '110%' },
          visible: { y: 0 },
        };
      case 'mask-wipe':
        return {
          hidden: { clipPath: 'inset(0 100% 0 0)' },
          visible: { clipPath: 'inset(0 0% 0 0)' },
        };
      case 'blur-in':
        return {
          hidden: { opacity: 0, filter: 'blur(12px)', y: 20 },
          visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
        };
      default:
        return {
          hidden: { y: '110%' },
          visible: { y: 0 },
        };
    }
  };

  const variants = getVariants();
  const needsOverflow = animation === 'slide-up';

  return (
    <Tag className={cn('flex flex-wrap', className)}>
      {items.map((item, index) => {
        const isHighlighted = highlightWord && item.toLowerCase().includes(highlightWord.toLowerCase());
        const separator = splitBy === 'word' ? '\u00A0' : '';

        return (
          <span
            key={index}
            className={cn(
              'inline-block',
              needsOverflow && 'overflow-hidden',
              splitBy === 'word' && 'mr-[0.25em] last:mr-0'
            )}
          >
            <motion.span
              className={cn('inline-block', isHighlighted && 'text-neon-primary')}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: delay + index * stagger,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {item}
              {separator}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
};
