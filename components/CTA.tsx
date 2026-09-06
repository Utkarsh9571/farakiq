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
    projectType: "Full-Stack Web App",
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
      setErrorMessage("Unable to send message automatically. Please email hello@darvin.co directly.");
    }
  };

  return (
    <section id="contact" style={{ borderBottom: "1px solid var(--rule)" }}>
      <div className="wrap final-cta">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "56px", alignItems: "start" }} className="contact-grid">
          {/* Left Column: Heading & Positioning */}
          <div>
            <div className="badge-tech">
              <span className="dot" />
              <span>PROJECT ENQUIRY</span>
            </div>
            <h2>Let&apos;s build something that scales your business.</h2>
            <p style={{ color: "var(--text-light-dim)", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "28px" }}>
              Whether you need a custom web application, AI integrations, or n8n workflow automations — fill out the form and I will respond within 24 hours.
            </p>
            <div style={{ background: "var(--ink-soft)", border: "1px solid var(--rule)", padding: "20px", borderRadius: "var(--radius)" }}>
              <div className="mono" style={{ fontSize: "0.8rem", color: "var(--text-light-dim)", marginBottom: "6px" }}>
                DIRECT CONTACT
              </div>
              <a href="mailto:hello@darvin.co" className="mono" style={{ fontSize: "1.1rem", color: "var(--waste)", textDecoration: "none", fontWeight: 600 }}>
                hello@darvin.co
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <motion.div
            style={{
              background: "var(--ink-soft)",
              border: "1px solid var(--rule)",
              padding: "32px",
              borderRadius: "var(--radius)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
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
                  <div className="stamp value" style={{ transform: "none", marginBottom: "20px", fontSize: "0.9rem" }}>
                    SUBMISSION RECEIVED
                  </div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 12px", color: "var(--text-light)" }}>
                    Thank you for reaching out!
                  </h3>
                  <p style={{ color: "var(--text-light-dim)", fontSize: "0.95rem", lineHeight: 1.5, margin: "0 0 24px" }}>
                    Your project details have been recorded. I will review your requirements and follow up via email shortly.
                  </p>
                  <button
                    className="btn btn-ghost"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        projectType: "Full-Stack Web App",
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
                          background: "var(--ink)",
                          border: errors.name ? "1px solid var(--waste)" : "1px solid var(--rule)",
                          color: "var(--text-light)",
                          padding: "10px 12px",
                          fontSize: "0.9rem",
                          borderRadius: "var(--radius)",
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
                          background: "var(--ink)",
                          border: errors.email ? "1px solid var(--waste)" : "1px solid var(--rule)",
                          color: "var(--text-light)",
                          padding: "10px 12px",
                          fontSize: "0.9rem",
                          borderRadius: "var(--radius)",
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
                          background: "var(--ink)",
                          border: "1px solid var(--rule)",
                          color: "var(--text-light)",
                          padding: "10px 12px",
                          fontSize: "0.9rem",
                          borderRadius: "var(--radius)",
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
                          background: "var(--ink)",
                          border: "1px solid var(--rule)",
                          color: "var(--text-light)",
                          padding: "10px 12px",
                          fontSize: "0.9rem",
                          borderRadius: "var(--radius)",
                        }}
                      >
                        <option value="Full-Stack Web App">Full-Stack Web App</option>
                        <option value="AI Integration & Chatbot">AI Integration &amp; Chatbot</option>
                        <option value="n8n Workflow Automation">n8n Workflow Automation</option>
                        <option value="API & Custom Systems">API &amp; Custom Systems</option>
                        <option value="Other Technical Service">Other Technical Service</option>
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
                        background: "var(--ink)",
                        border: errors.message ? "1px solid var(--waste)" : "1px solid var(--rule)",
                        color: "var(--text-light)",
                        padding: "10px 12px",
                        fontSize: "0.9rem",
                        borderRadius: "var(--radius)",
                        resize: "vertical",
                      }}
                      placeholder="Briefly describe what you would like to build..."
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
