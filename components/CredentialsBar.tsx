// components/CredentialsBar.tsx
"use client";

import { KEY_CREDENTIALS } from "@/lib/company-data";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function CredentialsBar() {
  return (
    <section className="bg-surface relative py-12 px-6 overflow-hidden border-y border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[100px] bg-accent/5 rounded-[100%] blur-[40px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <p className="flex items-center justify-center gap-2 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-6">
          <span className="w-4 h-px bg-accent/50" />
          Credentials & Expertise
          <span className="w-4 h-px bg-accent/50" />
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {KEY_CREDENTIALS.map((cred, i) => (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              key={cred}
              className="glass hover:glass-hover flex items-center gap-2 text-secondary hover:text-white transition-colors text-xs md:text-sm font-semibold px-5 py-2.5 rounded-full cursor-default"
            >
              <CheckCircle2 size={14} className="text-accent" />
              {cred}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
