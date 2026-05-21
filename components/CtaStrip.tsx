// components/CtaStrip.tsx
import Link from "next/link";

type Props = {
  heading: string;
  subtext: string;
  buttonLabel: string;
  buttonHref: string;
};

export default function CtaStrip({ heading, subtext, buttonLabel, buttonHref }: Props) {
  return (
    <section className="bg-accent py-16 px-6 text-center">
      <h2 className="font-display text-3xl text-white font-bold mb-4">{heading}</h2>
      <p className="text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">{subtext}</p>
      <Link
        href={buttonHref}
        className="inline-block bg-white text-accent font-bold px-8 py-4 rounded-xl hover:bg-accent-light transition-colors text-sm uppercase tracking-wider"
      >
        {buttonLabel}
      </Link>
    </section>
  );
}
