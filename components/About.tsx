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
        <h2>Why choose FARAKIQ as your engineering partner</h2>
        <div className="about-body">
          <p>
            FARAKIQ is led by Darwin Swami. Most agencies hand you off to whoever&apos;s free that week. I work directly with a small number of founders at a time across custom websites, full-stack applications, AI integrations, and automation pipelines — so your digital product remains coherent and high-performing.
          </p>
          <p>
            If something isn&apos;t working, you&apos;ll hear it from me directly — no buried agency slides with arbitrary green arrows.
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
