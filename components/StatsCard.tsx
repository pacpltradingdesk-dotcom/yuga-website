// components/StatsCard.tsx
import { COMPANY } from "@/lib/company-data";

export default function StatsCard() {
  const stats = [
    { value: `${COMPANY.plantsBuilt}`, label: "Plants Built" },
    { value: `${COMPANY.yearsExperience} yrs`, label: "Experience" },
    { value: COMPANY.industryContacts.toLocaleString(), label: "Industry Contacts" },
    { value: `${COMPANY.statesNetwork}`, label: "States Network" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-accent-border shadow-sm p-6">
      <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-5">
        By the Numbers
      </p>
      <div className="grid grid-cols-2 gap-4">
        {stats.map(({ value, label }) => (
          <div key={label} className="bg-surface rounded-xl p-4 text-center">
            <p className="font-display text-3xl font-extrabold text-accent leading-none mb-1">
              {value}
            </p>
            <p className="text-secondary text-xs">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
