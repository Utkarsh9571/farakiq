"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ARCHITECTURE_STAGES, ArchitectureStage } from "@/data/architectureData";

export default function Architecture() {
  const [activeStageId, setActiveStageId] = useState<string>("stage-1");
  const [showMobileDeliverables, setShowMobileDeliverables] = useState<boolean>(false);
  const activeStage = ARCHITECTURE_STAGES.find((s) => s.id === activeStageId) || ARCHITECTURE_STAGES[0];

  return (
    <section id="architecture">
      <div className="wrap">
        <div className="section-head">
          <div className="badge-tech">
            <span className="dot" />
            <span>INTEGRATED OPERATING MODEL</span>
          </div>
          <h2>How We Build &amp; Grow What You Need</h2>
          <p>
            A transparent four-phase process uniting software engineering, AI workflow automation, and precision growth marketing into one cohesive engine.
          </p>
        </div>

        {/* 4-Stage Matrix Pipeline Selector */}
        <motion.div
          className="arch-pipeline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {ARCHITECTURE_STAGES.map((stage: ArchitectureStage) => {
            const isActive = stage.id === activeStageId;
            return (
              <motion.button
                key={stage.id}
                onClick={() => {
                  setActiveStageId(stage.id);
                  setShowMobileDeliverables(false);
                }}
                className={`arch-node-btn ${isActive ? "active" : ""}`}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span className="mono" style={{ fontSize: "0.82rem", color: isActive ? "var(--waste)" : "var(--text-light-dim)", fontWeight: 600 }}>
                    {stage.number}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="active-stage-indicator"
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--waste)",
                        boxShadow: "0 0 6px var(--waste)",
                      }}
                    />
                  )}
                </div>
                <h3 style={{ fontSize: "0.98rem", fontWeight: 700, margin: "0 0 2px", color: "var(--text-light)", letterSpacing: "-0.01em" }}>
                  {stage.title}
                </h3>
                <p className="hidden sm:block" style={{ fontSize: "0.8rem", color: "var(--text-light-dim)", margin: 0, lineHeight: 1.4 }}>
                  {stage.subtitle}
                </p>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Dynamic Process & Deliverables Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "var(--radius-lg)",
              padding: "clamp(20px, 4vw, 36px)",
              display: "grid",
              gridTemplateColumns: "1.1fr 1.25fr",
              gap: "32px",
              alignItems: "start",
              boxShadow: "var(--shadow-md), var(--card-inner-highlight)",
            }}
            className="arch-detail-grid"
          >
            {/* Left Column: Stage Overview & Key Pillars */}
            <div>
              <div className="mono" style={{ fontSize: "0.76rem", color: "var(--waste)", marginBottom: "8px", letterSpacing: "0.05em", fontWeight: 600 }}>
                STAGE {activeStage.number} {"//"} PROCESS OVERVIEW
              </div>
              <h3 style={{ fontSize: "clamp(1.25rem, 3.5vw, 1.75rem)", fontWeight: 700, margin: "0 0 14px", color: "var(--text-light)", letterSpacing: "-0.01em" }}>
                {activeStage.title}
              </h3>
              <p style={{ color: "var(--text-light-dim)", fontSize: "0.95rem", lineHeight: 1.55, margin: "0 0 20px" }}>
                {activeStage.description}
              </p>

              <div className="mono" style={{ fontSize: "0.74rem", color: "var(--text-light-dim)", marginBottom: "10px", letterSpacing: "0.04em", fontWeight: 600 }}>
                KEY FOCUS AREAS:
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                {activeStage.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="mono"
                    style={{
                      fontSize: "0.75rem",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--card-border)",
                      color: "var(--text-light)",
                      padding: "4px 10px",
                      borderRadius: "var(--radius-full)",
                      boxShadow: "var(--card-inner-highlight)",
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>

              {/* Target Outcome Milestone Banner */}
              <div
                style={{
                  background: "rgba(31, 111, 84, 0.12)",
                  border: "1px solid rgba(31, 111, 84, 0.4)",
                  borderRadius: "var(--radius)",
                  padding: "12px 14px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <span className="stamp value" style={{ transform: "none", fontSize: "0.65rem", padding: "2px 6px", flexShrink: 0, alignSelf: "center" }}>
                  OUTCOME
                </span>
                <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--text-light)", lineHeight: 1.4, fontWeight: 500 }}>
                  {activeStage.deliverableMatrix.targetOutcome}
                </p>
              </div>

              {/* Mobile Progressive Disclosure Toggle */}
              <div className="block lg:hidden" style={{ marginTop: "16px" }}>
                <button
                  className="btn btn-ghost"
                  onClick={() => setShowMobileDeliverables((prev) => !prev)}
                  style={{ width: "100%", justifyContent: "center", fontSize: "0.82rem", minHeight: "42px", borderRadius: "var(--radius-md)" }}
                >
                  <span className="mono">
                    {showMobileDeliverables ? "Hide Detailed Matrix ↑" : "View Detailed Deliverables Matrix ↓"}
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column: Integrated Deliverables & Discipline Matrix */}
            <div
              className={`arch-deliverables-panel ${showMobileDeliverables ? "mobile-expanded" : "mobile-collapsed"}`}
              style={{
                background: "rgba(10, 12, 15, 0.85)",
                border: "1px solid var(--card-border)",
                borderRadius: "var(--radius-md)",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                boxShadow: "inset 0 2px 6px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Header Status Bar */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid var(--card-border)",
                  paddingBottom: "12px",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "var(--value)",
                      boxShadow: "0 0 8px var(--value)",
                      display: "inline-block",
                    }}
                  />
                  <span className="mono" style={{ fontSize: "0.76rem", color: "var(--text-light)", fontWeight: 600, letterSpacing: "0.04em" }}>
                    DELIVERABLES MATRIX
                  </span>
                </div>
                <span className="mono" style={{ fontSize: "0.72rem", color: "var(--waste)", fontWeight: 600 }}>
                  {activeStage.deliverableMatrix.badge}
                </span>
              </div>

              {/* Two Balanced Discipline Tracks */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="discipline-grid">
                {/* Track A: Systems & Engineering */}
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid var(--card-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "14px",
                    boxShadow: "var(--card-inner-highlight)",
                  }}
                >
                  <div
                    className="mono"
                    style={{
                      fontSize: "0.74rem",
                      color: "var(--text-light)",
                      fontWeight: 600,
                      marginBottom: "10px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span style={{ color: "var(--waste)" }}>[01]</span>
                    <span>{activeStage.deliverableMatrix.engineeringTrack.label}</span>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                    {activeStage.deliverableMatrix.engineeringTrack.items.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-light-dim)",
                          lineHeight: 1.4,
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                        }}
                      >
                        <span style={{ color: "var(--value)", flexShrink: 0, fontWeight: "bold" }}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Track B: Growth & Marketing */}
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid var(--card-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "14px",
                    boxShadow: "var(--card-inner-highlight)",
                  }}
                >
                  <div
                    className="mono"
                    style={{
                      fontSize: "0.74rem",
                      color: "var(--text-light)",
                      fontWeight: 600,
                      marginBottom: "10px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span style={{ color: "var(--accent-cyan)" }}>[02]</span>
                    <span>{activeStage.deliverableMatrix.growthTrack.label}</span>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                    {activeStage.deliverableMatrix.growthTrack.items.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-light-dim)",
                          lineHeight: 1.4,
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                        }}
                      >
                        <span style={{ color: "var(--accent-cyan)", flexShrink: 0, fontWeight: "bold" }}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .arch-pipeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 36px;
        }
        .arch-node-btn {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--card-border);
          padding: 18px 16px;
          border-radius: var(--radius-md);
          text-align: left;
          cursor: pointer;
          color: inherit;
          transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          position: relative;
          box-shadow: var(--card-inner-highlight);
        }
        .arch-node-btn.active {
          background: var(--card-bg-elevated);
          border-color: var(--waste);
          box-shadow: 0 0 16px rgba(255, 74, 52, 0.16), var(--card-inner-highlight);
        }
        @media (max-width: 900px) {
          .arch-pipeline {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .arch-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 1023px) {
          .arch-deliverables-panel.mobile-collapsed {
            display: none !important;
          }
          .arch-deliverables-panel.mobile-expanded {
            display: flex !important;
          }
        }
        @media (max-width: 600px) {
          .discipline-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
        @media (max-width: 480px) {
          .arch-pipeline {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
            margin-bottom: 24px !important;
          }
          .arch-node-btn {
            padding: 12px 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
