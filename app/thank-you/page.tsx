import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You — PACPL",
  description: "Your message has been received. We'll be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <div className="text-5xl mb-4">✅</div>
      <h1 className="font-display text-4xl md:text-5xl text-primary font-extrabold mb-4">
        Message Sent!
      </h1>
      <p className="text-secondary text-lg max-w-md leading-relaxed mb-2">
        We&apos;ll get back to you within 24 hours. Prince will be in touch personally.
      </p>
      <Link
        href="/"
        className="border border-accent text-accent font-semibold px-6 py-3 rounded-lg hover:bg-accent-light transition mt-6 inline-block"
      >
        ← Back to Home
      </Link>
    </main>
  );
}
