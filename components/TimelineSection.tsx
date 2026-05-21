import { CAREER_TRACK } from "@/lib/company-data";

export default function TimelineSection() {
  return (
    <section className="bg-surface py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">
          Career Track
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-primary font-bold text-center mb-16">
          25 Years of Plant Builds
        </h2>

        <div className="relative">
          {/* Vertical blue line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent/30" />

          <div className="space-y-8">
            {CAREER_TRACK.map((item, i) => (
              <div key={i} className="relative flex gap-6 pl-16">
                {/* Blue dot */}
                <div className="absolute left-4 top-5 w-4 h-4 rounded-full bg-accent ring-4 ring-white ring-offset-2 -translate-x-1/2" />

                <div className="bg-white border border-border rounded-2xl p-5 flex-1 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="bg-accent-light text-accent font-bold text-sm px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                    <span className="text-xs text-secondary bg-surface px-2 py-1 rounded-lg font-semibold uppercase tracking-wider">
                      {item.role}
                    </span>
                  </div>
                  <h3 className="text-primary font-semibold mb-1">{item.company}</h3>
                  <p className="text-secondary text-sm">{item.plantType}</p>
                  <p className="text-secondary/60 text-xs mt-1">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
