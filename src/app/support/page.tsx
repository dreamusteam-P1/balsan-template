"use client";

import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import GlassCard from "@/components/ui/GlassCard";
import Navbar from "@/components/sections/Navbar";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "notice", name: "공지사항" },
  { id: "inquiry", name: "구매문의" },
  { id: "as", name: "구매처 및 A/S 안내" },
];

const notices = [
  { id: 1, title: "들깨탈곡기 제품은 '제품소개 - HOT제품'에서 확인 가능합니다.", date: "2026.05.11", category: "안내" },
  { id: 2, title: "2026년형 AI 지능형 콩 품질 검사 시스템 출시 안내", date: "2026.04.15", category: "신제품" },
  { id: 3, title: "발산공업 공식 홈페이지 리뉴얼 오픈 안내", date: "2026.03.01", category: "공지" },
];

const asNetwork = [
  { region: "전라북도", agencies: [
    { name: "김제 아세아", addr: "전북 김제시 벽지산로 255(교동)", tel: "063-542-0196" },
    { name: "완주 아세아", addr: "전북 완주군 봉동읍 낙평리 1223-1", tel: "063-263-9595" },
    { name: "김제농기계백화점", addr: "전북 김제시 교동 121-1", tel: "063-542-0944" },
    { name: "부안 대동", addr: "전북 부안군 부안읍 모산리 602-1", tel: "063-584-1500" },
  ]},
  { region: "서울·경기도", agencies: [
    { name: "신농 평택대리점", addr: "경기 평택시 진위면 마산리 182-10", tel: "031-664-2399" },
    { name: "신성농기계", addr: "경기 수원시 권선구 고색동 431-1", tel: "031-291-9595" },
    { name: "신성광기계상사", addr: "경기 평택시 합정동 859-35", tel: "031-655-7200" },
    { name: "이천 대동", addr: "경기 이천시 갈산동 141-3", tel: "031-638-8122" },
    { name: "네오종합기계", addr: "경기 부천시 원미구 중동 1085-13", tel: "032-321-8766" },
  ]},
  { region: "강원도", agencies: [
    { name: "트랙터월드 설악점", addr: "강원 고성군 죽왕면 삼포길 9", tel: "033-636-3543" },
    { name: "트랙터월드", addr: "강원 인제군 북면 금강로 19", tel: "033-462-0400" },
    { name: "영월 동양농기계", addr: "강원 영월군 북면 문곡리 369-4", tel: "033-372-3157" },
    { name: "중앙정밀", addr: "강원 정선군 정선읍 봉양3리 239-2", tel: "033-562-0157" },
    { name: "삼척 국제대동", addr: "강원 삼척시 남양동 329-2", tel: "033-573-4500" },
  ]},
  { region: "충청도", agencies: [
    { name: "괴산아세아", addr: "충북 괴산군 괴산읍 대덕리 191-3", tel: "043-833-8485" },
    { name: "제천 대동공업", addr: "충북 제천시 고암동 707-1", tel: "043-652-1882" },
    { name: "충주 국제농기계", addr: "충북 충주시 대소원면 대소원로 101", tel: "043-852-4345" },
    { name: "합덕 성광농기구", addr: "충남 당진시 합덕읍 버그내 1길 194", tel: "041-362-2192" },
    { name: "논산 동양", addr: "충남 논산시 대교동 151-10", tel: "041-732-2674" },
  ]},
  { region: "경상도", agencies: [
    { name: "승진상사", addr: "경북 예천군 예천읍 백전리 119-2", tel: "054-654-2004" },
    { name: "거창 아세아", addr: "경남 거창군 거창읍 대동리 126-3", tel: "055-943-5933" },
    { name: "창녕 대동", addr: "경남 창녕군 창녕읍 직교리 652", tel: "055-533-2489" },
  ]},
  { region: "전라남도", agencies: [
    { name: "구례 엘지", addr: "전남 구례군 구례읍 봉동리", tel: "061-782-9185" },
    { name: "무안 국제", addr: "전남 무안군 무안읍 성남리 814-11", tel: "061-453-2621" },
    { name: "보성 동양", addr: "전남 보성군 보성읍 원봉리 10-1", tel: "061-852-3465" },
    { name: "화순 대동", addr: "전남 화순군 화순읍 삼천리 420", tel: "061-372-8800" },
  ]},
];

function SupportContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("notice");
  const [selectedRegion, setSelectedRegion] = useState("전라북도");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && tabs.find(t => t.id === tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase mb-6 block">Customer Support</span>
        <h1 className="!text-[32px] md:!text-[42px] font-black tracking-tight mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent whitespace-nowrap leading-tight">
          어떠한 고민도 함께 해결하겠습니다.
        </h1>
        <p className="text-white/40 max-w-3xl mx-auto !text-[24px] font-light leading-relaxed">
          발산공업은 제품 그 이상의 신뢰를 제공합니다.
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-8 py-4 rounded-2xl text-sm md:text-base font-bold transition-all duration-500",
              activeTab === tab.id 
                ? "bg-accent text-black shadow-[0_0_30px_rgba(46,204,113,0.3)]" 
                : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
            )}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {/* 1. Notice Tab (Premium List Style) */}
          {activeTab === "notice" && (
            <div className="border-t border-white/10">
              {notices.map((notice) => (
                <div key={notice.id} className="group border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-all">
                  <div className="px-6 py-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                    <div className="flex items-center gap-6 shrink-0">
                      <span className="w-12 text-sm text-white/20 font-mono">#{notice.id}</span>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-lg uppercase">{notice.category}</span>
                    </div>
                    <h3 className="!text-lg md:!text-xl font-medium text-white/80 group-hover:text-white transition-colors flex-grow break-keep leading-snug">
                      {notice.title}
                    </h3>
                    <div className="text-sm text-white/20 font-mono shrink-0">{notice.date}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 2. Inquiry Tab */}
          {activeTab === "inquiry" && (
            <div className="max-w-2xl mx-auto">
              <GlassCard className="p-8 space-y-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">구매 및 제품 상담</h3>
                  <p className="text-white/40 text-xs">전문 상담원이 영업일 기준 24시간 이내에 답변 드립니다.</p>
                </div>
                
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest">성함 / 업체명</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" placeholder="홍길동" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest">연락처</label>
                      <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" placeholder="010-0000-0000" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest">이메일 주소</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" placeholder="example@email.com" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest">문의 내용</label>
                    <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm h-32 focus:outline-none focus:border-accent transition-colors resize-none" placeholder="문의하실 내용을 상세히 적어주세요."></textarea>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <input type="checkbox" id="privacy" className="w-4 h-4 rounded border-white/10 bg-white/5 accent-accent" />
                    <label htmlFor="privacy" className="text-xs text-white/50">개인정보 수집 및 이용에 동의합니다.</label>
                  </div>
                  <button className="w-full py-4 bg-accent text-black text-sm font-black rounded-xl hover:scale-[1.01] active:scale-95 transition-all shadow-lg">
                    문의하기 신청
                  </button>
                </form>
              </GlassCard>
            </div>
          )}

          {/* 3. A/S Network Tab */}
          {activeTab === "as" && (
            <div className="space-y-12">
              <div className="flex flex-wrap justify-center gap-3">
                {asNetwork.map((group) => (
                  <button
                    key={group.region}
                    onClick={() => setSelectedRegion(group.region)}
                    className={cn(
                      "px-6 py-3 rounded-xl text-sm font-bold transition-all",
                      selectedRegion === group.region 
                        ? "bg-white text-black" 
                        : "bg-white/5 text-white/40 hover:bg-white/10"
                    )}
                  >
                    {group.region}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {asNetwork.find(g => g.region === selectedRegion)?.agencies.map((agency, idx) => (
                  <GlassCard key={idx} className="p-8 group hover:border-accent/40 transition-all flex flex-col justify-between border-white/5">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h4 className="text-[22px] font-black text-accent group-hover:text-white transition-colors tracking-tight leading-tight">{agency.name}</h4>
                        <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">{selectedRegion}</span>
                      </div>
                      <p className="text-white/40 text-[15px] leading-relaxed break-keep">{agency.addr}</p>
                    </div>
                    <div className="pt-8 border-t border-white/5 mt-8 flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest mb-1">Representative Phone</span>
                        <span className="text-white font-mono text-xl font-black tracking-tighter group-hover:text-accent transition-colors">{agency.tel}</span>
                      </div>
                      <button className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white/40 group-hover:bg-accent group-hover:text-black transition-all shadow-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </button>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function SupportPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
          </div>
        }>
          <SupportContent />
        </Suspense>
      </section>

      {/* Footer (Sync with other pages) */}
      <footer className="py-20 px-6 border-t border-white/10 text-center space-y-4">
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
