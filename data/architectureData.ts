export interface ArchitectureStage {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
  deliverableMatrix: {
    badge: string;
    focus: string;
    engineeringTrack: {
      label: string;
      items: string[];
    };
    growthTrack: {
      label: string;
      items: string[];
    };
    targetOutcome: string;
  };
}

export const ARCHITECTURE_STAGES: ArchitectureStage[] = [
  {
    id: "stage-1",
    number: "01",
    title: "Audit & Strategy",
    subtitle: "Diagnose technical bottlenecks, audience demand, and growth leaks",
    description: "Every engagement starts by identifying where manual tasks, slow page loads, disconnected tools, or unfocused ad spend create friction for your business. We audit your full stack and customer acquisition channels simultaneously.",
    focusAreas: ["Architecture & Code Review", "Search & Ad Account Audit", "Conversion & Funnel Mapping", "Unified Growth Roadmap"],
    deliverableMatrix: {
      badge: "PHASE 01 // FOUNDATION",
      focus: "Comprehensive diagnostics across systems and acquisition",
      engineeringTrack: {
        label: "Systems & Engineering",
        items: [
          "Codebase health & Core Web Vitals benchmark",
          "Database schema & API bottleneck analysis",
          "Tooling stack & operational friction mapping",
        ],
      },
      growthTrack: {
        label: "Growth & Marketing",
        items: [
          "Historical ad spend & CPA / ROAS audit",
          "Keyword indexation & search crawlability check",
          "Competitor positioning & angle gap review",
        ],
      },
      targetOutcome: "Prioritized 90-day technical blueprint + growth roadmap",
    },
  },
  {
    id: "stage-2",
    number: "02",
    title: "System & Experience Design",
    subtitle: "Architect fast web applications and high-converting acquisition funnels",
    description: "We map user journeys, database schemas, and conversion pathways before writing production code or deploying ad spend. Every interface is structured for sub-second speeds, clear value communication, and search indexability.",
    focusAreas: ["Modern Next.js Architecture", "High-Converting Landing Funnels", "Data Schemas & API Contracts", "Signal & Attribution Blueprint"],
    deliverableMatrix: {
      badge: "PHASE 02 // ARCHITECTURE",
      focus: "Eliminating friction between traffic and conversion",
      engineeringTrack: {
        label: "Systems & Engineering",
        items: [
          "Modular Next.js component hierarchy",
          "PostgreSQL/MongoDB relational schema design",
          "Authentication & security permission rules",
        ],
      },
      growthTrack: {
        label: "Growth & Marketing",
        items: [
          "Direct-response messaging & offer hooks",
          "Pixel taxonomy & Meta CAPI event mapping",
          "AEO/GEO semantic entity architecture",
        ],
      },
      targetOutcome: "High-intent UX prototypes + scalable data models",
    },
  },
  {
    id: "stage-3",
    number: "03",
    title: "Build, Integrate & Automate",
    subtitle: "Engineer custom software, AI assistants, and automated workflow pipelines",
    description: "We build type-safe web applications, connect third-party APIs, and deploy n8n automations that route leads, sync CRM data, and assist customers 24/7 — ensuring your operational backbone runs hands-free.",
    focusAreas: ["Full-Stack TypeScript Build", "n8n Workflow Automation", "AI Agents & Chatbot Systems", "CRM & Payment Integrations"],
    deliverableMatrix: {
      badge: "PHASE 03 // EXECUTION",
      focus: "Production-grade development & automated operations",
      engineeringTrack: {
        label: "Systems & Engineering",
        items: [
          "Responsive, accessible React/Next.js frontend",
          "Secure REST/Webhook endpoints & database sync",
          "Automated lead routing & n8n error retry queues",
        ],
      },
      growthTrack: {
        label: "Growth & Marketing",
        items: [
          "Verified GA4 & Meta Conversions API events",
          "High-intent ad creatives & campaign segmentation",
          "Rich Schema.org structured data injection",
        ],
      },
      targetOutcome: "Production-ready web platform + hands-free operations",
    },
  },
  {
    id: "stage-4",
    number: "04",
    title: "Launch, Grow & Scale",
    subtitle: "Deploy edge infrastructure, launch ad campaigns, and drive organic discovery",
    description: "We deploy your web applications to global edge cloud hosting, launch targeted Google and Meta ad campaigns, and track keyword rankings. We review numbers weekly with direct partner access — cutting waste and compounding results.",
    focusAreas: ["Edge Cloud Deployment", "Google & Meta Ads Launch", "Technical SEO Indexation", "Weekly Metric Transparency"],
    deliverableMatrix: {
      badge: "PHASE 04 // SCALE",
      focus: "Live market deployment & continuous revenue optimization",
      engineeringTrack: {
        label: "Systems & Engineering",
        items: [
          "Production deployment on Vercel/Cloudflare",
          "Real-time uptime monitoring & security headers",
          "Ongoing application enhancements & updates",
        ],
      },
      growthTrack: {
        label: "Growth & Marketing",
        items: [
          "Active campaign management & creative sprints",
          "Weekly plain-language CPA & ROAS reporting",
          "Compounding organic search & AI answer rankings",
        ],
      },
      targetOutcome: "Scalable revenue engine with transparent weekly performance",
    },
  },
];
