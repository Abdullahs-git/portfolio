'use client';
import { FadeIn } from './FadeIn';

interface SectionLabelProps {
  number: string;
  title: string;
  inverted?: boolean;
}

export const SectionLabel = ({ number, title, inverted = false }: SectionLabelProps) => {
  return (
    <FadeIn>
      <div className="flex items-center gap-4 mb-16 md:mb-24">
        <span className={`font-mono text-label uppercase tracking-wider ${inverted ? 'text-gray-500' : 'text-gray-400'}`}>
          {number}
        </span>
        <div className={`h-px flex-1 max-w-[60px] ${inverted ? 'bg-gray-700' : 'bg-gray-200'}`} />
        <span className={`font-mono text-label uppercase tracking-wider ${inverted ? 'text-gray-500' : 'text-gray-400'}`}>
          {title}
        </span>
      </div>
    </FadeIn>
  );
};
