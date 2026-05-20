type Stage = {
  stage: number;
  name: string;
  description: string;
  capex: string;
  manpower: string;
  space?: string;
  icon: string;
};

export default function ServiceCard({ stage }: { stage: Stage }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{stage.icon}</span>
        <span className="text-xs font-semibold text-orange-500 uppercase tracking-wide">
          Stage {stage.stage}
        </span>
      </div>
      <h3 className="font-bold text-gray-900 mb-3 leading-snug">{stage.name}</h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{stage.description}</p>
      <div className="space-y-1 text-xs text-gray-500 border-t border-gray-50 pt-3">
        <div><span className="font-medium text-gray-700">CAPEX:</span> {stage.capex}</div>
        <div><span className="font-medium text-gray-700">Manpower:</span> {stage.manpower}</div>
        {stage.space && <div><span className="font-medium text-gray-700">Space:</span> {stage.space}</div>}
      </div>
    </div>
  );
}
