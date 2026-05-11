"use client";

import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import GlassCard from "@/components/ui/GlassCard";
import Navbar from "@/components/sections/Navbar";
import Link from "next/link";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

export default function ProductsPage() {
  // Get products safely
  const allProducts = useMemo(() => (siteConfig as any).products || [], []);
  
  // Extract unique categories safely
  const categories = useMemo(() => {
    const cats = allProducts.map((p: any) => p.category).filter(Boolean);
    return ["전체", ...Array.from(new Set(cats))];
  }, [allProducts]);

  const [activeCategory, setActiveCategory] = useState("전체");

  const filteredProducts = useMemo(() => {
    return activeCategory === "전체" 
      ? allProducts 
      : allProducts.filter((p: any) => p.category === activeCategory);
  }, [activeCategory, allProducts]);

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-4 block">Product Lineup</span>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">발산공업 제품 전시장</h1>
            <p className="text-white/40 max-w-2xl mx-auto">
              전통의 기술력과 최첨단 AI 솔루션이 만나는 곳
            </p>
          </motion.div>

          {/* Category Sub-tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((cat: any) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all border",
                  activeCategory === cat 
                    ? "bg-accent border-accent text-white shadow-lg shadow-accent/20" 
                    : "bg-white/5 border-white/10 text-white/40 hover:text-white hover:border-white/30"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product: any, index: number) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link href={`/products/${product.id}`}>
                    <GlassCard className="group cursor-pointer overflow-hidden border-white/5 hover:border-accent/50 transition-all duration-500 h-full">
                      <div className="aspect-[16/9] overflow-hidden rounded-xl mb-6 relative bg-white/5">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => {
                            (e.target as any).src = "https://images.unsplash.com/photo-1624419616010-85f269a0319f?q=80&w=2070&auto=format&fit=crop";
                          }}
                        />
                        <div className="absolute bottom-4 left-4 z-20">
                          <span className="bg-accent/80 backdrop-blur-md text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                            {product.category}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between items-start gap-4">
                          <h2 
                            className="group-hover:text-accent transition-colors break-keep leading-tight flex flex-col gap-1"
                          >
                            <span 
                              style={{ fontSize: '30px' }}
                              className="text-blue-500 font-bold uppercase"
                            >
                              {product.name.includes(' (') ? product.name.split(' (')[1].replace(')', '') : product.id.toUpperCase()}
                            </span>
                            <span 
                              style={{ fontSize: '30px' }}
                              className="text-white font-bold"
                            >
                              {product.name.split(' (')[0]}
                            </span>
                          </h2>
                          <span className="text-white/20 text-[9px] font-mono italic mt-2 shrink-0">Balsan Tech.</span>
                        </div>
                        <p className="text-xs md:text-sm text-white/50 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                        
                        <div className="flex gap-6 pt-4 border-t border-white/5">
                          {product.keyStats?.slice(0, 3).map((stat: any, i: number) => (
                            <div key={i} className="flex flex-col">
                              <span className="text-[8px] uppercase text-white/30 tracking-widest mb-0.5">{stat.label}</span>
                              <span className="text-xs font-bold text-white/80">{stat.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <h3 className="text-xl font-bold tracking-tighter uppercase mb-2">{siteConfig.name}</h3>
            <p className="text-[10px] text-white/30">
              {siteConfig.fullName} | 대표자 : {siteConfig.representative} | 사업자등록번호 : {siteConfig.businessNumber}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
              Latest Update: {new Date().toLocaleString('en-US', { month: 'long' })} {new Date().getFullYear()}
            </span>
            <span className="text-[10px] text-white/40 font-medium">
              © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
