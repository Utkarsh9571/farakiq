# FARAKIQ — Engineering, AI Systems & Growth Agency Platform

FARAKIQ is an integrated digital agency and software partnership platform that combines custom software engineering, AI workflow automations, performance ad management, and organic search/answer engine optimization under one accountable commercial framework.

---

## Overview

Most agencies either write code without understanding customer acquisition or run ads pointing to un-optimized digital infrastructure. FARAKIQ unites three disciplines into a single growth operating system:

1. **Software & AI Systems Engineering**: Conversion landing pages, company websites, web applications, 24/7 AI customer assistants, n8n automations, REST API integrations, and operations dashboards.
2. **Paid Growth & Performance**: Direct-response advertising across Google Ads, Meta Ads (Facebook/Instagram), and LinkedIn Ads, powered by Conversion API (CAPI), GA4, and weekly performance reporting.
3. **Organic Search & Discovery**: Technical SEO, Schema.org Graph injection, Answer Engine Optimization (AEO for ChatGPT/Perplexity), and Generative Engine Optimization (GEO).

---

## Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Core Library**: React 19 & TypeScript 5
- **Animations**: Motion (`motion/react`)
- **Styling**: Tailwind CSS v4 & PostCSS with custom theme tokens & responsive CSS Grid/Flexbox
- **Linting & Quality**: ESLint 9 & TypeScript Compiler

---

## Service Verticals

| Vertical | Discipline | Core Services |
| :--- | :--- | :--- |
| **01 // Engineering** | Development & AI Systems | Conversion Landing Pages, Websites, Custom Web Apps, AI Chatbots, Business Automation, Integrations, Internal Dashboards |
| **02 // Performance** | Paid Growth & Performance | PPC & Google Ads, Meta Ads (FB & IG), LinkedIn Ads |
| **03 // Discovery** | Organic Search & Discovery | Search Engine Optimization (SEO), Answer Engine Optimization (AEO), Generative Engine Optimization (GEO) |

---

## Project Architecture

```
farakiq/
├── app/                        # Next.js App Router Pages & Routes
│   ├── blog/                   # Blog listing & article routes ([slug])
│   ├── portfolio/              # Portfolio case study routes ([slug])
│   ├── privacy-policy/         # Privacy Policy page
│   ├── services/               # Dedicated service routes ([slug])
│   ├── terms-and-conditions/   # Terms and Conditions page
│   ├── globals.css             # Design system, CSS variables & responsive layout
│   ├── layout.tsx              # Root layout & global metadata
│   ├── page.tsx                # Homepage composition
│   ├── robots.ts               # Dynamic robots.txt route
│   └── sitemap.ts              # Dynamic sitemap.xml route
├── components/                 # Reusable Modular React Components
│   ├── About.tsx               # Agency capability & background
│   ├── Approach.tsx            # Partnership operating principles
│   ├── Architecture.tsx        # 4-Stage Operating Model matrix
│   ├── BrandLogo.tsx           # SVG/CSS Brand Logo component
│   ├── CTA.tsx                 # Project Enquiry & Intake Form
│   ├── Footer.tsx              # Page footer with navigation
│   ├── Hero.tsx                # Main hero section
│   ├── Navbar.tsx              # Navigation bar with responsive drawer
│   ├── Portfolio.tsx           # Real-world project showcase & filters
│   ├── Pricing.tsx             # Growth retainers, project tiers & comparison
│   ├── RoiCalculator.tsx       # Interactive conversion estimator tool
│   ├── Services.tsx            # Asymmetric 2-row vertical services grid
│   └── StructuredData.tsx      # Schema.org JSON-LD microdata injector
├── data/                       # Type-Safe Data Models
│   ├── architectureData.ts     # Operating stage data
│   ├── blogData.ts             # Blog article data & metadata
│   ├── portfolioData.ts        # Portfolio project case studies
│   ├── servicesData.ts         # Service detail specs & FAQs
│   └── siteData.ts             # Core pricing, vertical & comparison data
├── docs/                       # Project Documentation & Audits
│   └── responsive-audit.md     # Viewport audit and responsiveness log
├── public/                     # Static Brand Assets & Favicons
└── package.json                # Dependencies & script configurations
```

---

## Development Commands

Run the following commands in the project root:

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:3000)
npm run dev

# Run ESLint validation
npm run lint

# Build production bundle with Next.js Turbopack & TypeScript checks
npm run build

# Start production server
npm run start
```

---

## Environment Variables

The project uses optional environment variables for lead intake webhooks. Create a `.env.local` file in the root directory if needed:

```env
# Google Apps Script Webhook URL for contact form submissions
NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/.../exec
```

*If `NEXT_PUBLIC_APPS_SCRIPT_URL` is omitted, the form operates with client-side fallback simulation.*

---

## Main Routes & Pages

- `/` — Main landing page featuring Hero, Services Grid, Portfolio Showcase, 4-Stage Architecture, ROI Estimator, Pricing Retainers, Approach, About, and Contact Intake.
- `/services/[slug]` — Deep-dive service pages (`web-development`, `google-ads`, `meta-ads`, `seo`, `n8n-automation`).
- `/portfolio/[slug]` — Project case studies (`brickbytes`, `zonirza`, `bliniq`, `hyperflow`, `scaleguard`).
- `/blog` & `/blog/[slug]` — Insights, benchmarks, and engineering guides.
- `/privacy-policy` & `/terms-and-conditions` — Commercial policies and terms.

---

## Responsive Design System

The application is engineered mobile-first and tested across the following viewport width tiers:
- **Mobile**: `320px`, `360px`, `375px`, `390px`, `414px`, `430px`, `480px`
- **Tablet**: `600px`, `768px`, `820px`, `900px`
- **Laptop**: `1024px`, `1280px`
- **Desktop**: `1366px`, `1440px`, `1536px`, `1920px`

---

## SEO & Accessibility

- **Structured Data**: Schema.org JSON-LD for `Organization`, `ItemList`, `CreativeWork`, `Service`, and `FAQPage`.
- **Accessibility**: Native HTML5 semantics, `aria-expanded` toggle states, visible focus rings, and `prefers-reduced-motion` CSS support.
