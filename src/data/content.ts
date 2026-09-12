export interface Metric {
  value: string;
  label: string;
  sublabel: string;
}

export interface PaperLink {
  label: string;
  url: string;
}

export interface ResearchPaper {
  title: string;
  subtitle?: string;
  venue: string;
  publisher: string;
  role: string;
  pages?: string;
  date?: string;
  architecture: string;
  metrics: Metric[];
  links: PaperLink[];
}

export interface SecondaryResearch {
  title: string;
  status: string;
  role: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  url?: string;
  stack: string[];
  description: string;
  confidential?: boolean;
  image?: string;
}

export interface ExperienceBullet {
  metric?: string;
  text: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  bullets?: ExperienceBullet[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface ContentData {
  hero: {
    line1: string;
    line2: string;
    summary: string;
    status: string;
  };
  research: {
    primary: ResearchPaper;
    secondary: SecondaryResearch;
  };
  projects: {
    live: ProjectItem[];
    confidential: ProjectItem[];
    other: ProjectItem[];
  };
  experience: ExperienceItem[];
  stack: Record<string, string[]>;
  education: {
    degree: string;
    institution: string;
    dates: string;
    thesis: string;
  };
  certifications: Certification[];
  achievements: string[];
  quote: {
    text: string;
    author: string;
    source: string;
  };
  contact: {
    email: string;
    linkedin: string;
    github: string;
    location: string;
  };
}

export const CONTENT: ContentData = {
  hero: {
    line1: "ENGINEERING",
    line2: "INTELLIGENCE",
    summary: "Senior Full Stack AI Engineer & Researcher. Architecting scalable platforms and parameter-efficient deepfake detection frameworks.",
    status: "AVAILABLE / REMOTE",
  },

  research: {
    primary: {
      title: "MAPF-Lite",
      subtitle: "A Parameter-Efficient Multi-modal Framework for High-Fidelity Deepfake Detection",
      venue: "FLINS-ISKE 2026",
      publisher: "Springer Nature",
      role: "Sole Architect & Lead Researcher",
      pages: "pp 455–474",
      date: "First Online: 09 July 2026",
      architecture: "Frozen CLIP + Whisper backbones, Forgery Signature Gate, SRM/DCT Analysis, Method-Aware Dynamic Prompting, XAI heatmaps. Outperformed AAAI 2025 state-of-the-art (4.4M params) using 99.6% fewer parameters.",
      metrics: [
        { value: "99.34%", label: "ACCURACY", sublabel: "FakeAVCeleb" },
        { value: "99.84%", label: "AUC", sublabel: "FakeAVCeleb" },
        { value: "0.566M", label: "PARAMETERS", sublabel: "99.6% Reduction" },
        { value: "4.7×", label: "INFERENCE", sublabel: "Real-Time" },
        { value: "99.40%", label: "CROSS-DATASET", sublabel: "Zero-Shot" },
        { value: "1.1 GB", label: "PEAK MEMORY", sublabel: "Edge Deployable" },
      ],
      links: [
        { label: "READ PAPER", url: "https://link.springer.com/chapter/10.1007/978-981-92-2487-6_28" },
        { label: "VIEW BOOK", url: "https://link.springer.com/book/10.1007/978-981-92-2487-6" },
      ],
    },
    secondary: {
      title: "Deepfake Detection in the Multimodal Era: A Systematic Review",
      status: "In Preparation",
      role: "Lead Author",
      description: "Surveys multimodal deepfake detection techniques, parameter-efficient architectures, and benchmark datasets, extending MAPF-Lite findings.",
    },
  },

  projects: {
    live: [
      {
        title: "Estabraq",
        category: "Fashion E-Commerce Platform",
        url: "estabraq.pk",
        stack: ["Next.js", "TypeScript", "Supabase", "Prisma ORM", "GraphQL", "Redis"],
        description: "Live production platform delivering sub-2-second load times. GraphQL APIs combined with Redis caching reduced latency by 30%. Automated Docker CI/CD environments cut release cycles by 25%.",
        confidential: false,
      },
      {
        title: "MyPDFMate",
        category: "PDF SaaS",
        url: "mypdfmate.com",
        stack: ["Next.js", "FastAPI", "AI Processing"],
        description: "Live production SaaS for advanced PDF processing and AI-powered document workflows. AI-driven document analysis and transformation pipelines wrapped in a clean, optimized interface.",
        confidential: false,
      },
      {
        title: "Khushi Motors",
        category: "Automotive Marketplace",
        url: "khushimotors.com",
        stack: ["Next.js", "Full Stack", "PostgreSQL"],
        description: "Live automotive marketplace with comprehensive product catalogue, dynamic filtering, and inquiry management. Production-grade search and secure lead capture.",
        confidential: false,
      },
    ],
    confidential: [
      {
        title: "DeployGenius",
        category: "AI Chatbot SaaS",
        stack: ["FastAPI", "LangChain", "OpenAI GPT-4", "Next.js", "Redis", "PostgreSQL", "Stripe"],
        description: "Multi-tenant AI SaaS with RAG grounding, multi-session agentic workflows, and complete Stripe subscription lifecycle management. Optimized API costs by 25% via token consumption tuning.",
        confidential: true,
      },
      {
        title: "LingumedAI",
        category: "Clinical AI for Nurses",
        stack: ["React", "FastAPI", "LangChain", "RAG", "pgvector", "OpenAI API"],
        description: "AI clinical assistant with real-time diagnostic guidance and drug interaction checks. Domain-specific RAG pipeline across medical literature with role-based access control and audit logging.",
        confidential: true,
      },
    ],
    other: [
      {
        title: "Pointr",
        category: "Livestock Management (Web + Mobile)",
        url: "livestock.pointrsolutions.co.za",
        stack: ["Expo", "React Native", "Django", "JWT", "Android", "iOS", "EAS"],
        description: "Full-stack livestock management ecosystem. Offline-first two-phase architecture with zero data loss. XR5000 weigh-scale integration via Wi-Fi with ADI XML parsing.",
      },
      {
        title: "ForexAI",
        category: "Mobile Trading & Prediction",
        stack: ["React Native", "XGBoost", "Kronos AI", "Python"],
        description: "Forex education app with AI market prediction. Fine-tuned XGBoost + Kronos AI ensemble on historical price data with in-app learning curriculum.",
      },
      {
        title: "Image Converter",
        category: "SaaS Application",
        url: "pixelconvert.app",
        stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "WebAssembly"],
        description: "Lightning-fast image conversion and optimization SaaS with drag-and-drop interface and client-side processing.",
      },
    ],
  },

  experience: [
    {
      role: "Senior Full-Stack AI Engineer",
      company: "Huzzle.com",
      location: "London, UK (Remote)",
      duration: "Mar 2026 — Present",
      description: "Building highly scalable AI-driven recruitment infrastructure by deeply integrating LLM pipelines with advanced frontend product features for a live, high-traffic B2C platform ecosystem.",
      bullets: [
        { metric: "AI PLATFORM", text: "Architecting scalable recruitment infrastructure integrating LLM pipelines with reactive frontend applications." },
        { metric: "AGENTIC WORKFLOWS", text: "Building automated candidate semantic matching, RAG-grounded profile evaluations, and smart parsing." },
        { metric: "HIGH-TRAFFIC B2C", text: "Optimizing client-facing user experiences to maintain sub-100ms response targets under peak traffic." },
      ],
    },
    {
      role: "Founder & Lead Architect",
      company: "Neural Stack",
      location: "Remote",
      duration: "2026 — Present",
      description: "Directing technical strategy, enterprise architecture, and advanced system design blueprints for a premier AI-native software engineering agency.",
      bullets: [
        { metric: "AI STRATEGY", text: "Directing technical roadmaps, enterprise AI blueprints, and high-performance system designs." },
        { metric: "ENTERPRISE RAG", text: "Delivering private LLM deployments, pgvector knowledge grounding, and fine-tuned agent architectures." },
        { metric: "SYSTEM SCALING", text: "Advising engineering teams on cost-effective model routing and distributed cloud infrastructure." },
      ],
    },
    {
      role: "Full Stack Engineer",
      company: "MAQ Enterprises Ltd.",
      location: "Rawalpindi, Pakistan",
      duration: "Jan 2023 — Feb 2026",
      description: "Reduced page load time by 40% via SSR optimization and code splitting. Improved data retrieval speeds by 35% through PostgreSQL and MongoDB schema optimization. Cut release cycle time by 30% deploying Jenkins and Docker CI/CD pipelines. Reduced production bug incidence by 25% using Cypress and Jest. Provisioned infrastructure-as-code using Terraform.",
      bullets: [
        { metric: "40% REDUCTION", text: "Page load time cut via Next.js SSR optimization, dynamic code splitting, and bundle trimming." },
        { metric: "35% SPEEDUP", text: "Database retrieval acceleration achieved through PostgreSQL relational schema and MongoDB index tuning." },
        { metric: "30% FASTER", text: "Release cycle time cut by deploying automated Jenkins and Docker CI/CD pipelines." },
        { metric: "25% FEWER BUGS", text: "Production bug incidence reduced using rigorous Cypress end-to-end and Jest unit test suites." },
        { metric: "TERRAFORM IAC", text: "Provisioned automated cloud infrastructure and reproducible environments with Infrastructure as Code." },
      ],
    },
    {
      role: "AI Researcher",
      company: "GIFT University",
      location: "Gujranwala, Pakistan",
      duration: "2024 — 2026",
      description: "Designed MAPF-Lite, published in peer-reviewed journal and Springer Nature proceedings. Reduced trainable parameters by 99.6% through PEFT while maintaining SOTA accuracy. Achieved 30% detection latency reduction via lightweight attention mechanisms for edge deployment.",
      bullets: [
        { metric: "SPRINGER NATURE", text: "Conceived, authored, and published MAPF-Lite at FLINS-ISKE 2026 (Springer Nature proceedings)." },
        { metric: "99.6% PARAMETER CUT", text: "Reduced trainable parameters from 4.4M+ down to 0.566M using PEFT while matching SOTA accuracy." },
        { metric: "30% LATENCY CUT", text: "Engineered lightweight attention mechanisms and frequency-domain filters for real-time edge detection." },
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "Estabraq",
      location: "Pakistan",
      duration: "2025 — May 2026",
      description: "Architected live fashion e-commerce platform with Next.js App Router, Prisma ORM, and Supabase. Integrated GraphQL APIs, Redis caching, and CDN image optimization, reducing latency by 30%. Automated deployments via Docker CI/CD, accelerating release cycles by 25%.",
      bullets: [
        { metric: "SUB-2S LOADS", text: "Architected high-throughput fashion platform with Next.js App Router, Prisma ORM, and Supabase." },
        { metric: "30% LATENCY CUT", text: "Integrated GraphQL APIs, Redis caching layers, and edge CDN asset optimization." },
        { metric: "25% FASTER", text: "Accelerated release cycles and automated zero-downtime rollouts via Docker CI/CD pipelines." },
      ],
    },
  ],

  stack: {
    "Languages": ["Python", "TypeScript", "JavaScript", "Java", "C++", "PHP"],
    "AI & LLM": ["LangChain", "LlamaIndex", "OpenAI", "Anthropic Claude", "Hugging Face", "RAG Pipelines", "pgvector", "Pinecone"],
    "ML & Vision": ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn", "MLflow", "Ray", "CUDA", "Vision Transformers", "CLIP", "Whisper", "XGBoost", "Kronos AI", "PEFT"],
    "Frontend": ["Next.js", "React", "Angular", "Vue.js", "Svelte", "React Native", "Expo", "Redux", "Webpack", "Vite", "Tailwind CSS", "Material UI", "HTML", "CSS"],
    "Backend": ["Node.js", "Express", "FastAPI", "Django", "Spring Boot", "ASP.NET", "Prisma ORM", "GraphQL", "REST APIs", "gRPC", "Apollo"],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Cassandra", "Elasticsearch", "DynamoDB", "Supabase", "Oracle DB"],
    "DevOps & Cloud": ["AWS", "GCP", "Azure", "Oracle Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "GitLab CI", "Ansible", "Prometheus", "Grafana", "Nginx", "Apache Kafka", "RabbitMQ", "CI/CD", "Vercel", "Railway"],
  },

  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "GIFT University, Gujranwala, Pakistan",
    dates: "Sep 2022 — Mar 2026",
    thesis: "MAPF-Lite — published at FLINS-ISKE 2026 and included in Springer Nature proceedings volume.",
  },

  certifications: [
    { name: "OCI Certified Generative AI Professional", issuer: "Oracle", year: "2025" },
    { name: "OCI Certified AI Foundations Associate", issuer: "Oracle", year: "2025" },
    { name: "Agentic AI Expert", issuer: "IBM", year: "2026" },
    { name: "Build RAG Applications", issuer: "IBM", year: "2026" },
    { name: "NLP and Computer Vision Specialist", issuer: "IBM", year: "2026" },
    { name: "Generative AI: Language Modeling with Transformers", issuer: "IBM", year: "2026" },
    { name: "Advanced React", issuer: "Meta", year: "2026" },
    { name: "Machine Learning Using Python", issuer: "IBM", year: "2026" },
  ],

  achievements: [
    "AMD Developer Hackathon Act II Participant (Team Neural Stack)",
    "Harvard HSIL Health Systems Hackathon Participant (GIFT University)",
    "MAPF-Lite included in Springer Nature proceedings volume (FLINS-ISKE 2026)",
  ],

  quote: {
    text: "The best model is not the largest one. It is the smallest one that reliably solves the problem deployed on infrastructure that meets real world constraints.",
    author: "Muhammad Abdullah Butt",
    source: "MAPF-Lite (FLINS-ISKE 2026)",
  },

  contact: {
    email: "abdullahbutt3579@gmail.com",
    linkedin: "linkedin.com/in/muhammadabdullahbutt",
    github: "github.com/Abdullahs-git",
    location: "Gujranwala, Pakistan",
  },
};
