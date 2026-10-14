"use client";

import React from "react";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import ToothbrushFeature from "@/components/ToothbrushFeature";
import RazorFeature from "@/components/RazorFeature";
import OurStory from "@/components/OurStory";
import TrustBadges from "@/components/TrustBadges";
import BottomBanner from "@/components/BottomBanner";
import Footer from "@/components/Footer";
import QuickViewModal from "@/components/QuickViewModal";
import VideoModal from "@/components/VideoModal";
import SearchModal from "@/components/SearchModal";
import Toast from "@/components/Toast";

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#01030A] text-white flex flex-col selection:bg-[#0047FF] selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section with WebGL Fibre Arc behind it */}
        <HeroSection />

        {/* Featured Products Showcase (White Section) */}
        <FeaturedProducts />

        {/* Toothbrush Spotlight Feature (Dark Section) */}
        <ToothbrushFeature />

        {/* Razor Spotlight Feature (Light Section) */}
        <RazorFeature />

        {/* Our Story (Dark Section) */}
        <OurStory />

        {/* Trust Badges Bar */}
        <TrustBadges />

        {/* Bottom Banner */}
        <BottomBanner />

        {/* Comprehensive Luxury Footer */}
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
