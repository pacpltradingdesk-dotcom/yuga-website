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
  const textColor = isEco ? "text-eco" : "text-accent";
  const borderColor = isEco ? "border-eco/30" : "border-accent/30";
  const bgGlow = isEco ? "bg-eco/5" : "bg-accent/5";
  const dotBg = isEco ? "bg-eco" : "bg-accent";

  // Telemetry arrays based on active stage
  const telemetries = [
    [
      { label: "Inlet H2O", value: "35.2%", status: "High" },
      { label: "Shredder RPM", value: "1,420 rpm", status: "Steady" },
      { label: "Pellet Size", value: "8.0 mm", status: "Optimal" },
    ],
    [
      { label: "Reactor Temp", value: "512 °C", status: "Optimal" },
      { label: "Inner Pressure", value: "1.15 Bar", status: "Steady" },
      { label: "Oxygen Level", value: "0.00%", status: "Anoxic" },
    ],
    [
      { label: "Blending Temp", value: "242 °C", status: "Steady" },
      { label: "Rotor Speed", value: "3,200 rpm", status: "Active" },
      { label: "Homogeneity", value: "99.8%", status: "Certified" },
    ],
    [
      { label: "Penetration Value", value: "64 dmm", status: "VG30 Std" },
      { label: "Softening Point", value: "48.2 °C", status: "NHAI Pass" },
      { label: "Ductility @25C", value: "78 cm", status: "Compliant" },
    ],
  ];

  const activeTelemetry = telemetries[activeStage];

  return (
    <div className={`border ${borderColor} ${bgGlow} rounded-3xl p-6 relative overflow-hidden h-full flex flex-col justify-between`}>
      {/* Blueprint grid inside visualizer */}
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
      
      {/* Header Info */}
      <div className="flex items-center justify-between border-b border-border pb-4 mb-4 relative z-10">
        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest flex items-center gap-1.5">
          <Activity size={12} className={textColor} />
          SCADA Simulator Panel (Stage {activeStage + 1})
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-background border border-border text-[9px] text-primary/70 font-semibold uppercase tracking-wider">
          <span className={`w-1.5 h-1.5 rounded-full ${dotBg} animate-ping`} />
          Live Telemetry Link
        </span>
      </div>

      {/* Live Sensors Grid */}
      <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
        {activeTelemetry.map((sensor) => (
          <div key={sensor.label} className="bg-surface border border-border/80 rounded-xl p-3 text-center">
            <span className="text-[8px] text-secondary font-bold uppercase tracking-wider block mb-1">
              {sensor.label}
            </span>
            <span className="text-sm font-extrabold text-primary font-mono block">
              {sensor.value}
            </span>
            <span className="text-[7px] text-eco font-bold uppercase mt-0.5 inline-block">
              {sensor.status}
            </span>
          </div>
        ))}
      </div>

      {/* SVG SCADA Diagram */}
      <div className="bg-surface-light border border-border/70 rounded-2xl p-5 mb-5 flex items-center justify-center min-h-[220px] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.04] pointer-events-none" />

        {activeStage === 0 && (
          /* Stage 01: Pretreatment Diagram */
          <svg width="280" height="150" viewBox="0 0 280 150" fill="none" className="relative z-10">
            {/* Hopper box */}
            <path d="M 20 20 L 70 20 L 55 60 L 35 60 Z" stroke="#475569" strokeWidth="2" fill="rgba(15, 23, 42, 0.03)" />
            <text x="33" y="14" fill="#475569" fontSize="7" fontWeight="bold">FEED HOPPER</text>
            
            {/* Shredder cylinder */}
            <rect x="90" y="45" width="60" height="30" rx="5" stroke="#475569" strokeWidth="2" fill="rgba(15, 23, 42, 0.05)" />
            <motion.circle
              cx="120"
              cy="60"
              r="8"
              stroke="#F59E0B"
              strokeWidth="2.5"
              strokeDasharray="4,2"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
            <text x="100" y="38" fill="#475569" fontSize="7" fontWeight="bold">SHREDDER/DRYER</text>

            {/* Pelletizer Ring */}
            <circle cx="210" cy="60" r="22" stroke="#475569" strokeWidth="2" fill="rgba(15, 23, 42, 0.05)" />
            <motion.circle
              cx="210"
              cy="60"
              r="14"
              stroke="#10B981"
              strokeWidth="2"
              strokeDasharray="5,2"
              fill="none"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            <text x="188" y="32" fill="#475569" fontSize="7" fontWeight="bold">PELLETIZER</text>

            {/* Pipelines & flows */}
            <path d="M 45 60 L 45 60 L 90 60" stroke="#475569" strokeWidth="2" strokeDasharray="3,3" />
            <path d="M 150 60 L 188 60" stroke="#475569" strokeWidth="2" />
            <path d="M 232 60 L 265 60" stroke="#475569" strokeWidth="2.5" />

            {/* Floating particles */}
            <motion.circle
              cx="45"
              cy="60"
              r="2.5"
              fill="#F59E0B"
              animate={{ cx: [45, 90] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            <motion.rect
              x="150"
              y="58"
              width="4"
              height="4"
              fill="#10B981"
              animate={{ x: [0, 38] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
            />
            <motion.rect
              x="232"
              y="57"
              width="6"
              height="6"
              rx="1.5"
              fill="#10B981"
              animate={{ x: [0, 33] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            />

            <text x="228" y="98" fill="#10B981" fontSize="8" fontWeight="bold">8mm PELLETS</text>
          </svg>
        )}

        {activeStage === 1 && (
          /* Stage 02: Pyrolysis Reactor Diagram */
          <svg width="280" height="150" viewBox="0 0 280 150" fill="none" className="relative z-10">
            {/* Feed pipe */}
            <path d="M 10 70 L 60 70" stroke="#475569" strokeWidth="2.5" />
            <motion.rect
              x="10"
              y="67"
              width="6"
              height="6"
              fill="#10B981"
              animate={{ x: [0, 50] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />

            {/* Pyrolysis Tube */}
            <rect x="60" y="45" width="100" height="50" rx="6" stroke="#475569" strokeWidth="2" fill="rgba(15, 23, 42, 0.05)" />
            <text x="75" y="38" fill="#475569" fontSize="8" fontWeight="bold">REACTOR CHAMBER</text>
            
            {/* Fire waves */}
            <motion.path
              d="M 75 80 Q 90 70 105 80 T 135 80"
              stroke="#F59E0B"
              strokeWidth="2.5"
              fill="none"
              animate={{ opacity: [0.3, 0.9, 0.3], y: [-3, 3] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 85 85 Q 100 77 115 85 T 145 85"
              stroke="#EF4444"
              strokeWidth="1.5"
              fill="none"
              animate={{ opacity: [0.9, 0.3, 0.9], y: [3, -3] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            />

            {/* Splitter Pipes */}
            <path d="M 160 70 L 200 70" stroke="#475569" strokeWidth="2" />
            <path d="M 200 70 L 200 30 L 260 30" stroke="#475569" strokeWidth="2" />
            <path d="M 200 70 L 260 70" stroke="#475569" strokeWidth="2" />
            <path d="M 200 70 L 200 110 L 260 110" stroke="#475569" strokeWidth="2" />

            {/* Outputs labels */}
            <text x="212" y="24" fill="#3B82F6" fontSize="7" fontWeight="bold">SYNGAS RECIRC</text>
            <text x="212" y="64" fill="#F59E0B" fontSize="7" fontWeight="bold">CRUDE BIO-OIL</text>
            <text x="212" y="104" fill="#10B981" fontSize="7" fontWeight="bold">SOLID BIO-CHAR</text>

            <motion.circle
              cx="200"
              cy="70"
              r="2.5"
              fill="#3B82F6"
              animate={{ cx: [200, 200, 260], cy: [70, 30, 30] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            <motion.circle
              cx="200"
              cy="70"
              r="2.5"
              fill="#F59E0B"
              animate={{ cx: [200, 260], cy: [70, 70] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "linear", delay: 0.3 }}
            />
            <motion.circle
              cx="200"
              cy="70"
              r="2.5"
              fill="#10B981"
              animate={{ cx: [200, 200, 260], cy: [70, 110, 110] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "linear", delay: 0.6 }}
            />
          </svg>
        )}

        {activeStage === 2 && (
          /* Stage 03: Refining & Blending Diagram */
          <svg width="280" height="150" viewBox="0 0 280 150" fill="none" className="relative z-10">
            {/* Two inlet pipes */}
            <path d="M 10 35 L 80 35 L 80 55" stroke="#F59E0B" strokeWidth="2.5" fill="none" />
            <path d="M 10 115 L 80 115 L 80 95" stroke="#1E293B" strokeWidth="2.5" fill="none" />

            <text x="12" y="27" fill="#F59E0B" fontSize="7" fontWeight="bold">CRUDE BIO-OIL</text>
            <text x="12" y="127" fill="#1E293B" fontSize="7" fontWeight="bold">IMPORT VG30 BITUMEN</text>

            {/* Blending vessel */}
            <rect x="80" y="55" width="80" height="40" rx="8" stroke="#475569" strokeWidth="2" fill="rgba(15, 23, 42, 0.05)" />
            <text x="94" y="50" fill="#475569" fontSize="8" fontWeight="bold">SHEAR BLENDER</text>

            {/* Agitator shaft */}
            <line x1="120" y1="45" x2="120" y2="75" stroke="#475569" strokeWidth="2.5" />
            <motion.line
              x1="108"
              y1="75"
              x2="132"
              y2="75"
              stroke="#475569"
              strokeWidth="3"
              animate={{ scaleX: [-1, 1] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              style={{ originX: "120px" }}
            />

            {/* Flow line out */}
            <path d="M 160 75 L 240 75" stroke="#10B981" strokeWidth="3" />
            <motion.circle
              cx="160"
              cy="75"
              r="3.5"
              fill="#10B981"
              animate={{ cx: [160, 240] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />

            <text x="168" y="93" fill="#10B981" fontSize="8" fontWeight="bold">BIO-MODIFIED BITUMEN</text>
          </svg>
        )}

        {activeStage === 3 && (
          /* Stage 04: Lab Testing & Quality Check Diagram */
          <svg width="280" height="150" viewBox="0 0 280 150" fill="none" className="relative z-10">
            {/* Inflow pipe */}
            <path d="M 10 75 L 60 75" stroke="#10B981" strokeWidth="2.5" />
            
            {/* Lab flask testing station */}
            <rect x="60" y="40" width="70" height="70" rx="10" stroke="#475569" strokeWidth="2" fill="rgba(15, 23, 42, 0.05)" />
            <text x="68" y="32" fill="#475569" fontSize="8" fontWeight="bold">QUALITY LAB</text>
            
            {/* Simulated test beaker in SVG */}
            <path d="M 85 90 L 105 90 L 105 60 L 98 60 L 98 52 L 92 52 L 92 60 L 85 60 Z" stroke="#475569" strokeWidth="2.0" fill="rgba(16, 185, 129, 0.15)" />
            <motion.rect
              x="87"
              y="75"
              width="16"
              height="13"
              fill="#10B981"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />

            {/* Checkmark Node */}
            <circle cx="195" cy="75" r="22" stroke="#10B981" strokeWidth="2" fill="rgba(16, 185, 129, 0.05)" />
            <motion.path
              d="M 187 75 L 192 80 L 205 68"
              stroke="#10B981"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <text x="175" y="112" fill="#10B981" fontSize="8" fontWeight="bold">NHAI CERTIFIED</text>

            <path d="M 130 75 L 173 75" stroke="#475569" strokeWidth="2" strokeDasharray="3,3" />
            <path d="M 217 75 L 265 75" stroke="#10B981" strokeWidth="2.5" />
          </svg>
        )}
      </div>

      {/* Visual Flow diagram text boxes */}
      <div className="grid grid-cols-11 items-center gap-2 py-2 relative z-10">
        {/* Input Node */}
        <div className="col-span-3 bg-surface border border-border rounded-xl p-3 text-center min-h-[90px] flex flex-col justify-between">
          <p className="text-[8px] text-secondary font-bold uppercase tracking-wider mb-1">Inputs</p>
          <p className="text-[10px] font-bold text-primary leading-snug flex-1 flex items-center justify-center">{input}</p>
        </div>

        {/* Animated Connector 1 */}
        <div className="col-span-1 flex items-center justify-center relative h-6">
          <ArrowRight size={16} className="text-secondary/30" />
        </div>

        {/* Processing Node */}
        <div className="col-span-3 bg-surface border border-border rounded-xl p-3 text-center ring-1 ring-border relative overflow-hidden group min-h-[90px] flex flex-col justify-between">
          <div className={`absolute top-0 left-0 right-0 h-0.5 ${dotBg} opacity-50`} />
          <p className="text-[8px] text-secondary font-bold uppercase tracking-wider mb-1">Process Action</p>
          <p className="text-[10px] font-bold text-primary leading-snug flex-1 flex items-center justify-center">{process}</p>
        </div>

        {/* Animated Connector 2 */}
        <div className="col-span-1 flex items-center justify-center relative h-6">
          <ArrowRight size={16} className="text-secondary/30" />
        </div>

        {/* Output Node */}
        <div className={`col-span-3 bg-surface border ${borderColor} rounded-xl p-3 text-center min-h-[90px] flex flex-col justify-between`}>
          <p className={`text-[8px] ${textColor} font-bold uppercase tracking-wider mb-1`}>Outputs</p>
          <p className="text-[10px] font-bold text-primary leading-snug flex-1 flex items-center justify-center">{output}</p>
        </div>
      </div>

      {/* Footer Assurances */}
      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-[10px] text-secondary relative z-10">
        <span className="flex items-center gap-1.5 font-semibold">
          <ShieldCheck size={13} className={textColor} />
          IS 73:2013 Highway Specifications Compliant
        </span>
        <span className="font-mono text-[9px] uppercase tracking-wider">Feed Loop ON</span>
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
