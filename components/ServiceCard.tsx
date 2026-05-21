import { FOUR_STAGES } from "@/lib/company-data";
type FourStage = (typeof FOUR_STAGES)[0];

interface ServiceCardProps {
  stage: FourStage;
}

export default function ServiceCard({ stage }: ServiceCardProps) {
  return (
    <div className="bg-brand-card border-t-2 border-brand-gold p-6 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="font-sans text-xs font-bold text-brand-gold uppercase tracking-widest">
          Stage {stage.stage}
        </span>
        <span className="text-2xl">{stage.icon}</span>
      </div>
      <h3 className="font-display text-lg text-white font-semibold leading-snug">{stage.name}</h3>
      <p className="text-brand-muted text-sm leading-relaxed flex-1">{stage.description}</p>
      {(stage.capex || stage.manpower) && (
        <div className="border-t border-brand-gold/20 pt-4 grid grid-cols-2 gap-3 text-xs">
          {stage.capex && (
            <div>
              <p className="text-brand-gold font-semibold">CapEx</p>
              <p className="text-brand-muted">{stage.capex}</p>
            </div>
          )}
          {stage.manpower && (
            <div>
              <p className="text-brand-gold font-semibold">Manpower</p>
              <p className="text-brand-muted">{stage.manpower}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
