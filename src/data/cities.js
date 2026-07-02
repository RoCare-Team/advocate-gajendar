// Cities + city-service SEO combinations.
// The dynamic route /[service]/[city] is generated from the cartesian product
// of CITY_SERVICES x CITIES — add 100s of cities here without new folders.

export const cities = [
  // Chandigarh
{ slug: "chandigarh", name: "Chandigarh", state: "Chandigarh" },
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
  // Haryana
{ slug: "ambala", name: "Ambala", state: "Haryana" },
{ slug: "bahadurgarh", name: "Bahadurgarh", state: "Haryana" },
{ slug: "ballabhgarh", name: "Ballabhgarh", state: "Haryana" },
{ slug: "bhiwani", name: "Bhiwani", state: "Haryana" },
{ slug: "charkhi-dadri", name: "Charkhi Dadri", state: "Haryana" },
{ slug: "faridabad", name: "Faridabad", state: "Haryana" },
{ slug: "fatehabad", name: "Fatehabad", state: "Haryana" },
{ slug: "hisar", name: "Hisar", state: "Haryana" },
{ slug: "jhajjar", name: "Jhajjar", state: "Haryana" },
{ slug: "jind", name: "Jind", state: "Haryana" },
{ slug: "kaithal", name: "Kaithal", state: "Haryana" },
{ slug: "karnal", name: "Karnal", state: "Haryana" },
{ slug: "kurukshetra", name: "Kurukshetra", state: "Haryana" },
{ slug: "mahendragarh", name: "Mahendragarh", state: "Haryana" },
{ slug: "narnaul", name: "Narnaul", state: "Haryana" },
{ slug: "nuh", name: "Nuh", state: "Haryana" },
{ slug: "palwal", name: "Palwal", state: "Haryana" },
{ slug: "panchkula", name: "Panchkula", state: "Haryana" },
{ slug: "panipat", name: "Panipat", state: "Haryana" },
{ slug: "rewari", name: "Rewari", state: "Haryana" },
{ slug: "rohtak", name: "Rohtak", state: "Haryana" },
{ slug: "sirsa", name: "Sirsa", state: "Haryana" },
{ slug: "sonipat", name: "Sonipat", state: "Haryana" },
{ slug: "yamunanagar", name: "Yamunanagar", state: "Haryana" },

// Uttar Pradesh
{ slug: "agra", name: "Agra", state: "Uttar Pradesh" },
{ slug: "aligarh", name: "Aligarh", state: "Uttar Pradesh" },
{ slug: "bareilly", name: "Bareilly", state: "Uttar Pradesh" },
{ slug: "ghaziabad", name: "Ghaziabad", state: "Uttar Pradesh" },
{ slug: "greater-noida", name: "Greater Noida", state: "Uttar Pradesh" },
{ slug: "kanpur", name: "Kanpur", state: "Uttar Pradesh" },
{ slug: "meerut", name: "Meerut", state: "Uttar Pradesh" },
{ slug: "moradabad", name: "Moradabad", state: "Uttar Pradesh" },
{ slug: "prayagraj", name: "Prayagraj", state: "Uttar Pradesh" },
{ slug: "varanasi", name: "Varanasi", state: "Uttar Pradesh" },

// Punjab
{ slug: "amritsar", name: "Amritsar", state: "Punjab" },
{ slug: "jalandhar", name: "Jalandhar", state: "Punjab" },
{ slug: "ludhiana", name: "Ludhiana", state: "Punjab" },
{ slug: "mohali", name: "Mohali", state: "Punjab" },
{ slug: "patiala", name: "Patiala", state: "Punjab" },

// Rajasthan
{ slug: "ajmer", name: "Ajmer", state: "Rajasthan" },
{ slug: "alwar", name: "Alwar", state: "Rajasthan" },
{ slug: "bikaner", name: "Bikaner", state: "Rajasthan" },
{ slug: "jodhpur", name: "Jodhpur", state: "Rajasthan" },
{ slug: "kota", name: "Kota", state: "Rajasthan" },
{ slug: "udaipur", name: "Udaipur", state: "Rajasthan" },

// Madhya Pradesh
{ slug: "bhopal", name: "Bhopal", state: "Madhya Pradesh" },
{ slug: "gwalior", name: "Gwalior", state: "Madhya Pradesh" },
{ slug: "indore", name: "Indore", state: "Madhya Pradesh" },
{ slug: "jabalpur", name: "Jabalpur", state: "Madhya Pradesh" },

// Gujarat
{ slug: "rajkot", name: "Rajkot", state: "Gujarat" },
{ slug: "surat", name: "Surat", state: "Gujarat" },
{ slug: "vadodara", name: "Vadodara", state: "Gujarat" },

// Maharashtra
{ slug: "aurangabad", name: "Aurangabad", state: "Maharashtra" },
{ slug: "nagpur", name: "Nagpur", state: "Maharashtra" },
{ slug: "nashik", name: "Nashik", state: "Maharashtra" },
{ slug: "thane", name: "Thane", state: "Maharashtra" },

// Karnataka
{ slug: "mysuru", name: "Mysuru", state: "Karnataka" },
{ slug: "mangalore", name: "Mangaluru", state: "Karnataka" },
{ slug: "hubli", name: "Hubballi", state: "Karnataka" },

// Telangana
{ slug: "warangal", name: "Warangal", state: "Telangana" },

// Andhra Pradesh
{ slug: "guntur", name: "Guntur", state: "Andhra Pradesh" },
{ slug: "tirupati", name: "Tirupati", state: "Andhra Pradesh" },
{ slug: "vijayawada", name: "Vijayawada", state: "Andhra Pradesh" },
{ slug: "visakhapatnam", name: "Visakhapatnam", state: "Andhra Pradesh" },

// Bihar
{ slug: "gaya", name: "Gaya", state: "Bihar" },
{ slug: "patna", name: "Patna", state: "Bihar" },

// Jharkhand
{ slug: "dhanbad", name: "Dhanbad", state: "Jharkhand" },
{ slug: "ranchi", name: "Ranchi", state: "Jharkhand" },

// Chhattisgarh
{ slug: "bilaspur", name: "Bilaspur", state: "Chhattisgarh" },
{ slug: "raipur", name: "Raipur", state: "Chhattisgarh" },

// Odisha
{ slug: "bhubaneswar", name: "Bhubaneswar", state: "Odisha" },
{ slug: "cuttack", name: "Cuttack", state: "Odisha" },

// Kerala
{ slug: "kochi", name: "Kochi", state: "Kerala" },
{ slug: "kozhikode", name: "Kozhikode", state: "Kerala" },
{ slug: "thiruvananthapuram", name: "Thiruvananthapuram", state: "Kerala" },

// Assam
{ slug: "guwahati", name: "Guwahati", state: "Assam" },

// Uttarakhand
{ slug: "dehradun", name: "Dehradun", state: "Uttarakhand" },
{ slug: "haridwar", name: "Haridwar", state: "Uttarakhand" },

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
