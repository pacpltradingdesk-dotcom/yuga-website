// app/about/page.tsx
"use client";

import PageHeader from "@/components/PageHeader";
import CtaStrip from "@/components/CtaStrip";
import CareerTimeline from "@/components/CareerTimeline";
import { COMPANY, KEY_CREDENTIALS, INDUSTRY_NETWORK } from "@/lib/company-data";
import { motion } from "framer-motion";
import { Award, Briefcase, Users, Map, Target, ShieldCheck } from "lucide-react";

const STATS = [
  { value: COMPANY.plantsBuilt, label: "Plants Built", icon: <Briefcase /> },
  { value: `${COMPANY.yearsExperience}+`, label: "Years Experience", icon: <Award /> },
  { value: COMPANY.industryContacts.toLocaleString(), label: "Industry Contacts", icon: <Users /> },
  { value: COMPANY.statesNetwork, label: "States Network", icon: <Map /> },
];

const NETWORK_ITEMS = [
  { label: "Road Contractors", value: INDUSTRY_NETWORK.contractors },
  { label: "Bitumen Traders", value: INDUSTRY_NETWORK.traders },
  { label: "Importers", value: INDUSTRY_NETWORK.importers },
  { label: "Transporters", value: INDUSTRY_NETWORK.transporters },
  { label: "Manufacturers", value: INDUSTRY_NETWORK.manufacturers },
  { label: "Decanters", value: INDUSTRY_NETWORK.decanters },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About YUGA"
        subtitle="A 25-year journey across India's bitumen industry — 10 plants built, 4,452 live contacts, and the country's only end-to-end bio-bitumen consultant."
        breadcrumb="About"
        bgImage="/assets/road-construction.png"
      />

      {/* Bio / Hero section */}
      <section className="bg-background py-24 px-6 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-eco/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Biography & Info */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  <span className="w-4 h-px bg-accent/50" />
                  Leadership Profile
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-primary font-extrabold mb-3 tracking-tight">
                  {COMPANY.owner}
                </h2>
                <p className="text-secondary text-xl mb-6">Founder & Principal Consultant</p>

                {/* Award badge */}
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent rounded-full px-4 py-2 text-sm font-bold mb-6">
                  <Target size={16} />
                  {COMPANY.awards}
                </div>

                {/* Bio Details */}
                <p className="text-secondary text-lg leading-relaxed mb-6">
                  Prince Pratap Shah is a pioneer in the Indian bitumen industry. Over a stellar 25-year career, he has successfully built and commissioned 10 processing plants, decanter systems, and warehousing operations across Mangalore, Panvel, Vadodara, Kutch, and Mathura.
                </p>
                <p className="text-secondary text-base leading-relaxed mb-8">
                  As the former Founder and MD of BSE-listed Omnipotent Industries (1.2L MT capacity), he leads India's only consulting practice offering complete A-to-Z setup for bio-bitumen plants, from raw material procurement to commercial production.
                </p>
                
                <div className="bg-background border border-border rounded-2xl p-5 mb-10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Education Credentials</p>
                  <p className="text-primary text-sm leading-relaxed">{COMPANY.education}</p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Premium Action Photo Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full max-w-md relative group"
              >
                {/* Glow border background */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-accent to-eco rounded-2xl opacity-20 blur group-hover:opacity-45 transition duration-500" />
                
                {/* Image Card */}
                <div className="relative bg-[#0F172A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img 
                      src="/assets/consulting-meeting.png" 
                      alt="Prince Pratap Shah Refinery Consulting" 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent pointer-events-none" />
                  
                  {/* Caption */}
                  <div className="p-5 border-t border-white/5 bg-[#0B0F19]/90 backdrop-blur-sm">
                    <p className="text-xs text-accent font-bold tracking-widest uppercase mb-1">Active Sourcing & Engineering</p>
                    <p className="text-white text-sm font-medium">Prince Pratap Shah conducting refinery plant blueprint review and supplier meetings.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats section (split out) */}
          <div className="mt-20 border-t border-border pt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map(({ value, label, icon }, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  key={label}
                  className="glass p-6 rounded-2xl text-center group hover:glass-hover transition-all duration-300"
                >
                  <div className="flex justify-center mb-4 text-accent/50 group-hover:text-accent transition-colors">
                    {icon}
                  </div>
                  <p className="font-display text-4xl font-black text-primary mb-2">{value}</p>
                  <p className="text-secondary text-xs uppercase tracking-wider font-semibold">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline section */}
      <section className="bg-surface relative py-24 px-6 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-eco/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="flex items-center gap-2 text-eco text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-4 h-px bg-eco/50" />
            Career
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-primary font-extrabold mb-16 tracking-tight">
            25 Years <span className="text-gradient">Across India</span>
          </h2>
          <CareerTimeline />
        </div>
      </section>

      {/* Credentials section */}
      <section className="bg-background py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-4 h-px bg-accent/50" />
            Credentials
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-primary font-extrabold mb-12 tracking-tight">
            Verified Track Record
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {KEY_CREDENTIALS.map((credential, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="glass border-l-4 border-l-accent rounded-xl p-6 hover:glass-hover transition-all duration-300 flex items-start gap-4"
              >
                <ShieldCheck className="text-accent shrink-0 mt-0.5" size={20} />
                <p className="text-secondary text-base leading-relaxed">{credential}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network section */}
      <section className="bg-surface py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        
        {/* Animated SVG Network Map Background */}
        <div className="absolute inset-0 opacity-[0.06] lg:opacity-[0.09] flex items-center justify-center pointer-events-none z-0">
          <svg 
            viewBox="0 0 800 600" 
            className="w-full max-w-4xl h-auto"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Map dots representing network nodes */}
            <circle cx="250" cy="420" r="4" fill="#F59E0B" /> {/* Mangalore */}
            <circle cx="340" cy="310" r="5" fill="#10B981" /> {/* Panvel */}
            <circle cx="300" cy="270" r="5" fill="#F59E0B" /> {/* Vadodara */}
            <circle cx="210" cy="250" r="5" fill="#10B981" /> {/* Kutch */}
            <circle cx="380" cy="180" r="5" fill="#F59E0B" /> {/* Mathura */}
            
            <circle cx="500" cy="320" r="4" fill="#6B7280" /> {/* Kolkata */}
            <circle cx="350" cy="480" r="4" fill="#6B7280" /> {/* Chennai */}
            <circle cx="360" cy="150" r="4" fill="#6B7280" /> {/* Delhi */}
            
            {/* Sourcing links */}
            <path d="M250 420 L300 270" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4,4" />
            <path d="M340 310 L300 270" stroke="#10B981" strokeWidth="1.5" />
            <path d="M210 250 L300 270" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4,4" />
            <path d="M300 270 L380 180" stroke="#F59E0B" strokeWidth="1.5" />
            <path d="M380 180 L360 150" stroke="#6B7280" strokeWidth="1.5" strokeDasharray="4,4" />
            <path d="M300 270 L350 480" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="6,6" />
            <path d="M300 270 L500 320" stroke="#6B7280" strokeWidth="1.5" strokeDasharray="6,6" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <p className="flex items-center justify-center gap-2 text-eco text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-4 h-px bg-eco/50" />
            Network
            <span className="w-4 h-px bg-eco/50" />
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-primary font-extrabold mb-6 tracking-tight text-center">
            Industry <span className="text-gradient">Network</span>
          </h2>
          <p className="text-secondary text-center max-w-2xl mx-auto mb-16 leading-relaxed text-lg">
            <span className="text-primary font-bold">{INDUSTRY_NETWORK.total.toLocaleString()}</span> live industry contacts spanning road construction, trading, importing, and logistics across India.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {NETWORK_ITEMS.map(({ label, value }, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={label}
                className="glass p-8 rounded-2xl text-center group hover:glass-hover transition-all duration-300"
              >
                <p className="font-display text-4xl font-extrabold text-primary mb-2 tracking-tight group-hover:text-eco transition-colors">
                  {value.toLocaleString()}
                </p>
                <p className="text-secondary text-sm uppercase tracking-widest font-semibold">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        heading="Work With India's Best Bio-Bitumen Consultant"
        subtext="25 years of plant-building experience, 4,452 live industry contacts — ready to work for your project."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
