"use client";

import { useState } from "react";
import Link from "next/link";
import { IT_SERVICES } from "@/lib/company-data";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  ArrowRight, 
  Monitor, 
  LayoutDashboard, 
  Link2, 
  TrendingUp, 
  Smartphone,
  Shield,
  Activity,
  Zap,
  Globe2,
  Clock
} from "lucide-react";

function DashboardMockup({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <div className="p-4 md:p-6 text-xs font-sans text-white h-full flex flex-col justify-between select-none">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-accent text-[10px] tracking-wider uppercase">YUGA Client Portal</span>
              <span className="text-[9px] text-white/50 bg-white/5 px-2 py-0.5 rounded border border-white/5">Project ID: PAC-PJB-01</span>
            </div>
            
            <h4 className="font-extrabold text-white text-sm mb-3">Punjab Bio-Bitumen Plant Setup</h4>
            
            {/* Stage timeline tracker */}
            <div className="space-y-3">
              <p className="text-[9px] text-secondary font-bold uppercase tracking-wider">Project Timeline Stages</p>
              <div className="grid grid-cols-4 gap-1.5 text-center text-[9px]">
                <div className="bg-eco/10 border border-eco/30 text-eco p-2 rounded-lg">
                  <p className="font-bold">Stage 01</p>
                  <p className="text-[8px] opacity-80">Site Select</p>
                  <span className="mt-1 block text-[7px] font-bold">✔ DONE</span>
                </div>
                <div className="bg-accent/10 border border-accent text-accent p-2 rounded-lg animate-pulse">
                  <p className="font-bold">Stage 02</p>
                  <p className="text-[8px] opacity-80">Pyrolysis</p>
                  <span className="mt-1 block text-[7px] font-bold">● ACTIVE</span>
                </div>
                <div className="bg-white/5 border border-white/5 text-secondary p-2 rounded-lg opacity-60">
                  <p className="font-bold">Stage 03</p>
                  <p className="text-[8px] opacity-80">Refining</p>
                  <span className="mt-1 block text-[7px]">WAITING</span>
                </div>
                <div className="bg-white/5 border border-white/5 text-secondary p-2 rounded-lg opacity-60">
                  <p className="font-bold">Stage 04</p>
                  <p className="text-[8px] opacity-80">Tenders</p>
                  <span className="mt-1 block text-[7px]">WAITING</span>
                </div>
              </div>
            </div>
          </div>

          {/* Active task and chat/milestone */}
          <div className="grid grid-cols-2 gap-3 mt-4 border-t border-white/5 pt-3">
            <div className="bg-surface/50 p-2.5 rounded-xl border border-white/5">
              <p className="text-[8px] text-secondary font-bold uppercase tracking-wider mb-1">Recent Approvals</p>
              <ul className="space-y-1 text-[9px] text-white/90">
                <li className="flex items-center gap-1"><span className="w-1 h-1 bg-eco rounded-full" /> DPR Feasibility Report</li>
                <li className="flex items-center gap-1"><span className="w-1 h-1 bg-eco rounded-full" /> Pollution Board NOC</li>
                <li className="flex items-center gap-1 text-white/40"><span className="w-1 h-1 bg-white/20 rounded-full" /> Equipment Invoice</li>
              </ul>
            </div>
            <div className="bg-surface/50 p-2.5 rounded-xl border border-white/5 flex flex-col justify-between">
              <div>
                <p className="text-[8px] text-secondary font-bold uppercase tracking-wider mb-1">Next Milestone</p>
                <p className="text-[9px] font-bold text-white leading-tight">Biomass Pelletizer Delivery</p>
              </div>
              <p className="text-[8px] text-accent font-semibold mt-1">Due in 5 Days</p>
            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="p-4 md:p-6 text-xs font-sans text-white h-full flex flex-col justify-between select-none">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-eco text-[10px] tracking-wider uppercase">SCADA Plant Dashboard</span>
              <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-eco/10 border border-eco/20 text-[9px] text-eco font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-eco animate-ping" />
                Live Feed
              </span>
            </div>

            {/* Metric overview */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="bg-surface/60 border border-white/5 rounded-xl p-2 text-center">
                <p className="text-[8px] text-secondary font-bold uppercase">Reactor Temp</p>
                <p className="text-sm font-extrabold text-accent mt-0.5">504°C</p>
                <span className="text-[7px] text-eco">Optimal</span>
              </div>
              <div className="bg-surface/60 border border-white/5 rounded-xl p-2 text-center">
                <p className="text-[8px] text-secondary font-bold uppercase">Feed Feedstock</p>
                <p className="text-sm font-extrabold text-white mt-0.5">840 kg/h</p>
                <span className="text-[7px] text-eco">Steady</span>
              </div>
              <div className="bg-surface/60 border border-white/5 rounded-xl p-2 text-center">
                <p className="text-[8px] text-secondary font-bold uppercase">Bio-Oil Out</p>
                <p className="text-sm font-extrabold text-eco mt-0.5">218 L/h</p>
                <span className="text-[7px] text-eco">Yield: 24%</span>
              </div>
            </div>
          </div>

          {/* Real-time chart visualization */}
          <div className="bg-background/40 border border-white/5 rounded-xl p-3 flex-1 flex flex-col justify-between">
            <div className="flex justify-between text-[8px] text-secondary font-bold uppercase tracking-wider mb-2">
              <span>Hourly Bio-Oil Production</span>
              <span>Last 5 hrs</span>
            </div>
            {/* Simulated bar chart */}
            <div className="flex items-end justify-between gap-2 h-16 px-2">
              {[45, 60, 52, 75, 90].map((h, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-eco/20 rounded-t-sm relative h-12">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                      className="absolute bottom-0 inset-x-0 bg-eco rounded-t-sm shadow-[0_0_8px_#10B981]"
                    />
                  </div>
                  <span className="text-[7px] text-secondary">{idx + 8}:00</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="p-4 md:p-6 text-xs font-sans text-white h-full flex flex-col justify-between select-none">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-accent text-[10px] tracking-wider uppercase">YUGA Supply Chain Hub</span>
              <span className="text-[9px] text-white/50 bg-white/5 px-2 py-0.5 rounded border border-white/5">Vendor: GETKA Petroleum</span>
            </div>

            {/* Cargo list */}
            <p className="text-[8px] text-secondary font-bold uppercase tracking-wider mb-2">Active Cargo & Shipments</p>
            <div className="space-y-2">
              <div className="bg-surface/50 border border-white/5 p-2 rounded-xl flex items-center justify-between">
                <div>
                  <p className="font-bold text-[10px] text-white">MV Sea Opal - VG30 Bitumen Import</p>
                  <p className="text-[8px] text-secondary">Qty: 24,000 MT · Origin: USA-Iraq</p>
                </div>
                <span className="text-[8px] bg-accent/20 border border-accent/40 text-accent font-bold px-2 py-0.5 rounded uppercase tracking-wider animate-pulse">In Transit</span>
              </div>
              
              <div className="bg-surface/50 border border-white/5 p-2 rounded-xl flex items-center justify-between">
                <div>
                  <p className="font-bold text-[10px] text-white">Punjab Hub - Agro Pellets Dispatch</p>
                  <p className="text-[8px] text-secondary">Qty: 180 Tons · Route: Local aggregator</p>
                </div>
                <span className="text-[8px] bg-eco/20 border border-eco/40 text-eco font-bold px-2 py-0.5 rounded uppercase tracking-wider">Delivered</span>
              </div>
            </div>
          </div>

          {/* Verification Status */}
          <div className="mt-4 pt-3 border-t border-white/5 grid grid-cols-3 gap-2">
            <div className="bg-background/40 p-2 rounded-lg border border-white/5 text-center">
              <span className="text-[8px] text-secondary block mb-0.5">SGS Quality</span>
              <span className="text-[9px] font-bold text-eco flex items-center justify-center gap-0.5">
                <span className="w-1.5 h-1.5 bg-eco rounded-full inline-block" /> PASS
              </span>
            </div>
            <div className="bg-background/40 p-2 rounded-lg border border-white/5 text-center">
              <span className="text-[8px] text-secondary block mb-0.5">Bill of Lading</span>
              <span className="text-[9px] font-bold text-eco flex items-center justify-center gap-0.5">
                <span className="w-1.5 h-1.5 bg-eco rounded-full inline-block" /> VERIFIED
              </span>
            </div>
            <div className="bg-background/40 p-2 rounded-lg border border-white/5 text-center">
              <span className="text-[8px] text-secondary block mb-0.5">LC Clearance</span>
              <span className="text-[9px] font-bold text-eco flex items-center justify-center gap-0.5">
                <span className="w-1.5 h-1.5 bg-eco rounded-full inline-block" /> RELEASED
              </span>
            </div>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="p-4 md:p-6 text-xs font-sans text-white h-full flex flex-col justify-between select-none">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-eco text-[10px] tracking-wider uppercase">Bitumen Intelligence Hub</span>
              <span className="text-[9px] text-white/50 bg-white/5 px-2 py-0.5 rounded border border-white/5">17 States Monitored</span>
            </div>

            {/* Pricing list table */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[8px] text-secondary font-bold uppercase tracking-wider pb-1 border-b border-white/5">
                <span>State / Terminal</span>
                <span>Standard VG-30</span>
                <span>YUGA Bio-Bitumen</span>
              </div>
              <div className="flex justify-between text-[9px] items-center py-1">
                <span className="font-semibold text-white/90">Maharashtra (Panvel)</span>
                <span className="text-secondary">₹41,800/MT</span>
                <span className="text-eco font-bold">₹35,000/MT (Saves 16%)</span>
              </div>
              <div className="flex justify-between text-[9px] items-center py-1 border-t border-white/5">
                <span className="font-semibold text-white/90">Gujarat (Vadodara)</span>
                <span className="text-secondary">₹40,900/MT</span>
                <span className="text-eco font-bold">₹34,500/MT (Saves 15%)</span>
              </div>
              <div className="flex justify-between text-[9px] items-center py-1 border-t border-white/5">
                <span className="font-semibold text-white/90">UP (Mathura Terminal)</span>
                <span className="text-secondary">₹42,500/MT</span>
                <span className="text-eco font-bold">₹35,500/MT (Saves 16%)</span>
              </div>
            </div>
          </div>

          {/* Market Alert Footer */}
          <div className="bg-[#121824] border border-eco/20 rounded-xl p-2.5 flex items-center justify-between text-[9px]">
            <div>
              <span className="font-bold text-eco block uppercase tracking-wider">Arbitrage Opportunity Alert</span>
              <span className="text-secondary">Bio-bitumen margins expanded by +₹800/MT this week due to rising crude.</span>
            </div>
            <span className="text-[14px] text-eco">📈</span>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="p-4 text-xs font-sans text-white h-full flex flex-col justify-center select-none">
          <div className="w-full max-w-[260px] mx-auto bg-[#07090E] border border-white/10 rounded-2xl p-3.5 shadow-inner flex flex-col justify-between aspect-[9/13]">
            <div>
              {/* Mobile Top Bar */}
              <div className="flex justify-between items-center text-[7px] text-secondary/60 border-b border-white/5 pb-1 mb-2.5 font-mono">
                <span>YUGA Ops App</span>
                <span>12:45 PM · 4G</span>
              </div>

              {/* Supervisor profile */}
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-5 h-5 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-[8px] font-bold text-accent">RK</div>
                <div>
                  <p className="text-[8px] font-bold text-white leading-none">Rahul Kumar</p>
                  <p className="text-[6px] text-secondary">Plant Supervisor · Punjab 01</p>
                </div>
              </div>

              {/* Shift Checklist */}
              <p className="text-[7px] text-secondary font-bold uppercase tracking-wider mb-2">Shift Checklist</p>
              <ul className="space-y-1.5 text-[8px]">
                <li className="flex items-center gap-1.5 text-white/90">
                  <span className="w-3 h-3 rounded bg-eco/25 border border-eco/40 flex items-center justify-center text-[6px] text-eco font-extrabold">✔</span>
                  Moisture check: 12.4% (PASS)
                </li>
                <li className="flex items-center gap-1.5 text-white/90">
                  <span className="w-3 h-3 rounded bg-eco/25 border border-eco/40 flex items-center justify-center text-[6px] text-eco font-extrabold">✔</span>
                  Reactor pre-heated: 480°C
                </li>
                <li className="flex items-center gap-1.5 text-white/90">
                  <span className="w-3 h-3 rounded bg-eco/25 border border-eco/40 flex items-center justify-center text-[6px] text-eco font-extrabold">✔</span>
                  syn-gas backup pressure test
                </li>
                <li className="flex items-center gap-1.5 text-white/50">
                  <span className="w-3 h-3 rounded bg-white/5 border border-white/10" />
                  Yield sample verification
                </li>
              </ul>
            </div>

            {/* Submission box */}
            <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between">
              <span className="text-[6px] text-secondary font-mono">Unsent logs: 0</span>
              <button className="bg-eco hover:bg-eco-hover text-background font-bold text-[7px] px-2 py-1 rounded uppercase tracking-wider">Sync Data</button>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function ItProductTabs() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleKeyDown = (e: React.KeyboardEvent, i: number) => {
    if (e.key === "ArrowRight") {
      const next = (i + 1) % IT_SERVICES.length;
      setActiveIndex(next);
    } else if (e.key === "ArrowLeft") {
      const prev = (i - 1 + IT_SERVICES.length) % IT_SERVICES.length;
      setActiveIndex(prev);
    }
  };

  const getIcon = (emoji: string) => {
    switch (emoji) {
      case "🖥️": return <Monitor className="text-accent" size={32} />;
      case "📊": return <LayoutDashboard className="text-accent" size={32} />;
      case "🔗": return <Link2 className="text-accent" size={32} />;
      case "📈": return <TrendingUp className="text-accent" size={32} />;
      case "📱": return <Smartphone className="text-accent" size={32} />;
      default: return <Monitor className="text-accent" size={32} />;
    }
  };

  // Dynamic badges for each service tab
  const getServiceBadges = (index: number) => {
    switch (index) {
      case 0:
        return [
          { icon: <Shield size={12} className="text-accent" />, label: "Role-based Access" },
          { icon: <Clock size={12} className="text-accent" />, label: "Live Stage Tracking" }
        ];
      case 1:
        return [
          { icon: <Activity size={12} className="text-accent" />, label: "Real-time Telemetry" },
          { icon: <Zap size={12} className="text-accent" />, label: "Alert System" }
        ];
      case 2:
        return [
          { icon: <Link2 size={12} className="text-accent" />, label: "Vessel Sourcing APIs" },
          { icon: <Shield size={12} className="text-accent" />, label: "SGS Verification" }
        ];
      case 3:
        return [
          { icon: <TrendingUp size={12} className="text-accent" />, label: "17-State Data" },
          { icon: <Globe2 size={12} className="text-accent" />, label: "Margin Calculator" }
        ];
      case 4:
        return [
          { icon: <Smartphone size={12} className="text-accent" />, label: "PWA Offline Sync" },
          { icon: <Activity size={12} className="text-accent" />, label: "Direct Supervisor Input" }
        ];
      default:
        return [];
    }
  };

  return (
    <div className="w-full">
      {/* Tab buttons */}
      <div
        role="tablist"
        aria-label="IT Products"
        className="flex flex-wrap gap-3 mb-10"
      >
        {IT_SERVICES.map((service, i) => (
          <button
            key={service.name}
            id={`tab-${i}`}
            role="tab"
            aria-selected={i === activeIndex}
            aria-controls={`panel-${i}`}
            tabIndex={i === activeIndex ? 0 : -1}
            onClick={() => setActiveIndex(i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className={`
              relative px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 overflow-hidden group
              ${i === activeIndex 
                ? "bg-accent/10 border-accent text-accent shadow-[0_0_20px_rgba(245,158,11,0.15)]" 
                : "bg-white/5 border-white/10 text-secondary hover:text-white hover:bg-white/10"}
              border
            `}
          >
            {i === activeIndex && (
              <motion.div 
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent pointer-events-none"
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {i === activeIndex && <ChevronRight size={16} />}
              {service.name}
            </span>
          </button>
        ))}
      </div>

      {/* Tab panels */}
      <div className="relative min-h-[500px]">
        <AnimatePresence mode="wait">
          {IT_SERVICES.map((service, i) => (
            i === activeIndex && (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.4 }}
                role="tabpanel"
                id={`panel-${i}`}
                aria-labelledby={`tab-${i}`}
                className="glass border-t-4 border-t-accent rounded-2xl p-8 md:p-10 w-full relative"
              >
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                  {/* Left Column: Details */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      {/* Header */}
                      <div className="flex items-center gap-5 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
                          {getIcon(service.icon)}
                        </div>
                        <h2 className="font-display text-3xl font-extrabold text-white tracking-tight">
                          {service.name}
                        </h2>
                      </div>

                      {/* Description */}
                      <p className="text-secondary text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Tech tags */}
                      {service.tags && service.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-accent/10 border border-accent/20 text-accent text-xs font-bold px-3 py-1.5 rounded-md tracking-wider uppercase"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Example blockquote */}
                      {service.example && (
                        <div className="bg-background/60 backdrop-blur rounded-xl p-5 border border-white/5 mb-8 relative overflow-hidden group">
                          <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors pointer-events-none" />
                          
                          <p className="italic text-secondary text-base leading-relaxed relative z-10">
                            "{service.example}"
                          </p>
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl px-8 py-4 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] group"
                      >
                        Request This Product
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Premium Browser Mockup */}
                  <div className="lg:col-span-6 flex justify-center">
                    <div className="w-full max-w-lg relative">
                      {/* Floating feature badges */}
                      <div className="absolute -top-4 -left-4 z-20 flex flex-col gap-2">
                        {getServiceBadges(i).map((badge, idx) => (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            key={badge.label}
                            className="bg-[#121824]/90 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-lg"
                          >
                            {badge.icon}
                            <span className="text-white text-[11px] font-bold tracking-wider uppercase">
                              {badge.label}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Mockup Container */}
                      <div className="relative rounded-2xl border border-white/10 bg-[#0B0F19] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group/browser transition-all duration-500 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)]">
                        {/* Browser Header */}
                        <div className="bg-[#121824] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                          {/* Window Dots */}
                          <div className="flex gap-1.5">
                            <span className="w-3 h-3 rounded-full bg-[#EF4444] opacity-80" />
                            <span className="w-3 h-3 rounded-full bg-[#F59E0B] opacity-80" />
                            <span className="w-3 h-3 rounded-full bg-[#10B981] opacity-80" />
                          </div>
                          {/* Address Bar */}
                          <div className="flex-1 max-w-[200px] sm:max-w-xs mx-auto bg-background/50 rounded-lg px-3 py-1 text-[10px] text-secondary/60 text-center font-mono border border-white/5 truncate">
                            app.yuga.co.in/{service.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                          </div>
                          {/* Extra spacer for balance */}
                          <div className="w-12" />
                        </div>
                        
                        {/* Browser Body - Interactive CSS Mockup */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0D14] flex flex-col justify-stretch">
                          <DashboardMockup index={i} />
                          
                          {/* Glass reflection overlay */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                          
                          {/* Overlay glow on hover */}
                          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover/browser:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
                        </div>
                      </div>

                      {/* Screen reflection highlight */}
                      <div className="absolute inset-x-12 -bottom-2 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent blur-[1px]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
