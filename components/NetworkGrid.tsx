import { INDUSTRY_NETWORK } from "@/lib/company-data";

const NETWORK_ITEMS = [
  { label: "Road Contractors", count: INDUSTRY_NETWORK.contractors, icon: "🚧" },
  { label: "Bitumen Traders", count: INDUSTRY_NETWORK.traders, icon: "🏪" },
  { label: "Importers", count: INDUSTRY_NETWORK.importers, icon: "🚢" },
  { label: "Transporters", count: INDUSTRY_NETWORK.transporters, icon: "🚛" },
  { label: "Manufacturers", count: INDUSTRY_NETWORK.manufacturers, icon: "🏭" },
  { label: "Decanters", count: INDUSTRY_NETWORK.decanters, icon: "⚙️" },
];

export default function NetworkGrid() {
  return (
    <div className="bg-green-50 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-900">Live Industry Network</h3>
        <span className="text-2xl font-bold text-green-600">{INDUSTRY_NETWORK.total.toLocaleString()}</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {NETWORK_ITEMS.map((item) => (
          <div key={item.label} className="bg-white rounded-xl p-3 text-center">
            <div className="text-xl mb-1">{item.icon}</div>
            <div className="text-lg font-bold text-green-600">{item.count.toLocaleString()}</div>
            <div className="text-xs text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
