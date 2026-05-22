// app/it-products/page.tsx
"use client";

import PageHeader from "@/components/PageHeader";
import ItProductTabs from "@/components/ItProductTabs";
import CtaStrip from "@/components/CtaStrip";
import { motion } from "framer-motion";
import { Factory, Globe, Rocket } from "lucide-react";

export default function ItProductsPage() {
  return (
    <>
      <PageHeader
        title="IT Products"
        subtitle="Custom software built for the bitumen and industrial sector"
        breadcrumb="IT Products"
        bgImage="/assets/it-dashboard-mockup.png"
      />

      {/* Tab Section */}
      <section className="py-24 px-6 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-4 h-px bg-accent/50" />
              Our Products
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-primary font-extrabold mb-6 tracking-tight">
              Software Built for the <span className="text-gradient">Bitumen Industry</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mb-16 leading-relaxed">
              Domain-specific tools engineered for the unique workflows of bitumen plants, supply
              chains, and industrial operations — not generic software retrofitted to your process.
            </p>
          </motion.div>
          
          <ItProductTabs />
        </div>
      </section>

      {/* Why PACPL for IT Section */}
      <section className="bg-surface py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
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
              Why Us
              <span className="w-4 h-px bg-accent/50" />
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-primary font-extrabold tracking-tight">
              Built by <span className="text-gradient">Practitioners</span>, Not Generalists
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass p-8 rounded-2xl group hover:glass-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Factory className="text-accent" size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-4">Domain Expertise</h3>
              <p className="text-secondary text-base leading-relaxed">
                25 years in bitumen means we know exactly what operators need before they ask for
                it.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-8 rounded-2xl group hover:glass-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="text-accent" size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-4">Built-In Client Network</h3>
              <p className="text-secondary text-base leading-relaxed">
                You talk to real plant operators, supply chain heads, and logistics managers every
                day — we build for them directly.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass p-8 rounded-2xl group hover:glass-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="text-accent" size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-4">Full-Stack Delivery</h3>
              <p className="text-secondary text-base leading-relaxed">
                Design → code → deploy → support. One team, no handoffs, no excuses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaStrip
        heading="Need a Custom Solution?"
        subtext="Tell us what you're building. We'll tell you how to get there."
        buttonLabel="Request a Product"
        buttonHref="/contact"
      />
    </>
  );
}
