

import Cities from "@/components/home/Cities";

export const metadata = {
  title: "All Cities | Advocate Gajender Sharma",
  description: "Browse all cities where our legal services are available.",
  alternates: { canonical: "/cities" },
};

export default function CitiesPage() {
  return <Cities showAll={true} />;
}