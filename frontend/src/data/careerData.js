export const positionSummary = {
  kicker: "PR-based engineer in Australia",
  name: "Wayne Lin",
  title: "Backend / Full-Stack Engineer with AI product capability",
  tagline:
    "I build production-ready backend services, internal tools, and AI-enabled workflows for product and operations teams. My strongest stack is Java/Spring Boot, with growing React, TypeScript, Python, and cloud deployment capability.",
};

export const linkedinAssets = {
  headline:
    "Backend / Full-Stack Engineer | Java, Spring Boot, React | AI-enabled product delivery | PR in Australia",
  about: [
    "I am a PR-based software engineer in Australia with experience across Java backend delivery, web systems, and AI-related product work. My core strength is backend engineering with Spring Boot, APIs, data flows, and production-focused delivery.",
    "I am targeting backend or backend-leaning full-stack roles where I can help teams ship customer-facing products, internal tools, or AI-enabled workflows. I am especially interested in fintech, enterprise software, legal-tech, health-tech, and AI product teams.",
    "Alongside software engineering, I am building practical AI capability in Python, RAG, evaluation, deployment, and model-serving workflows so I can contribute to software engineer, AI product, or ML engineering roles over time.",
  ],
};

export const resumeVariants = [
  {
    title: "Software Resume",
    focus:
      "Primary version for Java backend, backend-leaning full-stack, and application engineer roles.",
    bullets: [
      "Lead with Java, Spring Boot, API design, integration, and production delivery.",
      "Position React and TypeScript as delivery-enabling strengths rather than the main identity.",
      "Use outcome verbs such as built, delivered, integrated, and improved.",
    ],
  },
  {
    title: "AI-enabled Software Resume",
    focus:
      "Secondary version for software engineer AI, AI engineer, applied AI, and ML platform roles.",
    bullets: [
      "Keep software engineering as the title, then add AI product capability as the differentiator.",
      "Highlight Python, TensorFlow, PyTorch, RAG, evaluation, and deployment experience.",
      "Show that you can connect models to product workflows, APIs, monitoring, and user-facing value.",
    ],
  },
];

export const targetRoles = [
  "Java Backend Engineer",
  "Backend-leaning Full-Stack Engineer",
  "Software Engineer",
  "Application Engineer",
  "Software Engineer, AI Products",
  "AI Engineer",
  "Applied AI Engineer",
];

export const targetCities = ["Sydney", "Melbourne", "Brisbane"];

export const targetIndustries = [
  "Financial services and enterprise software",
  "Government and regulated digital delivery",
  "Health-tech and education-tech",
  "AI automation SaaS",
  "Legal-tech and operations-heavy software teams",
];

export const applicationCadence = [
  "Apply to 20-30 high-match roles each week instead of mass applying to every software job.",
  "Spend most effort on companies where your stack overlaps clearly with the JD.",
  "Track each application by role, city, recruiter, interview stage, and resume version used.",
  "Reuse one strong master resume and tailor only the summary, skills order, and project bullets.",
];

export const learningRoadmap = [
  {
    phase: "Layer 1",
    title: "Software + AI foundations",
    items: ["React", "TypeScript", "Python", "ML basics", "Docker"],
  },
  {
    phase: "Layer 2",
    title: "Product and deployment",
    items: ["REST APIs", "Auth", "Cloud deployment", "MLflow", "Evaluation"],
  },
  {
    phase: "Layer 3",
    title: "Platform and MLOps",
    items: [
      "Kubernetes fundamentals",
      "Model serving",
      "Monitoring",
      "Kubeflow or KServe awareness",
    ],
  },
];

export const monthlyPlan = [
  {
    month: "Month 1",
    goal: "Get application-ready positioning and project foundations in place.",
    tasks: [
      "Finalize software and AI-enabled resume versions.",
      "Update LinkedIn headline, About section, and skills ordering.",
      "Refresh the portfolio site to present backend-first positioning.",
      "Start two high-ROI showcase projects with clear problem statements.",
    ],
  },
  {
    month: "Month 2",
    goal: "Turn the showcase projects into evidence you can talk through in interviews.",
    tasks: [
      "Add architecture notes, screenshots, README quality, and deployment steps.",
      "Practice project walkthroughs with system design and trade-off explanations.",
      "Deepen Docker, cloud deployment, and AI workflow understanding.",
      "Increase to steady, targeted weekly applications.",
    ],
  },
  {
    month: "Month 3",
    goal: "Extend from software roles into AI product and ML-adjacent roles.",
    tasks: [
      "Add evaluation, logging, cost awareness, or model-serving details to the AI project.",
      "Learn Kubernetes concepts at the deployment and service level.",
      "Widen applications to software engineer AI and applied AI roles.",
      "Start lightweight recruiter and meetup networking in your target cities.",
    ],
  },
];

export const aiOpsFramework = {
  principles: [
    "Humans own positioning, pricing, approvals, finances, and risk.",
    "AI handles research, drafting, process execution, reporting, and first-pass support.",
    "Only automate low-risk, repeatable tasks by default.",
  ],
  modules: [
    "Lead research and scoring",
    "Outbound content drafting",
    "Meeting notes to requirements and scope",
    "Project delivery support for code, test, and docs",
    "FAQ support and ticket triage",
    "Weekly reporting and operating summaries",
  ],
  controlPoints: [
    "Define which actions can run automatically and which need human approval.",
    "Set cost, token, and tool usage limits.",
    "Log outputs and escalation paths for all customer-facing actions.",
    "Keep high-risk actions human-reviewed before execution.",
  ],
};

export const projectBlueprints = [
  {
    slug: "customer-ops-portal",
    title: "Customer Ops Portal",
    subtitle: "Full-stack business system blueprint",
    summary:
      "A backend-leaning full-stack project for intake, workflow tracking, status updates, and reporting. It is designed to show that I can ship the kind of internal or client-facing web system many Australian SMEs actually buy.",
    hiringSignal:
      "Strong signal for Java backend, backend-leaning full-stack, and application engineer roles.",
    stack: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "AWS-ready",
    ],
    capabilities: [
      "Role-based authentication and audit-friendly actions",
      "Customer intake, task workflow, notes, and status history",
      "Dashboard reporting and searchable records",
      "API-first design with realistic business entities",
    ],
    deliverables: [
      "Project overview and architecture notes",
      "Feature scope for MVP versus later phases",
      "Hiring angle: how to describe the project in interviews",
    ],
  },
  {
    slug: "ai-knowledge-assistant",
    title: "AI Knowledge Assistant",
    subtitle: "RAG and model-serving showcase blueprint",
    summary:
      "An AI application project focused on document ingestion, retrieval, grounded answers, and operational safeguards. It demonstrates how to move from prototype AI to product-oriented delivery.",
    hiringSignal:
      "Strong signal for software engineer AI, AI engineer, applied AI, and ML platform roles.",
    stack: [
      "Python",
      "FastAPI",
      "LLM API",
      "Vector search",
      "Evaluation",
      "Docker",
      "Kubernetes-ready",
    ],
    capabilities: [
      "Document ingestion and chunking workflow",
      "Retrieval and answer generation with source grounding",
      "Evaluation hooks, logging, and prompt/version control",
      "Simple serving path that can evolve toward MLOps",
    ],
    deliverables: [
      "Architecture and workflow breakdown",
      "Operational controls for cost, quality, and permissions",
      "Interview framing for AI product and ML-adjacent roles",
    ],
  },
];
