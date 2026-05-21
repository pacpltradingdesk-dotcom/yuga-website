// components/CareerTimeline.tsx
import { CAREER_TRACK } from "@/lib/company-data";

export default function CareerTimeline() {
  return (
    <div className="max-w-2xl">
      {CAREER_TRACK.map((entry, index) => (
        <div key={`${entry.year}-${entry.company}-${index}`} className="relative flex gap-8 pb-8">
          {/* Year label */}
          <div className="w-16 shrink-0 text-accent font-bold text-sm pt-1">{entry.year}</div>
          {/* Connector */}
          <div className="relative flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-accent mt-1.5 shrink-0" />
            {/* Vertical line — not on last item */}
            {index < CAREER_TRACK.length - 1 && (
              <div className="w-px flex-1 bg-border mt-1" />
            )}
          </div>
          {/* Content */}
          <div className="flex-1 pb-2">
            <p className="font-bold text-primary">{entry.company}</p>
            <p className="text-secondary text-sm">{entry.location} · {entry.plantType}</p>
            <p className="text-secondary text-sm">{entry.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
