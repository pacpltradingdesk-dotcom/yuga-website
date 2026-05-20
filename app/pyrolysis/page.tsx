import Image from "next/image";
import { PYROLYSIS_FEEDSTOCKS, PYROLYSIS_OUTPUTS, PYROLYSIS_PRODUCTS } from "@/lib/company-data";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pyrolysis — PPS Anantams",
  description: "Complete guide to pyrolysis: feedstocks, process, outputs (bio-oil, biochar, syngas, carbon black), and value-added products. India market data and MNRE schemes.",
};

const PROCESS_STEPS = [
  { step: 1, title: "Feed Preparation", desc: "Feedstock is dried to below 10% moisture, shredded or pelletised to uniform size for consistent reactor throughput." },
  { step: 2, title: "Reactor Loading", desc: "Material is loaded into the pyrolysis reactor (rotary kiln, fixed bed, or fluidised bed). Oxygen is purged to prevent combustion." },
  { step: 3, title: "Thermal Decomposition", desc: "Reactor is heated to 300–900°C. Long polymer chains in biomass, plastic, or rubber break apart into vapours and solid residue." },
  { step: 4, title: "Vapour Condensation", desc: "Hot vapours exit the reactor and pass through a condenser. Liquids collect as bio-oil or pyrolysis fuel oil." },
  { step: 5, title: "Gas & Char Collection", desc: "Non-condensable gases (syngas) are captured for energy use. Solid residue (biochar or carbon black) is removed from the reactor." },
  { step: 6, title: "Product Dispatch", desc: "Bio-oil is refined for bio-bitumen or fuel use. Char is processed into briquettes or activated carbon. Syngas heats the reactor — self-sufficient energy loop." },
];

const MARKET_STATS = [
  { value: "750M MT", label: "Biomass available in India annually", source: "MNRE" },
  { value: "15.5M MT", label: "Plastic waste generated in India/year", source: "CSIRO" },
  { value: "2.5M MT", label: "End-of-life tyres generated annually", source: "Weibold" },
  { value: ">5,000 MW", label: "India's total Waste-to-Energy potential", source: "MNRE" },
  { value: "USD 241M", label: "India activated carbon market (2024)", source: "Expert Market Research" },
  { value: "USD 8B", label: "India charcoal market (2025)", source: "Expert Market Research" },
];

export default function PyrolysisPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-orange-950 to-gray-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1600&q=80"
            alt="Industrial fire and heat — pyrolysis process"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Technology Deep-Dive
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Pyrolysis: Turning Waste Into Wealth
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-8">
            Heat organic waste in the absence of oxygen. Get bio-oil, biochar, syngas, and carbon black. This is the technology behind bio-bitumen — and the foundation of India&apos;s waste-to-energy future.
          </p>
          <Link href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors inline-block">
            Set Up Your Pyrolysis Plant →
          </Link>
        </div>
      </section>

      {/* What is Pyrolysis */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Pyrolysis?</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The word comes from Greek: <em>pyro</em> (fire) + <em>lysis</em> (decomposition). Pyrolysis is the thermal breakdown of organic or carbon-based materials at high temperatures — in a completely oxygen-free environment.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                When you burn something in open air, it combusts and disappears as smoke and ash. Pyrolysis does something far more valuable — it uses heat (300–900°C) inside a sealed, oxygen-free reactor to break down waste into three useful, sellable products simultaneously: a liquid fuel, a solid carbon material, and a combustible gas.
              </p>
              <p className="text-gray-600 leading-relaxed">
                No open flame. No combustion. No waste going to landfill. This is what makes pyrolysis a <strong>waste-to-wealth</strong> technology: materials that would otherwise be burned as stubble or buried in landfills are converted into industrial inputs and fuels.
              </p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="font-bold text-gray-900 mb-6 text-lg">Three Types of Pyrolysis</h3>
              <div className="space-y-4">
                {[
                  { type: "Slow Pyrolysis", temp: "300–500°C", primary: "Bio-Char (25–35% yield)", use: "Charcoal, activated carbon, soil amendment" },
                  { type: "Fast Pyrolysis", temp: "400–600°C", primary: "Bio-Oil (60–70% yield)", use: "Fuel oil, bio-bitumen, chemicals" },
                  { type: "Flash Pyrolysis", temp: "700–1,000°C", primary: "Syngas (60–80% volume)", use: "BioCNG, power generation, hydrogen" },
                ].map((row) => (
                  <div key={row.type} className="bg-white rounded-xl p-4 border border-orange-100">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-bold text-gray-900 text-sm">{row.type}</span>
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">{row.temp}</span>
                    </div>
                    <p className="text-xs text-green-700 font-semibold mb-1">Primary product: {row.primary}</p>
                    <p className="text-xs text-gray-500">{row.use}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedstocks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">What Goes In — Feedstocks</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Any carbon-based waste material can be pyrolysed. India has abundant feedstocks — most of which currently go to landfills or are openly burned.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PYROLYSIS_FEEDSTOCKS.map((feedstock) => (
              <div key={feedstock.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="relative h-40">
                  <Image
                    src={feedstock.imgSrc}
                    alt={feedstock.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-2xl mr-2">{feedstock.icon}</span>
                    <span className="font-bold">{feedstock.name}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{feedstock.description}</p>
                  <div className="bg-green-50 rounded-lg p-3 mb-2">
                    <span className="text-xs font-semibold text-green-700">India Volume: </span>
                    <span className="text-xs text-green-700">{feedstock.indiaVolume}</span>
                  </div>
                  <p className="text-xs text-orange-600 font-medium">→ {feedstock.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">How It Works — The Process</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">Six steps from raw waste to valuable products.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((s) => (
              <div key={s.step} className="relative bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 mt-1">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Output Products */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-3">What Comes Out — Output Products</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Every pyrolysis run produces up to three simultaneous outputs — liquid, solid, and gas — all commercially valuable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PYROLYSIS_OUTPUTS.map((output) => (
              <div key={output.name} className={`rounded-2xl p-6 border ${output.colorClass}`}>
                <div className="text-3xl mb-3">{output.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{output.name}</h3>
                <div className="space-y-1 mb-3">
                  <p className="text-xs text-gray-500"><span className="font-semibold text-gray-700">Yield:</span> {output.yieldRange}</p>
                  <p className="text-xs text-gray-500"><span className="font-semibold text-gray-700">Energy:</span> {output.heatingValue}</p>
                </div>
                <ul className="space-y-1">
                  {output.uses.map((use, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-gray-600">
                      <span className="text-green-500 shrink-0 font-bold">✓</span>
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value-Added Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Value-Added End Products</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Pyrolysis outputs are not end products — they are industrial inputs. Here is what you can manufacture from them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PYROLYSIS_PRODUCTS.map((product) => (
              <div key={product.name} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-3xl mb-3">{product.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs text-green-700 font-medium">→ {product.stat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-3">India Market Opportunity</h2>
          <p className="text-center text-green-100 mb-10 max-w-2xl mx-auto">
            The scale of India&apos;s waste problem is the scale of the pyrolysis opportunity.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {MARKET_STATS.map((stat) => (
              <div key={stat.label} className="bg-green-700 rounded-2xl p-5 text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">{stat.value}</div>
                <p className="text-green-100 text-sm mb-1">{stat.label}</p>
                <p className="text-green-300 text-xs">Source: {stat.source}</p>
              </div>
            ))}
          </div>
          <div className="bg-green-700 rounded-2xl p-6 max-w-3xl mx-auto">
            <h3 className="font-bold text-white mb-3">Government Policy Support</h3>
            <ul className="space-y-2">
              {[
                "MNRE Waste-to-Energy Programme — Central Financial Assistance for qualifying projects",
                "SATAT Scheme (Ministry of Petroleum) — supports BioCNG from organic waste",
                "EPR for tyres — mandates formal recycling, guaranteeing feedstock supply",
                "CSIR Bio-Bitumen Initiative — technology transferred to 14 companies (Jan 2026)",
                "Swachh Bharat Mission — zero-landfill target drives WtE investment",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-green-100">
                  <span className="text-orange-300 font-bold shrink-0">→</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Set Up a Pyrolysis Plant?</h2>
          <p className="text-gray-600 mb-8">
            PPS Anantams has guided 10 plant setups across India. We know every step — from site selection and machinery procurement to NHAI-approved bio-bitumen sales. First consultation is free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors">
              Get Free Consultation
            </Link>
            <Link href="/services"
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-bold text-lg transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
