// components/OutputCard.tsx
import type { PyrolysisOutput } from "@/lib/company-data";

type Props = { output: PyrolysisOutput };

export default function OutputCard({ output }: Props) {
  return (
    <div className="bg-white border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl" aria-hidden="true">{output.icon}</span>
        <h3 className="font-display font-bold text-primary text-base leading-snug">
          {output.name}
        </h3>
      </div>
      <div className="space-y-2 mb-4">
        {output.yieldRange && (
          <div>
            <span className="text-secondary text-xs uppercase tracking-widest font-semibold">
              Yield
            </span>
            <p className="text-primary font-bold text-sm">{output.yieldRange}</p>
          </div>
        )}
        {output.heatingValue && (
          <div>
            <span className="text-secondary text-xs uppercase tracking-widest font-semibold">
              Heating Value
            </span>
            <p className="text-primary font-bold text-sm">{output.heatingValue}</p>
          </div>
        )}
      </div>
      {output.uses && output.uses.length > 0 && (
        <ul className="space-y-1">
          {output.uses.map((use) => (
            <li key={use} className="flex items-start gap-2 text-sm text-secondary">
              <span className="text-accent mt-0.5" aria-hidden="true">→</span>
              <span>{use}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
