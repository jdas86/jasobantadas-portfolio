"use client";

import Tilt from "react-parallax-tilt";
import { cn } from "@/lib/cn";

export function TiltCard({
  children,
  className = "",
  glare = true
}: {
  children: React.ReactNode;
  className?: string;
  glare?: boolean;
}) {
  return (
    <Tilt
      tiltMaxAngleX={7}
      tiltMaxAngleY={7}
      perspective={1400}
      transitionSpeed={1200}
      glareEnable={glare}
      glareMaxOpacity={0.08}
      glarePosition="all"
      scale={1.01}
      className={cn("transform-gpu", className)}
    >
      <div
        className={cn(
          "rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(2,6,23,0.92))] shadow-[0_20px_80px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md",
          "before:pointer-events-none before:absolute before:inset-0 before:rounded-[2rem] before:bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_35%,transparent_65%,rgba(168,85,247,0.07))] before:content-['']",
          "relative overflow-hidden",
          className
        )}
      >
        {children}
      </div>
    </Tilt>
  );
}
