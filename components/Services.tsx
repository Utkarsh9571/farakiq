"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES_DATA, ServiceItem, ServiceCategory } from "@/data/siteData";

const SERVICE_ROUTE_MAP: Record<string, { href: string; label: string }> = {
  "web-dev": { href: "/services/web-development", label: "Web Dev" },
  "custom-web": { href: "/services/web-development", label: "Web Apps" },
  "n8n-automation": { href: "/services/n8n-automation", label: "n8n" },
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
  const monthlyTotal = selectedList.reduce((sum, item) => sum + item.price, 0);
  const onetimeItems = selectedList.filter((item) => item.price === 0);

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
          <h2>What FARAKIQ Actually Does</h2>
          <p>
            Three interconnected pillars of growth: Custom Web &amp; AI Development, Performance Advertising, and Organic Search Optimization. Select what you need — the scope ledger below totals it up.
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
                      const priceDisplay =
                        item.price > 0 ? formatINR(item.price) : item.onetime || "One-time";
                      const routeInfo = SERVICE_ROUTE_MAP[item.id];
                      return (
                        <li key={item.id} style={{ display: "flex", gap: "8px", alignItems: "stretch" }}>
                          <button
                            className={`pick-item ${isSelected ? "selected" : ""}`}
                            onClick={() => toggleService(item)}
                            style={{ flex: 1 }}
                          >
                            <span className="pick-box"></span>
                            <span className="pick-name">
                              {item.name}
                              {item.tag && <span className="tag"> {item.tag}</span>}
                            </span>
                            <span className="pick-price mono">{priceDisplay}</span>
                          </button>
                          {routeInfo && (
                            <Link
                              href={routeInfo.href}
                              className="btn btn-ghost"
                              title={`Explore dedicated ${item.name} page`}
                              style={{
                                fontSize: "0.75rem",
                                padding: "6px 10px",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderColor: "var(--rule)",
                                textDecoration: "none",
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
              <ul className="bundle-items">
                {selectedList.map((item) => (
                  <li key={item.id}>
                    {item.name} — {item.price > 0 ? formatINR(item.price) : item.onetime || "One-time"}
                  </li>
                ))}
              </ul>
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
              <span className="label">Estimated monthly retainer</span>
              <span className="val mono">{formatINR(monthlyTotal)}</span>
            </div>
            <div className="receipt-line">
              <span className="label">One-time builds</span>
              <span className="val mono">
                {onetimeItems.length
                  ? onetimeItems.map((i) => i.name).join(", ")
                  : "None selected"}
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
