"use client";

import { motion } from "motion/react";
import { APPROACH_STEPS } from "@/data/siteData";

export default function Approach() {
  return (
    <section id="approach">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2>How this actually works</h2>
          <p>No 40-page onboarding deck. Three steps, in this order, every time.</p>
        </motion.div>
        <div className="steps">
          {APPROACH_STEPS.map((step, idx) => (
            <motion.div
              key={step.num}
              className="step"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <span className="num mono">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
