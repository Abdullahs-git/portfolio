'use client';
import { CONTENT } from '@/data/content';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TiltCard } from '@/components/3d/TiltCard';
import { ExternalLink, Github } from 'lucide-react';
import { BentoCard } from '@/components/ui/BentoCard';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="4" title="Projects" />

        <div className="mt-12 md:mt-24 space-y-6 md:space-y-8">
          
          {/* Featured Projects (Top row, 2 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {CONTENT.projects.featured.map((project, i) => (
              <Reveal key={project.title} delay={i * 0.1} width="100%">
                <TiltCard className="h-full group cursor-pointer w-full">
                  <BentoCard className="h-full flex flex-col !p-0 overflow-hidden" hover={false} accentColor={i === 0 ? 'primary' : 'secondary'}>
                    
                    {/* Mock Browser Header */}
                    <div className="h-10 bg-bg-base border-b-[3px] border-text-primary flex items-center px-4 gap-2 relative z-20">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-accent-primary" />
                        <div className="w-2.5 h-2.5 rounded-full bg-accent-tertiary" />
                        <div className="w-2.5 h-2.5 rounded-full bg-accent-secondary" />
                      </div>
                      <div className="mx-auto px-4 py-0.5 rounded-md bg-white border-[2px] border-text-primary shadow-[2px_2px_0px_#121826] font-mono text-[9px] text-text-primary flex items-center gap-2 font-bold">
                        <span className="text-accent-secondary">🔒</span>
                        {project.links.demo?.replace('https://', '') || project.title.toLowerCase() + '.app'}
                      </div>
                    </div>

                    {/* Image / Visual Area */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-bg-base border-b-[3px] border-text-primary">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-white to-accent-tertiary/20">
                          <span className="font-display font-black text-4xl text-black/10">{project.title}</span>
                        </div>
                      )}
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                        {project.links.demo && (
                          <a href={project.links.demo} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-accent-primary text-white flex items-center justify-center hover:scale-110 transition-transform shadow-glow-primary">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                        {project.links.github && (
                          <a href={project.links.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-text-primary text-white flex items-center justify-center hover:scale-110 transition-transform shadow-float">
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col flex-1 bg-white relative z-20">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-display font-bold text-2xl text-text-primary">{project.title}</h3>
                      </div>
                      <p className="font-body text-sm text-text-muted leading-relaxed font-medium mb-6 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-glass-border">
                        {project.tags.map(tag => (
                          <span key={tag} className="font-mono text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-bg-base text-text-primary border-[2px] border-text-primary shadow-[2px_2px_0px_#121826]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </BentoCard>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* Regular Projects (Bottom row, 3 cols) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {CONTENT.projects.regular.map((project, i) => (
              <Reveal key={project.title} delay={0.2 + i * 0.1} width="100%">
                <BentoCard className="h-full flex flex-col !p-6 md:!p-8 group" accentColor="tertiary">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 rounded-full bg-accent-tertiary/20 flex items-center justify-center">
                      <span className="font-display font-bold text-lg text-accent-primary">{project.title.charAt(0)}</span>
                    </div>
                    <div className="flex gap-3">
                      {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent-primary transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent-primary transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="font-display font-bold text-lg text-text-primary mb-3 group-hover:text-accent-primary transition-colors">{project.title}</h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed mb-6 font-medium">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="font-mono text-[9px] uppercase tracking-wider text-text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </BentoCard>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
