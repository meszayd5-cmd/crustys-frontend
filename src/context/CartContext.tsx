"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/menuData";

export interface CartItem {
  product: Product;
  quantity: number;
}

export type DeliveryPartnerType = "Uber Eats" | "DoorDash" | "SkipTheDishes";

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  isDeliveryOpen: boolean;
  selectedPartner: DeliveryPartnerType | null;
  totalItems: number;
  totalPrice: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (isOpen: boolean) => void;
  openDelivery: () => void;
  closeDelivery: () => void;
  selectDeliveryPartner: (partner: DeliveryPartnerType) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<DeliveryPartnerType | null>(null);

  // Load cart from localStorage on mount (safe for Client Components)
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("crustys_cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
    }
  }, []);

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("crustys_cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [cart]);

  // Derived state: Total item count
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Derived state: Total price
  const totalPrice = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  // Add item to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
    // Automatically slide open the cart drawer for positive feedback on mobile/desktop
    setIsCartOpen(true);
  };

  // Remove item completely from cart
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  // Update item quantity
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Clear all items in cart
  const clearCart = () => {
    setCart([]);
    setSelectedPartner(null);
  };

  // Toggle cart drawer visibility
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const setCartOpen = (isOpen: boolean) => {
    setIsCartOpen(isOpen);
  };

  // Open delivery selection modal (Checkout action)
  const openDelivery = () => {
    if (cart.length === 0) return;
    setIsCartOpen(false); // Close cart drawer
    setIsDeliveryOpen(true); // Open modal
  };

  // Close delivery selection modal
  const closeDelivery = () => {
    setIsDeliveryOpen(false);
  };

  // Select delivery partner & execute mock final checkout redirection
  const selectDeliveryPartner = (partner: DeliveryPartnerType) => {
    setSelectedPartner(partner);
    
    // We log for simulation and display a clear confirmation overlay in the component later
    console.log(`Order processed. Redirecting to ${partner} mock checkout interface...`);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        isDeliveryOpen,
        selectedPartner,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleCart,
        setCartOpen,
        openDelivery,
        closeDelivery,
        selectDeliveryPartner,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
