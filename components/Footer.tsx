"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--rule)", padding: "48px 0 36px" }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
            gap: "36px",
            marginBottom: "36px",
          }}
          className="footer-grid"
        >
          {/* Column 1: Brand & Official Tagline */}
          <div>
            <a href="#top" className="brand" aria-label="FARAKIQ Homepage" style={{ marginBottom: "14px", display: "inline-block" }}>
              <Image
                src="/farakiq-logo.svg"
                alt="FARAKIQ — We Make The Difference"
                width={160}
                height={30}
                style={{ width: "auto", height: "28px", display: "block" }}
              />
            </a>
            <p style={{ color: "var(--text-light-dim)", fontSize: "0.92rem", lineHeight: 1.5, margin: "0 0 16px", maxWidth: "36ch" }}>
              Custom Website Development, Full-Stack Web Applications, E-Commerce Platforms &amp; AI Integrations. We make the difference.
            </p>
            <span className="mono" style={{ fontSize: "0.78rem", color: "var(--text-light-dim)" }}>
              Jaipur, India • Available Globally
            </span>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <div className="mono" style={{ fontSize: "0.8rem", color: "var(--waste)", marginBottom: "14px", letterSpacing: "0.04em" }}>
              NAVIGATION
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <a href="#services" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.9rem" }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.9rem" }}>
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#architecture" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.9rem" }}>
                  System Architecture
                </a>
              </li>
              <li>
                <a href="#pricing" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.9rem" }}>
                  Pricing Models
                </a>
              </li>
              <li>
                <a href="#about" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.9rem" }}>
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Channels */}
          <div>
            <div className="mono" style={{ fontSize: "0.8rem", color: "var(--waste)", marginBottom: "14px", letterSpacing: "0.04em" }}>
              CONNECT
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <a href="mailto:hello@darvin.co" className="mono" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.88rem" }}>
                  hello@darvin.co
                </a>
              </li>
              <li>
                <a href="#contact" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.9rem" }}>
                  Project Enquiry
                </a>
              </li>
              <li>
                <a href="#top" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.9rem" }}>
                  Back to top ↑
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Row */}
        <div
          style={{
            borderTop: "1px dashed var(--rule)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p className="mono" style={{ margin: 0, color: "var(--text-light-dim)", fontSize: "0.8rem" }}>
            &copy; 2026 FARAKIQ. All rights reserved.
          </p>
          <p className="mono" style={{ margin: 0, color: "var(--text-light-dim)", fontSize: "0.8rem" }}>
            Built with Next.js &amp; Motion
          </p>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 860px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </footer>
  );
}
