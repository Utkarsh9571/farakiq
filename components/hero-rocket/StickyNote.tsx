"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

export interface StickyNoteProps {
  text?: string;
  className?: string;
}

export function StickyNote({
  text = "P.S. Your competitors are already shipping. Yet. 😉",
  className = "",
}: StickyNoteProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 1, y: 0, rotate: -4 }
          : { opacity: 0, y: 16, rotate: -4 }
      }
      animate={{ opacity: 1, y: 0, rotate: -4 }}
      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      className={`absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-30 w-[180px] sm:w-[200px] p-3.5 rounded-sm bg-yellow-300 text-amber-950 font-bold text-base sm:text-lg leading-snug shadow-md shadow-black/25 pointer-events-auto select-none before:content-[''] before:absolute before:-top-3.5 before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-4.5 before:bg-white/50 before:border before:border-white/40 before:backdrop-blur-[1px] before:rotate-[-2deg] before:shadow-sm ${className}`}
      style={{ fontFamily: "var(--font-caveat), cursive" }}
    >
      <p>{text}</p>
    </motion.div>
  );
}

export default StickyNote;
