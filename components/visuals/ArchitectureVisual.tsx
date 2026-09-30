"use client";

import { motion } from "motion/react";

interface ArchitectureVisualProps {
  activeStageId: string;
  onSelectStage?: (stageId: string) => void;
}

const STAGES = [
  {
    id: "stage-1",
    num: "01",
    title: "DISCOVERY & ARCHITECTURE",
    sub: "System Blueprint & Domain Modeling",
    color: "#00F0FF",
    x: 100,
    y: 80,
  },
  {
    id: "stage-2",
    num: "02",
    title: "FULL-STACK ENGINEERING",
    sub: "Next.js 15, APIs & Database",
    color: "#FF4A34",
    x: 300,
    y: 80,
  },
  {
    id: "stage-3",
    num: "03",
    title: "AI WORKFLOW AUTOMATION",
    sub: "Deterministic Logic & Agents",
    color: "#00E699",
    x: 500,
    y: 80,
  },
  {
    id: "stage-4",
    num: "04",
    title: "GROWTH & ATTRIBUTION",
    sub: "Precision Ads, SEO & CRO",
    color: "#FFB800",
    x: 700,
    y: 80,
  },
];

export default function ArchitectureVisual({
  activeStageId,
  onSelectStage,
}: ArchitectureVisualProps) {
  const activeIndex = STAGES.findIndex((s) => s.id === activeStageId);
  const activeStage = STAGES[activeIndex >= 0 ? activeIndex : 0];

  return (
    <div className="relative w-full rounded-2xl border border-[#1E232E] bg-[#0A0C0F] p-4 sm:p-6 mb-8 shadow-2xl overflow-hidden">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E232E_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

      {/* Top Telemetry Terminal Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#1E232E] pb-3 mb-5 text-xs font-mono">
        <div className="flex items-center space-x-2">
          <span
            className="w-2.5 h-2.5 rounded-full animate-pulse"
            style={{ backgroundColor: activeStage.color }}
          />
          <span className="font-bold text-[#E1E4EA] tracking-wide">
            LIVE SYSTEM PIPELINE ARCHITECTURE // PHASE {activeStage.num}: {activeStage.title}
          </span>
        </div>

        <div className="flex items-center space-x-3 text-[11px] text-gray-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E699]" />
            DATA FLOW: SYNCHRONIZED
          </span>
          <span className="hidden sm:inline text-gray-600">|</span>
          <span className="hidden sm:inline text-[var(--color-primary-coral)]">
            STAGE {activeStage.num}/04 ACTIVE
          </span>
        </div>
      </div>

      {/* Interactive SVG System Diagram */}
      <div className="relative w-full aspect-[21/8] sm:aspect-[24/7] min-h-[180px]">
        <svg
          viewBox="0 0 800 160"
          className="w-full h-full select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Pulsing Core Filter */}
            <filter id="archGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <linearGradient id="pipelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="35%" stopColor="#FF4A34" />
              <stop offset="70%" stopColor="#00E699" />
              <stop offset="100%" stopColor="#FFB800" />
            </linearGradient>
          </defs>

          {/* Background Bus Conduit */}
          <line
            x1="100"
            y1="80"
            x2="700"
            y2="80"
            stroke="#181D26"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Active Data Flow Line */}
          <line
            x1="100"
            y1="80"
            x2="700"
            y2="80"
            stroke="url(#pipelineGrad)"
            strokeWidth="2"
            strokeDasharray="6 4"
            strokeOpacity="0.75"
          />

          {/* Animated Flow Energy Pulse */}
          <motion.circle
            r="4"
            fill={activeStage.color}
            filter="url(#archGlow)"
            animate={{
              cx: [100, 300, 500, 700],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            cy="80"
          />

          {/* Render 4 Architecture Pipeline Nodes */}
          {STAGES.map((stage, idx) => {
            const isActive = stage.id === activeStageId;
            const isPassed = idx <= activeIndex;

            return (
              <g
                key={stage.id}
                className="cursor-pointer group"
                onClick={() => onSelectStage && onSelectStage(stage.id)}
              >
                {/* Outer Selection Radar Ring */}
                {isActive && (
                  <motion.circle
                    cx={stage.x}
                    cy={stage.y}
                    r="34"
                    fill="none"
                    stroke={stage.color}
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.1, opacity: 0.8, rotate: 360 }}
                    transition={{
                      scale: { duration: 0.3 },
                      rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                    }}
                  />
                )}

                {/* Node Body Shell */}
                <circle
                  cx={stage.x}
                  cy={stage.y}
                  r="26"
                  fill={isActive ? "#141822" : "#0E1117"}
                  stroke={isActive ? stage.color : isPassed ? "#2E3646" : "#1A1F2A"}
                  strokeWidth={isActive ? "2" : "1.25"}
                  className="transition-all duration-300 group-hover:stroke-gray-400"
                />

                {/* Inner Stage Core */}
                <circle
                  cx={stage.x}
                  cy={stage.y}
                  r="14"
                  fill={isActive ? stage.color : isPassed ? "#222938" : "#12151D"}
                  fillOpacity={isActive ? "0.2" : "1"}
                  stroke={isActive ? stage.color : "#222938"}
                  strokeWidth="1"
                />

                {/* Stage Number Label */}
                <text
                  x={stage.x}
                  y={stage.y + 4}
                  textAnchor="middle"
                  fill={isActive ? stage.color : "#9CA3AF"}
                  fontSize="10"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {stage.num}
                </text>

                {/* Top Node Header Title */}
                <text
                  x={stage.x}
                  y={stage.y - 36}
                  textAnchor="middle"
                  fill={isActive ? "#FFFFFF" : "#6B7280"}
                  fontSize="8.5"
                  fontFamily="monospace"
                  fontWeight={isActive ? "bold" : "normal"}
                  letterSpacing="0.05em"
                >
                  {stage.title}
                </text>

                {/* Bottom Node Subtitle */}
                <text
                  x={stage.x}
                  y={stage.y + 44}
                  textAnchor="middle"
                  fill={isActive ? stage.color : "#4B5563"}
                  fontSize="7.5"
                  fontFamily="monospace"
                >
                  {stage.sub}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Stage Context Banner */}
      <div className="mt-2 pt-3 border-t border-[#1E232E] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-gray-400">
        <div className="flex items-center gap-2">
          <span className="text-[#00E699]">●</span>
          <span>Click any stage node to inspect architectural deliverables &amp; tracks.</span>
        </div>
        <div className="text-[var(--color-primary-coral)]">
          Stage 0{activeIndex + 1} of 04 // Interactive Architecture Mode
        </div>
      </div>
    </div>
  );
}
