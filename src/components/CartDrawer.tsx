"use client";

import React, { useEffect } from "react";
import { useCart } from "@/context/CartContext";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    totalItems,
    totalPrice,
    updateQuantity,
    removeFromCart,
    setCartOpen,
    openDelivery,
  } = useCart();

  // Prevent background scrolling when cart drawer is active
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  // Close drawer on Escape keypress
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCartOpen) {
        setCartOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCartOpen, setCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      
      {/* 
        BACKDROP DIM OVERLAY 
        Clicks outside the drawer to dismiss it 
      */}
      <div
        className="fixed inset-0 bg-[#080809]/80 backdrop-blur-xs transition-opacity duration-300 animate-fade-in"
        onClick={() => setCartOpen(false)}
      />

      {/* 
        SLIDE-OUT CART PANEL 
        Adheres to DESIGN.md tokens: rounded-l-2xl layout, charcoal surface, custom scrollbars
      */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        className="relative z-10 flex h-full w-full flex-col bg-[#111113] border-l border-[#1f1f23] shadow-2xl sm:max-w-md animate-slide-up"
        style={{
          fontFamily: "var(--font-body)",
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px"
        }}
      >
        
        {/* DRAWER HEADER */}
        <div className="flex items-center justify-between border-b border-[#1f1f23] px-6 py-5">
          <div className="flex items-center gap-2.5">
            <h2
              id="cart-drawer-title"
              className="text-xl font-extrabold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your Cart
            </h2>
            <span
              className="rounded-full bg-[#e31c25] px-2 py-0.5 text-2xs font-black text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {totalItems}
            </span>
          </div>

          {/* Close Action Button */}
          <button
            onClick={() => setCartOpen(false)}
            className="rounded-lg p-2 text-[#93939a] hover:text-white hover:bg-[#17171a] transition-all duration-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e31c25] focus-visible:outline-offset-2"
            aria-label="Close cart"
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

        {/* DRAWER MAIN CONTENT (SCROLLABLE LIST) */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          
          {/* EMPTY STATE */}
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center py-12">
              <div className="rounded-full bg-[#17171a] border border-[#1f1f23] p-6 mb-4 text-[#93939a] shadow-inner">
                {/* Empty Bag SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 text-[#93939a]/60"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Craving list is empty!
              </h3>
              <p className="text-xs text-[#93939a] max-w-[240px] leading-relaxed mb-6">
                Add some bold urban patties, loaded fries, or fresh wraps to ignite your taste buds.
              </p>
              <button
                onClick={() => setCartOpen(false)}
                className="btn-primary-hover px-6 py-3 rounded-xl bg-[#e31c25] text-white text-xs font-bold uppercase tracking-wider transition-colors duration-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                Back To Menu Catalog
              </button>
            </div>
          ) : (
            
            // POPULATED ITEM LIST
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center gap-4 rounded-xl border border-[#1f1f23] bg-[#17171a]/50 p-4 transition-all duration-200 hover:border-[#1f1f23]"
              >
                
                {/* Product mini avatar backdrop */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-[#080809] border border-[#1f1f23]" aria-hidden="true">
                  <span className="text-2xl" title={item.product.category}>🍔</span>
                </div>

                {/* Info and Quantities grid */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4
                        className="text-sm font-extrabold text-white leading-snug"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-[#ffc700] font-bold mt-0.5">
                        ${item.product.price.toFixed(2)} each
                      </p>
                    </div>

                    {/* Trash Delete button */}
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-[#93939a] hover:text-[#e31c25] p-1 rounded-md transition-colors duration-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e31c25] focus-visible:outline-offset-2"
                      aria-label={`Remove ${item.product.name} from cart`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Quantity adjustment panel */}
                  <div className="flex items-center justify-between mt-3.5 pt-2 border-t border-[#1f1f23]/40">
                    <div className="flex items-center gap-1.5 bg-[#080809] border border-[#1f1f23] rounded-lg p-1">
                      
                      {/* Decrement Button */}
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 text-[#93939a] hover:text-white rounded transition-colors duration-150 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e31c25] focus-visible:outline-offset-2"
                        aria-label={`Decrease quantity of ${item.product.name}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="currentColor"
                          className="w-3 h-3"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                      </button>

                      {/* Quantity display */}
                      <span
                        className="w-6 text-center text-xs font-black text-white"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.quantity}
                      </span>

                      {/* Increment Button */}
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 text-[#93939a] hover:text-white rounded transition-colors duration-150 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e31c25] focus-visible:outline-offset-2"
                        aria-label={`Increase quantity of ${item.product.name}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="currentColor"
                          className="w-3 h-3"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </button>
                    </div>

                    {/* Subtotal calculation */}
                    <span className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

        {/* DRAWER FOOTER PANEL */}
        {cart.length > 0 && (
          <div className="border-t border-[#1f1f23] bg-[#111113] p-6 space-y-4">
            
            {/* Price Calculations */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs text-[#93939a]">
                <span>Total Items</span>
                <span>{totalItems} items</span>
              </div>
              <div className="flex items-center justify-between text-xs text-[#93939a]">
                <span>Est. Delivery Prep</span>
                <span className="text-white">Ready in ~15 mins</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-[#1f1f23]/40">
                <span className="text-sm font-bold text-white">Subtotal</span>
                <span
                  className="text-xl font-black text-[#ffc700]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            {/* 
              PROCEED CHECKOUT CTA 
              Triggers the redirect Modal via CartContext 
            */}
            <button
              onClick={openDelivery}
              className="btn-primary-hover w-full flex items-center justify-center gap-3.5 py-4 rounded-xl bg-[#e31c25] hover:bg-[#f0242d] text-white font-extrabold text-sm uppercase tracking-wider transition-colors duration-150 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              style={{
                boxShadow: "none"
              }}
            >
              <span>Proceed To Delivery</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        )}

      </aside>
    </div>
  );
};
