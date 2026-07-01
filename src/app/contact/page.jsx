import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/shared/PageHeader";
import ContactForm from "@/components/forms/ContactForm";
import { SITE } from "@/constants/site";

export const metadata = {
  title: "Contact Us",
  description: `Get in touch with the ${SITE.name} team. We're here to help you find the right legal support.`,
  alternates: { canonical: "/contact" },
};

const cards = [
  { icon: Phone, label: "Call us", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email us", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, label: "Visit us", value: SITE.address },
  { icon: Clock, label: "Working hours", value: SITE.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="We'd love to help"
        subtitle="Have a question or need guidance finding the right lawyer? Reach out and our team will respond within one business day."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="bg-cream py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Info */}
          <div className="space-y-4">
            {cards.map((c) => {
              const Icon = c.icon;
              const inner = (
                <div className="flex items-start gap-4 rounded-3xl border border-ink-100 bg-white p-6 transition hover:border-gold-200">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold-100 text-gold-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                      {c.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-ink-800">{c.value}</p>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
