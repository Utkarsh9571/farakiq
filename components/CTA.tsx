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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "56px", alignItems: "start" }} className="contact-grid">
          {/* Left Column: Heading & Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="badge-tech">
              <span className="dot" />
              <span>PROJECT ENQUIRY</span>
            </div>
            <h2>Let&apos;s build and scale something that grows your business.</h2>
            <p style={{ color: "var(--text-light-dim)", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "28px" }}>
              Whether you need a custom web application, AI automation, high-converting ad campaigns, or organic search discovery — fill out the form and our partners will respond within 24 hours.
            </p>
            <motion.div
              whileHover={{ y: -3, borderColor: "var(--waste)" }}
              transition={{ duration: 0.2 }}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                padding: "clamp(20px, 3vw, 24px)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-sm), var(--card-inner-highlight)",
              }}
            >
              <div className="mono" style={{ fontSize: "0.76rem", color: "var(--text-light-dim)", marginBottom: "6px", letterSpacing: "0.04em", fontWeight: 600 }}>
                DIRECT CONTACT
              </div>
              <a href="mailto:hello@farakiq.com" className="mono" style={{ fontSize: "1.1rem", color: "var(--waste)", textDecoration: "none", fontWeight: 600, wordBreak: "break-all" }}>
                hello@farakiq.com
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Lead Form */}
          <motion.div
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              padding: "clamp(24px, 4vw, 36px)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-md), var(--card-inner-highlight)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ textAlign: "center", padding: "36px 12px" }}
                >
                  <div className="stamp value" style={{ transform: "none", marginBottom: "20px", fontSize: "0.85rem" }}>
                    SUBMISSION RECEIVED
                  </div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 12px", color: "var(--text-light)", letterSpacing: "-0.01em" }}>
                    Thank you for reaching out!
                  </h3>
                  <p style={{ color: "var(--text-light-dim)", fontSize: "0.95rem", lineHeight: 1.6, margin: "0 0 24px" }}>
                    Your project details have been recorded. We will review your requirements and follow up via email shortly.
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
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="form-row-2">
                    <div>
                      <label className="mono" style={{ display: "block", fontSize: "0.8rem", color: "var(--text-light-dim)", marginBottom: "6px" }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        className="mono"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: "100%",
                          background: "rgba(10, 12, 15, 0.85)",
                          border: errors.name ? "1px solid var(--waste)" : "1px solid var(--card-border)",
                          color: "var(--text-light)",
                          padding: "12px 14px",
                          fontSize: "0.95rem",
                          minHeight: "44px",
                          borderRadius: "var(--radius-md)",
                          boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.25)",
                        }}
                        placeholder="John Doe"
                      />
                      {errors.name && <span style={{ color: "var(--waste)", fontSize: "0.75rem", marginTop: "4px", display: "block" }}>{errors.name}</span>}
                    </div>

                    <div>
                      <label className="mono" style={{ display: "block", fontSize: "0.8rem", color: "var(--text-light-dim)", marginBottom: "6px" }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="mono"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: "100%",
                          background: "rgba(10, 12, 15, 0.85)",
                          border: errors.email ? "1px solid var(--waste)" : "1px solid var(--card-border)",
                          color: "var(--text-light)",
                          padding: "12px 14px",
                          fontSize: "0.95rem",
                          minHeight: "44px",
                          borderRadius: "var(--radius-md)",
                          boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.25)",
                        }}
                        placeholder="john@example.com"
                      />
                      {errors.email && <span style={{ color: "var(--waste)", fontSize: "0.75rem", marginTop: "4px", display: "block" }}>{errors.email}</span>}
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="form-row-2">
                    <div>
                      <label className="mono" style={{ display: "block", fontSize: "0.8rem", color: "var(--text-light-dim)", marginBottom: "6px" }}>
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        className="mono"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{
                          width: "100%",
                          background: "rgba(10, 12, 15, 0.85)",
                          border: "1px solid var(--card-border)",
                          color: "var(--text-light)",
                          padding: "12px 14px",
                          fontSize: "0.95rem",
                          minHeight: "44px",
                          borderRadius: "var(--radius-md)",
                          boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.25)",
                        }}
                        placeholder="Optional"
                      />
                    </div>

                    <div>
                      <label className="mono" style={{ display: "block", fontSize: "0.8rem", color: "var(--text-light-dim)", marginBottom: "6px" }}>
                        Project Category
                      </label>
                      <select
                        className="mono"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        style={{
                          width: "100%",
                          background: "rgba(10, 12, 15, 0.85)",
                          border: "1px solid var(--card-border)",
                          color: "var(--text-light)",
                          padding: "12px 14px",
                          fontSize: "0.95rem",
                          minHeight: "44px",
                          borderRadius: "var(--radius-md)",
                          boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        <option value="Integrated Engineering + Growth">Integrated Engineering + Growth</option>
                        <option value="Websites & Custom Web Apps">Websites &amp; Custom Web Apps</option>
                        <option value="Paid Ads (Google, Meta, LinkedIn)">Paid Ads (Google, Meta, LinkedIn)</option>
                        <option value="Organic Search & Discovery (SEO/AEO)">Organic Search &amp; Discovery (SEO/AEO)</option>
                        <option value="AI Systems & Workflow Automation">AI Systems &amp; Workflow Automation</option>
                        <option value="Other Project Scope">Other Project Scope</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: "16px" }}>
                    <label className="mono" style={{ display: "block", fontSize: "0.8rem", color: "var(--text-light-dim)", marginBottom: "6px" }}>
                      Project Requirements *
                    </label>
                    <textarea
                      className="mono"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: "100%",
                        background: "rgba(10, 12, 15, 0.85)",
                        border: errors.message ? "1px solid var(--waste)" : "1px solid var(--card-border)",
                        color: "var(--text-light)",
                        padding: "12px 14px",
                        fontSize: "0.95rem",
                        borderRadius: "var(--radius-md)",
                        boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.25)",
                        resize: "vertical",
                      }}
                      placeholder="Briefly describe your project requirements, target audience, or growth goals..."
                    />
                    {errors.message && <span style={{ color: "var(--waste)", fontSize: "0.75rem", marginTop: "4px", display: "block" }}>{errors.message}</span>}
                  </div>

                  {status === "error" && (
                    <div style={{ color: "var(--waste)", fontSize: "0.82rem", marginBottom: "16px" }} className="mono">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={status === "submitting"}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    {status === "submitting" ? "Submitting Enquiry..." : "Submit Project Enquiry"}
                  </button>
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
        }
      `}</style>
    </section>
  );
}
