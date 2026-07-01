import PageHeader from "@/components/shared/PageHeader";
import LegalDoc from "@/components/shared/LegalDoc";
import { SITE } from "@/constants/site";

export const metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    heading: "Introduction",
    body: [
      `At ${SITE.name}, your privacy is fundamental to the trust you place in us. This policy explains what information we collect, how we use it, and the choices you have. By using our platform, you agree to the practices described here.`,
    ],
  },
  {
    heading: "Information We Collect",
    body: [
      "We collect information you provide directly — such as your name, contact details and the nature of your legal query when you book a consultation or contact us.",
      "We may also collect limited technical data (like device and usage information) to improve our service and keep the platform secure.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "Your information is used to connect you with suitable advocates, facilitate consultations, respond to your queries and improve our services.",
      "We never sell your personal information. Details of your legal matter are shared only with the advocate you choose to consult, protected by lawyer–client confidentiality.",
    ],
  },
  {
    heading: "Confidentiality",
    body: [
      "Communications relating to your legal matter are treated with the utmost confidentiality and are protected by applicable privilege. Access is strictly limited to those who need it to provide the service.",
    ],
  },
  {
    heading: "Data Security",
    body: [
      "We use industry-standard safeguards to protect your data against unauthorised access, alteration or disclosure. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Your Rights",
    body: [
      "You may request access to, correction of, or deletion of your personal information at any time by contacting us. We will respond in accordance with applicable law.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      `If you have questions about this Privacy Policy, please reach out to us at ${SITE.email} or ${SITE.phone}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Your trust matters. Here's exactly how we handle and protect your information."
        crumbs={[{ label: "Privacy Policy" }]}
      />
      <LegalDoc updated="1 June 2026" sections={sections} />
    </>
  );
}
