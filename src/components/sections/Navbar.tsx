"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/siteConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4",
        scrolled ? "bg-black/20 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white uppercase">
          {siteConfig.name}
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {siteConfig.navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors py-2 flex items-center gap-1 cursor-pointer"
              >
                {item.name}
                {item.subItems && (
                  <svg className="w-3 h-3 text-white/30 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              
              {item.subItems && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 min-w-[160px] shadow-2xl">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2.5 text-xs font-semibold text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button 
          onClick={() => window.location.href = '/login'}
          className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-white/90 transition-all active:scale-95 shadow-lg"
        >
          로그인
        </button>
      </div>
    </nav>
  );
}
