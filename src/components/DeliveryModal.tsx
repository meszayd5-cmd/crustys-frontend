"use client";

import React, { useState, useEffect } from "react";
import { useCart, DeliveryPartnerType } from "@/context/CartContext";

export const DeliveryModal: React.FC = () => {
  const {
    isDeliveryOpen,
    closeDelivery,
    selectedPartner,
    selectDeliveryPartner,
    cart,
    totalPrice,
    clearCart
  } = useCart();

  const [isRedirecting, setIsRedirecting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (isDeliveryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDeliveryOpen]);

  // Handle local state resets when modal closes
  useEffect(() => {
    if (!isDeliveryOpen) {
      setIsRedirecting(false);
      setIsSuccess(false);
    }
  }, [isDeliveryOpen]);

  // Keyboard navigation: Close modal on Esc keypress
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isDeliveryOpen && !isRedirecting && !isSuccess) {
        closeDelivery();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDeliveryOpen, isRedirecting, isSuccess, closeDelivery]);

  const handlePartnerSelect = (partner: DeliveryPartnerType) => {
    selectDeliveryPartner(partner);
    setIsSuccess(true);
  };

  const handleFinalRedirection = () => {
    // Clear cart and dismiss modal to complete mock transaction flow
    clearCart();
    closeDelivery();
  };

  if (!isDeliveryOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="delivery-modal-title"
    >
      
      {/* 
        BACKDROP DIM OVERLAY 
        Clicks to close the checkout screen unless redirecting/success 
      */}
      <div
        className="fixed inset-0 bg-[#080809]/90 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        onClick={() => {
          if (!isRedirecting && !isSuccess) closeDelivery();
        }}
      />

      {/* 
        MAIN MODAL BOX 
        Adheres to DESIGN.md tokens: rounded-xl (24px) corners, surface background, subtle glow borders
      */}
      <div
        className="relative z-10 w-full max-w-lg bg-[#111113] border border-[#1f1f23] shadow-2xl p-6 sm:p-8 animate-slide-up"
        style={{
          fontFamily: "var(--font-body)",
          borderRadius: "24px",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.6)"
        }}
      >
        
        {/* =========================================================
            STATE 1: REDIRECTING / SIMULATED ROUTING LOADING
            ========================================================= */}
        {isRedirecting && (
          <div className="flex flex-col items-center justify-center text-center py-12 space-y-6">
            
            {/* Immersive pulsing network radar glow */}
            <div className="relative flex h-20 w-20 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#ffc700] opacity-10 animate-ping"></span>
              <span className="absolute inline-flex h-16 w-16 rounded-full bg-[#e31c25] opacity-25 animate-pulse"></span>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#17171a] border border-[#1f1f23] text-white">
                ⏱
              </span>
            </div>

            <div className="space-y-2">
              <h3
                id="delivery-modal-title"
                className="text-xl font-extrabold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Routing to {selectedPartner}...
              </h3>
              <p className="text-xs text-[#93939a] max-w-[280px] leading-relaxed mx-auto">
                Syncing order details to your preferred delivery partner. Do not close this browser screen.
              </p>
            </div>
            
            <div className="w-full max-w-[180px] h-1 bg-[#17171a] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#e31c25] to-[#ffc700] rounded-full animate-[shimmer_1.5s_infinite_linear]" style={{ width: "60%" }}></div>
            </div>
          </div>
        )}

        {/* =========================================================
            STATE 2: MOCK SUCCESS REDIRECT SUMMARY
            ========================================================= */}
        {isSuccess && (
          <div className="space-y-6 py-4">
            
            {/* Success Header Icon */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4ade80]/15 text-[#4ade80] border border-[#4ade80]/30 shadow-[0_0_15px_rgba(74,222,128,0.15)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  className="w-6 h-6 animate-bounce"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3
                id="delivery-modal-title"
                className="text-2xl font-black text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ready for Redirection!
              </h3>
              <p className="text-xs text-[#93939a] max-w-sm leading-relaxed">
                Your Crusty’s order has been compiled and is ready for swift finalization on the official <strong>{selectedPartner}</strong> interface.
              </p>
            </div>

            {/* Compiled Order Summary Details Box */}
            <div className="rounded-xl border border-[#1f1f23] bg-[#17171a]/40 p-4 space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#93939a]">
                Order Details Compilation
              </span>
              
              {/* Product Listing rollup */}
              <div className="max-h-[140px] overflow-y-auto space-y-2 pr-2 scrollbar-none">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-center text-xs">
                    <span className="text-white font-medium">
                      {item.quantity}x <span className="text-[#93939a]">{item.product.name}</span>
                    </span>
                    <span className="text-white font-bold">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Redirection Summary Totals */}
              <div className="flex items-center justify-between pt-3 border-t border-[#1f1f23] text-sm">
                <span className="font-extrabold text-white">Estimated Subtotal</span>
                <span className="font-black text-[#ffc700]" style={{ fontFamily: "var(--font-display)" }}>
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Redirection buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleFinalRedirection}
                className="btn-primary-hover w-full py-4 rounded-xl bg-[#e31c25] hover:bg-[#f0242d] text-white font-extrabold text-sm uppercase tracking-wider transition-colors duration-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                style={{
                  boxShadow: "0 4px 12px rgba(227, 28, 37, 0.2)"
                }}
              >
                Launch Mock {selectedPartner} Checkout
              </button>
              
              <button
                onClick={() => {
                  setIsSuccess(false);
                  closeDelivery();
                }}
                className="w-full py-3 rounded-xl bg-[#17171a] border border-[#1f1f23] text-[#93939a] hover:text-white hover:border-white/10 font-bold text-xs uppercase tracking-wider transition-colors duration-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e31c25] focus-visible:outline-offset-2"
              >
                Cancel & Edit Order
              </button>
            </div>

          </div>
        )}

        {/* =========================================================
            STATE 3: PARTNER SELECTION GRID (INITIAL SCREEN)
            ========================================================= */}
        {!isRedirecting && !isSuccess && (
          <div className="space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h2
                  id="delivery-modal-title"
                  className="text-2xl font-black text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Checkout Redirection
                </h2>
                <p className="text-xs text-[#93939a]">
                  Choose your delivery partner to complete this order.
                </p>
              </div>
              
              <button
                onClick={closeDelivery}
                aria-label="Close delivery partner selection modal"
                className="rounded-lg p-2 text-[#93939a] hover:text-white hover:bg-[#17171a] transition-all duration-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e31c25] focus-visible:outline-offset-2"
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

            {/* Delivery Partner Grid selection */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              
              {/* Uber Eats Partner Option */}
              <button
                onClick={() => handlePartnerSelect("Uber Eats")}
                className="group flex flex-col items-center justify-center p-5 rounded-2xl bg-[#17171a] border border-[#1f1f23] hover:border-[#4ade80]/20 transition-all duration-150 cursor-pointer focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e31c25] focus-visible:outline-offset-2"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#080809] border border-[#1f1f23] mb-3 group-hover:bg-[#1f1f23] transition-colors duration-150 text-lg" aria-hidden="true">
                  🟢
                </div>
                <span className="text-sm font-extrabold text-white" style={{ fontFamily: "var(--font-display)" }}>
                  Uber Eats
                </span>
                <span className="text-[10px] text-[#4ade80] font-bold mt-1">Select</span>
              </button>

              {/* DoorDash Partner Option */}
              <button
                onClick={() => handlePartnerSelect("DoorDash")}
                className="group flex flex-col items-center justify-center p-5 rounded-2xl bg-[#17171a] border border-[#1f1f23] hover:border-[#ff3b30]/20 transition-all duration-150 cursor-pointer focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e31c25] focus-visible:outline-offset-2"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#080809] border border-[#1f1f23] mb-3 group-hover:bg-[#1f1f23] transition-colors duration-150 text-lg" aria-hidden="true">
                  🔴
                </div>
                <span className="text-sm font-extrabold text-white" style={{ fontFamily: "var(--font-display)" }}>
                  DoorDash
                </span>
                <span className="text-[10px] text-[#ff3b30] font-bold mt-1">Select</span>
              </button>

              {/* SkipTheDishes Partner Option */}
              <button
                onClick={() => handlePartnerSelect("SkipTheDishes")}
                className="group flex flex-col items-center justify-center p-5 rounded-2xl bg-[#17171a] border border-[#1f1f23] hover:border-[#ff9500]/20 transition-all duration-150 cursor-pointer focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e31c25] focus-visible:outline-offset-2"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#080809] border border-[#1f1f23] mb-3 group-hover:bg-[#1f1f23] transition-colors duration-150 text-lg" aria-hidden="true">
                  🟠
                </div>
                <span className="text-sm font-extrabold text-white" style={{ fontFamily: "var(--font-display)" }}>
                  SkipTheDishes
                </span>
                <span className="text-[10px] text-[#ff9500] font-bold mt-1">Select</span>
              </button>

            </div>

            {/* Quick Informational Notice */}
            <div className="rounded-xl bg-[#080809]/40 border border-[#1f1f23] p-4 text-center">
              <p className="text-[10px] text-[#93939a] leading-relaxed">
                ℹ️ Phase 1 Simulation: Selecting a partner triggers a simulated order packaging and compilation dialog rather than a live charge or API dispatch.
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
