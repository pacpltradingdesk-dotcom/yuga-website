// components/ConsultingServiceCard.tsx
type Props = {
  category: string;
  items: string[];
};

export default function ConsultingServiceCard({ category, items }: Props) {
  return (
    <div className="bg-white border border-border rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
      <h4 className="text-accent font-semibold mb-4 text-xs uppercase tracking-widest">
        {category}
      </h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-secondary text-sm">
            <span className="text-accent mt-0.5 shrink-0" aria-hidden="true">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
