import { HeroSection } from "@/components/sections/HeroSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { StackSection } from "@/components/sections/StackSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white relative flex flex-col w-full">
        <HeroSection />
        <ResearchSection />
        <ProjectsSection />
        <ExperienceSection />
        <StackSection />
        <EducationSection />
        <ContactSection />
      </main>
    </>
  );
}
