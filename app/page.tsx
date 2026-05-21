// app/page.tsx
import type { Metadata } from "next";
import SplitHero from "@/components/SplitHero";
import BusinessLineCards from "@/components/BusinessLineCards";
import WhyNowStrip from "@/components/WhyNowStrip";
import StageCard from "@/components/StageCard";
import CredentialsBar from "@/components/CredentialsBar";
import CtaStrip from "@/components/CtaStrip";
import { FOUR_STAGES } from "@/lib/company-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PACPL — India's Bio-Bitumen Consulting & IT Products Leader",
  description:
    "PPS Anantams Corporation Private Limited. India's leading bio-bitumen plant setup consultant and industrial IT solutions provider. 25 years, 10 plants, 4,452 contacts.",
  openGraph: {
    title: "PACPL — India's Bio-Bitumen Consulting & IT Products Leader",
    description: "End-to-end plant setup consulting. From site selection to commercial production.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <SplitHero />
      <BusinessLineCards />
      <WhyNowStrip />

      {/* Pyrolysis teaser */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            The Technology
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold text-center mb-4">
            How Pyrolysis Works
          </h2>
          <p className="text-secondary text-center max-w-xl mx-auto mb-12 leading-relaxed">
            Four integrated stages convert agro-waste into commercial bio-bitumen for India&apos;s road network.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FOUR_STAGES.map((stage) => (
              <StageCard key={stage.stage} stage={stage} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/pyrolysis"
              className="inline-block bg-white text-accent font-semibold px-6 py-3 rounded-xl border border-accent-border hover:bg-accent-light transition-all duration-200 text-sm"
            >
              Deep Dive into Pyrolysis →
            </Link>
          </div>
        </div>
      </section>

      <CredentialsBar />

      <CtaStrip
        heading="Ready to Build Your Plant?"
        subtext="Join 10 successful plant operators who trusted PACPL for their bio-bitumen journey."
        buttonLabel="Start Your Project"
        buttonHref="/contact"
      />
    </>
  );
}
