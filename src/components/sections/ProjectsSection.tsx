'use client';
import { CONTENT } from '@/data/content';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ArrowUpRight, Lock, ExternalLink } from 'lucide-react';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative w-full bg-white py-24 md:py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <SectionLabel number="02" title="Production & Systems" />

        {/* 1. Live Production Platforms */}
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-wider uppercase text-gray-400">
              [LIVE PRODUCTION ARCHITECTURE]
            </span>
            <span className="font-mono text-[10px] tracking-wider uppercase text-black font-medium">
              3 ACTIVE DEPLOYMENTS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {CONTENT.projects.live.map((project, i) => (
              <FadeIn key={project.title} delay={i * 0.1} className="bg-white flex flex-col">
                <div className="group p-8 md:p-10 flex flex-col h-full hover:bg-gray-50/70 transition-colors duration-300">
                  {/* Architectural Graphic Header */}
                  <div className="w-full aspect-[16/9] bg-black text-white p-6 flex flex-col justify-between mb-8 relative overflow-hidden group-hover:bg-gray-950 transition-colors">
                    <div className="flex items-center justify-between z-10">
                      <span className="font-mono text-[9px] tracking-widest text-gray-400 uppercase">
                        SYS // 0{i + 1}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        <span className="font-mono text-[9px] tracking-wider uppercase text-white">LIVE</span>
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
                      <span className="font-mono text-[10px] tracking-wider uppercase text-gray-400 mt-1 block">
                        {project.category}
                      </span>
                    </div>

                    {project.url && (
                      <a
                        href={`https://${project.url}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 font-mono text-[10px] tracking-wider uppercase text-gray-400 hover:text-black border-b border-gray-200 hover:border-black pb-0.5 transition-colors"
                        aria-label={`Visit ${project.title} at ${project.url}`}
                      >
                        Visit
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <p className="font-sans text-sm text-gray-500 leading-relaxed font-light mb-8 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-6 border-t border-gray-100">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[9px] tracking-wider uppercase text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5"
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

        {/* 2. Confidential / Enterprise AI Systems */}
        <div className="mt-16">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-wider uppercase text-gray-400">
              [CONFIDENTIAL // PROPRIETARY ENTERPRISE AI]
            </span>
            <span className="font-mono text-[10px] tracking-wider uppercase text-gray-500">
              NDA PROTECTED
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {CONTENT.projects.confidential.map((project, i) => (
              <FadeIn key={project.title} delay={0.2 + i * 0.1} className="bg-white">
                <div className="relative p-8 md:p-12 h-full flex flex-col justify-between overflow-hidden">
                  {/* Frosted overlay */}
                  <div className="absolute inset-0 confidential-overlay z-10 flex flex-col items-center justify-center text-center p-8">
                    <div className="p-3 bg-black text-white mb-4">
                      <Lock className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs tracking-widest uppercase text-black font-semibold mb-1">
                      CONFIDENTIAL / NDA RESTRICTED
                    </span>
                    <span className="font-mono text-[10px] tracking-wider uppercase text-gray-500 max-w-sm leading-relaxed">
                      Proprietary AI Architecture. Verified production metrics available upon direct request.
                    </span>
                  </div>

                  {/* Underlying structured info */}
                  <div className="opacity-25 select-none filter blur-[1px]">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-sans text-2xl font-bold tracking-tight text-black">
                          {project.title}
                        </h3>
                        <span className="font-mono text-[10px] tracking-wider uppercase text-gray-400 block mt-1">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <p className="font-sans text-sm text-gray-500 leading-relaxed font-light mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="font-mono text-[9px] tracking-wider uppercase text-gray-400 border border-gray-200 px-2 py-0.5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* 3. Mobile, FinTech & Specialized Systems */}
        <div className="mt-16">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-wider uppercase text-gray-400">
              [SPECIALIZED & APPLIED SYSTEMS]
            </span>
            <span className="font-mono text-[10px] tracking-wider uppercase text-gray-400">
              MOBILE &middot; FINTECH &middot; CLIENT UTILITY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {CONTENT.projects.other.map((project, i) => (
              <FadeIn key={project.title} delay={0.3 + i * 0.08} className="bg-white flex flex-col">
                <div className="p-8 flex flex-col h-full group hover:bg-gray-50/70 transition-colors duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-sans text-lg font-bold tracking-tight text-black">
                        {project.title}
                      </h3>
                      <span className="font-mono text-[9px] tracking-wider uppercase text-gray-400 mt-0.5 block">
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

                  <p className="font-sans text-sm text-gray-500 leading-relaxed font-light mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-auto pt-4 border-t border-gray-100">
                    {project.stack.map((tech, tIdx) => (
                      <span key={tech} className="font-mono text-[9px] tracking-wider uppercase text-gray-400">
                        {tech}{tIdx < project.stack.length - 1 ? ' ·' : ''}
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
