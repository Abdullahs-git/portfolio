'use client';
import { CONTENT } from '@/data/content';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ArrowUpRight, ExternalLink, Cpu, Layers } from 'lucide-react';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative w-full bg-white py-24 md:py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <SectionLabel number="02" title="Production & Systems" />

        {/* 1. Live Production Platforms */}
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-400">
              [LIVE PRODUCTION ARCHITECTURE]
            </span>
            <span className="text-sm font-medium text-black font-semibold">
              {CONTENT.projects.live.length} ACTIVE DEPLOYMENTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {CONTENT.projects.live.map((project, i) => (
              <FadeIn key={project.title} delay={i * 0.08} className="bg-white flex flex-col">
                <div className="group p-8 md:p-10 flex flex-col h-full hover:bg-gray-50/80 transition-colors duration-300">
                  {/* Architectural Graphic Header */}
                  <div className="w-full aspect-[16/9] bg-black text-white p-6 flex flex-col justify-between mb-8 relative overflow-hidden group-hover:bg-gray-950 transition-colors">
                    <div className="flex items-center justify-between z-10">
                      <span className="font-mono text-sm tracking-widest text-gray-400 uppercase">
                        SYS // 0{i + 1}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-white">LIVE</span>
                      </div>
                    </div>

                    <div className="z-10">
                      <h4 className="font-mono text-xs tracking-wider uppercase text-gray-300">
                        {project.url}
                      </h4>
                    </div>

                    {/* Subtle grid pattern background */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
                  </div>

                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-sans text-xl md:text-2xl font-bold tracking-tight text-black">
                        {project.title}
                      </h3>
                      <span className="text-sm font-medium text-gray-500 mt-1 block font-medium">
                        {project.category}
                      </span>
                    </div>

                    {project.url && (
                      <a
                        href={`https://${project.url}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-black border-b border-gray-300 hover:border-black pb-0.5 transition-colors"
                        aria-label={`Visit ${project.title} at ${project.url}`}
                      >
                        Visit
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <p className="font-sans text-sm text-gray-700 leading-relaxed font-normal mb-8 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-6 border-t border-gray-100">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* 2. Enterprise & AI Systems (Clear, Unblocked Cards) */}
        <div className="mt-16">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-400">
              [ENTERPRISE &amp; AI INFRASTRUCTURE]
            </span>
            <span className="text-sm font-medium text-gray-600 font-medium">
              HIGH-IMPACT AI SYSTEMS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {CONTENT.projects.confidential.map((project, i) => (
              <FadeIn key={project.title} delay={0.1 + i * 0.1} className="bg-white">
                <div className="p-8 md:p-12 h-full flex flex-col justify-between hover:bg-gray-50/80 transition-colors duration-300">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Cpu className="w-4 h-4 text-black" />
                          <span className="text-sm font-medium text-gray-500 font-semibold">
                            ENTERPRISE AI
                          </span>
                        </div>
                        <h3 className="font-sans text-2xl font-bold tracking-tight text-black">
                          {project.title}
                        </h3>
                        <span className="text-sm font-medium text-gray-500 block mt-1 font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <p className="font-sans text-sm text-gray-700 leading-relaxed font-normal mb-8">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-6 border-t border-gray-100">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* 3. Mobile, FinTech & Specialized Systems */}
        <div className="mt-16">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-400">
              [SPECIALIZED &amp; APPLIED SYSTEMS]
            </span>
            <span className="text-sm font-medium text-gray-500">
              MOBILE &middot; FINTECH &middot; CLIENT UTILITY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {CONTENT.projects.other.map((project, i) => (
              <FadeIn key={project.title} delay={0.2 + i * 0.08} className="bg-white flex flex-col">
                <div className="p-8 flex flex-col h-full group hover:bg-gray-50/80 transition-colors duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Layers className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-sm font-medium text-gray-400">APPLIED</span>
                      </div>
                      <h3 className="font-sans text-lg font-bold tracking-tight text-black">
                        {project.title}
                      </h3>
                      <span className="text-sm font-medium text-gray-500 mt-0.5 block font-medium">
                        {project.category}
                      </span>
                    </div>
                    {project.url && (
                      <a
                        href={`https://${project.url}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-black transition-colors"
                        aria-label={`Open ${project.title} link`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <p className="font-sans text-sm text-gray-700 leading-relaxed font-normal mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-gray-100">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 px-2 py-0.5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
