"use client";

import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="hero" style={{ borderTop: "none" }}>
      <div className="wrap">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="badge-tech">
            <span className="dot" />
            <span>FULL-STACK • AI INTEGRATIONS • WORKFLOW AUTOMATION</span>
          </motion.div>

          <motion.h1 variants={itemVariants}>
            Are you ready to stop wasting your money?
          </motion.h1>

          <motion.p variants={itemVariants} className="sub">
            FARAKIQ engineers custom website platforms, full-stack applications, and automated AI workflows — so founders stop paying agencies for reports they don&apos;t read and results they can&apos;t trace.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-ctas">
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              Book a free audit
            </motion.a>
            <motion.a
              href="#services"
              className="btn btn-ghost"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              See what I build
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="receipts"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="receipt a"
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 14px 32px rgba(0, 0, 0, 0.45)" }}
            transition={{ duration: 0.25 }}
          >
            <div className="receipt-title">RECEIPT NO. 001</div>
            <div className="receipt-heading">The agency bill</div>
            <div className="receipt-line">
              <span className="label">Monthly retainer</span>
              <span className="val">₹40,000–₹80,000</span>
            </div>
            <div className="receipt-line">
              <span className="label">Reports you don&apos;t read</span>
              <span className="val">Included</span>
            </div>
            <div className="receipt-line">
              <span className="label">New account manager, every 6 months</span>
              <span className="val">Included</span>
            </div>
            <div className="receipt-line">
              <span className="label">Clear answer on what&apos;s working</span>
              <span className="val">Not included</span>
            </div>
            <span className="stamp waste">TOTAL VALUE: UNCLEAR</span>
          </motion.div>

          <motion.div
            className="receipt b"
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 14px 32px rgba(0, 0, 0, 0.45)" }}
            transition={{ duration: 0.25 }}
          >
            <div className="receipt-title">RECEIPT NO. 002</div>
            <div className="receipt-heading">Working with FARAKIQ</div>
            <div className="receipt-line">
              <span className="label">Monthly retainer</span>
              <span className="val">You keep it</span>
            </div>
            <div className="receipt-line">
              <span className="label">Reports you actually understand</span>
              <span className="val">Included</span>
            </div>
            <div className="receipt-line">
              <span className="label">One engineering partner</span>
              <span className="val">Direct</span>
            </div>
            <div className="receipt-line">
              <span className="label">Clear answer on what&apos;s working</span>
              <span className="val">Every week</span>
            </div>
            <span className="stamp value">TOTAL VALUE: TRACEABLE</span>
          </motion.div>
        </motion.div>

        <p className="receipt-caption">
          This isn&apos;t a knock on every agency — it&apos;s why I built this differently.
        </p>
      </div>
    </section>
  );
}
