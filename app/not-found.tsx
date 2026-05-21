import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-surface min-h-screen flex items-center justify-center px-6">
      <div className="bg-white border border-border rounded-2xl shadow-sm p-12 text-center max-w-lg w-full">
        <p className="font-display text-8xl font-bold text-accent mb-4">404</p>
        <h1 className="font-display text-3xl text-primary font-bold mb-4">Page Not Found</h1>
        <p className="text-secondary mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent text-white font-bold px-6 py-3 rounded-xl shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)] hover:scale-[1.02] transition-all duration-200 text-sm uppercase tracking-wider"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
