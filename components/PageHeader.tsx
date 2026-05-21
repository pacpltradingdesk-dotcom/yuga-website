// components/PageHeader.tsx
type Props = {
  title: string;
  subtitle?: string;
  breadcrumb: string;
};

export default function PageHeader({ title, subtitle, breadcrumb }: Props) {
  return (
    <section className="bg-surface py-16 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
          {breadcrumb}
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-primary font-extrabold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-secondary text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
