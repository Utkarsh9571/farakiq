import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { BLOG_POSTS, BlogPost } from "@/data/blogData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farakiq.com";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const canonicalUrl = `/blog/${slug}`;

  return {
    title: `${post.title} | FARAKIQ`,
    description: post.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `${siteUrl}${canonicalUrl}`,
      siteName: "FARAKIQ",
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      url: post.author.url,
    },
    publisher: {
      "@type": "Organization",
      name: "FARAKIQ",
      url: siteUrl,
      logo: `${siteUrl}/farakiq-logo.svg`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteUrl}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <StructuredData data={blogPostingSchema} id={`blogposting-schema-${slug}`} />
      <StructuredData data={breadcrumbSchema} id={`breadcrumb-schema-blog-${slug}`} />

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
            <Link href="/blog" style={{ color: "var(--text-light-dim)", textDecoration: "none" }}>
              Blog
            </Link>
            <span>/</span>
            <span style={{ color: "var(--waste)" }}>{post.category}</span>
          </nav>

          <article style={{ maxWidth: "820px", margin: "0 auto" }}>
            {/* Article Meta Header */}
            <header style={{ marginBottom: "40px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginBottom: "16px",
                }}
              >
                <div className="badge-tech" style={{ margin: 0 }}>
                  <span className="dot" />
                  <span>{post.category.toUpperCase()}</span>
                </div>
                <span className="mono" style={{ fontSize: "0.78rem", color: "var(--text-light-dim)" }}>
                  {post.publishedAt}
                </span>
                <span style={{ color: "var(--rule)" }}>•</span>
                <span className="mono" style={{ fontSize: "0.78rem", color: "var(--text-light-dim)" }}>
                  {post.readTime}
                </span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  margin: "0 0 20px",
                  color: "var(--text-light)",
                  letterSpacing: "-0.02em",
                }}
              >
                {post.title}
              </h1>

              {/* Author Attribution Card */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 18px",
                  background: "var(--ink-soft)",
                  border: "1px solid var(--rule)",
                  borderRadius: "var(--radius)",
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text-light)" }}>
                    {post.author.name}
                  </div>
                  <div className="mono" style={{ fontSize: "0.78rem", color: "var(--text-light-dim)" }}>
                    {post.author.role}
                  </div>
                </div>
              </div>
            </header>

            {/* Table of Contents */}
            <aside
              aria-label="Table of Contents"
              style={{
                background: "var(--ink-soft)",
                border: "1px solid var(--rule)",
                borderRadius: "var(--radius)",
                padding: "clamp(18px, 4vw, 28px)",
                marginBottom: "48px",
              }}
            >
              <div className="mono" style={{ fontSize: "0.78rem", color: "var(--waste)", marginBottom: "12px", letterSpacing: "0.04em" }}>
                TABLE OF CONTENTS
              </div>
              <ul style={{ margin: 0, paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {post.headings.map((h) => (
                  <li key={h.id} style={{ marginLeft: h.level === 3 ? "16px" : "0" }}>
                    <a
                      href={`#${h.id}`}
                      style={{
                        color: "var(--text-light-dim)",
                        textDecoration: "none",
                        fontSize: "0.88rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {h.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Main Content Body */}
            <div
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "var(--text-light-dim)",
              }}
              className="article-content"
            >
              {post.content.map((block, idx) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      key={idx}
                      id={block.id}
                      style={{
                        fontSize: "1.65rem",
                        fontWeight: 700,
                        lineHeight: 1.3,
                        color: "var(--text-light)",
                        marginTop: "48px",
                        marginBottom: "16px",
                        borderTop: "1px solid var(--rule)",
                        paddingTop: "32px",
                      }}
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "h3") {
                  return (
                    <h3
                      key={idx}
                      id={block.id}
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        lineHeight: 1.4,
                        color: "var(--text-light)",
                        marginTop: "28px",
                        marginBottom: "12px",
                      }}
                    >
                      {block.text}
                    </h3>
                  );
                }

                if (block.type === "paragraph") {
                  return (
                    <p key={idx} style={{ margin: "0 0 20px" }}>
                      {block.text}
                    </p>
                  );
                }

                if (block.type === "list" && block.items) {
                  return (
                    <ul
                      key={idx}
                      style={{
                        margin: "0 0 24px",
                        paddingLeft: "24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                if (block.type === "table" && block.tableData) {
                  return (
                    <div
                      key={idx}
                      style={{
                        overflowX: "auto",
                        WebkitOverflowScrolling: "touch",
                        margin: "28px 0 36px",
                        border: "1px solid var(--rule)",
                        borderRadius: "var(--radius)",
                      }}
                    >
                      <table
                        style={{
                          width: "100%",
                          minWidth: "480px",
                          borderCollapse: "collapse",
                          fontSize: "0.88rem",
                          textAlign: "left",
                        }}
                      >
                        <thead>
                          <tr style={{ background: "rgba(255, 255, 255, 0.03)", borderBottom: "1px solid var(--rule)" }}>
                            {block.tableData.headers.map((h, hi) => (
                              <th
                                key={hi}
                                className="mono"
                                style={{
                                  padding: "12px 16px",
                                  color: "var(--waste)",
                                  fontWeight: 600,
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {block.tableData.rows.map((row, ri) => (
                            <tr
                              key={ri}
                              style={{
                                borderBottom: ri < block.tableData!.rows.length - 1 ? "1px solid var(--rule)" : "none",
                              }}
                            >
                              {row.map((cell, ci) => (
                                <td
                                  key={ci}
                                  style={{
                                    padding: "12px 16px",
                                    color: ci === 0 ? "var(--text-light)" : "var(--text-light-dim)",
                                  }}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                return null;
              })}
            </div>

            {/* Contextual Internal Links Section */}
            <section
              style={{
                marginTop: "56px",
                borderTop: "1px solid var(--rule)",
                paddingTop: "36px",
                background: "var(--ink-soft)",
                padding: "clamp(20px, 4vw, 32px)",
                borderRadius: "var(--radius)",
              }}
            >
              <div className="mono" style={{ fontSize: "0.78rem", color: "var(--waste)", marginBottom: "8px" }}>
                RELATED SERVICES AT FARAKIQ
              </div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 12px", color: "var(--text-light)" }}>
                Engineered Solutions for Your Growth
              </h2>
              <p style={{ color: "var(--text-light-dim)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "20px" }}>
                Explore how FARAKIQ implements these principles in practice through flat-fee advertising management and custom automation pipelines:
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <Link href="/services/google-ads" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>
                  Google Ads Service →
                </Link>
                <Link href="/services/n8n-automation" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>
                  n8n Automation Service →
                </Link>
                <Link href="/services/web-development" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>
                  Web Development →
                </Link>
                <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "0.85rem" }}>
                  Book Free Audit
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
