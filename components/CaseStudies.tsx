// components/CaseStudies.tsx
"use client";

import { motion } from "framer-motion";
import { MapPin, TrendingUp, ShieldCheck, ArrowRight, Activity } from "lucide-react";
import Link from "next/link";

interface CaseStudy {
  title: string;
  location: string;
  feedstock: string;
  capacity: string;
  capex: string;
  roi: string;
  output: string;
  challenge: string;
  result: string;
  highlight: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Eco-Bitumen Stubble Mitigation Plant",
    location: "Ludhiana, Punjab",
    feedstock: "Rice Straw (Paddy Stubble)",
    capacity: "10 Tons Per Day (TPD)",
    capex: "₹4.2 Crores",
    roi: "2.8 Years",
    output: "Bio-Bitumen (VG30 equivalent) & Bio-Char",
    challenge: "Managing seasonal crop residue burning while ensuring consistent biomass moisture control below 15%.",
    result: "Successfully processed 3,000 metric tons of paddy straw annually, eliminating stubble burning in a 15-village radius.",
    highlight: "First plant in Northern India to supply certified bio-bitumen for rural road construction."
  },
  {
    title: "Co-generation Sugar Mill Integrated Plant",
    location: "Kolhapur, Maharashtra",
    feedstock: "Sugarcane Bagasse",
    capacity: "20 Tons Per Day (TPD)",
    capex: "₹7.5 Crores",
    roi: "2.2 Years",
    output: "Commercial Bio-oil & Active Bio-Char",
    challenge: "Integrating with existing high-temperature steam lines and configuring auto-feed mechanisms.",
    result: "Achieved 100% self-powering pyrolysis operation by recycling syn-gas directly into the reactor combustion chamber.",
    highlight: "Saves the sugar mill ₹35 Lakhs annually in fuel oil costs while generating commercial bio-bitumen revenue."
  },
  {
    title: "Large-Scale Industrial Pyrolysis Hub",
    location: "Bharuch, Gujarat",
    feedstock: "Mixed Forestry Waste & Agro-waste",
    capacity: "50 Tons Per Day (TPD)",
    capex: "₹14.8 Crores",
    roi: "1.9 Years",
    output: "Bio-oil, active Bio-coal & Syn-gas",
    challenge: "Sourcing mixed biomass at uniform sizes and scaling continuous reactor discharge at 500°C.",
    result: "Continuous 24/7 automated reactor operation yielding 11 tons of premium bio-bitumen daily for NHAI highway contractors.",
    highlight: "Successfully cleared ISO 9001:2015 audit and certified by national laboratories for highway construction."
  }
];

export default function CaseStudies() {
  return (
    <section className="bg-surface py-24 px-6 relative overflow-hidden">
      {/* Blueprint decorative lines */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
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
            Proven Track Record
            <span className="w-4 h-px bg-accent/50" />
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-extrabold tracking-tight mb-4">
            Built Plants in <span className="text-gradient">Operation</span>
          </h2>
          <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Real case studies from 3 of the 10 operational bio-bitumen pyrolysis plants designed, built, and commissioned by YUGA.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={study.location}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass hover:glow-border-accent rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
            >
              {/* Corner badge for layout */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/15 transition-all duration-300" />
              
              <div>
                {/* Location and Header */}
                <div className="flex items-center gap-2 text-accent text-xs font-bold tracking-wider uppercase mb-4">
                  <MapPin size={14} className="shrink-0 animate-pulse" />
                  {study.location}
                </div>
                
                <h3 className="font-display text-xl text-white font-extrabold mb-6 tracking-tight group-hover:text-accent transition-colors">
                  {study.title}
                </h3>

                {/* Key Metrics Dashboard */}
                <div className="grid grid-cols-2 gap-3 mb-6 bg-background/50 border border-white/5 rounded-2xl p-4">
                  <div className="text-center border-r border-white/5">
                    <p className="text-[10px] text-secondary font-bold uppercase tracking-wider mb-1">Capacity</p>
                    <p className="text-sm font-extrabold text-white">{study.capacity.split(" ")[0]} TPD</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-secondary font-bold uppercase tracking-wider mb-1">Payback ROI</p>
                    <p className="text-sm font-extrabold text-accent">{study.roi}</p>
                  </div>
                </div>

                {/* Feedstock and Output Details */}
                <div className="space-y-4 text-sm mb-6 border-b border-white/5 pb-6">
                  <div>
                    <span className="text-[11px] text-secondary font-bold uppercase tracking-wider block mb-1">Feedstock Input</span>
                    <p className="text-white font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-eco" />
                      {study.feedstock}
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] text-secondary font-bold uppercase tracking-wider block mb-1">Primary Output</span>
                    <p className="text-white font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {study.output}
                    </p>
                  </div>
                </div>

                {/* Challenge & Result */}
                <div className="space-y-4 text-xs mb-6">
                  <div>
                    <span className="text-secondary font-semibold uppercase tracking-wider block mb-1">The Challenge</span>
                    <p className="text-secondary leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-eco font-semibold uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                      <Activity size={12} />
                      Operation Outcome
                    </span>
                    <p className="text-secondary leading-relaxed">{study.result}</p>
                  </div>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="mt-4 pt-6 border-t border-white/5">
                <div className="flex gap-2.5 bg-accent/5 border border-accent/20 rounded-xl p-3.5">
                  <ShieldCheck size={18} className="text-accent shrink-0 mt-0.5" />
                  <p className="text-[11px] text-accent font-semibold leading-relaxed">
                    {study.highlight}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:text-accent group transition-colors"
          >
            Schedule a Virtual Plant Visit
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
