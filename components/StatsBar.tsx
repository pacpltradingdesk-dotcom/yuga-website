"use client";
import { useEffect, useRef, useState } from "react";
import { COMPANY } from "@/lib/company-data";

const STATS = [
  { value: COMPANY.yearsExperience, label: "Years Experience", suffix: "+" },
  { value: COMPANY.plantsBuilt, label: "Plants Built", suffix: "" },
  { value: COMPANY.industryContacts, label: "Industry Contacts", suffix: "+" },
  { value: COMPANY.statesNetwork, label: "States Network", suffix: "" },
];

function StatCard({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setActive(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const steps = 60;
    const duration = 2000;
    const increment = value / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) { setCount(value); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [active, value]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl font-bold text-green-600">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 mt-1 text-sm font-medium">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {STATS.map((stat) => <StatCard key={stat.label} {...stat} />)}
        </div>
      </div>
    </section>
  );
}
