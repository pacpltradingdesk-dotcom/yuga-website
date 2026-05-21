import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Contact — PACPL",
  description:
    "Reach out to PPS Anantams Corporation Private Limited for a consultation on bio-bitumen plant setup, pyrolysis consulting, or IT solutions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Ready to explore a bio-bitumen plant or need consulting? Send us a message and Prince will get back to you personally."
        breadcrumb="Contact"
      />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Left — Contact Form */}
          <div className="md:col-span-3">
            <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Right — Contact Info */}
          <div className="md:col-span-2">
            <div className="bg-surface border border-border rounded-2xl p-8 h-full">
              <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-6">
                Contact Details
              </p>

              <div className="space-y-5">
                <div>
                  <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                    className="text-primary font-semibold hover:text-accent transition"
                  >
                    {COMPANY.phone}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-primary font-semibold hover:text-accent transition break-all"
                  >
                    {COMPANY.email}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">
                    Headquarters
                  </p>
                  <p className="text-primary font-semibold">{COMPANY.hq}</p>
                </div>
              </div>

              <hr className="border-border my-6" />

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary font-medium">GST</span>
                  <span className="text-primary font-mono">{COMPANY.gst}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary font-medium">PAN</span>
                  <span className="text-primary font-mono">{COMPANY.pan}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary font-medium">CIN</span>
                  <span className="text-primary font-mono text-xs break-all">{COMPANY.cin}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
