"use client";

import { useState } from "react";
import Link from "next/link";
import { IT_SERVICES } from "@/lib/company-data";

export default function ItProductTabs() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

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
            role="tab"
            aria-selected={i === activeIndex}
            aria-controls={`panel-${i}`}
            onClick={() => setActiveIndex(i)}
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
      {IT_SERVICES.map((service, i) => {
        const features: string[] | undefined = (service as Record<string, unknown>).features as string[] | undefined;

        return (
          <div
            key={service.name}
            role="tabpanel"
            id={`panel-${i}`}
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

            {/* Key Features */}
            {features && features.length > 0 && (
              <div className="mb-6">
                <h3 className="font-display font-semibold text-primary mb-3">
                  Key Features
                </h3>
                <ul className="space-y-1">
                  {features.map((feature) => (
                    <li key={feature} className="text-secondary text-sm flex gap-2">
                      <span className="shrink-0">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

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
        );
      })}
    </div>
  );
}
