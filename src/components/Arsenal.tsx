"use client";

import { Terminal } from "lucide-react";

export default function Arsenal() {
  const stack = [
    {
      domain: "Core Languages & Frameworks",
      tech: "Python, TypeScript, JavaScript, Java, C++, PHP"
    },
    {
      domain: "AI & LLM Architecture",
      tech: "LangChain, LlamaIndex, OpenAI, Anthropic Claude, Hugging Face, RAG Pipelines, pgvector, Pinecone"
    },
    {
      domain: "Machine Learning & Vision",
      tech: "PyTorch, TensorFlow, Keras, Scikit Learn, MLflow, Ray, CUDA, Vision Transformers, CLIP, Whisper, XGBoost, Kronos AI, PEFT"
    },
    {
      domain: "Frontend & Mobile Design",
      tech: "Next.js, React, Angular, Vue.js, Svelte, React Native, Expo, Redux, Webpack, Vite, Tailwind CSS, Material UI, HTML, CSS"
    },
    {
      domain: "Backend & API Engineering",
      tech: "Node.js, Express, NestJS, FastAPI, Django, Spring Boot, ASP.NET, Go Fiber, Prisma ORM, GraphQL, REST APIs, gRPC, Apollo"
    },
    {
      domain: "Databases & Data Stores",
      tech: "PostgreSQL, MySQL, MongoDB, Redis, Cassandra, Elasticsearch, DynamoDB, Supabase, Oracle DB"
    },
    {
      domain: "DevOps, Cloud & Infrastructure",
      tech: "AWS, GCP, Azure, Oracle Cloud, Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, GitLab CI, Ansible, Prometheus, Grafana, Nginx, Apache Kafka, RabbitMQ, CI/CD, Vercel, Railway"
    }
  ];
  
  return (
    <section id="arsenal" className="py-32 px-4 md:px-12 border-t border-os-border bg-os-bg font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="os-window p-2 bg-os-panel border border-os-primary mb-12 inline-block">
          <div className="flex items-center gap-2 text-os-primary font-bold">
            <Terminal className="w-4 h-4" />
            <span>cat tech_stack.json</span>
          </div>
        </div>
        
        <div className="w-full flex justify-center mb-16 overflow-x-auto pb-4">
          <img src="https://skillicons.dev/icons?i=python,ts,js,java,cpp,php,react,nextjs,pytorch,tensorflow,angular,vue,svelte,tailwind,materialui,nodejs,express,nestjs,fastapi,django,spring,graphql,postgres,mysql,mongodb,redis,cassandra,elasticsearch,dynamodb,supabase,prisma,aws,gcp,azure,docker,kubernetes,terraform,jenkins,github,gitlab,ansible,prometheus,grafana,nginx,kafka,rabbitmq&theme=dark&perline=15" alt="Extensive Technical Stack" />
        </div>

        <div className="os-window border border-os-border bg-os-panel overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-os-border text-os-text text-xs uppercase tracking-widest">
                <th className="p-4 border-b border-os-border">Domain</th>
                <th className="p-4 border-b border-os-border">Enterprise Technologies & Frameworks</th>
              </tr>
            </thead>
            <tbody className="text-sm text-os-muted">
              {stack.map((item, idx) => (
                <tr key={idx} className="border-b border-os-border/50 hover:bg-os-border/20 transition-colors">
                  <td className="p-4 font-bold text-os-secondary whitespace-nowrap align-top">
                    <span className="text-os-primary mr-2">&gt;</span>
                    {item.domain}
                  </td>
                  <td className="p-4 leading-relaxed">
                    {item.tech}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
