"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import GlassCard from "@/components/ui/GlassCard";
import Navbar from "@/components/sections/Navbar";
import { cn } from "@/lib/utils";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;

  // Find the product data from siteConfig
  const product = (siteConfig as any).products?.find((p: any) => p.id === productId);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <button 
            onClick={() => router.push("/products")}
            className="text-accent hover:underline"
          >
            Go back to products
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <Navbar />

      {/* 1. Hero Section - 제품명 & 주요 이미지 */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-accent/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-accent/20 text-accent text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-accent/30">
                {product.category}
              </span>
              <span className="text-white/20 text-[10px] font-mono tracking-widest uppercase">Ref. {product.id}</span>
            </div>

            <h1 className="mb-8 leading-tight tracking-tighter">
              <span className="block text-accent text-lg font-bold mb-2 uppercase tracking-widest">
                {product.name.includes(' (') ? product.name.split(' (')[1].replace(')', '') : product.id.toUpperCase()}
              </span>
              <span className="text-5xl md:text-6xl font-bold block">
                {product.name.split(' (')[0]}
              </span>
            </h1>

            {/* 용도 (Purpose) 섹션 */}
            <div className="mb-10 p-6 bg-white/5 border-l-4 border-accent rounded-r-2xl">
              <span className="text-[10px] text-accent font-bold uppercase tracking-widest block mb-2">용도 및 목적 (Purpose)</span>
              <p className="text-xl text-white/90 font-medium leading-snug">
                {product.tagline || "전문 농가를 위한 최적의 농업 솔루션"}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              {product.keyStats?.map((stat: any, i: number) => (
                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl group hover:border-accent/30 transition-colors">
                  <div className="text-[9px] uppercase tracking-widest text-white/40 mb-1 group-hover:text-accent/60 transition-colors">{stat.label}</div>
                  <div className="text-lg font-bold text-white/80">{stat.value}</div>
                </div>
              ))}
            </div>

            <p className="text-lg text-white/40 leading-relaxed max-w-xl">
              {product.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full animate-pulse" />
            <GlassCard className="relative overflow-hidden aspect-square flex items-center justify-center p-0 border-white/10">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as any).src = "https://images.unsplash.com/photo-1624419616010-85f269a0319f?q=80&w=2070&auto=format&fit=crop";
                }}
              />
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* 2. Core Features Section (기술적 특징) */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Core Technology</h2>
              <p className="text-white/40">발산공업의 초격차 기술력이 집약된 핵심 엔진 사양입니다.</p>
            </div>
            <div className="h-px flex-grow bg-white/5 mx-8 hidden md:block" />
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Engineering Standards</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.features?.length > 0 ? (
              product.features.map((feature: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="h-full border-white/5 hover:border-accent/30 transition-all group">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-6 text-accent font-bold text-sm border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all">
                      0{i + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {feature.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))
            ) : (
              // Features가 없을 때 보여줄 템플릿 (Placeholder)
              [1, 2, 3].map((_, i) => (
                <div key={i} className="border border-dashed border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center opacity-30">
                  <div className="w-10 h-10 border border-dashed border-white/20 rounded-lg mb-4" />
                  <div className="h-4 w-32 bg-white/10 rounded-full mb-2" />
                  <div className="h-3 w-48 bg-white/5 rounded-full" />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* 3. Detailed Specifications (상세 제원) */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1 sticky top-32">
              <h2 className="text-4xl font-bold tracking-tight mb-6 uppercase italic">Technical <br /> Specs.</h2>
              <p className="text-white/40 mb-8 leading-relaxed">
                정밀한 엔지니어링 설계를 통해 탄생한 각 부분의 상세 제원입니다. 모든 사양은 현장의 극한 환경을 견디도록 설계되었습니다.
              </p>
              <button className="w-full bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-2">
                <span>PDF 카탈로그 다운로드</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12 a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              </button>
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-2">
                {product.specs?.length > 0 ? (
                  product.specs.map((spec: any, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="flex justify-between items-center p-6 bg-white/5 rounded-xl border border-white/5 hover:border-accent/20 hover:bg-white/[0.08] transition-all group"
                    >
                      <span className="text-white/40 font-bold uppercase tracking-widest text-[10px] group-hover:text-accent transition-colors">{spec.label}</span>
                      <span className="text-lg font-bold group-hover:text-white transition-colors">{spec.value}</span>
                    </motion.div>
                  ))
                ) : (
                  // Specs가 없을 때 보여줄 템플릿
                  [1, 2, 3, 4, 5].map((_, i) => (
                    <div key={i} className="flex justify-between items-center p-6 border border-dashed border-white/5 rounded-xl opacity-20">
                      <div className="h-3 w-20 bg-white/20 rounded-full" />
                      <div className="h-4 w-40 bg-white/20 rounded-full" />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Footer & Contact */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-accent text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Ready to Evolve</span>
          <h2 className="text-5xl font-bold mb-8 tracking-tighter">귀하의 영농 환경에 <br /> 최적의 기술을 제안합니다.</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-accent text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-accent/20 hover:scale-105 hover:bg-accent/80 transition-all">
              구매 및 상담 신청
            </button>
          </div>
        </div>
      </section>
      
      <footer className="py-20 px-6 border-t border-white/5 text-center">
        <p className="text-white/20 text-[10px] uppercase tracking-widest mb-4">
          Balsan Engineering Industrial Standards
        </p>
        <span className="text-white/10 text-[9px]">© {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</span>
      </footer>
    </main>
  );
}
