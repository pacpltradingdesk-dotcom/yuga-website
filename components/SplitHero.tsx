// components/SplitHero.tsx
import Link from "next/link";
import StatsCard from "./StatsCard";
import { COMPANY } from "@/lib/company-data";

export default function SplitHero() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div>
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
            India&apos;s #1 Bio-Bitumen Consultant
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-primary font-extrabold leading-tight mb-5">
            Complete Plant Setup.{" "}
            <span className="text-accent">From Agro-Waste to Road.</span>
          </h1>
          <p className="text-secondary text-lg leading-relaxed mb-8">
            {COMPANY.usp}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-accent text-white font-bold px-7 py-4 rounded-xl hover:bg-accent-hover transition-colors text-sm uppercase tracking-wider"
            >
              Start Your Plant
            </Link>
            <Link
              href="/it-products"
              className="bg-white text-accent border border-accent-border font-bold px-7 py-4 rounded-xl hover:bg-accent-light transition-colors text-sm uppercase tracking-wider"
            >
              View IT Products
            </Link>
          </div>
        </div>

        {/* Right: stats card */}
        <div>
          <StatsCard />
        </div>
      </div>
    </section>
  );
}
