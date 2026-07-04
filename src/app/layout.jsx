import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE } from "@/constants/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "lawyer",
    "legal consultation",
    "advocate India",
    "property lawyer",
    "divorce lawyer",
    "criminal lawyer",
    "online legal advice",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
};

// Structured data (schema.org) so search engines understand this is a legal
// service business — powers rich results and local search (e.g. "advocate Pataudi").
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE.url}/#legalservice`,
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  image: `${SITE.url}/opengraph-image`,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chamber No. 424, Judicial Court Complex, Haily Mandi Road",
    addressLocality: "Pataudi",
    addressRegion: "Haryana",
    postalCode: "122503",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${poppins.variable} ${playfair.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
