"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  initialService?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budgetRange: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  initialCategory = "Integrated Engineering + Growth",
  initialService = "",
}: QuoteModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: initialCategory,
    budgetRange: "₹25,000 – ₹50,000",
    message: initialService ? `I'd like to request a quote for: ${initialService}` : "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [prevOpenState, setPrevOpenState] = useState<{ isOpen: boolean; initialCategory: string; initialService: string }>({
    isOpen: false,
    initialCategory,
    initialService,
  });

  if (
    isOpen &&
    (!prevOpenState.isOpen ||
      prevOpenState.initialCategory !== initialCategory ||
      prevOpenState.initialService !== initialService)
  ) {
    setPrevOpenState({ isOpen: true, initialCategory, initialService });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: initialCategory || "Integrated Engineering + Growth",
      budgetRange: "₹25,000 – ₹50,000",
      message: initialService ? `I'd like to request a quote for: ${initialService}` : "",
    });
    setErrors({});
    setStatus("idle");
  } else if (!isOpen && prevOpenState.isOpen) {
    setPrevOpenState({ isOpen: false, initialCategory, initialService });
  }

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

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
    if (!formData.phone.trim()) {
      errs.phone = "Mobile number is required.";
    } else {
      const digits = formData.phone.replace(/\D/g, "");
      if (digits.length < 10 || digits.length > 15) {
        errs.phone = "Please enter a valid mobile number (min. 10 digits).";
      }
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

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      mobile: formData.phone,
      company: formData.company,
      budget: formData.budgetRange,
      budgetRange: formData.budgetRange,
      service: formData.projectType,
      projectType: formData.projectType,
      message: formData.message,
    };

    try {
      if (endpoint) {
        await fetch(endpoint, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(payload),
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setStatus("success");
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage("Unable to send message automatically. Please email sales@farakiq.com directly.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            background: "rgba(5, 7, 10, 0.82)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "600px",
              maxHeight: "90vh",
              overflowY: "auto",
              background: "var(--card-bg-elevated)",
              border: "1px solid var(--card-border)",
              borderRadius: "var(--radius-lg)",
              padding: "clamp(24px, 4vw, 36px)",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.6), var(--card-inner-highlight)",
              position: "relative",
            }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close quote modal"
              style={{
                position: "absolute",
                top: "18px",
                right: "18px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--card-border)",
                color: "var(--text-light-dim)",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "1rem",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-light)";
                e.currentTarget.style.borderColor = "var(--waste)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-light-dim)";
                e.currentTarget.style.borderColor = "var(--card-border)";
              }}
            >
              ✕
            </button>

            {/* Header */}
            <div style={{ marginBottom: "20px", paddingRight: "40px" }}>
              <div className="badge-tech" style={{ marginBottom: "12px" }}>
                <span className="dot" />
                <span>GET A QUOTE</span>
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, margin: "0 0 6px", color: "var(--text-light)", letterSpacing: "-0.01em" }}>
                {initialService ? `Quote for ${initialService}` : "Start a Project Enquiry"}
              </h3>
              <p style={{ color: "var(--text-light-dim)", fontSize: "0.88rem", margin: 0, lineHeight: 1.5 }}>
                Tell us about your requirements and our team will follow up within 24 hours with a custom proposal.
              </p>
            </div>

            {/* Form */}
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ textAlign: "center", padding: "28px 12px" }}
                >
                  <div className="stamp value" style={{ transform: "none", marginBottom: "16px", fontSize: "0.85rem" }}>
                    QUOTE ENQUIRY SENT
                  </div>
                  <h4 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "0 0 10px", color: "var(--text-light)" }}>
                    Thank you! We received your request.
                  </h4>
                  <p style={{ color: "var(--text-light-dim)", fontSize: "0.9rem", lineHeight: 1.5, margin: "0 0 20px" }}>
                    We will analyze your project details and follow up via email shortly.
                  </p>
                  <button type="button" className="btn btn-ghost" onClick={onClose}>
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }} className="form-row-2">
                    <div>
                      <label htmlFor="modal-name" className="mono" style={{ display: "block", fontSize: "0.78rem", color: "var(--text-light-dim)", marginBottom: "6px" }}>
                        Your Name *
                      </label>
                      <input
                        id="modal-name"
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
                      <label htmlFor="modal-email" className="mono" style={{ display: "block", fontSize: "0.78rem", color: "var(--text-light-dim)", marginBottom: "6px" }}>
                        Email Address *
                      </label>
                      <input
                        id="modal-email"
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

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }} className="form-row-2">
                    <div>
                      <label htmlFor="modal-phone" className="mono" style={{ display: "block", fontSize: "0.78rem", color: "var(--text-light-dim)", marginBottom: "6px" }}>
                        Mobile Number *
                      </label>
                      <input
                        id="modal-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="mono"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: "100%",
                          background: "rgba(10, 12, 15, 0.85)",
                          border: errors.phone ? "1px solid var(--waste)" : "1px solid var(--card-border)",
                          color: "var(--text-light)",
                          padding: "10px 12px",
                          fontSize: "0.9rem",
                          minHeight: "42px",
                          borderRadius: "var(--radius-md)",
                          boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.25)",
                        }}
                        placeholder="+91 79820 79125"
                      />
                      {errors.phone && <span style={{ color: "var(--waste)", fontSize: "0.74rem", marginTop: "4px", display: "block" }}>{errors.phone}</span>}
                    </div>

                    <div>
                      <label htmlFor="modal-company" className="mono" style={{ display: "block", fontSize: "0.78rem", color: "var(--text-light-dim)", marginBottom: "6px" }}>
                        Company / Organization
                      </label>
                      <input
                        id="modal-company"
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
                  </div>

                  <div style={{ marginBottom: "14px" }}>
                    <label htmlFor="modal-project-type" className="mono" style={{ display: "block", fontSize: "0.78rem", color: "var(--text-light-dim)", marginBottom: "6px" }}>
                      Project Category
                    </label>
                    <select
                      id="modal-project-type"
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

                  <div style={{ marginBottom: "18px" }}>
                    <label htmlFor="modal-message" className="mono" style={{ display: "block", fontSize: "0.78rem", color: "var(--text-light-dim)", marginBottom: "6px" }}>
                      Project Requirements &amp; Goals *
                    </label>
                    <textarea
                      id="modal-message"
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
                      placeholder="Tell us about your project requirements..."
                    />
                    {errors.message && <span style={{ color: "var(--waste)", fontSize: "0.74rem", marginTop: "4px", display: "block" }}>{errors.message}</span>}
                  </div>

                  {status === "error" && (
                    <div style={{ color: "var(--waste)", fontSize: "0.82rem", marginBottom: "14px" }} className="mono">
                      {errorMessage}
                    </div>
                  )}

                  <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
                    <button
                      type="button"
                      className="btn btn-ghost"
                      onClick={onClose}
                      style={{ minHeight: "44px" }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={status === "submitting"}
                      style={{ minHeight: "44px", padding: "10px 24px" }}
                    >
                      {status === "submitting" ? "Submitting Quote..." : "Submit Quote Enquiry →"}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
