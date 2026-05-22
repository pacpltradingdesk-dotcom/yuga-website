// components/CaseStudies.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Activity, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Briefcase, 
  Award,
  Settings
} from "lucide-react";
import Link from "next/link";

interface Plant {
  id: number;
  name: string;
  location: string;
  state: string;
  x: number;
  y: number;
  lat: string;
  lon: string;
  isDetailed: boolean;
  
  // Detailed case study fields (if isDetailed is true)
  title?: string;
  feedstock?: string;
  capacity?: string;
  capex?: string;
  roi?: string;
  output?: string;
  challenge?: string;
  result?: string;
  highlight?: string;

  // Historical plant fields (if isDetailed is false)
  year?: number;
  plantType?: string;
  company?: string;
  role?: string;
  milestone?: string;
}

const PLANTS_DATA: Plant[] = [
  {
    id: 1,
    name: "Ludhiana Plant",
    location: "Ludhiana, Punjab",
    state: "Punjab",
    x: 120,
    y: 80,
    lat: "30.90° N",
    lon: "75.85° E",
    isDetailed: true,
    title: "Eco-Bitumen Stubble Mitigation Plant",
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
    id: 2,
    name: "Kolhapur Plant",
    location: "Kolhapur, Maharashtra",
    state: "Maharashtra",
    x: 102,
    y: 245,
    lat: "16.70° N",
    lon: "74.24° E",
    isDetailed: true,
    title: "Co-generation Sugar Mill Integrated Plant",
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
    id: 3,
    name: "Bharuch Plant",
    location: "Bharuch, Gujarat",
    state: "Gujarat",
    x: 78,
    y: 195,
    lat: "21.72° N",
    lon: "72.99° E",
    isDetailed: true,
    title: "Large-Scale Industrial Pyrolysis Hub",
    feedstock: "Mixed Forestry Waste & Agro-waste",
    capacity: "50 Tons Per Day (TPD)",
    capex: "₹14.8 Crores",
    roi: "1.9 Years",
    output: "Bio-oil, active Bio-coal & Syn-gas",
    challenge: "Sourcing mixed biomass at uniform sizes and scaling continuous reactor discharge at 500°C.",
    result: "Continuous 24/7 automated reactor operation yielding 11 tons of premium bio-bitumen daily for NHAI highway contractors.",
    highlight: "Successfully cleared ISO 9001:2015 audit and certified by national laboratories for highway construction."
  },
  {
    id: 4,
    name: "Hubli Facility",
    location: "Hubli, Karnataka",
    state: "Karnataka",
    x: 106,
    y: 265,
    lat: "15.36° N",
    lon: "75.12° E",
    isDetailed: false,
    title: "First Fully Automatic Emulsion Plant",
    year: 2013,
    plantType: "Fully Automatic Bitumen Emulsion Plant",
    company: "Krush Tar Industries",
    role: "CEO & Founder (Own Venture)",
    milestone: "Commissioned within an industry-record 90 days. First of its kind in Karnataka."
  },
  {
    id: 5,
    name: "Panvel Terminal",
    location: "Panvel, Maharashtra",
    state: "Maharashtra",
    x: 94,
    y: 215,
    lat: "18.99° N",
    lon: "73.11° E",
    isDetailed: false,
    title: "Panvel Decanting & Processing Station",
    year: 2016,
    plantType: "Decanter & Warehousing Facility",
    company: "Omnipotent Industries",
    role: "Founder & MD",
    milestone: "First operational decanter plant in Panvel. Later expanded to form the core JV network."
  },
  {
    id: 6,
    name: "Kandla Port Unit",
    location: "Kandla, Gujarat",
    state: "Gujarat",
    x: 52,
    y: 165,
    lat: "23.01° N",
    lon: "70.13° E",
    isDetailed: false,
    title: "Kandla Port Import Decanter Plant",
    year: 2018,
    plantType: "Import Decanter + Warehousing Hub",
    company: "Omnipotent Industries",
    role: "Founder & MD",
    milestone: "Optimized import discharge from vessels directly to decanting lines, cutting logistics costs by 18%."
  },
  {
    id: 7,
    name: "Vadodara Plant",
    location: "Vadodara, Gujarat",
    state: "Gujarat",
    x: 82,
    y: 185,
    lat: "22.30° N",
    lon: "73.18° E",
    isDetailed: false,
    title: "Vadodara Industrial Processing Hub",
    year: 2019,
    plantType: "Processing, Decanting & Distribution Hub",
    company: "Omnipotent Industries",
    role: "Founder & MD",
    milestone: "Base of PACPL operations. Anchored 1.2 Lakh MT distribution network across West India."
  },
  {
    id: 8,
    name: "Mathura Refinery",
    location: "Mathura, Uttar Pradesh",
    state: "Uttar Pradesh",
    x: 138,
    y: 130,
    lat: "27.49° N",
    lon: "77.67° E",
    isDetailed: false,
    title: "Mathura Decanter Plant",
    year: 2024,
    plantType: "Bitumen Decanter Plant",
    company: "Teknobit Industries",
    role: "PMC Consultant",
    milestone: "Supervised construction, vendor machinery selection, and successful commissioning under tight environmental compliance."
  },
  {
    id: 9,
    name: "Mangalore Emulsion",
    location: "Mangalore, Karnataka",
    state: "Karnataka",
    x: 104,
    y: 290,
    lat: "12.91° N",
    lon: "74.85° E",
    isDetailed: false,
    title: "Southern Asphalt Emulsion Unit",
    year: 2001,
    plantType: "Bitumen Emulsion Plant",
    company: "Southern Asphalt",
    role: "General Manager",
    milestone: "Managed operations, product formulation, and state distribution lines for rural road networks."
  },
  {
    id: 10,
    name: "Kutch Terminal",
    location: "Kutch, Gujarat",
    state: "Gujarat",
    x: 46,
    y: 160,
    lat: "22.88° N",
    lon: "69.70° E",
    isDetailed: false,
    title: "Kutch Decanting & Logistics Facility",
    year: 2020,
    plantType: "Decanter & Logistics Facility",
    company: "Omnipotent Industries",
    role: "Founder & MD",
    milestone: "Handled bulk import logistics, customs clearance, and terminal distribution."
  }
];

// Stylized geometry outline of India
const INDIA_MAP_OUTLINE = "M 160 15 L 155 35 L 142 45 L 132 55 L 122 75 L 115 90 L 105 105 L 98 120 L 98 135 L 90 142 L 78 145 L 68 152 L 50 155 L 45 165 L 58 175 L 75 178 L 85 185 L 88 195 L 92 208 L 96 225 L 102 250 L 108 275 L 118 300 L 128 325 L 138 348 L 144 358 L 148 358 L 152 348 L 158 325 L 168 300 L 175 278 L 184 250 L 192 225 L 202 208 L 212 195 L 222 188 L 230 188 L 232 178 L 228 168 L 238 168 L 248 162 L 255 162 L 265 152 L 270 142 L 260 132 L 250 142 L 242 142 L 238 148 L 232 155 L 228 155 L 222 135 L 215 130 L 205 130 L 192 120 L 188 110 L 182 110 L 172 100 L 168 90 L 162 70 L 162 40 Z";

export default function CaseStudies() {
  const [activeId, setActiveId] = useState<number>(1);
  const [hoveredPlant, setHoveredPlant] = useState<Plant | null>(null);

  const activePlant = PLANTS_DATA.find(p => p.id === activeId) || PLANTS_DATA[0];

  const handleNext = () => {
    setActiveId(prev => (prev === PLANTS_DATA.length ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setActiveId(prev => (prev === 1 ? PLANTS_DATA.length : prev - 1));
  };

  return (
    <section className="bg-background py-24 px-6 relative overflow-hidden border-t border-border/40">
      {/* HUD decorative grid lines */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.08] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="flex items-center justify-center gap-2 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-4 h-px bg-accent/50" />
            Interactive Plant Network
            <span className="w-4 h-px bg-accent/50" />
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-primary font-extrabold tracking-tight mb-4">
            Operational <span className="text-gradient">Bitumen Projects</span>
          </h2>
          <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore 10 processing and pyrolysis plants built, designed, or commissioned across India. Click locations on the interactive map to inspect project specs.
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: SVG India Map Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="dark-dashboard rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between flex-grow transition-all duration-300">
              
              {/* HUD Header */}
              <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping shrink-0" />
                  <span className="text-[10px] font-bold tracking-widest text-white uppercase font-mono">
                    MAP SCANNER V2.0
                  </span>
                </div>
                <div className="text-[9px] font-mono text-slate-400 tracking-wider">
                  LOC: {hoveredPlant ? hoveredPlant.location : activePlant.location}
                </div>
              </div>

              {/* Map Canvas */}
              <div className="relative w-full aspect-[320/385] max-w-[340px] mx-auto flex items-center justify-center">
                
                {/* HUD Telemetry Coordinates overlay */}
                <div className="absolute top-2 left-2 pointer-events-none font-mono text-[9px] text-slate-400/80 leading-normal space-y-0.5">
                  <p>LAT: {hoveredPlant ? hoveredPlant.lat : activePlant.lat}</p>
                  <p>LON: {hoveredPlant ? hoveredPlant.lon : activePlant.lon}</p>
                  <p>SYS: {hoveredPlant ? (hoveredPlant.isDetailed ? "PYROLYSIS CORE" : "BITUMEN SYS") : (activePlant.isDetailed ? "PYROLYSIS CORE" : "BITUMEN SYS")}</p>
                </div>

                <svg 
                  viewBox="0 0 320 385" 
                  fill="none" 
                  className="w-full h-full relative z-10 text-white/5 select-none"
                >
                  {/* Grid Lines Overlay inside SVG */}
                  <g opacity="0.4">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <line 
                        key={`grid-x-${i}`}
                        x1={i * 22 + 10} 
                        y1={0} 
                        x2={i * 22 + 10} 
                        y2={385} 
                        stroke="rgba(255, 255, 255, 0.03)" 
                        strokeWidth="0.5" 
                        strokeDasharray="2 3" 
                      />
                    ))}
                    {Array.from({ length: 18 }).map((_, i) => (
                      <line 
                        key={`grid-y-${i}`}
                        x1={0} 
                        y1={i * 22 + 10} 
                        x2={320} 
                        y2={i * 22 + 10} 
                        stroke="rgba(255, 255, 255, 0.03)" 
                        strokeWidth="0.5" 
                        strokeDasharray="2 3" 
                      />
                    ))}
                  </g>

                  {/* Laser Scan Line Micro-animation */}
                  <motion.line
                    x1="0"
                    y1="0"
                    x2="320"
                    y2="0"
                    stroke="rgba(245, 158, 11, 0.2)"
                    strokeWidth="1.5"
                    animate={{ y: [0, 385, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* India Outline Path */}
                  <path 
                    d={INDIA_MAP_OUTLINE} 
                    fill="rgba(255, 255, 255, 0.02)" 
                    stroke="rgba(255, 255, 255, 0.18)" 
                    strokeWidth="1.5" 
                    strokeLinejoin="round"
                    className="transition-all duration-300"
                  />

                  {/* Active Indicator Pulse Ring */}
                  <motion.circle
                    key={`pulse-${activePlant.id}`}
                    cx={activePlant.x}
                    cy={activePlant.y}
                    r={15}
                    className={activePlant.isDetailed ? "stroke-accent" : "stroke-eco"}
                    strokeWidth={1}
                    fill="none"
                    animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                  />

                  {/* Map Pin Nodes */}
                  {PLANTS_DATA.map((plant) => {
                    const isActive = plant.id === activePlant.id;
                    const isHovered = hoveredPlant?.id === plant.id;
                    const pinColor = plant.isDetailed ? "#F59E0B" : "#10B981";

                    return (
                      <g 
                        key={plant.id}
                        className="cursor-pointer group"
                        onMouseEnter={() => setHoveredPlant(plant)}
                        onMouseLeave={() => setHoveredPlant(null)}
                        onClick={() => setActiveId(plant.id)}
                      >
                        {/* Interactive hotspot */}
                        <circle 
                           cx={plant.x} 
                           cy={plant.y} 
                           r={14} 
                           fill="transparent" 
                        />
                        
                        {/* Pin Dot */}
                        <motion.circle
                          cx={plant.x}
                          cy={plant.y}
                          r={isActive ? 5.5 : 4}
                          fill={pinColor}
                          stroke="#FFFFFF"
                          strokeWidth={isActive ? 1.5 : 1}
                          className="transition-all duration-200"
                          animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        />

                        {/* Label HUD tooltip on Hover */}
                        {(isHovered || isActive) && (
                          <foreignObject
                            x={plant.x + 8}
                            y={plant.y - 12}
                            width="110"
                            height="24"
                            className="pointer-events-none select-none z-50 overflow-visible"
                          >
                            <div className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider shadow-sm border ${
                              plant.isDetailed 
                                ? "bg-accent text-white border-accent-hover" 
                                : "bg-slate-900 text-white border-slate-700"
                            }`}>
                              {plant.name}
                            </div>
                          </foreignObject>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Legend & Navigation HUD */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-3 font-mono text-[9px] text-slate-400">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Pyrolysis Case Studies (3)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-eco" />
                    Bitumen Plants (7)
                  </span>
                </div>
                <div className="text-center bg-slate-900 border border-white/10 rounded-xl p-2 font-mono text-[10px] font-semibold text-white flex items-center justify-between">
                  <span>ACTIVE TARGET: {activePlant.id} / 10</span>
                  <span className="text-accent">{activePlant.state.toUpperCase()} NODE</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Active Plant specs Carousel Card */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="glass hover:glow-border-accent rounded-3xl p-8 flex flex-col justify-between flex-grow transition-all duration-300 relative overflow-hidden">
              
              {/* Sheen & background overlays */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/5 rounded-full blur-xl" />
              
              {/* Carousel Header Panel */}
              <div className="flex justify-between items-center mb-6 border-b border-border pb-4 relative z-10">
                <div>
                  <div className="flex items-center gap-2 text-accent text-xs font-bold tracking-wider uppercase mb-1">
                    <MapPin size={14} className="shrink-0 animate-pulse" />
                    {activePlant.location}
                  </div>
                  <h3 className="font-display text-xs text-secondary font-mono tracking-widest uppercase">
                    SYS CLASS: {activePlant.isDetailed ? "BIO-PYROLYSIS CONVERTER" : "COMMERCIAL PROCESSING FACILITY"}
                  </h3>
                </div>

                {/* Left/Right controls */}
                <div className="flex gap-2">
                  <button 
                    onClick={handlePrev}
                    aria-label="Previous plant"
                    className="p-2 rounded-full border border-border bg-white text-secondary hover:text-primary hover:border-accent transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button 
                    onClick={handleNext}
                    aria-label="Next plant"
                    className="p-2 rounded-full border border-border bg-white text-secondary hover:text-primary hover:border-accent transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Main Content with dynamic transitions */}
              <div className="flex-grow flex flex-col justify-between relative z-10 min-h-[360px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePlant.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="flex flex-col justify-between h-full flex-grow"
                  >
                    
                    {/* Render Spec-sheet based on type */}
                    {activePlant.isDetailed ? (
                      /* PYROLYSIS DETAILED SPEC SHEET */
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-display text-2xl md:text-3xl text-primary font-extrabold tracking-tight">
                            {activePlant.title}
                          </h4>
                          <p className="text-[10px] text-secondary font-mono tracking-wider uppercase mt-1">
                            Operational Node / Field Data Spec
                          </p>
                        </div>

                        {/* Telemetry metrics row */}
                        <div className="grid grid-cols-3 gap-3 bg-background border border-border/80 rounded-2xl p-4">
                          <div className="text-center border-r border-border/80">
                            <p className="text-[9px] text-secondary font-bold uppercase tracking-wider mb-0.5">Capacity</p>
                            <p className="text-sm font-extrabold text-primary">{activePlant.capacity?.split(" ")[0]} TPD</p>
                          </div>
                          <div className="text-center border-r border-border/80">
                            <p className="text-[9px] text-secondary font-bold uppercase tracking-wider mb-0.5">Payback ROI</p>
                            <p className="text-sm font-extrabold text-accent">{activePlant.roi}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-[9px] text-secondary font-bold uppercase tracking-wider mb-0.5">Project Capex</p>
                            <p className="text-sm font-extrabold text-primary">{activePlant.capex}</p>
                          </div>
                        </div>

                        {/* Feedstock Details */}
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className="bg-background border border-border/60 rounded-xl p-3.5">
                            <span className="text-[9px] text-secondary font-bold uppercase tracking-wider block mb-1">Biomass Feedstock</span>
                            <p className="text-primary font-semibold flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-eco" />
                              {activePlant.feedstock}
                            </p>
                          </div>
                          <div className="bg-background border border-border/60 rounded-xl p-3.5">
                            <span className="text-[9px] text-secondary font-bold uppercase tracking-wider block mb-1">Primary Outputs</span>
                            <p className="text-primary font-semibold flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                              {activePlant.output?.split("&")[0]}
                            </p>
                          </div>
                        </div>

                        {/* Core Operations challenges & results */}
                        <div className="space-y-3.5 text-xs border-t border-border/40 pt-4">
                          <div>
                            <span className="text-secondary font-bold uppercase tracking-wider block mb-0.5 text-[10px]">Operations Challenge</span>
                            <p className="text-secondary leading-relaxed">{activePlant.challenge}</p>
                          </div>
                          <div>
                            <span className="text-eco font-bold uppercase tracking-wider block mb-0.5 flex items-center gap-1.5 text-[10px]">
                              <Activity size={12} />
                              Commissioning Outcome
                            </span>
                            <p className="text-secondary leading-relaxed">{activePlant.result}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* HISTORICAL COMMISSIONED BITUMEN PLANTS SPEC SHEET */
                      <div className="space-y-6">
                        
                        {/* Year Banner HUD */}
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="inline-flex items-center gap-1 bg-eco/10 border border-eco/30 text-eco text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
                              <Calendar size={10} />
                              COMMISSIONED {activePlant.year}
                            </span>
                            <h4 className="font-display text-2xl md:text-3xl text-primary font-extrabold tracking-tight">
                              {activePlant.title}
                            </h4>
                          </div>

                          {/* Year Badge */}
                          <div className="bg-slate-100 border border-border rounded-2xl px-5 py-3 text-center shrink-0 shadow-sm relative overflow-hidden group/year">
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-eco" />
                            <p className="text-[9px] font-mono text-secondary uppercase font-semibold">Year</p>
                            <p className="text-xl font-extrabold text-primary leading-none mt-1 font-mono">{activePlant.year}</p>
                          </div>
                        </div>

                        {/* Quick Spec Sheet */}
                        <div className="grid grid-cols-2 gap-4 bg-background border border-border/80 rounded-2xl p-4">
                          <div className="flex gap-2.5 items-start">
                            <Briefcase size={16} className="text-eco shrink-0 mt-0.5" />
                            <div>
                              <p className="text-[9px] text-secondary font-bold uppercase tracking-wider">Owner Role</p>
                              <p className="text-xs font-bold text-primary mt-0.5 leading-snug">{activePlant.role}</p>
                            </div>
                          </div>
                          <div className="flex gap-2.5 items-start">
                            <Settings size={16} className="text-accent shrink-0 mt-0.5" />
                            <div>
                              <p className="text-[9px] text-secondary font-bold uppercase tracking-wider">Parent Venture</p>
                              <p className="text-xs font-bold text-primary mt-0.5 leading-snug">{activePlant.company}</p>
                            </div>
                          </div>
                        </div>

                        {/* Detailed Description */}
                        <div className="space-y-3.5 text-xs border-t border-border/40 pt-4">
                          <div>
                            <span className="text-secondary font-bold uppercase tracking-wider block mb-1 text-[10px]">Processing Class</span>
                            <p className="text-primary font-semibold text-sm flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-eco" />
                              {activePlant.plantType}
                            </p>
                          </div>
                          <div className="bg-eco/5 border border-eco/20 rounded-xl p-4">
                            <span className="text-eco font-bold uppercase tracking-wider block mb-1 text-[10px] flex items-center gap-1.5">
                              <Award size={13} />
                              Engineering Milestone
                            </span>
                            <p className="text-secondary leading-relaxed font-medium">
                              {activePlant.milestone}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Spec sheet bottom badge */}
                    <div className="mt-8 pt-6 border-t border-border">
                      {activePlant.isDetailed ? (
                        <div className="flex gap-2.5 bg-accent/5 border border-accent/20 rounded-xl p-3.5">
                          <ShieldCheck size={18} className="text-accent shrink-0 mt-0.5" />
                          <p className="text-[11px] text-accent font-semibold leading-relaxed">
                            {activePlant.highlight}
                          </p>
                        </div>
                      ) : (
                        <div className="flex gap-2.5 bg-eco/5 border border-eco/20 rounded-xl p-3.5">
                          <ShieldCheck size={18} className="text-eco shrink-0 mt-0.5" />
                          <p className="text-[11px] text-eco font-semibold leading-relaxed">
                            Certified specs compliant under state PWD and NHAI national highway regulatory guidelines.
                          </p>
                        </div>
                      )}
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:text-accent group transition-colors"
          >
            Schedule a Virtual Plant Visit
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
