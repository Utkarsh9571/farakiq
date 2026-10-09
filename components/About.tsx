"use client";

import { motion } from "motion/react";
import { SKILLS_DATA } from "@/data/siteData";
import AboutSculpture from "@/components/visuals/AboutSculpture";

export default function About() {
  return (
    <section id="about" style={{ padding: "80px 0" }}>
      <div className="wrap">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left Column: Heading, Core Narrative & Skills */}
          <div className="lg:col-span-7 flex flex-col justify-between" style={{ height: "100%" }}>
            <div>
              <div className="badge-tech" style={{ marginBottom: "16px" }}>
                <span className="dot" />
                <span>ABOUT US // DIRECT TECHNICAL PARTNERSHIP</span>
              </div>

              <h2
                style={{
                  fontSize: "clamp(1.85rem, 3.2vw, 2.6rem)",
                  lineHeight: 1.18,
                  letterSpacing: "-0.02em",
                  margin: "0 0 18px",
                  color: "var(--text-light)",
                  fontWeight: 700,
                }}
              >
                Why choose FARAKIQ as your engineering &amp; growth partner
              </h2>

              <div className="about-body" style={{ color: "var(--text-light-dim)", fontSize: "1.02rem", lineHeight: 1.65 }}>
                <p style={{ margin: "0 0 16px" }}>
                  FARAKIQ provides website development, AI automation, and performance marketing services for founders who want one accountable partner instead of five vendors. Most agencies hand you off to rotating account managers or junior contractors. We work directly with a small roster of founders at a time across custom web platforms, AI workflow automations, high-ROI paid campaigns, and organic search — ensuring your product and growth engine operate as one cohesive system.
                </p>
                <p style={{ margin: "0 0 24px" }}>
                  If an acquisition campaign isn&apos;t converting or an architecture decision has trade-offs, you&apos;ll hear it from us directly — no buried agency slides with arbitrary green arrows or hand-waving.
                </p>
              </div>
            </div>

            {/* Core Capabilities Skills Pills (Locked to bottom) */}
            <div className="skills" style={{ marginTop: "auto", paddingTop: "8px" }}>
              <span
                className="mono"
                style={{
                  fontSize: "0.72rem",
                  color: "var(--waste)",
                  letterSpacing: "0.05em",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                }}
              >
                CORE TECHNICAL &amp; GROWTH STACK
              </span>

              {/* Desktop skills */}
              <div className="hidden sm:flex flex-wrap gap-2.5">
                {SKILLS_DATA.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    className="skill"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    whileHover={{ scale: 1.04, borderColor: "var(--waste)" }}
                    style={{
                      fontSize: "0.82rem",
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid var(--card-border)",
                      padding: "6px 12px",
                      borderRadius: "var(--radius-sm)",
                      boxShadow: "var(--card-inner-highlight)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Mobile concise skills */}
              <div className="flex sm:hidden flex-wrap gap-2">
                {SKILLS_DATA.slice(0, 6).map((skill, idx) => (
                  <motion.span
                    key={skill}
                    className="skill"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    style={{
                      fontSize: "0.78rem",
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid var(--card-border)",
                      padding: "5px 10px",
                      borderRadius: "var(--radius-sm)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
                {SKILLS_DATA.length > 6 && (
                  <span className="skill mono" style={{ fontSize: "0.78rem", color: "var(--waste)", border: "1px solid rgba(255, 74, 52, 0.3)", padding: "5px 10px", borderRadius: "var(--radius-sm)" }}>
                    +{SKILLS_DATA.length - 6} more
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Pure 3D Editorial Sculpture (Equal Height, No Fake UI) */}
          <div className="lg:col-span-5 flex flex-col items-stretch w-full self-stretch" style={{ height: "100%" }}>
            <AboutSculpture />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
