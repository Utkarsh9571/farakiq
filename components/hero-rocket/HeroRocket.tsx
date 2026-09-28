"use client";

import React, { useRef } from "react";
import { motion, useTransform } from "motion/react";
import { HeroRocketStage } from "./HeroRocketStage";
import { Rocket } from "./Rocket";
import { StatusCard } from "./StatusCard";
import { SkillChips } from "./SkillChips";
import { SpeedLines, Smoke } from "./Effects";
//import { StickyNote } from "./StickyNote";
import { useRocketLoop } from "@/hooks/useRocketLoop";

export function HeroRocket({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loop = useRocketLoop(containerRef);

  // Transform MotionValues to string percentages for CSS transforms
  const rocketXPercent = useTransform(loop.rocketX, (v) => `${v}%`);
  const rocketYPercent = useTransform(loop.rocketY, (v) => `${v}%`);
  const cardXPercent = useTransform(loop.cardX, (v) => `${v}%`);

  return (
    <div ref={containerRef} className={`w-full h-full flex items-center justify-center ${className}`}>
      <HeroRocketStage>
        {/* Background Effects: SpeedLines & Smoke */}
        <SpeedLines active={loop.speedActive} />
        <Smoke emit={loop.smokeEmit} origin={{ x: 25, y: 48 }} />

        {/* Rocket Container Layer */}
        <motion.div
          className="absolute left-[8%] top-[24%] w-[68%] h-[52%] z-10"
          style={{
            x: rocketXPercent,
            y: rocketYPercent,
            rotate: loop.rocketRotate,
          }}
        >
          <Rocket
            upgrade={loop.upgrade}
            flameScale={loop.flameScale}
            glow={loop.glow}
          />
        </motion.div>

        {/* Skill Chips Layer */}
        <SkillChips phase={loop.chipPhase} target={{ x: 42, y: 50 }} />

        {/* Status Card Layer */}
        <motion.div
          className="absolute right-[6%] bottom-[12%] z-20"
          style={{
            x: cardXPercent,
            rotate: loop.cardRotate,
          }}
        >
          <StatusCard
            progress={loop.progress}
            struck={loop.struck}
            promoted={loop.promoted}
          />
        </motion.div>

        {/* Sticky Note Layer 
        <StickyNote />*/}
      </HeroRocketStage>
    </div>
  );
}

export default HeroRocket;
