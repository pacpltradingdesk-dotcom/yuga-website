// components/BusinessLineCards.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Laptop, ArrowRight } from "lucide-react";

export default function BusinessLineCards() {
  return (
    <section className="bg-surface py-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="flex items-center justify-center gap-2 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-4 h-px bg-accent/50" />
            Two Business Lines
            <span className="w-4 h-px bg-accent/50" />
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-primary font-extrabold tracking-tight">
            Consulting & Technology — <span className="text-gradient">One Partner</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Consulting card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-10 group transition-all duration-500 relative overflow-hidden min-h-[450px] flex flex-col justify-end border border-white/10 hover:border-accent/30 shadow-2xl"
          >
            {/* Image Overlay Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-700 ease-out z-0"
              style={{ backgroundImage: "url('/assets/road-construction.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/30 z-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl z-10 pointer-events-none" />
            
            <div className="relative z-20">
              <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent/30 transition-colors">
                <Building2 className="text-accent" size={28} />
              </div>
              <h3 className="font-display text-3xl text-white font-extrabold mb-4 tracking-tight">
                Bio-Bitumen Consulting
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "End-to-end plant setup — site to sales",
                  "Project Management (PMC) from DPR to handover",
                  "Access to 4,452-contact buyer network",
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-slate-300 text-sm md:text-base leading-relaxed">
                    <span className="text-accent mt-1 shrink-0"><ArrowRight size={14} /></span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/consulting"
                className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group/link"
              >
                Learn More
                <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center group-hover/link:bg-accent transition-colors">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* IT Products card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-10 group transition-all duration-500 relative overflow-hidden min-h-[450px] flex flex-col justify-end border border-white/10 hover:border-eco/30 shadow-2xl"
          >
            {/* Image Overlay Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-700 ease-out z-0"
              style={{ backgroundImage: "url('/assets/it-dashboard-mockup.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/30 z-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-eco/5 rounded-full blur-3xl z-10 pointer-events-none" />
            
            <div className="relative z-20">
              <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6 group-hover:border-eco/30 transition-colors">
                <Laptop className="text-eco" size={28} />
              </div>
              <h3 className="font-display text-3xl text-white font-extrabold mb-4 tracking-tight">
                IT Products
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Custom portals, dashboards and mobile apps",
                  "Built specifically for the bitumen & industrial sector",
                  "From plant management to market intelligence",
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-slate-300 text-sm md:text-base leading-relaxed">
                    <span className="text-eco mt-1 shrink-0"><ArrowRight size={14} /></span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/it-products"
                className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group/link"
              >
                View Products
                <span className="w-8 h-8 rounded-full bg-eco/20 flex items-center justify-center group-hover/link:bg-eco transition-colors">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
