"use client";

import React, { useRef } from "react";
import { CATEGORIES } from "@/data/menuData";

interface CategoryTabsProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Helper to center the selected category tab horizontally in the scrollable view on mobile
  const handleTabClick = (category: string, e: React.MouseEvent<HTMLButtonElement>) => {
    onSelectCategory(category);
    
    const clickedBtn = e.currentTarget;
    const container = containerRef.current;
    
    if (container && clickedBtn) {
      const containerWidth = container.offsetWidth;
      const btnOffsetLeft = clickedBtn.offsetLeft;
      const btnWidth = clickedBtn.offsetWidth;
      
      // Calculate scroll offset to center the button
      const scrollOffset = btnOffsetLeft - containerWidth / 2 + btnWidth / 2;
      
      container.scrollTo({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  // Helper to scroll the container when clicking left/right chevrons
  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = 380;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Maps category value to exact premium display labels from the reference image
  const getCategoryDisplayName = (category: string) => {
    if (category.includes("Beef Burgers")) return "BURGERS DE BŒUF";
    if (category.includes("Chicken Burgers")) return "BURGERS AU POULET";
    if (category.includes("Baguette Sandwiches")) return "SANDWICHS BAGUETTE";
    if (category.includes("Platters")) return "PLATEAUX / PLATTERS";
    if (category.includes("Appetizers")) return "ENTRÉES & SIDES";
    if (category.includes("Extras")) return "EXTRAS";
    if (category.includes("Cold Drinks")) return "BOISSONS / DRINKS";
    return category.toUpperCase();
  };

  // Render inline custom mini SVG symbols inside Category tabs for premium aesthetics
  const renderCategoryMiniIcon = (category: string, isActive: boolean) => {
    const strokeColor = isActive ? "#ffffff" : "#8e8e93";
    
    if (category.includes("Beef Burgers")) {
      return (
        <svg className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] transition-colors duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 11c0-4 4-5 9-5s9 1 9 5H3z" fill={isActive ? "rgba(255,255,255,0.15)" : "transparent"} stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 14c0 3 3.5 4.5 9 4.5s9-1.5 9-4.5H3z" fill={isActive ? "rgba(255,255,255,0.1)" : "transparent"} stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 11h20M2 14h20" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    }
    if (category.includes("Chicken Burgers")) {
      return (
        <svg className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C7.5 2 6 6 6 9.5h12C18 6 16.5 2 12 2z" fill={isActive ? "rgba(255,255,255,0.15)" : "transparent"} />
          <path d="M3 13.5c0-1.5 2-2 9-2s9 .5 9 2H3z" />
          <path d="M4 16.5c0 2.5 3.5 3.5 8 3.5s8-1 8-3.5H4z" fill={isActive ? "rgba(255,255,255,0.1)" : "transparent"} />
          <path d="M2 13.5h20M2 16.5h20" />
        </svg>
      );
    }
    if (category.includes("Baguette Sandwiches")) {
      return (
        <svg className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 14.5c0-2.5 2-4.5 9-4.5s9 2 9 4.5V15c0 2-2 3.5-9 3.5s-9-1.5-9-3.5v-.5z" fill={isActive ? "rgba(255,255,255,0.15)" : "transparent"} />
          <path d="M6 11l3 7M10 10l3 8M14 10l3 8" />
        </svg>
      );
    }
    if (category.includes("Platters")) {
      return (
        <svg className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="14" rx="9" ry="4.5" fill={isActive ? "rgba(255,255,255,0.15)" : "transparent"} />
          <path d="M6 9c.5-2 2-3 6-3s5.5 1 6 3" />
          <path d="M9 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM15 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={strokeColor} />
        </svg>
      );
    }
    if (category.includes("Appetizers")) {
      return (
        <svg className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 10L8 20h8l2-10H6z" fill={isActive ? "rgba(255,255,255,0.15)" : "transparent"} />
          <path d="M9 5v5M12 4v6M15 5v5M7 10h10" />
        </svg>
      );
    }
    if (category.includes("Extras")) {
      return (
        <svg className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18M3 12h18M12 7l-5 5 5 5 5-5-5-5z" fill={isActive ? "rgba(255,255,255,0.15)" : "transparent"} />
        </svg>
      );
    }
    if (category.includes("Cold Drinks")) {
      return (
        <svg className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9h12l-1.5 11h-9L6 9z" fill={isActive ? "rgba(255,255,255,0.15)" : "transparent"} />
          <path d="M9 9V5a2 2 0 012-2h2a2 2 0 012 2v4M12 3v2" />
        </svg>
      );
    }
    return (
      <svg className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4v16M4 12h16" />
      </svg>
    );
  };

  return (
    <div className="w-full bg-[#080809] pt-12 pb-16 sticky top-[80px] z-40 overflow-hidden my-4 md:my-6">
      {/* Soft double-layered cinematic red ambient background glow behind the entire navigation area */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[400px] bg-[radial-gradient(circle,rgba(229,9,20,0.22)_0%,rgba(8,8,9,0)_80%)] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[120px] bg-[radial-gradient(ellipse,rgba(229,9,20,0.16)_0%,rgba(8,8,9,0)_80%)] pointer-events-none z-0" />

      {/* Visually Isolated Category Navigation Area - Generous Gutters prevent arrow/container overlap */}
      <div className="mx-auto max-w-[1250px] px-12 sm:px-16 md:px-20 relative z-10">
        
        {/* Relative wrapper for absolute edge chevrons and centered categories capsule */}
        <div className="relative w-full py-2">
          
          {/* Left minimalist chevron button - placed on the far left edge of layout, fully detached */}
          <button 
            onClick={() => scroll("left")}
            className="absolute -left-10 sm:-left-12 md:-left-16 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 text-[#e31c25]/85 hover:text-[#ff3b45] active:scale-95 transition-all duration-300 cursor-pointer z-30 group focus:outline-none"
            aria-label="Scroll left"
          >
            {/* Soft luxurious red glow behind the arrow */}
            <div className="absolute inset-0 bg-[#e31c25]/5 rounded-full blur-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute w-8 h-8 rounded-full bg-[radial-gradient(circle,rgba(227,28,37,0.12)_0%,rgba(8,8,9,0)_70%)] pointer-events-none" />
            
            <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] drop-shadow-[0_0_8px_rgba(227,28,37,0.45)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Unified Centered Premium Dark Glass Container */}
          <div className="w-full max-w-[950px] mx-auto relative bg-gradient-to-b from-[#0a0a0c]/85 to-[#050507]/90 backdrop-blur-3xl border border-[#e31c25]/20 rounded-[32px] md:rounded-full py-4 px-3 sm:py-4.5 sm:px-6 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(227,28,37,0.08),inset_0_1px_2px_rgba(255,255,255,0.03)] overflow-hidden">
            
            {/* Horizon Red Light streak running directly behind the buttons inside the unified container */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e31c25]/25 to-transparent -translate-y-1/2 pointer-events-none z-0" />

            {/* Internal edge scroll fades so categories seamlessly disappear near container boundary. 
                Using soft internal glass matching background colors to blend perfectly */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/60 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#050507] via-[#050507]/60 to-transparent pointer-events-none z-10" />

            {/* Scrollable Track - holding centered category buttons with compact premium spacing.
                Uses justify-start on all screens to ensure the first category (Burgers de Bœuf) is ALWAYS fully visible, 
                with generous left padding (pl-8 sm:pl-10) to clear the fade mask perfectly. No justify-center to prevent clipping */}
            <div 
              ref={containerRef}
              role="tablist"
              className="relative flex items-center justify-start gap-2.5 sm:gap-3.5 overflow-x-auto scrollbar-none whitespace-nowrap py-2.5 pl-8 pr-6 sm:pl-10 sm:pr-8 z-10"
            >
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                const displayName = getCategoryDisplayName(category);
                return (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="menu-product-grid"
                    id={`tab-${category.replace(/[^a-zA-Z0-9]/g, "-")}`}
                    onClick={(e) => handleTabClick(category, e)}
                    className={`snap-start inline-flex items-center gap-2.5 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full font-black text-[11px] sm:text-[12px] lg:text-[12.5px] uppercase tracking-[0.08em] sm:tracking-[0.10em] transition-all duration-300 cursor-pointer select-none focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e31c25] focus-visible:outline-offset-2 ${
                      isActive
                        ? "bg-[#0d0d0f] text-white border-2 border-[#e31c25] shadow-[0_0_20px_rgba(227,28,37,0.65),inset_0_0_10px_rgba(227,28,37,0.25)] scale-[1.04]"
                        : "bg-[#0d0d0f]/80 backdrop-blur-md text-[#8e8e93] border border-white/[0.08] hover:text-white hover:border-[#e31c25]/45 hover:shadow-[0_0_12px_rgba(227,28,37,0.2)] hover:scale-[1.02]"
                    }`}
                    style={{
                      fontFamily: "var(--font-body)"
                    }}
                  >
                    {renderCategoryMiniIcon(category, isActive)}
                    <span>{displayName}</span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right minimalist chevron button - placed on the far right edge of layout, fully detached */}
          <button 
            onClick={() => scroll("right")}
            className="absolute -right-10 sm:-right-12 md:-right-16 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 text-[#e31c25]/85 hover:text-[#ff3b45] active:scale-95 transition-all duration-300 cursor-pointer z-30 group focus:outline-none"
            aria-label="Scroll right"
          >
            {/* Soft luxurious red glow behind the arrow */}
            <div className="absolute inset-0 bg-[#e31c25]/5 rounded-full blur-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute w-8 h-8 rounded-full bg-[radial-gradient(circle,rgba(227,28,37,0.12)_0%,rgba(8,8,9,0)_70%)] pointer-events-none" />
            
            <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] drop-shadow-[0_0_8px_rgba(227,28,37,0.45)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Elegant horizontal subtle red light streak exactly under the center of the category container */}
          <div className="absolute bottom-[-16px] sm:bottom-[-20px] left-1/2 -translate-x-1/2 w-[220px] sm:w-[320px] h-[2px] bg-gradient-to-r from-transparent via-[#ff2a34]/90 to-transparent pointer-events-none z-20">
            {/* Soft wide background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-[8px] bg-[#ff2a34]/40 blur-[3px] rounded-full" />
            {/* Precise elegant central light bead */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-[#ff3b45] rounded-full blur-[0.5px] shadow-[0_0_12px_4px_#ff3b45]" />
          </div>

        </div>

      </div>
      
    </div>
  );
};

