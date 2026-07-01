import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import StarRating from "@/components/shared/StarRating";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by thousands across India"
          subtitle="Real stories from clients who found the right legal help at the right time."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <figure className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-8 shadow-[var(--shadow-card)]">
                <Quote className="h-8 w-8 text-gold-300" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">
                  “{t.text}”
                </blockquote>
                <StarRating value={t.rating} className="mt-6" />
                <figcaption className="mt-4 flex items-center gap-3 border-t border-ink-100 pt-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink-900 font-semibold text-gold-400">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink-900">{t.name}</span>
                    <span className="block text-xs text-ink-400">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
