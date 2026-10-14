"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Star, Check, ArrowUpRight, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function QuickViewModal() {
  const { selectedProduct, setSelectedProduct } = useCart();

  if (!selectedProduct) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setSelectedProduct(null)}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-white text-gray-900 rounded-3xl border border-gray-200 shadow-2xl overflow-hidden z-10 my-8">
        {/* Close Button */}
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
          {/* Product Image */}
          <div className="relative aspect-square bg-[#F6F8FB] rounded-2xl overflow-hidden flex items-center justify-center p-6 border border-gray-100">
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              fill
              className="object-contain p-4"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  {selectedProduct.rating || 4.9} ({selectedProduct.reviewsCount || 850}+ reviews)
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-3">
                {selectedProduct.name}
              </h2>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl font-bold text-gray-900">
                  ₹{selectedProduct.price.toLocaleString("en-IN")}
                </span>
                {selectedProduct.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ₹{selectedProduct.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {selectedProduct.description}
              </p>

              {/* Key Features */}
              <div className="space-y-2.5 mb-6">
                {selectedProduct.features.slice(0, 3).map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 font-medium">
                    <Check className="w-4 h-4 text-[#0047FF] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <Link
                href={
                  selectedProduct.category === "toothbrush"
                    ? `/toothbrushes/${selectedProduct.id}`
                    : `/toothbrushes/${selectedProduct.id}`
                }
                onClick={() => setSelectedProduct(null)}
                className="w-full bg-[#0047FF] hover:bg-[#0056FF] active:scale-[0.98] text-white py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#0047FF]/25 transition-all cursor-pointer group"
              >
                <span>View Full Specifications</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#0047FF]" />
                <span>Precision Engineered & Quality Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
