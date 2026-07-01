"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { howItWorks } from "@/data/home";

const EASE = [0.22, 1, 0.36, 1];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-24">
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute -right-20 top-0 h-72 w-72 animate-float-slow rounded-full bg-gold-400/10 blur-3xl" />
      <Container className="relative">
        <SectionHeading
          tone="light"
          eyebrow="Simple Process"
          title="Get legal help in four easy steps"
          subtitle="From finding the right lawyer to resolving your matter — we make every step effortless."
        />

        <div className="relative mt-16">
          {/* Animated connecting line (desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: EASE }}
            className="absolute left-0 right-0 top-9 hidden h-px origin-left bg-gradient-to-r from-gold-400/10 via-gold-400/50 to-gold-400/10 lg:block"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: EASE }}
                className="group relative"
              >
                {/* Numbered node on the line */}
                <div className="relative mb-6 flex justify-center lg:justify-start">
                  <span className="relative grid h-18 w-18 place-items-center rounded-2xl bg-gold-400 text-ink-950 shadow-[var(--shadow-gold)] transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon name={step.icon} className="h-8 w-8" strokeWidth={2} />
                    <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-ink-950 text-[11px] font-bold text-gold-400 ring-2 ring-gold-400/40">
                      {step.step}
                    </span>
                  </span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition group-hover:border-gold-400/30 group-hover:bg-white/[0.08]">
                  <h3 className="font-display text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
