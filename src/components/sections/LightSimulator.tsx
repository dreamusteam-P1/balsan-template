"use client";

import { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function AISimulator() {
  const [sensitivity, setSensitivity] = useState(70); 
  const [layer, setLayer] = useState("AI"); // RAW, INFRARED, AI

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
      <div className="lg:col-span-2 aspect-video glass-panel overflow-hidden relative group">
        {/* Base Image */}
        <motion.img 
          key={layer + (sensitivity >= 50 ? "-full" : "-base")}
          src={(layer === "AI" && sensitivity >= 50) ? "/ai_analysis_full.png" : "/ai_analysis_base.png"} 
          alt="AI Analysis" 
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            layer === "RAW" ? "saturate-100 contrast-100" : 
            layer === "INFRARED" ? "sepia-[0.8] hue-rotate-[250deg] saturate-[1.5] contrast-[1.2]" : 
            "saturate-[1.2] brightness-[0.8]"
          )}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
        />

        {/* AI Detection Overlay Simulation */}
        {layer === "AI" && (
          <div className="absolute inset-0 z-10">
            {/* Simulation of bounding boxes using SVG */}
            <svg className="w-full h-full opacity-90">
              {/* Perfectly Aligned Bounding Boxes for the New Demo Image */}
              {[
                {x: "0%", y: "66%", c: "green", s: 5},  // Hidden in Baseline
                {x: "10%", y: "62%", c: "green", s: 5},  
                {x: "21%", y: "58%", c: "red", s: 52},   // Spots
                {x: "32%", y: "54%", c: "green", s: 15},
                {x: "41%", y: "50%", c: "green", s: 20},
                {x: "49%", y: "46%", c: "green", s: 25},
                {x: "57%", y: "42%", c: "green", s: 30},
                {x: "65%", y: "38%", c: "red", s: 65},   // Cracked
                {x: "72%", y: "34%", c: "green", s: 35},
                {x: "78%", y: "30%", c: "green", s: 40},
                {x: "85%", y: "26%", c: "green", s: 45},
                {x: "91%", y: "22%", c: "green", s: 50},
              ].map((b, i) => (
                <motion.rect 
                  key={`demo-${i}`}
                  animate={{ 
                    opacity: sensitivity > b.s ? 1 : 0,
                    scale: sensitivity > b.s ? 1 : 0.8
                  }}
                  x={b.x} y={b.y} width="7%" height="10%" 
                  fill="none" 
                  stroke={b.c === "red" ? "#e74c3c" : "#2ecc71"} 
                  strokeWidth={b.c === "red" ? "2.5" : "1.5"}
                  rx="2"
                />
              ))}

              {/* Data points (Yellow dots) on analyzed beans */}
              {[
                {x: "24.5%", y: "62%", s: 90},
                {x: "68.5%", y: "40%", s: 95},
              ].map((b, i) => (
                <motion.circle 
                  key={`dot-${i}`}
                  animate={{ opacity: sensitivity > b.s ? 1 : 0 }}
                  cx={b.x} cy={b.y} r="3" fill="#f1c40f"
                />
              ))}
            </svg>

            {/* Scanning Line Effect - Only in Balsan AI state */}
            {sensitivity >= 50 && (
              <motion.div 
                className="absolute top-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_15px_#2ecc71] z-20 pointer-events-none"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            )}
          </div>
        )}

        <div className="absolute top-6 left-6 pointer-events-none z-30">
          <span className="text-xs uppercase tracking-widest text-white/40">AI Vision Simulation</span>
          <h4 className="text-2xl font-bold">{layer} Mode / {sensitivity}% Precision</h4>
        </div>
      </div>

      <GlassCard className="space-y-8">
        <div>
          <label className="block text-sm font-medium mb-4 text-white/60">Analysis Layer</label>
          <div className="grid grid-cols-3 gap-2 p-1 bg-white/5 rounded-xl border border-white/10">
            {["RAW", "INFRARED", "AI"].map((m) => (
              <button
                key={m}
                onClick={() => setLayer(m)}
                className={cn(
                  "py-2 text-[10px] font-bold rounded-lg transition-all",
                  layer === m ? "bg-accent text-white" : "text-white/40 hover:text-white"
                )}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <label className="block text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Technology Comparison</label>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Existing Inspector Option */}
            <button
              onClick={() => setSensitivity(0)}
              className={cn(
                "relative p-6 rounded-2xl border transition-all duration-500 text-left overflow-hidden group",
                sensitivity < 50 
                  ? "bg-white/10 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]" 
                  : "bg-white/5 border-white/5 opacity-50 hover:opacity-80"
              )}
            >
              <span className="text-[10px] uppercase tracking-tighter text-white/40 block mb-2">Conventional</span>
              <span className="text-xl font-bold text-white tracking-tight">기존 검사기</span>
              {sensitivity < 50 && (
                <motion.div layoutId="active-pill" className="absolute bottom-0 left-0 w-full h-1 bg-white/40" />
              )}
            </button>

            {/* Balsan AI Option */}
            <button
              onClick={() => setSensitivity(100)}
              className={cn(
                "relative p-6 rounded-2xl border transition-all duration-500 text-left overflow-hidden group",
                sensitivity >= 50 
                  ? "bg-accent/20 border-accent/40 shadow-[0_0_30px_rgba(46,204,113,0.2)]" 
                  : "bg-white/5 border-white/5 opacity-50 hover:opacity-80"
              )}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className={cn(
                    "text-[10px] uppercase tracking-tighter block mb-2",
                    sensitivity >= 50 ? "text-accent" : "text-white/40"
                  )}>Balsan Intelligence</span>
                  <span className={cn(
                    "text-xl font-bold tracking-tight",
                    sensitivity >= 50 ? "text-accent" : "text-white"
                  )}>발산 AI</span>
                </div>
                {sensitivity >= 50 && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 rounded-full bg-accent animate-pulse" 
                  />
                )}
              </div>
              {sensitivity >= 50 && (
                <motion.div layoutId="active-pill" className="absolute bottom-0 left-0 w-full h-1 bg-accent" />
              )}
            </button>
          </div>
          
          <div className="pt-4">
            <p className="text-xs text-white/30 leading-relaxed">
              {sensitivity >= 50 
                ? "발산공업의 AI 솔루션은 미세한 결점까지 99.8%의 정확도로 검출하며, 실시간 데이터를 리포트합니다."
                : "기존의 광학 선별 방식은 명확한 파손 위주로 검출하며, 미세한 변색이나 균열 판별에 한계가 있습니다."
              }
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10">
          <p className="text-xs leading-relaxed text-white/40 italic">
            "See Through the Grain."<br /><br />
            기존의 광학 선별기로는 놓치기 쉬운 미세한 결함까지 발산공업의 독자적인 AI 엔진이 완벽하게 찾아냅니다. 
            차원이 다른 정밀도의 차이를 직접 확인해 보세요.
          </p>
        </div>
      </GlassCard>
    </div>
  );
}
