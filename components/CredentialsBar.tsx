// components/CredentialsBar.tsx
import { KEY_CREDENTIALS } from "@/lib/company-data";

export default function CredentialsBar() {
  return (
    <section className="bg-surface py-10 px-6 overflow-hidden border-y border-border">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-5 text-center">
          Credentials
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {KEY_CREDENTIALS.map((cred) => (
            <span
              key={cred}
              className="bg-white border border-accent-border text-primary text-xs font-medium px-4 py-2 rounded-full shadow-sm"
            >
              {cred}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
