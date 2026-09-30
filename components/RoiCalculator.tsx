"use client";

import { useState } from "react";
import { motion } from "motion/react";
import QuoteModal from "./QuoteModal";

function formatINR(num: number): string {
  return "₹" + Math.round(num).toLocaleString("en-IN");
}

export default function RoiCalculator() {
  const [spend, setSpend] = useState<number>(100000);
  const [leads, setLeads] = useState<number>(50);
  const [closeRate, setCloseRate] = useState<number>(20);
  const [dealValue, setDealValue] = useState<number>(25000);
  const [expectedLift, setExpectedLift] = useState<number>(30);

  const [quoteModalState, setQuoteModalState] = useState<{
    isOpen: boolean;
    serviceName: string;
    category: string;
  }>({
    isOpen: false,
    serviceName: "",
    category: "",
  });

  // Preserve original calculation logic exactly
  const safeSpend = Math.max(0, spend || 0);
  const safeLeads = Math.max(0.0001, leads || 0);
  const safeClose = closeRate;
  const safeDeal = Math.max(0, dealValue || 0);
  const safeLift = expectedLift;

  // Current baseline calculation
  const dealsNow = safeLeads * (safeClose / 100);
  const revNow = dealsNow * safeDeal;
  const cplNow = safeSpend / safeLeads;
  const roiNow = safeSpend > 0 ? ((revNow - safeSpend) / safeSpend) * 100 : 0;

  // Projected estimate calculation
  const leadsAfter = safeLeads * (1 + safeLift / 100);
  const dealsAfter = leadsAfter * (safeClose / 100);
  const revAfter = dealsAfter * safeDeal;
  const cplAfter = safeSpend / leadsAfter;
  const roiAfter = safeSpend > 0 ? ((revAfter - safeSpend) / safeSpend) * 100 : 0;

  const revDiff = revAfter - revNow;

  const handleOpenQuote = () => {
    setQuoteModalState({
      isOpen: true,
      serviceName: `Conversion Optimization & Funnel Lift Growth (${expectedLift}% projected lead lift)`,
      category: "Paid Ads (Google, Meta, LinkedIn)",
    });
  };

  return (
    <section id="roi" style={{ padding: "80px 0" }}>
      <div className="wrap">
        {/* Section Header */}
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "40px" }}
        >
          <div
            className="mono"
            style={{
              fontSize: "0.76rem",
              fontWeight: 600,
              color: "var(--waste)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            GROWTH ESTIMATOR
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", margin: "0 0 12px" }}>
            See what better conversion could mean for your business.
          </h2>
          <p style={{ maxWidth: "62ch", color: "var(--text-light-dim)", fontSize: "1rem", margin: 0 }}>
            Adjust your acquisition numbers to explore how targeted funnel improvements and higher lead volume impact your projected monthly revenue.
          </p>
        </motion.div>

        {/* Calculator Main Grid */}
        <motion.div
          className="growth-calc-container"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left Panel: Inputs */}
          <div className="growth-calc-panel inputs-panel">
            <div className="panel-header">
              <span className="mono panel-badge">INPUTS</span>
              <h3 className="panel-title">Your Current Numbers</h3>
            </div>

            {/* Mobile Primary Result Display (Updates in real-time) */}
            <div className="md:hidden mb-6 p-4 rounded-xl bg-gradient-to-r from-[rgba(31,111,84,0.25)] via-[rgba(14,18,24,0.9)] to-[rgba(255,74,52,0.15)] border border-[var(--color-rule-glow,rgba(0,229,255,0.2))] flex flex-col gap-3 shadow-lg">
              <div className="flex justify-between items-center">
                <span className="mono text-[10px] font-bold text-[var(--color-text-light-dim)] tracking-wider uppercase">
                  PROJECTED MONTHLY REVENUE
                </span>
                <span className={`mono text-xs font-bold px-2.5 py-0.5 rounded-md ${roiAfter >= 0 ? "bg-[rgba(16,185,129,0.2)] text-[var(--color-accent-emerald)]" : "bg-red-500/20 text-red-400"}`}>
                  {roiAfter.toFixed(0)}% ROI
                </span>
              </div>

              <div className="flex items-baseline justify-between gap-2 border-b border-white/10 pb-3">
                <div className="mono text-2xl font-extrabold text-[var(--color-text-light)]">
                  {formatINR(revAfter)}
                </div>
                <div className="mono text-xs font-bold text-[var(--color-accent-emerald)]">
                  {revDiff >= 0 ? `+${formatINR(revDiff)}` : formatINR(revDiff)} /mo lift
                </div>
              </div>

              {/* Compact Key Metric Chips */}
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="bg-black/20 p-1.5 rounded-lg border border-white/5">
                  <span className="block mono text-[9px] text-[var(--color-text-light-dim)]">LEADS</span>
                  <span className="mono text-xs font-bold text-[var(--color-text-light)]">{leadsAfter.toFixed(0)}/mo</span>
                </div>
                <div className="bg-black/20 p-1.5 rounded-lg border border-white/5">
                  <span className="block mono text-[9px] text-[var(--color-text-light-dim)]">CPL</span>
                  <span className="mono text-xs font-bold text-[var(--color-text-light)]">{formatINR(cplAfter)}</span>
                </div>
                <div className="bg-black/20 p-1.5 rounded-lg border border-white/5">
                  <span className="block mono text-[9px] text-[var(--color-text-light-dim)]">DEALS</span>
                  <span className="mono text-xs font-bold text-[var(--color-text-light)]">{dealsAfter.toFixed(1)}</span>
                </div>
              </div>
            </div>

            <div className="inputs-grid">
              <div className="calc-field">
                <div className="field-label-row">
                  <span>Monthly Ad Spend</span>
                </div>
                <div className="input-with-symbol">
                  <span className="symbol">₹</span>
                  <input
                    type="number"
                    className="mono calc-num-input"
                    value={spend || ""}
                    min={0}
                    step={5000}
                    placeholder="150000"
                    onChange={(e) => setSpend(Number(e.target.value))}
                  />
                </div>
              </div>

              <div className="calc-field">
                <div className="field-label-row">
                  <span>Leads Generated per Month</span>
                </div>
                <input
                  type="number"
                  className="mono calc-num-input"
                  value={leads || ""}
                  min={1}
                  step={1}
                  placeholder="40"
                  onChange={(e) => setLeads(Number(e.target.value))}
                />
              </div>

              <div className="calc-field">
                <div className="field-label-row">
                  <span>Lead-to-Customer Close Rate</span>
                  <span className="mono field-val accent-val">{closeRate}%</span>
                </div>
                <input
                  type="range"
                  className="calc-range-input"
                  min={1}
                  max={60}
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                />
              </div>

              <div className="calc-field">
                <div className="field-label-row">
                  <span>Average Deal Value</span>
                </div>
                <div className="input-with-symbol">
                  <span className="symbol">₹</span>
                  <input
                    type="number"
                    className="mono calc-num-input"
                    value={dealValue || ""}
                    min={0}
                    step={1000}
                    placeholder="20000"
                    onChange={(e) => setDealValue(Number(e.target.value))}
                  />
                </div>
              </div>

              <div className="calc-field">
                <div className="field-label-row">
                  <span>Expected Increase in Leads</span>
                  <span className="mono field-val accent-val">+{expectedLift}%</span>
                </div>
                <input
                  type="range"
                  className="calc-range-input"
                  min={0}
                  max={60}
                  value={expectedLift}
                  onChange={(e) => setExpectedLift(Number(e.target.value))}
                />
                <p className="field-subtext">How much could your monthly lead volume improve with optimized funnels?</p>
              </div>
            </div>

            <p className="calc-disclaimer">
              <strong style={{ color: "var(--text-light)" }}>Note:</strong> Projected results are estimates based on your entered parameters and do not constitute a performance guarantee.
            </p>
          </div>

          {/* Right Panel: Output & Opportunity (Hidden on mobile, shown on desktop) */}
          <div id="roi-breakdown" className="growth-calc-panel outputs-panel hidden md:flex">
            <div className="panel-header">
              <span className="mono panel-badge highlight">OUTCOME</span>
              <h3 className="panel-title">Projected Opportunity</h3>
            </div>

            {/* Dominant Result Banner */}
            <div className="primary-hero-metric">
              <span className="mono hero-metric-label">PROJECTED MONTHLY REVENUE</span>
              <div className="hero-metric-val mono">{formatINR(revAfter)}</div>
              <div className="hero-metric-diff mono">
                {revDiff >= 0 ? `+${formatINR(revDiff)}` : formatINR(revDiff)} vs current baseline
              </div>
            </div>

            {/* Comparison Metrics Grid */}
            <div className="metrics-comparison-table">
              <div className="table-header-row mono">
                <span>METRIC</span>
                <span>CURRENT</span>
                <span className="proj-col">PROJECTED</span>
              </div>

              <div className="table-data-row">
                <span className="metric-name">Leads / Month</span>
                <span className="mono baseline-val">{safeLeads.toFixed(0)}</span>
                <span className="mono proj-val">{leadsAfter.toFixed(0)}</span>
              </div>

              <div className="table-data-row">
                <span className="metric-name">Cost Per Lead (CPL)</span>
                <span className="mono baseline-val">{formatINR(cplNow)}</span>
                <span className="mono proj-val">{formatINR(cplAfter)}</span>
              </div>

              <div className="table-data-row">
                <span className="metric-name">Deals Closed</span>
                <span className="mono baseline-val">{dealsNow.toFixed(1)}</span>
                <span className="mono proj-val">{dealsAfter.toFixed(1)}</span>
              </div>

              <div className="table-data-row">
                <span className="metric-name">Monthly Revenue</span>
                <span className="mono baseline-val">{formatINR(revNow)}</span>
                <span className="mono proj-val">{formatINR(revAfter)}</span>
              </div>

              <div className="table-data-row highlight-row">
                <span className="metric-name">Estimated ROI</span>
                <span className={`mono baseline-val ${roiNow < 0 ? "negative" : ""}`}>
                  {roiNow.toFixed(0)}%
                </span>
                <span className={`mono proj-val ${roiAfter >= 0 ? "positive" : "negative"}`}>
                  {roiAfter.toFixed(0)}%
                </span>
              </div>
            </div>

            {/* Next Steps Action CTA */}
            <div className="calculator-cta-box">
              <div>
                <div className="calculator-cta-box-text-title">
                  Want to unlock these growth numbers?
                </div>
                <div className="calculator-cta-box-text-sub">
                  Let&apos;s build an optimized conversion architecture for your funnel.
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handleOpenQuote}
                style={{ whiteSpace: "nowrap", flexShrink: 0 }}
              >
                Get Custom Strategy →
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sticky Mobile Live Summary Bar (Fixed to bottom on mobile so user never loses sight of results) */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-40 bg-[var(--color-ink-card,#14181F)] border-2 border-[var(--color-waste,#FF4A34)] rounded-2xl p-3 shadow-2xl shadow-black/90 flex items-center justify-between gap-2 backdrop-blur-md bg-opacity-95">
        <div className="flex flex-col">
          <span className="mono text-[9px] text-[var(--color-text-light-dim)] font-bold uppercase tracking-wider">
            PROJECTED REVENUE
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="mono text-base font-extrabold text-[var(--color-text-light)]">
              {formatINR(revAfter)}
            </span>
            <span className="mono text-[11px] font-bold text-[var(--color-accent-emerald,#10B981)]">
              ({revDiff >= 0 ? `+${formatINR(revDiff)}` : formatINR(revDiff)})
            </span>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary text-xs py-2 px-3 flex-shrink-0"
          onClick={handleOpenQuote}
        >
          Get Strategy →
        </button>
      </div>

      <QuoteModal
        isOpen={quoteModalState.isOpen}
        onClose={() => setQuoteModalState((prev) => ({ ...prev, isOpen: false }))}
        initialCategory={quoteModalState.category}
        initialService={quoteModalState.serviceName}
      />
    </section>
  );
}
