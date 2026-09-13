export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  billingType: "project" | "monthly";
  shortDesc: string;
  onetime?: string;
  tag?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  badge: string;
  description: string;
  items: ServiceItem[];
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "tech-dev",
    title: "Development & AI Systems",
    badge: "ENGINEERING VERTICAL",
    description: "Modern business websites, browser web applications, intelligent AI chatbots, and automated workflows engineered to eliminate repetitive manual work and connect your software tools.",
    items: [
      {
        id: "landing-pages",
        name: "Conversion Landing Pages",
        price: 5999,
        priceDisplay: "From ₹5,999",
        billingType: "project",
        shortDesc: "High-converting single-page sites engineered for ad campaigns, fast loads, and lead capture.",
        tag: "Conversion",
      },
      {
        id: "business-websites",
        name: "Websites & Digital Presence",
        price: 25000,
        priceDisplay: "From ₹25,000",
        billingType: "project",
        shortDesc: "Modern, responsive company websites with clean SEO foundations and fast performance.",
        tag: "Websites",
      },
      {
        id: "web-apps",
        name: "Web Apps & Custom Platforms",
        price: 60000,
        priceDisplay: "From ₹60,000",
        billingType: "project",
        shortDesc: "Custom browser software, client portals, booking engines, and interactive web platforms.",
        tag: "Platforms",
      },
      {
        id: "ai-agents",
        name: "AI Agents & AI Chatbots",
        price: 15000,
        priceDisplay: "From ₹15,000",
        billingType: "project",
        shortDesc: "Intelligent assistants that answer customer questions, qualify leads, and handle chats 24/7.",
        tag: "AI Systems",
      },
      {
        id: "business-automation",
        name: "Business Automation",
        price: 12000,
        priceDisplay: "From ₹12,000",
        billingType: "project",
        shortDesc: "Automate repetitive workflows, route leads instantly, and keep your team out of spreadsheets.",
        tag: "Automation",
      },
      {
        id: "integrations",
        name: "Integrations & Connected Systems",
        price: 10000,
        priceDisplay: "From ₹10,000",
        billingType: "project",
        shortDesc: "Connect your website, CRM, payment gateways, WhatsApp, and tools so data flows automatically.",
        tag: "Integration",
      },
      {
        id: "internal-tools",
        name: "Internal Tools & Dashboards",
        price: 0,
        priceDisplay: "Custom quote",
        billingType: "project",
        shortDesc: "Tailored admin dashboards, operations portals, and reporting tools built for your internal team.",
        tag: "Operations",
      },
    ],
  },
  {
    id: "paid-ads",
    title: "Paid Advertising & Performance",
    badge: "GROWTH VERTICAL",
    description: "Campaign structure, keyword and audience targeting, creative testing, budget pacing, and weekly reads on cost-per-lead and cost-per-sale across major ad networks.",
    items: [
      {
        id: "ppc-google",
        name: "PPC & Google Ads",
        price: 12000,
        priceDisplay: "₹12,000 / mo",
        billingType: "monthly",
        shortDesc: "High-intent search, Performance Max, and conversion tracking to capture ready-to-buy searchers.",
        tag: "Paid Search",
      },
      {
        id: "linkedin-ads",
        name: "LinkedIn Ads",
        price: 15000,
        priceDisplay: "₹15,000 / mo",
        billingType: "monthly",
        shortDesc: "Target decision-makers and high-value B2B accounts to generate qualified commercial consultations.",
        tag: "B2B Ads",
      },
      {
        id: "meta-ads",
        name: "Meta Ads",
        price: 12000,
        priceDisplay: "₹12,000 / mo",
        billingType: "monthly",
        shortDesc: "Direct-response Facebook & Instagram campaigns driven by structured creative and angle testing.",
        tag: "Social Ads",
      },
    ],
  },
  {
    id: "organic-growth",
    title: "Organic Growth & AI Search (AEO/GEO)",
    badge: "SEARCH VERTICAL",
    description: "On-page and technical SEO, content that ranks, and positioning your brand to be surfaced correctly by AI answer engines and generative search networks.",
    items: [
      {
        id: "seo",
        name: "Search Engine Optimization (SEO)",
        price: 15000,
        priceDisplay: "₹15,000 / mo",
        billingType: "monthly",
        shortDesc: "Technical site crawlability, schema graph injection, and high-intent commercial content architecture.",
        tag: "Search",
      },
      {
        id: "aeo",
        name: "Answer Engine Optimization (AEO)",
        price: 10000,
        priceDisplay: "₹10,000 / mo",
        billingType: "monthly",
        shortDesc: "Optimize content answers and entity profiles so ChatGPT, Perplexity, and AI Overviews cite you.",
        tag: "AI Search",
      },
      {
        id: "geo",
        name: "Generative Engine Optimization (GEO)",
        price: 10000,
        priceDisplay: "₹10,000 / mo",
        billingType: "monthly",
        shortDesc: "Entity positioning and semantic authority across modern generative search and synthesis platforms.",
        tag: "AI Search",
      },
    ],
  },
];

export interface DevelopmentProjectTier {
  id: string;
  title: string;
  price: string;
  scope: string;
  summary: string;
  features: string[];
}

export const DEV_PROJECT_PRICING: DevelopmentProjectTier[] = [
  {
    id: "landing-pages",
    title: "Conversion Landing Pages",
    price: "From ₹5,999",
    scope: "One-time project",
    summary: "Single-page high-converting direct-response layout engineered specifically for ad campaigns and lead capture.",
    features: [
      "Custom responsive direct-response layout",
      "Sub-second loading & Core Web Vitals optimization",
      "Tracking pixel, GA4 & lead capture form integration",
      "Built for Google Ads, Meta Ads, and direct campaign traffic",
    ],
  },
  {
    id: "business-websites",
    title: "Websites & Digital Presence",
    price: "From ₹25,000",
    scope: "One-time project",
    summary: "Modern, responsive company websites with clean SEO foundations, fast performance, and bespoke brand design.",
    features: [
      "Multi-page company website with custom Next.js architecture",
      "Full technical SEO setup, Schema.org graph & meta tags",
      "Services, About, Case Studies & Contact inquiry funnels",
      "Clean Git repository handover with 100% code ownership",
    ],
  },
  {
    id: "web-apps",
    title: "Web Apps & Custom Platforms",
    price: "From ₹60,000",
    scope: "One-time project",
    summary: "Custom browser software, client portals, booking engines, and SaaS-style applications built to scale.",
    features: [
      "Custom web application with database (MongoDB/PostgreSQL)",
      "Secure user authentication (OAuth / magic links / passwords)",
      "Interactive customer portals, dashboards & business logic",
      "Production deployment on Vercel, Cloudflare, or AWS",
    ],
  },
  {
    id: "ai-agents",
    title: "AI Agents & AI Chatbots",
    price: "From ₹15,000",
    scope: "One-time project",
    summary: "Intelligent conversational systems that answer customer queries, qualify leads, and handle support 24/7.",
    features: [
      "Website or WhatsApp conversational AI integration",
      "Trained on your business documentation, services & FAQs",
      "Automated lead qualification and contact information capture",
      "Graceful human escalation handoff when human input is needed",
    ],
  },
  {
    id: "business-automation",
    title: "Business Automation",
    price: "From ₹12,000",
    scope: "One-time project",
    summary: "Automated workflows that eliminate repetitive manual tasks, move data between systems, and keep teams out of spreadsheets.",
    features: [
      "Multi-step automated workflows (n8n self-hosted or cloud)",
      "Instant lead routing to WhatsApp, Slack, Telegram, or email",
      "Automated CRM updates, deal creation & status syncing",
      "Error logging, retry queues, and real-time failure alerts",
    ],
  },
  {
    id: "integrations",
    title: "Integrations & Connected Systems",
    price: "From ₹10,000",
    scope: "One-time project",
    summary: "Connect your website, CRM, payment gateways, WhatsApp, and third-party tools so data moves seamlessly.",
    features: [
      "Connecting disparate tools (CRMs, gateways, spreadsheets)",
      "Custom REST API endpoints & bidirectional webhook handlers",
      "Reliable database synchronization across external platforms",
      "Payload validation, security headers, and secret management",
    ],
  },
  {
    id: "internal-tools",
    title: "Internal Tools & Dashboards",
    price: "Custom quote",
    scope: "Scoped per deliverable",
    summary: "Tailored admin dashboards, operations portals, and reporting tools engineered for your internal operational workflows.",
    features: [
      "Bespoke admin dashboards and operations control panels",
      "Role-based access control for team members and management",
      "Real-time business reporting, inventory & metrics views",
      "Built specifically around your team's operational habits",
    ],
  },
];

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "₹20,000",
    period: "/mo",
    description: "One primary ad platform or basic technical SEO/automation support. Great for testing channels.",
    features: [
      "Google Ads or Meta Ads management",
      "Basic on-page SEO & site maintenance",
      "Monthly performance & plain-language report",
    ],
  },
  {
    name: "Growth",
    price: "₹35,000",
    period: "/mo",
    description: "Multi-channel ad management paired with organic search optimization and technical improvements.",
    features: [
      "Google Ads + Meta Ads management",
      "SEO + AEO Optimization",
      "Weekly numbers & direct strategy updates",
    ],
    featured: true,
  },
  {
    name: "Partner",
    price: "₹50,000",
    period: "/mo",
    description: "Comprehensive multidisciplinary coverage across all ad networks, organic search, and ongoing web systems.",
    features: [
      "Google + Meta + LinkedIn Ads",
      "SEO + AEO + GEO Strategy",
      "Ongoing site & web application improvements",
    ],
  },
];

export interface ComparisonRow {
  label: string;
  agency: string;
  freelancer: string;
  darvin: string;
}

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    label: "Monthly fee (multi-channel)",
    agency: "₹75,000–2,00,000+",
    freelancer: "₹15,000–50,000",
    darvin: "₹20,000–50,000",
  },
  {
    label: "Who does the work",
    agency: "Often a junior, assigned",
    freelancer: "Usually one person",
    darvin: "Specialist partners",
  },
  {
    label: "Ad spend fee model",
    agency: "Often % of spend",
    freelancer: "Varies",
    darvin: "Flat fee, always",
  },
  {
    label: "Point of contact",
    agency: "Rotates over time",
    freelancer: "Stable",
    darvin: "Dedicated partner lead",
  },
  {
    label: "Backup if unavailable",
    agency: "Team coverage",
    freelancer: "None",
    darvin: "Documented process & team coverage",
  },
];

export interface ApproachStep {
  num: string;
  title: string;
  description: string;
}

export const APPROACH_STEPS: ApproachStep[] = [
  {
    num: "01",
    title: "Audit",
    description: "We audit your current spend, site architecture, and rankings to identify what is generating value and what is burning budget.",
  },
  {
    num: "02",
    title: "Strategy",
    description: "We align on one integrated plan across ads, organic search, and web applications — eliminating disconnected vendors.",
  },
  {
    num: "03",
    title: "Execution",
    description: "We execute, optimize, and report transparently with weekly numbers, plain language, and zero disappearing acts.",
  },
];

export const SKILLS_DATA: string[] = [
  "Full-Stack Web Dev",
  "React / Next.js",
  "AI & LLM Integrations",
  "n8n Automations",
  "Google Ads & PPC",
  "Meta & LinkedIn Ads",
  "SEO / AEO / GEO",
  "REST APIs & Databases",
];
