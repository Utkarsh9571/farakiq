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
          <h2>How I Build: From Problem to Production</h2>
          <p>
            An engineering approach focused on connecting web applications, AI modules, and workflow automations into unified systems.
          </p>
        </div>

        {/* 4-Stage Matrix Pipeline Selector */}
        <div
          className="arch-pipeline"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginBottom: "36px",
          }}
        >
          {ARCHITECTURE_STAGES.map((stage: ArchitectureStage) => {
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className="arch-node-btn"
                style={{
                  background: isActive ? "var(--ink-soft)" : "transparent",
                  border: isActive ? "1px solid var(--waste)" : "1px solid var(--rule)",
                  padding: "20px 18px",
                  borderRadius: "var(--radius)",
                  textAlign: "left",
                  cursor: "pointer",
                  color: "inherit",
                  transition: "all 0.2s ease",
                  position: "relative",
                  boxShadow: isActive ? "0 0 16px rgba(255, 74, 52, 0.15)" : "none",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span className="mono" style={{ fontSize: "0.85rem", color: isActive ? "var(--waste)" : "var(--text-light-dim)" }}>
                    {stage.number}
                  </span>
                  {isActive && (
                    <span
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
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 4px", color: "var(--text-light)" }}>
                  {stage.title}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "var(--text-light-dim)", margin: 0, lineHeight: 1.4 }}>
                  {stage.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Terminal & Architecture Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              background: "var(--ink-soft)",
              border: "1px solid var(--rule)",
              borderRadius: "var(--radius)",
              padding: "32px",
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: "36px",
              alignItems: "start",
            }}
            className="arch-detail-grid"
          >
            {/* Left Column: Stage Explanation */}
            <div>
              <div className="mono" style={{ fontSize: "0.78rem", color: "var(--waste)", marginBottom: "8px" }}>
                STAGE {activeStage.number} ARCHITECTURE
              </div>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 16px", color: "var(--text-light)" }}>
                {activeStage.title}
              </h3>
              <p style={{ color: "var(--text-light-dim)", fontSize: "1rem", lineHeight: 1.6, margin: "0 0 24px" }}>
                {activeStage.description}
              </p>

              <div className="mono" style={{ fontSize: "0.8rem", color: "var(--text-light-dim)", marginBottom: "10px" }}>
                KEY NODES &amp; CONCEPTS:
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {activeStage.nodes.map((node) => (
                  <span
                    key={node}
                    className="mono"
                    style={{
                      fontSize: "0.8rem",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--rule)",
                      color: "var(--text-light)",
                      padding: "6px 12px",
                      borderRadius: "var(--radius)",
                    }}
                  >
                    {node}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Code/Terminal Output Metaphor */}
            <div
              style={{
                background: "#080A0C",
                border: "1px solid var(--rule)",
                borderRadius: "var(--radius)",
                padding: "20px 22px",
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "0.82rem",
                color: "var(--text-light-dim)",
              }}
            >
              <div style={{ display: "flex", gap: "6px", marginBottom: "16px", borderBottom: "1px dashed var(--rule)", paddingBottom: "10px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F56", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27C93F", display: "inline-block" }} />
                <span style={{ marginLeft: "auto", fontSize: "0.72rem", opacity: 0.6 }}>system.config.json</span>
              </div>

              <div style={{ lineHeight: 1.7 }}>
                <div>
                  <span style={{ color: "var(--waste)" }}>status:</span> &quot;ACTIVE&quot;
                </div>
                <div>
                  <span style={{ color: "var(--text-light)" }}>phase:</span> &quot;{activeStage.terminalOutput.phase}&quot;
                </div>
                <div>
                  <span style={{ color: "var(--text-light)" }}>focus:</span> &quot;{activeStage.terminalOutput.focus}&quot;
                </div>
                <div style={{ margin: "10px 0" }}>
                  <span style={{ color: "var(--text-light)" }}>connected_stack:</span> [
                  {activeStage.terminalOutput.connectedComponents.map((item, i) => (
                    <div key={i} style={{ paddingLeft: "16px", color: "var(--value)" }}>
                      &quot;{item}&quot;{i < activeStage.terminalOutput.connectedComponents.length - 1 ? "," : ""}
                    </div>
                  ))}
                  ]
                </div>
                <div>
                  <span style={{ color: "var(--waste)" }}>target_outcome:</span> &quot;{activeStage.terminalOutput.outcome}&quot;
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx global>{`
        @media (max-width: 860px) {
          .arch-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
