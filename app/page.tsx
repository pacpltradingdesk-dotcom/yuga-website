// app/page.tsx
"use client";

import SplitHero from "@/components/SplitHero";
import BusinessLineCards from "@/components/BusinessLineCards";
import WhyNowStrip from "@/components/WhyNowStrip";
import StageCard from "@/components/StageCard";
import CredentialsBar from "@/components/CredentialsBar";
import CtaStrip from "@/components/CtaStrip";
import CaseStudies from "@/components/CaseStudies";
import CapacityCalculator from "@/components/CapacityCalculator";
import { FOUR_STAGES } from "@/lib/company-data";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <SplitHero />
      <BusinessLineCards />
      <WhyNowStrip />

      {/* Pyrolysis teaser */}
      <section className="bg-background relative py-24 px-6 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
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
              The Technology
              <span className="w-4 h-px bg-accent/50" />
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-extrabold tracking-tight mb-6">
              How <span className="text-gradient">Pyrolysis</span> Works
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Four integrated stages convert agro-waste into commercial bio-bitumen for India's road network.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: 4 Stage Cards Grid */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {FOUR_STAGES.map((stage, i) => (
                <StageCard key={stage.stage} stage={stage} index={i} />
              ))}
            </div>

            {/* Right: Immersive Reactor Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 relative rounded-3xl overflow-hidden border border-white/10 hover:border-accent/40 shadow-2xl group min-h-[420px] flex flex-col justify-end p-8"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-700 ease-out z-0"
                style={{ backgroundImage: "url('/assets/pyrolysis-plant.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
              
              <div className="relative z-20">
                <div className="inline-flex items-center gap-1.5 bg-accent/10 border border-accent/30 text-accent text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Thermal Pyrolysis
                </div>
                <h3 className="font-display text-2xl text-white font-bold mb-2">The Bio-Bitumen Reactor</h3>
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  Thermo-chemical conversion at 450–550°C in the absence of oxygen to extract green bio-oil.
                </p>
                <div className="grid grid-cols-2 gap-2 text-center text-xs font-semibold uppercase tracking-wider text-white">
                  <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg backdrop-blur-md">
                    <p className="text-accent font-extrabold">20-25%</p>
                    <p className="text-secondary text-[9px] mt-0.5">Bio-Oil Yield</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg backdrop-blur-md">
                    <p className="text-accent font-extrabold">450-550°C</p>
                    <p className="text-secondary text-[9px] mt-0.5">Heat Range</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link
              href="/pyrolysis"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/20 transition-all text-sm uppercase tracking-wider group"
            >
              Deep Dive into Pyrolysis
              <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <CaseStudies />

      <CapacityCalculator />

      <CredentialsBar />

      <CtaStrip
        heading="Ready to Build Your Plant?"
        subtext="Join 10 successful plant operators who trusted YUGA for their bio-bitumen journey."
        buttonLabel="Start Your Project"
        buttonHref="/contact"
      />
    </>
  );
}
