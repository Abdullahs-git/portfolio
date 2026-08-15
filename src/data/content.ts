export const CONTENT = {
  hero: {
    eyebrow: "FULL STACK ENGINEER · AI RESEARCHER",
    hook: "Published AI researcher. Architecting scalable systems. Zero fluff.",
    skills: ["Creative", "Reliable", "Strategist", "Builder", "Efficient"],
    cta: {
      primary: "Book a Call",
      secondary: "About Me",
    },
    stats: [
      { label: "Specialty", value: "Scalable Systems" },
      { label: "Published In", value: "Springer" },
      { label: "Certified", value: "Oracle & IBM" }
    ]
  },
  about: {
    narrative: [
      "Three years in the trenches of production engineering. Not tutorials, not side projects — the real thing: systems handling live traffic, live payments, live users who notice when things break.",
      "Five shipped products across healthcare, fintech, livestock management, fashion e-commerce, and SaaS. Each one taught something the last one didn't. The common thread: obsessive attention to performance, architecture that scales, and interfaces that feel effortless.",
      "Published in Springer Nature at FLINS-ISKE 2026 for MAPF-Lite, a deepfake detection framework that hit 99.34% accuracy with 99.6% fewer parameters. Oracle and IBM certified. Currently building AI-driven recruitment infrastructure at Huzzle.com in London."
    ],
    credentials: [
      "Oracle Certified",
      "IBM AI Expert",
      "Meta Advanced React",
      "Springer Nature Published",
      "BSc Computer Science",
    ]
  },
  publications: [
    {
      title: "MAPF-Lite: A Parameter-Efficient Multi-modal Framework for High-Fidelity Deepfake Detection",
      venue: "Conference Paper (pp 455–474) — First Online: 09 July 2026",
      role: "Sole architect and lead researcher",
      bullets: [
        "99.34% accuracy and 99.84% AUC on FakeAVCeleb; 99.40% cross-dataset accuracy on DeepfakeTIMIT (zero-shot)",
        "Reduced trainable parameters by 99.6% to 0.566M via frozen CLIP/Whisper backbones with SRM and DCT analysis",
        "4.7× real-time inference at 1.1 GB peak memory; edge and mobile deployable",
        "XAI modules with visual heatmaps and frame-level suspicion scores for forensic transparency"
      ],
      links: [
        { label: "Read Paper", url: "https://link.springer.com/chapter/10.1007/978-981-92-2487-6_28" }
      ]
    },
    {
      title: "Machine Learning and Knowledge Engineering for Decision Making",
      venue: "Springer Nature Proceedings Volume (FLINS-ISKE 2026)",
      role: "Contributing Author",
      bullets: [
        "The 17th International FLINS Conference on Fuzzy Logic for Intelligent Systems and The 21st International Conference on Intelligent Systems and Knowledge Engineering, FLINS-ISKE 2026, Sydney, NSW, Australia, July 15–19, 2026, Proceedings, Part III",
        "MAPF-Lite research framework officially included and published in this volume."
      ],
      links: [
        { label: "View Book", url: "https://link.springer.com/book/10.1007/978-981-92-2487-6" }
      ]
    },
    {
      title: "Deepfake Detection in the Multimodal Era: A Systematic Review",
      venue: "Review Paper (In Preparation)",
      role: "Lead author",
      bullets: [
        "Surveys multimodal deepfake detection techniques, parameter-efficient architectures, and benchmark datasets, extending MAPF-Lite findings"
      ],
      links: []
    }
  ],
  experience: [
    {
      role: "Senior Full-Stack AI Engineer",
      company: "Huzzle.com",
      location: "London, UK (Remote)",
      duration: "Mar 2026–Present",
      achievements: [
        "Building AI-driven recruitment infrastructure integrating LLM pipelines with full-stack product features for a live, high-traffic B2C platform"
      ]
    },
    {
      role: "Full Stack Engineer",
      company: "MAQ Enterprises Ltd.",
      location: "Rawalpindi, Pakistan",
      duration: "Jan 2023–Feb 2026",
      achievements: [
        "Engineered production web applications with Next.js and Node.js; reduced page load time by 40% via SSR optimization and code splitting",
        "Designed RESTful APIs and optimized PostgreSQL and MongoDB schemas, improving data retrieval speed by 35% on critical endpoints",
        "Implemented Jenkins and Docker CI/CD pipelines, cutting release cycle time by 30%",
        "Automated end-to-end testing with Cypress and Jest, reducing production bug incidence by 25%",
        "Mentored 3+ junior developers through code reviews; provisioned infrastructure-as-code using Terraform"
      ]
    },
    {
      role: "AI Researcher",
      company: "GIFT University",
      location: "Gujranwala, Pakistan",
      duration: "2024–2026",
      achievements: [
        "Designed MAPF-Lite multimodal architecture (CLIP + Whisper + ViT) for deepfake detection, published in peer-reviewed journal and Springer Nature proceedings",
        "Reduced trainable parameters by 99.6% while maintaining state-of-the-art accuracy through parameter-efficient fine-tuning (PEFT)",
        "Achieved 30% reduction in detection latency by developing lightweight attention mechanisms for edge deployment"
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Estabraq (Fashion Brand)",
      location: "Pakistan",
      duration: "2025–May 2026",
      achievements: [
        "Architected live fashion e-commerce platform (estabraq.pk) with Next.js App Router, Prisma ORM, and Supabase; achieved sub-2-second load times in production",
        "Integrated GraphQL APIs, Redis caching, and CDN image optimization, reducing server latency by 30%"
      ]
    }
  ],
  projects: {
    featured: [
      {
        title: "Image Converter",
        category: "SaaS Application",
        links: { demo: "pixelconvert.app", github: "" },
        tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "WebAssembly"],
        description: "A sleek, lightning-fast SaaS web application for converting and optimizing images. Built with a modern glassmorphism UI, intuitive drag-and-drop upload zones, and ultra-fast client-side processing.",
        image: "/projects/image_converter.jpg"
      },
      {
        title: "Estabraq",
        category: "Fashion E-Commerce Platform",
        links: { demo: "estabraq.pk", github: "" },
        tags: ["Next.js", "TypeScript", "Supabase", "Prisma ORM", "GraphQL", "Redis"],
        description: "Live production platform with sub-2-second load times, real-time inventory, and secure authentication. GraphQL APIs and Redis caching reduced client-server latency by 30%.",
        image: "/projects/estabraq.jpg"
      }
    ],
    regular: [
      {
        title: "MyPDFMate",
        category: "PDF SaaS",
        links: { demo: "mypdfmate.com", github: "" },
        tags: ["Next.js", "FastAPI", "AI Processing"],
        description: "Live production SaaS for PDF processing and AI-powered document workflows."
      },
      {
        title: "Khushi Motors",
        category: "Automotive Platform",
        links: { demo: "khushimotors.com", github: "" },
        tags: ["Next.js", "Full Stack"],
        description: "Live automotive marketplace with full product catalogue, filtering, and inquiry management."
      },
      {
        title: "DeployGenius",
        category: "AI Chatbot SaaS",
        links: { github: "" },
        tags: ["FastAPI", "LangChain", "OpenAI GPT-4", "Next.js", "Redis", "PostgreSQL", "Stripe"],
        description: "Multi-tenant AI SaaS with RAG grounding, multi-session chat management, and agentic workflows. Tiered pricing and webhooks optimized API costs by 25%."
      },
      {
        title: "LingumedAI",
        category: "Clinical AI for Nurses",
        links: { github: "" },
        tags: ["React", "FastAPI", "LangChain", "RAG", "pgvector", "OpenAI API"],
        description: "AI clinical assistant giving nurses real-time access to diagnostic guidance and drug interaction checks. Domain-specific RAG pipeline ingesting medical literature with role-based access control."
      },
      {
        title: "ForexAI",
        category: "Mobile Trading & Prediction App",
        links: { github: "" },
        tags: ["React Native", "XGBoost", "Kronos AI", "Python"],
        description: "Forex education app with AI market prediction; fine-tuned XGBoost + Kronos AI ensemble on historical price data with in-app learning curriculum."
      }
    ]
  },
  stack: {
    "AI & LLM": ["LangChain", "LlamaIndex", "OpenAI", "Anthropic Claude", "Hugging Face", "RAG", "pgvector", "Pinecone", "System Architecture"],
    "ML & Vision": ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn", "MLflow", "ViT", "CLIP", "Whisper", "XGBoost", "PEFT"],
    "Frontend": ["Next.js", "React", "React Native", "Expo", "TypeScript", "Tailwind CSS", "GraphQL"],
    "Backend": ["Node.js", "Express", "FastAPI", "Django", "Prisma", "REST", "Redis"],
    "Databases": ["PostgreSQL", "MongoDB", "Supabase", "Redis", "Elasticsearch", "DynamoDB"],
    "DevOps & Cloud": ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Vercel", "Oracle Cloud"],
    "Core Languages": ["Python", "TypeScript", "JavaScript", "Java", "C++"]
  },
  education: [
    {
      degree: "BSc Computer Science",
      institution: "GIFT University, Gujranwala",
      dates: "Sep 2022–Mar 2026",
      thesis: "MAPF-Lite"
    }
  ],
  certifications: [
    { name: "OCI Certified Generative AI Professional", year: "2025", issuer: "Oracle" },
    { name: "OCI Certified AI Foundations Associate", year: "2025", issuer: "Oracle" },
    { name: "IBM AI Expert", year: "2026", issuer: "IBM" },
    { name: "IBM Build RAG Applications", year: "2026", issuer: "IBM" },
    { name: "IBM NLP & CV Specialist", year: "2026", issuer: "IBM" },
    { name: "IBM Generative AI: Language Modeling", year: "2026", issuer: "IBM" },
    { name: "Meta Advanced React", year: "2025", issuer: "Meta" },
    { name: "IBM Machine Learning Using Python", year: "2025", issuer: "IBM" }
  ],
  achievements: [
    "AMD Developer Hackathon Act II Participant (Team Neural Stack)",
    "Harvard HSIL Health Systems Hackathon Participant (GIFT University)",
    "MAPF-Lite included in Springer Nature proceedings volume (FLINS-ISKE 2026)"
  ],
  exploring: [
    { title: "Scalable Systems", desc: "Building robust, highly available architectures capable of handling heavy workloads and complex processing pipelines." },
    { title: "LLM Engineering at Scale", desc: "Architecting massively scaled pgvector data stores and highly optimized hallucination-resistant data pipelines." },
    { title: "Edge AI Deployment", desc: "Pushing the boundaries of deep model quantization, knowledge distillation, and local on-device inference capabilities." }
  ],
  quote: {
    text: "The best model is not the largest one. It is the smallest one that reliably solves the problem deployed on infrastructure that meets real world constraints.",
    author: "Muhammad Abdullah Butt, MAPF-Lite (FLINS-ISKE 2026)"
  },
  contact: {
    email: "abdullahbutt3579@gmail.com",
    linkedin: "linkedin.com/in/muhammadabdullahbutt",
    github: "github.com/Abdullahs-git",
    location: "Gujranwala, Pakistan",
    closingStatement: "Let's build something."
  }
};
