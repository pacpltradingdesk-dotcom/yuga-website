"use client";

import { useState } from "react";
import Link from "next/link";
import { IT_SERVICES } from "@/lib/company-data";

export default function ItProductTabs() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleKeyDown = (e: React.KeyboardEvent, i: number) => {
    if (e.key === "ArrowRight") {
      const next = (i + 1) % IT_SERVICES.length;
      setActiveIndex(next);
    } else if (e.key === "ArrowLeft") {
      const prev = (i - 1 + IT_SERVICES.length) % IT_SERVICES.length;
      setActiveIndex(prev);
    }
  };

  return (
    <div>
      {/* Tab buttons */}
      <div
        role="tablist"
        aria-label="IT Products"
        className="flex flex-wrap gap-2 mb-8"
      >
        {IT_SERVICES.map((service, i) => (
          <button
            key={service.name}
            id={`tab-${i}`}
            role="tab"
            aria-selected={i === activeIndex}
            aria-controls={`panel-${i}`}
            tabIndex={i === activeIndex ? 0 : -1}
            onClick={() => setActiveIndex(i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className={
              i === activeIndex
                ? "px-4 py-2 rounded-full text-sm font-semibold transition bg-accent text-white"
                : "px-4 py-2 rounded-full text-sm font-semibold transition bg-white border border-border text-secondary hover:text-accent"
            }
          >
            {service.name}
          </button>
        ))}
      </div>

      {/* Tab panels */}
      {IT_SERVICES.map((service, i) => (
          <div
            key={service.name}
            role="tabpanel"
            id={`panel-${i}`}
            aria-labelledby={`tab-${i}`}
            hidden={i !== activeIndex}
            className="bg-white border border-border rounded-2xl p-8"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl" aria-hidden="true">
                {service.icon}
              </span>
              <h2 className="font-display text-2xl font-bold text-primary">
                {service.name}
              </h2>
            </div>

            {/* Description */}
            <p className="text-secondary leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Tech tags */}
            {service.tags && service.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-accent-light text-accent text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Example blockquote */}
            {service.example && (
              <blockquote className="border-l-4 border-accent pl-4 mb-6 italic text-secondary text-sm leading-relaxed">
                {service.example}
              </blockquote>
            )}

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-block bg-accent text-white font-semibold rounded-lg px-6 py-3 hover:bg-accent-hover transition"
            >
              Request This Product
            </Link>
          </div>
        ))}
    </div>
  );
}
