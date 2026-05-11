"use client";

import Navbar from "@/components/sections/Navbar";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { Zap, Shield, Cpu, Wind, Sun, Eye } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

// 아이콘 룩업 테이블
const icons = [Wind, Eye, Cpu, Zap, Shield, Sun];

export default function TechnologyPage() {
  const { technology } = siteConfig;

  return (
    <main className="min-h-screen bg-black text-white pb-32 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent/5 blur-[150px] -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent whitespace-pre-line"
          >
            {technology.heroTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/50 max-w-3xl mx-auto whitespace-pre-line"
          >
            {technology.heroDescription}
          </motion.p>
        </div>
      </section>

      {/* Visual Tech Grid */}
      <section className="px-6 max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {technology.features.map((tech, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full p-10 border-white/5 hover:border-accent/30 transition-colors">
                  <Icon className={`w-12 h-12 ${tech.color} mb-8`} />
                  <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                  <p className="text-white/40 leading-relaxed">
                    {tech.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto bg-white/5 rounded-[40px] border border-white/10 p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px]" />
          <h2 className="text-4xl font-bold mb-12">The Efficiency Standard.</h2>
          
          <div className="space-y-12">
            <div>
              <div className="flex justify-between mb-4 text-sm font-mono uppercase tracking-widest">
                <span>{siteConfig.name} Efficiency</span>
                <span className="text-accent">140 lm/W</span>
              </div>
              <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  className="h-full bg-accent"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-4 text-sm font-mono uppercase tracking-widest text-white/30">
                <span>Industry Average</span>
                <span>100 lm/W</span>
              </div>
              <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "65%" }}
                  className="h-full bg-white/20"
                />
              </div>
            </div>
          </div>

          <p className="mt-12 text-white/40 text-sm">
            * 2026년 자체 테스트 결과 기준이며, 실제 사용 환경에 따라 다를 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
