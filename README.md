# FARAKIQ — Engineering, AI Systems & Growth Agency Platform

FARAKIQ is a modern digital agency and engineering partnership platform that unites custom software development, AI workflow automation, performance marketing, and organic search optimization under one accountable framework.

---

## Overview

Most agencies either write code without understanding customer acquisition or run ads pointing to un-optimized digital infrastructure. FARAKIQ unites three disciplines into a single growth operating system:

1. **Software & AI Systems Engineering**: Conversion landing pages, full-stack web applications, 24/7 AI customer assistants, n8n automations, REST API integrations, and operations dashboards.
2. **Paid Growth & Performance**: Direct-response advertising across Google Ads, Meta Ads (Facebook/Instagram), and LinkedIn Ads, powered by Conversion API (CAPI), GA4, and weekly performance reporting.
3. **Organic Search & Discovery**: Technical SEO, Schema.org Graph injection, Answer Engine Optimization (AEO for ChatGPT/Perplexity), and Generative Engine Optimization (GEO).

---

## Tech Stack

- **Framework**: [Next.js 16 (App Router with Turbopack)](https://nextjs.org/)
- **Core Library**: React 19 & TypeScript 5
- **Animations**: Motion (`motion/react`)
- **Styling**: Tailwind CSS v4 & PostCSS with curated HSL design tokens & responsive CSS Grid/Flexbox
- **Analytics & Tracking**: Google Tag Manager (`GTM-5R6C7JML`)
- **Backend Integrations**: Google Apps Script Lead Intake Webhook (Google Sheets + Autoresponder Emails)
- **Quality & Linting**: ESLint 9 & TypeScript Compiler (`tsc --noEmit`)

---

## Service Verticals

| Vertical | Discipline | Core Services |
| :--- | :--- | :--- |
| **01 // Engineering** | Development & AI Systems | Conversion Landing Pages, Websites, Custom Web Apps, AI Chatbots, Business Automation, Integrations, Internal Dashboards |
| **02 // Performance** | Paid Growth & Performance | PPC & Google Ads, Meta Ads (FB & IG), LinkedIn Ads |
| **03 // Discovery** | Organic Search & Discovery | Search Engine Optimization (SEO), Answer Engine Optimization (AEO), Generative Engine Optimization (GEO) |

---

## Project Structure

```
farakiq/
├── app/                        # Next.js App Router Pages & Routes
│   ├── blog/                   # Blog listing & article routes ([slug])
│   ├── portfolio/              # Portfolio case study routes ([slug])
│   ├── privacy-policy/         # Privacy Policy page
│   ├── services/               # Dedicated service routes ([slug])
│   ├── terms-and-conditions/   # Terms and Conditions page
│   ├── globals.css             # Design system, CSS variables & responsive layout
│   ├── layout.tsx              # Root layout, GTM integration & Schema.org Graph
│   ├── page.tsx                # Homepage composition
│   ├── robots.ts               # Dynamic robots.txt route
│   └── sitemap.ts              # Dynamic sitemap.xml route
├── components/                 # Reusable Modular React Components
│   ├── hero-rocket/            # Interactive rocket illustration & status badges
│   ├── About.tsx               # Agency capability & background
│   ├── Approach.tsx            # Partnership operating principles
│   ├── Architecture.tsx        # 4-Stage Operating Model matrix
│   ├── BrandLogo.tsx           # SVG/CSS Brand Logo component
│   ├── CTA.tsx                 # Project Enquiry & Intake Form
│   ├── Footer.tsx              # Page footer with navigation & contact channels
│   ├── Hero.tsx                # Main hero section
│   ├── Navbar.tsx              # Responsive navigation bar with mobile drawer
│   ├── Portfolio.tsx           # Real-world project showcase & interactive filters
│   ├── Pricing.tsx             # Growth retainers, project tiers & comparison table
│   ├── QuoteModal.tsx          # Interactive project quote modal
│   ├── RoiCalculator.tsx       # Interactive conversion estimator tool
│   ├── Services.tsx            # Asymmetric 2-row vertical services grid
│   └── StructuredData.tsx      # Schema.org JSON-LD microdata injector
├── data/                       # Type-Safe Data Models
│   ├── architectureData.ts     # Operating stage data
│   ├── blogData.ts             # Blog article data & metadata
│   ├── portfolioData.ts        # Portfolio project case studies
│   ├── servicesData.ts         # Service detail specs & FAQs
│   └── siteData.ts             # Core pricing, vertical & comparison data
├── docs/                       # Project Documentation & Webhooks
│   ├── google-apps-script.js   # Lead intake webhook script for Google Sheets & emails
│   ├── project-context.md      # Comprehensive architecture & design system reference
│   ├── responsive-audit.md     # Viewport audit and responsiveness log
│   ├── seo-crawlability-audit.md # SEO & schema crawlability documentation
│   └── services-pricing-redesign.md # Pricing & services restructuring spec
├── public/                     # Static Brand Assets & Favicons
├── .env.local                  # Environment variables (git-ignored)
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

# Run TypeScript typecheck
npx tsc --noEmit

# Build production bundle with Next.js Turbopack
npm run build

# Start production server
npm run start
```

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
# Production Site Base URL
NEXT_PUBLIC_SITE_URL=https://www.farakiq.com

# Google Apps Script Webhook URL for contact form & quote modal intake
NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/.../exec
```

> [!NOTE]
> If `NEXT_PUBLIC_APPS_SCRIPT_URL` is omitted, the form gracefully simulates successful client-side submissions for preview environments.

---

## Lead Intake Webhook (Google Sheets & Email Automation)

The lead intake system uses Google Apps Script to log leads in a Google Sheet and automatically dispatch notifications to both the admin and client:

1. **Script Location**: [`docs/google-apps-script.js`](docs/google-apps-script.js).
2. **Setup**:
   - Open your Google Sheet → **Extensions** → **Apps Script**.
   - Paste the code from `docs/google-apps-script.js`.
   - Update `ADMIN_EMAIL = "sales@farakiq.com"`.
   - Click **Deploy** → **New deployment** → Type: **Web app**.
   - **Execute as**: `Me (your Google email)`.
   - **Who has access**: `Anyone` *(Crucial: allows external website submissions without Google sign-in)*.
   - Copy the deployed Web app URL and set it as `NEXT_PUBLIC_APPS_SCRIPT_URL` in `.env.local`.

---

## Routes & Pages

- `/` — Main landing page featuring Hero, Services Grid, Portfolio Showcase, 4-Stage Architecture, ROI Estimator, Pricing Retainers, Approach, About, and Contact Intake.
- `/services/[slug]` — Deep-dive service pages (`web-development`, `google-ads`, `meta-ads`, `seo`, `n8n-automation`).
- `/portfolio/[slug]` — Project case studies (`brickbytes`, `zonirza`, `bliniq`, `hyperflow`, `scaleguard`).
- `/blog` & `/blog/[slug]` — Technical insights, growth benchmarks, and engineering guides.
- `/privacy-policy` & `/terms-and-conditions` — Commercial policies and legal terms.

---

## Responsive Design System

The application is engineered mobile-first and tested across all major viewport tiers:
- **Mobile**: `320px`, `360px`, `375px`, `390px`, `414px`, `430px`, `480px`
- **Tablet**: `600px`, `768px`, `820px`, `900px`
- **Laptop**: `1024px`, `1280px`
- **Desktop**: `1366px`, `1440px`, `1536px`, `1920px`

---

## SEO & Accessibility

- **Structured Data**: Schema.org JSON-LD for `Organization`, `ProfessionalService`, `ItemList`, `CreativeWork`, `Service`, `BlogPosting`, and `FAQPage`.
- **Accessibility**: Native HTML5 semantic elements, `aria-expanded` toggle states, visible keyboard focus rings, and `prefers-reduced-motion` CSS support.
- **Official Contact**: `sales@farakiq.com`
