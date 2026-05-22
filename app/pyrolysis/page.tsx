// app/pyrolysis/page.tsx
"use client";

import PageHeader from "@/components/PageHeader";
import CtaStrip from "@/components/CtaStrip";
import StageCard from "@/components/StageCard";
import FeedstockCard from "@/components/FeedstockCard";
import OutputCard from "@/components/OutputCard";
import PyrolysisProductCard from "@/components/PyrolysisProductCard";
import {
  FOUR_STAGES,
  PYROLYSIS_FEEDSTOCKS,
  PYROLYSIS_OUTPUTS,
  PYROLYSIS_PRODUCTS,
} from "@/lib/company-data";
import { motion } from "framer-motion";

export default function PyrolysisPage() {
  return (
    <>
      <PageHeader
        title="Pyrolysis Technology"
        subtitle="How we convert waste biomass and plastics into bio-oil that replaces petroleum bitumen on India's roads."
        breadcrumb="Pyrolysis"
        bgImage="/assets/pyrolysis-plant.png"
      />

      {/* 4-Stage Process */}
      <section className="bg-background py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="flex items-center justify-center gap-2 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-4 h-px bg-accent/50" />
              The Process
              <span className="w-4 h-px bg-accent/50" />
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-extrabold tracking-tight">
              Four Stages to <span className="text-gradient">Bio-Bitumen</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUR_STAGES.map((stage, i) => (
              <StageCard key={stage.stage} stage={stage} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Feedstocks */}
      <section className="bg-surface py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-eco/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="flex items-center gap-2 text-eco text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-4 h-px bg-eco/50" />
              Feedstocks
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-extrabold mb-12 tracking-tight">
              What Goes <span className="text-gradient">In</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PYROLYSIS_FEEDSTOCKS.map((feedstock, i) => (
              <FeedstockCard key={feedstock.name} feedstock={feedstock} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Outputs */}
      <section className="bg-background py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-4 h-px bg-accent/50" />
              Outputs
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-extrabold mb-12 tracking-tight">
              What Comes <span className="text-gradient">Out</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PYROLYSIS_OUTPUTS.map((output, i) => (
              <OutputCard key={output.name} output={output} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Products */}
      <section className="bg-surface py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="flex items-center justify-center gap-2 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-4 h-px bg-accent/50" />
              Products
              <span className="w-4 h-px bg-accent/50" />
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-extrabold tracking-tight">
              Commercial-Grade <span className="text-gradient">Products</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PYROLYSIS_PRODUCTS.map((product, i) => (
              <PyrolysisProductCard key={product.name} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        heading="Ready to Build a Pyrolysis Plant?"
        subtext="Get a custom DPR, site selection, and end-to-end plant setup from India's most experienced bio-bitumen consultant."
        buttonLabel="Start Your Project"
        buttonHref="/contact"
      />
    </>
  );
}
