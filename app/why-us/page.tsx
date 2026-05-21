import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WhyNowSection from "@/components/WhyNowSection";
import NetworkGrid from "@/components/NetworkGrid";
import { PPS_STRENGTHS } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Why Choose YUGA — Bio-Bitumen Consulting",
  description:
    "25 years experience, 4,452 industry contacts, international VG-30 supply contract. Here's why YUGA is India's most trusted bio-bitumen consultant.",
  openGraph: {
    title: "Why Choose YUGA",
    description: "The unmatched advantages of India's most experienced bio-bitumen consultant.",
    type: "website",
  },
};

const STRENGTH_ICONS: Record<string, string> = {
  "25 years bitumen industry experience — 10 plants built": "🏭",
  "4,452 live industry contacts (contractors, traders, importers)": "🤝",
  "International VG-30 supply contract (2.4 Lakh MT/yr, Getka USA-Iraq)": "🌍",
  "Only consultant offering end-to-end: site selection to sales network": "🔗",
  "BSE-listed founder background (Omnipotent Industries)": "📈",
  "5 product types expertise (Emulsion/Blown/CRMB/PMB/VG30)": "🗺️",
  "17-state distribution network — first of its kind": "🏆",
};

export default function WhyUsPage() {
  return (
    <>
      <PageHeader
        title="Why Choose YUGA?"
        subtitle="The only consultant in India offering end-to-end bio-bitumen plant setup with a proven buyer network"
        breadcrumb="Why Us"
      />

      {/* Strengths grid */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">Our Advantages</p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold text-center mb-12">What Sets YUGA Apart</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PPS_STRENGTHS.map((strength) => (
              <div key={strength} className="bg-white border border-border border-t-4 border-t-accent rounded-2xl p-6 flex gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <span className="text-3xl shrink-0" aria-hidden="true">{STRENGTH_ICONS[strength] ?? "✅"}</span>
                <p className="text-secondary leading-relaxed text-sm">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Network */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">Live Industry Network</p>
          <h2 className="font-display text-3xl text-primary font-bold text-center mb-4">4,452 Verified Contacts</h2>
          <p className="text-secondary text-center max-w-xl mx-auto mb-10">
            Built over 25 years — contractors, traders, importers, and manufacturers across 17 states.
          </p>
          <div className="max-w-2xl mx-auto">
            <NetworkGrid />
          </div>
        </div>
      </section>

      {/* GETKA Highlight */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-4xl mx-auto border-2 border-accent rounded-2xl p-10 text-center bg-white shadow-sm">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">International Supply Contract</p>
          <h2 className="font-display text-3xl text-primary font-bold mb-4">GETKA Energy Trading LLC</h2>
          <p className="text-secondary mb-2">Getka Energy Trading LLC, USA (Iraq Origin)</p>
          <p className="text-4xl font-extrabold text-accent mb-2">2.4 Lakh MT/Year</p>
          <p className="text-secondary text-sm">VG-30 International Supply Contract</p>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-6" />
        </div>
      </section>

      <WhyNowSection />
    </>
  );
}
