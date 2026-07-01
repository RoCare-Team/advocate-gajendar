// Small pill label, e.g. an eyebrow above section headings.
export default function Badge({ children, className = "", tone = "gold" }) {
  const tones = {
    gold: "bg-gold-100 text-gold-700 ring-1 ring-gold-200",
    dark: "bg-ink-100 text-ink-700 ring-1 ring-ink-200",
    light: "bg-white/10 text-gold-200 ring-1 ring-white/15",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
