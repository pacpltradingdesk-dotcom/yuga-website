"use client";
import Link from "next/link";
import { COMPANY } from "@/lib/company-data";

export default function HeroVideo() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="/hero.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/80 via-gray-900/60 to-gray-900/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <span className="inline-block bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            India&apos;s #1 Bio-Bitumen Consultant
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            {COMPANY.tagline}
          </h1>
          <p className="text-lg text-gray-200 mb-4 max-w-2xl leading-relaxed">{COMPANY.usp}</p>
          <p className="text-sm text-green-300 mb-10 font-medium">{COMPANY.experience}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-bold text-lg text-center transition-all shadow-lg hover:shadow-orange-500/30"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white/70 text-white hover:bg-white hover:text-green-900 px-10 py-4 rounded-xl font-bold text-lg text-center transition-all"
            >
              Explore Services
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 mt-12">
            {[
              { val: "10+", label: "Plants Built" },
              { val: "25 Yrs", label: "Experience" },
              { val: "4,452", label: "Industry Buyers" },
              { val: "17", label: "States Network" },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-black text-orange-400">{val}</div>
                <div className="text-xs text-gray-400 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
