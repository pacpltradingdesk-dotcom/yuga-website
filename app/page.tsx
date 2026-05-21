import type { Metadata } from "next";
import HeroVideo from "@/components/HeroVideo";
import StatsBar from "@/components/StatsBar";
import WhyNowSection from "@/components/WhyNowSection";
import { FOUR_STAGES } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "YUGA — Bio-Modified Bitumen Plant Setup & Consulting",
  description:
    "India's leading bio-bitumen consultant. 25 years experience, 10 plants built, 4,452 verified industry contacts. End-to-end plant setup from site selection to commercial production.",
  openGraph: {
    title: "YUGA — Bio-Modified Bitumen Plant Setup & Consulting",
    description:
      "India's leading bio-bitumen consultant. Complete A-to-Z plant setup service.",
    type: "website",
  },
};

const SERVICES = [
  {
    title: "Bio-Bitumen Consulting",
    desc: "Complete A-to-Z plant setup: site selection, machinery procurement, regulatory clearances, commissioning, and buyer network access.",
    icon: "🏭",
    href: "/services#bio-bitumen",
  },
  {
    title: "Project Management",
    desc: "Full PMC from feasibility report to plant handover — civil supervision, equipment procurement, and retainer support.",
    icon: "📋",
    href: "/services#pmc",
  },
  {
    title: "IT Solutions",
    desc: "Custom portals, dashboards, and supply chain tools built for the bitumen and industrial sector.",
    icon: "💻",
    href: "/services#it",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroVideo />

      <StatsBar />

      {/* Services Overview */}
      <section className="bg-brand-slate py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-4">
            Three Service Verticals
          </h2>
          <p className="text-brand-muted text-center max-w-2xl mx-auto mb-12">
            End-to-end support for bio-modified bitumen plant setup — from feasibility to commercial production.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <a
                key={s.title}
                href={s.href}
                className="bg-brand-card border-t-2 border-brand-gold p-6 flex flex-col gap-4 hover:bg-[#243656] transition-colors group"
              >
                <span className="text-3xl">{s.icon}</span>
                <h3 className="font-display text-xl text-white group-hover:text-brand-gold transition-colors">
                  {s.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed flex-1">{s.desc}</p>
                <span className="text-brand-gold text-sm font-semibold">Learn More →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <WhyNowSection />

      {/* Pyrolysis Teaser */}
      <section className="bg-brand-navy py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
              The Technology
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
              What is Pyrolysis?
            </h2>
            <p className="text-brand-muted leading-relaxed mb-8">
              Pyrolysis converts biomass and waste into bio-oil, bio-char, and syngas through thermal decomposition in
              the absence of oxygen. The bio-oil is refined and blended with conventional VG-30 bitumen to produce
              India&apos;s next-generation road material.
            </p>
            <a
              href="/pyrolysis"
              className="inline-block bg-brand-gold text-brand-navy font-bold px-6 py-3 hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
            >
              Explore the Technology →
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {FOUR_STAGES.map((stage) => (
              <div key={stage.stage} className="bg-brand-card border-l-2 border-brand-gold p-5">
                <span className="text-2xl mb-3 block">{stage.icon}</span>
                <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-1">
                  Stage {stage.stage}
                </p>
                <p className="text-white text-sm font-semibold leading-snug">{stage.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-brand-gold py-16 px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-brand-navy font-bold mb-4">
          Ready to Build Your Bio-Bitumen Plant?
        </h2>
        <p className="text-brand-navy/80 max-w-xl mx-auto mb-8 leading-relaxed">
          From feasibility to commercial production — we handle everything. India&apos;s most experienced
          bio-bitumen consultant.
        </p>
        <a
          href="/contact"
          className="inline-block bg-brand-navy text-white font-bold px-8 py-4 hover:bg-brand-slate transition-colors text-sm uppercase tracking-wider"
        >
          Start Your Project
        </a>
      </section>
    </>
  );
}
