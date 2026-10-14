"use client";

import React, { useState, useMemo } from "react";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuickViewModal from "@/components/QuickViewModal";
import VideoModal from "@/components/VideoModal";
import SearchModal from "@/components/SearchModal";
import Toast from "@/components/Toast";
import ToothbrushHero from "@/components/product-list/ToothbrushHero";
import ProductCard from "@/components/product-list/ProductCard";
import FilterSidebar, { FilterState } from "@/components/product-list/FilterSidebar";
import BottomFeatureBanner from "@/components/product-list/BottomFeatureBanner";
import { TOOTHBRUSH_PRODUCTS } from "@/data/products";

function ToothbrushListPageContent() {
  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    productTypes: [],
    features: [],
    maxPrice: 2999,
    selectedColor: null,
  });

  // Sort state
  const [sortBy, setSortBy] = useState<string>("featured");
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Mobile filter drawer state
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Clear all filters handler
  const handleClearAll = () => {
    setFilters({
      productTypes: [],
      features: [],
      maxPrice: 2999,
      selectedColor: null,
    });
  };

  // Calculate live counts for each filter category
  const filterCounts = useMemo(() => {
    const ptCounts: Record<string, number> = {
      "Electric Toothbrush": 0,
      "Brush Heads": 0,
    };
    const fCounts: Record<string, number> = {
      "Deep Cleaning": 0,
      "Sensitive Care": 0,
      "Travel Friendly": 0,
      "Multiple Modes": 0,
    };

    TOOTHBRUSH_PRODUCTS.forEach((p) => {
      if (p.productType && ptCounts[p.productType] !== undefined) {
        ptCounts[p.productType]++;
      }
      p.features.forEach((f) => {
        if (fCounts[f] !== undefined) {
          fCounts[f]++;
        }
      });
    });

    return { productTypes: ptCounts, features: fCounts };
  }, []);

  // Filtered & sorted products
  const filteredProducts = useMemo(() => {
    let result = TOOTHBRUSH_PRODUCTS.filter((product) => {
      // 1. Product Type filter
      if (
        filters.productTypes.length > 0 &&
        (!product.productType || !filters.productTypes.includes(product.productType))
      ) {
        return false;
      }

      // 2. Features filter (must include at least one checked feature)
      if (filters.features.length > 0) {
        const hasFeature = filters.features.some((f) => product.features.includes(f));
        if (!hasFeature) return false;
      }

      // 3. Price filter
      if (product.price > filters.maxPrice) {
        return false;
      }

      // 4. Color filter
      if (filters.selectedColor && product.colors) {
        const matchesColor = product.colors.some(
          (c) => c.toLowerCase() === filters.selectedColor?.toLowerCase()
        );
        if (!matchesColor) return false;
      }

      return true;
    });

    // Sorting logic
    if (sortBy === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result = [...result].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return result;
  }, [filters, sortBy]);

  const activeFilterCount =
    filters.productTypes.length +
    filters.features.length +
    (filters.maxPrice < 2999 ? 1 : 0) +
    (filters.selectedColor ? 1 : 0);

  return (
    <div className="min-h-screen bg-[#01030A] text-white flex flex-col selection:bg-[#0047FF] selection:text-white">
      {/* 1. Translucent Global Navbar */}
      <Navbar />

      {/* 2. Category Hero Section (Dark with Floating Toothbrushes and Waves) */}
      <ToothbrushHero />

      {/* 3. Main Product Listing Section (Crisp Clean White Background as shown in reference) */}
      <section className="w-full bg-white text-gray-900 py-10 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Desktop Left Sidebar: Filter Component */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28">
                <FilterSidebar
                  filters={filters}
                  setFilters={setFilters}
                  counts={filterCounts}
                  onClearAll={handleClearAll}
                />
              </div>
            </div>

            {/* Main Content Area: Products Grid + Header */}
            <div className="lg:col-span-9 flex flex-col">
              {/* Header Bar: Category Title, Counter, and Sort Dropdown */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 sm:pb-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                    Toothbrushes
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                    {filteredProducts.length} product{filteredProducts.length === 1 ? "" : "s"}
                  </p>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto">
                  {/* Mobile Filter Button */}
                  <button
                    onClick={() => setMobileFilterOpen(true)}
                    className="lg:hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-300 text-xs sm:text-sm font-semibold text-gray-800 hover:bg-gray-50 cursor-pointer"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    <span>Filter</span>
                    {activeFilterCount > 0 && (
                      <span className="w-5 h-5 rounded-full bg-[#0047FF] text-white text-[11px] flex items-center justify-center">
                        {activeFilterCount}
                      </span>
                    )}
                  </button>

                  {/* Sort Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsSortOpen(!isSortOpen)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-300 bg-white text-xs sm:text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <span>
                        Sort by:{" "}
                        <span className="font-normal text-gray-600">
                          {sortBy === "featured"
                            ? "Featured"
                            : sortBy === "price-low"
                            ? "Price: Low to High"
                            : sortBy === "price-high"
                            ? "Price: High to Low"
                            : "Highest Rated"}
                        </span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-500 transition-transform ${
                          isSortOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {isSortOpen && (
                      <>
                        <div
                          className="fixed inset-0 z-20"
                          onClick={() => setIsSortOpen(false)}
                        />
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-2xl shadow-xl z-30 py-2 text-xs sm:text-sm">
                          {[
                            { id: "featured", label: "Featured" },
                            { id: "price-low", label: "Price: Low to High" },
                            { id: "price-high", label: "Price: High to Low" },
                            { id: "rating", label: "Highest Rated" },
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => {
                                setSortBy(opt.id);
                                setIsSortOpen(false);
                              }}
                              className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors cursor-pointer ${
                                sortBy === opt.id
                                  ? "font-bold text-[#0047FF] bg-blue-50/50"
                                  : "text-gray-700"
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Products 3-Column Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                /* Empty state */
                <div className="py-20 text-center flex flex-col items-center justify-center bg-gray-50 rounded-3xl border border-dashed border-gray-300">
                  <p className="text-lg font-bold text-gray-900 mb-2">
                    No matching products found
                  </p>
                  <p className="text-sm text-gray-500 max-w-sm mb-6">
                    Try adjusting your filters or price range to find what you&apos;re looking for.
                  </p>
                  <button
                    onClick={handleClearAll}
                    className="px-6 py-2.5 rounded-full bg-gray-900 text-white text-xs sm:text-sm font-semibold hover:bg-black transition-colors cursor-pointer"
                  >
                    Reset all filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* 4. Bottom Feature Banner (Macro Bristles) */}
          <BottomFeatureBanner />
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white text-gray-900 shadow-2xl p-6 overflow-y-auto flex flex-col z-10">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <h3 className="text-lg font-bold">Filters</h3>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 rounded-full text-gray-500 hover:text-gray-900"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 py-4">
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                counts={filterCounts}
                onClearAll={handleClearAll}
              />
            </div>

            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3 rounded-full bg-gray-900 text-white font-semibold text-sm hover:bg-black"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Luxury Global Footer */}
      <Footer />

      {/* Global Interactive Overlays */}
      <QuickViewModal />
      <VideoModal />
      <SearchModal />
      <Toast />
    </div>
  );
}

export default function ToothbrushesPage() {
  return (
    <CartProvider>
      <ToothbrushListPageContent />
    </CartProvider>
  );
}
