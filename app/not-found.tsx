// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <p className="text-8xl font-display font-extrabold text-accent">404</p>
      <h1 className="text-2xl font-bold text-primary mt-4">Page Not Found</h1>
      <p className="text-secondary mt-2">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div>
        <Link
          href="/"
          className="border border-accent-border text-accent font-semibold px-6 py-3 rounded-lg hover:bg-accent-light transition inline-block mt-6"
        >
          ← Back to Home
        </Link>
        <Link
          href="/contact"
          className="bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent-hover transition inline-block mt-4 ml-4"
        >
          Contact Us →
        </Link>
      </div>
    </div>
  );
}
