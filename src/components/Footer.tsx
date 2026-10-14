"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#01030A] text-white/70 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/trimova_logo_icon.png"
                  alt="Trimova Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Trimova
              </span>
            </Link>

            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-sm">
              Thoughtfully designed oral and grooming essentials engineered to elevate your daily routine and amplify your confidence.
            </p>

            {/* Newsletter Subscription */}
            <div className="w-full max-w-sm">
              <span className="text-xs font-semibold tracking-wider uppercase text-white/80 block mb-2">
                Join the Trimova Circle
              </span>
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-white/5 border border-white/15 focus:border-[#0047FF] focus:outline-none rounded-full py-2.5 pl-4 pr-12 text-sm text-white placeholder:text-white/40 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 w-8 h-8 rounded-full bg-[#0047FF] hover:bg-[#0056FF] text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Subscribe"
                >
                  {subscribed ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-[#6FC8FF] mt-2">
                  Welcome to Trimova. You are now subscribed to our product updates.
                </p>
              )}
            </div>
          </div>

          {/* Navigation Column 1 */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-4">
              Explore Collection
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <Link href="/toothbrushes" className="hover:text-white transition-colors">
                  Electric Toothbrushes
                </Link>
              </li>
              <li>
                <a href="#razors" className="hover:text-white transition-colors">
                  Precision Razors
                </a>
              </li>
              <li>
                <Link href="/toothbrushes" className="hover:text-white transition-colors">
                  Brush Head Refills
                </Link>
              </li>
              <li>
                <a href="#razors" className="hover:text-white transition-colors">
                  Blade Cartridges
                </a>
              </li>
              <li>
                <Link href="/toothbrushes" className="hover:text-white transition-colors">
                  Travel Essentials
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2 */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-4">
              About Trimova
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <a href="#our-story" className="hover:text-white transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#toothbrushes" className="hover:text-white transition-colors">
                  Sonic Technology
                </a>
              </li>
              <li>
                <a href="#razors" className="hover:text-white transition-colors">
                  Blade Craftsmanship
                </a>
              </li>
              <li>
                <span className="text-white/40">Sustainability</span>
              </li>
              <li>
                <span className="text-white/40">Editorial & Press</span>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3 */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <Link href="/toothbrushes" className="hover:text-white transition-colors">
                  Product Catalog
                </Link>
              </li>
              <li>
                <span className="text-white/40">Quality Guarantee</span>
              </li>
              <li>
                <span className="text-white/40">Engineering Standards</span>
              </li>
              <li>
                <span className="text-white/40">Help & Support</span>
              </li>
              <li>
                <span className="text-white/40">Contact Us</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 Trimova Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
