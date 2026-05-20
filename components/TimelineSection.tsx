import Image from "next/image";
import { CAREER_TRACK } from "@/lib/company-data";

const MILESTONE_IMAGES: Record<string, string> = {
  "Southern Asphalt": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  "Tiki Tar Industries": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
  "Krush Tar Industries": "https://images.unsplash.com/photo-1580795479225-c50ab8c3348d?w=400&q=80",
  "Teknobit Industries": "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=400&q=80",
  "Omnipotent Industries": "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=400&q=80",
  "YOUR BIO-BITUMEN PLANT": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&q=80",
};

export default function TimelineSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 via-green-950 to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            25 Years of Growth
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">Career Milestones</h2>
          <p className="text-gray-400 max-w-xl mx-auto">From plant manager to India&apos;s leading bio-bitumen consultant — a journey built plant by plant.</p>
        </div>

        {/* Growth arrow bar */}
        <div className="relative mb-12 hidden md:flex items-center gap-0 overflow-x-auto pb-2">
          {CAREER_TRACK.map((item, i) => (
            <div key={`${item.year}-bar`} className="flex items-center flex-1 min-w-0">
              <div className={`flex flex-col items-center ${i === CAREER_TRACK.length - 1 ? "text-orange-400" : "text-green-400"}`}>
                <div className={`w-3 h-3 rounded-full ${item.role === "CONSULTANT" || i === CAREER_TRACK.length - 1 ? "bg-orange-500 ring-4 ring-orange-500/30" : "bg-green-400"}`} />
                <span className="text-xs font-bold mt-1 whitespace-nowrap">{item.year}</span>
              </div>
              {i < CAREER_TRACK.length - 1 && (
                <div className="h-0.5 flex-1 bg-gradient-to-r from-green-500 to-green-600 mx-1" />
              )}
            </div>
          ))}
          <div className="ml-2 text-green-400 text-xl font-black">→</div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CAREER_TRACK.map((item, i) => {
            const isFuture = i === CAREER_TRACK.length - 1;
            const isConsultant = item.role === "CONSULTANT" || isFuture;
            const imgSrc = MILESTONE_IMAGES[item.company] || MILESTONE_IMAGES["Southern Asphalt"];
            return (
              <div
                key={`${item.year}-${item.company}`}
                className={`relative rounded-2xl overflow-hidden shadow-lg group ${isFuture ? "ring-2 ring-orange-500" : ""}`}
              >
                {/* Background image */}
                <div className="relative h-32">
                  <Image src={imgSrc} alt={item.company} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute inset-0 ${isFuture ? "bg-orange-950/70" : isConsultant ? "bg-green-950/65" : "bg-gray-900/60"}`} />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-black px-2.5 py-1 rounded-full ${isFuture ? "bg-orange-500 text-white" : isConsultant ? "bg-orange-400 text-orange-950" : "bg-green-500 text-white"}`}>
                      {item.year}
                    </span>
                  </div>
                  {isFuture && (
                    <div className="absolute top-3 right-3">
                      <span className="text-xs font-bold bg-white text-orange-600 px-2 py-0.5 rounded-full">YOUR PLANT</span>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-bold text-sm leading-tight truncate">{item.company}</p>
                    <p className="text-gray-300 text-xs truncate">{item.location}</p>
                  </div>
                </div>
                {/* Info */}
                <div className={`p-4 ${isFuture ? "bg-orange-950/90" : "bg-gray-900"}`}>
                  <p className="text-gray-300 text-xs mb-3 leading-relaxed min-h-[2.5rem]">{item.plantType}</p>
                  <span className={`inline-block text-xs px-2.5 py-1 rounded-full font-bold ${isFuture ? "bg-orange-500 text-white" : isConsultant ? "bg-orange-100 text-orange-700" : "bg-green-900 text-green-300"}`}>
                    {item.role}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Growth summary */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: "2001", label: "Started as Plant GM", color: "text-green-400" },
            { val: "2014", label: "First Own Venture", color: "text-green-300" },
            { val: "2016", label: "Became Consultant", color: "text-orange-400" },
            { val: "2026", label: "Your Plant Next", color: "text-orange-300" },
          ].map(({ val, label, color }) => (
            <div key={label} className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
              <div className={`text-2xl font-black ${color}`}>{val}</div>
              <div className="text-gray-400 text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
