// Initials avatar on a gradient — no external images required.
export default function Avatar({ name, accent = "from-ink-700 to-ink-900", size = "h-14 w-14", text = "text-lg" }) {
  const initials = name
    .replace(/^Adv\.?\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <span
      className={`grid ${size} shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${accent} font-display ${text} font-bold text-white shadow-[var(--shadow-card)]`}
    >
      {initials}
    </span>
  );
}
