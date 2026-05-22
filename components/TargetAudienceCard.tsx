// components/TargetAudienceCard.tsx
"use client";

import type { TargetAudience } from "@/lib/company-data";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type Props = { audience: TargetAudience; index?: number };

export default function TargetAudienceCard({ audience, index = 0 }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-8 group hover:glass-hover transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
      
      <h3 className="font-display text-2xl text-white font-bold mb-2">{audience.type}</h3>
      <p className="text-accent text-xs uppercase tracking-widest font-semibold mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        {audience.stages}
      </p>
      
      <dl className="grid grid-cols-2 gap-4 mb-8 p-4 bg-white/5 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
        <div>
          <dt className="text-secondary text-xs uppercase tracking-wider mb-1">Investment</dt>
          <dd className="font-semibold text-white">{audience.investment}</dd>
        </div>
        <div>
          <dt className="text-secondary text-xs uppercase tracking-wider mb-1">DPR Fee</dt>
          <dd className="font-semibold text-white">{audience.feeDpr}</dd>
        </div>
        <div>
          <dt className="text-secondary text-xs uppercase tracking-wider mb-1">Setup Fee</dt>
          <dd className="font-semibold text-white">{audience.feeSetup}</dd>
        </div>
        <div>
          <dt className="text-secondary text-xs uppercase tracking-wider mb-1">Retainer</dt>
          <dd className="font-semibold text-white">{audience.feeRetainer}</dd>
        </div>
      </dl>
      
      <ul className="space-y-3">
        {audience.keyServices.map((s) => (
          <li key={s} className="flex gap-3 text-secondary group-hover:text-white transition-colors text-sm">
            <span className="text-accent shrink-0 mt-0.5"><CheckCircle2 size={16} /></span>
            {s}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
