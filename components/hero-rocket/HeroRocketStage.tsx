"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

export interface HeroRocketStageProps {
  children?: React.ReactNode;
  className?: string;
}

interface SparkleConfig {
  id: number;
  top: string;
  left: string;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

interface ConfettiConfig {
  id: number;
  top: string;
  left: string;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

const SPARKLES: SparkleConfig[] = [
  { id: 1, top: "12%", left: "15%", size: 18, color: "var(--color-rk-blue, #2f5fe0)", duration: 2.2, delay: 0 },
  { id: 2, top: "22%", left: "78%", size: 22, color: "var(--color-waste, #FF4A34)", duration: 2.7, delay: 0.4 },
  { id: 3, top: "45%", left: "8%", size: 16, color: "var(--color-rk-flame-2, #ffd84a)", duration: 2.0, delay: 0.8 },
  { id: 4, top: "68%", left: "88%", size: 20, color: "var(--color-rk-blue, #2f5fe0)", duration: 2.5, delay: 0.2 },
  { id: 5, top: "82%", left: "20%", size: 14, color: "var(--color-waste, #FF4A34)", duration: 2.9, delay: 1.1 },
  { id: 6, top: "88%", left: "70%", size: 16, color: "var(--color-rk-lime, #c6f21a)", duration: 2.4, delay: 0.6 },
];

const CONFETTI: ConfettiConfig[] = [
  { id: 1, top: "30%", left: "85%", size: 8, color: "var(--color-rk-pink, #e83e8c)", duration: 5.0, delay: 0.3 },
  { id: 2, top: "75%", left: "12%", size: 10, color: "var(--color-rk-flame, #f39233)", duration: 6.0, delay: 1.2 },
];

function FourPointSparkle({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-full h-full"
      style={{ color }}
    >
      <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
    </svg>
  );
}

export function HeroRocketStage({ children, className = "" }: HeroRocketStageProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={`relative overflow-hidden w-full h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] aspect-[4/3] sm:aspect-[16/11] rounded-2xl border border-[var(--color-rule-light,rgba(255,255,255,0.08))] block bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] ${className}`}
    >
      {/* Soft radial glow top-right in brand orange */}
      <div
        className="pointer-events-none absolute -top-12 -right-12 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(255,74,52,0.12)_0%,transparent_70%)] blur-2xl"
        aria-hidden="true"
      />

      {/* Twinkling Sparkles */}
      {SPARKLES.map((sp) => (
        <motion.div
          key={sp.id}
          className="absolute pointer-events-none z-0"
          style={{
            top: sp.top,
            left: sp.left,
            width: sp.size,
            height: sp.size,
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.2, 1, 0.2],
                  scale: [0.85, 1.15, 0.85],
                  rotate: [0, 45, 0],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: sp.duration,
                  delay: sp.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          aria-hidden="true"
        >
          <FourPointSparkle color={sp.color} />
        </motion.div>
      ))}

      {/* Drifting Confetti Squares */}
      {CONFETTI.map((cf) => (
        <motion.div
          key={cf.id}
          className="absolute pointer-events-none z-0 rounded-sm"
          style={{
            top: cf.top,
            left: cf.left,
            width: cf.size,
            height: cf.size,
            backgroundColor: cf.color,
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -12, 0],
                  rotate: [0, 45, 90, 45, 0],
                  opacity: [0.4, 0.9, 0.4],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: cf.duration,
                  delay: cf.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          aria-hidden="true"
        />
      ))}

      {/* Children Layer (Rocket, card, chips, effects) */}
      <div className="absolute inset-0 z-10">{children}</div>
    </div>
  );
}

export default HeroRocketStage;
