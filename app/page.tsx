import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ServiceCard from "@/components/ServiceCard";
import { FOUR_STAGES, WHY_NOW } from "@/lib/company-data";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />

      {/* Services overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Complete end-to-end support for setting up a bio-bitumen plant — from raw material to road.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUR_STAGES.map((stage) => <ServiceCard key={stage.stage} stage={stage} />)}
          </div>
          <div className="text-center mt-8">
            <Link href="/services"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Now — market opportunity */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Why Now?</h2>
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
              Start Your Plant Journey Today
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us teaser */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PPS Anantams?</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            India&apos;s only consultant offering complete end-to-end service — from site selection to your first sale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: "🏭", title: "10 Plants Built", desc: "Hands-on experience across 5 plant types in multiple states" },
              { icon: "🤝", title: "4,452 Contacts", desc: "Live network: contractors, traders, importers, NHAI" },
              { icon: "🌍", title: "Global Supply", desc: "International VG-30 contract — 2.4 Lakh MT/yr from Iraq" },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-6">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/why-us" className="text-green-600 hover:text-green-700 font-medium">
            See all reasons to choose us →
          </Link>
        </div>
      </section>
    </>
  );
}
