import Container from "@/components/ui/Container";
import PageHeader from "@/components/shared/PageHeader";
import CTASection from "@/components/shared/CTASection";
import BlogsExplorer from "@/components/blogs/BlogsExplorer";

export const metadata = {
  title: "Legal Blog — Guides, Rights & Practical Advice",
  description:
    "Plain-English legal guides on property, family, criminal, corporate, consumer and tax matters. Understand your rights and options.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal Insights"
        title="The Legal Blog"
        subtitle="Practical, easy-to-understand guides to help you navigate India's legal system with confidence."
        crumbs={[{ label: "Blogs" }]}
      />

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <BlogsExplorer />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
