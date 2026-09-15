"use client";

import { useState } from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function NotFoundContent() {
  const [replayKey, setReplayKey] = useState(0);

  const handleReplay = () => {
    setReplayKey((prev) => prev + 1);
  };

  return (
    <div
      style={{
        padding: "clamp(48px, 8vw, 84px) 0 clamp(64px, 10vw, 100px)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* 404 Status Chip */}
      <div className="badge-tech" style={{ marginBottom: "32px" }}>
        <span className="dot" style={{ background: "var(--waste)" }}></span>
        STATUS 404 // ENDPOINT_UNRESOLVED
      </div>

      {/* Hero Animated Logo Stage */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <BrandLogo
          size="lg"
          showTagline={true}
          animate={true}
          replayKey={replayKey}
          asLink={false}
        />

        <button
          type="button"
          className="replay"
          onClick={handleReplay}
          aria-label="Replay FARAKIQ logo intro animation"
        >
          <span>↻</span> REPLAY INTRO
        </button>
      </div>

      {/* Main Diagnostic Heading */}
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          margin: "36px 0 16px",
          color: "var(--text-light)",
        }}
      >
        Signal Lost in the Pipeline
      </h1>

      <p
        style={{
          color: "var(--text-light-dim)",
          fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
          maxWidth: "54ch",
          margin: "0 auto 36px",
          lineHeight: 1.6,
        }}
      >
        The endpoint you requested does not exist, was renamed, or has been relocated.
        Re-route through verified agency pipelines below.
      </p>

      {/* Action Buttons */}
      <div
        style={{
          display: "flex",
          gap: "14px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "56px",
        }}
      >
        <Link
          href="/"
          className="btn btn-primary"
          style={{ padding: "12px 28px", fontSize: "0.95rem" }}
        >
          ← Return to Homepage
        </Link>
        <Link
          href="/#services"
          className="btn btn-secondary"
          style={{ padding: "12px 24px", fontSize: "0.95rem" }}
        >
          View Capabilities ↗
        </Link>
        <Link
          href="/#contact"
          className="btn btn-secondary"
          style={{ padding: "12px 24px", fontSize: "0.95rem" }}
        >
          Book Discovery Call
        </Link>
      </div>

      {/* Verified Routes Directory */}
      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          textAlign: "left",
          borderTop: "1px solid var(--rule)",
          paddingTop: "40px",
        }}
      >
        <div
          className="mono"
          style={{
            fontSize: "0.82rem",
            color: "var(--waste)",
            marginBottom: "20px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          // VERIFIED SYSTEM ROUTES
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
            gap: "16px",
          }}
        >
          <Link
            href="/services/web-development"
            style={{
              padding: "20px",
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "var(--radius-lg)",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              boxShadow: "var(--shadow-sm), var(--card-inner-highlight)",
              transition: "border-color 0.2s ease, transform 0.2s ease",
            }}
          >
            <span style={{ fontWeight: 700, fontSize: "0.98rem", color: "var(--text-light)" }}>
              Website &amp; Web Apps ↗
            </span>
            <span style={{ fontSize: "0.84rem", color: "var(--text-light-dim)", lineHeight: 1.45 }}>
              Next.js 16, React 19, and full-stack web platforms engineered for performance.
            </span>
          </Link>

          <Link
            href="/services/n8n-automation"
            style={{
              padding: "20px",
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "var(--radius-lg)",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              boxShadow: "var(--shadow-sm), var(--card-inner-highlight)",
              transition: "border-color 0.2s ease, transform 0.2s ease",
            }}
          >
            <span style={{ fontWeight: 700, fontSize: "0.98rem", color: "var(--text-light)" }}>
              n8n Workflow Automation ↗
            </span>
            <span style={{ fontSize: "0.84rem", color: "var(--text-light-dim)", lineHeight: 1.45 }}>
              Self-hosted orchestration, CRM syncing, and webhook pipelines without Zapier bloat.
            </span>
          </Link>

          <Link
            href="/services/meta-ads"
            style={{
              padding: "20px",
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "var(--radius-lg)",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              boxShadow: "var(--shadow-sm), var(--card-inner-highlight)",
              transition: "border-color 0.2s ease, transform 0.2s ease",
            }}
          >
            <span style={{ fontWeight: 700, fontSize: "0.98rem", color: "var(--text-light)" }}>
              Paid Growth &amp; Ads ↗
            </span>
            <span style={{ fontSize: "0.84rem", color: "var(--text-light-dim)", lineHeight: 1.45 }}>
              Direct-response Meta Ads and high-intent Google Search PPC under transparent flat fees.
            </span>
          </Link>

          <Link
            href="/services/seo"
            style={{
              padding: "20px",
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "var(--radius-lg)",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              boxShadow: "var(--shadow-sm), var(--card-inner-highlight)",
              transition: "border-color 0.2s ease, transform 0.2s ease",
            }}
          >
            <span style={{ fontWeight: 700, fontSize: "0.98rem", color: "var(--text-light)" }}>
              Technical SEO &amp; AEO ↗
            </span>
            <span style={{ fontSize: "0.84rem", color: "var(--text-light-dim)", lineHeight: 1.45 }}>
              Core Web Vitals, Schema.org entity graphs, and Answer Engine Optimization.
            </span>
          </Link>
        </div>

        {/* Diagnostic Meta Bar */}
        <div
          className="mono"
          style={{
            marginTop: "32px",
            padding: "12px 16px",
            background: "rgba(255, 74, 52, 0.04)",
            border: "1px solid rgba(255, 74, 52, 0.2)",
            borderRadius: "var(--radius-md)",
            fontSize: "0.78rem",
            color: "var(--text-light-dim)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
            boxShadow: "var(--card-inner-highlight)",
          }}
        >
          <span>HTTP 404 • ROUTE_UNRESOLVED</span>
          <span>WE MAKE THE DIFFERENCE</span>
          <span>FARAKIQ SYSTEM</span>
        </div>
      </div>
    </div>
  );
}
