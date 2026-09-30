"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ARCHITECTURE_STAGES, ArchitectureStage } from "@/data/architectureData";
import ArchitectureVisual from "@/components/visuals/ArchitectureVisual";
import StageVisual from "@/components/visuals/StageVisual";

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

        {/* Architecture Interactive Code-Based System Visualization */}
        <ArchitectureVisual
          activeStageId={activeStageId}
          onSelectStage={(stageId) => {
            setActiveStageId(stageId);
          }}
        />

        {/* 4-Stage Matrix Pipeline Selector */}
        <div className="relative mb-9">
          <motion.div
            className="arch-pipeline relative z-10"
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
                  }}
                  className={`arch-node-btn ${isActive ? "active" : ""}`}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <span className="mono" style={{ fontSize: "0.82rem", color: isActive ? "var(--waste)" : "var(--text-light-dim)", fontWeight: 600 }}>
                      {stage.number}
                    </span>
                    {isActive ? (
                      <motion.span
                        layoutId="active-stage-indicator"
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: "var(--waste)",
                          boxShadow: "0 0 10px var(--waste)",
                        }}
                      />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-[#1E232E]" />
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
        </div>

        {/* Dynamic Process Detail Panel With Stage Visual Image & Deliverables */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "var(--radius-lg)",
              padding: "clamp(20px, 3.5vw, 36px)",
              boxShadow: "var(--shadow-md), var(--card-inner-highlight)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Stage Narrative, Deliverables & Outcome */}
              <div className="lg:col-span-6 flex flex-col justify-between" style={{ height: "100%" }}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="mono" style={{ fontSize: "0.76rem", color: "var(--waste)", letterSpacing: "0.06em", fontWeight: 600 }}>
                      STAGE {activeStage.number} {"//"} {activeStage.deliverableMatrix.badge}
                    </div>
                  </div>

                  <h3 style={{ fontSize: "clamp(1.35rem, 3vw, 1.85rem)", fontWeight: 700, margin: "0 0 12px", color: "var(--text-light)", letterSpacing: "-0.02em" }}>
                    {activeStage.title}
                  </h3>

                  <p style={{ color: "var(--text-light-dim)", fontSize: "0.95rem", lineHeight: 1.6, margin: "0 0 20px" }}>
                    {activeStage.description}
                  </p>

                  {/* Key Focus Tags */}
                  <div className="mono" style={{ fontSize: "0.72rem", color: "var(--text-light-dim)", marginBottom: "8px", letterSpacing: "0.04em", fontWeight: 600 }}>
                    KEY FOCUS DISCIPLINES:
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "22px" }}>
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

                  {/* Dual Deliverables Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                    {/* Track A: Systems */}
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid var(--card-border)",
                        borderRadius: "var(--radius-md)",
                        padding: "12px",
                      }}
                    >
                      <div className="mono" style={{ fontSize: "0.72rem", color: "var(--waste)", fontWeight: 700, marginBottom: "8px" }}>
                        [01] {activeStage.deliverableMatrix.engineeringTrack.label}
                      </div>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                        {activeStage.deliverableMatrix.engineeringTrack.items.map((item, idx) => (
                          <li key={idx} style={{ fontSize: "0.78rem", color: "var(--text-light-dim)", lineHeight: 1.35, display: "flex", alignItems: "flex-start", gap: "6px" }}>
                            <span style={{ color: "var(--value)", fontWeight: "bold" }}>✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Track B: Growth */}
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid var(--card-border)",
                        borderRadius: "var(--radius-md)",
                        padding: "12px",
                      }}
                    >
                      <div className="mono" style={{ fontSize: "0.72rem", color: "var(--accent-cyan)", fontWeight: 700, marginBottom: "8px" }}>
                        [02] {activeStage.deliverableMatrix.growthTrack.label}
                      </div>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                        {activeStage.deliverableMatrix.growthTrack.items.map((item, idx) => (
                          <li key={idx} style={{ fontSize: "0.78rem", color: "var(--text-light-dim)", lineHeight: 1.35, display: "flex", alignItems: "flex-start", gap: "6px" }}>
                            <span style={{ color: "var(--accent-cyan)", fontWeight: "bold" }}>✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Target Outcome Milestone Banner */}
                <div
                  style={{
                    background: "rgba(31, 111, 84, 0.12)",
                    border: "1px solid rgba(31, 111, 84, 0.4)",
                    borderRadius: "var(--radius)",
                    padding: "12px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "8px",
                  }}
                >
                  <span className="stamp value" style={{ transform: "none", fontSize: "0.65rem", padding: "2px 6px", flexShrink: 0 }}>
                    OUTCOME
                  </span>
                  <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--text-light)", lineHeight: 1.4, fontWeight: 500 }}>
                    {activeStage.deliverableMatrix.targetOutcome}
                  </p>
                </div>
              </div>

              {/* Right Column: Dedicated Stage Visual Viewport */}
              <div className="lg:col-span-6 flex flex-col items-stretch justify-center w-full" style={{ height: "100%" }}>
                <StageVisual stageId={activeStage.id} />
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
        }
        .arch-node-btn {
          background: #0B0E14;
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
        .arch-node-btn:hover {
          background: #10141D;
          border-color: #2D3748;
        }
        .arch-node-btn.active {
          background: #131722;
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
