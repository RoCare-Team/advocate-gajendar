import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { Phone } from "lucide-react";
import { SITE } from "@/constants/site";

// Reusable "book a consultation" call-to-action band.
export default function CTASection({
  title = "Ready to resolve your legal matter?",
  subtitle = "Book a confidential consultation with a verified advocate today. Fast, secure and transparent.",
  primary = { label: "Book Consultation", href: "/consultation" },
}) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-14 text-center text-white shadow-[var(--shadow-soft)] sm:px-12 sm:py-16">
          <div className="absolute inset-0 hero-grid opacity-30" />
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-400/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-gold-400/10 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold leading-tight text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base text-ink-200">{subtitle}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={primary.href} variant="gold" size="lg">
                {primary.label}
              </Button>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
