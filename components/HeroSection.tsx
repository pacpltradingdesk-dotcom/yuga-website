import Link from "next/link";
import { COMPANY } from "@/lib/company-data";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            India&apos;s #1 Bio-Bitumen Consultant
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {COMPANY.tagline}
          </h1>
          <p className="text-lg text-gray-600 mb-4 max-w-2xl">{COMPANY.usp}</p>
          <p className="text-sm text-gray-500 mb-8">{COMPANY.experience}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg text-center transition-colors">
              Get Free Consultation
            </Link>
            <Link href="/services"
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-bold text-lg text-center transition-colors">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
