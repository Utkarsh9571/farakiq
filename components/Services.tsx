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

function formatINR(num: number): string {
  return "₹" + Math.round(num).toLocaleString("en-IN");
}

export default function Services() {
  const [selectedServices, setSelectedServices] = useState<Record<string, ServiceItem>>({});

  const toggleService = (item: ServiceItem) => {
    setSelectedServices((prev) => {
      const next = { ...prev };
      if (next[item.id]) {
        delete next[item.id];
      } else {
        next[item.id] = item;
      }
      return next;
    });
  };

  const selectedList = Object.values(selectedServices);
  const projectItems = selectedList.filter((item) => item.billingType === "project");
  const monthlyItems = selectedList.filter((item) => item.billingType === "monthly");

  const projectMinTotal = projectItems.reduce((sum, item) => sum + (item.price || 0), 0);
  const monthlyTotal = monthlyItems.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <section id="services">
      <div className="wrap">
        {/* Section Header */}
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
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
        <div className="verticals-grid">
          {SERVICES_DATA.map((vertical: ServiceCategory, vIdx: number) => {
            return (
              <motion.div
                key={vertical.id}
                className="vertical-card"
                style={
                  {
                    "--card-accent": vertical.accentColor,
                    backgroundColor: vertical.accentBg,
                  } as React.CSSProperties
                }
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: vIdx * 0.1, ease: "easeOut" }}
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

                {/* Capabilities Inside Vertical */}
                <div className="vertical-items-section">
                  <span className="vertical-items-heading">
                    Capabilities &amp; Starting Anchors
                  </span>

                  <ul className="pick-list">
                    {vertical.items.map((item) => {
                      const isSelected = !!selectedServices[item.id];
                      const routeInfo = SERVICE_ROUTE_MAP[item.id];
                      return (
                        <li
                          key={item.id}
                          style={{
                            display: "flex",
                            gap: "8px",
                            alignItems: "flex-start",
                            minWidth: 0,
                            padding: "8px 0",
                          }}
                        >
                          <button
                            className={`pick-item ${isSelected ? "selected" : ""}`}
                            onClick={() => toggleService(item)}
                            title={`Click to toggle ${item.name} in custom scope estimate`}
                            style={{
                              flex: 1,
                              minWidth: 0,
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "10px",
                              padding: "4px 2px",
                              textAlign: "left",
                              background: "none",
                              border: "none",
                            }}
                          >
                            <span className="pick-box" style={{ marginTop: "4px" }}></span>
                            <span className="pick-info" style={{ flex: 1, minWidth: 0 }}>
                              <span
                                className="pick-name"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "6px",
                                  flexWrap: "wrap",
                                  fontSize: "0.88rem",
                                  fontWeight: 600,
                                  color: "var(--text-light)",
                                }}
                              >
                                {item.name}
                                {item.tag && (
                                  <span className="tag" style={{ fontSize: "0.68rem" }}>
                                    {item.tag}
                                  </span>
                                )}
                              </span>
                              {item.shortDesc && (
                                <span className="pick-desc">{item.shortDesc}</span>
                              )}
                            </span>

                            <span className="pick-pricing-col">
                              <span
                                className="pick-price mono"
                                style={{
                                  fontSize: "0.8rem",
                                  fontWeight: 600,
                                  color: isSelected ? "var(--value)" : "var(--text-light)",
                                }}
                              >
                                {item.priceDisplay}
                              </span>
                              <span
                                className="mono"
                                style={{
                                  fontSize: "0.66rem",
                                  color:
                                    item.billingType === "project"
                                      ? "var(--value)"
                                      : "var(--accent-cyan)",
                                  letterSpacing: "0.02em",
                                  marginTop: "2px",
                                }}
                              >
                                {item.billingType === "project" ? "One-time" : "Monthly"}
                              </span>
                            </span>
                          </button>

                          {routeInfo && (
                            <Link
                              href={routeInfo.href}
                              className="btn btn-ghost"
                              title={`Explore dedicated ${item.name} page`}
                              style={{
                                fontSize: "0.7rem",
                                padding: "5px 7px",
                                minHeight: "32px",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderColor: "var(--rule)",
                                textDecoration: "none",
                                flexShrink: 0,
                                marginTop: "3px",
                              }}
                            >
                              <span className="mono" style={{ color: vertical.accentColor }}>
                                Details ↗
                              </span>
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Vertical Footer */}
                <div className="vertical-footer">
                  <span className="vertical-items-heading" style={{ marginBottom: "8px" }}>
                    Supporting Stack
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
                    style={{ borderColor: "var(--rule)", textDecoration: "none" }}
                  >
                    <span>Explore {vertical.number} Deep Dive →</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Custom Engagement Scope Estimator */}
        <motion.div
          className="bundle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ marginTop: "64px" }}
        >
          <div className="bundle-list">
            <div className="badge-tech" style={{ marginBottom: "12px" }}>
              <span className="dot" style={{ background: "var(--value)", boxShadow: "0 0 8px var(--value)" }} />
              <span>CUSTOM ENGAGEMENT BUILDER</span>
            </div>
            <div className="bundle-title">Your Selected FARAKIQ Deliverables</div>
            {selectedList.length === 0 ? (
              <p className="bundle-empty">
                Tap any capability item across the three verticals above to calculate an estimated engagement scope.
              </p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {projectItems.length > 0 && (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        marginBottom: "8px",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "var(--value)",
                        }}
                      />
                      <span
                        className="mono"
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--value)",
                          letterSpacing: "0.04em",
                          fontWeight: 600,
                        }}
                      >
                        ONE-TIME PROJECT BUILDS ({projectItems.length})
                      </span>
                    </div>
                    <ul className="bundle-items">
                      {projectItems.map((item) => (
                        <li
                          key={item.id}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <span style={{ fontSize: "0.85rem" }}>{item.name}</span>
                          <span
                            className="mono"
                            style={{
                              color: "var(--value)",
                              flexShrink: 0,
                              fontSize: "0.82rem",
                            }}
                          >
                            {item.priceDisplay}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {monthlyItems.length > 0 && (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        marginBottom: "8px",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "var(--accent-cyan)",
                        }}
                      />
                      <span
                        className="mono"
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--accent-cyan)",
                          letterSpacing: "0.04em",
                          fontWeight: 600,
                        }}
                      >
                        MONTHLY GROWTH RETAINERS ({monthlyItems.length})
                      </span>
                    </div>
                    <ul className="bundle-items">
                      {monthlyItems.map((item) => (
                        <li
                          key={item.id}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <span style={{ fontSize: "0.85rem" }}>{item.name}</span>
                          <span
                            className="mono"
                            style={{
                              color: "var(--accent-cyan)",
                              flexShrink: 0,
                              fontSize: "0.82rem",
                            }}
                          >
                            {item.priceDisplay}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="receipt bundle-receipt">
            <div className="receipt-title">FARAKIQ SCOPE NO. 007</div>
            <div className="receipt-heading">Estimated engagement scope</div>
            <div className="receipt-line">
              <span className="label">Selected capability items</span>
              <span className="val mono">{selectedList.length}</span>
            </div>
            <div className="receipt-line">
              <span className="label">One-time project estimate</span>
              <span
                className="val mono"
                style={{
                  color: projectItems.length ? "var(--value)" : "var(--text-light-dim)",
                  fontWeight: 600,
                }}
              >
                {projectItems.length === 0
                  ? "None selected"
                  : projectMinTotal > 0
                  ? `From ${formatINR(projectMinTotal)}`
                  : "Custom quote"}
              </span>
            </div>
            <div className="receipt-line">
              <span className="label">Estimated monthly retainer</span>
              <span
                className="val mono"
                style={{
                  color: monthlyItems.length ? "var(--accent-cyan)" : "var(--text-light-dim)",
                  fontWeight: 600,
                }}
              >
                {monthlyItems.length === 0 ? "None selected" : `${formatINR(monthlyTotal)} / mo`}
              </span>
            </div>
            <div
              className="receipt-line"
              style={{
                borderTop: "1px dashed var(--rule-paper)",
                paddingTop: "10px",
                marginTop: "8px",
              }}
            >
              <span
                className="label"
                style={{
                  fontSize: "0.74rem",
                  color: "var(--text-light-dim)",
                  fontStyle: "italic",
                  lineHeight: 1.35,
                }}
              >
                * Development builds are scoped once per deliverable. Ongoing marketing, ads &amp;
                SEO are billed monthly.
              </span>
            </div>
            <a href="#contact" className="btn btn-primary bundle-cta">
              Discuss your custom scope
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
