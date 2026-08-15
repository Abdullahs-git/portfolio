'use client';
import { CONTENT } from '@/data/content';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiPython, SiCplusplus, 
  SiGo, SiDocker, SiKubernetes, SiVercel, SiTailwindcss,
  SiPostgresql, SiMongodb, SiRedis, SiPrisma, SiGraphql, SiTensorflow, SiPytorch
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const ICONS: Record<string, React.ReactNode> = {
  'Next.js': <SiNextdotjs />,
  'React': <SiReact />,
  'TypeScript': <SiTypescript />,
  'JavaScript': <SiJavascript />,
  'Python': <SiPython />,
  'C++': <SiCplusplus />,
  'Go Fiber': <SiGo />,
  'Docker': <SiDocker />,
  'Kubernetes': <SiKubernetes />,
  'AWS': <FaAws />,
  'Tailwind CSS': <SiTailwindcss />,
  'PostgreSQL': <SiPostgresql />,
  'MongoDB': <SiMongodb />,
  'Redis': <SiRedis />,
  'Prisma': <SiPrisma />,
  'GraphQL': <SiGraphql />,
  'TensorFlow': <SiTensorflow />,
  'PyTorch': <SiPytorch />
};

export const GithubStackGrid = () => {
  const categories = Object.entries(CONTENT.stack);
  
  // Create a grid representation like GitHub's contribution graph
  // We'll just generate random intensities for visual effect
  const generateGrid = () => {
    const grid = [];
    const weeks = 52;
    const days = 7;
    for (let w = 0; w < weeks; w++) {
      const col = [];
      for (let d = 0; d < days; d++) {
        // Deterministic pseudo-random intensity to prevent hydration mismatch
        const seed = w * 7 + d;
        const randomish = Math.abs(Math.sin(seed * 12.9898 + 78.233)) * 43758.5453;
        const intensity = Math.floor((randomish % 1) * 5);
        col.push(intensity);
      }
      grid.push(col);
    }
    return grid;
  };

  const grid = generateGrid();

  const getIntensityClass = (level: number) => {
    switch(level) {
      case 1: return 'bg-neon-primary/20';
      case 2: return 'bg-neon-primary/40';
      case 3: return 'bg-neon-primary/70';
      case 4: return 'bg-neon-primary';
      default: return 'bg-white/5';
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-12 md:mt-24 space-y-16">
      
      {/* GitHub style contribution graph */}
      <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
        <div className="min-w-[800px] flex gap-1 justify-center p-4 border border-white/10 rounded-lg bg-bg-elevated/50 backdrop-blur-sm">
          {grid.map((week, wIndex) => (
            <div key={wIndex} className="flex flex-col gap-1">
              {week.map((day, dIndex) => (
                <motion.div 
                  key={`${wIndex}-${dIndex}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (wIndex * 0.01) + (dIndex * 0.02), duration: 0.3 }}
                  className={`w-3 h-3 rounded-[2px] ${getIntensityClass(day)} transition-colors hover:bg-white cursor-pointer`}
                  title="Code Contribution"
                />
              ))}
            </div>
          ))}
        </div>
        <div className="text-center mt-4 font-mono text-xs text-text-muted">
          Continuous Integration & Deployment Graph
        </div>
      </div>

      {/* Tech Icons Stacks */}
      <div className="w-full flex justify-center mb-8">
        <img src="https://skillicons.dev/icons?i=python,ts,js,java,cpp,php,react,nextjs,pytorch,tensorflow,angular,vue,svelte,tailwind,materialui,nodejs,express,nestjs,fastapi,django,spring,graphql,postgres,mysql,mongodb,redis,cassandra,elasticsearch,dynamodb,supabase,prisma,aws,gcp,azure,docker,kubernetes,terraform,jenkins,github,gitlab,ansible,prometheus,grafana,nginx,kafka,rabbitmq&theme=dark&perline=15" alt="Extensive Technical Stack" className="max-w-full" />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map(([category, skills], idx) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 border border-white/10 rounded-xl bg-bg-elevated hover:border-neon-primary/50 transition-colors group"
          >
            <h3 className="font-mono text-sm uppercase tracking-widest text-neon-secondary mb-6">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <div key={skill} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-neon-primary hover:bg-neon-primary/10 transition-all cursor-default">
                  <span className="text-sm text-text-muted group-hover:text-text-primary">
                    {ICONS[skill] ? ICONS[skill] : <span className="w-2 h-2 rounded-full bg-neon-primary inline-block" />}
                  </span>
                  <span className="font-body text-xs md:text-sm text-text-primary">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
