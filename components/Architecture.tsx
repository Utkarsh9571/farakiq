"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ARCHITECTURE_STAGES, ArchitectureStage } from "@/data/architectureData";

export default function Architecture() {
  const [activeStageId, setActiveStageId] = useState<string>("stage-1");
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
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: "16px",
            marginBottom: "36px",
          }}
        >
          {ARCHITECTURE_STAGES.map((stage: ArchitectureStage) => {
            const isActive = stage.id === activeStageId;
            return (
              <motion.button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className="arch-node-btn"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: isActive ? "var(--card-bg-elevated)" : "rgba(255, 255, 255, 0.02)",
                  border: isActive ? "1px solid var(--waste)" : "1px solid var(--card-border)",
                  padding: "18px 16px",
                  borderRadius: "var(--radius-md)",
                  textAlign: "left",
                  cursor: "pointer",
                  color: "inherit",
                  transition: "background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
                  position: "relative",
                  boxShadow: isActive
                    ? "0 0 16px rgba(255, 74, 52, 0.16), var(--card-inner-highlight)"
                    : "var(--card-inner-highlight)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span className="mono" style={{ fontSize: "0.85rem", color: isActive ? "var(--waste)" : "var(--text-light-dim)", fontWeight: 600 }}>
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
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 4px", color: "var(--text-light)", letterSpacing: "-0.01em" }}>
                  {stage.title}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "var(--text-light-dim)", margin: 0, lineHeight: 1.45 }}>
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
              padding: "clamp(24px, 4vw, 36px)",
              display: "grid",
              gridTemplateColumns: "1.1fr 1.25fr",
              gap: "36px",
              alignItems: "start",
              boxShadow: "var(--shadow-md), var(--card-inner-highlight)",
            }}
            className="arch-detail-grid"
          >
            {/* Left Column: Stage Overview & Key Pillars */}
            <div>
              <div className="mono" style={{ fontSize: "0.78rem", color: "var(--waste)", marginBottom: "8px", letterSpacing: "0.05em", fontWeight: 600 }}>
                STAGE {activeStage.number} // PROCESS OVERVIEW
              </div>
              <h3 style={{ fontSize: "clamp(1.3rem, 3.5vw, 1.75rem)", fontWeight: 700, margin: "0 0 16px", color: "var(--text-light)", letterSpacing: "-0.01em" }}>
                {activeStage.title}
              </h3>
              <p style={{ color: "var(--text-light-dim)", fontSize: "1rem", lineHeight: 1.6, margin: "0 0 24px" }}>
                {activeStage.description}
              </p>

              <div className="mono" style={{ fontSize: "0.76rem", color: "var(--text-light-dim)", marginBottom: "12px", letterSpacing: "0.04em", fontWeight: 600 }}>
                KEY FOCUS AREAS:
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {activeStage.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="mono"
                    style={{
                      fontSize: "0.78rem",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--card-border)",
                      color: "var(--text-light)",
                      padding: "5px 12px",
                      borderRadius: "var(--radius-full)",
                      boxShadow: "var(--card-inner-highlight)",
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Integrated Deliverables & Discipline Matrix */}
            <div
              style={{
                background: "rgba(10, 12, 15, 0.85)",
                border: "1px solid var(--card-border)",
                borderRadius: "var(--radius-md)",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
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
                  paddingBottom: "14px",
                  flexWrap: "wrap",
                  gap: "10px",
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
                  <span className="mono" style={{ fontSize: "0.78rem", color: "var(--text-light)", fontWeight: 600, letterSpacing: "0.04em" }}>
                    DELIVERABLES MATRIX
                  </span>
                </div>
                <span className="mono" style={{ fontSize: "0.74rem", color: "var(--waste)", fontWeight: 600 }}>
                  {activeStage.deliverableMatrix.badge}
                </span>
              </div>

              {/* Two Balanced Discipline Tracks */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="discipline-grid">
                {/* Track A: Systems & Engineering */}
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid var(--card-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "16px",
                    boxShadow: "var(--card-inner-highlight)",
                  }}
                >
                  <div
                    className="mono"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-light)",
                      fontWeight: 600,
                      marginBottom: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span style={{ color: "var(--waste)" }}>[01]</span>
                    <span>{activeStage.deliverableMatrix.engineeringTrack.label}</span>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                    {activeStage.deliverableMatrix.engineeringTrack.items.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--text-light-dim)",
                          lineHeight: 1.45,
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
                    padding: "16px",
                    boxShadow: "var(--card-inner-highlight)",
                  }}
                >
                  <div
                    className="mono"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-light)",
                      fontWeight: 600,
                      marginBottom: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span style={{ color: "var(--accent-cyan)" }}>[02]</span>
                    <span>{activeStage.deliverableMatrix.growthTrack.label}</span>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                    {activeStage.deliverableMatrix.growthTrack.items.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--text-light-dim)",
                          lineHeight: 1.45,
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

              {/* Target Outcome Milestone Banner */}
              <div
                style={{
                  background: "rgba(31, 111, 84, 0.12)",
                  border: "1px solid rgba(31, 111, 84, 0.4)",
                  borderRadius: "var(--radius)",
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <span className="stamp value" style={{ transform: "none", fontSize: "0.68rem", padding: "2px 6px", flexShrink: 0, alignSelf: "center" }}>
                  OUTCOME
                </span>
                <p style={{ margin: 0, fontSize: "0.86rem", color: "var(--text-light)", lineHeight: 1.4, fontWeight: 500 }}>
                  {activeStage.deliverableMatrix.targetOutcome}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .arch-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
        @media (max-width: 768px) {
          .arch-pipeline {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .arch-node-btn {
            padding: 14px 12px !important;
          }
        }
        @media (max-width: 480px) {
          .arch-pipeline {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
        }
        @media (max-width: 600px) {
          .discipline-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
