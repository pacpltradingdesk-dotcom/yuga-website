// app/pyrolysis/page.tsx
"use client";

import { useState } from "react";
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
import { motion, AnimatePresence } from "framer-motion";
import { Settings, ArrowRight, ShieldCheck, Zap, HelpCircle, Activity, ChevronRight, CheckCircle2 } from "lucide-react";

interface FlowVisualProps {
  input: string;
  process: string;
  output: string;
  color: "accent" | "eco";
  activeStage: number;
}

function FlowVisual({ input, process, output, color, activeStage }: FlowVisualProps) {
  const isEco = color === "eco";
  const glowColor = isEco ? "shadow-[0_0_15px_#10B981]" : "shadow-[0_0_15px_#F59E0B]";
  const textColor = isEco ? "text-eco" : "text-accent";
  const borderColor = isEco ? "border-eco/30" : "border-accent/30";
  const bgGlow = isEco ? "bg-eco/5" : "bg-accent/5";
  const dotBg = isEco ? "bg-eco" : "bg-accent";

  return (
    <div className={`border ${borderColor} ${bgGlow} rounded-3xl p-6 relative overflow-hidden h-full flex flex-col justify-between`}>
      {/* Blueprint grid inside visualizer */}
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
      
      {/* Header Info */}
      <div className="flex items-center justify-between border-b border-border pb-4 mb-4 relative z-10">
        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest flex items-center gap-1.5">
          <Activity size={12} className={textColor} />
          Process Visualizer (Stage {activeStage + 1})
        </span>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-background border border-border text-[9px] text-primary/70 font-semibold uppercase tracking-wider">
          <span className={`w-1.5 h-1.5 rounded-full ${dotBg} animate-pulse`} />
          Active Sim
        </span>
      </div>

      {/* Visual Flow diagram */}
      <div className="grid grid-cols-11 items-center gap-2 py-6 relative z-10">
        {/* Input Node */}
        <div className="col-span-3 bg-surface border border-border rounded-xl p-3 text-center">
          <p className="text-[9px] text-secondary font-bold uppercase tracking-wider mb-1">Inputs</p>
          <p className="text-[11px] font-bold text-primary leading-snug">{input}</p>
        </div>

        {/* Animated Connector 1 */}
        <div className="col-span-1 flex items-center justify-center relative h-6">
          <ArrowRight size={16} className="text-secondary/30" />
          <motion.div
            key={`dot-1-${activeStage}`}
            animate={{ x: [-10, 10], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className={`w-1.5 h-1.5 rounded-full ${dotBg} absolute ${glowColor}`}
          />
        </div>

        {/* Processing Node */}
        <div className="col-span-3 bg-surface border border-border rounded-xl p-3 text-center ring-1 ring-border relative overflow-hidden group">
          <div className={`absolute top-0 left-0 right-0 h-0.5 ${dotBg} opacity-50`} />
          <p className="text-[9px] text-secondary font-bold uppercase tracking-wider mb-1">Process Action</p>
          <p className="text-[11px] font-bold text-primary leading-snug">{process}</p>
        </div>

        {/* Animated Connector 2 */}
        <div className="col-span-1 flex items-center justify-center relative h-6">
          <ArrowRight size={16} className="text-secondary/30" />
          <motion.div
            key={`dot-2-${activeStage}`}
            animate={{ x: [-10, 10], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.75 }}
            className={`w-1.5 h-1.5 rounded-full ${dotBg} absolute ${glowColor}`}
          />
        </div>

        {/* Output Node */}
        <div className={`col-span-3 bg-surface border ${borderColor} rounded-xl p-3 text-center`}>
          <p className={`text-[9px] ${textColor} font-bold uppercase tracking-wider mb-1`}>Outputs</p>
          <p className="text-[11px] font-bold text-primary leading-snug">{output}</p>
        </div>
      </div>

      {/* Footer Assurances */}
      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-[10px] text-secondary relative z-10">
        <span className="flex items-center gap-1">
          <ShieldCheck size={12} className={textColor} />
          Certified Specs Compliant
        </span>
        <span>Auto-feedback loop</span>
      </div>
    </div>
  );
}

const FLOWS_DATA = [
  {
    input: "Crop residues (Rice Straw, Bagasse) at 35% moisture",
    process: "Drying to <15% moisture, shredding & pelletization at high pressure",
    output: "Dense 8mm high-density agro biomass pellets",
    color: "eco" as const,
  },
  {
    input: "Agro pellets fed continuously into reactor",
    process: "Thermal Pyrolysis (Oxygen-free chamber) at 450°C - 550°C",
    output: "Bio-Oil (22% yield), Bio-Char (30%), Syngas (48% self-power loop)",
    color: "accent" as const,
  },
  {
    input: "Crude Bio-Oil + Import VG30 Petroleum Bitumen",
    process: "Thermo-chemical Oxidation at 230°C - 250°C & High-Shear Blending",
    output: "Homogeneous Bio-Modified Bitumen (VG30 equivalent)",
    color: "eco" as const,
  },
  {
    input: "Refined VG30 Bio-Modified Bitumen batch",
    process: "Lab testing: penetration, softening point, ductility & rheology compliance",
    output: "Certified highway-grade VG-30 Bitumen for PWD/NHAI tenders",
    color: "accent" as const,
  },
];

export default function PyrolysisPage() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stage = FOUR_STAGES[activeStage];
  const flow = FLOWS_DATA[activeStage];

  return (
    <>
      <PageHeader
        title="Pyrolysis Technology"
        subtitle="How we convert waste biomass and plastics into bio-oil that replaces petroleum bitumen on India's roads."
        breadcrumb="Pyrolysis"
        bgImage="/assets/pyrolysis-plant.png"
      />

      {/* 4-Stage Process (Interactive Dashboard) */}
      <section className="bg-background py-24 px-6 relative overflow-hidden" id="interactive-stages">
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
              Interactive Workflow
              <span className="w-4 h-px bg-accent/50" />
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-primary font-extrabold tracking-tight mb-4">
              Four Stages to <span className="text-gradient">Bio-Bitumen</span>
            </h2>
            <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore each phase of the bio-refinement process. Select a stage below to view simulated SCADA inputs, action chambers, and output yields.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Stage Selector Tabs & Details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              {/* Tab Selectors */}
              <div className="grid grid-cols-4 gap-2">
                {FOUR_STAGES.map((s, i) => {
                  const active = activeStage === i;
                  return (
                    <button
                      key={s.stage}
                      onClick={() => setActiveStage(i)}
                      className={`py-3.5 px-2 rounded-xl border text-center transition-all duration-200 ${
                        active
                          ? "bg-accent/10 border-accent text-accent shadow-[0_0_15px_rgba(245,158,11,0.15)] font-bold"
                          : "bg-surface/50 border-border text-secondary hover:border-border/80 hover:text-primary"
                      }`}
                    >
                      <p className="text-[10px] text-secondary font-bold uppercase tracking-wider">Stage</p>
                      <p className="text-lg">0{s.stage}</p>
                    </button>
                  );
                })}
              </div>

              {/* Stage Details Card */}
              <div className="glass rounded-3xl p-6 md:p-8 flex-1 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs text-accent font-bold uppercase tracking-widest bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full">
                      <Settings size={12} className="animate-spin" />
                      Active Phase
                    </span>
                    <span className="text-primary/10 text-5xl font-extrabold font-display">
                      0{stage.stage}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-primary font-extrabold mb-4 leading-tight">
                    {stage.name}
                  </h3>

                  <p className="text-secondary text-sm leading-relaxed mb-6">
                    {stage.description}
                  </p>
                </div>

                <div className="space-y-3 pt-6 border-t border-border">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-secondary uppercase tracking-wider">CAPEX REQUIREMENT</span>
                    <span className="text-accent font-bold text-sm">{stage.capex}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-secondary uppercase tracking-wider">MANPOWER REQUIRED</span>
                    <span className="text-primary font-medium">{stage.manpower}</span>
                  </div>
                  {stage.space && (
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-secondary uppercase tracking-wider">SPACE REQUIRED</span>
                      <span className="text-primary font-medium">{stage.space}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Visual SCADA-style flow */}
            <div className="lg:col-span-7">
              <FlowVisual
                input={flow.input}
                process={flow.process}
                output={flow.output}
                color={flow.color}
                activeStage={activeStage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feedstocks */}
      <section className="bg-surface py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-eco/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        
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
            <h2 className="font-display text-4xl md:text-5xl text-primary font-extrabold mb-12 tracking-tight">
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
            <h2 className="font-display text-4xl md:text-5xl text-primary font-extrabold mb-12 tracking-tight">
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
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
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
            <h2 className="font-display text-4xl md:text-5xl text-primary font-extrabold tracking-tight">
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
