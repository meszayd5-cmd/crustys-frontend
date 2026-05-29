"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

export const Navbar: React.FC = () => {
  const { totalItems, toggleCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll to transition header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when menu drawer is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close drawer on Escape keypress
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const isHomePage = pathname === "/";
  const isContactPage = pathname === "/contact";
  const headerClass = `fixed top-0 left-0 right-0 z-40 w-full transition-all duration-500 ease-in-out ${
    isHomePage
      ? isScrolled
        ? "bg-[#050505]/80 border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
        : "bg-transparent border-b border-transparent shadow-none backdrop-blur-none"
      : isContactPage
        ? isScrolled
          ? "bg-[#050505]/60 border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-sm"
          : "bg-transparent border-b border-transparent shadow-none backdrop-blur-none"
        : "bg-[#050505]/80 border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
  }`;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <>
      <header
        className={headerClass}
        style={{ height: "80px" }}
      >
        <div className="mx-auto max-w-[1200px] h-full px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          
          {/* LEFT SIDE: Hamburger Menu Icon (Mobile Only) */}
          <div className="flex md:hidden w-20 justify-start pl-5">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2.5 rounded-xl bg-transparent text-white hover:text-white/80 transition-all duration-300 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e31c25] cursor-pointer flex items-center justify-center"
              aria-label="Open Navigation Menu"
              aria-expanded={isMenuOpen}
              aria-controls="navigation-drawer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  d="M3 6h18M3 12h18M3 18h18"
                />
              </svg>
            </button>
          </div>
 
          {/* LOGO: Centered on mobile, Left-aligned on desktop */}
          <div className="hidden md:flex flex-1 md:flex-initial justify-center md:justify-start">
            <Link href="/" className="flex items-center gap-2 md:gap-3 group focus:outline-none">
              <img
                src="/images/crustys_logo_clean.png"
                alt="Crusty's Express Logo"
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="hidden sm:inline font-bebas text-lg md:text-2xl tracking-[0.15em] transition-colors duration-300">
                <span className="text-white">CRUSTY&apos;S</span>
                <span className="text-[#e31c25] ml-1.5">EXPRESS</span>
              </span>
            </Link>
          </div>
 
          {/* CENTER: Horizontal Navigation Links (Desktop Only) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 py-2 group focus:outline-none ${
                    isActive ? "text-[#e31c25]" : "text-[#B3B3B3] hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#e31c25] transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* RIGHT SIDE: Cart Icon */}
          <div className="w-20 md:w-auto flex justify-end pr-7 md:pr-0">
            <button
              onClick={toggleCart}
              className="relative p-2.5 rounded-xl bg-transparent md:bg-white/5 border border-transparent md:border-white/5 hover:bg-transparent hover:md:bg-white/10 hover:md:border-white/10 text-white md:text-[#B3B3B3] hover:text-white/80 md:hover:text-white transition-all duration-300 group focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e31c25] cursor-pointer flex items-center justify-center shadow-none md:shadow-inner"
              aria-label={`Open Shopping Cart, ${totalItems} items in cart`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.2"
                stroke="currentColor"
                className="w-7 h-7 md:w-5 md:h-5 text-white md:text-[#B3B3B3] group-hover:text-white/80 md:group-hover:text-white transition-colors duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              {totalItems > 0 && (
                <span
                  className="absolute -top-1.5 -right-1.5 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-[#e31c25] px-1 text-[9px] font-black text-white border border-[#050505] shadow-lg animate-bounce"
                  style={{
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {totalItems}
                </span>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* PREMIUM FULLSCREEN / SIDE MENU DRAWER (Mobile Only) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-start">
          {/* Backdrop Dim Overlay */}
          <div
            className="fixed inset-0 bg-[#050505]/90 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sliding Menu Panel */}
          <aside
            id="navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            className="relative z-10 flex h-full w-full flex-col bg-[#050505]/98 backdrop-blur-2xl border-r border-white/5 shadow-2xl sm:max-w-md animate-fade-in"
            style={{
              fontFamily: "var(--font-body)",
            }}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-white/5 px-10 sm:px-14 pt-16 pb-8">
              <span 
                className="text-xl font-black uppercase tracking-[0.2em] text-[#e31c25] font-bebas"
              >
                Crusty&apos;s Express
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full p-2.5 text-[#B3B3B3] hover:text-white hover:bg-white/5 transition-all duration-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e31c25]"
                aria-label="Close Navigation Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Main Navigation Links */}
            <nav className="flex-1 flex flex-col justify-center px-10 sm:px-14 space-y-10 pb-16 sm:pb-20 overflow-y-auto">
              {navLinks.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-4xl sm:text-5xl font-black uppercase tracking-widest transition-all duration-300 hover:translate-x-3 block font-bebas ${
                      isActive ? "text-[#e31c25]" : "text-[#B3B3B3] hover:text-white"
                    }`}
                    style={{
                      animationDelay: `${idx * 60}ms`
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Drawer Footer */}
            <div className="border-t border-white/5 p-6 text-center">
              <p className="text-[10px] text-[#B3B3B3]/40 tracking-widest uppercase">
                Crusty&apos;s Express • Street Food Reimagined
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};
