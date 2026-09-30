"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import { PRICING_TIERS } from "@/data/siteData";
import SystemCore, { SystemObjectType } from "@/components/visuals/SystemCore";

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
  const [expandedTiers, setExpandedTiers] = useState<Record<string, boolean>>({});
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  const toggleTier = (name: string) => {
    setExpandedTiers((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const getTierSystemCore = (tierIndex: number): SystemObjectType => {
    if (tierIndex === 0) return "pricing-starter";
    if (tierIndex === 1) return "pricing-growth";
    return "pricing-scale";
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
          {PRICING_TIERS.map((tier, idx) => {
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
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Subtle Tier Emblem Visual */}
                <div className="flex items-center justify-between mb-2">
                  <div className="tier-name" style={{ color: isHighlighted ? "var(--waste)" : "var(--text-light-dim)", transition: "color 0.25s ease", margin: 0 }}>
                    {tier.name}
                  </div>
                  <div className="w-12 h-12 shrink-0">
                    <SystemCore
                      type={getTierSystemCore(idx)}
                      size={48}
                      floatAnimation={isHighlighted}
                      alt={`FARAKIQ ${tier.name} Tier Emblem`}
                    />
                  </div>
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
                        {tier.features.map((feat, i) => (
                          <li key={i}>
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

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`btn ${tier.featured ? "btn-primary" : "btn-ghost"}`}
                  style={{ marginTop: "16px", width: "100%", justifyContent: "center" }}
                >
                  Book this retainer →
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
