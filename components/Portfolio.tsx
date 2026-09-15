"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { PORTFOLIO_PROJECTS, ProjectCategory, PortfolioProject } from "@/data/portfolioData";
import StructuredData from "@/components/StructuredData";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "websites") return p.category === "websites" || p.id === "brickbytes";
    if (activeCategory === "web-apps") return p.category === "web-apps";
    if (activeCategory === "ai-automation") return p.category === "ai-automation";
    return true;
  });

  const portfolioItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "FARAKIQ Engineering & Web Portfolio",
    itemListElement: PORTFOLIO_PROJECTS.map((project, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.cardSummary,
        creator: {
          "@type": "Organization",
          name: "FARAKIQ",
        },
        url: project.liveUrl || `https://farakiq.com/portfolio/${project.id}`,
      },
    })),
  };

  return (
    <section id="portfolio">
      <StructuredData data={portfolioItemListSchema} id="portfolio-creativework-list" />
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="badge-tech">
            <span className="dot" />
            <span>REAL-WORLD WEB &amp; APPLICATION PORTFOLIO</span>
          </div>
          <h2>Featured Websites &amp; Web Applications</h2>
          <p>
            Explore real websites, full-stack platforms, and technical systems engineered for performance, clean architecture, and client outcomes.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="portfolio-filters" style={{ display: "flex", gap: "10px", marginBottom: "36px", flexWrap: "wrap" }}>
          {[
            { id: "all", label: `All Work (${PORTFOLIO_PROJECTS.length})` },
            { id: "websites", label: "Websites" },
            { id: "web-apps", label: "Web Apps" },
            { id: "ai-automation", label: "AI & Automation" },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              className={`btn btn-sm ${activeCategory === tab.id ? "btn-primary" : "btn-ghost"}`}
              style={{ borderRadius: "var(--radius-sm)" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCategory(tab.id as ProjectCategory)}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          className="portfolio-grid"
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            gap: "24px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: PortfolioProject, idx: number) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6, borderColor: "var(--waste)" }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                style={{
                  background: "var(--card-bg)",
                  border: project.isPrimaryWeb ? "1px solid rgba(255, 74, 52, 0.45)" : "1px solid var(--card-border)",
                  padding: "clamp(22px, 3vw, 28px)",
                  borderRadius: "var(--radius-lg)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  boxShadow: project.isPrimaryWeb
                    ? "var(--shadow-glow-waste), var(--card-inner-highlight)"
                    : "var(--shadow-sm), var(--card-inner-highlight)",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                    <span className="mono" style={{ fontSize: "0.72rem", color: "var(--waste)", letterSpacing: "0.05em", fontWeight: 600 }}>
                      {project.categoryLabel.toUpperCase()}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 10px", color: "var(--text-light)", letterSpacing: "-0.01em" }}>
                    {project.title}
                  </h3>

                  <p style={{ color: "var(--text-light-dim)", fontSize: "0.9rem", margin: "0 0 18px", lineHeight: 1.55 }}>
                    {project.cardSummary}
                  </p>

                  {/* Tech Stack Pills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "22px" }}>
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="mono"
                        style={{
                          fontSize: "0.72rem",
                          background: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid var(--card-border)",
                          borderRadius: "var(--radius-sm)",
                          color: "var(--text-light-dim)",
                          padding: "3px 9px",
                          boxShadow: "var(--card-inner-highlight)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  {project.liveUrl && (
                    <div style={{ marginBottom: "10px" }}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ fontSize: "0.84rem", padding: "10px 14px", minHeight: "40px", width: "100%", justifyContent: "center", borderRadius: "var(--radius-md)" }}
                      >
                        View Live Platform ↗
                      </a>
                    </div>
                  )}

                  <div style={{ display: "flex", gap: "8px" }}>
                    <button
                      className="btn btn-ghost"
                      style={{ flex: "1", justifyContent: "center", fontSize: "0.8rem", padding: "8px 10px", minHeight: "38px", borderRadius: "var(--radius-md)" }}
                      onClick={() => setSelectedProject(project)}
                    >
                      <span className="mono">Quick View ↓</span>
                    </button>
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="btn btn-ghost"
                      style={{ flex: "1", justifyContent: "center", fontSize: "0.8rem", padding: "8px 10px", minHeight: "38px", borderRadius: "var(--radius-md)", textDecoration: "none" }}
                    >
                      <span className="mono" style={{ color: "var(--waste)" }}>Case Study →</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.85)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                zIndex: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "clamp(12px, 3vw, 24px)",
              }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 16 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{
                  background: "var(--card-bg-elevated)",
                  border: "1px solid var(--card-border-hover)",
                  padding: "clamp(22px, 4vw, 36px)",
                  borderRadius: "var(--radius-lg)",
                  maxWidth: "680px",
                  width: "100%",
                  maxHeight: "90vh",
                  overflowY: "auto",
                  position: "relative",
                  boxShadow: "var(--shadow-lg), var(--card-inner-highlight)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "20px" }}>
                  <div>
                    <span className="mono" style={{ fontSize: "0.75rem", color: "var(--waste)", fontWeight: 600, letterSpacing: "0.04em" }}>
                      {selectedProject.categoryLabel.toUpperCase()}
                    </span>
                    <h3 style={{ fontSize: "clamp(1.3rem, 4vw, 1.8rem)", fontWeight: 700, margin: "4px 0 0", color: "var(--text-light)", letterSpacing: "-0.01em" }}>
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="btn btn-ghost"
                    aria-label="Close case study modal"
                    style={{ padding: "8px 14px", minHeight: "40px", minWidth: "40px", fontSize: "0.85rem", flexShrink: 0, borderRadius: "var(--radius-md)" }}
                  >
                    ✕ Close
                  </button>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div>
                    <div className="mono" style={{ fontSize: "0.78rem", color: "var(--waste)", marginBottom: "4px", letterSpacing: "0.04em", fontWeight: 600 }}>
                      01 — WHAT IT IS
                    </div>
                    <p style={{ margin: 0, color: "var(--text-light-dim)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                      {selectedProject.caseStudy.whatItIs}
                    </p>
                  </div>

                  <div>
                    <div className="mono" style={{ fontSize: "0.78rem", color: "var(--waste)", marginBottom: "4px", letterSpacing: "0.04em", fontWeight: 600 }}>
                      02 — WHAT WE BUILT
                    </div>
                    <p style={{ margin: 0, color: "var(--text-light-dim)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                      {selectedProject.caseStudy.whatWeBuilt}
                    </p>
                  </div>

                  <div>
                    <div className="mono" style={{ fontSize: "0.78rem", color: "var(--waste)", marginBottom: "6px", letterSpacing: "0.04em", fontWeight: 600 }}>
                      03 — KEY FUNCTIONALITY
                    </div>
                    <ul style={{ margin: 0, paddingLeft: "18px", color: "var(--text-light-dim)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                      {selectedProject.caseStudy.keyFunctionality.map((func, i) => (
                        <li key={i}>{func}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="mono" style={{ fontSize: "0.78rem", color: "var(--waste)", marginBottom: "8px", letterSpacing: "0.04em", fontWeight: 600 }}>
                      04 — TECHNOLOGY STACK
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {selectedProject.caseStudy.technology.map((tech) => (
                        <span
                          key={tech}
                          className="mono"
                          style={{
                            fontSize: "0.78rem",
                            background: "rgba(255, 255, 255, 0.03)",
                            border: "1px solid var(--card-border)",
                            borderRadius: "var(--radius-sm)",
                            color: "var(--text-light)",
                            padding: "4px 10px",
                            boxShadow: "var(--card-inner-highlight)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.caseStudy.liveDemoNote && (
                    <div className="mono" style={{ fontSize: "0.8rem", color: "var(--text-light-dim)", background: "rgba(255, 74, 52, 0.06)", border: "1px solid rgba(255, 74, 52, 0.2)", borderRadius: "var(--radius-md)", padding: "12px 16px", borderLeft: "3px solid var(--waste)" }}>
                      {selectedProject.caseStudy.liveDemoNote}
                    </div>
                  )}

                  <div style={{ display: "flex", gap: "12px", marginTop: "12px", borderTop: "1px solid var(--card-border)", paddingTop: "20px", flexWrap: "wrap" }}>
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ fontSize: "0.88rem", flex: "1 1 180px", justifyContent: "center", borderRadius: "var(--radius-md)" }}
                      >
                        View Live Platform ↗
                      </a>
                    )}
                    <Link
                      href={`/portfolio/${selectedProject.id}`}
                      className="btn btn-ghost"
                      style={{ fontSize: "0.88rem", textDecoration: "none", flex: "1 1 180px", justifyContent: "center", borderRadius: "var(--radius-md)" }}
                    >
                      Full Case Study Page →
                    </Link>
                    <a
                      href="#contact"
                      onClick={() => setSelectedProject(null)}
                      className="btn btn-ghost"
                      style={{ fontSize: "0.88rem", textDecoration: "none", flex: "1 1 180px", justifyContent: "center", borderRadius: "var(--radius-md)" }}
                    >
                      Discuss Similar Project →
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
