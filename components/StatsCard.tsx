// components/StatsCard.tsx
"use client";

import { COMPANY } from "@/lib/company-data";
import { motion } from "framer-motion";

export default function StatsCard() {
  const stats = [
    { value: `${COMPANY.plantsBuilt}`, label: "Plants Built" },
    { value: `${COMPANY.yearsExperience}+`, label: "Years Experience" },
    { value: COMPANY.industryContacts.toLocaleString(), label: "Live Contacts" },
    { value: `${COMPANY.statesNetwork}`, label: "States Covered" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="glass rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:glass-hover transition-all duration-500"
    >
      {/* Glow effect */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-all duration-500" />
      
      <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        By the Numbers
      </p>
      
      <div className="grid grid-cols-2 gap-4 relative z-10">
        {stats.map(({ value, label }, i) => (
          <motion.div 
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            className="bg-white/5 border border-white/5 rounded-2xl p-5 text-center hover:bg-white/10 transition-colors"
          >
            <p className="font-display text-3xl font-extrabold text-white leading-none mb-2 tracking-tight">
              {value}
            </p>
            <p className="text-secondary text-xs uppercase tracking-wider font-semibold">{label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
