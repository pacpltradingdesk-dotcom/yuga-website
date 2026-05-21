"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "YOUR_FORM_ID";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);

    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        router.push("/thank-you");
      } else {
        setError("Could not send message. Please try WhatsApp or email us directly.");
      }
    } catch {
      setError("Network error. Please try again or contact us via WhatsApp.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-brand-card p-8 space-y-6">
      <div>
        <label htmlFor="name" className="block text-brand-muted text-sm mb-2">
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full bg-brand-navy border border-brand-gold/20 text-white placeholder-brand-muted/50 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-brand-muted text-sm mb-2">
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="w-full bg-brand-navy border border-brand-gold/20 text-white placeholder-brand-muted/50 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-brand-muted text-sm mb-2">
          Phone / WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          className="w-full bg-brand-navy border border-brand-gold/20 text-white placeholder-brand-muted/50 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-brand-muted text-sm mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project..."
          className="w-full bg-brand-navy border border-brand-gold/20 text-white placeholder-brand-muted/50 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors resize-none"
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm border border-red-400/30 bg-red-400/10 px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-brand-gold text-brand-navy font-bold py-4 text-sm uppercase tracking-wider hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
