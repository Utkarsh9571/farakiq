"use client";

import React, { forwardRef } from "react";
import { motion, useTransform, MotionValue, useReducedMotion } from "motion/react";

export interface RocketProps extends React.SVGProps<SVGSVGElement> {
  upgrade: MotionValue<number>;
  flameScale?: MotionValue<number>;
  glow?: MotionValue<number>;
  className?: string;
}

export const Rocket = forwardRef<SVGSVGElement, RocketProps>(function Rocket(
  { upgrade, flameScale, glow, className = "", style, ...props },
  ref
) {
  const shouldReduceMotion = useReducedMotion();

  // Opacity transforms for Layer A (average) and Layer B (perfect)
  const opacityA = useTransform(upgrade, [0, 1], [1, 0]);
  const opacityB = useTransform(upgrade, [0, 1], [0, 1]);

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 160"
      className={`w-full h-full overflow-visible ${className}`}
      style={style}
      {...props}
    >
      <defs>
        {/* Glow Radial Gradient */}
        <radialGradient id="rk-glow-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2f5fe0" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#00E5FF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#2f5fe0" stopOpacity="0" />
        </radialGradient>

        {/* Layer A (Average) Body Gradient */}
        <linearGradient id="rk-body-grad-a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9aa6bd" />
          <stop offset="100%" stopColor="#5f6c88" />
        </linearGradient>

        {/* Layer B (Perfect) Body Gradient */}
        <linearGradient id="rk-body-grad-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2f5fe0" />
          <stop offset="60%" stopColor="#1e44a5" />
          <stop offset="100%" stopColor="#141a3a" />
        </linearGradient>

        {/* Porthole Cyan Glow Gradient */}
        <linearGradient id="rk-porthole-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>

        {/* Flame Gradient */}
        <linearGradient id="rk-flame-grad" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF4A34" />
          <stop offset="50%" stopColor="#f39233" />
          <stop offset="100%" stopColor="#ffd84a" />
        </linearGradient>

        <linearGradient id="rk-flame-core" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ffd84a" />
        </linearGradient>

        {/* Soft blur filter */}
        <filter id="rk-blur-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>

      {/* Blurred Blue Radial Glow Circle */}
      {glow ? (
        <motion.circle
          cx="210"
          cy="80"
          r="100"
          fill="url(#rk-glow-grad)"
          filter="url(#rk-blur-glow)"
          style={{ opacity: glow }}
        />
      ) : (
        <circle
          cx="210"
          cy="80"
          r="100"
          fill="url(#rk-glow-grad)"
          filter="url(#rk-blur-glow)"
          opacity="0.4"
        />
      )}

      {/* Flame Layer */}
      <motion.g
        style={{
          transformOrigin: "left center",
          transformBox: "fill-box",
          scaleX: flameScale || 1,
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scaleY: [0.92, 1.08, 0.92],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 0.12,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      >
        {/* Outer Flame */}
        <path
          d="M 95 62 C 60 60 25 75 10 80 C 25 85 60 100 95 98 Z"
          fill="url(#rk-flame-grad)"
          stroke="#141a3a"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Inner Flame Core */}
        <path
          d="M 95 69 C 70 68 45 77 35 80 C 45 83 70 92 95 91 Z"
          fill="url(#rk-flame-core)"
        />
      </motion.g>

      {/* LAYER A: "Average" Rocket (Gray-blue, sad porthole, bandage patch) */}
      <motion.g style={{ opacity: opacityA }}>
        {/* Rear Nozzle */}
        <rect
          x="88"
          y="62"
          width="16"
          height="36"
          rx="3"
          fill="#5f6c88"
          stroke="#141a3a"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Top Fin A */}
        <path
          d="M 130 54 L 105 24 C 95 24 95 40 105 58 Z"
          fill="#7888a7"
          stroke="#141a3a"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Bottom Fin A */}
        <path
          d="M 130 106 L 105 136 C 95 136 95 120 105 102 Z"
          fill="#7888a7"
          stroke="#141a3a"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Rocket Body A */}
        <path
          d="M 98 56 C 140 48 240 48 290 80 C 240 112 140 112 98 104 Z"
          fill="url(#rk-body-grad-a)"
          stroke="#141a3a"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Dull Nose Cone Tip */}
        <path
          d="M 270 68 C 295 72 315 80 315 80 C 315 80 295 88 270 92 Z"
          fill="#5f6c88"
          stroke="#141a3a"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Bandage Patch on Body */}
        <g stroke="#141a3a" strokeWidth="4" strokeLinejoin="round">
          <rect
            x="142"
            y="72"
            width="22"
            height="16"
            rx="3"
            fill="#cfd4e0"
            transform="rotate(-12 153 80)"
          />
          <line x1="147" y1="74" x2="147" y2="86" stroke="#9aa6bd" strokeWidth="2" />
          <line x1="159" y1="74" x2="159" y2="86" stroke="#9aa6bd" strokeWidth="2" />
        </g>

        {/* Sad Porthole */}
        <g>
          <circle
            cx="210"
            cy="80"
            r="22"
            fill="#141a3a"
            stroke="#141a3a"
            strokeWidth="4"
          />
          <circle cx="210" cy="80" r="16" fill="#3a465e" />
          {/* Sad Frown */}
          <path
            d="M 201 87 Q 210 78 219 87"
            stroke="#9aa6bd"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          {/* Sad Eye Dots */}
          <circle cx="203" cy="76" r="2" fill="#9aa6bd" />
          <circle cx="217" cy="76" r="2" fill="#9aa6bd" />
        </g>
      </motion.g>

      {/* LAYER B: "Perfect" Rocket (Vibrant blue, pink nose/fins, lime stripe, cyan porthole, lightning badge) */}
      <motion.g style={{ opacity: opacityB }}>
        {/* Rear Nozzle B */}
        <rect
          x="88"
          y="60"
          width="18"
          height="40"
          rx="4"
          fill="#141a3a"
          stroke="#141a3a"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <rect x="90" y="64" width="12" height="32" rx="2" fill="#e83e8c" />

        {/* Top Fin B (Pink) */}
        <path
          d="M 135 52 L 100 12 C 85 12 85 36 102 58 Z"
          fill="#e83e8c"
          stroke="#141a3a"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Bottom Fin B (Pink) */}
        <path
          d="M 135 108 L 100 148 C 85 148 85 124 102 102 Z"
          fill="#e83e8c"
          stroke="#141a3a"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Rocket Body B */}
        <path
          d="M 96 54 C 142 44 245 44 320 80 C 245 116 142 116 96 106 Z"
          fill="url(#rk-body-grad-b)"
          stroke="#141a3a"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Sleek Top Highlight Arc */}
        <path
          d="M 115 58 C 160 50 230 50 285 70"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Lime Stripe */}
        <path
          d="M 245 49 C 240 68 240 92 245 111 L 262 107 C 256 89 256 71 262 53 Z"
          fill="#c6f21a"
          stroke="#141a3a"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Pink Nose Cone */}
        <path
          d="M 275 66 C 305 74 330 80 330 80 C 330 80 305 86 275 94 Z"
          fill="#e83e8c"
          stroke="#141a3a"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Lightning Bolt Badge */}
        <path
          d="M 150 68 L 141 81 L 149 81 L 140 94 L 157 78 L 148 78 Z"
          fill="#ffd84a"
          stroke="#141a3a"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Glowing Cyan Porthole */}
        <g>
          <circle
            cx="210"
            cy="80"
            r="23"
            fill="#141a3a"
            stroke="#141a3a"
            strokeWidth="4"
          />
          <circle cx="210" cy="80" r="17" fill="url(#rk-porthole-cyan)" />
          {/* Glass Glare Arc */}
          <path
            d="M 197 74 C 202 68 214 68 221 72"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Happy Smile / Eyes */}
          <path
            d="M 202 82 Q 210 90 218 82"
            stroke="#141a3a"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </motion.g>
    </svg>
  );
});

export default Rocket;
