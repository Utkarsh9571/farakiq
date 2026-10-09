"use client";

import Link from "next/link";
import { motion } from "motion/react";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) {
        window.history.pushState("", document.title, window.location.pathname);
      }
    }
  };

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
            <Link href="/" className="brand" aria-label="FARAKIQ Homepage" onClick={handleLogoClick} style={{ marginBottom: "16px", display: "inline-block" }}>
              <BrandLogo size="md" showTagline={true} asLink={false} />
            </Link>
            <p style={{ color: "var(--text-light-dim)", fontSize: "0.92rem", lineHeight: 1.5, margin: "0 0 16px", maxWidth: "38ch" }}>
              FARAKIQ provides website development, AI automation, and performance marketing services for founders who want one accountable partner instead of five vendors.
            </p>
            <span className="mono" style={{ fontSize: "0.78rem", color: "var(--text-light-dim)" }}>
              Remote-First • Available Worldwide
            </span>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <div className="mono" style={{ fontSize: "0.78rem", color: "var(--waste)", marginBottom: "10px", letterSpacing: "0.04em" }}>
              NAVIGATION
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              <li>
                <Link href="/#services" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.88rem" }}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.88rem" }}>
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/#architecture" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.88rem" }}>
                  System Architecture
                </Link>
              </li>
              <li>
                <Link href="/#pricing" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.88rem" }}>
                  Pricing Models
                </Link>
              </li>
              <li>
                <Link href="/blog" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.88rem" }}>
                  Blog &amp; Insights
                </Link>
              </li>
              <li>
                <Link href="/#about" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.88rem" }}>
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Dedicated Services */}
          <div>
            <div className="mono" style={{ fontSize: "0.78rem", color: "var(--waste)", marginBottom: "10px", letterSpacing: "0.04em" }}>
              SERVICES
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              <li>
                <Link href="/services/meta-ads" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.88rem" }}>
                  Meta Ads
                </Link>
              </li>
              <li>
                <Link href="/services/google-ads" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.88rem" }}>
                  Google Ads (PPC)
                </Link>
              </li>
              <li>
                <Link href="/services/seo" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.88rem" }}>
                  SEO &amp; AI Search
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.88rem" }}>
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/n8n-automation" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.88rem" }}>
                  n8n Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Channels */}
          <div>
            <div className="mono" style={{ fontSize: "0.78rem", color: "var(--waste)", marginBottom: "10px", letterSpacing: "0.04em" }}>
              CONNECT
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
              <li>
                <a href="mailto:sales@farakiq.com" className="mono" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.85rem", wordBreak: "break-all", minHeight: "36px", display: "inline-flex", alignItems: "center" }}>
                  sales@farakiq.com
                </a>
              </li>
              <li>
                <Link href="/#contact" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.88rem", minHeight: "36px", display: "inline-flex", alignItems: "center" }}>
                  Project Enquiry
                </Link>
              </li>
              <li>
                <Link href="/#top" style={{ textDecoration: "none", color: "var(--text-light-dim)", fontSize: "0.88rem", minHeight: "36px", display: "inline-flex", alignItems: "center" }}>
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
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#00E699] animate-pulse" />
            <p className="mono" style={{ margin: 0, color: "var(--text-light-dim)", fontSize: "0.8rem" }}>
              &copy; 2026 FARAKIQ. All rights reserved. <span className="text-[10px] text-[var(--color-primary-coral)] ml-2">[SYS_STATUS: 99.99% ONLINE]</span>
            </p>
          </div>

          <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
            <Link
              href="/privacy-policy"
              className="mono hover:text-[var(--color-primary-coral)] transition-colors duration-200"
              style={{ color: "var(--text-light-dim)", fontSize: "0.78rem", textDecoration: "none" }}
            >
              Privacy Policy
            </Link>
            <span style={{ color: "var(--rule)", fontSize: "0.8rem" }}>•</span>
            <Link
              href="/terms-and-conditions"
              className="mono hover:text-[var(--color-primary-coral)] transition-colors duration-200"
              style={{ color: "var(--text-light-dim)", fontSize: "0.78rem", textDecoration: "none" }}
            >
              Terms of Service
            </Link>
          </div>

          <p className="mono" style={{ margin: 0, color: "var(--text-light-dim)", fontSize: "0.8rem" }}>
            Engineered with Next.js 15 &amp; Motion
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
