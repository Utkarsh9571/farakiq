"use client";

import { motion, Variants } from "motion/react";
import HeroRocket from "./hero-rocket/HeroRocket";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch min-h-[480px] py-4 sm:py-8">
          {/* Left Column: Text & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 md:order-1 flex flex-col justify-center"
          >
            <motion.h1 variants={itemVariants}>
              Are you ready to stop wasting your money?
              <span className="h1-keywords">
                Web development, AI automation &amp; performance marketing — built as one system.
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="sub hidden md:block">
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

          {/* Right Column: Hero Rocket Stage with Subtle Secondary Atmosphere Layer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 md:order-2 flex items-center justify-center w-full h-full mb-4 md:mb-0 relative"
          >
            {/* Subtle Atmospheric Secondary Rings (Faint orbit & micro-signals) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
              <svg viewBox="0 0 400 400" className="w-[115%] h-[115%] max-w-[480px]">
                <ellipse
                  cx="200"
                  cy="200"
                  rx="180"
                  ry="80"
                  fill="none"
                  stroke="#222834"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  transform="rotate(-15 200 200)"
                />
                <ellipse
                  cx="200"
                  cy="200"
                  rx="140"
                  ry="60"
                  fill="none"
                  stroke="rgba(255, 74, 52, 0.25)"
                  strokeWidth="0.75"
                  strokeDasharray="6 12"
                  transform="rotate(20 200 200)"
                />
                <circle cx="50" cy="180" r="1.5" fill="#00F0FF" opacity="0.6" />
                <circle cx="340" cy="220" r="1.5" fill="#00E699" opacity="0.6" />
              </svg>
            </div>

            <HeroRocket />
          </motion.div>
        </div>

        <motion.div
          className="receipts"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        />
      </div>
    </section>
  );
}
