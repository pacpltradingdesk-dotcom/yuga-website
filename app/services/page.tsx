import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { FOUR_STAGES, CONSULTING_SERVICES, PMC_SERVICES, IT_SERVICES } from "@/lib/company-data";
import Link from "next/link";

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
        className="sticky top-[72px] z-40 bg-white border-b border-border"
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
              className="shrink-0 py-4 text-sm font-semibold text-secondary hover:text-accent border-b-2 border-transparent hover:border-accent transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Bio-Bitumen Section */}
      <section id="bio-bitumen" className="bg-surface py-20 px-6 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Service 01</p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-4">
            Bio-Bitumen Plant Consulting
          </h2>
          <p className="text-secondary max-w-2xl mb-12 leading-relaxed">
            End-to-end consulting covering all four stages of a bio-bitumen plant — from raw material
            procurement to market access. The only consultant in India offering this complete scope.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {FOUR_STAGES.map((stage) => (
              <ServiceCard key={stage.stage} stage={stage} />
            ))}
          </div>
          <h3 className="font-display text-2xl text-primary font-bold mb-8">What&apos;s Included</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(CONSULTING_SERVICES).map(([category, items]) => (
              <div key={category} className="bg-white border border-border rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                <h4 className="text-accent font-semibold mb-4 text-sm uppercase tracking-widest">{category}</h4>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-secondary text-sm">
                      <span className="text-accent mt-0.5 shrink-0" aria-hidden="true">→</span>
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
      <section id="pmc" className="bg-white py-20 px-6 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Service 02</p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-4">
            Project Management Consulting
          </h2>
          <p className="text-secondary max-w-2xl mb-12 leading-relaxed">
            Full PMC scope from feasibility report to plant commissioning and handover — with optional
            retainer support post-launch.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {PMC_SERVICES.map((service) => (
              <div key={service.category} className="bg-white border border-border border-l-4 border-l-accent rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl" aria-hidden="true">{service.icon}</span>
                  <h3 className="text-primary font-bold">{service.category}</h3>
                </div>
                <p className="text-secondary text-sm leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex gap-2 text-secondary text-xs">
                      <span className="text-accent shrink-0" aria-hidden="true">→</span>
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
      <section id="it" className="bg-surface py-20 px-6 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Service 03</p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-4">IT Solutions</h2>
          <p className="text-secondary max-w-2xl mb-12 leading-relaxed">
            Custom software built for the bitumen and industrial sector — portals, dashboards, and supply chain tools.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {IT_SERVICES.map((service) => (
              <div key={service.name} className="bg-white border border-border border-t-4 border-t-accent rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl" aria-hidden="true">{service.icon}</span>
                  <h3 className="text-primary font-bold">{service.name}</h3>
                </div>
                <p className="text-secondary text-sm leading-relaxed mb-3">{service.description}</p>
                <p className="text-secondary/70 text-xs italic mb-4 border-l-2 border-accent-border pl-3">
                  {service.example}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-accent-light text-accent border border-accent-border px-2 py-1 rounded-full">
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
      <section className="bg-accent py-14 px-6 text-center">
        <h2 className="font-display text-3xl text-white font-bold mb-4">Which Service Do You Need?</h2>
        <p className="text-white/80 max-w-lg mx-auto mb-8">
          Tell us about your project and we&apos;ll recommend the right scope.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-accent font-bold px-8 py-4 rounded-xl hover:bg-accent-light transition-colors text-sm uppercase tracking-wider"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
