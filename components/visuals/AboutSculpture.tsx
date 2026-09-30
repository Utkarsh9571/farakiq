"use client";

import { motion } from "motion/react";

export default function AboutSculpture() {
  return (
    <div className="relative w-full h-full min-h-[420px] flex-1 rounded-2xl overflow-hidden border border-[#1E232E] bg-[#07080B] shadow-2xl flex items-center justify-center p-4 sm:p-6 select-none group">
      {/* Studio Atmosphere Ambient Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,74,52,0.06)_0%,rgba(0,240,255,0.03)_40%,transparent_75%)] pointer-events-none" />

      {/* Floating 3D Physical Editorial Sculpture Assembly */}
      <motion.div
        className="relative w-full h-full max-w-[440px] flex items-center justify-center"
        initial={{ opacity: 0, y: 16, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        animate={{
          y: [-4, 4, -4],
        }}
        whileHover={{
          y: -8,
          scale: 1.02,
          transition: { duration: 0.35, ease: "easeOut" },
        }}
        role="img"
        aria-label="FARAKIQ Three-Part Interconnected System Sculpture"
      >
        <svg
          viewBox="0 0 800 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-[500px] object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.85)]"
        >
          <defs>
            {/* Studio Floor Ambient Shadow */}
            <radialGradient id="aboutFloorShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#000000" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>

            {/* Brushed Matte Graphite Material (Base & Foundation) */}
            <linearGradient id="sculpGraphiteTop" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#2D3442" />
              <stop offset="40%" stopColor="#202530" />
              <stop offset="100%" stopColor="#14171E" />
            </linearGradient>

            <linearGradient id="sculpGraphiteLeft" x1="0%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#1E232B" />
              <stop offset="100%" stopColor="#0D0F13" />
            </linearGradient>

            <linearGradient id="sculpGraphiteRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#15181E" />
              <stop offset="100%" stopColor="#08090C" />
            </linearGradient>

            {/* Brushed Titanium Vertical Monolith (Growth / Momentum) */}
            <linearGradient id="sculpTitaniumFront" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#4A566B" />
              <stop offset="30%" stopColor="#2E3544" />
              <stop offset="70%" stopColor="#191D26" />
              <stop offset="100%" stopColor="#0E1116" />
            </linearGradient>

            <linearGradient id="sculpTitaniumFlank" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1D222B" />
              <stop offset="100%" stopColor="#090A0D" />
            </linearGradient>

            <linearGradient id="sculpTitaniumTop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6C7B97" />
              <stop offset="50%" stopColor="#525F76" />
              <stop offset="100%" stopColor="#353D4C" />
            </linearGradient>

            {/* Smoked Obsidian Glass (Intelligence / AI Core) */}
            <linearGradient id="sculpSmokedObsidian" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1D2430" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#11151E" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#080A0E" stopOpacity="0.98" />
            </linearGradient>

            {/* Subtle Internal Coral Light Emission */}
            <linearGradient id="sculpCoralGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B4E" />
              <stop offset="100%" stopColor="#FF3E26" />
            </linearGradient>

            <radialGradient id="sculpInternalWarmth" cx="45%" cy="45%" r="60%">
              <stop offset="0%" stopColor="#FF5C38" stopOpacity="0.4" />
              <stop offset="40%" stopColor="#FF3E26" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>

            {/* Precision Edge Specular Glint */}
            <linearGradient id="sculpSpecular" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#E2E8F0" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.95" />
            </linearGradient>

            {/* Restrained Cyan Edge Refraction */}
            <linearGradient id="sculpCyanEdge" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#00B8D9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#008099" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Studio Floor Contact Shadows */}
          <ellipse cx="400" cy="740" rx="280" ry="64" fill="url(#aboutFloorShadow)" />
          <ellipse cx="400" cy="735" rx="190" ry="32" fill="#000000" fillOpacity="0.85" />

          {/* Assembly Group */}
          <g transform="translate(0, 20)">
            {/* FORM 1: ARCHITECTURAL FOUNDATION (Structure & Engineering) */}
            <g id="sculpture-base">
              <polygon
                points="400,520 620,610 400,700 180,610"
                fill="url(#sculpGraphiteTop)"
                stroke="#333B49"
                strokeWidth="1.5"
              />
              <polygon
                points="180,610 400,700 400,735 180,645"
                fill="url(#sculpGraphiteLeft)"
                stroke="#181D24"
                strokeWidth="1.5"
              />
              <polygon
                points="400,700 620,610 620,645 400,735"
                fill="url(#sculpGraphiteRight)"
                stroke="#12151B"
                strokeWidth="1.5"
              />
              <path
                d="M 180 610 L 400 700 L 620 610"
                stroke="url(#sculpSpecular)"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeOpacity="0.75"
              />
              <polygon
                points="400,555 540,612 400,670 260,612"
                fill="#0A0C10"
                stroke="#1E242E"
                strokeWidth="1.25"
              />
            </g>

            {/* FORM 2: ASCENDING VERTICAL MONOLITH (Growth & Momentum) */}
            <g id="sculpture-monolith">
              <polygon
                points="400,555 510,600 450,650 350,610"
                fill="#040507"
                fillOpacity="0.7"
              />
              <polygon
                points="340,160 460,210 460,590 340,540"
                fill="url(#sculpTitaniumFront)"
                stroke="#3A4454"
                strokeWidth="1.25"
              />
              <polygon
                points="460,210 520,185 520,565 460,590"
                fill="url(#sculpTitaniumFlank)"
                stroke="#202632"
                strokeWidth="1.25"
              />
              <polygon
                points="340,160 400,135 520,185 460,210"
                fill="url(#sculpTitaniumTop)"
                stroke="#627088"
                strokeWidth="1.5"
              />
              <line
                x1="340"
                y1="160"
                x2="460"
                y2="210"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeOpacity="0.85"
              />
              <line
                x1="460"
                y1="210"
                x2="520"
                y2="185"
                stroke="url(#sculpCyanEdge)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="460"
                y1="210"
                x2="460"
                y2="590"
                stroke="url(#sculpSpecular)"
                strokeWidth="1.25"
                strokeOpacity="0.6"
              />
            </g>

            {/* FORM 3: CENTRAL INTELLIGENT CORE (Intelligence & AI) */}
            <g id="sculpture-core">
              <circle cx="375" cy="465" r="95" fill="url(#sculpInternalWarmth)" />
              <polygon
                points="270,440 375,385 450,445 375,540"
                fill="#06080B"
                fillOpacity="0.85"
              />
              <polygon
                points="375,385 450,445 375,475 300,415"
                fill="url(#sculpSmokedObsidian)"
                stroke="#364050"
                strokeWidth="1.25"
              />
              <polygon
                points="300,415 375,475 375,555 300,495"
                fill="#12161E"
                stroke="#2D3644"
                strokeWidth="1.25"
              />
              <polygon
                points="375,475 450,445 450,525 375,555"
                fill="#0B0E14"
                stroke="#242B36"
                strokeWidth="1.25"
              />
              <path
                d="M 375 385 L 375 475 L 450 525"
                stroke="url(#sculpCoralGlow)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="375" cy="475" r="4.5" fill="#FF4A34" />
              <circle cx="375" cy="475" r="2" fill="#FFFFFF" />
              <path
                d="M 300 415 L 375 385"
                stroke="#00F0FF"
                strokeWidth="1.5"
                strokeOpacity="0.6"
                strokeLinecap="round"
              />
              <ellipse
                cx="375"
                cy="470"
                rx="115"
                ry="42"
                fill="none"
                stroke="#2B3342"
                strokeWidth="1"
                strokeDasharray="6 12"
                strokeOpacity="0.6"
                transform="rotate(-18 375 470)"
              />
            </g>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
