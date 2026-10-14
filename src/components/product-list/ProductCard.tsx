"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(
    product.colors && product.colors.length > 0 ? product.colors[0] : null
  );

  return (
    <div className="group flex flex-col bg-white rounded-2xl transition-all duration-300">
      {/* Product Image Container (Direct link to PDP) */}
      <Link
        href={`/toothbrushes/${product.id}`}
        className="relative w-full aspect-[4/5] bg-[#F6F8FB] rounded-2xl overflow-hidden mb-4 flex items-center justify-center p-6 border border-gray-100/80 transition-shadow duration-300 group-hover:shadow-md cursor-pointer block"
      >
        {/* Badge (e.g. Best Seller) */}
        {product.badge && (
          <span className="absolute top-3.5 right-3.5 z-10 bg-[#06102B] text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm tracking-wide">
            {product.badge}
          </span>
        )}

        {/* Product Image */}
        <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
      </Link>

      {/* Product Details */}
      <div className="flex flex-col flex-1 px-1">
        {/* Title */}
        <Link href={`/toothbrushes/${product.id}`} className="group-hover:text-[#0047FF] transition-colors">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
            {product.name}
          </h3>
        </Link>

        {/* Subtitle / Category */}
        {product.subtitle && (
          <p className="text-xs text-gray-500 font-medium mt-0.5">
            {product.subtitle}
          </p>
        )}

        {/* Description */}
        <p className="text-xs sm:text-[13px] text-gray-600 line-clamp-2 mt-1.5 leading-relaxed min-h-[36px]">
          {product.description}
        </p>

        {/* Price & Color Swatches Row */}
        <div className="flex items-center justify-between mt-3 mb-4">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          {/* Color Dots */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5">
              {product.colors.map((colorHex, idx) => {
                const isSelected = selectedColor === colorHex;
                const isWhite = colorHex.toLowerCase() === "#ffffff";
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedColor(colorHex)}
                    className={`w-3.5 h-3.5 rounded-full transition-all cursor-pointer ${
                      isSelected
                        ? "ring-2 ring-offset-1 ring-[#0047FF] scale-110"
                        : "hover:scale-110 opacity-80 hover:opacity-100"
                    } ${isWhite ? "border border-gray-300" : ""}`}
                    style={{ backgroundColor: colorHex }}
                    aria-label={`Color option ${colorHex}`}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* View Details Button */}
        <Link
          href={`/toothbrushes/${product.id}`}
          className="w-full py-2.5 sm:py-3 px-4 rounded-full bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-900 border border-gray-200 hover:border-gray-900 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 shadow-sm cursor-pointer mt-auto group/btn"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover/btn:text-gray-900 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
