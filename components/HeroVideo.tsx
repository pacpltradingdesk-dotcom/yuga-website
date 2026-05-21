import Link from "next/link";
import { COMPANY } from "@/lib/company-data";

export default function HeroVideo() {
  return (
    <section className="relative bg-surface min-h-[90vh] flex items-center px-6 py-20 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent-light via-white to-accent-border rounded-full opacity-70 blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent-border to-white rounded-full opacity-40 blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent-light text-accent text-xs font-semibold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            India&apos;s Leading Bio-Bitumen Consultant
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-tight tracking-tight mb-6">
            India&apos;s{" "}
            <span className="text-accent">Bio-Bitumen</span>{" "}
            Revolution
          </h1>

          {/* Subtext */}
          <p className="text-secondary text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            End-to-end plant setup consulting — from site selection to commercial production.{" "}
            {COMPANY.yearsExperience} years experience. {COMPANY.plantsBuilt} plants built.{" "}
            {COMPANY.industryContacts.toLocaleString("en-IN")} verified industry contacts.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block bg-accent text-white font-semibold px-8 py-4 rounded-xl shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)] hover:scale-[1.02] transition-all duration-200 text-center"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="inline-block bg-white text-accent font-semibold px-8 py-4 rounded-xl border border-accent-border hover:bg-accent-light transition-all duration-200 text-center"
            >
              Our Services →
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-border">
            {[
              { value: `${COMPANY.yearsExperience}+`, label: "Years Experience" },
              { value: String(COMPANY.plantsBuilt), label: "Plants Built" },
              { value: COMPANY.industryContacts.toLocaleString("en-IN") + "+", label: "Industry Contacts" },
              { value: "3", label: "Service Verticals" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center min-w-[80px]">
                <p className="text-2xl font-extrabold text-accent">{value}</p>
                <p className="text-secondary text-xs uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
