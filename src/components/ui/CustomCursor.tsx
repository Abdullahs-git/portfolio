'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const updateCursor = useCallback(() => {
    // Lerp for smooth trailing
    cursorPos.current.x = lerp(cursorPos.current.x, mousePos.current.x, 0.15);
    cursorPos.current.y = lerp(cursorPos.current.y, mousePos.current.y, 0.15);

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0) translate(-50%, -50%)`;
    }
    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
    }

    rafId.current = requestAnimationFrame(updateCursor);
  }, []);

  useEffect(() => {
    // Check if device has fine pointer (desktop)
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasPointer) return;

    document.documentElement.classList.add('cursor-ready');
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Check for magnetic elements
      const magneticEls = document.querySelectorAll('[data-cursor="magnetic"]');
      let pulled = false;
      magneticEls.forEach((el) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.sqrt((e.clientX - cx) ** 2 + (e.clientY - cy) ** 2);
        if (dist < 80) {
          mousePos.current = {
            x: lerp(e.clientX, cx, 0.3),
            y: lerp(e.clientY, cy, 0.3),
          };
          pulled = true;
        }
      });
      if (!pulled) {
        mousePos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="hover"]') || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="hover"]') || target.closest('a') || target.closest('button')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    rafId.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(rafId.current);
      document.documentElement.classList.remove('cursor-ready');
    };
  }, [updateCursor]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring (trails with lerp) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-[width,height] duration-200 ease-out"
        style={{
          width: isHovering ? 64 : 40,
          height: isHovering ? 64 : 40,
        }}
      >
        <div
          className="w-full h-full rounded-full transition-all duration-200 ease-out"
          style={{
            border: `3px solid var(--text-primary)`,
            backgroundColor: isHovering ? 'var(--accent-primary)' : 'var(--accent-tertiary)',
            boxShadow: '4px 4px 0px var(--text-primary)',
          }}
        />
      </div>
      {/* Inner dot (no lerp, follows exactly) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-[width,height,opacity] duration-150 ease-out flex items-center justify-center"
        style={{
          width: isHovering ? 0 : 12,
          height: isHovering ? 0 : 12,
          opacity: isHovering ? 0 : 1,
        }}
      >
        <div className="w-full h-full rounded-full bg-text-primary" />
      </div>
    </>
  );
};
