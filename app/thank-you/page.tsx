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
    <section className="bg-brand-navy min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="text-6xl mb-6" aria-hidden="true">✅</div>
        <h1 className="font-display text-4xl text-white mb-4">Message Sent!</h1>
        <p className="text-brand-muted leading-relaxed mb-8">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
          For urgent queries, WhatsApp us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-brand-gold text-brand-navy font-bold px-6 py-3 hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
          >
            Back to Home
          </Link>
          <a
            href={`https://wa.me/${waNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-brand-gold text-brand-gold font-bold px-6 py-3 hover:bg-brand-gold hover:text-brand-navy transition-colors text-sm uppercase tracking-wider"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
