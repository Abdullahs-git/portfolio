'use client';
import { ReactNode, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxRotation?: number;
}

export const TiltCard = ({ children, className, maxRotation = 8 }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [shineX, setShineX] = useState(50);
  const [shineY, setShineY] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    // Disable 3D tilt on smaller screens where touch is likely
    if (window.innerWidth < 768) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -maxRotation;
    const rotY = ((x - centerX) / centerX) * maxRotation;

    setRotateX(rotX);
    setRotateY(rotY);
    setShineX((x / rect.width) * 100);
    setShineY((y / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setShineX(50);
    setShineY(50);
  };

  return (
    <motion.div
      ref={ref}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('w-full transform-gpu z-10 relative', className)}
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 250, damping: 25 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full h-full relative"
      >
        {children}
        {/* Subtle shine/reflection effect */}
        <div
          className="absolute inset-0 rounded-bento pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
          style={{
            background: `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.04), transparent 50%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
};
