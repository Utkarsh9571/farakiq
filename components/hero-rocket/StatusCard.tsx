"use client";

import React from "react";
import { motion, useTransform, MotionValue } from "motion/react";

export interface StatusCardProps {
  progress: MotionValue<number>;
  struck: MotionValue<number>;
  promoted: MotionValue<number>;
  beforeTitle?: string;
  afterTitle?: string;
  caption?: string;
  className?: string;
}

export function StatusCard({
  progress,
  struck,
  promoted,
  beforeTitle = "Without FARAKIQ 😩",
  afterTitle = "With FARAKIQ 🚀",
  caption = "PERFORMANCE",
  className = "",
}: StatusCardProps) {
  // Motion transforms
  const rotateFront = useTransform(promoted, [0, 1], [0, 180]);
  const rotateBack = useTransform(promoted, [0, 1], [-180, 0]);
  const fillWidth = useTransform(progress, (v) => `${Math.min(100, Math.max(0, v))}%`);
  const captionText = useTransform(progress, (v) => `${caption} ${Math.round(v)}%`);

  return (
    <div
      className={`relative w-[220px] min-h-[115px] [perspective:1000px] ${className}`}
    >
      {/* Front Face (White / Light Background - Unpromoted) */}
      <motion.div
        className="absolute inset-0 p-4 rounded-xl border-[3px] border-[var(--color-rk-ink,#141a3a)] bg-white text-[var(--color-rk-ink,#141a3a)] shadow-[4px_4px_0_var(--color-rk-ink,#141a3a)] flex flex-col justify-between [backface-visibility:hidden] [transform-style:preserve-3d]"
        style={{ rotateX: rotateFront }}
      >
        {/* Title + Strike Through */}
        <div className="relative inline-block font-bold text-xs sm:text-sm tracking-tight pr-1">
          <span>{beforeTitle}</span>
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[3px] bg-[var(--color-rk-pink,#e83e8c)] rounded-full pointer-events-none"
            style={{ scaleX: struck, transformOrigin: "left center" }}
          />
        </div>

        {/* Progress & Caption */}
        <div className="space-y-1.5 mt-2">
          <div className="flex justify-between items-center text-[10px] font-mono font-bold tracking-wider opacity-80">
            <motion.span>{captionText}</motion.span>
          </div>
          <div className="w-full h-[6px] bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--color-rk-blue,#2f5fe0)] via-[var(--color-rk-pink,#e83e8c)] to-[var(--color-rk-lime,#c6f21a)] rounded-full"
              style={{ width: fillWidth }}
            />
          </div>
        </div>
      </motion.div>

      {/* Back Face (Dark Navy Background - Promoted) */}
      <motion.div
        className="absolute inset-0 p-4 rounded-xl border-[3px] border-[var(--color-rk-ink,#141a3a)] bg-[var(--color-rk-ink,#141a3a)] text-[var(--color-rk-lime,#c6f21a)] shadow-[4px_4px_0_var(--color-rk-ink,#141a3a)] flex flex-col justify-between [backface-visibility:hidden] [transform-style:preserve-3d]"
        style={{ rotateX: rotateBack }}
      >
        {/* Title */}
        <div className="font-extrabold text-xs sm:text-sm tracking-tight text-white flex items-center gap-1">
          <span>{afterTitle}</span>
        </div>

        {/* Progress & Caption */}
        <div className="space-y-1.5 mt-2">
          <div className="flex justify-between items-center text-[10px] font-mono font-bold tracking-wider text-[var(--color-rk-lime,#c6f21a)]">
            <motion.span>{captionText}</motion.span>
          </div>
          <div className="w-full h-[6px] bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--color-rk-blue,#2f5fe0)] via-[var(--color-rk-pink,#e83e8c)] to-[var(--color-rk-lime,#c6f21a)] rounded-full"
              style={{ width: fillWidth }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default StatusCard;
