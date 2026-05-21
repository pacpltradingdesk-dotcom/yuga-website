"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    router.push("/thank-you");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-primary mb-1">
          Name <span className="text-accent">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border border-border rounded-lg px-4 py-3 text-primary text-sm focus:outline-none focus:border-accent transition"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-primary mb-1">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="w-full border border-border rounded-lg px-4 py-3 text-primary text-sm focus:outline-none focus:border-accent transition"
          placeholder="Your company name (optional)"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-1">
          Phone <span className="text-accent">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full border border-border rounded-lg px-4 py-3 text-primary text-sm focus:outline-none focus:border-accent transition"
          placeholder="+91 XXXXX XXXXX"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-primary mb-1">
          Email <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-border rounded-lg px-4 py-3 text-primary text-sm focus:outline-none focus:border-accent transition"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-primary mb-1">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-border rounded-lg px-4 py-3 text-primary text-sm focus:outline-none focus:border-accent transition resize-none"
          placeholder="Tell us about your project or enquiry…"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-accent text-white font-semibold rounded-lg px-6 py-3 hover:bg-accent-hover transition disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
