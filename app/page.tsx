import type { Metadata } from "next";
import HeroVideo from "@/components/HeroVideo";
import StatsBar from "@/components/StatsBar";
import WhyNowSection from "@/components/WhyNowSection";
import ServiceCard from "@/components/ServiceCard";
import { FOUR_STAGES, PYROLYSIS_FEEDSTOCKS } from "@/lib/company-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YUGA — India's Bio-Bitumen Consulting Leader",
  description:
    "India's leading bio-bitumen plant setup and consulting firm. 25 years experience, 10 plants built, 4,452 industry contacts. Complete A-to-Z service.",
  openGraph: {
    title: "YUGA — India's Bio-Bitumen Consulting Leader",
    description: "End-to-end bio-bitumen plant setup consulting. From site selection to commercial production.",
    type: "website",
  },
};

const SERVICE_VERTICALS = [
  {
    icon: "🏭",
    title: "Bio-Bitumen Consulting",
    description: "End-to-end plant setup — site selection, regulatory clearances, machinery, commissioning, and buyer network access.",
    href: "/services#bio-bitumen",
  },
  {
    icon: "📋",
    title: "Project Management (PMC)",
    description: "Full PMC scope from feasibility report to plant handover — with optional monthly retainer support.",
    href: "/services#pmc",
  },
  {
    icon: "💻",
    title: "IT Solutions",
    description: "Custom portals, dashboards, and supply chain tools built specifically for the bitumen and industrial sector.",
    href: "/services#it",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <StatsBar />

      {/* Services Overview */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold text-center mb-12">
            Three Verticals, One Vision
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICE_VERTICALS.map(({ icon, title, description, href }) => (
              <div
                key={title}
                className="bg-white/70 backdrop-blur-md border border-border border-t-4 border-t-accent rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-3xl" aria-hidden="true">{icon}</span>
                <h3 className="font-display text-lg text-primary font-bold">{title}</h3>
                <p className="text-secondary text-sm leading-relaxed flex-1">{description}</p>
                <Link href={href} className="text-accent text-sm font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <WhyNowSection />

      {/* Pyrolysis Teaser */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            The Technology
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold text-center mb-4">
            How Pyrolysis Works
          </h2>
          <p className="text-secondary text-center max-w-xl mx-auto mb-12 leading-relaxed">
            Four integrated stages convert agro-waste into commercial bio-bitumen for India's road network.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FOUR_STAGES.map((stage) => (
              <ServiceCard key={stage.stage} stage={stage} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/pyrolysis"
              className="inline-block bg-white text-accent font-semibold px-6 py-3 rounded-xl border border-accent-border hover:bg-accent-light transition-all duration-200 text-sm"
            >
              Deep Dive into Pyrolysis →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-accent py-16 px-6 text-center">
        <h2 className="font-display text-3xl text-white font-bold mb-4">
          Ready to Build Your Plant?
        </h2>
        <p className="text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
          Join 10 successful plant operators who trusted YUGA for their bio-bitumen journey.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-accent font-bold px-8 py-4 rounded-xl hover:bg-accent-light transition-colors text-sm uppercase tracking-wider"
        >
          Start Your Project
        </Link>
      </section>
    </>
  );
}
