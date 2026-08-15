"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { StackSection } from "@/components/sections/StackSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { GithubAnalyticsSection } from "@/components/sections/GithubAnalyticsSection";
import { CustomCursor } from "@/components/ui/CustomCursor";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <CustomCursor />
      
      <div className="opacity-100 transition-opacity duration-1000">
        <Navbar />

        <main className="min-h-screen bg-transparent relative flex flex-col w-full overflow-hidden">
          <HeroSection />
          <AboutSection />
          <ResearchSection />
          <ExperienceSection />
          <ProjectsSection />
          <StackSection />
          <GithubAnalyticsSection />
          <EducationSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
