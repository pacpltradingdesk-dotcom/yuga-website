// components/CapacityCalculator.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sliders, Leaf, TrendingUp, Activity, IndianRupee, ShieldCheck, Factory, Gauge } from "lucide-react";
import Link from "next/link";

type FeedstockType = "rice_straw" | "bagasse" | "mixed_waste";

interface FeedstockConfig {
  name: string;
  bitumenYield: number;
  charYield: number;
  syngasYield: number;
  pricePerTon: number;
}

const FEEDSTOCK_CONFIGS: Record<FeedstockType, FeedstockConfig> = {
  rice_straw: {
    name: "Rice Straw (Paddy Stubble)",
    bitumenYield: 0.22,
    charYield: 0.30,
    syngasYield: 0.48,
    pricePerTon: 2500,
  },
  bagasse: {
    name: "Sugarcane Bagasse",
    bitumenYield: 0.25,
    charYield: 0.28,
    syngasYield: 0.47,
    pricePerTon: 3000,
  },
  mixed_waste: {
    name: "Mixed Agro & Forestry Waste",
    bitumenYield: 0.24,
    charYield: 0.32,
    syngasYield: 0.44,
    pricePerTon: 2000,
  },
};

export default function CapacityCalculator() {
  const [feedstock, setFeedstock] = useState<FeedstockType>("rice_straw");
  const [capacity, setCapacity] = useState<number>(20);

  const config = FEEDSTOCK_CONFIGS[feedstock];

  // 1. CapEx calculation matches case studies:
  // 10 TPD -> 4.2 Cr
  // 20 TPD -> 7.5 Cr
  // 50 TPD -> 14.8 Cr
  // 100 TPD -> 25.0 Cr
  let capex = 0;
  if (capacity <= 20) {
    capex = 4.2 + (capacity - 10) * 0.33;
  } else if (capacity <= 50) {
    capex = 7.5 + (capacity - 20) * 0.243;
  } else {
    capex = 14.8 + (capacity - 50) * 0.204;
  }

  // 2. Material Balance (Tons per Year)
  const daysPerYear = 300;
  const annualFeedstockInput = capacity * daysPerYear;
  const annualBitumenYield = annualFeedstockInput * config.bitumenYield;
  const annualCharYield = annualFeedstockInput * config.charYield;
  const annualSyngasYield = annualFeedstockInput * config.syngasYield;

  // 3. Financial Metrics (Crores INR)
  const bitumenRevenueCr = (annualBitumenYield * 35000) / 10000000;
  const charRevenueCr = (annualCharYield * 8000) / 10000000;
  const totalRevenueCr = bitumenRevenueCr + charRevenueCr;

  const feedstockCostCr = (annualFeedstockInput * config.pricePerTon) / 10000000;
  const laborMaintCr = (6000000 * Math.pow(capacity / 10, 0.6)) / 10000000;
  const powerUtilityCr = (annualFeedstockInput * 800 * 0.2) / 10000000; // 80% saved due to syngas recycling
  const totalOpexCr = feedstockCostCr + laborMaintCr + powerUtilityCr;

  const annualProfitCr = totalRevenueCr - totalOpexCr;
  const paybackPeriodYears = capex / annualProfitCr;

  return (
    <section className="bg-background py-24 px-6 relative overflow-hidden" id="roi-calculator">
      {/* Background Engineering details */}
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
      <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-eco/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="flex items-center justify-center gap-2 text-eco text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-4 h-px bg-eco/50" />
            Financial Viability Simulator
            <span className="w-4 h-px bg-eco/50" />
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-extrabold tracking-tight mb-4">
            Capacity & <span className="text-gradient-eco">ROI Calculator</span>
          </h2>
          <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Estimate capital requirements, yield volumes, and project payback periods based on feedstock options and plant sizing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass rounded-3xl p-6 md:p-8 space-y-8">
              {/* Step 1: Feedstock selection */}
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-secondary flex items-center gap-2">
                  <Leaf size={14} className="text-eco" />
                  1. Select Feedstock Source
                </label>
                <div className="grid gap-3">
                  {(Object.keys(FEEDSTOCK_CONFIGS) as FeedstockType[]).map((type) => {
                    const active = feedstock === type;
                    return (
                      <button
                        key={type}
                        onClick={() => setFeedstock(type)}
                        className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-200 ${
                          active
                            ? "bg-eco/10 border-eco text-white glow-border-eco"
                            : "bg-surface/50 border-white/5 text-secondary hover:border-white/10 hover:text-white"
                        }`}
                      >
                        <div>
                          <p className="font-bold text-sm text-white">{FEEDSTOCK_CONFIGS[type].name}</p>
                          <p className="text-xs text-secondary/80 mt-0.5">
                            Est. cost: ₹{FEEDSTOCK_CONFIGS[type].pricePerTon.toLocaleString()}/Ton
                          </p>
                        </div>
                        {active && (
                          <span className="w-2.5 h-2.5 rounded-full bg-eco shadow-[0_0_10px_#10B981]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Capacity Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary flex items-center gap-2">
                    <Factory size={14} className="text-accent" />
                    2. Plant Sizing (Capacity)
                  </label>
                  <span className="text-xl font-extrabold text-accent">{capacity} TPD</span>
                </div>
                
                <div className="space-y-2">
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={capacity}
                    onChange={(e) => setCapacity(Number(e.target.value))}
                    className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer accent-accent"
                    data-testid="capacity-slider"
                  />
                  <div className="flex justify-between text-[10px] text-secondary font-semibold uppercase tracking-wider">
                    <span>10 TPD (Micro)</span>
                    <span>50 TPD (Medium)</span>
                    <span>100 TPD (Utility)</span>
                  </div>
                </div>
              </div>

              {/* Material Yield Details info */}
              <div className="bg-background/60 border border-white/5 rounded-2xl p-4 space-y-3">
                <h4 className="text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Gauge size={12} className="text-eco" />
                  Estimated Material Balance
                </h4>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-surface/50 p-2.5 rounded-xl border border-white/5">
                    <p className="text-[10px] text-secondary mb-0.5">Bio-Bitumen</p>
                    <p className="font-bold text-white">{(config.bitumenYield * 100).toFixed(0)}%</p>
                  </div>
                  <div className="bg-surface/50 p-2.5 rounded-xl border border-white/5">
                    <p className="text-[10px] text-secondary mb-0.5">Bio-Char</p>
                    <p className="font-bold text-white">{(config.charYield * 100).toFixed(0)}%</p>
                  </div>
                  <div className="bg-surface/50 p-2.5 rounded-xl border border-white/5">
                    <p className="text-[10px] text-secondary mb-0.5">Syn-gas</p>
                    <p className="font-bold text-white">{(config.syngasYield * 100).toFixed(0)}%</p>
                  </div>
                </div>
                <p className="text-[10px] text-secondary/70 leading-relaxed italic">
                  * Syn-gas is entirely recycled to thermal feed combustion, cutting power costs by ~80%.
                </p>
              </div>
            </div>
          </div>

          {/* Outputs / ROI Dashboard Section */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass rounded-3xl p-6 md:p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-eco/5 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-sm font-bold uppercase tracking-widest text-secondary flex items-center gap-2">
                <Activity size={16} className="text-eco" />
                Project Financial Outlook
              </h3>

              {/* Main ROI Grid Metrics */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-background/40 border border-white/5 rounded-2xl p-5 relative overflow-hidden">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block mb-1">Estimated CapEx</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-white">₹{capex.toFixed(1)}</span>
                    <span className="text-xs font-semibold text-secondary">Crores</span>
                  </div>
                  <div className="absolute top-3 right-3 text-white/5">
                    <IndianRupee size={24} />
                  </div>
                </div>

                <div className="bg-background/40 border border-white/5 rounded-2xl p-5 relative overflow-hidden">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block mb-1">Annual Profit</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-eco">₹{annualProfitCr.toFixed(2)}</span>
                    <span className="text-xs font-semibold text-secondary">Cr / yr</span>
                  </div>
                  <div className="absolute top-3 right-3 text-eco/5">
                    <TrendingUp size={24} />
                  </div>
                </div>

                <div className="bg-background/40 border border-eco/20 rounded-2xl p-5 relative overflow-hidden shadow-[inset_0_0_12px_rgba(16,185,129,0.05)]">
                  <span className="text-[10px] font-bold text-eco uppercase tracking-widest block mb-1">Payback Period</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-gradient-eco">{paybackPeriodYears.toFixed(1)}</span>
                    <span className="text-xs font-semibold text-eco">Years</span>
                  </div>
                  <div className="absolute top-3 right-3 text-eco/10">
                    <ShieldCheck size={24} />
                  </div>
                </div>
              </div>

              {/* Visual Balance Breakdown */}
              <div className="border-t border-white/5 pt-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">Material Input vs Output (Annual)</h4>
                
                <div className="space-y-3">
                  {/* Input Line */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-secondary">Biomass Input Feedstock</span>
                      <span className="text-white font-bold">{annualFeedstockInput.toLocaleString()} Tons</span>
                    </div>
                    <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-secondary rounded-full" style={{ width: "100%" }} />
                    </div>
                  </div>

                  {/* Output Line 1 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-accent flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Bio-Bitumen VG30 Yield
                      </span>
                      <span className="text-white font-bold">{annualBitumenYield.toLocaleString()} Tons</span>
                    </div>
                    <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${config.bitumenYield * 100}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-accent rounded-full"
                      />
                    </div>
                  </div>

                  {/* Output Line 2 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-eco flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-eco" />
                        Active Bio-Char Yield
                      </span>
                      <span className="text-white font-bold">{annualCharYield.toLocaleString()} Tons</span>
                    </div>
                    <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${config.charYield * 100}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-eco rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Operational Financials Table */}
              <div className="border-t border-white/5 pt-6 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">Annual Financial Overview</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-white/5 text-secondary">
                        <th className="py-2.5 font-semibold">Financial Line</th>
                        <th className="py-2.5 font-semibold text-right">Calculation Detail</th>
                        <th className="py-2.5 font-semibold text-right">Amount (INR)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-white">
                      <tr>
                        <td className="py-3 text-secondary">Bio-Bitumen Revenue</td>
                        <td className="py-3 text-right text-secondary/80">₹35,000 / Ton</td>
                        <td className="py-3 text-right font-semibold">₹{(bitumenRevenueCr * 10000000).toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-secondary">Bio-Char Revenue</td>
                        <td className="py-3 text-right text-secondary/80">₹8,000 / Ton</td>
                        <td className="py-3 text-right font-semibold">₹{(charRevenueCr * 10000000).toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                      </tr>
                      <tr className="text-eco">
                        <td className="py-3 font-bold">Total Gross Revenue</td>
                        <td className="py-3 text-right">Sales Volume</td>
                        <td className="py-3 text-right font-extrabold">₹{(totalRevenueCr * 10000000).toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-secondary">Total OpEx (Feedstock + Labor + Utilities)</td>
                        <td className="py-3 text-right text-secondary/80">Continuous Operation</td>
                        <td className="py-3 text-right font-semibold text-red-400">-₹{(totalOpexCr * 10000000).toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                      </tr>
                      <tr className="border-t-2 border-white/10 font-bold text-white bg-eco/5">
                        <td className="py-3 px-2 rounded-l-xl">Net Operating Profit (EBITDA)</td>
                        <td className="py-3 text-right text-secondary/80">Before Taxes</td>
                        <td className="py-3 px-2 text-right text-eco font-extrabold rounded-r-xl">₹{(annualProfitCr * 10000000).toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Call to Action Callout */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between bg-surface/50 border border-white/5 rounded-2xl p-4">
                <p className="text-[10px] md:text-xs text-secondary leading-relaxed max-w-sm">
                  Yields are based on laboratory tested thermal decomposition models. Actual output is dependent on input biomass quality.
                </p>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto text-center bg-eco text-background font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl hover:bg-eco-hover transition-colors whitespace-nowrap"
                >
                  Request Feasibility Report
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
