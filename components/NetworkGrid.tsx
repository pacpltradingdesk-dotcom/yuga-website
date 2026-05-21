import { INDUSTRY_NETWORK } from "@/lib/company-data";

const ROWS = [
  { label: "Road Contractors", key: "contractors" as const },
  { label: "Bitumen Traders", key: "traders" as const },
  { label: "Importers", key: "importers" as const },
  { label: "Transporters", key: "transporters" as const },
  { label: "Manufacturers", key: "manufacturers" as const },
  { label: "Decanters", key: "decanters" as const },
];

export default function NetworkGrid() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-brand-gold">
            <th className="text-brand-navy font-bold text-left px-6 py-4 uppercase tracking-widest text-xs">
              Contact Type
            </th>
            <th className="text-brand-navy font-bold text-right px-6 py-4 uppercase tracking-widest text-xs">
              Contacts
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map(({ label, key }, i) => (
            <tr
              key={key}
              className={`border-b border-brand-gold/10 ${i % 2 === 0 ? "bg-brand-card" : "bg-brand-slate"}`}
            >
              <td className="text-brand-muted px-6 py-4">{label}</td>
              <td className="text-brand-gold font-bold text-right px-6 py-4 font-sans">
                {INDUSTRY_NETWORK[key].toLocaleString()}
              </td>
            </tr>
          ))}
          <tr className="bg-brand-navy border-t-2 border-brand-gold">
            <td className="text-white font-bold px-6 py-4 font-display">Total Network</td>
            <td className="text-brand-gold font-extrabold text-right px-6 py-4 text-lg">
              {INDUSTRY_NETWORK.total.toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
