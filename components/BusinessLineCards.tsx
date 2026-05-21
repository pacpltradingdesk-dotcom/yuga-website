// components/BusinessLineCards.tsx
import Link from "next/link";

export default function BusinessLineCards() {
  return (
    <section className="bg-surface py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">
          Two Business Lines
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-primary font-bold text-center mb-12">
          Consulting & Technology — One Partner
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Consulting card */}
          <div className="bg-white rounded-2xl border border-border border-t-4 border-t-accent p-8 shadow-sm">
            <span className="text-4xl mb-4 block" aria-hidden="true">🏭</span>
            <h3 className="font-display text-2xl text-primary font-bold mb-3">
              Bio-Bitumen Consulting
            </h3>
            <ul className="space-y-2 mb-6">
              {[
                "End-to-end plant setup — site to sales",
                "Project Management (PMC) from DPR to handover",
                "Access to 4,452-contact buyer network",
              ].map((point) => (
                <li key={point} className="flex gap-2 text-secondary text-sm">
                  <span className="text-accent mt-0.5 shrink-0" aria-hidden="true">→</span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/consulting"
              className="inline-block bg-accent text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-hover transition-colors text-sm"
            >
              Learn More →
            </Link>
          </div>

          {/* IT Products card */}
          <div className="bg-white rounded-2xl border border-border border-t-4 border-t-accent p-8 shadow-sm">
            <span className="text-4xl mb-4 block" aria-hidden="true">💻</span>
            <h3 className="font-display text-2xl text-primary font-bold mb-3">
              IT Products
            </h3>
            <ul className="space-y-2 mb-6">
              {[
                "Custom portals, dashboards and mobile apps",
                "Built specifically for the bitumen & industrial sector",
                "From plant management to market intelligence",
              ].map((point) => (
                <li key={point} className="flex gap-2 text-secondary text-sm">
                  <span className="text-accent mt-0.5 shrink-0" aria-hidden="true">→</span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/it-products"
              className="inline-block bg-accent text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-hover transition-colors text-sm"
            >
              View Products →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
