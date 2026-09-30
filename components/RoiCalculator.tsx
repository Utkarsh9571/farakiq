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

  // Dynamic SVG path calculations for current vs projected revenue line chart
  const chartHeight = 80;
  const chartWidth = 280;

  const maxVal = Math.max(revAfter, revNow, safeSpend, 1);
  const ySpend = chartHeight - (safeSpend / maxVal) * (chartHeight - 16) - 8;
  const yRevNow = chartHeight - (revNow / maxVal) * (chartHeight - 16) - 8;
  const yRevAfter = chartHeight - (revAfter / maxVal) * (chartHeight - 16) - 8;

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
          style={{ marginBottom: "36px" }}
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
            DYNAMIC GROWTH &amp; REVENUE ESTIMATOR
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", margin: "0 0 12px" }}>
            See what better conversion could mean for your business.
          </h2>
          <p style={{ maxWidth: "62ch", color: "var(--text-light-dim)", fontSize: "1rem", margin: 0 }}>
            Adjust your acquisition parameters in real time to explore how targeted funnel improvements and lead volume lift compound into monthly bottom-line revenue.
          </p>
        </motion.div>

        {/* Dynamic Funnel Flow Visualization Banner */}
        <motion.div
          className="w-full rounded-2xl border border-[#1E232E] bg-[#0A0C0F] p-4 sm:p-6 mb-8 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          {/* Top Telemetry Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1E232E] pb-3 mb-5">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary-coral)] animate-pulse" />
              <span className="mono text-xs font-bold text-[var(--color-text-light)] tracking-wide uppercase">
                REAL-TIME FUNNEL PIPELINE VISUALIZATION
              </span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono">
              <span className="text-[var(--color-text-dim)]">PROJECTED ROI:</span>
              <span className={`px-2 py-0.5 rounded font-bold ${roiAfter >= 0 ? "bg-[#00E699]/10 text-[#00E699] border border-[#00E699]/20" : "bg-red-500/10 text-red-400"}`}>
                {roiAfter >= 0 ? `+${roiAfter.toFixed(0)}%` : `${roiAfter.toFixed(0)}%`}
              </span>
            </div>
          </div>

          {/* 5-Step Pipeline Flow Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 mb-6">
            {/* Step 1: Ad Spend */}
            <div className="bg-[#12151B] border border-[#1E232E] rounded-xl p-3 flex flex-col justify-between">
              <span className="mono text-[10px] text-[var(--color-text-dim)] uppercase font-semibold">
                01 — AD SPEND
              </span>
              <div className="mono text-sm font-extrabold text-[var(--color-text-light)] mt-1.5">
                {formatINR(safeSpend)}
              </div>
              <span className="mono text-[10px] text-[var(--color-text-muted)] mt-1">
                Budget / Mo
              </span>
            </div>

            {/* Step 2: Leads */}
            <div className="bg-[#12151B] border border-[#1E232E] rounded-xl p-3 flex flex-col justify-between">
              <span className="mono text-[10px] text-[#00F0FF] uppercase font-semibold">
                02 — LEADS
              </span>
              <div className="mono text-sm font-extrabold text-[var(--color-text-light)] mt-1.5">
                {leadsAfter.toFixed(0)}{" "}
                <span className="text-[11px] text-[#00E699] font-normal">
                  (+{safeLift}%)
                </span>
              </div>
              <span className="mono text-[10px] text-[var(--color-text-muted)] mt-1">
                {safeLeads.toFixed(0)} baseline
              </span>
            </div>

            {/* Step 3: Conversions */}
            <div className="bg-[#12151B] border border-[#1E232E] rounded-xl p-3 flex flex-col justify-between">
              <span className="mono text-[10px] text-[var(--color-text-dim)] uppercase font-semibold">
                03 — CONVERSIONS
              </span>
              <div className="mono text-sm font-extrabold text-[var(--color-text-light)] mt-1.5">
                {dealsAfter.toFixed(1)}{" "}
                <span className="text-[11px] text-[var(--color-text-dim)] font-normal">
                  deals
                </span>
              </div>
              <span className="mono text-[10px] text-[var(--color-text-muted)] mt-1">
                {safeClose}% close rate
              </span>
            </div>

            {/* Step 4: Revenue */}
            <div className="bg-[#12151B] border border-[var(--color-primary-coral)]/40 rounded-xl p-3 flex flex-col justify-between shadow-[0_0_12px_rgba(255,92,56,0.15)]">
              <span className="mono text-[10px] text-[var(--color-primary-coral)] uppercase font-semibold">
                04 — REVENUE
              </span>
              <div className="mono text-sm font-extrabold text-[var(--color-primary-coral)] mt-1.5">
                {formatINR(revAfter)}
              </div>
              <span className="mono text-[10px] text-[#00E699] mt-1 font-semibold">
                +{formatINR(Math.max(0, revDiff))} lift
              </span>
            </div>

            {/* Step 5: ROI Output */}
            <div className="col-span-2 sm:col-span-1 bg-[#12151B] border border-[#00E699]/40 rounded-xl p-3 flex flex-col justify-between shadow-[0_0_12px_rgba(0,230,153,0.12)]">
              <span className="mono text-[10px] text-[#00E699] uppercase font-semibold">
                05 — NET ROI
              </span>
              <div className="mono text-base font-black text-[#00E699] mt-1.5">
                {roiAfter.toFixed(0)}%
              </div>
              <span className="mono text-[10px] text-[var(--color-text-muted)] mt-1">
                {formatINR(cplAfter)} CPL
              </span>
            </div>
          </div>

          {/* Dynamic Interactive SVG Trendline Graph */}
          <div className="relative w-full h-24 bg-[#08090C] rounded-xl border border-[#1E232E] p-3 flex items-center justify-between">
            <div className="flex flex-col justify-between h-full">
              <span className="mono text-[10px] text-[var(--color-text-dim)] uppercase">
                REVENUE TREND COMPARISON
              </span>
              <div className="flex items-center space-x-3 text-xs font-mono">
                <span className="flex items-center space-x-1.5 text-[var(--color-text-muted)]">
                  <span className="w-2.5 h-0.5 bg-gray-500 inline-block" />
                  <span>Current ({formatINR(revNow)})</span>
                </span>
                <span className="flex items-center space-x-1.5 text-[var(--color-primary-coral)] font-bold">
                  <span className="w-2.5 h-0.5 bg-[var(--color-primary-coral)] inline-block" />
                  <span>Projected ({formatINR(revAfter)})</span>
                </span>
              </div>
            </div>

            <div className="w-48 sm:w-64 h-full relative">
              <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full overflow-visible">
                {/* Reference Grid lines */}
                <line x1="0" y1={chartHeight / 2} x2={chartWidth} y2={chartHeight / 2} stroke="#1E232E" strokeDasharray="3 3" />

                {/* Baseline Revenue Line Path */}
                <path
                  d={`M 10 ${chartHeight - 10} Q ${chartWidth / 2} ${(ySpend + yRevNow) / 2} ${chartWidth - 10} ${yRevNow}`}
                  fill="none"
                  stroke="#4B5563"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />

                {/* Projected Revenue Line Path */}
                <motion.path
                  d={`M 10 ${chartHeight - 10} Q ${chartWidth / 2} ${(ySpend + yRevAfter) / 2} ${chartWidth - 10} ${yRevAfter}`}
                  fill="none"
                  stroke="var(--color-primary-coral)"
                  strokeWidth="3"
                  initial={false}
                  animate={{
                    d: `M 10 ${chartHeight - 10} Q ${chartWidth / 2} ${(ySpend + yRevAfter) / 2} ${chartWidth - 10} ${yRevAfter}`,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />

                {/* Projected Peak Point Pulse */}
                <circle cx={chartWidth - 10} cy={yRevAfter} r="4" fill="var(--color-primary-coral)" className="animate-pulse" />
              </svg>
            </div>
          </div>
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

          {/* Right Panel: Output & Opportunity */}
          <div id="roi-breakdown" className="growth-calc-panel outputs-panel flex flex-col justify-between">
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

      <QuoteModal
        isOpen={quoteModalState.isOpen}
        onClose={() => setQuoteModalState((prev) => ({ ...prev, isOpen: false }))}
        initialCategory={quoteModalState.category}
        initialService={quoteModalState.serviceName}
      />
    </section>
  );
}
