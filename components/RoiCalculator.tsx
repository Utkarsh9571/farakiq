"use client";

import { useState } from "react";
import { motion } from "motion/react";

function formatINR(num: number): string {
  return "₹" + Math.round(num).toLocaleString("en-IN");
}

export default function RoiCalculator() {
  const [spend, setSpend] = useState<number>(150000);
  const [leads, setLeads] = useState<number>(40);
  const [closeRate, setCloseRate] = useState<number>(15);
  const [dealValue, setDealValue] = useState<number>(20000);
  const [expectedLift, setExpectedLift] = useState<number>(25);

  const safeSpend = Math.max(0, spend || 0);
  const safeLeads = Math.max(0.0001, leads || 0);
  const safeClose = closeRate;
  const safeDeal = Math.max(0, dealValue || 0);
  const safeLift = expectedLift;

  // Current
  const dealsNow = safeLeads * (safeClose / 100);
  const revNow = dealsNow * safeDeal;
  const cplNow = safeSpend / safeLeads;
  const roiNow = safeSpend > 0 ? ((revNow - safeSpend) / safeSpend) * 100 : 0;

  // Projected
  const leadsAfter = safeLeads * (1 + safeLift / 100);
  const dealsAfter = leadsAfter * (safeClose / 100);
  const revAfter = dealsAfter * safeDeal;
  const cplAfter = safeSpend / leadsAfter;
  const roiAfter = safeSpend > 0 ? ((revAfter - safeSpend) / safeSpend) * 100 : 0;

  return (
    <section id="roi">
      <div className="wrap">
        <div className="section-head">
          <h2>Interactive Conversion Estimator</h2>
          <p>
            Adjust the sliders below based on your own business metrics. This tool provides an estimate calculated directly from your input assumptions.
          </p>
        </div>

        <motion.div
          className="calc roi-calc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="calc-inputs">
            <div
              className="mono"
              style={{
                fontSize: "0.75rem",
                color: "var(--waste)",
                marginBottom: "16px",
                border: "1px solid var(--rule)",
                padding: "6px 12px",
                display: "inline-block",
              }}
            >
              ESTIMATOR TOOL — BASED ENTIRELY ON VISITOR INPUTS
            </div>

            <label className="calc-field">
              <span>Monthly ad spend (₹)</span>
              <input
                type="number"
                className="mono"
                value={spend}
                min={0}
                step={5000}
                onChange={(e) => setSpend(Number(e.target.value))}
              />
            </label>
            <label className="calc-field">
              <span>Leads generated per month</span>
              <input
                type="number"
                className="mono"
                value={leads}
                min={1}
                step={1}
                onChange={(e) => setLeads(Number(e.target.value))}
              />
            </label>
            <label className="calc-field">
              <span>Close rate {closeRate}%</span>
              <input
                type="range"
                min={1}
                max={60}
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
              />
            </label>
            <label className="calc-field">
              <span>Average deal value (₹)</span>
              <input
                type="number"
                className="mono"
                value={dealValue}
                min={0}
                step={1000}
                onChange={(e) => setDealValue(Number(e.target.value))}
              />
            </label>
            <label className="calc-field">
              <span>Estimated lead lift parameter {expectedLift}%</span>
              <input
                type="range"
                min={0}
                max={60}
                value={expectedLift}
                onChange={(e) => setExpectedLift(Number(e.target.value))}
              />
            </label>
            <p className="calc-note">
              Note: The lift parameter is a user-configurable assumption. It does not represent a guaranteed metric or benchmark.
            </p>
          </div>

          <div className="roi-outputs">
            <div className="receipt roi-receipt">
              <div className="receipt-title">RECEIPT NO. 004</div>
              <div className="receipt-heading">Current baseline</div>
              <div className="receipt-line">
                <span className="label">Leads / month</span>
                <span className="val mono">{safeLeads.toFixed(0)}</span>
              </div>
              <div className="receipt-line">
                <span className="label">Cost per lead</span>
                <span className="val mono">{formatINR(cplNow)}</span>
              </div>
              <div className="receipt-line">
                <span className="label">Deals closed</span>
                <span className="val mono">{dealsNow.toFixed(1)}</span>
              </div>
              <div className="receipt-line">
                <span className="label">Revenue</span>
                <span className="val mono">{formatINR(revNow)}</span>
              </div>
              <span className="stamp waste">ROI: {roiNow.toFixed(0)}%</span>
            </div>
            <div className="roi-arrow mono">→</div>
            <div className="receipt roi-receipt">
              <div className="receipt-title">RECEIPT NO. 005</div>
              <div className="receipt-heading">Projected estimate</div>
              <div className="receipt-line">
                <span className="label">Leads / month</span>
                <span className="val mono">{leadsAfter.toFixed(0)}</span>
              </div>
              <div className="receipt-line">
                <span className="label">Cost per lead</span>
                <span className="val mono">{formatINR(cplAfter)}</span>
              </div>
              <div className="receipt-line">
                <span className="label">Deals closed</span>
                <span className="val mono">{dealsAfter.toFixed(1)}</span>
              </div>
              <div className="receipt-line">
                <span className="label">Revenue</span>
                <span className="val mono">{formatINR(revAfter)}</span>
              </div>
              <span className="stamp value">ROI: {roiAfter.toFixed(0)}%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
