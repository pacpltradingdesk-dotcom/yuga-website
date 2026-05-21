// app/pyrolysis/page.tsx
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaStrip from "@/components/CtaStrip";
import StageCard from "@/components/StageCard";
import FeedstockCard from "@/components/FeedstockCard";
import OutputCard from "@/components/OutputCard";
import PyrolysisProductCard from "@/components/PyrolysisProductCard";
import {
  FOUR_STAGES,
  PYROLYSIS_FEEDSTOCKS,
  PYROLYSIS_OUTPUTS,
  PYROLYSIS_PRODUCTS,
} from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Pyrolysis Technology — PACPL",
  description:
    "Understand the complete pyrolysis process — from agro-waste and plastic feedstocks through bio-oil extraction to commercial bio-bitumen production for India's roads.",
};

export default function PyrolysisPage() {
  return (
    <>
      <PageHeader
        title="Pyrolysis Technology"
        subtitle="How we convert waste biomass and plastics into bio-oil that replaces petroleum bitumen on India's roads."
        breadcrumb="Pyrolysis"
      />

      {/* 4-Stage Process */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            The Process
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-extrabold mb-12">
            Four Stages to Bio-Bitumen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUR_STAGES.map((stage) => (
              <StageCard key={stage.stage} stage={stage} />
            ))}
          </div>
        </div>
      </section>

      {/* Feedstocks */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Feedstocks
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-extrabold mb-12">
            What Goes In
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PYROLYSIS_FEEDSTOCKS.map((feedstock) => (
              <FeedstockCard key={feedstock.name} feedstock={feedstock} />
            ))}
          </div>
        </div>
      </section>

      {/* Outputs */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Outputs
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-extrabold mb-12">
            What Comes Out
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PYROLYSIS_OUTPUTS.map((output) => (
              <OutputCard key={output.name} output={output} />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Products */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Products
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-extrabold mb-12">
            Commercial-Grade Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PYROLYSIS_PRODUCTS.map((product) => (
              <PyrolysisProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        heading="Ready to Build a Pyrolysis Plant?"
        subtext="Get a custom DPR, site selection, and end-to-end plant setup from India's most experienced bio-bitumen consultant."
        buttonLabel="Start Your Project"
        buttonHref="/contact"
      />
    </>
  );
}
