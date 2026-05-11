"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Upload, CheckCircle2, AlertCircle, Loader2, BarChart3, ScanSearch, ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Navbar from "@/components/sections/Navbar";
import { analyzeBeanQuality, AnalysisResult } from "@/services/aiService";

export default function AIInspectorPage() {
  const [status, setStatus] = useState<'idle' | 'analyzing' | 'result' | 'error'>('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 프리뷰 생성
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    
    startAnalysis(file);
  };

  const startAnalysis = async (file: File) => {
    setStatus('analyzing');
    setProgress(0);
    setError(null);

    // 가짜 프로그레스 바 애니메이션
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return 95;
        }
        return prev + 5;
      });
    }, 200);

    try {
      const data = await analyzeBeanQuality(file);
      clearInterval(interval);
      setProgress(100);
      setResult(data);
      setStatus('result');
    } catch (err: any) {
      clearInterval(interval);
      setError(err.message);
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-accent/30">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-bold tracking-widest uppercase mb-6"
          >
            <ScanSearch size={14} /> AI Quality Analysis
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="text-accent bg-accent/10 px-4 py-1 rounded-2xl mr-2">AI</span>
            <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">Bean Inspector</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            <span className="text-white font-bold block mb-2">국내 유일, 오직 발산공업만이 가능한 독보적 솔루션</span>
            발산공업의 최첨단 AI 엔진으로 콩의 품질을 실시간 분석합니다.<br />
            독보적이고 압도적인 정밀도로 순도, 결함, 이물질 혼입률을 즉시 확인하세요.
          </motion.p>
        </header>

        <AnimatePresence mode="wait">
          {status === 'idle' && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="group relative">
                <input 
                  type="file" 
                  ref={cameraInputRef}
                  accept="image/*" 
                  capture="environment" 
                  className="hidden" 
                  onChange={handleFileChange}
                />
                <button 
                  onClick={() => cameraInputRef.current?.click()}
                  className="w-full h-80 rounded-3xl border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-6 group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-500 overflow-hidden"
                >
                  <div className="p-6 rounded-full bg-white/5 group-hover:bg-accent/20 transition-colors">
                    <Camera size={40} className="text-white group-hover:text-accent transition-colors" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">실시간 카메라 촬영</h3>
                    <p className="text-white/40 text-sm">현장에서 바로 촬영하여 분석</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>

              <div className="group relative">
                <input 
                  type="file" 
                  ref={fileInputRef}
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleFileChange}
                />
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full h-80 rounded-3xl border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-6 group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-500 overflow-hidden"
                >
                  <div className="p-6 rounded-full bg-white/5 group-hover:bg-accent/20 transition-colors">
                    <Upload size={40} className="text-white group-hover:text-accent transition-colors" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">기존 사진 업로드</h3>
                    <p className="text-white/40 text-sm">갤러리나 파일에서 선택</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </motion.div>
          )}

          {status === 'analyzing' && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <div className="relative mb-12">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full animate-pulse" />
                <Loader2 size={80} className="text-accent animate-spin relative z-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">BALSAN AI 분석 중</h3>
              <p className="text-white/40 mb-12 text-center">
                이미지 내부의 개체를 식별하고 <br /> 품질 등급을 산출하고 있습니다.
              </p>
              
              <div className="w-full max-w-md bg-white/5 h-2 rounded-full overflow-hidden border border-white/10">
                <motion.div 
                  className="h-full bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
              <span className="mt-4 text-accent font-mono text-sm">{progress}% Complete</span>
            </motion.div>
          )}

          {status === 'result' && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <GlassCard className="md:col-span-2 flex flex-col md:flex-row gap-8 items-center">
                  {previewUrl && (
                    <div className="w-full md:w-64 h-64 rounded-2xl overflow-hidden border border-white/10 relative shrink-0">
                      <img src={previewUrl} alt="Analysis Preview" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                        <CheckCircle2 size={14} className="text-accent" />
                        <span className="text-[10px] font-bold tracking-wider uppercase text-white">Verified by BALSAN AI</span>
                      </div>
                    </div>
                  )}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Analysis Report</span>
                      <h3 className="text-sm md:text-base font-medium text-white/60 mb-1">분석 결과 리포트</h3>
                      <div className="flex items-center gap-3 py-1">
                        <div className={`px-3 py-1 rounded-lg font-bold text-lg md:text-xl border ${
                          result.qualityScore === '특급' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                          result.qualityScore === '상급' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                          result.qualityScore === '보통' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                          'bg-red-500/10 text-red-400 border-red-500/20'
                        }`}>
                          <span className="text-xs opacity-60 mr-2 uppercase tracking-tighter">Quality:</span>
                          {result.qualityScore}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <span className="text-white/30 text-[10px] block mb-0.5">총 검출 개수</span>
                        <span className="text-xl font-bold">{result.total} <span className="text-[10px] font-normal text-white/20 italic">개</span></span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <span className="text-white/30 text-[10px] block mb-0.5">혼입률</span>
                        <span className={`text-xl font-bold ${
                          result.qualityScore === '특급' ? 'text-emerald-400/80' :
                          result.qualityScore === '상급' ? 'text-blue-400/80' :
                          result.qualityScore === '보통' ? 'text-amber-400/80' :
                          'text-red-400/80'
                        }`}>{result.defectRate}%</span>
                      </div>
                    </div>
                    <p className="text-[12px] text-white/40 leading-relaxed italic break-words border-l-2 border-white/10 pl-3 py-1">
                      "{result.reasoning}"
                    </p>
                  </div>
                </GlassCard>

                <GlassCard className="flex flex-col justify-center items-center text-center">
                  <div className="relative w-32 h-32 mb-6">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        className="text-white/5 stroke-current"
                        strokeWidth="3"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <motion.path
                        className={`stroke-current ${
                          result.qualityScore === '특급' ? 'text-emerald-500' :
                          result.qualityScore === '상급' ? 'text-blue-500' :
                          result.qualityScore === '보통' ? 'text-amber-500' :
                          'text-red-500'
                        }`}
                        strokeWidth="3"
                        strokeDasharray={`${100 - parseFloat(result.defectRate)}, 100`}
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className={`text-2xl font-bold ${
                        result.qualityScore === '특급' ? 'text-emerald-400' :
                        result.qualityScore === '상급' ? 'text-blue-400' :
                        result.qualityScore === '보통' ? 'text-amber-400' :
                        'text-red-400'
                      }`}>{(100 - parseFloat(result.defectRate)).toFixed(1)}%</span>
                    </div>
                  </div>
                  <h3 className="font-bold mb-1">순도 판정</h3>
                  <p className="text-white/40 text-xs italic">Purity Index</p>
                </GlassCard>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: '백태', value: result.soy, color: 'bg-white' },
                  { label: '서리태', value: result.black, color: 'bg-zinc-700' },
                  { label: '녹두', value: result.mung, color: 'bg-green-600' },
                  { label: '팥', value: result.red, color: 'bg-red-700' },
                ].map((item) => (
                  <GlassCard key={item.label} className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <span className="font-bold">{item.value}</span>
                  </GlassCard>
                ))}
              </div>

              <GlassCard className="border-red-500/20 bg-red-500/5">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-red-500/20 text-red-500">
                    <BarChart3 size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">상세 결함 정보</h3>
                    <ul className="space-y-2 text-sm text-white/60 break-words">
                      <li>• 이물질: <span className="text-red-400 font-bold">{result.foreign}개</span> ({result.foreignDetails})</li>
                      <li>• 손상 및 결함 콩: <span className="text-white font-medium">{result.defects}개</span></li>
                    </ul>
                  </div>
                </div>
              </GlassCard>

              <div className="flex gap-4 pt-8">
                <button 
                  onClick={() => setStatus('idle')}
                  className="flex-1 bg-white text-black font-bold py-4 rounded-2xl hover:bg-white/90 transition-all flex items-center justify-center gap-2"
                >
                  다른 샘플 분석하기 <ArrowRight size={18} />
                </button>
                <button className="flex-1 bg-white/5 border border-white/10 text-white font-bold py-4 rounded-2xl hover:bg-white/10 transition-all">
                  발산공업 솔루션 상담
                </button>
              </div>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="p-6 rounded-full bg-red-500/10 text-red-500 mb-8">
                <AlertCircle size={60} />
              </div>
              <h3 className="text-2xl font-bold mb-4">분석 오류 발생</h3>
              <GlassCard className="max-w-md border-red-500/20 mb-8">
                <p className="text-red-400 font-mono text-sm break-all">
                  {error}
                </p>
              </GlassCard>
              <button 
                onClick={() => setStatus('idle')}
                className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-white/90 transition-all"
              >
                다시 시도하기
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        
        <footer className="mt-32 pt-12 border-t border-white/5 text-center">
          <p className="text-xs text-white/20 leading-relaxed italic">
            * 콩의 크기 측정은 촬영 환경에 따라 오차가 발생할 수 있습니다.<br />
            정밀 측정이 필요한 경우 발산공업의 산업용 AI 선별 솔루션을 이용해 주세요.
          </p>
        </footer>
      </div>
    </main>
  );
}
