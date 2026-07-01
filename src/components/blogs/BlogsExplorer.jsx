"use client";

import { useState, useMemo } from "react";
import { blogs, blogCategories } from "@/data/blogs";
import BlogCard from "@/components/blogs/BlogCard";

export default function BlogsExplorer() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? blogs : blogs.filter((b) => b.category === active)),
    [active]
  );

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2.5">
        {blogCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === cat
                ? "bg-ink-900 text-white"
                : "border border-ink-200 text-ink-600 hover:border-gold-400 hover:text-ink-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
}
