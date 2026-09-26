"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budgetRange: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function CTA() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "Integrated Engineering + Growth",
    budgetRange: "₹25,000 – ₹50,000",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) {
      errs.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errs.message = "Project description is required.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || status === "submitting") return;

    setStatus("submitting");
    setErrorMessage("");

    const endpoint = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!res.ok) {
          throw new Error(`Server returned status ${res.status}`);
        }
      } else {
        // Fallback simulation when endpoint URL is unconfigured
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setStatus("success");
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage("Unable to send message automatically. Please email hello@farakiq.com directly.");
    }
  };

  return (
    <section id="contact" style={{ borderBottom: "1px solid var(--rule)" }}>
      <div className="wrap final-cta">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: "48px", alignItems: "stretch" }} className="contact-grid">
          {/* Left Column: Heading & Process Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
          >
            <div>
              <div className="badge-tech" style={{ marginBottom: "16px" }}>
                <span className="dot" />
                <span>PROJECT ENQUIRY // START HERE</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.8rem, 2.6vw, 2.4rem)", lineHeight: 1.18, letterSpacing: "-0.02em", margin: "0 0 16px" }}>
                Let&apos;s build what your business needs next.
              </h2>
              <p style={{ color: "var(--text-light-dim)", fontSize: "1.02rem", lineHeight: 1.6, margin: "0 0 24px" }}>
                Whether you need a new digital system, an AI-powered workflow, more qualified leads, or stronger search visibility — tell us what you&apos;re working on and we&apos;ll figure out the right next step.
              </p>

              {/* What Happens Next Process Block */}
              <div className="contact-process" style={{ margin: "24px 0 28px" }}>
                <span className="mono" style={{ fontSize: "0.72rem", color: "var(--text-light-dim)", letterSpacing: "0.05em", fontWeight: 600, display: "block", marginBottom: "12px", textTransform: "uppercase" }}>
                  WHAT HAPPENS NEXT
                </span>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }} className="process-steps">
                  <div style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--card-border)", borderRadius: "var(--radius-md)", padding: "12px 14px", boxShadow: "var(--card-inner-highlight)" }}>
                    <span className="mono" style={{ fontSize: "0.68rem", color: "var(--waste)", fontWeight: 700, display: "block", marginBottom: "4px" }}>01 // REVIEW</span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-light-dim)", lineHeight: 1.35, display: "block" }}>We analyze your goals &amp; scope.</span>
                  </div>
                  <div style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--card-border)", borderRadius: "var(--radius-md)", padding: "12px 14px", boxShadow: "var(--card-inner-highlight)" }}>
                    <span className="mono" style={{ fontSize: "0.68rem", color: "var(--waste)", fontWeight: 700, display: "block", marginBottom: "4px" }}>02 // DIAGNOSE</span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-light-dim)", lineHeight: 1.35, display: "block" }}>We map out the right architecture.</span>
                  </div>
                  <div style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--card-border)", borderRadius: "var(--radius-md)", padding: "12px 14px", boxShadow: "var(--card-inner-highlight)" }}>
                    <span className="mono" style={{ fontSize: "0.68rem", color: "var(--waste)", fontWeight: 700, display: "block", marginBottom: "4px" }}>03 // RESPOND</span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-light-dim)", lineHeight: 1.35, display: "block" }}>We reply with next steps within 24h.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Email Card */}
            <motion.div
              whileHover={{ y: -2, borderColor: "var(--waste)" }}
              transition={{ duration: 0.2 }}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                padding: "16px 20px",
                borderRadius: "var(--radius-md)",
                boxShadow: "var(--shadow-sm), var(--card-inner-highlight)",
                marginTop: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div>
                <div className="mono" style={{ fontSize: "0.72rem", color: "var(--text-light-dim)", letterSpacing: "0.04em", fontWeight: 600, marginBottom: "2px" }}>
                  DIRECT EMAIL ENQUIRY
                </div>
                <a href="mailto:hello@farakiq.com" className="mono" style={{ fontSize: "1.05rem", color: "var(--waste)", textDecoration: "none", fontWeight: 600, wordBreak: "break-all" }}>
                  hello@farakiq.com
                </a>
              </div>
              <span className="mono" style={{ fontSize: "0.72rem", color: "var(--text-light-dim)", background: "rgba(255, 255, 255, 0.03)", padding: "4px 10px", borderRadius: "var(--radius-full)", border: "1px solid var(--card-border)" }}>
                Response time &lt; 24h
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Project Intake Form */}
          <motion.div
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              padding: "clamp(24px, 3.5vw, 32px)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-md), var(--card-inner-highlight)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div style={{ marginBottom: "20px" }}>
              <span className="mono" style={{ fontSize: "0.72rem", color: "var(--waste)", letterSpacing: "0.05em", fontWeight: 600, textTransform: "uppercase" }}>
                START A PROJECT
              </span>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-light)", margin: "4px 0 0", letterSpacing: "-0.01em" }}>
                Tell us what you&apos;re building.
              </h3>
            </div>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ textAlign: "center", padding: "36px 12px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", flex: 1 }}
                >
                  <div className="stamp value" style={{ transform: "none", marginBottom: "20px", fontSize: "0.85rem" }}>
                    SUBMISSION RECEIVED
                  </div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 12px", color: "var(--text-light)", letterSpacing: "-0.01em" }}>
                    Thank you for reaching out!
                  </h3>
                  <p style={{ color: "var(--text-light-dim)", fontSize: "0.95rem", lineHeight: 1.6, margin: "0 0 24px" }}>
                    Your project details have been recorded. We will review your requirements and follow up via email within 24 hours.
                  </p>
                  <button
                    className="btn btn-ghost"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        projectType: "Integrated Engineering + Growth",
                        budgetRange: "₹25,000 – ₹50,000",
                        message: "",
                      });
                    }}
                  >
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                  <div>
                    {/* Row 1: Name & Email */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }} className="form-row-2">
                      <div>
                        <label htmlFor="cta-name" className="mono" style={{ display: "block", fontSize: "0.78rem", color: "var(--text-light-dim)", marginBottom: "6px" }}>
                          Your Name *
                        </label>
                        <input
                          id="cta-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          className="mono"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          style={{
                            width: "100%",
                            background: "rgba(10, 12, 15, 0.85)",
                            border: errors.name ? "1px solid var(--waste)" : "1px solid var(--card-border)",
                            color: "var(--text-light)",
                            padding: "10px 12px",
                            fontSize: "0.9rem",
                            minHeight: "42px",
                            borderRadius: "var(--radius-md)",
                            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.25)",
                          }}
                          placeholder="John Doe"
                        />
                        {errors.name && <span style={{ color: "var(--waste)", fontSize: "0.74rem", marginTop: "4px", display: "block" }}>{errors.name}</span>}
                      </div>

                      <div>
                        <label htmlFor="cta-email" className="mono" style={{ display: "block", fontSize: "0.78rem", color: "var(--text-light-dim)", marginBottom: "6px" }}>
                          Email Address *
                        </label>
                        <input
                          id="cta-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="mono"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{
                            width: "100%",
                            background: "rgba(10, 12, 15, 0.85)",
                            border: errors.email ? "1px solid var(--waste)" : "1px solid var(--card-border)",
                            color: "var(--text-light)",
                            padding: "10px 12px",
                            fontSize: "0.9rem",
                            minHeight: "42px",
                            borderRadius: "var(--radius-md)",
                            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.25)",
                          }}
                          placeholder="john@example.com"
                        />
                        {errors.email && <span style={{ color: "var(--waste)", fontSize: "0.74rem", marginTop: "4px", display: "block" }}>{errors.email}</span>}
                      </div>
                    </div>

                    {/* Row 2: Company & Category */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }} className="form-row-2">
                      <div>
                        <label htmlFor="cta-company" className="mono" style={{ display: "block", fontSize: "0.78rem", color: "var(--text-light-dim)", marginBottom: "6px" }}>
                          Company / Organization
                        </label>
                        <input
                          id="cta-company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          className="mono"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          style={{
                            width: "100%",
                            background: "rgba(10, 12, 15, 0.85)",
                            border: "1px solid var(--card-border)",
                            color: "var(--text-light)",
                            padding: "10px 12px",
                            fontSize: "0.9rem",
                            minHeight: "42px",
                            borderRadius: "var(--radius-md)",
                            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.25)",
                          }}
                          placeholder="Optional"
                        />
                      </div>

                      <div>
                        <label htmlFor="cta-project-type" className="mono" style={{ display: "block", fontSize: "0.78rem", color: "var(--text-light-dim)", marginBottom: "6px" }}>
                          What do you need help with?
                        </label>
                        <select
                          id="cta-project-type"
                          name="projectType"
                          className="mono"
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          style={{
                            width: "100%",
                            background: "rgba(10, 12, 15, 0.85)",
                            border: "1px solid var(--card-border)",
                            color: "var(--text-light)",
                            padding: "10px 12px",
                            fontSize: "0.86rem",
                            minHeight: "42px",
                            borderRadius: "var(--radius-md)",
                            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.25)",
                          }}
                        >
                          <option value="Integrated Engineering + Growth">Integrated Engineering &amp; Growth</option>
                          <option value="Website / Landing Page">Website / Landing Page</option>
                          <option value="Web Application / Custom Platform">Web Application / Custom Platform</option>
                          <option value="AI Agent / Chatbot">AI Agent / Chatbot</option>
                          <option value="Business Automation & Integrations">Business Automation &amp; Integrations</option>
                          <option value="Paid Ads (Google, Meta, LinkedIn)">Paid Ads (Google, Meta, LinkedIn)</option>
                          <option value="Organic Search & Discovery (SEO/AEO)">Organic Search &amp; Discovery (SEO/AEO)</option>
                          <option value="Not sure — I'd like to discuss it">Not sure — I&apos;d like to discuss options</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Project Requirements */}
                    <div style={{ marginBottom: "16px" }}>
                      <label htmlFor="cta-message" className="mono" style={{ display: "block", fontSize: "0.78rem", color: "var(--text-light-dim)", marginBottom: "6px" }}>
                        Project Requirements *
                      </label>
                      <textarea
                        id="cta-message"
                        name="message"
                        className="mono"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{
                          width: "100%",
                          background: "rgba(10, 12, 15, 0.85)",
                          border: errors.message ? "1px solid var(--waste)" : "1px solid var(--card-border)",
                          color: "var(--text-light)",
                          padding: "10px 12px",
                          fontSize: "0.88rem",
                          borderRadius: "var(--radius-md)",
                          boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.25)",
                          resize: "vertical",
                          minHeight: "100px",
                        }}
                        placeholder="Tell us what you're trying to build or solve..."
                      />
                      {errors.message && <span style={{ color: "var(--waste)", fontSize: "0.74rem", marginTop: "4px", display: "block" }}>{errors.message}</span>}
                    </div>
                  </div>

                  <div>
                    {status === "error" && (
                      <div style={{ color: "var(--waste)", fontSize: "0.82rem", marginBottom: "14px" }} className="mono">
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={status === "submitting"}
                      style={{ width: "100%", justifyContent: "center", padding: "12px 20px" }}
                    >
                      {status === "submitting" ? "Sending Project Enquiry..." : "Send Project Enquiry →"}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
          .process-steps {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

