"use client";

import { motion } from "motion/react";

interface StageVisualProps {
  stageId: string;
}

export default function StageVisual({ stageId }: StageVisualProps) {
  return (
    <div className="relative w-full h-full min-h-[380px] lg:min-h-[440px] rounded-2xl overflow-hidden border border-[#1E232E] bg-[#07080B] shadow-2xl flex items-center justify-center p-4 sm:p-6 select-none group">
      {/* Ambient Studio Lighting Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,74,52,0.05)_0%,rgba(0,240,255,0.03)_40%,transparent_75%)] pointer-events-none" />

      <motion.div
        key={stageId}
        className="relative w-full h-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.97, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: -10 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {stageId === "stage-1" && <AuditVisual />}
        {stageId === "stage-2" && <DesignVisual />}
        {stageId === "stage-3" && <BuildVisual />}
        {stageId === "stage-4" && <ScaleVisual />}
      </motion.div>
    </div>
  );
}

// =========================================================================
// STAGE 01: AUDIT & STRATEGY VISUAL
// =========================================================================
function AuditVisual() {
  return (
    <svg
      viewBox="0 0 700 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-h-[440px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
    >
      <defs>
        <linearGradient id="auditCardBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#11151D" />
          <stop offset="100%" stopColor="#0A0C11" />
        </linearGradient>
        <linearGradient id="auditGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF4A34" />
          <stop offset="100%" stopColor="#FF7A59" />
        </linearGradient>
        <linearGradient id="vitalsGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="100%" stopColor="#00E699" />
        </linearGradient>
      </defs>

      {/* Main Console Frame */}
      <rect x="20" y="20" width="660" height="480" rx="16" fill="url(#auditCardBg)" stroke="#1E2430" strokeWidth="1.5" />

      {/* Header Bar */}
      <rect x="20" y="20" width="660" height="48" rx="16" fill="#0E1117" />
      <line x1="20" y1="68" x2="680" y2="68" stroke="#1A202C" strokeWidth="1" />
      <circle cx="48" cy="44" r="5" fill="#FF4A34" />
      <circle cx="66" cy="44" r="5" fill="#E5B83B" />
      <circle cx="84" cy="44" r="5" fill="#00E699" />
      <text x="110" y="48" fill="#8E9AA8" fontSize="12" fontFamily="monospace" fontWeight="600" letterSpacing="0.08em">
        DIAGNOSTICS &amp; FULL-STACK AUDIT // BENCHMARK
      </text>
      <rect x="540" y="34" width="120" height="22" rx="11" fill="rgba(0,230,153,0.12)" stroke="rgba(0,230,153,0.3)" strokeWidth="1" />
      <circle cx="552" cy="45" r="3.5" fill="#00E699" />
      <text x="562" y="49" fill="#00E699" fontSize="10" fontFamily="monospace" fontWeight="700">AUDIT VERIFIED</text>

      {/* Left Column: Metric Gauges */}
      <g transform="translate(45, 90)">
        {/* Core Web Vitals Box */}
        <rect x="0" y="0" width="180" height="175" rx="12" fill="#080A0E" stroke="#1A202C" strokeWidth="1" />
        <text x="16" y="26" fill="#718096" fontSize="10" fontFamily="monospace" fontWeight="600">CORE WEB VITALS</text>
        <circle cx="90" cy="95" r="48" stroke="#161B24" strokeWidth="8" fill="none" />
        <circle
          cx="90"
          cy="95"
          r="48"
          stroke="url(#vitalsGlow)"
          strokeWidth="8"
          fill="none"
          strokeDasharray="301"
          strokeDashoffset="12"
          strokeLinecap="round"
          transform="rotate(-90 90 95)"
        />
        <text x="90" y="94" fill="#FFFFFF" fontSize="22" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">99.4</text>
        <text x="90" y="112" fill="#00E699" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="monospace">PERFECT SCORE</text>
        <text x="90" y="160" fill="#8E9AA8" fontSize="11" textAnchor="middle" fontFamily="sans-serif">LCP &lt; 0.8s • CLS 0.00</text>

        {/* Ad Spend & Conversion Leak Audit */}
        <rect x="0" y="190" width="180" height="185" rx="12" fill="#080A0E" stroke="#1A202C" strokeWidth="1" />
        <text x="16" y="216" fill="#718096" fontSize="10" fontFamily="monospace" fontWeight="600">ACQUISITION AUDIT</text>
        <g transform="translate(16, 235)">
          <rect x="0" y="0" width="148" height="34" rx="6" fill="#12161F" stroke="#1E2533" strokeWidth="1" />
          <text x="10" y="16" fill="#A0AEC0" fontSize="10" fontFamily="sans-serif">CPA Optimization</text>
          <text x="10" y="28" fill="#FF4A34" fontSize="11" fontWeight="700" fontFamily="monospace">-38% Waste Cut</text>
        </g>
        <g transform="translate(16, 278)">
          <rect x="0" y="0" width="148" height="34" rx="6" fill="#12161F" stroke="#1E2533" strokeWidth="1" />
          <text x="10" y="16" fill="#A0AEC0" fontSize="10" fontFamily="sans-serif">Search Indexation</text>
          <text x="10" y="28" fill="#00E699" fontSize="11" fontWeight="700" fontFamily="monospace">100% Crawl Rate</text>
        </g>
        <g transform="translate(16, 321)">
          <rect x="0" y="0" width="148" height="34" rx="6" fill="#12161F" stroke="#1E2533" strokeWidth="1" />
          <text x="10" y="16" fill="#A0AEC0" fontSize="10" fontFamily="sans-serif">API Latency Peak</text>
          <text x="10" y="28" fill="#00F0FF" fontSize="11" fontWeight="700" fontFamily="monospace">38ms Global Edge</text>
        </g>
      </g>

      {/* Right Column: Diagnostic Inspection Layers */}
      <g transform="translate(245, 90)">
        <rect x="0" y="0" width="410" height="375" rx="12" fill="#080A0E" stroke="#1A202C" strokeWidth="1" />
        <text x="20" y="26" fill="#718096" fontSize="10" fontFamily="monospace" fontWeight="600">SYSTEM ARCHITECTURE INSPECTION</text>

        {/* Audit Layer 1 */}
        <g transform="translate(20, 42)">
          <rect x="0" y="0" width="370" height="66" rx="8" fill="#10141D" stroke="#1E2533" strokeWidth="1" />
          <circle cx="24" cy="33" r="12" fill="rgba(255,74,52,0.12)" stroke="#FF4A34" strokeWidth="1" />
          <text x="24" y="37" fill="#FF4A34" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="monospace">01</text>
          <text x="46" y="26" fill="#FFFFFF" fontSize="13" fontWeight="600" fontFamily="sans-serif">Frontend &amp; Edge Delivery Layer</text>
          <text x="46" y="44" fill="#8E9AA8" fontSize="11" fontFamily="sans-serif">Next.js 15 App Router • Turbopack • Server Components</text>
          <rect x="290" y="22" width="68" height="22" rx="4" fill="rgba(0,230,153,0.1)" stroke="rgba(0,230,153,0.3)" />
          <text x="324" y="36" fill="#00E699" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="monospace">PASSED</text>
        </g>

        {/* Audit Layer 2 */}
        <g transform="translate(20, 120)">
          <rect x="0" y="0" width="370" height="66" rx="8" fill="#10141D" stroke="#1E2533" strokeWidth="1" />
          <circle cx="24" cy="33" r="12" fill="rgba(0,240,255,0.12)" stroke="#00F0FF" strokeWidth="1" />
          <text x="24" y="37" fill="#00F0FF" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="monospace">02</text>
          <text x="46" y="26" fill="#FFFFFF" fontSize="13" fontWeight="600" fontFamily="sans-serif">Data Schemas &amp; API Bottlenecks</text>
          <text x="46" y="44" fill="#8E9AA8" fontSize="11" fontFamily="sans-serif">PostgreSQL Connection Pooling • Prisma ORM • Type Safety</text>
          <rect x="290" y="22" width="68" height="22" rx="4" fill="rgba(0,230,153,0.1)" stroke="rgba(0,230,153,0.3)" />
          <text x="324" y="36" fill="#00E699" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="monospace">OPTIMIZED</text>
        </g>

        {/* Audit Layer 3 */}
        <g transform="translate(20, 198)">
          <rect x="0" y="0" width="370" height="66" rx="8" fill="#10141D" stroke="#1E2533" strokeWidth="1" />
          <circle cx="24" cy="33" r="12" fill="rgba(229,184,59,0.12)" stroke="#E5B83B" strokeWidth="1" />
          <text x="24" y="37" fill="#E5B83B" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="monospace">03</text>
          <text x="46" y="26" fill="#FFFFFF" fontSize="13" fontWeight="600" fontFamily="sans-serif">Automated Operations &amp; n8n Flow</text>
          <text x="46" y="44" fill="#8E9AA8" fontSize="11" fontFamily="sans-serif">CRM Sync • Webhook Handlers • Error Retry Backoffs</text>
          <rect x="290" y="22" width="68" height="22" rx="4" fill="rgba(0,230,153,0.1)" stroke="rgba(0,230,153,0.3)" />
          <text x="324" y="36" fill="#00E699" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="monospace">VERIFIED</text>
        </g>

        {/* Bottom Roadmap Timeline Milestone */}
        <g transform="translate(20, 280)">
          <rect x="0" y="0" width="370" height="75" rx="8" fill="#0E121A" stroke="#1A2230" strokeWidth="1" />
          <text x="14" y="22" fill="#718096" fontSize="10" fontFamily="monospace" fontWeight="600">STRATEGIC 90-DAY DELIVERABLE BLUEPRINT</text>
          <line x1="20" y1="48" x2="350" y2="48" stroke="#1E2636" strokeWidth="2" />
          <circle cx="40" cy="48" r="6" fill="#FF4A34" />
          <text x="40" y="66" fill="#A0AEC0" fontSize="9" textAnchor="middle" fontFamily="monospace">AUDIT</text>
          <circle cx="140" cy="48" r="6" fill="#00F0FF" />
          <text x="140" y="66" fill="#A0AEC0" fontSize="9" textAnchor="middle" fontFamily="monospace">DESIGN</text>
          <circle cx="240" cy="48" r="6" fill="#E5B83B" />
          <text x="240" y="66" fill="#A0AEC0" fontSize="9" textAnchor="middle" fontFamily="monospace">BUILD</text>
          <circle cx="330" cy="48" r="6" fill="#00E699" />
          <text x="330" y="66" fill="#00E699" fontSize="9" textAnchor="middle" fontFamily="monospace">SCALE</text>
        </g>
      </g>
    </svg>
  );
}

// =========================================================================
// STAGE 02: SYSTEM & EXPERIENCE DESIGN VISUAL
// =========================================================================
function DesignVisual() {
  return (
    <svg
      viewBox="0 0 700 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-h-[440px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
    >
      <defs>
        <linearGradient id="designCardBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10141D" />
          <stop offset="100%" stopColor="#080A0E" />
        </linearGradient>
      </defs>

      {/* Main Console Frame */}
      <rect x="20" y="20" width="660" height="480" rx="16" fill="url(#designCardBg)" stroke="#1E2430" strokeWidth="1.5" />

      {/* Header Bar */}
      <rect x="20" y="20" width="660" height="48" rx="16" fill="#0D1016" />
      <line x1="20" y1="68" x2="680" y2="68" stroke="#1A202C" strokeWidth="1" />
      <circle cx="48" cy="44" r="5" fill="#FF4A34" />
      <circle cx="66" cy="44" r="5" fill="#E5B83B" />
      <circle cx="84" cy="44" r="5" fill="#00E699" />
      <text x="110" y="48" fill="#8E9AA8" fontSize="12" fontFamily="monospace" fontWeight="600" letterSpacing="0.08em">
        SYSTEM &amp; EXPERIENCE TOPOLOGY // WIREFRAME BLUEPRINT
      </text>
      <rect x="540" y="34" width="120" height="22" rx="11" fill="rgba(0,240,255,0.12)" stroke="rgba(0,240,255,0.3)" strokeWidth="1" />
      <circle cx="552" cy="45" r="3.5" fill="#00F0FF" />
      <text x="562" y="49" fill="#00F0FF" fontSize="10" fontFamily="monospace" fontWeight="700">SUB-SECOND UX</text>

      {/* Left Wireframe Preview Window */}
      <g transform="translate(45, 90)">
        <rect x="0" y="0" width="350" height="375" rx="12" fill="#080A0E" stroke="#1A202C" strokeWidth="1" />
        {/* App Browser Frame */}
        <rect x="14" y="14" width="322" height="24" rx="6" fill="#121620" stroke="#1F2633" strokeWidth="1" />
        <rect x="26" y="22" width="140" height="8" rx="4" fill="#2D3748" />
        <circle cx="316" cy="26" r="4" fill="#00E699" />

        {/* Hero Section Wireframe */}
        <rect x="14" y="48" width="322" height="130" rx="8" fill="#0E121A" stroke="#1C2330" strokeWidth="1" />
        <rect x="28" y="64" width="80" height="12" rx="6" fill="#FF4A34" fillOpacity="0.2" stroke="#FF4A34" strokeWidth="1" />
        <text x="36" y="73" fill="#FF4A34" fontSize="8" fontFamily="monospace" fontWeight="700">HIGH INTENT</text>
        <rect x="28" y="86" width="180" height="16" rx="4" fill="#2B3545" />
        <rect x="28" y="110" width="130" height="10" rx="4" fill="#1E2633" />
        <rect x="28" y="132" width="90" height="26" rx="6" fill="#FF4A34" />
        <text x="73" y="149" fill="#FFFFFF" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">Book a Call →</text>
        {/* Wireframe Hero Visual Card */}
        <rect x="220" y="64" width="102" height="94" rx="6" fill="#141924" stroke="#252E3E" strokeWidth="1" />
        <circle cx="271" cy="105" r="22" fill="#1E2636" stroke="#00F0FF" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M 260 105 L 271 95 L 282 105 L 271 115 Z" fill="#00F0FF" />

        {/* Modular Grid Wireframe */}
        <g transform="translate(14, 190)">
          <rect x="0" y="0" width="102" height="80" rx="6" fill="#0E121A" stroke="#1C2330" strokeWidth="1" />
          <circle cx="20" cy="20" r="8" fill="#FF4A34" fillOpacity="0.2" />
          <rect x="12" y="36" width="78" height="8" rx="4" fill="#252E3E" />
          <rect x="12" y="50" width="55" height="6" rx="3" fill="#1B222E" />

          <rect x="110" y="0" width="102" height="80" rx="6" fill="#0E121A" stroke="#1C2330" strokeWidth="1" />
          <circle cx="130" cy="20" r="8" fill="#00F0FF" fillOpacity="0.2" />
          <rect x="122" y="36" width="78" height="8" rx="4" fill="#252E3E" />
          <rect x="122" y="50" width="55" height="6" rx="3" fill="#1B222E" />

          <rect x="220" y="0" width="102" height="80" rx="6" fill="#0E121A" stroke="#1C2330" strokeWidth="1" />
          <circle cx="240" cy="20" r="8" fill="#00E699" fillOpacity="0.2" />
          <rect x="232" y="36" width="78" height="8" rx="4" fill="#252E3E" />
          <rect x="232" y="50" width="55" height="6" rx="3" fill="#1B222E" />
        </g>

        {/* Conversion Attribution Tracker Strip */}
        <g transform="translate(14, 282)">
          <rect x="0" y="0" width="322" height="75" rx="6" fill="#0B0E14" stroke="#1B2330" strokeWidth="1" />
          <text x="12" y="20" fill="#718096" fontSize="9" fontFamily="monospace" fontWeight="600">ATTRIBUTION &amp; TRACKING ENGINE</text>
          <text x="12" y="40" fill="#E2E8F0" fontSize="11" fontWeight="600" fontFamily="sans-serif">Meta CAPI + Google Enhanced Conversion Events</text>
          <text x="12" y="58" fill="#00E699" fontSize="10" fontFamily="monospace">✓ 100% Signal Match Quality • Deduplicated</text>
        </g>
      </g>

      {/* Right Tree Topology Viewport */}
      <g transform="translate(415, 90)">
        <rect x="0" y="0" width="240" height="375" rx="12" fill="#080A0E" stroke="#1A202C" strokeWidth="1" />
        <text x="16" y="26" fill="#718096" fontSize="10" fontFamily="monospace" fontWeight="600">COMPONENT HIERARCHY</text>

        {/* Tree Node 1 */}
        <g transform="translate(16, 44)">
          <rect x="0" y="0" width="208" height="42" rx="6" fill="#111620" stroke="#253042" strokeWidth="1" />
          <rect x="8" y="10" width="22" height="22" rx="4" fill="#FF4A34" />
          <text x="19" y="25" fill="#FFFFFF" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="monospace">app</text>
          <text x="38" y="20" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="sans-serif">/layout.tsx (Edge)</text>
          <text x="38" y="32" fill="#718096" fontSize="9" fontFamily="monospace">Global Context &amp; SEO</text>
        </g>

        {/* Tree Node 2 */}
        <g transform="translate(28, 100)">
          <line x1="-12" y1="-14" x2="-12" y2="20" stroke="#2B364A" strokeWidth="1.5" />
          <line x1="-12" y1="20" x2="0" y2="20" stroke="#2B364A" strokeWidth="1.5" />
          <rect x="0" y="0" width="196" height="42" rx="6" fill="#111620" stroke="#253042" strokeWidth="1" />
          <rect x="8" y="10" width="22" height="22" rx="4" fill="#00F0FF" />
          <text x="19" y="25" fill="#000000" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="monospace">ux</text>
          <text x="38" y="20" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="sans-serif">/HeroLeadFunnel.tsx</text>
          <text x="38" y="32" fill="#718096" fontSize="9" fontFamily="monospace">Direct-Response Hooks</text>
        </g>

        {/* Tree Node 3 */}
        <g transform="translate(28, 156)">
          <line x1="-12" y1="-14" x2="-12" y2="20" stroke="#2B364A" strokeWidth="1.5" />
          <line x1="-12" y1="20" x2="0" y2="20" stroke="#2B364A" strokeWidth="1.5" />
          <rect x="0" y="0" width="196" height="42" rx="6" fill="#111620" stroke="#253042" strokeWidth="1" />
          <rect x="8" y="10" width="22" height="22" rx="4" fill="#E5B83B" />
          <text x="19" y="25" fill="#000000" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="monospace">api</text>
          <text x="38" y="20" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="sans-serif">/api/lead/route.ts</text>
          <text x="38" y="32" fill="#718096" fontSize="9" fontFamily="monospace">Zod Validation &amp; Auth</text>
        </g>

        {/* Tree Node 4 */}
        <g transform="translate(28, 212)">
          <line x1="-12" y1="-14" x2="-12" y2="20" stroke="#2B364A" strokeWidth="1.5" />
          <line x1="-12" y1="20" x2="0" y2="20" stroke="#2B364A" strokeWidth="1.5" />
          <rect x="0" y="0" width="196" height="42" rx="6" fill="#111620" stroke="#253042" strokeWidth="1" />
          <rect x="8" y="10" width="22" height="22" rx="4" fill="#00E699" />
          <text x="19" y="25" fill="#000000" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="monospace">db</text>
          <text x="38" y="20" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="sans-serif">PostgreSQL Schemas</text>
          <text x="38" y="32" fill="#718096" fontSize="9" fontFamily="monospace">Relational Indexing</text>
        </g>

        {/* Schema Status Footnote */}
        <g transform="translate(16, 275)">
          <rect x="0" y="0" width="208" height="82" rx="6" fill="#0C1017" stroke="#1A2230" strokeWidth="1" />
          <text x="12" y="20" fill="#718096" fontSize="9" fontFamily="monospace" fontWeight="600">SCHEMA VERIFICATION</text>
          <text x="12" y="42" fill="#A0AEC0" fontSize="11" fontFamily="sans-serif">✓ 0.0ms Layout Shifts</text>
          <text x="12" y="60" fill="#A0AEC0" fontSize="11" fontFamily="sans-serif">✓ Sub-second TTFB</text>
        </g>
      </g>
    </svg>
  );
}

// =========================================================================
// STAGE 03: BUILD, INTEGRATE & AUTOMATE VISUAL
// =========================================================================
function BuildVisual() {
  return (
    <svg
      viewBox="0 0 700 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-h-[440px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
    >
      <defs>
        <linearGradient id="buildCardBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#111620" />
          <stop offset="100%" stopColor="#080A0F" />
        </linearGradient>
      </defs>

      {/* Main Console Frame */}
      <rect x="20" y="20" width="660" height="480" rx="16" fill="url(#buildCardBg)" stroke="#1E2430" strokeWidth="1.5" />

      {/* Header Bar */}
      <rect x="20" y="20" width="660" height="48" rx="16" fill="#0D1016" />
      <line x1="20" y1="68" x2="680" y2="68" stroke="#1A202C" strokeWidth="1" />
      <circle cx="48" cy="44" r="5" fill="#FF4A34" />
      <circle cx="66" cy="44" r="5" fill="#E5B83B" />
      <circle cx="84" cy="44" r="5" fill="#00E699" />
      <text x="110" y="48" fill="#8E9AA8" fontSize="12" fontFamily="monospace" fontWeight="600" letterSpacing="0.08em">
        AUTOMATED PIPELINE ORCHESTRATION &amp; AI ENGINE
      </text>
      <rect x="540" y="34" width="120" height="22" rx="11" fill="rgba(255,74,52,0.12)" stroke="rgba(255,74,52,0.3)" strokeWidth="1" />
      <circle cx="552" cy="45" r="3.5" fill="#FF4A34" />
      <text x="562" y="49" fill="#FF4A34" fontSize="10" fontFamily="monospace" fontWeight="700">PIPELINE LIVE</text>

      {/* Workflow Canvas */}
      <g transform="translate(45, 90)">
        <rect x="0" y="0" width="610" height="375" rx="12" fill="#080A0E" stroke="#1A202C" strokeWidth="1" />

        {/* Blueprint Grid Lines */}
        <path d="M 0 60 L 610 60 M 0 120 L 610 120 M 0 180 L 610 180 M 0 240 L 610 240 M 0 300 L 610 300" stroke="#111620" strokeWidth="1" />
        <path d="M 120 0 L 120 375 M 240 0 L 240 375 M 360 0 L 360 375 M 480 0 L 480 375" stroke="#111620" strokeWidth="1" />

        {/* Connecting Animated Glowing Signal Lines */}
        <path d="M 140 100 L 260 100" stroke="#FF4A34" strokeWidth="2.5" strokeDasharray="6 4" />
        <path d="M 380 100 L 470 100" stroke="#00F0FF" strokeWidth="2.5" strokeDasharray="6 4" />
        <path d="M 320 135 L 320 220" stroke="#E5B83B" strokeWidth="2.5" strokeDasharray="6 4" />
        <path d="M 320 220 L 470 220" stroke="#00E699" strokeWidth="2.5" strokeDasharray="6 4" />

        {/* NODE 1: Ingest Webhook (Trigger) */}
        <g transform="translate(30, 65)">
          <rect x="0" y="0" width="120" height="70" rx="8" fill="#121622" stroke="#FF4A34" strokeWidth="1.5" />
          <rect x="8" y="8" width="16" height="16" rx="4" fill="#FF4A34" />
          <text x="30" y="20" fill="#FF4A34" fontSize="10" fontWeight="700" fontFamily="monospace">WEBHOOK</text>
          <text x="10" y="42" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="sans-serif">Lead / Event Ingest</text>
          <text x="10" y="58" fill="#718096" fontSize="9" fontFamily="monospace">REST &amp; Next.js 15</text>
          <circle cx="120" cy="35" r="4" fill="#FF4A34" />
        </g>

        {/* NODE 2: AI Reasoning & Enrichment Agent */}
        <g transform="translate(250, 65)">
          <rect x="0" y="0" width="130" height="70" rx="8" fill="#121622" stroke="#00F0FF" strokeWidth="1.5" />
          <rect x="8" y="8" width="16" height="16" rx="4" fill="#00F0FF" />
          <text x="30" y="20" fill="#00F0FF" fontSize="10" fontWeight="700" fontFamily="monospace">AI AGENT</text>
          <text x="10" y="42" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="sans-serif">LLM Data Routing</text>
          <text x="10" y="58" fill="#718096" fontSize="9" fontFamily="monospace">Intent Classification</text>
          <circle cx="0" cy="35" r="4" fill="#00F0FF" />
          <circle cx="130" cy="35" r="4" fill="#00F0FF" />
          <circle cx="70" cy="70" r="4" fill="#E5B83B" />
        </g>

        {/* NODE 3: CRM & PostgreSQL Sync */}
        <g transform="translate(470, 65)">
          <rect x="0" y="0" width="120" height="70" rx="8" fill="#121622" stroke="#00E699" strokeWidth="1.5" />
          <rect x="8" y="8" width="16" height="16" rx="4" fill="#00E699" />
          <text x="30" y="20" fill="#00E699" fontSize="10" fontWeight="700" fontFamily="monospace">DATA SYNC</text>
          <text x="10" y="42" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="sans-serif">Database &amp; CRM</text>
          <text x="10" y="58" fill="#718096" fontSize="9" fontFamily="monospace">HubSpot / Supabase</text>
          <circle cx="0" cy="35" r="4" fill="#00E699" />
        </g>

        {/* NODE 4: n8n Error Queue & Notification */}
        <g transform="translate(470, 185)">
          <rect x="0" y="0" width="120" height="70" rx="8" fill="#121622" stroke="#E5B83B" strokeWidth="1.5" />
          <rect x="8" y="8" width="16" height="16" rx="4" fill="#E5B83B" />
          <text x="30" y="20" fill="#E5B83B" fontSize="10" fontWeight="700" fontFamily="monospace">AUTO DISPATCH</text>
          <text x="10" y="42" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="sans-serif">Slack &amp; WhatsApp</text>
          <text x="10" y="58" fill="#718096" fontSize="9" fontFamily="monospace">Instant Notification</text>
          <circle cx="0" cy="35" r="4" fill="#E5B83B" />
        </g>

        {/* Bottom Metrics Bar */}
        <g transform="translate(20, 290)">
          <rect x="0" y="0" width="570" height="65" rx="8" fill="#0E121A" stroke="#1A202C" strokeWidth="1" />
          <g transform="translate(20, 14)">
            <text x="0" y="14" fill="#718096" fontSize="9" fontFamily="monospace" fontWeight="600">EXECUTION SPEED</text>
            <text x="0" y="36" fill="#00E699" fontSize="16" fontWeight="700" fontFamily="monospace">&lt; 140ms</text>
          </g>
          <line x1="160" y1="12" x2="160" y2="52" stroke="#1E2533" strokeWidth="1" />
          <g transform="translate(180, 14)">
            <text x="0" y="14" fill="#718096" fontSize="9" fontFamily="monospace" fontWeight="600">AUTOMATION UPTIME</text>
            <text x="0" y="36" fill="#FFFFFF" fontSize="16" fontWeight="700" fontFamily="monospace">99.98%</text>
          </g>
          <line x1="340" y1="12" x2="340" y2="52" stroke="#1E2533" strokeWidth="1" />
          <g transform="translate(360, 14)">
            <text x="0" y="14" fill="#718096" fontSize="9" fontFamily="monospace" fontWeight="600">ERROR RETRY RESILIENCE</text>
            <text x="0" y="36" fill="#00F0FF" fontSize="16" fontWeight="700" fontFamily="monospace">Zero Lost Leads</text>
          </g>
        </g>
      </g>
    </svg>
  );
}

// =========================================================================
// STAGE 04: LAUNCH, GROW & SCALE VISUAL
// =========================================================================
function ScaleVisual() {
  return (
    <svg
      viewBox="0 0 700 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-h-[440px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
    >
      <defs>
        <linearGradient id="scaleCardBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#111622" />
          <stop offset="100%" stopColor="#080A0E" />
        </linearGradient>
        <linearGradient id="curveGlow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF4A34" />
          <stop offset="50%" stopColor="#00F0FF" />
          <stop offset="100%" stopColor="#00E699" />
        </linearGradient>
        <linearGradient id="areaFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00E699" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#00E699" stopOpacity="0.0" />
        </linearGradient>
      </defs>

      {/* Main Console Frame */}
      <rect x="20" y="20" width="660" height="480" rx="16" fill="url(#scaleCardBg)" stroke="#1E2430" strokeWidth="1.5" />

      {/* Header Bar */}
      <rect x="20" y="20" width="660" height="48" rx="16" fill="#0D1016" />
      <line x1="20" y1="68" x2="680" y2="68" stroke="#1A202C" strokeWidth="1" />
      <circle cx="48" cy="44" r="5" fill="#FF4A34" />
      <circle cx="66" cy="44" r="5" fill="#E5B83B" />
      <circle cx="84" cy="44" r="5" fill="#00E699" />
      <text x="110" y="48" fill="#8E9AA8" fontSize="12" fontFamily="monospace" fontWeight="600" letterSpacing="0.08em">
        GLOBAL EDGE INFRASTRUCTURE &amp; REVENUE VELOCITY CONSOLE
      </text>
      <rect x="540" y="34" width="120" height="22" rx="11" fill="rgba(0,230,153,0.12)" stroke="rgba(0,230,153,0.3)" strokeWidth="1" />
      <circle cx="552" cy="45" r="3.5" fill="#00E699" />
      <text x="562" y="49" fill="#00E699" fontSize="10" fontFamily="monospace" fontWeight="700">COMPOUNDING</text>

      {/* Top 3 KPI Telemetry Cards */}
      <g transform="translate(45, 85)">
        {/* Metric 1 */}
        <rect x="0" y="0" width="190" height="74" rx="8" fill="#080A0E" stroke="#1E2533" strokeWidth="1" />
        <text x="14" y="22" fill="#718096" fontSize="9" fontFamily="monospace" fontWeight="600">EDGE CLOUD UPTIME</text>
        <text x="14" y="52" fill="#FFFFFF" fontSize="22" fontWeight="700" fontFamily="sans-serif">99.99%</text>
        <text x="130" y="50" fill="#00E699" fontSize="11" fontWeight="600" fontFamily="monospace">&lt;35ms</text>

        {/* Metric 2 */}
        <rect x="210" y="0" width="190" height="74" rx="8" fill="#080A0E" stroke="#1E2533" strokeWidth="1" />
        <text x="14" y="22" fill="#718096" fontSize="9" fontFamily="monospace" fontWeight="600">ATTRIBUTION ROAS</text>
        <text x="14" y="52" fill="#FF4A34" fontSize="22" fontWeight="700" fontFamily="sans-serif">4.82x</text>
        <text x="110" y="50" fill="#00E699" fontSize="11" fontWeight="600" fontFamily="monospace">+340% YoY</text>

        {/* Metric 3 */}
        <rect x="420" y="0" width="190" height="74" rx="8" fill="#080A0E" stroke="#1E2533" strokeWidth="1" />
        <text x="14" y="22" fill="#718096" fontSize="9" fontFamily="monospace" fontWeight="600">ORGANIC KEYWORDS</text>
        <text x="14" y="52" fill="#00F0FF" fontSize="22" fontWeight="700" fontFamily="sans-serif">Top 3</text>
        <text x="100" y="50" fill="#00E699" fontSize="11" fontWeight="600" fontFamily="monospace">Rank #1 Target</text>
      </g>

      {/* Main Growth Trajectory Chart & Edge Nodes Map */}
      <g transform="translate(45, 175)">
        <rect x="0" y="0" width="610" height="290" rx="12" fill="#080A0E" stroke="#1A202C" strokeWidth="1" />

        {/* Chart Header */}
        <text x="20" y="26" fill="#718096" fontSize="10" fontFamily="monospace" fontWeight="600">COMPOUNDING REVENUE VELOCITY CURVE</text>
        <rect x="460" y="14" width="130" height="20" rx="10" fill="#121620" stroke="#1F2838" />
        <circle cx="474" cy="24" r="3" fill="#00E699" />
        <text x="484" y="27" fill="#A0AEC0" fontSize="9" fontFamily="monospace">LIVE ATTRIBUTION</text>

        {/* Chart Grid Lines */}
        <line x1="40" y1="60" x2="570" y2="60" stroke="#141924" strokeWidth="1" />
        <line x1="40" y1="110" x2="570" y2="110" stroke="#141924" strokeWidth="1" />
        <line x1="40" y1="160" x2="570" y2="160" stroke="#141924" strokeWidth="1" />
        <line x1="40" y1="210" x2="570" y2="210" stroke="#141924" strokeWidth="1" />

        {/* Chart Area Gradient Fill */}
        <path
          d="M 40 210 Q 150 200 240 170 T 400 110 T 570 55 L 570 210 L 40 210 Z"
          fill="url(#areaFill)"
        />

        {/* Main Growth Curve Line */}
        <path
          d="M 40 210 Q 150 200 240 170 T 400 110 T 570 55"
          stroke="url(#curveGlow)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Key Milestone Data Points */}
        <circle cx="40" cy="210" r="5" fill="#FF4A34" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="240" cy="170" r="5" fill="#FF7A59" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="400" cy="110" r="5" fill="#00F0FF" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="570" cy="55" r="6" fill="#00E699" stroke="#FFFFFF" strokeWidth="2" />

        {/* Pulse Ring on Current Scale Endpoint */}
        <circle cx="570" cy="55" r="14" fill="none" stroke="#00E699" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 3" />

        {/* Milestone Labels */}
        <g transform="translate(570, 55)">
          <rect x="-95" y="-32" width="90" height="24" rx="6" fill="#141B26" stroke="#00E699" strokeWidth="1" />
          <text x="-50" y="-16" fill="#00E699" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="monospace">$100k+ MRR</text>
        </g>

        {/* X Axis Timeline */}
        <g transform="translate(40, 235)">
          <text x="0" y="0" fill="#718096" fontSize="10" fontFamily="monospace">MONTH 01: LAUNCH</text>
          <text x="180" y="0" fill="#718096" fontSize="10" fontFamily="monospace">MONTH 03: AD SCALE</text>
          <text x="340" y="0" fill="#718096" fontSize="10" fontFamily="monospace">MONTH 06: SEO RANKINGS</text>
          <text x="530" y="0" fill="#00E699" fontSize="10" fontWeight="700" textAnchor="end" fontFamily="monospace">COMPOUNDING ENGINE</text>
        </g>
      </g>
    </svg>
  );
}
