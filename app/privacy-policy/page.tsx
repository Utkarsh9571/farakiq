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
  title: "Privacy Policy | FARAKIQ",
  description:
    "Standard privacy policy detailing how FARAKIQ collects, uses, and safeguards information through our website and client service engagements.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | FARAKIQ",
    description:
      "Standard privacy policy detailing how FARAKIQ collects, uses, and safeguards information through our website and client service engagements.",
    url: `${siteUrl}/privacy-policy`,
    siteName: "FARAKIQ",
    locale: "en_US",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
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
        name: "Privacy Policy",
        item: `${siteUrl}/privacy-policy`,
      },
    ],
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy | FARAKIQ",
    description: "Privacy policy detailing data collection, tracking technologies, third-party services, and user rights.",
    url: `${siteUrl}/privacy-policy`,
  };

  return (
    <>
      <Navbar />
      <StructuredData data={breadcrumbSchema} id="privacy-breadcrumb-schema" />
      <StructuredData data={webpageSchema} id="privacy-webpage-schema" />

      <main style={{ minHeight: "80vh", padding: "64px 0 96px" }}>
        <div className="wrap" style={{ maxWidth: "860px" }}>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "28px" }}>
            <div className="mono" style={{ fontSize: "0.8rem", color: "var(--text-light-dim)" }}>
              <Link href="/" style={{ color: "var(--text-light-dim)", textDecoration: "none" }}>
                Home
              </Link>
              <span style={{ margin: "0 8px", color: "var(--rule)" }}>/</span>
              <span style={{ color: "var(--text-light)" }}>Privacy Policy</span>
            </div>
          </nav>

          {/* Page Header */}
          <header style={{ marginBottom: "48px", borderBottom: "1px solid var(--rule)", paddingBottom: "32px" }}>
            <div className="badge-tech" style={{ marginBottom: "16px" }}>
              <span className="dot" />
              <span>LEGAL INFORMATION</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, margin: "0 0 12px", letterSpacing: "-0.02em" }}>
              Privacy Policy
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
                1. Introduction &amp; Overview
              </h2>
              <p style={{ margin: 0 }}>
                FARAKIQ (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains what information we collect when you visit our website (farakiq.com), contact us for project scoping, or engage our engineering and growth marketing services, and how that information is handled.
              </p>
            </section>

            {/* Section 2 */}
            <section style={{ border: "none", padding: 0 }}>
              <h2 style={{ fontSize: "1.3rem", color: "var(--text-light)", margin: "0 0 12px" }}>
                2. Information We Collect
              </h2>
              <p style={{ margin: "0 0 12px" }}>
                We collect information directly provided by you and technical data generated automatically during your visit:
              </p>
              <ul style={{ paddingLeft: "20px", margin: "0 0 12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>
                  <strong style={{ color: "var(--text-light)" }}>Direct Inquiries &amp; Contact Details:</strong> Name, email address, company name, project requirements, budget range, and any information provided through our contact and estimation forms.
                </li>
                <li>
                  <strong style={{ color: "var(--text-light)" }}>Technical &amp; Usage Data:</strong> Internet Protocol (IP) address, browser type, operating system, referring URLs, pages viewed, time spent on pages, and device identifiers collected via standard server logs and analytics tools.
                </li>
                <li>
                  <strong style={{ color: "var(--text-light)" }}>Ad Measurement &amp; Tracking Signals:</strong> When running growth campaigns, we utilize conversion tracking pixels (such as Meta Conversions API and Google Ads conversion tags) to measure campaign efficacy and attribution.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section style={{ border: "none", padding: 0 }}>
              <h2 style={{ fontSize: "1.3rem", color: "var(--text-light)", margin: "0 0 12px" }}>
                3. How We Use Your Information
              </h2>
              <p style={{ margin: "0 0 12px" }}>
                We use the information collected solely for legitimate business and client service purposes, including:
              </p>
              <ul style={{ paddingLeft: "20px", margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>Responding to project inquiries, scope requests, and commercial consultations.</li>
                <li>Delivering agreed software development, automation, and performance marketing services.</li>
                <li>Monitoring website performance, debugging technical issues, and optimizing load times.</li>
                <li>Measuring advertising campaign performance and conversion attribution.</li>
                <li>Complying with applicable legal, accounting, and regulatory obligations.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section style={{ border: "none", padding: 0 }}>
              <h2 style={{ fontSize: "1.3rem", color: "var(--text-light)", margin: "0 0 12px" }}>
                4. Third-Party Services &amp; Subprocessors
              </h2>
              <p style={{ margin: "0 0 12px" }}>
                We may share information with trusted third-party service providers who assist in operating our website and services:
              </p>
              <ul style={{ paddingLeft: "20px", margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                <li><strong style={{ color: "var(--text-light)" }}>Hosting &amp; Edge Infrastructure:</strong> Vercel and Cloudflare for website hosting and global content delivery.</li>
                <li><strong style={{ color: "var(--text-light)" }}>Analytics:</strong> Google Analytics 4 (GA4) for aggregated traffic analytics and user experience insights.</li>
                <li><strong style={{ color: "var(--text-light)" }}>Ad Platforms:</strong> Google Ads, Meta Ads (Facebook &amp; Instagram), and LinkedIn Ads for paid campaign management and attribution.</li>
                <li><strong style={{ color: "var(--text-light)" }}>Workflow Automation:</strong> Self-hosted or cloud n8n instances and secure webhook endpoints for inquiry routing.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section style={{ border: "none", padding: 0 }}>
              <h2 style={{ fontSize: "1.3rem", color: "var(--text-light)", margin: "0 0 12px" }}>
                5. Cookie Policy Note
              </h2>
              <p style={{ margin: 0 }}>
                Our website uses cookies and similar tracking technologies to facilitate site functionality, analyze web traffic, and track conversion events. You can manage or disable cookies through your browser settings at any time; however, certain site features may function with reduced performance if cookies are completely disabled.
              </p>
            </section>

            {/* Section 6 */}
            <section style={{ border: "none", padding: 0 }}>
              <h2 style={{ fontSize: "1.3rem", color: "var(--text-light)", margin: "0 0 12px" }}>
                6. Data Retention &amp; Security
              </h2>
              <p style={{ margin: 0 }}>
                We retain personal and project information only for as long as necessary to fulfill the purposes outlined in this policy or to satisfy contractual and legal requirements. We employ industry-standard technical measures (including HTTPS encryption in transit and secure API access controls) to protect your information against unauthorized access, loss, or disclosure.
              </p>
            </section>

            {/* Section 7 */}
            <section style={{ border: "none", padding: 0 }}>
              <h2 style={{ fontSize: "1.3rem", color: "var(--text-light)", margin: "0 0 12px" }}>
                7. Your Rights &amp; Data Inquiries
              </h2>
              <p style={{ margin: "0 0 12px" }}>
                Depending on your location, you may have rights regarding your personal data, including the right to request access, correction, deletion, or restriction of processing.
              </p>
              <p style={{ margin: 0 }}>
                To exercise any data rights or submit inquiries regarding this Privacy Policy, please contact us at{" "}
                <a href="mailto:hello@farakiq.com" className="mono" style={{ color: "var(--waste)", textDecoration: "none", fontWeight: 600 }}>
                  hello@farakiq.com
                </a>.
              </p>
            </section>

            {/* Section 8 */}
            <section style={{ border: "none", padding: 0 }}>
              <h2 style={{ fontSize: "1.3rem", color: "var(--text-light)", margin: "0 0 12px" }}>
                8. Changes to This Policy
              </h2>
              <p style={{ margin: 0 }}>
                We may update this Privacy Policy periodically to reflect changes in our operational practices or legal requirements. Updates will be posted on this page with an updated &ldquo;Last Updated&rdquo; date.
              </p>
            </section>
          </article>

          {/* Bottom Back Action */}
          <div style={{ marginTop: "56px", paddingTop: "32px", borderTop: "1px solid var(--rule)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <Link href="/" className="btn btn-ghost" style={{ fontSize: "0.88rem" }}>
              ← Return to Homepage
            </Link>
            <a href="mailto:hello@farakiq.com" className="btn btn-primary" style={{ fontSize: "0.88rem" }}>
              Contact Privacy Team
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
