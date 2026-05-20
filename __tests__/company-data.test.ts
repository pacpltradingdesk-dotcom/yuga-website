import { COMPANY, CAREER_TRACK, FOUR_STAGES, TARGET_AUDIENCES, INDUSTRY_NETWORK, KEY_CREDENTIALS, WHY_NOW, PPS_STRENGTHS, CONSULTING_SERVICES } from "@/lib/company-data";

describe("company-data", () => {
  it("COMPANY has required fields", () => {
    expect(COMPANY.name).toBe("PPS Anantams Corporation Private Limited");
    expect(COMPANY.phone).toBe("+91 7795242424");
    expect(COMPANY.plantsBuilt).toBe(10);
    expect(COMPANY.yearsExperience).toBe(25);
    expect(COMPANY.industryContacts).toBe(4452);
    expect(COMPANY.statesNetwork).toBe(17);
  });

  it("CAREER_TRACK has 10 entries", () => {
    expect(CAREER_TRACK).toHaveLength(10);
    expect(CAREER_TRACK[0].year).toBe(2001);
    expect(CAREER_TRACK[9].year).toBe(2026);
  });

  it("FOUR_STAGES has 4 entries", () => {
    expect(FOUR_STAGES).toHaveLength(4);
    expect(FOUR_STAGES[0].stage).toBe(1);
    expect(FOUR_STAGES[3].stage).toBe(4);
  });

  it("TARGET_AUDIENCES has 5 entries", () => {
    expect(TARGET_AUDIENCES).toHaveLength(5);
  });

  it("INDUSTRY_NETWORK total matches sum", () => {
    const sum = INDUSTRY_NETWORK.contractors + INDUSTRY_NETWORK.traders +
      INDUSTRY_NETWORK.importers + INDUSTRY_NETWORK.transporters +
      INDUSTRY_NETWORK.manufacturers + INDUSTRY_NETWORK.decanters;
    expect(sum).toBe(INDUSTRY_NETWORK.total);
  });

  it("WHY_NOW has 5 points", () => {
    expect(WHY_NOW).toHaveLength(5);
  });

  it("PPS_STRENGTHS has 7 entries", () => {
    expect(PPS_STRENGTHS).toHaveLength(7);
  });
});
