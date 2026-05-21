import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { FOUR_STAGES, CONSULTING_SERVICES, PMC_SERVICES, IT_SERVICES } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Services — YUGA",
  description:
    "Bio-bitumen plant consulting, project management (PMC), and IT solutions for the industrial bitumen sector. End-to-end A-to-Z service.",
  openGraph: {
    title: "Services — YUGA",
    description: "Three service verticals: Bio-Bitumen Consulting, PMC, and IT Solutions.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Three verticals built around one mission — making bio-bitumen accessible to every Indian investor"
        breadcrumb="Services"
      />

      {/* Sticky tab nav */}
      <nav
        className="sticky top-[72px] z-40 bg-brand-slate border-b border-brand-gold/30"
        aria-label="Service sections"
      >
        <div className="max-w-7xl mx-auto px-6 flex gap-8 overflow-x-auto">
          {[
            { href: "#bio-bitumen", label: "Bio-Bitumen Consulting" },
            { href: "#pmc", label: "Project Management" },
            { href: "#it", label: "IT Solutions" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="shrink-0 py-4 text-sm font-semibold text-brand-muted hover:text-brand-gold border-b-2 border-transparent hover:border-brand-gold transition-colors scroll-mt-36"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Bio-Bitumen Section */}
      <section id="bio-bitumen" className="bg-brand-navy py-20 px-6 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Service 01
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Bio-Bitumen Plant Consulting
          </h2>
          <p className="text-brand-muted max-w-2xl mb-12 leading-relaxed">
            End-to-end consulting covering all four stages of a bio-bitumen plant — from raw material
            procurement to market access. The only consultant in India offering this complete scope.
          </p>

          {/* 4 Stages */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {FOUR_STAGES.map((stage) => (
              <ServiceCard key={stage.stage} stage={stage} />
            ))}
          </div>

          {/* Consulting Service Categories */}
          <h3 className="font-display text-2xl text-white mb-8">What&apos;s Included</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(CONSULTING_SERVICES).map(([category, items]) => (
              <div key={category} className="bg-brand-card p-6">
                <h4 className="text-brand-gold font-semibold mb-4 text-sm uppercase tracking-widest">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-brand-muted text-sm">
                      <span className="text-brand-gold mt-0.5 shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PMC Section */}
      <section id="pmc" className="bg-brand-slate py-20 px-6 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Service 02
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Project Management Consulting
          </h2>
          <p className="text-brand-muted max-w-2xl mb-12 leading-relaxed">
            Full PMC scope from feasibility report to plant commissioning and handover — with optional
            retainer support post-launch.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {PMC_SERVICES.map((service, i) => (
              <div key={i} className="bg-brand-card border-l-2 border-brand-gold p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="text-white font-semibold font-display">{service.category}</h3>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.deliverables.map((d, j) => (
                    <li key={j} className="flex gap-2 text-brand-muted text-xs">
                      <span className="text-brand-gold shrink-0">→</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Solutions Section */}
      <section id="it" className="bg-brand-navy py-20 px-6 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Service 03
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">IT Solutions</h2>
          <p className="text-brand-muted max-w-2xl mb-12 leading-relaxed">
            Custom software built for the bitumen and industrial sector — portals, dashboards, and supply
            chain tools.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {IT_SERVICES.map((service, i) => (
              <div key={i} className="bg-brand-card border-t-2 border-brand-gold p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="text-white font-semibold font-display">{service.name}</h3>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed mb-3">{service.description}</p>
                <p className="text-brand-muted/70 text-xs italic mb-4 border-l-2 border-brand-gold/30 pl-3">
                  {service.example}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-brand-navy text-brand-gold border border-brand-gold/30 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-gold py-14 px-6 text-center">
        <h2 className="font-display text-3xl text-brand-navy font-bold mb-4">
          Which Service Do You Need?
        </h2>
        <p className="text-brand-navy/80 max-w-lg mx-auto mb-8">
          Tell us about your project and we&apos;ll recommend the right scope.
        </p>
        <a
          href="/contact"
          className="inline-block bg-brand-navy text-white font-bold px-8 py-4 hover:bg-brand-slate transition-colors text-sm uppercase tracking-wider"
        >
          Get in Touch
        </a>
      </section>
    </>
  );
}
