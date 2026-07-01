import PageHeader from "@/components/shared/PageHeader";
import LegalDoc from "@/components/shared/LegalDoc";
import { SITE } from "@/constants/site";

export const metadata = {
  title: "Terms & Conditions",
  description: `The terms governing your use of the ${SITE.name} platform.`,
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    heading: "Acceptance of Terms",
    body: [
      `By accessing or using ${SITE.name}, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the platform.`,
    ],
  },
  {
    heading: "Our Role",
    body: [
      `${SITE.name} is a technology platform that connects users with independent, verified advocates. We are not a law firm and do not ourselves provide legal advice or representation.`,
      "Any legal advice you receive comes directly from the independent advocate you consult, who is solely responsible for it.",
    ],
  },
  {
    heading: "User Responsibilities",
    body: [
      "You agree to provide accurate information and to use the platform only for lawful purposes. You are responsible for the confidentiality of any account or booking details.",
    ],
  },
  {
    heading: "Consultations & Fees",
    body: [
      "Consultation fees are displayed upfront before you confirm a booking. Fees are set by the platform and the advocate and may vary by matter and experience.",
      "Any engagement beyond the initial consultation is a matter between you and the advocate, subject to their separate terms.",
    ],
  },
  {
    heading: "No Guarantee of Outcome",
    body: [
      "Legal outcomes depend on many factors. Neither the platform nor any advocate guarantees a particular result. Information on this site is for general guidance and is not a substitute for professional advice.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      `To the maximum extent permitted by law, ${SITE.name} shall not be liable for any indirect or consequential losses arising from your use of the platform or reliance on advice received through it.`,
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      "We may update these Terms from time to time. Continued use of the platform after changes take effect constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `For any questions regarding these Terms, contact us at ${SITE.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our platform."
        crumbs={[{ label: "Terms & Conditions" }]}
      />
      <LegalDoc updated="1 June 2026" sections={sections} />
    </>
  );
}
