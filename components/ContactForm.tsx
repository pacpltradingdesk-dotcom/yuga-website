"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const inputClass =
  "w-full bg-white border border-border rounded-xl px-4 py-3 text-primary placeholder-secondary/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200";

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
    <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-8 shadow-sm space-y-6">
      <div>
        <label htmlFor="name" className="block text-primary text-sm font-medium mb-2">
          Full Name *
        </label>
        <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
      </div>

      <div>
        <label htmlFor="email" className="block text-primary text-sm font-medium mb-2">
          Email Address *
        </label>
        <input id="email" name="email" type="email" required placeholder="your@email.com" className={inputClass} />
      </div>

      <div>
        <label htmlFor="phone" className="block text-primary text-sm font-medium mb-2">
          Phone / WhatsApp
        </label>
        <input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className="block text-primary text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm border border-red-200 bg-red-50 px-4 py-3 rounded-xl">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-accent text-white font-semibold py-4 rounded-xl text-sm shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)] hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200"
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
