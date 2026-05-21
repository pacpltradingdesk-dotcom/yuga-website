// components/PyrolysisProductCard.tsx
import type { PyrolysisProduct } from "@/lib/company-data";

type Props = { product: PyrolysisProduct };

export default function PyrolysisProductCard({ product }: Props) {
  return (
    <div className="bg-white border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl" aria-hidden="true">{product.icon}</span>
        <h3 className="font-display font-bold text-primary text-base leading-snug">
          {product.name}
        </h3>
      </div>
      {product.stat && (
        <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
          {product.stat}
        </span>
      )}
      <p className="text-secondary text-sm leading-relaxed">{product.description}</p>
    </div>
  );
}
