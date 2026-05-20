import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";
import StatsBar from "@/components/StatsBar";
import { WHY_NOW } from "@/lib/company-data";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <StatsBar />

      {/* Three Ways We Help */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Three Ways We Help</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            From pyrolysis plant setup to project management to custom industrial software — complete support for ambitious entrepreneurs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏭",
                title: "Bio-Bitumen Consulting",
                description: "End-to-end consulting for bio-bitumen plant setup — site selection, raw material sourcing, plant commissioning, VG-30 supply, and NHAI-approved sales through our 4,452-contact network.",
                href: "/services#bio-bitumen",
                imgSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
                imgAlt: "Hot asphalt bitumen road construction paving",
              },
              {
                icon: "📋",
                title: "Project Management (PMC)",
                description: "Full project management consulting — feasibility studies, procurement, civil supervision, regulatory clearances, commissioning, and monthly retainer support.",
                href: "/services#pmc",
                imgSrc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
                imgAlt: "Industrial plant construction site management",
              },
              {
                icon: "💻",
                title: "IT Solutions",
                description: "Custom industrial software — portals, plant dashboards, supply chain tools, market intelligence systems, and mobile apps built for bitumen and pyrolysis operations.",
                href: "/services#it-solutions",
                imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
                imgAlt: "Industrial analytics dashboard software screen",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative h-44">
                  <Image src={item.imgSrc} alt={item.imgAlt} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                  <Link href={item.href} className="text-green-600 hover:text-green-700 font-medium text-sm">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
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

      {/* Pyrolysis Teaser */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                The Technology Behind Bio-Bitumen
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Pyrolysis?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pyrolysis converts agricultural waste, plastic, and tyres into valuable products — bio-oil, biochar, syngas, and carbon black — using heat in an oxygen-free environment. No combustion. No open flame. Pure value extraction from waste.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "India has 750 million MT of biomass available annually (MNRE)",
                  "1 tonne of biomass yields 600–700 kg of bio-oil via fast pyrolysis",
                  "India became the world's first country to commercially produce bio-bitumen (Jan 2026)",
                ].map((stat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-orange-500 font-bold shrink-0 mt-0.5">→</span>
                    {stat}
                  </li>
                ))}
              </ul>
              <Link href="/pyrolysis"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block">
                Explore Pyrolysis In Depth →
              </Link>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80"
                alt="Agricultural biomass — wheat fields at sunset"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us teaser */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose YUGA?</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            India&apos;s only consultant offering complete end-to-end service — from site selection to your first sale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: "🏭", title: "10 Plants Built", desc: "Hands-on experience across 5 plant types in multiple states" },
              { icon: "🤝", title: "4,452 Contacts", desc: "Live network: contractors, traders, importers, NHAI" },
              { icon: "🌍", title: "Global Supply", desc: "International VG-30 contract — 2.4 Lakh MT/yr from Iraq" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
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
