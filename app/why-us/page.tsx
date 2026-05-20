import NetworkGrid from "@/components/NetworkGrid";
import { PPS_STRENGTHS, WHY_NOW, COMPANY } from "@/lib/company-data";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us — PPS Anantams",
  description: "25 years experience, 4,452 contacts, international supply contracts. India's only end-to-end bio-bitumen consultant.",
};

const STRENGTH_ICONS = ["🏭", "🤝", "🌍", "🔗", "📈", "🗺️", "🏆"];

export default function WhyUsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-green-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Why Choose Us?</h1>
          <p className="text-gray-600 text-lg max-w-3xl">{COMPANY.usp}</p>
        </div>
      </section>

      {/* 7 Strength cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Competitive Edge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PPS_STRENGTHS.map((strength, i) => (
              <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5">
                <span className="text-2xl shrink-0">{STRENGTH_ICONS[i] ?? "✓"}</span>
                <p className="text-gray-700 text-sm leading-relaxed">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Live Industry Network</h2>
          <p className="text-gray-600 mb-6">
            {COMPANY.industryContacts.toLocaleString()} verified contacts built over 25 years — your unfair advantage from day one.
          </p>
          <div className="max-w-xl">
            <NetworkGrid />
          </div>
        </div>
      </section>

      {/* GETKA contract highlight */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">International Supply Advantage</h2>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 max-w-2xl">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🌍</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">GETKA Energy Trading Contract</h3>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li><span className="font-medium">Supplier:</span> Getka Energy Trading LLC, Tulsa, Oklahoma, USA</li>
                  <li><span className="font-medium">Product:</span> Bitumen VG-30 — Iraq origin (Erbil, Ex-Refinery)</li>
                  <li><span className="font-medium">Volume:</span> 2.4 Lakh MT per year</li>
                  <li><span className="font-medium">Quality:</span> SGS certified every shipment</li>
                  <li><span className="font-medium">Payment:</span> Letter of Credit (L/C)</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">Signed: 25 September 2024 — gives our clients direct access to competitively priced VG-30 for blending.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-12 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">The Market Opportunity Is Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
            {WHY_NOW.map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-green-700 rounded-xl p-4">
                <span className="text-orange-300 font-bold text-lg mt-0.5 shrink-0">→</span>
                <p className="text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors">
              Claim Your Spot — Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
