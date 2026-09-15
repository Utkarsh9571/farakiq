# FARAKIQ — Codebase Orientation, System Architecture & Working Context

**Document Version:** 1.0.0  
**Updated:** September 2026  
**Project:** FARAKIQ Agency Website  
**Repository:** `https://github.com/Utkarsh9571/farakiq.git`  
**Brand & Positioning:** FARAKIQ — Specialized Engineering & Growth Partnership  
**Framework Environment:** Next.js 16.3.4 (Turbopack, App Router, React 19, TypeScript)

---

## 1. Project Purpose & Positioning

FARAKIQ is a modern digital agency and creative technology brand. The website (`https://farakiq.com`) serves as the agency's primary digital flagship, portfolio, and client acquisition channel.

### Core Business Offering
- **Custom Website Development & Full-Stack Web Applications** (Next.js, React, Node.js, databases)
- **AI Integrations & Custom Conversational Bots** (Google Gemini, OpenAI, state-machine qualification)
- **n8n Workflow Automation & System Integrations** (self-hosted and cloud automated pipelines)
- **Performance Advertising** (Google Search/PPC and Meta Facebook/Instagram Ads)
- **Organic Discovery & AI Search** (Technical SEO, Schema.org entity graphs, Answer Engine Optimization / AEO)

### Positioning & Value Proposition
- **Anti-Agency Bureaucracy:** Direct collaboration with experienced engineering partners rather than rotating junior account managers.
- **Flat-Fee Model:** Elimination of percentage-of-spend markups that penalize client growth.
- **Measurable ROI:** Focus on traceable business outcomes and plain-language weekly numbers over vanity metrics ("Stop wasting your money").
- **Engineering Discipline:** High-speed code, modern design systems, clean architecture, and transparent scope.

### Development Rhythm
Development on this website is intermittent and incremental. Work is paced deliberately to match incoming client priorities without destabilizing working features. Proactive full-site redesigns are avoided.

---

## 2. Current Tech Stack

| Layer | Technology | Details / Version |
| :--- | :--- | :--- |
| **Framework** | Next.js App Router | `16.3.4` with Turbopack bundler |
| **Runtime & UI** | React / React DOM | `19.2.8` (React 19 Server & Client Components) |
| **Language** | TypeScript | `^5.0.0` (Strict mode enabled, `@/*` alias) |
| **Animations** | Motion for React | `motion/react` (`^13.2.0`, formerly Framer Motion) |
| **Typography** | Google Fonts | `Space Grotesk` (headings/body) + `IBM Plex Mono` via `next/font/google` |
| **Styling** | Vanilla CSS + CSS Variables | Centralized in `app/globals.css`, responsive utilities, scoped inline overrides |
| **SEO & Schemas** | Schema.org JSON-LD | Safely injected via `components/StructuredData.tsx` |
| **Deployment** | Vercel Platform | Static Site Generation (SSG) with `generateStaticParams` |

---

## 3. Current Route Structure

The site combines a smooth single-page scrolling experience for the primary brand narrative with crawlable, dedicated static routes for specific search intent:

```
farakiq.com/
├── /                                   [Homepage single-page scroll]
│   ├── #services                       [Capability pillars & scope calculator]
│   ├── #portfolio                      [Featured work & quick view modal]
│   ├── #architecture                   [How We Build interactive matrix]
│   ├── #roi                            [Interactive conversion estimator]
│   ├── #pricing                        [Flat-fee tiers & agency comparison]
│   ├── #approach                       [3-step process]
│   ├── #about                          [Leadership & engineering ethos]
│   └── #contact                        [Lead capture & direct contact]
├── /services/                          [Dedicated crawlable service routes]
│   ├── /services/meta-ads              [Paid Social & Meta Ads management]
│   ├── /services/google-ads            [High-intent PPC & Search campaigns]
│   ├── /services/seo                   [Technical SEO & AI Answer Optimization]
│   ├── /services/web-development       [Next.js platforms & custom web apps]
│   └── /services/n8n-automation        [n8n workflow pipelines & integrations]
├── /portfolio/                         [Dedicated case study deep dives]
│   ├── /portfolio/brickbytes           [Real estate spatial visualization platform]
│   ├── /portfolio/zonirza              [Full-stack luxury e-commerce platform]
│   ├── /portfolio/bliniq               [Modern healthcare business website]
│   ├── /portfolio/mailpilot            [AI-assisted Gmail workflow client]
│   └── /portfolio/meera                [Deterministic AI sales qualification bot]
├── /blog/                              [Content & engineering insights]
│   ├── /blog/                          [Article collection index]
│   ├── /blog/google-ads-management-cost-india
│   └── /blog/n8n-vs-zapier-small-business-automation
├── /sitemap.xml                        [Dynamically lists all 19 canonical URLs]
└── /robots.txt                         [Crawler directives & sitemap reference]
```

---

## 4. Homepage Section Structure & Sequence

The homepage (`app/page.tsx`) renders components in the following order:

1. **`Navbar` (`components/Navbar.tsx`)**: Fixed header with backdrop blur, SVG brand logo, primary anchor links, `/blog` link, "Book a call" CTA button, and responsive mobile slide-down menu.
2. **`Hero` (`components/Hero.tsx`)**: High-impact value proposition (*"Are you ready to stop wasting your money?"*), dual CTA buttons, and comparative "Receipt No. 001" (agency retainer bloat) vs "Receipt No. 002" (FARAKIQ traceable value).
3. **`Portfolio` (`components/Portfolio.tsx`)**: Interactive project showcase with category filters (`All`, `Websites`, `Web Apps`, `AI & Automation`), tech pills, live/code links, client-side quick modal, and full case study links.
4. **`Architecture` (`components/Architecture.tsx`)**: *"How We Build: From Problem to Production"* pipeline matrix with 4 stages (`01 Audit & Problem Framing`, `02 Modular System Design`, `03 API & Automation Integration`, `04 Production & Deployment`) and interactive terminal simulation panel.
5. **`RoiCalculator` (`components/RoiCalculator.tsx`)**: Interactive conversion estimator featuring sliders for monthly spend, lead volume, close rate, deal value, and projected growth lift.
6. **`Services` (`components/Services.tsx`)**: Capability vertical tabs (`Development & AI Systems`, `Paid Ads & Performance`, `Organic Search`), interactive pick-list scope ledger with dynamic monthly total estimation, and direct links to dedicated service pages (`Details ↗`).
7. **`Pricing` (`components/Pricing.tsx`)**: Fixed fee tiers (`Starter ₹20,000/mo`, `Growth ₹35,000/mo`, `Partner ₹50,000/mo`) and 5-point comparison table against traditional agencies and typical freelancers.
8. **`Approach` (`components/Approach.tsx`)**: 3-step execution methodology (`01 Audit`, `02 Strategy`, `03 Execution`).
9. **`About` (`components/About.tsx`)**: Ethos, partnership advantages, and interactive technical skills tag cloud.
10. **`CTA` (`components/CTA.tsx`)**: Direct email (`hello@farakiq.com`) and interactive project enquiry form with client-side validation.
11. **`Footer` (`components/Footer.tsx`)**: 4-column footer containing brand statement, navigation links, dedicated service page links, and contact channels.

---

## 5. Component Architecture

The codebase follows a modular structure:

```
components/
├── About.tsx             # Ethos & skills cloud (Client Component)
├── Approach.tsx          # 3-step execution methodology (Client Component)
├── Architecture.tsx      # How We Build pipeline matrix (Client Component)
├── BrandLogo.tsx         # Stylized FARAKIQ brand mark (Client Component)
├── CTA.tsx               # Project enquiry form & direct contact (Client Component)
├── Footer.tsx            # 4-column site-wide footer (Client Component)
├── Hero.tsx              # Hero headline & comparative receipts (Client Component)
├── Navbar.tsx            # Sticky navigation & mobile drawer (Client Component)
├── NotFoundContent.tsx   # Custom 404 interactive stage (Client Component)
├── Portfolio.tsx         # Filterable portfolio grid & modal (Client Component)
├── Pricing.tsx           # Pricing tiers & comparison matrix (Client Component)
├── RoiCalculator.tsx     # Interactive conversion sliders (Client Component)
├── Services.tsx          # Multidisciplinary capability ledger (Client Component)
└── StructuredData.tsx    # Reusable safe JSON-LD injector (Server/Client Compatible)
```

### Server vs. Client Component Boundaries
- **Server Components:** Route pages (`app/layout.tsx`, `app/page.tsx`, `app/not-found.tsx`, `app/services/[slug]/page.tsx`, `app/portfolio/[slug]/page.tsx`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`). They render semantic HTML on the server and stream without client hydration overhead for static content.
- **Client Components (`"use client"`):** Used specifically for interactive UI widgets requiring React state (`useState`), user input, and Framer Motion (`motion/react`) animations.

---

## 6. Data Architecture

Content is decoupled from UI presentation and maintained in type-safe datasets under `data/`:

| Data File | Primary Exports | Purpose |
| :--- | :--- | :--- |
| **`data/siteData.ts`** | `SERVICES_DATA`, `PRICING_TIERS`, `COMPARISON_DATA`, `APPROACH_STEPS`, `SKILLS_DATA` | Powers homepage services ledger, pricing tiers, and approach steps |
| **`data/portfolioData.ts`** | `PORTFOLIO_PROJECTS`, `PortfolioProject`, `ProjectCategory` | Single source of truth for case studies, tech stacks, repository URLs, and live links |
| **`data/servicesData.ts`** | `SERVICES_CATALOG`, `ServiceDetail` | In-depth capabilities, processes, deliverables, FAQs, and pricing models for dedicated service pages |
| **`data/blogData.ts`** | `BLOG_POSTS`, `BlogPost` | Long-form technical articles, headings, metadata, author data, and comparison tables |
| **`data/architectureData.ts`**| `ARCHITECTURE_STAGES`, `ArchitectureStage` | Pipeline stages, nodes, and terminal simulation output metadata |

---

## 7. SEO & Structured Data Implementation

The SEO architecture is built for Googlebot crawlability and modern AI search engines:

- **Root Structured Data (`app/layout.tsx`):** Consolidated Schema.org `ProfessionalService` JSON-LD including official email (`hello@farakiq.com`), global service scope (`Worldwide`), price range, and service competencies.
- **Service Pages Structured Data:** Schema.org `Service`, `BreadcrumbList`, and `FAQPage` JSON-LD on all 5 service routes.
- **Portfolio Structured Data:** Schema.org `CreativeWork` JSON-LD dynamically generated for every project, plus an `ItemList` on the homepage portfolio section.
- **Blog Structured Data:** Schema.org `Blog` on `/blog` and `BlogPosting` on each individual article.
- **Canonical Overrides:** Every route segment specifies its own `alternates.canonical` to avoid falling back to root.
- **Heading Order:** Single semantic `<h1>` on every page, with sequential `<h2>` and `<h3>` tags (verified zero skips).
- **XML Sitemap (`app/sitemap.ts`):** Programmatically indexes all 19 static routes with priorities (1.0 for home, 0.9 for services, 0.8 for portfolio/blog index, 0.7 for articles).
- **Robots (`app/robots.ts`):** Unrestricted indexing allowed (`allow: /`), with explicit sitemap reference.

---

## 8. Design System & Visual Tokens

The aesthetic is tailored to feel like a high-end engineering terminal with editorial polish:

### CSS Custom Properties (`app/globals.css`)
```css
:root {
  --ink: #0D0F12;           /* Deep terminal charcoal background */
  --ink-soft: #16191E;      /* Elevated card & container surface */
  --paper: #E4E7DE;         /* Light contrast paper tone */
  --paper-dim: #D8DBCF;     /* Subdued light contrast */
  --waste: #FF4A34;         /* Vibrant technical coral/orange accent */
  --value: #1F6F54;         /* Deep value emerald green */
  --accent-cyan: #00E5FF;   /* High-tech cyan glow */
  --accent-emerald: #10B981;/* Vibrant status emerald */
  --text-light: #EDEAE0;    /* Primary high-readability text */
  --text-light-dim: #A6A9A0;/* Muted secondary labels & body copy */
  --rule: #272B30;          /* Subdued structural border */
  --radius: 2px;            /* Sharp, industrial architectural corners */
  --max: 1100px;            /* Standard content container width */
}
```

### Signature Components
- **Pill Badges (`.badge-tech`):** Monospace tag featuring an illuminated red status dot (`.dot`).
- **Receipts (`.receipt`):** Ticket-style containers with dashed borders, metadata lines, and stamped evaluation marks (`.stamp.waste`, `.stamp.value`).
- **Interactive Terminal:** Monospace pseudo-terminal panel simulating live system parameters.
- **Background Grid:** Subtle 48px mesh gradient creating technical texture without visual noise.

---

## 9. Image & Media Architecture

- **Vector-First Strategy:** All core brand assets in `/public` are lightweight SVGs (`farakiq-logo.svg`, `favicon.svg`, `og-image.svg`).
- **Zero Heavy Raster Bloat:** No unoptimized JPEGs or PNGs exist in production routes, ensuring sub-second page loads.
- **Next.js `<Image>`:** Used with explicit width, height, and priority attributes to prevent Cumulative Layout Shift (CLS).

---

## 10. Existing Animations & Micro-Interactions

Built with `motion/react`:
- **Scroll Reveals:** Sections fade and rise into view using `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}` to avoid repetitive animations on re-scroll.
- **Hover Transitions:** Cards lift smoothly (`whileHover={{ y: -6 }}`) with subtle border color transitions to `--waste`.
- **Button Feedback:** Responsive scale tap animations (`whileTap={{ scale: 0.97 }}`).
- **Layout Animations:** Filter transitions utilize `layout` and `<AnimatePresence mode="popLayout">` for smooth rearrangement.
- **Accessibility:** Respects `@media (prefers-reduced-motion: reduce)` by resetting animation duration to 0.001ms.

---

## 11. Responsive Strategy

- **Container Constraint:** Standard `.wrap` with `max-width: 1100px` and responsive horizontal padding.
- **Fluid Headline Typography:** `clamp(2rem, 4.5vw, 3.4rem)` ensuring titles scale naturally across mobile screens without awkward line wraps.
- **Adaptive Grids:**
  - Standard cards utilize `gridTemplateColumns: repeat(auto-fill, minmax(320px, 1fr))`.
  - Multi-column splits (e.g. Architecture terminal, Contact form, Service split views) automatically collapse to single columns below `860px`.
- **Mobile Navigation:** Seamless slide-down drawer with full tap-target heights.
- **Horizontal Overflow Prevention:** Comparison and pricing tables are wrapped in scrollable containers (`overflowX: "auto"`).

---

## 12. Known Technical Debt & Maintenance Considerations

1. **Legacy Files in Root:** `index.html` (40KB early static prototype) remains in the repository root from the initial commit. It is ignored by Next.js App Router but should be kept in mind.
2. **Boilerplate CSS:** `app/page.module.css` contains default create-next-app CSS that is never imported by any active component.
3. **Contact Form Endpoint:** `components/CTA.tsx` references `process.env.NEXT_PUBLIC_APPS_SCRIPT_URL`. When unconfigured, it simulates a 1-second submission fallback. Needs a real webhook (or n8n endpoint) when live form leads are ready to be captured.
4. **Mixed Styling Approaches:** Components use a combination of classes from `globals.css` and React inline style objects.

---

## 13. Potential UX Weaknesses

- **Homepage Density:** Because the homepage serves as a full agency showcase, mobile users must scroll through substantial content. Quick-jump navigation or sticky sub-menus may be helpful in future iterations.
- **Modal vs. Dedicated Route:** Portfolio projects offer both a quick modal view and a dedicated case study page. This is flexible, but user analytics should inform whether one format is preferred.

---

## 14. Potential SEO Opportunities (Future Phases)

- **Search Console Indexation:** Once deployed to the live domain, submit `https://farakiq.com/sitemap.xml` directly to Google Search Console.
- **Editorial Expansion:** The `/blog` architecture is established. Adding 2–3 authentic articles quarterly will steadily grow long-tail search impressions.
- **Global & Regional Search Reach:** Expand subtle commercial citations for high-growth tech hubs and international client markets where relevant to search intent.

---

## 15. Potential Performance Considerations

- **Client Component Weight:** Because Framer Motion is used across the homepage, most homepage sections are client components. While SSG pre-renders static HTML, keeping client-side dependencies minimal is essential to maintain fast Time to Interactive (TTI) on mobile devices.
- **Zero Third-Party Tracking Bloat:** Currently free of heavy third-party tags (Hotjar, HubSpot tracking, etc.), preserving fast load times.

---

## 16. Files Central to Future UI Work

When implementing future requests from Darwin, the following files will be the primary touchpoints:

- **Homepage Content & Layout:**
  - `components/Hero.tsx` (Hero copy & receipt comparisons)
  - `components/Services.tsx` (Service ledger & pricing calculations)
  - `components/Portfolio.tsx` (Project filters & card layout)
  - `components/Architecture.tsx` (How We Build process matrix)
  - `components/Pricing.tsx` (Retainers & comparison table)
  - `components/CTA.tsx` (Contact form & copy)
- **Data Stores (Single Source of Truth):**
  - `data/siteData.ts` (Services, pricing, and approach text)
  - `data/portfolioData.ts` (Case study records)
  - `data/servicesData.ts` (Dedicated service page contents)
  - `data/blogData.ts` (Blog articles)
- **Global Tokens & Shell:**
  - `app/globals.css` (Colors, spacing, fonts, typography)
  - `components/Navbar.tsx` & `components/Footer.tsx` (Site-wide navigation)

---

## 17. Files That Appear Unused or Legacy (Do NOT Delete Yet)

These files are noted for awareness but preserved to maintain repository integrity:
- `index.html` (Original standalone static mockup from initial commit)
- `app/page.module.css` (Default Next.js boilerplate CSS)
- `farak_logo.pdf` (Raw vector export artifact)
- `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg` (Boilerplate assets from `create-next-app`)

---

## 18. Recommended Workflow for Future Incremental Improvements

To ensure stability and maintainability during intermittent development sprints, follow this sequence for every change request from Darwin:

1. **Locate Data First:** If the change involves text, numbers, case studies, or service descriptions, check if the data exists in `data/siteData.ts`, `data/portfolioData.ts`, `data/servicesData.ts`, or `data/blogData.ts`. Update the data model first.
2. **Minimal Component Edits:** Modify only the specific component responsible for the section. Preserve existing CSS custom properties and avoid introducing new styling frameworks.
3. **Preserve Next.js 16 Conventions:** For dynamic routes or metadata, ensure `params: Promise<{ slug: string }>` is awaited as required by Next.js 16.
4. **Verify External Link Security:** Ensure any new external links using `target="_blank"` include `rel="noopener noreferrer"`.
5. **Run Production Build:** Always execute `npm run build` after changes to verify TypeScript types, static route generation, and zero lint errors.
6. **Report Exactly What Changed:** Provide a concise summary of modified files and verified behavior.
