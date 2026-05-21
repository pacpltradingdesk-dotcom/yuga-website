import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Message Sent — YUGA",
  description: "Thank you for contacting YUGA. We will get back to you within 24 hours.",
};

export default function ThankYouPage() {
  const waNumber = COMPANY.phone.replace(/\D/g, "");

  return (
    <section className="bg-surface min-h-screen flex items-center justify-center px-6">
      <div className="bg-white border border-border rounded-2xl shadow-sm p-12 text-center max-w-lg w-full">
        <div className="text-6xl mb-6" aria-hidden="true">✅</div>
        <h1 className="font-display text-4xl text-primary font-bold mb-4">Message Sent!</h1>
        <p className="text-secondary leading-relaxed mb-8">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
          For urgent queries, WhatsApp us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-accent text-white font-bold px-6 py-3 rounded-xl shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)] hover:scale-[1.02] transition-all duration-200 text-sm uppercase tracking-wider"
          >
            Back to Home
          </Link>
          <a
            href={`https://wa.me/${waNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-accent-border text-accent font-bold px-6 py-3 rounded-xl hover:bg-accent-light transition-colors text-sm uppercase tracking-wider"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
