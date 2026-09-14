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
  description?: string;
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
    summary: "Full Stack Engineer and AI Researcher with 3+ years of production experience building scalable web and mobile platforms and LLM-powered systems.",
    status: "AVAILABLE / REMOTE",
  },

  research: {
    primary: {
      title: "MAPF-Lite",
      subtitle: "A Parameter-Efficient Multimodal Framework for High-Fidelity Deepfake Detection",
      venue: "FLINS-ISKE Journal, 2026 (Published)",
      publisher: "Springer Nature Proceedings Volume",
      role: "Sole architect and lead researcher",
      architecture: "Frozen CLIP + Whisper backbones, Forgery Signature Gate, SRM/DCT Analysis, Method-Aware Dynamic Prompting, XAI heatmaps. Outperformed AAAI 2025 state-of-the-art using 99.6% fewer parameters.",
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
        title: "Pointr",
        category: "Livestock Management Platform (Web + Mobile)",
        url: "livestock.pointrsolutions.co.za",
        stack: ["Expo", "React Native", "Django", "JWT", "Android", "iOS", "EAS"],
        description: "Built and published a full-stack livestock management ecosystem: web dashboard + Expo / React Native mobile app (Android + iOS) with real-time sync via Django backend and JWT auth. Engineered offline-first two-phase architecture: data captured in the field without connectivity, uploaded on mobile data — zero data loss across 100% of sync cycles in production. Integrated XR5000 weigh-scale via Wi-Fi, parsing ADI XML sessions.",
        confidential: false,
      },
      {
        title: "Estabraq",
        category: "Fashion E-Commerce Platform",
        url: "estabraq.pk",
        stack: ["Next.js", "TypeScript", "Supabase", "Prisma ORM", "GraphQL", "Redis"],
        description: "Live production platform with sub-2-second load times, real-time inventory, and secure authentication. GraphQL APIs + Redis caching reduced client-server latency by 30%; CDN image optimization cut bounce rates measurably.",
        confidential: false,
      },
      {
        title: "MyPDFMate",
        category: "PDF SaaS",
        url: "mypdfmate.com",
        stack: ["Next.js", "FastAPI", "AI Processing"],
        description: "Live production SaaS for PDF processing and AI-powered document workflows.",
        confidential: false,
      },
      {
        title: "Khushi Motors",
        category: "Automotive Platform",
        url: "khushimotors.com",
        stack: ["Next.js", "Full Stack"],
        description: "Live automotive marketplace with full product catalogue, filtering, and inquiry management.",
        confidential: false,
      },
    ],
    confidential: [
      {
        title: "DeployGenius",
        category: "AI Chatbot SaaS",
        stack: ["FastAPI", "LangChain", "OpenAI GPT-4", "Next.js 14", "Redis", "PostgreSQL", "Stripe"],
        description: "Multi-tenant AI SaaS with RAG grounding, multi-session chat management, and agentic workflows. Stripe subscription lifecycle integration: tiered pricing, webhooks, secure checkout; optimized API costs by 25%.",
        confidential: true,
      },
      {
        title: "LingumedAI",
        category: "Clinical AI for Nurses",
        stack: ["React", "FastAPI", "LangChain", "RAG", "pgvector", "OpenAI API"],
        description: "AI clinical assistant giving nurses real-time access to diagnostic guidance and drug interaction checks, reducing physician dependency in critical moments. Domain-specific RAG pipeline ingesting medical literature and clinical guidelines into pgvector; hallucination-resistant responses with explicit uncertainty escalation.",
        confidential: true,
      },
    ],
    other: [
      {
        title: "ForexAI",
        category: "Mobile Trading & Prediction App",
        stack: ["React Native", "XGBoost", "Kronos AI", "Python"],
        description: "Forex education app with AI market prediction; fine-tuned XGBoost + Kronos AI ensemble on historical price data. In-app learning curriculum paired with live prediction signals for retail traders.",
      },
    ],
  },

  experience: [
    {
      role: "Senior Full-Stack AI Engineer",
      company: "Huzzle.com",
      location: "London, UK (Remote)",
      duration: "Mar 2026 – Present",
      description: "Building AI-driven recruitment infrastructure integrating LLM pipelines with full-stack product features for a live, high-traffic B2C platform",
      bullets: [
        { text: "Building AI-driven recruitment infrastructure integrating LLM pipelines with full-stack product features for a live, high-traffic B2C platform" }
      ],
    },
    {
      role: "Full Stack Engineer",
      company: "MAQ Enterprises Ltd.",
      location: "Rawalpindi, Pakistan",
      duration: "Jan 2023 – Feb 2026",
      description: "Engineered production web applications with Next.js and Node.js; reduced page load time by 40% via SSR optimization and code splitting",
      bullets: [
        { metric: "40% LOAD TIME CUT", text: "Engineered production web applications with Next.js and Node.js; reduced page load time by 40% via SSR optimization and code splitting" },
        { metric: "35% SPEEDUP", text: "Designed RESTful APIs and optimized PostgreSQL and MongoDB schemas, improving data retrieval speed by 35% on critical endpoints" },
        { metric: "30% FASTER", text: "Implemented Jenkins and Docker CI/CD pipelines, cutting release cycle time by 30%" },
        { metric: "25% FEWER BUGS", text: "Automated end-to-end testing with Cypress and Jest, reducing production bug incidence by 25%" },
        { metric: "IAC", text: "Mentored 3+ junior developers through code reviews; provisioned infrastructure-as-code using Terraform" },
      ],
    },
    {
      role: "AI Researcher",
      company: "GIFT University",
      location: "Gujranwala, Pakistan",
      duration: "2024 – 2026",
      description: "Designed MAPF-Lite multimodal architecture (CLIP + Whisper + ViT) for deepfake detection, published in peer-reviewed journal and Springer Nature proceedings",
      bullets: [
        { metric: "PUBLISHED", text: "Designed MAPF-Lite multimodal architecture (CLIP + Whisper + ViT) for deepfake detection, published in peer-reviewed journal and Springer Nature proceedings" },
        { metric: "99.6% PEFT CUT", text: "Reduced trainable parameters by 99.6% while maintaining state-of-the-art accuracy through parameter-efficient fine-tuning (PEFT)" },
        { metric: "30% LATENCY CUT", text: "Achieved 30% reduction in detection latency by developing lightweight attention mechanisms for edge deployment" },
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "Estabraq",
      location: "Pakistan",
      duration: "2025 – May 2026",
      description: "Architected live fashion e-commerce platform (estabraq.pk) with Next.js App Router, Prisma ORM, and Supabase; achieved sub-2-second load times in production",
      bullets: [
        { metric: "SUB-2S LOADS", text: "Architected live fashion e-commerce platform (estabraq.pk) with Next.js App Router, Prisma ORM, and Supabase; achieved sub-2-second load times in production" },
        { metric: "30% LATENCY CUT", text: "Integrated GraphQL APIs, Redis caching, and CDN image optimization, reducing server latency by 30%" },
        { metric: "25% FASTER", text: "Automated deployment with Docker CI/CD, cutting release cycles by 25%" },
      ],
    },
  ],

  stack: {
    "AI & LLM": ["LangChain", "LlamaIndex", "OpenAI API", "Anthropic Claude", "RAG Pipelines", "Pinecone", "pgvector", "Agentic Workflows"],
    "ML & Fintech AI": ["XGBoost", "Decision Trees", "Kronos AI", "Model Fine-Tuning", "Ensemble Modeling", "Time-Series Forecasting"],
    "Computer Vision": ["PyTorch", "Vision Transformers", "CLIP", "Whisper", "PEFT", "Model Quantization", "Edge Deployment"],
    "Frontend": ["Next.js", "React", "React Native", "Expo", "TypeScript", "Tailwind CSS", "GraphQL"],
    "Backend": ["FastAPI", "Node.js", "Django", "Prisma ORM", "RESTful APIs", "Redis"],
    "Databases": ["PostgreSQL", "MongoDB", "Supabase"],
    "DevOps & Cloud": ["Docker", "Jenkins", "Terraform", "CI/CD", "EAS", "Vercel", "Railway", "Oracle Cloud", "AWS"],
  },

  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "GIFT University, Gujranwala, Pakistan",
    dates: "Sep 2022 – Mar 2026",
    thesis: "MAPF-Lite — published at FLINS-ISKE 2026 and included in Springer Nature proceedings volume",
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
    "Published MAPF-Lite at FLINS-ISKE 2026",
    "Included in Springer Nature proceedings volume",
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
