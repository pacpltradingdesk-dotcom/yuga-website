// app/it-products/page.tsx
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ItProductTabs from "@/components/ItProductTabs";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "IT Products — PACPL",
  description:
    "Custom software solutions built for the bitumen and industrial sector — designed by practitioners who understand your operations.",
};

export default function ItProductsPage() {
  return (
    <>
      <PageHeader
        title="IT Products"
        subtitle="Custom software built for the bitumen and industrial sector"
        breadcrumb="IT Products"
      />

      {/* Tab Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Our Products
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-4">
            Software Built for the Bitumen Industry
          </h2>
          <p className="text-secondary max-w-2xl mb-12 leading-relaxed">
            Domain-specific tools engineered for the unique workflows of bitumen plants, supply
            chains, and industrial operations — not generic software retrofitted to your process.
          </p>
          <ItProductTabs />
        </div>
      </section>

      {/* Why PACPL for IT Section */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Why Us
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-4">
            Built by Practitioners, Not Generalists
          </h2>
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {/* Card 1 */}
            <div className="bg-white border border-border rounded-2xl p-6">
              <div className="text-3xl mb-3">🏭</div>
              <h3 className="font-bold text-primary mb-2">Domain Expertise</h3>
              <p className="text-secondary text-sm leading-relaxed">
                25 years in bitumen means we know exactly what operators need before they ask for
                it.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-border rounded-2xl p-6">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="font-bold text-primary mb-2">Built-In Client Network</h3>
              <p className="text-secondary text-sm leading-relaxed">
                You talk to real plant operators, supply chain heads, and logistics managers every
                day — we build for them directly.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-border rounded-2xl p-6">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-primary mb-2">Full-Stack Delivery</h3>
              <p className="text-secondary text-sm leading-relaxed">
                Design → code → deploy → support. One team, no handoffs, no excuses.
              </p>
            </div>
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
