// components/StageCard.tsx
"use client";

import type { FourStage } from "@/lib/company-data";
import { motion } from "framer-motion";
import { Factory, Flame, FlaskConical, Truck } from "lucide-react";

type Props = { stage: FourStage; index?: number };

export default function StageCard({ stage, index = 0 }: Props) {
  // Map old emojis to sleek lucide icons
  const getIcon = (emoji: string) => {
    switch (emoji) {
      case "🌾": return <Factory className="text-accent" size={24} />;
      case "🔥": return <Flame className="text-accent" size={24} />;
      case "⚗️": return <FlaskConical className="text-accent" size={24} />;
      case "🛣️": return <Truck className="text-accent" size={24} />;
      default: return <Factory className="text-accent" size={24} />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass p-6 rounded-2xl group hover:glass-hover transition-all duration-300 relative overflow-hidden"
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-eco opacity-50 group-hover:opacity-100 transition-opacity" />
      
      {/* Background Glow */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors" />

      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center border border-border group-hover:border-accent/30 transition-colors">
          {getIcon(stage.icon)}
        </div>
        <span className="text-primary/20 text-4xl font-extrabold font-display">
          0{stage.stage}
        </span>
      </div>
      
      <h3 className="font-display text-lg text-primary font-bold mb-3 leading-snug relative z-10">
        {stage.name}
      </h3>
      
      <p className="text-secondary text-sm leading-relaxed mb-6 relative z-10 min-h-[80px]">
        {stage.description}
      </p>
      
      <div className="space-y-3 pt-4 border-t border-border relative z-10">
        <div className="flex justify-between items-center text-xs">
          <span className="font-semibold text-secondary/60 uppercase tracking-wider">CAPEX</span>
          <span className="text-accent font-medium">{stage.capex}</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="font-semibold text-secondary/60 uppercase tracking-wider">Manpower</span>
          <span className="text-primary font-medium">{stage.manpower}</span>
        </div>
        {stage.space && (
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-secondary/60 uppercase tracking-wider">Space</span>
            <span className="text-primary font-medium">{stage.space}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
