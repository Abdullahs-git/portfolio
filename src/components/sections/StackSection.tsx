'use client';
import { CONTENT } from '@/data/content';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { type IconType } from 'react-icons';
import {
  SiPython, SiTypescript, SiJavascript, SiCplusplus, SiPhp,
  SiLangchain, SiHuggingface,
  SiPytorch, SiTensorflow, SiKeras, SiScikitlearn, SiMlflow, SiNvidia,
  SiNextdotjs, SiReact, SiAngular, SiVuedotjs, SiSvelte, SiExpo, SiRedux, SiWebpack, SiVite, SiTailwindcss, SiBootstrap, SiMui, SiHtml5,
  SiNodedotjs, SiExpress, SiFastapi, SiDjango, SiSpringboot, SiDotnet, SiPrisma, SiGraphql, SiApollographql, SiGo,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiApachecassandra, SiElasticsearch, SiSupabase, SiUpstash, SiCloudinary,
  SiGooglecloud, SiDocker, SiKubernetes, SiTerraform, SiJenkins, SiGithubactions, SiGitlab, SiAnsible, SiPrometheus, SiGrafana, SiNginx, SiApachekafka, SiRabbitmq, SiVercel, SiRailway,
  SiJest, SiCypress,
} from 'react-icons/si';
import { FaJava, FaAws, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { GrOracle } from 'react-icons/gr';
import { TbBrandOpenai, TbBrandReactNative } from 'react-icons/tb';

// Comprehensive icon mapping for all tech stack items with authentic brand icons
const ICON_MAP: Record<string, IconType> = {
  // Languages
  'Python': SiPython,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'Java': FaJava,
  'C++': SiCplusplus,
  'PHP': SiPhp,

  // AI & LLM
  'LangChain': SiLangchain,
  'LlamaIndex': SiLangchain,
  'OpenAI API': TbBrandOpenai,
  'Anthropic Claude': TbBrandOpenai,
  'RAG Pipelines': TbBrandOpenai,
  'Pinecone': FaDatabase,
  'pgvector': SiPostgresql,
  'Agentic Workflows': TbBrandOpenai,
  'Hugging Face': SiHuggingface,

  // ML & Vision
  'PyTorch': SiPytorch,
  'Vision Transformers (ViT)': SiPytorch,
  'CLIP': TbBrandOpenai,
  'Whisper': TbBrandOpenai,
  'PEFT': SiPytorch,
  'XGBoost': SiPython,
  'Decision Trees': SiPython,
  'Kronos AI': SiPython,
  'Edge AI Deployment': SiNvidia,

  // Frontend
  'Next.js': SiNextdotjs,
  'React': SiReact,
  'React Native': TbBrandReactNative,
  'Expo': SiExpo,
  'Tailwind CSS': SiTailwindcss,
  'Bootstrap': SiBootstrap,
  'GraphQL': SiGraphql,
  'HTML': SiHtml5,
  'CSS': FaCss3Alt,

  // Backend
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  'FastAPI': SiFastapi,
  'Django': SiDjango,
  'Go Fiber': SiGo,
  'Prisma ORM': SiPrisma,
  'RESTful APIs': SiNodedotjs,
  'Redis': SiRedis,
  'BullMQ': SiRedis,

  // Databases & Cache
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'Supabase': SiSupabase,
  'Upstash': SiUpstash,

  // Cloud & DevOps & Storage
  'Docker': SiDocker,
  'Jenkins': SiJenkins,
  'Terraform': SiTerraform,
  'CI/CD': SiGithubactions,
  'EAS': SiExpo,
  'Vercel': SiVercel,
  'Railway': SiRailway,
  'Oracle Cloud': GrOracle,
  'Azure': VscAzure,
  'AWS': FaAws,
  'Cloudinary': SiCloudinary,

  // Messaging & Queues
  'RabbitMQ': SiRabbitmq,

  // Testing & Quality
  'Jest': SiJest,
  'Cypress': SiCypress,
  'End-to-End Testing': SiCypress,
  'Unit Testing': SiJest,
};

export const StackSection = () => {
  const categories = Object.entries(CONTENT.stack);

  return (
    <section id="stack" className="relative w-full bg-gray-50 py-24 md:py-32 lg:py-40 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <SectionLabel number="04" title="Stack & Technologies" />

        {/* Category Grid */}
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-gray-200 border border-gray-200 mt-8">
            {categories.map(([category, skills]) => (
              <div key={category} className="bg-white p-6 md:p-8 flex flex-col">
                <span className="font-mono text-[10px] tracking-wider uppercase text-gray-400 mb-6 pb-4 border-b border-gray-100 font-semibold">
                  {category}
                </span>
                <ul className="flex flex-col gap-3">
                  {skills.map((skill) => {
                    const Icon = ICON_MAP[skill];
                    return (
                      <li
                        key={skill}
                        className="flex items-center gap-2.5 group"
                      >
                        {Icon ? (
                          <Icon className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors duration-300 flex-shrink-0" />
                        ) : (
                          <span className="w-4 h-4 flex items-center justify-center text-[9px] font-mono text-gray-400 border border-gray-200 flex-shrink-0 rounded-sm">
                            ✦
                          </span>
                        )}
                        <span className="font-sans text-xs text-gray-800 font-medium group-hover:text-black transition-colors duration-300">
                          {skill}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Tools Icon Cloud — Visual summary below the grid */}
        <FadeIn delay={0.2}>
          <div className="mt-12 border border-gray-200 bg-white p-8 md:p-10">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <span className="font-mono text-[10px] tracking-wider uppercase text-gray-400">
                OFFICIAL TOOLS &amp; BRAND LOGOS
              </span>
              <span className="font-mono text-[10px] tracking-wider uppercase text-black font-semibold">
                {Object.values(CONTENT.stack).flat().length} TECHNOLOGIES
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {Object.values(CONTENT.stack)
                .flat()
                .map((skill) => {
                  const Icon = ICON_MAP[skill];
                  if (!Icon) return null;
                  return (
                    <div
                      key={skill}
                      className="group flex items-center gap-2 bg-gray-50 hover:bg-black px-3 py-2 border border-gray-200 hover:border-black transition-all duration-300 cursor-default rounded-sm"
                      title={skill}
                    >
                      <Icon className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                      <span className="font-mono text-[10px] tracking-wider uppercase text-gray-800 group-hover:text-white transition-colors duration-300 whitespace-nowrap font-medium">
                        {skill}
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
