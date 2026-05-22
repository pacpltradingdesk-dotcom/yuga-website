// components/ConsultingServiceCard.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Props = {
  category: string;
  items: string[];
  index?: number;
};

export default function ConsultingServiceCard({ category, items, index = 0 }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass border-t-4 border-t-accent rounded-2xl p-8 group hover:glass-hover transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
      
      <h4 className="text-accent font-bold mb-6 text-sm uppercase tracking-[0.2em] relative z-10 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        {category}
      </h4>
      <ul className="space-y-4 relative z-10">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-secondary group-hover:text-primary transition-colors text-sm leading-relaxed">
            <span className="text-accent mt-0.5 shrink-0"><ArrowRight size={16} /></span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
