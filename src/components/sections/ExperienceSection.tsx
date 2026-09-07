'use client';
import { CONTENT } from '@/data/content';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative w-full bg-white py-24 md:py-32 lg:py-40 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <SectionLabel number="03" title="Experience" />

        <div className="flex flex-col mt-12">
          {CONTENT.experience.map((exp, i) => (
            <FadeIn key={`${exp.company}-${i}`} delay={i * 0.08}>
              <div
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-14 ${
                  i !== CONTENT.experience.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                {/* Left — Role & Company */}
                <div className="md:col-span-4 lg:col-span-4">
                  <h3 className="font-sans text-xl md:text-2xl font-bold tracking-tight text-black leading-tight">
                    {exp.role}
                  </h3>
                  <p className="font-sans text-sm text-gray-500 mt-1 font-light">
                    {exp.company}{exp.location ? ` — ${exp.location}` : ''}
                  </p>
                  <span className="inline-block mt-3 font-mono text-[10px] tracking-wider uppercase text-gray-400 bg-gray-50 px-2.5 py-1 border border-gray-200">
                    {exp.duration}
                  </span>
                </div>

                {/* Right — Metric-Led Bullets & Scope */}
                <div className="md:col-span-8 lg:col-span-8">
                  {exp.bullets && exp.bullets.length > 0 ? (
                    <ul className="flex flex-col gap-4">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3">
                          {bullet.metric && (
                            <span className="font-mono text-[10px] tracking-wider uppercase text-black font-semibold bg-gray-100 px-2 py-0.5 self-start border border-gray-200 flex-shrink-0">
                              {bullet.metric}
                            </span>
                          )}
                          <span className="font-sans text-sm text-gray-600 leading-relaxed font-light">
                            {bullet.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="font-sans text-sm text-gray-500 leading-relaxed font-light">
                      {exp.description}
                    </p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
