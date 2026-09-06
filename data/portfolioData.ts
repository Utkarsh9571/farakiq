export type ProjectCategory = "all" | "websites" | "web-apps" | "ai-automation";

export interface PortfolioProject {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  cardSummary: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  isPrimaryWeb: boolean;
  
  // Case Study Details (01 to 06)
  caseStudy: {
    whatItIs: string;
    whatIBuilt: string;
    keyFunctionality: string[];
    technology: string[];
    liveDemoNote?: string;
  };
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "brickbytes",
    title: "BrickBytes",
    category: "web-apps",
    categoryLabel: "Full-Stack Web App / Real Estate Platform",
    cardSummary: "Interactive real-estate platform combining spatial visualization, property inventory, and modern digital sales experiences.",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/Utkarsh9571/brickbytes-utkarsh",
    isPrimaryWeb: true,
    caseStudy: {
      whatItIs: "An interactive real-estate digitization platform designed to replace flat paper plans, static blueprints, and spreadsheets with interactive digital sales experiences.",
      whatIBuilt: "Full-stack web application featuring vector spatial maps, real-time lot availability dashboards, and custom buyer-broker-developer views.",
      keyFunctionality: [
        "Interactive property/layout visualization & vector plot exploration",
        "Real-time inventory synchronization across buyers, brokers, and developers",
        "Buyer-facing site exploration and reservation workflows",
        "Responsive, mobile-optimized luxury web interface",
      ],
      technology: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
    },
  },
  {
    id: "zonirza",
    title: "Zonirza",
    category: "web-apps",
    categoryLabel: "E-Commerce / Full-Stack Web Application",
    cardSummary: "Full-stack luxury e-commerce platform with product configuration, authentication, orders, wishlist, multi-currency support, and transactional email.",
    techStack: ["Next.js 15", "React", "MongoDB", "Mongoose", "NextAuth.js", "Tailwind CSS"],
    githubUrl: "https://github.com/Utkarsh9571/Zonirza-website",
    isPrimaryWeb: true,
    caseStudy: {
      whatItIs: "A premier light luxury e-commerce platform engineered for an editorial-grade shopping experience and complete order lifecycle management.",
      whatIBuilt: "Full-stack e-commerce application with product catalog, persistent wishlist sync, custom configuration, and automated email flows.",
      keyFunctionality: [
        "Complete order lifecycle tracking (Placed → Confirmed → Processing → Shipped → Delivered)",
        "Persistent cross-device wishlist system with database synchronization",
        "Bespoke product detail view with custom metal, purity, and stone configuration",
        "Multi-currency support (INR, USD, AED, EUR) and mobile-first navigation",
        "Transactional email notifications and email OTP authentication flow",
      ],
      technology: ["Next.js 15", "React", "Tailwind CSS", "Framer Motion", "MongoDB", "Mongoose", "Zustand", "NextAuth.js", "Nodemailer"],
    },
  },
  {
    id: "bliniq",
    title: "BlinIQ",
    category: "websites",
    categoryLabel: "Business Website / Healthcare Website",
    cardSummary: "Professional healthcare business website designed to present services, information, and the brand through a modern responsive experience.",
    techStack: ["Next.js", "React", "TypeScript", "Responsive Web Design"],
    githubUrl: "https://github.com/Utkarsh9571/bliniq-website",
    isPrimaryWeb: true,
    caseStudy: {
      whatItIs: "A clean, modern business website built to establish strong online presence and present healthcare services clearly to prospective clients.",
      whatIBuilt: "Responsive client business website featuring modern typography, structured service pages, and conversion-focused design.",
      keyFunctionality: [
        "Professional healthcare business presentation and brand showcase",
        "Responsive, mobile-first page layouts and navigation shell",
        "Structured service offerings and client-focused messaging",
        "High-performance Next.js web application architecture",
      ],
      technology: ["Next.js", "React", "TypeScript", "CSS Modules / Modern CSS"],
    },
  },
  {
    id: "mailpilot",
    title: "MailPilot",
    category: "ai-automation",
    categoryLabel: "AI / Full-Stack Application",
    cardSummary: "AI-assisted Gmail client combining natural-language commands with real UI actions, Gmail APIs, and human-in-the-loop controls.",
    techStack: ["Next.js", "TypeScript", "CopilotKit", "Google Gemini", "Zustand", "Gmail API"],
    githubUrl: "https://github.com/Utkarsh9571/mailpilot",
    isPrimaryWeb: false,
    caseStudy: {
      whatItIs: "An AI-controlled Gmail client where natural language commands directly drive state-driven UI actions and email workflows.",
      whatIBuilt: "Full-stack email application integrating Google OAuth, CopilotKit AI assistant, SSE real-time sync, and human-in-the-loop confirmation controls.",
      keyFunctionality: [
        "Natural language AI UI control (opens compose, fills fields, filters inbox)",
        "Human-in-the-loop safety confirmation before sending emails",
        "Real-time inbox sync using Server-Sent Events (SSE)",
        "Google OAuth & Gmail API integration with mock mode for offline testing",
      ],
      technology: ["Next.js", "TypeScript", "React", "Zustand", "Tailwind CSS", "shadcn/ui", "CopilotKit", "Google Gemini", "NextAuth.js", "Gmail APIs"],
    },
  },
  {
    id: "meera",
    title: "Meera AI Chatbot",
    category: "ai-automation",
    categoryLabel: "AI Integration / Conversational Automation",
    cardSummary: "AI sales chatbot prototype demonstrating deterministic lead qualification, scoring, and AI-assisted conversational responses.",
    techStack: ["Node.js", "Express", "MongoDB", "Google Gemini", "Vercel", "Render"],
    githubUrl: "https://github.com/Utkarsh9571/meera-chatbot",
    liveUrl: "https://meera-chatbot-h2x8.vercel.app/",
    isPrimaryWeb: false,
    caseStudy: {
      whatItIs: "An AI-powered conversational sales assistant built with deterministic state-machine logic to qualify and score sales leads.",
      whatIBuilt: "Conversational backend service combining regex lead extraction, automated scoring (100pt scale), and Gemini-assisted Hinglish message rewriting.",
      keyFunctionality: [
        "Deterministic lead qualification flow using state-machine logic",
        "100-point automated lead scoring system",
        "WhatsApp-style web conversation interface & admin panel",
        "Gemini 2.5 Flash Lite integration strictly scoped to conversational style",
      ],
      technology: ["Node.js", "Express", "MongoDB Atlas", "Google Gemini", "Vanilla HTML/CSS/JS", "Render.com", "Vercel"],
      liveDemoNote: "Note: Live frontend link available; backend host on Render may undergo cold starts.",
    },
  },
];
