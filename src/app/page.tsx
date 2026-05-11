"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "@/components/ui/GlassCard";
import Navbar from "@/components/sections/Navbar";
import dynamic from "next/dynamic";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

// Three.js 컴포넌트는 클라이언트 사이드에서만 로드
const AISimulator = dynamic(() => import("@/components/sections/LightSimulator"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 스크롤 스테이지별 효과 설정
  const imgScale = useTransform(scrollYProgress, [0.3, 0.8], [1, 1.15]);
  const imgOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.75, 0.85], [0, 1, 1, 0]);
  
  // 모드 전환 (0: Normal, 1: Infrared, 2: AI Scan)
  const analysisMode = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 2]);
  const infraredOpacity = useTransform(scrollYProgress, [0.45, 0.5, 0.65, 0.7], [0, 1, 1, 0]);
  const aiScanOpacity = useTransform(scrollYProgress, [0.65, 0.7, 0.85], [0, 1, 1]);

  return (
    <main ref={containerRef} className="relative bg-black text-white">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full animate-pulse delay-700" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl"
        >
          <span className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-widest text-white/50 mb-6 uppercase">
            {siteConfig.branding.tagline}
          </span>
          <h1 className="mb-8 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent whitespace-pre-line text-5xl md:text-7xl font-bold tracking-tighter">
            {siteConfig.branding.heroTitle}
          </h1>
          <p className="max-w-2xl mx-auto mb-10 text-white/60">
            {siteConfig.branding.heroDescription}
          </p>
          <button 
            onClick={() => window.location.href = '/technology/ai-inspector'}
            className="bg-accent text-white px-8 py-4 rounded-full font-bold hover:scale-105 hover:bg-accent/90 transition-all active:scale-95 shadow-lg shadow-accent/20"
          >
            AI 온라인 검사 시작하기
          </button>
        </motion.div>
      </section>

      {/* 2. AI Vision Scrollytelling Section */}
      <section id="exploded-section" className="relative h-[400vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          {/* Base Layer (Normal) */}
          <motion.div style={{ scale: imgScale, opacity: imgOpacity }} className="absolute inset-0 z-0">
            <img src="/ai_bean_inspection_hero_1778486435206.png" alt="Normal View" className="w-full h-full object-cover opacity-40" />
          </motion.div>

          {/* Infrared Layer */}
          <motion.div 
            style={{ scale: imgScale, opacity: infraredOpacity }} 
            className="absolute inset-0 z-10 bg-blue-900/20 mix-blend-color-dodge backdrop-sepia-[0.8] backdrop-hue-rotate-[250deg]"
          />

          {/* AI Scan Layer */}
          <motion.div style={{ scale: imgScale, opacity: aiScanOpacity }} className="absolute inset-0 z-20">
            {/* Scan Line */}
            <motion.div 
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[2px] bg-accent shadow-[0_0_20px_rgba(46,204,113,1)] z-30"
            />
            {/* Bounding Boxes Simulation */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[30%] left-[25%] w-24 h-24 border border-accent/60 border-dashed animate-pulse" />
              <div className="absolute top-[50%] left-[60%] w-32 h-32 border border-red-500/60 border-dashed animate-pulse" />
              <div className="absolute top-[20%] left-[70%] w-20 h-20 border border-yellow-500/60 border-dashed animate-pulse" />
            </div>
            <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-25" />

          <div className="relative z-40 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 pointer-events-none">
            <div className="flex flex-col justify-center space-y-64">
              {siteConfig.threeModel.parts.map((part, index) => {
                const stepOpacity = useTransform(
                  scrollYProgress, 
                  [0.3 + index * 0.15, 0.4 + index * 0.15, 0.5 + index * 0.15, 0.6 + index * 0.15], 
                  [0, 1, 1, 0]
                );
                return (
                  <motion.div key={part.id} style={{ opacity: stepOpacity }} className="max-w-md">
                    <span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">Step 0{index + 1}</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{part.title}</h2>
                    <p className="text-white/80 text-lg leading-relaxed">{part.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tech Specs Section */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-center mb-16 text-5xl font-bold tracking-tight">The Edge of Intelligence.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.features.map((feature, index) => (
            <GlassCard key={index} className="hover:border-accent/30 transition-colors group">
              <h3 className="text-xl mb-4 font-semibold text-accent group-hover:text-white transition-colors">{feature.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Link 
            href="/products"
            className="group inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-lg"
          >
            모든 제품 라인업 보기 <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* 4. AI Simulator Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="mb-16">
          <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">AI Precision Lab</span>
          <h2 className="text-5xl font-bold italic tracking-tighter">See Through the Grain.</h2>
          <p className="mt-4 text-white/40 max-w-xl">
            단순한 촬영을 넘어 콩의 깊은 곳까지 분석합니다. 발산공업의 초격차 AI 알고리즘이 구현하는 정밀 분석 레이어를 직접 제어해 보세요.
          </p>
        </div>
        <AISimulator />
        
        <div className="mt-16 text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/technology/ai-inspector'}
            className="bg-accent text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-accent/90 transition-all shadow-xl shadow-accent/20"
          >
            AI 온라인 검사 시작하기
          </motion.button>
          <p className="mt-4 text-white/30 text-sm">※ 실제 기계에서 촬영된 데이터를 기반으로 분석이 진행됩니다.</p>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
        <GlassCard className="grid grid-cols-1 md:grid-cols-2 gap-16 p-12">
          <div>
            <h2 className="font-bold mb-8 leading-tight">
              <span style={{ fontSize: '30px', color: 'white', display: 'block', marginBottom: '8px' }}>농업의 파트너,</span>
              <span style={{ fontSize: '60px', color: '#3b82f6', fontWeight: '900', letterSpacing: '-0.05em' }}>발산공업</span>
            </h2>
            <p className="text-white/50 mb-12">농업 현장의 고민을, 발산공업의 40년 전통의 노하우를 바탕으로 최적화된 맞춤형 제품과 서비스를 제공해 드리겠습니다.</p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-accent font-bold w-16">이메일</div>
                <div className="text-white/80">{siteConfig.email}</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-accent font-bold w-16">대표전화</div>
                <div className="text-white/80">{siteConfig.phone}</div>
              </div>
            </div>
          </div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-[10px] text-white/30 uppercase tracking-widest ml-2">성함 / 업체명</label>
              <input type="text" placeholder="성함을 입력해주세요" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-accent transition-colors" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-white/30 uppercase tracking-widest ml-2">연락처 또는 이메일</label>
              <input type="text" placeholder="답변 받으실 연락처를 입력해주세요" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-accent transition-colors" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-white/30 uppercase tracking-widest ml-2">문의 내용</label>
              <textarea placeholder="제품 견적 문의, AI 솔루션 도입 등 궁금하신 내용을 자유롭게 남겨주세요." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-accent transition-colors resize-none" />
            </div>
            <button className="w-full bg-accent text-white font-bold py-4 rounded-xl hover:bg-accent/80 transition-all shadow-lg shadow-accent/20">상담 신청하기</button>
          </form>
        </GlassCard>
      </section>

      {/* 6. Footer */}
      <footer className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <h3 className="text-2xl font-bold tracking-tighter mb-4 uppercase">{siteConfig.name}</h3>
            <p className="text-xs text-white/30 leading-relaxed max-w-md">
              {siteConfig.fullName} | 대표자 : {siteConfig.representative} | 사업자등록번호 : {siteConfig.businessNumber}<br />
              {siteConfig.address}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 text-xs text-white/40">
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            </div>
            <div className="flex items-center gap-4 border-l border-white/10 pl-8">
              <span className="text-accent/50 font-bold tracking-widest uppercase">
                Latest Update: {new Date().toLocaleString('en-US', { month: 'long' })} {new Date().getFullYear()}
              </span>
              <span className="text-white/20">© {new Date().getFullYear()} {siteConfig.name}. all rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
