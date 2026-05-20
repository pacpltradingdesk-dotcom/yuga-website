import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/company-data";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-gray-900 py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&q=80"
          alt="Aerial view of road construction"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            India&apos;s #1 Bio-Bitumen Consultant
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {COMPANY.tagline}
          </h1>
          <p className="text-lg text-gray-200 mb-4 max-w-2xl">{COMPANY.usp}</p>
          <p className="text-sm text-gray-400 mb-8">{COMPANY.experience}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg text-center transition-colors">
              Get Free Consultation
            </Link>
            <Link href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-3 rounded-lg font-bold text-lg text-center transition-colors">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
