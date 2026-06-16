/**
 * Official, authoritative external sources.
 * Only link to primary government sources here. Do NOT paraphrase law as fact
 * in code — link out and mark anything uncertain "verify before publication."
 */

export type Source = {
  id: string;
  label: string;
  url: string;
  agency: string;
  note?: string;
};

export const sources: Source[] = [
  {
    id: "opm-retirement",
    label: "OPM Retirement Center",
    url: "https://www.opm.gov/retirement-center/",
    agency: "U.S. Office of Personnel Management",
  },
  {
    id: "opm-disability",
    label: "OPM — FERS Disability Retirement",
    url: "https://www.opm.gov/retirement-center/fers-information/disability/",
    agency: "U.S. Office of Personnel Management",
  },
  {
    id: "opm-fehb",
    label: "OPM — FEHB Plan Information & Comparison Tools",
    url: "https://www.opm.gov/healthcare-insurance/healthcare/plan-information/",
    agency: "U.S. Office of Personnel Management",
  },
  {
    id: "opm-fegli",
    label: "OPM — FEGLI (Federal Employees’ Group Life Insurance)",
    url: "https://www.opm.gov/healthcare-insurance/life-insurance/",
    agency: "U.S. Office of Personnel Management",
  },
  {
    id: "opm-handbook",
    label: "OPM — CSRS and FERS Handbook",
    url: "https://www.opm.gov/retirement-center/publications-forms/csrsfers-handbook/",
    agency: "U.S. Office of Personnel Management",
  },
  {
    id: "ssa-disability",
    label: "SSA — Disability Benefits",
    url: "https://www.ssa.gov/benefits/disability/",
    agency: "Social Security Administration",
  },
  {
    id: "tsp",
    label: "TSP.gov — Thrift Savings Plan",
    url: "https://www.tsp.gov/",
    agency: "Federal Retirement Thrift Investment Board",
  },
  {
    id: "irs",
    label: "IRS — Tax Information",
    url: "https://www.irs.gov/",
    agency: "Internal Revenue Service",
  },
  {
    id: "mspb",
    label: "MSPB — Merit Systems Protection Board",
    url: "https://www.mspb.gov/",
    agency: "Merit Systems Protection Board",
  },
  {
    id: "opm-rif",
    label: "OPM — Reduction in Force (RIF)",
    url: "https://www.opm.gov/policy-data-oversight/workforce-restructuring/reductions-in-force/",
    agency: "U.S. Office of Personnel Management",
  },
];

export function getSources(ids: string[]): Source[] {
  return ids
    .map((id) => sources.find((s) => s.id === id))
    .filter((s): s is Source => Boolean(s));
}
