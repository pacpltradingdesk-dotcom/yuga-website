// components/Logo.tsx
import React from "react";

interface LogoProps {
  variant?: "horizontal" | "vertical";
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ variant = "vertical", className = "", iconOnly = false }: LogoProps) {
  // SVG Icon representing: gold star on top of an upward-pointing gold arrow
  const icon = (
    <svg 
      viewBox="0 0 40 40" 
      className="w-10 h-10 select-none shrink-0" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Left side gradient (Lighter gold) */}
        <linearGradient id="gold-left" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        {/* Right side gradient (Darker gold) */}
        <linearGradient id="gold-right" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="50%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        {/* Glow filter for the star */}
        <filter id="star-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Star at the top - centered around (20, 5) */}
      <polygon
        points="20,1.5 21.3,5.2 25.1,5.2 22,7.5 23.2,11.2 20,8.9 16.8,11.2 18,7.5 14.9,5.2 18.7,5.2"
        fill="#FDE68A"
        filter="url(#star-glow)"
      />

      {/* Left half of the 3D arrow */}
      <path
        d="M 20 13 L 9 24 L 16 23 L 16 36 L 20 36 Z"
        fill="url(#gold-left)"
      />

      {/* Right half of the 3D arrow */}
      <path
        d="M 20 13 L 20 36 L 24 36 L 24 23 L 31 24 Z"
        fill="url(#gold-right)"
      />
    </svg>
  );

  if (iconOnly) return icon;

  if (variant === "vertical") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {/* Icon (Star + Arrow) */}
        <div className="mb-2 flex items-center justify-center">
          {icon}
        </div>
        {/* YUGA Text in large bold serif */}
        <span className="font-serif text-3xl font-extrabold tracking-widest text-primary leading-none">
          YUGA
        </span>
        {/* Tagline */}
        <span className="text-[8px] font-bold tracking-[0.25em] text-accent uppercase mt-2.5 whitespace-nowrap">
          VISION • STRATEGY • EXECUTION
        </span>
      </div>
    );
  }

  // Horizontal variant (Ideal for Navbar)
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Icon (Star + Arrow) */}
      <div className="flex items-center justify-center">
        {icon}
      </div>
      {/* Text Stack */}
      <div className="flex flex-col justify-center leading-none">
        <span className="font-serif text-2xl font-black tracking-wider text-primary leading-tight group-hover:text-accent transition-colors">
          YUGA
        </span>
        <span className="text-[7px] font-bold tracking-[0.2em] text-accent uppercase mt-1 whitespace-nowrap">
          VISION • STRATEGY • EXECUTION
        </span>
      </div>
    </div>
  );
}
