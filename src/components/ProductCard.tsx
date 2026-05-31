"use client";

import React, { useState } from "react";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setIsAdded(true);
    // Reset confirmation state after 1.5 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  // Helper to render customized modern SVG food icons based on product category
  const renderProductIcon = (category: string) => {
    const iconColor = product.isPopular || product.promoBadge ? "#ffc700" : "#e31c25";
    const glowClass = product.isPopular || product.promoBadge ? "shadow-[0_0_20px_rgba(255,199,0,0.15)]" : "shadow-[0_0_20px_rgba(227,28,37,0.15)]";

    switch (category) {
      case "Burgers de bœuf / Beef Burgers":
      case "Burgers au poulet / Chicken Burgers":
        return (
          <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Top Bun */}
            <path d="M12 32C12 20.9543 20.9543 12 32 12C43.0457 12 52 20.9543 52 32H12Z" fill={iconColor} fillOpacity="0.85" />
            <path d="M12 32H52" stroke={iconColor} strokeWidth="3" strokeLinecap="round" />
            {/* Tomato/Cheese Layer */}
            <path d="M10 38H54" stroke="#ffc700" strokeWidth="4" strokeLinecap="round" />
            {/* Meat Patty */}
            <rect x="8" y="42" width="48" height="6" rx="3" fill="#693015" />
            {/* Bottom Bun */}
            <path d="M12 50H52V52C52 55.3137 49.3137 58 46 58H18C14.6863 58 12 55.3137 12 52V50Z" fill={iconColor} fillOpacity="0.85" stroke={iconColor} strokeWidth="2" />
            {/* Sesame Seeds */}
            <circle cx="24" cy="20" r="1.5" fill="#ffffff" />
            <circle cx="32" cy="18" r="1.5" fill="#ffffff" />
            <circle cx="40" cy="22" r="1.5" fill="#ffffff" />
          </svg>
        );
      case "Sandwichs baguette / Baguette Sandwiches":
        return (
          <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Long Bread outline */}
            <path d="M6 36C6 29.3726 11.3726 24 18 24H46C52.6274 24 58 29.3726 58 36V36C58 42.6274 52.6274 48 46 48H18C11.3726 48 6 42.6274 6 36V36Z" fill={iconColor} fillOpacity="0.8" stroke={iconColor} strokeWidth="2.5" />
            {/* Scoring Marks */}
            <line x1="20" y1="28" x2="26" y2="44" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <line x1="32" y1="28" x2="38" y2="44" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <line x1="44" y1="28" x2="50" y2="44" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            {/* Dripping filling lines */}
            <path d="M12 36H52" stroke="#ffc700" strokeWidth="4" strokeLinecap="round" />
            <path d="M16 38H48" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "Plateaux / Platters":
        return (
          <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Serving Platter tray base */}
            <ellipse cx="32" cy="46" rx="28" ry="12" fill="#17171a" stroke={iconColor} strokeWidth="2.5" />
            <ellipse cx="32" cy="46" rx="24" ry="9" fill={iconColor} fillOpacity="0.25" />
            {/* Assorted Items on tray */}
            <circle cx="22" cy="42" r="5" fill="#ffc700" />
            <circle cx="42" cy="42" r="5" fill="#e31c25" />
            <rect x="28" y="36" width="8" height="12" rx="2" fill="#693015" />
          </svg>
        );
      case "Entrées / Appetizers":
        return (
          <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Beer batter Onion rings overlay */}
            <circle cx="26" cy="38" r="14" stroke={iconColor} strokeWidth="5.5" fill="none" />
            <circle cx="26" cy="38" r="14" stroke="#ffc700" strokeWidth="2.5" fill="none" />
            <circle cx="38" cy="26" r="12" stroke={iconColor} strokeWidth="5.5" fill="none" />
            <circle cx="38" cy="26" r="12" stroke="#ffc700" strokeWidth="2.5" fill="none" />
          </svg>
        );
      case "Boissons froides / Cold Drinks":
        return (
          <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Cup body */}
            <path d="M20 22L24 54C24 56.2091 25.7909 58 28 58H36C38.2091 58 40 56.2091 40 54L44 22H20Z" fill={iconColor} fillOpacity="0.8" />
            {/* Liquid Level */}
            <path d="M21.2 28L23.2 52H40.8L42.8 28C36 30 28 30 21.2 28Z" fill="#ffc700" fillOpacity="0.4" />
            {/* Lid */}
            <rect x="18" y="18" width="28" height="4" rx="2" fill="#ffffff" />
            {/* Straw */}
            <path d="M30 20L34 6" stroke={iconColor} strokeWidth="3" strokeLinecap="round" />
          </svg>
        );
      case "Extras":
      default:
        return (
          <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Sauce Cup */}
            <path d="M20 34L22 54C22 56.2091 23.7909 58 26 58H38C40.2091 58 42 56.2091 42 54L44 34H20Z" fill="#17171a" stroke={iconColor} strokeWidth="2" />
            {/* Lid edge */}
            <ellipse cx="32" cy="34" rx="14" ry="4" fill={iconColor} />
            {/* Small droplets */}
            <circle cx="32" cy="22" r="3" fill="#ffc700" />
            <path d="M32 25L32 30" stroke="#ffc700" strokeWidth="2" />
          </svg>
        );
    }
  };

  return (
    <div
      className="premium-card-hover group relative flex flex-col justify-between w-full h-full bg-[#111113] border border-[#1f1f23] rounded-2xl overflow-hidden animate-slide-up"
      style={{
        boxShadow: "0 4px 12px rgba(8, 8, 9, 0.4)"
      }}
    >
      {/* 
        BADGE SYSTEM 
        Dynamically handles Promotional tags and New states from metadata
      */}
      {product.promoBadge && (
        <span
          className="absolute top-4 left-4 z-10 rounded-lg px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-black animate-fade-in"
          style={{
            fontFamily: "var(--font-body)",
            backgroundColor: product.promoBadge.includes("Spicy") || product.promoBadge.includes("Chef") ? "#e31c25" : "#ffc700",
            color: product.promoBadge.includes("Spicy") || product.promoBadge.includes("Chef") ? "#ffffff" : "#080809",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)"
          }}
        >
          {product.promoBadge}
        </span>
      )}

      {!product.promoBadge && product.isNew && (
        <span
          className="absolute top-4 left-4 z-10 rounded-lg bg-[#ffc700] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-black"
          style={{
            fontFamily: "var(--font-body)",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)"
          }}
        >
          New
        </span>
      )}

      {/* Preparation Time Tag */}
      <span
        className="absolute top-4 right-4 z-10 rounded-md bg-[#080809]/60 backdrop-blur-sm border border-[#1f1f23] px-2 py-0.5 text-[9px] font-bold text-[#93939a]"
        style={{ fontFamily: "var(--font-body)" }}
      >
        ⏱ {product.estimatedTime || "15-20 min"}
      </span>

      {/* 
        PRODUCT IMAGE DISPLAY 
        Beautiful real HD product images with optimized visual fallback
      */}
      <div className="relative h-48 w-full overflow-hidden bg-[#080809]/40 border-b border-[#1f1f23]/60 group-hover:bg-[#080809]/60 transition-colors duration-200">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            {renderProductIcon(product.category?.name || "")}
          </div>
        )}
      </div>

      {/* PRODUCT INFORMATION BODY */}
      <div className="flex-1 flex flex-col p-5">
        
        {/* Title and Spice indicator */}
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3
            className="text-lg font-extrabold text-white leading-tight group-hover:text-[#e31c25] transition-colors duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {product.name}
          </h3>
          
          {/* Spicy Indicator (Pepper icons) */}
          {product.spicyLevel != null && product.spicyLevel > 0 && (
            <div className="flex gap-0.5 mt-1 items-center" title={`Spicy level: ${product.spicyLevel}/3`}>
              {Array.from({ length: product.spicyLevel }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#e31c25"
                  className="w-3.5 h-3.5 filter drop-shadow-[0_0_2px_rgba(227,28,37,0.4)]"
                >
                  <path d="M12 2C11.5 2 11 3.5 11 5C11 8.5 7 9 7 13.5C7 17.5 10 20.5 14 20.5C18 20.5 21 17.5 21 13.5C21 9 17 8.5 17 5C17 3.5 16.5 2 16 2C15.5 2 15 3.5 15 5C15 6.5 14 7.5 13.5 8C13 8.5 12.5 8.5 12 8C11.5 7.5 12.5 6.5 12.5 5C12.5 3.5 12.5 2 12 2Z" />
                </svg>
              ))}
            </div>
          )}
        </div>

        {/* Short Description */}
        <p
          className="text-xs text-[#93939a] leading-relaxed line-clamp-2 md:line-clamp-3"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {product.description}
        </p>
 
        {/* BUY ROW: Price and Action Button */}
        <div className="mt-auto flex items-center justify-between gap-4 pt-3 border-t border-[#1f1f23]/30">
          
          {/* Price Tag */}
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#93939a]" style={{ fontFamily: "var(--font-body)" }}>
              Price
            </span>
            <span
              className="text-lg font-black text-[#ffc700]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ${product.price.toFixed(2)}
            </span>
          </div>

          {/* Action CTA with Micro-Interaction confirmation */}
          <button
            onClick={handleAdd}
            className={`btn-primary-hover flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 font-bold text-xs uppercase tracking-wider transition-all duration-150 cursor-pointer ${
              isAdded
                ? "bg-[#4ade80] text-black"
                : "bg-[#e31c25] text-white"
            }`}
            style={{ 
              fontFamily: "var(--font-body)",
              boxShadow: "none"
            }}
          >
            {isAdded ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="w-4 h-4 animate-bounce"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Added!</span>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span>Add To Cart</span>
              </>
            )}
          </button>

        </div>

      </div>
    </div>
  );
};
