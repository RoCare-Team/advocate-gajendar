import Container from "@/components/ui/Container";
import PageHeader from "@/components/shared/PageHeader";
import FAQAccordion from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import { faqs } from "@/data/faqs";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about booking legal consultations, lawyer verification, confidentiality, pricing and more.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="Help Centre"
        title="Frequently asked questions"
        subtitle="Everything you need to know about consulting a lawyer through our platform. Can't find your answer? Contact our support team."
        crumbs={[{ label: "FAQ" }]}
      />

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <FAQAccordion items={faqs} />
        </Container>
      </section>

      <CTASection
        title="Still have questions?"
        subtitle="Our support team is here to help you find the right advocate for your matter."
        primary={{ label: "Contact Support", href: "/contact" }}
      />
    </>
  );
}
