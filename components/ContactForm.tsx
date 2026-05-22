"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, User, Building, Phone, Mail, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    router.push("/thank-you");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative group">
          <label htmlFor="name" className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2">
            Name <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-secondary group-focus-within:text-accent transition-colors">
              <User size={18} />
            </div>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white text-sm focus:outline-none focus:border-accent focus:bg-white/10 transition-all placeholder:text-secondary/50"
              placeholder="Your full name"
            />
          </div>
        </div>

        <div className="relative group">
          <label htmlFor="company" className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2">
            Company
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-secondary group-focus-within:text-accent transition-colors">
              <Building size={18} />
            </div>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white text-sm focus:outline-none focus:border-accent focus:bg-white/10 transition-all placeholder:text-secondary/50"
              placeholder="Your company name"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative group">
          <label htmlFor="phone" className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2">
            Phone <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-secondary group-focus-within:text-accent transition-colors">
              <Phone size={18} />
            </div>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white text-sm focus:outline-none focus:border-accent focus:bg-white/10 transition-all placeholder:text-secondary/50"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
        </div>

        <div className="relative group">
          <label htmlFor="email" className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2">
            Email <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-secondary group-focus-within:text-accent transition-colors">
              <Mail size={18} />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white text-sm focus:outline-none focus:border-accent focus:bg-white/10 transition-all placeholder:text-secondary/50"
              placeholder="you@example.com"
            />
          </div>
        </div>
      </div>

      <div className="relative group">
        <label htmlFor="message" className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2">
          Message <span className="text-accent">*</span>
        </label>
        <div className="relative">
          <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-secondary group-focus-within:text-accent transition-colors">
            <MessageSquare size={18} />
          </div>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white text-sm focus:outline-none focus:border-accent focus:bg-white/10 transition-all resize-none placeholder:text-secondary/50"
            placeholder="Tell us about your project or enquiry…"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-accent text-white font-bold tracking-wide rounded-xl px-6 py-4 hover:bg-accent-hover transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] disabled:opacity-60 flex items-center justify-center gap-2 group"
      >
        {loading ? (
          "Sending…"
        ) : (
          <>
            Send Message
            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}
