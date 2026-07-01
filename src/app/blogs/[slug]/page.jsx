import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, User, Tag, ArrowLeft } from "lucide-react";
import { blogs, getBlog, getRelatedBlogs } from "@/data/blogs";
import { formatDate } from "@/utils/format";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/blogs/BlogCard";
import CTASection from "@/components/shared/CTASection";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) return {};
  return {
    title: blog.title,
    description: blog.excerpt,
    alternates: { canonical: `/blogs/${blog.slug}` },
    openGraph: {
      type: "article",
      title: blog.title,
      description: blog.excerpt,
      authors: [blog.author],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) notFound();

  const related = getRelatedBlogs(slug);

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-ink-950 pt-32 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />
        <Container className="relative max-w-3xl">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-sm text-ink-300 transition hover:text-gold-400"
          >
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <span className="mt-6 inline-block rounded-full bg-gold-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-300">
            {blog.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl">
            {blog.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-ink-300">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-gold-400" /> {blog.author}
            </span>
            <span>{formatDate(blog.date)}</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-gold-400" /> {blog.readTime} min read
            </span>
          </div>
        </Container>
      </section>

      {/* Article */}
      <section className="bg-cream py-16 sm:py-20">
        <Container className="max-w-3xl">
          <article className="rounded-3xl border border-ink-100 bg-white p-8 sm:p-10">
            {blog.content.map((block, i) => {
              if (block.type === "h2")
                return (
                  <h2
                    key={i}
                    className="mt-8 font-display text-2xl font-bold text-ink-900 first:mt-0"
                  >
                    {block.text}
                  </h2>
                );
              if (block.type === "list")
                return (
                  <ul key={i} className="mt-4 space-y-2.5">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-ink-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              return (
                <p key={i} className="mt-4 leading-relaxed text-ink-600 first:mt-0">
                  {block.text}
                </p>
              );
            })}

            {/* Tags */}
            <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-ink-100 pt-6">
              <Tag className="h-4 w-4 text-ink-400" />
              {blog.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-ink-50 px-3 py-1 text-xs font-medium text-ink-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <Container>
            <SectionHeading align="left" eyebrow="Keep reading" title="Related articles" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((b) => (
                <BlogCard key={b.slug} blog={b} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
