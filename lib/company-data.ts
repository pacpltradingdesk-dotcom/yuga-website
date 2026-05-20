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

// ── PMC Services ──────────────────────────────────────────────────────────────

export type PmcService = {
  category: string;
  icon: string;
  description: string;
  deliverables: string[];
};

export const PMC_SERVICES: PmcService[] = [
  {
    category: "Feasibility & DPR",
    icon: "📋",
    description: "Project feasibility studies, detailed project reports, financial modelling, ROI analysis, and land/site assessment before a single rupee is spent.",
    deliverables: ["Feasibility Report", "Detailed Project Report (DPR)", "Financial projections & ROI model", "Site assessment report"],
  },
  {
    category: "Procurement Management",
    icon: "🔧",
    description: "End-to-end vendor identification, RFQ preparation, quotation comparison, price negotiation, and purchase order management for machinery and materials.",
    deliverables: ["Vendor shortlist & scoring matrix", "Technical specifications", "Price benchmarking report", "PO tracking & follow-up"],
  },
  {
    category: "Civil & Construction Supervision",
    icon: "🏗️",
    description: "On-site supervision of civil works, structural fabrication, equipment foundations, and utility installation to ensure quality and schedule compliance.",
    deliverables: ["Daily/weekly site progress reports", "Quality inspection checklists", "Milestone MIS dashboard", "Snag list & close-out report"],
  },
  {
    category: "Regulatory Clearances",
    icon: "📜",
    description: "Complete regulatory support from PCB NOC to factory license, fire safety NOC, MSME registration, and electricity/water connections — no clearance left pending.",
    deliverables: ["PCB / CPCB NOC", "Factory License (Factories Act)", "Fire NOC", "MSME Udyam Registration", "Electricity & water NOC"],
  },
  {
    category: "Commissioning & Training",
    icon: "⚙️",
    description: "Full plant commissioning including trial runs, quality calibration, operator training, and SOP documentation so your team runs the plant independently from day one.",
    deliverables: ["Trial run report & sign-off", "Quality test certificates", "Operator training (classroom + hands-on)", "SOPs & maintenance manual"],
  },
  {
    category: "Post-Handover Support",
    icon: "🤝",
    description: "Monthly retainer-based support: troubleshooting, market intelligence updates, buyer introductions, and process optimisation as the plant scales up.",
    deliverables: ["Monthly review calls", "Performance benchmarking", "Market intelligence updates", "Buyer/supplier introductions"],
  },
];

// ── IT Services ───────────────────────────────────────────────────────────────

export type ItService = {
  name: string;
  icon: string;
  description: string;
  example: string;
  tags: string[];
};

export const IT_SERVICES: ItService[] = [
  {
    name: "Consultant & Client Portals",
    icon: "🖥️",
    description: "Custom web portals for consultants and their clients — dashboards, document management, project stage tracking, communication logs, and payment milestone tracking.",
    example: "Bio-bitumen consultant portal built for PPS Anantams: client onboarding, 4-stage project tracker, document uploads, payment milestones, and WhatsApp integration.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Plant Management Dashboards",
    icon: "📊",
    description: "Real-time production tracking dashboards: daily output, raw material consumption, quality test results, cost-per-unit analytics, and dispatch logs.",
    example: "Pyrolysis plant dashboard: live bio-oil yield tracking, reactor temperature logs, biomass inventory, dispatch MIS, and daily shift reports.",
    tags: ["Data visualisation", "REST APIs", "Real-time updates"],
  },
  {
    name: "Supply Chain & Vendor Systems",
    icon: "🔗",
    description: "Vendor management portals, procurement tracking, price comparison dashboards, and purchase order automation for industrial supply chains.",
    example: "Bitumen import tracking system: vessel tracking, SGS certificates, LC document management, payment schedule alerts.",
    tags: ["Workflow automation", "Document management", "Notifications"],
  },
  {
    name: "Market Intelligence Tools",
    icon: "📈",
    description: "Competitor price tracking dashboards, demand-supply analysis, NHAI project pipeline monitors, and buyer/seller matching tools for industrial markets.",
    example: "Bitumen price tracker: daily price feeds from 17 states, competitor mapping, margin calculator, and tender alert notifications.",
    tags: ["Data aggregation", "Pricing intelligence", "Email/SMS alerts"],
  },
  {
    name: "Mobile Apps for Plant Operations",
    icon: "📱",
    description: "Field-ready mobile apps for plant supervisors: shift reports, quality test entry, safety checklists, incident logging, and photo uploads — offline-capable.",
    example: "Plant supervisor app: daily shift report entry, dispatch log, quality check form, safety incident logging with photo evidence upload.",
    tags: ["Progressive Web App", "Offline-capable", "iOS & Android"],
  },
];

// ── Pyrolysis Data ─────────────────────────────────────────────────────────────

export type PyrolysisFeedstock = {
  name: string;
  icon: string;
  description: string;
  indiaVolume: string;
  highlight: string;
  imgSrc: string;
};

export const PYROLYSIS_FEEDSTOCKS: PyrolysisFeedstock[] = [
  {
    name: "Agricultural Biomass",
    icon: "🌾",
    description: "Rice husk, sugarcane bagasse, cotton stalk, wheat straw, coconut shell, and wood waste from India's vast agro-processing sector.",
    indiaVolume: "750 million MT/year available (MNRE estimate)",
    highlight: "Rice straw: 100–120 MT/yr · Bagasse: 130–150 MT/yr · Coconut shell: 5 MT/yr",
    imgSrc: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80",
  },
  {
    name: "Plastic Waste",
    icon: "♻️",
    description: "LDPE, HDPE, PP, and mixed plastics from packaging, bottles, and films. India's plastic waste is growing — and only 8% is formally recycled.",
    indiaVolume: "15.5 million MT/year generated across India",
    highlight: "LDPE yields 93% pyrolysis oil · Plastic oil has >40 MJ/kg — diesel equivalent",
    imgSrc: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=600&q=80",
  },
  {
    name: "End-of-Life Tyres",
    icon: "🚗",
    description: "Scrap tyres from cars, trucks, and heavy machinery. EPR regulations now mandate formal recycling — creating a guaranteed feedstock supply.",
    indiaVolume: "2.5 million MT/year generated; additional 1.8 MT imported for recycling",
    highlight: "1,000 kg of tyres → 450 L fuel oil + 330 kg carbon black + 125 kg syngas",
    imgSrc: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80",
  },
  {
    name: "Municipal Solid Waste",
    icon: "🏙️",
    description: "The combustible, non-organic fraction (RDF) from urban waste — plastics, paper, and textiles — is suitable for thermal pyrolysis.",
    indiaVolume: "1,50,000–1,70,000 tonnes/day generated across Indian cities",
    highlight: "Swachh Bharat Mission actively supports Waste-to-Energy conversion pathways",
    imgSrc: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80",
  },
];

export type PyrolysisOutput = {
  name: string;
  icon: string;
  yieldRange: string;
  heatingValue: string;
  uses: string[];
  colorClass: string;
};

export const PYROLYSIS_OUTPUTS: PyrolysisOutput[] = [
  {
    name: "Bio-Oil / Pyrolysis Oil",
    icon: "🛢️",
    yieldRange: "60–70% of dry biomass weight (fast pyrolysis)",
    heatingValue: "14–18 MJ/kg as-produced; upgradeable to 35 MJ/kg",
    uses: ["Industrial boiler & furnace fuel", "Bio-bitumen feedstock for roads", "Chemical extraction (phenols, acetic acid)", "Diesel blending after hydrotreatment"],
    colorClass: "bg-orange-50 border-orange-200",
  },
  {
    name: "Bio-Char / Charcoal",
    icon: "⚫",
    yieldRange: "25–35% of biomass (slow pyrolysis optimised for char)",
    heatingValue: "28–32 MJ/kg — comparable to sub-bituminous coal",
    uses: ["Soil amendment & carbon sequestration", "Charcoal briquettes for industry & export", "Activated carbon precursor", "Industrial process fuel"],
    colorClass: "bg-gray-50 border-gray-200",
  },
  {
    name: "Syngas (Producer Gas)",
    icon: "💨",
    yieldRange: "10–20% of biomass; 60–80% in flash pyrolysis",
    heatingValue: "4–18 MJ/Nm³ depending on feedstock and temperature",
    uses: ["Recirculated to heat the pyrolysis reactor (self-sufficient energy loop)", "Power generation via gas engines/turbines", "BioCNG production under SATAT scheme", "Fischer-Tropsch chemical synthesis"],
    colorClass: "bg-blue-50 border-blue-200",
  },
  {
    name: "Carbon Black (Tyre Pyrolysis)",
    icon: "🖤",
    yieldRange: "~330 kg per tonne of waste tyres processed",
    heatingValue: "~32 MJ/kg combustion value; rCB replaces virgin carbon black grades N330/N550/N660",
    uses: ["Rubber & tyre manufacturing reinforcement", "Printing inks & pigments", "Plastic compounding & UV protection", "Asphalt & concrete filler"],
    colorClass: "bg-slate-50 border-slate-200",
  },
  {
    name: "Pyrolysis Fuel Oil (Plastic)",
    icon: "⛽",
    yieldRange: "600–930 litres per tonne of plastic input",
    heatingValue: ">40 MJ/kg — diesel-equivalent calorific value",
    uses: ["Industrial diesel substitute for boilers & generators", "Blending with conventional diesel (up to 30%)", "Shipping & marine fuel (blended)", "Petrochemical cracker feedstock"],
    colorClass: "bg-yellow-50 border-yellow-200",
  },
];

export type PyrolysisProduct = {
  name: string;
  icon: string;
  description: string;
  stat: string;
};

export const PYROLYSIS_PRODUCTS: PyrolysisProduct[] = [
  {
    name: "Bio-Bitumen / Bio-Asphalt",
    icon: "🛣️",
    description: "Replaces 15–30% of petroleum bitumen in road construction. India became the first country globally to commercially produce bio-bitumen (Jan 2026, CSIR-CRRI + Ministry Gadkari).",
    stat: "Up to 70% lower GHG emissions vs conventional petroleum bitumen",
  },
  {
    name: "Activated Carbon",
    icon: "🔬",
    description: "High-surface-area carbon (500–1,500 m²/g) produced by activating biochar with steam or chemicals. Used in water treatment, air purification, gold recovery, and pharmaceuticals.",
    stat: "India activated carbon market: USD 241 million (2024), growing at 4.5% CAGR",
  },
  {
    name: "Charcoal Briquettes",
    icon: "🔥",
    description: "Uniform high-energy briquettes (28–32 MJ/kg) formed from biochar + natural binder. Used in industrial kilns, hookah/shisha export, restaurant BBQ, and rural cooking fuel.",
    stat: "India charcoal market valued at USD 8 billion (2025), growing 4.1% annually",
  },
  {
    name: "Recovered Carbon Black (rCB)",
    icon: "⚫",
    description: "Processed rCB from tyre pyrolysis replaces virgin carbon black grades N330, N550, N660 in rubber, tyres, plastics, and printing inks — a strategic import substitute.",
    stat: "India imports 2.5 million MT of virgin carbon black annually — rCB addresses this directly",
  },
  {
    name: "Alternative Fuels (BioCNG / Fuel Oil)",
    icon: "⚡",
    description: "Plastic pyrolysis oil as industrial diesel substitute; syngas-derived BioCNG under SATAT scheme; tyre pyrolysis oil for cement kilns, boilers, and power generation.",
    stat: "India's total Waste-to-Energy potential: >5,000 MW (MNRE estimate)",
  },
];
