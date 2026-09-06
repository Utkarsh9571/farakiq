export interface ArchitectureStage {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  nodes: string[];
  terminalOutput: {
    phase: string;
    focus: string;
    connectedComponents: string[];
    outcome: string;
  };
}

export const ARCHITECTURE_STAGES: ArchitectureStage[] = [
  {
    id: "stage-1",
    number: "01",
    title: "Audit & Problem Framing",
    subtitle: "Identify operational bottlenecks and manual effort",
    description: "Every build starts by understanding where manual tasks, disconnected tools, or poor UI create friction for your business.",
    nodes: ["Workflow Mapping", "API Gap Analysis", "User Journey Friction"],
    terminalOutput: {
      phase: "Phase 01 — Analysis",
      focus: "Framing technical scope & automation goals",
      connectedComponents: ["Existing Tools", "Manual Pain Points"],
      outcome: "Clear blueprint for system requirements",
    },
  },
  {
    id: "stage-2",
    number: "02",
    title: "Modular System Design",
    subtitle: "Architect clean interfaces and component structure",
    description: "Designing responsive frontend layouts, database schemas, and AI module boundaries for long-term maintainability.",
    nodes: ["Frontend / Web UI", "AI / LLM Integration", "Database / Storage"],
    terminalOutput: {
      phase: "Phase 02 — Architecture",
      focus: "Component isolation & API contract design",
      connectedComponents: ["React / Next.js UI", "Data Schema", "AI Models"],
      outcome: "Scalable frontend and modular core",
    },
  },
  {
    id: "stage-3",
    number: "03",
    title: "API & Automation Integration",
    subtitle: "Connect systems into unified automated workflows",
    description: "Linking web apps to n8n automations, custom REST APIs, webhooks, and third-party services so data flows seamlessly.",
    nodes: ["Automation / n8n", "REST APIs & Webhooks", "Third-Party Services"],
    terminalOutput: {
      phase: "Phase 03 — Integration",
      focus: "Event-driven workflow execution & API wiring",
      connectedComponents: ["n8n Engine", "Webhooks", "External APIs"],
      outcome: "Unified, hands-free business processes",
    },
  },
  {
    id: "stage-4",
    number: "04",
    title: "Production & Deployment",
    subtitle: "Deploy fast, reliable, and production-ready applications",
    description: "Building production bundles, verifying responsiveness across devices, optimizing assets, and deploying to Vercel/cloud hosting.",
    nodes: ["Vercel Hosting", "Mobile Optimization", "Performance Audit"],
    terminalOutput: {
      phase: "Phase 04 — Deployment",
      focus: "Production build & live deployment",
      connectedComponents: ["Vercel Edge Platform", "SEO & Meta", "Responsive Shell"],
      outcome: "Live, fast, high-converting application",
    },
  },
];
