// components/PmcServiceCard.tsx
"use client";

import type { PmcService } from "@/lib/company-data";
import { motion } from "framer-motion";
import { ArrowRight, Settings, Users, LineChart, ShieldCheck, Map } from "lucide-react";

type Props = { service: PmcService; index?: number };

export default function PmcServiceCard({ service, index = 0 }: Props) {
  // Replace old emojis with sleek icons
  const getIcon = (emoji: string) => {
    switch (emoji) {
      case "🗺️": return <Map className="text-accent" size={24} />;
      case "🏗️": return <Settings className="text-accent" size={24} />;
      case "👥": return <Users className="text-accent" size={24} />;
      case "📈": return <LineChart className="text-accent" size={24} />;
      default: return <ShieldCheck className="text-accent" size={24} />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass border-l-4 border-l-accent rounded-2xl p-6 group hover:glass-hover transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/10 transition-colors" />
      
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/30 transition-colors">
          <span className="text-2xl" aria-hidden="true">{service.icon}</span>
        </div>
        <h3 className="text-white font-display text-xl font-bold">{service.category}</h3>
      </div>
      <p className="text-secondary text-sm leading-relaxed mb-6 relative z-10 min-h-[60px]">{service.description}</p>
      <ul className="space-y-3 relative z-10">
        {service.deliverables.map((d) => (
          <li key={d} className="flex gap-3 text-secondary group-hover:text-white transition-colors text-xs leading-relaxed">
            <span className="text-accent mt-0.5 shrink-0"><ArrowRight size={14} /></span>
            {d}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
