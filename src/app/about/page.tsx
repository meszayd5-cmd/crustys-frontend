"use client";

import React, { useEffect, useState } from "react";

// Custom premium icons for the Philosophy section
const FlameIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-[#e31c25]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-[#e31c25]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096L3 15l5.096-.813L9 9l.813 5.096L15 15l-5.096.813zM19.071 4.929l-.429 2.678-2.678.429 2.678.429.429 2.678.429-2.678 2.678-.429-2.678-.429-.429-2.678zM19 19.5l-.313 1.954-1.954.313 1.954.313.313 1.954.313-1.954 1.954-.313-1.954-.313-.313-1.954z" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-[#e31c25]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const BoltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-[#e31c25]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

export default function AboutPage() {
  // Count-up stats animation variables
  const [orders, setOrders] = useState(0);
  const [rating, setRating] = useState(0);
  const [craft, setCraft] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    let start = 0;
    const endOrders = 50; // 50K+
    const endRating = 4.9; // 4.9 Rating
    const endCraft = 100; // 100% Hand-Crafted
    const duration = 2000;
    const stepTime = 40;
    const steps = duration / stepTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setOrders(Math.min(Math.floor((endOrders / steps) * currentStep), endOrders));
      setRating(parseFloat(Math.min((endRating / steps) * currentStep, endRating).toFixed(1)));
      setCraft(Math.min(Math.floor((endCraft / steps) * currentStep), endCraft));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-white font-body relative overflow-x-hidden flex flex-col items-center">
      
      {/* High-end cinematic page styling & keyframe animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes aboutFadeUpReveal {
          from {
            opacity: 0;
            transform: translateY(36px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes aboutPulseGlow {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1) translate(-50%, -50%);
          }
          50% {
            opacity: 0.28;
            transform: scale(1.15) translate(-45%, -45%);
          }
        }
        @keyframes aboutGridScroll {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }
        .about-reveal {
          animation: aboutFadeUpReveal 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }

        .btn-shine-sweep {
          position: relative;
          overflow: hidden;
        }
        .btn-shine-sweep::after {
          content: '';
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.25) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
        }
        .btn-shine-sweep:hover::after {
          animation: aboutShineSweep 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes aboutShineSweep {
          100% {
            left: 125%;
          }
        }
      `}} />

      {/* Cinematic Ambient Glow Layout Layers */}
      <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-[#e31c25]/12 to-transparent blur-[180px] pointer-events-none z-0 animate-pulse duration-5000" />
      <div className="absolute top-[28%] left-[-10%] w-[850px] h-[850px] bg-[#e31c25]/3 rounded-full blur-[240px] pointer-events-none z-0" style={{ animation: "aboutPulseGlow 15s ease-in-out infinite" }} />
      <div className="absolute top-[52%] right-[-10%] w-[900px] h-[900px] bg-[#ffc700]/1.5 rounded-full blur-[260px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[20%] w-[800px] h-[800px] bg-[#e31c25]/3.5 rounded-full blur-[240px] pointer-events-none z-0" style={{ animation: "aboutPulseGlow 12s ease-in-out infinite" }} />

      {/* Cinematic Camera Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(5,5,5,0.85)_100%)] pointer-events-none z-0" />

      {/* Organic Fractal Noise Overlay for Rich Atmospheric Texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.038] pointer-events-none mix-blend-overlay z-0" xmlns="http://www.w3.org/2000/svg">
        <filter id="aboutAtmosphericNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.8 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#aboutAtmosphericNoise)" />
      </svg>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-center items-center text-center px-6 z-10 pt-28">
        
        {/* Layered background visual image */}
        <div className="absolute inset-0 z-0 opacity-[0.16] pointer-events-none">
          <img 
            src="/images/big_crustys.png" 
            alt="Cinematic Burger Background" 
            className="w-full h-full object-cover filter saturate-[0.1] contrast-[1.25] blur-[2px]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent" />
        </div>

        {/* Hero Content Wrapper */}
        <div className="max-w-[1280px] w-full mx-auto flex flex-col items-center justify-center relative z-10 pt-12 sm:pt-20">
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11.5rem] font-black uppercase tracking-tighter leading-[0.82] font-bebas text-white max-w-7xl mx-auto about-reveal delay-100 select-none pb-4 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]">
            URBAN GRIT.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#e31c25]/90">CULINARY perfection.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#93939a]/95 max-w-2xl mx-auto mt-12 md:mt-16 leading-[1.75] font-medium about-reveal delay-200 select-none px-4" style={{ fontFamily: "var(--font-body)" }}>
            Born in the heart of the neon-drenched cityscape, Crusty’s Express was engineered for a singular obsession: double-smashing premium beef and frying buttermilk chicken to ultimate caramelized perfection.
          </p>

          {/* Underline separator */}
          <div className="mt-14 md:mt-20 w-36 h-[2px] bg-gradient-to-r from-transparent via-[#e31c25] to-transparent rounded-full relative about-reveal delay-300">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#e31c25] shadow-[0_0_12px_#e31c25]" />
          </div>
          
          {/* Subtle scroll down indicator */}
          <div className="mt-32 md:mt-48 flex flex-col items-center gap-2 text-[9px] font-black uppercase tracking-[0.25em] text-[#58585f] hover:text-white transition-colors duration-300 animate-bounce select-none">
            <span>Scroll To Discover</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3.5 h-3.5 text-[#e31c25]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>

        </div>

      </section>

      {/* 2. BRAND STORY SECTION */}
      <section className="py-24 sm:py-32 md:py-40 w-full max-w-[1280px] mx-auto px-6 relative z-10" id="story">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left: Cinematic Image Showcase */}
          <div className="lg:col-span-6 group relative">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/[0.05] bg-[#0c0c0e] shadow-[0_30px_80px_rgba(0,0,0,0.85)] transition-all duration-700 hover:scale-[1.02] hover:border-[#e31c25]/35 hover:shadow-[0_35px_90px_rgba(227,28,37,0.06)] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] xl:aspect-[16/11]">
              
              {/* Image element with low saturation, high contrast grading */}
              <img 
                src="/images/crustys_burger.png" 
                alt="Original Smashed Patty Detail" 
                className="w-full h-full object-cover opacity-90 transition-transform duration-[1200ms] group-hover:scale-105 filter brightness-[0.88] saturate-[0.85] contrast-[1.1]"
              />

              {/* Gradient overlay inside image to blend with absolute label */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Glowing highlight ring behind image */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#e31c25]/2 to-transparent rounded-[2.8rem] -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {/* Right: Narrative Story */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight font-bebas text-white leading-[0.95]">
                STREET ENERGY.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#e31c25]/80">FLAT-TOP MASTERY.</span>
              </h2>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-[#93939a] leading-relaxed font-medium">
              <p>
                We started in the dark corners of the city street food scene, frustrated by dry patties, soggy delivery boxes, and flavorless mass-produced fast food. Crusty's Express was established with a singular mission: to bring a premium, high-fidelity burger campaign directly to your doorstep.
              </p>
              <p>
                Our signature beef smash burgers are built on the science of the <span className="text-white font-extrabold">Maillard reaction</span>. We take fresh, hand-balled Canadian AAA beef and smash it under extreme pressure onto screaming-hot cast iron flat-tops. This forces optimal surface contact, creating that deep, savory caramelized crust that locks in maximum juices.
              </p>
              <p>
                No shortcuts. No compromises. From our daily butter-toasted artisanal brioche to house-dredged buttermilk chicken fillets and secret signature melts, every component of the box represents raw culinary craftsmanship combined with pure late-night energy.
              </p>
            </div>

            {/* Quote block */}
            <div className="relative pl-6 border-l-2 border-[#e31c25] py-2 bg-white/[0.01] rounded-r-xl pr-4">
              <span className="block text-[11px] font-mono text-[#ffc700] uppercase tracking-wider font-bold mb-1">CATCHPHRASE DEPT:</span>
              <p className="text-xs sm:text-sm text-white italic font-semibold leading-relaxed">
                "We don't sell burgers. We sell seared, high-contact culinary weapons."
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* 3. PHILOSOPHY / CRAFT SECTION */}
      <section className="py-24 sm:py-32 bg-[#0c0c0e]/30 border-y border-[#1a1a1e]/60 w-full relative z-10 flex justify-center">
        
        <div className="max-w-[1280px] w-full px-6 flex flex-col items-center">
          
          {/* Section Header */}
          <div className="flex flex-col items-center justify-center text-center gap-4 max-w-2xl mx-auto w-full mb-16 md:mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e31c25]" style={{ fontFamily: "var(--font-body)" }}>
              THE RULES WE SEAR BY
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight font-bebas leading-[0.95]">
              OUR CORE PHILOSOPHY
            </h2>
          </div>

          {/* Grid of 4 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            
            {/* Pillar 1 */}
            <div className="group bg-white/[0.01] border border-white/[0.03] hover:border-[#e31c25]/30 p-6 md:p-8 rounded-[2rem] hover:bg-white/[0.02] shadow-[0_15px_35px_-10px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(227,28,37,0.04)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-center md:justify-between items-center md:items-start min-h-[250px] md:min-h-[300px]">
              <div className="space-y-5 md:space-y-6 flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#121215] border border-[#1f1f23] group-hover:border-[#e31c25]/45 group-hover:shadow-[0_0_15px_rgba(227,28,37,0.15)] transition-all duration-350">
                  <FlameIcon />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-white tracking-tight font-display text-center md:text-left" style={{ fontFamily: "var(--font-display)" }}>
                    FRESH NEVER FROZEN
                  </h3>
                  <p className="text-xs sm:text-sm text-[#93939a] leading-relaxed font-medium text-center md:text-left">
                    We source local Canadian AAA beef daily, kept at absolute chill without freezing. Every single patty is hand-rolled and packed with zero filler.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group bg-white/[0.01] border border-white/[0.03] hover:border-[#e31c25]/30 p-6 md:p-8 rounded-[2rem] hover:bg-white/[0.02] shadow-[0_15px_35px_-10px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(227,28,37,0.04)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-center md:justify-between items-center md:items-start min-h-[250px] md:min-h-[300px]">
              <div className="space-y-5 md:space-y-6 flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#121215] border border-[#1f1f23] group-hover:border-[#e31c25]/45 group-hover:shadow-[0_0_15px_rgba(227,28,37,0.15)] transition-all duration-350">
                  <SparklesIcon />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-white tracking-tight font-display text-center md:text-left" style={{ fontFamily: "var(--font-display)" }}>
                    HIGH-CONTACT SMASH
                  </h3>
                  <p className="text-xs sm:text-sm text-[#93939a] leading-relaxed font-medium text-center md:text-left">
                    Two patties are smashed hard with intense spatial precision under custom iron presses. Results: maximum surface sear and an incomparable crispy ring.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group bg-white/[0.01] border border-white/[0.03] hover:border-[#e31c25]/30 p-6 md:p-8 rounded-[2rem] hover:bg-white/[0.02] shadow-[0_15px_35px_-10px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(227,28,37,0.04)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-center md:justify-between items-center md:items-start min-h-[250px] md:min-h-[300px]">
              <div className="space-y-5 md:space-y-6 flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#121215] border border-[#1f1f23] group-hover:border-[#e31c25]/45 group-hover:shadow-[0_0_15px_rgba(227,28,37,0.15)] transition-all duration-350">
                  <BoltIcon />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-white tracking-tight font-display text-center md:text-left" style={{ fontFamily: "var(--font-display)" }}>
                    TRIPLE DREDGED CHIX
                  </h3>
                  <p className="text-xs sm:text-sm text-[#93939a] leading-relaxed font-medium text-center md:text-left">
                    Our chicken fillets are submerged in house-spiced buttermilk for 12 hours, then triple-coated for a loud, thick, ridiculously crunchy outer shield.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="group bg-white/[0.01] border border-white/[0.03] hover:border-[#e31c25]/30 p-6 md:p-8 rounded-[2rem] hover:bg-white/[0.02] shadow-[0_15px_35px_-10px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(227,28,37,0.04)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-center md:justify-between items-center md:items-start min-h-[250px] md:min-h-[300px]">
              <div className="space-y-5 md:space-y-6 flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#121215] border border-[#1f1f23] group-hover:border-[#e31c25]/45 group-hover:shadow-[0_0_15px_rgba(227,28,37,0.15)] transition-all duration-350">
                  <ShieldIcon />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-white tracking-tight font-display text-center md:text-left" style={{ fontFamily: "var(--font-display)" }}>
                    LATE NIGHT RADAR
                  </h3>
                  <p className="text-xs sm:text-sm text-[#93939a] leading-relaxed font-medium text-center md:text-left">
                    Operational dispatch channels are armed until 3:00 AM. Form-fitting ventilated burger containers preserve temperature and prevent humidity decay.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* 4. SIGNATURE EXPERIENCE SECTION */}
      <section className="py-24 sm:py-32 w-full max-w-[1280px] mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Asymmetrical copy layout */}
          <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e31c25] block">
                DELIVERY ARCHITECTURE
              </span>
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight font-bebas text-white leading-[0.95]">
                THE CRUST SHIELD SYSTEM.<br />
                <span className="text-[#ffc700]">ANTI-HUMIDITY SEAL.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#93939a] leading-relaxed font-medium" style={{ fontFamily: "var(--font-body)" }}>
              The biggest enemy of a premium hot burger is condensation. If a bun is packed in a standard foil wrapper, it captures steam, creating soggy, lifeless textures within minutes of dispatch. 
            </p>

            <p className="text-sm sm:text-base text-[#93939a] leading-relaxed font-medium" style={{ fontFamily: "var(--font-body)" }}>
              Our design team engineered the <span className="text-white font-extrabold">Crust Shield System</span>. Every Crusty’s burger is placed on a custom corrugated structural platform that keeps the bottom bun elevated from grease, then enclosed in a specialized cardboard chamber with custom lateral micro-vents.
            </p>

            <p className="text-sm sm:text-base text-[#93939a] leading-relaxed font-medium" style={{ fontFamily: "var(--font-body)" }}>
              This allows excessive moisture to escape safely while retaining absolute heat. When your late-night smash arrives at 2:00 AM, the crust is still seared, the chicken is still crispy, and the bun remains perfectly pillowy.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.05] text-[10px] text-white font-black uppercase tracking-wider font-mono">
                🚀 SPEED DISPATCH
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.05] text-[10px] text-white font-black uppercase tracking-wider font-mono">
                📦 CRUST SHIELD TECH
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e31c25]/10 border border-[#e31c25]/20 text-[10px] text-[#e31c25] font-black uppercase tracking-wider font-mono animate-pulse">
                🔥 HEAT RETENTION: MAX
              </span>
            </div>
          </div>

          {/* Right Column: Layered, asymmetrical graphics */}
          <div className="lg:col-span-6 order-1 lg:order-2 group relative flex justify-center">
            
            {/* Absolute ambient light streak */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#e31c25]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

            <div className="relative w-full max-w-[500px] aspect-square rounded-[3rem] overflow-hidden border border-white/[0.04] bg-[#0c0c0e] shadow-[0_25px_60px_rgba(0,0,0,0.85)] group-hover:border-[#e31c25]/25 transition-all duration-500">
              <img 
                src="/images/small_fries.png" 
                alt="Crunchy golden hand-cut fries" 
                className="w-full h-full object-cover opacity-90 transition-transform duration-[1200ms] group-hover:scale-105 filter brightness-[0.9] saturate-[0.8]"
              />
              {/* Dark overlay grid layer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/30 to-transparent pointer-events-none" />
              
              {/* Floating asymmetrical badge */}
              <div className="absolute top-8 right-8 bg-[#ffc700] text-black font-black uppercase tracking-[0.2em] font-mono text-[9px] px-3.5 py-1.5 rounded-md shadow-lg transform rotate-2">
                CRISP GUARANTEE
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 5. PREMIUM INGREDIENTS SECTION */}
      <section className="pt-32 pb-24 sm:pt-44 sm:pb-32 bg-gradient-to-b from-[#050505] via-[#0c0c0e]/30 to-[#050505] w-full relative z-10 flex justify-center">
        
        <div className="max-w-[1280px] w-full px-6 flex flex-col items-center">
          
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center gap-4 max-w-2xl mx-auto w-full mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight font-bebas leading-[0.95]">
              PREMIUM INGREDIENT SHOWCASE
            </h2>
            <div className="h-[2px] w-12 bg-[#e31c25] rounded-full mt-2" />
          </div>

          {/* Bento-Style Ingredient Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            
            {/* Ingredient 1: Beef */}
            <div className="group bg-white/[0.01] border border-white/[0.03] hover:border-[#e31c25]/30 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="h-56 relative overflow-hidden bg-[#111113]">
                <img 
                  src="/images/double_smash_burger.png" 
                  alt="AAA Canadian Beef Patties" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.85] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold text-white font-display tracking-tight" style={{ fontFamily: "var(--font-display)" }}>AAA BEEF BLEND</h4>
                  <span className="text-[9px] font-mono text-[#ffc700] uppercase font-bold">CONTACT: 450°F</span>
                </div>
                <p className="text-xs text-[#93939a] leading-relaxed">
                  Ground fresh daily, our blend is calibrated for optimal fat-to-lean ratios. This secures maximum caramelization without losing inner juiciness.
                </p>
              </div>
            </div>

            {/* Ingredient 2: Bun */}
            <div className="group bg-white/[0.01] border border-white/[0.03] hover:border-[#e31c25]/30 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="h-56 relative overflow-hidden bg-[#111113]">
                <img 
                  src="/images/onion_rings_burger.png" 
                  alt="Artisanal Brioche Buns" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.85] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold text-white font-display tracking-tight" style={{ fontFamily: "var(--font-display)" }}>BRIOCHE BUNS</h4>
                  <span className="text-[9px] font-mono text-[#ffc700] uppercase font-bold">PILLOWY: 100%</span>
                </div>
                <p className="text-xs text-[#93939a] leading-relaxed">
                  Sweet, rich French-inspired artisanal brioche buns. Sliced daily and toasted on the flat-top with clarified butter for an golden structural seal.
                </p>
              </div>
            </div>

            {/* Ingredient 3: Sauce */}
            <div className="group bg-white/[0.01] border border-white/[0.03] hover:border-[#e31c25]/30 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="h-56 relative overflow-hidden bg-[#111113]">
                <img 
                  src="/images/sauce_extras.png" 
                  alt="Proprietary Secret Sauces" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.85] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold text-white font-display tracking-tight" style={{ fontFamily: "var(--font-display)" }}>PROPRIETARY MELTS</h4>
                  <span className="text-[9px] font-mono text-[#ffc700] uppercase font-bold">ACIDITY: BALANCED</span>
                </div>
                <p className="text-xs text-[#93939a] leading-relaxed">
                  Bespoke, house-spiced burger sauces, signature melted Cheddar blends, and zesty micro-pickles formulated daily from local herbs and spices.
                </p>
              </div>
            </div>

            {/* Ingredient 4: Chicken */}
            <div className="group bg-white/[0.01] border border-white/[0.03] hover:border-[#e31c25]/30 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="h-56 relative overflow-hidden bg-[#111113]">
                <img 
                  src="/images/fried_chicken_burger.png" 
                  alt="Buttermilk Fried Chicken" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.85] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold text-white font-display tracking-tight" style={{ fontFamily: "var(--font-display)" }}>BUTTERMILK CHIX</h4>
                  <span className="text-[9px] font-mono text-[#ffc700] uppercase font-bold">COATING: TRIPLE</span>
                </div>
                <p className="text-xs text-[#93939a] leading-relaxed">
                  Whole poultry breast soaked in spiced buttermilk for 12 hours. Hand-coated and flash-fried in boiling peanut oil for supreme crunch longevity.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* 6. STATS / ACHIEVEMENTS SECTION */}
      <section className="py-20 md:py-28 bg-[#0c0c0e]/40 border-y border-[#1a1a1e]/60 w-full relative z-10">
        
        <div className="max-w-[1280px] mx-auto px-6">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-center text-center">
            
            {/* Stat 1 */}
            <div className="space-y-2 group">
              <div className="text-5xl sm:text-6xl md:text-7xl font-black font-bebas text-white tracking-tight flex items-center justify-center gap-1">
                <span className="text-[#e31c25] filter drop-shadow-[0_0_12px_rgba(227,28,37,0.45)]">{orders}</span>
                <span>K+</span>
              </div>
              <div className="h-[2px] w-8 bg-gradient-to-r from-transparent via-[#e31c25] to-transparent mx-auto rounded-full group-hover:w-16 transition-all duration-500" />
              <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#93939a] pt-1">
                Orders Delivered
              </p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-2 group">
              <div className="text-5xl sm:text-6xl md:text-7xl font-black font-bebas text-white tracking-tight flex items-center justify-center gap-1">
                <span className="text-[#ffc700] filter drop-shadow-[0_0_12px_rgba(255,199,0,0.3)]">{rating}</span>
                <span className="text-sm font-black text-[#ffc700] shrink-0 self-start mt-2">★</span>
              </div>
              <div className="h-[2px] w-8 bg-gradient-to-r from-transparent via-[#ffc700] to-transparent mx-auto rounded-full group-hover:w-16 transition-all duration-500" />
              <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#93939a] pt-1">
                Customer Rating
              </p>
            </div>

            {/* Stat 3 */}
            <div className="space-y-2 group">
              <div className="text-5xl sm:text-6xl md:text-7xl font-black font-bebas text-white tracking-tight flex items-center justify-center gap-1">
                <span className="text-white">{craft}</span>
                <span className="text-[#e31c25]">%</span>
              </div>
              <div className="h-[2px] w-8 bg-gradient-to-r from-transparent via-white to-transparent mx-auto rounded-full group-hover:w-16 transition-all duration-500" />
              <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#93939a] pt-1">
                Handmade Daily
              </p>
            </div>

            {/* Stat 4 */}
            <div className="space-y-2 group">
              <div className="text-5xl sm:text-6xl md:text-7xl font-black font-bebas text-white tracking-tight flex items-center justify-center gap-1">
                <span className="text-[#e31c25] filter drop-shadow-[0_0_12px_rgba(227,28,37,0.45)]">03</span>
                <span className="text-xl sm:text-2xl text-[#93939a]">AM</span>
              </div>
              <div className="h-[2px] w-8 bg-gradient-to-r from-transparent via-[#e31c25] to-transparent mx-auto rounded-full group-hover:w-16 transition-all duration-500" />
              <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#93939a] pt-1">
                Late Night Fuel
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Elegant Empty Spacing Section */}
      <div className="h-24 sm:h-32 md:h-40 w-full bg-[#050505] relative z-10" />

    </div>
  );
}
