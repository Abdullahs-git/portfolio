'use client';
import { CONTENT } from '@/data/content';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Award, GraduationCap } from 'lucide-react';

export const EducationSection = () => {
  const edu = CONTENT.education;
  const certs = CONTENT.certifications;
  const honors = CONTENT.achievements;

  return (
    <section id="education" className="relative w-full bg-white py-24 md:py-32 lg:py-40 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <SectionLabel number="05" title="Education & Credentials" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-12">
          {/* Left Column (5 Cols) — Academic & Honors */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            {/* Academic Degree */}
            <FadeIn>
              <div className="border border-gray-200 p-8 bg-gray-50/50">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-4 h-4 text-black" />
                  <span className="font-mono text-[10px] tracking-wider uppercase text-gray-400">
                    ACADEMIC DEGREE
                  </span>
                </div>

                <h3 className="font-sans text-xl md:text-2xl font-bold tracking-tight text-black">
                  {edu.degree}
                </h3>
                <p className="font-sans text-sm text-gray-600 mt-2 font-light">
                  {edu.institution}
                </p>
                <span className="inline-block font-mono text-[10px] tracking-wider uppercase text-gray-400 mt-2">
                  {edu.dates}
                </span>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <span className="font-mono text-[10px] tracking-wider uppercase text-black font-semibold block mb-1">
                    UNDERGRADUATE THESIS
                  </span>
                  <p className="font-sans text-sm text-gray-500 font-light leading-relaxed">
                    {edu.thesis}
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Honors & Hackathons */}
            <FadeIn delay={0.1}>
              <div className="border border-gray-200 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-black" />
                  <span className="font-mono text-[10px] tracking-wider uppercase text-gray-400">
                    HONORS & COMPETITIVE HACKATHONS
                  </span>
                </div>

                <ul className="flex flex-col gap-3">
                  {honors.map((honor, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="font-mono text-[10px] text-gray-400 mt-0.5">
                        0{idx + 1}
                      </span>
                      <span className="font-sans text-sm text-gray-700 font-light leading-relaxed">
                        {honor}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Right Column (7 Cols) — Certifications Matrix */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.15}>
              <div className="border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                  <span className="font-mono text-[10px] tracking-wider uppercase text-gray-400">
                    PROFESSIONAL CERTIFICATIONS
                  </span>
                  <span className="font-mono text-[10px] tracking-wider uppercase text-black font-medium">
                    8 VERIFIED CREDENTIALS
                  </span>
                </div>

                <div className="flex flex-col divide-y divide-gray-100">
                  {certs.map((cert) => (
                    <div
                      key={cert.name}
                      className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:bg-gray-50/50 px-2 -mx-2 transition-colors"
                    >
                      <span className="font-sans text-sm text-black font-medium group-hover:text-gray-900">
                        {cert.name}
                      </span>
                      <div className="flex items-center gap-4 flex-shrink-0">
                        <span className="font-mono text-[10px] tracking-wider uppercase text-gray-500 bg-gray-100 px-2 py-0.5 border border-gray-200">
                          {cert.issuer}
                        </span>
                        <span className="font-mono text-[10px] tracking-wider uppercase text-gray-400 min-w-[36px] text-right">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
