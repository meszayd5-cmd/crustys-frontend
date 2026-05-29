"use client";

import React, { useEffect, useState } from "react";

interface DayHours {
  day: string;
  hours: string;
  index: number; // Sunday=0, Monday=1, ...
}

export const Footer: React.FC = () => {
  const [currentDayIndex, setCurrentDayIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    // Detect day index on client-side
    const now = new Date();
    setCurrentDayIndex(now.getDay());

    // Dynamic Live Open Status Checker (Montreal Eastern Timezone)
    const checkStatus = () => {
      try {
        const etString = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
        const etDate = new Date(etString);
        const day = etDate.getDay(); 
        const hour = etDate.getHours();
        const minutes = etDate.getMinutes();
        const decimalTime = hour + minutes / 60;

        let open = false;

        // Schedules:
        // Monday (1): 5:00 PM - 12:00 AM (17:00 - 24:00)
        // Tuesday (2): 5:00 PM - 12:00 AM (17:00 - 24:00)
        // Wednesday (3): 5:00 PM - 1:00 AM (17:00 - 25:00 next day)
        // Thursday (4): 5:00 PM - 3:00 AM (17:00 - 27:00 next day)
        // Friday (5): 4:00 PM - 4:00 AM (16:00 - 28:00 next day)
        // Saturday (6): 4:00 PM - 4:00 AM (16:00 - 28:00 next day)
        // Sunday (0): 4:00 PM - 12:00 AM (16:00 - 24:00)

        // Today's normal operating window
        if (day === 1 && decimalTime >= 17) open = true;
        if (day === 2 && decimalTime >= 17) open = true;
        if (day === 3 && decimalTime >= 17) open = true;
        if (day === 4 && decimalTime >= 17) open = true;
        if (day === 5 && decimalTime >= 16) open = true;
        if (day === 6 && decimalTime >= 16) open = true;
        if (day === 0 && decimalTime >= 16) open = true;

        // Overflow operating windows from previous night
        if (day === 4 && decimalTime < 1) open = true;  // Wednesday overflow (until 1 AM Thursday)
        if (day === 5 && decimalTime < 3) open = true;  // Thursday overflow (until 3 AM Friday)
        if (day === 6 && decimalTime < 4) open = true;  // Friday overflow (until 4 AM Saturday)
        if (day === 0 && decimalTime < 4) open = true;  // Saturday overflow (until 4 AM Sunday)

        setIsOpen(open);
      } catch (e) {
        setIsOpen(true);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000); 
    return () => clearInterval(interval);
  }, []);

  const weeklySchedule: DayHours[] = [
    { day: "Monday", hours: "5:00 PM - 12:00 AM", index: 1 },
    { day: "Tuesday", hours: "5:00 PM - 12:00 AM", index: 2 },
    { day: "Wednesday", hours: "5:00 PM - 1:00 AM", index: 3 },
    { day: "Thursday", hours: "5:00 PM - 3:00 AM", index: 4 },
    { day: "Friday", hours: "4:00 PM - 4:00 AM", index: 5 },
    { day: "Saturday", hours: "4:00 PM - 4:00 AM", index: 6 },
    { day: "Sunday", hours: "4:00 PM - 12:00 AM", index: 0 },
  ];

  const mapUrl = "https://www.google.com/maps/place/Crusty%E2%80%99s+express/@45.514159,-73.5727631,17z/";

  return (
    <footer className="w-full bg-[#050505] relative z-20 overflow-hidden" role="contentinfo">
      
      {/* 1. CINEMATIC GRADIENT TRANSITION */}
      <div 
        className="relative pt-16 pb-20 px-8 lg:px-16"
        style={{
          background: "radial-gradient(circle at bottom center, rgba(229, 9, 20, 0.01) 0%, #050505 90%)"
        }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-stretch">
            
            {/* COLUMN 1: Brand Experience */}
            <div className="flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span 
                  className="block text-2xl font-black uppercase tracking-[0.3em] text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  CRUSTY'S <span className="text-[#e31c25] filter drop-shadow-[0_0_8px_rgba(227,28,37,0.35)]">EXPRESS</span>
                </span>
                <p 
                  className="text-sm sm:text-base text-[#93939a] leading-relaxed max-w-[290px]"
                  style={{ fontFamily: "var(--font-body)", lineHeight: "1.8" }}
                >
                  Late-night comfort food in the heart of Montreal. Double-smashed flat-top perfection, prepared fresh and delivered fast.
                </p>
              </div>

              {/* Social Media Section */}
              <div className="space-y-3">
                <span className="block text-[10px] uppercase font-black tracking-[0.2em] text-[#58585f]">
                  The Nightlife Vibe
                </span>
                <div className="flex items-center gap-4">
                  
                  {/* Instagram Button */}
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-white/[0.01] backdrop-blur-md border border-white/[0.04] hover:border-[#e31c25]/30 flex items-center justify-center text-[#93939a] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_20px_rgba(227,28,37,0.15)] group"
                    aria-label="Instagram Profile"
                  >
                    <svg className="w-6 h-6 fill-current group-hover:scale-105 transition-transform duration-300" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>

                </div>
              </div>
            </div>

            {/* COLUMN 2: Opening Hours (Dynamic Card Component) */}
            <div 
              className="bg-[#0c0c0e]/50 border border-[#e31c25]/10 rounded-[2.25rem] p-9 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col space-y-8"
            >
              <div className="space-y-4">
                
                {/* Dynamic live Status Header */}
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      isOpen ? "bg-[#10b981]" : "bg-[#ef4444]"
                    }`}></span>
                    <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                      isOpen ? "bg-[#10b981]" : "bg-[#ef4444]"
                    }`}></span>
                  </span>
                  <span 
                    className={`text-xs font-black uppercase tracking-widest ${
                      isOpen ? "text-[#10b981]" : "text-[#ef4444]"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {isOpen ? "OPEN NOW" : "CLOSED NOW"}
                  </span>
                </div>
                
                <span 
                  className="block text-lg font-black uppercase tracking-widest text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Opening Hours
                </span>
              </div>

              {/* Redesigned Schedule Layout */}
              <div className="space-y-3.5">
                {weeklySchedule.map((sched) => {
                  const isToday = currentDayIndex === sched.index;
                  return (
                    <div 
                      key={sched.day}
                      className={`flex justify-between items-center text-xs py-1 transition-all duration-300 border-b border-white/[0.02] last:border-0 ${
                        isToday 
                          ? "text-white font-extrabold text-[13px] filter drop-shadow-[0_0_6px_rgba(227,28,37,0.35)]" 
                          : "text-[#83838a] font-medium"
                      }`}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <div className="flex items-center gap-2">
                        {isToday && <span className="h-1.5 w-1.5 rounded-full bg-[#e31c25] animate-pulse" />}
                        <span>{sched.day}</span>
                      </div>
                      <span>{sched.hours}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* COLUMN 3: Contact & Location */}
            <div 
              className="bg-[#0c0c0e]/20 border border-white/[0.02] rounded-[2.25rem] p-8 lg:p-10 shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col justify-center space-y-6"
            >
              <div className="space-y-6">
                <span 
                  className="block text-xs uppercase font-extrabold tracking-[0.2em] text-[#58585f]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Location & Contact
                </span>
                
                {/* Contact Rows */}
                <ul className="space-y-5 text-sm sm:text-base text-[#93939a]" style={{ fontFamily: "var(--font-body)" }}>
                  
                  {/* Address Row */}
                  <li className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-[#e31c25] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="leading-relaxed">3611 Boulevard Saint-Laurent, Montreal, QC</span>
                  </li>

                  {/* Phone Row */}
                  <li className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-[#e31c25] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a 
                      href="tel:+14383801056" 
                      className="font-black text-white hover:text-[#e31c25] transition-colors duration-300"
                    >
                      +1 438 380 1056
                    </a>
                  </li>

                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. FULL-WIDTH CINEMATIC MAP SECTION */}
      <div 
        className="w-full relative border-t border-[#e31c25]/10 shadow-[0_-15px_30px_rgba(227,28,37,0.03)] hover:scale-[1.01] duration-[800ms] transition-transform cursor-pointer overflow-hidden rounded-t-[2rem]"
        onClick={() => window.open(mapUrl, "_blank")}
        title="Open Google Maps"
      >
        
        {/* Soft transparent gradient overlays for map integration */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />

        {/* FLOATING GLASSMORPHIC LOCATION SHOWCASE */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center max-w-[340px] w-[90%] bg-[#0c0c0e]/85 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 sm:p-8 shadow-2xl hover:border-[#e31c25]/30 hover:shadow-[0_15px_40px_rgba(227,28,37,0.15)] transition-all duration-500 group"
          onClick={(e) => e.stopPropagation()} 
        >
          <span 
            className="block text-[10px] uppercase font-black tracking-[0.3em] text-[#e31c25] mb-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Visit Us In Montreal
          </span>
          <h4 
            className="text-lg font-black text-white uppercase tracking-wider mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            3611 Blvd Saint-Laurent
          </h4>
          <p 
            className="text-xs text-[#93939a] mb-5 font-semibold uppercase tracking-widest"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Open Late Every Night
          </p>
          <span 
            className="inline-block relative py-1 text-xs uppercase font-extrabold tracking-widest text-[#ffc700] hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[1.5px] after:w-0 after:bg-[#ffc700] hover:after:w-full after:transition-all after:duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Visit Tonight
          </span>
        </div>

        {/* Embedded Dark Grayscale Blueprint Map */}
        <div className="w-full h-[280px] md:h-[320px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.347576595507!2d-73.57533802342939!3d45.51416263017366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bc9a0853491%3A0xd209b61a466cf52e!2sCrusty&#39;s%20express!5e0!3m2!1sen!2sca!4v1716768000000!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ 
              border: 0, 
              filter: "invert(92%) hue-rotate(180deg) grayscale(100%) contrast(115%) opacity(0.35)" 
            }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Crusty's Express Montreal Location Map"
          />
        </div>
      </div>

    </footer>
  );
};
