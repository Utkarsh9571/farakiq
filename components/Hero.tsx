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
        </motion.div>
      </div>
    </section>
  );
}
