import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-brand-navy min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="font-display text-8xl font-bold text-brand-gold mb-4">404</p>
        <h1 className="font-display text-3xl text-white mb-4">Page Not Found</h1>
        <p className="text-brand-muted mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-brand-gold text-brand-navy font-bold px-6 py-3 hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
