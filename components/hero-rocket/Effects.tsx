"use client";

import React, { useEffect, useRef } from "react";
import { animate, MotionValue, useReducedMotion, AnimationPlaybackControls } from "motion/react";

/* -------------------------------------------------------------------------- */
/*                               SPEED LINES                                  */
/* -------------------------------------------------------------------------- */

export interface SpeedLinesProps {
  active: MotionValue<number>;
  className?: string;
}

interface SpeedLineConfig {
  top: string;
  left: string;
  width: string;
  duration: number;
  delay: number;
}

const SPEED_LINE_CONFIGS: SpeedLineConfig[] = [
  { top: "38%", left: "32%", width: "70px", duration: 0.6, delay: 0 },
  { top: "44%", left: "38%", width: "85px", duration: 0.5, delay: 0.1 },
  { top: "50%", left: "30%", width: "50px", duration: 0.7, delay: 0.25 },
  { top: "56%", left: "36%", width: "90px", duration: 0.55, delay: 0.15 },
  { top: "62%", left: "28%", width: "60px", duration: 0.65, delay: 0.3 },
  { top: "68%", left: "34%", width: "45px", duration: 0.48, delay: 0.2 },
];

export function SpeedLines({ active, className = "" }: SpeedLinesProps) {
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const controls: AnimationPlaybackControls[] = [];

    const updateSpeedLines = () => {
      const isActive = active.get() > 0.5;

      // Clear previous animations
      controls.forEach((c) => c.stop());
      controls.length = 0;

      if (isActive && !shouldReduceMotion) {
        lineRefs.current.forEach((el, idx) => {
          if (!el) return;
          const cfg = SPEED_LINE_CONFIGS[idx];
          const ctrl = animate(
            el,
            {
              x: [0, -120],
              opacity: [0, 0.8, 0],
            },
            {
              duration: cfg.duration,
              delay: cfg.delay,
              repeat: Infinity,
              ease: "linear",
            }
          );
          controls.push(ctrl);
        });
      } else {
        lineRefs.current.forEach((el) => {
          if (el) el.style.opacity = "0";
        });
      }
    };

    const unsubscribe = active.on("change", updateSpeedLines);
    updateSpeedLines();

    return () => {
      unsubscribe();
      controls.forEach((c) => c.stop());
    };
  }, [active, shouldReduceMotion]);

  return (
    <div className={`absolute inset-0 pointer-events-none z-0 ${className}`}>
      {SPEED_LINE_CONFIGS.map((cfg, idx) => (
        <div
          key={idx}
          ref={(el) => {
            lineRefs.current[idx] = el;
          }}
          className="absolute rounded-full bg-[var(--color-accent-cyan,#00E5FF)] opacity-0 pointer-events-none h-[2px]"
          style={{
            top: cfg.top,
            left: cfg.left,
            width: cfg.width,
            boxShadow: "0 0 6px rgba(0, 229, 255, 0.6)",
          }}
        />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 SMOKE                                      */
/* -------------------------------------------------------------------------- */

export interface SmokeProps {
  emit: MotionValue<number>;
  origin?: { x: number; y: number }; // percentages
  className?: string;
}

const SMOKE_POOL_SIZE = 20;

export function Smoke({
  emit,
  origin = { x: 22, y: 50 },
  className = "",
}: SmokeProps) {
  const smokeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const currentIndexRef = useRef<number>(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;

    const checkEmit = () => {
      const isEmitting = emit.get() > 0.5;

      if (isEmitting && !intervalId) {
        intervalId = setInterval(() => {
          if (shouldReduceMotion) return;

          const el = smokeRefs.current[currentIndexRef.current];
          if (el) {
            const randomY = (Math.random() - 0.5) * 36;
            const randomX = -50 - Math.random() * 40;

            animate(
              el,
              {
                scale: [0.6, 1.6],
                opacity: [0.8, 0],
                x: [0, randomX],
                y: [0, randomY],
              },
              {
                duration: 1.0,
                ease: "easeOut",
              }
            );
          }

          currentIndexRef.current = (currentIndexRef.current + 1) % SMOKE_POOL_SIZE;
        }, 60);
      } else if (!isEmitting && intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    const unsubscribe = emit.on("change", checkEmit);
    checkEmit();

    return () => {
      unsubscribe();
      if (intervalId) clearInterval(intervalId);
    };
  }, [emit, shouldReduceMotion]);

  return (
    <div className={`absolute inset-0 pointer-events-none z-0 ${className}`}>
      {Array.from({ length: SMOKE_POOL_SIZE }).map((_, idx) => (
        <div
          key={idx}
          ref={(el) => {
            smokeRefs.current[idx] = el;
          }}
          className="absolute rounded-full bg-[var(--color-rk-smoke,#cfd4e0)] opacity-0 pointer-events-none"
          style={{
            left: `${origin.x}%`,
            top: `${origin.y}%`,
            width: 14,
            height: 14,
          }}
        />
      ))}
    </div>
  );
}

export default function Effects({
  speedLinesActive,
  smokeEmit,
  smokeOrigin,
}: {
  speedLinesActive: MotionValue<number>;
  smokeEmit: MotionValue<number>;
  smokeOrigin?: { x: number; y: number };
}) {
  return (
    <>
      <SpeedLines active={speedLinesActive} />
      <Smoke emit={smokeEmit} origin={smokeOrigin} />
    </>
  );
}
