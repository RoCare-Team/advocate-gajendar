import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/shared/FAQAccordion";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions? We have answers"
          subtitle="Everything you need to know about consulting a lawyer through our platform."
        />
        <div className="mt-12">
          <FAQAccordion items={faqs.slice(0, 6)} />
        </div>
      </Container>
    </section>
  );
}
