'use client';
import { CONTENT } from '@/data/content';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ArrowUpRight } from 'lucide-react';

export const ResearchSection = () => {
  const r = CONTENT.research.primary;
  const s = CONTENT.research.secondary;

  return (
    <section id="research" className="relative w-full bg-black text-white py-24 md:py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <SectionLabel number="01" title="Research" inverted />

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">

          {/* Left Column — Sticky Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start lg:pr-12">
            <FadeIn>
              <h2 className="text-display-lg font-black tracking-tightest text-white uppercase leading-[0.85]">
                {r.title}
              </h2>
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="font-mono text-[10px] tracking-wider uppercase text-black bg-white px-3 py-1.5">
                  {r.venue}
                </span>
                <span className="font-mono text-[10px] tracking-wider uppercase text-black bg-white px-3 py-1.5">
                  {r.publisher}
                </span>
              </div>
              <p className="font-mono text-[10px] tracking-wider uppercase text-gray-500 mt-6">
                {r.role}
              </p>
              <p className="font-mono text-[10px] tracking-wider uppercase text-gray-600 mt-1">
                {r.pages} — {r.date}
              </p>
            </FadeIn>
          </div>

          {/* Right Column — Metrics & Content */}
          <div className="lg:col-span-8 lg:border-l lg:border-gray-800 lg:pl-12">
            {/* Metric Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-800">
              {r.metrics.map((metric, i) => (
                <FadeIn key={metric.label} delay={i * 0.08}>
                  <div className="bg-black p-6 md:p-8 flex flex-col">
                    <span className="font-sans text-3xl md:text-4xl font-black tracking-tight text-white">
                      {metric.value}
                    </span>
                    <span className="font-mono text-[10px] tracking-wider uppercase text-gray-500 mt-3">
                      {metric.label}
                    </span>
                    <span className="font-mono text-[10px] tracking-wider uppercase text-gray-600 mt-0.5">
                      {metric.sublabel}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Architecture Description */}
            <FadeIn delay={0.3}>
              <div className="mt-12 border-t border-gray-800 pt-8">
                <p className="font-mono text-[10px] tracking-wider uppercase text-gray-500 mb-4">
                  Architecture
                </p>
                <p className="font-sans text-sm md:text-base text-gray-400 leading-relaxed font-light max-w-2xl">
                  {r.architecture}
                </p>
              </div>
            </FadeIn>

            {/* Links */}
            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-6">
                {r.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 font-mono text-[11px] tracking-wider uppercase text-white border-b border-gray-700 pb-1 hover:border-white transition-colors duration-300"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 text-gray-500 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </FadeIn>

            {/* Secondary Paper */}
            <FadeIn delay={0.5}>
              <div className="mt-16 border-t border-gray-800 pt-8">
                <p className="font-mono text-[10px] tracking-wider uppercase text-gray-600 mb-2">
                  {s.status}
                </p>
                <h3 className="font-sans text-lg md:text-xl font-semibold text-gray-300 tracking-tight">
                  {s.title}
                </h3>
                <p className="font-mono text-[10px] tracking-wider uppercase text-gray-500 mt-2">
                  {s.role}
                </p>
                <p className="font-sans text-sm text-gray-500 mt-3 leading-relaxed font-light max-w-xl">
                  {s.description}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
