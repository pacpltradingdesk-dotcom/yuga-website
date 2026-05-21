import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import {
  PYROLYSIS_FEEDSTOCKS,
  PYROLYSIS_OUTPUTS,
  PYROLYSIS_PRODUCTS,
} from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Pyrolysis Technology — YUGA",
  description:
    "How pyrolysis converts biomass and waste into bio-oil, bio-char, and syngas. India's first commercially produced bio-bitumen technology explained.",
  openGraph: {
    title: "Pyrolysis Technology — YUGA",
    description: "Deep dive into the pyrolysis process behind India's bio-bitumen revolution.",
    type: "website",
  },
};

const PROCESS_STEPS = [
  { step: "01", title: "Feedstock Collection", desc: "Agro-waste collected within 50–100 km radius from farms" },
  { step: "02", title: "Pelletization", desc: "Biomass processed into uniform high-density pellets" },
  { step: "03", title: "Pyrolysis Reactor", desc: "Heated at 450–550°C in absence of oxygen — thermal decomposition" },
  { step: "04", title: "Product Separation", desc: "Bio-oil, bio-char, and syngas separated and collected" },
  { step: "05", title: "Bio-Oil Refining", desc: "Oxidation at 230–250°C upgrades bio-oil for bitumen blending" },
  { step: "06", title: "VG-30 Blending", desc: "15–30% bio-oil blended with conventional petroleum bitumen" },
];

const MARKET_STATS = [
  { label: "Bio-Bitumen Launch", value: "Jan 2026", note: "India first country globally (CSIR-CRRI)" },
  { label: "Conventional Bitumen Replaceable", value: "15–30%", note: "Per road project" },
  { label: "Annual Savings Potential", value: "Rs 4,500 Cr+", note: "On bitumen import bill" },
  { label: "Plants Needed (5–7 Years)", value: "130–216", note: "Across India" },
  { label: "India Bitumen Import Bill", value: "Rs 25,000 Cr/yr", note: "49% imported — target: full replacement" },
];

const GOVT_POLICIES = [
  "CSIR-CRRI technology transfer to 14 companies — Jan 2026",
  "Ministry of Road Transport & Highways mandate for bio-bitumen trials",
  "MNRE Waste-to-Energy targets — 5,000 MW potential",
  "SATAT scheme for BioCNG from pyrolysis syngas",
  "EPR regulations mandating formal tyre recycling — guaranteed feedstock",
  "Swachh Bharat Mission supporting Waste-to-Energy conversion",
];

export default function PyrolysisPage() {
  return (
    <>
      <PageHeader
        title="Pyrolysis Technology"
        subtitle="How biomass and waste become India's next-generation road material"
        breadcrumb="Pyrolysis"
      />

      {/* Process Flow */}
      <section className="bg-brand-navy py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            The Process
          </p>
          <h2 className="font-display text-3xl text-white text-center mb-12">
            From Waste to Road — 6 Steps
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="bg-brand-card p-6 border-l-4 border-brand-gold">
                <p className="font-display text-3xl font-bold text-brand-gold mb-3">{step.step}</p>
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedstocks */}
      <section className="bg-brand-slate py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            Raw Materials
          </p>
          <h2 className="font-display text-3xl text-white text-center mb-12">
            What Goes In
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {PYROLYSIS_FEEDSTOCKS.map((f) => (
              <div key={f.name} className="bg-brand-card border-t-2 border-brand-gold p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl" aria-hidden="true">{f.icon}</span>
                  <h3 className="text-white font-display font-semibold">{f.name}</h3>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed mb-3">{f.description}</p>
                <p className="text-brand-gold text-xs font-semibold">{f.indiaVolume}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outputs */}
      <section className="bg-brand-navy py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            Products
          </p>
          <h2 className="font-display text-3xl text-white text-center mb-12">
            What Comes Out
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PYROLYSIS_OUTPUTS.map((o) => (
              <div key={o.name} className="bg-brand-card border-t-2 border-brand-gold p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl" aria-hidden="true">{o.icon}</span>
                  <h3 className="text-white font-display font-semibold text-base">{o.name}</h3>
                </div>
                <p className="text-brand-gold text-xs font-semibold mb-1">{o.yieldRange}</p>
                <ul className="space-y-1 mt-3">
                  {o.uses.slice(0, 3).map((u) => (
                    <li key={u} className="flex gap-2 text-brand-muted text-xs">
                      <span className="text-brand-gold shrink-0" aria-hidden="true">→</span>
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="bg-brand-slate py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            India Market
          </p>
          <h2 className="font-display text-3xl text-white text-center mb-12">
            The Opportunity in Numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MARKET_STATS.map((stat) => (
              <div key={stat.label} className="bg-brand-card p-6 text-center">
                <p className="font-display text-3xl font-bold text-brand-gold mb-1">{stat.value}</p>
                <p className="text-white font-semibold text-sm mb-1">{stat.label}</p>
                <p className="text-brand-muted text-xs">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Govt Policy */}
      <section className="bg-brand-navy py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            Policy Tailwinds
          </p>
          <h2 className="font-display text-3xl text-white text-center mb-12">
            Government Support
          </h2>
          <ul className="space-y-4">
            {GOVT_POLICIES.map((policy, i) => (
              <li key={policy} className="flex gap-4 bg-brand-card border-l-4 border-brand-gold p-5">
                <span className="text-brand-gold font-bold font-display text-lg shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-white leading-relaxed">{policy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Value-added Products */}
      <section className="bg-brand-slate py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            High-Value Outputs
          </p>
          <h2 className="font-display text-3xl text-white text-center mb-12">
            Value-Added Products
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {PYROLYSIS_PRODUCTS.map((p) => (
              <div key={p.name} className="bg-brand-card border-t-2 border-brand-gold p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl" aria-hidden="true">{p.icon}</span>
                  <h3 className="text-white font-display font-semibold">{p.name}</h3>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed mb-3">{p.description}</p>
                <div className="bg-brand-navy border-l-4 border-brand-gold px-4 py-2">
                  <p className="text-brand-gold text-xs font-semibold">{p.stat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-gold py-14 px-6 text-center">
        <h2 className="font-display text-3xl text-brand-navy font-bold mb-4">
          Ready to Build Your Pyrolysis Plant?
        </h2>
        <a
          href="/contact"
          className="inline-block bg-brand-navy text-white font-bold px-8 py-4 hover:bg-brand-slate transition-colors text-sm uppercase tracking-wider"
        >
          Talk to an Expert
        </a>
      </section>
    </>
  );
}
