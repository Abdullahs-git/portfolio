'use client';
import { CONTENT } from '@/data/content';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { type IconType } from 'react-icons';
import {
  SiPython, SiTypescript, SiJavascript, SiCplusplus, SiPhp,
  SiLangchain, SiHuggingface,
  SiPytorch, SiTensorflow, SiKeras, SiScikitlearn, SiMlflow, SiNvidia,
  SiNextdotjs, SiReact, SiAngular, SiVuedotjs, SiSvelte, SiExpo, SiRedux, SiWebpack, SiVite, SiTailwindcss, SiMui, SiHtml5,
  SiNodedotjs, SiExpress, SiFastapi, SiDjango, SiSpringboot, SiDotnet, SiPrisma, SiGraphql, SiApollographql,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiApachecassandra, SiElasticsearch, SiSupabase,
  SiGooglecloud, SiDocker, SiKubernetes, SiTerraform, SiJenkins, SiGithubactions, SiGitlab, SiAnsible, SiPrometheus, SiGrafana, SiNginx, SiApachekafka, SiRabbitmq, SiVercel, SiRailway,
} from 'react-icons/si';
import { FaJava, FaAws, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { GrOracle } from 'react-icons/gr';
import { TbBrandOpenai, TbBrandReactNative } from 'react-icons/tb';

// Comprehensive icon mapping for all tech stack items
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
  'OpenAI': TbBrandOpenai,
  'Hugging Face': SiHuggingface,

  // ML & Vision
  'PyTorch': SiPytorch,
  'TensorFlow': SiTensorflow,
  'Keras': SiKeras,
  'Scikit-Learn': SiScikitlearn,
  'MLflow': SiMlflow,
  'CUDA': SiNvidia,

  // Frontend
  'Next.js': SiNextdotjs,
  'React': SiReact,
  'Angular': SiAngular,
  'Vue.js': SiVuedotjs,
  'Svelte': SiSvelte,
  'React Native': TbBrandReactNative,
  'Expo': SiExpo,
  'Redux': SiRedux,
  'Webpack': SiWebpack,
  'Vite': SiVite,
  'Tailwind CSS': SiTailwindcss,
  'Material UI': SiMui,
  'HTML': SiHtml5,
  'CSS': FaCss3Alt,

  // Backend
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  'FastAPI': SiFastapi,
  'Django': SiDjango,
  'Spring Boot': SiSpringboot,
  'ASP.NET': SiDotnet,
  'Prisma ORM': SiPrisma,
  'GraphQL': SiGraphql,
  'Apollo': SiApollographql,

  // Databases
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  'MongoDB': SiMongodb,
  'Redis': SiRedis,
  'Cassandra': SiApachecassandra,
  'Elasticsearch': SiElasticsearch,
  'DynamoDB': FaDatabase,
  'Supabase': SiSupabase,
  'Oracle DB': GrOracle,

  // DevOps & Cloud
  'AWS': FaAws,
  'GCP': SiGooglecloud,
  'Azure': VscAzure,
  'Oracle Cloud': GrOracle,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'Terraform': SiTerraform,
  'Jenkins': SiJenkins,
  'GitHub Actions': SiGithubactions,
  'GitLab CI': SiGitlab,
  'Ansible': SiAnsible,
  'Prometheus': SiPrometheus,
  'Grafana': SiGrafana,
  'Nginx': SiNginx,
  'Apache Kafka': SiApachekafka,
  'RabbitMQ': SiRabbitmq,
  'Vercel': SiVercel,
  'Railway': SiRailway,
};

export const StackSection = () => {
  const categories = Object.entries(CONTENT.stack);

  return (
    <section id="stack" className="relative w-full bg-gray-50 py-24 md:py-32 lg:py-40 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <SectionLabel number="04" title="Stack" />

        {/* Category Grid */}
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-gray-200 border border-gray-200 mt-2">
            {categories.map(([category, skills]) => (
              <div key={category} className="bg-white p-6 md:p-8 flex flex-col">
                <span className="font-mono text-[9px] tracking-wider uppercase text-gray-400 mb-6 pb-4 border-b border-gray-100">
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
                          <Icon className="w-3.5 h-3.5 text-gray-400 group-hover:text-black transition-colors duration-300 flex-shrink-0" />
                        ) : (
                          <span className="w-3.5 h-3.5 flex items-center justify-center text-[8px] font-mono text-gray-400 border border-gray-200 flex-shrink-0 rounded-sm">
                            ✦
                          </span>
                        )}
                        <span className="font-sans text-xs text-gray-600 font-light group-hover:text-black transition-colors duration-300">
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
              <span className="font-mono text-[9px] tracking-wider uppercase text-gray-400">
                TOOLS &amp; TECHNOLOGIES
              </span>
              <span className="font-mono text-[9px] tracking-wider uppercase text-black font-medium">
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
                      className="group flex items-center gap-2 bg-gray-50 hover:bg-black px-3 py-2 border border-gray-200 hover:border-black transition-all duration-300 cursor-default"
                      title={skill}
                    >
                      <Icon className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-300" />
                      <span className="font-mono text-[10px] tracking-wider uppercase text-gray-600 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
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
