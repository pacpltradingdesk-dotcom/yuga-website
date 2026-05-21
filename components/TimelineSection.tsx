import { CAREER_TRACK } from "@/lib/company-data";

export default function TimelineSection() {
  return (
    <section className="bg-brand-slate py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
          Career Track
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-16">
          25 Years of Plant Builds
        </h2>

        <div className="relative">
          {/* Vertical gold line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-gold/30" />

          <div className="space-y-8">
            {CAREER_TRACK.map((item, i) => (
              <div key={i} className="relative flex gap-6 pl-16">
                {/* Gold dot */}
                <div className="absolute left-4 top-5 w-4 h-4 rounded-full bg-brand-gold border-2 border-brand-navy -translate-x-1/2" />

                <div className="bg-brand-card border-l-2 border-brand-gold/50 p-5 flex-1 hover:border-brand-gold transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-brand-gold font-bold font-sans text-sm">{item.year}</span>
                    <span className="text-xs text-brand-muted bg-brand-navy px-2 py-0.5 font-semibold uppercase tracking-wider">
                      {item.role}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold mb-1">{item.company}</h3>
                  <p className="text-brand-muted text-sm">{item.plantType}</p>
                  <p className="text-brand-muted/70 text-xs mt-1">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
