// app/consulting/page.tsx
"use client";

import PageHeader from "@/components/PageHeader";
import StageCard from "@/components/StageCard";
import ConsultingServiceCard from "@/components/ConsultingServiceCard";
import PmcServiceCard from "@/components/PmcServiceCard";
import TargetAudienceCard from "@/components/TargetAudienceCard";
import CtaStrip from "@/components/CtaStrip";
import {
  FOUR_STAGES,
  CONSULTING_SERVICES,
  PMC_SERVICES,
  TARGET_AUDIENCES,
} from "@/lib/company-data";
import { motion } from "framer-motion";

export default function ConsultingPage() {
  return (
    <>
      <PageHeader
        title="Consulting Services"
        subtitle="Two service verticals built around one mission — making bio-bitumen accessible to every Indian investor"
        breadcrumb="Consulting"
        bgImage="/assets/consulting-meeting.png"
      />

      {/* Sticky tab nav */}
      <nav
        className="sticky top-[72px] z-40 bg-surface/80 backdrop-blur-md border-b border-white/10"
        aria-label="Consulting sections"
      >
        <div className="max-w-7xl mx-auto px-6 flex gap-8 overflow-x-auto hide-scrollbar">
          {[
            { href: "#bio-bitumen", label: "Bio-Bitumen Consulting" },
            { href: "#pmc", label: "Project Management (PMC)" },
            { href: "#audience", label: "Who We Serve" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="shrink-0 py-4 text-sm font-semibold text-secondary hover:text-white border-b-2 border-transparent hover:border-accent transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Bio-Bitumen Section */}
      <section id="bio-bitumen" className="bg-background py-24 px-6 scroll-mt-36 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-4 h-px bg-accent/50" />
              Service 01
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-extrabold mb-6 tracking-tight">
              <span className="text-gradient">Bio-Bitumen</span> Plant Consulting
            </h2>
            <p className="text-secondary text-lg max-w-2xl mb-16 leading-relaxed">
              End-to-end consulting covering all four stages of a bio-bitumen plant — from raw material
              procurement to market access. The only consultant in India offering this complete scope.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {FOUR_STAGES.map((stage, i) => (
              <StageCard key={stage.stage} stage={stage} index={i} />
            ))}
          </div>

          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl text-white font-bold mb-10 tracking-tight"
          >
            What's Included
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(CONSULTING_SERVICES).map(([category, items], i) => (
              <ConsultingServiceCard key={category} category={category} items={items} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PMC Section */}
      <section id="pmc" className="bg-surface py-24 px-6 scroll-mt-36 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <p className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
                <span className="w-4 h-px bg-accent/50" />
                Service 02
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-white font-extrabold mb-6 tracking-tight">
                Project Management Consulting (PMC)
              </h2>
              <p className="text-secondary text-lg leading-relaxed">
                Full PMC scope from feasibility report to plant commissioning and handover — with optional
                retainer support post-launch. We manage the contractors, supervise quality, handle government licensing, and hand over a fully operational plant.
              </p>
            </motion.div>

            {/* Visual Blueprint Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-white/10 hover:border-accent/40 shadow-2xl group min-h-[250px] flex flex-col justify-end p-6"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-700 ease-out z-0"
                style={{ backgroundImage: "url('/assets/road-construction.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
              
              <div className="relative z-20">
                <p className="text-accent text-xs font-extrabold uppercase tracking-wider mb-1">Active Project Management</p>
                <h4 className="font-display text-lg text-white font-bold mb-1">From DPR to Commissioning</h4>
                <p className="text-secondary text-xs">YUGA oversees every detail so investors can launch with confidence.</p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PMC_SERVICES.map((service, i) => (
              <PmcServiceCard key={service.category} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="audience" className="bg-background py-24 px-6 scroll-mt-36 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="flex items-center justify-center gap-2 text-eco text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-4 h-px bg-eco/50" />
              Who We Serve
              <span className="w-4 h-px bg-eco/50" />
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-extrabold mb-6 tracking-tight text-center">
              Which <span className="text-gradient">Investor Type</span> Are You?
            </h2>
            <p className="text-secondary text-center text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
              Our consulting scope adapts to your starting point — whether you're a new investor or an
              existing operator looking to add bio-bitumen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TARGET_AUDIENCES.map((audience, i) => (
              <TargetAudienceCard key={audience.type} audience={audience} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        heading="Which Service Do You Need?"
        subtext="Tell us about your project and we'll recommend the right scope."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
