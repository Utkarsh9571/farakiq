"use client";

import { motion } from "motion/react";
import { APPROACH_STEPS } from "@/data/siteData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Approach() {
  return (
    <section id="approach">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="badge-tech mb-3">
            <span className="dot" />
            <span>DIRECT METHODOLOGY</span>
          </div>
          <h2>How this actually works</h2>
          <p>No 40-page onboarding deck. Three steps, in this order, every time.</p>
        </motion.div>

        {/* Visual Progression Pipeline Container */}
        <div className="relative my-8">
          {/* Desktop Horizontal Connecting Line */}
          <div className="hidden md:block absolute top-[28px] left-[16%] right-[16%] h-0.5 bg-[#1E232E] z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--color-primary-coral)] via-[#00F0FF] to-[#00E699]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>

          <motion.div
            className="steps relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {APPROACH_STEPS.map((step) => (
              <motion.div
                key={step.num}
                className="step group relative bg-[#0D0F14] border border-[#1E232E] rounded-xl p-6 shadow-lg transition-all duration-300 hover:border-[var(--color-primary-coral)]/40 hover:-translate-y-1"
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="num mono text-lg font-bold text-[var(--color-primary-coral)] bg-[var(--color-primary-coral)]/10 px-2.5 py-1 rounded-md border border-[var(--color-primary-coral)]/20">
                    {step.num}
                  </span>
                  <div className="flex items-center space-x-1 text-xs font-mono text-[var(--color-text-dim)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E699] animate-pulse" />
                    <span className="uppercase tracking-wider">PHASE {step.num}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[var(--color-text-light)] mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-text-light-dim)] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
