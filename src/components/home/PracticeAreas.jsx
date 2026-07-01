import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { practiceAreas } from "@/data/practiceAreas";

export default function PracticeAreas() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Expertise"
          title="Legal help across every legal services"
          subtitle="From property and family disputes to corporate and tax matters, find a specialist advocate for exactly what you need."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.slice(0, 8).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                href={`/practice-areas/${p.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-200 hover:shadow-[var(--shadow-soft)]"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink-50 text-ink-700 transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-gold-400 group-hover:text-ink-950">
                  <Icon name={p.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                  {p.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                  {p.short}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-600 transition group-hover:gap-2">
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/practice-areas" variant="outline" size="lg">
            View all Legal Services <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
