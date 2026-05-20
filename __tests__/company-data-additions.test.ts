import {
  PMC_SERVICES,
  IT_SERVICES,
  PYROLYSIS_FEEDSTOCKS,
  PYROLYSIS_OUTPUTS,
  PYROLYSIS_PRODUCTS,
} from "@/lib/company-data";

describe("PMC_SERVICES", () => {
  it("has 6 items", () => {
    expect(PMC_SERVICES).toHaveLength(6);
  });
  it("each item has required fields", () => {
    PMC_SERVICES.forEach((s) => {
      expect(s.category).toBeTruthy();
      expect(s.icon).toBeTruthy();
      expect(s.description).toBeTruthy();
      expect(Array.isArray(s.deliverables)).toBe(true);
      expect(s.deliverables.length).toBeGreaterThan(0);
    });
  });
});

describe("IT_SERVICES", () => {
  it("has 5 items", () => {
    expect(IT_SERVICES).toHaveLength(5);
  });
  it("each item has required fields", () => {
    IT_SERVICES.forEach((s) => {
      expect(s.name).toBeTruthy();
      expect(s.icon).toBeTruthy();
      expect(s.description).toBeTruthy();
      expect(s.example).toBeTruthy();
      expect(Array.isArray(s.tags)).toBe(true);
    });
  });
});

describe("PYROLYSIS_FEEDSTOCKS", () => {
  it("has 4 items", () => {
    expect(PYROLYSIS_FEEDSTOCKS).toHaveLength(4);
  });
  it("each item has required fields", () => {
    PYROLYSIS_FEEDSTOCKS.forEach((f) => {
      expect(f.name).toBeTruthy();
      expect(f.icon).toBeTruthy();
      expect(f.description).toBeTruthy();
      expect(f.indiaVolume).toBeTruthy();
      expect(f.highlight).toBeTruthy();
    });
  });
});

describe("PYROLYSIS_OUTPUTS", () => {
  it("has 5 items", () => {
    expect(PYROLYSIS_OUTPUTS).toHaveLength(5);
  });
  it("each item has required fields", () => {
    PYROLYSIS_OUTPUTS.forEach((o) => {
      expect(o.name).toBeTruthy();
      expect(o.icon).toBeTruthy();
      expect(o.yieldRange).toBeTruthy();
      expect(o.heatingValue).toBeTruthy();
      expect(Array.isArray(o.uses)).toBe(true);
      expect(o.uses.length).toBeGreaterThan(0);
    });
  });
});

describe("PYROLYSIS_PRODUCTS", () => {
  it("has 5 items", () => {
    expect(PYROLYSIS_PRODUCTS).toHaveLength(5);
  });
  it("each item has required fields", () => {
    PYROLYSIS_PRODUCTS.forEach((p) => {
      expect(p.name).toBeTruthy();
      expect(p.icon).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.stat).toBeTruthy();
    });
  });
});
