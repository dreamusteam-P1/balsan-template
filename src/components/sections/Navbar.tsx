"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/siteConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-[60] transition-all duration-500 px-6 py-4",
          scrolled || mobileMenuOpen ? "bg-black/40 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-white uppercase z-[70]">
            {siteConfig.name}
          </Link>
          
          {/* Desktop Navigation */}
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

          <div className="flex items-center gap-4">
            <button 
              onClick={() => window.location.href = '/login'}
              className="hidden sm:block bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-white/90 transition-all active:scale-95 shadow-lg"
            >
              로그인
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex md:hidden flex-col justify-center items-center w-10 h-10 gap-1.5 z-[70] bg-white/5 rounded-full border border-white/10"
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-white rounded-full transition-transform origin-center"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-0.5 bg-white rounded-full transition-opacity"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-white rounded-full transition-transform origin-center"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 pt-24 px-6 bg-black/95 backdrop-blur-2xl md:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 pb-20">
              {siteConfig.navigation.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="space-y-4"
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-white block tracking-tight"
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <div className="grid grid-cols-2 gap-3 pl-4 border-l border-white/10">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm font-medium text-white/40 hover:text-white transition-colors py-1"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-10 border-t border-white/5"
              >
                <button 
                  onClick={() => window.location.href = '/login'}
                  className="w-full bg-accent text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-accent/20"
                >
                  로그인하기
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
