import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { whyChooseUs } from "@/data/home";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Legal help made simple, safe and transparent"
          subtitle="We remove the friction from finding good legal help — so you can focus on resolving your matter with confidence."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="group h-full rounded-3xl border border-ink-100 bg-cream p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-200 hover:bg-white hover:shadow-[var(--shadow-soft)]">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink-900 text-gold-400 transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-gold-400 group-hover:text-ink-950">
                  <Icon name={f.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
