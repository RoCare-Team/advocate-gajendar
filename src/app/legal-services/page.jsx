import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { practiceAreas } from "@/data/practiceAreas";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import PageHeader from "@/components/shared/PageHeader";
import CTASection from "@/components/shared/CTASection";

export const metadata = {
  title: "Legal Services — Expert Lawyers for Every Legal Need",
  description:
    "Explore 15+  Legal Services — property, family, criminal, corporate, tax, GST, trademark and more. Find a verified specialist advocate for your matter.",
  alternates: { canonical: "/legal-services" },
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Expertise"
        title="Legal Services"
        subtitle="Whatever your legal matter, we have a verified specialist for it. Explore our Legal Services and connect with the right advocate."
        crumbs={[{ label: "Legal Services" }]}
      />

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.05}>
                <Link
                  href={`/legal-services/${p.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-200 hover:shadow-[var(--shadow-soft)]"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink-50 text-ink-700 transition group-hover:bg-gold-400 group-hover:text-ink-950">
                      <Icon name={p.icon} className="h-7 w-7" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink-900">
                        {p.name}
                      </h3>
                      <p className="text-xs font-medium text-gold-600">
                        {p.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-500">
                    {p.short}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4">
                    <span className="text-sm text-ink-500">
                      from{" "}
                      <span className="font-display font-bold text-ink-900">
                        ₹{p.startingPrice}
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold-600 transition group-hover:gap-2">
                      Explore <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
