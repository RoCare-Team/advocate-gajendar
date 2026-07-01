import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";
import { formatDate } from "@/utils/format";

export default function BlogCard({ blog, featured = false }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-soft)]"
    >
      {/* Cover — gradient with category as visual anchor */}
      <div
        className={`relative flex ${
          featured ? "h-64" : "h-44"
        } items-end bg-gradient-to-br ${blog.accent} p-6`}
      >
        <span className="absolute right-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
          {blog.category}
        </span>
        <span className="font-display text-5xl font-bold text-white/25">
          {blog.category[0]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 text-xs text-ink-400">
          <span>{formatDate(blog.date)}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {blog.readTime} min read
          </span>
        </div>
        <h3
          className={`font-display font-bold text-ink-900 transition group-hover:text-gold-600 ${
            featured ? "text-2xl" : "text-lg"
          }`}
        >
          {blog.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-500">
          {blog.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-medium text-ink-600">{blog.author}</span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold-600 transition group-hover:gap-2">
            Read <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
