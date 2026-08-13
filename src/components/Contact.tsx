"use client";

import { Terminal, Github, GitBranch, GitCommit, GitPullRequest } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 md:px-12 border-t border-os-border bg-os-bg text-os-text font-mono relative overflow-hidden">
      <div className="absolute inset-0 scanline-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-center relative z-10">
        
        {/* GitHub Analytics Section */}
        <div className="w-full os-window p-6 md:p-10 bg-os-panel border border-os-border mb-24">
          <div className="os-header mb-8 flex items-center justify-between bg-os-border">
            <div className="flex items-center gap-2 text-os-text font-bold">
              <Github className="w-4 h-4" />
              <span>github_analytics.sh --user Abdullahs-git</span>
            </div>
            <div className="flex gap-2">
              <GitBranch className="w-4 h-4 text-os-muted" />
              <GitCommit className="w-4 h-4 text-os-muted" />
              <GitPullRequest className="w-4 h-4 text-os-muted" />
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-4 w-full justify-center items-center mb-4">
            <img 
              className="w-full lg:w-1/2 border border-os-border" 
              src="https://github-readme-streak-stats.herokuapp.com/?user=Abdullahs-git&theme=react&hide_border=true&background=111111" 
              alt="GitHub Streak" 
            />
            <img 
              className="w-full lg:w-1/2 border border-os-border" 
              src="https://github-readme-stats.vercel.app/api?username=Abdullahs-git&show_icons=true&theme=react&hide_border=true&bg_color=111111&count_private=true&include_all_commits=true" 
              alt="GitHub Stats" 
            />
          </div>
          <div className="w-full flex justify-center">
            <img 
              className="w-full lg:w-2/3 border border-os-border" 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Abdullahs-git&layout=compact&langs_count=6&theme=react&hide_border=true&bg_color=111111&count_private=true&include_all_commits=true&hide=jupyter%20notebook,css,html" 
              alt="Top Languages" 
            />
          </div>
        </div>

        {/* Quote & CTA */}
        <div className="max-w-3xl border-l-4 border-os-primary pl-6 text-left mb-24">
          <p className="text-sm md:text-lg text-os-muted italic leading-relaxed mb-4">
            "The best model is not the largest one. It is the smallest one that reliably solves the problem deployed on infrastructure that meets real world constraints."
          </p>
          <div className="text-xs font-bold uppercase tracking-widest text-os-primary">
            — Muhammad Abdullah Butt, <span className="text-os-secondary">MAPF Lite (FLINS ISKE 2026)</span>
          </div>
        </div>

        <h2 className="text-[clamp(2.5rem,6vw,6rem)] leading-[0.9] font-black uppercase tracking-tighter mb-8 text-os-text">
          Let's build something <br/> <span className="text-os-primary">that actually ships.</span>
        </h2>
        
        <a href="mailto:abdullahbutt3579@gmail.com" className="font-mono text-xl md:text-3xl font-bold text-os-text border-b-2 border-os-primary pb-2 hover:text-os-primary transition-colors flex items-center gap-4">
          <Terminal className="w-6 h-6 md:w-8 md:h-8" />
          ./contact.sh --email abdullahbutt3579@gmail.com
        </a>
      </div>
    </section>
  );
}
