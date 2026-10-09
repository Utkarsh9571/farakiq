"use client";

import { motion } from "motion/react";

interface ProductVisualProps {
  id?: string;
  src?: string;
  alt?: string;
  title?: string;
  categoryLabel?: string;
  sysId?: string;
  className?: string;
  priority?: boolean;
}

export default function ProductVisual({
  id,
  src,
  alt = "FARAKIQ Product Presentation",
  title = "PRODUCT VISUALIZATION",
  categoryLabel,
  sysId = "SYS_VIEW",
  className = "",
}: ProductVisualProps) {
  // Infer product id from id or title or src
  const normalizedId = (
    id ||
    title ||
    src ||
    ""
  ).toLowerCase();

  const isBrickBytes = normalizedId.includes("brickbytes");
  const isZonirza = normalizedId.includes("zonirza");
  const isBlinIQ = normalizedId.includes("bliniq");
  const isMailPilot = normalizedId.includes("mailpilot");
  const isMeera = normalizedId.includes("meera");
  const isGoogleAdsBlog = normalizedId.includes("google-ads") || normalizedId.includes("ppc") || normalizedId.includes("ad-spend");
  const isAutomationBlog = normalizedId.includes("n8n") || normalizedId.includes("automation") || normalizedId.includes("architecture");

  return (
    <motion.div
      className={`relative w-full rounded-xl overflow-hidden border border-[#1E232E] bg-[#0A0C0F] shadow-xl group select-none ${className}`}
      initial={false}
      whileHover={{ y: -4, borderColor: "rgba(255, 74, 52, 0.45)" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      role="img"
      aria-label={alt}
    >
      {/* Background Micro-Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E232E_1px,transparent_1px)] [background-size:16px_16px] opacity-35 pointer-events-none" />

      {/* Realistic Browser / Desktop App Frame Header */}
      <div className="relative z-10 flex items-center justify-between px-3.5 py-2 bg-[#101319]/95 border-b border-[#1E232E] backdrop-blur text-[11px] font-mono text-[var(--color-text-dim)]">
        <div className="flex items-center space-x-1.5 min-w-0">
          <span className="w-2 h-2 rounded-full bg-[#FF4A34]/80 shrink-0" />
          <span className="w-2 h-2 rounded-full bg-[#FFB800]/80 shrink-0" />
          <span className="w-2 h-2 rounded-full bg-[#00E699]/80 shrink-0" />
          <span className="ml-2 truncate text-[var(--color-text-muted)] font-medium tracking-tight text-[10.5px]">
            {isBrickBytes
              ? "brickbytes.app // spatial inventory engine"
              : isZonirza
              ? "zonirza.com // product configurator"
              : isBlinIQ
              ? "bliniq.health // clinical portal"
              : isMailPilot
              ? "mailpilot.ai // inbox workspace"
              : isMeera
              ? "meera.farakiq.ai // conversational qualification"
              : `${title.toLowerCase()} // system dispatch`}
          </span>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <span className="hidden xs:inline-block text-[9px] uppercase tracking-wider text-[var(--color-primary-coral)] bg-[var(--color-primary-coral)]/10 px-1.5 py-0.5 rounded border border-[var(--color-primary-coral)]/20 font-mono">
            {sysId}
          </span>
          <span className="text-[10px] text-[#00E699] font-mono flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E699] animate-pulse" />
            LIVE
          </span>
        </div>
      </div>

      {/* Main Viewport Container */}
      <div className="relative aspect-[16/9.5] sm:aspect-[16/9] w-full overflow-hidden bg-[#07090C] text-[#E1E4EA] p-3 sm:p-4 flex flex-col justify-between">
        {/* ============================================================ */}
        {/* 01: BRICKBYTES — REAL-ESTATE SPATIAL MAP & INVENTORY PLATFORM */}
        {/* ============================================================ */}
        {isBrickBytes && (
          <div className="w-full h-full flex flex-col justify-between relative z-10">
            {/* Top Toolbar / Filters */}
            <div className="flex items-center justify-between gap-2 border-b border-[#1E232E] pb-2 text-[10px] font-mono">
              <div className="flex items-center gap-1.5">
                <span className="bg-[#FF4A34]/15 text-[#FF4A34] px-1.5 py-0.5 rounded border border-[#FF4A34]/30 font-bold">
                  PROJECT: RIDGEWOOD
                </span>
                <span className="hidden sm:inline text-gray-400">Phase 02 / Master Plan</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00E699] bg-[#00E699]/10 px-1.5 py-0.5 rounded border border-[#00E699]/20">
                  18 Available
                </span>
                <span className="text-gray-400">Filter: Residential</span>
              </div>
            </div>

            {/* Middle: Interactive Vector Property Map */}
            <div className="relative flex-1 my-2 rounded-lg border border-[#1E232E] bg-[#0A0D12] overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 400 160" className="w-full h-full" fill="none">
                {/* Roads / Infrastructure Grid */}
                <path d="M 10 80 Q 180 90 390 70" stroke="#1E232E" strokeWidth="18" strokeLinecap="round" />
                <path d="M 10 80 Q 180 90 390 70" stroke="#12151C" strokeWidth="14" strokeLinecap="round" />
                <line x1="140" y1="10" x2="150" y2="150" stroke="#1E232E" strokeWidth="10" strokeLinecap="round" />
                <line x1="260" y1="10" x2="270" y2="150" stroke="#1E232E" strokeWidth="10" strokeLinecap="round" />

                {/* Plot 12: Reserved */}
                <rect x="40" y="24" width="42" height="42" rx="3" fill="#151A24" stroke="#2B3242" strokeWidth="1" />
                <text x="61" y="48" fill="#6B7280" fontSize="8" fontFamily="monospace" textAnchor="middle">#12</text>
                <text x="61" y="58" fill="#9CA3AF" fontSize="6" fontFamily="monospace" textAnchor="middle">RSVD</text>

                {/* Plot 13: Sold */}
                <rect x="88" y="24" width="44" height="42" rx="3" fill="#12151D" stroke="#202532" strokeWidth="1" />
                <text x="110" y="48" fill="#4B5563" fontSize="8" fontFamily="monospace" textAnchor="middle">#13</text>
                <text x="110" y="58" fill="#4B5563" fontSize="6" fontFamily="monospace" textAnchor="middle">SOLD</text>

                {/* Plot 14: Highlighted AVAILABLE (Hero Plot) */}
                <rect x="166" y="20" width="48" height="48" rx="3" fill="rgba(255,74,52,0.12)" stroke="#FF4A34" strokeWidth="1.5" />
                <circle cx="190" cy="44" r="3" fill="#FF4A34" />
                <text x="190" y="34" fill="#FF4A34" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">LOT #14</text>
                <text x="190" y="58" fill="#00E699" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">AVAILABLE</text>

                {/* Plot 15: Available */}
                <rect x="220" y="20" width="46" height="48" rx="3" fill="#151A24" stroke="#00E699" strokeWidth="1" strokeDasharray="2 2" />
                <text x="243" y="44" fill="#E5E7EB" fontSize="8" fontFamily="monospace" textAnchor="middle">#15</text>
                <text x="243" y="56" fill="#00E699" fontSize="6" fontFamily="monospace" textAnchor="middle">3,200 SF</text>

                {/* Plot 16 & 17 (Lower Row) */}
                <rect x="50" y="96" width="44" height="44" rx="3" fill="#151A24" stroke="#2B3242" strokeWidth="1" />
                <text x="72" y="122" fill="#9CA3AF" fontSize="8" fontFamily="monospace" textAnchor="middle">#16</text>
                <rect x="170" y="96" width="48" height="44" rx="3" fill="#151A24" stroke="#00E699" strokeWidth="1" strokeDasharray="2 2" />
                <text x="194" y="122" fill="#00E699" fontSize="8" fontFamily="monospace" textAnchor="middle">#17</text>
                <rect x="224" y="96" width="46" height="44" rx="3" fill="#151A24" stroke="#2B3242" strokeWidth="1" />
                <text x="247" y="122" fill="#9CA3AF" fontSize="8" fontFamily="monospace" textAnchor="middle">#18</text>
              </svg>

              {/* Floating Property Telemetry HUD Card */}
              <div className="absolute top-2 right-2 bg-[#0E121A]/90 border border-[#1E232E] p-2 rounded-md backdrop-blur text-[9.5px] font-mono shadow-md">
                <div className="text-[#FF4A34] font-bold">LOT 14 // DETACHED VILLA</div>
                <div className="text-gray-300">Area: 3,450 sq.ft</div>
                <div className="text-[#00E699] font-bold mt-0.5">Status: Ready to Reserve</div>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="flex items-center justify-between text-[9px] font-mono text-gray-400 border-t border-[#1E232E] pt-1.5">
              <span>Vector Spatial Engine v2.4</span>
              <span>Real-time Lot Sync • Active</span>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* 02: ZONIRZA — LUXURY E-COMMERCE PRODUCT CONFIGURATOR */}
        {/* ============================================================ */}
        {isZonirza && (
          <div className="w-full h-full flex flex-col justify-between relative z-10">
            {/* Top Navigation Bar */}
            <div className="flex items-center justify-between border-b border-[#1E232E] pb-2 text-[10px] font-mono">
              <span className="tracking-widest font-serif text-[#E1E4EA] text-[11px] font-semibold">
                ZONIRZA // ATELIER
              </span>
              <div className="flex items-center gap-3 text-gray-400 text-[9px]">
                <span className="text-[#FF4A34]">BESPOKE CONFIG</span>
                <span>CURRENCY: USD ($)</span>
              </div>
            </div>

            {/* Middle: Product Hero & Configurator Split */}
            <div className="grid grid-cols-12 gap-3 flex-1 my-2 items-center">
              {/* Product Visual Stage (Left) */}
              <div className="col-span-6 h-full rounded-lg bg-[#0B0D12] border border-[#1E232E] flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 160 120" className="w-28 h-24 drop-shadow-[0_8px_16px_rgba(255,74,52,0.15)]">
                  {/* Luxury Pendant / Ring Vector Object */}
                  <ellipse cx="80" cy="60" rx="38" ry="38" fill="none" stroke="#252B38" strokeWidth="8" />
                  <ellipse cx="80" cy="60" rx="38" ry="38" fill="none" stroke="url(#goldGrad)" strokeWidth="6" />
                  {/* Gemstone Setting */}
                  <polygon points="80,20 88,30 80,40 72,30" fill="#00F0FF" stroke="#FFFFFF" strokeWidth="0.75" />
                  <circle cx="80" cy="30" r="1.5" fill="#FFFFFF" />

                  <defs>
                    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#E2B774" />
                      <stop offset="50%" stopColor="#F9E2B2" />
                      <stop offset="100%" stopColor="#C89D58" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="absolute bottom-1.5 left-2 text-[8.5px] font-mono text-gray-400">18K Rose Gold / Emerald Cut</span>
              </div>

              {/* Configurator Controls (Right) */}
              <div className="col-span-6 flex flex-col justify-between h-full py-0.5">
                <div>
                  <div className="text-[11px] font-semibold text-white tracking-tight">Solitaire Horizon Ring</div>
                  <div className="text-[10px] font-mono text-[#FF4A34] font-bold mt-0.5">$1,850.00</div>
                </div>

                {/* Material Swatches */}
                <div className="space-y-1">
                  <span className="text-[8.5px] font-mono text-gray-400 uppercase">Material: 18k Rose Gold</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#E2B774] border-2 border-white ring-1 ring-[#FF4A34]" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#D4D8DD] border border-gray-600 opacity-70" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#34373D] border border-gray-600 opacity-70" />
                  </div>
                </div>

                {/* Size Selector */}
                <div className="flex items-center gap-1 text-[8px] font-mono">
                  <span className="px-1.5 py-0.5 rounded border border-[#FF4A34] text-white bg-[#FF4A34]/15">US 6</span>
                  <span className="px-1.5 py-0.5 rounded border border-[#1E232E] text-gray-400">US 7</span>
                  <span className="px-1.5 py-0.5 rounded border border-[#1E232E] text-gray-400">US 8</span>
                </div>

                {/* Add to Bag CTA */}
                <div className="bg-[#FF4A34] text-black font-mono font-bold text-[9px] py-1 px-2 rounded text-center">
                  ADD TO BAG • SECURE CHECKOUT
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between text-[9px] font-mono text-gray-400 border-t border-[#1E232E] pt-1.5">
              <span>Next.js 15 • MongoDB Sync</span>
              <span className="text-[#00E699]">Wishlist Synced</span>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* 03: BLINIQ — HEALTHCARE / BUSINESS SAAS PLATFORM */}
        {/* ============================================================ */}
        {isBlinIQ && (
          <div className="w-full h-full flex flex-col justify-between relative z-10">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#1E232E] pb-2 text-[10px] font-mono">
              <span className="text-[#00F0FF] font-bold">BLINIQ // CLINICAL DASHBOARD</span>
              <span className="text-gray-400 text-[9px]">CLINIC: DOWNTOWN HEALTH</span>
            </div>

            {/* Middle: SaaS Metrics & Schedule */}
            <div className="grid grid-cols-12 gap-2 flex-1 my-2">
              {/* Left Column: Analytics Cards */}
              <div className="col-span-7 flex flex-col justify-between gap-1.5">
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="bg-[#0E1218] border border-[#1E232E] p-1.5 rounded">
                    <span className="text-[8px] font-mono text-gray-400 block">Today&apos;s Patients</span>
                    <span className="text-[12px] font-mono font-bold text-[#00E699]">28 Scheduled</span>
                  </div>
                  <div className="bg-[#0E1218] border border-[#1E232E] p-1.5 rounded">
                    <span className="text-[8px] font-mono text-gray-400 block">Avg Wait Time</span>
                    <span className="text-[12px] font-mono font-bold text-[#00F0FF]">6.4 min</span>
                  </div>
                </div>

                {/* Throughput Trend Graph */}
                <div className="bg-[#0E1218] border border-[#1E232E] p-1.5 rounded flex-1 flex flex-col justify-between">
                  <span className="text-[8px] font-mono text-gray-400">Weekly Patient Flow</span>
                  <svg viewBox="0 0 160 36" className="w-full h-8">
                    <polyline
                      points="10,28 35,22 60,26 85,14 110,18 135,8 155,12"
                      fill="none"
                      stroke="#00F0FF"
                      strokeWidth="2"
                    />
                    <circle cx="135" cy="8" r="2.5" fill="#00E699" />
                  </svg>
                </div>
              </div>

              {/* Right Column: Appointment Feed */}
              <div className="col-span-5 bg-[#0E1218] border border-[#1E232E] p-2 rounded flex flex-col justify-between text-[8.5px] font-mono">
                <span className="text-gray-400 font-bold border-b border-[#1E232E] pb-1">NEXT APPOINTMENTS</span>
                <div className="space-y-1 my-1">
                  <div className="flex items-center justify-between text-white">
                    <span>10:30 AM</span>
                    <span className="text-[#00E699] font-bold">Checkup</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-400">
                    <span>11:15 AM</span>
                    <span className="text-[#00F0FF]">Diagnostics</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-400">
                    <span>01:00 PM</span>
                    <span>Consult</span>
                  </div>
                </div>
                <div className="text-[7.5px] text-[#00E699] bg-[#00E699]/10 px-1 py-0.5 rounded text-center">
                  TELEMEDICINE ROOM OPEN
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between text-[9px] font-mono text-gray-400 border-t border-[#1E232E] pt-1.5">
              <span>Next.js • Responsive Web Platform</span>
              <span className="text-[#00F0FF]">HIPAA Ready</span>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* 04: MAILPILOT — AI GMAIL & EMAIL PRODUCTIVITY CLIENT */}
        {/* ============================================================ */}
        {isMailPilot && (
          <div className="w-full h-full flex flex-col justify-between relative z-10">
            {/* Top Search / Command Bar */}
            <div className="flex items-center justify-between border-b border-[#1E232E] pb-2 text-[10px] font-mono">
              <div className="flex items-center gap-2 bg-[#0E1218] px-2 py-0.5 rounded border border-[#1E232E] text-gray-300 w-[60%]">
                <span className="text-[#FF4A34]">⌘K</span>
                <span className="truncate text-[9px]">Draft reply to proposal &amp; request Thursday 2pm...</span>
              </div>
              <span className="text-[#00F0FF] text-[9px] bg-[#00F0FF]/10 px-1.5 py-0.5 rounded border border-[#00F0FF]/20">
                AI ACTIVE
              </span>
            </div>

            {/* Middle: Email List & AI Action Panel */}
            <div className="grid grid-cols-12 gap-2 flex-1 my-2">
              {/* Inbox List (Left) */}
              <div className="col-span-5 bg-[#0E1218] border border-[#1E232E] rounded p-1.5 space-y-1.5 text-[8.5px] font-mono">
                <div className="bg-[#151922] p-1 rounded border-l-2 border-[#FF4A34]">
                  <div className="text-white font-bold truncate">Acquisition Strategy Q4</div>
                  <div className="text-gray-400 text-[7.5px]">Alex Miller • 10:42 AM</div>
                </div>
                <div className="p-1 rounded opacity-60">
                  <div className="text-gray-300 truncate">Contract Sign-off</div>
                  <div className="text-gray-500 text-[7.5px]">Legal Team • Yesterday</div>
                </div>
              </div>

              {/* AI Draft & Assistant Workspace (Right) */}
              <div className="col-span-7 bg-[#0E1218] border border-[#1E232E] rounded p-2 flex flex-col justify-between text-[8.5px] font-mono">
                <div>
                  <div className="flex items-center justify-between text-[8px] text-gray-400 border-b border-[#1E232E] pb-1 mb-1">
                    <span className="text-[#FF4A34] font-bold">AI GENERATED DRAFT</span>
                    <span>Safety Check: Verified</span>
                  </div>
                  <p className="text-gray-300 text-[8px] leading-relaxed m-0">
                    &ldquo;Hi Alex, I reviewed the scope. The engineering timeline aligns well with our Q4 targets. Let&apos;s lock in Thursday at 2:00 PM EST for the kickoff.&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-1.5 pt-1.5 border-t border-[#1E232E]">
                  <span className="bg-[#00E699] text-black font-bold px-2 py-0.5 rounded text-[8px]">
                    Confirm &amp; Send →
                  </span>
                  <span className="text-gray-400 text-[7.5px]">Human-in-the-loop</span>
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between text-[9px] font-mono text-gray-400 border-t border-[#1E232E] pt-1.5">
              <span>Gmail API • CopilotKit Integration</span>
              <span className="text-[#00E699]">SSE Sync: Connected</span>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* 05: MEERA AI — CONVERSATIONAL SALES AUTOMATION */}
        {/* ============================================================ */}
        {isMeera && (
          <div className="w-full h-full flex flex-col justify-between relative z-10">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#1E232E] pb-2 text-[10px] font-mono">
              <span className="text-[#FF4A34] font-bold">MEERA // SALES QUALIFICATION ENGINE</span>
              <span className="text-[#00E699] text-[9px] font-bold">LEAD SCORE: 88/100</span>
            </div>

            {/* Middle: Chat Thread + Qualification Telemetry */}
            <div className="grid grid-cols-12 gap-2 flex-1 my-2">
              {/* Chat Thread */}
              <div className="col-span-7 bg-[#0E1218] border border-[#1E232E] rounded p-2 flex flex-col justify-between space-y-1.5 text-[8.5px] font-mono">
                <div className="space-y-1.5">
                  {/* Prospect Message */}
                  <div className="bg-[#161B24] p-1.5 rounded-md text-gray-200 w-[85%] border border-[#1E232E]">
                    <span className="text-[7.5px] text-gray-400 block">Lead:</span>
                    Looking for a custom web app with AI workflows. Budget around ₹1,50,000.
                  </div>

                  {/* Meera AI Response */}
                  <div className="bg-[#FF4A34]/15 border border-[#FF4A34]/30 p-1.5 rounded-md text-white w-[88%] ml-auto">
                    <span className="text-[7.5px] text-[#FF4A34] font-bold block">Meera (AI):</span>
                    Perfect! That aligns with our Full-Stack + Automation Tier. May I confirm your expected launch timeline?
                  </div>
                </div>

                <div className="text-[7.5px] text-gray-500 italic">State Machine: Lead Qualification Active</div>
              </div>

              {/* Qualification Attributes Panel */}
              <div className="col-span-5 bg-[#0E1218] border border-[#1E232E] rounded p-2 flex flex-col justify-between text-[8px] font-mono">
                <span className="text-gray-400 font-bold border-b border-[#1E232E] pb-1">EXTRACTED ATTRIBUTES</span>
                <div className="space-y-1 my-1">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Budget:</span>
                    <span className="text-[#00E699] font-bold">₹1.5L (Qualified)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Scope:</span>
                    <span className="text-white">Web + AI</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Intent:</span>
                    <span className="text-[#00F0FF]">High (92%)</span>
                  </div>
                </div>
                <div className="bg-[#00E699]/15 text-[#00E699] border border-[#00E699]/30 py-0.5 rounded text-center text-[7.5px] font-bold">
                  ROUTE TO FOUNDER
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between text-[9px] font-mono text-gray-400 border-t border-[#1E232E] pt-1.5">
              <span>Deterministic State Machine • Node.js</span>
              <span className="text-[#FF4A34]">Gemini 2.5 Flash</span>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* 06: BLOG / EDITORIAL TECHNICAL DISPATCHES */}
        {/* ============================================================ */}
        {!isBrickBytes && !isZonirza && !isBlinIQ && !isMailPilot && !isMeera && (
          <div className="w-full h-full flex flex-col justify-between relative z-10">
            <div className="flex items-center justify-between border-b border-[#1E232E] pb-2 text-[10px] font-mono">
              <span className="text-[var(--color-primary-coral)] font-bold">
                {categoryLabel ? `${categoryLabel} // DISPATCH` : "TECHNICAL EDITORIAL"}
              </span>
              <span className="text-gray-400 text-[9px]">FARAKIQ RESEARCH</span>
            </div>

            <div className="flex-1 my-2 bg-[#0E1218] border border-[#1E232E] rounded-lg p-3 flex flex-col justify-between">
              {isGoogleAdsBlog ? (
                <div className="space-y-2">
                  <div className="flex justify-between text-[9.5px] font-mono">
                    <span className="text-gray-300">PPC Budget Efficiency Index</span>
                    <span className="text-[#00E699] font-bold">+42% Target ROAS</span>
                  </div>
                  <svg viewBox="0 0 200 40" className="w-full h-10">
                    <line x1="0" y1="20" x2="200" y2="20" stroke="#1E232E" strokeDasharray="3 3" />
                    <polyline points="10,32 50,28 90,16 130,22 170,8 195,6" fill="none" stroke="#FF4A34" strokeWidth="2.5" />
                    <circle cx="170" cy="8" r="3" fill="#00E699" />
                  </svg>
                  <div className="flex justify-between text-[8px] font-mono text-gray-400">
                    <span>Negative Keyword Clustering</span>
                    <span>Landing Page Speed: 98/100</span>
                  </div>
                </div>
              ) : isAutomationBlog ? (
                <div className="space-y-2">
                  <div className="flex justify-between text-[9.5px] font-mono">
                    <span className="text-gray-300">n8n Node Pipeline Execution</span>
                    <span className="text-[#00F0FF] font-bold">0ms Queue Delay</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 text-center text-[8px] font-mono">
                    <div className="bg-[#151922] p-1.5 rounded border border-[#1E232E] text-[#00F0FF]">Webhook Trigger</div>
                    <div className="bg-[#151922] p-1.5 rounded border border-[#1E232E] text-[#FF4A34]">LLM Parsing</div>
                    <div className="bg-[#151922] p-1.5 rounded border border-[#1E232E] text-[#00E699]">DB Mutation</div>
                  </div>
                  <div className="text-[8px] font-mono text-gray-400 text-center">Deterministic Execution Path</div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex justify-between text-[9.5px] font-mono">
                    <span className="text-gray-300">System Performance Benchmark</span>
                    <span className="text-[#00E699] font-bold">100/100 Lighthouse</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-center text-[8px] font-mono">
                    <div className="bg-[#151922] p-1 rounded border border-[#1E232E]">FCP: 0.4s</div>
                    <div className="bg-[#151922] p-1 rounded border border-[#1E232E]">LCP: 0.8s</div>
                    <div className="bg-[#151922] p-1 rounded border border-[#1E232E]">CLS: 0.00</div>
                    <div className="bg-[#151922] p-1 rounded border border-[#1E232E] text-[#00E699]">TTFB: 42ms</div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-[9px] font-mono text-gray-400 border-t border-[#1E232E] pt-1.5">
              <span>FARAKIQ Engineering Specs</span>
              <span className="text-[#FF4A34]">Verified Architecture</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
