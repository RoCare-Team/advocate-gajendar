import { Suspense } from "react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/shared/PageHeader";
import CTASection from "@/components/shared/CTASection";
import FAQAccordion from "@/components/shared/FAQAccordion";
import SectionHeading from "@/components/ui/SectionHeading";
import LawyersExplorer from "@/components/lawyers/LawyersExplorer";
import { faqs } from "@/data/faqs";

export const metadata = {
  title: "Find a Lawyer — Verified Advocates Across India",
  description:
    "Search and filter 500+ verified lawyers by practice area, city and rating. Compare experience and fees, then book a confidential consultation online.",
  alternates: { canonical: "/lawyers" },
};

export default function LawyersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Find a Lawyer"
        title="Browse verified advocates"
        subtitle="Filter by practice area, city and rating to find the right expert for your matter — then book in minutes."
        crumbs={[{ label: "Lawyers" }]}
      />

      <section className="bg-cream py-14 sm:py-16">
        <Container>
          <Suspense fallback={<div className="h-32" />}>
            <LawyersExplorer />
          </Suspense>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Choosing a lawyer" />
          <div className="mt-10">
            <FAQAccordion items={faqs.slice(1, 6)} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
