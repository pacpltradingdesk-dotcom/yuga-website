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
                        
                        {/* Browser Body */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0D14]">
                          <img
                            src="/assets/it-dashboard-mockup.png"
                            alt={`${service.name} Interface Mockup`}
                            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/browser:scale-[1.03]"
                          />
                          
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
