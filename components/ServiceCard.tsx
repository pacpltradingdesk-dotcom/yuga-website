import { FOUR_STAGES } from "@/lib/company-data";
type FourStage = (typeof FOUR_STAGES)[0];

interface ServiceCardProps {
  stage: FourStage;
}

export default function ServiceCard({ stage }: ServiceCardProps) {
  return (
    <div className="bg-white/70 backdrop-blur-md border border-border border-t-4 border-t-accent rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-3">
        <span className="text-xs font-bold text-accent uppercase tracking-widest">
          Stage {stage.stage}
        </span>
        <span className="text-2xl" aria-hidden="true">{stage.icon}</span>
      </div>
      <h3 className="font-display text-lg text-primary font-bold leading-snug">{stage.name}</h3>
      <p className="text-secondary text-sm leading-relaxed flex-1">{stage.description}</p>
      {(stage.capex || stage.manpower) && (
        <div className="border-t border-border pt-4 grid grid-cols-2 gap-3 text-xs">
          {stage.capex && (
            <div>
              <p className="text-accent font-semibold">CapEx</p>
              <p className="text-secondary">{stage.capex}</p>
            </div>
          )}
          {stage.manpower && (
            <div>
              <p className="text-accent font-semibold">Manpower</p>
              <p className="text-secondary">{stage.manpower}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
