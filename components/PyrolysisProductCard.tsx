// components/PyrolysisProductCard.tsx
"use client";

import type { PyrolysisProduct } from "@/lib/company-data";
import { motion } from "framer-motion";
import { Box, Droplet, Flame } from "lucide-react";

type Props = { product: PyrolysisProduct; index?: number };

export default function PyrolysisProductCard({ product, index = 0 }: Props) {
  const getIcon = (emoji: string) => {
    switch (emoji) {
      case "🛢️": return <Droplet className="text-accent" size={24} />;
      case "🧱": return <Box className="text-accent" size={24} />;
      case "🔥": return <Flame className="text-accent" size={24} />;
      default: return <Box className="text-accent" size={24} />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 group hover:glass-hover transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
      
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
          {getIcon(product.icon)}
        </div>
        <h3 className="font-display font-bold text-primary text-xl leading-snug">
          {product.name}
        </h3>
      </div>
      
      {product.stat && (
        <span className="inline-block relative z-10 bg-accent/10 border border-accent/30 text-accent-hover text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-wide shadow-[0_0_15px_rgba(245,158,11,0.05)]">
          {product.stat}
        </span>
      )}
      
      <p className="text-secondary text-sm leading-relaxed relative z-10">{product.description}</p>
    </motion.div>
  );
}
