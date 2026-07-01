import Link from "next/link";

// Polymorphic button: renders a Next <Link> when `href` is given, else a <button>.
const VARIANTS = {
  gold: "bg-gold-400 text-ink-950 hover:bg-gold-300 shadow-[var(--shadow-gold)]",
  dark: "bg-ink-900 text-white hover:bg-ink-800",
  outline:
    "border border-ink-200 bg-white text-ink-800 hover:border-gold-400 hover:text-ink-950",
  ghost: "text-ink-700 hover:bg-ink-100",
  light:
    "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  href,
  variant = "gold",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
