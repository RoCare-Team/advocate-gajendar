// Cities + city-service SEO combinations.
// The dynamic route /[service]/[city] is generated from the cartesian product
// of CITY_SERVICES x CITIES — add 100s of cities here without new folders.

export const cities = [
  { slug: "delhi", name: "Delhi", state: "Delhi NCR" },
  { slug: "noida", name: "Noida", state: "Uttar Pradesh" },
  { slug: "gurgaon", name: "Gurgaon", state: "Haryana" },
  { slug: "mumbai", name: "Mumbai", state: "Maharashtra" },
  { slug: "pune", name: "Pune", state: "Maharashtra" },
  { slug: "bengaluru", name: "Bengaluru", state: "Karnataka" },
  { slug: "hyderabad", name: "Hyderabad", state: "Telangana" },
  { slug: "chennai", name: "Chennai", state: "Tamil Nadu" },
  { slug: "kolkata", name: "Kolkata", state: "West Bengal" },
  { slug: "jaipur", name: "Jaipur", state: "Rajasthan" },
  { slug: "lucknow", name: "Lucknow", state: "Uttar Pradesh" },
  { slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat" },
];

// SEO service landing pages. `practiceArea` links back to data/practiceAreas.js.
export const cityServices = [
  {
    slug: "property-lawyer",
    name: "Property Lawyer",
    practiceArea: "property",
    description:
      "verified property advocates for title verification, disputes, registration and RERA matters",
  },
  {
    slug: "divorce-lawyer",
    name: "Divorce Lawyer",
    practiceArea: "family",
    description:
      "experienced divorce and matrimonial lawyers for mutual, contested divorce and custody",
  },
  {
    slug: "criminal-lawyer",
    name: "Criminal Lawyer",
    practiceArea: "criminal",
    description:
      "top criminal defence advocates for bail, FIR quashing and trial representation",
  },
  {
    slug: "civil-lawyer",
    name: "Civil Lawyer",
    practiceArea: "civil",
    description:
      "civil litigation experts for recovery suits, injunctions and property disputes",
  },
  {
    slug: "family-lawyer",
    name: "Family Lawyer",
    practiceArea: "family",
    description:
      "compassionate family lawyers for divorce, maintenance, custody and guardianship",
  },
  {
    slug: "corporate-lawyer",
    name: "Corporate Lawyer",
    practiceArea: "corporate",
    description:
      "corporate advisors for contracts, compliance, M&A and company matters",
  },
  {
    slug: "gst-lawyer",
    name: "GST Lawyer",
    practiceArea: "gst",
    description:
      "GST specialists for registration, notices, refunds and appeals",
  },
  {
    slug: "tax-lawyer",
    name: "Tax Lawyer",
    practiceArea: "tax",
    description:
      "income-tax experts for notices, assessments and appeals",
  },
];

export function getCity(slug) {
  return cities.find((c) => c.slug === slug);
}

export function getCityService(slug) {
  return cityServices.find((s) => s.slug === slug);
}

// All valid /[service]/[city] combinations for generateStaticParams.
export function getCityServiceParams() {
  const params = [];
  for (const service of cityServices) {
    for (const city of cities) {
      params.push({ service: service.slug, city: city.slug });
    }
  }
  return params;
}
