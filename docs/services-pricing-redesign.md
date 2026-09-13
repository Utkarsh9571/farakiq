# FARAKIQ Services & Pricing Architecture Redesign

## Executive Summary
This document records the architectural and commercial repositioning of the **Services & Pricing** sections of the FARAKIQ website.

The redesign transforms FARAKIQ from an internal developer-centric capability ledger into an authoritative, customer-first agency showcase structured around FARAKIQ's three core verticals:
1. **Development & AI Systems** (`01 // ENGINEERING`)
2. **Paid Growth & Performance** (`02 // PERFORMANCE`)
3. **Organic Search & Discovery** (`03 // DISCOVERY`)

---

## 1. Core Information Architecture & Visual Concept

### Reference Direction Applied Without Cloning
Taking inspiration from the core structural principle of the reference (establishing strong, clear operating verticals before drilling into individual technical services):
- **Master Display Headline**:
  ```
  BUILD THE SYSTEM.
  DRIVE THE DEMAND.
  OWN THE DISCOVERY.
  ```
  *Three disciplines // One growth system.*
- **Three Editorial Vertical Panels**:
  - `01 // ENGINEERING`: **Development & AI Systems** (*"Build the systems behind your business."*) — Coral Accent (`#FF4A34`).
  - `02 // PERFORMANCE`: **Paid Growth & Performance** (*"Put your business in front of buyers."*) — Emerald Accent (`#10B981`).
  - `03 // DISCOVERY`: **Organic Search & Discovery** (*"Own the search results that compound."*) — Cyan Accent (`#00E5FF`).
- **Brand Consistency**: Uses FARAKIQ's established dark-mode tokens (`#0D0F12`, `#16191E`, `#272B30`), Space Grotesk display typography, IBM Plex Mono badges, and subtle card accent glows rather than bright pastel clone themes.

---

## 2. The Three Operating Verticals

### Vertical 01 — DEVELOPMENT & AI SYSTEMS (`01 // ENGINEERING`)
*"We engineer custom web platforms, conversion-ready company websites, 24/7 AI customer assistants, and automated operations that eliminate repetitive work and connect your software."*

| Service Name | Customer Outcome / What We Build | Starting Anchor Price | Billing Type | Route Mapping |
| :--- | :--- | :--- | :--- | :--- |
| **Conversion Landing Pages** | High-converting single-page landing sites engineered for ad campaigns and lead capture | From ₹5,999 | One-time | `/services/web-development` |
| **Websites & Digital Presence** | Modern, responsive company websites with clean SEO architecture and fast loading | From ₹25,000 | One-time | `/services/web-development` |
| **Web Apps & Custom Platforms** | Custom browser software, customer portals, booking engines, and SaaS-style applications | From ₹60,000 | One-time | `/services/web-development` |
| **AI Agents & AI Chatbots** | Intelligent assistants that talk to customers, answer queries, and qualify leads 24/7 | From ₹15,000 | One-time | `/services/n8n-automation` |
| **Business Automation** | Automated workflows that eliminate repetitive tasks, route leads, and update CRMs | From ₹12,000 | One-time | `/services/n8n-automation` |
| **Integrations & Connected Systems** | Seamless connections between website, CRM, payment gateways, WhatsApp, and tools | From ₹10,000 | One-time | `/services/n8n-automation` |
| **Internal Tools & Dashboards** | Tailored admin dashboards, operations portals, and reporting tools for your team | Custom quote | One-time | `/services/web-development` |

*Supporting Stack Pills*: Next.js • React • TypeScript • Node.js • n8n • REST APIs • PostgreSQL • MongoDB • LLMs

---

### Vertical 02 — PAID GROWTH & PERFORMANCE (`02 // PERFORMANCE`)
*"We put your business in front of customers who are actively searching for what you sell — with rigorous tracking, rapid creative testing, and transparent weekly numbers."*

| Service Name | Customer Outcome / What We Deliver | Starting Anchor Price | Billing Type | Route Mapping |
| :--- | :--- | :--- | :--- | :--- |
| **PPC & Google Ads** | High-intent search, negative keyword pruning & conversion tracking to capture ready-to-buy searchers | ₹12,000 / mo | Monthly | `/services/google-ads` |
| **Meta Ads (FB & IG)** | Direct-response Facebook & Instagram campaigns driven by structured creative & angle testing | ₹12,000 / mo | Monthly | `/services/meta-ads` |
| **LinkedIn Ads** | Target decision-makers and high-value B2B accounts to generate qualified commercial consultations | ₹15,000 / mo | Monthly | `/services/google-ads` |

*Supporting Stack Pills*: Google Ads • Meta Ads • LinkedIn Ads • Conversions API (CAPI) • GA4 • Tag Manager

---

### Vertical 03 — ORGANIC SEARCH & DISCOVERY (`03 // DISCOVERY`)
*"Make your business effortless to find — both in Google's organic results and across the modern AI answer engines (ChatGPT, Perplexity) your customers use every day."*

| Service Name | Customer Outcome / What We Deliver | Starting Anchor Price | Billing Type | Route Mapping |
| :--- | :--- | :--- | :--- | :--- |
| **Search Engine Optimization (SEO)** | Technical site crawlability, Schema.org graph injection, and high-intent commercial content architecture | ₹15,000 / mo | Monthly | `/services/seo` |
| **Answer Engine Optimization (AEO)** | Optimize content answers and entity profiles so ChatGPT, Perplexity, and AI Overviews cite you | ₹10,000 / mo | Monthly | `/services/seo` |
| **Generative Engine Optimization (GEO)** | Entity positioning and semantic authority across modern generative search and synthesis platforms | ₹10,000 / mo | Monthly | `/services/seo` |

*Supporting Stack Pills*: Technical SEO • Schema.org Graph • AEO / Perplexity • Generative Search • Core Web Vitals

---

## 3. Pricing Decoupling: One-Time Projects vs. Monthly Retainers

### Clean Separation of Models
1. **Ongoing Monthly Growth Retainers (Starter / Growth / Partner)**:
   - Dedicated exclusively to ongoing media management (Google Ads, Meta Ads, LinkedIn Ads), continuous technical SEO, Answer Engine Optimization (AEO/GEO), and monthly strategic reporting.
   - Fixed flat fees: Starter (₹20,000/mo), Growth (₹35,000/mo), Partner (₹50,000/mo).
2. **One-Time Scoped Development Projects**:
   - Software and websites are priced per deliverable/scope, never forced into monthly retainers.
   - Dedicated **"Development, AI Systems & Software Projects"** card grid added to `components/Pricing.tsx` right below the monthly tiers.
   - Transparent scoping note: starting anchors establish baseline production setups, while custom integrations, authentication, database schemas, and functional complexity determine final quote.

### Interactive Scope Ledger & Calculator (`components/Services.tsx`)
The calculator data model was refactored:
- `ServiceItem` includes `billingType: "project" | "monthly"`, `shortDesc: string`, and `priceDisplay: string`.
- When users select items in the ledger, the calculator splits selections:
  - `projectItems = selectedList.filter(s => s.billingType === "project")`
  - `monthlyItems = selectedList.filter(s => s.billingType === "monthly")`
- The `bundle-receipt` independently reports:
  - **One-time project estimate**: `From ₹XX,XXX` (or "None selected" / "Custom quote")
  - **Estimated monthly retainer**: `₹XX,XXX / mo` (or "None selected")
- Footnote reinforces: *"Development builds are scoped once per deliverable. Ongoing marketing, ads & SEO are billed monthly."*

---

## 4. Route & SEO Compatibility
Zero routes were broken. Canonical URLs and static site generation (`generateStaticParams`) remain 100% intact:
- `/services/web-development`: Dedicated landing for Websites, Conversion Landing Pages, Custom Web Apps, and Internal Tools.
- `/services/n8n-automation`: Dedicated landing for Business Automation, AI Agents/Chatbots, and Connected Systems.
- `/services/google-ads`: PPC & Google Ads.
- `/services/meta-ads`: Meta Ads Management.
- `/services/seo`: Search Engine Optimization (SEO & AEO).

Technical SEO keywords (Next.js, TypeScript, n8n, REST API, Webhooks, LLMs, PostgreSQL, MongoDB) were preserved in descriptions, capabilities, FAQs, and metadata schemas.

---

## 5. Verification Results
- **TypeScript & Lint**: 0 errors.
- **Production Build (`npm run build`)**: Code 0, all 19 static routes generated cleanly in 1.9s.
- **Responsive Viewport Audit**: Tested at 375px, 414px, 768px, and 1280px+. Verified `scrollWidth <= innerWidth` with zero horizontal overflow.
- **Live Browser Audit**: Tested interactive scope selection across cards and verified complete decoupling between one-time and monthly estimates.
