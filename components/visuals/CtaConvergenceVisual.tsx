"use client";

import { motion } from "motion/react";

export default function CtaConvergenceVisual() {
  return (
    <div className="relative w-full rounded-xl bg-[#08090C] border border-[#1E232E] p-4 sm:p-5 my-5 shadow-xl overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,74,52,0.1)_0%,transparent_60%)] pointer-events-none" />

      {/* Concept Narrative Text */}
      <div className="flex flex-col space-y-1 max-w-full sm:max-w-[55%] z-10 text-left">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#00E699] animate-pulse" />
          <span className="mono text-[10px] text-[var(--color-primary-coral)] font-bold uppercase tracking-wider">
            SCATTERED SYSTEMS → ONE ENGINE
          </span>
        </div>
        <div className="text-xs font-semibold text-[var(--color-text-light)]">
          Unite fragmented software, AI agents, and marketing silos under one coherent operating model.
        </div>
      </div>

      {/* SVG Converging Modules Animation */}
      <div className="relative w-40 h-28 shrink-0 z-10">
        <svg viewBox="0 0 160 110" className="w-full h-full" fill="none">
          <defs>
            <filter id="ctaGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Satellite Node 1: Web / Frontend (Top-Left converging inward) */}
          <motion.g
            animate={{
              x: [-12, 0, -12],
              y: [-8, 0, -8],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <line x1="28" y1="24" x2="80" y2="55" stroke="#00F0FF" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.6" />
            <polygon points="28,14 38,24 28,34 18,24" fill="#121620" stroke="#00F0FF" strokeWidth="1.25" />
            <circle cx="28" cy="24" r="2.5" fill="#00F0FF" />
          </motion.g>

          {/* Satellite Node 2: AI Workflows (Bottom-Left converging inward) */}
          <motion.g
            animate={{
              x: [-12, 0, -12],
              y: [8, 0, 8],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <line x1="28" y1="86" x2="80" y2="55" stroke="#00E699" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.6" />
            <polygon points="28,76 38,86 28,96 18,86" fill="#121620" stroke="#00E699" strokeWidth="1.25" />
            <circle cx="28" cy="86" r="2.5" fill="#00E699" />
          </motion.g>

          {/* Satellite Node 3: Paid Ads & Performance (Top-Right converging inward) */}
          <motion.g
            animate={{
              x: [12, 0, 12],
              y: [-8, 0, -8],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <line x1="132" y1="24" x2="80" y2="55" stroke="#FF4A34" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.6" />
            <polygon points="132,14 142,24 132,34 122,24" fill="#121620" stroke="#FF4A34" strokeWidth="1.25" />
            <circle cx="132" cy="24" r="2.5" fill="#FF4A34" />
          </motion.g>

          {/* Satellite Node 4: Search & Analytics (Bottom-Right converging inward) */}
          <motion.g
            animate={{
              x: [12, 0, 12],
              y: [8, 0, 8],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            <line x1="132" y1="86" x2="80" y2="55" stroke="#FFB800" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.6" />
            <polygon points="132,76 142,86 132,96 122,86" fill="#121620" stroke="#FFB800" strokeWidth="1.25" />
            <circle cx="132" cy="86" r="2.5" fill="#FFB800" />
          </motion.g>

          {/* Central Unified Core Engine (The FARAKIQ Nexus) */}
          <g transform="translate(80, 55)">
            {/* Outer Magnetic Lock Ring */}
            <circle cx="0" cy="0" r="18" fill="#101319" stroke="#3A4354" strokeWidth="1.5" />

            {/* Radiant Internal Diamond */}
            <motion.polygon
              points="0,-12 12,0 0,12 -12,0"
              fill="#FF4A34"
              filter="url(#ctaGlow)"
              animate={{
                scale: [0.95, 1.1, 0.95],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <polygon points="0,-7 7,0 0,7 -7,0" fill="#FFFFFF" />
          </g>
        </svg>
      </div>
    </div>
  );
}
