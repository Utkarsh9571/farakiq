/*
 * NOTE: This is generic, standard SaaS/agency legal boilerplate content provided for structural demonstration purposes.
 * It does not constitute legal advice and should be reviewed by qualified legal counsel before being treated as final.
 */

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farakiq.com";

export const metadata: Metadata = {
  title: "Terms & Conditions | FARAKIQ",
  description:
    "Standard terms of service and commercial conditions governing software development, AI automation, and growth marketing engagements with FARAKIQ.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | FARAKIQ",
    description:
      "Standard terms of service and commercial conditions governing software development, AI automation, and growth marketing engagements with FARAKIQ.",
    url: `${siteUrl}/terms-and-conditions`,
    siteName: "FARAKIQ",
    locale: "en_US",
    type: "website",
  },
};

export default function TermsAndConditionsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Terms & Conditions",
        item: `${siteUrl}/terms-and-conditions`,
      },
    ],
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms & Conditions | FARAKIQ",
    description: "Standard terms and conditions governing client service engagements, intellectual property, payment terms, and liabilities.",
    url: `${siteUrl}/terms-and-conditions`,
  };

  return (
    <>
      <Navbar />
      <StructuredData data={breadcrumbSchema} id="terms-breadcrumb-schema" />
      <StructuredData data={webpageSchema} id="terms-webpage-schema" />

      <main style={{ minHeight: "80vh", padding: "64px 0 96px" }}>
        <div className="wrap" style={{ maxWidth: "860px" }}>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "28px" }}>
            <div className="mono" style={{ fontSize: "0.8rem", color: "var(--text-light-dim)" }}>
              <Link href="/" style={{ color: "var(--text-light-dim)", textDecoration: "none" }}>
                Home
              </Link>
              <span style={{ margin: "0 8px", color: "var(--rule)" }}>/</span>
              <span style={{ color: "var(--text-light)" }}>Terms &amp; Conditions</span>
            </div>
          </nav>

          {/* Page Header */}
          <header style={{ marginBottom: "48px", borderBottom: "1px solid var(--rule)", paddingBottom: "32px" }}>
            <div className="badge-tech" style={{ marginBottom: "16px" }}>
              <span className="dot" />
              <span>LEGAL INFORMATION</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, margin: "0 0 12px", letterSpacing: "-0.02em" }}>
              Terms &amp; Conditions
            </h1>
            <p className="mono" style={{ fontSize: "0.85rem", color: "var(--waste)", margin: 0 }}>
              Last Updated: September 2026
            </p>
          </header>

          {/* Document Content */}
          <article
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "36px",
              lineHeight: 1.7,
              fontSize: "0.96rem",
              color: "var(--text-light-dim)",
            }}
          >
            {/* Section 1 */}
            <section style={{ border: "none", padding: 0 }}>
              <h2 style={{ fontSize: "1.3rem", color: "var(--text-light)", margin: "0 0 12px" }}>
                1. Acceptance of Terms
              </h2>
              <p style={{ margin: 0 }}>
                By accessing our website (farakiq.com), submitting a project enquiry, or entering into a Statement of Work (SOW) with FARAKIQ (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), you (&ldquo;Client&rdquo; or &ldquo;you&rdquo;) agree to be bound by these Terms &amp; Conditions. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            {/* Section 2 */}
            <section style={{ border: "none", padding: 0 }}>
              <h2 style={{ fontSize: "1.3rem", color: "var(--text-light)", margin: "0 0 12px" }}>
                2. Services Description
              </h2>
              <p style={{ margin: "0 0 12px" }}>
                FARAKIQ provides specialized technical engineering, AI workflow integration, and digital growth services, including:
              </p>
              <ul style={{ paddingLeft: "20px", margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>Custom business websites, conversion landing pages, and full-stack web applications.</li>
                <li>AI customer assistants, chatbots, and n8n business workflow automations.</li>
                <li>Paid advertising management across Google Ads, Meta Ads (Facebook/Instagram), and LinkedIn Ads.</li>
                <li>Technical search engine optimization (SEO), schema graph implementation, and answer engine optimization (AEO/GEO).</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section style={{ border: "none", padding: 0 }}>
              <h2 style={{ fontSize: "1.3rem", color: "var(--text-light)", margin: "0 0 12px" }}>
                3. Client Responsibilities &amp; Cooperation
              </h2>
              <p style={{ margin: "0 0 12px" }}>
                To ensure timely and effective project execution, the Client agrees to:
              </p>
              <ul style={{ paddingLeft: "20px", margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>Provide necessary business assets, credentials, ad account permissions, and API keys in a timely manner.</li>
                <li>Participate in scheduled strategy and milestone review sessions.</li>
                <li>Review and provide written feedback or approvals on deliverables within agreed review windows.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section style={{ border: "none", padding: 0 }}>
              <h2 style={{ fontSize: "1.3rem", color: "var(--text-light)", margin: "0 0 12px" }}>
                4. Fees, Invoicing &amp; Commercial Terms
              </h2>
              <p style={{ margin: "0 0 12px" }}>
                Our commercial engagements operate on transparent, flat-fee models:
              </p>
              <ul style={{ paddingLeft: "20px", margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                <li><strong style={{ color: "var(--text-light)" }}>One-Time Technical Projects:</strong> Scoped per milestone deliverable with an upfront commitment deposit and balance due upon staging deployment or completion.</li>
                <li><strong style={{ color: "var(--text-light)" }}>Monthly Growth Retainers:</strong> Billed at a fixed monthly fee at the start of each service period. We do not charge percentage-of-ad-spend surcharges. Direct ad spend is paid directly by the Client to the ad platforms (Google, Meta, etc.).</li>
                <li><strong style={{ color: "var(--text-light)" }}>Refund Policy:</strong> Due to the custom, labor-intensive nature of technical development and marketing strategy, payments for completed milestone work and elapsed service months are non-refundable unless explicitly agreed in writing.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section style={{ border: "none", padding: 0 }}>
              <h2 style={{ fontSize: "1.3rem", color: "var(--text-light)", margin: "0 0 12px" }}>
                5. Intellectual Property &amp; Deliverables Ownership
              </h2>
              <p style={{ margin: 0 }}>
                Upon receipt of full and final payment for a contracted project, 100% of custom source code, design assets, and unique deliverables engineered specifically for the Client belong exclusively to the Client with zero vendor lock-in. Pre-existing open-source libraries, third-party frameworks (e.g., Next.js, React), and generalized utility snippets remain governed by their respective open-source licenses.
              </p>
            </section>

            {/* Section 6 */}
            <section style={{ border: "none", padding: 0 }}>
              <h2 style={{ fontSize: "1.3rem", color: "var(--text-light)", margin: "0 0 12px" }}>
                6. Warranties &amp; Limitation of Liability
              </h2>
              <p style={{ margin: "0 0 12px" }}>
                Services are provided on a professional, commercially reasonable basis. While we adhere to engineering and growth best practices:
              </p>
              <ul style={{ paddingLeft: "20px", margin: "0 0 12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>We do not guarantee specific third-party search engine algorithm placements or third-party ad network approval policies outside our direct control.</li>
                <li>To the maximum extent permitted by law, FARAKIQ shall not be liable for any indirect, incidental, special, or consequential damages resulting from downtime, data loss, or platform changes by third parties.</li>
                <li>Our total aggregate liability under any engagement shall not exceed the total fees actually paid by the Client to FARAKIQ under the applicable Statement of Work during the preceding three (3) months.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section style={{ border: "none", padding: 0 }}>
              <h2 style={{ fontSize: "1.3rem", color: "var(--text-light)", margin: "0 0 12px" }}>
                7. Term &amp; Termination
              </h2>
              <p style={{ margin: 0 }}>
                Monthly retainers operate on a month-to-month basis and may be cancelled by either party with thirty (30) days written notice. Either party may terminate an engagement immediately in the event of material breach by the other party that remains uncured after written notification.
              </p>
            </section>

            {/* Section 8 */}
            <section style={{ border: "none", padding: 0 }}>
              <h2 style={{ fontSize: "1.3rem", color: "var(--text-light)", margin: "0 0 12px" }}>
                8. Governing Law Placeholder
              </h2>
              <p style={{ margin: 0 }}>
                These Terms &amp; Conditions and any dispute arising out of or related to our services shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
              </p>
            </section>

            {/* Section 9 */}
            <section style={{ border: "none", padding: 0 }}>
              <h2 style={{ fontSize: "1.3rem", color: "var(--text-light)", margin: "0 0 12px" }}>
                9. Contact Information
              </h2>
              <p style={{ margin: 0 }}>
                For inquiries regarding these Terms &amp; Conditions or to discuss an engagement, please reach out directly to{" "}
                <a href="mailto:hello@farakiq.com" className="mono" style={{ color: "var(--waste)", textDecoration: "none", fontWeight: 600 }}>
                  hello@farakiq.com
                </a>.
              </p>
            </section>
          </article>

          {/* Bottom Back Action */}
          <div style={{ marginTop: "56px", paddingTop: "32px", borderTop: "1px solid var(--rule)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <Link href="/" className="btn btn-ghost" style={{ fontSize: "0.88rem" }}>
              ← Return to Homepage
            </Link>
            <a href="mailto:hello@farakiq.com" className="btn btn-primary" style={{ fontSize: "0.88rem" }}>
              Contact Legal Team
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
