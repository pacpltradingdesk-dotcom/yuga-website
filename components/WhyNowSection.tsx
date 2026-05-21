import { WHY_NOW } from "@/lib/company-data";

export default function WhyNowSection() {
  return (
    <section className="bg-brand-slate py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
          Market Timing
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-12">
          Why Now?
        </h2>
        <div className="grid md:grid-cols-1 gap-4 max-w-3xl mx-auto">
          {WHY_NOW.map((point, i) => (
            <div
              key={i}
              className="flex gap-4 bg-brand-card border-l-4 border-brand-gold p-5"
            >
              <span className="text-brand-gold font-bold text-lg shrink-0 font-display">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-white leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="/why-us"
            className="inline-block border border-brand-gold text-brand-gold px-6 py-3 text-sm font-semibold hover:bg-brand-gold hover:text-brand-navy transition-colors"
          >
            See All Advantages →
          </a>
        </div>
      </div>
    </section>
  );
}
