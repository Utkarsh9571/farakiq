import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { BLOG_POSTS } from "@/data/blogData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farakiq.com";

export const metadata: Metadata = {
  title: "Engineering, Paid Ads & Automation Blog",
  description:
    "Technical analyses, pricing breakdowns, and automation architectures from FARAKIQ. Practical guides on Google Ads, n8n workflows, and full-stack web applications.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Engineering & Growth Blog | FARAKIQ",
    description:
      "Technical analyses, pricing breakdowns, and automation architectures from FARAKIQ. Practical guides on Google Ads, n8n workflows, and full-stack web applications.",
    url: `${siteUrl}/blog`,
    siteName: "FARAKIQ",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering & Growth Blog | FARAKIQ",
    description:
      "Technical analyses, pricing breakdowns, and automation architectures from FARAKIQ.",
  },
};

export default function BlogIndexPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "FARAKIQ Engineering & Growth Blog",
    description:
      "Technical analyses, pricing breakdowns, and automation architectures from FARAKIQ.",
    url: `${siteUrl}/blog`,
    publisher: {
      "@type": "ProfessionalService",
      name: "FARAKIQ",
      url: siteUrl,
    },
    blogPost: BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.publishedAt,
      url: `${siteUrl}/blog/${post.slug}`,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
    })),
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
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
    ],
  };

  return (
    <>
      <StructuredData data={blogSchema} id="blog-collection-schema" />
      <StructuredData data={breadcrumbSchema} id="blog-breadcrumb-schema" />

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
            }}
          >
            <Link href="/" style={{ color: "var(--text-light-dim)", textDecoration: "none" }}>
              Home
            </Link>
            <span>/</span>
            <span style={{ color: "var(--waste)" }}>Blog</span>
          </nav>

          {/* Section Head */}
          <div style={{ maxWidth: "800px", marginBottom: "56px" }}>
            <div className="badge-tech">
              <span className="dot" />
              <span>TECHNICAL &amp; GROWTH DISPATCHES</span>
            </div>
            <h1
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                margin: "0 0 16px",
                color: "var(--text-light)",
                letterSpacing: "-0.02em",
              }}
            >
              Engineering, Paid Ads &amp; Workflow Insights
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.6,
                color: "var(--text-light-dim)",
                margin: 0,
              }}
            >
              Honest breakdowns, architectural comparisons, and transparent market perspectives on digital systems. Zero generic AI filler, strictly practical engineering and marketing logic.
            </p>
          </div>

          {/* Article List Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 290px), 1fr))",
              gap: "24px",
              marginBottom: "64px",
            }}
          >
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                style={{
                  background: "var(--ink-soft)",
                  border: "1px solid var(--rule)",
                  borderRadius: "var(--radius)",
                  padding: "clamp(20px, 4vw, 32px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "border-color 0.2s ease",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <span className="mono" style={{ fontSize: "0.75rem", color: "var(--waste)" }}>
                      {post.category.toUpperCase()}
                    </span>
                    <span className="mono" style={{ fontSize: "0.75rem", color: "var(--text-light-dim)" }}>
                      {post.readTime}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      lineHeight: 1.35,
                      margin: "0 0 14px",
                      color: "var(--text-light)",
                    }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p
                    style={{
                      color: "var(--text-light-dim)",
                      fontSize: "0.92rem",
                      lineHeight: 1.6,
                      margin: "0 0 20px",
                    }}
                  >
                    {post.summary}
                  </p>
                </div>

                <div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="mono"
                        style={{
                          fontSize: "0.72rem",
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid var(--rule)",
                          color: "var(--text-light-dim)",
                          padding: "3px 8px",
                          borderRadius: "var(--radius)",
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTop: "1px solid var(--rule)",
                      paddingTop: "16px",
                    }}
                  >
                    <span className="mono" style={{ fontSize: "0.78rem", color: "var(--text-light-dim)" }}>
                      {post.publishedAt}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mono"
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--waste)",
                        textDecoration: "none",
                        fontWeight: 600,
                      }}
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Quick links to Services */}
          <div
            style={{
              background: "var(--ink-soft)",
              border: "1px solid var(--rule)",
              padding: "32px",
              borderRadius: "var(--radius)",
              maxWidth: "860px",
            }}
          >
            <div className="mono" style={{ fontSize: "0.78rem", color: "var(--waste)", marginBottom: "8px" }}>
              CORE SERVICE PILLARS
            </div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 12px", color: "var(--text-light)" }}>
              Explore FARAKIQ Capabilities
            </h2>
            <p style={{ color: "var(--text-light-dim)", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "20px" }}>
              Read our dedicated service breakdowns to understand our execution methodology, deliverables, and flat-fee pricing models.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link href="/services/google-ads" className="btn btn-ghost" style={{ fontSize: "0.82rem", padding: "8px 14px" }}>
                Google Ads (PPC) →
              </Link>
              <Link href="/services/meta-ads" className="btn btn-ghost" style={{ fontSize: "0.82rem", padding: "8px 14px" }}>
                Meta Ads →
              </Link>
              <Link href="/services/n8n-automation" className="btn btn-ghost" style={{ fontSize: "0.82rem", padding: "8px 14px" }}>
                n8n Automation →
              </Link>
              <Link href="/services/web-development" className="btn btn-ghost" style={{ fontSize: "0.82rem", padding: "8px 14px" }}>
                Web Development →
              </Link>
              <Link href="/services/seo" className="btn btn-ghost" style={{ fontSize: "0.82rem", padding: "8px 14px" }}>
                SEO &amp; AEO →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
