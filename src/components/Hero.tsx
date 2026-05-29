"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  // Monitor scroll for parallax transition, optimized to disable on mobile
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setScrollY(window.scrollY);
      } else if (scrollY !== 0) {
        setScrollY(0);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Trigger entrance animation immediately on mount
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [scrollY]);

  return (
    <section
      className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Parallax Cinematic Burger Backdrop */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-[4000ms] ease-out"
        style={{
          opacity: isRevealed ? 0.7 : 0,
          transform: isRevealed 
            ? `translateY(${scrollY * 0.12}px) scale(1.02)` 
            : `translateY(${scrollY * 0.12}px) scale(1.08)`,
          transformOrigin: "center center"
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=1600&q=80"
          alt="Cinematic Burger Backdrop"
          className="w-full h-full object-cover filter brightness-[0.72] contrast-[1.08] saturate-[1.0]"
        />
        {/* Soft gradient overlay so the burger texture is premium and visible */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(5,5,5,0.85)_100%)] pointer-events-none" />
      </div>

      {/* Edge gradient blending with page body */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />

      {/* Premium Content Group (Aligned perfectly and balanced to account for navbar) */}
      <div className="relative z-10 w-full max-w-xl px-6 text-center flex flex-col items-center justify-center pt-28 md:pt-32 select-none">
        
        {/* Centered Logo Panel (Main Visual Hero) */}
        <div 
          className={`mb-6 transition-all duration-1000 delay-100 ease-out transform ${
            isRevealed ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <img
            src="/images/crustys_logo_clean.png"
            alt="Crusty's Express Emblem"
            className="h-32 sm:h-44 md:h-48 w-auto object-contain filter drop-shadow-[0_8px_32px_rgba(229,9,20,0.35)]"
          />
        </div>

        {/* Clean Elegant Brand Text Under Logo (Subtle, matching typography inside the logo) */}
        <div
          className={`mb-2 transition-all duration-1000 delay-200 ease-out transform ${
            isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div 
            className="text-sm sm:text-base font-extrabold uppercase tracking-[0.35em] flex items-center justify-center"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span className="text-white">CRUSTY'S</span>
            <span className="text-[#E50914] ml-2.5 filter drop-shadow-[0_0_8px_rgba(229,9,20,0.3)]">EXPRESS</span>
          </div>
        </div>

        {/* Slogan */}
        <div className="mb-8">
          <p
            className={`text-[10px] sm:text-xs font-black tracking-[0.3em] text-[#B3B3B3] uppercase font-bebas transition-all duration-1000 delay-300 ease-out transform ${
              isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            STREET FOOD REIMAGINED.
          </p>
        </div>

        {/* Refined Action Buttons (Slightly wider, less tall, side-by-side, no mobile full-width) */}
        <div 
          className={`flex flex-row gap-5 w-auto justify-center transition-all duration-1000 delay-400 ease-out transform ${
            isRevealed ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Link
            href="/menu"
            className="px-9 py-2.5 rounded-lg bg-[#E50914] text-white font-extrabold text-[11px] uppercase tracking-[0.18em] transition-all duration-300 text-center shadow-[0_2px_12px_rgba(229,9,20,0.25)] hover:shadow-[0_4px_20px_rgba(229,9,20,0.45)] hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
          >
            ORDER NOW
          </Link>
          
          <Link
            href="/menu"
            className="px-9 py-2.5 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 text-white hover:text-white hover:border-white/30 hover:bg-white/10 font-extrabold text-[11px] uppercase tracking-[0.18em] transition-all duration-300 text-center hover:scale-[1.03] active:scale-[0.98] shadow-[0_2px_12px_rgba(255,255,255,0.02)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
          >
            VIEW MENU
          </Link>
        </div>

      </div>
    </section>
  );
};
