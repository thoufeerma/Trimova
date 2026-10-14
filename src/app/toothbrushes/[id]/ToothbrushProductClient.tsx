"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuickViewModal from "@/components/QuickViewModal";
import VideoModal from "@/components/VideoModal";
import SearchModal from "@/components/SearchModal";
import Toast from "@/components/Toast";
import ProductGallery from "@/components/pdp/ProductGallery";
import ProductInfo from "@/components/pdp/ProductInfo";
import ProductDetailsSection from "@/components/pdp/ProductDetailsSection";
import { TOOTHBRUSH_PRODUCTS, PRODUCTS } from "@/data/products";

interface ToothbrushProductClientProps {
  productId: string;
}

export default function ToothbrushProductClient({ productId }: ToothbrushProductClientProps) {
  const product =
    TOOTHBRUSH_PRODUCTS.find((p) => p.id === productId) ||
    PRODUCTS.find((p) => p.id === productId) ||
    TOOTHBRUSH_PRODUCTS[0];

  return (
    <CartProvider>
      <div className="min-h-screen bg-white text-gray-900 flex flex-col selection:bg-[#0047FF] selection:text-white">
        {/* 1. Global Dark Navbar */}
        <Navbar />

        {/* 2. Main Page Container */}
        <main className="w-full flex-1 pt-24 sm:pt-28 pb-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 mb-8 font-medium">
              <Link
                href="/"
                className="hover:text-gray-900 transition-colors cursor-pointer"
              >
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <Link
                href="/toothbrushes"
                className="hover:text-gray-900 transition-colors cursor-pointer"
              >
                Toothbrushes
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-900 font-semibold">{product.name}</span>
            </nav>

            {/* Top Showcase: Gallery (Left) & Info (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Gallery with 5 Thumbnails + Large Box */}
              <div className="lg:col-span-7">
                <ProductGallery productName={product.name} mainImage={product.image} />
              </div>

              {/* Right Column: Title, Ratings, Specs, Actions, Included items */}
              <div className="lg:col-span-5">
                <ProductInfo product={product} />
              </div>
            </div>

            {/* Bottom Section: Product Details & 4 Feature Pillars */}
            <ProductDetailsSection />
          </div>
        </main>

        {/* 3. Luxury Global Dark Footer */}
        <Footer />

        {/* Global Interactive Overlays */}
        <QuickViewModal />
        <VideoModal />
        <SearchModal />
        <Toast />
      </div>
    </CartProvider>
  );
}
