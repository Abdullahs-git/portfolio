'use client';

interface FloatingBadgeProps {
  text?: string;
  size?: number;
  className?: string;
  href?: string;
}

export const FloatingBadge = ({
  text = 'GET IN TOUCH · GET IN TOUCH · ',
  size = 110,
  className = '',
  href,
}: FloatingBadgeProps) => {
  const pathId = 'floatingBadgePath';
  const r = size / 2 - 12; // Inset text

  const content = (
    <div
      className={`relative group cursor-pointer ${className}`}
      style={{ width: size, height: size }}
      data-cursor="hover"
    >
      <div className="w-full h-full rounded-full bg-accent-tertiary border-[3px] border-text-primary shadow-[6px_6px_0px_#121826] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#121826]">
        <svg
          className="absolute inset-0 w-full h-full animate-spin-slow"
          viewBox={`0 0 ${size} ${size}`}
        >
          <defs>
            <path
              id={pathId}
              d={`M ${size / 2}, ${size / 2} m -${r}, 0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`}
            />
          </defs>
          <text
            fill="#1C1B1A"
            fontSize="10"
            fontFamily="var(--font-mono)"
            fontWeight="700"
            letterSpacing="0.1em"
            style={{ textTransform: 'uppercase' }}
          >
            <textPath href={`#${pathId}`}>{text}</textPath>
          </text>
        </svg>
        {/* Center icon */}
        <div className="w-12 h-12 rounded-full bg-white border-[3px] border-text-primary flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-90">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#121826"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
};
