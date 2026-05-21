// components/FeedstockCard.tsx
import type { PyrolysisFeedstock } from "@/lib/company-data";

type Props = { feedstock: PyrolysisFeedstock };

export default function FeedstockCard({ feedstock }: Props) {
  return (
    <div className="bg-white border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl" aria-hidden="true">{feedstock.icon}</span>
        <h3 className="font-display font-bold text-primary text-base leading-snug">
          {feedstock.name}
        </h3>
      </div>
      <p className="text-secondary text-sm leading-relaxed mb-4">
        {feedstock.description}
      </p>
      {feedstock.indiaVolume && (
        <div className="bg-accent-light rounded-xl px-4 py-3 mb-3">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-1">
            India Volume
          </p>
          <p className="text-primary text-sm font-bold">{feedstock.indiaVolume}</p>
        </div>
      )}
      {feedstock.highlight && (
        <span className="inline-block bg-accent-light text-accent text-xs rounded-full px-3 py-1">
          {feedstock.highlight}
        </span>
      )}
    </div>
  );
}
