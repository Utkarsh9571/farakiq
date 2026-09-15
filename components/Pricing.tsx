"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import { PRICING_TIERS, DEV_PROJECT_PRICING, COMPARISON_DATA } from "@/data/siteData";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Pricing() {
  const [expandedDevProjects, setExpandedDevProjects] = useState<Record<string, boolean>>({});
  const [expandedTiers, setExpandedTiers] = useState<Record<string, boolean>>({});

  const toggleDevProject = (id: string) => {
    setExpandedDevProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleTier = (name: string) => {
    setExpandedTiers((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <section id="pricing">
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
            <span>TRANSPARENT COMMERCIAL MODEL</span>
          </div>
          <h2>What It Actually Costs</h2>
          <p>
            Agencies price in office rent, junior staff and account executives. We don&apos;t carry that overhead — so the fee reflects the work, not the machine behind it. Flat fee, always. Never a percentage of your ad spend.
          </p>
        </motion.div>

        {/* Section 1: Monthly Retainers (Growth, Ads, SEO) */}
        <div style={{ marginBottom: "20px" }}>
          <span className="mono" style={{ fontSize: "0.74rem", color: "var(--waste)", letterSpacing: "0.04em", fontWeight: 600 }}>
            ONGOING MONTHLY GROWTH RETAINERS
          </span>
          <h3 style={{ fontSize: "1.25rem", margin: "6px 0 16px", fontWeight: 600 }}>
            Paid Advertising, SEO &amp; Continuous Growth Support
          </h3>
        </div>

        <motion.div
          className="pricing-tiers"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PRICING_TIERS.map((tier) => (
            <motion.div
              key={tier.name}
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: tier.featured ? "var(--waste)" : "var(--card-border-hover)" }}
              transition={{ duration: 0.25 }}
              className={`tier ${tier.featured ? "featured" : ""}`}
            >
              <div className="tier-name">{tier.name}</div>
              <div className="tier-price mono">
                {tier.price}
                <span>{tier.period}</span>
              </div>
              <p className="tier-desc" style={{ flex: 1 }}>{tier.description}</p>

              {/* Inclusions Toggle */}
              <button
                type="button"
                onClick={() => toggleTier(tier.name)}
                className="mono"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--card-border)",
                  color: "var(--text-light)",
                  padding: "8px 12px",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.76rem",
                  cursor: "pointer",
                  marginTop: "12px",
                  textAlign: "left",
                  boxShadow: "var(--card-inner-highlight)",
                  transition: "all 0.15s ease",
                }}
              >
                <span>{expandedTiers[tier.name] ? "Hide inclusions" : "Included scope"}</span>
                <span>{expandedTiers[tier.name] ? "▲" : "▼"}</span>
              </button>

              <AnimatePresence initial={false}>
                {expandedTiers[tier.name] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <ul className="tier-list" style={{ marginTop: "12px", paddingTop: "8px", borderTop: "1px dashed var(--rule)" }}>
                      {tier.features.map((feat, idx) => (
                        <li key={idx}>
                          {feat.includes(" or ") ? (
                            <>
                              {feat.split(" or ")[0]} <strong>or</strong> {feat.split(" or ")[1]}
                            </>
                          ) : (
                            feat
                          )}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Section 2: Scoped One-Time Development & AI Projects */}
        <div style={{ marginTop: "64px", marginBottom: "20px", paddingTop: "48px", borderTop: "1px solid var(--rule)" }}>
          <div className="badge-tech" style={{ marginBottom: "12px" }}>
            <span className="dot" style={{ background: "var(--value)", boxShadow: "0 0 8px var(--value)" }} />
            <span>ONE-TIME PROJECT SCOPING</span>
          </div>
          <h3 style={{ fontSize: "1.4rem", margin: "0 0 10px", fontWeight: 700, letterSpacing: "-0.01em" }}>
            Development, AI Systems &amp; Software Projects
          </h3>
          <p style={{ color: "var(--text-light-dim)", fontSize: "0.95rem", maxWidth: "68ch", margin: 0, lineHeight: 1.6 }}>
            Websites, custom web applications, AI chatbots, and workflow automations are scoped as fixed deliverables with transparent starting price anchors — never forced into monthly retainers.
          </p>
        </div>

        <motion.div
          className="dev-pricing-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {DEV_PROJECT_PRICING.map((proj) => {
            const isExpanded = !!expandedDevProjects[proj.id];

            return (
              <motion.div
                key={proj.id}
                variants={cardVariants}
                whileHover={{ y: -3, borderColor: "var(--card-border-hover)" }}
                transition={{ duration: 0.2 }}
                className="dev-project-card"
                style={{
                  border: isExpanded ? "1px solid var(--waste)" : "1px solid var(--card-border)",
                  borderRadius: "var(--radius-lg)",
                  boxShadow: isExpanded ? "var(--shadow-md), var(--card-inner-highlight)" : "var(--shadow-sm), var(--card-inner-highlight)",
                }}
              >
                {/* Header info */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", marginBottom: "8px" }}>
                  <div className="dev-project-title">{proj.title}</div>
                  <span
                    className="mono"
                    style={{
                      fontSize: "0.68rem",
                      color: "var(--value)",
                      background: "rgba(31, 111, 84, 0.15)",
                      border: "1px solid var(--value)",
                      padding: "2px 8px",
                      borderRadius: "var(--radius-full)",
                      boxShadow: "var(--card-inner-highlight)",
                      flexShrink: 0,
                    }}
                  >
                    {proj.scope}
                  </span>
                </div>

                <div className="dev-project-price mono">
                  {proj.price}
                </div>

                <p className="dev-project-summary">{proj.summary}</p>

                {/* Expand / Collapse Inclusions Button */}
                <button
                  type="button"
                  onClick={() => toggleDevProject(proj.id)}
                  aria-expanded={isExpanded}
                  className="mono"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    background: isExpanded ? "rgba(255, 74, 52, 0.08)" : "rgba(255, 255, 255, 0.03)",
                    border: isExpanded ? "1px solid rgba(255, 74, 52, 0.3)" : "1px solid var(--card-border)",
                    color: isExpanded ? "var(--waste)" : "var(--text-light)",
                    padding: "8px 12px",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "0.76rem",
                    cursor: "pointer",
                    marginTop: "14px",
                    textAlign: "left",
                    boxShadow: "var(--card-inner-highlight)",
                    transition: "all 0.15s ease",
                  }}
                >
                  <span>{isExpanded ? "Hide inclusions" : "Details & inclusions"}</span>
                  <span>{isExpanded ? "▲" : "▼"}</span>
                </button>

                {/* Collapsible Feature List */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <ul
                        className="tier-list"
                        style={{
                          marginTop: "12px",
                          paddingTop: "8px",
                          borderTop: "1px dashed var(--rule)",
                        }}
                      >
                        {proj.features.map((feat, idx) => (
                          <li
                            key={idx}
                            style={{
                              fontSize: "0.8rem",
                              padding: "6px 0",
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "6px",
                            }}
                          >
                            <span style={{ color: "var(--value)", fontWeight: "bold" }}>✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Scoping Transparency Note */}
        <div className="dev-pricing-note">
          <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--text-light-dim)", lineHeight: 1.5 }}>
            <strong style={{ color: "var(--text-light)" }}>Transparent Scope Estimation:</strong> Pricing anchors above reflect baseline production configurations. Final investment is scoped transparently based on functional complexity, integrations, database schemas, authentication, and custom design — with zero surprise change orders.
          </p>
        </div>

        {/* Section 3: Value Comparison Table */}
        <motion.div
          className="compare"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: "48px" }}
        >
          <div style={{ marginBottom: "20px" }}>
            <span className="mono" style={{ fontSize: "0.74rem", color: "var(--waste)", letterSpacing: "0.04em", fontWeight: 600 }}>
              COMMERCIAL COMPARISON
            </span>
            <h3 style={{ fontSize: "1.25rem", margin: "6px 0 0", fontWeight: 600 }}>
              Agency vs. Freelancer vs. FARAKIQ
            </h3>
          </div>

          <div className="compare-head">
            <span></span>
            <span>Agency</span>
            <span>Typical freelancer</span>
            <span className="highlight">FARAKIQ</span>
          </div>
          {COMPARISON_DATA.map((row, idx) => (
            <div key={idx} className="compare-row">
              <span className="compare-label" data-label="">
                {row.label}
              </span>
              <span className={row.label.includes("fee") ? "mono" : ""} data-label="Agency">
                {row.agency}
              </span>
              <span className={row.label.includes("fee") ? "mono" : ""} data-label="Typical freelancer">
                {row.freelancer}
              </span>
              <span
                className={`${row.label.includes("fee") ? "mono" : ""} highlight`}
                data-label="FARAKIQ"
              >
                {row.farakiq}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
