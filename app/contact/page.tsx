import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/lib/company-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — YUGA",
  description: "Get a free consultation for your bio-bitumen plant. Call +91 7795242424 or WhatsApp Prince Shah directly.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header with image */}
      <section className="relative bg-gradient-to-r from-green-900 to-gray-800 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt="Professional office meeting"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-3">Contact Us</h1>
          <p className="text-gray-300 text-lg">
            Ready to start your bio-bitumen plant? Let&apos;s talk. First consultation is free.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl shrink-0">📞</div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <a href={`tel:${COMPANY.phone}`} className="text-green-600 hover:underline">{COMPANY.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl shrink-0">✉️</div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <a href={`mailto:${COMPANY.email}`} className="text-green-600 hover:underline">{COMPANY.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl shrink-0">📍</div>
                  <div>
                    <div className="font-semibold text-gray-900">Headquarters</div>
                    <p className="text-gray-600">{COMPANY.hq}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl shrink-0">🌐</div>
                  <div>
                    <div className="font-semibold text-gray-900">Website</div>
                    <p className="text-gray-600">{COMPANY.website}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a href="https://wa.me/917795242424?text=Hi%20Prince%20Shah%2C%20I%20am%20interested%20in%20bio-bitumen%20plant%20consulting."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-bold transition-colors w-fit">
                <span className="text-2xl">💬</span>
                <div>
                  <div>WhatsApp Prince Shah</div>
                  <div className="text-xs font-normal opacity-90">Typically replies within 1 hour</div>
                </div>
              </a>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
              <ContactForm />
              <p className="text-xs text-gray-500 mt-4">
                * After submitting, we will call you within 24 hours to schedule your free consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
