import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

// Dark hero band for interior pages. `crumbs` = [{ label, href? }].
export default function PageHeader({ eyebrow, title, subtitle, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-32 pb-16 text-white sm:pt-36 sm:pb-20">
      <div className="absolute inset-0 hero-grid opacity-40" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-ink-600/40 blur-3xl" />

      <Container className="relative">
        {crumbs.length > 0 && (
          <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-ink-300">
            <Link href="/" className="hover:text-gold-400">
              Home
            </Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 text-ink-500" />
                {c.href ? (
                  <Link href={c.href} className="hover:text-gold-400">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-gold-400">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <Badge tone="light" className="mb-4">
            {eyebrow}
          </Badge>
        )}
        <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
