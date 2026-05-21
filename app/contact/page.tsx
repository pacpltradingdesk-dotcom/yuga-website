import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Contact YUGA — Bio-Bitumen Consulting",
  description:
    "Get in touch with YUGA for bio-bitumen plant setup consulting. Call, WhatsApp, or email us. Based in Vadodara, Gujarat.",
  openGraph: {
    title: "Contact YUGA",
    description: "Start your bio-bitumen project today — talk to India's leading consultant.",
    type: "website",
  },
};

const CONTACT_DETAILS = [
  { icon: "📞", label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
  { icon: "✉️", label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: "📍", label: "Headquarters", value: COMPANY.hq, href: null },
];

export default function ContactPage() {
  const waNumber = COMPANY.phone.replace(/\D/g, "");

  return (
    <>
      <PageHeader
        title="Get In Touch"
        subtitle="Start your bio-bitumen project — we respond within 24 hours"
        breadcrumb="Contact"
      />

      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-6">Reach Us</p>
            <div className="space-y-4 mb-10">
              {CONTACT_DETAILS.map(({ icon, label, value, href }) => (
                <div key={label} className="bg-surface border border-border rounded-2xl p-5 flex gap-4 items-start">
                  <span className="text-2xl shrink-0" aria-hidden="true">{icon}</span>
                  <div>
                    <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="text-primary hover:text-accent transition-colors">{value}</a>
                    ) : (
                      <p className="text-primary">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <a
              href={`https://wa.me/${waNumber}?text=Hi%20YUGA%2C%20I%20am%20interested%20in%20bio-bitumen%20plant%20setup%20consulting.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-6 py-4 rounded-xl hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
            >
              <span className="text-xl" aria-hidden="true">💬</span>
              WhatsApp Us Now
            </a>
          </div>

          <div>
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-6">Send a Message</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
