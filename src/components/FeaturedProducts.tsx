"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight, Eye, Star } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function FeaturedProducts() {
  const { setSelectedProduct } = useCart();
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#FFFFFF] text-[#0A0D14] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6B7280] block mb-2">
              FEATURED PRODUCTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight">
              Essentials for <br className="hidden sm:block" />a Sharper You
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between lg:justify-end gap-6">
            <p className="text-[#64748B] text-sm sm:text-base max-w-sm leading-relaxed">
              High-performance toothbrushes and razors, designed for your everyday routine.
            </p>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-gray-200 hover:border-gray-900 flex items-center justify-center text-gray-700 hover:text-black transition-all hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Scroll previous products"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-gray-200 hover:border-gray-900 flex items-center justify-center text-gray-700 hover:text-black transition-all hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Scroll next products"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Cards Grid / Horizontal Scroll for Mobile */}
        <div
          ref={carouselRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4 scrollbar-none snap-x"
        >
          {PRODUCTS.map((product) => {
            const productHref = `/toothbrushes/${product.id}`;

            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between bg-white rounded-3xl p-3 border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300 relative snap-start"
              >
                {/* Product Image Container (Direct link to PDP) */}
                <Link
                  href={productHref}
                  className="relative w-full aspect-[4/5] bg-[#F4F6F9] rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center p-4 transition-transform duration-300 group-hover:bg-[#EFF3F8]"
                >
                  {/* Tag if available */}
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-[#0B1528] text-white text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-full uppercase z-10">
                      {product.tag}
                    </span>
                  )}

                  <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Quick view button overlay (ONLY triggers modal) */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-gray-900 text-xs font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 hover:bg-gray-50 active:scale-95 cursor-pointer z-20 border border-gray-200"
                  >
                    <Eye className="w-3.5 h-3.5" /> Quick View
                  </button>
                </Link>

                {/* Product Info & Action Button */}
                <div className="pt-4 pb-2 px-2 flex items-end justify-between gap-3">
                  <Link
                    href={productHref}
                    className="cursor-pointer group/title flex-1"
                  >
                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 leading-snug line-clamp-2 group-hover/title:text-[#0047FF] transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-base sm:text-lg font-bold text-gray-900">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          ₹{product.originalPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>
                    {product.subtitle && (
                      <p className="text-xs text-gray-500 font-medium mt-0.5">
                        {product.subtitle}
                      </p>
                    )}
                  </Link>

                  {/* View Details Action Button */}
                  <Link
                    href={productHref}
                    className="w-10 h-10 rounded-full bg-[#0B1528] hover:bg-[#0047FF] active:scale-95 text-white flex items-center justify-center shrink-0 transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#0047FF]/30 cursor-pointer group/btn"
                    aria-label={`View ${product.name} details`}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
