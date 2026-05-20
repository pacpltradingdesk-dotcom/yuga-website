import ServiceCard from "@/components/ServiceCard";
import { FOUR_STAGES, TARGET_AUDIENCES, CONSULTING_SERVICES } from "@/lib/company-data";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — PPS Anantams",
  description: "Complete bio-bitumen plant setup consulting: 4 stages, 5 client types, end-to-end support.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-green-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Our Services</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Complete end-to-end consulting for bio-bitumen plant setup — from raw material to commercial production.
          </p>
        </div>
      </section>

      {/* 4 Stages */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">4 Stages of Bio-Bitumen Production</h2>
          <p className="text-gray-600 mb-8">We consult across all 4 stages depending on your current position.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUR_STAGES.map((stage) => <ServiceCard key={stage.stage} stage={stage} />)}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Who Do We Serve?</h2>
          <p className="text-gray-600 mb-8">We tailor our services to your starting position.</p>
          <div className="space-y-4">
            {TARGET_AUDIENCES.map((audience) => (
              <div key={audience.type} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-bold text-gray-900">{audience.type}</h3>
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">
                        {audience.stages}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-green-600 mb-3">Investment: {audience.investment}</p>
                    <ul className="space-y-1">
                      {audience.keyServices.map((service, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-green-500 font-bold shrink-0">•</span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-sm min-w-[160px]">
                    <div className="font-semibold text-gray-700 mb-2">Consulting Fees</div>
                    <div className="space-y-1 text-gray-600">
                      <div><span className="font-medium">DPR:</span> {audience.feeDpr}</div>
                      <div><span className="font-medium">Setup:</span> {audience.feeSetup}</div>
                      <div><span className="font-medium">Retainer:</span> {audience.feeRetainer}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Scope */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">What We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(CONSULTING_SERVICES).map(([category, services]) => (
              <div key={category} className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">{category}</h3>
                <ul className="space-y-1.5">
                  {services.map((service, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-500 font-bold shrink-0 mt-0.5">✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-orange-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start?</h2>
          <p className="text-gray-600 mb-6">Get a free consultation call to discuss your bio-bitumen plant project.</p>
          <Link href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
