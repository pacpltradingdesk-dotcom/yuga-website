// app/about/page.tsx
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaStrip from "@/components/CtaStrip";
import CareerTimeline from "@/components/CareerTimeline";
import { COMPANY, KEY_CREDENTIALS, INDUSTRY_NETWORK } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "About — PACPL",
  description:
    "Prince Pratap Shah — 25 years in India's bitumen industry. 10 plants built, 4,452 industry contacts, and the only end-to-end bio-bitumen consultant in India.",
};

const STATS = [
  { value: COMPANY.plantsBuilt, label: "Plants Built" },
  { value: COMPANY.yearsExperience, label: "Years Experience" },
  { value: COMPANY.industryContacts.toLocaleString(), label: "Industry Contacts" },
  { value: COMPANY.statesNetwork, label: "States Network" },
];

const NETWORK_ITEMS = [
  { label: "Road Contractors", value: INDUSTRY_NETWORK.contractors },
  { label: "Bitumen Traders", value: INDUSTRY_NETWORK.traders },
  { label: "Importers", value: INDUSTRY_NETWORK.importers },
  { label: "Transporters", value: INDUSTRY_NETWORK.transporters },
  { label: "Manufacturers", value: INDUSTRY_NETWORK.manufacturers },
  { label: "Decanters", value: INDUSTRY_NETWORK.decanters },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About PACPL"
        subtitle="A 25-year journey across India's bitumen industry — 10 plants built, 4,452 live contacts, and the country's only end-to-end bio-bitumen consultant."
        breadcrumb="About"
      />

      {/* Bio / Hero section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-2">
              {COMPANY.owner}
            </h2>
            <p className="text-secondary text-lg mb-4">Founder &amp; Principal Consultant</p>

            {/* Award badge */}
            <span className="inline-block bg-accent-light text-accent rounded-full px-3 py-1 text-xs font-bold mb-6">
              {COMPANY.awards}
            </span>

            {/* Education */}
            <p className="text-secondary text-sm leading-relaxed mb-10">{COMPANY.education}</p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white border border-border rounded-2xl p-6 text-center"
                >
                  <p className="font-display text-3xl font-bold text-accent mb-1">{value}</p>
                  <p className="text-secondary text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline section */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Career
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-12">
            25 Years Across India
          </h2>
          <CareerTimeline />
        </div>
      </section>

      {/* Credentials section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Credentials
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-12">
            Verified Track Record
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {KEY_CREDENTIALS.map((credential, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-2xl p-4"
              >
                <p className="text-primary text-sm leading-relaxed">{credential}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network section */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Network
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-4">
            Industry Network
          </h2>
          <p className="text-secondary max-w-xl mb-12 leading-relaxed">
            {INDUSTRY_NETWORK.total.toLocaleString()} live industry contacts spanning road
            construction, trading, importing, and logistics across India.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {NETWORK_ITEMS.map(({ label, value }) => (
              <div
                key={label}
                className="bg-white border border-border rounded-2xl p-6 text-center"
              >
                <p className="font-display text-3xl font-bold text-accent mb-1">
                  {value.toLocaleString()}
                </p>
                <p className="text-secondary text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        heading="Work With India's Best Bio-Bitumen Consultant"
        subtext="25 years of plant-building experience, 4,452 live industry contacts — ready to work for your project."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
