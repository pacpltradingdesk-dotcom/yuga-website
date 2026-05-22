// components/CtaStrip.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Props = {
  heading: string;
  subtext: string;
  buttonLabel: string;
  buttonHref: string;
};

export default function CtaStrip({ heading, subtext, buttonLabel, buttonHref }: Props) {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-eco/10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518242007632-4d8960e7e1bb?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-primary font-extrabold mb-6 tracking-tight">
            {heading}
          </h2>
          <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {subtext}
          </p>
          <Link
            href={buttonHref}
            className="group inline-flex items-center gap-2 bg-accent text-white font-bold px-8 py-4 rounded-full hover:bg-accent-hover transition-all text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] hover:-translate-y-1"
          >
            {buttonLabel}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
