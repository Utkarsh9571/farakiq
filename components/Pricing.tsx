"use client";

import { motion, Variants } from "motion/react";
import { PRICING_TIERS, COMPARISON_DATA } from "@/data/siteData";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Pricing() {
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
          <h2>What it actually costs</h2>
          <p>
            Agencies price in office rent, junior staff and a sales team. I don&apos;t carry that overhead — so the fee reflects the work, not the machine behind it. Flat fee, always. Never a percentage of your ad spend.
          </p>
        </motion.div>

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
              whileHover={{ y: -6, borderColor: tier.featured ? "var(--waste)" : "var(--text-light-dim)" }}
              transition={{ duration: 0.25 }}
              className={`tier ${tier.featured ? "featured" : ""}`}
            >
              <div className="tier-name">{tier.name}</div>
              <div className="tier-price mono">
                {tier.price}
                <span>{tier.period}</span>
              </div>
              <p className="tier-desc">{tier.description}</p>
              <ul className="tier-list">
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
          ))}
        </motion.div>
        <p className="tier-note">
          <strong>
            Website builds and app development are quoted separately as one-time projects — website from ₹25,000, apps scoped individually.
          </strong>
        </p>

        <motion.div
          className="compare"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
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
                {row.darvin}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
