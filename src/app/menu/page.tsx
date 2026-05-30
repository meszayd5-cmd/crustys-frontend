"use client";

import React, { useState, useMemo, useEffect } from "react";
import { CategoryTabs } from "@/components/CategoryTabs";
import { ProductCard } from "@/components/ProductCard";
import { useCategories } from "@/hooks/useCategories";
import { useProducts } from "@/hooks/useProducts";

// Skeleton component for premium loading feedback
const ProductSkeleton = () => (
  <div className="w-full bg-[#111113] border border-[#1f1f23] rounded-2xl overflow-hidden p-5 space-y-4 animate-pulse">
    <div className="h-40 bg-[#17171a] rounded-xl w-full" />
    <div className="space-y-2">
      <div className="h-4 bg-[#17171a] rounded w-2/3" />
      <div className="h-3 bg-[#17171a] rounded w-full" />
      <div className="h-3 bg-[#17171a] rounded w-5/6" />
    </div>
    <div className="pt-4 border-t border-[#1f1f23]/30 flex justify-between items-center">
      <div className="space-y-1">
        <div className="h-2 bg-[#17171a] rounded w-8" />
        <div className="h-4 bg-[#17171a] rounded w-16" />
      </div>
      <div className="h-8 bg-[#17171a] rounded-xl w-24" />
    </div>
  </div>
);

export default function MenuPage() {
  const { categories, isLoading: isCategoriesLoading } = useCategories();
  const { products, isLoading: isProductsLoading } = useProducts({ limit: 100 });

  const [activeCategory, setActiveCategory] = useState<string>("Burgers de bœuf / Beef Burgers");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilteringLoading, setIsFilteringLoading] = useState(false);

  // Set default category once categories load
  useEffect(() => {
    if (categories && categories.length > 0 && !categories.some(c => c.name === activeCategory)) {
      setActiveCategory(categories[0].name);
    }
  }, [categories, activeCategory]);

  // Trigger simulated loader when active category changes to enhance Native App feeling
  useEffect(() => {
    setIsFilteringLoading(true);
    const timer = setTimeout(() => {
      setIsFilteringLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const isLoading = isCategoriesLoading || isProductsLoading || isFilteringLoading;

  // Filter products by active category & keyword search query
  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return products.filter((product) => {
      const matchesCategory = 
        product.category?.name === activeCategory ||
        categories?.find(c => c.name === activeCategory)?.id === product.categoryId;
      
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, products, categories]);

  // Dynamically computes the maximum width of the grid container based on card count
  // to ensure it perfectly centers as a single unified showcase block with balanced margins
  const getGridMaxWidthClass = (count: number) => {
    if (count === 1) return "max-w-[340px]";
    if (count === 2) return "max-w-[340px] sm:max-w-[704px]";
    if (count === 3) return "max-w-[340px] sm:max-w-[704px] lg:max-w-[1068px]";
    return "max-w-[340px] sm:max-w-[704px] lg:max-w-[1068px] xl:max-w-[1432px]";
  };

  return (
    <div className="menu-page-container bg-[#080809] min-h-[calc(100vh-80px)] pb-12 md:pb-20 lg:pb-24">
      <div className="mx-auto max-w-[1550px] px-6 sm:px-12 xl:px-16 space-y-10 md:space-y-14 w-full">
        
        {/* Catalog Section Header */}
        <div 
          className="flex flex-col items-center justify-center text-center gap-4 md:gap-5 border-b border-[#1f1f23]/40 pb-6 md:pb-7 max-w-2xl mx-auto w-full"
          style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", width: "100%", maxWidth: "672px", marginLeft: "auto", marginRight: "auto" }}
        >
          <div 
            className="space-y-2 flex flex-col items-center text-center w-full"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", width: "100%", marginLeft: "auto", marginRight: "auto" }}
          >
            <span 
              className="text-xs font-black uppercase tracking-widest text-[#e31c25] text-center"
              style={{ fontFamily: "var(--font-body)", textAlign: "center", display: "block" }}
            >
              Express Ordering
            </span>
            <h1 
              className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight text-center"
              style={{ fontFamily: "var(--font-display)", textAlign: "center", display: "block" }}
            >
              Explore Our Delivery Menu
            </h1>
            <p 
              className="text-xs sm:text-sm text-[#93939a] max-w-md mx-auto text-center"
              style={{ textAlign: "center", display: "block", marginLeft: "auto", marginRight: "auto" }}
            >
              Prepared fresh daily with premium ingredients, double-smashed crusts, and house-crafted dipping sauces.
            </p>
          </div>
        </div>

        <div className="h-10 sm:h-14 lg:h-16" />

        {/* Category Horizontal Filter Bar */}
        <CategoryTabs 
          activeCategory={activeCategory} 
          categories={categories}
          onSelectCategory={(category) => {
            setActiveCategory(category);
            setSearchQuery(""); // Clear search on category switch for clean flow
          }} 
        />

        {/* Proper spacing between category tabs and the food cards below them */}
        <div className="h-14 sm:h-20 lg:h-24" />

        {/* Products Grid catalog */}
        <div id="menu-product-grid" aria-live="polite" className="w-full flex flex-col items-center sm:block px-4 sm:px-0">
          {isLoading ? (
            <div className={`grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto w-full ${getGridMaxWidthClass(4)}`}>
              {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="w-full max-w-[340px] justify-self-center mx-auto">
                  <ProductSkeleton />
                </div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className={`grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in mx-auto w-full ${getGridMaxWidthClass(filteredProducts.length)}`}>
              {filteredProducts.map((product) => (
                <div key={product.id} className="w-full max-w-[340px] justify-self-center mx-auto">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            /* Fallback empty search/filter state */
            <div className="text-center py-16 border border-[#1f1f23] rounded-2xl bg-[#111113] max-w-md mx-auto space-y-4 px-6">
              <span className="text-5xl block animate-bounce" role="img" aria-label="Burger icon">🍔</span>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  No matches found
                </h3>
                <p className="text-xs text-[#93939a] leading-relaxed">
                  We couldn't find any products in "{activeCategory}" matching "{searchQuery}".
                </p>
              </div>
              <button
                onClick={() => setSearchQuery("")}
                className="btn-primary-hover px-6 py-2.5 rounded-lg bg-[#e31c25] text-white font-bold text-xs uppercase tracking-wider transition-all duration-150 cursor-pointer focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Clear Search Filter
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
