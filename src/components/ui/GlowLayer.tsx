"use client";

import { useMouseGlow } from "@/hooks/useMouseGlow";

export default function GlowLayer() {
  useMouseGlow();
  return <div className="glow-layer" />;
}
