interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative bg-brand-navy py-20 px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=60)",
        }}
      />
      <div className="relative max-w-7xl mx-auto">
        <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">
          {breadcrumb}
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-white font-bold max-w-2xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-brand-muted text-lg mt-4 max-w-xl leading-relaxed">{subtitle}</p>
        )}
        <div className="w-16 h-0.5 bg-brand-gold mt-6" />
      </div>
    </section>
  );
}
