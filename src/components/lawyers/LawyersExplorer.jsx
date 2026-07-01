"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight, Frown } from "lucide-react";
import { lawyers } from "@/data/lawyers";
import { practiceAreas } from "@/data/practiceAreas";
import { cities } from "@/data/cities";
import LawyerCard from "@/components/lawyers/LawyerCard";

const PER_PAGE = 6;

export default function LawyersExplorer() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [area, setArea] = useState(searchParams.get("area") || "");
  const [city, setCity] = useState("");
  const [sort, setSort] = useState("rating");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = lawyers.filter((l) => {
      const matchesQuery =
        !q ||
        l.name.toLowerCase().includes(q) ||
        l.title.toLowerCase().includes(q) ||
        l.city.toLowerCase().includes(q) ||
        l.practiceAreas.some((a) => a.includes(q));
      const matchesArea = !area || l.practiceAreas.includes(area);
      const matchesCity = !city || l.city === city;
      return matchesQuery && matchesArea && matchesCity;
    });

    list = [...list].sort((a, b) => {
      if (sort === "experience") return b.experience - a.experience;
      if (sort === "fee-low") return a.fee - b.fee;
      if (sort === "fee-high") return b.fee - a.fee;
      return b.rating - a.rating;
    });
    return list;
  }, [query, area, city, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const pageItems = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  // Reset to page 1 whenever a filter changes.
  const onFilter = (setter) => (value) => {
    setter(value);
    setPage(1);
  };

  return (
    <div>
      {/* Controls */}
      <div className="rounded-3xl border border-ink-100 bg-white p-5 shadow-[var(--shadow-card)]">
        <div className="flex items-center gap-3 rounded-2xl bg-cream px-4 py-3">
          <Search className="h-5 w-5 text-ink-400" />
          <input
            value={query}
            onChange={(e) => onFilter(setQuery)(e.target.value)}
            placeholder="Search by name, city or specialisation…"
            className="w-full bg-transparent text-sm text-ink-900 outline-none placeholder:text-ink-400"
          />
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Select
            label="Practice area"
            value={area}
            onChange={(v) => onFilter(setArea)(v)}
            options={[
              { value: "", label: "All Legal Services" },
              ...practiceAreas.map((p) => ({ value: p.slug, label: p.name })),
            ]}
          />
          <Select
            label="City"
            value={city}
            onChange={(v) => onFilter(setCity)(v)}
            options={[
              { value: "", label: "All cities" },
              ...cities.map((c) => ({ value: c.slug, label: c.name })),
            ]}
          />
          <Select
            label="Sort by"
            value={sort}
            onChange={(v) => onFilter(setSort)(v)}
            options={[
              { value: "rating", label: "Top rated" },
              { value: "experience", label: "Most experienced" },
              { value: "fee-low", label: "Fee: low to high" },
              { value: "fee-high", label: "Fee: high to low" },
            ]}
          />
        </div>
      </div>

      {/* Results meta */}
      <div className="mt-8 flex items-center gap-2 text-sm text-ink-500">
        <SlidersHorizontal className="h-4 w-4" />
        Showing <span className="font-semibold text-ink-800">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "lawyer" : "lawyers"}
      </div>

      {/* Grid */}
      {pageItems.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((l) => (
            <LawyerCard key={l.slug} lawyer={l} />
          ))}
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center rounded-3xl border border-dashed border-ink-200 bg-white py-16 text-center">
          <Frown className="h-10 w-10 text-ink-300" />
          <p className="mt-4 font-display text-lg font-bold text-ink-900">
            No lawyers found
          </p>
          <p className="mt-1 text-sm text-ink-500">
            Try adjusting your search or filters.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          <PageBtn
            disabled={current === 1}
            onClick={() => setPage(current - 1)}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </PageBtn>
          {Array.from({ length: totalPages }).map((_, i) => (
            <PageBtn
              key={i}
              active={current === i + 1}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </PageBtn>
          ))}
          <PageBtn
            disabled={current === totalPages}
            onClick={() => setPage(current + 1)}
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </PageBtn>
        </div>
      )}
    </div>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-ink-400">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-800 outline-none transition focus:border-gold-400"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function PageBtn({ children, active, disabled, ...props }) {
  return (
    <button
      disabled={disabled}
      className={`grid h-10 min-w-10 place-items-center rounded-xl px-3 text-sm font-semibold transition ${
        active
          ? "bg-ink-900 text-white"
          : "border border-ink-200 text-ink-600 hover:border-gold-400 hover:text-ink-900"
      } disabled:cursor-not-allowed disabled:opacity-40`}
      {...props}
    >
      {children}
    </button>
  );
}
