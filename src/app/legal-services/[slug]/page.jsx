import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, MapPin, ArrowUpRight } from "lucide-react";
import { practiceAreas, getPracticeArea } from "@/data/practiceAreas";
import { getLawyersByPracticeArea } from "@/data/lawyers";
import { cities, cityServices } from "@/data/cities";
import { faqs } from "@/data/faqs";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHeader from "@/components/shared/PageHeader";
import LawyerCard from "@/components/lawyers/LawyerCard";
import FAQAccordion from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return {};
  return {
    title: `${area.name} — Consult a Verified ${area.name} Online`,
    description: `${area.overview.slice(0, 155)}`,
    alternates: { canonical: `/legal-services/${area.slug}` },
  };
}

export default async function PracticeAreaPage({ params }) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const relatedLawyers = getLawyersByPracticeArea(slug).slice(0, 3);
  const relatedService = cityServices.find((s) => s.practiceArea === slug);

  return (
    <>
      <PageHeader
        eyebrow={area.tagline}
        title={area.name}
        subtitle={area.short}
        crumbs={[
          { label: "Legal Services", href: "/legal-services" },
          { label: area.name },
        ]}
      />

      <section className="bg-cream py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          {/* Main */}
          <div>
            <Reveal>
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gold-400 text-ink-950">
                <Icon name={area.icon} className="h-8 w-8" />
              </span>
              <h2 className="mt-6 font-display text-3xl font-bold text-ink-900">
                About {area.name} Services
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-600">
                {area.overview}
              </p>
            </Reveal>

            <Reveal className="mt-10">
              <h3 className="font-display text-xl font-bold text-ink-900">
                What we help with
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {area.services.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 rounded-2xl border border-ink-100 bg-white p-4"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-100 text-gold-600">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-ink-700">{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-3xl border border-ink-100 bg-white p-7 shadow-[var(--shadow-card)]">
              <p className="text-sm text-ink-500">Consultations starting from</p>
              <p className="font-display text-4xl font-bold text-ink-900">
                ₹{area.startingPrice}
              </p>
              <p className="mt-1 text-xs text-ink-400">
                Transparent pricing · No hidden charges
              </p>
              <Button href="/consultation" variant="gold" className="mt-6 w-full">
                Book Consultation
              </Button>
              <Button
                href="/lawyers"
                variant="outline"
                className="mt-3 w-full"
              >
                Browse {area.name}s
              </Button>
            </div>

            {relatedService && (
              <div className="rounded-3xl border border-ink-100 bg-white p-7">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink-900">
                  <MapPin className="h-5 w-5 text-gold-500" /> {area.name} by city
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cities.slice(0, 8).map((c) => (
                    <Link
                      key={c.slug}
                      href={`/${relatedService.slug}/${c.slug}`}
                      className="rounded-full bg-ink-50 px-3 py-1.5 text-xs font-medium text-ink-600 transition hover:bg-gold-100 hover:text-gold-700"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </Container>
      </section>

      {/* Related lawyers */}
      {relatedLawyers.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <Container>
            <SectionHeading
              align="left"
              eyebrow="Specialists"
              title={`Top ${area.name}s`}
              className="max-w-xl"
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedLawyers.map((l) => (
                <LawyerCard key={l.slug} lawyer={l} />
              ))}
            </div>
            <div className="mt-10">
              <Button href="/lawyers" variant="outline">
                View all lawyers <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </Container>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="mt-10">
            <FAQAccordion items={faqs.slice(0, 5)} />
          </div>
        </Container>
      </section>

      <CTASection title={`Need a ${area.name}?`} />
    </>
  );
}
