"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import Navbar from "@/components/sections/Navbar";
import GlassCard from "@/components/ui/GlassCard";
import { Download, Play, FileText, Video as VideoIcon, Calendar, Clock } from "lucide-react";

function ResourcesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialTab = searchParams.get("tab") || "catalog";
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && (tab === "catalog" || tab === "video")) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(`/resources?tab=${tab}`, { scroll: false });
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block"
          >
            Resources Center
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            자료실
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 max-w-2xl mx-auto text-lg"
          >
            발산공업의 최신 기술 자료와 현장 가동 영상을 확인하실 수 있습니다. <br className="hidden md:block" />
            농업의 혁신을 이끄는 우리의 결과물을 직접 만나보세요.
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md inline-flex">
            <button
              onClick={() => handleTabChange("catalog")}
              className={`relative px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === "catalog" ? "text-black" : "text-white/50 hover:text-white"
              }`}
            >
              {activeTab === "catalog" && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-full z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <FileText size={16} />
                카다로그
              </span>
            </button>
            <button
              onClick={() => handleTabChange("video")}
              className={`relative px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === "video" ? "text-black" : "text-white/50 hover:text-white"
              }`}
            >
              {activeTab === "video" && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-full z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <VideoIcon size={16} />
                동영상
              </span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "catalog" ? (
            <motion.div
              key="catalog"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {(siteConfig as any).resources.catalogs.map((item: any) => (
                <GlassCard key={item.id} className="group overflow-hidden flex flex-col p-0">
                  <div className="aspect-[3/4] relative overflow-hidden bg-white/5">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                      onError={(e) => {
                        (e.target as any).src = "https://images.unsplash.com/photo-1586717791821-3f44a563de4c?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                      <div className="flex items-center gap-2 text-[10px] text-white/50 font-bold tracking-widest uppercase bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        <Calendar size={10} />
                        {item.date}
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-8 flex-grow">{item.description}</p>
                    <button className="w-full bg-white/10 hover:bg-accent text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group/btn">
                      <Download size={18} className="group-hover/btn:translate-y-0.5 transition-transform" />
                      PDF 다운로드
                    </button>
                  </div>
                </GlassCard>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="video"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {(siteConfig as any).resources.videos.map((item: any) => (
                <GlassCard key={item.id} className="group overflow-hidden p-0">
                  <div className="aspect-video relative overflow-hidden bg-black cursor-pointer">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                        <Play fill="white" size={24} className="ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 border border-white/10">
                      <Clock size={10} />
                      {item.duration}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                  </div>
                </GlassCard>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <main className="bg-black">
      <Navbar />
      <Suspense fallback={<div className="h-screen flex items-center justify-center text-white/20">Loading...</div>}>
        <ResourcesContent />
      </Suspense>
      
      {/* Footer (Simplified for Resources) */}
      <footer className="py-20 px-6 border-t border-white/10 text-center">
        <p className="text-xs text-white/20">© 2026 발산공업. 모든 자료의 무단 전재 및 재배포를 금지합니다.</p>
      </footer>
    </main>
  );
}
