import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { PORTFOLIO_PROJECTS, PortfolioProject } from "@/data/portfolioData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farakiq.com";

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const canonicalUrl = `/portfolio/${slug}`;

  return {
    title: `${project.title} — Web & Engineering Case Study`,
    description: project.cardSummary,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} | FARAKIQ Portfolio`,
      description: project.cardSummary,
      url: `${siteUrl}${canonicalUrl}`,
      siteName: "FARAKIQ",
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study | FARAKIQ`,
      description: project.cardSummary,
    },
  };
}

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  const creativeWorkSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.cardSummary,
    creator: {
      "@type": "Person",
      name: "Utkarsh Sharma",
      url: siteUrl,
    },
    url: project.liveUrl || `${siteUrl}/portfolio/${project.id}`,
    genre: project.categoryLabel,
    keywords: project.techStack.join(", "),
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
        name: "Projects",
        item: `${siteUrl}/#portfolio`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${siteUrl}/portfolio/${project.id}`,
      },
    ],
  };

  return (
    <>
      <StructuredData data={creativeWorkSchema} id={`creativework-schema-${slug}`} />
      <StructuredData data={breadcrumbSchema} id={`breadcrumb-schema-portfolio-${slug}`} />

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
            <Link href="/#portfolio" style={{ color: "var(--text-light-dim)", textDecoration: "none" }}>
              Projects
            </Link>
            <span>/</span>
            <span style={{ color: "var(--waste)" }}>{project.title}</span>
          </nav>

          {/* Project Header */}
          <div style={{ maxWidth: "860px", marginBottom: "52px" }}>
            <div className="badge-tech">
              <span className="dot" />
              <span>{project.categoryLabel.toUpperCase()}</span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                margin: "0 0 16px",
                color: "var(--text-light)",
                letterSpacing: "-0.02em",
              }}
            >
              {project.title}
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.6,
                color: "var(--text-light-dim)",
                margin: "0 0 28px",
              }}
            >
              {project.cardSummary}
            </p>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "28px" }}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: "10px 20px", flex: "1 1 160px", justifyContent: "center" }}
                >
                  View Live Platform ↗
                </a>
              )}
              <Link href="/#contact" className="btn btn-ghost" style={{ padding: "10px 20px", flex: "1 1 160px", justifyContent: "center" }}>
                Discuss Similar Build →
              </Link>
              <Link href="/#portfolio" className="btn btn-ghost" style={{ padding: "10px 20px", flex: "1 1 140px", justifyContent: "center" }}>
                ← All Projects
              </Link>
            </div>

            {/* Tech Stack Pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="mono"
                  style={{
                    fontSize: "0.78rem",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--rule)",
                    color: "var(--text-light)",
                    padding: "4px 10px",
                    borderRadius: "var(--radius)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Deep Dive Case Study Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "48px", maxWidth: "860px" }}>
            {/* 01 What It Is */}
            <section style={{ borderTop: "1px solid var(--rule)", paddingTop: "36px" }}>
              <div className="mono" style={{ fontSize: "0.8rem", color: "var(--waste)", marginBottom: "8px" }}>
                01 — WHAT IT IS
              </div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 16px", color: "var(--text-light)" }}>
                The Problem &amp; Concept
              </h2>
              <p style={{ color: "var(--text-light-dim)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
                {project.caseStudy.whatItIs}
              </p>
            </section>

            {/* 02 What I Built */}
            <section style={{ borderTop: "1px solid var(--rule)", paddingTop: "36px" }}>
              <div className="mono" style={{ fontSize: "0.8rem", color: "var(--waste)", marginBottom: "8px" }}>
                02 — WHAT I BUILT
              </div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 16px", color: "var(--text-light)" }}>
                Engineering &amp; System Architecture
              </h2>
              <p style={{ color: "var(--text-light-dim)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
                {project.caseStudy.whatIBuilt}
              </p>
            </section>

            {/* 03 Key Functionality */}
            <section style={{ borderTop: "1px solid var(--rule)", paddingTop: "36px" }}>
              <div className="mono" style={{ fontSize: "0.8rem", color: "var(--waste)", marginBottom: "8px" }}>
                03 — KEY FUNCTIONALITY
              </div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 20px", color: "var(--text-light)" }}>
                Core Capabilities &amp; Workflows
              </h2>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  color: "var(--text-light-dim)",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                }}
              >
                {project.caseStudy.keyFunctionality.map((func, i) => (
                  <li key={i}>
                    <strong style={{ color: "var(--text-light)" }}>{func.split(" ")[0]} </strong>
                    {func.substring(func.indexOf(" ") + 1)}
                  </li>
                ))}
              </ul>
            </section>

            {/* 04 Technology & Dependencies */}
            <section style={{ borderTop: "1px solid var(--rule)", paddingTop: "36px" }}>
              <div className="mono" style={{ fontSize: "0.8rem", color: "var(--waste)", marginBottom: "8px" }}>
                04 — TECHNICAL SPECIFICATION
              </div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 20px", color: "var(--text-light)" }}>
                Technology Stack &amp; Libraries
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {project.caseStudy.technology.map((tech) => (
                  <span
                    key={tech}
                    className="mono"
                    style={{
                      fontSize: "0.82rem",
                      background: "var(--ink-soft)",
                      border: "1px solid var(--rule)",
                      color: "var(--text-light)",
                      padding: "8px 14px",
                      borderRadius: "var(--radius)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.caseStudy.liveDemoNote && (
                <p className="mono" style={{ marginTop: "16px", fontSize: "0.8rem", color: "var(--waste)" }}>
                  {project.caseStudy.liveDemoNote}
                </p>
              )}
            </section>

            {/* Links to Services */}
            <section style={{ borderTop: "1px solid var(--rule)", paddingTop: "36px" }}>
              <div className="mono" style={{ fontSize: "0.8rem", color: "var(--waste)", marginBottom: "8px" }}>
                05 — RELATED SERVICES
              </div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 20px", color: "var(--text-light)" }}>
                Need a Similar System Built?
              </h2>
              <p style={{ color: "var(--text-light-dim)", fontSize: "1rem", lineHeight: 1.6, marginBottom: "20px" }}>
                FARAKIQ engineers production web platforms, AI applications, and automations with clean code and transparent pricing.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/services/web-development" className="btn btn-ghost">
                  Websites &amp; Web Platforms →
                </Link>
                <Link href="/services/n8n-automation" className="btn btn-ghost">
                  Business Automation &amp; AI →
                </Link>
                <Link href="/#contact" className="btn btn-primary">
                  Discuss Your Project
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
