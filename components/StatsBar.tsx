"use client";
import { useEffect, useRef, useState } from "react";
import { COMPANY } from "@/lib/company-data";

const STATS = [
  { value: COMPANY.yearsExperience, label: "Years Experience", suffix: "+" },
  { value: COMPANY.plantsBuilt, label: "Plants Built", suffix: "" },
  { value: COMPANY.industryContacts, label: "Industry Contacts", suffix: "+" },
  { value: 3, label: "Service Verticals", suffix: "" },
];

function StatCard({
  value,
  label,
  suffix,
  active,
}: {
  value: number;
  label: string;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(value / 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [active, value]);

  return (
    <div className="text-center px-8 py-10">
      <p className="text-4xl md:text-5xl font-extrabold text-accent">
        {active ? count.toLocaleString("en-IN") : "0"}
        {suffix}
      </p>
      <p className="text-secondary text-sm font-medium mt-2 uppercase tracking-widest">{label}</p>
    </div>
  );
}

export default function StatsBar() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-white border-y border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} active={active} />
        ))}
      </div>
    </div>
  );
}
