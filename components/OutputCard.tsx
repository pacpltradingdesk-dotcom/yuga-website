// components/OutputCard.tsx
"use client";

import type { PyrolysisOutput } from "@/lib/company-data";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wind, Flame, Zap, Database } from "lucide-react";

type Props = { output: PyrolysisOutput; index?: number };

const BG_IMAGES: Record<string, string> = {
  "Bio-Oil / Pyrolysis Oil": "/assets/pyrolysis-plant.png",
  "Bio-Char / Charcoal": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
  "Syngas (Producer Gas)": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
  "Carbon Black (Tyre Pyrolysis)": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&q=80",
  "Pyrolysis Fuel Oil (Plastic)": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80",
};

export default function OutputCard({ output, index = 0 }: Props) {
  const getIcon = (emoji: string) => {
    switch (emoji) {
      case "🛢️": return <Droplets className="text-accent" size={20} />;
      case "⚫": return <Flame className="text-accent" size={20} />;
      case "💨": return <Wind className="text-accent" size={20} />;
      case "🖤": return <Database className="text-accent" size={20} />;
      case "⛽": return <Zap className="text-accent" size={20} />;
      default: return <Droplets className="text-accent" size={20} />;
    }
  };

  const bgImage = BG_IMAGES[output.name] || "/assets/pyrolysis-plant.png";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-3xl p-6 group hover:border-accent/40 border border-white/5 transition-all duration-500 relative overflow-hidden min-h-[380px] flex flex-col justify-end shadow-xl"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-700 ease-out z-0"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/50 z-10" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl z-10 pointer-events-none" />
      
      <div className="relative z-20">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:border-accent/30 transition-colors">
            {getIcon(output.icon)}
          </div>
          <h3 className="font-display font-extrabold text-white text-lg leading-snug">
            {output.name}
          </h3>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4 p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors backdrop-blur-md">
          {output.yieldRange && (
            <div>
              <span className="text-slate-400 text-[9px] uppercase tracking-wider font-bold block mb-0.5">
                Yield
              </span>
              <p className="text-white font-extrabold text-xs tracking-wide leading-snug">{output.yieldRange.split(" of ")[0]}</p>
            </div>
          )}
          {output.heatingValue && (
            <div>
              <span className="text-slate-400 text-[9px] uppercase tracking-wider font-bold block mb-0.5">
                Heating Value
              </span>
              <p className="text-white font-extrabold text-xs tracking-wide leading-snug">{output.heatingValue.split(" comparable ")[0]}</p>
            </div>
          )}
        </div>
        
        {output.uses && output.uses.length > 0 && (
          <div>
            <p className="text-accent text-[10px] font-bold uppercase tracking-wider mb-2">Applications</p>
            <ul className="space-y-1.5">
              {output.uses.slice(0, 3).map((use) => (
                <li key={use} className="flex items-start gap-2.5 text-xs text-slate-300 group-hover:text-white transition-colors leading-relaxed">
                  <span className="text-accent mt-0.5 shrink-0"><ArrowRight size={12} /></span>
                  <span>{use}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}
