import { COMPANY, CAREER_TRACK, KEY_CREDENTIALS } from "@/lib/company-data";
import TimelineItem from "@/components/TimelineItem";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — PPS Anantams",
  description: "25 years of bitumen industry expertise. Meet Prince Pratap Shah and the story of PPS Anantams Corporation.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-r from-green-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">About Us</h1>
          <p className="text-gray-600 text-lg max-w-2xl">{COMPANY.tagline}</p>
        </div>
      </section>

      {/* Company overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Company Overview</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <strong>{COMPANY.name}</strong> is India&apos;s leading bio-modified bitumen consulting firm,
                headquartered in {COMPANY.hq}. We provide end-to-end consulting for setting up bio-bitumen
                manufacturing plants — from site selection and regulatory clearances to plant commissioning and
                connecting you with our network of 4,452 industry buyers.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded by Prince Pratap Shah with 25 years of hands-on bitumen industry experience, we have
                successfully built 10 plants across India spanning 5 product types: Emulsion, Blown Bitumen,
                CRMB, PMB, and VG30.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "GST", value: COMPANY.gst },
                  { label: "CIN", value: COMPANY.cin },
                  { label: "PAN", value: COMPANY.pan },
                  { label: "HQ", value: COMPANY.hq },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500">{label}</div>
                    <div className="text-sm font-medium text-gray-800 mt-0.5">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Founder profile */}
            <div className="bg-green-50 rounded-2xl p-6">
              <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center text-4xl mb-4">
                👤
              </div>
              <h3 className="text-xl font-bold text-gray-900">{COMPANY.owner}</h3>
              <p className="text-green-600 font-medium text-sm mb-3">Founder & Managing Director</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {COMPANY.experience}
              </p>
              <div className="text-sm text-gray-600 mb-3">
                <strong>Education:</strong> {COMPANY.education}
              </div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                🏆 {COMPANY.awards}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">25-Year Career Timeline</h2>
          <p className="text-gray-600 mb-8">From employee to founder to India&apos;s leading bio-bitumen consultant.</p>
          <div className="max-w-2xl">
            {CAREER_TRACK.map((item, i) => (
              <TimelineItem key={`${item.year}-${item.company}`} item={item} isLast={i === CAREER_TRACK.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Key Credentials */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {KEY_CREDENTIALS.map((cred, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                <span className="text-green-500 font-bold text-lg shrink-0">✓</span>
                <p className="text-gray-700 text-sm">{cred}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
