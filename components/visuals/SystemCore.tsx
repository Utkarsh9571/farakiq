"use client";

import { motion } from "motion/react";

export type SystemObjectType =
  | "dev-stack"
  | "data-cube"
  | "growth-geometry"
  | "growth-graph"
  | "search-prism"
  | "system-core"
  | "identity-core"
  | "system-nodes"
  | "ai-core"
  | "pricing-starter"
  | "pricing-growth"
  | "pricing-scale";

interface SystemCoreProps {
  type: SystemObjectType;
  alt?: string;
  size?: number;
  className?: string;
  floatAnimation?: boolean;
}

export default function SystemCore({
  type,
  alt = "FARAKIQ System Geometry",
  size = 280,
  className = "",
  floatAnimation = true,
}: SystemCoreProps) {
  // Map legacy type names to current canonical types
  const resolvedType =
    type === "data-cube" || type === "ai-core"
      ? "dev-stack"
      : type === "growth-graph"
      ? "growth-geometry"
      : type === "identity-core"
      ? "system-core"
      : type;

  return (
    <motion.div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{
        width: "100%",
        maxWidth: `${size}px`,
        aspectRatio: "1 / 1",
      }}
      role="img"
      aria-label={alt}
      animate={floatAnimation ? { y: [-4, 4, -4] } : {}}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Background Soft Studio Ambient Aura */}
      <div className="absolute inset-2 rounded-full bg-[radial-gradient(circle,rgba(255,74,52,0.12)_0%,rgba(0,240,255,0.06)_40%,transparent_70%)] blur-xl pointer-events-none" />

      {/* SVG Industrial Design Visualizations (No Text, No Labels, Clean Product Renders) */}
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
      >
        <defs>
          {/* Studio Lighting Gradients */}
          <linearGradient id="metalDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#252A34" />
            <stop offset="50%" stopColor="#15181F" />
            <stop offset="100%" stopColor="#0B0D11" />
          </linearGradient>

          <linearGradient id="metalPlateTop" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#323846" />
            <stop offset="50%" stopColor="#212630" />
            <stop offset="100%" stopColor="#181B22" />
          </linearGradient>

          <linearGradient id="metalPlateSide" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E222A" />
            <stop offset="100%" stopColor="#0E1015" />
          </linearGradient>

          <linearGradient id="coralGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B4A" />
            <stop offset="100%" stopColor="#FF4A34" />
          </linearGradient>

          <linearGradient id="cyanGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="#00B8D9" />
          </linearGradient>

          <linearGradient id="emeraldGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E699" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          {/* Core Glow Filter */}
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ============================================================ */}
        {/* TYPE B1: DEVELOPMENT & AI SYSTEMS (Modular Software Object) */}
        {/* ============================================================ */}
        {resolvedType === "dev-stack" && (
          <g transform="translate(120, 120)">
            {/* Ambient Base Shadow */}
            <ellipse cx="0" cy="74" rx="72" ry="18" fill="rgba(0,0,0,0.4)" />

            {/* Bottom Module: Data & Infrastructure (Isometric Block) */}
            <g transform="translate(0, 36)">
              {/* Top Face */}
              <polygon
                points="0,-18 54,6 0,30 -54,6"
                fill="url(#metalPlateTop)"
                stroke="#323846"
                strokeWidth="1"
              />
              {/* Left Face */}
              <polygon
                points="-54,6 0,30 0,44 -54,20"
                fill="url(#metalPlateSide)"
                stroke="#1E232E"
                strokeWidth="1"
              />
              {/* Right Face */}
              <polygon
                points="0,30 54,6 54,20 0,44"
                fill="#0E1015"
                stroke="#1E232E"
                strokeWidth="1"
              />
              {/* Cyan Accent Bevel Line */}
              <path
                d="M -54 6 L 0 30 L 54 6"
                stroke="#00F0FF"
                strokeWidth="1.5"
                strokeOpacity="0.75"
              />
            </g>

            {/* Middle Module: Logic & API Layer */}
            <g transform="translate(0, 6)">
              {/* Top Face */}
              <polygon
                points="0,-18 48,4 0,26 -48,4"
                fill="url(#metalDarkGrad)"
                stroke="#3E4554"
                strokeWidth="1"
              />
              {/* Left Face */}
              <polygon
                points="-48,4 0,26 0,38 -48,16"
                fill="url(#metalPlateSide)"
                stroke="#1E232E"
                strokeWidth="1"
              />
              {/* Right Face */}
              <polygon
                points="0,26 48,4 48,16 0,38"
                fill="#0A0C0F"
                stroke="#1E232E"
                strokeWidth="1"
              />
              {/* Micro-light Channels */}
              <circle cx="-16" cy="15" r="1.75" fill="#00E699" />
              <circle cx="0" cy="20" r="1.75" fill="#00F0FF" />
              <circle cx="16" cy="15" r="1.75" fill="#FF4A34" />
            </g>

            {/* Top Module: AI & Intelligence Core (Floating Diamond Stack) */}
            <g transform="translate(0, -28)">
              {/* Top Face */}
              <polygon
                points="0,-22 40,-2 0,18 -40,-2"
                fill="url(#metalPlateTop)"
                stroke="#4A5265"
                strokeWidth="1.25"
              />
              {/* Left Face */}
              <polygon
                points="-40,-2 0,18 0,32 -40,12"
                fill="url(#metalPlateSide)"
                stroke="#1E232E"
                strokeWidth="1"
              />
              {/* Right Face */}
              <polygon
                points="0,18 40,-2 40,12 0,32"
                fill="#0B0D11"
                stroke="#1E232E"
                strokeWidth="1"
              />

              {/* Central Glowing Core Emitter */}
              <polygon
                points="0,-12 20,-2 0,8 -20,-2"
                fill="url(#coralGlowGrad)"
                filter="url(#softGlow)"
                opacity="0.9"
              />
              <polygon points="0,-8 12,-2 0,4 -12,-2" fill="#FFF2EE" />
            </g>

            {/* Connecting Vertical Energy Rods */}
            <line x1="-32" y1="-12" x2="-32" y2="40" stroke="#00F0FF" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
            <line x1="32" y1="-12" x2="32" y2="40" stroke="#FF4A34" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
          </g>
        )}

        {/* ============================================================ */}
        {/* TYPE B2: PAID GROWTH & PERFORMANCE (Ascending Dimensional Structure) */}
        {/* ============================================================ */}
        {resolvedType === "growth-geometry" && (
          <g transform="translate(120, 120)">
            {/* Ambient Shadow */}
            <ellipse cx="0" cy="72" rx="68" ry="16" fill="rgba(0,0,0,0.4)" />

            {/* Pillar 1: Base Tier (Left) */}
            <g transform="translate(-46, 24)">
              <polygon points="0,-10 20,-2 0,6 -20,-2" fill="url(#metalPlateTop)" stroke="#2C323E" strokeWidth="1" />
              <polygon points="-20,-2 0,6 0,36 -20,28" fill="url(#metalPlateSide)" stroke="#1E232E" strokeWidth="1" />
              <polygon points="0,6 20,-2 20,28 0,36" fill="#0E1015" stroke="#1E232E" strokeWidth="1" />
            </g>

            {/* Pillar 2: Mid Tier (Center) */}
            <g transform="translate(0, -2)">
              <polygon points="0,-12 24,-2 0,8 -24,-2" fill="url(#metalPlateTop)" stroke="#3A4252" strokeWidth="1" />
              <polygon points="-24,-2 0,8 0,62 -24,52" fill="url(#metalPlateSide)" stroke="#1E232E" strokeWidth="1" />
              <polygon points="0,8 24,-2 24,52 0,62" fill="#0E1015" stroke="#1E232E" strokeWidth="1" />
              {/* Cyan Pulse Notch */}
              <line x1="-24" y1="-2" x2="0" y2="8" stroke="#00F0FF" strokeWidth="1.5" strokeOpacity="0.8" />
            </g>

            {/* Pillar 3: High Tier Peak (Right) */}
            <g transform="translate(46, -32)">
              <polygon points="0,-14 26,-2 0,10 -26,-2" fill="url(#metalPlateTop)" stroke="#4A5468" strokeWidth="1.2" />
              <polygon points="-26,-2 0,10 0,92 -26,80" fill="url(#metalPlateSide)" stroke="#1E232E" strokeWidth="1" />
              <polygon points="0,10 26,-2 26,80 0,92" fill="#0B0D11" stroke="#1E232E" strokeWidth="1" />

              {/* Coral Radiant Growth Cap */}
              <polygon points="0,-14 26,-2 0,10 -26,-2" fill="url(#coralGlowGrad)" opacity="0.35" filter="url(#softGlow)" />
              <polygon points="0,-10 16,-2 0,6 -16,-2" fill="url(#coralGlowGrad)" opacity="0.9" />
              <line x1="-26" y1="-2" x2="0" y2="10" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" />
            </g>

            {/* Ascending Dynamic Signal Path Beam */}
            <path
              d="M -46 22 L 0 -4 L 46 -34"
              stroke="#00E699"
              strokeWidth="2"
              strokeDasharray="4 3"
              strokeOpacity="0.8"
            />
            <circle cx="-46" cy="22" r="3" fill="#00F0FF" />
            <circle cx="0" cy="-4" r="3.5" fill="#00E699" />
            <circle cx="46" cy="-34" r="4.5" fill="#FF4A34" filter="url(#softGlow)" />
          </g>
        )}

        {/* ============================================================ */}
        {/* TYPE B3: ORGANIC SEARCH & DISCOVERY (Prism / Lens Geometry) */}
        {/* ============================================================ */}
        {resolvedType === "search-prism" && (
          <g transform="translate(120, 120)">
            {/* Ambient Base Shadow */}
            <ellipse cx="0" cy="70" rx="64" ry="14" fill="rgba(0,0,0,0.35)" />

            {/* Outer Hexagonal Focusing Ring */}
            <polygon
              points="0,-70 56,-32 56,32 0,70 -56,32 -56,-32"
              fill="url(#metalPlateSide)"
              stroke="#2A303C"
              strokeWidth="1.5"
            />

            {/* Inner Precision Aperture */}
            <polygon
              points="0,-52 42,-24 42,24 0,52 -42,24 -42,-24"
              fill="#08090C"
              stroke="#3B4455"
              strokeWidth="1"
            />

            {/* Optical Refraction Prism Planes */}
            <polygon
              points="0,-40 34,20 -34,20"
              fill="url(#metalDarkGrad)"
              stroke="#4B566B"
              strokeWidth="1.2"
              strokeOpacity="0.9"
            />

            {/* Split Refraction Ray Paths */}
            <line x1="-68" y1="-24" x2="-8" y2="-4" stroke="#00F0FF" strokeWidth="2" strokeOpacity="0.8" />
            <line x1="-8" y1="-4" x2="52" y2="-32" stroke="#FF4A34" strokeWidth="1.75" strokeOpacity="0.85" />
            <line x1="-8" y1="-4" x2="64" y2="2" stroke="#00F0FF" strokeWidth="1.75" strokeOpacity="0.85" />
            <line x1="-8" y1="-4" x2="56" y2="36" stroke="#00E699" strokeWidth="1.75" strokeOpacity="0.85" />

            {/* Central Focal Node Point */}
            <circle cx="-8" cy="-4" r="6" fill="#00F0FF" filter="url(#softGlow)" />
            <circle cx="-8" cy="-4" r="2.5" fill="#FFFFFF" />

            {/* Target Alignment Rings */}
            <circle cx="52" cy="-32" r="3" fill="#FF4A34" />
            <circle cx="64" cy="2" r="3" fill="#00F0FF" />
            <circle cx="56" cy="36" r="3" fill="#00E699" />
          </g>
        )}

        {/* ============================================================ */}
        {/* TYPE B4: FARAKIQ SYSTEM IDENTITY CORE (About Section) */}
        {/* ============================================================ */}
        {resolvedType === "system-core" && (
          <g transform="translate(120, 120)">
            {/* Ambient Base Studio Floor Shadow */}
            <ellipse cx="0" cy="78" rx="74" ry="18" fill="rgba(0,0,0,0.55)" />

            {/* Orbiting Telemetry Halo Ring 1 (Outer Deep Orbit) */}
            <ellipse
              cx="0"
              cy="0"
              rx="92"
              ry="36"
              fill="none"
              stroke="#2E3748"
              strokeWidth="1.25"
              strokeDasharray="4 8"
              transform="rotate(-24)"
            />

            {/* Orbiting Telemetry Halo Ring 2 (Active Energy Ring) */}
            <ellipse
              cx="0"
              cy="0"
              rx="84"
              ry="30"
              fill="none"
              stroke="url(#coralGlowGrad)"
              strokeWidth="1.5"
              strokeDasharray="8 14"
              strokeOpacity="0.75"
              transform="rotate(22)"
            />

            {/* Orbiting Cyan Sub-Orbit */}
            <ellipse
              cx="0"
              cy="0"
              rx="68"
              ry="22"
              fill="none"
              stroke="#00F0FF"
              strokeWidth="1"
              strokeDasharray="3 6"
              strokeOpacity="0.5"
              transform="rotate(-5)"
            />

            {/* Outer Protective Floating Brackets */}
            <g transform="rotate(12)">
              <path d="M -64 -20 L -74 0 L -64 20" stroke="#4A5568" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M 64 -20 L 74 0 L 64 20" stroke="#4A5568" strokeWidth="2" fill="none" strokeLinecap="round" />
              <circle cx="-74" cy="0" r="2.5" fill="#00F0FF" />
              <circle cx="74" cy="0" r="2.5" fill="#FF4A34" />
            </g>

            {/* Central Precision Hex-Icosahedral Metallic Core Body */}
            <g>
              {/* Back Geometry Bevels */}
              <polygon points="0,-56 46,-18 0,0" fill="url(#metalPlateTop)" stroke="#525E75" strokeWidth="1.2" />
              <polygon points="0,-56 -46,-18 0,0" fill="url(#metalDarkGrad)" stroke="#3E485A" strokeWidth="1.2" />

              {/* Middle Flank Plates */}
              <polygon points="46,-18 56,20 0,44 0,0" fill="#0C0E13" stroke="#465267" strokeWidth="1.2" />
              <polygon points="-46,-18 -56,20 0,44 0,0" fill="url(#metalPlateSide)" stroke="#2D3442" strokeWidth="1.2" />

              {/* Lower Foundation Planes */}
              <polygon points="0,0 56,20 0,56" fill="#080A0D" stroke="#323B4A" strokeWidth="1.2" />
              <polygon points="0,0 -56,20 0,56" fill="#141820" stroke="#323B4A" strokeWidth="1.2" />

              {/* Precision Micro Channels & Seams */}
              <line x1="0" y1="-56" x2="0" y2="56" stroke="#1E232E" strokeWidth="1.5" />
              <line x1="-56" y1="20" x2="56" y2="20" stroke="#252B36" strokeWidth="1" strokeDasharray="3 3" />

              {/* Recessed Glowing Core Chamber */}
              <polygon
                points="0,-24 22,-4 0,16 -22,-4"
                fill="#0A0C10"
                stroke="#FF4A34"
                strokeWidth="1.5"
              />

              {/* Internal Radiant Energy Diamond */}
              <polygon
                points="0,-16 14,-4 0,8 -14,-4"
                fill="url(#coralGlowGrad)"
                filter="url(#softGlow)"
                opacity="0.95"
              />
              <polygon points="0,-10 8,-4 0,2 -8,-4" fill="#FFFFFF" />

              {/* Cyan Micro Signal Dots */}
              <circle cx="0" cy="-38" r="2" fill="#00F0FF" filter="url(#softGlow)" />
              <circle cx="-30" cy="2" r="2" fill="#00E699" />
              <circle cx="30" cy="2" r="2" fill="#FFB800" />
            </g>

            {/* Orbiting Satellite Node Beads with Trail Beams */}
            <g transform="rotate(22)">
              <circle cx="84" cy="0" r="4.5" fill="#FF4A34" filter="url(#softGlow)" />
              <circle cx="84" cy="0" r="2" fill="#FFFFFF" />
              <circle cx="-84" cy="0" r="3.5" fill="#00F0FF" filter="url(#softGlow)" />
            </g>
          </g>
        )}

        {/* ============================================================ */}
        {/* TYPE B5: SYSTEM NODES (Interconnected Cluster) */}
        {/* ============================================================ */}
        {resolvedType === "system-nodes" && (
          <g transform="translate(120, 120)">
            {/* Cluster Interconnect Lines */}
            <line x1="-42" y1="-32" x2="0" y2="0" stroke="#3A4354" strokeWidth="1.5" />
            <line x1="42" y1="-28" x2="0" y2="0" stroke="#3A4354" strokeWidth="1.5" />
            <line x1="-36" y1="36" x2="0" y2="0" stroke="#3A4354" strokeWidth="1.5" />
            <line x1="38" y1="38" x2="0" y2="0" stroke="#3A4354" strokeWidth="1.5" />
            <line x1="-42" y1="-32" x2="42" y2="-28" stroke="#FF4A34" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />
            <line x1="-36" y1="36" x2="38" y2="38" stroke="#00F0FF" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />

            {/* Node 1: Top Left */}
            <g transform="translate(-42, -32)">
              <circle cx="0" cy="0" r="14" fill="url(#metalPlateTop)" stroke="#00F0FF" strokeWidth="1.25" />
              <circle cx="0" cy="0" r="4" fill="#00F0FF" />
            </g>

            {/* Node 2: Top Right */}
            <g transform="translate(42, -28)">
              <circle cx="0" cy="0" r="14" fill="url(#metalPlateTop)" stroke="#FF4A34" strokeWidth="1.25" />
              <circle cx="0" cy="0" r="4" fill="#FF4A34" />
            </g>

            {/* Node 3: Bottom Left */}
            <g transform="translate(-36, 36)">
              <circle cx="0" cy="0" r="12" fill="url(#metalPlateSide)" stroke="#3A4354" strokeWidth="1" />
              <circle cx="0" cy="0" r="3.5" fill="#00E699" />
            </g>

            {/* Node 4: Bottom Right */}
            <g transform="translate(38, 38)">
              <circle cx="0" cy="0" r="12" fill="url(#metalPlateSide)" stroke="#3A4354" strokeWidth="1" />
              <circle cx="0" cy="0" r="3.5" fill="#FFB800" />
            </g>

            {/* Center Master Node */}
            <g transform="translate(0, 0)">
              <circle cx="0" cy="0" r="22" fill="url(#metalDarkGrad)" stroke="#4E5A70" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="14" fill="#0C0E12" stroke="#FF4A34" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="6" fill="#FF4A34" filter="url(#softGlow)" />
              <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
            </g>
          </g>
        )}

        {/* ============================================================ */}
        {/* TYPE B6: PRICING TIER MOTIFS (Minimalist Geometric Symbols) */}
        {/* ============================================================ */}
        {resolvedType === "pricing-starter" && (
          <g transform="translate(120, 120)">
            <polygon points="0,-36 36,0 0,36 -36,0" fill="url(#metalPlateTop)" stroke="#00F0FF" strokeWidth="1.5" />
            <polygon points="0,-18 18,0 0,18 -18,0" fill="#0A0C0F" stroke="#00F0FF" strokeWidth="1" />
            <circle cx="0" cy="0" r="3.5" fill="#00F0FF" />
          </g>
        )}

        {resolvedType === "pricing-growth" && (
          <g transform="translate(120, 120)">
            <polygon points="-24,-24 0,0 -24,24 -48,0" fill="url(#metalPlateSide)" stroke="#3A4354" strokeWidth="1" />
            <polygon points="24,-24 48,0 24,24 0,0" fill="url(#metalPlateTop)" stroke="#FF4A34" strokeWidth="1.5" />
            <line x1="-24" y1="0" x2="24" y2="0" stroke="#FF4A34" strokeWidth="2" strokeDasharray="3 2" />
            <circle cx="24" cy="0" r="4" fill="#FF4A34" filter="url(#softGlow)" />
            <circle cx="-24" cy="0" r="3.5" fill="#00E699" />
          </g>
        )}

        {resolvedType === "pricing-scale" && (
          <g transform="translate(120, 120)">
            <polygon points="0,-42 42,0 0,42 -42,0" fill="url(#metalDarkGrad)" stroke="#4A5468" strokeWidth="1.5" />
            <polygon points="0,-24 24,0 0,24 -24,0" fill="url(#coralGlowGrad)" opacity="0.3" filter="url(#softGlow)" />
            <polygon points="0,-16 16,0 0,16 -16,0" fill="url(#coralGlowGrad)" />
            <circle cx="0" cy="-42" r="3" fill="#00F0FF" />
            <circle cx="42" cy="0" r="3" fill="#00E699" />
            <circle cx="0" cy="42" r="3" fill="#FF4A34" />
            <circle cx="-42" cy="0" r="3" fill="#FFB800" />
          </g>
        )}
      </svg>
    </motion.div>
  );
}
