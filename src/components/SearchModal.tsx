"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowUpRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen } = useCart();
  const [query, setQuery] = useState("");

  if (!isSearchOpen) return null;

  const filteredProducts = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      {/* Backdrop */}
      <div
        onClick={() => setIsSearchOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Search Container */}
      <div className="relative w-full max-w-2xl bg-[#030712] text-white rounded-3xl border border-white/10 shadow-2xl overflow-hidden z-10">
        {/* Search input field */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-white/50" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search toothbrushes, razors, brush heads..."
            autoFocus
            className="flex-1 bg-transparent text-base sm:text-lg text-white placeholder:text-white/40 focus:outline-none"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 text-white/60 hover:text-white rounded-full hover:bg-white/10"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">
            {query ? `Results for "${query}"` : "Popular Essentials"}
          </div>

          {filteredProducts.length === 0 ? (
            <p className="text-sm text-white/50 text-center py-8">
              No products found matching &ldquo;{query}&rdquo;.
            </p>
          ) : (
            filteredProducts.map((product) => {
              const href =
                product.category === "toothbrush"
                  ? `/toothbrushes/${product.id}`
                  : "/toothbrushes";

              return (
                <Link
                  key={product.id}
                  href={href}
                  onClick={() => setIsSearchOpen(false)}
                  className="flex items-center justify-between gap-4 p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 bg-white/10 rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-white leading-snug group-hover:text-[#6FC8FF] transition-colors">
                        {product.name}
                      </h4>
                      <span className="text-xs text-white/60">
                        {product.subtitle || (product.category === "toothbrush" ? "Sonic Toothbrush" : "Precision Razor")}
                      </span>
                    </div>
                  </div>

                  <div
                    className="w-9 h-9 rounded-full bg-[#0047FF] hover:bg-[#0056FF] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
                    aria-label="View product details"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
