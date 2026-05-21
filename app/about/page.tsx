import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import StatsBar from "@/components/StatsBar";
import TimelineSection from "@/components/TimelineSection";
import { COMPANY, KEY_CREDENTIALS } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "About YUGA — Prince Pratap Shah",
  description:
    "Meet the founder of YUGA — Prince Pratap Shah. 25 years in the bitumen industry, 10 plants built, BSE-listed entrepreneur.",
  openGraph: {
    title: "About YUGA",
    description: "25 years of bitumen expertise behind India's leading bio-bitumen consultant.",
    type: "website",
  },
};

const CREDENTIAL_ICONS: Record<string, string> = {
  "BSE-Listed Founder — Omnipotent Industries (1.2L MT, 11 JVs)": "📈",
  "Int'l Import Contracts — 2.4 Lakh MT/yr VG-30 (Iraq/USA)": "🌍",
  "Proven Consultant — 2 paid projects (Teknobit 2016 & 2024)": "✅",
  "5 Product Types — Emulsion/Blown/CRMB/PMB/VG30": "⚗️",
  "17-State Distribution — PAN India network, first of its kind": "🗺️",
  "Pride of India Award — Best Fast-Growing Business 2021": "🏆",
  "Iran Consulate — Direct meeting for bitumen sourcing": "🤝",
  "Bitumen India Forum — Founder Member": "🏛️",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About YUGA"
        subtitle="India's most experienced bio-bitumen consultant — built on 25 years of hands-on industry expertise"
        breadcrumb="About"
      />

      {/* Founder Bio */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-48 h-48 rounded-full bg-accent-light border-4 border-accent flex items-center justify-center mx-auto md:mx-0 mb-6">
              <span className="text-6xl" aria-hidden="true">👤</span>
            </div>
            <h2 className="font-display text-3xl text-primary font-bold mb-1">{COMPANY.owner}</h2>
            <p className="text-accent font-semibold text-sm mb-4 uppercase tracking-widest">Founder & Managing Director</p>
          </div>
          <div>
            <p className="text-secondary leading-relaxed mb-4">{COMPANY.experience}</p>
            <p className="text-secondary leading-relaxed mb-4">{COMPANY.education}</p>
            <p className="text-secondary leading-relaxed">{COMPANY.awards}</p>
          </div>
        </div>
      </section>

      <StatsBar />

      <TimelineSection />

      {/* Credentials */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            Credentials
          </p>
          <h2 className="font-display text-3xl text-primary font-bold text-center mb-12">
            Why Trust YUGA?
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {KEY_CREDENTIALS.map((credential) => (
              <div
                key={credential}
                className="bg-white/70 backdrop-blur-md border border-border border-t-4 border-t-accent rounded-2xl p-6 flex gap-4 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
              >
                <span className="text-2xl shrink-0" aria-hidden="true">
                  {CREDENTIAL_ICONS[credential] ?? "✅"}
                </span>
                <p className="text-secondary text-sm leading-relaxed">{credential}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
