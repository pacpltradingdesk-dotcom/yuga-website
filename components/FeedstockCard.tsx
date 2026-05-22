// components/FeedstockCard.tsx
"use client";

import type { PyrolysisFeedstock } from "@/lib/company-data";
import { motion } from "framer-motion";
import { Leaf, Recycle, Trash2, Sprout } from "lucide-react";

type Props = { feedstock: PyrolysisFeedstock; index?: number };

export default function FeedstockCard({ feedstock, index = 0 }: Props) {
  const getIcon = (emoji: string) => {
    switch (emoji) {
      case "🌾": return <Leaf className="text-eco" size={20} />;
      case "♻️": return <Recycle className="text-eco" size={20} />;
      case "🪵": return <Sprout className="text-eco" size={20} />;
      case "🗑️": return <Trash2 className="text-eco" size={20} />;
      default: return <Leaf className="text-eco" size={20} />;
    }
  };

  // Override Ag Biomass image with our premium generated asset
  const imageSrc = feedstock.name === "Agricultural Biomass" ? "/assets/agro-biomass.png" : feedstock.imgSrc;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-surface rounded-2xl overflow-hidden border border-border hover:border-eco/30 shadow-xl group transition-all duration-300 flex flex-col h-full"
    >
      {/* Visual Header */}
      <div className="relative h-48 w-full overflow-hidden shrink-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500 ease-out"
          style={{ backgroundImage: `url('${imageSrc}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
        <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-background/90 backdrop-blur-md border border-border flex items-center justify-center">
          {getIcon(feedstock.icon)}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-extrabold text-primary text-lg mb-3 tracking-tight group-hover:text-eco transition-colors">
          {feedstock.name}
        </h3>
        
        <p className="text-secondary text-sm leading-relaxed mb-6 flex-1">
          {feedstock.description}
        </p>
        
        {feedstock.indiaVolume && (
          <div className="bg-background border border-border/80 rounded-xl px-4 py-2.5 mb-4 group-hover:bg-background/80 transition-colors">
            <p className="text-eco text-[10px] font-bold uppercase tracking-wider mb-0.5">
              India Volume
            </p>
            <p className="text-primary text-xs font-bold tracking-wide leading-snug">{feedstock.indiaVolume}</p>
          </div>
        )}
        
        {feedstock.highlight && (
          <span className="inline-block self-start bg-eco/10 border border-eco/25 text-eco text-[10px] rounded-full px-2.5 py-1 font-bold uppercase tracking-wide">
            {feedstock.highlight}
          </span>
        )}
      </div>
    </motion.div>
  );
}
