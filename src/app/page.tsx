"use client";

import React from "react";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { menuProducts } from "@/data/menuData";
import { Footer } from "@/components/Footer";

export default function Home() {
  // Filter 4 main featured items for homepage appetite appeal
  const featuredProducts = menuProducts.filter((product) => 
    ["beef-double-smash", "chicken-fried-chicken", "platters-mac-attack", "loaded-fries-beef"].includes(product.id)
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#050505]">
      
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. FEATURED ITEMS SECTION */}
      <section className="py-20 md:py-28 bg-[#050505] border-t border-[#1a1a1e]/60" aria-labelledby="featured-heading">
        <div 
          className="mx-auto max-w-[1200px] px-6 sm:px-12 lg:px-16 space-y-12 w-full"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          
          {/* Section Header */}
          <div 
            className="flex flex-col items-center justify-center text-center gap-2 max-w-2xl mx-auto w-full pb-2"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", width: "100%", maxWidth: "672px", marginLeft: "auto", marginRight: "auto" }}
          >
            <span 
              className="text-xs font-black uppercase tracking-widest text-[#E50914] text-center"
              style={{ fontFamily: "var(--font-body)", textAlign: "center", display: "block" }}
            >
              Popular Demands
            </span>
            <h2 
              id="featured-heading"
              className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight font-bebas text-center"
              style={{ fontFamily: "var(--font-bebas)", textAlign: "center", display: "block" }}
            >
              Featured Smashes & Sides
            </h2>
          </div>

          {/* Featured Flex Center Grid */}
          <div 
            className="flex flex-wrap justify-center gap-6 w-full mx-auto"
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width: "100%", marginLeft: "auto", marginRight: "auto" }}
          >
            {featuredProducts.map((product) => (
              <div key={product.id} className="w-full max-w-[340px] sm:w-[calc(50%-12px)] sm:max-w-[340px] lg:w-[calc(25%-18px)] lg:max-w-none flex-shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* CTA to Full Menu */}
          <div className="text-center pt-8">
            <Link
              href="/menu"
              className="inline-block px-12 py-5 sm:px-16 sm:py-5.5 rounded-xl bg-[#E50914] text-white font-black text-xs sm:text-[13px] uppercase tracking-[0.2em] transition-all duration-300 text-center shadow-[0_4px_20px_rgba(229,9,20,0.3)] hover:shadow-[0_6px_30px_rgba(229,9,20,0.6)] hover:scale-[1.04] active:scale-[0.98] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore Full Delivery Menu
            </Link>
          </div>

        </div>
      </section>

      {/* 3. SHORT ABOUT PREVIEW SECTION */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 bg-[#0c0c0e] border-y border-[#1a1a1e]/80" aria-labelledby="about-preview-heading">
        {/* Custom Premium Float Animation Style */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes premiumFlameFloat {
            0%, 100% {
              transform: translateY(0) scale(1);
              filter: drop-shadow(0 0 10px rgba(229, 9, 20, 0.45)) saturate(1);
            }
            50% {
              transform: translateY(-10px) scale(1.05);
              filter: drop-shadow(0 0 20px rgba(255, 199, 0, 0.7)) saturate(1.2);
            }
          }
        `}} />

        <div className="mx-auto max-w-[1200px] px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Graphic panel */}
            <div 
              className="relative h-[280px] sm:h-[340px] w-full rounded-2xl bg-[#050505] border border-[#1a1a1e] overflow-hidden flex flex-col items-center justify-center p-8 text-center"
              style={{
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6)"
              }}
            >
              {/* Cinematic glow background layers */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.08)_0%,rgba(5,5,5,0)_75%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,199,0,0.04)_0%,rgba(5,5,5,0)_70%)]" />
              
              {/* Organic fractal noise overlay for rich atmospheric texture */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
                <filter id="noise">
                  <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.7 0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
              </svg>

              <span 
                className="text-4xl mb-3 select-none" 
                role="img" 
                aria-label="Fire symbol"
                style={{
                  animation: "premiumFlameFloat 4s ease-in-out infinite"
                }}
              >
                🔥
              </span>
              <h3 className="text-3xl font-black text-white uppercase tracking-tight font-bebas z-10">
                Crusty's <span className="text-[#E50914]">Express</span>
              </h3>
              <p className="text-[10px] text-[#ffc700] uppercase tracking-widest font-black mt-2 z-10">
                Urban Flavor Revolution
              </p>
              <div className="mt-6 h-[2px] w-16 bg-gradient-to-r from-[#E50914] to-[#ffc700] rounded-full z-10"></div>
            </div>

            {/* Right Story narrative */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#E50914]">Brand Story</span>
                <h3 
                  id="about-preview-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight font-bebas"
                >
                  Urban Grit. Culinary Perfection.
                </h3>
              </div>
              
              <p className="text-xs sm:text-sm text-[#B3B3B3] leading-relaxed max-w-md lg:max-w-lg" style={{ fontFamily: "var(--font-body)" }}>
                Born on the asphalt of the city streets, Crusty’s Express bridges fast-food convenience with premium flat-top execution. We don't believe in standard mass-production compromises. Our beef patties are always fresh and double-smashed on burning cast iron, and our buttermilk chicken is hand-dredged for maximum crunch.
              </p>

              <div className="flex gap-4 pt-2">
                <Link
                  href="/about"
                  className="px-6 py-3 rounded-xl bg-[#121215] border border-[#1a1a1e] hover:border-white/20 text-[#B3B3B3] hover:text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-300 text-center hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E50914] focus-visible:outline-offset-2 cursor-pointer"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Read Our Story
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="h-6 sm:h-8" />
      <Footer />
    </div>
  );
}
