// components/WhyNowStrip.tsx
import { WHY_NOW } from "@/lib/company-data";

export default function WhyNowStrip() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">
          Market Opportunity
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-primary font-bold text-center mb-12">
          Why Bio-Bitumen, Why Now
        </h2>
        <div className="grid md:grid-cols-5 gap-4">
          {WHY_NOW.map((reason, i) => (
            <div
              key={i}
              className="bg-surface rounded-2xl border border-border p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <span className="text-accent font-extrabold text-3xl leading-none block mb-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-primary text-sm leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
