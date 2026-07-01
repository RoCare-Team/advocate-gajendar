import { Star } from "lucide-react";

// Rounded 5-star display. `value` is a float like 4.8.
export default function StarRating({ value = 5, size = "h-4 w-4", className = "" }) {
  const rounded = Math.round(value);
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${size} ${
            i < rounded ? "fill-gold-400 text-gold-400" : "fill-ink-100 text-ink-200"
          }`}
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}
