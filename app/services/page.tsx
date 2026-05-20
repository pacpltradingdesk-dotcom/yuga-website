import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import { FOUR_STAGES, TARGET_AUDIENCES, CONSULTING_SERVICES, PMC_SERVICES, IT_SERVICES } from "@/lib/company-data";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — YUGA",
  description: "Bio-Bitumen consulting, Project Management (PMC), and IT Solutions for industrial entrepreneurs. End-to-end support from YUGA.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header with image */}
      <section className="relative bg-gradient-to-r from-green-900 to-gray-800 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80"
            alt="Industrial plant equipment"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-3">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Bio-Bitumen plant consulting, Project Management, and custom IT Solutions — complete support for industrial entrepreneurs.
          </p>
        </div>
      </section>

      {/* Anchor Tab Row */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-3 overflow-x-auto">
            {[
              { href: "#bio-bitumen", label: "🏭 Bio-Bitumen" },
              { href: "#pmc", label: "📋 Project Management" },
              { href: "#it-solutions", label: "💻 IT Solutions" },
            ].map((tab) => (
              <a
                key={tab.href}
                href={tab.href}
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-green-700 hover:bg-green-50 transition-colors whitespace-nowrap"
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bio-Bitumen Section ─────────────────────── */}
      <div id="bio-bitumen" className="scroll-mt-28">
        {/* 4 Stages */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🏭</span>
              <h2 className="text-2xl font-bold text-gray-900">Bio-Bitumen Consulting</h2>
            </div>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Complete end-to-end consulting for bio-bitumen plant setup across all 4 production stages — from raw material sourcing to commercial VG-30 supply.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">4 Stages of Bio-Bitumen Production</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FOUR_STAGES.map((stage) => <ServiceCard key={stage.stage} stage={stage} />)}
            </div>
          </div>
        </section>

        {/* Target Audiences */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Who Do We Serve?</h3>
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
            <h3 className="text-xl font-bold text-gray-900 mb-8">What We Cover</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(CONSULTING_SERVICES).map(([category, services]) => (
                <div key={category} className="bg-gray-50 rounded-2xl p-5">
                  <h4 className="font-bold text-gray-900 mb-3">{category}</h4>
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
      </div>

      {/* ── PMC Section ────────────────────────────── */}
      <div id="pmc" className="scroll-mt-28">
        <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">📋</span>
              <h2 className="text-2xl font-bold text-gray-900">Project Management Consulting (PMC)</h2>
            </div>
            <p className="text-gray-600 mb-3 max-w-3xl">
              Industrial projects fail most often due to poor vendor management, missed clearances, and supervision gaps. Our PMC service covers every step from feasibility to post-handover so your project delivers on time and within budget.
            </p>
            <div className="relative h-56 rounded-2xl overflow-hidden mb-10">
              <Image
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80"
                alt="Engineering and project management at a construction site"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent flex items-center px-8">
                <div className="text-white max-w-md">
                  <p className="text-xl font-bold mb-2">End-to-end project delivery</p>
                  <p className="text-sm text-blue-100">From feasibility study to post-commissioning retainer — we stay with you at every stage.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PMC_SERVICES.map((service) => (
                <div key={service.category} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{service.category}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="border-t border-gray-100 pt-3">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Deliverables</p>
                    <ul className="space-y-1">
                      {service.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-gray-600">
                          <span className="text-blue-500 font-bold shrink-0">✓</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
              <p className="text-gray-700 mb-4">Need a full project managed end-to-end? Let&apos;s discuss scope and pricing.</p>
              <Link href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block">
                Request PMC Proposal
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ── IT Solutions Section ────────────────────── */}
      <div id="it-solutions" className="scroll-mt-28">
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">💻</span>
              <h2 className="text-2xl font-bold text-white">IT Solutions</h2>
            </div>
            <p className="text-gray-300 mb-10 max-w-3xl">
              We build custom software specifically for industrial and bitumen businesses — not generic SaaS, but tools designed around the exact workflows of pyrolysis plants, bitumen trading, and project consulting.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {IT_SERVICES.map((service) => (
                <div key={service.name} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-colors">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="border-t border-gray-700 pt-3 mb-3">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Example Built</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{service.example}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Case Study Highlight */}
            <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-2xl p-6 border border-green-700">
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                <div className="text-4xl shrink-0">🖥️</div>
                <div>
                  <p className="text-xs font-semibold text-green-300 uppercase tracking-wide mb-2">Case Study — Live Product</p>
                  <h3 className="text-xl font-bold text-white mb-2">Bio-Bitumen Consultant Portal</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Built for YUGA: a full-stack web portal allowing consultant and clients to track plant setup progress across all 4 stages, upload documents, view payment milestones, and communicate — all in one place. Demonstrates the kind of industrial software we build.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js 16", "TypeScript", "Tailwind CSS", "Static Export", "Formspree"].map((tag) => (
                      <span key={tag} className="text-xs bg-green-700 text-green-100 px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-4">Have an industrial software need? We are scoping new projects from the bitumen, pyrolysis, and infrastructure sectors.</p>
              <Link href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-block">
                Discuss Your Software Project
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Final CTA */}
      <section className="py-12 bg-orange-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start?</h2>
          <p className="text-gray-600 mb-6">Get a free consultation to discuss your bio-bitumen plant, PMC project, or software requirement.</p>
          <Link href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
