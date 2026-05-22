// components/ReactorTelemetry.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/company-data";
import { Activity, Shield, Thermometer, RefreshCw, Gauge } from "lucide-react";

export default function ReactorTelemetry() {
  // Pulse values to simulate live telemetry
  const [temp, setTemp] = useState(502);
  const [feedRate, setFeedRate] = useState(2.4);
  const [efficiency, setEfficiency] = useState(96.4);
  const [chartData, setChartData] = useState<number[]>([95, 96, 94.5, 96.2, 95.8, 96.4, 96.1, 96.8, 96.3, 96.5]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Small random variations
      setTemp((prev) => {
        const delta = (Math.random() - 0.5) * 4;
        const next = prev + delta;
        return Number(Math.min(520, Math.max(480, next)).toFixed(1));
      });

      setFeedRate((prev) => {
        const delta = (Math.random() - 0.5) * 0.08;
        const next = prev + delta;
        return Number(Math.min(2.8, Math.max(2.0, next)).toFixed(2));
      });

      setEfficiency((prev) => {
        const delta = (Math.random() - 0.5) * 0.6;
        const next = prev + delta;
        const rounded = Number(Math.min(99.0, Math.max(92.0, next)).toFixed(1));
        
        // Update rolling chart data
        setChartData((prevChart) => {
          const updated = [...prevChart.slice(1), rounded];
          return updated;
        });

        return rounded;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Convert chartData array to SVG path string
  const svgWidth = 240;
  const svgHeight = 60;
  const maxVal = 100;
  const minVal = 90;
  const points = chartData.map((val, index) => {
    const x = (index / (chartData.length - 1)) * svgWidth;
    // Map val between minVal and maxVal to height
    const ratio = (val - minVal) / (maxVal - minVal);
    const y = svgHeight - ratio * (svgHeight - 10) - 5;
    return `${x},${y}`;
  });
  const pathD = `M ${points.join(" L ")}`;
  const areaD = `${pathD} L ${svgWidth},${svgHeight} L 0,${svgHeight} Z`;

  const stats = [
    { value: `${COMPANY.plantsBuilt}`, label: "Plants Built" },
    { value: `${COMPANY.yearsExperience}+`, label: "Years Experience" },
    { value: COMPANY.industryContacts.toLocaleString(), label: "Live Contacts" },
    { value: `${COMPANY.statesNetwork}`, label: "States Covered" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="dark-dashboard rounded-3xl p-6 shadow-2xl relative overflow-hidden group transition-all duration-500"
    >
      {/* Background blueprint elements */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/15 rounded-full blur-3xl group-hover:bg-accent/25 transition-all duration-500" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-eco/10 rounded-full blur-3xl group-hover:bg-eco/20 transition-all duration-500" />

      {/* Header telemetry info */}
      <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-5 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-eco animate-pulse shadow-[0_0_8px_#10B981]" />
          <span className="font-display font-extrabold text-xs text-white uppercase tracking-widest">
            Reactor Telemetry Sync
          </span>
        </div>
        <span className="text-[10px] text-slate-300 font-mono bg-slate-900 border border-white/10 px-2.5 py-0.5 rounded-full uppercase">
          Plant Model: Y-100 TPD
        </span>
      </div>

      <div className="grid md:grid-cols-12 gap-6 items-center relative z-10">
        {/* Left: SVG Reactor Blueprint Animation */}
        <div className="md:col-span-5 flex justify-center py-2 bg-slate-950/60 border border-white/10 rounded-2xl relative overflow-hidden h-[180px]">
          <div className="absolute inset-0 blueprint-grid opacity-[0.05]" />
          <svg
            width="120"
            height="160"
            viewBox="0 0 120 160"
            fill="none"
            className="relative z-10"
          >
            {/* Feeder Pipe */}
            <path d="M 10 30 L 45 30 L 45 50" stroke="#64748b" strokeWidth="3" fill="none" />
            <motion.circle
              cx="10"
              cy="30"
              r="3"
              fill="#10B981"
              animate={{ cx: [10, 45, 45], cy: [30, 30, 50] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            />
            {/* Reactor Column */}
            <rect x="35" y="50" width="50" height="80" rx="10" fill="rgba(255, 255, 255, 0.02)" stroke="#64748b" strokeWidth="2.5" />
            
            {/* Reactor Heat Rings */}
            <motion.path
              d="M 40 80 Q 60 70 80 80"
              stroke="#F59E0B"
              strokeWidth="2"
              fill="none"
              animate={{ opacity: [0.2, 0.8, 0.2], y: [-5, 5] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 40 100 Q 60 90 80 100"
              stroke="#F59E0B"
              strokeWidth="2"
              fill="none"
              animate={{ opacity: [0.8, 0.2, 0.8], y: [5, -5] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            />

            {/* Outflow Oil Pipe */}
            <path d="M 85 110 L 110 110 L 110 140" stroke="#64748b" strokeWidth="3" fill="none" />
            <motion.circle
              cx="85"
              cy="110"
              r="3"
              fill="#F59E0B"
              animate={{ cx: [85, 110, 110], cy: [110, 110, 140] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />

            {/* Labels */}
            <text x="3" y="20" fill="#94a3b8" fontSize="8" fontWeight="bold">FEEDSTOCK</text>
            <text x="43" y="70" fill="#F59E0B" fontSize="7" fontWeight="bold" className="animate-pulse">450-550°C</text>
            <text x="75" y="152" fill="#F59E0B" fontSize="8" fontWeight="bold">BIO-BITUMEN</text>
          </svg>
        </div>

        {/* Right: Live Readings & Line Chart */}
        <div className="md:col-span-7 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            {/* Temp Block */}
            <div className="bg-slate-900/80 border border-white/10 rounded-xl p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Thermometer size={18} />
              </div>
              <div>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Reactor Temp</p>
                <p className="text-sm font-extrabold text-white font-mono">{temp}°C</p>
              </div>
            </div>

            {/* Feed Rate Block */}
            <div className="bg-slate-900/80 border border-white/10 rounded-xl p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-eco/10 border border-eco/20 flex items-center justify-center text-eco">
                <RefreshCw size={16} className="animate-spin" style={{ animationDuration: "10s" }} />
              </div>
              <div>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Feed Input</p>
                <p className="text-sm font-extrabold text-white font-mono">{feedRate} T/h</p>
              </div>
            </div>

            {/* Pressure Block */}
            <div className="bg-slate-900/80 border border-white/10 rounded-xl p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                <Gauge size={16} />
              </div>
              <div>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Gas Pressure</p>
                <p className="text-sm font-extrabold text-white font-mono">1.25 Bar</p>
              </div>
            </div>

            {/* Efficiency Block */}
            <div className="bg-slate-900/80 border border-white/10 rounded-xl p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Activity size={16} />
              </div>
              <div>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Yield Ratio</p>
                <p className="text-sm font-extrabold text-emerald-400 font-mono">{efficiency}%</p>
              </div>
            </div>
          </div>

          {/* SVG Real-time Chart */}
          <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-4 flex flex-col justify-between h-[85px] relative overflow-hidden">
            <div className="flex justify-between items-center text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-2 relative z-10">
              <span className="flex items-center gap-1">
                <Activity size={10} className="text-accent" /> Conversion Efficiency Timeline
              </span>
              <span className="font-mono text-accent">{efficiency}%</span>
            </div>
            
            <div className="relative w-full h-[35px] mt-1">
              <svg width="100%" height="100%" viewBox="0 0 240 60" preserveAspectRatio="none">
                {/* Area Gradient fill */}
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path d={areaD} fill="url(#chartGradient)" />
                {/* Line path */}
                <motion.path
                  d={pathD}
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Key Business Stats (originally in StatsCard) */}
      <div className="grid grid-cols-2 gap-3 mt-5 pt-5 border-t border-white/10 relative z-10">
        {stats.map(({ value, label }, i) => (
          <div
            key={label}
            className="bg-slate-950/40 border border-white/5 rounded-xl p-3 text-center hover:bg-slate-900 hover:border-white/10 transition-colors duration-200"
          >
            <p className="font-display text-lg font-black text-white tracking-tight">
              {value}
            </p>
            <p className="text-slate-400 text-[9px] uppercase tracking-wider font-semibold">{label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
