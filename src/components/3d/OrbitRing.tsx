'use client';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CONTENT } from '@/data/content';

export const OrbitRing = () => {
  const [isHovered, setIsHovered] = useState(false);
  const categories = Object.keys(CONTENT.stack);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [radius, setRadius] = useState(140);

  useEffect(() => {
    const updateRadius = () => {
      setRadius(window.innerWidth < 768 ? 100 : 200);
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[300px] md:max-w-[500px] mx-auto flex items-center justify-center my-12 md:my-24">
      {/* Central Hub */}
      <div className="absolute z-20 text-center pointer-events-none p-3 md:p-6 backdrop-blur-md bg-bg-base/80 rounded-full border border-neon-primary/20">
        <h3 className="font-mono text-neon-primary text-xs md:text-lg font-bold uppercase tracking-widest">{activeCategory}</h3>
      </div>
      
      {/* Inner Ring */}
      <div 
        className="absolute inset-4 md:inset-8 border border-white/10 rounded-full transition-all duration-1000"
        style={{ 
          animation: isHovered ? 'none' : 'spin 40s linear infinite',
        }}
      >
        {categories.map((category, index) => {
          const total = categories.length;
          const angle = (index / total) * 360;
          return (
            <div
              key={category}
              className="absolute top-1/2 left-1/2 w-6 h-6 md:w-10 md:h-10 -ml-3 -mt-3 md:-ml-5 md:-mt-5 cursor-pointer z-30 group"
              style={{
                transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
              }}
              onMouseEnter={() => {
                setActiveCategory(category);
                setIsHovered(true);
              }}
              onMouseLeave={() => setIsHovered(false)}
              data-cursor="hover"
            >
              <div 
                className={cn(
                  "w-full h-full rounded-full bg-bg-elevated border flex items-center justify-center transition-all duration-300 relative",
                  activeCategory === category ? "border-neon-primary shadow-glow-primary scale-125" : "border-white/20 group-hover:border-neon-secondary group-hover:scale-110"
                )}
              >
                <div className="absolute top-[120%] left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px] md:text-xs text-text-primary bg-bg-base px-2 py-1 border border-white/10 rounded shadow-xl pointer-events-none">
                  {category}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Outer Ring */}
      <div 
        className="absolute inset-0 border border-white/5 rounded-full pointer-events-none"
        style={{ 
          animation: isHovered ? 'none' : 'spin 60s linear infinite reverse' 
        }}
      />
    </div>
  );
};
