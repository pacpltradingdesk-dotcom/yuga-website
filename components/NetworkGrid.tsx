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
    <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-accent">
            <th className="text-white font-semibold text-left px-6 py-4 uppercase tracking-widest text-xs">
              Contact Type
            </th>
            <th className="text-white font-semibold text-right px-6 py-4 uppercase tracking-widest text-xs">
              Contacts
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map(({ label, key }, i) => (
            <tr
              key={key}
              className={`border-b border-border ${i % 2 === 0 ? "bg-white" : "bg-surface"}`}
            >
              <td className="text-secondary px-6 py-4">{label}</td>
              <td className="text-primary font-bold text-right px-6 py-4">
                {INDUSTRY_NETWORK[key].toLocaleString("en-IN")}
              </td>
            </tr>
          ))}
          <tr className="bg-accent-light border-t-2 border-accent-border">
            <td className="text-accent font-bold px-6 py-4">Total Network</td>
            <td className="text-accent font-extrabold text-right px-6 py-4 text-lg">
              {INDUSTRY_NETWORK.total.toLocaleString("en-IN")}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
