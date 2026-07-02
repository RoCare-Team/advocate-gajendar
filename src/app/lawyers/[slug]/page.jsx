import { notFound } from "next/navigation";
import Link from "next/link";
import {
  BadgeCheck,
  MapPin,
  Briefcase,
  Award,
  GraduationCap,
  Languages,
  Gavel,
  Check,
} from "lucide-react";
import { lawyers, getLawyer } from "@/data/lawyers";
import { getCity } from "@/data/cities";
import { getPracticeArea } from "@/data/practiceAreas";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Avatar from "@/components/shared/Avatar";
import StarRating from "@/components/shared/StarRating";
import LawyerCard from "@/components/lawyers/LawyerCard";
import CTASection from "@/components/shared/CTASection";

export function generateStaticParams() {
  return lawyers.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const lawyer = getLawyer(slug);
  if (!lawyer) return {};
  const city = getCity(lawyer.city);
  return {
    title: `${lawyer.name} — ${lawyer.title}, ${city?.name}`,
    description: `${lawyer.bio.slice(0, 155)}`,
    alternates: { canonical: `/lawyers/${lawyer.slug}` },
  };
}

export default async function LawyerPage({ params }) {
  const { slug } = await params;
  const lawyer = getLawyer(slug);
  if (!lawyer) notFound();

  const city = getCity(lawyer.city);
  const areas = lawyer.practiceAreas.map((a) => getPracticeArea(a)).filter(Boolean);
  const related = lawyers
    .filter(
      (l) =>
        l.slug !== lawyer.slug &&
        (l.city === lawyer.city ||
          l.practiceAreas.some((a) => lawyer.practiceAreas.includes(a)))
    )
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 pt-32 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />
        <Container className="relative">
          <nav className="mb-6 text-xs text-ink-300">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="px-1.5 text-ink-500">/</span>
            <Link href="/lawyers" className="hover:text-gold-400">Lawyers</Link>
            <span className="px-1.5 text-ink-500">/</span>
            <span className="text-gold-400">{lawyer.name}</span>
          </nav>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Avatar
              name={lawyer.name}
              accent={lawyer.accent}
              size="h-24 w-24"
              text="text-3xl"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h1 className="font-display text-3xl font-bold sm:text-4xl">
                  {lawyer.name}
                </h1>
                {lawyer.verified && <BadgeCheck className="h-6 w-6 text-gold-400" />}
              </div>
              <p className="mt-1 text-ink-200">{lawyer.title}</p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-ink-300">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-gold-400" /> {city?.name}, {city?.state}
                </span>
                <span className="flex items-center gap-1.5">
                  <Briefcase className="h-4 w-4 text-gold-400" /> {lawyer.experience} yrs experience
                </span>
                <span className="flex items-center gap-1.5">
                  <StarRating value={lawyer.rating} size="h-4 w-4" />
                  {lawyer.rating} ({lawyer.reviewsCount})
                </span>
              </div>
            </div>
            <div className="shrink-0">
              <Button href="/consultation" variant="gold" size="lg">
                Book Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="bg-cream py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-8">
            <Reveal className="rounded-3xl border border-ink-100 bg-white p-7">
              <h2 className="font-display text-xl font-bold text-ink-900">About</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{lawyer.bio}</p>
            </Reveal>

            <Reveal className="grid gap-4 sm:grid-cols-3">
              <Stat icon={Award} value={`${lawyer.cases}+`} label="Cases handled" />
              <Stat icon={Briefcase} value={`${lawyer.experience} yrs`} label="Experience" />
              <Stat icon={BadgeCheck} value={lawyer.rating} label="Client rating" />
            </Reveal>

            <Reveal className="rounded-3xl border border-ink-100 bg-white p-7">
              <h2 className="flex items-center gap-2 font-display text-xl font-bold text-ink-900">
                <Gavel className="h-5 w-5 text-gold-500" /> Legal Services
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {areas.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/legal-services/${a.slug}`}
                    className="rounded-full bg-ink-50 px-3.5 py-1.5 text-sm font-medium text-ink-700 transition hover:bg-gold-100 hover:text-gold-700"
                  >
                    {a.name}
                  </Link>
                ))}
              </div>
            </Reveal>

            <Reveal className="rounded-3xl border border-ink-100 bg-white p-7">
              <h2 className="flex items-center gap-2 font-display text-xl font-bold text-ink-900">
                <GraduationCap className="h-5 w-5 text-gold-500" /> Education &amp; Courts
              </h2>
              <ul className="mt-4 space-y-2.5">
                {[...lawyer.education, ...lawyer.courts].map((e) => (
                  <li key={e} className="flex items-start gap-2.5 text-sm text-ink-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" strokeWidth={2.5} />
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Reviews */}
            <Reveal>
              <h2 className="font-display text-xl font-bold text-ink-900">
                Client Reviews
              </h2>
              <div className="mt-4 space-y-4">
                {lawyer.reviews.map((r, i) => (
                  <div key={i} className="rounded-3xl border border-ink-100 bg-white p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-ink-900 text-sm font-semibold text-gold-400">
                          {r.name[0]}
                        </span>
                        <div>
                          <p className="font-semibold text-ink-900">{r.name}</p>
                          <p className="text-xs text-ink-400">{r.date}</p>
                        </div>
                      </div>
                      <StarRating value={r.rating} size="h-4 w-4" />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-600">“{r.text}”</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-24 rounded-3xl border border-ink-100 bg-white p-7 shadow-[var(--shadow-card)]">
              <p className="text-sm text-ink-500">Consultation fee</p>
              <p className="font-display text-4xl font-bold text-ink-900">₹{lawyer.fee}</p>
              <p className="mt-1 text-xs text-ink-400">Confidential · 30–45 min session</p>
              <Button href="/consultation" variant="gold" className="mt-6 w-full">
                Book Consultation
              </Button>

              <div className="mt-6 border-t border-ink-100 pt-5">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-ink-900">
                  <Languages className="h-4 w-4 text-gold-500" /> Languages
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {lawyer.languages.map((lang) => (
                    <span
                      key={lang}
                      className="rounded-full bg-ink-50 px-3 py-1 text-xs font-medium text-ink-600"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <Container>
            <SectionHeading align="left" eyebrow="Related" title="Similar advocates" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((l) => (
                <LawyerCard key={l.slug} lawyer={l} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection title={`Book a consultation with ${lawyer.name}`} />
    </>
  );
}

function Stat({ icon: Icon, value, label }) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-5 text-center">
      <Icon className="mx-auto h-6 w-6 text-gold-500" />
      <p className="mt-2 font-display text-2xl font-bold text-ink-900">{value}</p>
      <p className="text-xs text-ink-400">{label}</p>
    </div>
  );
}
