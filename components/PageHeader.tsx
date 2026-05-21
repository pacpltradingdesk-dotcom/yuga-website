interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative bg-surface py-16 px-6 overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-light via-white to-accent-border rounded-full opacity-60 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">
          {breadcrumb}
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-primary font-extrabold max-w-2xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-secondary text-lg mt-4 max-w-xl leading-relaxed">{subtitle}</p>
        )}
        <div className="w-16 h-1 bg-accent rounded-full mt-6" />
      </div>
    </section>
  );
}
