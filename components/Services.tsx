"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES_DATA, ServiceItem, ServiceCategory } from "@/data/siteData";

const SERVICE_ROUTE_MAP: Record<string, { href: string; label: string }> = {
  "landing-pages": { href: "/services/web-development", label: "Landing Pages" },
  "business-websites": { href: "/services/web-development", label: "Websites" },
  "web-apps": { href: "/services/web-development", label: "Web Apps" },
  "ai-agents": { href: "/services/n8n-automation", label: "AI Agents" },
  "business-automation": { href: "/services/n8n-automation", label: "Automation" },
  "integrations": { href: "/services/n8n-automation", label: "Integrations" },
  "internal-tools": { href: "/services/web-development", label: "Internal Tools" },
  "ppc-google": { href: "/services/google-ads", label: "Google Ads" },
  "meta-ads": { href: "/services/meta-ads", label: "Meta Ads" },
  "linkedin-ads": { href: "/services/google-ads", label: "LinkedIn Ads" },
  "seo": { href: "/services/seo", label: "SEO / AEO" },
  "aeo": { href: "/services/seo", label: "AEO" },
  "geo": { href: "/services/seo", label: "GEO" },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Services() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="services">
      <div className="wrap">
        {/* Section Header */}
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: "76ch" }}
        >
          <div className="badge-tech">
            <span className="dot" />
            <span>THREE DISCIPLINES // ONE GROWTH SYSTEM</span>
          </div>

          <h2 className="verticals-display-title">
            BUILD THE SYSTEM.<br />
            DRIVE THE DEMAND.<br />
            OWN THE DISCOVERY.
          </h2>

          <p style={{ fontSize: "1.08rem", lineHeight: 1.6, color: "var(--text-light-dim)" }}>
            Most agencies either write code without knowing how to acquire customers, or run ads into poorly engineered websites. FARAKIQ combines software engineering, performance marketing, and organic search under one accountable partnership.
          </p>
        </motion.div>

        {/* Three Verticals Showcase Panels */}
        <motion.div
          className="verticals-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {SERVICES_DATA.map((vertical: ServiceCategory) => {
            return (
              <motion.div
                key={vertical.id}
                className="vertical-card"
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                style={
                  {
                    "--card-accent": vertical.accentColor,
                    backgroundColor: vertical.accentBg,
                  } as React.CSSProperties
                }
              >
                {/* Vertical Card Header */}
                <div className="vertical-card-header">
                  <div
                    className="vertical-badge"
                    style={{ color: vertical.accentColor, borderColor: vertical.accentColor }}
                  >
                    <span>{vertical.badge}</span>
                  </div>

                  <h3 className="vertical-title">{vertical.title}</h3>
                  <div className="vertical-tagline" style={{ color: vertical.accentColor }}>
                    &ldquo;{vertical.tagline}&rdquo;
                  </div>

                  <p className="vertical-desc">{vertical.description}</p>
                </div>

                {/* Expandable Services Accordion */}
                <div className="vertical-items-section">
                  <span className="vertical-items-heading">
                    Capabilities &amp; Services ({vertical.items.length})
                  </span>

                  <div className="service-accordion-list">
                    {vertical.items.map((item: ServiceItem) => {
                      const isExpanded = !!expandedItems[item.id];
                      const routeInfo = SERVICE_ROUTE_MAP[item.id];

                      return (
                        <div
                          key={item.id}
                          className={`service-accordion-item ${isExpanded ? "expanded" : ""}`}
                          style={{
                            border: isExpanded ? `1px solid ${vertical.accentColor}` : "1px solid var(--card-border)",
                            borderRadius: "var(--radius-md)",
                            marginBottom: "8px",
                            background: isExpanded ? "var(--card-bg-elevated)" : "rgba(255, 255, 255, 0.02)",
                            boxShadow: isExpanded ? "var(--shadow-sm), var(--card-inner-highlight)" : "var(--card-inner-highlight)",
                            transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                            overflow: "hidden",
                          }}
                        >
                          {/* Accordion Header / Trigger Button */}
                          <button
                            type="button"
                            onClick={() => toggleExpand(item.id)}
                            aria-expanded={isExpanded}
                            className="service-accordion-btn"
                            style={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              gap: "10px",
                              padding: "12px 14px",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              textAlign: "left",
                              color: "inherit",
                            }}
                          >
                            <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0, flex: 1 }}>
                              <span
                                style={{
                                  fontSize: "0.88rem",
                                  fontWeight: 600,
                                  color: "var(--text-light)",
                                  lineHeight: 1.3,
                                }}
                              >
                                {item.name}
                              </span>
                              {item.tag && (
                                <span
                                  className="mono"
                                  style={{
                                    fontSize: "0.68rem",
                                    color: "var(--text-light-dim)",
                                    letterSpacing: "0.03em",
                                  }}
                                >
                                  {item.tag}
                                </span>
                              )}
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                              <span
                                className="mono"
                                style={{
                                  fontSize: "0.78rem",
                                  color: vertical.accentColor,
                                  fontWeight: 600,
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {item.priceDisplay}
                              </span>
                              <span
                                className="mono"
                                style={{
                                  fontSize: "0.74rem",
                                  color: "var(--text-light-dim)",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  width: "14px",
                                  height: "14px",
                                  transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                                  transition: "transform 0.2s ease",
                                }}
                              >
                                ▾
                              </span>
                            </div>
                          </button>

                          {/* Expandable Content Area */}
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                                style={{ overflow: "hidden" }}
                              >
                                <div
                                  style={{
                                    padding: "0 14px 14px",
                                    borderTop: "1px dashed var(--card-border)",
                                    paddingTop: "10px",
                                  }}
                                >
                                  <p
                                    style={{
                                      fontSize: "0.84rem",
                                      color: "var(--text-light-dim)",
                                      lineHeight: 1.5,
                                      margin: "0 0 12px",
                                    }}
                                  >
                                    {item.shortDesc}
                                  </p>

                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                      flexWrap: "wrap",
                                      gap: "8px",
                                      paddingTop: "2px",
                                    }}
                                  >
                                    <span
                                      className="mono"
                                      style={{
                                        fontSize: "0.7rem",
                                        color: item.billingType === "project" ? "var(--value)" : "var(--accent-cyan)",
                                        background: item.billingType === "project" ? "rgba(31, 111, 84, 0.15)" : "rgba(0, 229, 255, 0.1)",
                                        border: `1px solid ${item.billingType === "project" ? "var(--value)" : "var(--accent-cyan)"}`,
                                        padding: "3px 8px",
                                        borderRadius: "var(--radius-full)",
                                        boxShadow: "var(--card-inner-highlight)",
                                      }}
                                    >
                                      {item.billingType === "project" ? "One-time deliverable" : "Monthly retainer"}
                                    </span>

                                    {routeInfo && (
                                      <Link
                                        href={routeInfo.href}
                                        className="mono"
                                        style={{
                                          fontSize: "0.74rem",
                                          color: vertical.accentColor,
                                          textDecoration: "none",
                                          display: "inline-flex",
                                          alignItems: "center",
                                          gap: "4px",
                                          fontWeight: 600,
                                        }}
                                      >
                                        View details ↗
                                      </Link>
                                    )}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Vertical Card Footer */}
                <div className="vertical-footer">
                  <span className="vertical-items-heading" style={{ marginBottom: "8px" }}>
                    Supporting Technologies
                  </span>
                  <div className="vertical-tech-pills">
                    {vertical.supportingTech.map((tech) => (
                      <span key={tech} className="vertical-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={vertical.primaryRoute}
                    className="btn btn-ghost vertical-explore-btn"
                    style={{ textDecoration: "none", borderRadius: "var(--radius-md)", boxShadow: "var(--card-inner-highlight)" }}
                  >
                    <span>Explore {vertical.number} Deep Dive →</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
