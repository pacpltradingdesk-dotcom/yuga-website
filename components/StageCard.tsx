// components/StageCard.tsx
import type { FourStage } from "@/lib/company-data";

type Props = { stage: FourStage };

export default function StageCard({ stage }: Props) {
  return (
    <div className="bg-white border border-border border-t-4 border-t-accent rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl" aria-hidden="true">{stage.icon}</span>
        <span className="text-accent text-xs font-semibold uppercase tracking-widest">
          Stage {stage.stage}
        </span>
      </div>
      <h3 className="font-display text-base text-primary font-bold mb-3 leading-snug">
        {stage.name}
      </h3>
      <p className="text-secondary text-sm leading-relaxed mb-4">{stage.description}</p>
      <dl className="space-y-1 text-xs text-secondary">
        <div className="flex gap-2">
          <dt className="font-semibold text-primary">CAPEX:</dt>
          <dd>{stage.capex}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-semibold text-primary">Manpower:</dt>
          <dd>{stage.manpower}</dd>
        </div>
        {stage.space && (
          <div className="flex gap-2">
            <dt className="font-semibold text-primary">Space:</dt>
            <dd>{stage.space}</dd>
          </div>
        )}
      </dl>
    </div>
  );
}
