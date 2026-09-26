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
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

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
          onMouseLeave={() => setHoveredTier(null)}
        >
          {PRICING_TIERS.map((tier) => {
            const isHighlighted = hoveredTier ? hoveredTier === tier.name : tier.featured;

            return (
              <motion.div
                key={tier.name}
                variants={cardVariants}
                onMouseEnter={() => setHoveredTier(tier.name)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className={`tier ${isHighlighted ? "featured" : ""}`}
                style={{
                  borderColor: isHighlighted ? "var(--waste)" : "var(--card-border)",
                  backgroundColor: isHighlighted ? "rgba(255, 74, 52, 0.04)" : "var(--card-bg)",
                  boxShadow: isHighlighted ? "var(--shadow-glow-waste), var(--card-inner-highlight)" : "var(--shadow-sm), var(--card-inner-highlight)",
                  transition: "border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                <div className="tier-name" style={{ color: isHighlighted ? "var(--waste)" : "var(--text-light-dim)", transition: "color 0.25s ease" }}>
                  {tier.name}
                </div>
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
