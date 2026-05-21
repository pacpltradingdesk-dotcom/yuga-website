import { WHY_NOW } from "@/lib/company-data";

export default function WhyNowSection() {
  return (
    <section className="bg-surface py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">
          Market Timing
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-primary font-bold text-center mb-12">
          Why Now?
        </h2>
        <div className="grid md:grid-cols-1 gap-4 max-w-3xl mx-auto">
          {WHY_NOW.map((point, i) => (
            <div
              key={point}
              className="flex gap-4 bg-white border border-border border-l-4 border-l-accent rounded-2xl p-5 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
            >
              <span className="text-accent font-extrabold text-xl shrink-0 font-display">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-secondary leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="/why-us"
            className="inline-block bg-accent text-white font-semibold px-6 py-3 rounded-xl text-sm shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)] hover:scale-[1.02] transition-all duration-200"
          >
            See All Advantages →
          </a>
        </div>
      </div>
    </section>
  );
}
