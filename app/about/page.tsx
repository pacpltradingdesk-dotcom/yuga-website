import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import StatsBar from "@/components/StatsBar";
import TimelineSection from "@/components/TimelineSection";
import { COMPANY, KEY_CREDENTIALS } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "About — YUGA",
  description:
    "Meet Prince Pratap Shah — 25 years in the bitumen industry, 10 plants built across India. Founder of YUGA, India's leading bio-bitumen consulting firm.",
  openGraph: {
    title: "About — YUGA",
    description: "Meet the founder behind India's most experienced bio-bitumen consultancy.",
    type: "website",
  },
};

const CREDENTIAL_ICONS = ["📈", "🌍", "🔧", "🏭", "🗺️", "🏆", "🤝", "🏛️"];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About YUGA"
        subtitle="India's most experienced bio-bitumen plant setup consultant"
        breadcrumb="About"
      />

      {/* Founder Bio */}
      <section className="bg-brand-navy py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-56 h-56 border-4 border-brand-gold bg-brand-card flex items-center justify-center">
              <span className="text-7xl">👤</span>
            </div>
          </div>
          <div>
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Founder &amp; Managing Director
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">{COMPANY.owner}</h2>
            <p className="text-brand-muted leading-relaxed mb-4">{COMPANY.experience}.</p>
            <p className="text-brand-muted leading-relaxed mb-6">{COMPANY.education}.</p>
            <div className="border-l-4 border-brand-gold pl-4 py-3 bg-brand-card mb-8">
              <p className="text-white font-medium text-sm">{COMPANY.awards}</p>
            </div>
            <a
              href="/contact"
              className="inline-block bg-brand-gold text-brand-navy font-bold px-6 py-3 hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      <StatsBar />

      <TimelineSection />

      {/* Credentials */}
      <section className="bg-brand-navy py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            Track Record
          </p>
          <h2 className="font-display text-3xl text-white text-center mb-12">Key Credentials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {KEY_CREDENTIALS.map((cred, i) => (
              <div key={i} className="bg-brand-card border-t-2 border-brand-gold p-6">
                <span className="text-3xl mb-4 block">{CREDENTIAL_ICONS[i] ?? "✅"}</span>
                <p className="text-brand-muted text-sm leading-relaxed">{cred}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
