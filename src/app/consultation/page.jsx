import { ShieldCheck, Clock, Lock, BadgeIndianRupee } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/shared/PageHeader";
import ConsultationForm from "@/components/forms/ConsultationForm";

export const metadata = {
  title: "Book a Legal Consultation",
  description:
    "Book a confidential consultation with a verified advocate. Choose your practice area, city and preferred time — it takes under two minutes.",
  alternates: { canonical: "/consultation" },
};

const perks = [
  { icon: ShieldCheck, title: "Verified advocates", text: "Every lawyer is vetted and experienced." },
  { icon: Clock, title: "Quick booking", text: "Confirm your slot in under two minutes." },
  { icon: Lock, title: "100% confidential", text: "Protected by lawyer–client privilege." },
  { icon: BadgeIndianRupee, title: "Transparent fees", text: "Know the exact cost upfront." },
];

export default function ConsultationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book Now"
        title="Book your consultation"
        subtitle="Tell us a little about your matter and preferred time. We'll match you with the right verified advocate and confirm your slot."
        crumbs={[{ label: "Consultation" }]}
      />

      <section className="bg-cream py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          {/* Perks */}
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">
              Why book with us
            </h2>
            <div className="mt-6 space-y-4">
              {perks.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink-900 text-gold-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink-900">{p.title}</p>
                      <p className="text-sm text-ink-500">{p.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div>
            <ConsultationForm />
          </div>
        </Container>
      </section>
    </>
  );
}
