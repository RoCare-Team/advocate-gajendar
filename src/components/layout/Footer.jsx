import Link from "next/link";
import { Scale, Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { SITE, FOOTER_LINKS, SOCIALS } from "@/constants/site";
import { practiceAreas } from "@/data/practiceAreas";
import { cityServices, cities } from "@/data/cities";
import Container from "@/components/ui/Container";

const SOCIAL_ICONS = {
  Facebook: FaFacebookF,
  Twitter: FaXTwitter,
  Linkedin: FaLinkedinIn,
  Instagram: FaInstagram,
  Youtube: FaYoutube,
};

export default function Footer() {
  const year = 2026;
  return (
    <footer className="bg-ink-950 text-ink-200">
      {/* Top CTA strip */}
      <div className="border-b border-white/10">
        <Container className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">
              Need legal help today?
            </h3>
            <p className="mt-1 text-sm text-ink-300">
              Talk to a verified advocate in minutes — confidential and affordable.
            </p>
          </div>
          <Link
            href="/consultation"
            className="rounded-full bg-gold-400 px-8 py-3.5 text-sm font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition hover:-translate-y-0.5 hover:bg-gold-300"
          >
            Book a Consultation
          </Link>
        </Container>
      </div>

      <Container className="grid grid-cols-2 gap-8 py-14 md:grid-cols-3 lg:grid-cols-6">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-2">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-400 text-ink-950">
              <Scale className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="font-display text-xl font-bold text-white">
              {SITE.name}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">
            {SITE.description}
          </p>
          <div className="mt-5 flex gap-2.5">
            {SOCIALS.map((s) => {
              const I = SOCIAL_ICONS[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-ink-200 transition hover:bg-gold-400 hover:text-ink-950"
                >
                  <I className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <FooterCol title="Company" links={FOOTER_LINKS.company} />

        <FooterCol
          title="Legal Services"
          links={practiceAreas.slice(0, 6).map((p) => ({
            label: p.name,
            href: `/practice-areas/${p.slug}`,
          }))}
        />

        <FooterCol
          title="Top Cities"
          links={cities.slice(0, 6).map((c) => ({
            label: `${cityServices[0].name}, ${c.name}`,
            href: `/${cityServices[0].slug}/${c.slug}`,
          }))}
        />

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-ink-300">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{SITE.phone}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{SITE.email}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{SITE.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-400 sm:flex-row">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {FOOTER_LINKS.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-gold-400">
                {l.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h4>
      <ul className="space-y-2.5 text-sm text-ink-300">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="transition hover:text-gold-400">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
