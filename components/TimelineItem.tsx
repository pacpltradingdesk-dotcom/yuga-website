type CareerEntry = {
  year: number;
  company: string;
  location: string;
  plantType: string;
  role: string;
};

export default function TimelineItem({ item, isLast = false }: { item: CareerEntry; isLast?: boolean }) {
  const isConsultant = item.role === "CONSULTANT";
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 ${isConsultant ? "bg-orange-500" : "bg-green-600"}`}>
          {item.year.toString().slice(2)}
        </div>
        {!isLast && <div className="w-0.5 bg-gray-200 flex-1 mt-1" />}
      </div>
      <div className="pb-8">
        <div className="text-xs text-gray-500 mb-1">{item.year}</div>
        <div className="font-bold text-gray-900">{item.company}</div>
        <div className="text-sm text-gray-600">{item.plantType}</div>
        <div className="text-xs text-gray-500">{item.location}</div>
        <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full font-medium ${isConsultant ? "bg-orange-100 text-orange-700" : "bg-green-100 text-green-700"}`}>
          {item.role}
        </span>
      </div>
    </div>
  );
}
