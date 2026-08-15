'use client';
import { ReactNode, useRef, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: React.ElementType;
  href?: string;
  target?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
}

export const MagneticButton = ({
  children,
  className,
  onClick,
  as = 'button',
  href,
  target,
  variant = 'primary',
  size = 'md',
  icon,
}: MagneticButtonProps) => {
  const Tag = as as any;
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  const sizeStyles = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-8 py-3 text-sm font-semibold',
    lg: 'px-10 py-4 text-base font-bold',
  };

  const variantStyles = {
    primary: 'bg-accent-primary text-white border-[3px] border-text-primary shadow-[4px_4px_0px_#121826] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#121826]',
    secondary: 'bg-accent-secondary text-white border-[3px] border-text-primary shadow-[4px_4px_0px_#121826] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#121826]',
    outline:
      'bg-white border-[3px] border-text-primary text-text-primary shadow-[4px_4px_0px_#121826] hover:bg-accent-tertiary hover:-translate-y-1 hover:shadow-[8px_8px_0px_#121826]',
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse as unknown as React.MouseEventHandler<HTMLDivElement>}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 200, damping: 10, mass: 0.1 }}
      className="inline-block"
      data-cursor="magnetic"
    >
      <Tag
        onClick={onClick}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noreferrer' : undefined}
        className={cn(
          'relative rounded-full font-body uppercase tracking-wider transition-all duration-300 overflow-hidden group inline-flex items-center gap-2',
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
      >
        {icon && <span className="relative z-10">{icon}</span>}
        <span className="relative z-10">{children}</span>
      </Tag>
    </motion.div>
  );
};
