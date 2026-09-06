export interface ServiceItem {
  id: string;
  name: string;
  price: number;
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
    description: "Custom web applications, e-commerce platforms, AI integrations, n8n automations, and API systems engineered for high performance and scalability.",
    items: [
      { id: "web-dev", name: "Website Development", price: 0, onetime: "From ₹25,000", tag: "Full-Stack" },
      { id: "custom-web", name: "Customised Web App", price: 0, onetime: "From ₹60,000", tag: "Full-Stack" },
      { id: "landing-page", name: "Conversion Landing Page", price: 0, onetime: "₹5,999", tag: "Performance" },
      { id: "app-dev", name: "Custom Application", price: 0, onetime: "Custom quote", tag: "Full-Stack" },
      { id: "ai-integration", name: "AI & Chatbot Integration", price: 15000, tag: "AI System" },
      { id: "n8n-automation", name: "n8n Workflow Automation", price: 12000, tag: "Automation" },
      { id: "api-integration", name: "REST API & Webhooks", price: 10000, tag: "Integration" },
    ],
  },
  {
    id: "paid-ads",
    title: "Paid Advertising & Performance",
    badge: "GROWTH VERTICAL",
    description: "Campaign structure, keyword and audience targeting, creative testing, budget pacing, and weekly reads on cost-per-lead and cost-per-sale across major ad networks.",
    items: [
      { id: "ppc-google", name: "PPC & Google Ads", price: 12000, tag: "Paid Search" },
      { id: "linkedin-ads", name: "LinkedIn Ads", price: 15000, tag: "B2B Ads" },
      { id: "meta-ads", name: "Meta Ads", price: 12000, tag: "Social Ads" },
    ],
  },
  {
    id: "organic-growth",
    title: "Organic Growth & AI Search (AEO/GEO)",
    badge: "SEARCH VERTICAL",
    description: "On-page and technical SEO, content that ranks, and positioning your brand to be surfaced correctly by AI answer engines and generative search networks.",
    items: [
      { id: "seo", name: "Search Engine Optimization (SEO)", price: 15000, tag: "Search" },
      { id: "aeo", name: "Answer Engine Optimization (AEO)", price: 10000, tag: "AI Search" },
      { id: "geo", name: "Generative Engine Optimization (GEO)", price: 10000, tag: "AI Search" },
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
