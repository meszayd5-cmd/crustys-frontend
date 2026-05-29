"use client";

import React, { useState } from "react";

// Minimal luxury location pin icon
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#e31c25] transition-transform duration-400 ease-out group-hover:scale-110">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

// Modern outlined phone icon
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#e31c25] transition-transform duration-400 ease-out group-hover:scale-110">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.122-4.1-6.924-6.924l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>
);

// Minimal mail icon
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#e31c25] transition-transform duration-400 ease-out group-hover:scale-110">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

// Luxury clock icon
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#e31c25] transition-transform duration-400 ease-out group-hover:scale-110">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

// Instagram Outlined SVG Icon
const InstagramIcon = () => (
  <svg className="w-4.5 h-4.5 transition-transform duration-400 ease-out group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// TikTok Outlined SVG Icon
const TikTokIcon = () => (
  <svg className="w-4.5 h-4.5 transition-transform duration-400 ease-out group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

// Facebook Outlined SVG Icon
const FacebookIcon = () => (
  <svg className="w-4.5 h-4.5 transition-transform duration-400 ease-out group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) return;
    
    setIsSubmitting(true);
    // Simulate premium dispatch action delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    }, 1200);
  };

  return (
    <div className="menu-page-container bg-[#050505] min-h-screen pb-20 md:pb-28 lg:pb-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col items-center">
      
      {/* High-end micro-animations, gloss sweep keyframes, and scroll reveal delays */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes contactFadeUpReveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes contactShine {
          100% {
            left: 125%;
          }
        }
        .contact-reveal-item {
          animation: contactFadeUpReveal 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-50 { animation-delay: 50ms; }
        .delay-150 { animation-delay: 150ms; }
        .delay-250 { animation-delay: 250ms; }

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
            rgba(255, 255, 255, 0.22) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
        }
        .btn-shine-sweep:hover::after {
          animation: contactShine 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .premium-input {
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.02);
          transition: all 400ms ease-out !important;
        }
        .premium-input:hover {
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.02), 0 0 12px rgba(227, 28, 37, 0.03) !important;
        }
        .premium-input:focus {
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.02), 0 0 20px rgba(227, 28, 37, 0.08) !important;
        }
        @media (max-width: 639px) {
          .mobile-flat-rect {
            box-shadow: none !important;
            border: none !important;
            border-radius: 12px !important;
            background: #0d0d0f !important;
          }
        }
      `}} />

      {/* Cinematic Ambient Glow Layout Layers */}
      <div className="hidden sm:block absolute top-[8%] left-1/2 -translate-x-1/2 w-[950px] h-[450px] bg-gradient-to-b from-[#e31c25]/5 to-transparent blur-[165px] pointer-events-none z-0" />
      <div className="hidden sm:block absolute top-[35%] left-[-15%] w-[750px] h-[750px] bg-[#e31c25]/2.5 rounded-full blur-[210px] pointer-events-none z-0" />
      <div className="hidden sm:block absolute bottom-[15%] right-[-15%] w-[750px] h-[750px] bg-[#ffc700]/1.5 rounded-full blur-[230px] pointer-events-none z-0" />

      {/* Cinematic Camera Vignette Overlay */}
      <div className="hidden sm:block absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(5,5,5,0.75)_100%)] pointer-events-none z-0" />

      {/* Organic Fractal Noise Overlay for Rich Atmospheric Texture */}
      <svg className="hidden sm:block absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none mix-blend-overlay z-0" xmlns="http://www.w3.org/2000/svg">
        <filter id="atmosphericNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.75 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#atmosphericNoise)" />
      </svg>

      {/* Centered Hero Section (True Visual Center of the Viewport, completely detached from columns below) */}
      <div className="w-full max-w-[900px] mx-auto z-10 flex flex-col items-center justify-center text-center pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-4 mb-36 md:mb-44 lg:mb-52 px-4 contact-reveal-item delay-50 relative">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e31c25]/90 animate-brand-pulse text-center" style={{ fontFamily: "var(--font-body)", textAlign: "center" }}>
          GET IN TOUCH
        </span>
        <h1 className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tight font-bebas relative pb-1.5 text-center w-full" style={{ textAlign: "center" }}>
          CONTACT & SUPPORT
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-gradient-to-r from-transparent via-[#e31c25] to-transparent rounded-full" />
        </h1>
        <p className="text-xs sm:text-[13px] md:text-sm text-[#93939a]/90 max-w-lg mt-10 md:mt-16 leading-[1.7] tracking-wide font-body font-medium text-center" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
          Questions about orders, catering, collaborations, or late-night delivery?
          Reach out to the Crusty’s Express team directly.
        </p>
      </div>

      {/* Main Grid Content Container */}
      <div className="w-full max-w-[1020px] mx-auto z-10 relative mt-20 md:mt-28 lg:mt-36">
        
        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Floating Information Blocks in Matching Luxury Glass Panels */}
          <div className="contact-reveal-item delay-150 lg:col-span-5 flex flex-col justify-between space-y-8 h-full">
            <div className="space-y-6">
                           {/* Location Card */}
              <div className="group flex items-start gap-6 p-6 rounded-2xl bg-white/[0.01] hover:bg-white/[0.02] border border-white/[0.03] hover:border-[#e31c25]/30 shadow-[inset_0_1px_1px_rgba(255, 255, 255, 0.01),0_12px_30px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(227,28,37,0.015)] transition-all duration-400 ease-out hover:translate-x-2">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#121215] to-[#1a1a1e] border border-[#1f1f23]/90 group-hover:border-[#e31c25]/40 shadow-[0_4px_16px_rgba(0,0,0,0.65)] group-hover:shadow-[0_0_15px_rgba(227,28,37,0.04)] transition-all duration-400 ease-out">
                  <LocationIcon />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#e31c25]/85" style={{ fontFamily: "var(--font-body)" }}>COORDINATES</span>
                  <h4 className="text-base font-extrabold text-white tracking-tight font-display" style={{ fontFamily: "var(--font-display)" }}>CENTRAL KITCHEN</h4>
                  <p className="text-xs sm:text-sm text-[#93939a] leading-relaxed font-body font-medium">
                    742 Cyber Plaza Street<br />
                    Core District, NY 10001
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group flex items-start gap-6 p-6 rounded-2xl bg-white/[0.01] hover:bg-white/[0.02] border border-white/[0.03] hover:border-[#e31c25]/30 shadow-[inset_0_1px_1px_rgba(255, 255, 255, 0.01),0_12px_30px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(227,28,37,0.015)] transition-all duration-400 ease-out hover:translate-x-2">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#121215] to-[#1a1a1e] border border-[#1f1f23]/90 group-hover:border-[#e31c25]/40 shadow-[0_4px_16px_rgba(0,0,0,0.65)] group-hover:shadow-[0_0_15px_rgba(227,28,37,0.04)] transition-all duration-400 ease-out">
                  <PhoneIcon />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#e31c25]/85" style={{ fontFamily: "var(--font-body)" }}>DIRECT COMMS</span>
                  <h4 className="text-base font-extrabold text-white tracking-tight font-display" style={{ fontFamily: "var(--font-display)" }}>24/7 HOTLINE</h4>
                  <p className="text-base sm:text-lg font-black text-white font-body tracking-tight">
                    +1 (555) 987-6543
                  </p>
                  <p className="text-[11px] text-[#93939a]/80 font-medium font-body flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Operational Response Active
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="group flex items-start gap-6 p-6 rounded-2xl bg-white/[0.01] hover:bg-white/[0.02] border border-white/[0.03] hover:border-[#e31c25]/30 shadow-[inset_0_1px_1px_rgba(255, 255, 255, 0.01),0_12px_30px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(227,28,37,0.015)] transition-all duration-400 ease-out hover:translate-x-2">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#121215] to-[#1a1a1e] border border-[#1f1f23]/90 group-hover:border-[#e31c25]/40 shadow-[0_4px_16px_rgba(0,0,0,0.65)] group-hover:shadow-[0_0_15px_rgba(227,28,37,0.04)] transition-all duration-400 ease-out">
                  <MailIcon />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#e31c25]/85" style={{ fontFamily: "var(--font-body)" }}>DIGITAL MAIL</span>
                  <h4 className="text-base font-extrabold text-white tracking-tight font-display" style={{ fontFamily: "var(--font-display)" }}>EMAIL DISPATCH</h4>
                  <p className="text-xs sm:text-sm text-white font-bold font-body hover:text-[#e31c25] transition-colors">
                    <a href="mailto:support@crustysexpress.com">support@crustysexpress.com</a>
                  </p>
                  <p className="text-[11px] text-[#93939a]/80 font-medium font-body mt-0.5">
                    Replies within 180 seconds
                  </p>
                </div>
              </div>

              {/* Delivery Hours Card */}
              <div className="group flex items-start gap-6 p-6 rounded-2xl bg-white/[0.01] hover:bg-white/[0.02] border border-white/[0.03] hover:border-[#e31c25]/30 shadow-[inset_0_1px_1px_rgba(255, 255, 255, 0.01),0_12px_30px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(227,28,37,0.015)] transition-all duration-400 ease-out hover:translate-x-2">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#121215] to-[#1a1a1e] border border-[#1f1f23]/90 group-hover:border-[#e31c25]/40 shadow-[0_4px_16px_rgba(0,0,0,0.65)] group-hover:shadow-[0_0_15px_rgba(227,28,37,0.04)] transition-all duration-400 ease-out">
                  <ClockIcon />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#e31c25]/85" style={{ fontFamily: "var(--font-body)" }}>HOURS</span>
                  <h4 className="text-base font-extrabold text-white tracking-tight font-display" style={{ fontFamily: "var(--font-display)" }}>DELIVERY WINDOW</h4>
                  <p className="text-xs sm:text-sm text-[#93939a] leading-relaxed font-body font-medium">
                    Monday — Sunday<br />
                    <span className="text-white font-bold">11:00 AM — 3:00 AM</span>
                  </p>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#e31c25]/8 border border-[#e31c25]/15 text-[#e31c25] text-[9px] font-black uppercase tracking-[0.1em] mt-1" style={{ fontFamily: "var(--font-body)" }}>
                    LATE NIGHT ACTIVE
                  </span>
                </div>
              </div>

            </div>

            {/* Social Follow Actions Area */}
            <div className="space-y-4 pt-8 lg:pt-0 pl-2">
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#93939a] block" style={{ fontFamily: "var(--font-body)" }}>
                FOLLOW CRUSTY’S NETWORKS
              </span>
              <div className="flex items-center gap-3.5">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center justify-center w-11 h-11 rounded-full bg-[#111113]/40 backdrop-blur-md border border-[#1f1f23]/60 text-[#93939a] hover:text-white transition-all duration-400 ease-out shadow-[0_4px_12px_rgba(0,0,0,0.4)] hover:border-[#e31c25]/50 hover:shadow-[0_0_15px_rgba(227,28,37,0.08)] hover:-translate-y-0.5"
                  aria-label="Follow us on Instagram"
                >
                  <InstagramIcon />
                </a>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center justify-center w-11 h-11 rounded-full bg-[#111113]/40 backdrop-blur-md border border-[#1f1f23]/60 text-[#93939a] hover:text-white transition-all duration-400 ease-out shadow-[0_4px_12px_rgba(0,0,0,0.4)] hover:border-[#e31c25]/50 hover:shadow-[0_0_15px_rgba(227,28,37,0.08)] hover:-translate-y-0.5"
                  aria-label="Follow us on TikTok"
                >
                  <TikTokIcon />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center justify-center w-11 h-11 rounded-full bg-[#111113]/40 backdrop-blur-md border border-[#1f1f23]/60 text-[#93939a] hover:text-white transition-all duration-400 ease-out shadow-[0_4px_12px_rgba(0,0,0,0.4)] hover:border-[#e31c25]/50 hover:shadow-[0_0_15px_rgba(227,28,37,0.08)] hover:-translate-y-0.5"
                  aria-label="Follow us on Facebook"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form Card Redesigned */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Mobile Header (Rendered only on mobile viewports) */}
            <div className="block sm:hidden space-y-4 text-center mb-10 px-4 relative z-10 contact-reveal-item delay-200">
              <div className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e31c25] shadow-[0_0_8px_#e31c25]" />
                <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#e31c25]/90" style={{ fontFamily: "var(--font-body)" }}>
                  SECURE CHANNEL ACTIVE
                </span>
              </div>
              <h3 className="text-3xl font-black text-white uppercase tracking-tight font-bebas leading-[0.95]">
                DROP US A MESSAGE
              </h3>
              <p className="text-xs text-[#8a8a93]/65 font-medium font-body leading-relaxed max-w-xs mx-auto">
                Fill out the operations dispatch sheet below. Your request will be securely processed by our central kitchen commanders.
              </p>
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#e31c25]/35 to-transparent mt-6 mb-2" />
            </div>

            <div 
              className="contact-reveal-item delay-250 bg-gradient-to-b from-[#111113]/90 via-[#0d0d0f]/95 to-[#080809]/98 backdrop-blur-2xl border border-white/[0.08] px-5 sm:px-12 md:px-14 pt-8 sm:pt-10 pb-10 sm:pb-20 rounded-3xl sm:rounded-[32px] relative overflow-hidden flex flex-col justify-center transition-all duration-400 ease-out"
              style={{
                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.05), inset 0 0 40px rgba(227, 28, 37, 0.02), 0 35px 80px -20px rgba(0,0,0,0.95), 0 0 50px rgba(227, 28, 37, 0.015)"
              }}
            >
              {/* Ambient cyber line glow at the top of the card */}
              <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#e31c25]/25 to-transparent" />
              
              {/* Subtle Form Corner Glow Overlay */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#e31c25]/4 rounded-full blur-3xl pointer-events-none" />

              {formSubmitted ? (
                <div className="text-center py-20 px-6 space-y-8 animate-fade-in relative z-10">
                  <div className="mx-auto w-16 h-16 rounded-full bg-[#e31c25]/10 border border-[#e31c25]/20 flex items-center justify-center shadow-[0_0_25px_rgba(227,28,37,0.25)] animate-pulse">
                    <svg className="w-6 h-6 text-[#e31c25]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-3xl font-black text-white uppercase tracking-tight font-bebas">
                      TRANSMISSION DISPATCHED
                    </h3>
                    <p className="text-xs sm:text-sm text-[#93939a] max-w-sm mx-auto leading-relaxed font-body font-medium">
                      Your transmission has been successfully broadcast to our operations center. A dispatch commander will contact you shortly.
                    </p>
                  </div>
                  <div className="flex justify-center pt-8 mt-4">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="group btn-shine-sweep w-full md:w-[280px] h-[56px] rounded-2xl bg-gradient-to-r from-[#e31c25] via-[#f0242d] to-[#c7121b] text-white font-black text-xs uppercase tracking-[0.3em] transition-all duration-400 ease-out shadow-[0_8px_20px_-4px_rgba(227,28,37,0.2)] hover:shadow-[0_16px_35px_rgba(227,28,37,0.35)] hover:-translate-y-1 active:translate-y-0 cursor-pointer flex items-center justify-center gap-3 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed font-body border border-white/20"
                    >
                      SEND ANOTHER TRANSMISSION
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-14 relative z-10 flex flex-col justify-center">
                  
                  {/* Desktop Header: Hidden on mobile, fully integrated luxury header on desktop */}
                  <div className="hidden sm:block space-y-4 pb-2 pt-10 sm:pt-14 pl-2 sm:pl-4 mb-10 sm:mb-14">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e31c25] shadow-[0_0_8px_#e31c25]" />
                      <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#e31c25]/90" style={{ fontFamily: "var(--font-body)" }}>
                        SECURE CHANNEL ACTIVE
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-[40px] font-black text-white uppercase tracking-tight font-bebas leading-[0.95]">
                      DROP US A MESSAGE
                    </h3>
                    <p className="text-xs text-[#8a8a93]/65 font-medium font-body leading-relaxed mt-2 max-w-lg">
                      Fill out the operations dispatch sheet below. Your request will be securely processed by our central kitchen commanders.
                    </p>
                    <div className="h-[1px] w-full bg-gradient-to-r from-[#e31c25]/30 via-white/[0.04] to-transparent mt-8 mb-6" />
                  </div>

                  {/* Full Name */}
                  <div className="group space-y-3 sm:space-y-5">
                    <label className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8a8a93] group-focus-within:text-[#e31c25] group-hover:text-white/80 transition-colors duration-300 block pl-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                      className="premium-input w-full h-[52px] sm:h-[56px] bg-gradient-to-b from-white/[0.02] to-white/[0.01] hover:from-white/[0.04] hover:to-white/[0.02] focus:from-[#0c0c0e] focus:to-[#08080a] border border-white/[0.04] hover:border-[#e31c25]/35 focus:border-[#e31c25] px-6 rounded-2xl text-sm text-white placeholder-white/15 outline-none font-body focus-visible:outline-none"
                    />
                  </div>

                  {/* Email & Phone grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                    
                    {/* Email Address */}
                    <div className="group space-y-3 sm:space-y-5">
                      <label className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8a8a93] group-focus-within:text-[#e31c25] group-hover:text-white/80 transition-colors duration-300 block pl-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        disabled={isSubmitting}
                        className="premium-input w-full h-[52px] sm:h-[56px] bg-gradient-to-b from-white/[0.02] to-white/[0.01] hover:from-white/[0.04] hover:to-white/[0.02] focus:from-[#0c0c0e] focus:to-[#08080a] border border-white/[0.04] hover:border-[#e31c25]/35 focus:border-[#e31c25] px-6 rounded-2xl text-sm text-white placeholder-white/15 outline-none font-body focus-visible:outline-none"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="group space-y-3 sm:space-y-5">
                      <label className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8a8a93] group-focus-within:text-[#e31c25] group-hover:text-white/80 transition-colors duration-300 block pl-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Optional"
                        disabled={isSubmitting}
                        className="premium-input w-full h-[52px] sm:h-[56px] bg-gradient-to-b from-white/[0.02] to-white/[0.01] hover:from-white/[0.04] hover:to-white/[0.02] focus:from-[#0c0c0e] focus:to-[#08080a] border border-white/[0.04] hover:border-[#e31c25]/35 focus:border-[#e31c25] px-6 rounded-2xl text-sm text-white placeholder-white/15 outline-none font-body focus-visible:outline-none"
                      />
                    </div>

                  </div>

                  {/* Subject */}
                  <div className="group space-y-3 sm:space-y-5">
                    <label className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8a8a93] group-focus-within:text-[#e31c25] group-hover:text-white/80 transition-colors duration-300 block pl-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Order inquiry, catering, late-night dispatch..."
                      disabled={isSubmitting}
                      className="premium-input w-full h-[52px] sm:h-[56px] bg-gradient-to-b from-white/[0.02] to-white/[0.01] hover:from-white/[0.04] hover:to-white/[0.02] focus:from-[#0c0c0e] focus:to-[#08080a] border border-white/[0.04] hover:border-[#e31c25]/35 focus:border-[#e31c25] px-6 rounded-2xl text-sm text-white placeholder-white/15 outline-none font-body focus-visible:outline-none"
                    />
                  </div>

                  {/* Message */}
                  <div className="group space-y-3 sm:space-y-5">
                    <label className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8a8a93] group-focus-within:text-[#e31c25] group-hover:text-white/80 transition-colors duration-300 block pl-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message here..."
                      disabled={isSubmitting}
                      className="premium-input w-full bg-gradient-to-b from-white/[0.02] to-white/[0.01] hover:from-white/[0.04] hover:to-white/[0.02] focus:from-[#0c0c0e] focus:to-[#08080a] border border-white/[0.04] hover:border-[#e31c25]/35 focus:border-[#e31c25] p-6 rounded-2xl text-sm text-white placeholder-white/15 outline-none resize-none font-body focus-visible:outline-none"
                    />
                  </div>

                  {/* Epic centered luxury action button */}
                  <div className="flex justify-center pt-14 sm:pt-16 pb-4 sm:pb-12">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group btn-shine-sweep w-full md:w-[280px] h-[48px] sm:h-[56px] rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#e31c25] via-[#f0242d] to-[#c7121b] text-white font-black text-xs uppercase tracking-[0.3em] transition-all duration-400 ease-out shadow-[0_8px_20px_-4px_rgba(227,28,37,0.2)] hover:shadow-[0_16px_35px_rgba(227,28,37,0.35)] hover:-translate-y-1 active:translate-y-0 cursor-pointer flex items-center justify-center gap-3 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed font-body border border-white/20"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>DISPATCHING...</span>
                        </>
                      ) : (
                        <>
                          <span>DISPATCH TRANSMISSION</span>
                          <svg className="w-4.5 h-4.5 text-white/90 group-hover:text-white transition-transform duration-400 ease-out transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
