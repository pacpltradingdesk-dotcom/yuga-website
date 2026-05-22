// components/CareerTimeline.tsx
"use client";

import { CAREER_TRACK } from "@/lib/company-data";
import { motion } from "framer-motion";

export default function CareerTimeline() {
  return (
    <div className="max-w-3xl relative">
      {/* Thicker, glowing connector line */}
      <div className="absolute top-0 bottom-0 left-[75px] md:left-[85px] w-[2px] bg-gradient-to-b from-accent via-accent/40 to-transparent shadow-[0_0_8px_rgba(245,158,11,0.3)]" />
      
      {CAREER_TRACK.map((entry, index) => (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          key={`${entry.year}-${entry.company}-${index}`} 
          className="relative flex gap-6 md:gap-10 pb-12 group"
        >
          {/* Year label */}
          <div className="w-12 md:w-16 shrink-0 text-right pt-1">
            <span className="font-display font-black text-accent text-sm md:text-base tracking-wider block group-hover:text-accent-light transition-colors">{entry.year}</span>
          </div>
          
          {/* Connector Node */}
          <div className="relative flex flex-col items-center">
            <div className="w-5 h-5 rounded-full bg-[#0F172A] border-2 border-accent mt-1 shrink-0 flex items-center justify-center group-hover:scale-125 group-hover:border-accent-light transition-all duration-300 shadow-[0_0_12px_rgba(245,158,11,0.4)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.7)]">
              <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-accent-light transition-all duration-300" />
            </div>
          </div>
          
          {/* Content Card */}
          <div className="flex-1 glass p-6 rounded-2xl border border-white/5 group-hover:border-accent/20 group-hover:glass-hover transition-all duration-300 -mt-3 shadow-[0_4px_20px_rgba(0,0,0,0.2)] group-hover:shadow-[0_4px_30px_rgba(245,158,11,0.05)]">
            <p className="font-display font-extrabold text-white text-xl mb-2 group-hover:text-accent transition-colors">{entry.company}</p>
            <p className="text-secondary text-sm mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent/80 transition-colors" />
              {entry.location} · <span className="text-white/80 font-medium">{entry.plantType}</span>
            </p>
            <div className="inline-block bg-accent/10 border border-accent/20 rounded-md px-2.5 py-1">
              <p className="text-accent text-[10px] font-bold tracking-widest uppercase">{entry.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
