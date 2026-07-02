"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Scale } from "lucide-react";
import { NAV_LINKS, SITE } from "@/constants/site";
import { practiceAreas } from "@/data/practiceAreas";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobileSub, setMobileSub] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close any open menus when the user navigates via a link.
  const closeMenus = () => {
    setMobileOpen(false);
    setMega(false);
  };

  // On non-home routes there's no dark hero, so use the solid shell immediately.
  const solid = scrolled || pathname !== "/";
  const shell = solid
    ? "bg-white/90 backdrop-blur-md shadow-[var(--shadow-card)] text-ink-800"
    : "bg-transparent text-white";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${shell}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link href="/" onClick={closeMenus} className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-400 text-ink-950 shadow-[var(--shadow-gold)]">
            <Scale className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            {SITE.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) =>
            link.hasMega ? (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => setMega(true)}
                onMouseLeave={() => setMega(false)}
              >
                <Link
                  href={link.href}
                  onClick={closeMenus}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition hover:text-gold-400"
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
                {mega && <MegaMenu onNavigate={closeMenus} />}
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition hover:text-gold-400 ${
                    pathname === link.href ? "text-gold-400" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden lg:flex">
          <Button href="/consultation" variant="gold" size="sm">
            Book Consultation
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-ink-100 bg-white text-ink-800 lg:hidden">
          <div className="mx-auto max-w-7xl px-5 py-4">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) =>
                link.hasMega ? (
                  <li key={link.href} className="border-b border-ink-100">
                    <button
                      onClick={() => setMobileSub((v) => !v)}
                      className="flex w-full items-center justify-between py-3 text-sm font-medium"
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition ${mobileSub ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileSub && (
                      <ul className="grid grid-cols-2 gap-1 pb-3">
                        {practiceAreas.map((p) => (
                          <li key={p.slug}>
                            <Link
                              href={`/legal-services/${p.slug}`}
                              onClick={closeMenus}
                              className="block rounded-lg px-2 py-1.5 text-xs text-ink-500 hover:bg-ink-50"
                            >
                              {p.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={link.href} className="border-b border-ink-100">
                    <Link
                      href={link.href}
                      onClick={closeMenus}
                      className="block py-3 text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <Button
              href="/consultation"
              variant="gold"
              className="mt-4 w-full"
              onClick={closeMenus}
            >
              Book Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaMenu({ onNavigate }) {
  return (
    <div className="absolute left-1/2 top-full z-50 w-[720px] -translate-x-1/2 pt-4">
      <div className="rounded-2xl border border-ink-100 bg-white p-5 text-ink-800 shadow-[var(--shadow-soft)]">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Legal Services
          </p>
          <Link
            href="/legal-services"
            onClick={onNavigate}
            className="text-xs font-semibold text-ink-500 hover:text-gold-600"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {practiceAreas.slice(0, 12).map((p) => (
            <Link
              key={p.slug}
              href={`/legal-services/${p.slug}`}
              onClick={onNavigate}
              className="group flex items-center gap-2.5 rounded-xl p-2.5 transition hover:bg-cream"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink-50 text-ink-700 transition group-hover:bg-gold-100 group-hover:text-gold-700">
                <Icon name={p.icon} className="h-4 w-4" />
              </span>
              <span className="text-xs font-medium leading-tight">{p.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
