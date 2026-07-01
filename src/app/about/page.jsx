import { Target, Eye, Heart, ShieldCheck, Scale } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHeader from "@/components/shared/PageHeader";
import CTASection from "@/components/shared/CTASection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats } from "@/data/home";
import { SITE } from "@/constants/site";

export const metadata = {
  title: "About Us — Making Legal Help Accessible to Everyone",
  description: `Learn about ${SITE.name}, our mission to make quality legal help accessible, affordable and transparent for every Indian.`,
  alternates: { canonical: "/about" },
};

const values = [
  { icon: "ShieldCheck", title: "Trust & Verification", text: "Every advocate is vetted before joining. We stake our name on their credibility." },
  { icon: "Heart", title: "Empathy First", text: "Legal problems are stressful. We lead with compassion and clarity, never jargon." },
  { icon: "Scale", title: "Fairness & Access", text: "Quality legal help shouldn't be a privilege. We make it affordable for everyone." },
  { icon: "Eye", title: "Transparency", text: "Upfront pricing, honest advice and no hidden charges — ever." },
];

const ICONS = { ShieldCheck, Heart, Scale, Eye };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Making legal help accessible to every Indian"
        subtitle={`${SITE.name} was founded on a simple belief: everyone deserves clear, trustworthy legal guidance — without the intimidation, opacity or cost that usually comes with it.`}
        crumbs={[{ label: "About" }]}
      />

      {/* Mission / Vision */}
      <section className="bg-cream py-16 sm:py-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-ink-100 bg-white p-8">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-400 text-ink-950">
              <Target className="h-7 w-7" />
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold text-ink-900">
              Our Mission
            </h2>
            <p className="mt-3 leading-relaxed text-ink-600">
              To connect every person and business in India with the right legal expert
              — quickly, affordably and confidentially. We remove the friction, the
              guesswork and the fear from seeking legal help.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl border border-ink-100 bg-white p-8">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink-900 text-gold-400">
              <Eye className="h-7 w-7" />
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold text-ink-900">
              Our Vision
            </h2>
            <p className="mt-3 leading-relaxed text-ink-600">
              A future where no one hesitates to protect their rights because of cost,
              confusion or lack of access — where quality legal help is only a click
              away, in every city and every language.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <Container>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-ink-100 bg-cream p-6 text-center"
              >
                <p className="font-display text-3xl font-bold text-ink-900">
                  <AnimatedCounter value={s.value} />
                </p>
                <p className="mt-1 text-sm text-ink-500">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What We Stand For"
            title="The values that guide us"
            subtitle="Every decision we make is measured against these principles."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = ICONS[v.icon];
              return (
                <Reveal key={v.title} delay={i * 0.05}>
                  <div className="h-full rounded-3xl border border-ink-100 bg-white p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-100 text-gold-600">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
