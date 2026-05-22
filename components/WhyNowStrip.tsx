// components/WhyNowStrip.tsx
"use client";

import { WHY_NOW } from "@/lib/company-data";
import { motion } from "framer-motion";

export default function WhyNowStrip() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-background">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: "url('/assets/road-construction.png')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
      
      <div className="max-w-7xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="flex items-center justify-center gap-2 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-4 h-px bg-accent/50" />
            Market Opportunity
            <span className="w-4 h-px bg-accent/50" />
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-extrabold tracking-tight">
            Why Bio-Bitumen, <span className="text-gradient">Why Now</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-5 gap-6">
          {WHY_NOW.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-6 rounded-2xl group hover:glass-hover transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-all duration-500" />
              
              <span className="font-display font-extrabold text-5xl leading-none block mb-4 text-white/10 group-hover:text-accent/30 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-secondary group-hover:text-white transition-colors text-sm leading-relaxed relative z-10">
                {reason}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
