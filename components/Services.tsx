"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES_DATA, ServiceItem, ServiceCategory } from "@/data/siteData";

const SERVICE_ROUTE_MAP: Record<string, { href: string; label: string }> = {
  "landing-pages": { href: "/services/web-development", label: "Landing Pages" },
  "business-websites": { href: "/services/web-development", label: "Websites" },
  "web-apps": { href: "/services/web-development", label: "Web Apps" },
  "ai-agents": { href: "/services/n8n-automation", label: "AI Agents" },
  "business-automation": { href: "/services/n8n-automation", label: "Automation" },
  "integrations": { href: "/services/n8n-automation", label: "Integrations" },
  "internal-tools": { href: "/services/web-development", label: "Internal Tools" },
  "ppc-google": { href: "/services/google-ads", label: "Google Ads" },
  "meta-ads": { href: "/services/meta-ads", label: "Meta Ads" },
  "seo": { href: "/services/seo", label: "SEO / AEO" },
};

function formatINR(num: number): string {
  return "₹" + Math.round(num).toLocaleString("en-IN");
}

export default function Services() {
  const [activeTabId, setActiveTabId] = useState<string>("all");
  const [openGroups, setOpenGroups] = useState<Record<number, boolean>>({});
  const [selectedServices, setSelectedServices] = useState<Record<string, ServiceItem>>({});

  const filteredCategories: ServiceCategory[] = SERVICES_DATA.filter((cat) => {
    if (activeTabId === "all") return true;
    return cat.id === activeTabId;
  });

  const toggleGroup = (index: number) => {
    setOpenGroups((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleService = (item: ServiceItem) => {
    setSelectedServices((prev) => {
      const next = { ...prev };
      if (next[item.id]) {
        delete next[item.id];
      } else {
        next[item.id] = item;
      }
      return next;
    });
  };

  const selectedList = Object.values(selectedServices);
  const projectItems = selectedList.filter((item) => item.billingType === "project");
  const monthlyItems = selectedList.filter((item) => item.billingType === "monthly");

  const projectMinTotal = projectItems.reduce((sum, item) => sum + (item.price || 0), 0);
  const monthlyTotal = monthlyItems.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <section id="services">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="badge-tech">
            <span className="dot" />
            <span>MULTIDISCIPLINARY SERVICE CAPABILITIES</span>
          </div>
          <h2>What FARAKIQ Actually Builds &amp; Grows</h2>
          <p>
            Three interconnected growth pillars: Web &amp; AI Engineering, Performance Advertising, and Organic Search Optimization. Select what you need — the scope ledger separates one-time builds from monthly retainers.
          </p>
        </motion.div>

        {/* Service Vertical Tabs */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "32px", flexWrap: "wrap" }}>
          {[
            { id: "all", label: "All Capability Pillars" },
            { id: "tech-dev", label: "Development & AI Systems" },
            { id: "paid-ads", label: "Paid Ads & Performance" },
            { id: "organic-growth", label: "Organic Search (SEO/AEO)" },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              className={`btn ${activeTabId === tab.id ? "btn-primary" : "btn-ghost"}`}
              style={{ fontSize: "0.85rem", padding: "8px 16px" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Ledger Category Accordions */}
        <div className="ledger">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, catIdx) => {
              const isOpen = !!openGroups[catIdx];
              return (
                <motion.div
                  key={cat.id}
                  layout
                  className={`ledger-group ${isOpen ? "open" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: catIdx * 0.08, ease: "easeOut" }}
                >
                  <div style={{ marginBottom: "10px" }}>
                    <span className="mono" style={{ fontSize: "0.72rem", color: "var(--waste)", letterSpacing: "0.04em", fontWeight: 600 }}>
                      {cat.badge}
                    </span>
                  </div>

                  <button
                    className="ledger-toggle"
                    aria-expanded={isOpen}
                    onClick={() => toggleGroup(catIdx)}
                  >
                    <h3>{cat.title}</h3>
                    <span className="plus mono">+</span>
                  </button>

                  <ul className="pick-list">
                    {cat.items.map((item) => {
                      const isSelected = !!selectedServices[item.id];
                      const routeInfo = SERVICE_ROUTE_MAP[item.id];
                      return (
                        <li key={item.id} style={{ display: "flex", gap: "8px", alignItems: "flex-start", minWidth: 0, padding: "8px 0" }}>
                          <button
                            className={`pick-item ${isSelected ? "selected" : ""}`}
                            onClick={() => toggleService(item)}
                            style={{
                              flex: 1,
                              minWidth: 0,
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "10px",
                              padding: "4px 2px",
                              textAlign: "left",
                              background: "none",
                              border: "none",
                            }}
                          >
                            <span className="pick-box" style={{ marginTop: "4px" }}></span>
                            <span className="pick-info" style={{ flex: 1, minWidth: 0 }}>
                              <span className="pick-name" style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", fontSize: "0.9rem", fontWeight: 600, color: isSelected ? "var(--text-light)" : "var(--text-light)" }}>
                                {item.name}
                                {item.tag && <span className="tag" style={{ fontSize: "0.68rem" }}>{item.tag}</span>}
                              </span>
                              {item.shortDesc && (
                                <span
                                  className="pick-desc"
                                  style={{
                                    display: "block",
                                    fontSize: "0.76rem",
                                    color: "var(--text-light-dim)",
                                    lineHeight: 1.35,
                                    marginTop: "3px",
                                  }}
                                >
                                  {item.shortDesc}
                                </span>
                              )}
                            </span>
                            <span className="pick-pricing-col" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", flexShrink: 0, marginLeft: "6px" }}>
                              <span className="pick-price mono" style={{ fontSize: "0.82rem", fontWeight: 600, color: isSelected ? "var(--value)" : "var(--text-light)" }}>
                                {item.priceDisplay}
                              </span>
                              <span
                                className="mono"
                                style={{
                                  fontSize: "0.66rem",
                                  color: item.billingType === "project" ? "var(--value)" : "var(--accent-cyan)",
                                  letterSpacing: "0.02em",
                                  marginTop: "2px",
                                }}
                              >
                                {item.billingType === "project" ? "One-time" : "Monthly"}
                              </span>
                            </span>
                          </button>
                          {routeInfo && (
                            <Link
                              href={routeInfo.href}
                              className="btn btn-ghost"
                              title={`Explore dedicated ${item.name} page`}
                              style={{
                                fontSize: "0.72rem",
                                padding: "6px 8px",
                                minHeight: "34px",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderColor: "var(--rule)",
                                textDecoration: "none",
                                flexShrink: 0,
                                marginTop: "2px",
                              }}
                            >
                              <span className="mono" style={{ color: "var(--waste)" }}>Details ↗</span>
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className="ledger-detail"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <p>{cat.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Custom Bundle Scope Calculator */}
        <motion.div
          className="bundle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="bundle-list">
            <div className="bundle-title">Your Custom FARAKIQ Scope</div>
            {selectedList.length === 0 ? (
              <p className="bundle-empty">Nothing selected yet — tap any service item above to calculate a custom engagement estimate.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {projectItems.length > 0 && (
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--value)" }} />
                      <span className="mono" style={{ fontSize: "0.72rem", color: "var(--value)", letterSpacing: "0.04em", fontWeight: 600 }}>
                        ONE-TIME PROJECT BUILDS ({projectItems.length})
                      </span>
                    </div>
                    <ul className="bundle-items">
                      {projectItems.map((item) => (
                        <li key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                          <span style={{ fontSize: "0.85rem" }}>{item.name}</span>
                          <span className="mono" style={{ color: "var(--value)", flexShrink: 0, fontSize: "0.82rem" }}>{item.priceDisplay}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {monthlyItems.length > 0 && (
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent-cyan)" }} />
                      <span className="mono" style={{ fontSize: "0.72rem", color: "var(--accent-cyan)", letterSpacing: "0.04em", fontWeight: 600 }}>
                        MONTHLY GROWTH RETAINERS ({monthlyItems.length})
                      </span>
                    </div>
                    <ul className="bundle-items">
                      {monthlyItems.map((item) => (
                        <li key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                          <span style={{ fontSize: "0.85rem" }}>{item.name}</span>
                          <span className="mono" style={{ color: "var(--accent-cyan)", flexShrink: 0, fontSize: "0.82rem" }}>{item.priceDisplay}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="receipt bundle-receipt">
            <div className="receipt-title">FARAKIQ SCOPE NO. 006</div>
            <div className="receipt-heading">Estimated engagement scope</div>
            <div className="receipt-line">
              <span className="label">Selected capability items</span>
              <span className="val mono">{selectedList.length}</span>
            </div>
            <div className="receipt-line">
              <span className="label">One-time project estimate</span>
              <span className="val mono" style={{ color: projectItems.length ? "var(--value)" : "var(--text-light-dim)", fontWeight: 600 }}>
                {projectItems.length === 0
                  ? "None selected"
                  : projectMinTotal > 0
                  ? `From ${formatINR(projectMinTotal)}`
                  : "Custom quote"}
              </span>
            </div>
            <div className="receipt-line">
              <span className="label">Estimated monthly retainer</span>
              <span className="val mono" style={{ color: monthlyItems.length ? "var(--accent-cyan)" : "var(--text-light-dim)", fontWeight: 600 }}>
                {monthlyItems.length === 0 ? "None selected" : `${formatINR(monthlyTotal)} / mo`}
              </span>
            </div>
            <div className="receipt-line" style={{ borderTop: "1px dashed var(--rule-paper)", paddingTop: "10px", marginTop: "8px" }}>
              <span className="label" style={{ fontSize: "0.74rem", color: "var(--text-light-dim)", fontStyle: "italic", lineHeight: 1.35 }}>
                * Development builds are scoped once per deliverable. Ongoing marketing, ads &amp; SEO are billed monthly.
              </span>
            </div>
            <a href="#contact" className="btn btn-primary bundle-cta">
              Discuss your custom scope
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
