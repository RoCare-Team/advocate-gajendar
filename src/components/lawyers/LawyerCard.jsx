import Link from "next/link";
import { BadgeCheck, MapPin, Briefcase, ArrowUpRight } from "lucide-react";
import { getCity } from "@/data/cities";
import { getPracticeArea } from "@/data/practiceAreas";
import Avatar from "@/components/shared/Avatar";
import StarRating from "@/components/shared/StarRating";

export default function LawyerCard({ lawyer }) {
  const city = getCity(lawyer.city);
  const areas = lawyer.practiceAreas
    .map((a) => getPracticeArea(a)?.name)
    .filter(Boolean)
    .slice(0, 3);

  return (
    <Link
      href={`/lawyers/${lawyer.slug}`}
      className="group flex flex-col rounded-3xl border border-ink-100 bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-200 hover:shadow-[var(--shadow-soft)]"
    >
      <div className="flex items-start gap-4">
        <Avatar name={lawyer.name} accent={lawyer.accent} size="h-16 w-16" text="text-xl" />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate font-display text-lg font-bold text-ink-900">
              {lawyer.name}
            </h3>
            {lawyer.verified && (
              <BadgeCheck className="h-4 w-4 shrink-0 text-gold-500" />
            )}
          </div>
          <p className="truncate text-sm text-ink-500">{lawyer.title}</p>
          <div className="mt-1.5 flex items-center gap-1 text-xs text-ink-400">
            <MapPin className="h-3.5 w-3.5" />
            {city?.name}, {city?.state}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <StarRating value={lawyer.rating} size="h-3.5 w-3.5" />
        <span className="text-sm font-semibold text-ink-800">{lawyer.rating}</span>
        <span className="text-xs text-ink-400">({lawyer.reviewsCount})</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {areas.map((a) => (
          <span
            key={a}
            className="rounded-full bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-600"
          >
            {a}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4">
        <div className="flex items-center gap-1.5 text-sm text-ink-600">
          <Briefcase className="h-4 w-4 text-gold-500" />
          {lawyer.experience} yrs exp
        </div>
        <div className="text-right">
          <span className="block text-xs text-ink-400">from</span>
          <span className="font-display text-base font-bold text-ink-900">
            ₹{lawyer.fee}
          </span>
        </div>
      </div>

      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-600 transition group-hover:gap-2">
        View Profile <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
