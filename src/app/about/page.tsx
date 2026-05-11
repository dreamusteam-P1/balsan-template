"use client";

import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import GlassCard from "@/components/ui/GlassCard";
import Navbar from "@/components/sections/Navbar";
import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "greeting", name: "인사말", title: "인사말", subtitle: "CEO Greetings" },
  { id: "history", name: "연혁", title: "회사 연혁", subtitle: "Our Journey Since 1978" },
  { id: "cert", name: "인증현황", title: "인증 및 특허", subtitle: "Quality & Trust" },
  { id: "location", name: "오시는길", title: "오시는 길", subtitle: "Contact & Location" },
];

const historyData = [
  {
    period: "2020 - 2026",
    items: [
      { year: "2026", text: "AI 2.0 지능형 콩 품질 검사 시스템 글로벌 런칭 / 북미 및 동남아 시장 진출" },
      { year: "2026", text: "딥러닝 기반 농산물 정선 알고리즘 특허 등록 / 스마트 팩토리 자동화 생산 라인 확충" },
      { year: "2022", text: "농업용 컴퓨터 비전 연구소 설립 / 멀티 스펙트럴 분석 기술 농기계 적용 성공" },
      { year: "2020", text: "IoT 기반 원격 모니터링 시스템 개발 / 모바일 통합 관리 앱 '발산 커넥트' 출시" }
    ]
  },
  {
    period: "2010 - 2019",
    items: [
      { year: "2018", text: "고속 자동 톱밥 선별기 및 버섯 재배 자동화 설비 라인업 확대" },
      { year: "2016", text: "탈곡기 이물질 분리장치 외 3건 특허 등록 / 기업부설연구소 설립" },
      { year: "2014", text: "농기계 전용 시험장 신축 및 가동" },
      { year: "2012", text: "농기계 사후봉사업소 등록 / 기계설비공사업 면허 취득 / ESP-100 & 1000 시리즈 CE 인증" },
      { year: "2010", text: "현장 맞춤형 자주식 콩탈곡기 개발 성공" }
    ]
  },
  {
    period: "2000 - 2009",
    items: [
      { year: "2009", text: "전라북도 유망 중소기업 선정" },
      { year: "2008", text: "콩 정선기 이물질 제거장치 특허 등록 / ISO 14000 환경경영시스템 인증" },
      { year: "2007", text: "INNO-BIZ(기술혁신형 중소기업) 인증 / 연구개발 전담부서 설치" },
      { year: "2006", text: "동군산산업단지 신축 공장 이전 / ISO 9001 품질경영시스템 인증 / 일괄 콩정선선별기 양산" },
      { year: "2004", text: "흡입식 콩탈곡기 특허 취득 및 양산 체제 구축" },
      { year: "2002", text: "동군산산업단지 입주 확정" },
      { year: "2000", text: "한국농기계공업협동조합 가입" }
    ]
  },
  {
    period: "1978 - 1999",
    items: [
      { year: "1998", text: "버섯재배 퇴비 자동 입폐상 장치 실용신안 취득 / '발산공업'으로 상호 변경" },
      { year: "1992", text: "동력 상토흙분쇄기 개발 및 실용신안 취득" },
      { year: "1991", text: "상호 변경 '발산공업사'" },
      { year: "1978", text: "발산철공소 설립 (전북 옥구군)" }
    ]
  }
];

const certs = [
  "기업부설연구소 인정서",
  "이노비즈(INNO-BIZ) 확인서",
  "ISO 9001 품질경영시스템",
  "ISO 14001 환경경영시스템",
  "농업기계 사후관리업소 필증",
  "건설업(기계설비) 등록증",
  "여성기업 확인서",
  "중소기업 확인서",
  "벤처기업 확인서"
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("greeting");

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="text-accent text-sm font-bold tracking-[0.4em] uppercase mb-6 block">Legacy of Excellence</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic">
              Since 1978.
            </h1>
            <p className="text-white/40 max-w-2xl mx-auto text-lg">46년의 정밀 엔지니어링 역사가 농업의 미래를 바꿉니다.</p>
          </motion.div>

          {/* Premium Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-10 py-4 rounded-2xl text-sm font-bold transition-all duration-500",
                  activeTab === tab.id 
                    ? "bg-accent text-black shadow-[0_0_30px_rgba(46,204,113,0.3)] scale-105" 
                    : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
                )}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content Rendering */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* 1. Greeting Tab */}
              {activeTab === "greeting" && (
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
                  <div className="lg:col-span-3 relative">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 blur-3xl rounded-full -z-10" />
                    <span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">CEO Message</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-10 leading-[1.4] break-keep">
                      <span className="block whitespace-nowrap">농민의 땀방울을 가치 있게,</span>
                      <span className="block text-white/40 whitespace-nowrap">기술의 힘으로 답하겠습니다.</span>
                    </h2>
                    <div className="space-y-8 text-white/70 text-lg leading-relaxed font-light break-keep">
                      <p>안녕하십니까? 발산공업을 방문해 주셔서 감사합니다.</p>
                      <p>저희 발산공업은 1978년 창업 이래 지난 40여 년간 농업 기계화의 선두주자로서, 농민 여러분의 정직한 땀방울이 최고의 결실로 이어질 수 있도록 끊임없이 연구해 왔습니다.</p>
                      <p>1992년 동력상토조제기 개발을 기점으로 본격적인 농기계 전문 제조 기업으로 성장하였으며, 독보적인 <span className="text-white font-bold">흡입식 콩탈곡기</span>와 <span className="text-white font-bold">일괄 콩정선선별기</span>로 대한민국 농기계 시장의 새로운 지평을 열었습니다.</p>
                      <p>이제 우리는 전통적 제조 역량에 인공지능(AI)을 더해, 자연과 사람의 가치를 동시에 빛나게 하는 지능형 스마트 농업 솔루션으로 또 다른 미래를 선도해 나가겠습니다.</p>
                      <div className="pt-10 border-t border-white/10">
                        <p className="text-white text-2xl font-black">발산공업 임직원 일동</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 relative aspect-[4/5] rounded-[40px] overflow-hidden group shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <img 
                      src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop" 
                      alt="Agricultural Innovation" 
                      className="w-full h-full object-cover grayscale-[0.5] group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute bottom-10 left-10 z-20">
                      <p className="text-accent text-sm font-bold tracking-widest uppercase mb-2">Balsan Engineering</p>
                      <p className="text-4xl font-black italic">Precision & Trust.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. History Tab */}
              {activeTab === "history" && (
                <div className="space-y-24 py-10">
                  {historyData.map((section, sIdx) => (
                    <div key={sIdx} className="grid grid-cols-1 md:grid-cols-4 gap-12">
                      <div className="md:col-span-1">
                        <h3 className="text-6xl font-black text-white/10 sticky top-40 italic">{section.period.split(" - ")[1]}</h3>
                      </div>
                      <div className="md:col-span-3 space-y-16">
                        {section.items.map((item, iIdx) => (
                          <div key={iIdx} className="relative pl-12 group">
                            <div className="absolute left-0 top-0 w-[2px] h-full bg-white/5 group-hover:bg-accent/50 transition-colors" />
                            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-white/20 rounded-full group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(46,204,113,1)] transition-all" />
                            <div className="text-accent text-xl font-black mb-3 italic tracking-tighter">{item.year}</div>
                            <div className="text-xl text-white/80 font-medium leading-snug break-keep">{item.text}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 3. Certification Tab */}
              {activeTab === "cert" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certs.map((cert, idx) => (
                    <GlassCard key={idx} className="p-8 group hover:border-accent/40 transition-all flex flex-col justify-between items-start h-64">
                      <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{cert}</h4>
                        <p className="text-white/30 text-xs tracking-widest uppercase">Verified Authority Certification</p>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              )}

              {/* 4. Location Tab */}
              {activeTab === "location" && (
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                  <div className="lg:col-span-3 h-[600px] rounded-[40px] overflow-hidden border border-white/10 relative shadow-2xl">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.8!2d126.7!3d35.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDAwJzAwLjAiTiAxMjbCsDQyJzAwLjAiRQ!5e0!3m2!1sko!2skr!4v1234567890" 
                      className="w-full h-full border-0 grayscale invert opacity-60"
                      loading="lazy"
                    ></iframe>
                    <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
                      <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1">본사 주소</p>
                      <p className="text-white font-medium">{siteConfig.address}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-2 flex flex-col justify-center space-y-12">
                    <div className="space-y-4">
                      <span className="text-accent/50 text-xs font-bold uppercase tracking-widest">문의 및 상담</span>
                      <h3 className="text-4xl font-black">언제나 <br />열려있습니다.</h3>
                      <p className="text-white/40 leading-relaxed">농업 현장의 목소리를 소중히 듣겠습니다. 방문 상담을 원하시면 미리 유선 연락 부탁드립니다. 발산공업의 전문가들이 친절히 안내해 드리겠습니다.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                      <div className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors">
                        <p className="text-xs text-white/30 uppercase tracking-widest mb-2">대표 전화</p>
                        <p className="text-2xl font-bold text-accent">{siteConfig.phone}</p>
                      </div>
                      <div className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors">
                        <p className="text-xs text-white/30 uppercase tracking-widest mb-2">고객 지원 이메일</p>
                        <p className="text-2xl font-bold text-accent">{siteConfig.email}</p>
                      </div>
                      <div className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors">
                        <p className="text-xs text-white/30 uppercase tracking-widest mb-2">대표 팩스</p>
                        <p className="text-2xl font-bold text-white/70">063-451-4487</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Footer */}
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
