# FARAKIQ Services & Pricing Architecture Redesign

## Executive Summary
This document records the architectural and commercial repositioning of the **Development & Engineering** side of the FARAKIQ website.

The goal was to transform FARAKIQ's development offering from an internal developer-centric technology inventory into an outcome-oriented, customer-first commercial catalog that non-technical business owners can immediately understand within 5–10 seconds.

---

## 1. Problem Diagnosis (Previous State)

### The "Developer-First" Anti-Pattern
Previously, FARAKIQ presented its development and AI capabilities using technical implementation terminology:
- *Website Development*
- *Customised Web App*
- *Custom Application*
- *AI & Chatbot Integration*
- *n8n Workflow Automation*
- *REST API & Webhooks*

Repeated technical tags such as `"Full-Stack"` were plastered across multiple items, signaling developer skills rather than customer outcomes.

### The Pricing Confusion
Non-technical clients do not purchase "full-stack development" or "n8n nodes" as recurring services.
Crucially, the previous interactive scope calculator had flawed logic:
- `ai-integration` (₹15,000), `n8n-automation` (₹12,000), and `api-integration` (₹10,000) had positive numbers in `price`, causing the client calculator to sum one-time project builds directly into the `monthlyTotal` ("Estimated monthly retainer").
- A business owner selecting an AI bot and a landing page would see an inflated, misleading "monthly retainer" instead of a one-time project investment.

---

## 2. The New Customer-Facing Service Structure

We restructured the development vertical into **7 outcome-oriented offerings** where the primary name and copy directly answer: *"What problem does this solve for my business?"*

| Service Name | Customer Outcome / What We Build | Starting Anchor Price | Billing Type | Route Mapping |
| :--- | :--- | :--- | :--- | :--- |
| **Conversion Landing Pages** | High-converting single-page landing sites engineered for ad campaigns and lead capture | From ₹5,999 | One-time | `/services/web-development` |
| **Websites & Digital Presence** | Modern, responsive company websites with clean SEO architecture and fast loading | From ₹25,000 | One-time | `/services/web-development` |
| **Web Apps & Custom Platforms** | Custom browser software, customer portals, booking engines, and SaaS-style applications | From ₹60,000 | One-time | `/services/web-development` |
| **AI Agents & AI Chatbots** | Intelligent assistants that talk to customers, answer queries, and qualify leads 24/7 | From ₹15,000 | One-time | `/services/n8n-automation` |
| **Business Automation** | Automated workflows that eliminate repetitive tasks, route leads, and update CRMs | From ₹12,000 | One-time | `/services/n8n-automation` |
| **Integrations & Connected Systems** | Seamless connections between website, CRM, payment gateways, WhatsApp, and tools | From ₹10,000 | One-time | `/services/n8n-automation` |
| **Internal Tools & Dashboards** | Tailored admin dashboards, operations portals, and reporting tools for your team | Custom quote | One-time | `/services/web-development` |

### Services Consolidated & Repositioned
1. **"Customised Web App" + "Custom Application" → Consolidated into "Web Apps & Custom Platforms"**: Eliminated artificial duplication of browser applications.
2. **"Conversion Landing Page" vs "Website Development"**: Decoupled entry-level ad landing pages (From ₹5,999) from comprehensive multi-page corporate websites (From ₹25,000).
3. **"n8n Workflow Automation" → Repositioned as "Business Automation"**: Clients understand automated operations; n8n is highlighted in supporting technical copy, architecture diagrams, and the dedicated deep-dive page.
4. **"REST API & Webhooks" → Repositioned as "Integrations & Connected Systems"**: Clients want their CRM, payments, and website to talk to each other; APIs and webhooks are the mechanism.
5. **Added "Internal Tools & Dashboards"**: Clear positioning for operations teams wanting custom reporting, admin panels, and staff portals without off-the-shelf SaaS constraints.
6. **Eliminated "Full-Stack" as a Repeated Customer Tag**: Replaced with outcome tags (`Conversion`, `Websites`, `Platforms`, `AI Systems`, `Automation`, `Integration`, `Operations`).

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
- `ServiceItem` now includes `billingType: "project" | "monthly"`, `shortDesc: string`, and `priceDisplay: string`.
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
- **Production Build (`npm run build`)**: Code 0, all 19 static routes generated cleanly in 2.0s.
- **Responsive Viewport Audit**: Tested at 375px, 414px, 768px, and 1280px+. Verified `scrollWidth <= innerWidth` with zero horizontal overflow.
