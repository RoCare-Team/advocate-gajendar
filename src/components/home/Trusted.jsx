import { ShieldCheck } from "lucide-react";
import { trustedBy } from "@/data/home";

export default function Trusted() {
  // Duplicate the list so the marquee loops seamlessly at -50%.
  const loop = [...trustedBy, ...trustedBy];

  return (
    <section className="border-y border-ink-100 bg-white py-10">
      <p className="flex items-center justify-center gap-2 text-center text-xs font-semibold uppercase tracking-[0.25em] text-ink-400">
        <ShieldCheck className="h-4 w-4 text-gold-500" />
        Trusted by leading institutions &amp; 15,000+ clients
      </p>

      {/* Marquee */}
      <div className="group relative mt-7 overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee pause-on-hover items-center gap-x-14">
          {loop.map((name, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-lg font-semibold text-ink-300 transition hover:text-gold-600 sm:text-xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
