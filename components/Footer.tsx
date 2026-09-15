"use client";

import Link from "next/link";
import { motion } from "motion/react";
import BrandLogo from "@/components/BrandLogo";

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
            gridTemplateColumns: "1.4fr 0.9fr 1.1fr 0.9fr",
            gap: "32px",
            marginBottom: "36px",
          }}
          className="footer-grid"
        >
          {/* Column 1: Brand & Official Tagline */}
          <div>
            <Link href="/" className="brand" aria-label="FARAKIQ Homepage" style={{ marginBottom: "16px", display: "inline-block" }}>
              <BrandLogo size="md" showTagline={true} asLink={false} />
            </Link>
            <p style={{ color: "var(--text-light-dim)", fontSize: "0.92rem", lineHeight: 1.5, margin: "0 0 16px", maxWidth: "36ch" }}>
              Software Engineering, AI Systems, Paid Growth Marketing &amp; Technical SEO. Two specialized partners delivering integrated digital products and acquisition.
            </p>
            <span className="mono" style={{ fontSize: "0.78rem", color: "var(--text-light-dim)" }}>
              Remote-First • Available Worldwide
            </span>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <div className="mono" style={{ fontSize: "0.8rem", color: "var(--waste)", marginBottom: "14px", letterSpacing: "0.04em" }}>
              NAVIGATION
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link href="/#services" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.9rem" }}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.9rem" }}>
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/#architecture" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.9rem" }}>
                  System Architecture
                </Link>
              </li>
              <li>
                <Link href="/#pricing" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.9rem" }}>
                  Pricing Models
                </Link>
              </li>
              <li>
                <Link href="/blog" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.9rem" }}>
                  Blog &amp; Insights
                </Link>
              </li>
              <li>
                <Link href="/#about" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.9rem" }}>
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Dedicated Services */}
          <div>
            <div className="mono" style={{ fontSize: "0.8rem", color: "var(--waste)", marginBottom: "14px", letterSpacing: "0.04em" }}>
              SERVICES
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link href="/services/meta-ads" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.9rem" }}>
                  Meta Ads
                </Link>
              </li>
              <li>
                <Link href="/services/google-ads" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.9rem" }}>
                  Google Ads (PPC)
                </Link>
              </li>
              <li>
                <Link href="/services/seo" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.9rem" }}>
                  SEO &amp; AI Search
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.9rem" }}>
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/n8n-automation" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.9rem" }}>
                  n8n Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Channels */}
          <div>
            <div className="mono" style={{ fontSize: "0.8rem", color: "var(--waste)", marginBottom: "14px", letterSpacing: "0.04em" }}>
              CONNECT
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>
                <a href="mailto:hello@farakiq.com" className="mono" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.88rem", wordBreak: "break-all", minHeight: "36px", display: "inline-flex", alignItems: "center" }}>
                  hello@farakiq.com
                </a>
              </li>
              <li>
                <Link href="/#contact" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.9rem", minHeight: "36px", display: "inline-flex", alignItems: "center" }}>
                  Project Enquiry
                </Link>
              </li>
              <li>
                <Link href="/#top" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.9rem", minHeight: "36px", display: "inline-flex", alignItems: "center" }}>
                  Back to top ↑
                </Link>
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
            gap: "16px",
          }}
        >
          <p className="mono" style={{ margin: 0, color: "var(--text-light-dim)", fontSize: "0.8rem" }}>
            &copy; 2026 FARAKIQ. All rights reserved.
          </p>

          <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
            <Link
              href="/privacy-policy"
              className="mono"
              style={{ color: "var(--text-light-dim)", fontSize: "0.78rem", textDecoration: "none" }}
            >
              Privacy Policy
            </Link>
            <span style={{ color: "var(--rule)", fontSize: "0.8rem" }}>•</span>
            <Link
              href="/terms-and-conditions"
              className="mono"
              style={{ color: "var(--text-light-dim)", fontSize: "0.78rem", textDecoration: "none" }}
            >
              Terms of Service
            </Link>
          </div>

          <p className="mono" style={{ margin: 0, color: "var(--text-light-dim)", fontSize: "0.8rem" }}>
            Built with Next.js &amp; Motion
          </p>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 860px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </footer>
  );
}
