'use client';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { BentoCard } from '@/components/ui/BentoCard';

export const GithubAnalyticsSection = () => {
  return (
    <section id="analytics" className="relative w-full py-32 md:py-48 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="7" title="Open Source" />

        <div className="mt-12 md:mt-24 flex flex-col items-center gap-6 md:gap-8">
          {/* Stats Row */}
          <Reveal delay={0.1} width="100%">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full">
              <BentoCard className="flex-1 w-full !p-6 md:!p-8 flex justify-center items-center bg-white" accentColor="primary">
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=Abdullahs-git&theme=transparent&hide_border=true&stroke=FF5A36&ring=FF5A36&fire=FFC800&currStreakLabel=FF5A36&sideLabels=1C1B1A&sideNums=1C1B1A&dates=737373&currStreakNum=1C1B1A"
                  alt="GitHub Streak"
                  className="w-full max-w-[460px] object-contain"
                />
              </BentoCard>
              <BentoCard className="flex-1 w-full !p-6 md:!p-8 flex justify-center items-center bg-white" accentColor="secondary">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=Abdullahs-git&show_icons=true&hide_border=true&title_color=00D4B2&icon_color=00D4B2&text_color=737373&bg_color=ffffff00&count_private=true&include_all_commits=true"
                  alt="GitHub Stats"
                  className="w-full max-w-[460px] object-contain"
                />
              </BentoCard>
            </div>
          </Reveal>

          {/* Languages */}
          <Reveal delay={0.2} width="100%">
            <BentoCard className="w-full !p-6 md:!p-10 flex justify-center items-center bg-white" accentColor="tertiary">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Abdullahs-git&layout=compact&langs_count=6&hide_border=true&title_color=FFC800&text_color=737373&bg_color=ffffff00&count_private=true&include_all_commits=true&hide=jupyter%20notebook,css,html"
                alt="Top Languages"
                className="w-full max-w-[600px] object-contain"
              />
            </BentoCard>
          </Reveal>

          {/* Profile Views */}
          <Reveal delay={0.3}>
            <div className="flex justify-center mt-4">
              <img
                src="https://komarev.com/ghpvc/?username=Abdullahs-git&label=PROFILE_VIEWS&color=A073FF&style=flat-square&base=1000"
                alt="Profile Views"
                className="rounded-lg shadow-sm"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
