// components/TargetAudienceCard.tsx
import type { TargetAudience } from "@/lib/company-data";

type Props = { audience: TargetAudience };

export default function TargetAudienceCard({ audience }: Props) {
  return (
    <div className="bg-white border border-border rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
      <h3 className="font-display text-base text-primary font-bold mb-1">{audience.type}</h3>
      <p className="text-accent text-xs font-semibold mb-4">{audience.stages}</p>
      <dl className="grid grid-cols-2 gap-3 mb-4 text-xs">
        <div>
          <dt className="text-secondary mb-0.5">Investment</dt>
          <dd className="font-semibold text-primary">{audience.investment}</dd>
        </div>
        <div>
          <dt className="text-secondary mb-0.5">DPR Fee</dt>
          <dd className="font-semibold text-primary">{audience.feeDpr}</dd>
        </div>
        <div>
          <dt className="text-secondary mb-0.5">Setup Fee</dt>
          <dd className="font-semibold text-primary">{audience.feeSetup}</dd>
        </div>
        <div>
          <dt className="text-secondary mb-0.5">Retainer</dt>
          <dd className="font-semibold text-primary">{audience.feeRetainer}</dd>
        </div>
      </dl>
      <ul className="space-y-1">
        {audience.keyServices.map((s) => (
          <li key={s} className="flex gap-2 text-secondary text-xs">
            <span className="text-accent shrink-0" aria-hidden="true">✓</span>
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
