// components/PageHeader.tsx
"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle?: string;
  breadcrumb: string;
  bgImage?: string;
};

export default function PageHeader({ title, subtitle, breadcrumb, bgImage }: Props) {
  return (
    <section className="relative py-32 px-6 overflow-hidden border-b border-white/5 min-h-[40vh] flex items-center bg-background">
      {bgImage ? (
        <>
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${bgImage}')` }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        </>
      ) : (
        <>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-eco/5 rounded-full blur-[100px] pointer-events-none" />
        </>
      )}
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <span className="w-6 h-px bg-accent/50" />
            {breadcrumb}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-extrabold mb-6 tracking-tight max-w-4xl leading-[1.15]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-secondary text-lg md:text-xl max-w-3xl leading-relaxed font-medium">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
