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
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-accent/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
              {product.category}
            </span>
            <h1 
              className="tracking-tight mb-8 leading-tight break-keep flex flex-col gap-2"
            >
              <span 
                style={{ fontSize: '30px' }}
                className="text-blue-500 font-bold uppercase tracking-widest"
              >
                {product.name.includes(' (') ? product.name.split(' (')[1].replace(')', '') : product.id.toUpperCase()}
              </span>
              <span 
                style={{ fontSize: '30px' }}
                className="text-white font-bold"
              >
                {product.name.split(' (')[0]}
              </span>
            </h1>
            <p className="text-2xl text-white/80 font-medium mb-8 leading-tight">
              {product.tagline}
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              {product.keyStats.map((stat: any, i: number) => (
                <div key={i} className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">{stat.label}</div>
                  <div className="text-xl font-bold text-accent">{stat.value}</div>
                </div>
              ))}
            </div>
            <p className="text-lg text-white/50 leading-relaxed max-w-xl">
              {product.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-square glass-panel overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent z-10" />
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                // Fallback for missing images
                (e.target as any).src = "https://images.unsplash.com/photo-1624419616010-85f269a0319f?q=80&w=2070&auto=format&fit=crop";
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Core Technology Section */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Core Technology</h2>
            <p className="text-white/40">발산공업의 초격차 기술력이 집약된 핵심 엔진 사양입니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.features.map((feature: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full border-white/5 hover:border-accent/30 transition-colors">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-6 text-accent">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed Specifications */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold tracking-tight mb-6">Technical <br /> Specifications</h2>
              <p className="text-white/40 mb-8 leading-relaxed">
                정밀한 엔지니어링 설계를 통해 탄생한 각 부분의 상세 제원을 확인하세요. 모든 사양은 현장의 극한 환경을 견디도록 설계되었습니다.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-all">
                제품 카탈로그 다운로드
              </button>
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-4">
                {product.specs.map((spec: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/[0.08] transition-colors"
                  >
                    <span className="text-white/40 font-medium uppercase tracking-widest text-[10px]">{spec.label}</span>
                    <span className="text-lg font-bold">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact & Footer */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Ready to Evolve?</h2>
          <p className="text-xl text-white/50 mb-12">
            발산공업의 기술 전문가들이 귀하의 영농 환경에 최적화된 솔루션을 제안해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-accent text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-accent/20 hover:scale-105 transition-all">
              전문가 상담 신청
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              견적 요청하기
            </button>
          </div>
        </div>
      </section>
      
      <footer className="py-20 px-6 border-t border-white/10 text-center space-y-4">
        <p className="text-white/20 text-xs italic">
          ※ 상기 제원 및 외관은 제품 성능 개선을 위해 예고 없이 변경될 수 있습니다.
        </p>
        <div className="pt-8 flex flex-col items-center gap-2">
          <span className="text-accent/40 text-[10px] font-bold tracking-[0.3em] uppercase">
            Latest Update: {new Date().toLocaleString('en-US', { month: 'long' })} {new Date().getFullYear()}
          </span>
          <span className="text-white/10 text-[10px]">© {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</span>
        </div>
      </footer>
    </main>
  );
}
