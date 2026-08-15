'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatCounterProps {
  value: string;
  label: string;
  delay?: number;
  className?: string;
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

export const StatCounter = ({ value, label, delay = 0, className, color = 'primary' }: StatCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });
  const [displayValue, setDisplayValue] = useState('0');

  const numericMatch = value.match(/^([\d.]+)(.*)/);
  const targetNumber = numericMatch ? parseFloat(numericMatch[1]) : 0;
  const suffix = numericMatch ? numericMatch[2] : value;
  const hasDecimal = numericMatch ? numericMatch[1].includes('.') : false;
  const decimalPlaces = hasDecimal ? (numericMatch![1].split('.')[1]?.length || 0) : 0;

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const duration = 2000; 

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 4);
      const current = targetNumber * eased;

      if (hasDecimal) {
        setDisplayValue(current.toFixed(decimalPlaces));
      } else {
        setDisplayValue(Math.floor(current).toString());
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(numericMatch ? numericMatch[1] : '0');
      }
    };

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [isInView, targetNumber, hasDecimal, decimalPlaces, delay, numericMatch]);

  const colors = {
    primary: 'text-accent-primary',
    secondary: 'text-accent-secondary',
    tertiary: 'text-accent-tertiary',
    quaternary: 'text-accent-quaternary',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn('flex flex-col gap-1', className)}
    >
      <span className={cn('font-display text-[clamp(32px,4vw,56px)] font-black leading-none tracking-tighter', colors[color])}>
        {isInView ? displayValue : '0'}
        {suffix}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-widest text-text-muted mt-1">
        {label}
      </span>
    </motion.div>
  );
};
