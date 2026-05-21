// components/PmcServiceCard.tsx
import type { PmcService } from "@/lib/company-data";

type Props = { service: PmcService };

export default function PmcServiceCard({ service }: Props) {
  return (
    <div className="bg-white border border-border border-l-4 border-l-accent rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl" aria-hidden="true">{service.icon}</span>
        <h3 className="text-primary font-bold">{service.category}</h3>
      </div>
      <p className="text-secondary text-sm leading-relaxed mb-4">{service.description}</p>
      <ul className="space-y-1">
        {service.deliverables.map((d) => (
          <li key={d} className="flex gap-2 text-secondary text-xs">
            <span className="text-accent shrink-0" aria-hidden="true">→</span>
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}
