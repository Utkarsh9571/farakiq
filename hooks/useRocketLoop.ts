"use client";

import React, { useEffect, useRef } from "react";
import { useMotionValue, useReducedMotion, animate, MotionValue, useInView } from "motion/react";

export interface RocketLoopState {
  rocketX: MotionValue<number>;
  rocketY: MotionValue<number>;
  rocketRotate: MotionValue<number>;
  upgrade: MotionValue<number>;
  glow: MotionValue<number>;
  flameScale: MotionValue<number>;
  progress: MotionValue<number>;
  struck: MotionValue<number>;
  promoted: MotionValue<number>;
  chipPhase: MotionValue<number>;
  smokeEmit: MotionValue<number>;
  speedActive: MotionValue<number>;
  cardX: MotionValue<number>;
  cardRotate: MotionValue<number>;
}

export function useRocketLoop(containerRef: React.RefObject<HTMLElement | null>): RocketLoopState {
  const shouldReduceMotion = useReducedMotion();
  const inView = useInView(containerRef, { amount: 0.2 });

  // Instantiate MotionValues
  const rocketX = useMotionValue(-120);
  const rocketY = useMotionValue(0);
  const rocketRotate = useMotionValue(0);
  const upgrade = useMotionValue(0);
  const glow = useMotionValue(0);
  const flameScale = useMotionValue(1);
  const progress = useMotionValue(0);
  const struck = useMotionValue(0);
  const promoted = useMotionValue(0);
  const chipPhase = useMotionValue(0);
  const smokeEmit = useMotionValue(0);
  const speedActive = useMotionValue(0);
  const cardX = useMotionValue(-120);
  const cardRotate = useMotionValue(0);

  useEffect(() => {
    // Reduced motion fallback: static perfect state
    if (shouldReduceMotion) {
      rocketX.set(0);
      rocketY.set(0);
      rocketRotate.set(0);
      upgrade.set(1);
      glow.set(0.6);
      flameScale.set(1);
      progress.set(100);
      struck.set(1);
      promoted.set(1);
      chipPhase.set(0);
      smokeEmit.set(0);
      speedActive.set(0);
      cardX.set(0);
      cardRotate.set(0);
      return;
    }

    if (!inView) {
      return;
    }

    let isCancelled = false;
    const currentAbortController: AbortController | null = new AbortController();

    const sleep = (ms: number, signal: AbortSignal) =>
      new Promise<void>((resolve) => {
        if (signal.aborted || isCancelled) return resolve();
        const timer = setTimeout(() => resolve(), ms);
        signal.addEventListener("abort", () => {
          clearTimeout(timer);
          resolve();
        });
      });

    const resetValues = () => {
      rocketX.set(-120);
      rocketY.set(0);
      rocketRotate.set(0);
      upgrade.set(0);
      glow.set(0);
      flameScale.set(1);
      progress.set(0);
      struck.set(0);
      promoted.set(0);
      chipPhase.set(0);
      smokeEmit.set(0);
      speedActive.set(1);
      cardX.set(-120);
      cardRotate.set(0);
    };

    const runLoop = async () => {
      while (!isCancelled) {
        const signal = currentAbortController?.signal || new AbortController().signal;

        resetValues();

        // 0.0s – 0.5s: Fly in
        speedActive.set(1);
        animate(rocketX, 0, { duration: 0.5, ease: [0.22, 1, 0.36, 1] });
        animate(cardX, 0, { duration: 0.5, ease: [0.22, 1, 0.36, 1] });
        await sleep(500, signal);
        if (isCancelled) break;
        speedActive.set(0);

        // 0.5s – 1.0s: Chip pop-in
        animate(chipPhase, 1, { duration: 0.5, ease: "easeInOut" });
        await sleep(500, signal);
        if (isCancelled) break;

        // 1.0s – 2.0s: Chip absorb + progress + upgrade
        animate(chipPhase, 2, { duration: 1.0, ease: "easeInOut" });
        animate(progress, 100, { duration: 1.0, ease: "easeInOut" });
        await sleep(200, signal);
        if (isCancelled) break;
        animate(upgrade, 1, { duration: 0.8, ease: "easeInOut" });
        await sleep(800, signal);
        if (isCancelled) break;

        // 2.0s – 2.5s: Strike through
        animate(struck, 1, { duration: 0.5, ease: "easeInOut" });
        await sleep(500, signal);
        if (isCancelled) break;

        // 2.5s – 3.0s: 3D Promote flip + glow
        animate(promoted, 1, { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] });
        animate(glow, 0.6, { duration: 0.5, ease: "easeOut" });
        await sleep(500, signal);
        if (isCancelled) break;

        // 3.0s – 3.7s: Flame scale + speed lines + micro-shake
        speedActive.set(1);
        animate(flameScale, 2.5, { duration: 0.7, ease: "easeInOut" });
        animate(rocketX, [0, 1.5, -1.5, 0], { duration: 0.05, repeat: 14 });
        await sleep(700, signal);
        if (isCancelled) break;

        // 3.7s – 4.2s: Launch off-screen
        smokeEmit.set(1);
        animate(rocketRotate, -20, { duration: 0.5, ease: [0.64, 0, 0.78, 0] });
        animate(rocketX, 140, { duration: 0.5, ease: [0.64, 0, 0.78, 0] });
        animate(rocketY, -90, { duration: 0.5, ease: [0.64, 0, 0.78, 0] });
        setTimeout(() => {
          if (!isCancelled) {
            animate(cardRotate, -8, { duration: 0.42, ease: [0.64, 0, 0.78, 0] });
          }
        }, 80);
        await sleep(500, signal);
        if (isCancelled) break;

        // 4.2s – 5.0s: Reset and pause before restart
        smokeEmit.set(0);
        speedActive.set(0);
        await sleep(800, signal);
      }
    };

    runLoop();

    return () => {
      isCancelled = true;
      if (currentAbortController) {
        currentAbortController.abort();
      }
    };
  }, [inView, shouldReduceMotion]);

  return {
    rocketX,
    rocketY,
    rocketRotate,
    upgrade,
    glow,
    flameScale,
    progress,
    struck,
    promoted,
    chipPhase,
    smokeEmit,
    speedActive,
    cardX,
    cardRotate,
  };
}

export default useRocketLoop;
