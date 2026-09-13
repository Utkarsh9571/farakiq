import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { SERVICES_CATALOG } from "@/data/servicesData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farakiq.com";

export async function generateStaticParams() {
  return Object.keys(SERVICES_CATALOG).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_CATALOG[slug];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const canonicalUrl = `/services/${slug}`;

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: `${siteUrl}${canonicalUrl}`,
      siteName: "FARAKIQ",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_CATALOG[slug];

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    url: `${siteUrl}/services/${slug}`,
    provider: {
      "@type": "ProfessionalService",
      name: "FARAKIQ",
      url: siteUrl,
      email: "hello@darvin.co",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Worldwide",
    },
    offers: {
      "@type": "Offer",
      price: service.priceModel,
      priceCurrency: "INR",
    },
  };

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
        name: "Services",
        item: `${siteUrl}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${siteUrl}/services/${slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <StructuredData data={serviceSchema} id={`service-schema-${slug}`} />
      <StructuredData data={breadcrumbSchema} id={`breadcrumb-schema-${slug}`} />
      <StructuredData data={faqSchema} id={`faq-schema-${slug}`} />

      <Navbar />

      <main style={{ minHeight: "80vh", padding: "40px 0 80px" }}>
        <div className="wrap">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="mono"
            style={{
              fontSize: "0.8rem",
              color: "var(--text-light-dim)",
              marginBottom: "32px",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" style={{ color: "var(--text-light-dim)", textDecoration: "none" }}>
              Home
            </Link>
            <span>/</span>
            <Link href="/#services" style={{ color: "var(--text-light-dim)", textDecoration: "none" }}>
              Services
            </Link>
            <span>/</span>
            <span style={{ color: "var(--waste)" }}>{service.name}</span>
          </nav>

          {/* Hero / Header */}
          <div style={{ maxWidth: "860px", marginBottom: "56px" }}>
            <div className="badge-tech">
              <span className="dot" />
              <span>{service.badge}</span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                margin: "0 0 20px",
                color: "var(--text-light)",
                letterSpacing: "-0.02em",
              }}
            >
              {service.h1}
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.6,
                color: "var(--text-light-dim)",
                margin: "0 0 28px",
              }}
            >
              {service.subtitle}
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "10px 18px",
                background: "var(--ink-soft)",
                border: "1px solid var(--rule)",
                borderRadius: "var(--radius)",
                marginBottom: "32px",
              }}
            >
              <span className="mono" style={{ fontSize: "0.95rem", color: "var(--waste)", fontWeight: 600 }}>
                {service.priceModel}
              </span>
              <span style={{ color: "var(--rule)" }}>|</span>
              <span className="mono" style={{ fontSize: "0.82rem", color: "var(--text-light-dim)" }}>
                {service.pricingTag}
              </span>
            </div>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link href="/#contact" className="btn btn-primary" style={{ padding: "12px 24px" }}>
                Discuss Your Scope
              </Link>
              <Link href="/#services" className="btn btn-ghost" style={{ padding: "12px 24px" }}>
                View All Capabilities
              </Link>
            </div>
          </div>

          {/* Section: Overview */}
          <section style={{ marginBottom: "64px", borderTop: "1px solid var(--rule)", paddingTop: "48px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "40px" }} className="service-grid-split">
              <div>
                <div className="mono" style={{ fontSize: "0.78rem", color: "var(--waste)", marginBottom: "8px" }}>
                  01 — OVERVIEW
                </div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: 0, color: "var(--text-light)" }}>
                  The Engineering Approach
                </h2>
              </div>
              <div>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--text-light-dim)", margin: 0 }}>
                  {service.summary}
                </p>
              </div>
            </div>
          </section>

          {/* Section: Who It's For */}
          <section style={{ marginBottom: "64px", borderTop: "1px solid var(--rule)", paddingTop: "48px" }}>
            <div style={{ marginBottom: "28px" }}>
              <div className="mono" style={{ fontSize: "0.78rem", color: "var(--waste)", marginBottom: "8px" }}>
                02 — TARGET PROFILE
              </div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: 0, color: "var(--text-light)" }}>
                Who This Service Is Engineered For
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "20px" }}>
              {service.targetAudience.map((audience, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--ink-soft)",
                    border: "1px solid var(--rule)",
                    padding: "24px",
                    borderRadius: "var(--radius)",
                  }}
                >
                  <span className="mono" style={{ fontSize: "0.75rem", color: "var(--waste)", display: "block", marginBottom: "8px" }}>
                    FIT #{i + 1}
                  </span>
                  <p style={{ margin: 0, color: "var(--text-light-dim)", fontSize: "0.92rem", lineHeight: 1.5 }}>
                    {audience}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Capabilities */}
          <section style={{ marginBottom: "64px", borderTop: "1px solid var(--rule)", paddingTop: "48px" }}>
            <div style={{ marginBottom: "32px" }}>
              <div className="mono" style={{ fontSize: "0.78rem", color: "var(--waste)", marginBottom: "8px" }}>
                03 — SCOPE &amp; MODULES
              </div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: 0, color: "var(--text-light)" }}>
                Core Capabilities &amp; Engineering Scope
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "24px" }}>
              {service.capabilities.map((cap, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--ink-soft)",
                    border: "1px solid var(--rule)",
                    padding: "28px",
                    borderRadius: "var(--radius)",
                  }}
                >
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: "0 0 12px", color: "var(--text-light)" }}>
                    {cap.title}
                  </h3>
                  <p style={{ margin: 0, color: "var(--text-light-dim)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Execution Process */}
          <section style={{ marginBottom: "64px", borderTop: "1px solid var(--rule)", paddingTop: "48px" }}>
            <div style={{ marginBottom: "32px" }}>
              <div className="mono" style={{ fontSize: "0.78rem", color: "var(--waste)", marginBottom: "8px" }}>
                04 — EXECUTION MODEL
              </div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: 0, color: "var(--text-light)" }}>
                How We Execute This Work
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "24px" }}>
              {service.processSteps.map((step) => (
                <div
                  key={step.num}
                  style={{
                    background: "var(--ink-soft)",
                    border: "1px solid var(--rule)",
                    padding: "26px",
                    borderRadius: "var(--radius)",
                    position: "relative",
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "var(--waste)",
                      display: "block",
                      marginBottom: "12px",
                    }}
                  >
                    {step.num}
                  </span>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: "0 0 10px", color: "var(--text-light)" }}>
                    {step.title}
                  </h3>
                  <p style={{ margin: 0, color: "var(--text-light-dim)", fontSize: "0.9rem", lineHeight: 1.5 }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Deliverables */}
          <section style={{ marginBottom: "64px", borderTop: "1px solid var(--rule)", paddingTop: "48px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "40px" }} className="service-grid-split">
              <div>
                <div className="mono" style={{ fontSize: "0.78rem", color: "var(--waste)", marginBottom: "8px" }}>
                  05 — DELIVERABLES
                </div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: 0, color: "var(--text-light)" }}>
                  What You Receive
                </h2>
              </div>
              <div
                style={{
                  background: "var(--ink-soft)",
                  border: "1px solid var(--rule)",
                  padding: "clamp(20px, 4vw, 32px)",
                  borderRadius: "var(--radius)",
                }}
              >
                <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {service.deliverables.map((item, i) => (
                    <li key={i} style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section: FAQs */}
          <section style={{ marginBottom: "64px", borderTop: "1px solid var(--rule)", paddingTop: "48px" }}>
            <div style={{ marginBottom: "32px" }}>
              <div className="mono" style={{ fontSize: "0.78rem", color: "var(--waste)", marginBottom: "8px" }}>
                06 — CLARIFICATIONS
              </div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: 0, color: "var(--text-light)" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "860px" }}>
              {service.faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--ink-soft)",
                    border: "1px solid var(--rule)",
                    padding: "clamp(18px, 3.5vw, 26px) clamp(16px, 3.5vw, 30px)",
                    borderRadius: "var(--radius)",
                  }}
                >
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0 0 10px", color: "var(--text-light)" }}>
                    {faq.q}
                  </h3>
                  <p style={{ margin: 0, color: "var(--text-light-dim)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Related Services & Projects */}
          <section style={{ marginBottom: "64px", borderTop: "1px solid var(--rule)", paddingTop: "48px" }}>
            <div style={{ marginBottom: "28px" }}>
              <div className="mono" style={{ fontSize: "0.78rem", color: "var(--waste)", marginBottom: "8px" }}>
                07 — INTERCONNECTED CAPABILITIES
              </div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: 0, color: "var(--text-light)" }}>
                Related Capabilities &amp; Case Studies
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "20px", marginBottom: "32px" }}>
              {service.relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    background: "var(--ink-soft)",
                    border: "1px solid var(--rule)",
                    padding: "22px",
                    borderRadius: "var(--radius)",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <span className="mono" style={{ fontSize: "0.72rem", color: "var(--waste)", display: "block", marginBottom: "6px" }}>
                    {rel.tag.toUpperCase()}
                  </span>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-light)", marginBottom: "6px" }}>
                    {rel.name} →
                  </div>
                  <span className="mono" style={{ fontSize: "0.78rem", color: "var(--text-light-dim)" }}>
                    View service details
                  </span>
                </Link>
              ))}

              {service.relatedProjects?.map((proj) => (
                <Link
                  key={proj.id}
                  href={`/portfolio/${proj.id}`}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    background: "var(--ink-soft)",
                    border: "1px solid var(--rule)",
                    padding: "22px",
                    borderRadius: "var(--radius)",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <span className="mono" style={{ fontSize: "0.72rem", color: "var(--waste)", display: "block", marginBottom: "6px" }}>
                    CASE STUDY
                  </span>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-light)", marginBottom: "6px" }}>
                    {proj.title} →
                  </div>
                  <p style={{ margin: 0, color: "var(--text-light-dim)", fontSize: "0.82rem", lineHeight: 1.4 }}>
                    {proj.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Bottom CTA Banner */}
          <div
            style={{
              background: "var(--ink-soft)",
              border: "1px solid var(--waste)",
              padding: "clamp(24px, 5vw, 44px) clamp(18px, 4vw, 36px)",
              borderRadius: "var(--radius)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div>
              <div className="badge-tech" style={{ marginBottom: "12px" }}>
                <span className="dot" />
                <span>START AN ENGAGEMENT</span>
              </div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 8px", color: "var(--text-light)" }}>
                Ready to stop wasting budget on disjointed vendors?
              </h2>
              <p style={{ margin: 0, color: "var(--text-light-dim)", fontSize: "0.95rem" }}>
                Work directly with Darwin Swami and Utkarsh Sharma. Direct communication, predictable flat fees, zero agency bureaucracy.
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/#contact" className="btn btn-primary" style={{ padding: "12px 24px" }}>
                Book a Free Audit
              </Link>
              <a
                href="mailto:hello@darvin.co"
                className="btn btn-ghost"
                style={{ padding: "12px 20px" }}
              >
                Email hello@darvin.co
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 860px) {
          .service-grid-split {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </>
  );
}
