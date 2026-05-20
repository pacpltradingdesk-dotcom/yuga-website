export const COMPANY = {
  name: "PPS Anantams Corporation Private Limited",
  shortName: "PACPL",
  tradeName: "PPS Anantams",
  owner: "Prince Pratap Shah",
  phone: "+91 7795242424",
  email: "princepshah@gmail.com",
  website: "www.princeshah.com",
  gst: "24AAHCV1611L2ZD",
  pan: "AAHCV1611L",
  cin: "U46632GJ2019PTC110676",
  hq: "Vadodara, Gujarat",
  tagline: "Bio-Modified Bitumen — Complete Plant Setup & Consulting",
  usp: "India's Only Consultant: Site Selection > Plant Construction > Commercial Production > VG30 Supply > 4,452-Contact Buyer Network",
  plantsBuilt: 10,
  yearsExperience: 25,
  industryContacts: 4452,
  productTypes: 5,
  statesNetwork: 17,
  education: "MBA (Marketing & Finance) — Dr. C.V. Raman University | B.Com — Vinayaka Missions University | Diploma Safety & Fire Management",
  awards: "Pride of India Icon 2021 — Best Fast-Growing Business",
  experience: "25 Years in Bitumen Industry | 10 Plants Built | 5 Product Types",
};

export const CAREER_TRACK = [
  { year: 2001, company: "Southern Asphalt", location: "Mangalore, Karnataka", plantType: "Bitumen Emulsion Plant", role: "Employee (GM)" },
  { year: 2004, company: "Tiki Tar Industries", location: "Karnataka, South India", plantType: "Blown Bitumen Plant", role: "Employee (GM)" },
  { year: 2008, company: "Tiki Tar Industries", location: "Karnataka, South India", plantType: "CRMB Plant", role: "Employee (GM)" },
  { year: 2014, company: "Krush Tar Industries", location: "Karnataka, South India", plantType: "Import Terminal + Emulsion (90 days!)", role: "CEO — Own Venture" },
  { year: 2016, company: "Teknobit Industries", location: "Gujarat, West India", plantType: "Bitumen Processing Plant", role: "CONSULTANT" },
  { year: 2018, company: "Omnipotent Industries", location: "Panvel, Maharashtra", plantType: "Decanter + Warehousing", role: "Founder & MD" },
  { year: 2019, company: "Omnipotent Industries", location: "Vadodara, Gujarat", plantType: "Decanter + Warehousing", role: "Founder & MD" },
  { year: 2020, company: "Omnipotent Industries", location: "Kutch, Gujarat", plantType: "Decanter + Warehousing", role: "Founder & MD" },
  { year: 2024, company: "Teknobit Industries", location: "Mathura, UP", plantType: "Decanter Plant", role: "CONSULTANT" },
  { year: 2026, company: "YOUR BIO-BITUMEN PLANT", location: "PAN India", plantType: "Pyrolysis + VG30 Blending", role: "CONSULTANT" },
];

export const FOUR_STAGES = [
  {
    stage: 1,
    name: "Raw Material Procurement & Pelletization",
    description: "Collect agro-waste (rice straw, groundnut shells, cotton stalk, sugarcane bagasse) from farmers within 50–100 km radius. Process into uniform pellets.",
    capex: "Rs 15–30 Lakh",
    manpower: "8–12 people",
    space: "5,000–10,000 sq ft",
    icon: "🌾",
  },
  {
    stage: 2,
    name: "Pyrolysis & Bio-Oil Extraction",
    description: "Heat biomass pellets at 450–550°C in absence of oxygen. Produces bio-oil, bio-char & combustible gases. Bio-oil yield: 20–25% by weight.",
    capex: "Rs 80L–1.5 Cr",
    manpower: "10–15 people",
    space: "10,000–20,000 sq ft",
    icon: "🔥",
  },
  {
    stage: 3,
    name: "Bio-Oil Refining & Blending",
    description: "Refine & upgrade bio-oil through oxidation at 230–250°C. Blend 15–30% bio-oil with conventional VG-30 petroleum bitumen.",
    capex: "Rs 40–80 Lakh",
    manpower: "5–8 people",
    space: "5,000–8,000 sq ft",
    icon: "⚗️",
  },
  {
    stage: 4,
    name: "Bio-Bitumen Testing & Marketing",
    description: "Quality testing: penetration, softening point, ductility, rheology, rutting, cracking. NHAI/MoRTH certification. Sell to road contractors, state PWDs, NHAI projects.",
    capex: "Rs 20–40 Lakh",
    manpower: "3–5 people",
    icon: "🛣️",
  },
];

export type TargetAudience = {
  type: string;
  stages: string;
  investment: string;
  feeDpr: string;
  feeSetup: string;
  feeRetainer: string;
  keyServices: string[];
};

export const TARGET_AUDIENCES: TargetAudience[] = [
  {
    type: "New Investor (No Industry Experience)",
    stages: "ALL 4 STAGES",
    investment: "Rs 2–6 Cr",
    feeDpr: "Rs 3–5L",
    feeSetup: "Rs 15–25L",
    feeRetainer: "Rs 1–2L/month",
    keyServices: [
      "Complete A-to-Z plant setup from SCRATCH",
      "Land identification & site selection",
      "All regulatory clearances",
      "Machinery procurement",
      "Hiring & training",
      "Sales support: 2,758 contractors + NHAI",
    ],
  },
  {
    type: "Existing Bitumen Company",
    stages: "STAGE 1–2 (Client handles 3–4)",
    investment: "Rs 80L–2 Cr (add-on)",
    feeDpr: "Rs 3–5L",
    feeSetup: "Rs 10–15L",
    feeRetainer: "Rs 1L/month",
    keyServices: [
      "Raw material sourcing: farmer aggregator network",
      "Pelletization unit design",
      "Pyrolysis reactor commissioning",
      "Blending ratio calibration (15–30%)",
      "CSIR-CRRI specification compliance",
    ],
  },
  {
    type: "Existing Pyrolysis Operator",
    stages: "STAGE 3–4 (Client handles 1–2)",
    investment: "Rs 40–80L",
    feeDpr: "Rs 2–3L",
    feeSetup: "Rs 8–12L",
    feeRetainer: "Rs 1–2L/month",
    keyServices: [
      "Bio-oil oxidation & upgrading (230–250°C)",
      "VG-30 supply for blending (int'l network)",
      "Blending unit setup",
      "NHAI specification compliance",
      "MARKET ACCESS: 2,758 contractors + 994 traders",
    ],
  },
  {
    type: "Existing Biomass Pellet Manufacturer",
    stages: "STAGE 2–3–4 (Client handles 1)",
    investment: "Rs 1–2 Cr",
    feeDpr: "Rs 3–5L",
    feeSetup: "Rs 12–18L",
    feeRetainer: "Rs 1–2L/month",
    keyServices: [
      "Pyrolysis reactor selection",
      "Bio-oil extraction & quality optimization",
      "Blending with VG-30",
      "NHAI/MoRTH certification",
      "COMPLETE MARKET LINKAGE: 2,758 contractors + 360 importers",
    ],
  },
  {
    type: "Agro-Processor / Farmer Cooperative / CSIR Licensee",
    stages: "ALL 4 STAGES (with guidance)",
    investment: "Rs 1.5–4 Cr",
    feeDpr: "Rs 3–5L",
    feeSetup: "Rs 15–25L",
    feeRetainer: "Rs 1–2L/month",
    keyServices: [
      "Raw material at zero/low cost — HIGHEST MARGIN",
      "Complete plant design: pelletization + pyrolysis + blending",
      "All regulatory clearances",
      "Government subsidy guidance (MNRE, Waste-to-Wealth)",
      "FULL SALES SUPPORT",
    ],
  },
];

export const INDUSTRY_NETWORK = {
  contractors: 2758,
  traders: 994,
  importers: 360,
  transporters: 206,
  manufacturers: 84,
  decanters: 50,
  total: 4452,
};

export const KEY_CREDENTIALS = [
  "BSE-Listed Founder — Omnipotent Industries (1.2L MT, 11 JVs)",
  "Int'l Import Contracts — 2.4 Lakh MT/yr VG-30 (Iraq/USA)",
  "Proven Consultant — 2 paid projects (Teknobit 2016 & 2024)",
  "5 Product Types — Emulsion/Blown/CRMB/PMB/VG30",
  "17-State Distribution — PAN India network, first of its kind",
  "Pride of India Award — Best Fast-Growing Business 2021",
  "Iran Consulate — Direct meeting for bitumen sourcing",
  "Bitumen India Forum — Founder Member",
];

export const WHY_NOW = [
  "India became FIRST country to commercially produce bio-bitumen (Jan 2026, Min. Gadkari)",
  "CSIR-CRRI transferred technology to 14 companies on 7 Jan 2026",
  "15–30% conventional bitumen replaceable with bio-oil — saving Rs 4,500 Cr+ annually",
  "India imports 49% of bitumen (Rs 25,000 Cr/yr) — govt target: full replacement in 10 years",
  "130–216 plants needed in 5–7 years — most new entrants have ZERO bitumen expertise",
];

export const PPS_STRENGTHS = [
  "25 years bitumen industry experience — 10 plants built",
  "4,452 live industry contacts (contractors, traders, importers)",
  "International VG-30 supply contract (2.4 Lakh MT/yr, Getka USA-Iraq)",
  "Only consultant offering end-to-end: site selection to sales network",
  "BSE-listed founder background (Omnipotent Industries)",
  "5 product types expertise (Emulsion/Blown/CRMB/PMB/VG30)",
  "17-state distribution network — first of its kind",
];

export const CONSULTING_SERVICES: Record<string, string[]> = {
  Machinery: ["Verified vendor shortlisting", "Best pricing negotiation", "Procurement supervision", "Installation oversight", "Commissioning & trial run"],
  Setup: ["Site selection & layout", "Civil & electrical planning", "Utility arrangements", "Safety & fire compliance", "Pollution Control Board NOC"],
  Training: ["Plant operator training", "Quality testing procedures", "Bitumen grading knowledge", "Safety protocols", "Maintenance schedules"],
  "Market Data": ["Demand-supply analysis", "Pricing benchmarks", "Competitor mapping", "NHAI project pipeline", "State PWD tender info"],
  "Buyer/Seller Network": ["2,758 road contractors", "994 bitumen traders", "360 importers", "84 manufacturers", "NHAI/PWD direct links"],
  "Supply Chain": ["Agro-waste procurement", "Farmer aggregator setup", "VG-30 int'l supply", "Logistics optimization", "Seasonal planning"],
};
