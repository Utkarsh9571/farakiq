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
            <span>SOFTWARE ENGINEERING • AI AUTOMATION • GROWTH &amp; PERFORMANCE</span>
          </motion.div>
 
          <motion.h1 variants={itemVariants}>
            Are you ready to stop wasting your money?
          </motion.h1>

          <motion.p variants={itemVariants} className="sub">
            FARAKIQ is a specialized technical and growth partnership. We engineer high-performance web applications, AI automation systems, and ROI-driven marketing campaigns — uniting deep software engineering with precision search and paid acquisition.
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
              Explore our services
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
              <span className="label">Monthly retainer overhead</span>
              <span className="val">₹40,000–₹80,000</span>
            </div>
            <div className="receipt-line">
              <span className="label">Vanity reports you don&apos;t read</span>
              <span className="val">Included</span>
            </div>
            <div className="receipt-line">
              <span className="label">Rotating junior account managers</span>
              <span className="val">Included</span>
            </div>
            <div className="receipt-line">
              <span className="label">Clear answers on tech &amp; ad ROI</span>
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
              <span className="label">Unnecessary retainer markup</span>
              <span className="val">You keep it</span>
            </div>
            <div className="receipt-line">
              <span className="label">Plain-language tech &amp; growth metrics</span>
              <span className="val">Included</span>
            </div>
            <div className="receipt-line">
              <span className="label">Direct specialist partner access</span>
              <span className="val">Engineering + Growth</span>
            </div>
            <div className="receipt-line">
              <span className="label">Clear answers on systems &amp; conversions</span>
              <span className="val">Every week</span>
            </div>
            <span className="stamp value">TOTAL VALUE: TRACEABLE</span>
          </motion.div>
        </motion.div>

        <p className="receipt-caption">
          A transparent partnership model designed to eliminate agency bloat and deliver accountable execution across engineering, AI systems, and customer acquisition.
        </p>
      </div>
    </section>
  );
}
