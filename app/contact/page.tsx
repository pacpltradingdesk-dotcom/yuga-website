// app/contact/page.tsx
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/lib/company-data";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — YUGA",
  description:
    "Reach out to YUGA (PPS Anantams Corporation Private Limited) for a consultation on bio-bitumen plant setup, pyrolysis consulting, or IT solutions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Ready to explore a bio-bitumen plant or need consulting? Send us a message and Prince will get back to you personally."
        breadcrumb="Contact"
        bgImage="/assets/hero-bg.png"
      />

      <section className="py-24 px-6 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-eco/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 relative z-10">
          {/* Left — Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent" />
              
              <h2 className="text-3xl font-display font-extrabold text-white mb-2 tracking-tight">Send Us a Message</h2>
              <p className="text-secondary mb-10 leading-relaxed">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              <ContactForm />
            </div>
          </div>

          {/* Right — Contact Info */}
          <div className="lg:col-span-2">
            <div className="relative rounded-3xl p-8 md:p-10 h-full flex flex-col overflow-hidden border border-white/10 group shadow-2xl">
              {/* Background Image with hover zoom */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/assets/hero-bg.png')" }}
              />
              {/* Dark Readability Overlay */}
              <div className="absolute inset-0 bg-[#0B0F19]/90 md:bg-[#0B0F19]/85 mix-blend-multiply transition-colors group-hover:bg-[#0B0F19]/90" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0F172A]/90 to-[#0F172A]/70 opacity-95" />
              
              {/* Glow effects */}
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/15 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute top-0 left-0 w-32 h-32 bg-eco/10 rounded-full blur-[50px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <p className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-8">
                    <span className="w-4 h-px bg-accent/50" />
                    Contact Details
                  </p>

                  <div className="space-y-8">
                    <div className="flex gap-4 items-start group/item">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-accent/15 group-hover/item:border-accent/40 transition-all duration-300">
                        <Phone className="text-accent" size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">
                          Phone
                        </p>
                        <a
                          href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                          className="text-white font-extrabold text-lg hover:text-accent transition-colors tracking-tight"
                        >
                          {COMPANY.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start group/item">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-accent/15 group-hover/item:border-accent/40 transition-all duration-300">
                        <Mail className="text-accent" size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">
                          Email
                        </p>
                        <a
                          href={`mailto:${COMPANY.email}`}
                          className="text-white font-extrabold text-lg hover:text-accent transition-colors break-all tracking-tight"
                        >
                          {COMPANY.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start group/item">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-accent/15 group-hover/item:border-accent/40 transition-all duration-300">
                        <MapPin className="text-accent" size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">
                          Headquarters
                        </p>
                        <p className="text-white font-semibold leading-relaxed text-lg tracking-tight">{COMPANY.hq}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm group/row">
                      <span className="text-secondary font-bold uppercase tracking-widest text-[10px]">GST Number</span>
                      <span className="text-white font-mono bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5 group-hover/row:border-white/20 transition-colors text-xs">{COMPANY.gst}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm group/row">
                      <span className="text-secondary font-bold uppercase tracking-widest text-[10px]">PAN Number</span>
                      <span className="text-white font-mono bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5 group-hover/row:border-white/20 transition-colors text-xs">{COMPANY.pan}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm group/row">
                      <span className="text-secondary font-bold uppercase tracking-widest text-[10px]">Corporate CIN</span>
                      <span className="text-white font-mono text-[10px] sm:text-xs break-all bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5 group-hover/row:border-white/20 transition-colors">{COMPANY.cin}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
