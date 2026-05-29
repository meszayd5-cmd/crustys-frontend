"use client";

import React, { useEffect, useState } from "react";

let hasLoaderRunGlobal = false;

export const EntranceLoader: React.FC = () => {
  const [mounted, setMounted] = useState(() => {
    if (typeof window !== "undefined") {
      return !hasLoaderRunGlobal && sessionStorage.getItem("crustys_loader_run") !== "true";
    }
    return true;
  });

  const [visible, setVisible] = useState(() => {
    if (typeof window !== "undefined") {
      return !hasLoaderRunGlobal && sessionStorage.getItem("crustys_loader_run") !== "true";
    }
    return true;
  });

  const [statusText, setStatusText] = useState("Dredging Buttermilk Chicken...");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const hasRunSession = typeof window !== "undefined" && sessionStorage.getItem("crustys_loader_run") === "true";
    
    // If the loader has already run globally or in this session, skip entirely
    if (hasLoaderRunGlobal || hasRunSession) {
      setMounted(false);
      setVisible(false);
      return;
    }

    // Set persistence flags
    hasLoaderRunGlobal = true;
    if (typeof window !== "undefined") {
      sessionStorage.setItem("crustys_loader_run", "true");
    }

    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Cycle through culinary prep status updates for brand storytelling flavor
    const statusCycle = [
      { text: "Tempering The Grill Cast Iron...", delay: 300 },
      { text: "Double-Smashing Fresh Beef Ribeye...", delay: 650 },
      { text: "Drizzling Signature Secret Dripping Glaze...", delay: 1000 },
      { text: "Crisping loaded cyber waffle fries...", delay: 1300 },
      { text: "Preparing High-Speed Urban Routing...", delay: 1650 },
      { text: "Crusty's Express is Online.", delay: 1950 }
    ];

    const timeouts: NodeJS.Timeout[] = [];

    statusCycle.forEach((item) => {
      const t = setTimeout(() => {
        setStatusText(item.text);
      }, item.delay);
      timeouts.push(t);
    });

    // Animate progress bar smoothly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 18);

    // Fade out transition trigger
    const fadeTimeout = setTimeout(() => {
      setVisible(false);
    }, 2200);

    // Unmount after fade transition ends
    const unmountTimeout = setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = "";
    }, 2650);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimeout);
      clearTimeout(unmountTimeout);
      timeouts.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080809] transition-all cubic-bezier(0.85, 0, 0.15, 1) duration-700 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
      }`}
    >
      {/* Decorative Cyber Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle_at_center, #ffffff 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(227,28,37,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Core Brand Frame */}
      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center space-y-6 animate-fade-in">
        
        {/* Animated Glow Logo Flame */}
        <div className="relative flex items-center justify-center w-40 h-40 mb-2">
          <img
            src="/images/crustys_logo.png?v=2"
            alt="Crusty's Express Logo"
            className="w-full h-full object-contain animate-pulse"
          />
          <span className="absolute inset-4 rounded-full bg-[#e31c25]/10 opacity-50 blur-xl pointer-events-none animate-pulse"></span>
        </div>

        {/* Supporting Tagline */}
        <div className="space-y-1">
          <p 
            className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ffc700]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Urban Flavor Revolution
          </p>
        </div>

        {/* Loading Progress Bar Panel */}
        <div className="w-64 space-y-3 pt-6">
          <div className="w-full h-[2px] bg-[#111113] border-b border-[#1f1f23] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#e31c25] to-[#ffc700] rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="flex justify-between items-center text-[10px] text-[#93939a] font-medium tracking-wide">
            <span className="animate-pulse">{statusText}</span>
            <span className="font-bold text-white/90">{progress}%</span>
          </div>
        </div>

      </div>

      {/* Aesthetic Tech Lines */}
      <div className="absolute bottom-10 left-10 hidden md:block text-[9px] text-[#93939a]/30 font-mono tracking-widest uppercase">
        System Setup V1.0.0 // Phase 1
      </div>
      <div className="absolute bottom-10 right-10 hidden md:block text-[9px] text-[#93939a]/30 font-mono tracking-widest uppercase">
        Latitude 40.7128° N // NY Base
      </div>

    </div>
  );
};
