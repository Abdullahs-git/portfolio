'use client';
import { CONTENT } from '@/data/content';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const StackSection = () => {
  const categories = Object.entries(CONTENT.stack);

  return (
    <section id="stack" className="relative w-full bg-gray-50 py-24 md:py-32 lg:py-40 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <SectionLabel number="04" title="Stack" />

        {/* Brutalist Grid */}
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-gray-200 border border-gray-200">
            {categories.map(([category, skills]) => (
              <div key={category} className="bg-white p-6 md:p-8 flex flex-col">
                <span className="font-mono text-[9px] tracking-wider uppercase text-gray-400 mb-6 pb-4 border-b border-gray-100">
                  {category}
                </span>
                <ul className="flex flex-col gap-2">
                  {skills.map((skill) => (
                    <li key={skill} className="font-sans text-xs text-gray-600 font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
