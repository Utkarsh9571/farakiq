"use client";

import React from "react";
import { motion, useTransform, MotionValue, useReducedMotion } from "motion/react";

export const CHIP_COUNT = 7;

export const LAND_TIMES: number[] = [0.12, 0.22, 0.32, 0.42, 0.52, 0.62, 0.72];

export interface ChipLayoutItem {
  id: string;
  emoji: string;
  label: string;
  x: number; // percentage
  y: number; // percentage
}

export const CHIP_LAYOUT: ChipLayoutItem[] = [
  { id: "web-apps", emoji: "💻", label: "Web Apps", x: 15, y: 18 },
  { id: "ai-auto", emoji: "🤖", label: "AI Automation", x: 45, y: 12 },
  { id: "seo", emoji: "🚀", label: "SEO", x: 75, y: 22 },
  { id: "google-ads", emoji: "🎯", label: "Google Ads", x: 10, y: 55 },
  { id: "meta-ads", emoji: "📱", label: "Meta Ads", x: 22, y: 78 },
  { id: "cro", emoji: "📈", label: "CRO", x: 48, y: 84 },
  { id: "analytics", emoji: "📊", label: "Analytics", x: 78, y: 70 },
];

export interface SkillChipsProps {
  phase: MotionValue<number>;
  target?: { x: number; y: number };
  className?: string;
}

export function SkillChips({
  phase,
  target = { x: 52, y: 48 },
  className = "",
}: SkillChipsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {CHIP_LAYOUT.map((chip, i) => {
        // Timing bounds per chip
        const pStartPop = i * 0.08;
        const pOvershoot = pStartPop + 0.18;
        const pEndPop = pStartPop + 0.35;

        const pStartAbsorb = 1.0 + i * 0.06;
        const pEndAbsorb = Math.min(2.0, pStartAbsorb + 0.35);

        // Motion transforms driven by phase MotionValue
        const left = useTransform(
          phase,
          [0, 1.0, pStartAbsorb, pEndAbsorb, 2.0],
          [`${chip.x}%`, `${chip.x}%`, `${chip.x}%`, `${target.x}%`, `${target.x}%`]
        );

        const top = useTransform(
          phase,
          [0, 1.0, pStartAbsorb, pEndAbsorb, 2.0],
          [`${chip.y}%`, `${chip.y}%`, `${chip.y}%`, `${target.y}%`, `${target.y}%`]
        );

        const scale = useTransform(
          phase,
          [0, pStartPop, pOvershoot, pEndPop, 1.0, pStartAbsorb, pEndAbsorb, 2.0],
          [0, 0, 1.18, 1.0, 1.0, 1.0, 0.4, 0]
        );

        const opacity = useTransform(
          phase,
          [0, pStartPop, pEndPop, 1.0, pStartAbsorb, pEndAbsorb, 2.0],
          [0, 0, 1.0, 1.0, 1.0, 0, 0]
        );

        return (
          <motion.div
            key={chip.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            style={{
              left,
              top,
              scale,
              opacity,
            }}
          >
            {/* Inner Float Wrapper for Idle Floating Motion */}
            <motion.div
              className="rounded-full border-2 border-[var(--color-rk-ink,#141a3a)] shadow-[2px_2px_0_var(--color-rk-ink,#141a3a)] text-xs font-semibold bg-white text-[var(--color-rk-ink,#141a3a)] px-3 py-1.5 flex items-center gap-1.5 whitespace-nowrap select-none"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [-3, 3, -3],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 2.2 + (i % 3) * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }
              }
            >
              <span className="text-sm">{chip.emoji}</span>
              <span>{chip.label}</span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default SkillChips;
