"use client";

import { motion } from "motion/react";
import { SKILLS_DATA } from "@/data/siteData";

export default function About() {
  return (
    <section id="about">
      <motion.div
        className="wrap about-grid"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Why choose FARAKIQ as your engineering &amp; growth partner</h2>
        <div className="about-body">
          <p>
            FARAKIQ provides website development, AI automation, and performance marketing services for founders who want one accountable partner instead of five vendors. Most agencies hand you off to rotating account managers or junior contractors. We work directly with a small roster of founders at a time across custom web platforms, AI workflow automations, high-ROI paid campaigns, and organic search — ensuring your product and growth engine operate as one cohesive system.
          </p>
          <p>
            If an acquisition campaign isn&apos;t converting or an architecture decision has trade-offs, you&apos;ll hear it from us directly — no buried agency slides with arbitrary green arrows or hand-waving.
          </p>
          <div className="skills">
            {SKILLS_DATA.map((skill, idx) => (
              <motion.span
                key={skill}
                className="skill"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, borderColor: "var(--waste)" }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
