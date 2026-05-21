// app/consulting/page.tsx
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import StageCard from "@/components/StageCard";
import ConsultingServiceCard from "@/components/ConsultingServiceCard";
import PmcServiceCard from "@/components/PmcServiceCard";
import TargetAudienceCard from "@/components/TargetAudienceCard";
import CtaStrip from "@/components/CtaStrip";
import {
  FOUR_STAGES,
  CONSULTING_SERVICES,
  PMC_SERVICES,
  TARGET_AUDIENCES,
} from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Consulting Services — PACPL",
  description:
    "Bio-bitumen plant consulting and project management. End-to-end A-to-Z service from site selection to commercial production and buyer network access.",
};

export default function ConsultingPage() {
  return (
    <>
      <PageHeader
        title="Consulting Services"
        subtitle="Two service verticals built around one mission — making bio-bitumen accessible to every Indian investor"
        breadcrumb="Consulting"
      />

      {/* Sticky tab nav */}
      <nav
        className="sticky top-[72px] z-40 bg-white border-b border-border"
        aria-label="Consulting sections"
      >
        <div className="max-w-7xl mx-auto px-6 flex gap-8 overflow-x-auto">
          {[
            { href: "#bio-bitumen", label: "Bio-Bitumen Consulting" },
            { href: "#pmc", label: "Project Management (PMC)" },
            { href: "#audience", label: "Who We Serve" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="shrink-0 py-4 text-sm font-semibold text-secondary hover:text-accent border-b-2 border-transparent hover:border-accent transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Bio-Bitumen Section */}
      <section id="bio-bitumen" className="bg-surface py-20 px-6 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Service 01
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-4">
            Bio-Bitumen Plant Consulting
          </h2>
          <p className="text-secondary max-w-2xl mb-12 leading-relaxed">
            End-to-end consulting covering all four stages of a bio-bitumen plant — from raw material
            procurement to market access. The only consultant in India offering this complete scope.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {FOUR_STAGES.map((stage) => (
              <StageCard key={stage.stage} stage={stage} />
            ))}
          </div>
          <h3 className="font-display text-2xl text-primary font-bold mb-8">What&apos;s Included</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(CONSULTING_SERVICES).map(([category, items]) => (
              <ConsultingServiceCard key={category} category={category} items={items} />
            ))}
          </div>
        </div>
      </section>

      {/* PMC Section */}
      <section id="pmc" className="bg-white py-20 px-6 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Service 02
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-4">
            Project Management Consulting
          </h2>
          <p className="text-secondary max-w-2xl mb-12 leading-relaxed">
            Full PMC scope from feasibility report to plant commissioning and handover — with optional
            retainer support post-launch.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {PMC_SERVICES.map((service) => (
              <PmcServiceCard key={service.category} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="audience" className="bg-surface py-20 px-6 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Who We Serve
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-4">
            Which Investor Type Are You?
          </h2>
          <p className="text-secondary max-w-2xl mb-12 leading-relaxed">
            Our consulting scope adapts to your starting point — whether you&apos;re a new investor or an
            existing operator looking to add bio-bitumen.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TARGET_AUDIENCES.map((audience) => (
              <TargetAudienceCard key={audience.type} audience={audience} />
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        heading="Which Service Do You Need?"
        subtext="Tell us about your project and we'll recommend the right scope."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
