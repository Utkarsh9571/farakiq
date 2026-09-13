export interface ServiceDetail {
  slug: string;
  name: string;
  badge: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  priceModel: string;
  pricingTag: string;
  summary: string;
  targetAudience: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  processSteps: {
    num: string;
    title: string;
    description: string;
  }[];
  deliverables: string[];
  faqs: {
    q: string;
    a: string;
  }[];
  relatedServices: {
    slug: string;
    name: string;
    tag: string;
  }[];
  relatedProjects?: {
    id: string;
    title: string;
    summary: string;
  }[];
}

export const SERVICES_CATALOG: Record<string, ServiceDetail> = {
  "meta-ads": {
    slug: "meta-ads",
    name: "Meta Ads Management",
    badge: "GROWTH & PERFORMANCE VERTICAL",
    title: "Meta Ads Management (Facebook & Instagram) | FARAKIQ",
    metaDescription:
      "Direct-response Meta Ads management with flat-fee pricing, rapid creative testing, audience segmentation, and transparent weekly CPA/ROAS tracking from Jaipur, India.",
    h1: "Meta Ads Management & Paid Social Growth",
    subtitle:
      "Engineered Facebook and Instagram ad campaigns focused on predictable lead acquisition and e-commerce return on ad spend — without agency retainers or percentage-of-spend markups.",
    priceModel: "Flat fee from ₹12,000 / month",
    pricingTag: "No percentage of ad spend",
    summary:
      "Most agencies run Meta Ads through templated campaign structures and hide declining returns behind vanity metrics like impressions and reach. FARAKIQ approaches paid social with an engineering mindset: rigorous pixel event tracking, systematic creative testing frameworks, granular custom and lookalike audiences, and direct weekly reporting on cost-per-lead (CPL) and cost-per-acquisition (CPA).",
    targetAudience: [
      "B2B and high-ticket service companies needing qualified inbound consultations.",
      "Direct-to-consumer (D2C) and e-commerce brands wanting disciplined ROAS testing.",
      "Founders tired of paying agencies percentage-based fees that punish budget scaling.",
      "Businesses in Jaipur, across India, and globally needing an accountable growth partner.",
    ],
    capabilities: [
      {
        title: "Account Structure & Campaign Architecture",
        description:
          "Consolidated campaign hierarchies built around high-intent Prospecting (TOF), Retargeting (MOF/BOF), and Advantage+ shopping or lead workflows designed to maximize algorithmic learning efficiency.",
      },
      {
        title: "Rigorous Conversion & CAPI Tracking",
        description:
          "Setup and verification of Meta Conversions API (CAPI) alongside server-side tracking to capture signal loss from browser privacy restrictions and ensure accurate purchase or lead attribution.",
      },
      {
        title: "Systematic Creative & Angle Testing",
        description:
          "Structured creative sprints testing value propositions, headline hooks, visual formats (reels, carousels, static single-image), and copy angles to isolate clear winners before scaling spend.",
      },
      {
        title: "Weekly Direct Reads & Budget Pacing",
        description:
          "Transparent weekly performance updates breaking down spend, cost-per-lead, and purchase conversion rate in plain language. Zero disappearing acts or confusing agency slide decks.",
      },
    ],
    processSteps: [
      {
        num: "01",
        title: "Audit & Signal Setup",
        description:
          "We inspect your existing ad account, pixel tracking, past winning creatives, and landing page conversion rates to identify budget waste and baseline metrics.",
      },
      {
        num: "02",
        title: "Campaign Strategy & Creative Batch",
        description:
          "We structure segmented audiences, draft direct-response ad copy variants, configure high-converting conversion events, and deploy controlled budget tests.",
      },
      {
        num: "03",
        title: "Iteration, Scaling & Weekly Accountability",
        description:
          "We cut losing ad sets early, double down on winning creative angles, pace your budget cleanly, and review weekly results directly with you.",
      },
    ],
    deliverables: [
      "Full Meta Business Manager & Ad Account configuration",
      "Conversions API (CAPI) and pixel event auditing",
      "Audience research (custom audiences, exclusions, lookalikes)",
      "Direct-response ad copy and headline writing",
      "Creative direction and asset formatting recommendations",
      "Weekly performance reports with direct action items",
    ],
    faqs: [
      {
        q: "Do you charge a percentage of our advertising spend?",
        a: "No. FARAKIQ operates strictly on a predictable flat management fee (starting at ₹12,000/month). You pay the ad platforms directly for your ad spend, so our advice is never biased toward artificially inflating your budget.",
      },
      {
        q: "Can you manage Meta Ads alongside Google Ads or our landing pages?",
        a: "Yes. In fact, paid social works best when paired with high-converting landing pages and Google Ads capture. Our Growth tier (₹35,000/mo) includes multi-channel Google and Meta Ads management with integrated technical optimization.",
      },
      {
        q: "How soon do we see actionable data from new campaigns?",
        a: "Initial campaign validation and baseline CPA data are typically established within the first 7 to 14 days of structured testing, after which budget reallocation begins.",
      },
    ],
    relatedServices: [
      { slug: "google-ads", name: "PPC & Google Ads", tag: "Paid Search" },
      { slug: "web-development", name: "Website Development", tag: "Full-Stack" },
      { slug: "seo", name: "Search Engine Optimization", tag: "Organic Search" },
    ],
    relatedProjects: [
      {
        id: "zonirza",
        title: "Zonirza E-Commerce Platform",
        summary: "Full-stack luxury e-commerce platform built for conversion and order lifecycle management.",
      },
      {
        id: "bliniq",
        title: "BlinIQ Healthcare Website",
        summary: "Conversion-optimized healthcare web platform with structured service funnels.",
      },
    ],
  },

  "google-ads": {
    slug: "google-ads",
    name: "PPC & Google Ads Management",
    badge: "SEARCH & INTENT VERTICAL",
    title: "Google Ads Management & PPC Campaigns | FARAKIQ",
    metaDescription:
      "High-intent Google Ads management for search, performance max, and display. Transparent flat-fee model with negative keyword pruning and conversion tracking.",
    h1: "PPC & Google Ads Management",
    subtitle:
      "Capture buyers at the exact moment they search for your solution. Meticulous search campaign structures, negative keyword pruning, and conversion-focused bid strategies.",
    priceModel: "Flat fee from ₹12,000 / month",
    pricingTag: "No percentage of ad spend",
    summary:
      "Google Ads is often where companies waste the most money through broad-match keyword leaks, unvetted Performance Max black boxes, and poor conversion tracking. FARAKIQ builds tightly-themed search ad groups, enforces rigorous negative keyword lists, and aligns keyword intent with dedicated landing pages to ensure your ad spend converts into real pipeline.",
    targetAudience: [
      "Companies targeting high-intent commercial keywords where searchers are ready to buy.",
      "Local and regional businesses in Jaipur, Delhi NCR, and nationwide needing local search capture.",
      "SaaS and B2B platforms seeking qualified leads from specific category searches.",
      "Businesses burning budget on agency-managed Google Ads with low lead quality.",
    ],
    capabilities: [
      {
        title: "High-Intent Keyword Harvesting & Segmentation",
        description:
          "Granular search campaign architecture grouping terms by exact commercial intent (problem-aware, solution-aware, competitor comparison) rather than loose broad match queries.",
      },
      {
        title: "Aggressive Negative Keyword Management",
        description:
          "Active weekly search query audits that prune irrelevant clicks, informational searches, and unqualified queries before they consume valuable campaign budget.",
      },
      {
        title: "Conversion Tracking & Value Attribution",
        description:
          "Google Tag Manager and GA4 conversion tracking implementation verifying actual form submissions, phone calls, and purchases rather than misleading pageview hits.",
      },
      {
        title: "Search Copy & Ad Extensions Optimization",
        description:
          "Compelling responsive search ads (RSAs) utilizing sitelinks, callouts, structured snippets, and clear differentiators to maximize click-through rate (CTR) and Quality Score.",
      },
    ],
    processSteps: [
      {
        num: "01",
        title: "Search Query & Account Audit",
        description:
          "We analyze past search term reports, keyword quality scores, conversion tracking accuracy, and bid efficiency to pinpoint immediate budget savings.",
      },
      {
        num: "02",
        title: "Restructure & Keyword Blueprint",
        description:
          "We rebuild search campaigns with clean thematic ad groups, write targeted RSAs, implement strict match types, and add comprehensive negative lists.",
      },
      {
        num: "03",
        title: "Bid Optimization & Query Pruning",
        description:
          "We monitor search terms weekly, adjust target CPA / ROAS bidding as data accumulates, and refine landing page alignment for higher Quality Scores.",
      },
    ],
    deliverables: [
      "Full Google Ads account audit and structure redesign",
      "Google Tag Manager & GA4 custom conversion tracking",
      "High-intent keyword matrix and negative keyword lists",
      "Responsive Search Ads (RSAs) and asset extensions",
      "Bid strategy calibration (Manual CPC to Smart Bidding)",
      "Weekly transparent reports detailing search terms and lead costs",
    ],
    faqs: [
      {
        q: "What is your management fee structure?",
        a: "We charge a transparent flat monthly fee starting at ₹12,000/month. We never charge a percentage of your media spend, ensuring our guidance is focused entirely on cost-efficiency.",
      },
      {
        q: "How do you prevent wasted spend on irrelevant searches?",
        a: "We avoid uncontrolled broad match without signal controls. We conduct regular weekly search query reviews and maintain proactive master negative keyword lists across every campaign.",
      },
      {
        q: "Can you fix our conversion tracking before running ads?",
        a: "Yes. Accurate conversion tracking via Google Tag Manager and GA4 is the first prerequisite before launching or scaling any Google Ads campaign with FARAKIQ.",
      },
    ],
    relatedServices: [
      { slug: "meta-ads", name: "Meta Ads Management", tag: "Paid Social" },
      { slug: "seo", name: "Search Engine Optimization", tag: "Organic Search" },
      { slug: "web-development", name: "Website Development", tag: "Full-Stack" },
    ],
    relatedProjects: [
      {
        id: "brickbytes",
        title: "BrickBytes Real Estate Platform",
        summary: "Digital real-estate sales application engineered for property exploration and lead capture.",
      },
    ],
  },

  "seo": {
    slug: "seo",
    name: "Search Engine Optimization (SEO & AEO)",
    badge: "SEARCH & DISCOVERY VERTICAL",
    title: "Search Engine Optimization (SEO) & AI Search (AEO) | FARAKIQ",
    metaDescription:
      "Technical SEO, on-page optimization, and Answer Engine Optimization (AEO/GEO) designed for Google and modern AI search engines. Based in Jaipur, serving globally.",
    h1: "Search Engine Optimization (SEO & AI Search)",
    subtitle:
      "On-page precision, technical crawlability, and Answer Engine Optimization (AEO) so your business ranks on Google and is cited accurately by modern generative search engines.",
    priceModel: "Flat fee from ₹15,000 / month",
    pricingTag: "Technical & On-Page Focus",
    summary:
      "SEO in 2026 is no longer about keyword stuffing or buying low-grade directory backlinks. Search engines reward lightning-fast performance, valid Schema.org structured data, clean heading hierarchy, and genuine subject-matter depth. FARAKIQ combines technical web engineering with modern content architecture to build sustainable organic discovery on Google and AI answer engines like ChatGPT Search and Perplexity.",
    targetAudience: [
      "Businesses seeking compounding organic traffic without ongoing ad spend dependency.",
      "Companies with technical indexation, crawl budget, or site architecture problems.",
      "Brands wanting to be surfaced in AI overviews and generative answer engines (AEO/GEO).",
      "Jaipur and Indian businesses wanting local search authority and national visibility.",
    ],
    capabilities: [
      {
        title: "Technical SEO & Core Web Vitals",
        description:
          "Eliminating crawl bottlenecks, fixing canonicalization errors, optimizing JavaScript hydration, resolving redirect chains, and achieving superior performance scores on Core Web Vitals.",
      },
      {
        title: "Structured Data & Schema.org Graph",
        description:
          "Deploying valid, interconnected JSON-LD schemas (ProfessionalService, CreativeWork, Article, FAQ, Breadcrumbs) so search engines understand your entity relationships unambiguously.",
      },
      {
        title: "Answer Engine Optimization (AEO / GEO)",
        description:
          "Structuring content with direct semantic answers, clear entity definitions, and factual citations so generative engines (Perplexity, Gemini, ChatGPT) accurately surface and cite your business.",
      },
      {
        title: "High-Intent Content Architecture",
        description:
          "Mapping keyword intent clusters to dedicated, crawlable URLs that answer real customer questions and funnel visitors naturally into service enquiries.",
      },
    ],
    processSteps: [
      {
        num: "01",
        title: "Deep Technical & Content Audit",
        description:
          "We analyze site architecture, indexation status, Schema.org validation, page speed metrics, and current ranking keywords to establish clear priorities.",
      },
      {
        num: "02",
        title: "Technical Remediation & On-Page Fixes",
        description:
          "We resolve heading hierarchy skips, inject structured data, correct meta tags, and build out internal linking pathways between high-value pages.",
      },
      {
        num: "03",
        title: "Content Publishing & AI Search Positioning",
        description:
          "We produce authoritative informational resources, monitor search console impressions, track query positions, and expand organic coverage steadily.",
      },
    ],
    deliverables: [
      "Comprehensive technical crawlability and indexation audit",
      "Full JSON-LD structured data implementation and validation",
      "On-page optimization (titles, descriptions, H1-H3 headings, internal links)",
      "Core Web Vitals performance tuning and asset optimization",
      "Content strategy focused on high-intent commercial queries",
      "Monthly search console health and ranking trajectory reporting",
    ],
    faqs: [
      {
        q: "What is the difference between SEO and AEO/GEO?",
        a: "Traditional SEO focuses on ranking in the ten blue links on Google. Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) optimize your content structure and entity data so AI agents (like ChatGPT, Perplexity, and Google AI Overviews) quote and cite your business directly in conversational answers.",
      },
      {
        q: "How long does it take to see SEO results?",
        a: "Technical fixes (such as schema injection, canonical corrections, and indexation updates) often register in Google Search Console within 2 to 4 weeks. Meaningful organic keyword movement and traffic compounding typically develop across 3 to 6 months of disciplined execution.",
      },
      {
        q: "Do you buy backlinks?",
        a: "No. We do not participate in private blog networks (PBNs) or spam link schemes that risk manual Google penalties. Our strategy focuses on technical excellence, content depth, and natural digital PR.",
      },
    ],
    relatedServices: [
      { slug: "web-development", name: "Website Development", tag: "Full-Stack" },
      { slug: "google-ads", name: "PPC & Google Ads", tag: "Paid Search" },
      { slug: "n8n-automation", name: "n8n Workflow Automation", tag: "Automation" },
    ],
    relatedProjects: [
      {
        id: "bliniq",
        title: "BlinIQ Healthcare Showcase",
        summary: "Modern responsive business website engineered for clean presentation and strong organic foundations.",
      },
    ],
  },

  "web-development": {
    slug: "web-development",
    name: "Website & Web App Development",
    badge: "ENGINEERING VERTICAL",
    title: "Website & Full-Stack Web Application Development | FARAKIQ",
    metaDescription:
      "Custom website development, Next.js web applications, and e-commerce platforms engineered with clean TypeScript architecture and high performance. Jaipur, India.",
    h1: "Website Development & Full-Stack Web Applications",
    subtitle:
      "Custom digital platforms built with Next.js, React, and modern TypeScript. Lightning-fast page loads, bespoke UI engineering, and robust backend integrations.",
    priceModel: "Websites from ₹25,000 • Web Apps from ₹60,000",
    pricingTag: "One-time build or ongoing engineering",
    summary:
      "FARAKIQ designs and engineers production-ready web applications and business websites from the ground up. We avoid bloated generic templates and sluggish page builders. Every project is built with modern component architectures, type-safe code, responsive design systems, and built-in SEO fundamentals — delivering a digital presence that feels premium and converts visitors into clients.",
    targetAudience: [
      "Founders needing a modern, custom business website that outclasses competitors.",
      "Businesses requiring full-stack web applications with authentication, databases, and dashboards.",
      "E-commerce brands seeking bespoke shopping experiences without Shopify template constraints.",
      "Teams wanting direct collaboration with Darwin Swami and lead engineer Utkarsh Sharma rather than rotating agency juniors.",
    ],
    capabilities: [
      {
        title: "Modern Next.js & React Architecture",
        description:
          "Engineered using Next.js App Router, React Server Components, and TypeScript for optimal speed, security, and minimal client-side JavaScript bundle overhead.",
      },
      {
        title: "Full-Stack Systems & Databases",
        description:
          "Integration of robust databases (MongoDB, PostgreSQL), secure authentication (NextAuth, OAuth), REST/GraphQL APIs, and transactional email systems.",
      },
      {
        title: "Bespoke Design Systems & Motion",
        description:
          "Editorial-grade typography, dark-mode aesthetics, custom CSS variables, and fluid micro-interactions built with Framer Motion / Motion for React.",
      },
      {
        title: "Built-In Technical SEO & Accessibility",
        description:
          "Zero-friction crawlability: dynamic XML sitemaps, semantic HTML5 hierarchy, open-graph cards, schema structured data, and sub-second loading speeds.",
      },
    ],
    processSteps: [
      {
        num: "01",
        title: "System Architecture & Scope Framing",
        description:
          "We define your technical requirements, user journeys, database schemas, and integration points to create a clear engineering roadmap.",
      },
      {
        num: "02",
        title: "Core Build & Component Engineering",
        description:
          "We build responsive, modular UI components, wire up backend logic and databases, and conduct cross-device visual and functional testing.",
      },
      {
        num: "03",
        title: "Performance Optimization & Production Deploy",
        description:
          "We run lighthouse audits, configure production CDN hosting (Vercel, Cloudflare), test domain DNS, and hand over clean documentation.",
      },
    ],
    deliverables: [
      "Production-ready Next.js web application or business website",
      "Fully responsive mobile, tablet, and desktop layouts",
      "Database setup and API integration (REST, Webhooks, GraphQL)",
      "Complete SEO metadata and Schema.org structured data",
      "Source code repository access with clean documentation",
      "Post-launch warranty and deployment support",
    ],
    faqs: [
      {
        q: "What technologies do you build with?",
        a: "We primarily engineer with Next.js, React, TypeScript, modern CSS, Node.js, and databases like MongoDB or PostgreSQL. We select frameworks based on performance, maintainability, and long-term scalability.",
      },
      {
        q: "What is the typical timeline for a website build?",
        a: "A focused business website typically completes in 2 to 3 weeks. Complex full-stack web applications with custom database models and user portals generally take 4 to 8 weeks depending on scope.",
      },
      {
        q: "Do I own the code and project assets after launch?",
        a: "Yes. 100% of the repository code, assets, and deployment environments belong to you upon project completion. We provide clean Git repository access with zero vendor lock-in.",
      },
    ],
    relatedServices: [
      { slug: "n8n-automation", name: "n8n Workflow Automation", tag: "Automation" },
      { slug: "seo", name: "Search Engine Optimization", tag: "Organic Search" },
      { slug: "google-ads", name: "PPC & Google Ads", tag: "Paid Search" },
    ],
    relatedProjects: [
      {
        id: "brickbytes",
        title: "BrickBytes Platform",
        summary: "Interactive real-estate platform with spatial visualization and property inventory.",
      },
      {
        id: "zonirza",
        title: "Zonirza E-Commerce",
        summary: "Full-stack luxury e-commerce platform with custom product configuration and persistent cart.",
      },
      {
        id: "mailpilot",
        title: "MailPilot AI Email Client",
        summary: "Full-stack web application integrating Google APIs, AI assistants, and real-time SSE sync.",
      },
    ],
  },

  "n8n-automation": {
    slug: "n8n-automation",
    name: "n8n Workflow Automation",
    badge: "AUTOMATION & INTEGRATION VERTICAL",
    title: "n8n Workflow Automation & System Integrations Jaipur | FARAKIQ",
    metaDescription:
      "Custom n8n workflow automations, CRM synchronization, API pipelines, and webhook orchestration without Zapier subscription bloat. Jaipur, India & worldwide.",
    h1: "n8n Workflow Automation & System Integrations",
    subtitle:
      "Automate repetitive operations, connect fragmented software tools, and eliminate manual data entry with self-hosted or cloud n8n pipelines — keeping your data private and costs low.",
    priceModel: "From ₹12,000 / month or one-time project",
    pricingTag: "No per-task usage penalty",
    summary:
      "Growing companies often get trapped in expensive Zapier or Make subscription tiers that charge per-task fees as volume grows, or worse, struggle with broken spreadsheets and manual data re-entry. FARAKIQ designs and deploys custom n8n automations. From automated lead enrichment and CRM syncing to transactional webhooks and AI-assisted summaries, we engineer reliable pipelines that run smoothly in the background.",
    targetAudience: [
      "Businesses paying excessive monthly fees to Zapier or Make due to high task volume.",
      "Companies wanting to keep customer and transactional data on their own secure infrastructure.",
      "Sales teams needing automated lead qualification, instant notifications, and CRM updates.",
      "Founders in Jaipur, India, and globally who want unified operations without hiring administrative staff.",
    ],
    capabilities: [
      {
        title: "Self-Hosted & Cloud n8n Infrastructure",
        description:
          "Deployment of robust n8n instances on VPS (Docker/DigitalOcean/Hetzner) or n8n Cloud with automated database backups, secure environment variables, and zero per-task penalty.",
      },
      {
        title: "Lead Capture, Routing & Enrichment",
        description:
          "Instant webhook pipelines capturing incoming leads from Meta Ads, Google Ads, or website forms, enriching details, and routing alerts directly to Slack, WhatsApp, or email.",
      },
      {
        title: "Bi-Directional CRM & Database Synchronization",
        description:
          "Synchronizing customer records, deals, orders, and payment statuses seamlessly between databases (PostgreSQL, MongoDB), CRMs (HubSpot, Zoho, Airtable), and Google Sheets.",
      },
      {
        title: "AI Module & LLM Workflow Integration",
        description:
          "Connecting OpenAI, Google Gemini, or Claude into automated workflows for document parsing, customer inquiry categorization, and automated email draft generation.",
      },
    ],
    processSteps: [
      {
        num: "01",
        title: "Workflow Mapping & Process Audit",
        description:
          "We map your existing manual tasks, identify software APIs and webhooks, and design an end-to-end data flow with error-handling logic.",
      },
      {
        num: "02",
        title: "Node Configuration & Sandbox Testing",
        description:
          "We build the workflow logic in n8n, test edge cases, configure fallback retry queues, and validate data transformation integrity.",
      },
      {
        num: "03",
        title: "Production Deployment & Monitoring",
        description:
          "We deploy the workflow into active production, configure error alerting (Slack/Telegram), and supply clear visual run documentation.",
      },
    ],
    deliverables: [
      "Custom n8n workflow blueprints (.json exports and live instances)",
      "Secure webhook endpoints and authentication configuration",
      "API connections across your tech stack (CRMs, payment gateways, databases)",
      "Built-in error logging, automatic retries, and alert notifications",
      "Workflow documentation with step-by-step logic walkthroughs",
      "Ongoing maintenance and monthly pipeline health checks",
    ],
    faqs: [
      {
        q: "Why choose n8n over Zapier or Make?",
        a: "n8n offers both self-hosted and cloud options, giving you full control over your data privacy without punitive per-task pricing tiers. A workflow processing 50,000 tasks per month costs a fraction on n8n compared to Zapier.",
      },
      {
        q: "Can n8n connect with custom internal APIs and databases?",
        a: "Yes. n8n features native HTTP Request nodes, database connectors (PostgreSQL, MySQL, MongoDB), and custom JavaScript/Python execution nodes, making it capable of connecting almost any system.",
      },
      {
        q: "What happens if an automated workflow fails?",
        a: "Every workflow engineered by FARAKIQ includes dedicated error trigger nodes that alert your team via Slack, Telegram, or email immediately with payload details, preventing silent data drops.",
      },
    ],
    relatedServices: [
      { slug: "web-development", name: "Website Development", tag: "Full-Stack" },
      { slug: "meta-ads", name: "Meta Ads Management", tag: "Paid Social" },
      { slug: "google-ads", name: "PPC & Google Ads", tag: "Paid Search" },
    ],
    relatedProjects: [
      {
        id: "mailpilot",
        title: "MailPilot Email Assistant",
        summary: "Automated email workflow client combining Google OAuth, Gemini AI, and SSE sync.",
      },
      {
        id: "meera",
        title: "Meera Conversational Lead Bot",
        summary: "Automated lead qualification and scoring system built with deterministic state machine logic.",
      },
    ],
  },
};
