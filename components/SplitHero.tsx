// components/SplitHero.tsx
"use client";

import Link from "next/link";
import ReactorTelemetry from "./ReactorTelemetry";
import { COMPANY } from "@/lib/company-data";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function SplitHero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/hero-bg.png')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      <div className="absolute inset-0 z-0 bg-background/35 backdrop-blur-[1px]" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left: text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-8 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              India's #1 Bio-Bitumen Consultant
            </motion.div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary font-extrabold leading-[1.1] mb-6 tracking-tight">
              Complete Plant Setup. <br />
              <span className="text-gradient">From Agro-Waste to Road.</span>
            </h1>
            
            <p className="text-secondary text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              {COMPANY.usp}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2 bg-accent text-white font-bold px-8 py-4 rounded-full hover:bg-accent-hover transition-all text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:-translate-y-0.5"
              >
                Start Your Plant
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/it-products"
                className="group flex items-center gap-2 bg-white text-primary border border-border font-bold px-8 py-4 rounded-full hover:bg-surface-light transition-all text-sm uppercase tracking-wider"
              >
                View IT Products
                <ChevronRight size={18} className="text-secondary group-hover:text-primary transition-colors" />
              </Link>
            </div>
          </motion.div>

          {/* Right: reactor telemetry */}
          <div className="lg:justify-self-end w-full max-w-xl">
            <ReactorTelemetry />
          </div>
        </div>
      </div>
    </section>
  );
}
