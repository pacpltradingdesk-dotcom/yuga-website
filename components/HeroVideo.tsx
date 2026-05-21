"use client";
export default function HeroVideo() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Fallback dark bg — shows when video is absent or loading */}
      <div className="absolute inset-0 bg-brand-navy" />

      <video
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        autoPlay
        muted
        loop
        playsInline
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-transparent to-brand-navy/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-6">
          India&apos;s Leading Bio-Bitumen Consultant
        </p>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6">
          India&apos;s{" "}
          <span className="text-brand-gold">Bio-Bitumen</span>{" "}
          Revolution
        </h1>
        <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          End-to-end plant setup consulting — from site selection to commercial production.
          25 years experience. 10 plants built. 4,452 verified industry contacts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-brand-gold text-brand-navy font-bold px-8 py-4 hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
          >
            Start Your Project
          </a>
          <a
            href="/services"
            className="border border-brand-gold text-brand-gold font-bold px-8 py-4 hover:bg-brand-gold hover:text-brand-navy transition-colors text-sm uppercase tracking-wider"
          >
            Our Services
          </a>
        </div>
      </div>
    </div>
  );
}
